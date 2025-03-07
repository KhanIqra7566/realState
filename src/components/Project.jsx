import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const projects = [
    { img: "/project_img_1.jpg", title: "Skyline Haven", price: "₹2,50,000", location: "California" },
    { img: "/project_img_2.jpg", title: "Vista Verde", price: "₹2,50,000", location: "San Francisco" },
    { img: "/project_img_3.jpg", title: "Serenity Suites", price: "₹2,50,000", location: "Chicago" },
    { img: "/project_img_4.jpg", title: "Central Square", price: "₹2,50,000", location: "Los Angeles" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full text-center"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Project <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
      </h1>
      <p className="mb-8 max-w-80 mx-auto">
        Where Dreams Meet Reality: Explore Our Projects
      </p>

      <Slider {...settings} className="overflow-hidden">
        {projects.map((project, index) => (
          <div key={index} className="px-2">
            <img src={project.img} alt={project.title} className="w-full rounded-lg h-[300px]" />
            <div className="bg-white px-4 py-2 mt-2 shadow-md text-center">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600">{project.price} | {project.location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Project;
