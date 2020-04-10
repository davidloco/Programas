export interface OfertaObject {
    oferta: Oferta[];
}

export interface Oferta {
    id: number;
    fecha_incio_inscripcion: Date;
    fecha_fin_inscripcion: Date;
    fecha_inicio_periodo: Date;
    fecha_fin_periodo: Date;
    nombre_programa: string;
    descripcion: string;
    nombre_jornada: string;
    hora_inicio: string;
    hora_fin: string;
    nombre_centro: string;
    departamento: string;
    municipio: string;
    nombre_region: string;
    imagen_poster: string;
    imagen_banner: string;
}

