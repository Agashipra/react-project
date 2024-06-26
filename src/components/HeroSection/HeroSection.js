import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroSection.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import logo from "./images/logo.jpg";

const HeroSection1 = ({ isActive }) => {
  const heroTextRef = useRef(null);
  const heroPrintRef = useRef(null);
  const heroImagesRef = useRef([]);
  const exploreButtonRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.fromTo(
        heroTextRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      heroImagesRef.current.forEach((img, index) => {
        gsap.fromTo(
          img,
          { y: 50, opacity: 0, rotation: index % 2 === 0 ? -5 : 5 },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1.5,
            delay: index * 0.5,
            ease: "power2.out",
          }
        );
      });

      const handleScroll = () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 50) {
          gsap.to(heroTextRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });
          heroImagesRef.current.forEach((img, index) => {
            gsap.to(img, {
              y: 0,
              opacity: 1,
              rotation: 0,
              duration: 1,
              ease: "power2.out",
            });
          });
        } else {
          gsap.to(heroTextRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });
          heroImagesRef.current.forEach((img, index) => {
            gsap.to(img, {
              y: 50,
              opacity: 0,
              rotation: index % 2 === 0 ? -5 : 5,
              duration: 1,
              ease: "power2.out",
            });
          });
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isActive]);

  return (
    <section className={`hero ${isActive ? "active" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hero-header">
        <h1 className="brand-name">ETRO</h1>
        <h2 className="brand-subtitle">Home Textile</h2>
      </div>
      <div className="hero-text" ref={heroTextRef}>
        <h1>This is a print Collection</h1>
      </div>
      <div className="hero-print" ref={heroPrintRef}>
        <h2>PRINT</h2>
      </div>
      <div className="explore-button" ref={exploreButtonRef}>
        <button
          style={{
            padding: "15px 30px",
            fontSize: "1.2em",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Explore Collection
        </button>
      </div>
      <div className="hero-images">
        <div className="polaroid">
          <img
            src={img1}
            alt="Print 1"
            ref={(el) => (heroImagesRef.current[0] = el)}
          />
        </div>
        <div className="polaroid">
          <img
            src={img2}
            alt="Print 2"
            ref={(el) => (heroImagesRef.current[1] = el)}
          />
        </div>
      </div>
      <div className="top-right">
        <div className="icon">
          <i className="fas fa-search"></i> Search
        </div>
        <div className="icon">
          <i className="fas fa-heart"></i> Wishlist
        </div>
        <div className="icon">
          <i className="fas fa-phone"></i> Contact Us
        </div>
        <div className="icon">
          <i className="fas fa-user"></i> My Account
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
