import React, { useRef, useEffect, useState } from "react";
import { Flex, Text, Box } from "theme-ui";
import Image from "next/image";
import Link from "next/link";
import GradientLine from "../gradientLine";
/** @jsxImportSource theme-ui */

const WhatWeDo = ({ isMobile = true }) => {
  const whatWeDoScrollRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatWeDo = [
    {
      id: 1,
      asset: "/assets/Strategy Consulting.svg",
      title: "ESG Strategy \n Consulting",
      description:
        "We engage with Sustainability leaders in identifying baseline impact metrics and KPIs to create comprehensive ESG strategy roadmaps accounting long-term value.",
    },
    {
      id: 2,
      asset: "/assets/Data Strategy.svg",
      title: "ESG Data \n Strategy",
      description:
        "We aid companies in choosing the appropriate ESG frameworks, industry specific disclosures, data ownership and ESG reporting structures.",
    },
    {
      id: 3,
      asset: "/assets/Communication Strategy.svg",
      title: "ESG Reporting  and \n Communication Strategy",
      description:
        "We assist generating multidimensional reports based on different frameworks and its impact matrices.",
    },
  ];
  useEffect(() => {
    const slider = document.querySelector("#whatWeDoScroll");

    slider?.addEventListener("scroll", () => {
      setCurrentSlide(Math.ceil(whatWeDoScrollRef?.current?.scrollLeft / 400));
    });

    return () => {
      slider?.removeEventListener("scroll", () => null);
    };
  }, []);
  return (
    <Flex sx={styles.whatWeDoContainer}>
      <Flex
        sx={{
          display: ["none", "none", "flex"],
          position: "absolute",
          top: 0,
          right: 120,
          height: 300,
        }}
      >
        <GradientLine width={1} height="80%" mx="30px" />
        <GradientLine width={1} height="100%" mx="30px" />
        <GradientLine width={1} height="30%" mx="30px" />
        <GradientLine width={1} height="60%" mx="30px" />
      </Flex>
      <Text as="p" sx={styles.whatWeDoHeading}>
        What do we do ?
      </Text>
      <Text as="p" sx={styles.whatWeDoSubHeading}>
        We guide your team with right strategies and tools to meet the ESG
        Reporting mandates.
      </Text>
      {/* <Box style={{ display: isMobile ? "none" : "none" }}>
        <Box
          sx={styles.whatWeDoSubContainer}
          style={{
            overflowX: "scroll",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
          id="whatWeDoScroll"
          ref={whatWeDoScrollRef}
        >
          {whatWeDo?.map((element, index) => {
            return (
              <Flex
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: ["100%", "100%", "30%"],
                  mt: ["24px", "24px", "96px"],
                  justifyContent: "space-between",
                }}
                key={element.id}
              >
                <Image
                  src={element.asset}
                  width={isMobile ? "48px" : "78px"}
                  height={isMobile ? "48px" : "78px"}
                />
                <Text mt="30px" sx={styles.whatWeDoSubContainerHeading}>
                  {element.title}
                </Text>
                <Text my="18px" sx={styles.whatWeDoSubContainerDescription}>
                  {element.description}
                </Text>
                <Link href="/solutions">
                  <Text sx={styles.whatWeDoSubContainerViewMore}>
                    View more
                  </Text>
                </Link>
              </Flex>
            );
          })}
        </Box>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            margin: "40px 0px",
          }}
        >
          {whatWeDo.map((_, index) => {
            return (
              <Box
                sx={{
                  width: currentSlide === index ? "20px" : "6px",
                  height: "6px",
                  backgroundColor: "#0518C2",
                  borderRadius: currentSlide === index ? "10px" : "50%",
                }}
                key={index}
              />
            );
          })}
        </div>
      </Box> */}

      <Box
        sx={{
          ...styles.whatWeDoSubContainer,
          overflowX: isMobile ? "scroll" : "hidden",
        }}
        style={{ display: isMobile ? "block" : "flex" }}
      >
        {whatWeDo?.map((element, index) => {
          return (
            <Flex
              sx={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: ["100%", "100%", "30%"],
                mt: ["24px", "24px", "49px"],
                backgroundColor: "bgSpecialGreen",
                borderRadius: "8px",
                padding: "31px 33px 33px 22px",
                // paddingBottom: "15px",
              }}
              key={element.id}
            >
              {/* {animationOptions && (
                  <Lottie
                    width={isMobile ? "48px" : "120px"}
                    height={isMobile ? "48px" : "78px"}
                    options={animationOptions}
                    style={{ alignItems: "flex-start", margin: "0px" }}
                  />
                )} */}
              <Image
                src={element.asset}
                width="78px"
                height="78px"
                // style={{ alignItems: "flex-start", margin: "0px" }}
              />

              <Text mt="26px" sx={styles.whatWeDoSubContainerHeading}>
                {element.title}
              </Text>
              <Text my="18px" sx={styles.whatWeDoSubContainerDescription}>
                {element.description}
              </Text>
              <Link href="/solutions">
                <Text sx={styles.whatWeDoSubContainerViewMore}>View more</Text>
              </Link>
            </Flex>
          );
        })}
      </Box>
    </Flex>
  );
};

const styles = {
  whatWeDoContainer: {
    justifyContent: "center",
    alignItems: "center",
    pt: ["29px", "29px", "120px"],
    mb: ["49px", "49px", "121px"],
    flexDirection: "column",
    px: ["24px", "24px", "90px"],
    w: "100%",
    position: "relative",
    // backgroundColor: "secondaryWhite",/
  },
  whatWeDoHeading: {
    fontSize: ["24px", "24px", "60px"],
    lineHeight: ["33px", "33px", "82px"],
    letterSpacing: "0.5px",
    fontWeight: 900,
    color: "secondaryBlue",
    // fontFamily: "Avenir heavy",
  },
  whatWeDoSubHeading: {
    fontSize: ["16px", "16px", "32px"],
    lineHeight: ["24px", "24px", "48px"],
    letterSpacing: "0.5px",
    fontWeight: 500,
    color: "specialGreen",
    fontFamily: "Avenir",
    marginTop: "24px",
    textAlign: "center",
    width: ["100%", "100%", "55%"],
  },
  whatWeDoSubContainer: {
    width: "100%",
    justifyContent: "space-between",
    overflowX: "scroll",
    display: "flex",
    flexDirection: ["column", "column", "row"],
    // flexWrap: "nowrap",
    // whiteSpace: 'nowrap'
  },
  whatWeDoSubContainerHeading: {
    // fontFamily: "Avenir Heavy",
    fontSize: ["20px", "20px", "24px"],
    lineHeight: ["27px", "27px", "33px"],
    letterSpacing: "0.22px",
    color: "white",
    fontWeight: 900,
    textAlign: "left",
  },
  whatWeDoSubContainerDescription: {
    fontFamily: "Avenir",
    fontSize: ["15px", "15px", "16px"],
    lineHeight: ["20px", "20px", "22px"],
    letterSpacing: "0.17px",
    color: "white",
    // fontWeight: 400,
    textAlign: "left",
  },
  whatWeDoSubContainerViewMore: {
    fontSize: ["15px", "15px", "16px"],
    lineHeight: ["20px", "20px", "22px"],
    fontWeight: 500,
    letterSpacing: "0.17px",
    textDecoration: "underline",
    color: "white",
    cursor: "pointer",
  },
};

export default WhatWeDo;
