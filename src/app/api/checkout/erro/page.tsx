import Link from 'next/link'

export default function ErroPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}>
      <div style={{ fontSize: '3rem' }}>🌑</div>
      <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        Pagamento não concluído
      </h1>
      <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'var(--beige)', fontSize: '1rem', maxWidth: '500px', lineHeight: 1.8 }}>
        Houve um problema com seu pagamento. Tente novamente ou entre em contato.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/metodos" style={{
          fontFamily: 'Cinzel, serif', fontSize: '0.72rem', letterSpacing: '0.18em',
          textTransform: 'uppercase', padding: '0.85rem 1.8rem',
          background: 'var(--gold)', color: '#0A0A0A', textDecoration: 'none', fontWeight: 600,
        }}>
          Tentar Novamente
        </Link>
        <Link href="/contato" style={{
          fontFamily: 'Cinzel, serif', fontSize: '0.72rem', letterSpacing: '0.18em',
          textTransform: 'uppercase', padding: '0.85rem 1.8rem',
          background: 'transparent', color: 'var(--gold)',
          border: '1px solid var(--gold-border)', textDecoration: 'none',
        }}>
          Contato
        </Link>
      </div>
    </div>
  )
}