// Express
const express = require("express");
const app = express();
// Config
const config = require("./config");
// Middlewares
const cors = require("cors");
const bodyParser = require("body-parser");
// Routes
const router = require("./utils/routes");

//-----------------------------------------------------//
//-----------------------------------------------------//

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
router(app);

// Port Listening
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The Port Listening in http://localhost:${config.port}/`);
  }
});
