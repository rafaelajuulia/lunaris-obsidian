'use client'

import { useEffect, useState } from 'react'
import { useCartStore } from '@/store/cartStore'

interface Produto {
  id: string
  nome: string
  preco: number
  categoria: string
  descricao: string | null
  foto: string | null
}

const categorias = [
  { id: 'Amoroso', label: 'Amorosos', icon: '♥' },
  { id: 'Autoconhecimento', label: 'Autoconhecimento', icon: '☽' },
  { id: 'Financas', label: 'Finanças', icon: '✦' },
  { id: 'Profissional', label: 'Vida Profissional', icon: '◈' },
]

export default function MetodosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)
  const addItem = useCartStore((s) => s.addItem)
  const [added, setAdded] = useState<string[]>([])

  useEffect(() => {
    fetch('/api/produtos')
      .then((r) => r.json())
      .then((data) => { setProdutos(data); setLoading(false) })
  }, [])

  function handleAdd(produto: Produto) {
    addItem({ id: produto.id, nome: produto.nome, preco: produto.preco })
    setAdded((prev) => [...prev, produto.id])
    setTimeout(() => setAdded((prev) => prev.filter((i) => i !== produto.id)), 2000)
  }

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <p style={{ fontFamily: 'Cinzel, serif', color: 'var(--gold)', letterSpacing: '0.2em' }}>Carregando...</p>
    </div>
  )

  return (
    <div style={{ padding: '2rem clamp(1rem, 5vw, 3.5rem) 5rem', maxWidth: '1300px', margin: '0 auto' }}>

      {/* HEADER */}
      <div style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
        <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>
          ✦ Catálogo de Métodos ✦
        </p>
        <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 600, color: 'var(--ivory)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.8rem' }}>
          Escolha sua Tiragem
        </h1>
        <p style={{ fontStyle: 'italic', color: 'var(--beige)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
          Cada método foi cuidadosamente escolhido para trazer clareza e orientação ao seu caminho.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', margin: '1rem auto 0', maxWidth: '240px' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
          <span style={{ color: 'var(--gold)' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
        </div>
      </div>

      {/* STICKY NAV */}
      <nav style={{
        position: 'sticky', top: '76px', zIndex: 50,
        background: 'rgba(10,10,10,0.95)', borderBottom: '1px solid var(--gold-border)',
        backdropFilter: 'blur(10px)', display: 'flex', overflowX: 'auto',
        scrollbarWidth: 'none', margin: '1.5rem -clamp(1rem, 5vw, 3.5rem)',
      }}>
        {categorias.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} style={{
            fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--beige)', textDecoration: 'none',
            padding: '0.9rem 1.3rem', whiteSpace: 'nowrap',
            borderRight: '1px solid var(--gold-border)', flexShrink: 0,
            transition: 'color 0.3s, background 0.3s',
          }}>
            {cat.icon} {cat.label}
          </a>
        ))}
      </nav>

      {/* CATEGORIAS */}
      {categorias.map((cat) => {
        const itens = produtos.filter((p) => p.categoria === cat.id)
        if (!itens.length) return null
        return (
          <section key={cat.id} id={cat.id} style={{ marginBottom: '4rem', paddingTop: '2rem' }}>

            {/* CATEGORIA HEADER */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--gold-border)' }}>
              <span style={{ fontSize: '1.4rem', color: 'var(--gold)' }}>{cat.icon}</span>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                {cat.label}
              </h2>
              <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
            </div>

            {/* CARDS GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {itens.map((produto) => (
                <div key={produto.id} style={{
                  background: 'var(--bg2)', border: '1px solid var(--gold-border)',
                  overflow: 'hidden', display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.3s, border-color 0.3s',
                }}>
                  {/* FOTO */}
                  <div style={{ aspectRatio: '4/3', background: '#111', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem', border: '1px dashed rgba(200,169,107,0.2)' }}>
                    {produto.foto ? (
                      <img src={produto.foto} alt={produto.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <>
                        <span style={{ fontSize: '1.8rem' }}>📷</span>
                        <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(200,169,107,0.4)', textAlign: 'center', padding: '0 0.5rem' }}>
                          Foto de {produto.nome}
                        </p>
                      </>
                    )}
                  </div>

                  {/* BODY */}
                  <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ivory)', lineHeight: 1.4 }}>
                      {produto.nome}
                    </h3>
                    {produto.descricao && (
                      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.82rem', color: 'var(--beige)', fontStyle: 'italic', lineHeight: 1.6 }}>
                        {produto.descricao}
                      </p>
                    )}
                    <p style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', color: 'var(--gold)', fontWeight: 600 }}>
                      R$ {produto.preco.toFixed(2).replace('.', ',')}
                    </p>
                    <button
                      onClick={() => handleAdd(produto)}
                      style={{
                        fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.14em',
                        textTransform: 'uppercase', padding: '0.65rem 1.2rem',
                        background: added.includes(produto.id) ? 'var(--gold)' : 'var(--gold-dim)',
                        color: added.includes(produto.id) ? '#0A0A0A' : 'var(--gold)',
                        border: '1px solid var(--gold-border)', cursor: 'pointer',
                        transition: 'background 0.3s, color 0.3s', width: '100%',
                      }}>
                      {added.includes(produto.id) ? '✓ Adicionado' : 'Adicionar à Sacola'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}