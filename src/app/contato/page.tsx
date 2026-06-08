export default function ContatoPage() {
  return (
    <div style={{ padding: '2rem clamp(1rem, 5vw, 3.5rem) 5rem', maxWidth: '800px', margin: '0 auto' }}>

      {/* HEADER */}
      <div style={{ padding: '2rem 0 1rem' }}>
        <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>
          ✦ Contato ✦
        </p>
        <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 600, color: 'var(--ivory)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Fale Comigo
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '1rem 0 0', maxWidth: '200px' }}>
          <span style={{ color: 'var(--gold)' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '2rem' }}>

        {/* PLACEHOLDER */}
        <div style={{
          background: 'var(--bg2)', border: '1px dashed var(--gold-border)',
          padding: '2rem', textAlign: 'center',
          color: 'rgba(200,169,107,0.4)', fontFamily: 'Cinzel, serif',
          fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 2,
        }}>
          📱 Adicione suas informações de contato aqui<br/>
          Instagram · WhatsApp · E-mail · Telegram
        </div>

        {/* INSTAGRAM */}
        <div style={{
          background: 'var(--bg2)', border: '1px solid var(--gold-border)',
          padding: '1.6rem 2rem', display: 'flex', alignItems: 'center', gap: '1.5rem',
          transition: 'border-color 0.3s, transform 0.3s',
        }}>
          <span style={{ fontSize: '1.5rem', color: 'var(--gold)', flexShrink: 0, width: '36px', textAlign: 'center' }}>📸</span>
          <div>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>Instagram</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: 'var(--beige)', fontStyle: 'italic' }}>@seu_instagram_aqui</p>
          </div>
        </div>

        {/* WHATSAPP */}
        <div style={{
          background: 'var(--bg2)', border: '1px solid var(--gold-border)',
          padding: '1.6rem 2rem', display: 'flex', alignItems: 'center', gap: '1.5rem',
        }}>
          <span style={{ fontSize: '1.5rem', color: 'var(--gold)', flexShrink: 0, width: '36px', textAlign: 'center' }}>💬</span>
          <div>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>WhatsApp</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: 'var(--beige)', fontStyle: 'italic' }}>Seu número aqui</p>
          </div>
        </div>

        {/* EMAIL */}
        <div style={{
          background: 'var(--bg2)', border: '1px solid var(--gold-border)',
          padding: '1.6rem 2rem', display: 'flex', alignItems: 'center', gap: '1.5rem',
        }}>
          <span style={{ fontSize: '1.5rem', color: 'var(--gold)', flexShrink: 0, width: '36px', textAlign: 'center' }}>✉️</span>
          <div>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>E-mail</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: 'var(--beige)', fontStyle: 'italic' }}>seuemail@aqui.com</p>
          </div>
        </div>

      </div>
    </div>
  )
}
