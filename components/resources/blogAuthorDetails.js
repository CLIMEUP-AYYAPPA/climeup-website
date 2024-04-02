import Image from "next/image";
import React from "react";
import { Box, Avatar, Text, Flex } from "theme-ui";

export default function blogAuthorDetails({ authorData }) {
  return (
    <Box>
      <Avatar
        sx={{
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
        alt="author-image"
        src={authorData?.imageUrl}
      />
      <Text as="p" variant="text.headerText" color="black" mt="16px" mb="7px">
        {authorData?.name}
      </Text>
      <Text as="p" variant="text.headerText" color="black" mb="24px">
        Aug 04, 2022 | 3 min read
      </Text>
      <Image
        src="/assets/Like Icon.svg"
        width="40px"
        height="40px"
        alt="like-icon"
      />
      <Text
        as="p"
        sx={{
          fontSize: "12px",
          lineHeight: "16px",
          color: "black",
          opacity: 0.5,
          fontFamily: "Avenir Book",
          mt: "14px",
        }}
      >
        Share with
      </Text>
      <Flex
        sx={{
          width: "100%",
          alignItems: "center",
          mt: "8px",
        }}
      >
        <Box sx={{ mr: "8px" }}>
          <Image
            src="/assets/Twitter Icon.svg"
            width="40px"
            height="40px"
            alt="twitter-icon"
          />
        </Box>
        <Box sx={{ mr: "8px" }}>
          <Image
            src="/assets/Linkedin Icon.svg"
            width="40px"
            height="40px"
            alt="linkedin-icon"
          />
        </Box>
        <Box sx={{ mr: "8px" }}>
          <Image
            src="/assets/Facebook Icon.svg"
            width="40px"
            height="40px"
            alt="facebook-icon"
          />
        </Box>
      </Flex>
    </Box>
  );
}
