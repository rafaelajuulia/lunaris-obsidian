import Link from 'next/link'

export default function SucessoPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}>
      <div style={{ fontSize: '3rem' }}>✨</div>
      <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        Pagamento Confirmado!
      </h1>
      <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'var(--beige)', fontSize: '1rem', maxWidth: '500px', lineHeight: 1.8 }}>
        Seu pedido foi recebido com sucesso. Em breve você receberá as instruções para enviar suas perguntas.
      </p>
      <div style={{ width: '100%', maxWidth: '400px', height: '1px', background: 'var(--gold-border)' }} />
      <Link href="/" style={{
        fontFamily: 'Cinzel, serif', fontSize: '0.72rem', letterSpacing: '0.18em',
        textTransform: 'uppercase', padding: '0.85rem 1.8rem',
        background: 'var(--gold)', color: '#0A0A0A', textDecoration: 'none',
        fontWeight: 600,
      }}>
        Voltar ao Início
      </Link>
    </div>
  )
}