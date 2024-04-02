import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { Box, Text, Grid, Divider, Flex } from "theme-ui";

const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));
const HeadingList = dynamic(() => import("../components/privacy/headingList"));

export default function privacyPolicy({
  isMobile = true,
  isPopup = false,
  closePopup = () => null,
}) {
  const headingList = [
    { value: "Information we collect", id: "collect" },
    { value: "Information you provide", id: "provide" },
    { value: "Data that may be collected automatically", id: "automatically" },
    { value: "How we use your data", id: "data" },
    {
      value: "When we share your information with third parties",
      id: "parties",
    },
    { value: "Privacy of children", id: "children" },
    { value: "Your privacy choices", id: "choices" },
    { value: "Data security", id: "security" },
    {
      value: "Links to third-party sites and social media plug-ins",
      id: "plug-ins",
    },
    { value: "Accessing our sites globally", id: "globally" },
    { value: "Changes to our privacy notice", id: "notice" },
  ];
  const [currentSection, setCurrentSection] = useState(-1);
  const [showcaAdInfo, setShowCaAdInfo] = useState(true);
  const [showEuAdInfo, setShowEuAdInfo] = useState(false);

  React.useEffect(() => {
    if (currentSection > -1 && !isPopup) {
      const element = document?.getElementById(headingList[currentSection].id);
      // var headerOffset = 35;
      var elementPosition = element?.getBoundingClientRect().top;
      var offsetPosition = elementPosition - 100;
      window?.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (currentSection > -1 && isPopup) {
      const container = document.getElementById("mainContainer");
      const element = document?.getElementById(headingList[currentSection].id);
      var elementPosition = element?.getBoundingClientRect().top;
      // container.scrollTo({
      //   top: elementPosition,
      //   behavior: "smooth",
      // });
      element.scrollIntoView();
      // element.scrollIntoView();
    }
  }, [currentSection]);
  return (
    <Box id="mainContainer">
      {!isPopup && (
        <Header isMobile={isMobile} isPrivacy isTransparent={false} />
      )}
      <Box
        mt={isPopup ? 10 : "100px"}
        px={["24px", "24px", "120px"]}
        sx={{ position: "relative" }}
      >
        <Box>
          <Flex
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              as="p"
              variant="text.subHeading"
              color="secondaryBlue"
              sx={{
                fontWeight: 900,
                // fontFamily: "Avenir Heavy"
              }}
            >
              Our privacy policy
            </Text>
            {isPopup && (
              <img
                src="/assets/close-icon.svg"
                width={["28px", "28px", "80px"]}
                height={["28px", "28px", "80px"]}
                style={{
                  position: "absolute",
                  top: 10,
                  right: isMobile ? 10 : 120,
                  cursor: "pointer",
                }}
                onClick={closePopup}
              />
            )}
          </Flex>

          <Text
            as="p"
            mt="7px"
            mb="31px"
            sx={{
              fontSize: ["18px", "18px", "18px"],
              lineHeight: ["25px", "25px", "25px"],
              color: "black",
              opacity: 0.5,
            }}
          >
            Last updated 01 August, 2022
          </Text>
          <Text
            as="p"
            sx={{
              fontSize: ["18px", "18px", "24px"],
              lineHeight: ["25px", "25px", "36px"],
              color: "black",
            }}
          >
            This Online Privacy Notice (“Privacy Notice”) explains how
            Greenworks Technology Solutions Private Limited, and its
            subsidiaries (“Climeup.ai” , “Greenworks Technology Solutions
            Private Limited”) manages personal data that it collects and
            receives from users through this website (Climeup.ai – A brand of
            “Greenworks Technology Solutions Private Limited”).
          </Text>
        </Box>
        <Grid gap={[2, 2, "24px"]} columns={[1, 1, "1fr 3fr"]} mt="24px">
          <Box sx={{ display: ["none", "none", "block"] }}>
            <HeadingList
              list={headingList}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }} id="collect">
              <Text as="p" sx={styles.heading}>
                Information we collect
              </Text>
              <Text as="p" sx={styles.content}>
                The types of personal data that we may collect and receive while
                you use the Climeup.ai (Greenworks Technology Solutions Private
                Limited) Website are described in this section and include both
                data that you provide to us and data that we collect
                automatically when you use the{" "}
                <Text sx={{ color: "specialGreen" }}>Climeup.ai</Text>{" "}
                (Greenworks Technology Solutions Private Limited) Website.
              </Text>
              <Text as="p" sx={styles.content}>
                For purposes of this Privacy Notice, “Personal Data” means any
                data related to you as an identified or identifiable natural
                person. Examples of Personal Data include name, address,
                telephone number, email address, etc.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="provide">
              <Text sx={styles.heading}>Information you provide</Text>
              <Text as="p" sx={styles.content}>
                Greenworks Technology Solutions Private Limited Collects
                Personal Data that you provide on Climeup.ai (Greenworks
                Technology Solutions Private Limited) Website, for example,
                through a contact us form to enquire about our services, through
                your job application, or to contact Greenworks Technology
                Solutions Private Limited. This could include:
              </Text>
              <Text as="p" sx={styles.content}>
                For purposes of this Privacy Notice, “Personal Data” means any
                data related to you as an identified or identifiable natural
                person. Examples of Personal Data include name, address,
                telephone number, email address, etc.
              </Text>
              <Text as="p" ml="10px" sx={styles.content}>
                • Name
              </Text>
              <Text as="p" ml="10px" sx={styles.content}>
                • Contact data such as your address, phone number, or email
                address
              </Text>
              <Text as="p" ml="10px" sx={styles.content}>
                • Registration data such as your username and password{" "}
              </Text>
              <Text as="p" ml="10px" sx={styles.content}>
                • Employment, education, and other background data when you
                inquire about our services or employment with Greenworks
                Technology Solutions Private Limited
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="automatically">
              <Text sx={styles.heading}>
                Data that may be collected automatically
              </Text>
              <Text as="p" sx={styles.content}>
                When you use Climeup.ai (Greenworks Technology Solutions Private
                Limited) Website, we also may collect certain usage and device
                data automatically as described below.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                IP address
              </Text>
              <Text as="p" sx={styles.content}>
                We may record the Internet Protocol (“IP”) address of your
                computer or other electronic device when you visit the
                Climeup.ai (Greenworks Technology Solutions Private Limited)
                Website. Your IP address is automatically logged in our web
                server logs, to provide you with the essential service of
                website browsing, without which it would not be possible for you
                to browse this website or even be able to read this page.
              </Text>
              <Text as="p" sx={styles.content}>
                An IP address identifies the electronic device you use to access
                the Sites, which allows us to maintain communication with your
                computer as you move about Climeup.ai (Greenworks Technology
                Solutions Private Limited) Website and to customize content.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Cookies and other tracking technologies
              </Text>
              <Text as="p" sx={styles.content}>
                We use cookies (and equivalent technologies) to collect and
                analyze information on our website’s performance and to enable
                the Website to function. Cookies also allow us and third parties
                to tailor the ads you see when you visit our website and other
                third-party websites in the same online network, including
                social networks. You can find out more from our Cookie Policy.
              </Text>
              <Text as="p" sx={styles.content}>
                To learn more about cookies and other tracking technologies,
                including how to disable them, please visit
                www.allaboutcookies.org or youronlinechoices.eu. Please note
                that some cookies are essential to the functioning of our
                websites and deleting or disabling them will reduce the sites
                functionality.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Data collected from other sources
              </Text>
              <Text as="p" sx={styles.content}>
                We may combine data about you that is collected through the
                Climeup.ai (Greenworks Technology Solutions Private Limited)
                Website with data that we have collected online, offline, as
                well as with data provided to us by third parties.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="data">
              <Text sx={styles.heading}>How we use your data</Text>
              <Text as="p" sx={styles.content}>
                We use your Personal Data to provide you the services you
                request, communicate with you, improve your experience on the
                Climeup.ai (Greenworks Technology Solutions Private Limited)
                Website, process your job application, and for other internal
                business purposes, as described in more detail below.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Providing services, you request
              </Text>
              <Text as="p" sx={styles.content}>
                If you choose to contact us, we use the Personal Data that you
                provide through Climeup.ai (Greenworks Technology Solutions
                Private Limited) Website to respond to your questions, provide
                you the services you request, offer an optimal customer
                experience, and/or on the basis of your consent.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Communicating with you
              </Text>
              <Text as="p" sx={styles.content}>
                If you choose to submit your details through Climeup.ai
                (Greenworks Technology Solutions Private Limited) Website, we
                may add you to our marketing list and contact you about our
                services. You may unsubscribe from such communications at any
                time using the link provided in emails from us.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Customized user experiences
              </Text>
              <Text as="p" sx={styles.content}>
                We may use your IP address and the data that we obtain
                automatically through the use of cookies or similar tracking
                technologies to make our Climeup.ai (Greenworks Technology
                Solutions Private Limited) Website easier to use and navigate as
                well as to personalize the content provided on Climeup.ai
                (Greenworks Technology Solutions Private Limited) Website by
                anticipating the information and services that may be of
                interest to you. In some cases, we collect this information
                pursuant to your consent. In other cases, we collect this
                information for our legitimate business interest to optimize and
                customize user experiences.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Business and product improvement
              </Text>
              <Text as="p" sx={styles.content}>
                In order to discover new facts that could help Greenworks
                Technology Solutions Private Limited better understand customer
                needs and help improve, develop, and evaluate services,
                materials, and incentives to join us, Greenworks Technology
                Solutions Private Limited analyses the information that you have
                provided for its legitimate interests in business and marketing
                improvement.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Service analytics and improvement
              </Text>
              <Text as="p" sx={styles.content}>
                We may use the information that you provide and the information
                we collect automatically about your use of the Climeup.ai
                (Greenworks Technology Solutions Private Limited) Website to
                monitor user traffic patterns and preferences for our legitimate
                business interests of improvement, analytics, and optimization
                of the Climeup.ai (Greenworks Technology Solutions Private
                Limited) Website.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Data use and retention
              </Text>
              <Text as="p" sx={styles.content}>
                We will only keep Personal Data as long as necessary for the
                fulfillment of the purposes outlined above, except if otherwise
                required by applicable laws or legal orders.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="parties">
              <Text as="p" sx={styles.heading}>
                When we share your information with third parties
              </Text>
              <Text as="p" sx={styles.content}>
                We only share your Personal Data with third parties as described
                below. We do not sell or rent Personal Data to third parties for
                their own marketing purposes.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Affiliates, vendors, and suppliers
              </Text>
              <Text as="p" sx={styles.content}>
                We have relationships with various vendors and suppliers,
                including our affiliated companies and recruitment agencies, who
                help us operate our business and for whom it may be necessary to
                have access to your Personal Data while providing services to
                Greenworks Technology Solutions Private Limited. We will not
                authorize these parties to use your Personal Data for any
                purpose that is not related to Greenworks Technology Solutions
                Private Limited’s business operation, and we require them to
                manage your Personal Data collected through the Climeup.ai
                (Greenworks Technology Solutions Private Limited) Website in
                accordance with appropriate contractual privacy and security
                provisions and this Privacy Notice.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                Legal rights and obligations
              </Text>
              <Text as="p" sx={styles.content}>
                In certain limited circumstances, Greenworks Technology
                Solutions Private Limited may need to disclose your Personal
                Data in order to comply with a legal obligation or demand, such
                as to comply with reporting obligations to our governing
                regulatory authorities regarding the safety of our products and
                services, or in connection with the sale or transfer of one of
                our product lines or divisions, which includes the services
                provided through one or more of the Greenworks Technology
                Solutions Private Limited Website. In such instances, we will
                take measures to protect your Personal Data to the extent
                possible. We also reserve the right to use Personal Data to
                investigate and prosecute users who violate our rules or who
                engage in behavior that is illegal or harmful to others or to
                others’ property.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="children">
              <Text as="p" sx={styles.heading}>
                Privacy of children
              </Text>
              <Text as="p" sx={styles.content}>
                Greenworks Technology Solutions Private Limited does not
                knowingly collect or use any Personal Data directly from
                children on Climeup.ai (Greenworks Technology Solutions Private
                Limited) Website. We do not knowingly allow children to
                communicate with us, or to use any of our online services. If
                you are a parent and become aware that your child has provided
                us with information, please contact us using one of the methods
                specified below, and we will collaborate with you to address
                this issue.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="choices">
              <Text as="p" sx={styles.heading}>
                Your privacy choices
              </Text>
              <Text as="p" sx={styles.content}>
                You may contact Greenworks Technology Solutions Private Limited
                to ask questions, discuss your concerns, or report privacy
                concerns. If you communicate with or request information from
                Greenworks Technology Solutions Private Limited, you may be
                prompted to provide your contact information as well as any
                personal data that is relevant to your request.
              </Text>
              <Text as="p" sx={styles.content}>
                Please submit your privacy inquiries at{" "}
                <Text sx={{ color: "specialGreen" }}>info@climeup.ai</Text> or
                send your complaints to below communication address.
                <br />{" "}
                <Text sx={{ fontWeight: 500, lineHeight: "28px" }}>
                  Greenworks technology Solutions Private Limited,
                </Text>
                <br />
                <Text sx={{ fontWeight: 500, lineHeight: "28px" }}>
                  {" "}
                  #9/1, Pillayar Nagar 2nd Street, Court main road,
                  <br /> Salem, Tamil Nadu, India – 636007.
                </Text>
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="security">
              <Text as="p" sx={styles.heading}>
                Data security
              </Text>
              <Text as="p" sx={styles.content}>
                Greenworks Technology Solutions Private Limited maintains
                reasonable technical, administrative, organizational, and
                physical security measures and controls to secure any Personal
                Data collected through the Climeup.ai (Greenworks Technology
                Solutions Private Limited) Website. However, there is always
                some risk that an unauthorized third party could intercept an
                Internet transmission, or that someone will find a way to thwart
                our security systems. We urge you to exercise caution when
                transmitting Personal Data over the Internet, especially any
                sensitive Personal Data. Greenworks Technology Solutions Private
                Limited cannot guarantee that unauthorized third parties will
                not gain access to your Personal Data; therefore, when
                submitting Personal Data to Greenworks Technology Solutions
                Private Limited Website, you must weigh both the benefits and
                the risks.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="plug-ins">
              <Text as="p" sx={styles.heading}>
                Links to third-party sites and social media plug-ins
              </Text>
              <Text as="p" sx={styles.content}>
                This Privacy Notice does not apply to third-party websites to
                which Climeup.ai (Greenworks Technology Solutions Private
                Limited) Website may link. Climeup.ai (Greenworks Technology
                Solutions Private Limited) Website may use social media plug-ins
                (e.g., the LinkedIn “Share” button, “Share to Twitter” button)
                to enable you to easily share information with others. When you
                visit Climeup.ai (Greenworks Technology Solutions Private
                Limited) Website, the operator of the social plug-in can place a
                cookie on your computer or other electronic device that enables
                that operator to recognize individuals who have previously
                visited our Site. If you are logged into the social media
                website (e.g., Facebook, LinkedIn, Twitter) while browsing on
                our Climeup.ai (Greenworks Technology Solutions Private Limited)
                Website, the social media plug-in allows that social media
                website to receive information that you have visited our
                Climeup.ai (Greenworks Technology Solutions Private Limited)
                Website. The social media plug-in also allows the social media
                website to share information about your activities on our
                Climeup.ai (Greenworks Technology Solutions Private Limited)
                Website with other users of their social media website. These
                sharing settings are managed by the social media website and
                governed by its privacy policy.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="globally">
              <Text as="p" sx={styles.heading}>
                Accessing our sites globally
              </Text>
              <Text as="p" sx={styles.content}>
                This site is owned and operated by Greenworks Technology
                Solutions Private Limited, and if you are visiting this site
                from a country outside India, your communication with us will
                necessarily result in the transfer of information across
                international borders. Personal Data may be transferred to other
                Greenworks Technology Solutions Private Limited affiliates in
                territories that may not provide a level of protection to
                Personal Data equivalent to that provided by your home country.
              </Text>
              <Text as="p" sx={styles.content}>
                In compliance with privacy regulations across the globe,
                Greenworks Technology Solutions Private Limited adheres and
                cooperates fully with the EU Data Protection Authorities (EU
                DPAs) and the Swiss Federal Data Protection and Information
                Commissioner (FDPIC) regarding human resource data (which is any
                Personal Data about an organization’s own employees, past or
                present, collected in the context of the employee relationship)
                and non-human resource data. Greenworks Technology Solutions
                Private Limited will comply with advice given by such
                authorities with regard to Personal Data transferred from the
                European Union and Switzerland. Greenworks Technology Solutions
                Private Limited commits to resolve complaints about your privacy
                and our collection or use of your Personal Data. Persons from
                the European Union and Switzerland who have inquiries or
                complaints regarding this Privacy Notice should first contact us
                at <Text sx={{ color: "specialGreen" }}>info@climeup.ai.</Text>
              </Text>
              <Text as="p" sx={styles.content}>
                Please note that if your complaint is not resolved through these
                channels, under limited circumstances, a binding arbitration
                option may be available before a Privacy Shield Panel.
              </Text>
              <Text as="p" sx={styles.content}>
                Any onward transfers of Personal Data to vendors and suppliers
                outside the EEA will be done in compliance with the
                international data transfer restrictions that apply under EU and
                Swiss data protection laws, including, where appropriate,
                through the use of EU model contracts for data transfers to
                processors.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
            <Box id="notice">
              <Text as="p" sx={styles.heading}>
                Changes to our privacy notice
              </Text>
              <Text as="p" sx={styles.content}>
                We will only use Personal Data in the manner described in the
                Privacy Notice in effect when the information was collected from
                you or as authorized by you. However, and subject to any
                applicable consent requirements, or if required by law, we
                reserve the right to change the terms of this Privacy Notice at
                any time.
              </Text>
              <Text as="p" sx={styles.content}>
                Any changes to this Privacy Notice will be reflected on this
                page with a new effective date. Greenworks Technology Solutions
                Private Limited encourages you to review this Privacy Notice
                regularly for any changes.
              </Text>
              <Text as="p" sx={styles.content}>
                Any Personal Data collected upon your continued use of
                Climeup.ai (Greenworks Technology Solutions Private Limited)
                Website will be handled in accordance with the currently posted
                Privacy Notice.
              </Text>
            </Box>
            <Divider
              sx={{
                width: "100%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.1,
                my: "20px",
              }}
            />
          </Box>
        </Grid>
        <Box px="41px" py="34px" sx={{ bg: "secondaryWhite", mt: "78px" }}>
          <Flex
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text as="p" sx={styles.heading}>
              Additional information for California residents
            </Text>
            <Image
              src={
                showcaAdInfo
                  ? "/assets/close-green.svg"
                  : "/assets/open-green.svg"
              }
              width="32px"
              height="32px"
              alt="close-icon"
              onClick={() => {
                setShowCaAdInfo(!showcaAdInfo);
              }}
              style={{ cursor: "pointer" }}
            />
          </Flex>
          {showcaAdInfo && (
            <>
              <Text as="p" sx={styles.content}>
                If you are a California resident, you have the right to receive
                specific information about how Greenworks Technology Solutions
                Private Limited collects, uses and discloses your Personal Data,
                and you may have specific rights with respect to your Personal
                Data. California-specific privacy requirements that are not
                addressed in other sections of this Privacy Notice are described
                in this section.
              </Text>
              <Text as="p" sx={styles.content}>
                Consistent with the Information we collect section above, we
                collect certain categories and specific pieces of information
                about individuals that are considered Personal Data. As detailed
                above, we may collect this Personal Data from you and other
                third parties. We collect, use, and disclose Personal Data for
                the business and commercial purposes described in the How we use
                your Data and the When we share your Information sections above.
                Under the definition of “selling” in the California Consumer
                Privacy Act, Greenworks Technology Solutions Private Limited
                does not sell your Personal Data.
              </Text>
              <Text as="p" sx={styles.subHeading}>
                As a California resident, you have the right to request :
              </Text>
              <Text as="p" sx={styles.content}>
                • Information about the Personal Data that Greenworks Technology
                Solutions Private Limited has collected, used and disclosed
                about you over the previous 12 months, including: the categories
                of Personal Data collected; the categories of sources from which
                your Personal Data was collected; the business or commercial
                purposes for which Greenworks Technology Solutions Private
                Limited collected your Personal Data; the categories of your
                Personal Data that was disclosed for a business or commercial
                purpose; and the categories of third parties with whom
                Greenworks Technology Solutions Private Limited shared your
                Personal Data.
              </Text>
              <Text as="p" sx={styles.content}>
                • The specific Personal Data that Greenworks Technology
                Solutions Private Limited has collected about you over the
                previous 12 months and
              </Text>
              <Text as="p" sx={styles.content}>
                • To have your Personal Data deleted.
              </Text>
              <Text as="p" sx={styles.content}>
                Should you exercise any of your privacy rights as a California
                resident, Greenworks Technology Solutions Private Limited will
                not discriminate against you by offering you different pricing
                or services, or by providing you with a different level or
                quality of services, based solely upon this request. Certain
                Greenworks Technology Solutions Private Limited Services,
                however, may require that Greenworks Technology Solutions
                Private Limited processes your Personal Data to provide the
                Service or to allow us to use and disclose your Personal Data to
                provide the Service. When you exercise your right to have your
                Personal Data deleted, you may lose access to certain aspects of
                Greenworks Technology Solutions Private Limited Services that
                require your Personal Data to perform the service.
              </Text>
              <Text as="p" sx={styles.content}>
                Please see the Your Privacy Choices section if you have
                questions or would like to make a request to exercise any of
                your rights.
              </Text>
            </>
          )}
        </Box>
        <Box
          px="41px"
          py="34px"
          mb="80px"
          sx={{ bg: "secondaryWhite", mt: "28px" }}
        >
          <Flex
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text as="p" sx={styles.heading}>
              Additional information for European economic area residents
            </Text>
            <Image
              src={
                showEuAdInfo
                  ? "/assets/close-green.svg"
                  : "/assets/open-green.svg"
              }
              width="32px"
              height="32px"
              alt="close-icon"
              onClick={() => {
                setShowEuAdInfo(!showEuAdInfo);
              }}
              style={{ cursor: "pointer" }}
            />
          </Flex>
          {showEuAdInfo && (
            <>
              <Text as="p" sx={styles.content}>
                Greenworks Technology Solutions Private Limited would like to
                make sure you are fully aware of all your data protection
                rights. Every user is entitled to the following:
              </Text>
              <Text as="p" sx={styles.content}>
                • The right to access – You have the right to request Greenworks
                Technology Solutions Private Limited for copies of your Personal
                Data or a description of the Personal Data categories we process
                or a description of the processing.
              </Text>
              <Text as="p" sx={styles.content}>
                • The right to rectification – You have the right to request
                that Greenworks Technology Solutions Private Limited correct any
                information you believe is inaccurate. You also have the right
                to request Greenworks Technology Solutions Private Limited to
                complete the information you believe is incomplete.
              </Text>
              <Text as="p" sx={styles.content}>
                • The right to erasure – You have the right to request that
                Greenworks Technology Solutions Private Limited erase your
                Personal Data, under certain conditions.
              </Text>
              <Text as="p" sx={styles.content}>
                • The right to restrict processing – You have the right to
                request that Greenworks Technology Solutions Private Limited
                restrict the processing of your Personal Data, under certain
                conditions.
              </Text>
              <Text as="p" sx={styles.content}>
                • The right to object to processing – You have the right to
                object to Greenworks Technology Solutions Private Limited’s
                processing of your Personal Data that are based on legitimate
                interests, under certain conditions.
              </Text>
              <Text as="p" sx={styles.content}>
                • The right to data portability – You have the right to request
                that Greenworks Technology Solutions Private Limited transfer
                the data that we have in our system or database.
              </Text>
              <Text as="p" sx={styles.content}>
                If you make a request, we have one month to respond to you. If
                Greenworks Technology Solutions Private Limited will not be able
                to provide the requested information or make the change you
                request, you will be provided with reasons for such decision.
              </Text>
              <Text as="p" sx={styles.content}>
                Under local law you are also entitled to lodge a complaint with
                your local data protection authority.
              </Text>
              <Text as="p" sx={styles.content}>
                Please submit your requests and privacy inquiries as described
                in Your Privacy Choices.
              </Text>
            </>
          )}
        </Box>
      </Box>
      {!isPopup && <Footer isMobile={isMobile} hideCollaborate />}
    </Box>
  );
}

const styles = {
  heading: {
    fontSize: "32px",
    lineHeight: "40px",
    color: "black",
    // fontFamily: "Avenir Heavy",
    fontWeight: 900,
    // marginBottom: "22px",
  },
  subHeading: {
    fontSize: "20px",
    lineHeight: "40px",
    color: "black",
    mt: "10px",
    // fontFamily: "Avenir Heavy",
    fontWeight: 900,
  },
  content: { fontSize: "15px", lineHeight: "24px", color: "black", mt: "10px" },
};
