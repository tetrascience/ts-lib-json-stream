ts-lib-json-stream
==================

Simple Library to stringify JSON using streams

# To build and install

Install dependencies:

``` sh
npm install
```

To build:

``` sh
npm run build
```

To test:

``` sh
npm run test:cov
```


# To use

Call `jsonStringifyStream(jsonObject)` with a valid JSON object, and it will return a stream ready for writing.

Example:

``` javascript
const { jsonStringifyStream } = require('ts-lib-json-stream');
const { pipeline }  = require('stream/promises')

const someJson = { x: 'a string' };
const myJsonStream = jsonStringifyStream(someJson);

await pipeline(myJsonStream, fs.createWriteStream('path/to/my/file.json');

```

