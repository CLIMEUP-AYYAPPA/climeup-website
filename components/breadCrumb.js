import Link from "next/link";
import React from "react";
import { Flex, Text } from "theme-ui";

export default function breadCrumb(props) {
  const { crumbs } = props;
  return (
    <Flex sx={{ alignItems: "center", height: 100 }}>
      {crumbs.map((crumb, index) => {
        return (
          <Link href={crumb.link} key={crumb.text}>
            <Text
              sx={{
                color: "black",
                cursor: "pointer",
                fontSize: "14px",
                lineHeight: "19px",
                mx: "5px",
              }}
            >
              {crumb.text} {index < crumbs.length - 1 ? " > " : " "}
            </Text>
          </Link>
        );
      })}
    </Flex>
  );
}
