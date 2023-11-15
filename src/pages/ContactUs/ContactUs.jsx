import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

const ContactUs = () => {
    return (
        <>
        <NavBar/>
            <section className="mb-4" style={{backgroundColor:"RGBA(14,248,46,0.45)", height:"100vh", display:"block", flexDirection:'column', alignItems:'center'}}>
                <h2 className="h1-responsive font-weight-bold text-center my-4">Зв'яжіться з нами</h2>

                <div className="row" style={{marginLeft:"10px", marginRight:'-480px'}}>

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control"/>
                                            <label for="name" className="">Your name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control"/>
                                            <label for="email" className="">Your email</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control"/>
                                            <label for="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea style={{height:'200px'}} type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ContactUs;