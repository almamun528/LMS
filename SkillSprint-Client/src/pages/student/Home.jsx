import Slider from "../../component/Slider/Slider";
import CoursesSection from "../../component/student/CoursesSection";
import SearchBar from "../../component/student/SearchBar";
// import useUser from "../../hook/useUser";

const Home = () => {
  // const user = useUser();
  // console.log("current user----> ", user);
  return (
    <section>
      <Slider />
      <br />
      <SearchBar/>
      <br />
      <CoursesSection/>
    </section>
  );
};

export default Home;
