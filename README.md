# eslint-config-ryanzim

[![npm](https://img.shields.io/npm/v/eslint-config-ryanzim.svg)](https://www.npmjs.com/package/eslint-config-ryanzim)
[![npm](https://img.shields.io/npm/l/eslint-config-ryanzim.svg)](LICENSE)

This is still a WIP. This config will probably get stricter as time goes on.

## Rules

This is not a full listing of all the rules, just the more controversial parts of the config:

- Semicolons required
- 2-spaces indent
- [`curly: multi`](http://eslint.org/docs/rules/curly#multi)
- Commas last
- Include a trailing comma in multiline object literals
- Use single-quotes, unless the string contains the `'` character (Template Literals allowed)
- Use a separate `var` statement for each variable

This config uses the ES6 ESLint parser.

## Licence

ISC
