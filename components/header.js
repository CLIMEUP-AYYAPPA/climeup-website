/** @jsxImportSource theme-ui */
import Image from "next/image";
import Router from "next/router";
import React, { useState, useEffect } from "react";
import { Flex, Text, Button, Box } from "theme-ui";
import Link from "next/link";
import SideNavBar from "./sidenavBar";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import axios from "axios";

const Header = ({
  isMobile = false,
  isTransparent = true,
  isPrivacy = false,
}) => {
  const router = useRouter();
 
  const [isPageScrolled, setIsPageScrolled] = React.useState(false);
  const [showNavBar, setShowNavBar] = React.useState(false);
  const [contactUsHovered, setContactUsHovered] = React.useState(false);
  const [menuHovered, setMenuHovered] = React.useState(false);
  const AnimatedButton = motion(Button);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function saveInHubspot(leadData) {
    const portalId = "22632044";
    const formId = "9d6047fa-f49a-43ab-9b1b-aca93158b7b8";
    const hubspotLeadURL =
      "https://api.hsforms.com/submissions/v3/integration/submit/" +
      portalId +
      "/" +
      formId;
    await axios.post(hubspotLeadURL, leadData).then((response) => {
      
      response.status === 200 ? setShowAssesmentSuccess(true) : console.log(response);
      
    }).catch((e)=>{
      console.log(e);
    })
  }

  return (
    <>
      <Flex
        sx={{
          justifyContent: "space-between",
        }}
        style={{
          backgroundColor:
            isPageScrolled || !isTransparent ? "#00065D" : "transparent",
          position: !isPageScrolled ? "absolute" : "fixed",
          zIndex: 100,
          width: "100%",
          top: 0,
        }}
        px={["40px", "40px", "122px"]}
        py="21px"
      >
        <Image
          src="/assets/logo.svg"
          width={isMobile ? "122px" : "205px"}
          height="24px"
          style={{ cursor: "pointer", zIndex: 1 }}
          onClick={() => {
            router.push("/");
          }}
        />

        {isMobile && (
          <Image
            src="/assets/hamburger.svg"
            width="32px"
            height="32px"
            // style={{ display: isMobile ? "block" : "none" }}
            onClick={() => {
              setShowNavBar(true);
            }}
          />
        )}
        {isMobile && showNavBar && (
          <SideNavBar
            closeNavbar={() => {
              setShowNavBar(false);
            }}
            showNavBar={showNavBar}
            path={router.pathname}
            isMobile={isMobile}
            onContactClick={() => {
           Router.push('/contact')
            }}
          />
        )}

        <Flex
          sx={{
            width: "40%",
            justifyContent: "space-between",
            alignItems: "center",
            // pr: "80px",
            display: ["none", "none", "flex"],
          }}
        >
          {!isPrivacy ? (
            <>
              <Link href="/solutions">
                <Box>
                  <Text
                    sx={
                      router.pathname !== "/solutions"
                        ? {
                            ...styles.menuText,
                            color:
                              menuHovered === "solutions"
                                ? "lightGreen"
                                : "white",
                          }
                        : {
                            ...styles.menuText,
                            // textDecoration: "underline",
                            color: "lightGreen",
                          }
                    }
                    onMouseEnter={() => {
                      setMenuHovered("solutions");
                    }}
                    onMouseLeave={() => {
                      setMenuHovered(false);
                    }}
                  >
                    Solutions
                  </Text>
                  {router.pathname === "/solutions" && (
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "lightGreen",
                      }}
                    />
                  )}
                </Box>
              </Link>
              <Link href="/about">
                <Box>
                  <Text
                    sx={
                      router.pathname !== "/about"
                        ? {
                            ...styles.menuText,
                            color:
                              menuHovered === "about" ? "lightGreen" : "white",
                          }
                        : {
                            ...styles.menuText,
                            // textDecoration: "underline",
                            color: "lightGreen",
                          }
                    }
                    onMouseEnter={() => {
                      setMenuHovered("about");
                    }}
                    onMouseLeave={() => {
                      setMenuHovered(false);
                    }}
                  >
                    About us
                  </Text>
                  {router.pathname === "/about" && (
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "lightGreen",
                      }}
                    />
                  )}
                </Box>
              </Link>
              <Link href="/resources">
                <Box>
                  <Text
                    sx={
                      router.pathname !== "/resources" &&
                      !router.pathname.match("/resources")
                        ? {
                            ...styles.menuText,
                            color:
                              menuHovered === "resources"
                                ? "lightGreen"
                                : "white",
                          }
                        : {
                            ...styles.menuText,
                            // textDecoration: "underline",
                            color: "lightGreen",
                          }
                    }
                    onMouseEnter={() => {
                      setMenuHovered("resources");
                    }}
                    onMouseLeave={() => {
                      setMenuHovered(false);
                    }}
                  >
                    Resources
                  </Text>
                  {router.pathname.match("resources") && (
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "lightGreen",
                      }}
                    />
                  )}
                </Box>
              </Link>
            </>
          ) : (
            <>
              <Link href="/privacy-policy">
                <Box>
                  <Text
                    sx={
                      router.pathname !== "/privacy-policy"
                        ? {
                            ...styles.menuText,
                            color:
                              menuHovered === "privacy-policy"
                                ? "lightGreen"
                                : "white",
                          }
                        : {
                            ...styles.menuText,
                            // textDecoration: "underline",
                            color: "lightGreen",
                          }
                    }
                    onMouseEnter={() => {
                      setMenuHovered("privacy-policy");
                    }}
                    onMouseLeave={() => {
                      setMenuHovered(false);
                    }}
                  >
                    Privacy policy
                  </Text>
                  {router.pathname === "/privacy-policy" && (
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "lightGreen",
                      }}
                    />
                  )}
                </Box>
              </Link>
              <Link href="/cookie-policy">
                <Box>
                  <Text
                    sx={
                      router.pathname !== "/cookie-policy"
                        ? {
                            ...styles.menuText,
                            color:
                              menuHovered === "cookie-policy"
                                ? "lightGreen"
                                : "white",
                          }
                        : {
                            ...styles.menuText,
                            // textDecoration: "underline",
                            color: "lightGreen",
                          }
                    }
                    onMouseEnter={() => {
                      setMenuHovered("cookie-policy");
                    }}
                    onMouseLeave={() => {
                      setMenuHovered(false);
                    }}
                  >
                    Cookie policy
                  </Text>
                  {router.pathname === "/cookie-policy" && (
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "lightGreen",
                      }}
                    />
                  )}
                </Box>
              </Link>
            </>
          )}

          <AnimatedButton
            // whileHover={{
            //   scale: 1.2,
            //   variant: "button.outlined",
            // }}
            onHoverStart={() => {
              setContactUsHovered(true);
            }}
            onHoverEnd={() => {
              setContactUsHovered(false);
            }}
            sx={{
              variant: !contactUsHovered ? "button.outlined" : "button.rounded",
              cursor: "pointer",
              fontFamily: "Avenir Book",
            }}
            onClick={() =>Router.push('/contact')}
          >
            Contact us
          </AnimatedButton>
        </Flex>
      </Flex>
    
    </>
  );
};

const styles = {
  menuText: {
    variant: "text.headerText",
    cursor: "pointer",
    fontFamily: "Avenir Book",
  },
  // currentMenu: {
  //   variant: "text.headerText",
  //   cursor: "pointer",
  // },
};

export default Header;
