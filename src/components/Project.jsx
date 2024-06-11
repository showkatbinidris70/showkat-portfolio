import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/academic.png";
import project3 from "../assets/images/e-trade.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.png";
import project9 from "../assets/images/project-9.png";
import project10 from "../assets/images/project-10.png";
import project_person from "../assets/images/project_person1.png";
import project_mosque from "../assets/images/mosque.png";
import project_parallax from "../assets/images/parallax.png";
import project_digital_agency from "../assets/images/digital-agency.png";
import project_ekshop from "../assets/images/ekshop.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project_mosque,
      name: "Search Mosque (Webflow)",
      github_link: "https://showkats-design.webflow.io/",
      live_link: "https://showkats-design.webflow.io/",
    },
    {
      img: project_parallax,
      name: "Use Parallax (Webflow)",
      github_link: "https://showkats-design.webflow.io/webflow-tutorial-101",
      live_link: "https://showkats-design.webflow.io/webflow-tutorial-101",
    },
    {
      img: project_digital_agency,
      name: "Digital Agency (Webflow)",
      github_link: "https://my-five-star-site-7568bb.webflow.io/",
      live_link: "https://my-five-star-site-7568bb.webflow.io/",
    },
    {
      img: project_ekshop,
      name: "Ekshop New Design",
      github_link: "https://github.com/showkatbinidris70/ekshop-new-design",
      live_link: "https://ekshop-new-design.vercel.app/",
    },
    {
      img: project1,
      name: "Theme Development",
      github_link: "https://github.com/showkatbinidris70/nano-Elite-Steel-html-css",
      live_link: "https://nano-elite-steel-html-css.vercel.app/",
    },
    {
      img: project10,
      name: "Noipunno Landing Page",
      github_link: "https://github.com/showkatbinidris70/noipunno-landing-page",
      live_link: "https://noipunno-landing-page.vercel.app/",
    },
    {
      img: project2,
      name: "Academic Website",
      github_link: "https://github.com/showkatbinidris70/dskm",
      live_link: "https://dskm-home-page-design.netlify.app/",
    },
    {
      img: project4,
      name: "Sonargaon Library",
      github_link:
        "https://github.com/showkatbinidris70/nanosoft-sonargaon-library",
      live_link: "https://nanosoft-sonargaon-library.vercel.app/",
    },
    {
      img: project7,
      name: "e-commerce template Ekshop",
      github_link: "https://charming-pothos-aa55b8.netlify.app/",
      live_link: "https://charming-pothos-aa55b8.netlify.app/",
    },
    {
      img: project3,
      name: "Agro Farm",
      github_link: "https://github.com/showkatbinidris70/nanosoft-first-task-agro",
      live_link: "https://nanosoft-first-task-agro-farm.vercel.app/",
    },
  
    {
      img: project5,
      name: "e-learning",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://stellular-starlight-8558fc.netlify.app/",
    },
    {
      img: project6,
      name: "e-commerce template",
      github_link: "https://github.com/showkatbinidris70/nano-e-commerce-template-react",
      live_link: "https://visionary-buttercream-1ed34f.netlify.app/",
    },
    {
      img: project8,
      name: "Debate Management System",
      github_link: "https://github.com/showkatbinidris70/nano-debate-management-figma-to-html",
      live_link: "https://nano-debate-management-figma-to-html.vercel.app/",
    },
    {
      img: project9,
      name: "Bangladesh Railway Police",
      github_link: "https://github.com/showkatbinidris70/nano-bd-railway-police-figma-to-html",
      live_link: "https://nano-bd-railway-police-figma-to-html.vercel.app/",
    },
  
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
