import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";

const LawServices = () => {
  return (
    <>
      <div className="avocatura">
        <Helmet>
          <title>
            Law Services | Lawyer Bucharest | Law and Insolvency Office Hina Singh
          </title>
         
          <meta
            name="description"
            content="We offer legal consultation and specialized assistance in a range of practice areas, including civil law, criminal law, enforcement proceedings, family law, labor law, commercial and corporate law."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">LAW SERVICES</h6>
          <div className=" pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">
              Complete legal services
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              We offer legal consultation and specialized assistance in a range of practice areas
            </h6>
          </div>
          <div className="row g-5 px-5 pt-4 ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 ">
                <div class="civil card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">CIVIL LAW</h6>
                  <p className="card-text mx-1">
                    Legal consultation services, assistance and representation
                    before courts, drafting legal claims. We help you quickly resolve your legal issue.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">CRIMINAL LAW</h6>
                  <p className="card-text mx-1">
                    Legal assistance and representation before criminal investigation bodies and courts,
                    drafting requests and complaints against criminal investigation measures and acts,
                    drafting rehabilitation requests.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="executare card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">ENFORCEMENT PROCEEDINGS</h6>
                  <p className="card-text mx-1">
                    In the field of enforcement proceedings, the services offered are
                    regardless of your capacity in this procedure - debtor or creditor.
                    Passivity can have particularly serious consequences in this area,
                    both for the creditor and for the debtor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">
                    FAMILY LAW - DIVORCE AND PROPERTY DIVISION
                  </h6>
                  <p className="card-text mx-1">
                    Services of legal assistance and representation in divorce proceedings,
                    property division, exercise of parental authority,
                    alimony, minor visitation schedule.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">LABOR LAW</h6>
                  <p className="card-text mx-1">
                    We offer professional legal services, materialized through
                    drafting appeals against dismissal decisions,
                    against disciplinary sanction decisions, compelling
                    the employer to pay salary rights,
                    developing legal opinions in labor law.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">
                    COMMERCIAL AND CORPORATE LAW
                  </h6>
                  <p className="card-text mx-1">
                    Establishing commercial companies at the Trade Register,
                    changing registered office, establishing/deregistering business points,
                    drafting articles of incorporation, decisions of the general
                    assembly of associates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <p className="more-services py-4">
              Other areas of activity in which we offer consultation, assistance
              and representation before courts or other
              state institutions: DEBT RECOVERY, PENSIONS AND OTHER
              SOCIAL INSURANCE RIGHTS, HOMEOWNERS ASSOCIATIONS, COMPLAINTS
              AGAINST FINES, AUTO ACCIDENT COMPENSATION, drafting
              requests as well as any other documents specific to the activity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawServices;
