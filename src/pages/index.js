import React, { useEffect, useMemo, useRef, useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HiThere from "../components/SVG/HiThere"
import IAmPijush from "../components/SVG/IAmPijush"

import styles from "./style.module.scss"

const COLORS = [
  "#c62828",
  "#e91e63",
  "#4a148c",
  "#009688",
  "#cddc39",
  "#ffc107",
  "#795548",
  "#9e9e9e",
  "#263238",
]

// Returns a random number in the range inclusive
const random = (min, max, zeroExluded) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const value = Math.floor(Math.random() * (max - min + 1)) + min
  if (zeroExluded && value === 0) return random(min, max, true)
  return value
}

// Returns distance between two coordinates
const dist = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

class Particle {
  constructor(ctx, radius, velocityX, velocityY) {
    this.ctx = ctx
    this.radius = radius || 10
    this.x = random(this.radius, this.ctx.canvas.clientWidth - this.radius)
    this.y = random(this.radius, this.ctx.canvas.clientHeight - this.radius)

    let dx = velocityX || 10
    let dy = velocityY || 10
    this.dx = random(-dx, dx, true)
    this.dy = random(-dy, dy, true)

    this.color = COLORS[random(0, COLORS.length - 1)] // get a random fill color
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 4 * Math.PI)
    this.ctx.globalAlpha = 0.4
    this.ctx.fillStyle = this.color
    this.ctx.fill()
  }

  connect(neighbors) {
    neighbors.forEach(neighbor => {
      const d = dist(this.x, this.y, neighbor.x, neighbor.y)
      if (d < 100) {
        // draw a connecting line between them
        this.ctx.beginPath()
        this.ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
        this.ctx.moveTo(this.x, this.y)
        this.ctx.lineTo(neighbor.x, neighbor.y)
        this.ctx.stroke()
      }
    })
  }

  update(neighbors) {
    neighbors.forEach(neighbor => {
      const d = dist(this.x, this.y, neighbor.x, neighbor.y)
      if (d <= 2 * this.radius) {
        this.dx *= -1
        this.dy *= -1
        neighbor.dx *= -1
        neighbor.dy *= -1
        this.color = COLORS[random(0, COLORS.length - 1)]
      }
    })

    if (
      this.x < this.radius ||
      this.x > this.ctx.canvas.clientWidth - this.radius
    ) {
      this.dx *= -1
    }

    if (
      this.y < this.radius ||
      this.y > this.ctx.canvas.clientHeight - this.radius
    ) {
      this.dy *= -1
    }

    this.x += this.dx
    this.y += this.dy
  }
}

const IndexPage = () => {
  const [particleCount, setParticleCount] = useState(
    Math.floor(window.innerWidth / 25)
  )

  const particlesCanvas = useRef(null)
  let intervalId = null

  const drawParticles = (particles, ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight)

    particles.forEach((particle, idx) => {
      particle.draw()
      particle.connect(particles.slice(idx))
      particle.update([
        ...particles.slice(0, idx),
        ...particles.slice(idx + 1, particles.length),
      ])
    })
  }

  // to draw & update canvas
  useEffect(() => {
    const canvas = particlesCanvas.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight)

    const particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(ctx, 5, 3, 3))
    }

    intervalId = setInterval(() => drawParticles(particles, ctx), 1000 / 20) // 25fps
  }, [particleCount])

  // to add, remove event listeners
  useEffect(() => {
    window.addEventListener("resize", updateParticleCount)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener("resize", updateParticleCount)
    }
  }, [])

  const updateParticleCount = () => {
    clearInterval(intervalId)
    setParticleCount(Math.floor(window.innerWidth / 25))
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className={`h-screen w-screen relative ${styles.home}`}>
        <canvas className="absolute top-0 left-0" ref={particlesCanvas} />
        <div
          className="absolute top-0 left-0 h-screen w-screen flex \
          flex-col items-center justify-center px-5"
        >
          <div className={`mt-auto ${styles.container}`}>
            <HiThere className={`h-auto ${styles.hiThere}`} />
            <IAmPijush className={`mt-6 h-auto ${styles.iAmPijush}`} />
          </div>
          <footer className="inline-block mt-auto w-full p-3 flex justify-center">
            <p className={`text-lg ${styles.footerText}`}>
              Handcrafted with{" "}
              <span style={{ color: "var(--color-red)" }}>&hearts;</span> by me.
              &copy; 2020
            </p>
          </footer>
        </div>
      </div>
    </Layout>
  )
}

export default React.memo(IndexPage)
