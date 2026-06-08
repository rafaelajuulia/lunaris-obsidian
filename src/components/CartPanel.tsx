'use client'

import { useCartStore } from '@/store/cartStore'

interface CartPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const { items, removeItem, total, clearCart } = useCartStore()

  if (!isOpen) return null

  return (
    <>
      {/* OVERLAY */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.75)',
        zIndex: 200, backdropFilter: 'blur(4px)',
      }} />

      {/* PANEL */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(420px, 100vw)',
        background: '#151515',
        borderLeft: '1px solid var(--gold-border)',
        zIndex: 201, padding: '2rem',
        overflowY: 'auto',
        display: 'flex', flexDirection: 'column', gap: '1.5rem',
      }}>
        {/* HEADER */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid var(--gold-border)', paddingBottom: '1rem',
        }}>
          <span style={{
            fontFamily: 'Cinzel, serif', fontSize: '0.9rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>
            Sacola
          </span>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--beige)', fontSize: '1.4rem', lineHeight: 1,
          }}>✕</button>
        </div>

        {/* ITEMS */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {items.length === 0 ? (
            <p style={{
              textAlign: 'center', padding: '3rem 0',
              color: 'var(--beige)', fontStyle: 'italic', fontSize: '0.9rem',
            }}>
              Sua sacola está vazia
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.7rem 0.5rem',
                borderBottom: '1px solid var(--gold-border)',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'Cinzel, serif', fontSize: '0.72rem',
                    letterSpacing: '0.1em', color: 'var(--ivory)', marginBottom: '0.2rem',
                  }}>
                    {item.nome}
                  </div>
                  <div style={{
                    fontFamily: 'Cinzel, serif', fontSize: '0.7rem',
                    color: 'var(--gold)',
                  }}>
                    {item.quantidade}x — R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'rgba(200,169,107,0.5)', fontSize: '1rem',
                }}>✕</button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        {items.length > 0 && (
          <div style={{ borderTop: '1px solid var(--gold-border)', paddingTop: '1.2rem' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem',
            }}>
              <span style={{
                fontFamily: 'Cinzel, serif', fontSize: '0.75rem',
                letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--beige)',
              }}>Total</span>
              <span style={{
                fontFamily: 'Cinzel, serif', fontSize: '0.9rem',
                color: 'var(--gold)', fontWeight: 600,
              }}>
                R$ {total().toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button style={{
              fontFamily: 'Cinzel, serif', fontSize: '0.72rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '0.85rem', background: 'var(--gold)',
              color: '#0A0A0A', border: 'none', cursor: 'pointer',
              fontWeight: 600, width: '100%',
            }}>
              Finalizar Compra
            </button>
            <button onClick={clearCart} style={{
              fontFamily: 'Cinzel, serif', fontSize: '0.65rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '0.6rem', background: 'transparent',
              color: 'rgba(200,169,107,0.5)', border: 'none',
              cursor: 'pointer', width: '100%', marginTop: '0.5rem',
            }}>
              Limpar Sacola
            </button>
          </div>
        )}
      </div>
    </>
  )
}