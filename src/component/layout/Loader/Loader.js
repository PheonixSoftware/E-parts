import React from "react";
import "./Loader.css";
import {useEffect}from "react"

const Loader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Hello, World!')
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="loading" >
      <div></div>
    </div>
  );
};

export default Loader;
