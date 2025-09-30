import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const PageNotFound = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".error-code", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.7)",
      });

      gsap.from(".error-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".error-btn", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-r from-blue-50 via-white to-purple-50"
    >
      {/* Big 404 Code */}
      <h1 className="error-code text-9xl font-extrabold text-blue-600 drop-shadow-lg">404</h1>

      {/* Message */}
      <p className="error-text mt-6 text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Page not found
      </p>
      <p className="error-text mt-2 text-gray-600 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="error-btn mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
      >
        Go Back Home
      </Link>

      {/* Extra Animation (Floating Shape) */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-purple-200 rounded-full animate-bounce opacity-70"></div>
      <div className="absolute bottom-20 right-16 w-20 h-20 bg-blue-100 rounded-full animate-pulse opacity-60"></div>
    </div>
  );
};

export default PageNotFound;
