import React from 'react'
import {motion} from "framer-motion"

const Testimonial = () => {
  const testimonials = [
    {
      name: "Donald Jackman",
      position: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      feedback:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
    {
      name: "Richard Nelson",
      position: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4,
      feedback:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
    {
      name: "James Washington",
      position: "Co-Founder",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      feedback:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
  ];

  return (
    <motion.div
    initial = {{opacity: 0, y:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
     className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 font-light">Testimonials</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.position}</p>
            <div className="flex justify-center my-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  style={{ color: i < testimonial.rating ? "#FFEB3B" : "#D1D5DB" }} // Custom color
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;


