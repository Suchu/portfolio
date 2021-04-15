import React from 'react';

const Work = () => {
    return (
        <section className="colorlib-work" data-section="work" id="previous-work">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">My Work</span>
                        <h2 className="colorlib-heading animate-box">Previous Work</h2>
                    </div>
                </div>
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <p className="work-menu"><span><a href="#website" className="active">Website</a></span> <span><a href="#website">Web Design</a></span> <span><a href="#software">Software</a></span> <span><a href="#apps">Apps</a></span></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" id="website">
                        <div className="project" style={{ backgroundImage: 'url(portfolio/images/img-1.jpg)' }}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="https://www.bupa.co.uk/" target="_blank" without rel="noreferrer">Bupa Health</a></h3>
                                    <span>Website</span>
                                    <p className="icon">
                                        <span><i className="icon-share3"></i></span>
                                        <span><i className="icon-eye"></i> 0</span>
                                        <span><i className="icon-heart"></i> 0</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight" id="software">
                        <div className="project" style={{ backgroundImage: 'url(portfolio/images/img-2.jpg)' }}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="https://www.bpp.com/" target="_blank" without rel="noreferrer">BPP University</a></h3>
                                    <span>Software</span>
                                    <p className="icon">
                                        <span><i className="icon-share3"></i></span>
                                        <span><i className="icon-eye"></i> 0</span>
                                        <span><i className="icon-heart"></i> 0</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                        <div className="project" style={{ backgroundImage: 'url(portfolio/images/img-3.jpg)' }}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="https://www.genesesolution.com/" target="_blank" without rel="noreferrer">Genese</a></h3>
                                    <span>Website</span>
                                    <p className="icon">
                                        <span><i className="icon-share3"></i></span>
                                        <span><i className="icon-eye"></i> 0</span>
                                        <span><i className="icon-heart"></i> 0</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom" id="apps">
                        <div className="project" style={{ backgroundImage: 'url(portfolio/images/img-4.jpg)' }}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="#apps">Limeworx</a></h3>
                                    <span>Apps</span>
                                    <p className="icon">
                                        <span><i className="icon-share3"></i></span>
                                        <span><i className="icon-eye"></i> 0</span>
                                        <span><i className="icon-heart"></i> 0</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="project" style={{ backgroundImage: 'url(portfolio/images/img-5.jpg)' }}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="#website">Lawray Architects</a></h3>
                                    <span>Website</span>
                                    <p className="icon">
                                        <span><i className="icon-share3"></i></span>
                                        <span><i className="icon-eye"></i> 0</span>
                                        <span><i className="icon-heart"></i> 0</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="project" style={{ backgroundImage: 'url(portfolio/images/img-6.jpg)' }}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="work.html">Khabar Manch</a></h3>
                                    <span>Website</span>
                                    <p className="icon">
                                        <span><i className="icon-share3"></i></span>
                                        <span><i className="icon-eye"></i> 0</span>
                                        <span><i className="icon-heart"></i> 0</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box">
                        <p><a href="#previous-work" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload"></i></a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Work;