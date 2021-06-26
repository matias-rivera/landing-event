import React from "react";
import Hero from "./components/Hero";
import GlobalStyle from "./styles/globalStyles";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Extra from "./components/Extra";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Hero />
            <About />
            <Schedule />
            <Extra />
            <Speakers />
        </>
    );
};

export default App;
