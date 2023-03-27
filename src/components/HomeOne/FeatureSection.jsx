import React from 'react';

function FeatureSection() {
    return (
        <section className="feature-area-s2 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">How We Work</span>
                    <h2 className="s-title">How To Get Started</h2>
                </div>
                <div className="row feature-area-inner">
                    <div className="feature-s4">
                        <div className="badge">01</div>
                        <div className="content">
                            <h3>Get to Know Each Other</h3>
                            <p>
                                Lets get to know each other so we can manage expectations
                            </p>
                        </div>
                    </div>
                    <div className="feature-s4">
                        <div className="badge">02</div>
                        <div className="content">
                            <h3>Understanding Your Use Cases</h3>
                            <p>
                                Most projects fail when use cases aren't understood
                            </p>
                        </div>
                    </div>
                    <div className="feature-s4 third">
                        <div className="badge">03</div>
                        <div className="content">
                            <h3>Build Solution</h3>
                            <p>
                                After understanding both expectations and use cases, we'll build out your solution
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;