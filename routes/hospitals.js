const hospitalRoutes = (app, fs) => {
  //dataPath for the file
  const dataPath = "./data/hospitalData.json";

  app.get("/hospitals", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = hospitalRoutes;
