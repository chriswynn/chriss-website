/** @jsx jsx */
import { jsx } from "@emotion/core";
import "minireset.css";

function App({ Component, pageProps }) {
  return (
    <div css={{ background: "#000" }}>
      <Component {...pageProps} />;
    </div>
  );
}

export default App;
