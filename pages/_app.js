/** @jsx jsx */
import { jsx } from "@emotion/core";
import Layout from "../components/Layout";
import "minireset.css";
import "../styles/styles.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
