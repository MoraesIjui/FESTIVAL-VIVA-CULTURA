import { ArrowUpRight, MapPin, Navigation, Ticket, TrainFront } from 'lucide-react';
import { evento } from '../data/evento';

export function Localizacao() {
  return (
    <section id="localizacao" className="section localizacao" aria-labelledby="localizacao-titulo">
      <div className="container local-grid">
        <div className="local-info">
          <span className="section-kicker kicker-claro"><span className="kicker-dot"/> ONDE ACONTECE</span>
          <h2 id="localizacao-titulo" className="titulo-secao titulo-claro">O melhor lugar<br />é <em>estar junto.</em></h2>
          <p>Para esta simulação, escolhemos a Praça da República, em Ijuí (RS), como local ilustrativo do festival.</p>
          <div className="endereco-bloco"><MapPin size={22} aria-hidden="true"/><div><strong>{evento.local}</strong><span>{evento.cidade} — Rio Grande do Sul</span><small>Local hipotético; evento não confirmado.</small></div></div>
          <a href={evento.mapaUrl} className="botao botao-amarelo" target="_blank" rel="noopener noreferrer">Consultar no Google Maps <ArrowUpRight size={19} aria-hidden="true"/></a>
          <div className="local-beneficios"><div><Navigation size={20} aria-hidden="true"/><span>Consulte o trajeto antes de sair</span></div><div><Ticket size={20} aria-hidden="true"/><span>Sem venda de ingressos</span></div><div><TrainFront size={20} aria-hidden="true"/><span>Priorize transporte acessível</span></div></div>
        </div>
        <div className="mapa-card" aria-label="Ilustração de mapa sem geolocalização precisa. Utilize o link Google Maps para ver a praça.">
          <img src="/imagens/mapa-ilustrativo.svg" alt="Mapa ilustrativo estilizado com ruas, área verde e marcador do festival" loading="lazy" width="680" height="590" />
          <div className="mapa-legenda"><span className="mapa-pin"><MapPin size={20} aria-hidden="true"/></span><div><strong>Praça da República</strong><span>Ponto ilustrativo • Ijuí/RS</span></div></div>
        </div>
      </div>
    </section>
  );
}
