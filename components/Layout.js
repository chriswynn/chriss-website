import { useEffect } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring
} from "framer-motion";

export default function(props) {
  const { scrollY } = useViewportScroll();
  const value = useTransform(scrollY, value => value * -1);
  const scrollValue = useSpring(value, { damping: 300, stiffness: 200 });

  function setHeight() {
    const main = document.querySelector("main");
    const body = document.querySelector("body");
    const height = main.scrollHeight;
    body.setAttribute("style", `height: ${height}px`);
  }

  function handleResize() {
    setHeight();
  }

  useEffect(() => {
    const images = document.querySelectorAll("img");
    images.forEach(i => {
      i.addEventListener("load", setHeight);
    });
    setHeight();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="page-container">
      <motion.main className="wrapper" style={{ y: scrollValue }}>
        {props.children}
      </motion.main>
    </div>
  );
}
