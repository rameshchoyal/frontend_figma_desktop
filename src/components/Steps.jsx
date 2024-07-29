"use client";
import React from "react";

const Steps = () => {
  return (
    <section className="inito-steps">
      <div className="steps-content">
        <h1>
          A <span className="image_as_underline">fertility lab</span> at your
          fingertips
        </h1>
        <p className="steps-description">
          Easy-to-read fertility diagnostic results directly on your iPhone*, in
          just 10 minutes.
        </p>

        <button className="get-kit-button" href="/buy-now">
          Get the Inito kit
        </button>
        <div className="inito-support">
          * The Inito Fertility Monitor currently supports iPhone 7 and up.
          Android phones are not supported at the moment.
        </div>
        <div className="app-store">
          <img
            className="app-store-img"
            src="https://cdn.inito.com/inito_website/download_on_app_store.png"
            alt="Download on App Store"
          />
        </div>
      </div>
      <div className="inito-steps-con">
        <div className="inito-step">
          <div className="video-con">
            <video
              autoPlay
              loop
              muted
              onContextMenu={() => false}
              playsInline
              src="https://cdn.inito.com/inito_website/step1.mp4"
              alt="Video: Dip test strip in urine"
            />
          </div>
          <div className="data-con">
            <span className="num">1</span>
            <span className="data">
              Dip the test strip in urine for 15 seconds.
            </span>
          </div>
        </div>
        <div className="inito-step">
          <div className="video-con">
            <video
              autoPlay
              loop
              muted
              onContextMenu={() => false}
              playsInline
              src="https://cdn.inito.com/inito_website/step2.mp4"
              alt="Video: Insert strip into the monitor"
            />
          </div>
          <div className="data-con">
            <span className="num">2</span>
            <span className="data">
              Attach the Inito Fertility Monitor to your iPhone*.
            </span>
          </div>
        </div>
        <div className="inito-step">
          <div className="video-con">
            <video
              autoPlay
              loop
              muted
              onContextMenu={() => false}
              playsInline
              src="https://cdn.inito.com/inito_website/step3.mp4"
              alt="Video: Identify up to 6 fertile days"
            />
          </div>
          <div className="data-con">
            <span className="num">3</span>
            <span className="data">
              Insert the test strip into the Inito Fertility Monitor.
            </span>
          </div>
        </div>
        <div className="inito-step">
          <div className="video-con">
            <video
              autoPlay
              loop
              muted
              onContextMenu={() => false}
              playsInline
              src="https://cdn.inito.com/inito_website/step4.mp4"
              alt="Video: Identify up to 6 fertile days"
            />
          </div>
          <div className="data-con">
            <span className="num">4</span>
            <span className="data">
              Get personalized results on our App in 10 minutes.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const stepsData = [
  {
    background: "#BDE0E6",
    videoSrc: "https://cdn.inito.com/inito_website/step1.mp4",
    altText: "Video: Dip test strip in urine",
    description: "Dip the test strip in urine for 15 seconds.",
  },
  {
    background: "#96CDD7",
    videoSrc: "https://cdn.inito.com/inito_website/step2.mp4",
    altText: "Video: Insert strip into the monitor",
    description: "Attach the Inito Fertility Monitor to your iPhone*.",
  },
  {
    background: "#64B4C3",
    videoSrc: "https://cdn.inito.com/inito_website/step3.mp4",
    altText: "Video: Identify up to 6 fertile days",
    description: "Insert the test strip into the Inito Fertility Monitor.",
  },
  {
    background: "#ffffff",
    videoSrc: "https://cdn.inito.com/inito_website/step4.mp4",
    altText: "Video: Identify up to 6 fertile days",
    description: "Get personalized results on our App in 10 minutes.",
  },
];

export default Steps;
