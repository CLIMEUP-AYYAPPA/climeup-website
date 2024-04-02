import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Box, Button } from "theme-ui";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "../../hooks/usePreventBodyScroll";
import { scrollLock, unlockScroll } from "../../utils/scroll";
/** @jsxImportSource theme-ui */

const Carousel = ({ isMobile = true }) => {
  const [startHorizontalScroll, setStartHorizontalScroll] = useState(false);
  let timer = null;
  const [position, setPosition] = useState(100);
  const scrollRef = useRef();

  const { disableScroll, enableScroll } = usePreventBodyScroll();

  // useEffect(() => {
  //   if (startHorizontalScroll) {
  //     // scrollNext();
  //     ref.current.scrollLeft += 1200;
  //   }
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       if (entry.isIntersecting) {
  //         setStartHorizontalScroll(true);
  //       } else {
  //         setStartHorizontalScroll(false);
  //         clearInterval(timer);
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: "5px",
  //       threshold: 0.8,
  //     }
  //   );
  //   const carouselElement = document.querySelector("#carousel");
  //   if (carouselElement) {
  //     observer.observe(carouselElement);
  //   }
  //   return () => {
  //     if (carouselElement) {
  //       observer.unobserve(carouselElement);
  //     }
  //   };
  // }, []);

  const carouselData = [
    {
      assetUrl: "/assets/slide1.png",
    },
    {
      assetUrl: "/assets/slide2.png",
    },
    {
      assetUrl: "/assets/slide3.png",
    },
    {
      assetUrl: "/assets/slide4.png",
    },
  ];
  const { initComplete, isLastItemVisible, isFirstItemVisible } =
    React.useContext(VisibilityContext);

  const restorePosition = React.useCallback(
    ({ scrollContainer }) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = position;
        // scrollToItem(getItemById('test15'), 'auto');
      }
    },
    [position]
  );

  const savePosition = React.useCallback(
    ({ scrollContainer }) =>
      !!scrollContainer.current &&
      setPosition(scrollContainer.current.scrollLeft),
    []
  );

  // const onWheel = (apiObj, ev) => {
  //   console.log({ apiObj }); // isLastItemVisible
  //   // if (startHorizontalScroll) {
  //   const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  //   if (isThouchpad) {
  //     ev.stopPropagation();
  //     return;
  //   }

  //   if (ev.deltaY < 0) {
  //     apiObj.scrollPrev();
  //   } else if (ev.deltaY > 0) {
  //     apiObj.scrollNext();
  //     // if (isLastItemVisible) {
  //     //   unlockScroll();
  //     // }
  //   }
  //   // }
  // };

  // useEffect(() => {
  //   if (isLastItemVisible) {
  //     unlockScroll();
  //     window.screenTop(100);
  //   }
  //   if (startHorizontalScroll) {
  //     scrollLock();
  //   }
  // }, [isLastItemVisible, startHorizontalScroll]);

  const CarouselCard = ({ assetUrl = "/assets/slide1.png", index }) => {
    return (
      <Box
        id={index}
        sx={{
          minWidth: ["327px", "327px", "1200px"],
          // minHeight: "100%",
          // display: "flex",
          // zIndex: 1,
          // flexDirection: ["column-reverse", "column-reverse", "row"],
        }}
      >
        <Image
          src={assetUrl}
          height="675px"
          width="1200px"
          objectFit="contain"
        />
        {/* <Box
          sx={{
            width: "160px",
            height: "300px",
            backgroundColor: "red",
            marginRight: "20px",
          }}
        /> */}
      </Box>
    );
  };

  // const scrollL = () => {
  //   if(isLastItemVisible){
  //     unlockScroll();
  //   }
  // }

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        zIndex: 2,
        marginTop: isMobile ? "-80px" : "-100px",
        // pl: isMobile ? "30px" : "120px",
        pr: isMobile ? "10px" : "0px",
      }}
    >
      <div
      // onMouseEnter={disableScroll}
      // onMouseLeave={enableScroll}
      // onMouseEnter={scrollLock}
      // onMouseLeave={unlockScroll}
      // style={{ backgroundColor: "blue" }}
      >
        <ScrollMenu
          apiRef={scrollRef}
          onInit={restorePosition}
          onScroll={savePosition}
          transitionDuration={500}
          transitionEase={(t) => t}
          // onWheel={onWheel}
          arrowLeft={() => {
            <button
              style={{
                border: "1px solid transparent",
                borderRadius: "50%",
                position: "absolute",
                left: "10%",
                transform: "translateY(-50%)",
                /* background-color: rgba(255,255,255,0.2); */
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={left}
            >
              <Image
                width="35px"
                height="35px"
                src="/assets/carousel-leftArrow.svg"
              />
            </button>;
          }}
          // style={{ paddingLeft: isMobile ? "30px" : "120px" }}
          options={{
            ratio: 0.9,
            rootMargin: "5px",
            threshold: [0.01, 1, 0.5, 0.75, 0.95, 1],
          }}
        >
          {carouselData.map((d, index) => {
            return <CarouselCard {...d} index={index} key={index} />;
          })}
        </ScrollMenu>
      </div>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          // height: "80%",
          backgroundColor: "secondaryWhite",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
        style={{ height: "calc(100% - 100px)" }}
      />
    </Box>
  );
};

export default Carousel;
