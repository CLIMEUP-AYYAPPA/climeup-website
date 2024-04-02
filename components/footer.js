import React, { useEffect, useState } from "react";
import { Flex, Text, Button, Image, Divider, Box } from "theme-ui";

import Link from "next/link";
import NewsLetter from "./newsLetter";
import Router, { useRouter } from "next/router";
import { motion } from "framer-motion";
/** @jsxImportSource theme-ui */

const Footer = ({ isMobile = true, hideCollaborate = false }) => {
  const router = useRouter();

  const [showNewsLetter, setShowNewsLetter] = useState(false);
  const [showNewsLetterSuccess, setNewsLetterSuccess] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);
  const [subscribeHovered, setSubscribeHovered] = useState(false);
  const [assesmentHovered, setAssesmentHovered] = React.useState(false);
  const AnimatedButton = motion(Button);
  useEffect(() => {
    if ( showNewsLetter) {
      window.scrollTo(0, 0);
    }
  }, [ showNewsLetter]);
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "secondaryBlue",
        backgroundImage: isMobile
          ? 'url("/assets/footerBgMobile.png")'
          : 'url("/assets/footerBg.png")',
        backgroundSize: ["contain", "contain", "cover"],
        pt: ["34px", "34px", "67px"],
        pb: "28px",
      }}
    >
      {!hideCollaborate && (
        <>
          <Text
            sx={{
              fontSize: ["24px", "24px", "48px"],
              lineHeight: ["33px", "33px", "66px"],
              letterSpacing: "0.5px",
              fontWeight: 900,
              color: "white",
              mb: "20px",
            }}
          >
            Want to collaborate with us?
          </Text>
          <Text
            sx={{
              fontSize: ["18px", "18px", "32px"],
              lineHeight: ["26px", "26px", "48px"],
              letterSpacing: "0.22px",
              fontWeight: 500,
              color: "specialGreen",
              textAlign: "center",
              width: "80%",
            }}
          >
            Talk to our experts to know more about how “ClimeUp” could help your
            ESG journey and to get a free* ESG Consultation
          </Text>
          <AnimatedButton
            sx={{
              variant: !assesmentHovered ? "button.outlined" : "button.rounded",
              mt: "66px",
              // color: "white",
              mb: "49px",
            }}
            onClick={() => {
              Router.push('/contact')

            }}
            onHoverStart={() => {
              setAssesmentHovered(true);
            }}
            onHoverEnd={() => {
              setAssesmentHovered(false);
            }}
          >
            Get a free ESG assessment
          </AnimatedButton>
          <Text
            sx={{
              variant: "text.mobileSmall",
              mb: "32px",
              color: "white",
              alignSelf: ["center", "center", "flex-end"],
              mr: [0, 0, "123px"],
            }}
          >
            *Limited period
          </Text>
          {/* <Flex
        sx={{
          position: "relative",
          width: ["70%", "70%", "40%"],
          mb: ["36px", "36px", "128px"],
        }}
      >
        <Input
          placeholder="Enter Email"
          sx={{
            width: "100%",
            mt: ["49px", "49px", "78px"],
            py: "20px",
            fontFamily: "Avenir",
            fontWeight: 500,
            borderWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: "white",
            color: "white",
            opacity: email ? "100%" : "50%",
            borderRadius: 0,
            "&:focus": {
              outline: "none",
            },
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Image
          src="/assets/footerArrowRight.svg"
          width={isMobile ? "37px" : "60px"}
          height={isMobile ? "20px" : "32px"}
          sx={{ position: "absolute", right: 0, bottom: 15, cursor: "pointer" }}
          onClick={() => {
            setEmail("");
          }}
        />
      </Flex> */}
          <Divider
            mb="30px"
            color="white"
            width="100%"
            height="1px"
            opacity="0.2"
          />
        </>
      )}
      <Flex
        sx={{
          flexDirection: ["column", "column", "row"],
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          px: ["30px", "30px", "120px"],
        }}
      >
        <Image
          src="/assets/logo.svg"
          width="144px"
          height="55px"
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/");
          }}
        />
        <Flex
          sx={{
            display: ["flex", "flex", "flex"],
            mt: ["14px", "14px", 0],
            alignItems: "center",
          }}
        >
          <Flex sx={{ alignItems: "center" }}>
            <Image
              src="/assets/phone.svg"
              width="24px"
              height="24px"
              mr={["5px", "5px", "12px"]}
            />
            <Text
              sx={{
                fontSize: "14px",
                lineHeight: "26px",
                fontWeight: 500,
                color: "white",
                opacity: 0.5,
                // textW
                whiteSpace: "nowrap",
              }}
            >
              +91 9840100102
            </Text>
            <Image
              src="/assets/mail.svg"
              width="24px"
              height="24px"
              ml="39px"
              mr="12px"
            />
          </Flex>
          <Link href="mailto:info@climeup.ai">
            <Text
              sx={{
                fontSize: "14px",
                lineHeight: "26px",
                fontWeight: 500,
                color: "white",
                cursor: "pointer",
                opacity: emailHovered ? 1 : 0.5,
              }}
              onMouseEnter={() => {
                setEmailHovered(true);
              }}
              onMouseLeave={() => {
                setEmailHovered(false);
              }}
            >
              info@climeup.ai
            </Text>
          </Link>
        </Flex>
        <Box
          onClick={() => {
            setShowNewsLetter(true);
          }}
          sx={{
            padding: "12px",
            backgroundColor: "rgba(0,0,0)",
            borderRadius: "20px",
            paddingX: "20px",
            opacity: subscribeHovered ? 1 : 0.5,
            cursor: "pointer",
            display: ["none", "none", "block"],
          }}
          onMouseEnter={() => {
            setSubscribeHovered(true);
          }}
          onMouseLeave={() => {
            setSubscribeHovered(false);
          }}
        >
          <Text
            as="p"
            sx={{
              fontSize: "16px",
              lineHeight: "22px",
              fontWeight: 500,
              color: "white",
            }}
          >
            Subscribe to our newsletter
          </Text>
        </Box>
      </Flex>
      <Box
        onClick={() => {
          setShowNewsLetter(true);
        }}
        sx={{
          padding: "12px",
          backgroundColor: "rgba(0,0,0)",
          borderRadius: "20px",
          paddingX: "20px",
          opacity: 0.5,
          cursor: "pointer",
          display: ["block", "block", "none"],
          mt: "33px",
        }}
      >
        <Text
          as="p"
          sx={{
            fontSize: "16px",
            lineHeight: "21px",
            fontWeight: 500,
            color: "white",
          }}
        >
          Subscribe to our newsletter
        </Text>
      </Box>
      <Flex
        sx={{
          alignItems: "center",
          display: ["flex", "flex", "none"],
          mt: "25px",
        }}
      >
        <Image
          src="/assets/fb.svg"
          width="12px"
          height="21px"
          mr="16px"
          opacity="0.5"
          onClick={() => {
            window.open("https://www.facebook.com/ClimeUpAi/", "_blank");
          }}
        />
        <Image
          src="/assets/twitter.svg"
          width="22px"
          height="18px"
          mr="16px"
          opacity="0.5"
          onClick={() => {
            window.open("https://twitter.com/climeup", "_blank");
          }}
        />
        <Image
          src="/assets/linkedin.svg"
          width="22px"
          height="18px"
          mr="16px"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/climeupai/",
              "_blank"
            );
          }}
        />
      </Flex>
      <Flex
        sx={{
          flexDirection: ["column", "column", "row"],
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          px: ["30px", "30px", "120px"],
          mt: "46px",
        }}
      >
        <Flex
          sx={{
            flexDirection: ["column", "column", "row"],
            alignItems: "center",
          }}
        >
          <Text
            sx={{
              fontSize: "12px",
              lineHeight: "26px",
              fontWeight: 500,
              color: "white",
              opacity: 0.5,
              textAlign: "center",
            }}
          >
            Copyright @ <br style={{ display: isMobile ? "block" : "none" }} />
            Greenworks Technology Solutions Pvt. Ltd 2022.
          </Text>
          <Link href="/privacy-policy">
            <Text
              sx={{
                fontSize: "12px",
                lineHeight: "26px",
                fontWeight: 500,
                color: "white",
                ml: "10px",
                opacity: 0.5,
                mt: ["10px", "10px", 0],
                cursor: "pointer",
              }}
            >
              {isMobile ? "" : "|"} Our privacy policy
            </Text>
          </Link>
        </Flex>
        <Flex sx={{ alignItems: "center", display: ["none", "none", "flex"] }}>
          <Image
            src="/assets/fb.svg"
            width="12px"
            height="21px"
            mr="16px"
            opacity="0.5"
            onClick={() => {
              window.open("https://www.facebook.com/ClimeUpAi/", "_blank");
            }}
            style={{ cursor: "pointer" }}
          />
          {/* <Image
            src="/assets/insta.svg"
            width="21px"
            height="21px"
            mr="16px"
            opacity="0.5"
          /> */}
          <Image
            src="/assets/twitter.svg"
            width="22px"
            height="18px"
            mr="16px"
            opacity="0.5"
            onClick={() => {
              window.open("https://twitter.com/climeup", "_blank");
            }}
            style={{ cursor: "pointer" }}
          />
          <Image
            src="/assets/linkedin.svg"
            width="22px"
            height="18px"
            mr="16px"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/climeupai/",
                "_blank"
              );
            }}
            style={{ cursor: "pointer" }}
            // opacity="0.5"
          />
          {/* <Image
            src="/assets/youtube.svg"
            width="25px"
            height="18px"
            opacity="0.5"
          /> */}
        </Flex>
      </Flex>
     
      {showNewsLetter && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            zIndex: 100000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgb(240,240,240,0.9)",
          }}
        >
          <NewsLetter
            isMobile={isMobile}
            closePopup={() => {
              setShowNewsLetter(false);
              setNewsLetterSuccess(false);
            }}
            onBack={() => {
              if (showNewsLetterSuccess) {
                setNewsLetterSuccess(false);
                setShowNewsLetter(true);
              }
            }}
            showNewsLetterSuccess={showNewsLetterSuccess}
            onSubmit={() => {
              setNewsLetterSuccess(true);
            }}
          />
        </Box>
      )}
    </Flex>
  );
};

const styles = {
  bottomTabText: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 500,
    color: "white",
    mt: "6px",
  },
  navBarItem: {
    marginRight: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Footer;
