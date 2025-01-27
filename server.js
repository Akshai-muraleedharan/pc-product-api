const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4001; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log("server working on port: ", port);
});