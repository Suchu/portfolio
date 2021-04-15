import React from 'react';

const Intro = () => {
    return (
        < section id="colorlib-hero" className="js-fullheight" data-section="home" >
            <div className="flexslider js-fullheight">
                <ul className="slides">
                    <li style={{ backgroundImage: 'url(portfolio/images/img_bg_1.jpg)' }}>
                        <div className="overlay"></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" style={{ backgroundColor: '#ffffff52' }}>
                                    <div className="slider-text-inner js-fullheight">
                                        <div className="desc">
                                            <h1>Hi! <br />I'm Sulochana</h1>
                                            <h2>From United Kingdom</h2>
                                            <p><a className="btn btn-primary btn-learn" href="portfolio/cv/SoftwareDeveloper-CV-Sulo.pdf" target="_blank">Here's my CV<i className="icon-download4"></i></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style={{ backgroundImage: 'url(portfolio/images/img_bg_2.jpg)' }}>
                        <div className="overlay"></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" style={{ backgroundColor: '#ffffff52' }}>
                                    <div className="slider-text-inner">
                                        <div className="desc">
                                            <h1>I am <br />a Software Developer</h1>
                                            <h2>I love coding</h2>
                                            <p><a className="btn btn-primary btn-learn" href="https://github.com/Suchu" target="_blank" rel="noreferrer">GitHub <i className="icon-briefcase3"></i></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Intro;

