import BMI from "../components/BMI";
import ExerciseList from "../components/ExerciseList";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import styles from "../style";

const Home = () => {
  return (
    <>
      <div className="absolute top-0 right-0 w-full">
        <Hero />
        <div className={`bg-[#fcfdff] flex justify-center items-center`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`${styles.paddingX}`}>
              <SearchBox />
              <ExerciseList />
              <BMI />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
