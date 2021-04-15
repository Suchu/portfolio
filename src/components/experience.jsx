import React from 'react';

const Experience = () => {
    return (
        <section className="colorlib-experience" data-section="experience">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Experience</span>
                        <h2 className="colorlib-heading animate-box">Work Experience</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                <div className="timeline-entry-inner">

                                    <div className="timeline-icon color-1">
                                        <i className="icon-pen2"></i>
                                    </div>

                                    <div className="timeline-label">
                                        <h2>Web Developer <span>2018-2019</span></h2>
                                        <p>Carried out software maintenance work for UK’s large healthcare service providers.
                                        Developed fixes and introduced new functionalities. Developed optimized, responsive
                                        and interactive websites that ensured secure, high traffic, page views and user experience.
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-2">
                                        <i className="icon-pen2"></i>
                                    </div>
                                    <div className="timeline-label">
                                        <h2>Full Stack Developer <span>2017-2018</span></h2>
                                        <p>Developed responsive web applications, themes and plugins. Identified and solved design and functionality
                                        issues of websites. Developed secured e-commerce websites.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-3">
                                        <i className="icon-pen2"></i>
                                    </div>
                                    <div className="timeline-label">
                                        <h2>Software Developer <span>2014-2017</span></h2>
                                        <p>Performed software development and design for clients in diverse fields responsive to different types of devices.
                                        Excelled at rapid application development and management of technological issues for assigned projects, earning highest
                                            customer satisfaction rating for all software solutions delivered.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;
