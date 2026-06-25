'use client'

import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
}

const nodes: Point[] = [
  { x: 0.12, y: 0.22 },
  { x: 0.38, y: 0.34 },
  { x: 0.62, y: 0.54 },
  { x: 0.86, y: 0.42 },
  { x: 0.72, y: 0.78 },
  { x: 0.28, y: 0.72 },
]

export default function CommandOpsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let width = 0
    let height = 0
    let raf = 0
    let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: 0.68, y: 0.32, active: false }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawGrid = () => {
      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(255,255,255,0.045)'
      for (let x = 0; x <= width; x += 32) {
        ctx.beginPath()
        ctx.moveTo(x + 0.5, 0)
        ctx.lineTo(x + 0.5, height)
        ctx.stroke()
      }
      for (let y = 0; y <= height; y += 32) {
        ctx.beginPath()
        ctx.moveTo(0, y + 0.5)
        ctx.lineTo(width, y + 0.5)
        ctx.stroke()
      }
    }

    const toPx = (point: Point) => ({
      x: point.x * width,
      y: point.y * height,
    })

    const drawConnection = (a: Point, b: Point, progress: number) => {
      const start = toPx(a)
      const end = toPx(b)
      const midX = start.x + (end.x - start.x) * progress
      const midY = start.y + (end.y - start.y) * progress

      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(96,165,250,0.18)'
      ctx.beginPath()
      ctx.moveTo(start.x, start.y)
      ctx.lineTo(end.x, end.y)
      ctx.stroke()

      const gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y)
      gradient.addColorStop(0, 'rgba(37,99,235,0)')
      gradient.addColorStop(Math.max(0, progress - 0.12), 'rgba(37,99,235,0)')
      gradient.addColorStop(progress, 'rgba(147,197,253,0.95)')
      gradient.addColorStop(Math.min(1, progress + 0.12), 'rgba(37,99,235,0)')
      gradient.addColorStop(1, 'rgba(37,99,235,0)')

      ctx.lineWidth = 2
      ctx.strokeStyle = gradient
      ctx.beginPath()
      ctx.moveTo(start.x, start.y)
      ctx.lineTo(end.x, end.y)
      ctx.stroke()

      ctx.fillStyle = 'rgba(147,197,253,0.95)'
      ctx.shadowColor = 'rgba(37,99,235,0.8)'
      ctx.shadowBlur = 18
      ctx.beginPath()
      ctx.arc(midX, midY, 2.8, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    }

    const drawNodes = () => {
      nodes.forEach((node, index) => {
        const point = toPx(node)
        const pulse = reducedMotion ? 0.5 : (Math.sin(frame * 0.025 + index) + 1) / 2
        ctx.fillStyle = index % 2 === 0 ? 'rgba(37,99,235,0.95)' : 'rgba(255,255,255,0.62)'
        ctx.strokeStyle = `rgba(96,165,250,${0.16 + pulse * 0.28})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(point.x, point.y, 3.4 + pulse * 1.2, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(point.x, point.y, 16 + pulse * 7, 0, Math.PI * 2)
        ctx.stroke()
      })
    }

    const drawScan = () => {
      if (reducedMotion) return
      const x = ((frame * 1.35) % (width + 320)) - 160
      const gradient = ctx.createLinearGradient(x - 120, 0, x + 120, 0)
      gradient.addColorStop(0, 'rgba(37,99,235,0)')
      gradient.addColorStop(0.5, 'rgba(96,165,250,0.13)')
      gradient.addColorStop(1, 'rgba(37,99,235,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(x - 120, 0, 240, height)
    }

    const drawGlow = () => {
      const gx = mouse.x * width
      const gy = mouse.y * height
      const gradient = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(width, height) * 0.42)
      gradient.addColorStop(0, mouse.active ? 'rgba(37,99,235,0.22)' : 'rgba(37,99,235,0.14)')
      gradient.addColorStop(0.38, 'rgba(37,99,235,0.06)')
      gradient.addColorStop(1, 'rgba(37,99,235,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#030712'
      ctx.fillRect(0, 0, width, height)
      drawGrid()
      drawGlow()

      for (let i = 0; i < nodes.length; i += 1) {
        const next = nodes[(i + 1) % nodes.length]
        const progress = reducedMotion ? 0.5 : (frame * 0.006 + i * 0.17) % 1
        drawConnection(nodes[i], next, progress)
      }

      drawNodes()
      drawScan()
      frame += 1
      raf = window.requestAnimationFrame(draw)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (event.clientX - rect.left) / rect.width
      mouse.y = (event.clientY - rect.top) / rect.height
      mouse.active = true
    }

    const onPointerLeave = () => {
      mouse.active = false
      mouse.x = 0.68
      mouse.y = 0.32
    }

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', onMotionChange)
    raf = window.requestAnimationFrame(draw)

    return () => {
      observer.disconnect()
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', onMotionChange)
      window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-95"
    />
  )
}
