import React, { useEffect } from "react";
import PrivacyPolicy from "../pages/privacy-policy";
import { scrollLock, unlockScroll } from "../utils/scroll";

export default function PrivacyPolicyPopup({
  isMobile = true,
  visible = false,
  closePopup = () => null,
}) {
  useEffect(() => {
    if (visible) {
      scrollLock();
    } else {
      unlockScroll();
    }
    return () => {
      unlockScroll;
    };
  }, [visible]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgb(240,240,240,1)",
        overflow: "scroll",
        zIndex: 100,
      }}
    >
      <PrivacyPolicy isMobile={isMobile} isPopup closePopup={closePopup} />
    </div>
  );
}
