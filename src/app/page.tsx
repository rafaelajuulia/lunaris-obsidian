'use client'

import Image from 'next/image'
import ScrollIndicator from '@/components/ScrollIndicator'

export default function Home() {
  return (
    <section style={{
      position: 'relative',
      minHeight: 'calc(100svh - 76px)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 clamp(1.5rem, 6vw, 5rem)',
      overflow: 'hidden',
    }}>

      {/* SCROLL INDICATOR */}
      <ScrollIndicator />

      <div style={{
        width: '100%',
        maxWidth: '1380px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: 'clamp(1rem, 3vw, 3rem)',
        padding: '3rem 0',
      }}>

        {/* LEFT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h1 style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(1.9rem, 4vw, 3.5rem)',
            fontWeight: 600, lineHeight: 1.15,
            color: 'var(--ivory)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            Descubra os seus caminhos e possibilidades
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ flex: 1, maxWidth: '50px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v14M1 8h14M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="#C8A96B" strokeWidth=".8"/>
              <circle cx="8" cy="8" r="2" fill="#C8A96B" opacity=".6"/>
            </svg>
            <div style={{ flex: 1, maxWidth: '50px', height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            fontStyle: 'italic',
            color: 'var(--beige)',
            lineHeight: 1.8,
          }}>
            Orientação, clareza e respostas para suas questões.
          </p>

          <blockquote style={{
            background: 'var(--gold-dim)',
            border: '1px solid var(--gold-border)',
            borderLeft: '3px solid var(--gold)',
            padding: '0.9rem 1.2rem',
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(0.67rem, 0.95vw, 0.79rem)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--gold-light)',
            lineHeight: 1.75,
            maxWidth: '440px',
          }}>
            A vida é um jogo de cartas em que o destino sempre tem a última palavra
          </blockquote>

          <div>
            <a href="/sobre" style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '0.85rem 1.8rem',
              background: 'transparent',
              color: 'var(--gold)',
              border: '1px solid var(--gold-border)',
              cursor: 'pointer',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s',
            }}>
              Saiba Mais
            </a>
          </div>
        </div>

        {/* RIGHT: MOON */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            width: 'clamp(280px, 44vw, 580px)',
            height: 'clamp(280px, 44vw, 580px)',
          }}>
            {/* Glow */}
            <div style={{
              position: 'absolute', inset: '-20%', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,169,107,.18) 0%, rgba(200,169,107,.07) 38%, transparent 68%)',
              animation: 'pulse 6s ease-in-out infinite',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', inset: '-38%', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,169,107,.07) 0%, transparent 55%)',
              animation: 'pulse 9s ease-in-out infinite 3s',
              pointerEvents: 'none',
            }} />

            {/* Image */}
            <Image
              src="/zodiac.webp"
              alt="Roda zodiacal com lua cheia"
              fill
              style={{ objectFit: 'contain', animation: 'slowSpin 120s linear infinite',
                filter: 'drop-shadow(0 0 30px rgba(200,169,107,.5)) drop-shadow(0 0 80px rgba(200,169,107,.2))'
              }}
              priority
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slowSpin { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: .85; }
          50% { transform: scale(1.06); opacity: 1; }
        }
      `}</style>
    </section>
  )
}