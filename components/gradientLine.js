import React from "react";
import { Box } from "theme-ui";

export default function gradientLine(props) {
  const {
    width = 1,
    height = 1,
    isHorizonatal = false,
    verticalReverse = false,
  } = props;
  if (isHorizonatal) {
    return (
      <Box
        sx={{
          width,
          height,
          backgroundImage: "linear-gradient(to right,#00FEB7,#000FBD)",
          ...props,
        }}
      />
    );
  }
  return (
    <Box
      sx={{
        width,
        height,
        backgroundImage: verticalReverse
          ? "linear-gradient(to bottom,#000FBD, #00FEB7)"
          : "linear-gradient(to bottom, #00FEB7, #000FBD)",
        ...props,
      }}
    />
  );
}
