"use client";

import { useState } from "react";
import { Spinner } from "flowbite-react";
import "./LandingPage.css";
import LoginCard from "./LoginCard";
import { useEffect } from "react";
import map from "../../assets/map.png";

const LandingPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoggedIn((prev) => !prev);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="landing">
      {!isLoggedIn ? (
        <Spinner className="spinner" aria-label="Loading WebPage" size="xl" />
      ) : (
        <>
          <div className="loginImage">
            {/* <img src={map} /> */}
            Image here
          </div>
          <div className="loginCard">
            <LoginCard />
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
