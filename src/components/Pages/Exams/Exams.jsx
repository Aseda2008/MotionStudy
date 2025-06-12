import React, { useEffect, useState } from "react";
import "./Exams.scss";
import img1 from "../../../assets/img/Exams1.svg";
import img2 from "../../../assets/img/Exams2.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Exams = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(`http://13.61.25.99/en/home_exam/`);
    setData(res.data);
  }

  useEffect(() => {
    getData();
    window.scroll(0, 0);
    console.log(data, "hello exams");
  }, []);

  return (
    <section id="exams">
      <div className="container">
        {data.map((el) => (
          <div className="exams" key={el.id}>
            <div className="exams--top">
              <h1>{el.title}</h1>
              <p>{el.description}</p>
            </div>
            <div className="exams--content">
              <div
                className="exams--content__left"
                onClick={() => nav("/cambridge")}
              >
                <img src={el.exam_cards[0].image1} alt="" />
                <div className="exams--content__left--text">
                  <h4>{el.exam_cards[0].title}</h4>
                  <h3>{el.exam_cards[0].exam_themes[0].theme}</h3>
                  <p>{el.exam_cards[0].exam_themes[0].description}</p>
                  <div className="exams--content__left--text__btn">
                    <button onClick={() => nav("/cambridge")}>
                      Discover more
                    </button>
                  </div>
                </div>
              </div>
              <div className="exams--content__right">
                <div
                  className="exams--content__right--card"
                  onClick={() => nav("/aptis")}
                >
                  <img src={el.exam_cards[1].image1} alt="img" />
                  <div className="exams--content__right--card__text">
                    <div className="exams--content__right--card__text--category1">
                      <h3>{el.exam_cards[1].exam_type}</h3>
                    </div>
                    <h1>{el.exam_cards[1].exam_themes[0].theme}</h1>
                    <p>{el.exam_cards[1].exam_themes[0].description}</p>
                  </div>
                </div>
                <div
                  className="exams--content__right--card"
                  onClick={() => nav("/IELTS")}
                >
                  <img
                    src={el.exam_cards[2].image1}
                    className="img"
                    alt="img"
                  />
                  <div className="exams--content__right--card__text">
                    <div className="exams--content__right--card__text--category2">
                      <h3>{el.exam_cards[2].exam_type}</h3>
                    </div>
                    <h1>{el.exam_cards[2].exam_themes[0].theme}</h1>
                    <p>{el.exam_cards[2].exam_themes[0].description}</p>
                  </div>
                </div>
                <div
                  className="exams--content__right--card"
                  onClick={() => nav("/other-exams")}
                >
                  <img
                    src={el.exam_cards[3].image1}
                    className="img"
                    alt="img"
                  />
                  <div className="exams--content__right--card__text">
                    <div className="exams--content__right--card__text--category3">
                      <h3>{el.exam_cards[3].exam_type}</h3>
                    </div>
                    <h1>{el.exam_cards[3].exam_themes[0].theme}</h1>
                    <p>{el.exam_cards[3].exam_themes[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exams;
