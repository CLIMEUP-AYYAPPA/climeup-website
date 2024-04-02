import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Box, Flex, Text } from "theme-ui";

const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));
const GradientLine = dynamic(() => import("../components/gradientLine"));
/** @jsxImportSource theme-ui */

export default function Solutions({ isMobile = true }) {
  const Hero = () => {
    return (
      <Box
        sx={{
          backgroundImage: "url(/assets/solutionHeroBanner.png)",
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
          ESG Advisory
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
          We offer custom solutions to fill your ESG Competency gap and enable{" "}
          <br style={{ display: isMobile ? "none" : "block" }} />
          comprehensive and timely ESG Reporting.
        </Text>
      </Box>
    );
  };
  const SolutionCard = ({
    imageSource,
    solution,
    description1,
    description2,
    description3,
    isRowReverse = false,
  }) => {
    return (
      <Flex
        sx={{
          px: ["20px", "20px", "120px"],
          pt: ["32px", "32px", "80px"],
          pb: ["20px", "20px", "123px"],
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: [
            "column",
            "column",
            isRowReverse ? "row-reverse" : "row",
          ],
          bg: isRowReverse ? "secondaryWhite" : "white",
        }}
      >
        <Box sx={{ width: ["100%", "100%", "45%"] }}>
          <Text
            as="p"
            sx={{
              variant: isMobile ? "text.mobileSubHeading2" : "text.subHeading2",
              fontSize: ["24px", "24px", "48px"],
              lineHeight: ["32px", "32px", "66px"],
              letterSpacing: 0.52,
              mb: "32px",
              textAlign: ["start", "start", "start"],
              maxWidth: "100%",
            }}
          >
            {solution}
          </Text>
          <Box
            sx={{
              py: ["10px", "10px", "50px"],
              display: ["block", "block", "none"],
            }}
          >
            <Image
              width={"530px"}
              height={"530px"}
              src={imageSource}
              style={{ alignSelf: "flex-end" }}
            />
          </Box>
          <Flex sx={{ height: "100%", width: "100%", mb: "16px" }}>
            <GradientLine width="1px" height="70px" mr="16px" />
            <Text
              as="p"
              sx={{
                variant: "text.headerText",
                color: "black",
                letterSpacing: 0.17,
              }}
            >
              {description1}
            </Text>
          </Flex>
          <Flex sx={{ mb: "16px" }}>
            <GradientLine width="1px" height="70px" mr="16px" />
            <Text
              as="p"
              sx={{
                variant: "text.headerText",
                color: "black",
                letterSpacing: 0.17,
              }}
            >
              {description2}
            </Text>
          </Flex>
          <Flex>
            <GradientLine width="1px" height="70px" mr="16px" />
            <Text
              as="p"
              sx={{
                variant: "text.headerText",
                color: "black",
                letterSpacing: 0.17,
              }}
            >
              {description3}
            </Text>
          </Flex>
        </Box>
        <Box
          sx={{
            width: ["100%", "100%", "45%"],
            pt: ["10px", "10px", "50px"],
            display: ["none", "none", "block"],
          }}
        >
          <Image
            width={"530px"}
            height={"480px"}
            src={imageSource}
            style={{ alignSelf: "flex-end" }}
          />
        </Box>
      </Flex>
    );
  };
  return (
    <Box w="100%">
      <Header isMobile={isMobile} />
      <Hero isMobile={isMobile} />
      <SolutionCard
        imageSource="/assets/solutions-report.png"
        solution="ESG Strategy Consulting"
        description1="We engage with Sustainability leaders in identifying baseline impact metrics and KPIs to create comprehensive ESG strategy roadmaps accounting long-term value."
        description2="We analyze current reporting methods and assist in identifying challenges, training requirements and to define materiality matrix aligned with business strategy."
        description3="We develop a holistic ESG implementation strategy to present sustainability opportunities across business units to capture, monitor and communicate the progress."
      />
      <SolutionCard
        imageSource="/assets/solutions-data.png"
        solution="ESG Data Strategy"
        description1="We aid companies in choosing the appropriate ESG frameworks, industry specific disclosures, data ownership and ESG reporting structures."
        description2="We provide data templates/tool necessary to ensure robust data management practices for better traceability and auditing purposes. "
        description3="We enable robust data culture, data acquisition, and analysis processes to comply with data quality checks and assurance by external rating agencies/auditors.."
        isRowReverse
      />
      <SolutionCard
        imageSource="/assets/solutions-strategy.png"
        solution="ESG Reporting and Communication Strategy"
        description1="We assist generating multidimensional reports based on different frameworks and its impact matrices."
        description2="We assist to generate reports targeting various stakeholders such as investors, rating agencies, Govt. bodies, creditors, user communities, etc."
        description3="We assist customers with prompt visualization and communication strategies to reach your target audiences with relevant datasets and disclosures."
      />
      <Footer isMobile={isMobile} isSolution />
    </Box>
  );
}
