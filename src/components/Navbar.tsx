'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import CartPanel from './CartPanel'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const totalItems = useCartStore((s) => s.totalItems())

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1.2rem, 5vw, 4rem)', height: '76px',
        background: 'linear-gradient(180deg, rgba(10,10,10,0.97), rgba(10,10,10,0.88))',
        borderBottom: '1px solid var(--gold-border)',
        backdropFilter: 'blur(10px)',
      }}>
        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <div style={{
            height: '52px', width: '160px',
            border: '1px dashed var(--gold-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Cinzel, serif', fontSize: '0.6rem',
            letterSpacing: '0.1em', color: 'rgba(200,169,107,0.4)',
            textTransform: 'uppercase',
          }}>
            Sua Logo Aqui
          </div>
        </Link>

        {/* LINKS DESKTOP */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 2.2vw, 2.2rem)', listStyle: 'none' }}
          className="nav-links-desktop">
          {[
            { href: '/', label: 'Início' },
            { href: '/metodos', label: 'Métodos' },
            { href: '/perguntas', label: 'Perguntas Avulsas' },
            { href: '/sobre', label: 'Sobre Mim' },
            { href: '/contato', label: 'Contato' },
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(0.62rem, 0.9vw, 0.75rem)',
                fontWeight: 500, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--beige)',
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CARRINHO + HAMBURGER */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ paddingLeft: 'clamp(0.6rem, 1.5vw, 1.2rem)', borderLeft: '1px solid var(--gold-border)' }}>
            <button onClick={() => setCartOpen(true)} style={{
              position: 'relative', background: 'none', border: 'none',
              cursor: 'pointer', color: 'var(--gold)', padding: '4px',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {totalItems > 0 && (
                <span style={{
                  position: 'absolute', top: '-4px', right: '-6px',
                  background: 'var(--gold)', color: '#0A0A0A',
                  fontFamily: 'Cinzel, serif', fontSize: '0.58rem', fontWeight: 700,
                  width: '16px', height: '16px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'var(--gold)' }}></span>
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'var(--gold)' }}></span>
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'var(--gold)' }}></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '76px', left: 0, right: 0,
          background: 'rgba(10,10,10,0.98)', borderBottom: '1px solid var(--gold-border)',
          padding: '1.8rem', zIndex: 99, display: 'flex', flexDirection: 'column',
          gap: '1.2rem', backdropFilter: 'blur(12px)',
        }}>
          {[
            { href: '/', label: 'Início' },
            { href: '/metodos', label: 'Métodos' },
            { href: '/perguntas', label: 'Perguntas Avulsas' },
            { href: '/sobre', label: 'Sobre Mim' },
            { href: '/contato', label: 'Contato' },
          ].map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Cinzel, serif', fontSize: '0.82rem',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--beige)', textDecoration: 'none',
                paddingBottom: '1rem', borderBottom: '1px solid var(--gold-border)',
              }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* CART PANEL */}
      <CartPanel isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}