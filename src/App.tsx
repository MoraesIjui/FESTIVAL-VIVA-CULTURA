import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Programacao } from './components/Programacao';
import { Atracoes } from './components/Atracoes';
import { Localizacao } from './components/Localizacao';
import { Acessibilidade } from './components/Acessibilidade';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
      <Header />
      <main id="conteudo" className="overflow-x-clip">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Localizacao />
        <Acessibilidade />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
