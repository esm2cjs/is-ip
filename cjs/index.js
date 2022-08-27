var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var esm_exports = {};
__export(esm_exports, {
  ipVersion: () => ipVersion,
  isIP: () => isIP,
  isIPv4: () => isIPv4,
  isIPv6: () => isIPv6
});
module.exports = __toCommonJS(esm_exports);
var import_ip_regex = __toESM(require("@esm2cjs/ip-regex"));
function isIP(string) {
  return (0, import_ip_regex.default)({ exact: true }).test(string);
}
function isIPv6(string) {
  return import_ip_regex.default.v6({ exact: true }).test(string);
}
function isIPv4(string) {
  return import_ip_regex.default.v4({ exact: true }).test(string);
}
function ipVersion(string) {
  return isIP(string) ? isIPv6(string) ? 6 : 4 : void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ipVersion,
  isIP,
  isIPv4,
  isIPv6
});
//# sourceMappingURL=index.js.map
