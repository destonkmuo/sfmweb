import React, { useEffect, useRef } from "react";
import "../styles/Slideshow.css";

function Slideshow() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stageRef.current) {
      const stage = stageRef.current;
      const fadeComplete = function (e: AnimationEvent) {
        if (stage) {
          stage.appendChild(arr[0]);
        }
      };
      const arr = stage.getElementsByTagName("a");
      for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
      }
    }
  }, []);
  return (
    <>
      <div id="stage" ref={stageRef} style={{ width: "100%", height: "100%" }}>
        <a href="1.jpg">
          <img
            src="https://www.givelify.com/wp-content/uploads/2021/02/The-Black-Church-Black-History-in-America_creative_noBubbles-copy-scaled.jpg"
            style={{ width: "100vw", height: "100vh", objectFit: "contain" }}
            alt="slide1"
          />{" "}
        </a>
        <a href="2.jpg">
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="slide1"
          />{" "}
        </a>
        <a href="3.jpg">
          <img
            src="https://raw.githubusercontent.com/destonkmuo/sfmweb/a1611758570ec8d39435052352860d5c4c7b6837/public/churchFishEye.jpeg"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="slide1"
          />{" "}
        </a>
        <a href="4.jpg">
          <img
            src="https://raw.githubusercontent.com/destonkmuo/sfmweb/a1611758570ec8d39435052352860d5c4c7b6837/public/churchFishEye.jpeg"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="slide1"
          />{" "}
        </a>
        <a href="5.jpg">
          <img
            src="https://raw.githubusercontent.com/destonkmuo/sfmweb/a1611758570ec8d39435052352860d5c4c7b6837/public/churchFishEye.jpeg"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="slide1"
          />{" "}
        </a>
        <a href="6.jpg">
          <img
            src="https://raw.githubusercontent.com/destonkmuo/sfmweb/a1611758570ec8d39435052352860d5c4c7b6837/public/churchFishEye.jpeg"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="slide1"
          />{" "}
        </a>
        <a href="7.jpg">
          <img
            src="https://raw.githubusercontent.com/destonkmuo/sfmweb/a1611758570ec8d39435052352860d5c4c7b6837/public/churchFishEye.jpeg"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="slide1"
          />{" "}
        </a>
        <a href="8.jpg">
          <img
            src="https://raw.githubusercontent.com/destonkmuo/sfmweb/a1611758570ec8d39435052352860d5c4c7b6837/public/churchFishEye.jpeg"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="slide1"
          />{" "}
        </a>
      </div>
      <div
        style={{
          position: "absolute",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
          top: "30%",
          width: "100vw",
          fontSize: "50px",
          fontWeight: "bold",
          zIndex: "100",
          color: "white",
        }}
      >
        <h1 style={{margin: "0", padding: "0"}}>The Foundation</h1>
        <h4 style={{textAlign: "center", margin: "0", padding: "0"}}>of God standeth sure</h4>
      </div>
      <div className="buttonContainer">
        <button>Learn More</button>
      </div>
    </>
  );
}

export default Slideshow;
