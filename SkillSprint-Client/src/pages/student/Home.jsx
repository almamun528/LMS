import Slider from "../../component/Slider/Slider";
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
    </section>
  );
};

export default Home;
