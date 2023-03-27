import React from 'react';
import InnerPageWrapper from "../common/InnerPageWrapper";
import TitleSection from "../common/TitleSection";
import Footer from "../HomeOne/Footer";
import Sponser from "../HomeTwo/Sponser";
import History from "./History";
import Testimonial from "./Testimonial";

function Index() {
    return (
        <>
            <InnerPageWrapper>
                <TitleSection title="about us" paths={[{name:'Home',path:'/'},{name:'about us',path:'/about'}]}/>
                <History/>
                <Testimonial/>
                <Sponser className="sponsers-slider-s2 s-padding-b"/>
                <Footer/>
            </InnerPageWrapper>

        </>
    );
}

export default Index;