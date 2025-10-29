import { useEffect, useRef, useState, type ReactElement } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ViewAnimation = ({ children }: { children: ReactElement }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin:'-10px'});
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
        start: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="start"
      animate={viewAnimate}
      transition={{ duration: 0.5 }}
    >
      {mounted && children}
    </motion.div>
  );
};

export default ViewAnimation;
