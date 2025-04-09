const socialLinks = [
  {
    id: 1,
    platform: "github",
    icon: "/github2.png",
    url: "https://github.com/xbaelal",
    text: "github.com/xbaelal",
  },
  {
    id: 2,
    platform: "linkedIn",
    icon: "/linkedin.png",
    url: "https://www.linkedin.com/in/baelal/",
    text: "linkedin.com/in/baelal/",
  },
  {
    id: 3,
    platform: "gmail",
    icon: "/email.png",
    url: "mailto:memonbilal760@gmail.com",
    text: "memonbilal760@gmail.com",
  },
];

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_socials">
        {socialLinks.map(({ id, icon, platform, url, text }) => (
          <div key={id} className="links">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt={platform} />
              <p>{text}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="footer_content">
        <h3>© Bilal Muhammad Ahmed - 2025</h3>
      </div>
    </section>
  );
};

export default Footer;
