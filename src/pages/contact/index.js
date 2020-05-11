import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import WithCustomScrollbar from "../../components/WithCustomScrollbar"
import styles from "./styles.module.scss"

const ContactPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <WithCustomScrollbar sidePadded topPadded>
      <h1
        className="text-7xl block w-max-content mx-auto sm:mx-0 \
        capitalize font-playfair font-bold left-outline mb-8"
      >
        <span>contact</span>
      </h1>

      <div>
        <p className="text-3xl">
          Thanks for taking the time to reach out. What can I do for you?
        </p>
        <p className="text-3xl mt-4">
          Or have something nice to say? I would love to listen.
        </p>
        <form
          className={`mt-8 w-full max-w-5xl ${styles.form}`}
          action="https://formspree.io/pijush.barik8@gmail.com"
          method="POST"
        >
          <label htmlFor="inp_name" className="text-xl">
            Name
          </label>
          <input
            id="inp_name"
            className={`w-full h-14 text-2xl px-3 py-5 rounded-sm mt-2 mb-6 ${styles.input}`}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <br />
          <label htmlFor="inp_email" className="text-xl">
            Email
          </label>
          <input
            id="inp_email"
            className={`w-full h-14 text-2xl px-3 py-5 rounded-sm mt-2 mb-6 ${styles.input}`}
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
          />
          <br />
          <label htmlFor="inp_msg" className="text-xl">
            Message
          </label>
          <textarea
            id="inp_msg"
            className={`w-full h-40 text-2xl px-3 py-5 rounded-sm mt-2 mb-6 ${styles.input}`}
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <br />
          <input
            className={`text-2xl px-6 py-4 rounded-md ml-auto block font-semibold ${styles.inputBtn}`}
            type="submit"
            value="Send"
          />
        </form>

        <div className="mt-24">
          <p className="text-4xl">Let&apos;s catch up on...</p>
          <div className="mt-4">
            <span className={`text-3xl relative mt-2 ${styles.socialLink}`}>
              <a href="https://www.linkedin.com/in/pijushbarik/">LinkedIn</a>
            </span>
            <span className={`text-3xl relative mt-2 ${styles.socialLink}`}>
              <a href="https://www.facebook.com/barikpijush">Facebook</a>
            </span>
            <span className={`text-3xl relative mt-2 ${styles.socialLink}`}>
              <a href="https://twitter.com/pijushbarik">Twitter</a>
            </span>
            <span className={`text-3xl relative mt-2 ${styles.socialLink}`}>
              <a href="https://github.com/pijushbarik">GitHub</a>
            </span>
          </div>
        </div>
      </div>
    </WithCustomScrollbar>
  </Layout>
)

export default ContactPage
