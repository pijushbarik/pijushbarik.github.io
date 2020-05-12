import React from "react"
import PropTypes from "prop-types"

const ExternelLinkIcon = props => (
  <svg
    className={props.className || ""}
    style={props.style || {}}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 283.922 283.922"
    fill={props.fill || "#000"}
  >
    <g>
      <path
        d="M266.422,0h-97.625c-9.65,0-17.5,7.851-17.5,17.5c0,9.649,7.85,17.5,17.5,17.5h55.377l-92.375,92.374
 c-3.307,3.305-5.127,7.699-5.127,12.375c0,4.676,1.819,9.069,5.125,12.371c3.306,3.309,7.699,5.13,12.375,5.13
 c4.674,0,9.069-1.82,12.376-5.127l92.374-92.375v55.377c0,9.649,7.851,17.5,17.5,17.5c9.649,0,17.5-7.851,17.5-17.5V17.5
 C283.922,7.851,276.071,0,266.422,0z"
      />
      <path
        d="M201.137,253.922H30V82.785h128.711l30-30H15c-8.284,0-15,6.716-15,15v201.137c0,8.284,6.716,15,15,15h201.137
 c8.284,0,15-6.716,15-15V95.211l-30,30V253.922z"
      />
    </g>
  </svg>
)

ExternelLinkIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default ExternelLinkIcon
