import React from 'react';

const Skills = () => {
    return (
        <div>
            <div id="colorlib-counter" className="colorlib-counters" style={{ backgroundImage: 'url(portfolio/images/cover_bg_1.jpg)' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="colorlib-narrow-content">
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center animate-box">
                            <span className="colorlib-counter js-counter" data-from="0" data-to="200" data-speed="5000" data-refresh-interval="50"></span>
                            <span className="colorlib-counter-label">Cups of coffee</span>
                        </div>
                        <div className="col-md-3 text-center animate-box">
                            <span className="colorlib-counter js-counter" data-from="0" data-to="120" data-speed="5000" data-refresh-interval="50"></span>
                            <span className="colorlib-counter-label">Projects</span>
                        </div>
                        <div className="col-md-3 text-center animate-box">
                            <span className="colorlib-counter js-counter" data-from="0" data-to="20" data-speed="5000" data-refresh-interval="50"></span>
                            <span className="colorlib-counter-label">Clients</span>
                        </div>
                        <div className="col-md-3 text-center animate-box">
                            <span className="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50"></span>
                            <span className="colorlib-counter-label">Partners</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading animate-box">My Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <div className="row">
                                <div className="col-md-4">
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>PHP</li>
                                        <li>C# </li>
                                        <li>Yii2</li>
                                        <li>MySql</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul>
                                        <li> HTML</li>
                                        <li>CSS</li>
                                        <li>Angular</li>
                                        <li>React</li>
                                        <li>WordPress</li>
                                        <li>Craft CMS</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul>
                                        <li> Photoshop</li>
                                        <li>AbobeXD</li>
                                        <li>Visio</li>
                                        <li>GIT</li>
                                        <li>JIRA</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                                <p><b>Industry Knowledge</b><br />
                                    TDD, Agile Methodology, Requirement Analysis, Software Development, OOP, Database Design, Project Management
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>JavaScript</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>PHP</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>HTML5</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>CSS3</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="85"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>WordPress</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>SEO</h3>
                                <div className="progress">
                                    <div className="progress-bar color-6" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Skills;
