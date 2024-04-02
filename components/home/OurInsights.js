import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Box, Text, Flex } from "theme-ui";
import Link from "next/link";
/** @jsxImportSource theme-ui */

export default ({ isMobile }) => {
  const insightData = [
    {
      imageSrc: "/assets/OurInsights1.png",
      date: "10 Aug 2022",
      title: "What is ESG ?",
      description:
        "Have you come across the term PPP! The origin for ‘ESG’ was coined at least half a decade earlier...",
      viewMore: "/resources/1",
    },
    {
      imageSrc: "/assets/OurInsights2.png",
      date: "11 Aug 2022",
      title: "Challenges in ESG",
      description:
        "The need for ESG has just been realized a few years ago, but the damage across all three pillars incepted as urbanization and…",
      viewMore: "/resources/2",
    },
    {
      imageSrc: "/assets/OurInsights3.png",
      date: "10 Aug 2022",
      title: "Five tips to streamline…",
      description:
        "Whether you are an SME or a transnational company, a day to day business operation would involve high volume...",
      viewMore: "/resources/3",
    },
  ];

  const ourInsightsRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = document.querySelector("#ourInsightsScroll");

    slider?.addEventListener("scroll", () => {
      setCurrentSlide(Math.ceil(ourInsightsRef?.current?.scrollLeft / 400));
    });

    return () => {
      slider?.removeEventListener("scroll", () => null);
    };
  }, []);

  const InsightCard = ({ imageSrc, date, title, description, viewMore }) => {
    return (
      <Flex
        sx={{
          flexDirection: ["column", "column", "row"],
          boxShadow: "0 4px 6px 0 rgba(0,0,0,0.2)",
          minWidth: ["100%", "100%", "20%"],
          width: ["100%", "100%", "48%"],
        }}
      >
        <Image
          src={imageSrc}
          alt="insight-image"
          width={isMobile ? "181px" : "181px"}
          height={isMobile ? "161px" : "190px"}
          //   style={{marginBottom: 0}}
          objectFit="cover"
        />
        <Box
          p="20px"
          sx={{ width: ["100%", "100%", "calc(100% - 181px)"], bg: "white" }}
        >
          <Text
            as="p"
            sx={{
              color: "black2",
              fontSize: "12px",
              lineHeight: "16px",
              marginBottom: "5px",
              fontFamily: "Avenir Book",
            }}
          >
            {date}
          </Text>
          <Text
            as="p"
            sx={{
              fontSize: ["18px", "18px", "24px"],
              lineHeight: ["24px", "24px", "33px"],
              color: "black2",
              fontWeight: 900,
              marginBottom: "12px",
            }}
          >
            {title}
          </Text>
          <Text
            // as="p"
            sx={{
              fontSize: ["14px", "14px", "16px"],
              lineHeight: ["20px", "20px", "22px"],
              color: "black2",
              fontFamily: "Avenir Book",
            }}
          >
            {description}
          </Text>
          <Link href={viewMore}>
            <Text
              as="p"
              sx={{
                mt: "13px",
                fontSize: "16px",
                lineHeight: "22px",
                color: "specialGreen",
                cursor: "pointer",
                fontFamily: "Avenir Book",
              }}
            >
              View more
            </Text>
          </Link>
        </Box>
      </Flex>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: ["40px", "40px", "80px"],
        pb: ["40px", "40px", "80px"],
        px: ["21px", "21px", 0],
        backgroundColor: "secondaryWhite",
      }}
    >
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
        Our insights
      </Text>
      <Text
        sx={{
          fontSize: ["18px", "18px", "32px"],
          lineHeight: ["26px", "26px", "48px"],
          letterSpacing: "0.5px",
          fontWeight: 500,
          color: "specialGreen",
          fontFamily: "Avenir",
          marginTop: ["16px", "16px", "11px"],
          marginBottom: ["24px", "24px", "66px"],
          textAlign: "center",
          width: ["90%", "90%", "100%"],
        }}
      >
        Stay ahead of the ESG game with our thought-
        <br style={{ display: isMobile ? "none" : "block" }} />
        provoking sustainability articles
      </Text>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          px: [10, 10, "120px"],
          py: [10, 10, 10],
          gap: "24px",
          overflowX: "scroll",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: ["nowrap", "nowrap", "wrap"],
        }}
        ref={ourInsightsRef}
        id="ourInsightsScroll"
      >
        {insightData.map((insight, key) => {
          return <InsightCard {...insight} key={key} />;
        })}
        {}
      </Box>
      {isMobile && (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            margin: "15px 0px",
          }}
        >
          {insightData.map((_, index) => {
            return (
              <Box
                sx={{
                  width: currentSlide === index ? "20px" : "6px",
                  height: "6px",
                  backgroundColor: "secondaryBlue",
                  borderRadius: currentSlide === index ? "10px" : "50%",
                }}
                key={index}
              />
            );
          })}
        </div>
      )}
    </Box>
  );
};
