import React, { useState, useEffect } from "react";
import photo1 from "./photos/photo1.png";
import photo2 from "./photos/photo2.png";
import photo3 from "./photos/photo3.png";
import photo4 from "./photos/photo4.png";

export default function Slider() {
  const [slides, setSlides] = useState({ position: 1 });
  const [direction, setDirection] = useState("right");
  useEffect(() => {
    const interval = setInterval(() => {
      setSlides((prev) => ({
        position: prev.position === 3 ? 1 : prev.position + 1,
      }));
      setDirection("right");
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slides">
      <button
        className="arrowLeft"
        onClick={() => {
          if (slides.position >= 2) {
            setSlides({ ...slides, position: slides.position - 1 });
          }
        }}
      >
        ←
      </button>
      {slides.position === 1 && (
        <img
          className={`photo photo1 slide-${direction}`}
          src={photo1}
          alt="photo1"
        />
      )}
      {slides.position === 2 && (
        <img
          className={`photo photo2 slide-${direction}`}
          src={photo2}
          alt="photo2"
        />
      )}
      {slides.position === 3 && (
        <img
          className={`photo photo3 slide-${direction}`}
          src={photo3}
          alt="photo3"
        />
      )}
      <img className="photo4" src={photo4} alt="photo4" />
      <button
        className="arrowRight"
        onClick={() => {
          if (slides.position <= 2) {
            setSlides({ ...slides, position: slides.position + 1 });
          }
        }}
      >
        →
      </button>
      <div className="dots">
        <div
          style={{
            color: slides.position === 1 ? "black" : "white",
          }}
          onClick={() => {
            setSlides({ ...slides, position: 1 });
          }}
        >
          .
        </div>
        <div
          style={{
            color: slides.position === 2 ? "black" : "white",
          }}
          onClick={() => {
            setSlides({ ...slides, position: 2 });
          }}
        >
          .
        </div>
        <div
          style={{
            color: slides.position === 3 ? "black" : "white",
          }}
          onClick={() => {
            setSlides({ ...slides, position: 3 });
          }}
        >
          .
        </div>
      </div>
    </div>
  );
}
