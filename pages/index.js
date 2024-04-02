import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Box } from "theme-ui";
import LazyHydrate from "react-lazy-hydration";

const Header = dynamic(() => import("../components/header"));
const Hero = dynamic(() => import("../components/home/hero"));
const Carousel = dynamic(() => import("../components/home/carouselSlider"));
const WhatWeSupport = dynamic(() => import("../components/home/whatWeSupport"));
const OurApproach = dynamic(() => import("../components/home/OurApproach"));
const OurUniqueness = dynamic(() => import("../components/home/OurUniqueness"));
const WorkWithUs = dynamic(() => import("../components/home/workWithUs"));
const Footer = dynamic(() => import("../components/footer"));
const Assesment = dynamic(() => import("../components/home/assesment"));
const OurInsights = dynamic(() => import("../components/home/OurInsights"));
const ChallengesReported = dynamic(() =>
  import("../components/home/challengesReported")
);
const CookieConsent = dynamic(() => import("../components/home/cookieConsent"));
const CustomCookieConsent = dynamic(() =>
  import("../components/home/customCookieConsent")
);
const WhatWeDo = dynamic(() => import("../components/home/whatWeDo"));

/** @jsxImportSource theme-ui */

export default function Home({ isMobile = true }) {
  const [showAssesment, setShowAssesment] = React.useState(false);
  const [showAssesmentSuccess, setShowAssesmentSuccess] = React.useState(false);

  const [showCookieConsent, setShowCookieConsent] = React.useState(false);
  const [showCustomCookieConsent, setCustomCookieConsent] =
    React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let showConsent = false;
      if (typeof window !== "undefined") {
        showConsent =
          localStorage.getItem("cookie-consent-popup") ||
          localStorage.getItem("cookie-consent-strict") ||
          localStorage.getItem("cookie-consent-measurement");
      }
      setShowCookieConsent(!showConsent);
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box w="100%">
      <Header isMobile={isMobile} />
      <Hero isMobile={isMobile} setShowAssesment={setShowAssesment} />
      <LazyHydrate whenVisible>
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box sx={{ zIndex: 999 }}>
            <Carousel isMobile={isMobile} />
            <ChallengesReported isMobile={isMobile} />
          </Box>
          {/* <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(0deg, #FFFFFF 0%, #D1D5F7 100%)",
            position: "absolute",
            top: 0,
            zIndex: -1,
          }}
        /> */}
        </Box>
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <WhatWeDo isMobile={isMobile} />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <WhatWeSupport isMobile={isMobile} />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <OurApproach isMobile={isMobile} />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <OurUniqueness isMobile={isMobile} />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <OurInsights isMobile={isMobile} />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <WorkWithUs isMobile={isMobile} />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <Footer isMobile={isMobile} isHome />
      </LazyHydrate>

    
      {!isMobile && showCookieConsent && (
        <LazyHydrate whenVisible>
          <CookieConsent
            showConsent={showCookieConsent}
            // isMobile={isMobile}
            onAcceptAll={() => {
              if (typeof window !== "undefined") {
                localStorage.setItem("cookie-consent-all", true);
              }
              setShowCookieConsent(false);
            }}
            onRejectAll={() => {
              setShowCookieConsent(false);
            }}
            onCustomize={() => {
              setCustomCookieConsent(true);
            }}
          />
        </LazyHydrate>
      )}
      {!isMobile && showCustomCookieConsent && (
        <LazyHydrate whenVisible>
          <CustomCookieConsent
            onClickDone={() => {
              setShowCookieConsent(false);
              setCustomCookieConsent(false);
            }}
          />
        </LazyHydrate>
      )}
    </Box>
  );
}
