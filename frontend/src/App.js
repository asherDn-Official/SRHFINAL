import "./App.css";
import Aboutus from "./Components/Aboutus";
import axios from "axios";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToolsPage from "./Components/ToolsPage";
import Srhframework from "./Components/SrhFrameWork";
import Sixphase from "./Components/SixPhase";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Practice from "./Components/Practice";
import { useState } from "react";
import ThankYouPage from "./Components/ThankPage";
import Poppers from "./Components/Poppers";
import ScrollToTop from "./Components/ScrollToTop";
import Component from "./Components/ImageSldier";
import StoryBoard from "./Components/StoryBoard";
import SuperStarRetailerKit from "./Components/SuperStarRetailerKit";
import Example from "./Components/Popup";
import Whatsapp from "./Components/Whatsapp";
import JoinSuperstarCommunity from "./Components/JoinSuperstarCommunity";
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/toolspage" element={<ToolsPage />} />
          <Route path="/sixphase" element={<Sixphase />} />
          <Route path="/thankspage" element={<ThankYouPage />} />
          <Route path="/sucessfull-retailer" element={<Poppers />} />
          <Route path="/srhframework" element={<Srhframework />} />
          <Route path="/join-as-Member" element={<JoinSuperstarCommunity />} />
          <Route
            path="/superstar-retailer-kit"
            element={<SuperStarRetailerKit />}
          />
        </Routes>
        <Footer />
        {/* <Example /> */}
        <Whatsapp />
      </BrowserRouter>
    </div>
  );
}

export default App;
