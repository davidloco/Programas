export interface OfertaObject {
    oferta: Oferta[];
}

export interface Oferta {
    fecha_incio_inscripcion: Date;
    fecha_fin_inscripcion: Date;
    fecha_inicio_periodo: Date;
    fecha_fin_periodo: Date;
    nombre: string;
    descripcion: string;
    hora_inicio: string;
    hora_fin: string;
    departamento: string;
    municipio: string;
    imagen_poster?: string;
    imagen_banner?: string;
}

