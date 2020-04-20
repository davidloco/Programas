export interface ProgramaObject {
    programa: Programa[];
}

export interface Programa {
    id: number;
    nombre: string;
    nivel_nombre: string;
    descripcion: null | string;
    prerrequisito: null | string;
    habilidades: null | string;
}