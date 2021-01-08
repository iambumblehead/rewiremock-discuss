rewiremock discuss
==================

these sources demonstrate an issue that occurs when using rewiremock.

from the unit test, a package is mocked then imported twice later on.

the first time it is imported, it resolves to the mocked definition, but the second time it is imported it resolves to an `undefined` definition.

``` javascript
console.log({ request }, 'health');
if ( typeof request === 'undefined' ) {
    throw new Error('imported definition: undefined');
}
```

setup and run the tests with this caommand
``` javascript
$ npm install && npm test
```
