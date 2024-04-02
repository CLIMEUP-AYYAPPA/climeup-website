import React from "react";
import { Box, Text } from "theme-ui";
import Slider from "../Slider";
/** @jsxImportSource theme-ui */

const ChallengesReported = ({ isMobile = true }) => {
  return (
    <Box
      sx={{ backgroundColor: "secondaryWhite", pb: ["24px", "24px", "117px"] }}
    >
      <Box sx={styles.challengesReported}>
        <Text
          as="p"
          sx={{
            variant: isMobile ? "text.mobileHeading" : "text.subHeading2",
            textAlign: "center",
            color: "secondaryBlue",
            fontWeight: 900,
            marginBottom: [0, 0, "24px"],
          }}
        >
          Challenges faced by the CxOs
        </Text>
        <Text
          as="p"
          sx={{
            variant: isMobile ? "text.small" : "text.paragraph",
            textAlign: "center",
            marginBottom: [0, 0, "21px"],
            color: "specialGreen",
            fontWeight: 500,
            // fontFamily: "Avenir Medium",
          }}
        >
          We understand your unique pain points
        </Text>
      </Box>
      <Slider isMobile={isMobile} />
    </Box>
  );
};

const styles = {
  challengesReported: {
    justifyContent: "center",
    pt: ["48px", "48px", "141px"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default ChallengesReported;
