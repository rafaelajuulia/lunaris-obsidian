export default function SobrePage() {
  return (
    <div style={{ padding: '2rem clamp(1rem, 5vw, 3.5rem) 5rem', maxWidth: '900px', margin: '0 auto' }}>

      {/* HEADER */}
      <div style={{ padding: '2rem 0 1rem' }}>
        <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>
          ✦ Sobre Mim ✦
        </p>
        <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 600, color: 'var(--ivory)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Quem sou eu
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '1rem 0 0', maxWidth: '200px' }}>
          <span style={{ color: 'var(--gold)' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>

        {/* FOTO */}
        <div style={{
          background: 'var(--bg2)', border: '1px dashed var(--gold-border)',
          padding: '3rem', textAlign: 'center',
          color: 'rgba(200,169,107,0.4)', fontFamily: 'Cinzel, serif',
          fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: 2,
        }}>
          📷 Adicione sua foto aqui
        </div>

        {/* TEXTO */}
        <div style={{
          background: 'var(--bg2)', border: '1px dashed var(--gold-border)',
          padding: '3rem', textAlign: 'center',
          color: 'rgba(200,169,107,0.4)', fontFamily: 'Cinzel, serif',
          fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: 2,
        }}>
          ✍️ Adicione seu texto aqui<br/>
          Conte sua história e jornada com a cartomancia
        </div>

        {/* INFO BOX */}
        <div style={{
          background: 'var(--gold-dim)', border: '1px solid var(--gold-border)',
          borderLeft: '3px solid var(--gold)', padding: '1.2rem 1.5rem',
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          color: 'var(--beige)', fontSize: '0.9rem', lineHeight: 1.7,
        }}>
          ✦ Este espaço está reservado para você adicionar informações sobre seu trabalho, sua experiência com a cartomancia e tudo que quiser compartilhar com seus clientes.
        </div>
      </div>
    </div>
  )
}