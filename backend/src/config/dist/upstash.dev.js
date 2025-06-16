"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ratelimit = require("@upstash/ratelimit");

var _redis = require("@upstash/redis");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); //create a ratelimiter that allows 100 requests per minute


var ratelimit = new _ratelimit.Ratelimit({
  redis: _redis.Redis.fromEnv(),
  limiter: _ratelimit.Ratelimit.slidingWindow(100, "60 s")
});
var _default = ratelimit;
exports["default"] = _default;