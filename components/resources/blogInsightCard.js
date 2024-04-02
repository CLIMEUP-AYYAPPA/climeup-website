import React from "react";
import { Flex, Box, Text } from "theme-ui";
import Image from "next/image";
import Link from "next/link";

const InsightCard = ({
  isMobile = true,
  imageSrc = "/assets/insight-1.png",
  date = "12 Jan 2022",
  title = "What is ESG ?",
  description = "Have you come across the term PPP! The origin for ‘ESG’ was coined at least half a decade earlier...",
  viewMore = "/resources/1",
}) => {
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
        objectFit="cover"
        //   style={{marginBottom: 0}}
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
            fontWeight: 600,
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
            }}
          >
            View more
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default InsightCard;
