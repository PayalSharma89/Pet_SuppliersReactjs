import React from "react";
import { Accordion } from "react-bootstrap"; // Import Accordion from react-bootstrap

const FAQPage = () => {
  return (
    <section className="faq-outer py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-capitalize fw-normal">Frequently Asked Questions</h2>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Firulais Online?</Accordion.Header>
            <Accordion.Body>
              Firulais Online is an online pet store that provides a wide range of pet products, including food, accessories, and healthcare items. We are a women-owned business focused on providing quality pet care products.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How can I place an order?</Accordion.Header>
            <Accordion.Body>
              You can place an order directly through our website. Simply browse our products, add items to your cart, and proceed to checkout. We offer multiple payment methods, including credit/debit cards.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I track my order?</Accordion.Header>
            <Accordion.Body>
              Yes, once your order is dispatched, we will provide a tracking number via email so you can easily track your package until it reaches your doorstep.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQPage;
