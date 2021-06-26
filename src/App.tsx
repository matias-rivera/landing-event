import React from "react";
import Hero from "./components/Hero";
import GlobalStyle from "./styles/globalStyles";
import About from "./components/About";
import Speakers from "./components/Speakers";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Hero />
            <About />
            <Speakers />
        </>
    );
};

export default App;
