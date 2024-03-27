"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const [isMounted, setIsMounted] = useState();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    isMounted &&
    ReactDOM.createPortal(children, document.getElementById("portal"))
  );
};

export default Portal;
