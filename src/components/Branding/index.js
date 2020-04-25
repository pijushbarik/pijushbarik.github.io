import React from "react"

import BrandName from "../../images/brand-name.svg"
import Logo from "../../images/logo.svg"

const Branding = () => (
  <div className="h-16 flex items-center">
    <div className="h-full mr-5">
      <img src={Logo} alt="" className="h-full" />
    </div>
    <div className="h-full">
      <img src={BrandName} alt="Pijush Barik" className="h-full" />
    </div>
  </div>
)

export default Branding
