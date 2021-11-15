import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/thumbs/thumbs.scss";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

function ImageSwiper(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [images, setImages] = useState(0);
  useEffect(() => {
    setImages(props.images);
  }, [props]);
  //console.log(images);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {images &&
          images?.length > 0 &&
          images.map((image, indice) => {
            return (
              <SwiperSlide key={indice}>
                <img
                  src={image.image.url}
                  alt={image.image.alt ? image.image.alt : indice}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {images &&
          images?.length > 0 &&
          images.map((image, indice) => {
            return (
              <SwiperSlide key={indice}>
                <img
                  src={image.image.url}
                  alt={image.image.alt ? image.image.alt : indice}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
export default ImageSwiper;
