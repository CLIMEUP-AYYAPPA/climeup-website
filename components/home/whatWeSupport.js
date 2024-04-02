import React from "react";
import { Box, Text, Flex, Grid } from "theme-ui";

const WhatWeSupport = () => {
  const supports = ["GRI", "GRESB", "SASB", "CDP", "BRSR", "TCFD"];
  const SupportCard = ({ support, index }) => {
    return (
      <Flex
        sx={{
          borderRadius: "8px",
          backgroundColor: "white",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16)",
          p: ["19px 12px", "19px 12px", "38px 51px"],
          minWidth: ["42%", "43%", "21%"],
          justifyContent: "center",
          // mr: [
          //   index % 2 !== 0 ? 0 : "16px",
          //   index % 2 !== 0 ? 0 : "16px",
          //   "24px",
          // ],
          mb: ["16px", "16px", "24px"],
          alignSelf: "flex-start",
        }}
      >
        <Text
          sx={{
            fontSize: ["24px", "24px", "40px"],
            lineHeight: ["33px", "33px", "55px"],
            // fontFamily: "Avenir Heavy",
            fontWeight: 900,
            letterSpacing: "1px",
            color: "black",
          }}
        >
          {support}
        </Text>
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
        px: ["21px", "21px", "120px"],
        bg: "secondaryWhite",
      }}
    >
      <Text
        sx={{
          fontSize: ["24px", "24px", "60px"],
          lineHeight: ["32px", "32px", "82px"],
          letterSpacing: "0.5px",
          fontWeight: 900,
          color: "secondaryBlue",
          // fontFamily: "Avenir Heavy",
        }}
      >
        What do we support ?
      </Text>
      <Text
        sx={{
          fontSize: ["16px", "16px", "32px"],
          lineHeight: ["21px", "21px", "48px"],
          letterSpacing: "0.5px",
          fontWeight: 500,
          color: "specialGreen",
          fontFamily: "Avenir",
          marginTop: ["16px", "16px", "24px"],
          marginBottom: ["24px", "24px", "83px"],
          textAlign: "center",
          width: ["100%", "100%", "55%"],
        }}
      >
        We support all the leading ESG Reporting frameworks across the
        globe.
      </Text>
      {/* <Flex
        sx={{
          flexWrap: "wrap",
          justifyContent: ["center", "center", "center"],
        }}
      > */}
      <Grid gap={["16px", "24px"]} columns={[2, 2, 3]}>
        {supports.map((support, index) => {
          return <SupportCard support={support} key={support} index={index} />;
        })}
      </Grid>
      {/* </Flex> */}
    </Box>
  );
};

export default WhatWeSupport;
