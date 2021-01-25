const express = require("express");
const cors = require("cors");

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});
