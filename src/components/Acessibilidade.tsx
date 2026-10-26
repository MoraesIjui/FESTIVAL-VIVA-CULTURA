import { Accessibility, HeartHandshake, Info, ShieldCheck, Smartphone } from 'lucide-react';

const infos = [
  { Icone: Accessibility, titulo: 'Acessibilidade digital', texto: 'Interface adaptada a celular, navegação por teclado e descrições de imagens.' },
  { Icone: HeartHandshake, titulo: 'Espaço para todos', texto: 'Em um evento real, consulte com a organização os recursos presenciais disponíveis.' },
  { Icone: Smartphone, titulo: 'Consulte pelo celular', texto: 'Programação, atrações e localização no mesmo lugar, em qualquer tamanho de tela.' },
  { Icone: ShieldCheck, titulo: 'Seus dados protegidos', texto: 'O formulário apenas valida os campos; nenhuma informação é enviada ou armazenada.' },
];

export function Acessibilidade() {
  return (
    <section id="acessibilidade" className="section infos" aria-labelledby="infos-titulo">
      <div className="container">
        <div className="section-topo"><div><span className="section-kicker"><span className="kicker-dot"/> INFORMAÇÕES IMPORTANTES</span><h2 id="infos-titulo" className="titulo-secao">Um festival pensado<br /><em>para acolher.</em></h2></div><p className="texto-muted section-intro">Acesso simples à informação é parte da experiência. Confira o que você precisa saber.</p></div>
        <div className="infos-grid">{infos.map(({ Icone, titulo, texto }) => <article className="info-card" key={titulo}><span className="info-icon"><Icone size={25} aria-hidden="true"/></span><h3>{titulo}</h3><p>{texto}</p></article>)}</div>
        <div className="aviso-academico"><Info size={20} aria-hidden="true"/><p><strong>Aviso:</strong> o Festival Viva Cultura é fictício e foi criado para fins de aprendizagem. Datas, atrações e atividades são exemplos; informações de acessibilidade física precisariam ser verificadas em um evento real.</p></div>
      </div>
    </section>
  );
}
