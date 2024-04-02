import React, { useState } from "react";
import { Box, Image, Button, Text, Input } from "theme-ui";

export default function newsLetter({
  closePopup,
  showNewsLetterSuccess = false,
  onSubmit,
  onBack,
}) {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);

  if (showNewsLetterSuccess) {
    return (
      <Box
        sx={{
          width: ["90vw", "100vw", "40%"],
          // height: ["100%", "100%", "45%"],
          // minHeight: ["100%", "100vh", "50%"],
          position: "relative",
          overflowY: "scroll",
          bg: "secondaryBlue",
          px: ["24px", "24px", "69px"],
          py: ["24px", "24px", "74px"],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets/successTick.svg"
          width="81px"
          height="81px"
          alt="tick icon"
          mb="24px"
        />
        <Text
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            color: "white",
            fontFamily: "Avenir Medium",
            textAlign: "center",
          }}
          as="p"
        >
          Thanks for subscribing. Stay tuned!
        </Text>
        <Button
          mt="32px"
          sx={{
            variant: "button.rounded2",
            bg: "white",
            color: "black",
            width: "35%",
            fontWeight: 500,
          }}
          onClick={onBack}
        >
          Back
        </Button>
        <Image
          src="/assets/close-icon.svg"
          width={["28px", "28px", 40]}
          height={["28px", "28px", 40]}
          sx={{
            position: "absolute",
            top: 20,
            right: [10, 10, 30],
            cursor: "pointer",
          }}
          onClick={closePopup}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: ["90vw", "100vw", "40%"],
        // height: ["100%", "100%", "45%"],
        // minHeight: ["100%", "100vh", "50%"],
        position: "relative",
        overflowY: "scroll",
        bg: "secondaryBlue",
        px: ["24px", "24px", "69px"],
        py: ["44px", "44px", "74px"],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <Image
        src="/assets/successTick.svg"
        width="81px"
        height="81px"
        alt="tick icon"
        mb="24px"
      /> */}
      <Text
        sx={{
          fontSize: "24px",
          lineHeight: "24px",
          color: "lightGreen",
          fontFamily: "Avenir Medium",
          textAlign: "center",
        }}
        as="p"
      >
        Subscribe to our newsletter
      </Text>
      <Text
        sx={{
          fontSize: "16px",
          lineHeight: "24px",
          color: "white",
          fontFamily: "Avenir",
          textAlign: "center",
        }}
        mt="9px"
        mb="41px"
        as="p"
      >
        Stay updated with our ESG insights and services
      </Text>
      <Input
        placeholder="Enter Email address"
        sx={{
          width: "90%",
          p: "13px 25px",
          fontFamily: "Avenir",
          fontWeight: 400,
          border: "0 dashed #979797",
          color: "black",
          // opacity: email ? "100%" : "50%",
          borderRadius: 0,
          "&:focus": {
            outline: "none",
          },
          bg: "#F5F5FF",
        }}
        value={email}
        onChange={(e) => {
          if (e.target.value && invalid) {
            setInvalid(false);
          }
          setEmail(e.target.value);
        }}
      />
      {invalid && (
        <Text
          sx={{
            fontSize: "12px",
            lineHeight: "16px",
            color: "#E16E62",
            mt: "8px",
            ml: "20px",
            alignSelf: "flex-start",
          }}
        >
          Enter a valid email id
        </Text>
      )}
      <Button
        mt="32px"
        sx={{
          variant: "button.rounded2",
          bg: "lightGreen",
          color: "darkCyan",
          width: "35%",
          fontWeight: 500,
          alignSelf: "flex-end",
          mr: "20px",
        }}
        onClick={() => {
          if (!email) {
            setInvalid(true);
            return;
          }
          if (
            email.match(
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
          ) {
            setInvalid(false);
            onSubmit();
            return;
          }
          setInvalid(true);
        }}
        // onClick={onBack}
      >
        Subscribe
      </Button>
      <Image
        src="/assets/close-icon.svg"
        width={["28px", "28px", 40]}
        height={["28px", "28px", 40]}
        sx={{
          position: "absolute",
          top: 20,
          right: [10, 10, 30],
          cursor: "pointer",
        }}
        onClick={closePopup}
      />
    </Box>
  );
}
