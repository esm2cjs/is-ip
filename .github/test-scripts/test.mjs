import { isIP, isIPv4 } from "@esm2cjs/is-ip";
import assert from "assert";

assert(typeof isIP === "function");
assert(typeof isIPv4 === "function");
