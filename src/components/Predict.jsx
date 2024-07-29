"use client";

import { useState, useEffect } from "react";

const images = [
  "https://cdn.inito.com/inito_website/hormone_chart.png",
  "https://cdn.inito.com/inito_website/cycle_day_view.png",
  "https://cdn.inito.com/inito_website/ovulation_confirmed.png",
];

const Predict = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="phone-graph-container">
      <div className="predict-container">
        <div className="iphone-slider-container">
          <div className="iphone-slider">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`slick-slide ${
                  index === currentIndex ? "slick-current slick-active" : ""
                }`}
                style={{ display: index === currentIndex ? "block" : "none" }}
              />
            ))}
          </div>
        </div>
        <div className="content-container">
          <h2>
            Predict and confirm your ovulation with
            <span className="image_as_underline"> actual</span> data
          </h2>
          <p className="description">
            Unlike most ovulation tests that only give you "yes/no" results,
            Inito provides <strong>real numerical values</strong> of your
            fertility hormones.
            <br />
            <br />
            If you have irregular cycles, actual data is necessary to know{" "}
            <em>exactly</em> when you ovulate, and when is the best time to try
            to conceive.
          </p>
          <button className="button-kit">
            <span className="button-view">Get the Inito Kit</span>
          </button>
        </div>
      </div>
      <div className="graph-container">
        <div className="egg-container">
          <h2 className="text-center">
            Never miss{" "}
            <span className="an-egg">
              {" "}
              <img
                className="text-image"
                src="https://cdn.inito.com/inito_website/an_egg.png"
              />
              a day{" "}
              <img
                className="strike-through"
                src="https://cdn.inito.com/inito_website/strike_through.png"
              />
            </span>
            again with Inito
          </h2>

          <p className="description">
            Inito tracks up to 6 fertile days and confirms ovulation by
            measuring all 4 hormones in just 10 minutes:
          </p>
          <div className="chart-points">
            <ul>
              <li className="point">
                Estrogen, which rises 3-4 days before ovulation
              </li>
              <li className="point">
                LH, which surges 24-36 hours before ovulation
              </li>
              <li className="point">PdG, which rises after ovulation</li>
              <li className="point">FSH, to track follicle growth</li>
            </ul>
          </div>
        </div>
        <div className="graph-picture">
          <img
            className="v2-homepage-chart"
            src="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png"
            alt="Hormones Graph"
          />
        </div>
      </div>
    </div>
  );
};

export default Predict;
