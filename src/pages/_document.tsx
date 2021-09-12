import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html prefix="og: http://ogp.me/ns#">
        <Head>
          <meta property="og:title" content="MrSung" />
          <meta property="og:image" content="/icon-ogp.png" />
          <meta property="og:url" content="https://mrsung.dev/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-LZWCFFXX4J"
          />
          <Script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LZWCFFXX4J');
          `}</Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
