// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const compression = require("compression");

// const { version, author } = require("../../package.json");

// const app = express();

// app.use(helmet());
// app.use(cors());
// app.use(compression());

// app.get("/", (req, res) => {
//   res.setHeader("Cache-Control", "no-cache");
//   res.status(200).json({
//     status: "Ok",
//     author,
//     version,
//   });
// });

// app.get("/err", (req, res, next) => {
//   res.setHeader("Cache-Control", "no-cache");
//   next(new Error("Internal server Error"));
// });

// // --- NOT FOUND Middleware
// app.use((req, res) => {
//   res.status(404).json("not found");
// });

// // --- ERROR Middleware
// app.use((err, req, res) => {
//   if (err.status > 499) logger.error({ err }, `Error processing request`);

//   logger.error({ err }, "Error processing request");
//   res.status(500).json({
//     status: "error",
//     error: { message: err.message, code: err.status },
//   });
// });

// module.exports = app;
