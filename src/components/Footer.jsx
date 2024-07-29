const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="company-con">
          <a className="a-bold">Company</a>
          <a className="a-list">About Us</a>
          <a className="a-list">Careers</a>
          <a className="a-list">Buy Now</a>
          <a className="a-list">Contact Us</a>
        </div>

        <div className="support-con">
          <a className="a-bold">Support</a>
          <a className="a-list">FAQ</a>
          <a className="a-list">Terms</a>
          <a className="a-list">Privacy Policy</a>
          <a className="a-list">Returns & Warranty</a>
        </div>
        <div className="address-con">
          <a className="a-bold">Get In Touch</a>
          <a className="a-list">+1 815-369-0989</a>
          <a className="a-list">help@inito.com</a>
          <a className="a-list">
            355 Bryant Street, Suite 403, San Francisco 94017
          </a>
        </div>
        <div className="socialmedia-con">
          <a
            href="https://www.facebook.com/groups/initofertility"
            target="_blank"
          >
            <img
              src="https://cdn.inito.com/inito_website/footer/Facebook - Negative.png"
              className="img"
            />
          </a>
          <a href="https://www.instagram.com/initofertility" target="_blank">
            <img
              src="https://cdn.inito.com/inito_website/footer/Instagram - Negative.png"
              className="img"
            />
          </a>
          <a href="https://www.linkedin.com/company/initoinc" target="_blank">
            <img
              src="https://cdn.inito.com/inito_website/footer/LinkedIn - Negative.png"
              className="img"
            />
          </a>
          <a href="https://www.youtube.com/@Inito" target="_blank">
            <img
              src="https://cdn.inito.com/inito_website/footer/YouTube - Negative.png"
              className="img"
            />
          </a>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-inner-con">
          <img
            className="footer-logo"
            src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo Inito Small-469e31eca89154d7507eaa91c3dd05b75cc908346860f04e2729a9fca8094e2b.svg"
          />
          <p className="copyright">Copyright 2023, Inito Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
