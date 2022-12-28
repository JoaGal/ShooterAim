import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Contact } from "./Pages/Contact/Contact";
import { Games } from "./Pages/Games/Games";
import { Presicion } from "./Pages/Games/Presicion/Presicion";
import { Home } from "./Pages/Home/Home";
import {Challenge} from "./Pages/Games/Challenge/Challenge.js";
import { Diana } from "./Pages/Games/Diana/Diana";
import { DoubleShoot } from "./Pages/Games/DoubleShoot/DoubleShoot";
import { MultiShoot } from "./Pages/Games/MultiShoot/MultiShoot";
import { Extreme } from "./Pages/Games/Extreme/Extreme";

export const App = () => {
  return (
    <BrowserRouter>

    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games/presicion" element={<Presicion/>} />
        <Route path="/games/doubleshoot" element={<DoubleShoot/>} />
        <Route path="/games/challenge" element={<Challenge/>} />
        <Route path="/games/diana" element ={<Diana/>}/>
        <Route path="/games/multishoot" element={<MultiShoot/>}/>
        <Route path="/games/extreme" element={<Extreme/>}/>
      </Routes>
    </BrowserRouter>
  );
};
