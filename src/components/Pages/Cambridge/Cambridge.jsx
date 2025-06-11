import React, { useEffect } from "react";
import cambridge from "../../../assets/img/Cambridge.png";
import "./Cambridge.scss";
import mark from "../../../assets/img/chekmark.svg";

const Cambridge = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section id="cambridge">
      <div className="container">
        <div className="cambridge">
          <div className="cambridge--content">
            <h1>
              Cambridge English Exam <br />
              <hr />
            </h1>
            <img src={cambridge} alt="Cambridge English Exam" />
            <div className="cambridge--text">
              <h2>Who Are The Cambridge English Exams For?</h2>
              <p className="p">
                The Cambridge English Exams Are Strongly Recommended For Anyone
                Who Plans To Work In International Business Or Study And/Or Work
                Overseas, Wherever Life Takes You, You Will Be Able To Prove
                Your English Level With Your Cambridge Certificate.Wherever Life
                Takes You, You Will Be Able To Prove Your English Level With
                Your Cambridge Certificate.
              </p>
              <h2>What Do The Cambridge Exams Involve?</h2>
              <h3>Official Recognition</h3>
              <p>
                Cambridge English Qualifications are accepted worldwide. They
                are a mark of excellence trusted by thousands of leading higher
                education institutions, governments and employers. With a
                Cambridge English Qualification, you'll open doors to a world of
                opportunities – literally! With a Cambridge English
                Qualification, you'll open doors to a world of opportunities –
                literally!
              </p>
              <p>
                When you pass the exam, you'll be awarded a certificate
                delivered by Cambridge Assessment English, the ESOL
                accreditation body of the University of Cambridge. Each year,
                more than 300,000 people from over 100 different countries
                choose to sit a Cambridge exam\.Cambridge. Each year, more than
                300,000 people from over 100 different countries choose to sit a
                Cambridge exam\.
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
        </div>
      </div>
    </section>
  );
};

export default Cambridge;
