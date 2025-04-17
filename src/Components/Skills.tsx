import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const skills = [
  {
    id: 1,
    title: "React",
    icon: "/react.png",
  },
  {
    id: 2,
    title: "TypeScript",
    icon: "/ts.png",
  },
  {
    id: 3,
    title: "Swiper",
    icon: "/swiper.svg",
  },
  {
    id: 4,
    title: "SASS",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/sass-icon",
  },
  {
    id: 5,
    title: "Bootstrap 5",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/bootstrap",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/tailwind-css",
  },
  {
    id: 7,
    title: "Git",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/git",
  },
  {
    id: 8,
    title: "GitHub",
    icon: "/github2.png",
  },
  {
    id: 9,
    title: "JavaScript",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/js",
  },
  {
    id: 10,
    title: "HTML5",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/html",
  },
  {
    id: 11,
    title: "CSS",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/css",
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills_contentWrapper">
        <h2 className="skills_heading">My Skills</h2>
        <p className="skills_subheading">I have experience with the following technologies and tools</p>
      </div>
      <div className="skills__container">
        <Swiper
          slidesPerView={5.7}
          spaceBetween={80}
          loop={true}
          freeMode={true}
          speed={6000}
          allowTouchMove={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 3.2,
              spaceBetween: 45,
            },
            480: {
              slidesPerView: 4.2,
              spaceBetween: 55,
            },
            768: {
              slidesPerView: 5.2,
              spaceBetween: 65,
            },
            1024: {
              slidesPerView: 7.7,
              spaceBetween: 80,
            },
            1440: {
              slidesPerView: 8.2,
              spaceBetween: 100,
            },
          }}
          className="skills_slider">
          {skills.map(({ id, title, icon }) => (
            <SwiperSlide key={id}>
              <div className="icons">
                <img src={icon} alt={title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
