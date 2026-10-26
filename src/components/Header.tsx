import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { href: '#inicio', nome: 'Início' },
  { href: '#sobre', nome: 'O festival' },
  { href: '#programacao', nome: 'Programação' },
  { href: '#atracoes', nome: 'Atrações' },
  { href: '#localizacao', nome: 'Localização' },
  { href: '#contato', nome: 'Contato' },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <header className="site-header shadow-sm">
      <div className="topbar"><span>UM ENCONTRO PARA CELEBRAR O QUE NOS UNE</span><span>EVENTO FICTÍCIO • PROJETO ACADÊMICO</span></div>
      <div className="container nav-container">
        <a href="#inicio" className="marca" aria-label="Festival Viva Cultura — ir para o início" onClick={() => setMenuAberto(false)}>
          <span className="marca-simbolo" aria-hidden="true">V<span className="marca-ponto">.</span></span>
          <span className="marca-nome">viva<span>cultura</span><small>FESTIVAL 2026</small></span>
        </a>
        <nav className="nav-desktop" aria-label="Navegação principal">
          {links.map((link) => <a href={link.href} key={link.href}>{link.nome}</a>)}
        </nav>
        <a className="botao botao-nav" href="#programacao">Ver programação <ArrowUpRight size={17} aria-hidden="true" /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuAberto(!menuAberto)} aria-expanded={menuAberto} aria-controls="menu-mobile" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}>
          {menuAberto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <nav id="menu-mobile" className={`nav-mobile ${menuAberto ? 'aberto' : ''}`} aria-label="Navegação móvel" hidden={!menuAberto}>
        {links.map((link) => <a href={link.href} key={link.href} onClick={() => setMenuAberto(false)}>{link.nome}</a>)}
      </nav>
    </header>
  );
}
