import React from "react";
import { Helmet } from "react-helmet";

const UsefulInfo = () => {
  return (
    <div className="info">
      <Helmet>
        <title>Useful Information | Lawyer Bucharest | Law and Insolvency Office Hina Singh</title>
       
        <meta
          name="description"
          content="Useful information about the Hina Singh law and insolvency office."
        />
      </Helmet>
      <div>
        <h6 className="guide-text ms-3 mt-4">USEFUL INFORMATION</h6>
        <div className="container py-5">
          <div id="accordion" className="accordion">
            {/* fees========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  FEES
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <h5>General Principles:</h5>
                  <p>
                    {" "}
                    The lawyer's fee is established taking into account the
                    provisions of the Statute of the legal profession. Texts extracted
                    from: Statute 2004 - Statute of the legal profession, 25/09/2004
                    Published in the Official Monitor, Part I no. 45 from
                    13/01/2005 entered into force on January 13, 2005;
                    Chapter III Professional activity of the lawyer;
                    Section 2 Relations between lawyer and client;
                  </p>
                  <h5>Fees for legal entities:</h5>
                  <p>
                    In establishing fees for legal entities, we take into
                    consideration, in addition to the principles presented below,
                    the possibility of developing payment methods for fees
                    under different aspects such as:
                  </p>
                  <ul>
                    <li>fixed fee</li>
                    <li>hourly fee</li>
                    <li>fixed result fee</li>
                    <li>percentage result fee</li>
                    <li>monthly subscription</li>
                  </ul>
                  <h5>Fees for individuals:</h5>
                  <p>
                    In establishing fees for individuals, the law office
                    promotes, for the purpose of establishing the fee,
                    the principle of direct negotiation, a principle based on
                    the following criteria:
                  </p>
                  <ul>
                    <li>
                      the complexity of the case and the level of professional training
                      of the lawyer who performs the activity;
                    </li>
                    <li>the urgency of the activity;</li>
                    <li>the cause and possibilities of the clients;</li>
                    <li>the history of collaboration with the client.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 2.insolvency========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Insolvency
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Insolvency is the situation in which a company is unable
                    to pay its debts to various creditors - suppliers, tax authorities or banks.
                  </p>
                  <p>
                    Law 85/2014 describes it as "a state of the debtor's assets
                    characterized by the insufficiency of available funds for the payment of certain,
                    liquid and due debts".{" "}
                  </p>
                  <p>
                    {" "}
                    Insolvency does not automatically mean bankruptcy; it can be
                    opened for the purpose of reorganizing the company based on a
                    plan that can lead to business recovery and exit from
                    insolvency. Only when reorganization fails,
                    bankruptcy can be triggered.
                  </p>
                </div>
              </div>
            </div>
            {/* 3.reorganization========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Reorganization
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Company reorganization means its recovery under
                    the umbrella of the Insolvency Law.
                  </p>

                  <p>
                    The purpose of insolvency is not to reach bankruptcy and
                    close the company, but to help it recover according to a
                    set plan. Practically, a general insolvency procedure will be opened
                    with the intention of reorganizing the company
                    according to a reorganization plan. According to the provisions of art. 5
                    pt. 54. of Law no. 85/2014, reorganization is
                    "the procedure that applies to the insolvent debtor, legal entity,
                    in order to pay its debts, according to the
                    claims payment program.
                  </p>

                  <p>
                    The reorganization plan involves the preparation, approval,
                    confirmation, implementation and compliance with a plan, which
                    may provide:
                  </p>
                  <ul>
                    <li>
                      operational and/or financial restructuring of
                      the debtor;
                    </li>
                    <li>
                      corporate restructuring by changing the structure of
                      share capital;
                    </li>
                    <li>
                      restriction of activity through partial or
                      total liquidation of the debtor's assets;
                    </li>
                  </ul>
                  <p>
                    For this procedure, of particular importance is,
                    for participants, the claims payment program.
                  </p>
                  <p>
                    Creditors need to know what amounts they will receive from
                    the claims they hold against the debtor's assets and
                    when they will be paid to make their own economic
                    analysis.
                  </p>
                  <p>
                    Point 53. of art. 5 defines the claims payment program
                    as "the schedule for their settlement
                    mentioned in the reorganization plan. Only if
                    this plan for reorganization and saving the company fails,
                    the bankruptcy procedure will be initiated.
                  </p>
                </div>
              </div>
            </div>
            {/* 4.bankruptcy========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Bankruptcy
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Bankruptcy intervenes as a last resort when
                    recovery and the reorganization plan are no longer possible.
                  </p>
                  <p>
                    Bankruptcy is the second stage of the insolvency procedure
                    that applies to the debtor for the liquidation of its assets
                    to cover the liabilities, followed by the deregistration of the debtor
                    from the register in which it is registered.
                  </p>
                  <p>
                    If it is found that there are no assets in the debtor's patrimony
                    or that they are insufficient to
                    cover administrative expenses, a decision
                    can be made to deregister the company.
                  </p>
                  <p>
                    Through the decision that decides the entry into bankruptcy,
                    the syndic judge will pronounce the dissolution of the debtor
                    legal entity and will order:
                  </p>
                  <ul>
                    <li>Removal of the debtor's right of administration;</li>
                    <li>
                      Appointment of a legal liquidator in the case of the general
                      procedure;
                    </li>
                    <li>Liquidation of assets from the company's property;</li>
                    <li>Deregistration of the company.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 5.dissolution========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Dissolution
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    It means the cessation of the commercial company's activity,
                    meaning the company can no longer issue invoices for activities
                    provided in its object of activity, but is only preparing for the liquidation
                    of its patrimony
                  </p>
                </div>
              </div>
            </div>
            {/* 6.liquidation========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Liquidation
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    The liquidation of a company represents all operations
                    that aim to finalize the commercial operations in progress
                    at the date of the company's dissolution, the transformation
                    of the company's assets into liquidity, the payment of its debts,
                    as well as the distribution of the net assets between associates.
                    After the final court decision of
                    dissolution, the National Trade Register Office, at
                    the company's request, appoints a judicial liquidator registered
                    in the Table of insolvency practitioners.
                  </p>
                </div>
              </div>
            </div>
            {/* 7.deregistration========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Deregistration
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Deregistration involves the complete cessation of the
                    commercial company's legal capacity. An aspect to note,
                    in the case of deregistration, is that it does not involve the elimination
                    of the previous registration, but only the recording of the cessation
                    of its activity.
                  </p>
                </div>
              </div>
            </div>
            {/* 8.merger========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Merger
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Merger is the operation by which one or more companies
                    are dissolved without going into liquidation and transfer
                    all of their assets to another company in
                    exchange for the distribution to the shareholders of the company.
                  </p>
                </div>
              </div>
            </div>
            {/* 9.division========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  Division
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Division is the operation by which a company, after being
                    dissolved without going into liquidation, transfers to several
                    companies all of its assets, in exchange for
                    the distribution to the shareholders of the divided company of shares
                    in the beneficiary companies.
                  </p>
                  <h5>Stages of the Merger or Division process:</h5>
                  <h6>Stage 1</h6>
                  <ul>
                    <li>
                      Submission of the merger project and the decision of the general meeting
                      of the company participating in the merger (by which
                      the examination of the project is waived){" "}
                    </li>
                  </ul>
                  <h6>Stage 2</h6>
                  <ul>
                    <li>
                      Decisions of the general meetings of the associates of each
                      of the participating companies regarding the approval of the merger
                    </li>
                    <li>
                      The updated articles of incorporation of the absorbing company
                      according to the changes that occurred
                    </li>
                    <li>
                      Proof of publication in the Official Monitor of the Merger
                      Project.
                    </li>
                    <li>Merger financial statement</li>
                    <li>Information from the fiscal record</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulInfo;
