# Briefing e rastreabilidade — Atividade 1

**Problema:** uma associação cultural precisa organizar em um só lugar a divulgação de horários, atividades, local e contatos de um festival comunitário.

**Público:** moradores e visitantes, com prioridade para consulta por celular.

**Proposta:** portal público em página única, com conteúdo fictício, responsivo, acessível e fácil de manter.

**Banco de dados:** **não adotado** no MVP; os dados são estáticos em `src/data/evento.ts`. O formulário valida entradas localmente e descarta os dados. Se o festival fosse real, dados de contato exigiriam infraestrutura e cuidados adicionais de privacidade.

## Requisitos mínimos do professor

| Requisito | Implementação | Demonstração |
|---|---|---|
| Nome, data e chamada principal | `Hero.tsx` | Abrir a página |
| Programação por dia ou horário | `Programacao.tsx` | Trocar entre sábado e domingo |
| Seção sobre atrações | `Atracoes.tsx` | Visualizar cartões e imagens |
| Mapa ou indicação do local | `Localizacao.tsx` | Ler localização e abrir Google Maps |
| Formulário visual | `Contato.tsx` | Tentar vazio, e-mail inválido e válido |
| Acessibilidade e informações importantes | `Acessibilidade.tsx` e UI | Tab, foco visível e avisos |
| Redes sociais | `Footer.tsx` | Abrir links externos de exemplo |
| Layout mobile | CSS responsivo e menu móvel | Testar 360px, 390px, 768px, desktop |

## Entregáveis gerais do trabalho

- Briefing: este arquivo.
- Protótipo/wireframe: `docs/wireframe.md`.
- MVP local: código em `src/`.
- Checklist: `docs/testes.md` e `tests/`.
- Cartão técnico: `docs/cartao-tecnico.md`.
- URL pública e testes públicos: **pendentes de publicação**.
- Evidências: `docs/evidencias/` — adicionar prints reais após testes.
- Apresentação: `docs/apresentacao.md`.

## Limitações explícitas

Projeto de estudo, sem inscrições, confirmação de evento, contatos reais, informações de acessibilidade física validadas, cobrança, banco de dados ou envio de e-mail.
