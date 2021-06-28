import { useState } from "react";
import styles from "./styles.module.scss";

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "bot-field": "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      "bot-field": "",
    });
  };

  return (
    <div className="bg-primary p-8 rounded-md shadow-xl -mt-60">
      <span className="text-4xl font-mono">Reach out to me</span>

      <div>
        <form
          className="mt-4 w-full"
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
          <label htmlFor="inp_name">Name</label>
          <input
            id="inp_name"
            className={`w-full p-2 rounded-sm mt-2 mb-2 ${styles.input}`}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="inp_email">Email</label>
          <input
            id="inp_email"
            className={`w-full p-2 rounded-sm mt-2 mb-2 ${styles.input}`}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="inp_msg">Message</label>
          <textarea
            id="inp_msg"
            className={`w-full p-2 h-40 rounded-sm mt-2 mb-2 ${styles.input}`}
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <br />
          <div className="flex justify-end">
            <input
              className={`py-2 px-4 w-36 rounded-sm inline-block ${styles.inputBtn}`}
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
