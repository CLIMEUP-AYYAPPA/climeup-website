import React from "react";
import { Box, Text, Flex } from "theme-ui";
import dynamic from "next/dynamic";

const InsightCard = dynamic(() => import("./blogInsightCard"));

export default function suggestedTopics({ otherTopics = [], isMobile = true }) {
  return (
    <Box
      sx={{
        backgroundColor: "secondaryWhite",
        px: ["24px", "24px", "120px"],
        pt: "37px",
        pb: "84px",
      }}
    >
      <Text
        as="p"
        sx={{
          fontSize: "40px",
          lineHeight: "55px",
          color: "black",
          fontFamily: "Avenir Medium",
        }}
      >
        Suggested topics
      </Text>
      <Flex
        sx={{
          gap: "24px",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          py: "24px",
        }}
      >
        {otherTopics?.map((topic, index) => {
          return <InsightCard {...topic} isMobile={isMobile} key={index} />;
        })}
      </Flex>
    </Box>
  );
}
