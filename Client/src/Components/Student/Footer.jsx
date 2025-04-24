import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AppContext } from "@/Context/AppContext";
import { useUser } from "@clerk/clerk-react";

function Footer() {
  const {navigate} = useContext(AppContext);
  const user = useUser();

  return (
    <footer className="bg-[#511cac] text-white w-full pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <img
            onClick={() => navigate("/")}
            src="/Designer-removebg-preview.png"
            alt="logo"
            className="w-20 h-20 mx-auto md:mx-0 cursor-pointer"
          />
          <div className="mt-2 space-x-4">
            <Link className="text-white hover:text-black font-bold" to="/">Home</Link>
            <Link className="text-white hover:text-black font-bold" to="/">About Us</Link>
            <Link className="text-white hover:text-black font-bold" to="/">Privacy Policy</Link>
          </div>
          <p className="mt-2">
            Empowering Education: Quality Teaching. Engaged Learning.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h2 className="text-lg font-bold">Connect with us</h2>
          <p className="mt-1">
            <a
              href="mailto:vishalpandit3456g@gmail.com"
              className="text-white hover:text-black"
            >
              Email: vishalpandit3456g@gmail.com
            </a>
          </p>
          <div className="mt-2 space-x-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/vishalsharma00"
              className="text-blue-600 hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/vishalsharma2122"
              className="text-black hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/pandatvishal315/"
              className="text-pink-500 hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-white/30 pt-4 pb-4 text-sm text-white/60">
      Copyright 2025 &copy; CodingWithVishal. All Right Reserved 
      </div>
    </footer>
  );
}

export default Footer;
