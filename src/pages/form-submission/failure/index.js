import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/Layout"

const FormFailurePage = () => (
  <Layout>
    <div className="flex justify-center items-center h-screen w-screen">
      <div
        className="w-3/4 max-w-5xl px-10 py-24 rounded-lg shadow-lg text-center"
        style={{ background: "rgba(229, 62, 62, 0.2)" }}
      >
        <p className="text-7xl font-light">Unable to submit</p>
        <p className="text-3xl mt-10 leading-relaxed">
          There was a problem while submitting your form. Check your internet
          connection and try again.
        </p>
        <Link to="/contact/" className="text-3xl underline mt-6 block">
          Go back...
        </Link>
      </div>
    </div>
  </Layout>
)

export default FormFailurePage
