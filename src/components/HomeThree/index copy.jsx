import React from 'react';
import Footer from "../HomeOne/Footer";
import Drawer from "../Mobile/Drawer";
import AboutSection from "./AboutSection";
// import BlogsSection from "./BlogsSection";
import ContactBanner from "./ContactBanner";
import FeatureSection from "./FeatureSection";
import FeatureSectionTwo from "./FeatureSectionTwo";
import FunFact from "./FunFact";
import Header from "./Header";
import Hero from "./Hero";
// import TestimonialSection from "./TestimonialSection";

function Index() {
    return (
        <>
            <Header/>
            <Drawer type={2}/>
            <Hero/>
            <FeatureSection/>
            <AboutSection/>
            <ContactBanner/>
            <FeatureSectionTwo/>
            <FunFact/>
            <Footer/>
        </>
    );
}

export default Index;