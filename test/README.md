# Tests

Esta carpeta contiene tests de integración escritos con Vitest y Supertest.

Ejecutar:

```bash
npm test
```

Notas:

- Los tests usan la app exportada en `src/app.ts` y los servicios están basados en los archivos `src/mock/`.
- Si faltan dependencias de tipos, instale `@types/supertest` con su gestor de paquetes.
