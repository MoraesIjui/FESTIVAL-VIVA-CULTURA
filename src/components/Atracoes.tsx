import { ArrowUpRight } from 'lucide-react';
import { atracoes } from '../data/evento';
export function Atracoes() {
  return (
    <section id="atracoes" className="section atracoes" aria-labelledby="atracoes-titulo">
      <div className="container">
        <div className="section-topo atracoes-topo"><div><span className="section-kicker"><span className="kicker-dot"/> VIVA CADA MOMENTO</span><h2 id="atracoes-titulo" className="titulo-secao">Tem lugar para <em>todo mundo.</em></h2></div><p className="texto-muted section-intro">Um festival feito de encontros, novas descobertas e espaço para todas as expressões.</p></div>
        <div className="atracoes-grid">
          {atracoes.map((atracao, index) => <article className="atracao-card" key={atracao.id}>
            <div className={`atracao-foto atracao-foto-${index}`}><img src={atracao.imagem} alt={atracao.alt} loading="lazy" width="540" height="430"/><span className="atracao-numero">0{index+1} / 03</span></div>
            <div className="atracao-detalhes"><span className="atracao-categoria">{atracao.categoria}</span><h3>{atracao.titulo}</h3><p>{atracao.subtitulo}</p><a href="#programacao" aria-label={`Ver horários: ${atracao.titulo}`} className="atracao-seta"><ArrowUpRight size={20} aria-hidden="true"/></a></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
