import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API com Autenticação JWT',
      version: '1.0.0',
      description: 'API protegida com middleware de autenticação JWT',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Substitua pelo URL real da API
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Certifique-se de que o caminho esteja correto
};

// Geração da documentação Swagger
const swaggerDocs = swaggerJsdoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
