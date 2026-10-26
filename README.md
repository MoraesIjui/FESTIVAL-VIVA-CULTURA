# Festival Viva Cultura — Atividade 1 do Prof. Marcial

Portal responsivo **fictício** de evento cultural da comunidade, desenvolvido como atividade do curso Técnico em Desenvolvimento de Sistemas.

> **Aviso:** não existe festival confirmado, venda de ingressos ou inscrição real. A data (14–15/11/2026), o local sugerido (Praça da República — Ijuí/RS), a programação e as atrações são conteúdos *ilustrativos*.

## Tecnologias

- React + TypeScript
- Vite 7
- Tailwind CSS 4 integrado ao Vite (com CSS personalizado para o projeto)
- Lucide React para ícones
- GitHub Pages + GitHub Actions para hospedagem e publicação automática
- Sem backend e sem banco de dados nesta versão

## Pré-requisitos

- **Node.js 22.12+** (ou versão compatível com a versão do Vite)
- npm
- VS Code (recomendado)

## Prévia sem instalar dependências

Abra o arquivo `PREVIA_VISUAL.html` diretamente no navegador. Ele é uma **maquete HTML/JS separada**, com visual semelhante e interações exemplificadas, para conferir a proposta antes de instalar dependências. **O aplicativo principal é o React em `src/`**, e os testes feitos na maquete não substituem testes do React.

## Como executar (Windows / Linux / macOS)

Abra a pasta do projeto no VS Code. No terminal:

```bash
npm install
npm run dev
```

Copie o endereço **Local** exibido pelo Vite para o navegador (em geral `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

A pasta de saída é `dist/`. Com as dependências instaladas, utilize `npm run typecheck` para verificar TypeScript.

Testes estáticos da estrutura podem ser executados sem dependências externas:

```bash
npm test
```

## Funcionalidades

1. Início: nome, data, chamada e informações rápidas.
2. Menu responsivo para celular.
3. Sobre: objetivo cultural e público-alvo.
4. Programação: alternância por sábado/domingo com horários e locais fictícios.
5. Atrações: cartões com ilustrações SVG locais e descrições.
6. Localização: indicação de praça existente em Ijuí e mapa **ilustrativo**; link para consulta do local no Google Maps.
7. Acessibilidade e orientações importantes.
8. Contato: validação de nome, e-mail e mensagem **somente no navegador**, sem envio ou armazenamento de dados.
9. Rodapé com exemplos de links de redes sociais (páginas gerais, não perfis do evento).

## Organização do código

```text
public/
  favicon.svg
  imagens/                  # Ilustrações SVG criadas para o projeto
src/
  components/               # Componentes das seções
  data/evento.ts            # Conteúdo fictício (editar aqui)
  types/index.ts            # Tipos TypeScript
  App.tsx                   # Composição das seções
  index.css                 # Tailwind + estilos da identidade visual
  main.tsx                  # Entrada React
docs/
  briefing.md               # Objetivos e requisitos do professor
  testes.md                 # Procedimentos e status de testes
  cartao-tecnico.md         # Informação técnica da publicação
  apresentacao.md           # Roteiro de apresentação
  evidencias/               # Capturas a serem adicionadas
tests/
  estrutura.test.mjs        # Testes automatizados estáticos
```

## Publicação no GitHub Pages

**Repositório:** https://github.com/MoraesIjui/FESTIVAL-VIVA-CULTURA

**Endereço previsto:** https://moraesijui.github.io/FESTIVAL-VIVA-CULTURA/

1. No GitHub, abra o repositório em **Settings > Pages**.
2. Em **Build and deployment > Source**, escolha **GitHub Actions**.
3. O workflow `.github/workflows/deploy-pages.yml` executa automaticamente após cada push na branch `main`: instala dependências, executa `npm test`, faz `npm run build` e envia `dist/` para o Pages.
4. Em **Actions**, confira se `Publicar Festival Viva Cultura (GitHub Pages)` concluiu com sucesso. Se precisar, execute-o manualmente com **Run workflow**.
5. Visite o endereço previsto e confirme a abertura de imagens, fontes, formulário, links e HTTPS em desktop e celular. Registre resultados reais em `docs/testes.md`.

O `vite.config.ts` define `base: '/FESTIVAL-VIVA-CULTURA/'`; os caminhos de arquivos estáticos utilizam `import.meta.env.BASE_URL` ou `%BASE_URL%`, evitando erros de caminho em projetos GitHub Pages.

**Atenção:** o link só estará acessível após o Pages estar habilitado e o workflow terminar com sucesso. Não há banco de dados nem serviço para guardar mensagens; o formulário é demonstrativo.

## Privacidade e acessibilidade

- Formulário com `preventDefault()`: nenhuma requisição de rede nem persistência.
- Para testes, não digitar informações pessoais reais.
- Não há contas, autenticação, credenciais de API ou segredos de infraestrutura.
- HTML semântico, textos alternativos em imagens informativas, links identificados, foco visível, operação por teclado e suporte a `prefers-reduced-motion`.
- A acessibilidade **presencial** do local não foi verificada — não há promessas sobre recursos físicos do evento.

## Origem do conteúdo

Ilustrações e textos do portal foram produzidos para esta atividade. Marca e atrações são fictícias. Os links externos para Google Maps, Instagram, Facebook e YouTube são referências gerais e não representam contas do festival.

## Situação do projeto

**Primeira implementação:** código de interface criado, conteúdo definido e verificação estática parcial realizada. É preciso instalar as dependências, executar a aplicação e realizar os testes manuais e a publicação, registrando os resultados no checklist.
