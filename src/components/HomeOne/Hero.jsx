import React from 'react';

function Hero() {
    return (
        <section className="hero-s3">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-7 col-xl-6 col-lg-6 hero-s3__content">
                        <h2 className="content-sh">IT Solutions Partner</h2>
                        <h1 className="content-h">Your One Stop Shop For Everything IT</h1>
                        <p className="content-d">
                            We get it, every IT Solutions partner website says the same thing. Our team's experience comes from 
                            working in small to medium sized businesses so we know how to be personable. We're also not just tech geeks,
                            we have experience in business processes ranging from manufacuring to retail ecommerce.
                        </p>
                        <div className="btn-group">
                            <a href="/service-detail" className="btn btn-s3">Learn More</a>

                            <div className="video-popup" id="videoPopup1">
                                <div className="video-popup-inner">
                                    <button type="button" className="cls-btn">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                    <input type="text"/>
                                </div>
                            </div>
                            <button type="button"
                                className="play-btn-sm v-play-btn"
                                data-video-id="videoPopup1"
                            >
                                <i className="fa-solid fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6 hero-s3__thumb d-lg-none">
                        <div className="img">
                            <img src={require(`../../assets/images/hero-img/3.webp`)} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={require(`../../assets/images/backgrounds/hero-3-shape.png`).default} alt=""/>
            </div>
        </section>
    );
}

export default Hero;