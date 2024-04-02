import React from "react";
import { Flex, Text, Button, Box } from "theme-ui";
import { motion, useAnimation } from "framer-motion";
import { scrollLock, unlockScroll } from "../../utils/scroll";
import dynamic from "next/dynamic";
const PrivacyPopup = dynamic(() => import("../privacyPolicyPopup"));

const CookieConsent = React.memo(
  ({
    onAcceptAll,
    onRejectAll,
    onCustomize,
    showConsent,
    isMobile = false,
  }) => {
    const [showPrivacy, setShowPrivacy] = React.useState(false);
    const controls = useAnimation();
    React.useEffect(() => {
      if (showConsent) {
        controls.start("move");
        scrollLock();
      } else {
        unlockScroll();
      }
      return () => {
        unlockScroll();
      };
    }, [showConsent]);
    return (
      <>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            px: "120px",
            position: "absolute",
            top: "0px",
            bg: "rgba(0,0,0,0.4)",
            zIndex: 100,
          }}
        >
          <Flex
            sx={{
              display: "flex",
              backgroundColor: "white",
              p: "25px 40px 30px 41px",
              width: "100%",
              // mt: "209px",
              flexDirection: "column",
            }}
            as={motion.div}
            animate={controls}
            variants={{
              move: {
                y: "109px",
                transition: {
                  duration: 1,
                },
              },
            }}
          >
            <Text>
              Climeup use cookies and other tracking technologies for
              performance, analysis & marketing purposes. By using this website,
              you accept this use. Learn more about these technologies in the{" "}
              {/* <Box href="/privacy-policy"> */}
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => setShowPrivacy(true)}
              >
                Privacy Policy.
              </span>
              {/* </Box> */}
            </Text>
            <Flex sx={{ justifyContent: "space-between", mt: "25px" }}>
              <Button
                sx={{ variant: "button.lightGreenOutlined", width: "15%" }}
                onClick={onCustomize}
              >
                Customise
              </Button>
              <Flex sx={{ width: "30%", justifyContent: "flex-end" }}>
                <Button
                  sx={{
                    variant: "button.lightGreenOutlined",
                    // width: "50%",
                    mr: "17px",
                  }}
                  onClick={onRejectAll}
                >
                  Reject all
                </Button>
                <Button
                  sx={{
                    variant: "button.rounded",
                    bg: "lightGreen",
                    color: "#003A42",
                    // width: "50%",
                  }}
                  onClick={onAcceptAll}
                >
                  Accept all
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        {showPrivacy && (
          <PrivacyPopup
            isMobile={isMobile}
            visible={showPrivacy}
            closePopup={() => setShowPrivacy(false)}
          />
        )}
      </>
    );
  }
);

export default CookieConsent;
