import { useEffect, useRef, useState, type ReactElement } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ViewAnimation = ({ children }: { children: ReactElement }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const viewAnimate = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView) {
      setMounted(true);
      viewAnimate.start("visible");
    }
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        start: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="start"
      animate={viewAnimate}
      transition={{ duration: 0.25 }}
    >
      {mounted && children}
    </motion.div>
  );
};

export default ViewAnimation;
