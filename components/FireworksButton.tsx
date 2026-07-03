'use client'

import { useCallback, useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
}

const colors = ['#ff334e', '#ffffff', '#3772ff', '#ffd166', '#19e06f']

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

export default function FireworksButton() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const frameRef = useRef<number | null>(null)
  const timeoutRef = useRef<number[]>([])

  const stopAnimation = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }
  }, [])

  const sizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const pixelRatio = window.devicePixelRatio || 1
    canvas.width = Math.floor(window.innerWidth * pixelRatio)
    canvas.height = Math.floor(window.innerHeight * pixelRatio)
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext('2d')
    if (context) {
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    context.clearRect(0, 0, window.innerWidth, window.innerHeight)

    particlesRef.current = particlesRef.current
      .map((particle) => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vx: particle.vx * 0.985,
        vy: particle.vy * 0.985 + 0.045,
        life: particle.life - 1,
      }))
      .filter((particle) => particle.life > 0)

    for (const particle of particlesRef.current) {
      const alpha = Math.max(particle.life / particle.maxLife, 0)
      context.globalAlpha = alpha
      context.fillStyle = particle.color
      context.shadowBlur = 18
      context.shadowColor = particle.color
      context.beginPath()
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      context.fill()
    }

    context.globalAlpha = 1
    context.shadowBlur = 0

    if (particlesRef.current.length > 0) {
      frameRef.current = requestAnimationFrame(animate)
    } else {
      stopAnimation()
    }
  }, [stopAnimation])

  const launchBurst = useCallback((x: number, y: number, count: number) => {
    const burst: Particle[] = Array.from({ length: count }, (_, index) => {
      const angle = (Math.PI * 2 * index) / count + randomBetween(-0.12, 0.12)
      const speed = randomBetween(2.2, 7.2)

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: randomBetween(46, 78),
        maxLife: 78,
        size: randomBetween(1.4, 3.2),
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    })

    particlesRef.current.push(...burst)
  }, [])

  const startAnimation = useCallback(() => {
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  const launchAtPoint = useCallback((x: number, y: number) => {
    sizeCanvas()

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const burstCount = reduceMotion ? 1 : 3
    const particleCount = reduceMotion ? 34 : 68
    const spread = reduceMotion ? 0 : 46

    for (let index = 0; index < burstCount; index += 1) {
      const timeout = window.setTimeout(() => {
        launchBurst(
          x + randomBetween(-spread, spread),
          y + randomBetween(-spread, spread),
          particleCount,
        )
        startAnimation()
      }, index * 90)

      timeoutRef.current.push(timeout)
    }

    startAnimation()
  }, [launchBurst, sizeCanvas, startAnimation])

  const handlePointerDown = useCallback((event: PointerEvent) => {
    if (event.button !== 0) return
    launchAtPoint(event.clientX, event.clientY)
  }, [launchAtPoint])

  useEffect(() => {
    sizeCanvas()
    window.addEventListener('resize', sizeCanvas)
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })

    return () => {
      window.removeEventListener('resize', sizeCanvas)
      window.removeEventListener('pointerdown', handlePointerDown)
      for (const timeout of timeoutRef.current) {
        window.clearTimeout(timeout)
      }
      timeoutRef.current = []
      stopAnimation()
    }
  }, [handlePointerDown, sizeCanvas, stopAnimation])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9998]"
    />
  )
}
