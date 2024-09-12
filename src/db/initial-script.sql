DROP DATABASE IF EXISTS recomendaciondonaciones;
CREATE DATABASE recomendaciondonaciones; 
USE recomendaciondonaciones;

-- CREATE TABLE localidad (
--     id INTEGER NOT NULL AUTO_INCREMENT,
--     nombre VARCHAR(255) NOT NULL, 
--     etiqueta VARCHAR(255) NOT NULL,

--     PRIMARY KEY (id)
-- );  

-- CREATE TABLE provincia (
--     id INTEGER NOT NULL AUTO_INCREMENT,
--     nombre VARCHAR(255) NOT NULL, 
--     etiqueta VARCHAR(255) NOT NULL,

--     PRIMARY KEY (id)
-- );

-- CREATE TABLE puntoDonacion (
--     id VARCHAR(36) NOT NULL,
--     nombre VARCHAR(255) NOT NULL,
--     localidad_id INTEGER NOT NULL,
--     provincia_id INTEGER NOT NULL,
--     calle VARCHAR(255) NOT NULL,
--     altura SMALLINT UNSIGNED NOT NULL,
--     latitud VARCHAR(255) NOT NULL,
--     longitud VARCHAR(255) NOT NULL,

--     PRIMARY KEY (id),
--     FOREIGN KEY (localidad_id) REFERENCES localidad(localidad_id),
--     FOREIGN KEY (provincia_id) REFERENCES provincia(provincia_id)
-- );

-- Insert Values

INSERT INTO recomendaciondonaciones.provincia (nombre, etiqueta)
VALUES 
    ("Ciudad Autonoma de Buenos Aires", "caba"),
    ("Cordoba", "cordoba"),
    ("Santa Fe", "santaFe"),
    ("Mendoza", "mendoza"),
    ("Buenos Aires", "buenosAires");

INSERT INTO recomendaciondonaciones.localidad (nombre, etiqueta)
VALUES 
    ("Almagro", "almagro"),
    ("Palermo", "palermo"),
    ("Recoleta", "recoleta"),
    ("Bajo Flores", "bajoFlores"),
    ("Las Heras", "lasHeras");

INSERT INTO recomendaciondonaciones.punto_donacion (id, nombre, localidad_id, provincia_id, calle, altura, latitud, longitud)
VALUES 
    (uuid(), "punto1", 1, 3, "Aguero", "1281", "5642457675", "2534235235"),
    (uuid(), "punto2", 1, 1, "Av. Cordoba", "4857", "5468968245", "5643212543"),
    (uuid(), "punto3", 3, 1, "San Luis", "2794", "2352341234", "2352341234"),
    (uuid(), "punto4", 4, 1, "Otero", "385", "5643212543", "5468968245"),
    (uuid(), "punto5", 5, 4, "Av. Mendoza", "2345", "2534235235", "5642457675");
