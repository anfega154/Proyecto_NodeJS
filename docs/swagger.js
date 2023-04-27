const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition={
    openapi: '3.0.0',
    info: {
      title: 'Api-node',
      version: '1.0.0',
    },
    servers:[
{
    url:"http://localhost:3004/api",
},
{
    url:"http://localhost:3000/api",
}
    ]
}
const options ={
    swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]
}

const openApiConfiguration= swaggerJsdoc(options);

module.exports=openApiConfiguration;