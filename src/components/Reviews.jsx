"use client";
import React, { useState, useEffect } from "react";

const reviews = [
  {
    username: "Brooke",
    rating: 5,
    text: "This product is worth every penny!! I was using only LH strips to track my ovulation and we would “baby make” on each peak day and did not get pregnant. After receiving this device and trying it since it says it tests for estrogen and progesterone to CONFIRM ovulation - we got pregnant the first month trying! Apparently I was peaking a day before what the LH strips did not pick up and this device did because it saw my estrogen rise and my LH START to rise and said that was my peak.",
  },
  {
    username: "Nancy",
    rating: 5,
    text: "I purchased this monitor to figure out my ovulation patterns after 2 failed IUI’s. I discovered that my LH surge is a gradual onset and that we inseminated far too early. Now that we know which day I actually ovulate as it confirms my fertile window, I am hoping to be more succesful on my next IUI. Highly recommend this if you are looking for guaranteed results!",
  },
  {
    username: "Gonzales",
    rating: 5,
    text: "I wish I had used this sooner. Don’t waste your money on other OPK tests. This system is more accurate and monitors 4 key hormones that effect ovulation. The other cheaper brands can not do this. It gives you a better insight on your body’s hormone fluctuations during a cycle and where any possible problems with conception could be coming from. It is worth the investment and can save you time on identifying fertility issues and help you get pregnant faster.",
  },
  {
    username: "MJ",
    rating: 5,
    text: "My husband and I were TTC for 3 months and we got pregnant the first month of using Inito! I started with the cheap LH/ovulation strips but my progression seemed to be off at times with that. I loved how Inito gives you the exact values so that you’re able to tell when your peak is more accurately. Also loves that it measures PdG because I never really was able to get real spikes to confirm ovulation when I would take my basal body temp, but Inito was able to confirm by measuring my PdG.",
  },
  {
    username: "Ashley",
    rating: 5,
    text: "I have PCOS and have been on letrozole and using LH tests to time intercourse. I was hesitant to buy this because there are so many different things but I liked the added hormones it tracks. I just used it with my last cycle and it was so great! Showed me my estrogen rising so I knew I was in my fertile window two days before my LH rise. I just got the “confirmed ovulation” because my PdG increased. It’s so great to have a little more insight into what is going on!",
  },
];

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentReviewIndex];

  return (
    <section className="user-reviews">
      <div className="review-con">
        <div className="review-stars">
          <img
            className="img-star"
            src="https://cdn.inito.com/inito_website/star.png"
            alt="star"
          />
          <img
            className="img-star"
            src="https://cdn.inito.com/inito_website/star.png"
            alt="star"
          />
          <img
            className="img-star"
            src="https://cdn.inito.com/inito_website/star.png"
            alt="star"
          />
          <img
            className="img-star"
            src="https://cdn.inito.com/inito_website/star.png"
            alt="star"
          />
          <img
            className="img-star"
            src="https://cdn.inito.com/inito_website/star.png"
            alt="star"
          />
        </div>
        <div className="review-text">{currentReview.text}</div>
      </div>
      <div className="review-name">{currentReview.username}</div>
    </section>
  );
};

export default Reviews;
