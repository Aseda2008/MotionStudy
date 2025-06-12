import React, { useEffect } from "react";
import otherExams from "../../../assets/img/otherExams.png";
import "./Other.scss";
import mark from "../../../assets/img/chekmark.svg";

const Other = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section id="Other">
      <div className="container">
        <div className="Other">
          <div className="Other--content">
            <h1>
              Other exams <br />
              <hr />
            </h1>
            <img src={otherExams} alt="Cambridge English Exam" />
            <div className="Other--text">
              <h2 className="h2">Paper Exams –Third party</h2>
              <p className="p">
                Our office is also willing to proctor paper exams on behalf of
                other schools or private institutions. Please keep the following
                in mind:
              </p>
              <ul>
                <li>
                  Send over any proctor agreements as quickly as possible to
                  avoid delays. You can e-mail us at:
                </li>
                <li>
                  Send over any proctor agreements as quickly as possible to
                  avoid delays. You can e-mail us at:
                </li>
                <li>
                  Send over any proctor agreements as quickly as possible to
                  avoid delays. You can e-mail us at:
                </li>
                <li>
                  Send over any proctor agreements as quickly as possible to
                  avoid delays. You can e-mail us at:
                </li>
              </ul>
              <h2>ID Requirements</h2>
              <ul>
                <li>
                  Each school & institution is different, consequently ID
                  requirements are set by the school we proctor for. We
                  encourage you to reach out to your program to find out what
                  form of ID you need.
                </li>
              </ul>
              <h2>Frequently Asked Questions</h2>
              <ul>
                <li className="list">Where can I park?</li>
                <li>
                  Parking information including instructions on how to pay for
                  parking can be found [here].
                </li>
                <li className="list">What do I need to bring?</li>
                <li>
                  You will need to bring proper identification (see above) and a
                  good attitude! A small snack or water is also encouraged. We
                  will have everything else you will need to take the test.
                </li>
                <li className="list">How long is the exam?</li>
                <li>
                  The exam time is dependent on the exam itself. Every exam we
                  do for others' schools is different and a UT High School test
                  is certainly different from the University of Buffalo.
                </li>
                <li className="list">
                  Where will I store my personal belongings during the test?
                </li>
                <li>
                  You will be provided a secure locker for your personal
                  belongings before testing begins
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Other;
