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
      {bannersImg?.length > 0 && (
        <div className="slideshow-container">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="mySlides">
            <div className="numbertext">
              {index + 1} / {bannersImg.length}
            </div>
            <div data-testid="slider">
              {bannersImg.map((bi, i) => {
                return i === index ? (
                  <React.Fragment key={i}>
                    <img
                      className="slider-img"
                      src={bi.main_image.url}
                      alt={bi.main_image.alt}
                    />
                    <div className="text">{bannersImg[index].title}</div>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>
                    <img
                      className="no-show"
                      src={bi.main_image.url}
                      alt={bi.main_image.alt}
                    />
                    <div className="text no-show">{bi.title}</div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}

export default SliderComponent;
