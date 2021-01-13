import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Spinner from "../../components/ui/Spinner"
import Backdrop from "../../components/ui/Backdrop"
import LinkButton from "../../components/ui/LinkButton"

import styles from "./style.module.scss"

import DownloadIcon from "../../images/icon-download.svg"

const ResumePage = () => {
  const [loading, setLoading] = React.useState(true)

  return (
    <Layout>
      <SEO
        title="Resume"
        description="View or download my latest Resume"
        keywords={["Resume", "CV", "Portfolio"]}
      />
      <div className={styles.container}>
        <Backdrop visible={loading}>
          <Spinner visible={loading} />
        </Backdrop>
        <iframe
          className={`${styles.viewer} shadow-md ${
            loading ? "hidden" : "block"
          }`}
          title="resume pdf"
          src="https://docs.google.com/file/d/1pn4C2ktMFmJtBfdZCG8wdfS-2yNYuyKS1xTF-66pxQE/preview"
          role="presentation" // to remove warning for onLoad event on a non-interactive element
          onLoad={() => {
            setLoading(false)
          }}
        ></iframe>
        <LinkButton
          className={`rounded-full transition-all duration-500 ease-out p-8 fixed ${styles.downloadBtn}`}
          href="https://docs.google.com/document/export?format=pdf&id=1pn4C2ktMFmJtBfdZCG8wdfS-2yNYuyKS1xTF-66pxQE"
        >
          <img className="w-10 h-10" src={DownloadIcon} alt="" />
        </LinkButton>
      </div>
    </Layout>
  )
}

export default React.memo(ResumePage)
