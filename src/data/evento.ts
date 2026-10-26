import type { Atracao, DiaEvento, ItemProgramacao } from '../types';

/**
 * Todos os detalhes abaixo são fictícios para apresentação acadêmica.
 * A praça existe; a realização do evento nela NÃO está confirmada.
 */
export const evento = {
  nome: 'Festival Viva Cultura',
  ano: 2026,
  dataCompleta: '14 e 15 de novembro de 2026',
  local: 'Praça da República',
  cidade: 'Ijuí',
  uf: 'RS',
  entrada: 'Entrada gratuita',
  aviso: 'Projeto acadêmico: evento e programação fictícios.',
  mapaUrl: 'https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+da+Rep%C3%BAblica+Iju%C3%AD+RS',
};

export const dias: { id: DiaEvento; nome: string; data: string }[] = [
  { id: 'sabado', nome: 'Sábado', data: '14 de novembro' },
  { id: 'domingo', nome: 'Domingo', data: '15 de novembro' },
];

export const programacao: ItemProgramacao[] = [
  { id: 's1', dia: 'sabado', horario: '10:00', titulo: 'Abertura do festival', descricao: 'Boas-vindas e apresentação da programação.', local: 'Palco principal', categoria: 'Artes' },
  { id: 's2', dia: 'sabado', horario: '11:30', titulo: 'Oficina de arte coletiva', descricao: 'Pintura, cores e criatividade para todas as idades.', local: 'Espaço criativo', categoria: 'Oficina' },
  { id: 's3', dia: 'sabado', horario: '14:00', titulo: 'Sabores da nossa terra', descricao: 'Encontro demonstrativo sobre culinária regional.', local: 'Praça gastronômica', categoria: 'Gastronomia' },
  { id: 's4', dia: 'sabado', horario: '17:00', titulo: 'Vozes da cidade', descricao: 'Apresentações musicais de artistas da comunidade.', local: 'Palco principal', categoria: 'Música' },
  { id: 'd1', dia: 'domingo', horario: '10:00', titulo: 'Café com cultura', descricao: 'Roda de conversa sobre tradições e memória local.', local: 'Espaço comunitário', categoria: 'Artes' },
  { id: 'd2', dia: 'domingo', horario: '13:30', titulo: 'Movimento e expressão', descricao: 'Oficina aberta com ritmos e dança.', local: 'Espaço criativo', categoria: 'Dança' },
  { id: 'd3', dia: 'domingo', horario: '15:00', titulo: 'Feira de artistas', descricao: 'Mostra ilustrativa de trabalhos e técnicas artesanais.', local: 'Alameda cultural', categoria: 'Artes' },
  { id: 'd4', dia: 'domingo', horario: '18:00', titulo: 'Show de encerramento', descricao: 'Música para fechar dois dias de celebração.', local: 'Palco principal', categoria: 'Música' },
];

export const atracoes: Atracao[] = [
  { id: 'a1', titulo: 'Música que aproxima', subtitulo: 'Artistas locais e sons de muitos estilos.', categoria: 'MÚSICA', imagem: `${import.meta.env.BASE_URL}imagens/musica.svg`, alt: 'Ilustração de violão e notas musicais em tons terrosos' },
  { id: 'a2', titulo: 'Arte em movimento', subtitulo: 'Dança, expressões e oficinas criativas.', categoria: 'ARTE & DANÇA', imagem: `${import.meta.env.BASE_URL}imagens/arte.svg`, alt: 'Ilustração abstrata colorida de dança e formas artísticas' },
  { id: 'a3', titulo: 'Sabores e encontros', subtitulo: 'Uma celebração da nossa gastronomia.', categoria: 'GASTRONOMIA', imagem: `${import.meta.env.BASE_URL}imagens/sabores.svg`, alt: 'Ilustração colorida de alimentos, prato e flores' },
];
