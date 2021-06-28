import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
import Hero from "../components/Hero/index";
import IndexCardMain from "../components/IndexCard/index";
import TopGainers from "../components/TopGainers";
import Footer from "../components/Footer/Footer";


const Home = () => {
    const [isOpen, SetisOpen] = useState(false);

    const toggle = () => {
        SetisOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <IndexCardMain />
            <TopGainers />

            <Footer />

        </>
    );
};

export default Home;
