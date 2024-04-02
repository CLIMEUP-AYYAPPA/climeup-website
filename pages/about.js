import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Box, Flex, Text } from "theme-ui";

const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));
const GradientLine = dynamic(() => import("../components/gradientLine"));
/** @jsxImportSource theme-ui */

export default function About({ isMobile = true }) {
  const Hero = () => {
    return (
      <Box>
        <Box
          sx={{
            backgroundImage: "url(/assets/aboutHomeBanner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          w="100%"
          pt={["100px", "100px", "230px"]}
          pb={["43px", "43px", "64px"]}
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
            About Us
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
            ClimeUp is an industry’s first sustainable technology (SusTech)
            company providing{" "}
            <br style={{ display: isMobile ? "none" : "block" }} /> ESG Advisory
            and data management platform, enabling businesses of all sizes to{" "}
            <br style={{ display: isMobile ? "none" : "block" }} />
            collect, monitor and generate ESG reports in record time.
          </Text>
        </Box>
      </Box>
    );
  };
  const WhoWeAre = ({ imageSrc, heading, text, isRowReverse = false }) => {
    return (
      <Flex
        sx={{
          justifyContent: "space-between",
          px: ["30px", "30px", "120px"],
          my: ["32px", "32px", "60px"],
          flexDirection: [
            "column",
            "column",
            isRowReverse ? "row-reverse" : "row",
          ],
        }}
      >
        {!isMobile && <Image width={486} height={479} src={imageSrc} />}
        <Flex
          sx={{
            flexDirection: "column",
            // justifyContent: "center",
            width: ["100%", "100%", "40%"],
          }}
        >
          <Text
            as="p"
            sx={{
              fontSize: "32px",
              lineHeight: "48px",
              color: "black",
              fontWeight: 500,
              fontFamily: "Avenir Medium",
              // mt: "24px",
            }}
          >
            {heading}
          </Text>
          {isMobile && (
            <Image
              width={486}
              height={479}
              src={imageSrc}
              style={{ margin: "10px 0px" }}
            />
          )}
          <Text
            as="p"
            sx={{
              mt: "24px",
              // variant: "text.headerText",
              fontSize: "20px",
              lineHeight: "32px",
              color: "black2",
              textAlign: "center",
              letterSpacing: 0,
              textAlign: "left",
              // fontFamily: "Avenir Next",
            }}
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    );
  };
  const OurCommitment = ({ bigText, shortText, isPercentage = false }) => {
    return (
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          as="p"
          sx={{
            fontSize: ["100px", "100px", "200px"],
            lineHeight: ["137px", "137px", "273px"],
            fontWeight: 200,
            color: "specialGreen",
            fontFamily: "Avenir Book",
            // mr: ["16px", "16px", "97px"],
            ...{
              ml: isPercentage ? ["20px", "20px", "300px"] : 0,
              mr: isPercentage ? 0 : ["16px", "16px", "97px"],
            },
          }}
        >
          {bigText}
        </Text>
        {isPercentage && (
          <Text
            sx={{
              fontSize: ["30px", "30px", "60px"],
              lineHeight: ["41px", "41px", "81px"],
              fontWeight: 500,
              color: "specialGreen",
              mr: ["30px", "30px", "97px"],
              ml: ["50px", "50px", "0px"],
            }}
          >
            %
          </Text>
        )}
        <Box>
          {shortText.split("\\n").map((text, index) => {
            return (
              <Text
                key={index}
                as="p"
                sx={{
                  fontSize: ["16px", "16px", "32px"],
                  lineHeight: ["24px", "24px", "48px"],
                  fontWeight: 500,
                  color: "specialGreen",
                  fontFamily: "Avenir Medium",
                  // width: "35%",
                }}
              >
                {text}
              </Text>
            );
          })}
        </Box>
      </Flex>
    );
  };
  return (
    <Box w="100%">
      <Header isMobile={isMobile} />
      <Hero />
      <Box sx={{ ...styles.headingContainer }}>
        <Flex
          sx={{
            display: ["none", "none", "flex"],
            position: "absolute",
            top: 0,
            left: 50,
            height: 300,
          }}
        >
          <GradientLine width={1} height="80%" mx="30px" verticalReverse />
          <GradientLine width={1} height="100%" mx="30px" verticalReverse />
          <GradientLine width={1} height="30%" mx="30px" verticalReverse />
          <GradientLine width={1} height="40%" mx="30px" verticalReverse />
        </Flex>
        <Text
          as="p"
          sx={{
            textAlign: "center",
            color: "secondaryBlue",
            fontWeight: 900,
            ...{
              variant: isMobile ? "text.mobileSubHeading2" : "text.subHeading2",
            },
          }}
        >
          Who we are
        </Text>
        <Text
          as="p"
          sx={{
            textAlign: "center",
            fontWeight: 500,
            ...{
              variant: isMobile ? "text.mobileParagraph" : "text.paragraph",
            },
            color: "specialGreen",
            width: ["100%", "100%", "70%"],
            px: ["24px", "24px", 0],
          }}
        >
          Our mission led by sustainability and technology evangelists who
          believe in making a greater impact to the planet, people, and economy
          by leveraging the power of technology and by nurturing sustainability
          mindset across organizations.
        </Text>
        <WhoWeAre
          imageSrc="/assets/whoWeAre-1.png"
          heading="Planet: Thriving for A sustainable
          living environment"
          text="Our team is passionate about helping clients with complex ESG data capturing to reporting by leveraging process innovation and cutting-edge technologies to protect the environment. This is done in order to create a sustainable living ecosystem for all living things and to encourage responsible contributions from industries around the world."
        />
        <WhoWeAre
          imageSrc="/assets/whoWeAre-2.png"
          heading="People : Striving towards social
          harmony"
          text="Through reporting, we work to uncover and address social inequalities, and we strongly encourage businesses to take advantage of the social opportunities around them. And assist in creating a business that is inclusive, impactful, and community focused."
          isRowReverse
        />
        <WhoWeAre
          imageSrc="/assets/whoWeAre-3.png"
          heading="Profit : Creating long-term business
          value"
          text="ClimeUp encourages businesses to maintain the highest level of data integrity demanded by regulators, investors, and assurance firms in an effort to lower risks, increase the stakeholders value, as well as to enhance their long-term value by fostering transparency and trust."
        />
      </Box>
      <Flex
        sx={{
          flexDirection: "column",
          bg: "secondaryWhite",
          alignItems: ["flex-start", "flex-start", "center"],
          py: ["55px", "55px", "69px"],
          px: ["20px", "20px", 0],
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Text
          as="p"
          sx={{
            variant: [
              "text.mobileSubHeading2",
              "text.mobileSubHeading2",
              "text.subHeading",
            ],
            textAlign: "center",
            color: "black",
            fontWeight: 900,
            width: "100%",
            ...{
              variant: isMobile ? "text.mobileSubHeading2" : "text.subHeading",
            },
          }}
        >
          Our Commitments
        </Text>
        <OurCommitment
          bigText="90"
          shortText="Generate your first ESG \n report in 90 days"
        />
        <OurCommitment
          bigText="70"
          shortText="Reduce the reporting time \n frame greatly"
          isPercentage
        />
        <OurCommitment
          bigText="3x"
          shortText="Achieve targets in 3x \n times faster"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: isMobile ? -30 : -90,
          }}
        >
          <Image
            src="/assets/triangleRight.svg"
            width={isMobile ? 114 : 362}
            height={isMobile ? 118 : 376}
            style={{ zIndex: 20 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: isMobile ? -30 : -120,
            // top: 0,
            right: isMobile ? -30 : -80,
            zIndex: 20,
          }}
        >
          <Image
            src="/assets/triangleLeft.svg"
            width={isMobile ? 114 : 362}
            height={isMobile ? 118 : 376}
          />
        </Box>
      </Flex>

      <Footer isMobile={isMobile} />
    </Box>
  );
}

const styles = {
  headingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: ["20px", "20px", "80px"],
    position: "relative",
  },
};
