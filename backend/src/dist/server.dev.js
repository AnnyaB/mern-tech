"use strict";

var _express = _interopRequireDefault(require("express"));

var _notesRoutes = _interopRequireDefault(require("./routes/notesRoutes.js"));

var _db = require("./config/db.js");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _rateLimiter = _interopRequireDefault(require("./middleware/rateLimiter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); //const express = require("express");


var app = (0, _express["default"])();
var PORT = process.env.PORT || 5001;
app.use(_express["default"].json()); // This middleware will parse JSON bodies: req.body

app.use(_rateLimiter["default"]); //our simple custom middleware 

/*app.use((req, res, next) => {
    console.log(`Req method is  ${req.method} & Req URL is ${req.url}`);
    next();
}
);*/

app.use("/api/notes", _notesRoutes["default"]);
(0, _db.connectDB)().then(function () {
  app.listen(PORT, function () {
    console.log("Server started on PORT", PORT);
  });
});