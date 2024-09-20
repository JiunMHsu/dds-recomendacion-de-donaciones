# Servicio Recomendación de Donación

## Descipción

La ONG a cargo del sistema quiere extender la posibilidad de donaciones a otras comunidades existentes. Para ello se requiere generar un servicio que dada una ubicación geográfica, propone los lugares dónde podés acercar donaciones.

## Endpoints

```endpoint
   GET /api/puntodonacion/{id}
   GET /api/puntodonacion?provincia={}&localidad={}
```

## Response Schema

```json
[
   {
      "id": "string",
      "nombre": "string",
      "calle": "string",
      "altura": "number",
      "latitud": "string",
      "longitud": "string",
      "provincia": {
         "id": "number",
         "nombre": "string",
         "etiqueta": "string"
      },
      "localidad": {
         "id": "number",
         "nombre": "string",
         "etiqueta": "string"
      }
   },
   // ...
]
```

```json
[
    {
        "id": "3a7502ae-7185-11ef-98ce-3c7c3f266695",
        "nombre": "punto2",
        "calle": "Av. Cordoba",
        "altura": 4857,
        "latitud": "5468968245",
        "longitud": "5643212543",
        "provincia": {
            "id": 1,
            "nombre": "Ciudad Autonoma de Buenos Aires",
            "etiqueta": "caba"
        },
        "localidad": {
            "id": 1,
            "nombre": "Almagro",
            "etiqueta": "almagro"
        }
    }
]
```
