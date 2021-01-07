const business = require("../routes/business");

const router = (server) => {
  server.use("/api/business", business);
};

module.exports = router;
