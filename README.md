# Servicio Recomendación de Donación

## Requerimientos

- Node.js (v20.16). [Descargar](https://nodejs.org/en)
- MySQL Server (Ver 8.0). [Descargar](https://dev.mysql.com/downloads/mysql/)

## Configurar y Ejecutar

Clonar el repositorio y entrar al directorio:

```bash
git clone https://github.com/JiunMHsu/dds-recomendacion-de-donaciones.git
cd dds-recomendacion-de-donaciones
```

Instalar las dependencias:

```bash
npm install
```

Previo a la la ejecución, asegurar que se haya creado una base de datos. Por defecto, la aplicación utiliza el nombre `recomendaciondonaciones`.

Si se quiere utilizar otro nombre o modificar cualquier otra variable de entorno, puede crear un archivo `.env` en la raíz del proyecto, y seguir la nomenclatura detallada en `.env.schema`. Si no se especifica alguna variable, tomará su valor por defecto.

Ejemplo:

```env
PORT=9709

DB_NAME='test'
DB_USER='a'
DB_PASSWORD='12345'
```

Levantar la aplicación en dev mode:

```bash
npm run dev
```

Para ingresar datos de prueba, puede ejecutar la siguiente consulta:

```sql
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
```

## Documentación

Una vez levantada la aplicación, puede consultar la documentación en la ruta `/api-docs`
