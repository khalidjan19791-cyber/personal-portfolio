import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About_Me from "./Pages/About_Me";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="min-w-[320px] bg-gradient text-white  overflow-y-hidden overflow-x-hidden min-h-screen box-border   ">
      <BrowserRouter>
        <div
          className="pt-5 px-3 sm:w-[85vw]   sm:m-auto lg:w-[85vw]   lg:px-0
         "
        >
          <Navbar />
          <div className="mt-12 ">
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/about_me"} element={<About_Me />} />
              <Route path={"/project"} element={<Projects />} />
              <Route path={"/services"} element={<Services />} />
              <Route path={"/contact"} element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
