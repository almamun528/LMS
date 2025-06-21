import Footer from "../Footer/Footer";
import Banner from "./Banner";
import EduGuide from "./EduGuide";
import FAQ from "./FAQ";
import GridSection from "./GridSection";
import Trophy from "./Trophy";

function AboutUs() {
  return (
    <section>
      <Banner />
      {/* footer */}

      <GridSection />
      <EduGuide/>
      <Trophy />
      <FAQ />
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default AboutUs;
