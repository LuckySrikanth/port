import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';



const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ued9m4l', 'template_ft98po5', form.current, 'vBQgXXl1TYzL5uGuZ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
        <p className="get-inTouch-text">GET IN TOUCH</p>
        <h1 className="contact-form-text">Contact Me</h1>
        <div className="background-container">
        <div className="glass-blur">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className='submit-btn'/>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
