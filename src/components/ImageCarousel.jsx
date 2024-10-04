import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

const images = [
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`carousel-image ${
            index === currentImageIndex ? "show" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
