import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HoverableDropdown = ({
  parentDom,
  children,
  className,
  dimensionNumber = [0.4, 0.8],
}) => {
  const refParentDom = useRef();
  const refDropwdown = useRef();
  const [isHover, setIsHover] = useState(false);
  const [dimensions, setDimensions] = useState({});

  const variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: { opacity: 0, y: -10 },
  };

  const handleOutsideHover = (e) => {
    if (!refDropwdown) return;

    if (
      refParentDom.current.contains(e.target) ||
      refDropwdown.current.contains(e.target)
    )
      return;

    setIsHover(false);
  };

  useEffect(() => {
    setDimensions({
      width: window.innerWidth * dimensionNumber[0],
      height: window.innerHeight * dimensionNumber[1],
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mouseover", handleOutsideHover);

    return () => {
      document.removeEventListener("mouseover", handleOutsideHover);
    };
  }, [isHover]);

  return (
    <>
      <div
        className="relative"
        ref={refParentDom}
        onMouseEnter={(e) => setIsHover(true)}
      >
        {parentDom}
        <motion.div
          style={dimensions}
          animate={isHover ? "open" : "closed"}
          variants={variants}
          className={`${
            isHover
              ? `absolute top-16 left-14 flex flex-col w-1/2 bg-white shadow-2xl rounded-md px-10 py-5 z-50 ${className}`
              : "hidden"
          } `}
          ref={refDropwdown}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default HoverableDropdown;
