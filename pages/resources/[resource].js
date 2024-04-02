import React from "react";
import dynamic from "next/dynamic";
import { Box, Grid, Text } from "theme-ui";
import Image from "next/image";

const Header = dynamic(() => import("../../components/header"));
const Footer = dynamic(() => import("../../components/footer"));
const BreadCrumb = dynamic(() => import("../../components/breadCrumb"));
const BlogAuthorDetails = dynamic(() =>
  import("../../components/resources/blogAuthorDetails")
);
const BlogContent = dynamic(() =>
  import("../../components/resources/blogContent")
);
const SuggestedTopics = dynamic(() =>
  import("../../components/resources/suggestedTopics")
);

/** @jsxImportSource theme-ui */

export default function BlogDetail({
  isMobile = true,
  blogDetails,
  crumbs,
  heading = "",
  otherTopics = [],
  bannerImageUrl = "",
}) {
  return (
    <Box w="100%">
      <Header isMobile={isMobile} isTransparent={false} />
      <Box mt="70px" px={["24px", "24px", "120px"]}>
        <BreadCrumb crumbs={crumbs} />
        <Text
          sx={{
            variant: "text.subHeading",
            // fontFamily: "Avenir Heavy"
            fontWeight: 900,
          }}
        >
          {heading}
        </Text>
        <Box mt="31px">
          <Image
            width="1200px"
            height="433px"
            src={bannerImageUrl}
            alt="banner-icon"
          />
        </Box>
        <Grid gap={2} columns={[1, 1, "1fr 3fr"]} mt={["20px", "20px", "75px"]}>
          <BlogAuthorDetails authorData={blogDetails.author} />
          <BlogContent blogContentData={blogDetails.content} />
        </Grid>
      </Box>
      <SuggestedTopics otherTopics={otherTopics} isMobile={isMobile} />
      <Footer isMobile={isMobile} hideCollaborate />
    </Box>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { resource: "1" } },
      { params: { resource: "2" } },
      { params: { resource: "3" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  let crumbs = [];
  let content = [];
  let author = "Thiruvenkateswaran Ramachandran";
  let authorImageUrl = "/assets/Thiruvenkateswaran Ramachandran.jpeg";
  let heading = "What is ESG ?";
  let bannerImageUrl = "/assets/resource-banner1.png";
  let otherTopics = [
    {
      imageSrc: "/assets/OurInsights2.png",
      date: "11 Aug 2022",
      title: "Challenges in ESG",
      description:
        "The need for ESG has just been realized a few years ago, but the damage across all three pillars incepted as urbanization and…",
      viewMore: "/resources/2",
    },
    {
      imageSrc: "/assets/OurInsights3.png",
      date: "10 Aug 2022",
      title: "Five tips to streamline…",
      description:
        "Whether you are an SME or a transnational company, a day to day business operation would involve high volume...",
      viewMore: "/resources/3",
    },
  ];

  if (params.resource === "1") {
    crumbs = [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Resources",
        link: "/resources",
      },
      {
        text: "What is ESG ?",
        link: "/resources/1",
      },
    ];
    content = [
      {
        heading: "Have you come across the term PPP!",
        content:
          "The origin for ‘ESG’ was coined at least half a decade earlier, the three P’s stand for Planet, People and Profit which has been refined and returned to Environment, Social and Governance in the following years. ESG is being etched in large fonts into every corporate’s annual report, landing pages and social media outreaches.\nThe global sustainability movements led the path for ESG adoption - The United Nations Sustainability Development Goals (SDGs) adopted in 2015 stirred the attention of businesses and corporates across the globe and gained responsible volunteers to address the ESG issues and report it.\nESG reporting isn’t a choice anymore but a mandate, hence, we will set out to witness more value driven and responsible investments in the future. Emphasis from governments, general public and investors play a crucial role in reinventing the ESG wheels. Companies qualify for capital investments based on their alignment with the UN sustainability goals and ESG reporting has been mandated for EU commission’s 50,000 largest corporations, all emphasizing the clamoring need to protect people and the planet. ",
        subHeading: "",
      },
      {
        heading: "‘E’ ‘S’ ‘G’ factors",
        subHeading: "Environmental factors",
        content:
          "Distortion of any biotic/abiotic components for financial gains is termed to affect the environment. We witness a myriad of factors that have a negative influence on our environment – all forms of pollutions and harmful radiations, increased plastic usage which is set to outlive humans for the next 5 generations, greenhouse gasses trapping the atmosphere, increasing deforestation, amateur resource conservation & recycling measures and unsettled climate & energy policies. The future of mankind depends on these depleting resources and it is quintessential to act upon it now, without delays.\nThe need to stabilize the vulnerable environment led to reporting these critical factors, so that data are measurable and quantifiable which could be acted upon proactively.  ",
      },
      {
        subHeading: "Social factors ",
        content:
          "While environmental factors are paramount, businesses must vigilantly patrol their social attributes to keep the needle moving. The social factors overarch the wellbeing of every human involved in the business processes – employees, contractors, supply chain engagements, distributors, consumers and the community in total. Social reporting will comprise the employee welfare and development programs, diverse culture, safe work environment, product quality and safety standards, CSR activities, data security and many more. A conscious effort is needed from companies on social reporting as millennials today register companies that have strong integrity and are people driven. ",
      },
      {
        subHeading: "Governance factors ",
        content:
          "The cornerstone for ESG remains in its governance, it decides the leadership team, corporate management policies, stakeholders’ democracy, board diversity, executive compensations, transparent leadership, fair trade and tax policies. While ESG is looming large across all corners, every investment decision is expected to happen hand-in-hand with the sustainability goals, hence, absolute transparency on reporting the governance factors keep corporations on good books amongst the diverse audience.\nThe positive side of ESG is promising and novel, yet, we must not underestimate the challenges which businesses will face to collect these diversified data across different verticals.  However, once these data translate into meaningful information which can be consumed and acted upon, then we are closer to the goal of offering a better world for our generations to come. ",
      },
    ];
  }
  if (params.resource === "2") {
    author = "Chandrakumar BJG";
    heading = "Need for ESG";
    bannerImageUrl = "/assets/resource-banner2.png";
    authorImageUrl = "/assets/Chandrakumar BJG.jfif";
    crumbs = [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Resources",
        link: "/resources",
      },
      {
        text: "Challenges in ESG",
        link: "/resources/2",
      },
    ];
    content = [
      {
        heading: "Need for ESG",
        content:
          "The need for ESG has just been realized a few years ago, but the damage across all three pillars incepted as urbanization and civilization entered human brains.  Now stretch your brain cells to think about the amount of unreported information so far – too large to consume, isn't it?\nBut say, let's start from now, to report all the three factors that would make us good patrols towards a cleaner environment and a socially upright community. Not easy as it is, the reason being the mammoth of data, overarched by the number of what's, how's and who's?\nESG reporting has a myriad of challenges, but supporting it with an effective framework, integral data, collaborative communication across organizational and external silos and a super-efficient reporting system will bring immeasurable goodwill to the corporate chronicles.  ",
        subHeading: "",
      },
      {
        heading: "Need for centralized data ",
        content:
          "Except for the businesses that have been serious about sustainability or ESG reporting, most of the corporates and the industrial segments haven't maintained a centralized system to collect the ESG data. The particular data owner under different verticals owns and communicates these data when needed, but information is inaccessible to a secondary source. The accuracy of this information is never scrutinized, simply because most of the ESG data are not quantitative, no fixed parameter to scale, host of grey data, and voluminous human errors. ",
      },
      {
        heading: "Converting data to meaningful information ",
        content:
          "ESG encompasses data across all vertices, while corporates make diligent efforts to report these data, most aren't sure on what needs to be reported and a few that manifest, shove off in the path of hooking the precise data. 'Materiality' (Key Reporting Parameters) metrics should be laid down strongly across each of the industry segments so that businesses have clear inclusion and exclusion attributes while retrieving data.\nLet's consider an automobile manufacturer – the different silos would include – assembling, metal stamping and welding, paint shop, and finally quality testing. Multifarious challenges stretch along the line segment - the nature and level of attributes will differ across silos, retrieving the vast supply chain information, and invisible/untraceable data are all impediments, however, the virtue lies in efficiently tracking all the critical variables under each department and process them into unambiguous information to act upon. ",
      },
      {
        heading: "Regulations at Inception: ",
        content:
          "ESG reporting is the first step towards a voyage that aims to build a better planet for the people, aiming for off-balance-sheet profits. Regulators, NGOs, activities, and industry groups are aligning and working on the frameworks, standardization, and taxonomies to fence in all industrial segments, however, this is time-consuming and cumbersome. Industries are perturbed to choose frameworks that would future-fit, and neither the frameworks have achieved a full circle as nothing has been defined and proven to pay off.\nEvery pathfinder in the ESG structure is grasping the straws to get things right, the problem is, not all speak the same language - interoperability, perplexed ESG approaches, undefined metrics, hasty and immediate fixes, and biased reporting will be a can of worms across any businesses and it needs to regulated to see the remunerations. ",
      },
    ];
    otherTopics = [
      {
        imageSrc: "/assets/OurInsights1.png",
        date: "10 Aug 2022",
        title: "What is ESG ?",
        description:
          "Have you come across the term PPP! The origin for ‘ESG’ was coined at least half a decade earlier...",
        viewMore: "/resources/1",
      },
      {
        imageSrc: "/assets/OurInsights3.png",
        date: "10 Aug 2022",
        title: "Five tips to streamline…",
        description:
          "Whether you are an SME or a transnational company, a day to day business operation would involve high volume...",
        viewMore: "/resources/3",
      },
    ];
  }
  if (params.resource === "3") {
    author = "Chandrakumar BJG";
    heading = "Five tips to streamline your ESG data collection and reporting";
    bannerImageUrl = "/assets/resource-banner3.png";
    authorImageUrl = "/assets/Chandrakumar BJG.jfif";
    crumbs = [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Resources",
        link: "/resources",
      },
      {
        text: "Five Tips to streamline...",
        link: "/resources/3",
      },
    ];
    content = [
      {
        heading: "Tips to streamline",
        content:
          "Whether you are an SME or a transnational company, a day to day business operation would involve high volume yet tremendously complex data generation, processing and intercommunication. Globally, it is proven that leveraging disciplined data for key decisions is one of the growth triggers for sustained businesses. With the current limelight on data as new oil, it is inevitable for any business to set, streamline and monitor the complete process for a successful journey. Continuous flow of large data sets generated by various business functions, from procurement to market supply involving core ops, finance, human resource, sales & marketing calls for seamless integration.One of the key challenges faced by business managers is to set a robust data collection process followed by translating it into actionable insights as a strategic feed throughout the value creation process. For value creation through data, it is an eminent practice of embracing digital transformation projects to enhance system efficiency to gain incremental business value and justified ROI. For design & implementation of successful org wide ESG programs, we at ClimeUp recommend the following tips inline with our client solution’s USP:",
        subHeading: "",
      },
      {
        subHeading: "Communicate – Keep it real, real-time & reinforced!",
        content:
          "ESG metrics & its core values have been in existence for decades, widely practiced in silos by businesses. For instance, gender equality sitting in the “S” part of ESG is a prime focus area for various large corporations striving to position themselves as a happy place to work. It covers gender balance, diversity and inclusivity resonating across elements such as transparency, employee engagement and people culture.Fundamentally, the specificity of ESG & its business impact for a particular organization needs to be clearly designed, implemented & emphasized on a daily basis. It is pertinent to note, the ESG reporting process is considered to be an additional task, a painful yet periodic (quarterly or annual) exercise by many stakes involved during the journey. It is often perceived as a long term commitment which often fails to provide consistent motivation to capture data, compute & report the impact. To make it more tangible & impactful, the goal has to be real and in real-time to realize the true potential that can be reinforced over time. In simple terms, any process including training to buy-in efforts required needs to be resilient to emphasize the organization’s sustainability goals in everyday milestones.   ",
      },
      {
        subHeading: "Collect – Building data culture at the core",
        content:
          "In many organizations, it is still an unmet dream to become a data driven company mostly due to cultural misfits than to do with any technical competencies. Firstly, it is often perpetually underestimated due to lack of adaptability to change despite ambitious & expensive digital transformation initiatives. Secondly, proliferation of unstructured data at exponential rate across functions making it difficult in terms of data storage & processing capabilities to pull the right trigger at the right time. It is easy to say, identifying the right data is half way through for successful reporting.Everyday data is a crucial resource to enable decisions that deliver long term business value. This critical message needs to percolate till the bottom of any organizational structure and to be periodically reinforced. ",
      },
      {
        subHeading: "Centralized – Embracing digitalization tools ",
        content:
          "It is observed, In any organization an average of 50 to 80 percent of data generated remains unstructured. Data fluidity remains one of the top of mind issues for executives, and it becomes tedious to manage, ensure data security involving multiple stakeholders. Today, it is one of the key elements to ensure a global workforce to be aligned seamlessly across different boundaries. It is essential for organizations to identify & embrace a centralized data tech platform offering uncompromised data security while encouraging cross functional collaboration capabilities.",
      },
      {
        subHeading: "Collaborate- Building a community of solvers",
        content:
          "A successful ESG data collection & reporting effort is incomplete without drive from core management and array of dotted line stakeholders. From data identification, collection, alignment, strategic goal setting and progress monitoring entails two layers or more. Each layer consists of stakeholders who align together as custodians of each business function’s responsibility in the data reporting journey. Many organizations falter the process by diluting the responsibility and or by assigning the ESG torch bearer task to a handful of resources in the mid management. For a successful sustainability journey by streamlining ESG as a measurable tool, organizations need to identify internal champions specific to each function. It is vital to organize layers based on collectors, validators, approvers & communicators collectively as a team of problem solvers and frequently check on the process roadmap.   ",
      },
      {
        subHeading: "Confidentiality – Data security, audit & compliance",
        content:
          "Collaborative environment opens up both softer & hard problems while enabling a platform for efficiency in the system. Softer problems include ambiguity, volatility, volume of data, lack of skilled personnel, reliability of source etc. Hard challenges include platform tool selection & deployment, data integration, cultural misfit, internal politics, data security, comparability etc. It’s a common misconception practiced in the industry to audit the data & related processes once in a year.Deploying certified vendor tools, systematic audit, sub layers of approver – primary & secondary approval, engaging external consultants are some of the best possible ways to address the data security concerns and to meet the standards compliance.New Job roles that would help to drive your ESG strategy.         ",
      },
    ];
    otherTopics = [
      {
        imageSrc: "/assets/OurInsights1.png",
        date: "10 Aug 2022",
        title: "What is ESG ?",
        description:
          "Have you come across the term PPP! The origin for ‘ESG’ was coined at least half a decade earlier...",
        viewMore: "/resources/1",
      },
      {
        imageSrc: "/assets/OurInsights2.png",
        date: "11 Aug 2022",
        title: "Challenges in ESG",
        description:
          "The need for ESG has just been realized a few years ago, but the damage across all three pillars incepted as urbanization and…",
        viewMore: "/resources/2",
      },
    ];
  }

  const blogDetails = {
    author: {
      name: author,
      imageUrl: authorImageUrl,
    },
    content,
  };
  return {
    // Passed to the page component as props
    props: { blogDetails, crumbs, heading, otherTopics, bannerImageUrl },
  };
}
