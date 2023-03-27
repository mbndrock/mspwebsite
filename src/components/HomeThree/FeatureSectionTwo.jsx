import React from 'react';

function FeatureSectionTwo() {
    return (
        <section className="feature-area-s1 s-padding-t">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Services We Deliver</span>
                    <h2 className="s-title">You Name It, We'll Do It</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 floating">
                        <div
                            className="feature-s2 active wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay=".5s"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/cloud-icon.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Cloud Solutions</a></h4>
                                <p>
                                    We'll handle setting up the cloud environments that you need, along with the confusing
                                    licensing that comes with it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="feature-s2 test wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay="1s"
                        >
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/cyber-security.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Cyber Security</a></h4>
                                <p>
                                    Our team consists of Cyber Security Professionals that are certified and 
                                    will ensure that your information is secure. Firewalls, IDS, EDR, SIEM's,
                                    any aspect of that you're missing we can fill in.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay="1.5s"
                        >
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/web-development.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Web Development</a></h4>
                                <p>
                                    Need a website with a little more capability than Squarespace or Wordpress? Need an eCommerce site better than Shopify? 
                                    We can help you build a web page for your business needs using modern frameworks like NodeJS and Flask, just to name a few.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="2s"
                        >
                            <div className="icon">
                                <img 
                                    src={require(`../../assets/images/feature-icons/data-recovery.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/service-detail">Disaster Recovery</a></h4>
                                <p>
                                    One of the most overlooked aspects, we'll help you own your data with modern backup solutions for  
                                    your on premise and cloud environments. Back up on-prem to cloud, cloud to on-prem, cloud to cloud, or even on-prem
                                    to your own off site location. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 d-lg-none">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="2.5s"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/pencil-icon.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/service-detail">Product & Design</a></h4>
                                <p>
                                    Need some help with eCommerce? We can help you establish a workflow to efficiently 
                                    manage invenentory, list and produce product photos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 d-lg-none">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="3s"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/analytix.png`)} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/service-detail">Monitoring</a></h4>
                                <p>
                                    Branching off of Cyberserity, if you would like to implement measures to 
                                    monitor and analyse your infrastructure we can help. We can also provide around
                                    the clock monitoring and alerting so you can focus on the important stuff.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSectionTwo;