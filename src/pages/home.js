import React from "react";
import EventSection from "../components/EventSection";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer"
import {HomeCenter} from "../components/Center";

export default function Home()
{
    return (
        <>
        <HomeCenter>
        <HeroSection />
        <EventSection />
        </HomeCenter>
        <Footer />
        </>
    );
}