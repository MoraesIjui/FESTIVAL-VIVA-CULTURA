import { useState } from 'react';
import { ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { dias, programacao } from '../data/evento';
import type { DiaEvento } from '../types';

export function Programacao() {
  const [dia, setDia] = useState<DiaEvento>('sabado');
  const atividades = programacao.filter((item) => item.dia === dia);
  return (
    <section id="programacao" className="section programacao" aria-labelledby="programacao-titulo">
      <div className="container">
        <div className="section-topo">
          <div><span className="section-kicker"><span className="kicker-dot"/> AGENDA CULTURAL</span><h2 id="programacao-titulo" className="titulo-secao">Dois dias.<br /><em>Mil experiências.</em></h2></div>
          <p className="texto-muted section-intro">Planeje sua visita e encontre a atividade perfeita para viver com amigos e família.</p>
        </div>
        <div className="agenda-toolbar">
          <div className="abas-dias" role="group" aria-label="Selecionar dia da programação">
            {dias.map((item) => <button type="button" key={item.id} aria-pressed={dia === item.id} onClick={() => setDia(item.id)} className={dia === item.id ? 'aba ativa' : 'aba'}><strong>{item.nome}</strong><span>{item.data}</span></button>)}
          </div>
          <span className="agenda-observacao"><Clock3 size={17} aria-hidden="true"/> Horários fictícios, sujeitos a alterações</span>
        </div>
        <div className="agenda-lista" aria-live="polite">
          {atividades.map((atividade) => <article key={atividade.id} className="agenda-item">
            <div className="agenda-horario">{atividade.horario}<span>HRS</span></div>
            <div className="agenda-info"><span className="categoria-chip">{atividade.categoria}</span><h3>{atividade.titulo}</h3><p>{atividade.descricao}</p><span className="agenda-local"><MapPin size={16} aria-hidden="true"/>{atividade.local}</span></div>
            <span className="agenda-decor" aria-hidden="true"><ArrowUpRight size={21}/></span>
          </article>)}
        </div>
        <p className="agenda-nota">* Programação criada exclusivamente para demonstração acadêmica. Não há evento ou inscrição real.</p>
      </div>
    </section>
  );
}
