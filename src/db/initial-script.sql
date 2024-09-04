drop database if exists recomendaciondonaciones;
create database recomendaciondonaciones; 
use recomendaciondonaciones;

create table localidad (
    id_localidad INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL, 
    etiqueta VARCHAR(255) NOT NULL,

    PRIMARY KEY (id_localidad)
);  

create table provincia (
    id_provincia INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL, 
    etiqueta VARCHAR(255) NOT NULL,

    PRIMARY KEY (id_provincia)
);

create table puntoDonacion (
    id_puntoDonacion VARCHAR(36) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    id_localidad INTEGER NOT NULL,
    id_provincia INTEGER NOT NULL,
    calle VARCHAR(255) NOT NULL,
    altura SMALLINT UNSIGNED NOT NULL,
    latitud VARCHAR(255) NOT NULL,
    longitud VARCHAR(255) NOT NULL,

    PRIMARY KEY (id_puntoDonacion),
    FOREIGN KEY (id_localidad) REFERENCES localidad(id_localidad),
    FOREIGN KEY (id_provincia) REFERENCES provincia(id_provincia)
);

-- Insert Values

USE recomendaciondonaciones;

INSERT INTO provincia (nombre, etiqueta) 
VALUES 
    ("Ciudad Autonoma de Buenos Aires", "caba"),
    ("Cordoba", "cordoba"),
    ("Santa Fe", "santaFe"),
    ("Mendoza", "mendoza"),
    ("Buenos Aires", "buenosAires");

INSERT INTO localidad (nombre, etiqueta) 
VALUES 
    ("Almagro", "almagro"),
    ("Palermo", "palermo"),
    ("Recoleta", "recoleta"),
    ("Bajo Flores", "bajoFlores"),
    ("Las Heras", "lasHeras");

INSERT INTO puntoDonacion (id_puntoDonacion, nombre, id_localidad, id_provincia, calle, altura, latitud, longitud) 
VALUES 
    (uuid(), "punto1", 1, 3, "Aguero", "1281", "5642457675", "2534235235"),
    (uuid(), "punto2", 1, 1, "Av. Cordoba", "4857", "5468968245", "5643212543"),
    (uuid(), "punto3", 3, 1, "San Luis", "2794", "2352341234", "2352341234"),
    (uuid(), "punto4", 4, 1, "Otero", "385", "5643212543", "5468968245"),
    (uuid(), "punto5", 5, 4, "Av. Mendoza", "2345", "2534235235", "5642457675");

