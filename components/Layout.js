/** @jsx jsx */
import { useEffect, Fragment } from "react";
import { jsx } from "@emotion/core";
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring
} from "framer-motion";

export default props => {
  const { scrollY } = useViewportScroll();
  const value = useTransform(scrollY, value => value * -1);
  const scrollValue = useSpring(value, { damping: 300, stiffness: 200 });

  useEffect(() => {
    const main = document.querySelector("main");
    const body = document.querySelector("body");
    const height = main.scrollHeight;
    body.setAttribute("style", `height: ${height}px`);
  }, []);

  return (
    <Fragment>
      <div
        css={{
          height: "100vh",
          left: 0,
          position: "fixed",
          top: 0,
          width: "100vw"
        }}
      >
        <motion.main style={{ y: scrollValue }}>{props.children}</motion.main>
      </div>
    </Fragment>
  );
};
