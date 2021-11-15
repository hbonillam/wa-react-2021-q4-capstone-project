import React, { useState } from "react";

function CarouselComponent({ productCategoriesImg }) {
  const [index, setIndex] = useState(0);
  const nextSlide = function () {
    const newIndex = index + 1 === productCategoriesImg.length ? 0 : index + 1;
    setIndex(newIndex);
  };

  //

  return (
    <div>
      <h2>Carousel</h2>
      <button onClick={() => nextSlide()}> See next </button>
      <div
        className="slideshow-container carousel-container"
        data-testid="carousel"
      >
        {productCategoriesImg &&
          productCategoriesImg.map((pc, i) => {
            return i === index ? (
              <div className="mySlides fade" key={i + 1}>
                <div className="numbertext">{i + 1} / 5</div>
                <img src={pc.main_image.url} alt={pc.main_image.alt} />
                <div className="text">{pc.name}</div>
              </div>
            ) : (
              <div className="mySlides fade hidden" key={i + 1}>
                <div className="numbertext">{i + 1} / 5</div>
                <img src={pc.main_image.url} alt={pc.main_image.alt} />
                <div className="text">{pc.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CarouselComponent;
