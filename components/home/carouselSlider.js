import React, { useState, useRef, useEffect } from "react";
import styles from "./carouselSlider.module.css";
import Image from "next/image";
import { Box } from "theme-ui";

const CarouselSlider = ({ isMobile = false }) => {
  const carouselData = [
    {
      assetUrl: "/assets/slide1.png",
    },
    {
      assetUrl: "/assets/slide2.png",
    },
    {
      assetUrl: "/assets/slide3.png",
    },
    {
      assetUrl: "/assets/slide4.png",
    },
  ];
  const [slide, setSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef();

  const left = () => {
    if (currentSlide > 0) {
      slide === 0
        ? setSlide(-100 * (carouselData.length - 1))
        : setSlide(slide + 100);
      const newSlideNum =
        currentSlide > 0 ? currentSlide - 1 : carouselData.length - 1;
      setCurrentSlide(newSlideNum);
    }
  };

  const right = () => {
    if (currentSlide < carouselData.length - 1) {
      slide === -100 * (carouselData.length - 1)
        ? setSlide(0)
        : setSlide(slide - 100);
      const newSlideNum =
        currentSlide < carouselData.length - 1 ? currentSlide + 1 : 0;
      setCurrentSlide(newSlideNum);
    }
  };

  useEffect(() => {
    const slider = document.querySelector("#challengesScroll");

    slider.addEventListener("scroll", () => {
      setCurrentSlide(Math.ceil(scrollRef?.current?.scrollLeft / 400));
    });

    return () => {
      slider?.removeEventListener("scroll", () => null);
    };
  }, []);

  const CarouselCard = ({ assetUrl = "/assets/slide1.png", index }) => {
    return (
      <Box
        id={index}
        sx={{
          minWidth: ["327px", "327px", "1200px"],
          // minHeight: "100%",
          // display: "flex",
          // zIndex: 1,
          // flexDirection: ["column-reverse", "column-reverse", "row"],
        }}
      >
        <Image
          src={assetUrl}
          height="675px"
          width="1200px"
          objectFit="contain"
        />
        {/* <Box
          sx={{
            width: "160px",
            height: "300px",
            backgroundColor: "red",
            marginRight: "20px",
          }}
        /> */}
      </Box>
    );
  };

  return (
    <>
      <div
        className={styles.slider}
        style={{
          overflow: isMobile ? "scroll" : "hidden",
          scrollSnapType: "x",
          //   marginTop: isMobile ? "-80px" : "-100px",
          backgroundColor: "#F7F7F7",
        }}
        id="challengesScroll"
        ref={scrollRef}
      >
        {carouselData.map((d, index) => (
          <div
            className={styles.container1}
            key={`${index}-${d.assetUrl}`}
            style={{
              transform: `translateX(${slide}%)`,
              scrollSnapAlign: "center",
            }}
          >
            <CarouselCard {...d} index={index} key={index} />
          </div>
        ))}
        {!isMobile && (
          <>
            <button className={styles.lefts} onClick={left}>
              <Image
                width="35px"
                height="35px"
                src="/assets/carousel-leftArrow.svg"
              />
            </button>
            <button className={styles.rights} onClick={right}>
              <Image
                width="35px"
                height="35px"
                src="/assets/carousel-rightArrow.svg"
              />
            </button>
          </>
        )}
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          padding: isMobile ? "24px 0px" : "40px 0px",
          backgroundColor: "#F7F7F7",
        }}
      >
        {carouselData.map((_, index) => {
          return (
            <div
              style={{
                width: currentSlide === index ? "40px" : "6px",
                height: "6px",
                backgroundColor: "#00065D",
                borderRadius: currentSlide === index ? "10px" : "50%",
              }}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default CarouselSlider;
