import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export default function useCustomInView(delayOffset = 0.2) {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view]);

  return { ref: element, view, controls };
}
