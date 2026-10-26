import { ArrowUpRight, Facebook, Instagram, Youtube } from 'lucide-react';
const sociais = [
  { label: 'Instagram (exemplo)', href: 'https://www.instagram.com/', Icone: Instagram },
  { label: 'Facebook (exemplo)', href: 'https://www.facebook.com/', Icone: Facebook },
  { label: 'YouTube (exemplo)', href: 'https://www.youtube.com/', Icone: Youtube },
];
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-principal"><div><a href="#inicio" className="footer-logo" aria-label="Voltar ao início">viva<span>cultura</span><span className="footer-logo-ponto">.</span></a><p>Cultura que aproxima. Histórias que ficam.<br />Projeto acadêmico de evento fictício.</p></div><div className="footer-nav"><strong>EXPLORE</strong><a href="#programacao">Programação</a><a href="#atracoes">Atrações</a><a href="#localizacao">Localização</a><a href="#acessibilidade">Acessibilidade</a><a href="#contato">Contato</a></div><div className="footer-social"><strong>REDES SOCIAIS (EXEMPLOS)</strong><div className="social-links">{sociais.map(({ label, href, Icone }) => <a href={href} key={label} aria-label={label} title={label} target="_blank" rel="noopener noreferrer"><Icone size={21} aria-hidden="true"/></a>)}</div><span>Os links levam às páginas gerais das plataformas, não a perfis do festival.</span></div></div>
        <div className="footer-final"><span>© 2026 FESTIVAL VIVA CULTURA • PROJETO ACADÊMICO</span><a href="#inicio">Voltar ao topo <ArrowUpRight size={16} aria-hidden="true"/></a></div>
      </div>
    </footer>
  );
}
