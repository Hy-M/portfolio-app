import React from "react";

const Contact = () => {
  return (
    <main>
      <section className="contact--section">
        <section className="about">
          <h2 className="about--title">Ask me anything</h2>
          <p className="about--description">
            {" "}
            I'll reply to the email address you provide as soon as possible.
          </p>
        </section>
        <section className="contact">
          <form
            id="fs-frm"
            name="simple-contact-form"
            accept-charset="utf-8"
            action="https://formspree.io/meqaywzb"
            method="post"
          >
            <fieldset id="fs-frm-inputs">
              <label for="full-name">Your full name</label>
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="First and last name"
                required=""
              />
              <label for="email-address">Your email address</label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="email@domain.com"
                required=""
              />
              <label for="message">Your message</label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder=""
                required=""
              ></textarea>
              <input
                type="hidden"
                name="_subject"
                id="email-subject"
                value="Contact Form Submission"
              />
            </fieldset>
            <input type="submit" value="Send" />
          </form>
        </section>
      </section>
    </main>
  );
};

export default Contact;
