import Layout from "../components/layout/layout";
import Head from "next/head";
import { AppProvider } from "../context";

import "../styles/globals.css";
import "../styles/navigation.css";
import "../styles/hero.css";
import "../styles/about.css";
import "../styles/page-not-found.css";
import "../styles/project.css";
import "../styles/lists.css";
import "../styles/resume.css";
import "../styles/contact-page.css";
import "../styles/collaborate.css";
import "../styles/footer.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
