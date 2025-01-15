import React, { useState } from 'react';
import { IoAtOutline } from 'react-icons/io5';
import InstaIcon from '../assets/InstaIcon.png';
import logoWhite from '../assets/px-logo-web.png';
import XIcon from '../assets/XIcon.png';
import FacebookIcon from '../assets/FacebookIcon.png';
import emailjs from 'emailjs-com';
// import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          fullName: formData.fullName,
          mobile: formData.mobile,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubmissionStatus('success');
          setFormData({ fullName: '', mobile: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setSubmissionStatus('error');
        }
      );
  };

  return (
    <div className="footer" >
      <div className="row">
        <div className="col-md-5 col-lg-8">
          <h2 className="footer-title">Let’s Talk</h2>
        </div>

        <div className="col-md-7 col-lg-4">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 mb-2">
                <div className="d-md-flex align-items-center row">
                  <div className="col-md-8">
                    <div className="footer-cover">
                      {/* <IoAtOutline size={24} /> */}
                      sales@pixelworld.ae
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex gap-3 my-3 flex-wrap">
                      <a href='https://www.instagram.com/pixelworldfzc?igsh=OHMwc3Zpazg3Y25y' target='_blank' ><img src={InstaIcon} alt="insta" height={24} width={24} /></a>
                      {/* <img src={XIcon} alt="x" height={24} width={24} /> */}
                      <a href='https://www.facebook.com/share/1FUH2at763/?mibextid=wwXIfr' target='_blank' >
                      <img
                        src={FacebookIcon}
                        alt="facebook"
                        height={24}
                        width={24}
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="footer-input"
                  required
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  className="footer-input"
                  required
                />
              </div>

              <div className="col-md-12 mb-2">
                <div className="footer-cover">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="footer-input-two"
                    placeholder="Let us know about your magic"
                    required
                  ></textarea>
                  <button type="submit" className="footer-btn">
                    Reach Out
                  </button>
                </div>
              </div>
            </div>
          </form>

          {submissionStatus === 'success' && (
            <div className="text-success mt-2 bg-light rounded p-1">
              Form submitted successfully!
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="text-danger mt-2 bg-light rounded p-1">
              Failed to submit the form. Please try again later.
            </div>
          )}
        </div>
      </div>

      <div className="footer-description">
        Let’s craft a unique experience together. Get in touch today to start
        your journey with Us
      </div>

      <div className="footer-map mb-4">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.7961265096114!2d55.451173375384435!3d25.277442777659356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzM4LjgiTiA1NcKwMjcnMTMuNSJF!5e0!3m2!1sen!2sin!4v1734017661072!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="d-sm-flex justify-content-between align-items-center">
        <div className="footer-logo">
          <img src={logoWhite} alt="logoWhite" width={200} height={60} />
          {/* <span>Pixel World</span> */}
        </div>
        <div >
          <a  href='https://www.pixelpanda.ae/' target='_blank' className="footer-text"   >
        This website is Designed and Developed by The Pixel Panda Technology
        </a>
                 </div>
      </div>
    </div>
  );
};

export default Footer;
