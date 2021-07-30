import React from "react";
import "./Projects.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/a11y/a11y.scss";

import Media from "react-media";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const project = [
  {
    id: 1,
    name: "LunchClub-Clone",
    url: "https://lunchclub-clone.firebaseapp.com/",
    image: "/Images/lunchclub.png",
  },
  {
    id: 2,
    name: "ClonedIn",
    url: "https://clonedin-68f20.web.app/",
    image: "/Images/ClonedIN.png",
  },
  {
    id: 3,
    name: "HODLINFO",
    url: "https://hm-hodlinfo.netlify.app",
    image: "/Images/HODLINFO.png",
  },
  {
    id: 4,
    name: "Pizza",
    url: "https://react-pizza-hm.netlify.app",
    image: "/Images/Pizza.png",
  },
  {
    id: 5,
    name: "HM-Cloud",
    url: "https://loruki-demo-website.netlify.app",
    image: "/Images/Loruki.png",
  },
  {
    id: 6,
    name: "Todos-List",
    url: "https://react-todos-hm.netlify.app",
    image: "/Images/Todos.png",
  },
  {
    id: 7,
    name: "Tic Tac Toe",
    url: "https://js-games-projects.netlify.app/html/tictactoe.html",
    image: "/Images/TicTacToe.png",
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="projectsbox">
        <Media query={{ maxWidth: 800 }}>
          {(matches) =>
            matches ? (
              <>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  A11y
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {project.map((user) => (
                    <SwiperSlide key={user.id}>
                      <div className="Projectscard">
                        <h2>{user.name}</h2>
                        <a href={user.url} rel="noreferrer" target="_blank">
                          <LazyLoadImage
                            effect="blur"
                            className="siteimage"
                            src={user.image}
                            alt=""
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            ) : (
              <>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  A11y
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  {project.map((user) => (
                    <SwiperSlide key={user.id}>
                      <div className="Projectscard">
                        <h2>{user.name}</h2>
                        <a href={user.url} rel="noreferrer" target="_blank">
                          <LazyLoadImage
                            effect="blur"
                            className="siteimage"
                            src={user.image}
                            alt=""
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            )
          }
        </Media>
        <h3>Click on the image to Visit</h3>
      </div>
    </div>
  );
}

export default Projects;
