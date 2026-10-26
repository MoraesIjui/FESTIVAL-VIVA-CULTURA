export type DiaEvento = 'sabado' | 'domingo';
export type CategoriaProgramacao = 'Música' | 'Artes' | 'Dança' | 'Gastronomia' | 'Oficina';

export interface ItemProgramacao {
  id: string;
  dia: DiaEvento;
  horario: string;
  titulo: string;
  descricao: string;
  local: string;
  categoria: CategoriaProgramacao;
}

export interface Atracao {
  id: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  imagem: string;
  alt: string;
}
