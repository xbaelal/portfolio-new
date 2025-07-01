import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const imgBase = "https://res.cloudinary.com/dadewffae/image/upload/";
const gitBase = "https://github.com/xbaelal/";

const ProjectsData = [
  {
    title: "Todo List App",
    description:
      "The Todo List App is a sleek React-based task manager with add, edit, delete, and toggle completion features. It uses Context API for state management and local storage for data persistence. Built with React hooks + Tailwind CSS, it offers a clean, intuitive interface for organizing tasks.",
    imageUrl: `${imgBase}v1751311630/todo-app_hswrcb.png`,
    liveUrl: "https://todo-react-baelal.vercel.app/",
    githubUrl: `${gitBase}Todo-React`,
  },
  {
    title: "MealMancer",
    description:
      "MealMancer is an AI-powered food recommendation app that suggests recipes based on your available ingredients, reducing food waste and meal-planning stress. It features smart recipe generation, real-time error handling, and a pantry-based personalization system for tailored cooking ideas.",
    imageUrl: `${imgBase}v1751311663/mealMancer_sbl71o.png`,
    liveUrl: "https://meal-mancer.vercel.app/",
    githubUrl: `${gitBase}meal-mancer`,
  },
  {
    title: "Movie Database App",
    description:
      "The Movie Database App is a React + TypeScript web application that fetches data from a free movie API to display details about movies and TV shows. Users can explore ratings, genres, and overviews, with dedicated search options for movies, TV shows, and genres for seamless browsing.",
    imageUrl: `${imgBase}v1751312165/movieDb_ups2nl.png`,
    liveUrl: "https://themovies-db.vercel.app/",
    githubUrl: `${gitBase}movie-database-app`,
  },
  {
    title: "Ghariyal (E-commerce) Store",
    description:
      "A high-converting Shopify project built for a premium watch store, now live and processing orders. Features premium product showcases, smart collection filtering (by gender, brand, price), High-resolution galleries with zoom functionality, and instant checkout – all optimized for mobile.",
    imageUrl: `${imgBase}v1751312266/ghariyal_vbsxvh.png`,
    liveUrl: "https://ghariyal.pk",
  },
  {
    title: "ZamZam Kitchen",
    description:
      "A live, responsive website for a traditional catering business, built with React, TypeScript, and SCSS. Designed for a high-end catering client, Features custom interactive Swiper sliders for food showcases, menus, packages, and subtle animations to enhance visual appeal.",
    imageUrl: `${imgBase}v1751313044/zk_eyvel4.png`,
    liveUrl: "https://zamzamkitchen.pk/",
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
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.9,
            spaceBetween: 20,
          },
        }}
        className="projects_slider"
      >
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
