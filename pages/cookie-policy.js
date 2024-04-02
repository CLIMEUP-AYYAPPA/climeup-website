import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Box, Text, Grid, Divider } from "theme-ui";

const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));
const HeadingList = dynamic(() => import("../components/privacy/headingList"));

export default function CookiePolicy({ isMobile = true }) {
  const headingList = [
    { value: "Cookie policy and preferences", id: "preferences" },
    { value: "Functional cookies", id: "cookies" },
    { value: "Performance cookies", id: "performance-cookies" },
    {
      value: "Advertising cookies & social media cookies",
      id: "media-cookies",
    },
    { value: "Conversion tracking", id: "tracking" },
  ];
  const [currentSection, setCurrentSection] = useState(-1);
  React.useEffect(() => {
    if (currentSection > -1) {
      const element = document?.getElementById(headingList[currentSection].id);
      // var headerOffset = 35;
      var elementPosition = element?.getBoundingClientRect().top;
      var offsetPosition = elementPosition - 75;
      console.log("dad");
      window?.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [currentSection]);
  return (
    <Box>
      <Header isMobile={isMobile} isPrivacy isTransparent={false} />
      <Box mt="100px" px={["24px", "24px", "120px"]}>
        <Box>
          <Text
            as="p"
            variant="text.subHeading"
            color="secondaryBlue"
            sx={{
              fontWeight: 900,
              // fontFamily: "Avenir Heavy"
            }}
          >
            Our cookie policy
          </Text>
          <Text
            as="p"
            mt="7px"
            mb="31px"
            sx={{
              fontSize: ["18px", "18px", "18px"],
              lineHeight: ["25px", "25px", "25px"],
              color: "black",
              opacity: 0.5,
            }}
          >
            Last updated 01 August, 2022
          </Text>
        </Box>
        <Grid gap={[2, 2, "24px"]} columns={[1, 1, "1fr 3fr"]} mt="24px">
          <Box sx={{ display: ["none", "none", "block"] }}>
            <HeadingList
              list={headingList}
              height="17%"
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }} id="preferences">
              <Text as="p" sx={styles.heading}>
                Cookie policy and preferences
              </Text>
              <Text as="p" sx={styles.content}>
                On your first visit to this Website, you were asked (by a
                notification banner) to accept our use of cookies and similar
                technologies and we would like to explain how we use these
                technologies.
              </Text>
              <Text as="p" sx={styles.content}>
                To learn about what cookies and similar technologies are, we
                recommend that you visit the following third-party website:
                www.allaboutcookies.org Like many websites, we use cookies for a
                variety of purposes. Some cookies are necessary for the
                functionality of the Website, others log data about your device
                hardware and your interaction with our website. We use
                cloud-based servers hosted by third party service providers
                (which may be located outside the EEA) to collect Website
                traffic information.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Text
              sx={{
                fontSize: "24px",
                lineHeight: "36px",
                color: "black",
                fontFamily: "Avenir Book",
                my: "44px",
              }}
            >
              On this website we use
            </Text>
            <Box id="cookies">
              <Text sx={styles.heading}>Functional cookies</Text>
              <Text as="p" sx={styles.content}>
                These cookies are required for basic Website functionality and
                are therefore always enabled. For instance, when you exit our
                cookie banner a cookie is dropped on your device reminding your
                browser not to re-serve this pop-up box when you later visit
                this Website.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="performance-cookies">
              <Text sx={styles.heading}>Performance cookies</Text>
              <Text as="p" sx={styles.subHeading}>
                Analytics
              </Text>
              <Text as="p" sx={styles.content}>
                We use Google Analytics to collect information about how
                visitors use and interact with our website. The cookies collect
                information about{" "}
              </Text>
              <Text as="p" sx={styles.content}>
                • The number of visitors to our website,
              </Text>
              <Text as="p" sx={styles.content}>
                {" "}
                • The pages or content with the most traffic,{" "}
              </Text>
              <Text as="p" sx={styles.content}>
                {" "}
                • Approximately where in the world you are visiting the Website
                from; and{" "}
              </Text>
              <Text as="p" sx={styles.content}>
                • How you have found our website e.g., from a direct search;
                link on a third-party website; or link in one of our emails. We
                use this information to help improve the Website, for instance
                by prioritizing updates of the most read content or the most
                used functionality.
              </Text>
              <Text as="p" sx={styles.content}>
                We use this information to help improve the Website, for
                instance by prioritizing updates of the most read content or the
                most used functionality.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="media-cookies">
              <Text sx={styles.heading}>Content testing</Text>
              <Text as="p" sx={styles.content}>
                If we are working on updates to our website, we occasionally
                display original content to some visitors and updated content to
                other visitors to help us assess which version best optimizes
                user experience. When we do this, we drop a cookie on your
                device to remember which version of the page you were served.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="tracking">
              <Text as="p" sx={styles.heading}>
                Advertising cookies & social media cookies
              </Text>
              <Text as="p" sx={styles.content}>
                Sometimes we pair up with social media and advertising partners
                such as Facebook, Google and LinkedIn who drop cookies on your
                device when you visit our website to remember that you have
                looked at our website/expressed an interest in our products
                ("Third-party cookies"). This means that when you later visit
                these third-party websites or visit a website which has agreed
                to host adverts for our online advertising platform, the adverts
                displayed to you are more tailored to your apparent interests.
                If you click on these adverts, they will re-direct you back to
                our website. Our third-party partners may pass us information
                about the total number of views, shares, and click-throughs
                these adverts have received.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box>
              <Text as="p" sx={styles.heading}>
                Conversion tracking
              </Text>
              <Text as="p" sx={styles.content}>
                In order to see how successfully our marketing campaigns or
                other website goals are performing we sometimes use conversion
                pixels, which fire a short line of code to tell us when you have
                clicked on a particular button on our website or reached a
                particular page.
              </Text>
              <Text as="p" sx={styles.content}>
                Unless otherwise specified the above cookies remain when you
                close your browser.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Footer isMobile={isMobile} hideCollaborate />
    </Box>
  );
}

const styles = {
  heading: {
    fontSize: "32px",
    lineHeight: "40px",
    color: "black",
    // fontFamily: "Avenir Heavy",
    fontWeight: 900,
    // marginBottom: "22px",
  },
  subHeading: {
    fontSize: "20px",
    lineHeight: "40px",
    color: "black",
    mt: "10px",
    // fontFamily: "Avenir Heavy",
    fontWeight: 900,
  },
  content: { fontSize: "15px", lineHeight: "24px", color: "black", mt: "10px" },
};
