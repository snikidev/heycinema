require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.get("/api", (req, res) => {
  const title = req.query.t;

  if (title)
    axios
      .get(`${process.env.URL}${process.env.REACT_APP_APIKEY}&t=${title}`)
      .then(function (response) {
        res.status(response.status).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res
          .status(error.response.status)
          .send({ Error: "Something went wrong. Please, try again." });
      });
});

app.listen(app.get("port"), () => {
  console.log(`🚀 Server is running at http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
