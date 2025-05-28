import Footer from "../../component/Footer/Footer";
import Slider from "../../component/Slider/Slider";
import WhyChooseUs from "../../component/StaticSection/WhyChooseUs";
import Companies from "../../component/student/Companies";
import CoursesSection from "../../component/student/CoursesSection";
import Testimonials from "../../component/student/Testimonials";

const Home = () => {
  return (
    <section>
      <Slider />
      <br />
      <Companies/>
 
      <CoursesSection />
   
      <Testimonials/>
   
      <WhyChooseUs/>
    <Footer/>
    </section>
  );
};
export default Home;
