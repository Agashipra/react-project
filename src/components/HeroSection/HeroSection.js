import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroSection.css";

const HeroSection = () => {
  const printTextRef = useRef(null);
  const heroImagesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      printTextRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.6 }
    );

    heroImagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: index * 0.3,
          ease: "power2.out",
        }
      );
    });

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 50) {
        gsap.to(printTextRef.current, {
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
        gsap.to(printTextRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
        heroImagesRef.current.forEach((img) => {
          gsap.to(img, {
            scale: 0.7,
            opacity: 0,
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
  }, []);

  return (
    <section className="hero">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="hero-text">
        <h1>ETRO</h1>
        <h2>HOME TEXTILE</h2>
      </div>
      <div className="print-text" ref={printTextRef}>
        <h1>THIS IS A PRINT COLLECTION</h1>
        <h2>PRINT</h2>
        <a href="#collection" className="btn">
          Explore Collection
        </a>
      </div>
      <div className="hero-images">
        <div className="polaroid">
          <img
            src="/images/img1.jpg"
            alt="Print 1"
            ref={(el) => (heroImagesRef.current[0] = el)}
          />
        </div>
        <div className="polaroid">
          <img
            src="/images/img2.jpg"
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

export default HeroSection;
