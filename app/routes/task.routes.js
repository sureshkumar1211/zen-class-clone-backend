const { authJwt } = require("../middleware");
const controller = require("../controllers/task.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/task/bulk", controller.createTasks);
  app.get("/api/task/all", controller.getAllTasks);
};
