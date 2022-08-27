# @esm2cjs/is-ip

This is a fork of https://github.com/sindresorhus/is-ip, but automatically patched to support ESM **and** CommonJS, unlike the original repository.

## Install

You can use an npm alias to install this package under the original name:

```
npm i is-ip@npm:@esm2cjs/is-ip
```

```jsonc
// package.json
"dependencies": {
    "is-ip": "npm:@esm2cjs/is-ip"
}
```

but `npm` might dedupe this incorrectly when other packages depend on the replaced package. If you can, prefer using the scoped package directly:

```
npm i @esm2cjs/is-ip
```

```jsonc
// package.json
"dependencies": {
    "@esm2cjs/is-ip": "^ver.si.on"
}
```

## Usage

```js
// Using ESM import syntax
import { isIP, isIPv4 } from "@esm2cjs/is-ip";

// Using CommonJS require()
const { isIP, isIPv4 } = require("@esm2cjs/is-ip");
```

For more details, please see the original [repository](https://github.com/sindresorhus/is-ip).

## Sponsoring

To support my efforts in maintaining the ESM/CommonJS hybrid, please sponsor [here](https://github.com/sponsors/AlCalzone).

To support the original author of the module, please sponsor [here](https://github.com/sindresorhus/is-ip).
