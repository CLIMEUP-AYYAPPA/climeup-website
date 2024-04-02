import Link from "next/link";
import React from "react";
import { Box, Text } from "theme-ui";

export default function HeadingList(props) {
  const { list, height = "12%", currentSection = -1, setCurrentSection } = props;
  return (
    <Box
      sx={{
        bg: "secondaryWhite",
        width: "100%",
        height,
        px: "23px",
        py: "11px",
      }}
    >
      {list.map((li, index) => {
        return (
          // <Link href={`/privacy-policy/#${li?.id || ""}`} key={li}>
          <Text
            as="p"
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              color: index === currentSection ? "specialGreen" : "black",
              mb: "16px",
              cursor: "pointer",
            }}
            key={li?.id || index}
            onClick={() => {
              setCurrentSection(index);
            }}
          >
            {li.value}
          </Text>
          // </Link>
        );
      })}
    </Box>
  );
}
