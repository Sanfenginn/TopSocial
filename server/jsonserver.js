const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // 您的数据库文件
const middlewares = jsonServer.defaults();

// 使用默认 CORS 配置（允许所有来源）
server.use(cors());

server.use(middlewares);
server.use(router);

server.listen(51002, () => {
  console.log("JSON Server is running");
});
