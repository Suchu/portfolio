import React from 'react'

const About = () => {
	return (
		<section className="colorlib-about" data-section="about" id="about">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-12">
						<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
							<div className="col-md-12">
								<div className="about-desc">
									<span className="heading-meta">About</span>
									<h2 className="colorlib-heading">Who Am I?</h2>
									<p><strong>Experienced Software Developer </strong> with extensive full-lifecycle experience of software development and design. Excellent understanding of database, quality assurance and object-oriented programming.</p>
									<p>Has excellent technical, analytical and problem solving skills. Quick learner with ability to work in a team as well as individually and strongly believe in hardwork. </p>
								</div>
							</div>
						</div>
						<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
							<div className="col-md-12">
								<div className="about-desc">
									<span className="heading-meta">What I Do?</span>
									<h2 className="colorlib-heading">Area Of Expertise</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
								<div className="services color-1">
									<span className="icon2"><i className="icon-monitor"></i></span>
									<h3>Web Development</h3>
								</div>
							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
								<div className="services color-2">
									<span className="icon2"><i className="icon-globe-outline"></i></span>
									<h3>Web Design</h3>
								</div>
							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
								<div className="services color-3">
									<span className="icon2"><i className="icon-data"></i></span>
									<h3>Software</h3>
								</div>
							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
								<div className="services color-4">
									<span className="icon2"><i className="icon-phone3"></i></span>
									<h3>Application</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
								<div className="hire">
									<h2>I am happy to know you <br />that 100+ projects done sucessfully!</h2>
									<a href="#contact-me" className="btn-hire">Hire me</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;

