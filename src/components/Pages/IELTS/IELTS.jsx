import React, { useEffect } from "react";
import AptisImg from "../../../assets/img/Aptis.png";
import "./IELTS.scss";
import IELTSImg from "../../../assets/img/IELTS.png";

const Aptis = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section id="IELTS">
      <div className="container">
        <div className="IELTS">
          <div className="IELTS--content">
            <h1>
              What is IELTS?
              <br />
              <hr />
            </h1>
            <img src={IELTSImg} alt="Cambridge English Exam" />
            <div className="IELTS--text">
              <h2>What Is IELTS? A Complete Introduction</h2>
              <p className="p">
                Introduced in 1989, IELTS, the International English Language
                Testing System, is an English language proficiency test
                internationally recognized for testing English language ability
                in four categories:
              </p>
              <div className="IELTS--category">
                <h4>• Listening</h4>
                <h4>• Reading</h4>
                <h4>• Writing</h4>
                <h4>• Speaking</h4>
              </div>

              <h2>Types Of IELTS test</h2>
              <p>
                Anyone can take the IELTS test irrespective of age, gender,
                race, nationality or religion. IELTS administrators (IDP or
                British Council) has set no age limit to take the IELTS test.
                This is one of the IELTS advantages. However, for candidates
                below 16 years, it is not recommended. Although if they wish,
                they can also take the test. Anyone who wishes to pursue higher
                studies abroad or work abroad can attempt the IELTS exam
                (Academic and General Training). However, candidates should
                always check the educational institution’s eligibility criteria
                or organization where they are applying.
              </p>
              <ul className="fake-list">
                <li>
                  Reliable Experts: Developed by Cambridge experts and well
                  supported by a strong research and development team, IELTS is
                  the most trusted name for the English efficiency test.
                </li>
              </ul>
              <ul className="fake-list">
                <li>
                  Frequency of Test: Due to the tests’ easy availability, it is
                  the most convenient for test-takers. It is available up to 4
                  dates a month.
                </li>
              </ul>
              <ul className="fake-list">
                <li>
                  Accepted by Most Organizations: More than 10,000 organizations
                  globally trust IELTS and accept the score to validate language
                  proficiency. accepted by over 8,000 universities, employers
                  and immigration organizations worldwide
                </li>
              </ul>
              <ul className="fake-list">
                <li>
                  Face to Face Testing: It is known to be the fairest of all
                  tests and is the only one that includes a face-to-face
                  interaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aptis;
