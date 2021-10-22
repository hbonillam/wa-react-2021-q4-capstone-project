import React, { useState } from "react";

function CarouselComponent({ productCategoriesImg }) {
  const [index, setIndex] = useState(0);
  const nextSlide = function () {
    console.log(index);
    const newIndex = index + 1 === productCategoriesImg.length ? 0 : index + 1;
    setIndex(newIndex);
  };

  setTimeout(nextSlide, 5000);
  return (
    <div>
      <h2>Carousel</h2>
      <div className="slideshow-container carousel-container">
        {productCategoriesImg.map((pc, i) => {
          return i === index ? (
            <div className="mySlides fade" key={i}>
              <div className="numbertext">{i + 1} / 5</div>
              <img src={pc.main_image.url} alt={pc.main_image.alt} />
              <div className="text">{pc.name}</div>
            </div>
          ) : (
            <div className="mySlides fade hidden" key={i}>
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
