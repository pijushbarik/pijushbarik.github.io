import React from "react"

import BrandName from "../SVG/BrandName"
import Logo from "../SVG/Logo"

const Branding = () => (
  <div className="h-24 flex items-center mr-5">
    <Logo className="mr-2" style={{ height: "calc(100% - 20px)" }} />
    <BrandName style={{ height: "calc(100% - 5px)" }} />
  </div>
)

export default Branding
