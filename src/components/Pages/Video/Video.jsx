import React, { useEffect, useState } from "react";
import "./Video.scss";
import axios from "axios";

const Video = () => {
  const [videos, setVideos] = useState([]);

  const videoplayer = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/BTMjD7_evjE?si=GHSxfAoKqMFnv8AT",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/BTMjD7_evjE?si=GHSxfAoKqMFnv8AT",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/BTMjD7_evjE?si=GHSxfAoKqMFnv8AT",
    },
    {
      id: 4,
      link: "https://www.youtube.com/embed/BTMjD7_evjE?si=GHSxfAoKqMFnv8AT",
    },
    {
      id: 5,
      link: "https://www.youtube.com/embed/BTMjD7_evjE?si=GHSxfAoKqMFnv8AT",
    },
    {
      id: 6,
      link: "https://www.youtube.com/embed/BTMjD7_evjE?si=GHSxfAoKqMFnv8AT",
    },
  ];

  async function getData() {
    let res = await axios(`http://13.61.25.99/en/home_videos/`);
    setVideos(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="video">
      <div className="video">
        {videos.map((el) => (
          <div className="video--text">
            <h1>{el.title}</h1>
          </div>
        ))}
        <div className="video--content">
          {videoplayer.map((el) => (
            <div className="video--content__iframes">
                <iframe
                  width="550"
                  height="340"
                  src={el.link}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Video;
