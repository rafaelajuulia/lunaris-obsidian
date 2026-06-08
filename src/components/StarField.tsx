'use client'

import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let stars: {
      x: number; y: number; r: number; a: number
      sp: number; off: number; gold: boolean
    }[] = []
    let raf: number

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight)
      genStars()
    }

    function genStars() {
      if (!canvas) return
      const n = Math.floor(canvas.width * canvas.height / 4200)
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.1 + 0.2,
        a: Math.random() * 0.8 + 0.1,
        sp: Math.random() * 0.007 + 0.002,
        off: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.28,
      }))
    }

    function draw(t: number) {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        const a = s.a * (0.4 + 0.6 * Math.sin(t * s.sp + s.off))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.gold
          ? `rgba(200,169,107,${a})`
          : `rgba(245,240,225,${a * 0.65})`
        ctx.fill()
      })
    }

    function animate(t: number) {
      draw(t)
      raf = requestAnimationFrame(animate)
    }

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf)
      resize()
      raf = requestAnimationFrame(animate)
    })
    ro.observe(document.body)

    window.addEventListener('resize', () => {
      cancelAnimationFrame(raf)
      resize()
      raf = requestAnimationFrame(animate)
    })

    resize()
    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  )
}