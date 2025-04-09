import { useState } from "react";
import headerImage from "../assets/headerImage.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleModal = () => {
    setIsActive(!isActive);
    console.log("1");
  };
  const socialLinks = [
    {
      id: 1,
      platform: "LinkedIn",
      icon: "/linkedin.png",
      url: "https://www.linkedin.com/in/baelal/",
    },
    {
      id: 2,
      platform: "Gmail",
      icon: "/email.png",
      url: "mailto:memonbilal760@gmail.com",
    },
  ];
  return (
    <section className="hero">
      <div className="hero_main">
        <div className="hero_upper">
          <div className="contact_btn">
            <button className="btn" onClick={toggleModal}>
              <h3>Contact Me</h3>
            </button>
          </div>
          {isActive && (
            <div className="modal_overlay" onClick={toggleModal}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal_header">
                  <h2>Contact Info</h2>
                  <button className="modal_close" onClick={toggleModal}>
                    &times;
                  </button>
                </div>
                <div className="modal_body">
                  <p>Feel free to reach out to me via email or LinkedIn.</p>
                  <div className="footer_socials">
                    {socialLinks.map(({ id, icon, platform, url }) => (
                      <div key={id} className="links">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <img src={icon} alt={platform} />
                          <p>{platform}</p>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hero_lower">
          <div className="hero_lower_content">
            <h1>Welcome.</h1>
            <p>
              My name is Bilal Muhammad Ahmed, a <strong>Front-End Developer</strong> based in Karachi, Pakistan. I have
              worked on a wide range of front-end projects, with a focus on creating clean, well-crafted interfaces that
              not only look great but also provide a seamless user experience.
            </p>
          </div>
          <div className="hero_img">
            <img src={headerImage} alt="laptop" />{" "}
          </div>
        </div>
      </div>
      <svg className="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
      </svg>
    </section>
  );
};

export default Header;
