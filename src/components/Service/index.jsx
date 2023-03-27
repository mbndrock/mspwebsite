import React, { useEffect } from 'react';
import InnerPageWrapper from "../common/InnerPageWrapper";
import TitleSection from "../common/TitleSection";
import Footer from "../HomeOne/Footer";
import FeatureSectionTwo from "../HomeThree/FeatureSectionTwo";
import ContactSection from "./ContactSection";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "service");
    }, []);
    return (
        <>
            <InnerPageWrapper>
                <TitleSection title="Services" paths={[{name:'home',path:'/'},{name:'service',path:'/service'}]}/>
                <FeatureSectionTwo/>
                <ContactSection/>
                <Footer/>
            </InnerPageWrapper>
        </>
    );
}

export default Index;