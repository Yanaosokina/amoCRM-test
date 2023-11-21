import React from "react";
import Header from "./components/header/Header.tsx";
import MainSection from "./components/main-section/MainSection.jsx";
import Footer from "./components/footer/Footer.jsx";
import PurpleBall from "../src/assets/icons/purple-ball.svg";
import RedBall from "../src/assets/icons/red-ball.svg";
import SmallRedBall from "../src/assets/icons/red-ball-small.svg";

import "./App.scss";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 360 });
  return (
    <div className="app">
      <Header />
      <MainSection />
      <Footer />
      {!isMobile && (
        <>
          <img className="app__purple-ball" src={PurpleBall} alt="purple-bal" />
          <img className="app__red-ball" src={RedBall} alt="red-bal" />
          <img className="app__small-red-ball" src={SmallRedBall} alt="small-red-bal" />
        </>
      )}
    </div>
  );
}

export default App;
