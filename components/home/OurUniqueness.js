import Image from "next/image";
import React from "react";
import { Flex, Text, Box } from "theme-ui";
import useCustomInView from "../../hooks/customInView";
import { motion } from "framer-motion";
import GradientLine from "../gradientLine";
/** @jsxImportSource theme-ui */

const OurUniqueness = ({ isMobile = true }) => {
  const { ref, controls } = useCustomInView();
  const fiveC = [
    {
      imageSrc: "/assets/Collect.svg",
      title: "Collect",
      subTitle: "Data across organization",
    },
    {
      imageSrc: "/assets/Centralized.svg",
      title: "Centralized",
      subTitle: "Data collection & administration",
    },
    {
      imageSrc: "/assets/Collaborate.svg",
      title: "Collaborate",
      subTitle: "Across business units",
    },
    {
      imageSrc: "/assets/Communicate.svg",
      title: "Communicate",
      subTitle: "Report with stakeholders",
    },
    {
      imageSrc: "/assets/Confidentiality.svg",
      title: "Confidentiality",
      subTitle: "Assured data security",
    },
  ];
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        pt: ["40px", "40px", "80px"],
        pb: ["40px", "40px", "80px"],
        px: ["21px", "21px", 0],
        backgroundColor: "white",
        position: "relative",
      }}
      // // ref={ref}
      // animate={controls}
      // variants={{
      //   initial: { opacity: 0 },
      //   show: {
      //     opacity: 1,
      //     transition: {
      //       staggerChildren: 0.3,
      //     },
      //   },
      // }}
    >
      <Flex
        sx={{
          display: ["none", "none", "flex"],
          position: "absolute",
          top: 0,
          left: 50,
          height: 300,
        }}
      >
        <GradientLine width={1} height="80%" mx="30px" />
        <GradientLine width={1} height="60%" mx="30px" />
        <GradientLine width={1} height="40%" mx="30px" />
        <GradientLine width={1} height="20%" mx="30px" />
      </Flex>
      <Text
        sx={{
          fontSize: ["24px", "24px", "60px"],
          lineHeight: ["33px", "33px", "82px"],
          letterSpacing: "0.5px",
          fontWeight: 900,
          color: "secondaryBlue",
          // fontFamily: "Avenir Heavy",
        }}
      >
        Our uniqueness
      </Text>
      <Text
        sx={{
          fontSize: ["18px", "18px", "32px"],
          lineHeight: ["26px", "26px", "48px"],
          letterSpacing: "0.5px",
          fontWeight: 500,
          color: "specialGreen",
          fontFamily: "Avenir",
          marginTop: ["16px", "16px", "24px"],
          marginBottom: ["24px", "24px", "83px"],
          textAlign: "center",
        }}
      >
        We nurture sustainability mindset into your organization
      </Text>
      {/* <Image src="/assets/ourUniqueness.png" width="600px" height="600px" /> */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <motion.div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            overflowX: isMobile ? "scroll" : "initial",
          }}
          ref={ref}
          initial="initial"
          animate={controls}
          variants={{
            initial: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          id="fiveC"
        >
          {fiveC.map((c, index) => {
            return (
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                }}
                key={index}
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  show: {
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: ["column", "column", "row"],
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      p: ["23px", "23px", "35px"],
                      border: "1px dashed #00DAB2",
                      borderRadius: "6px",
                      background:
                        "linear-gradient(180deg, #FAFFFA 0%, #F4FEF4 100%)",
                    }}
                  >
                    <Image
                      src={c.imageSrc}
                      width={isMobile ? "51px" : "64px"}
                      height={isMobile ? "51px" : "64px"}
                      alt="5C"
                    />
                  </Box>
                  {index !== fiveC.length - 1 && (
                    <Box
                      sx={{
                        width: [0, 0, "128px"],
                        height: ["81px", "81px", 0],
                        borderTop: `${
                          index !== fiveC.length - 1 ? "1px" : "0px"
                        } dashed #00DAB2`,
                        display: ["none", "none", "block"],
                      }}
                    />
                  )}

                  {index !== fiveC.length - 1 && (
                    <Box
                      sx={{
                        width: [0, 0, "128px"],
                        height: ["81px", "81px", 0],
                        borderLeft: `${
                          index !== fiveC.length - 1 ? "1px" : "0px"
                        } dashed #00DAB2`,
                        display: ["block", "block", "none"],
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    ml: ["24px", "24px", 0],
                    maxWidth: ["100%", "100%", "144px"],
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: ["flex-start", "flex-start", "center"],
                    alignItems: ["flex-start", "flex-start", "center"],
                  }}
                >
                  <Text
                    as="p"
                    sx={{
                      fontSize: "24px",
                      lineHeight: "33px",
                      color: "black",
                      fontWeight: 500,
                      fontFamily: "Avenir Medium",
                      letterSpacing: 0.43,
                      mt: ["15px", "15px", "20px"],
                      textAlign: ["left", "left", "center"],
                      // ml: "10px",
                    }}
                  >
                    {c.title}
                  </Text>
                  <Text
                    as="p"
                    sx={{
                      fontSize: ["15px", "15px", "16px"],
                      lineHeight: ["22px", "22px", "22px"],
                      color: "black",
                      fontFamily: 'Avenir Book',
                      letterSpacing: 0.35,
                      mt: [0, 0, "10px"],
                      textAlign: ["left", "left", "center"],
                    }}
                  >
                    {c.subTitle}
                  </Text>
                </Box>
              </motion.div>
            );
          })}
        </motion.div>
      </Box>
    </Flex>
  );
};

const styles = {};

export default OurUniqueness;
