"use client"

import React, { useEffect, useRef } from "react"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  refresh?: boolean
}

export function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const particlesRef = useRef<Array<{ x: number; y: number; dx: number; dy: number; size: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    ctx.scale(dpr, dpr)

    const particles: Array<{ x: number; y: number; dx: number; dy: number; size: number }> = []

    // Initialize particles
    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * size + 0.5,
      })
    }

    particlesRef.current = particles

    let mouseX = rect.width / 2
    let mouseY = rect.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)
      ctx.fillStyle = "rgba(206, 255, 0, 0.7)"

      particles.forEach((particle) => {
        // Move particle
        particle.x += particle.dx
        particle.y += particle.dy

        // Bounce off edges
        if (particle.x < 0 || particle.x > rect.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > rect.height) particle.dy *= -1

        // Keep in bounds
        particle.x = Math.max(0, Math.min(rect.width, particle.x))
        particle.y = Math.max(0, Math.min(rect.height, particle.y))

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Interaction with mouse
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          particle.dx += Math.cos(angle) * 0.1
          particle.dy += Math.sin(angle) * 0.1
        }
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [quantity, size, refresh])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  )
}
