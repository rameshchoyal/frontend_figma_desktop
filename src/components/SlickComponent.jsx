"use client";
import React, { useState, useEffect } from "react";

const SlickComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/high_fertility-277405f0c3b1f844907885a9866aac272ff865c0ed3431d0a7f5673b2440b21e.svg",
    "https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/peak_fertility-21ac68f7f91f18f7e76b83c05e0eefec17e26037a254311312b59c3606bb952a.svg",
    "https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/ovulation_confirmed-1af13f574905b54b0614d422f2161aebbdebd85d6cd39cb6ae2078706ba42642.svg",
    "https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/low_fertility-51402a5906afd6879626e776235fbb7cbbe84d94529366f7266c51f4d3b406ab.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="slick-list draggable"
      style={{ position: "relative", width: "346px", height: "auto" }}
    >
      <div
        className="slick-track"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`slick-slide ${
              index === currentIndex ? "slick-current slick-active" : ""
            }`}
            data-slick-index={index}
            aria-hidden={index !== currentIndex}
            tabIndex={index === currentIndex ? 0 : -1}
            style={{
              width: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: index === currentIndex ? 999 : 998,
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 500ms",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SlickComponent;
