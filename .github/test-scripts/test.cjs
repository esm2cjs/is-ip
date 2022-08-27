const { isIP, isIPv4 } = require("@esm2cjs/is-ip");
const assert = require("assert");

assert(typeof isIP === "function");
assert(typeof isIPv4 === "function");
