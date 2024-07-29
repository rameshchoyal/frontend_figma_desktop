import SlickComponent from "./SlickComponent";

const WhyInito = () => {
  return (
    <div className="why-inito">
      <div className="why-measure-progesterone">
        <img
          className="calendar"
          src="https://cdn.inito.com/inito_website/blue_calendar.png"
          alt="Calendar"
        />
        <h6>Why measure the PdG? (urine metabolite of progesterone)?</h6>
        <p>
          <strong>Anovulation</strong> (having a menstrual cycle with no egg) is
          actually a common occurrence, affecting 1 in 10 women*.
          <br />
          <br />A sure way to confirm ovulation is a
          <strong> rise in Progesterone </strong> level after peak fertility.
          Progesterone also supports implantation and elevated levels of PdG
          during the 7-10 day window after ovulation correlates to higher
          chances of a successful pregnancy.
          <br />
          <br />
        </p>
        <div className="doctor-review">
          <span className="source">
            * Source: National Institutes of Health
          </span>
          <span className="quote">
            “Inito is all that you need to give you the best chance of
            conception."
          </span>
          <div className="doctor">
            <img
              className="doctor-image"
              src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg"
              alt="Dr. Rachel Wagner"
            />
            <div className="doctor-info">
              <strong className="doctor-name">Dr. Rachel Wagner</strong>
              <em className="doctor-qualification">MD</em>
            </div>
          </div>
        </div>
      </div>

      <div className="blue-background">
        <h2>
          Why Inito is the smarter way to get
          <span className="image_as_underline"> pregnant</span>
        </h2>
        <div className="cycle-card">
          <div className="cycle-content">
            <div className="text-content">
              <h2>
                Adapts to your <span className="ir-color">ir</span>regular cycle
              </h2>
              <div className="cycle-discription">
                Most ovulation kits have a set value or a threshold, making them
                likely to give a false read if your hormones fall outside the
                average range.
                <br />
                <br />
                Every woman is unique, especially with a condition like PCOS or
                Thyroid which can influence hormone levels. Inito measures real
                values of your hormones to personalize results to the unique
                you.
              </div>
            </div>
            <div className="cycle-img">
              <img className="girl-img" src="/image.png" alt="girl-checking" />
            </div>
          </div>
        </div>
        <div className="track-card">
          <div className="card-image">
            <img
              className="track-img"
              src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything.jpg"
              alt="Inito tracks everything"
            />
            <div className="iphone-slide">
              <SlickComponent />
            </div>
          </div>
          <div className="track-content">
            <h1>Inito tracks everything so you don’t have to</h1>
            <div className="track-discription">
              The Inito Fertility Monitor comes with a free easy-to-use App, so
              you can track your fertile days with ease and know exactly when
              you ovulate.
              <br />
              <br />
              Our App notifies you for everything:
              <ul className="blue-bullet-list">
                <li>Your fertility levels</li>
                <li>When to test on the right days</li>
                <li>When you’ve successfully ovulated</li>
                <li>And when to roll into bed!</li>
              </ul>
            </div>
            <button className="get-kit-button">Get the Inito Kit</button>
          </div>
        </div>
        <div className="graph-con">
          <section className="graph-card">
            <div className="graph-text">
              <h2>
                Get charts and actual{" "}
                <span className="image_as_underline">values</span> of your{" "}
                <span className="inline-image">
                  hormones
                  <img
                    className="homepage-4-star"
                    src="https://cdn.inito.com/inito_website/homepage_4_star.png"
                    alt="Star"
                  />
                </span>
              </h2>
              <div className="graph-para">
                Actual numerical values are necessary to know whether your PdG
                levels are sufficient enough to support a healthy pregnancy.
                <br />
                <br />
                Studies show that PdG levels lower than 7.9ng/ml in serum
                (around 10ug/ml PdG) 6-8 days after ovulation are associated
                with lower pregnancy outcomes.
              </div>
            </div>
            <picture className="graph-image">
              <source
                media="(min-width:769px)"
                srcSet="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png"
              />
              <source
                media="(max-width:768px)"
                srcSet="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values.png"
              />
              <img
                src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png"
                alt="Charts and actual values"
              />
            </picture>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhyInito;
