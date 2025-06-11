import React, { useEffect, useState } from "react";
import "./MotionStudy.scss";
import Study from "../../../assets/img/homeimg.svg";
import group2 from "../../../assets/img/Group 2.svg";
import group1 from "../../../assets/img/Group 1.svg";
import axios from "axios";
import { toast, Slide } from "react-toastify";

const MotionStudy = () => {
  const [data, setData] = useState([]);
  const [phone_number, setPhone] = useState("");
  const [name, setName] = useState("");

  async function getData() {
    const res = await axios("/api/en/home/");
    console.log("Response:", res.data);
    setData(res.data);
  }

  async function postData() {
    if (!name || !phone_number) {
      toast.error("Name and phone are required!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } else {
      const newData = { name, phone_number };

      const res = await axios.post(
        "http://13.61.25.99/en/home_contact/",
        newData
      );
      console.log("Success:", res.data);
      toast.success("Sent successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  }

  useEffect(() => {
    getData();
    window.scroll(0, 0);
  }, []);

  return (
    <div id="Study">
      <div className="container">
        <div className="Study">
          {data.map((el) => (
            <div key={el.id}>
              <div className="Study--block">
                <div className="Study--block__left">
                  <h3>{el.label}</h3>
                  <h1>{el.title}</h1>
                  <p>{el.description}</p>
                </div>
                <div className="Study--block__rigth">
                  <img src={Study} alt="img" className="bg" />
                  <img src={el.image2} alt="img" className="Ellipse4" />
                  <img src={el.image1} alt="img" className="Ellipse6" />
                  <img src={el.image4} alt="img" className="Ellipse7" />
                  <img src={el.image3} alt="img" className="Ellipse5" />
                </div>
              </div>
              <div className="Study--contact">
                <div className="Study--contact__name">
                  <img src={group2} alt="img" />
                  <div className="Study--contact__name--text">
                    <p>NAME </p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                </div>
                <div className="Study--contact__phone">
                  <img src={group1} alt="img" />
                  <div className="Study--contact__phone--text">
                    <p>PHONE</p>
                    <input
                      type="text"
                      placeholder="Enter your phone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone_number}
                    />
                  </div>
                </div>
                <button onClick={() => postData()}>Contact</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotionStudy;
