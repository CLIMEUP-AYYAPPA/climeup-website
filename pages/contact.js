import React,{useState} from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";
import { Box, Flex, Text } from "theme-ui";

const Header = dynamic(() => import("../components/header"));
const Assesment = dynamic(() => import("../components/home/assesment"));

/** @jsxImportSource theme-ui */

export default function Contact({ isMobile = true }) {
    const [showAssesment, setShowAssesment] = useState(false);
    const [showAssesmentSuccess, setShowAssesmentSuccess] = useState(false);

    async function saveInHubspot(leadData) {
        const portalId = "22632044";
        const formId = "9d6047fa-f49a-43ab-9b1b-aca93158b7b8";
        const hubspotLeadURL =
          "https://api.hsforms.com/submissions/v3/integration/submit/" +
          portalId +
          "/" +
          formId;
        await axios.post(hubspotLeadURL, leadData).then((response) => {
          
          response.status === 200 ? setShowAssesmentSuccess(true) : console.log(response);
          
        }).catch((e)=>{
          console.log(e);
        })
      }

  return (
    <Box
    sx={{
      position: "absolute",
      top: 0,
      zIndex: 100000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgb(240,240,240,0.9)",
    }}
  >
    <Header isMobile={isMobile} />
    <Assesment
      isMobile={isMobile}
      showAssesmentSuccess={showAssesmentSuccess}
      onSubmit={(leadData) => {
        saveInHubspot(leadData);
      }}
      showAssesment={showAssesment}
      onBack={() => {
        if (showAssesmentSuccess) {
          setShowAssesmentSuccess(false);
          setShowAssesment(true);
        }
      }}
      closePopup={() => {
        setShowAssesment(false);
        setShowAssesmentSuccess(false);
      }}
    />
  </Box>
  );
}

const styles = {
  headingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: ["20px", "20px", "80px"],
    position: "relative",
  },
};
