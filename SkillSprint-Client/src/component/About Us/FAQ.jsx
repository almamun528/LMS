import React from 'react'

const FAQ = () => {
  return (
    <section className="my-10">
      <h2 className="text-xl md:text-2xl text-center mb-5 text-purple-950 font-semibold">
        Common Burning questions
      </h2>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          What is Skill Sprint?
        </div>
        <div className="collapse-content text-sm ">
          Skill Sprint is an online learning platform designed to help you
          master new skills through high-quality courses, interactive content,
          and expert-led lessons — similar to platforms like Udemy and Coursera.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Who can join the courses?
        </div>
        <div className="collapse-content text-sm">
          Anyone with a desire to learn can join! Whether you're a student, job
          seeker, working professional, or entrepreneur — our courses are
          designed for all levels.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Are the courses free or paid?
        </div>
        <div className="collapse-content text-sm">
          We offer both free and premium courses. Each course page will clearly
          mention the pricing and what’s included.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Do I get a certificate after completing a course?
        </div>
        <div className="collapse-content text-sm">
          Yes, upon successfully completing a course, you'll receive a
          downloadable certificate of completion which you can share on your
          resume or LinkedIn profile.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I access the courses on mobile?
        </div>
        <div className="collapse-content text-sm">
          Absolutely! Our platform is mobile-friendly, so you can learn anytime,
          anywhere — on your phone, tablet, or desktop.
        </div>
      </div>
    </section>
  );
}

export default FAQ
