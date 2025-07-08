import Stripe from "stripe";
import Purchase from "../models/Purchase.js";
import User from "../models/User.js";
import Course from "../models/Course.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    // Use the instance to verify the event
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      process.env.WEB_HOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      const purchaseId = session.metadata?.purchaseId;
      if (!purchaseId) {
        console.error("Missing purchaseId in metadata");
        return res.status(400).send("Missing purchaseId");
      }

      // Update Purchase status
      const purchase = await Purchase.findById(purchaseId);
      if (!purchase) return res.status(404).send("Purchase not found");

      purchase.status = "completed";
      await purchase.save();

      // Enroll user to course
      const user = await User.findById(purchase.userId);
      const course = await Course.findById(purchase.courseId);

      if (!user || !course)
        return res.status(404).send("User or Course not found");

      // Add course to user's enrolled list and vice versa
      if (!user.enrolledCourses.includes(course._id)) {
        user.enrolledCourses.push(course._id);
        await user.save();
      }

      if (!course.enrolledStudents.includes(user._id)) {
        course.enrolledStudents.push(user._id);
        await course.save();
      }

      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;

      const sessionList = await stripe.checkout.sessions.list({
        payment_intent: paymentIntent.id,
      });

      const session = sessionList.data[0];
      const purchaseId = session.metadata?.purchaseId;

      const purchase = await Purchase.findById(purchaseId);
      if (purchase) {
        purchase.status = "failed";
        await purchase.save();
      }

      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.status(200).json({ received: true });
};
