import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Input,
  Flex,
  Select,
  Image,
  Textarea,
  Label,
  Checkbox,
  Button,
} from "theme-ui";
// import Image from "next/image";
import { scrollLock, unlockScroll } from "../../utils/scroll";
import { industry, companyType, companySize } from "../../utils/constants";
import countries from "../../utils/countries";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import dynamic from "next/dynamic";
const PrivacyPopup = dynamic(() => import("../privacyPolicyPopup"));

/** @jsxImportSource theme-ui */
const Assesment = ({
  closePopup,
  isMobile = true,
  showAssesmentSuccess = false,
  onSubmit,
  // showAssesment,
  onBack,
}) => {
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [orgName, setOrgName] = useState("");
  const [ind, setInd] = useState("Industry");
  const [compType, setCompType] = useState("Company type");
  const [compySize, setCompSize] = useState("Company size");
  const [country, setCountry] = useState("Country");
  const [message, setMessage] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [error, setError] = useState({
    fName: false,
    sName: false,
    mobile: false,
    email: false,
    role: false,
    orgName: false,
    checkBox: false,
  });
  let leadData = {
    "fields":[
      {
        "name": "firstname",
        "value": fName
      },
      {
        "name": "lastname",
        "value": sName
      },
      {
        "name": "mobilephone",
        "value": mobile
      },
      {
        "name": "email",
        "value": email
      },
      {
        "name": "role",
        "value": role
      },
      {
        "name": "organizationname",
        "value": orgName
      },
      {
        "name": "industrytype",
        "value": ind
      },
      {
        "name": "companytype",
        "value": compType
      },
      {
        "name": "companysize",
        "value": compySize
      },
      {
        "name": "country",
        "value": country
      },
      {
        "name": "message",
        "value": message
      }
    ]
  };



  const onSubmitClick = () => {
    let errObj = {
      fName: false,
      sName: false,
      mobile: false,
      email: false,
      role: false,
      orgName: false,
      checkBox: false,
    };
    let isError = false;
    
    if (!fName) {
      errObj = { ...errObj, fName: true };
      isError = true;
    }
    if (!sName) {
      errObj = { ...errObj, sName: true };
      isError = true;
    }
    if (!mobile) {
      errObj = { ...errObj, mobile: true };
      isError = true;
    }
    if (!email) {
      errObj = { ...errObj, email: true };
      isError = true;
    }
    if (!role) {
      errObj = { ...errObj, role: true };
      isError = true;
    }
    if (!orgName) {
      errObj = { ...errObj, orgName: true };
      isError = true;
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errObj = { ...errObj, email: true };
      isError = true;
    }
    if (!checkBox) {
      errObj = { ...errObj, checkBox: true };
      isError = true;
    }
    if (!isError) {
      onSubmit(leadData);
    } else {
      setError({ ...errObj });
    }
  };

  useEffect(() => {
    document.querySelectorAll("#selectBox").forEach((box) => {
      box.querySelectorAll("div").forEach((d) => {
        d.style.width = !isMobile ? "43%" : "100%";
      });
    });

    scrollLock();

    return () => {
      unlockScroll();
    };
  }, [showAssesmentSuccess]);

  if (showAssesmentSuccess) {
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
          Thank you for reaching ClimeUp team. Our ESG Experts will be in touch
          with you shortly!{" "}
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

  const RequiredFieldText = () => {
    return (
      <Text as="p" sx={{ variant: "text.mobileSmall", color: "red" }}>
        Please complete this required field
      </Text>
    );
  };

  return (
    <Box
      sx={{
        width: ["90vw", "100vw", "100vw"],
        height: ["100%", "100%", "100%"],
        minHeight: ["100%", "100vh", "100%"],
        position: "relative",
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("/assets/assesment-bg.png")',
          backgroundSize: ["cover", "cover", "cover"],
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: ["42px", "42px", "50px"],
        }}
      >
        <Text
          sx={{
            fontSize: ["24px", "24px", "48px"],
            lineHeight: ["33px", "33px", "66px"],
            color: "white",
            fontWeight: 900,
          }}
          style={{paddingTop: 120}}
        >
          Get a free ESG assessment{" "}
        </Text>
        <Text
          sx={{
            fontSize: ["18px", "18px", "24px"],
            lineHeight: ["27px", "27px", "24px"],
            color: "lightGreen",
            fontWeight: 500,
            mt: ["14px", "14px", 16],
            textAlign: "center",
          }}
        >
          Almost there, you are just 2 mins away from a strategic partnership.
          <br />
          <br />
          Complete below details to talk to our ESG experts.
        </Text>
      </Box>
      <Box
        sx={{
          py: [35, 35, "46px"],
          bg: "white",
          // height: ["90%", "90%", "calc(100%-200px)"],
          px: [30, 30, "300px"],
          // overflowY: "scroll",
        }}
      >
        <Flex sx={styles.rowWrapper}>
          <Box sx={styles.errorWrapper}>
            <Input
              placeholder="First name"
              value={fName}
              onChange={(e) => {
                if (error.fName && e.target.value) {
                  setError({ ...error, fName: false });
                }
                setFName(e.target.value);
              }}
              bg="#F5F5FF"
              sx={{
                ...styles.rowInput1,
                border: error.fName && "1px solid red",
              }}
            />
            {error.fName && <RequiredFieldText />}
          </Box>
          <Box sx={styles.errorWrapper}>
            <Input
              placeholder="Last name"
              value={sName}
              onChange={(e) => {
                if (error.sName && e.target.value) {
                  setError({ ...error, sName: false });
                }
                setSName(e.target.value);
              }}
              bg="#F5F5FF"
              sx={{
                ...styles.rowInput2,
                border: error.fName && "1px solid red",
              }}
            />
            {error.sName && <RequiredFieldText />}
          </Box>
        </Flex>
        <Flex
          sx={{
            width: "100%",
            justifyContent: "space-between",
            mb: 22,
            // px: [30, 30, 90],
            flexDirection: ["column", "column", "row"],
          }}
        >
          <Box sx={{ ...styles.errorWrapper, mb: ["30px", "30px", 0] }}>
            <PhoneInput
              country={"us"}
              value={mobile}
              inputStyle={{
                backgroundColor: "#F5F5FF",
                borderWidth: 0,
                padding: "21px 24px",
                fontFamily: "Avenir",
                fontWeight: 500,
                color: "black",
                marginLeft: "20px",
                marginRight: "20px",
                width: "95%",
                // marginBottom: '30px'
              }}
              placeholder="Mobile number"
              onChange={(phone) => {
                if (error.mobile && phone) {
                  setError({ ...error, mobile: false });
                }
                setMobile(phone);
              }}
            />
            {/* <Input
              placeholder="Mobile number"
              bg="#F5F5FF"
              value={mobile}
              onChange={(e) => {
                if (error.mobile && e.target.value) {
                  setError({ ...error, mobile: false });
                }
                setMobile(e.target.value);
              }}
              sx={{
                ...styles.rowInput1,
                border: error.mobile && "1px solid red",
              }}
            /> */}
            {error.mobile && <RequiredFieldText />}
          </Box>
          <Box sx={{ ...styles.errorWrapper }}>
            <Input
              placeholder="Organization email Id"
              bg="#F5F5FF"
              value={email}
              onChange={(e) => {
                if (error.email && e.target.value) {
                  setError({ ...error, email: false });
                }
                setEmail(e.target.value);
              }}
              sx={{
                ...styles.rowInput2,
                border: error.email && "1px solid red",
              }}
            />
            {error.email && <RequiredFieldText />}
          </Box>
        </Flex>
        <Flex
          sx={{
            width: "100%",
            justifyContent: "space-between",
            mb: 22,
            // px: [30, 30, 90],
            flexDirection: ["column", "column", "row"],
          }}
        >
          <Box sx={styles.errorWrapper}>
            <Input
              placeholder="Your role"
              value={role}
              onChange={(e) => {
                if (error.role && e.target.value) {
                  setError({ ...error, role: false });
                }
                setRole(e.target.value);
              }}
              bg="#F5F5FF"
              sx={{
                ...styles.rowInput1,
                border: error.role && "1px solid red",
              }}
            />
            {error.role && <RequiredFieldText />}
          </Box>
          <Box sx={styles.errorWrapper}>
            <Input
              placeholder="Organization name"
              bg="#F5F5FF"
              value={orgName}
              onChange={(e) => {
                if (error.orgName && e.target.value) {
                  setError({ ...error, orgName: false });
                }
                setOrgName(e.target.value);
              }}
              sx={{
                ...styles.rowInput2,
                border: error.orgName && "1px solid red",
              }}
            />
            {error.orgName && <RequiredFieldText />}
          </Box>
        </Flex>
        <Flex
          sx={{
            width: "100%",
            justifyContent: "space-between",
            mb: 22,
            // px: [30, 30, 90],
            flexDirection: ["column", "column", "row"],
          }}
          id="selectBox"
        >
          <Select
            arrow={
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentcolor"
                sx={{
                  ml: -28,
                  mt: [-10, -20, 0],
                  alignSelf: "center",
                  pointerEvents: "none",
                }}
              >
                <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
              </Box>
            }
            value={ind}
            onChange={(e) => {
              setInd(e.target.value);
            }}
            bg="#F5F5FF"
            sx={{ ...styles.select, color: "black", mb: [22, 22, 0] }}
            // defaultValue="Industry type"
          >
            <option>Industry type</option>
            {industry.map((ind) => (
              <option key={ind}>{ind}</option>
            ))}
          </Select>
          <Select
            arrow={
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentcolor"
                sx={{
                  ml: -28,
                  mt: [-10, -20, 0],
                  alignSelf: "center",
                  pointerEvents: "none",
                  mt: ["22px", "22px", "0px"],
                }}
              >
                <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
              </Box>
            }
            value={compType}
            onChange={(e) => {
              setCompType(e.target.value);
            }}
            bg="#F5F5FF"
            sx={{ ...styles.select, color: "black" }}
            defaultValue="Company type"
          >
            <option>Company type</option>
            {companyType.map((company) => {
              return <option key={company}>{company}</option>;
            })}
            {/* <option>India</option>
            <option>US</option> */}
          </Select>
        </Flex>
        <Flex
          sx={{
            width: "100%",
            justifyContent: "space-between",
            mb: 22,
            // px: [30, 30, 90],
            flexDirection: ["column", "column", "row"],
          }}
          id="selectBox"
        >
          <Select
            arrow={
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentcolor"
                sx={{
                  ml: -28,
                  mt: [-10, -20, 0],
                  alignSelf: "center",
                  pointerEvents: "none",
                }}
              >
                <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
              </Box>
            }
            value={compySize}
            onChange={(e) => {
              setCompSize(e.target.value);
            }}
            bg="#F5F5FF"
            sx={{ ...styles.select, color: "black", mb: [22, 22, 0] }}
            defaultValue="Industry type"
          >
            <option>Company Size</option>
            {companySize.map((com) => {
              return <option key={com}>{com}</option>;
            })}
            {/* <option>Software</option>
            <option>Hardware</option> */}
          </Select>
          <Select
            arrow={
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentcolor"
                sx={{
                  ml: -28,
                  mt: [-10, -20, 0],
                  alignSelf: "center",
                  pointerEvents: "none",
                  mt: ["22px", "22px", "0px"],
                }}
              >
                <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
              </Box>
            }
            bg="#F5F5FF"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            sx={{ ...styles.select, color: "black" }}
            defaultValue="Country"
          >
            <option>Country</option>
            {countries.map((c) => {
              return <option key={c.label}>{c.label}</option>;
            })}
          </Select>
        </Flex>
        <Textarea
          placeholder="Enter your message"
          rows="3"
          bg="#F5F5FF"
          mb="32px"
          sx={{ ...styles.select, color: "black" }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Label mb={3} sx={{ alignItems: "center" }}>
          <Checkbox
            checked={checkBox}
            onChange={() => {
              if (error.checkBox && !checkBox) {
                setError({ ...error, checkBox: false });
              }
              setCheckBox(!checkBox);
            }}
          />
          <Text>
            By submitting this form you agree to our
            {/* <Link href="/privacy-policy"> */}
            <span
              style={{
                textDecoration: "underline",
                margin: "0px 5px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                setShowPrivacy(true);
              }}
            >
              {" "}
              privacy policy{" "}
            </span>
            {/* </Link> */}
            and GDPR rules and guidelines
          </Text>
        </Label>
        {error.checkBox && (
          <Text as="p" sx={{ variant: "text.mobileSmall", color: "red" }}>
            Please select the checkbox to complete the submission.
          </Text>
        )}
        <Flex
          sx={{
            width: "100%",
            justifyContent: ["center", "center", "flex-end"],
          }}
        >
          <Flex
            sx={{
              bg: "lightGreen",
              // mx: [30, 30, 90],
              width: ["80%", "80%", "35%"],
              height: "48px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 24,
              cursor: "pointer",
            }}
            onClick={onSubmitClick}
          >
            <Text
              as="p"
              sx={{ fontSize: "16px", lineHeight: "22px", color: "darkCyan" }}
            >
              Submit
            </Text>
          </Flex>
        </Flex>
      </Box>
 
      {showPrivacy && (
        <PrivacyPopup
          isMobile={isMobile}
          visible={showPrivacy}
          closePopup={() => setShowPrivacy(false)}
        />
      )}
    </Box>
  );
};

const styles = {
  errorWrapper: {
    width: ["100%", "100%", "43%"],
  },
  rowInput1: {
    borderWidth: 0,
    mr: 24,
    width: "100%",
    mb: ["32px", "22px", "0px"],
    px: "24px",
    py: "13px",
    fontFamily: "Avenir",
    fontWeight: 500,
    color: "black",
  },
  rowInput2: {
    borderWidth: 0,
    // mr: 24,
    width: "100%",
    px: "24px",
    py: "13px",
    fontFamily: "Avenir",
    fontWeight: 500,
    // mb: ["10px", "10px", "0px"],
  },
  rowWrapper: {
    // justifyContent: "space-between",
    width: "100%",
    justifyContent: "space-between",
    mb: 22,
    // px: [30, 30, 90],
    flexDirection: ["column", "column", "row"],
  },
  select: {
    borderWidth: 0,
    width: ["100%", "100%", "100%"],
    px: "24px",
    py: "13px",
    fontFamily: "Avenir",
    fontWeight: 500,
    // mb: [22, 22, 0],
  },
  singleSelect: {
    borderWidth: 0,
    width: ["100%", "100%", "100%"],
    ml: [0],
    px: "24px",
    py: "13px",
    fontFamily: "Avenir",
    fontWeight: 500,
  },
};

export default Assesment;
