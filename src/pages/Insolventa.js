import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Insolvency = () => {
  return (
    <>
      <div className="insolventa-page">
        <Helmet>
          <title>
            Insolvency Services | Lawyer Bucharest | Law and
            Insolvency Office Hina Singh
          </title>
         
          <meta
            name="description"
            content="We offer consulting and representation services in insolvency procedures, including judicial liquidation, drafting requests to open insolvency proceedings, analysis of debtor companies, company formation, debt recovery, legal consultation and assistance in applying and executing legal regulations."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">INSOLVENCY SERVICES</h6>
          <div className="container py-5">
            <h5 className="fw-bold text-center pb-1">
              Consulting and representation services in insolvency
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-5">
              We offer specialized assistance in insolvency procedures, from
              evaluating available options to completing the process
            </h6>

            <div className="card">
              <div className="insolvency card-img-top2"></div>
              <div className="card-body">
                <div className="card-text text-white py-5">
                  <ul className="my-list pt-3">
                    <li>Judicial liquidation / bankruptcy procedure;</li>
                    <br></br>
                    <li>
                      Drafting actions regarding requests to open
                      insolvency proceedings and representing the client in
                      court, for debtors
                      communicated/approved by UAT;
                    </li>
                    <br></br>
                    <li>
                      Preparing an analysis of debtor companies
                      by checking recom and the insolvency
                      procedures bulletin (BPI subscription exists), the purpose of verification
                      being to identify companies that have entered
                      insolvency proceedings.
                    </li>
                    <br></br>
                    <li>Establishment of Companies, subsidiaries, working points.</li>
                    <br></br>
                    <li>
                      Modification of share capital, conversion of receivables into
                      shares, analysis of legal requirements regarding merger,
                      dissolution, division, liquidation of companies;
                    </li>
                    <br></br>
                    <li>
                      Commercial contracts and solving all contractual
                      issues
                    </li>
                    <br></br>
                    <li>
                      Debt recovery:
                      <br></br>Notifications, Payment notices, Small claims
                      procedure
                      <br></br>Debt declarations
                      <br></br>Representing clients both in common law
                      courts and in specialized
                      courts
                    </li>
                    <br></br>
                    <li>
                      Preparation of monthly reports regarding the activity
                      carried out
                    </li>
                    <br></br>
                    <li>
                      Analysis, preparation and approval of responses to petitioners.
                    </li>
                    <br></br>
                    <li>
                      Analysis, preparation and approval of notifications/addresses to
                      individuals/legal entities.
                    </li>
                    <br></br>
                    <li>
                      Analysis and approval of other legal acts with legal
                      connotation.
                    </li>
                    <br></br>
                    <li>
                      Drafting requests as well as any other documents
                      specific to the lawyer's activity.
                    </li>
                    <br></br>
                    <li>
                      Legal consultation and assistance regarding the method of
                      application and execution of legal regulations.
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="link">
                  <button
                    className="btn btn-outline-dark my-4"
                    type="button"
                    aria-label="Request an evaluation"
                  >
                    Request an evaluation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insolvency;
