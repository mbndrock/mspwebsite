import React from 'react';

function FeatureSection() {
    return (
        <section className="features-slider s-padding">
            <div className="container">
                <div className="row">
                    <div className="s-title-wrap">
                        <h2 className="s-title">Why Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-s1 bx-1">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/rocket-icon.png`)} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Flexibility</a></h4>
                                <p>
                                    We're a small team which means we're flexible. We can quickly
                                    adapt to your environment and needs.
                                </p>
                                <a href="/pricing" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-s1 bx-2">
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/time-saving-icon.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Save Your Time</a></h4>
                                <p>
                                    Focus on the work that is important to you. We'll handle everything else
                                    you throw at us.
                                </p>
                                <a href="/pricing" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-s1 bx-3">
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/management-icon.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Management</a></h4>
                                <p>
                                    Any technology that you can think of, we can manage, On-Prem or Cloud 
                                    we have the expertise to back you up.
                                </p>
                                <a href="/pricing" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-s1 bx-4">
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/collaborative-icon.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Collaborative</a></h4>
                                <p>
                                    We want to be easy to reach. Call us, text us, chat us. 
                                </p>
                                <a href="/pricing" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;