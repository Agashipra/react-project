import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroSection3.css";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

const HeroSection3 = ({ isActive }) => {
  const heroTextRef = useRef(null);
  const heroPrintRef = useRef(null);
  const heroImagesRef = useRef([]);
  const exploreButtonRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.fromTo(
        heroTextRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      heroImagesRef.current.forEach((img, index) => {
        gsap.fromTo(
          img,
          { opacity: 0, x: index % 2 === 0 ? -200 : 200 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            delay: index * 0.3,
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
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power2.out",
            });
          });
        } else {
          gsap.to(heroTextRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });
          heroImagesRef.current.forEach((img, index) => {
            gsap.to(img, {
              opacity: 0,
              x: index % 2 === 0 ? -200 : 200,
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
      <div className="hero-text" ref={heroTextRef}>
        <h1>Colourful, Geometrical and Sophisticated</h1>
      </div>
      <div className="hero-print" ref={heroPrintRef}>
        <h2>Ethnic Textures</h2>
      </div>
      <div className="explore-button" ref={exploreButtonRef}>
        <button
          style={{
            padding: "15px 40px",
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
            src={img5}
            alt="Print 5"
            ref={(el) => (heroImagesRef.current[0] = el)}
          />
        </div>
        <div className="polaroid">
          <img
            src={img6}
            alt="Print 6"
            ref={(el) => (heroImagesRef.current[1] = el)}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;
