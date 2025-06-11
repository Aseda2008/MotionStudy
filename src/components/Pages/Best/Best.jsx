import React, { useEffect, useState } from "react";
import "./Best.scss";
import ourFriends from "../../../assets/img/aboutMe-3 1.svg";
import Partners from "../../../assets/img/Frame 71.svg";
import axios from "axios";
import Exports from "../../../assets/img/Experts.svg";
import Time from "../../../assets/img/Time.svg";
import Price from "../../../assets/img/Price.svg";

const Best = () => {
  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(`http://13.61.25.99/en/home_info/`);
    setData(res.data);
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data, "hello best");

  return (
    <div id="Best">
      <div className="container">
        {data.map((el) => (
          <div className="Best" key={el.id}>
            <div className="Best--left">
              <h1>{el.title}</h1>
              <p>{el.description}</p>
              <img src={el.image} alt="img" />
            </div>
            <div className="Best--rigth">
              <div className="Best--rigth__block">
                <img src={Partners} alt="img" />
                <h3>{el.info_cards[0].title}</h3>
                <p>{el.info_cards[0].description}</p>
              </div>
              <div className="Best--rigth__block">
                <img src={Exports} alt="img" />
                <h3>{el.info_cards[1].title}</h3>
                <p>{el.info_cards[1].description}</p>
              </div>
              <div className="Best--rigth__block">
                <img src={Time} alt="img" />
                <h3>{el.info_cards[2].title}</h3>
                <p>{el.info_cards[2].description}</p>
              </div>
              <div className="Best--rigth__block">
                <img src={Price} alt="img" />
                <h3>{el.info_cards[3].title}</h3>
                <p>{el.info_cards[3].description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best;
