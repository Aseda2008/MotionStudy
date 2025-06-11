import React, { useContext, useEffect } from "react";
import MotionStudy from "../Pages/MotionStudy/MotionStudy";
import Best from "../Pages/Best/Best";
import HeaderMenu from "../Layout/HeaderManu/HeaderMenu";
import { MotionStudyContext } from "../../context";
import Header from "../Layout/Header/Header";
import Exams from "../Pages/Exams/Exams";
import Video from "../Pages/Video/Video";
import Contact from "../Pages/Contact/Contact";

const Main = () => {
  const { modal } = useContext(MotionStudyContext);
  return (
    <div>
      {modal ? (
        <HeaderMenu />
      ) : (
        <>
          <MotionStudy />
          <Best />
          <Exams />
          <Video />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Main;
