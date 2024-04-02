import React from "react";
import { Box, Text, Image, Button } from "theme-ui";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollLock, unlockScroll } from "../utils/scroll";
// import Image from "next/image";
/** @jsxImportSource theme-ui */

const SideNavBar = ({
  closeNavbar,
  path = "/",
  showNavBar = false,
  onContactClick,
}) => {
  React.useEffect(() => {
    if (showNavBar) {
      scrollLock();
    } else {
      unlockScroll();
    }
    return () => {
      unlockScroll();
    };
  }, [showNavBar]);

  return (
    <>
      <Box
        as={motion.div}
        sx={{
          height: "100vh",
          width: "100vw",
          bg: "secondaryBlue",
          zIndex: 100000,
          position: "absolute",
          left: 0,
          top: 0,
          px: "10px",
          py: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: 0,
        }}
        animate={"show"}
        variants={{
          show: {
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
      >
        <Box>
          <Link href="/">
            <Text
              as="p"
              sx={{
                ...styles.menuItems,
                color: path === "/" ? "specialGreen" : "white",
              }}
            >
              Home
            </Text>
          </Link>
          <Link href="/solutions">
            <Text
              as="p"
              sx={{
                ...styles.menuItems,
                color: path === "/solutions" ? "specialGreen" : "white",
              }}
            >
              Solutions
            </Text>
          </Link>
          <Link href="/about">
            <Text
              as="p"
              sx={{
                ...styles.menuItems,
                color: path === "/about" ? "specialGreen" : "white",
              }}
            >
              About us
            </Text>
          </Link>
          <Link href="/resources">
            <Text
              as="p"
              sx={{
                ...styles.menuItems,
                color: path === "/resources" ? "specialGreen" : "white",
              }}
            >
              Resources
            </Text>
          </Link>
        </Box>
        {/* <Text
          as="p"
          sx={{
            ...styles.menuItems,
            color: path === "/contact" ? "specialGreen" : "white",
          }}
        >
          Contact Us
        </Text> */}
        <Button
          sx={{
            variant: "button.outlined",
            width: "60%",
            alignSelf: "center",
            mt: "60px",
          }}
          onClick={onContactClick}
        >
          Contact Us
        </Button>
      </Box>
      <Image
        src="/assets/logo.svg"
        width={"122px"}
        height="24px"
        style={{
          position: "absolute",
          top: 25,
          left: 41,
          cursor: "pointer",
          zIndex: 100001,
        }}
        onClick={() => {
          router.push("/");
        }}
      />
      <Image
        src="/assets/closeIcon.svg"
        width="32px"
        height="32px"
        style={{ position: "absolute", top: 18, right: 41, zIndex: 100001 }}
        onClick={closeNavbar}
      />
    </>
  );
};

const styles = {
  menuItems: {
    variant: "text.paragraph",
    color: "black",
    textAlign: "center",
    mt: "30px",
  },
};

export default SideNavBar;
