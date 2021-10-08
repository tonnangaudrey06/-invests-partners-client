import React from 'react';

import { Container } from '../../components'

import '../../styles/contact.scss'

const Contact = () => {
    return (
        <Container header footer headerActive active="contact">
            <div className="contact">
                <div className="container-md">
                    <div className="d-flex justify-content-center mb-5">
                        <h1 className="heading-section">Contact nous</h1>
                    </div>
                    <div className="row gy-4 mb-5">
                        <div className="col-md-12">
                            <div className="row mb-5">
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <i className="bi bi-map-fill"></i>
                                            {/* <span className="fa fa-map-marker"></span> */}
                                        </div>
                                        <div className="text">
                                            <p><span>Address:</span> BP: 2308 Douala, Cameroun</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            {/* <span className="fa fa-phone"></span> */}
                                            <i className="bi bi-telephone-fill"></i>
                                        </div>
                                        <div className="text">
                                            <p><span>Phone:</span> <a href="tel://1234567920">(+237) 6 55 45 90 79</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            {/* <span className="fa fa-paper-plane"></span> */}
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                        <div className="text">
                                            <p><span>Email:</span> <a href="mailto:info@invest--partners.com">info@invest--partners.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            {/* <span className="fa fa-globe"></span> */}
                                            <i className="bi bi-globe"></i>
                                        </div>
                                        <div className="text">
                                            <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row g-0 ff">
                                <div className="col-md-7 kjk">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Envoyer nous un message</h3>
                                        {/* <div id="form-message-warning" className="mb-4"></div> */}
                                        <div id="form-message-success" className="mb-4">
                                            Votre message a bien été envoyé, nous vous répondrons sous peu!
                                        </div>
                                        <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" for="name">Nom complet</label>
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Nom" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" for="email">Addresse Email</label>
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" for="subject">Objet</label>
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Objet" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" for="#">Message</label>
                                                        <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-4">
                                                    <div className="form-group">
                                                        <input type="submit" value="Envoyer" className="btn btn-primary" />
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-5 d-flex align-items-stretch rt">
                                    <div className="info-wrap w-100  img imageRight" >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;