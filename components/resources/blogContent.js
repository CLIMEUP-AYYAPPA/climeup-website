import React from "react";
import { Box, Text } from "theme-ui";

export default function blogContent({ blogContentData = [] }) {
  const Blog = ({ heading = "", subHeading = "", content = "" }) => {
    return (
      <Box mb="48px">
        {heading && (
          <Text
            as="p"
            sx={{
              fontSize: ["24px", "24px", "40px"],
              lineHeight: ["32px", "32px", "55px"],
              color: "secondaryBlue",
              // fontFamily: "Avenir Heavy",
              fontWeight: 900,
            }}
          >
            {heading}
          </Text>
        )}
        {subHeading && (
          <Text
            as="p"
            sx={{
              fontSize: ["15px", "15px", "20px"],
              lineHeight: ["22px", "22px", "40px"],
              color: "black",
              // fontFamily: "Avenir Heavy",
              fontWeight: 900,
            }}
          >
            {subHeading}
          </Text>
        )}
        {content.split("\\n").map((c, index) => {
          return (
            <Text
              as="p"
              sx={{
                fontSize: "15px",
                lineHeight: "24px",
                color: "black",
                my: "20px",
              }}
              key={index}
            >
              {c}
            </Text>
          );
        })}
      </Box>
    );
  };
  return (
    <Box>
      {blogContentData.map((data, index) => {
        return <Blog {...data} key={index} />;
      })}
      {/* <Blog
        heading="Have you come across the term PPP!"
        content="The origin for ‘ESG’ was coined at least half a decade earlier, the three P’s stand for Planet, People and Profit which has been refined and returned to Environment, Social and Governance in the following years. ESG is being etched in large fonts into every corporate’s annual report, landing pages and social media outreaches.\nThe global sustainability movements led the path for ESG adoption - The United Nations Sustainability Development Goals (SDGs) adopted in 2015 stirred the attention of businesses and corporates across the globe and gained responsible volunteers to address the ESG issues and report it.\nESG reporting isn’t a choice anymore but a mandate, hence, we will set out to witness more value driven and responsible investments in the future. Emphasis from governments, general public and investors play a crucial role in reinventing the ESG wheels. Companies qualify for capital investments based on their alignment with the UN sustainability goals and ESG reporting has been mandated for EU commission’s 50,000 largest corporations, all emphasizing the clamoring need to protect people and the planet. "
      />
      <Blog
        heading="‘E’ ‘S’ ‘G’ factors"
        subHeading="Environmental factors "
        content="Distortion of any biotic/abiotic components for financial gains is termed to affect the environment. We witness a myriad of factors that have a negative influence on our environment – all forms of pollutions and harmful radiations, increased plastic usage which is set to outlive humans for the next 5 generations, greenhouse gasses trapping the atmosphere, increasing deforestation, amateur resource conservation & recycling measures and unsettled climate & energy policies. The future of mankind depends on these depleting resources and it is quintessential to act upon it now, without delays.\nThe need to stabilize the vulnerable environment led to reporting these critical factors, so that data are measurable and quantifiable which could be acted upon proactively.  "
      />
      <Blog
        // heading="‘E’ ‘S’ ‘G’ factors"
        subHeading="Social factors "
        content="While environmental factors are paramount, businesses must vigilantly patrol their social attributes to keep the needle moving. The social factors overarch the wellbeing of every human involved in the business processes – employees, contractors, supply chain engagements, distributors, consumers and the community in total. Social reporting will comprise the employee welfare and development programs, diverse culture, safe work environment, product quality and safety standards, CSR activities, data security and many more. A conscious effort is needed from companies on social reporting as millennials today register companies that have strong integrity and are people driven. "
      />
      <Blog
        // heading="‘E’ ‘S’ ‘G’ factors"
        subHeading="Governance factors "
        content="The cornerstone for ESG remains in its governance, it decides the leadership team, corporate management policies, stakeholders’ democracy, board diversity, executive compensations, transparent leadership, fair trade and tax policies. While ESG is looming large across all corners, every investment decision is expected to happen hand-in-hand with the sustainability goals, hence, absolute transparency on reporting the governance factors keep corporations on good books amongst the diverse audience.\n
 
          The positive side of ESG is promising and novel, yet, we must not underestimate the challenges which businesses will face to collect these diversified data across different verticals.  However, once these data translate into meaningful information which can be consumed and acted upon, then we are closer to the goal of offering a better world for our generations to come. "
      /> */}
    </Box>
  );
}
