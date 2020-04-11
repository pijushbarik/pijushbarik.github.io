import React from "react"

import styles from "./style.module.scss"

/**
 * Concept and code from
 * https://codepen.io/Ayachem/pen/KaLbZK
 */

const AnimatedHello = () => {
  return (
    <div className={styles.helloParent}>
      <svg
        className={styles.helloWord}
        width="365"
        height="365"
        viewBox="0 0 365 365"
      >
        <g id="H-letter">
          <line
            className={styles.HLeftStroke}
            x1="17"
            y1="0"
            x2="17"
            y2="124"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className={styles.HMidStroke}
            x1="33"
            y1="62"
            x2="68"
            y2="62"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className={styles.HRightStroke}
            x1="84"
            y1="0"
            x2="84"
            y2="124"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
        </g>

        <g id="E-letter">
          <line
            className={styles.ELeftStroke}
            x1="138"
            y1="0"
            x2="138"
            y2="124"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className={styles.ETopStroke}
            x1="154"
            y1="17"
            x2="201"
            y2="17"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className={styles.EMidStroke}
            x1="154"
            y1="62"
            x2="196"
            y2="62"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className={styles.EBottomStroke}
            x1="154"
            y1="107"
            x2="201"
            y2="107"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
        </g>

        <g id="L-one-letter">
          <line
            className={styles.LOneLongStroke}
            x1="17"
            y1="153"
            x2="17"
            y2="277"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className={styles.LOneShortStroke}
            x1="33"
            y1="260"
            x2="77"
            y2="260"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
        </g>

        <g id="L-two-letter">
          <line
            className={styles.LTwoLongStroke}
            x1="104"
            y1="153"
            x2="104"
            y2="277"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className={styles.LTwoShortStroke}
            x1="120"
            y1="260"
            x2="164"
            y2="260"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
        </g>

        <g id="O-letter">
          <circle
            className={styles.OStroke}
            cx="231"
            cy="215"
            r="48"
            stroke="#000"
            fill="none"
            strokeWidth="31"
          />
        </g>

        <g id="red-dot">
          <line
            x1="325"
            y1="260"
            x2="325"
            y2="260"
            stroke="#FF5851"
            className={styles.redDot}
          />
        </g>
      </svg>
    </div>
  )
}

export default AnimatedHello
