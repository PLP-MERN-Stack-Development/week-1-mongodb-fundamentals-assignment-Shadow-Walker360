module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PLP Bookstore API',
      version: '1.0.0',
      description: 'API for managing bookstore data',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};
