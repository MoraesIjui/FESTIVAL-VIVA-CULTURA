import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Ticket } from 'lucide-react';
import { evento } from '../data/evento';

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="container hero-grid">
        <div className="hero-conteudo">
          <div className="hero-eyebrow"><span className="eyebrow-traco" />14 — 15 NOVEMBRO • IJUÍ / RS</div>
          <h1 id="hero-titulo">Onde a <em>cultura</em><br />encontra <span>você<span className="asterisco">✳</span></span></h1>
          <p>Dois dias para descobrir novos sons, viver a arte e celebrar o que faz nossa comunidade única.</p>
          <div className="hero-acoes">
            <a href="#programacao" className="botao botao-amarelo">Explorar programação <ArrowUpRight size={19} aria-hidden="true" /></a>
            <a href="#sobre" className="hero-link">Conheça o festival <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-rodape"><span className="mini-estrela" aria-hidden="true">✳</span> ARTE PARA TODOS. ENTRADA GRATUITA.</div>
        </div>
        <div className="hero-arte">
          <img src={`${import.meta.env.BASE_URL}imagens/hero-festival.svg`} alt="" aria-hidden="true" width="650" height="650" />
          <div className="hero-arte-etiqueta"><span>VIVA</span><strong>A NOSSA CULTURA</strong><span>2026</span></div>
        </div>
      </div>
      <div className="hero-faixa">
        <div className="container hero-faixa-grid">
          <div><CalendarDays size={23} aria-hidden="true"/><span><strong>{evento.dataCompleta}</strong><small>SÁBADO E DOMINGO</small></span></div>
          <div><MapPin size={23} aria-hidden="true"/><span><strong>{evento.local}</strong><small>{evento.cidade} / {evento.uf} — LOCAL SUGERIDO</small></span></div>
          <div><Ticket size={24} aria-hidden="true"/><span><strong>{evento.entrada}</strong><small>EVENTO FICTÍCIO / DEMONSTRAÇÃO</small></span></div>
        </div>
      </div>
    </section>
  );
}
