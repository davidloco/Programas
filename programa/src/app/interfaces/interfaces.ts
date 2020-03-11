export interface NivelObject {
  nivel: Nivel[];
}

export interface Nivel {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: number;
}