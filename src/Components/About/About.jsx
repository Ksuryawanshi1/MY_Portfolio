import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"   
import ProfileImage from "../../assets/DP1.png"

const About = () => {
  return (
    <section 
      id="about" 
      className="py-12 px-[7vw] lg:px-[15vw] font-sans mt-10 md:mt-12 lg:mt-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left side - Image with slide-in from left */}
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2,ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={ProfileImage}
              alt="Kunal Suryawanshi"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_15px_35px_rgba(130,69,236,0.6)] hover:scale-105 transition-transform duration-500"
            />
          </Tilt>
        </motion.div>

        {/* Right side - Content with slide-in from right */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name with gradient */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            Kunal Suryawanshi
          </h2>

          {/* Skills with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer", 2000,
                "Coder", 2000,
                "Java Developer", 2000,
                "Problem Solver", 2000,
                "React.js Developer", 2000
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
          I’m a passionate Java Developer and Spring Boot Backend Engineer specializing in building secure, scalable, and high-performance backend systems. I work with Spring Boot, Spring Security, Hibernate, JPA, REST APIs, and relational databases like MySQL and PostgreSQL, with experience in Redis caching and full-stack integration using React. I enjoy designing clean architectures, solving real-world problems, and continuously improving my skills.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            
            {/* Download CV */}
            <a
              href="https://drive.google.com/file/d/1iAK7KaqqkWeJcdz8etCt46i7vIGlrvSW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-110 shadow-lg"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 10px rgba(130,69,236,0.7), 0 0 25px rgba(130,69,236,0.5)"
              }}
            >
              DOWNLOAD CV
            </a>

            {/* Contact Me */}
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-110 shadow-lg"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 10px rgba(25,135,84,0.7), 0 0 25px rgba(25,135,84,0.5)"
              }}
            >
              CONTACT ME
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
