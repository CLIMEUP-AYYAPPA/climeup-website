import { useState, useEffect } from "react";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    if (typeof window !== undefined) {
      setIsMobile(window.innerWidth < 992);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 992) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    }
    return () => {
      window.removeEventListener("resize", () => null);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
