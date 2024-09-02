export interface Provincia {
    nombre: string;
    etiqueta: string;
}

export interface Localidad {
    nombre: string;
    provincia: Provincia;
    etiqueta: string;
}

export interface PuntoDonacion {
    nombre: string;
    localidad: Localidad;
    latitud: Number;
    longitud: Number;
    calle: string;
    altura: Number;
}
