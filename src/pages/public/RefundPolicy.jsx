import SEO from "../../components/common/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
  return (
    <>
      <SEO
        title="Return & Refund Policy | Errorfix Solution"
        description="Read the Return and Refund Policy for Errorfix Solution OPC Private Limited covering website development, mobile app development, software, AI, design, digital marketing and other digital services."
        keywords="Errorfix Solution refund policy, return refund policy, software development refund policy, website development refund, mobile app development refund"
        canonical="https://errorfixsolutions.online/refund-policy"
      />

      <main className="min-h-screen bg-white text-gray-950">
        {/* Header */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-950"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="mt-12 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Legal
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Return & Refund Policy
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Information about cancellations, refunds and payments for our
                digital services.
              </p>

              <p className="mt-5 text-sm font-medium text-gray-500">
                Last Updated: September 17, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* 1 */}
              <PolicySection title="1. Nature of Our Services">
                <p>
                  Errorfix Solution OPC Private Limited ("Errorfix Solution",
                  "we", "us", or "our") provides customized digital and
                  technology services.
                </p>

                <p>
                  Our services may include website design and development,
                  mobile application development, desktop software development,
                  software and SaaS development, AI solutions, UI/UX design,
                  logo and graphic design, digital marketing, API integrations,
                  maintenance, technical support and other customized digital
                  services.
                </p>

                <p>
                  Because our services involve customized work, development
                  time, resources and intellectual property, refunds are handled
                  according to the nature and stage of the project.
                </p>
              </PolicySection>

              {/* 2 */}
              <PolicySection title="2. Project Payments">
                <p>
                  Before development begins, we may require an advance payment,
                  deposit, milestone payment or other agreed payment.
                </p>

                <p>
                  Payment terms depend on the project scope and will be
                  communicated to the client before or during the engagement.
                </p>

                <p>
                  Where applicable, a project may be divided into milestones.
                  Each milestone may involve separate deliverables, approvals
                  and payments.
                </p>
              </PolicySection>

              {/* 3 */}
              <PolicySection title="3. Refund Eligibility">
                <p>A refund may be considered in circumstances including:</p>

                <ul>
                  <li>
                    We are unable to begin or continue the agreed project due to
                    reasons attributable to us.
                  </li>
                  <li>A payment was made in error or was duplicated.</li>
                  <li>
                    We mutually agree in writing to cancel the project and
                    determine that a refund is appropriate.
                  </li>
                  <li>
                    A specific refund arrangement was included in the applicable
                    project agreement, proposal, quotation or invoice.
                  </li>
                </ul>

                <p>
                  Any approved refund may be calculated based on the amount of
                  work completed, costs already incurred, third-party expenses
                  and the applicable project agreement.
                </p>
              </PolicySection>

              {/* 4 */}
              <PolicySection title="4. Non-Refundable Payments">
                <p>Payments may be non-refundable when:</p>

                <ul>
                  <li>Development or design work has already started.</li>
                  <li>Resources have already been allocated to the project.</li>
                  <li>Work has been completed or delivered.</li>
                  <li>The client has approved a milestone or deliverable.</li>
                  <li>
                    Third-party services, licenses, APIs, hosting, domains,
                    software, advertising or other external costs have already
                    been purchased or incurred.
                  </li>
                  <li>
                    The client changes requirements after work has started.
                  </li>
                  <li>
                    The client delays the project or fails to provide required
                    information, content, credentials, approvals or feedback.
                  </li>
                  <li>
                    The client decides to discontinue the project after work has
                    commenced.
                  </li>
                  <li>
                    The payment relates to consultation, design, development,
                    marketing, maintenance or other services already provided.
                  </li>
                </ul>
              </PolicySection>

              {/* 5 */}
              <PolicySection title="5. Cancellation by the Client">
                <p>
                  A client may request cancellation of a project by contacting
                  us in writing.
                </p>

                <p>
                  If cancellation occurs before work begins, we may consider a
                  refund depending on whether resources, third-party services,
                  planning, research or other project-related costs have already
                  been incurred.
                </p>

                <p>
                  If cancellation occurs after work has started, the refundable
                  amount, if any, will be determined based on the work completed
                  and expenses incurred up to the cancellation date.
                </p>

                <p>
                  Any outstanding amount for work already completed may remain
                  payable.
                </p>
              </PolicySection>

              {/* 6 */}
              <PolicySection title="6. Cancellation by Errorfix Solution">
                <p>
                  We reserve the right to suspend or terminate a project when:
                </p>

                <ul>
                  <li>The client fails to make required payments.</li>
                  <li>
                    The client repeatedly fails to provide necessary project
                    information or approvals.
                  </li>
                  <li>
                    Project requirements materially change beyond the agreed
                    scope.
                  </li>
                  <li>The client requests unlawful or prohibited services.</li>
                  <li>
                    The client engages in abusive, fraudulent, threatening or
                    inappropriate conduct.
                  </li>
                  <li>
                    Continuing the project would create significant technical,
                    legal, security or operational concerns.
                  </li>
                </ul>

                <p>
                  Where appropriate, we will communicate with the client before
                  termination.
                </p>

                <p>
                  If we terminate a project for reasons attributable to us and
                  there is an unused portion of an eligible payment, we may
                  issue a refund for that unused portion after accounting for
                  completed work and applicable expenses.
                </p>
              </PolicySection>

              {/* 7 */}
              <PolicySection title="7. Change of Requirements">
                <p>
                  Custom software projects can evolve during development.
                  Requests outside the originally agreed scope may result in:
                </p>

                <ul>
                  <li>Additional development charges.</li>
                  <li>Revised delivery timelines.</li>
                  <li>Additional milestones.</li>
                  <li>A revised quotation or proposal.</li>
                </ul>

                <p>
                  A change in requirements does not automatically create a right
                  to a refund.
                </p>
              </PolicySection>

              {/* 8 */}
              <PolicySection title="8. Design and Development Approvals">
                <p>
                  Clients may be asked to review and approve designs, features,
                  milestones or other deliverables.
                </p>

                <p>
                  Once a deliverable or milestone has been approved, payments
                  associated with that completed work may become non-refundable.
                </p>

                <p>
                  Clients are responsible for reviewing deliverables and
                  communicating requested changes within the agreed review
                  period.
                </p>
              </PolicySection>

              {/* 9 */}
              <PolicySection title="9. Third-Party Services">
                <p>
                  Some projects may use third-party products or services such
                  as:
                </p>

                <ul>
                  <li>Hosting providers.</li>
                  <li>Domain registrars.</li>
                  <li>Payment gateways.</li>
                  <li>Cloud platforms.</li>
                  <li>AI APIs.</li>
                  <li>Software licenses.</li>
                  <li>Advertising platforms.</li>
                  <li>App stores.</li>
                  <li>Email services.</li>
                  <li>Analytics services.</li>
                  <li>Other external platforms.</li>
                </ul>

                <p>
                  Fees paid to third parties are subject to the third party's
                  own terms and refund policies.
                </p>

                <p>
                  Errorfix Solution cannot guarantee refunds for third-party
                  fees that have already been paid or incurred on behalf of a
                  project.
                </p>
              </PolicySection>

              {/* 10 */}
              <PolicySection title="10. Digital Products and Delivered Files">
                <p>
                  Where digital files, source code, designs, applications,
                  websites, documentation or other deliverables have been
                  provided to the client, the applicable portion of the project
                  may be considered delivered.
                </p>

                <p>
                  Refund eligibility for delivered work will depend on the
                  project agreement, payment terms and circumstances of the
                  cancellation or refund request.
                </p>
              </PolicySection>

              {/* 11 */}
              <PolicySection title="11. Bugs and Technical Issues">
                <p>
                  A technical bug or issue in a delivered product does not
                  automatically qualify for a refund.
                </p>

                <p>
                  Where an issue is caused by an error in our agreed
                  implementation, we may attempt to correct the issue in
                  accordance with the project's applicable support or warranty
                  terms.
                </p>

                <p>
                  Issues caused by third-party services, changes made by the
                  client or another developer, unsupported environments, hosting
                  problems or changes to external APIs may fall outside the
                  original project scope.
                </p>
              </PolicySection>

              {/* 12 */}
              <PolicySection title="12. Refund Request Process">
                <p>
                  To request a refund, contact us with the following
                  information:
                </p>

                <ul>
                  <li>Your name or company name.</li>
                  <li>Invoice or project reference, if available.</li>
                  <li>Payment date.</li>
                  <li>Amount paid.</li>
                  <li>Reason for the refund request.</li>
                  <li>Relevant project or payment information.</li>
                </ul>

                <p>Refund requests should be sent to:</p>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <p className="font-semibold text-gray-950">
                    Errorfix Solution OPC Private Limited
                  </p>

                  <p className="mt-2 text-gray-600">
                    Email:{" "}
                    <a
                      href="mailto:support@errorfixsolutions.online"
                      className="font-medium text-gray-950 underline underline-offset-4"
                    >
                      support@errorfixsolutions.online
                    </a>
                  </p>
                </div>

                <p>
                  We may review the project history, payment records, completed
                  work, agreements, communications and applicable expenses
                  before making a refund determination.
                </p>
              </PolicySection>

              {/* 13 */}
              <PolicySection title="13. Refund Processing">
                <p>
                  If a refund is approved, we will generally process it using
                  the original payment method where reasonably possible.
                </p>

                <p>
                  The time required for the refunded amount to appear in your
                  account may depend on the payment provider, bank, card issuer
                  or other financial institution.
                </p>

                <p>
                  Third-party processing fees, transaction charges, currency
                  conversion charges or other non-recoverable costs may be
                  deducted where applicable and permitted by the applicable
                  agreement or law.
                </p>
              </PolicySection>

              {/* 14 */}
              <PolicySection title="14. International Payments">
                <p>For international clients, refunds may be affected by:</p>

                <ul>
                  <li>Currency exchange rates.</li>
                  <li>Bank charges.</li>
                  <li>Payment processor fees.</li>
                  <li>International transaction fees.</li>
                  <li>Correspondent bank charges.</li>
                  <li>Other financial institution fees.</li>
                </ul>

                <p>
                  The amount received after a refund may therefore differ from
                  the original amount paid because of external financial
                  processing or currency conversion.
                </p>
              </PolicySection>

              {/* 15 */}
              <PolicySection title="15. Disputes and Chargebacks">
                <p>
                  Before initiating a payment dispute or chargeback, we request
                  that clients contact us so we can attempt to resolve the issue
                  directly.
                </p>

                <p>
                  Unauthorized or fraudulent chargebacks may be investigated and
                  disputed where appropriate.
                </p>

                <p>
                  This section does not limit any rights that cannot legally be
                  waived under applicable law.
                </p>
              </PolicySection>

              {/* 16 */}
              <PolicySection title="16. No Guarantee of Business Results">
                <p>
                  Our services may include website development, software
                  development, AI solutions, SEO, digital marketing or other
                  services intended to support a client's business.
                </p>

                <p>
                  Unless expressly stated in a written agreement, we do not
                  guarantee specific business results, revenue, search-engine
                  rankings, advertising performance, customer numbers,
                  downloads, sales or other commercial outcomes.
                </p>

                <p>
                  Failure to achieve a particular business result does not
                  automatically qualify for a refund.
                </p>
              </PolicySection>

              {/* 17 */}
              <PolicySection title="17. Exceptions">
                <p>
                  Any exception to this Return and Refund Policy must be agreed
                  upon in writing by an authorized representative of Errorfix
                  Solution.
                </p>

                <p>
                  A project proposal, quotation, invoice, service agreement or
                  other written agreement may contain additional refund terms
                  that apply specifically to that project.
                </p>

                <p>
                  Where a specific written agreement conflicts with this general
                  policy, the terms of the specific agreement may apply to the
                  relevant project.
                </p>
              </PolicySection>

              {/* 18 */}
              <PolicySection title="18. Changes to This Policy">
                <p>
                  We may update this Return and Refund Policy from time to time.
                </p>

                <p>
                  When changes are made, the updated version will be published
                  on this page with a revised "Last Updated" date.
                </p>

                <p>We encourage clients to review this policy periodically.</p>
              </PolicySection>

              {/* 19 */}
              <PolicySection title="19. Contact Us">
                <p>
                  If you have questions about this Return and Refund Policy or
                  want to request a refund, please contact us.
                </p>

                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                  <h3 className="text-xl font-bold text-gray-950">
                    Errorfix Solution OPC Private Limited
                  </h3>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-gray-600">
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:support@errorfixsolutions.online"
                        className="font-medium text-gray-950 underline underline-offset-4"
                      >
                        support@errorfixsolutions.online
                      </a>
                    </p>

                    <p>
                      Website:{" "}
                      <a
                        href="https://errorfixsolutions.online"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-950 underline underline-offset-4"
                      >
                        errorfixsolutions.online
                      </a>
                    </p>
                  </div>
                </div>
              </PolicySection>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-gray-200 bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Have a question about a payment?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Contact our team if you need clarification about project payments,
              cancellations or refunds.
            </p>

            <a
              href="mailto:support@errorfixsolutions.online"
              className="mt-8 inline-flex rounded-full bg-gray-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

function PolicySection({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 space-y-5 text-base leading-8 text-gray-600">
        {children}
      </div>

      <style>{`
        section ul {
          list-style: disc;
          padding-left: 1.5rem;
        }

        section li {
          margin-top: 0.6rem;
          padding-left: 0.25rem;
        }
      `}</style>
    </section>
  );
}
