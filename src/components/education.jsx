import React from 'react';

const Education = () => {
    return (
        <section className="colorlib-education" data-section="education">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Education</span>
                        <h2 className="colorlib-heading animate-box">Education</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor's Degree of Software Engineering</a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body">
                                            {/* <div class="row"> */}
                                            {/* <div class="col-md-6"> */}
                                            <p>Pokhara University</p>
                                            <ul>
                                                <li>2011 - 2015</li>
                                            </ul>
                                            <p><b>Courses:</b></p>
                                            <p> Object Oriented Programming, Data Structure and Algorithm, AI, Problem Solving, Real Time System, Data Mining, DBMS, C++, Java, Software Development Methodologies, Project Management, C, Enterprise Application Development etc.</p>
                                            {/* </div> */}
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Diploma in Computer Science
									            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div className="panel-body">
                                            <p>Trivuwan University</p>
                                            <ul>
                                                <li>2008 - 2011</li>
                                            </ul>
                                            <p><b>Courses:</b></p>
                                            <p> Computer fundamental, C, C#, VB, Database, Networking, Project Management, Problem Solving  etc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Education;