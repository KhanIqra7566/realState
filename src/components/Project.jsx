import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const projects = [
    { img: "/project_img_1.jpg", title: "Skyline Haven", price: "₹2,50,000", location: "California" },
    { img: "/project_img_2.jpg", title: "Vista Verde", price: "₹2,50,000", location: "San Francisco" },
    { img: "/project_img_3.jpg", title: "Serenity Suites", price: "₹2,50,000", location: "Chicago" },
    { img: "/project_img_4.jpg", title: "Central Square", price: "2,50,000", location: "Los Angeles" },
  ];

  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth >= 1024 ? projects.length : 1);
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Project <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Where Dreams Meet Reality: Explore Our Projects
      </p>

      <div className="flex justify-end items-center mb-8">
        <button onClick={prevProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project">
          <img src="/left_arrow.svg" alt="Previous" />
        </button>
        <button onClick={nextProject} className="p-3 bg-gray-200 rounded" aria-label="Next Project">
          <img src="/right_arrow.svg" alt="Next" />
        </button>
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.img} alt={project.title} className="w-full" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md text-center">
                  <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                  <p className="text-gray-600">
                    {project.price} | {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project
