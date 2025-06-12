import React, { useEffect, useState } from "react";
import cambridge from "../../../assets/img/Cambridge.png";
import "./Cambridge.scss";
import mark from "../../../assets/img/chekmark.svg";
import axios from "axios";

const Cambridge = () => {
  const [data, setData] = useState([]);

  async function getData() {
    let res = await axios(`http://13.61.25.99/en/exam/1/`);
    setData([res.data]);
  }

  useEffect(() => {
    getData();
    window.scroll(0, 0);
  }, []);

  return (
    <section id="cambridge">
      <div className="container">
        <div className="cambridge">
          {data.map((el) => (
            <div className="cambridge--content">
              <h1>
                {el.title} <br />
                <hr />
              </h1>
              <img src={el.image2} alt="Cambridge English Exam" />
              <div className="cambridge--text">
                <h2>{el.exam_themes[1].theme}</h2>
                <p className="p">
                 {el.exam_themes[1].description}
                </p>
                <h2>{el.exam_themes[2].theme}</h2>
                <h3>Official Recognition</h3>
                <p>
                  Cambridge English Qualifications are accepted worldwide. They
                  are a mark of excellence trusted by thousands of leading
                  higher education institutions, governments and employers. With
                  a Cambridge English Qualification, you'll open doors to a
                  world of opportunities – literally! With a Cambridge English
                  Qualification, you'll open doors to a world of opportunities –
                  literally!
                </p>
                <p>
                  When you pass the exam, you'll be awarded a certificate
                  delivered by Cambridge Assessment English, the ESOL
                  accreditation body of the University of Cambridge. Each year,
                  more than 300,000 people from over 100 different countries
                  choose to sit a Cambridge exam\.Cambridge. Each year, more
                  than 300,000 people from over 100 different countries choose
                  to sit a Cambridge exam\.
                </p>
                <p>
                  Depending on the level you are looking to achieve, you might
                  choose from one of the following exam preparation courses:
                  choose from one of the following exam preparation courses:
                </p>
                <h5>
                  <img src={mark} alt="img" />·<span>B2 First (FCE)</span>
                </h5>
                <h5>
                  <img src={mark} alt="img" />·<span>C1 Advanced (CAE)</span>
                </h5>
                <h5>
                  <img src={mark} alt="img" />·<span>C2 Proficiency (CPE)</span>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cambridge;
