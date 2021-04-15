import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div>
                {/* <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav> */}
                <a href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                <aside id="colorlib-aside" className="border js-fullheight">{/* removed , aside by default have a complementary role*/}
                    <div className="text-center">
                        <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }}></div>
                        <h1 id="colorlib-logo" style={{ textAlign: 'center' }}>Sulochana Bhujel</h1>
                        <span className="position" style={{ color: '#2c98f0' }}>Software Developer</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                {/* <li className="active"><a href="/" data-nav-section="home">Intro</a></li> */}
                                <li><a href="/about" data-nav-section="about">About</a></li>
                                <li><a href="/skills" data-nav-section="skills">Skills</a></li>
                                <li><a href="/education" data-nav-section="education">Education</a></li>
                                <li><a href="/experience" data-nav-section="experience">Experience</a></li>
                                <li><a href="/previous-work" data-nav-section="work">Work</a></li>
                                <li><a href="/thoughts" data-nav-section="thoughts">Thougths</a></li>
                                <li><a href="/contacts" data-nav-section="contact">Contact</a></li>

                            </ul>
                        </div>
                    </nav>
                    <div className="colorlib-footer">
                        <p><a href="https://uk.linkedin.com/in/sulochanabtm" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>&nbsp;&nbsp;
                            <a href="https://github.com/Suchu" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                        </p>
                        <p><small> &copy; Copyright <script>document.write(new Date().getFullYear());</script>All rights reserved.<br />
                            Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">colorlib.</a></small>
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    )
}
export default Sidebar;