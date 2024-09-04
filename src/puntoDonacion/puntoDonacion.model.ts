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
    latitud: String;
    longitud: String;
    calle: string;
    altura: Number;
}
