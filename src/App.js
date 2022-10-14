import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Contact } from "./Pages/Contact/Contact";
import { DoubleShot } from "./Pages/Games/DoubleShot/DoubleShot";
import { Games } from "./Pages/Games/Games";
import { Presicion } from "./Pages/Games/Presicion/Presicion";
import { Home } from "./Pages/Home/Home";
import {Challenge} from "./Pages/Games/Challenge/Challenge.js";

export const App = () => {
  return (
    <BrowserRouter>

    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games/presicion" element={<Presicion/>} />
        <Route path="/games/doubleshot" element={<DoubleShot/>} />
        <Route path="/games/challenge" element={<Challenge/>} />
      </Routes>
    </BrowserRouter>
  );
};
