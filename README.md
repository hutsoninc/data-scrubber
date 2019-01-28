# data-scrubber

[![Build Status](https://travis-ci.com/hutsoninc/data-scrubber.svg?branch=master)](https://travis-ci.com/hutsoninc/data-scrubber) [![Current npm package version](https://img.shields.io/npm/v/@hutsoninc/data-scrubber.svg)](https://www.npmjs.com/package/@hutsoninc/data-scrubber) 

Data validation and formatting utilities used by Hutson marketing team.

## Usage

`npm install @hutsoninc/data-scrubber`

```js
const {
    validatePhone,
    validateEmail,
    validateZip
} = require('@hutsoninc/data-scrubber');

console.log(validatePhone('(123) 456-7890'));
// => '1234567890'

console.log(validateEmail('hello@me@mail.com'));
// => ''

console.log(validateZip('12345-6789'));
// => '12345'
```

## License

MIT © [Hutson Inc](https://www.hutsoninc.com)
