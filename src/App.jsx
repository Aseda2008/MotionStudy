import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Main/Main";
import { useContext, useEffect } from "react";
import { MotionStudyContext } from "./context";
import Footer from "./components/Layout/Footer/Footer";
import Cambridge from "./components/Pages/Cambridge/Cambridge";
import Aptis from "./components/Pages/Aptis/Aptis";
import IELTS from "./components/Pages/IELTS/IELTS";
import Other from "./components/Pages/Other/Other";
import { ToastContainer } from "react-toastify";

function App() {
  const { modal } = useContext(MotionStudyContext);
  let router = [
    {
      id: 1,
      path: "/",
      element: <Main />,
    },
    {
      id: 2,
      path: "/cambridge",
      element: <Cambridge />,
    },
    {
      id: 3,
      path: "/aptis",
      element: <Aptis />
    },
    {
      id: 4,
      path: "/IELTS",
      element: <IELTS />
    },
    {
      id: 5,
      path: "/other-exams",
      element: <Other/>
    }
  ];

  return (
    <div className="app">
      {!modal && <Header />}
      <Routes>
        {router.map((el) => (
          <Route path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
