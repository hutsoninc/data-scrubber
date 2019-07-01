# data-scrubber

[![Build Status](https://travis-ci.com/hutsoninc/data-scrubber.svg?branch=master)](https://travis-ci.com/hutsoninc/data-scrubber) [![Current npm package version](https://img.shields.io/npm/v/@hutsoninc/data-scrubber.svg)](https://www.npmjs.com/package/@hutsoninc/data-scrubber)

Data validation and formatting utilities used by Hutson marketing team.

## Usage

`npm install @hutsoninc/data-scrubber`

```js
const {
    scrubEmail,
    scrubHutsonBranch,
    scrubPhone,
    scrubState,
    scrubZip
} = require('@hutsoninc/data-scrubber');

scrubEmail('hello@me@mail.com');
// => ''

scrubHutsonBranch('hopkinsville');
// => 'Hopkinsville, KY'

scrubHutsonBranch(1);
// => 'Mayfield, KY'

scrubPhone('(123) 456-7890');
// => '1234567890'

scrubState('kentucky');
// => 'KY'

scrubZip('12345-6789');
// => '12345'
```

### API

Each method will validate and format the input, returning an empty string for invalid inputs or the formatted value otherwise.

#### scrubEmail

Converts input to lowercase string and returns it.

#### scrubHutsonBranch

Converts city name or store number to a formatted string.

#### scrubPhone

Removes formatting (hyphens, parentheses, and spaces), returning a 10-digit phone number string.

#### scrubState

Converts state names and abbreviations of any case to an all caps abbreviation string.

#### scrubZip

Removes +4 part from zip codes and returns 5-digit zip code string.

## License

MIT © [Hutson Inc](https://www.hutsoninc.com)
