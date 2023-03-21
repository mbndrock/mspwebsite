import React from 'react';

function AboutSection() {
    return (
        <section className="about-s4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="about-s4__content">

                            <span className="s-sub-title">What We Do</span>
                            <h2 className="s-title">
                                Bringing New IT Business Solutions And Ideas
                            </h2>
                            <p className="desc">
                                We do everything from the network security and infrastructure to managing an eCommerce marketplace. IT is more
                                than the technology and more of the business process in our eyes.  
                            </p>
                            <div className="content-b">
                                <div className="i-box">
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/network-icon-blue.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <p>Website Development</p>
                                </div>
                                <div className="i-box">
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/globe-icon-blue.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <p>Networking and Infrastructure</p>
                                </div>
                            </div>
                            <a href="/service-detail" className="btn btn-s3">Learn More</a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="about-s4__thumb">
                            <div className="p-left">
                                <img
                                    src={require(`../../assets/images/thumbs/about4-t1.png`)}
                                    alt=""
                                    className="img1"
                                />
                                <img
                                    src={require(`../../assets/images/thumbs/about4-t3.png`)}
                                    alt=""
                                    className="img2"
                                />
                            </div>
                            <div className="p-right">
                                <img src={require(`../../assets/images/thumbs/about4-t2.png`)} alt=""/>
                            </div>
                            <div className="shape">
                                <img src={require(`../../assets/images/backgrounds/about-4-shape.png`)} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;