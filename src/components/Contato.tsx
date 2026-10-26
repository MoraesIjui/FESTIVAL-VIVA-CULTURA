import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle } from 'lucide-react';

type Campos = { nome: string; email: string; mensagem: string };
const camposIniciais: Campos = { nome: '', email: '', mensagem: '' };

export function Contato() {
  const [campos, setCampos] = useState<Campos>(camposIniciais);
  const [erros, setErros] = useState<Partial<Campos>>({});
  const [validado, setValidado] = useState(false);

  function atualizar(campo: keyof Campos, valor: string) {
    setCampos((atual) => ({ ...atual, [campo]: valor }));
    setErros((atual) => ({ ...atual, [campo]: undefined }));
    setValidado(false);
  }

  function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const novosErros: Partial<Campos> = {};
    if (!campos.nome.trim()) novosErros.nome = 'Informe um nome fictício para o teste.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email.trim())) novosErros.email = 'Informe um e-mail válido de teste.';
    if (campos.mensagem.trim().length < 10) novosErros.mensagem = 'Escreva pelo menos 10 caracteres.';
    setErros(novosErros);
    if (Object.keys(novosErros).length === 0) {
      setValidado(true);
      setCampos(camposIniciais);
      // Não há fetch, persistência, envio de e-mail ou coleta de dados.
    } else {
      setValidado(false);
    }
  }

  return (
    <section id="contato" className="section contato" aria-labelledby="contato-titulo">
      <div className="container contato-grid">
        <div className="contato-esquerda"><span className="section-kicker"><span className="kicker-dot"/> FALE COM A GENTE</span><h2 id="contato-titulo" className="titulo-secao">Boas ideias<br />merecem <em>conversa.</em></h2><p>Ficou com alguma dúvida sobre o projeto? Teste o formulário de demonstração ao lado.</p><div className="contato-alternativas"><div><Mail size={20} aria-hidden="true"/><span>Formulário didático, sem envio real</span></div><div><MessageCircle size={20} aria-hidden="true"/><span>Use somente dados fictícios nos testes</span></div></div><span className="contato-decor" aria-hidden="true">✳</span></div>
        <div className="formulario-card"><h3>Deixe sua mensagem <span aria-hidden="true">✳</span></h3><p>Exemplo de formulário com validação local, sem armazenamento.</p>
          <form onSubmit={enviar} noValidate>
            <div className="campo"><label htmlFor="nome">Nome de teste <span aria-hidden="true">*</span></label><input id="nome" name="nome" placeholder="Ex.: Visitante Exemplo" value={campos.nome} onChange={(e) => atualizar('nome', e.target.value)} required aria-required="true" aria-invalid={Boolean(erros.nome)} aria-describedby={erros.nome ? 'nome-erro' : undefined} maxLength={80}/>{erros.nome && <small id="nome-erro" className="campo-erro">{erros.nome}</small>}</div>
            <div className="campo"><label htmlFor="email">E-mail de teste <span aria-hidden="true">*</span></label><input type="email" id="email" name="email" placeholder="exemplo@exemplo.com" value={campos.email} onChange={(e) => atualizar('email', e.target.value)} required aria-required="true" aria-invalid={Boolean(erros.email)} aria-describedby={erros.email ? 'email-erro' : undefined} maxLength={120}/>{erros.email && <small id="email-erro" className="campo-erro">{erros.email}</small>}</div>
            <div className="campo"><label htmlFor="mensagem">Mensagem <span aria-hidden="true">*</span></label><textarea id="mensagem" name="mensagem" placeholder="Escreva uma mensagem de teste..." rows={4} value={campos.mensagem} onChange={(e) => atualizar('mensagem', e.target.value)} required aria-required="true" aria-invalid={Boolean(erros.mensagem)} aria-describedby={erros.mensagem ? 'mensagem-erro' : undefined} maxLength={1000}/>{erros.mensagem && <small id="mensagem-erro" className="campo-erro">{erros.mensagem}</small>}</div>
            <button className="botao botao-escuro form-enviar" type="submit">Validar formulário <ArrowUpRight size={19} aria-hidden="true"/></button>
            <div className="form-status" role="status" aria-live="polite">{validado && <span className="form-sucesso"><CheckCircle2 size={20} aria-hidden="true"/> Campos validados! Nenhuma mensagem foi enviada ou armazenada.</span>}</div>
            <small className="form-rodape">Não informe dados pessoais reais. Esta é uma demonstração acadêmica.</small>
          </form>
        </div>
      </div>
    </section>
  );
}
