import React, { useEffect, useRef } from "react";
import Carousel from "react-material-ui-carousel";
import { images } from "../../images/images";
import styles from "./slide.module.css";
import laurenHill from "../../music/LaurenHill.mp3";
import jCole from "../../music/JCole.mp3";
import { useHistory } from "react-router-dom";

const Slideshow = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isJColePlaying, setIsJColePlaying] = React.useState(true);

  const history = useHistory();

  const redirect = () => {
    history.push("./");
  };

  const audioLHRef = useRef();

  const audioJCRef = useRef();

  const onPlayLaurenHill = () => {
    setIsPlaying(true);
    isPlaying ? audioLHRef.current.play() : audioLHRef.current.pause();
  };

  const onPlayJCole = () => {
    setIsJColePlaying(true);
    isJColePlaying ? audioJCRef.current.play() : audioJCRef.current.pause();
  };

  useEffect(() => {
    if (!isPlaying && !isJColePlaying) {
      audioLHRef.current.pause();
    }
  });

  return (
    <div className={styles.slideContainer}>
      <h2 style={{ marginTop: "45px" }}>
        Our Amazing, Loving Family.
      </h2>
      <div className={styles.text}>
        <audio ref={audioLHRef} src={laurenHill} />
        <button
          className={styles.songBtn}
          type="button"
          onClick={(e) => {
            onPlayLaurenHill();
            setIsPlaying(!isPlaying);
          }}
        >
          Play this song
        </button>
        <audio ref={audioJCRef} src={jCole} />
        <button
          className={styles.songBtn}
          type="button"
          onClick={() => {
            onPlayJCole();
            setIsJColePlaying(!isJColePlaying);
          }}
        >
          No, play this song
        </button>
      </div>
      <div className={styles.carousel}>
        <Carousel>
          {images.map((img) => (
            <img
              className={styles.img}
              id={img.id}
              src={img.image}
              alt=""
              style={{ height: "50vh", width: "100%" }}
            />
          ))}
        </Carousel>
      </div>
      <div>
        <button type="button" onClick={redirect} className={styles.redirectBtn}>
          Let's start over!
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
