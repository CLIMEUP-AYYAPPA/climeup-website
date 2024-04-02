import React, { useState } from "react";
import { Box, Switch, Flex, Text, Button } from "theme-ui";

export default function CustomCookieConsent({ onClickDone }) {
  const [strictSwitch, setStrictSwitch] = useState(true);
  const [measurementSwitch, setMeasurementSwitch] = useState(true);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        px: "120px",
        position: "absolute",
        top: "0px",
        bg: "rgba(0,0,0,0.7)",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ backgroundColor: "white", p: "20px", width: "70%" }}>
        <Text as="p" sx={{ variant: "text.paragraph" }}>
          Please select and accept your cookie policy group
        </Text>
        <Box sx={{ width: "100%", my: "10px" }}>
          <Flex sx={{ width: "100%", justifyContent: "space-between" }}>
            <Text as="p" sx={{ variant: "text.small" }}>
              Strictly necessary
            </Text>
            <Box>
              <Switch
                backgroundColor="primaryBlue"
                checked={strictSwitch}
                onChange={() => setStrictSwitch(!strictSwitch)}
                sx={{
                  "input:checked ~ &": {
                    backgroundColor: "primaryBlue",
                  },
                }}
              />
            </Box>
          </Flex>
          <Text>
            These trackers are used for activities that are strictly necessary
            to operate or deliver the service you requested from us and,
            therefore, do not require you to consent.
          </Text>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Flex sx={{ width: "100%", justifyContent: "space-between" }}>
            <Text as="p" sx={{ variant: "text.small" }}>
              Measurement
            </Text>
            <Box>
              <Switch
                backgroundColor="primaryBlue"
                checked={measurementSwitch}
                onChange={() => setMeasurementSwitch(!measurementSwitch)}
                sx={{
                  "input:checked ~ &": {
                    backgroundColor: "primaryBlue",
                  },
                }}
              />
            </Box>
          </Flex>
          <Text>
            These trackers are used for activities that are strictly necessary
            to operate or deliver the service you requested from us and,
            therefore, do not require you to consent.
          </Text>
        </Box>
        <Button
          sx={{
            vairant: "button.rounded",
            width: "100%",
            backgroundColor: "primaryBlue",
            mt: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            localStorage.setItem("cookie-consent-strict", strictSwitch);
            localStorage.setItem(
              "cookie-consent-measurement",
              measurementSwitch
            );
            onClickDone();
          }}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
}
