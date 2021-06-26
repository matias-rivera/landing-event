import React from "react";
import Hero from "./components/Hero";
import GlobalStyle from "./styles/globalStyles";
import About from "./components/About";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Hero />
            <About />
        </>
    );
};

export default App;
