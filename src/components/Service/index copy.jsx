import React, { useEffect } from 'react';
import History from "../About/History";
import InnerPageWrapper from "../common/InnerPageWrapper";
import TitleSection from "../common/TitleSection";
import Footer from "../HomeOne/Footer";
import FeatureSectionTwo from "../HomeThree/FeatureSectionTwo";
import Sponser from "../HomeTwo/Sponser";
import ContactSection from "./ContactSection";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "service");
    }, []);
    return (
        <>
            <InnerPageWrapper>
                <TitleSection title="Service" paths={[{name:'home',path:'/'},{name:'service',path:'/service'}]}/>
                <FeatureSectionTwo/>
                <ContactSection/>
                <History/>
                <Sponser className="sponsers-slider-s2 s-padding-b"/>
                <Footer/>
            </InnerPageWrapper>
        </>
    );
}

export default Index;