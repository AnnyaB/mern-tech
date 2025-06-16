"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _upstash = _interopRequireDefault(require("../config/upstash.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rateLimiter = function rateLimiter(req, res, next) {
  var _ref, success;

  return regeneratorRuntime.async(function rateLimiter$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_upstash["default"].limit("my-rate-limit"));

        case 3:
          _ref = _context.sent;
          success = _ref.success;

          if (success) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(429).json({
            message: "Too many requests, please try again later.",
            retryAfter: _upstash["default"].reset
          }));

        case 7:
          next();
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log("Rate limiter error:", _context.t0);
          next(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var _default = rateLimiter;
exports["default"] = _default;