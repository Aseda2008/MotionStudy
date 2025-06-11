import React, { useEffect, useState } from "react";
import "./Video.scss";
import axios from "axios";

const Video = () => {
  const [videos, setVideos] = useState([]);

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
          {videos.students_videos?.map((el) => (
            <div className="video--content__iframe">
              <iframe
                width="550"
                height="340"
                src={el.videos}
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
