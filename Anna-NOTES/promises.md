# Promises
**Use `promises` to handle _asynchronous transactions_** <br>
Promises make it easier to handle asynchronous operations or blocking code like file operations, API calls, DB calls, IO calls, etc...
</br>

Mongoose doesn't supply it's own Promise library; instead Mongoose asks you to set Promise library of your choosing.
</br>
Promises in JS are similar to promises in real life... An assurance that something will happen. </br>

## Creating Promises
`new Promise (/* executor */ function(resolve, reject) { ... } )`
The constructor accepts a function called `executer`. Executer function accepts two parameters, `resolve` and `reject` which are also functions. </br>
Here's an example:
```
var keepsHisWord;
keepsHisWord = true;
promise1 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man does not want to keep his word");
  }
});
console.log(promise1);

```
