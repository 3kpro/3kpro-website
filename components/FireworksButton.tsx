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

const colors = ['#ff334e', '#ffffff', '#3772ff', '#ffd166', '#19e06f']
const letterColors = ['#ffffff', '#3772ff', '#ff334e', '#ffd166']
const holidayMessages = ['Happy Fourth', 'From 3K']

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

export default function FireworksButton() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rocketsRef = useRef<Rocket[]>([])
  const particlesRef = useRef<Particle[]>([])
  const frameRef = useRef<number | null>(null)
  const explosionCountRef = useRef(0)
  const holidayMessageIndexRef = useRef(0)

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

  const launchTextBurst = useCallback((x: number, y: number, message: string) => {
    const horizontalMargin = Math.min(180, window.innerWidth * 0.24)
    const verticalMargin = Math.min(150, window.innerHeight * 0.24)
    const safeX = Math.min(Math.max(x, horizontalMargin), window.innerWidth - horizontalMargin)
    const safeY = Math.min(Math.max(y, verticalMargin), window.innerHeight - verticalMargin)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const textCanvas = document.createElement('canvas')
    const textWidth = Math.min(window.innerWidth * 0.86, 920)
    const textHeight = Math.min(window.innerHeight * 0.32, 260)
    const textContext = textCanvas.getContext('2d', { willReadFrequently: true })

    if (!textContext) {
      launchBurst(safeX, safeY, reduceMotion ? 18 : 38)
      return
    }

    textCanvas.width = Math.floor(textWidth)
    textCanvas.height = Math.floor(textHeight)
    textContext.clearRect(0, 0, textCanvas.width, textCanvas.height)
    textContext.fillStyle = '#ffffff'
    textContext.textAlign = 'center'
    textContext.textBaseline = 'middle'

    const lines = [message]
    let fontSize = Math.min(Math.max(window.innerWidth * 0.052, 30), 62)
    const maxLineWidth = textCanvas.width * 0.92

    do {
      textContext.font = `900 ${fontSize}px Inter, system-ui, sans-serif`
      const widest = Math.max(...lines.map((line) => textContext.measureText(line).width))
      if (widest <= maxLineWidth) break
      fontSize -= 2
    } while (fontSize > 24)

    const lineHeight = fontSize * 1.1
    lines.forEach((line, index) => {
      const lineY = textCanvas.height / 2 + (index - (lines.length - 1) / 2) * lineHeight
      textContext.fillText(line, textCanvas.width / 2, lineY)
    })

    const image = textContext.getImageData(0, 0, textCanvas.width, textCanvas.height).data
    const sampleStep = reduceMotion ? 7 : 4
    const particleLimit = reduceMotion ? 520 : 2400
    const candidates: Particle[] = []

    for (let sampleY = 0; sampleY < textCanvas.height; sampleY += sampleStep) {
      for (let sampleX = 0; sampleX < textCanvas.width; sampleX += sampleStep) {
        const alpha = image[(sampleY * textCanvas.width + sampleX) * 4 + 3]

        if (alpha < 90) continue

        candidates.push({
          x: safeX - textCanvas.width / 2 + sampleX + randomBetween(-0.75, 0.75),
          y: safeY - textCanvas.height / 2 + sampleY + randomBetween(-0.75, 0.75),
          vx: randomBetween(-0.1, 0.1),
          vy: randomBetween(-0.26, 0.08),
          life: randomBetween(104, 136),
          maxLife: 136,
          size: randomBetween(1.65, reduceMotion ? 2.45 : 3.35),
          color: letterColors[Math.floor(Math.random() * letterColors.length)],
        })
      }
    }

    const textParticles = candidates.length > particleLimit
      ? candidates.sort(() => Math.random() - 0.5).slice(0, particleLimit)
      : candidates

    particlesRef.current.push(...textParticles)
    launchBurst(safeX, safeY, reduceMotion ? 10 : 18)
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

      if (explosionCountRef.current % 2 === 1) {
        const message = holidayMessages[holidayMessageIndexRef.current % holidayMessages.length]
        holidayMessageIndexRef.current += 1
        launchTextBurst(rocket.targetX, rocket.targetY, message)
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

    if (particlesRef.current.length > 0 || rocketsRef.current.length > 0) {
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
