import React from "react";

const TermsConditions = () => {
  return (
    <section className="terms-outer py-5">
      <div className="container">
        <h2 className="text-center w-100 mb-3 text-capitalize fw-normal">
          Terms and Condition
        </h2>
        <div className="terms-inner border-aliceblue rounded-3 py-4 px-4 bg-white">
          <p>
            <strong>Terms and Conditions</strong>
          </p>
          <br />
          <p>
            These Terms and Conditions ("Terms") govern your use of 'Firulais Online'
            mobile application ("App") and website ("Website") operated by 'Pet
            Time'. By accessing or using our App or Website, you agree to be
            bound by these Terms. If you disagree with any part of the Terms,
            you may not access our services.
          </p>
          <br />
          <ol className="fw-normal d-flex flex-column gap-4">
            <li>
              <p>Account Registration</p>
              <p>You should have put a correct and own phone number.</p>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account.
              </p>
            </li>
            <li>
              <p>Ordering and Payment</p>
              <p>
                By placing an order through our platform, you agree to pay the
                specified price for the products and any applicable taxes or
                fees.
              </p>
              <p>
                We reserve the right to refuse or cancel orders at our
                discretion, including but not limited to orders that violate
                these Terms or are fraudulent in nature.
              </p>
            </li>
            <li>
              <p>Product Information</p>
              <p>
                We strive to provide accurate and up-to-date information about
                our products, including pricing, descriptions, and availability.
                However, we do not guarantee the accuracy or completeness of
                this information.
              </p>
            </li>
            <li>
              <p>Delivery</p>
              <p>
                We will make every effort to deliver your order in a timely
                manner. However, delivery times may vary depending on factors
                beyond our control, and we do not guarantee specific delivery
                dates or times.
              </p>
            </li>
            <li>
              <p>Returns and Refunds</p>
              <p>
                Please refer to our Return Policy for information about returns
                and refunds.
              </p>
            </li>
            <li>
              <p>Intellectual Property</p>
              <p>
                All content on our App and Website, including text, images,
                logos, and trademarks, is the property of 'Firulais Online' or its
                licensors and is protected by copyright and other intellectual
                property laws.
              </p>
            </li>
            <li>
              <p>Limitation of Liability</p>
              <p>
                To the fullest extent permitted by law, 'Pet Time' shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or related to your use of our
                services.
              </p>
            </li>
            <li>
              <p>Governing Law</p>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Iraq jurisdiction, without regard to its
                conflict of law principles.
              </p>
            </li>
            <li>
              <p>Changes to These Terms</p>
              <p>
                We reserve the right to update or modify these Terms at any time
                without prior notice. Any changes will be effective immediately
                upon posting the updated Terms on our App or Website.
              </p>
            </li>
            <li>
              <p>Contact Us</p>
              <p>
                If you have any questions or concerns about these Terms, please
                contact us at{" "}
                <a
                  className="text-dark text-decoration-none"
                  href="mailto:pettime.info.iq@gmail.com"
                >
                  pettime.info.iq@gmail.com
                </a>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
