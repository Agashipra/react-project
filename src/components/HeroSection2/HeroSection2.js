import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroSection2.css";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

const HeroSection2 = ({ isActive }) => {
  const heroTextRef = useRef(null);
  const heroPrintRef = useRef(null);
  const heroImagesRef = useRef([]);
  const exploreButtonRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.fromTo(
        heroTextRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(
        heroPrintRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
      );

      heroImagesRef.current.forEach((img, index) => {
        gsap.fromTo(
          img,
          { scale: 1.2, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
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
          gsap.to(heroPrintRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });
          heroImagesRef.current.forEach((img) => {
            gsap.to(img, {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            });
          });
        } else {
          gsap.to(heroTextRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to(heroPrintRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });
          heroImagesRef.current.forEach((img, index) => {
            gsap.to(img, {
              scale: 1.2,
              opacity: 0.6,
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
        <h1>Striking, Sleek and Stylish</h1>
      </div>
      <div className="hero-print" ref={heroPrintRef}>
        <h2>Velvet Prints</h2>
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
            src={img3}
            alt="Print 3"
            ref={(el) => (heroImagesRef.current[0] = el)}
          />
        </div>
        <div className="polaroid">
          <img
            src={img4}
            alt="Print 4"
            ref={(el) => (heroImagesRef.current[1] = el)}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
