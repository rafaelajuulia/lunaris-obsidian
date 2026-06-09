import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      background: 'var(--bg2)',
      borderTop: '1px solid var(--gold-border)',
      padding: '2.5rem clamp(1.5rem, 6vw, 4rem)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
    }}>

      {/* LUA + DECORAÇÃO */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>

        {/* DECORAÇÃO ESQUERDA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
            <line x1="0" y1="15" x2="60" y2="15" stroke="rgba(200,169,107,0.4)" strokeWidth="0.8"/>
            <line x1="55" y1="8" x2="55" y2="22" stroke="rgba(200,169,107,0.4)" strokeWidth="0.8"/>
            <circle cx="65" cy="15" r="1.5" fill="rgba(200,169,107,0.7)"/>
            <path d="M72 10 L74 15 L72 20 L70 15 Z" fill="rgba(200,169,107,0.6)"/>
            <circle cx="4" cy="15" r="1" fill="rgba(200,169,107,0.5)"/>
            <circle cx="30" cy="9" r="1" fill="rgba(200,169,107,0.4)"/>
            <circle cx="45" cy="21" r="0.8" fill="rgba(200,169,107,0.4)"/>
          </svg>
          {/* ESTRELA */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
              fill="rgba(200,169,107,0.7)"/>
          </svg>
        </div>

        {/* LUA */}
        <Image
          src="/lua-footer.webp"
          alt="Lua Lunaris Obsidian"
          width={160}
          height={160}
          style={{ objectFit: 'contain', opacity: 0.92 }}
        />

        {/* DECORAÇÃO DIREITA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          {/* ESTRELA */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
              fill="rgba(200,169,107,0.7)"/>
          </svg>
          <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
            <line x1="20" y1="15" x2="80" y2="15" stroke="rgba(200,169,107,0.4)" strokeWidth="0.8"/>
            <line x1="25" y1="8" x2="25" y2="22" stroke="rgba(200,169,107,0.4)" strokeWidth="0.8"/>
            <circle cx="15" cy="15" r="1.5" fill="rgba(200,169,107,0.7)"/>
            <path d="M8 10 L10 15 L8 20 L6 15 Z" fill="rgba(200,169,107,0.6)"/>
            <circle cx="76" cy="15" r="1" fill="rgba(200,169,107,0.5)"/>
            <circle cx="50" cy="9" r="1" fill="rgba(200,169,107,0.4)"/>
            <circle cx="35" cy="21" r="0.8" fill="rgba(200,169,107,0.4)"/>
          </svg>
        </div>

      </div>

      {/* DIVISOR */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.8rem',
        width: '100%', 
      }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
        <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>✦</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
      </div>

      {/* TEXTOS */}
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.8rem',
      }}>
        <p style={{
          fontFamily: 'Cinzel, serif', fontSize: '0.62rem',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--gold-light)',
        }}>
          © 2026 Lunaris Obsidian — Este site contém todos os direitos reservados
        </p>
        <p style={{
          fontFamily: 'Cinzel, serif', fontSize: '0.62rem',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--gold-light)',
        }}>
          Desenvolvido por Rafaela Júlia
        </p>
      </div>

    </footer>
  )
}