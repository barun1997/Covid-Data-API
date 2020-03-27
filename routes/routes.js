const hospitalRoutes = require("./hospitals");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the api-server");
  });
  hospitalRoutes(app, fs);
};

module.exports = appRouter;
