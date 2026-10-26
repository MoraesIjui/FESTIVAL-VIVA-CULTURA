import { ArrowUpRight, Heart, Music2, Palette, Users } from 'lucide-react';
export function Sobre() {
  return (
    <section id="sobre" className="section sobre" aria-labelledby="sobre-titulo">
      <div className="container sobre-grid">
        <div>
          <span className="section-kicker"><span className="kicker-dot"/> SOBRE O FESTIVAL</span>
          <h2 id="sobre-titulo" className="titulo-secao">Nossa cidade.<br /><em>Nossas histórias.</em><br />Nossa cultura.</h2>
          <p className="texto-muted sobre-texto">O Festival Viva Cultura é um projeto acadêmico que imagina um encontro aberto à comunidade, reunindo artistas, tradições, ideias e pessoas em um mesmo espaço.</p>
          <a href="#atracoes" className="link-destaque">Descubra as atrações <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="sobre-lado">
          <div className="sobre-cartao-grande"><span className="sobre-asterisco" aria-hidden="true">✳</span><p>Cultura é tudo aquilo que a gente <em>compartilha.</em></p><span className="sobre-assinatura">VIVA CULTURA / EDIÇÃO 2026</span></div>
          <div className="sobre-beneficios">
            <div><Music2 size={22} aria-hidden="true"/><strong>Música</strong><span>Novos ritmos e talentos.</span></div>
            <div><Palette size={22} aria-hidden="true"/><strong>Arte</strong><span>Criatividade para todos.</span></div>
            <div><Users size={22} aria-hidden="true"/><strong>Comunidade</strong><span>Encontros e histórias.</span></div>
            <div><Heart size={22} aria-hidden="true"/><strong>Conexões</strong><span>Experiências memoráveis.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
