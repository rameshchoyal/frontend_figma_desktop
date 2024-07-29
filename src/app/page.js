import FertilityKit from "../components/FertilityKit";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Predict from "../components/Predict";
import Question from "../components/Question";
import Reviews from "../components/Reviews";
import Steps from "../components/Steps";
import WhyInito from "../components/WhyInito";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <FertilityKit />
      <Predict />
      <WhyInito />
      <Steps />
      <Reviews />
      <Question />
      <Footer />
    </div>
  );
}
