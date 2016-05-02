# date-with-slashes
Utility function for converting javascript date object to string in the format 'MM/DD/YY'

```js
import dateWithSlashes from 'date-with-slashes';

const todaySlashified = dateWithSlashes(new Date());

console.log(todaySlashified); // it's May 2, 2016 so this will log '5/2/16'

// with four digit year
const todaySlashifiedFour = dateWithSlashes(new Date(), true);

console.log(todaySlashifiedFour); // it's May 2, 2016 so this will log '5/2/2016'
```
[![NPM][nodei-image]][nodei-url]

[nodei-image]: https://nodei.co/npm/date-with-slashes.png?downloads=true&downloadRank=true&stars=true
[nodei-url]: https://www.npmjs.com/package/date-with-slashes
