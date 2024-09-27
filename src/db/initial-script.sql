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
