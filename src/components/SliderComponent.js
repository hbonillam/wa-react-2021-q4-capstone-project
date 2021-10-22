import React, { useState } from "react";

function SliderComponent({ bannersImg }) {
  const [index, setIndex] = useState(0);
  const nextSlide = function () {
    const newIndex = index + 1 === bannersImg.length ? 0 : index + 1;
    setIndex(newIndex);
  };
  const prevSlide = function () {
    const newIndex = index - 1 === -1 ? bannersImg.length - 1 : index - 1;
    setIndex(newIndex);
  };
  return (
    <div>
      <h2>Slider!</h2>
      <div className="slideshow-container">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="mySlides">
          <div className="numbertext">
            {index + 1} / {bannersImg.length}
          </div>
          <img
            src={bannersImg[index].main_image.url}
            alt={bannersImg[index].main_image.alt}
          />
          <div className="text">{bannersImg[index].title}</div>
        </div>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default SliderComponent;
