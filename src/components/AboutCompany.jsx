import React from "react";

const AboutCompany = () => {
  return (
    <section className="about-outer py-5">
      <div className="container">
        <h2 className="text-center w-100 mb-3 text-capitalize fw-normal">
          About Firulais Online
        </h2>
        <div className="about-inner border-aliceblue rounded-3 py-4 px-4 bg-white">
          <p>
            <strong>Welcome to Firulais Online!</strong>
          </p>
          <br />
          <p>
            Firulais Online is a pet store franchise, owned and operated by a passionate
            group of women, providing a wide range of pet products and supplies for all your furry
            friends. We strive to deliver quality pet care essentials to you from the best
            nearby stores, ensuring that you have everything you need to keep your pets happy and healthy.
          </p>
          <br />
          <p>
            Whether you're a first-time pet owner or a seasoned pet parent, Firulais Online is here
            to make shopping for your pets easier. We offer a diverse selection of products, from
            food and accessories to grooming and health supplies, all available at your fingertips.
          </p>
          <br />
          <h4 className="fw-semibold">Our Mission</h4>
          <p>
            Our mission is simple – to provide pet owners with the best products, great customer
            service, and expert advice, all while supporting local businesses. We believe that
            pets deserve the best, and we’re here to make sure they get it. Our vision is to create
            a trusted community of pet lovers, where everyone can find the right products for
            their pets, delivered right to their doorsteps.
          </p>
          <br />
          <h4 className="fw-semibold">Why Choose Firulais Online?</h4>
          <ul className="fw-normal">
            <li>Owned and operated by women passionate about pets and quality service.</li>
            <li>Convenient online shopping with delivery from local stores near you.</li>
            <li>Wide selection of premium pet products including food, toys, grooming, and health items.</li>
            <li>Friendly, knowledgeable customer support to help with all your pet needs.</li>
            <li>Commitment to sustainability and eco-friendly options for pets and pet owners.</li>
          </ul>
          <br />
          <h4 className="fw-semibold">Our Store Locations</h4>
          <p>
            Firulais Online sources products from trusted, local pet stores near you, ensuring that
            you get top-quality products while supporting your local economy. Our online store is
            easy to navigate, allowing you to quickly find what you're looking for, from food and
            treats to accessories and more.
          </p>
          <br />
          <h4 className="fw-semibold">Contact Us</h4>
          <p>
            If you have any questions, comments, or need assistance with your order, feel free to
            reach out to us. We are always happy to help you and your pets.
          </p>
          <p>
            Email us at{" "}
            <a
              className="text-dark text-decoration-none"
              href="mailto:pettime.info.iq@gmail.com"
            >
              pettime.info.iq@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
