import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contacts = () => {
    return (
        <section className="colorlib-contact" data-section="contact" id="contacts">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Get in Touch</span>
                        <h2 className="colorlib-heading">Contact</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon">
                                <i className="icon-mail5"></i>
                            </div>
                            <div className="colorlib-text">
                                <p><a href="mailto:sulochanabtm@gmail.com">sulochanabtm@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon">
                                <i className="icon-map"></i>
                            </div>
                            <div className="colorlib-text">
                                <p>Aldershot, Hampshire, United Kingdom</p>
                            </div>
                        </div>
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="colorlib-text">
                                <p><a href="tel://">+44 77316127</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-push-1">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ContactForm() {
    const [state, handleSubmit] = useForm("myylyqve");
    if (state.succeeded) {
        return (
            <div className="row">
                <p>Thanks your message has been sent!!</p>
            </div>
        )
    }
    return (
        <form action="" onSubmit={handleSubmit} id="contact-me">
            <div className="form-group">
                <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" className="form-control" placeholder="Email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="form-group">
                <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
                <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Message" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary btn-send-message" disabled={state.submitting} value="Send Message" />
            </div>
        </form>
    )
}
export default Contacts;

