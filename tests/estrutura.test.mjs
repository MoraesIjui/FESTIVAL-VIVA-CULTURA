import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const raiz = new URL('../', import.meta.url).pathname;
const ler = (arquivo) => readFileSync(join(raiz, arquivo), 'utf8');

test('componentes de todas as seções estão presentes', () => {
  for (const nome of ['Header', 'Hero', 'Sobre', 'Programacao', 'Atracoes', 'Localizacao', 'Acessibilidade', 'Contato', 'Footer']) {
    assert.ok(existsSync(join(raiz, `src/components/${nome}.tsx`)), `Faltou ${nome}`);
  }
});

test('todas as âncoras de navegação apontam para seções existentes', () => {
  const conteudos = ['src/components/Hero.tsx','src/components/Sobre.tsx','src/components/Programacao.tsx','src/components/Atracoes.tsx','src/components/Localizacao.tsx','src/components/Acessibilidade.tsx','src/components/Contato.tsx'].map(ler).join('\n');
  const links = ['src/components/Header.tsx', 'src/components/Footer.tsx'].map(ler).join('\n');
  for (const ancora of [...links.matchAll(/href:\s*'(#\w+)'|href="(#\w+)"/g)].map((x) => x[1] || x[2])) {
    assert.match(conteudos, new RegExp(`id="${ancora.substring(1)}"`), `Âncora não encontrada: ${ancora}`);
  }
});

test('imagens ilustrativas existem localmente', () => {
  for (const arquivo of ['hero-festival.svg', 'musica.svg', 'arte.svg', 'sabores.svg', 'mapa-ilustrativo.svg']) {
    const conteudo = ler(`public/imagens/${arquivo}`);
    assert.match(conteudo, /<svg\b/);
    assert.match(conteudo, /<\/svg>/);
  }
});

test('formulário é explicitamente local e não envia ou persiste dados', () => {
  const contato = ler('src/components/Contato.tsx');
  assert.match(contato, /event\.preventDefault\(\)/);
  assert.doesNotMatch(contato, /\bfetch\s*\(|\blocalStorage\b|\bsessionStorage\b|\baxios\b/);
  assert.match(contato, /Nenhuma mensagem foi enviada ou armazenada/);
});

test('avisos acadêmicos e documentação de entrega existem', () => {
  const dados = ler('src/data/evento.ts');
  assert.match(dados, /evento e programação fictícios/i);
  for (const arquivo of ['docs/briefing.md','docs/wireframe.md','docs/cartao-tecnico.md','docs/testes.md','docs/apresentacao.md']) {
    assert.ok(existsSync(join(raiz, arquivo)));
  }
});
