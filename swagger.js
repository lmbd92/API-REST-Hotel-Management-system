const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "routes/user.routes.js",
  "routes/login.routes.js",
  "routes/admin.routes.js",
];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require("./server.js");
});
