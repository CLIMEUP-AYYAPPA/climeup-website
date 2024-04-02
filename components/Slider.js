import React, { useState, useRef, useEffect } from "react";
import styles from "./Slider.module.css";
import Image from "next/image";
import { Box, Text, Flex } from "theme-ui";
import GradientLine from "../components/gradientLine";

const Slider = ({ isMobile = true }) => {
  const sliderArray = [
    {
      content:
        "ESG is core to our corporate sustainability strategy; yet consistently gathering data from different business units in a common understandable format is the key challenge we face in ESG reporting.",
      role: "Chief Sustainability Officer, ",
      company: "Leading Food & Beverage Industry, USA.",
    },
    {
      content:
        "Multiple global frameworks and ever evolving federal and state regulations are the topmost roadblocks in realizing our ESG journey within a stipulated period.",
      role: "Global Head of ESG,",
      company: "Leading Mining Company - Canada.",
    },
    {
      content:
        "We possess extensive data across functions be it EH&S, CSR, or HR.However, visualizing and communicating the data in a meaningful way that both our internal and external stakeholders can understand and act on is the main problem to be solved.",
      role: "Chief Impact officer,",
      company: "Real Estate & Construction Company, Europe.",
    },
  ];
  const [slide, setSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef();

  const left = () => {
    if (currentSlide > 0) {
      slide === 0
        ? setSlide(-100 * (sliderArray.length - 1))
        : setSlide(slide + 100);
      const newSlideNum =
        currentSlide > 0 ? currentSlide - 1 : sliderArray.length - 1;
      setCurrentSlide(newSlideNum);
    }
  };

  const right = () => {
    if (currentSlide < sliderArray.length - 1) {
      slide === -100 * (sliderArray.length - 1)
        ? setSlide(0)
        : setSlide(slide - 100);
      const newSlideNum =
        currentSlide < sliderArray.length - 1 ? currentSlide + 1 : 0;
      setCurrentSlide(newSlideNum);
    }
  };

  useEffect(() => {
    scrollRef?.current?.addEventListener("scroll", () => {
      setCurrentSlide(Math.ceil(scrollRef?.current?.scrollLeft / 400));
    });

    return () => {
      scrollRef?.current?.removeEventListener("scroll", () => null);
    };
  }, []);

  return (
    <>
      <div
        className={styles.slider}
        style={{
          overflow: isMobile ? "scroll" : "hidden",
          scrollSnapType: "x",
          height: "100%",
        }}
        id="challengesScroll"
        ref={scrollRef}
      >
        {sliderArray.map((item, index) => (
          <div
            className={styles.container1}
            key={`${item.role}-${item.role}`}
            style={{
              transform: `translateX(${slide}%)`,
              scrollSnapAlign: "center",
              // flex: 1,
              // height: '100%'
            }}
          >
            <Box
              pt={isMobile ? "17px" : "60px"}
              px={isMobile ? "24px" : "78px"}
              // bg="white"
              pb={isMobile ? "17px" : "46px"}
              mx={["10px", "10px", "30px"]}
              sx={{
                width: isMobile ? "100%" : "70%",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
                backdropFilter: "blur(13.5914px)",
                backgroundColor: "rgba(255,255,255,0.2)",
                minHeight: "528px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text
                as="p"
                sx={{
                  variant: isMobile ? "text.mobileHeading" : "text.paragraph",
                  fontWeight: 500,
                }}
              >
                {item.content}
              </Text>
              <Flex
                mt={["18px", "18px", "40px"]}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Box>
                  <Text
                    as="p"
                    sx={{
                      variant: isMobile
                        ? "text.mobileSmall"
                        : "text.subParagraph",
                      textAlign: ["center", "center", "start"],
                      // fontFamily: 'Avenir'
                      fontWeight: 900,
                    }}
                  >
                    {item.role}
                    {/* <br />  */}
                  </Text>
                  <Text
                    as="p"
                    sx={{
                      variant: isMobile
                        ? "text.mobileSmall"
                        : "text.subParagraph",
                      textAlign: ["center", "center", "start"],
                      fontWeight: 900,
                    }}
                  >
                    {item.company}
                  </Text>
                </Box>
                <Box sx={{ width: "50%", display: ["none", "none", "block"] }}>
                  <GradientLine
                    width={"50%"}
                    height={1}
                    my="20px"
                    isHorizonatal
                  />
                  <GradientLine
                    width={"30%"}
                    height={1}
                    my="20px"
                    isHorizonatal
                  />
                  <GradientLine
                    width={"80%"}
                    height={1}
                    my="20px"
                    isHorizonatal
                  />
                  <GradientLine
                    width={"100%"}
                    height={1}
                    my="20px"
                    isHorizonatal
                  />
                </Box>
              </Flex>
            </Box>
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
          margin: isMobile ? "24px 0px" : "40px 0px",
        }}
      >
        {sliderArray.map((_, index) => {
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

export default Slider;
