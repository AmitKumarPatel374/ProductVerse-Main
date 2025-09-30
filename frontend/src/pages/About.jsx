
import React, { useEffect, useRef } from "react";
import { FaUsers, FaLaptopCode } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ✅ import

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // ✅ register ScrollTrigger

    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-img", {
        opacity: 0,
        x: -80,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".about-text", {
        opacity: 0,
        x: 80,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
      });

      // Titles
      gsap.utils.toArray(".section-title").forEach((title, i) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power2.out",
        });
      });

      // List items
      gsap.utils.toArray(".list-item").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          opacity: 0,
          x: -20,
          duration: 0.6,
          delay: i * 0.15,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
        <div ref={containerRef} className="mt-16 px-6 py-12 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="about-title text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-14 tracking-tight">
        About <span className="text-blue-600">ProductVerse</span>
      </h1>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg"
          alt="About Us"
          className="about-img rounded-2xl shadow-2xl border border-gray-200"
        />

        <div className="about-text">
          <h2 className="section-title text-2xl font-semibold mb-5 text-blue-600 flex items-center gap-3">
            <IoRocketSharp className="text-3xl" /> Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At <strong>ProductVerse</strong>, we aim to provide a seamless and enjoyable product
            discovery experience. Whether you're looking for the latest gadgets, stylish accessories,
            or something special for your loved ones, we have it all.
          </p>
        </div>
      </div>

      {/* Developer Section */}
      <div className="mt-20">
        <h2 className="section-title text-2xl font-semibold text-blue-600 flex items-center gap-3 mb-5">
          <FaUsers className="text-3xl" /> Meet the Developer
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          This application is built by <strong>Amit Kumar Patel</strong>, a passionate web developer
          focused on crafting intuitive user interfaces using React, Redux, and Tailwind CSS. Amit
          loves building useful applications that solve real-world problems and help people interact
          with technology more effectively.
        </p>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-20">
        <h2 className="section-title text-2xl font-semibold text-blue-600 flex items-center gap-3 mb-5">
          <FaLaptopCode className="text-3xl" /> Tech Stack
        </h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li className="list-item">⚛️ React for frontend UI</li>
          <li className="list-item">🗃️ Redux for state management</li>
          <li className="list-item">🌐 React Router for navigation</li>
          <li className="list-item">🎨 Tailwind CSS for modern responsive design</li>
          <li className="list-item">🔥 Lazy Loading and Infinite Scroll for performance</li>
          <li className="list-item">🟢 Node.js (with json-server) for running db.json</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
