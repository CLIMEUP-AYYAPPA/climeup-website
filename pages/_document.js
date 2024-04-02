import Document, { Html, Main, NextScript, Head } from "next/document";
import { InitializeColorMode } from "theme-ui";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // Replace html lang attribute value with your language.
    return (
      <Html lang='en'>
        <Head>
          <title>Accelerating ESG Reporting | ClimeUp</title>
          <meta property='og:title' content='ClimeUp' />
          <meta
            property='og:site_name'
            content='Accelerating ESG Reporting | ClimeUp'
          />
          <meta
            name='og:description'
            content='ClimeUp is an industry’s first sustainable technology (SusTech) company providing ESG Advisory
            and data management platform, enabling businesses of all sizes to collect, monitor and generate
            ESG reports in record time.'
          />
          <meta property='og:type' content='website' />
          {/* <meta
            property="og:image"
            itemProp="image"
            content="http://climp-up-marketing.vercel.app/assets/clime-up.png"
          /> */}
          <meta
            property='og:image'
            itemprop="image" 
            content='https://www.climeup.ai/assets/clime-up.png'
          />
          <meta property='og:image:width' content='400' />
          <meta property='og:image:height' content='300' />

        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
