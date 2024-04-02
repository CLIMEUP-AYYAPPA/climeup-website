import React from "react";
import { Box, Text, Flex } from "theme-ui";
import Image from "next/image";
/** @jsxImportSource theme-ui */

const OurApproach = ({ isMobile = false }) => {
  const approaches = [
    {
      text: "Assess",
      imageSrc: "/assets/Assess.svg",
      italic: "Assess",
      description:
        "the current state of your organization's ESG reporting process.",
    },
    {
      text: "Define",
      imageSrc: "/assets/Define.svg",
      italic: "Define",
      description:
        "a comprehensive ESG strategy that is aligned with your core values and business objectives.",
    },
    {
      text: "Collect",
      imageSrc: "/assets/collect-approach.svg",
      italic: "Collect",
      description:
        "data across business functions for the agreed disclosures and materiality.",
    },
    {
      text: "Measure",
      imageSrc: "/assets/Measure.svg",
      italic: "Analyze",
      description:
        "data from various sources and formats to baseline the metrics/KPIs.",
    },
    {
      text: "Report",
      imageSrc: "/assets/Reports.svg",
      italic: "Generate",
      description:
        "ESG reports from the approved data to provide meaningful insights.",
    },
    {
      text: "Communicate",
      imageSrc: "/assets/Communicate Image.svg",
      italic: "Communicate",
      description:
        "reports to multiple stakeholders promptly and pertinently to gain trust and confidence.",
    },
  ];
  const [currentApproachIndex, setCurrentApproachIndex] = React.useState(0);
  const approachRef = React.useRef();
  React.useEffect(() => {
    const slider = document.querySelector("#ourApproach");
    slider.addEventListener("scroll", () => {
      if (approachRef?.current?.scrollLeft <= 0) {
        setCurrentApproachIndex(0);
      } else if (approachRef?.current?.scrollLeft <= 30) {
        setCurrentApproachIndex(1);
      } else {
        setCurrentApproachIndex(
          Math.ceil(approachRef?.current?.scrollLeft / 30) < 5
            ? Math.ceil(approachRef?.current?.scrollLeft / 30)
            : 5
        );
      }
    });
    return () => {
      slider?.removeEventListener("scroll", () => null);
    };
  }, []);

  return (
    <Box
      px={["24px", "24px", "129px"]}
      py={["30px", "30px", "68px"]}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        background:
          "linear-gradient(141.5deg, #000342 17.03%, #1B2177 100.04%)",
      }}
    >
      <Text
        sx={{
          fontSize: ["24px", "24px", "60px"],
          lineHeight: ["32px", "32px", "82px"],
          fontWeight: 900,
          letterSpacing: "0.52px",
          textAlign: "center",
          color: "white",
          mb: "20px",
          // fontFamily: "Avenir Heavy",
        }}
      >
        Our approach
      </Text>
      <Text
        sx={{
          fontSize: ["16px", "16px", "32px"],
          lineHeight: ["24px", "24px", "48px"],
          fontWeight: 500,
          textAlign: "center",
          color: "specialGreen",
          mb: "50px",
        }}
      >
        We facilitate your ESG Report generation in <br />{" "}
        <span style={{ fontWeight: 900 }}>SIX</span> simple steps
      </Text>
      <Flex
        w="100%"
        sx={{
          justifyContent: "space-between",
          flexDirection: ["column", "column", "row"],
          width: isMobile ? "100%" : "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["row", "row", "column"],
            overflow: "scroll",
            width: isMobile ? "100%" : "30%",
            py: 10,
          }}
          ref={approachRef}
          id="ourApproach"
        >
          {approaches.map((approach, index) => {
            return (
              <Flex
                key={index}
                sx={{
                  flexDirection: ["column", "column", "row"],
                  minWidth: ["80px", "80px", "100%"],
                }}
              >
                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    flexDirection: ["row", "row", "column"],
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setCurrentApproachIndex(index);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: ["row", "row", "column"],
                      alignItems: ["center"],
                      justifyContent: ["center"],
                    }}
                  >
                    <Box
                      sx={{
                        width: "24px",
                        height: "24px",
                        bg:
                          currentApproachIndex === index ? "purple" : "#00044B",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 2,
                        border: "1px solid #8F97EE",
                      }}
                    ></Box>
                    {index !== approaches.length - 1 && (
                      <Box
                        sx={{
                          width: isMobile ? "60px" : "1px",
                          height: isMobile ? "1px" : "59px",
                          border: "0px",
                          borderLeft: !isMobile
                            ? "1px solid #8F97EE"
                            : "0px solid #8F97EE",
                          borderTop: isMobile
                            ? "1px solid #8F97EE"
                            : "0px solid #8F97EE",
                          borderStyle: "dashed",
                        }}
                      />
                    )}
                  </Box>
                </Box>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setCurrentApproachIndex(index);
                  }}
                >
                  <Text
                    as="p"
                    sx={{
                      display: ["none", "none", "block"],
                      fontSize: [
                        "18px",
                        "18px",
                        currentApproachIndex === index ? "32px" : "24px",
                      ],
                      lineHeight: [
                        "24px",
                        "24px",
                        currentApproachIndex === index ? "28px" : "33px",
                      ],
                      fontWeight: 500,
                      opacity: currentApproachIndex === index ? "100%" : "50%",
                      ml: [0, 0, "50px"],
                      mt: [0, 0, 0],
                      color: "#FFFFFF",
                    }}
                  >
                    {approach.text}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Box>
        <Text
          as="p"
          sx={{
            display: ["block", "block", "none"],
            fontSize: "24px",
            lineHeight: "28px",
            mb: "14px",
            fontWeight: 500,
            ml: [0, 0, "50px"],
            mt: [0, 0, 0],
            color: "#FFFFFF",
            textAlign: ["center"],
          }}
        >
          {approaches[currentApproachIndex].text}
        </Text>
        <Box
          sx={{
            width: ["100%", "100%", "60%"],
            height: ["100%", "100%", "70%"],
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "8px",
            paddingTop: "13px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <Text
            as="p"
            sx={{
              fontSize: ["16px", "16px", "24px"],
              lineHeight: ["22px", "22px", "33px"],
              fontWeight: 500,
              fontFamily: "Avenir",
              color: "white",
              // ml: "10px",
              mx: ["10px", "10px", "40px"],
              // textAlign: "left",
              // mt: "10px",
              mb: ["30px", "30px", "10px"],
            }}
          >
            <Text sx={{ fontStyle: "italic" }}>
              {approaches[currentApproachIndex].italic}{" "}
            </Text>
            {approaches[currentApproachIndex].description}
          </Text>
          <Image
            src={approaches[currentApproachIndex]?.imageSrc}
            width={isMobile ? "300px" : "580px"}
            height={isMobile ? "250px" : "370px"}
            alt="approach image"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default OurApproach;
