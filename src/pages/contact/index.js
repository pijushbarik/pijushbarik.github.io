import React, { useState } from "react"
import { navigate } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import WithCustomScrollbar from "../../components/WithCustomScrollbar"
import styles from "./styles.module.scss"

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "bot-field": "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(() => navigate(form.getAttribute("failed-action")))
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      "bot-field": "",
    })
  }

  return (
    <Layout>
      <SEO title="Contact" keywords={["Contact"]} />
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
            action="/form-submission/success/"
            failed-action="/form-submission/failure/"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="hidden"
              name="bot-field"
              value={formData["bot-field"]}
              onChange={handleChange}
            />
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
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="inp_email" className="text-xl">
              Email
            </label>
            <input
              id="inp_email"
              className={`w-full h-14 text-2xl px-3 py-5 rounded-sm mt-2 mb-6 ${styles.input}`}
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <br />
            <div className="ml-auto w-max-content">
              <input
                className={`text-2xl px-6 py-4 rounded-md mr-3 inline-block font-semibold ${styles.resetBtn}`}
                type="reset"
                value="Reset"
              />
              <input
                className={`text-2xl px-6 py-4 rounded-md inline-block font-semibold ${styles.inputBtn}`}
                type="submit"
                value="Send"
              />
            </div>
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
}
export default ContactPage
