import React from "react";

const styles = {
  backgroundColor: "rgba(26, 26, 26, 0.596)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
};

const Overlay = ({ children, className }) => {
  return (
    <div style={styles} className={`z-50 ${className}`}>
      {children}
    </div>
  );
};

export default Overlay;
