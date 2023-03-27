import React from 'react';

function History() {
    return (
        <section className="about-s7 s-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-s7__content">
                            <span className="s-sub-title">Our History</span>
                            <h2 className="s-title">Where We Came From</h2>
                            <div className="info-list-s2">
                                <div className="s-info">
                                    <p className="title">Internal Business IT Careers</p>
                                    <p>
                                        We come from working as internal IT professionals in all levels.  
                                    </p>
                                </div>
                                <div className="s-info">
                                    <p className="title">Small Gig Work</p>
                                    <p>
                                        Our team members have various personal experience with small gig type
                                        work for businesses. From Web Development to general IT support.
                                    </p>
                                </div>
                                <div className="s-info">
                                    <p className="title">Joint Collaboration</p>
                                    <p>
                                        Eventually we decided its time to combine our experience to create Lighthouse MSP.
                                        With the combined experience we're suited to better support customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-s7__thumb">
                            <div className="p-left">
                                <img src={require(`../../assets/images/thumbs/about7-1.jpg`)} alt=""/>
                                <img src={require(`../../assets/images/thumbs/about7-2.jpg`)} alt=""/>
                            </div>
                            <div className="p-right">
                                <img src={require(`../../assets/images/thumbs/about7-3.png`)} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default History;