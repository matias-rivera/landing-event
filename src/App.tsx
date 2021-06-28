import React, { useState } from "react";
import Hero from "./components/Hero";
import GlobalStyle from "./styles/globalStyles";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Extra from "./components/Extra";
import Memory from "./components/Memory";
import Tickets from "./components/Tickets";
import Location from "./components/Location";
import Newsletter from "./components/Newsletter";
import Hurry from "./components/Hurry";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Router>
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Hero />
            <About />
            <Extra />
            <Schedule />
            <Memory />
            <Speakers />
            <Tickets />
            <Location />
            <Newsletter />
            <Sponsors />
            <Hurry />
            <Footer />
        </Router>
    );
};

export default App;
