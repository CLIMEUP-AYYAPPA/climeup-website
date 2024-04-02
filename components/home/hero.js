import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Box, Flex, Text } from "theme-ui";
import  Router  from "next/router";

const Hero = ({ isMobile = true, setShowAssesment }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const controls = useAnimation();
  useEffect(() => {
    if (isButtonHovered) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [isButtonHovered]);
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={styles.heroContainer}
        w="100%"
        py={["200px", "200px", "212px"]}
        pb={[60, 60, "300px"]}
        px={[45, 45, "120px"]}
      >
        <Text
          as="p"
          sx={{
            color: "white",
            variant: "text.heading",
            zIndex: 1,
            fontFamily: 'Avenir Medium'
          }}
        >
          Accelerating ESG Reporting
        </Text>
        {/* <Text
          as="p"
          sx={{
            color: "white",
            variant: "text.subHeading",
            textAlign: ["center", "center", "start"],
            // variant: [
            //   "text.mobileSubHeading",
            //   "text.mobileSubHeading",
            //   "text.subHeading",
            // ],
            mt: [12, 12, "14.5px"],
            zIndex: 1,
          }}
        >
          Accelerating ESG Reporting
        </Text> */}
        <Flex
          py="15px"
          px="18px"
          bg="white"
          sx={styles.esgAssesmentButton}
          onMouseEnter={() => {
            if (!isMobile) setIsButtonHovered(true);
          }}
          onMouseLeave={() => {
            setIsButtonHovered(false);
          }}
          onClick={() => {
            Router.push('/contact')
         
          }}
          // whileHover={{
          //   marginLeft: ''
          // }}
        >
          <Text
            as="p"
            sx={{
              variant: "text.buttonText",
              color: ["darkCyan", "darkCyan", "darkCyan"],
              textDecoration: ["none", "none", "none"],
              mr: [12, 12, 20],
              // textAlign: 'start'
            }}
          >
            Get started
          </Text>
          <motion.div
            style={{ width: "22px", height: "22px" }}
            animate={controls}
            initial="hidden"
            variants={{
              hidden: {
                scale: 1,
                marginLeft: 0,
                x: 0,
                // transform: "translateX(0)",
              },
              show: {
                // scale: 2,
                // marginRight: 0,
                // marginLeft: 15,
                x: 15,
                // transform: "translateX(10)",
                transition: {
                  duration: 0.8,
                },
              },
            }}
          >
            <Image
              src={
                "/assets/arrow-right.svg"
                // isMobile
                //   ? "/assets/arrow-right-white.svg"
                //   : "/assets/arrow-right.svg"
              }
              width="100%"
              height="100%"
            />
          </motion.div>
        </Flex>
      </Box>

      <Box
        sx={{
          overflow: "hidden",
          position: "absolute",
          top: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <video autoPlay loop muted>
          <source src="/assets/heroBg-video.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right,rgba(0, 6, 93, 0.8),rgba(0, 6, 93, 0.8))",
        }}
      />
    </Box>
  );
};

const styles = {
  heroContainer: {
    // backgroundImage: "url(/assets/hero_bgImage.png)",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: ["contain", "contain", "cover"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: ["center", "center", "flex-start"],
    zIndex: 1,
  },
  esgAssesmentButton: {
    borderRadius: "24px",
    width: ["100%", "80%", "15%"],
    backgroundColor: ["lightGreen", "lightGreen", "lightGreen"],
    mt: [23, 23, "72px"],
    // justifyContent: "space-between",
    cursor: "pointer",
    minWidth: ["100px", "100px", "280px"],
    zIndex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-start",
  },
};

export default Hero;
