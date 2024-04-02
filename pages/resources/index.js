import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Box, Flex, Text } from "theme-ui";

const Header = dynamic(() => import("../../components/header"));
const Footer = dynamic(() => import("../../components/footer"));
const InsightCard = dynamic(() =>
  import("../../components/resources/blogInsightCard")
);
/** @jsxImportSource theme-ui */

const resourceData = [
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

export default function Resources({ isMobile = true }) {
  const Hero = () => {
    return (
      <Box
        sx={{
          backgroundImage: "url(/assets/resourceHeroBanner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        w="100%"
        pt={["100px", "100px", "230px"]}
        pb={["43px", "43px", "100px"]}
        px={["24px", "24px", "120px"]}
      >
        <Text
          as="p"
          sx={{
            color: "white",
            variant: "text.heading",
            textAlign: "left",
          }}
        >
          Resources
        </Text>
        <Text
          as="p"
          sx={{
            color: "white",
            fontSize: ["18px", "18px", "24px"],
            lineHeight: ["24px", "24px", "36px"],
            fontWeight: 500,
            mt: "16px",
            textAlign: ["justify", "justify", "left"],
            width: ["100%", "100%", "100%"],
          }}
        >
          Chek out our latest blogs and insights here to get to know more{" "}
          <br style={{ display: isMobile ? "none" : "block" }} />
          about sustainability space
        </Text>
      </Box>
    );
  };

  return (
    <Box w="100%">
      <Header isMobile={isMobile} />
      <Hero />
      <Flex
        sx={{
          gap: "24px",
          //   overflowX: "scroll",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          px: ["24px", "24px", "120px"],
          py: ["24px", "24px", "80px"],
        }}
      >
        {resourceData.map((title, index) => {
          return <InsightCard {...title} isMobile={isMobile} key={index} />;
        })}
      </Flex>
      <Footer isMobile={isMobile} hideCollaborate />
    </Box>
  );
}
