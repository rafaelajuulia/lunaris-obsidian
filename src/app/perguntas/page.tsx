'use client'

import { useEffect, useState } from 'react'
import { useCartStore } from '@/store/cartStore'

interface Produto {
  id: string
  nome: string
  preco: number
  descricao: string | null
}

export default function PerguntasPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)
  const addItem = useCartStore((s) => s.addItem)
  const [added, setAdded] = useState<string[]>([])

  useEffect(() => {
    fetch('/api/produtos')
      .then((r) => r.json())
      .then((data) => {
        setProdutos(data.filter((p: any) => p.categoria === 'Perguntas'))
        setLoading(false)
      })
  }, [])

  function handleAdd(produto: Produto) {
    addItem({ id: produto.id, nome: produto.nome, preco: produto.preco })
    setAdded((prev) => [...prev, produto.id])
    setTimeout(() => setAdded((prev) => prev.filter((i) => i !== produto.id)), 2000)
  }

  const objetivas = produtos.filter((p) => p.nome.toLowerCase().includes('objetiva'))
  const detalhadas = produtos.filter((p) => p.nome.toLowerCase().includes('detalhada'))

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <p style={{ fontFamily: 'Cinzel, serif', color: 'var(--gold)', letterSpacing: '0.2em' }}>Carregando...</p>
    </div>
  )

  function renderCards(itens: Produto[], tipo: 'obj' | 'det') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.6rem', marginTop: '1.8rem' }}>
        {itens.map((produto) => (
          <div key={produto.id} style={{
            background: 'var(--bg2)', border: '1px solid var(--gold-border)',
            padding: '2rem 1.6rem', display: 'flex', flexDirection: 'column', gap: '0.9rem',
            transition: 'transform 0.3s, border-color 0.3s', position: 'relative', overflow: 'hidden',
          }}>
            {/* TAG */}
            <div style={{
              alignSelf: 'flex-start',
              fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.16em',
              textTransform: 'uppercase', padding: '0.3rem 0.7rem',
              border: '1px solid',
              background: tipo === 'obj' ? 'rgba(200,169,107,0.12)' : 'rgba(230,210,162,0.08)',
              borderColor: tipo === 'obj' ? 'rgba(200,169,107,0.35)' : 'rgba(230,210,162,0.3)',
              color: tipo === 'obj' ? 'var(--gold)' : 'var(--gold-light)',
              fontWeight: 600,
            }}>
              {tipo === 'obj' ? 'Objetiva' : 'Detalhada'}
            </div>

            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.88rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ivory)', lineHeight: 1.4 }}>
              {produto.nome}
            </h3>

            {produto.descricao && (
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.85rem', color: 'var(--beige)', fontStyle: 'italic', lineHeight: 1.6, flex: 1 }}>
                {produto.descricao}
              </p>
            )}

            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '1.3rem', color: 'var(--gold)', fontWeight: 600 }}>
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
        ))}
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem clamp(1rem, 5vw, 3.5rem) 5rem', maxWidth: '1100px', margin: '0 auto' }}>

      {/* HEADER */}
      <div style={{ padding: '2rem 0 1rem' }}>
        <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>
          ✦ Perguntas Avulsas ✦
        </p>
        <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 600, color: 'var(--ivory)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          Respostas para suas Dúvidas
        </h1>
        <p style={{ fontStyle: 'italic', color: 'var(--beige)', fontSize: '0.95rem', maxWidth: '560px', lineHeight: 1.8 }}>
          Escolha a quantidade e o nível de detalhamento que melhor atende à sua necessidade.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '1rem 0 0', maxWidth: '200px' }}>
          <span style={{ color: 'var(--gold)' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
        </div>
      </div>

      {/* OBJETIVAS */}
      <section style={{ marginBottom: '3.5rem', paddingTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--gold-border)' }}>
          <span style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>◇</span>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Perguntas Objetivas
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
        </div>
        <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'var(--beige)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          Respostas diretas e precisas para suas dúvidas.
        </p>
        {renderCards(objetivas, 'obj')}
      </section>

      {/* DETALHADAS */}
      <section style={{ paddingTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--gold-border)' }}>
          <span style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>✦</span>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Perguntas Detalhadas
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
        </div>
        <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'var(--beige)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          Respostas aprofundadas com contexto, nuances e orientação completa.
        </p>
        {renderCards(detalhadas, 'det')}
      </section>

      {/* INFO BOX */}
      <div style={{
        background: 'var(--gold-dim)', border: '1px solid var(--gold-border)',
        borderLeft: '3px solid var(--gold)', padding: '1.2rem 1.5rem', marginTop: '3rem',
        fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
        color: 'var(--beige)', fontSize: '0.9rem', lineHeight: 1.7,
      }}>
        ✦ As perguntas podem ser sobre qualquer aspecto da sua vida. Após a compra, você receberá as instruções para enviar suas perguntas e o prazo de resposta.
      </div>
    </div>
  )
}
