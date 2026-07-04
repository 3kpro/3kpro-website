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

type Rocket = {
  startX: number
  startY: number
  targetX: number
  targetY: number
  progress: number
  speed: number
  color: string
}

type TextBurst = {
  x: number
  y: number
  life: number
  maxLife: number
  scale: number
  lines: string[]
}

const colors = ['#ff334e', '#ffffff', '#3772ff', '#ffd166', '#19e06f']
const textBurstInterval = 4

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

export default function FireworksButton() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rocketsRef = useRef<Rocket[]>([])
  const particlesRef = useRef<Particle[]>([])
  const textBurstsRef = useRef<TextBurst[]>([])
  const frameRef = useRef<number | null>(null)
  const explosionCountRef = useRef(0)

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

  const launchTextBurst = useCallback((x: number, y: number) => {
    const horizontalMargin = Math.min(180, window.innerWidth * 0.24)
    const verticalMargin = Math.min(150, window.innerHeight * 0.24)
    const safeX = Math.min(Math.max(x, horizontalMargin), window.innerWidth - horizontalMargin)
    const safeY = Math.min(Math.max(y, verticalMargin), window.innerHeight - verticalMargin)

    textBurstsRef.current.push({
      x: safeX,
      y: safeY,
      life: 118,
      maxLife: 118,
      scale: randomBetween(0.94, 1.08),
      lines: ['Happy 4th......', 'From 3KPRO'],
    })

    launchBurst(safeX, safeY, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 18 : 38)
  }, [launchBurst])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    context.clearRect(0, 0, window.innerWidth, window.innerHeight)

    const arrivedRockets: Rocket[] = []

    rocketsRef.current = rocketsRef.current
      .map((rocket) => ({
        ...rocket,
        progress: Math.min(rocket.progress + rocket.speed, 1),
      }))
      .filter((rocket) => {
        if (rocket.progress >= 1) {
          arrivedRockets.push(rocket)
          return false
        }

        return true
      })

    for (const rocket of arrivedRockets) {
      explosionCountRef.current += 1

      if (explosionCountRef.current % textBurstInterval === 0) {
        launchTextBurst(rocket.targetX, rocket.targetY)
      } else {
        launchBurst(rocket.targetX, rocket.targetY, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 34 : 76)
      }
    }

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

    textBurstsRef.current = textBurstsRef.current
      .map((textBurst) => ({
        ...textBurst,
        y: textBurst.y - 0.22,
        life: textBurst.life - 1,
      }))
      .filter((textBurst) => textBurst.life > 0)

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

    for (const textBurst of textBurstsRef.current) {
      const progress = 1 - textBurst.life / textBurst.maxLife
      const fadeIn = Math.min(progress / 0.16, 1)
      const fadeOut = Math.min(textBurst.life / 26, 1)
      const alpha = Math.max(Math.min(fadeIn, fadeOut), 0)
      const fontSize = Math.min(Math.max(window.innerWidth * 0.052, 30), 62) * textBurst.scale
      const lineHeight = fontSize * 1.08

      context.save()
      context.globalAlpha = alpha
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.font = `800 ${fontSize}px Inter, system-ui, sans-serif`
      context.shadowBlur = 28
      context.shadowColor = '#3772ff'
      context.lineWidth = Math.max(4, fontSize * 0.08)
      context.strokeStyle = 'rgba(8, 8, 10, 0.8)'
      context.fillStyle = '#ffffff'

      textBurst.lines.forEach((line, index) => {
        const y = textBurst.y + (index - (textBurst.lines.length - 1) / 2) * lineHeight
        context.strokeText(line, textBurst.x, y)
        context.fillText(line, textBurst.x, y)
      })
      context.restore()
    }

    for (const rocket of rocketsRef.current) {
      const eased = 1 - Math.pow(1 - rocket.progress, 3)
      const x = rocket.startX + (rocket.targetX - rocket.startX) * eased
      const y = rocket.startY + (rocket.targetY - rocket.startY) * eased
      const trailX = rocket.startX + (rocket.targetX - rocket.startX) * Math.max(eased - 0.08, 0)
      const trailY = rocket.startY + (rocket.targetY - rocket.startY) * Math.max(eased - 0.08, 0)

      context.globalAlpha = 0.9
      context.strokeStyle = rocket.color
      context.lineWidth = 2
      context.shadowBlur = 18
      context.shadowColor = rocket.color
      context.beginPath()
      context.moveTo(trailX, trailY)
      context.lineTo(x, y)
      context.stroke()

      context.globalAlpha = 1
      context.fillStyle = '#ffffff'
      context.beginPath()
      context.arc(x, y, 3.2, 0, Math.PI * 2)
      context.fill()
    }

    context.globalAlpha = 1
    context.shadowBlur = 0

    if (particlesRef.current.length > 0 || rocketsRef.current.length > 0 || textBurstsRef.current.length > 0) {
      frameRef.current = requestAnimationFrame(animate)
    } else {
      stopAnimation()
    }
  }, [launchBurst, launchTextBurst, stopAnimation])

  const startAnimation = useCallback(() => {
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  const launchAtPoint = useCallback((x: number, y: number) => {
    sizeCanvas()

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const startX = x + randomBetween(-140, 140)
    const startY = window.innerHeight + 24

    rocketsRef.current.push({
      startX,
      startY,
      targetX: x,
      targetY: y,
      progress: 0,
      speed: reduceMotion ? 0.05 : 0.032,
      color: colors[Math.floor(Math.random() * colors.length)],
    })

    startAnimation()
  }, [sizeCanvas, startAnimation])

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
      rocketsRef.current = []
      particlesRef.current = []
      textBurstsRef.current = []
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
