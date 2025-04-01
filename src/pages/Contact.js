import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>
          Contact | Lawyer Bucharest | Law and Insolvency Office Hina Singh
        </title>
       
        <meta
          name="description"
          content="Contact us for any legal issue you are facing. We offer consultation and representation in various legal fields. Location: Bucharest, Schedule: Monday - Friday: 9 - 17, E-mail: hinafirm@yahoo.com, Phone: +91 795 265 6356."
        />
      </Helmet>
      <section>
        <h6 className="guide-text ms-3 mt-4">CONTACT</h6>
        {/* contact info============ */}
        <div className="container-lg bg-light my-5 shadow">
          <div className="contact-info text-center py-5">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Location:</h5>
                  <p>Haryana</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Schedule:</h5>
                  <p>Monday – Friday: 9 – 17</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>E-mail</h5>
                  <p>hinafirm@yahoo.com</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Phone</h5>
                  <p>+91 795 265 6356</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form and text============ */}
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-sm-6 order-sm-first ">
              <div className="contact-text d-flex flex-column ">
                <h5 className="lh-base text-center pb-4">
                  Don't hesitate to contact us!
                </h5>
                <p>
                  We are here to offer our support in all legal issues you are facing.{" "}
                </p>
                <p>
                  Please contact us by filling out the form below and we will be happy to provide our assistance.
                </p>
                <p>
                  We will receive your request and get back to you shortly for more details.
                </p>
              </div>
            </div>
            <div className="col-sm-6 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
