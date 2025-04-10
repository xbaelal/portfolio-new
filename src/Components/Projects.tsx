import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ProjectsData = [
  {
    title: "Project One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam magni iure atque nobis molestiae modi commodi pariatur veritatis facilis fugiat, illum error porro minima nisi. Obcaecati accusantium possimus facere voluptate velit impedit consequuntur deleniti? Reprehenderit eligendi quod dicta expedita quidem vero distinctio, nobis iure rerum voluptas nihil vel aliquam.",
    imageUrl: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam magni iure atque nobis molestiae modi commodi pariatur veritatis facilis fugiat, illum error porro minima nisi. Obcaecati accusantium possimus facere voluptate velit impedit consequuntur deleniti? Reprehenderit eligendi quod dicta expedita quidem vero distinctio, nobis iure rerum voluptas nihil vel aliquam.",
    imageUrl: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam magni iure atque nobis molestiae modi commodi pariatur veritatis facilis fugiat, illum error porro minima nisi. Obcaecati accusantium possimus facere voluptate velit impedit consequuntur deleniti? Reprehenderit eligendi quod dicta expedita quidem vero distinctio, nobis iure rerum voluptas nihil vel aliquam.",
    imageUrl: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam magni iure atque nobis molestiae modi commodi pariatur veritatis facilis fugiat, illum error porro minima nisi. Obcaecati accusantium possimus facere voluptate velit impedit consequuntur deleniti? Reprehenderit eligendi quod dicta expedita quidem vero distinctio, nobis iure rerum voluptas nihil vel aliquam.",
    imageUrl: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam magni iure atque nobis molestiae modi commodi pariatur veritatis facilis fugiat, illum error porro minima nisi. Obcaecati accusantium possimus facere voluptate velit impedit consequuntur deleniti? Reprehenderit eligendi quod dicta expedita quidem vero distinctio, nobis iure rerum voluptas nihil vel aliquam.",
    imageUrl: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam magni iure atque nobis molestiae modi commodi pariatur veritatis facilis fugiat, illum error porro minima nisi. Obcaecati accusantium possimus facere voluptate velit impedit consequuntur deleniti? Reprehenderit eligendi quod dicta expedita quidem vero distinctio, nobis iure rerum voluptas nihil vel aliquam.",
    imageUrl: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam magni iure atque nobis molestiae modi commodi pariatur veritatis facilis fugiat, illum error porro minima nisi. Obcaecati accusantium possimus facere voluptate velit impedit consequuntur deleniti? Reprehenderit eligendi quod dicta expedita quidem vero distinctio, nobis iure rerum voluptas nihil vel aliquam.",
    imageUrl: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam magni iure atque nobis molestiae modi commodi pariatur veritatis facilis fugiat, illum error porro minima nisi. Obcaecati accusantium possimus facere voluptate velit impedit consequuntur deleniti? Reprehenderit eligendi quod dicta expedita quidem vero distinctio, nobis iure rerum voluptas nihil vel aliquam.",
    imageUrl: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicinrem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam magni iure atque nobis molestiae modi commodi pariatur veritatis facilis fugiat, illum error porro minima nisi. Obcaecati accusantium possimus facere voluptate velit impedit consequuntur deleniti? Reprehenderit eligendi quod dicta expedita quidem vero distinctio, nobis iure rerum voluptas nihil vel aliquam.",
    imageUrl: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Work</h2>
      <p>A collection of projects I've worked on.</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="projects_slider">
        {ProjectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
