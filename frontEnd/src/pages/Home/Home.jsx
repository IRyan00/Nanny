import { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel.jsx";
import WcmInfos from "../../components/Wcminfos/WcmInfos.jsx";
import { FaArrowDown } from "react-icons/fa";
import StaticAbout from "../../components/StaticAbout/StaticAbout.jsx";
import Fquestions from "../../components/Fquestions/Fquestions.jsx";

const Home = () => {
  useEffect(() => {
    document.title = "Accueil";
  }, []);

  return (
    <>
      <Carousel />

      <h1 className="text-center my-5 display-4 py-5">
        {" "}
        <a
          href="#presentation"
          aria-label="Descendre dans la page pour en découvrir plus"
          className="text-black"
        >
          <FaArrowDown size={25} />
        </a>
      </h1>

      <StaticAbout />

      <WcmInfos />

      {/* <hr className="my-5 col-10 mx-auto" /> */}

      <Fquestions />

      <div className="justify-content-center"></div>
    </>
  );
};

export default Home;
