# Servicio Recomendación de Donación

## Descipción

La ONG a cargo del sistema quiere extender la posibilidad de donaciones a otras comunidades existentes. Para ello se requiere generar un servicio que dada una ubicación geográfica, propone los lugares dónde podés acercar donaciones.

## Endpoints

```endpoint
   GET /api/api/lsksjdha/{provinvia}
   GET /api/api/lsksjdha/{provinvia}/{barrioOLocalidad}
```

## Response Schema

```json
   {
      "puntosRecomedados": [
         {
            "nombre": string,
            "localidad": string,
            "provincia": string,
            "calle": string,
            "altura": number
         },
         {}
      ]
   }
```
