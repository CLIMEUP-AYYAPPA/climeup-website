import { useEffect } from "react";

export function useHorizontalScroll(elRef, start) {
  useEffect(() => {
    if (!start) return;
    // var scrollPos = 0;
    const el = elRef.current;
    // if (elRef?.current) {
    //   elRef?.current?.scrollIntoView();
    // }
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        if (
          !(el.scrollLeft === 0 && e.deltaY < 0) &&
          !(
            el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
            e.deltaY > 0
          )
        ) {
          // elRef.current.scrollIntoView();
          e.preventDefault();
        }

        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          // left:
          //   document.body.getBoundingClientRect().top > scrollPos
          //     ? el.scrollLeft - 50
          //     : el.scrollLeft + 50,
          // left:
          //   !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
          //   e.deltaY > 0)
          //     ? el.scrollLeft + 50
          //     : el.scrollLeft - 50,
          // behavior: "smooth",
        });
        // scrollPos = document.body.getBoundingClientRect().top;
      };
      el.addEventListener("wheel", onWheel);
      return () => {
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [start]);
  return elRef;
}
