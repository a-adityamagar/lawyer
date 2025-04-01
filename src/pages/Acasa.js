import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>
            Lawyer Bucharest | Law and Insolvency Office Hina Singh
          </title>

          <meta
            name="description"
            content="Our Law and Insolvency Office, led by Hina Singh, offers consultancy, assistance and representation for legal or insolvency issues and debt recovery before courts and public authorities."
          />
        </Helmet>
        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3">Hina Singh</div>
                <div className="text-2 fs-4">
                  LAW AND INSOLVENCY OFFICE
                  <span className="fw-bold">
                    <br></br> Bucharest{" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  "There is no true justice where there is no truth,
                  and justice cannot be found where there is no truth."
                  - <span>Lucius Annaeus Seneca.</span>
                </div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center  align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"
                      aria-label="Appointment"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Appointment
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Request an evaluation"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      Request an evaluation
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/informatii-utile">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Fees"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      Fees
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Appointment"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Appointment
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Request an evaluation"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Request an evaluation
                </button>
              </Link>
              <Link to="/informatii-utile">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="Fees"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  Fees
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*FACING A PROBLEM========= */}

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">INTRO</h6>
                <h5 className="lh-base text-center pb-4">
                  Are you facing a legal or insolvency problem?
                </h5>

                <p className="text-separator fw-normal">
                  Our Law and Insolvency Office, led by Alina
                  Marin, offers consultancy, assistance and representation for
                  legal or insolvency issues and debt recovery
                  before courts and public authorities.
                  <br />
                  <span className="ms-4"></span>We want to be with you and
                  find the best solutions for your problems
                  while maintaining your impeccable image in the business world.
                  <span></span>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/law-justice.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt=" a gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES========= */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section ">
                <div className="services-overlay "></div>

                <div className="services-content container mt-3">
                  <h6 className=" guide-text">SERVICES</h6>

                  <h5 className="lh-base text-center pb-3">
                    Areas of activity
                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row ">
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        Law Office
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/barou.webp"
                          className="barou img-fluid mx-auto d-block rounded-2"
                          alt="Bucharest Bar Association logo"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        Legal assistance and representation in the fields of commercial law, company formation, civil law, labor law, family law, insolvency procedure, debt recovery, administrative law, etc.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/avocatura">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Learn more"
                          >
                            Learn more...
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        Insolvency Office
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/unpir.webp"
                          className="unpir img-fluid mx-auto d-block rounded-2"
                          alt="UNPIR logo"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        Services in pre-insolvency stage, mergers and divisions
                        of commercial companies, insolvency, restructuring and
                        judicial reorganization, bankruptcy, judicial and
                        administrative liquidation, debt recovery, evaluation and
                        asset capitalization.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/insolventa">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Learn more"
                          >
                            Learn more...
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHO WE ARE */}

        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4">ABOUT US</p>
                <h5 className="lh-base text-center pb-4">Who are we?</h5>

                <p className="text-separator fw-normal">
                  We will be your partner in professionally solving all your commercial, fiscal,
                  and contractual issues.
                  <br></br>
                  <span className="ms-4"></span>We are a young team of
                  lawyers, insolvency practitioners and economists, specialists
                  in the financial-legal field, with a new vision for approaching
                  and solving problems. We are recommended by our experience of over
                  10 years, professionalism and reliability.
                  <br></br> <span className="ms-4"></span>The coordinator of the
                  Law and Insolvency Office, Marin Alina has been a lawyer for over
                  15 years in commercial, contractual fields, etc. and an insolvency practitioner
                  for 8 years, with companies saved from insolvency,
                  deregistered, and/or reorganization plans, etc.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/about-us.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="two persons at a desk"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/*WHAT RECOMMENDS US========= */}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text ">OUR EXPERTISE</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4">What recommends us?</h5>
          </div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2">
              <ul className="my-list">
                <li>Extensive experience in the field</li>
                <li>
                  High professionalism and client-oriented approach.
                </li>
                <li>Active involvement in projects and supporting them.</li>
                <li>Direct and transparent communication with clients.</li>
                <li>Commitment to client satisfaction.</li>
                <li>
                  {" "}
                  Providing complete solutions through collaboration with other
                  professionals.
                </li>
              </ul>
            </div>
            <div className=" col col-md-5 order-md-2 mt-5">
              <div className="square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-white border-4 fw-bold">
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" />
                </div>
                <div>10+</div>
                <div>years of experience</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
