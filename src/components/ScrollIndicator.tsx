'use client'

import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY < 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.4rem',
      animation: 'fadeInUp 1s ease 1.5s both',
      cursor: 'pointer',
      zIndex: 2,
    }}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <span style={{
        fontFamily: 'Cinzel, serif',
        fontSize: '0.55rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'rgba(200,169,107,0.6)',
      }}>
        Role para baixo
      </span>
      <div style={{ animation: 'bounce 2s ease-in-out infinite' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="rgba(200,169,107,0.6)" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  )
}