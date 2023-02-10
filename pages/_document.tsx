import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const title =
    "ResumerX enhancer - Make your CV better with AI - Powered by OpenAI's GPT-3";
  const description =
    "Unlock your full potential with our AI-powered platform and let it edit your CV to new heights. Build on OpenAI's GPT-3 API. It's 100% free. Promised.";
  const image = "https://resumerx.me/resumerx.jpg";

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />

        <meta property="twitter:domain" content="resumerx.me" />
        <meta name="twitter:site" content="@drublic" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="description" content={description} />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GB4T9TK2YW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GB4T9TK2YW');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
          data-cfasync="false"
        />
        <Script>
          {`
            window.cookieconsent.initialise({
              "palette": {
                "popup": {
                  "background": "#252e39"
                },
                "button": {
                  "background": "#14a7d0"
                }
              },
              "position": "bottom-left",
              "type": "opt-out"
            });
          `}
        </Script>
      </body>
    </Html>
  );
}
