import React, { useEffect, useRef, useState } from "react";
import { Flex, Text, Box, Image } from "theme-ui";
// import Image from "next/image";
/** @jsxImportSource theme-ui */

const WorkWithUs = ({ isMobile = true }) => {
  const data = [
    {
      text: "We have a 360° understanding of ESG, various frameworks and challenges in data capturing for generating ESG Reports.",
    },
    {
      text: " Our proprietary ESG assessment method (Frameworks-X) facilitates centralization of the ESG Data collection and reporting process.",
    },
    {
      text: "Best-in-class ESG advisory & Data solutions that help enterprises of varied maturity index to elevate their ESG profile systematically.",
    },
    {
      text: " Robust data management strategy combined with, seamless and transparent execution would enable CxOs to make data-driven decisions.",
    },
  ];
  const workScrollRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slider = document.querySelector("#workWithUsScroll");

    slider?.addEventListener("scroll", () => {
      setCurrentSlide(Math.ceil(workScrollRef?.current?.scrollLeft / 400));
    });

    return () => {
      slider?.removeEventListener("scroll", () => null);
    };
  }, []);
  return (
    <Box
      px={["20px", "20px", "84px"]}
      py={["30px", "30px", "100px"]}
      mb={0}
      sx={{ backgroundColor: "secondaryBlue" }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: isMobile
            ? 'url("/assets/workWithUsbg-mobile.png")'
            : 'url("/assets/workWithUsbg.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // borderRadius: "8px",d
          pt: ["20px", "20px", "60px"],
          pb: ["20px", "20px", "50px"],
          width: "100%",
          px: ["0px", "0px", "48px"],
        }}
      >
        <Text
          sx={{
            fontSize: ["24px", "24px", "48px"],
            lineHeight: ["32px", "32px", "80px"],
            letterSpacing: "0.5px",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
          }}
        >
          Why work with us?
        </Text>

        <Box sx={{ display: ["block", "block", "none"], width: "100%" }}>
          {/* <Flex > */}
          <Box
            style={{
              overflow: "scroll",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              // gap: '10px'
              // padding: '10px'
            }}
            id="workWithUsScroll"
            ref={workScrollRef}
          >
            {data.map((d, index) => {
              return (
                <Box
                  key={index}
                  style={{
                    position: "relative",
                    minWidth: "100%",
                    transition: ".5s",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: "24px",
                    // padding: '0px 10px'
                  }}
                >
                  <img
                    src={`/assets/whyWorkWithUs-${index + 1}.svg`}
                    style={styles.mobileIcon}
                    alt="icon"
                  />
                  <Text
                    as="p"
                    color="white"
                    sx={{
                      fontWeight: 500,
                      fontSize: "15px",
                      lineHeight: "22px",
                      ml: "35px",
                    }}
                  >
                    {d.text}
                  </Text>
                </Box>
              );
            })}
          </Box>

          {/* <Text
              as="p"
              color="white"
              sx={{ fontWeight: 500, fontSize: "15px", mt: "27px" }}
            >
              We have a 360° understanding of ESG, various frameworks and
              challenges in data capturing for generating ESG Reports.
            </Text> */}
          {/* </Flex> */}
          {/* <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              margin: "15px 0px",
            }}
          >
            {data.map((_, index) => {
              return (
                <Box
                  sx={{
                    width: currentSlide === index ? "20px" : "6px",
                    height: "6px",
                    backgroundColor: "white",
                    borderRadius: currentSlide === index ? "10px" : "50%",
                  }}
                  key={index}
                />
              );
            })}
          </div> */}
        </Box>

        <Flex
          w="100%"
          sx={{
            justifyContent: "space-between",
            mt: "49px",
            display: ["none", "none", "flex"],
          }}
        >
          <Box as="div" sx={{ width: "35%" }}>
            <Flex sx={styles.workWithUsContainer}>
              <img
                src="/assets/whyWorkWithUs-1.svg"
                style={styles.icon}
                alt="icon"
              />
              <Text as="p" color="white" sx={styles.text}>
                360°understanding of ESG, Certified ESG consultants with
                in-depth expertise in multiple global reporting frameworks
                across industries.
              </Text>
            </Flex>
            <Flex sx={{ ...styles.workWithUsContainer, mt: "100px" }}>
              <img
                src="/assets/whyWorkWithUs-2.svg"
                style={styles.icon}
                alt="icon"
              />
              <Text as="p" sx={styles.text}>
                Our proprietary ESG assessment method (Frameworks-X) facilitates
                centralization of the ESG Data collection and reporting process.
              </Text>
            </Flex>
          </Box>
          <Box
            as="div"
            sx={{
              width: "35%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={styles.workWithUsContainer}>
              <img
                src="/assets/whyWorkWithUs-3.svg"
                style={styles.icon}
                alt="icon"
              />
              <Text as="p" color="white" sx={styles.text}>
                Best-in-class ESG advisory & Data solutions that help
                enterprises of varied maturity index to elevate their ESG
                profile systematically.
              </Text>
            </Flex>
            <Flex sx={{ ...styles.workWithUsContainer }}>
              <img
                src="/assets/whyWorkWithUs-4.svg"
                style={styles.icon}
                alt="icon"
              />
              <Text as="p" sx={styles.text}>
                Robust data management strategy combined with, seamless and
                transparent execution would enable CxOs to make data-driven
                decisions.
              </Text>
            </Flex>
          </Box>
        </Flex>
        {/* )} */}
      </Flex>
    </Box>
  );
};

const styles = {
  workWithUsContainer: {
    alignItems: "flex-start",
  },
  icon: {
    width: "64px",
    height: "60px",
    marginRight: "20px",
  },
  mobileIcon: {
    width: "47px",
    height: "45px",
    marginBottom: "0px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: 0,
    fontWeight: 500,
    color: "white",
    fontFamily: "Avenir Book",
  },
};

export default WorkWithUs;
