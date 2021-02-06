import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./App.css";

function Rabbit() {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translate(0, 0)" },
      { transform: "translate(800%, 0%)" },
    ],
    timing: {
      duration: 3000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
  return (
    <div ref={ref} className="rabbitDiv">
      <img
        src="https://lh3.googleusercontent.com/proxy/9Gj3FneNV8c67ekOPUdWpPG4bkMinUYurr7a_Il0MgKvz7_Xi7_UPybMaQPuHz9YL3sl0n5s-IdPAGakc7YcPLucclygpc2ReqcdIyr3iyVt"
        alt="rabbit"
      />
    </div>
  );
}

export default Rabbit;
