import React from "react";
import Intro from "../components/Intro/Intro";
import Cards from "../components/Cards/Cards";
import Popular from "../components/Cards/Service/Popular/Popular";
import All from "../components/Cards/Service/All/All";
import Calculate from "../components/Cards/Calculate/Calculate";

const Home = ()=>{

    return (
        <section className="home">
            <Intro/>
            <Cards/>
            <Popular/>
            <All/>
            <Calculate/>
        </section>
    )
}

export default Home;