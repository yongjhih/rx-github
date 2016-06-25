# rx-github

## Usage

```js
var RxGitHub = require('rx-github');
RxGitHub.fetch(url, options).subscribe(function (json) {
  console.log(json);
});
```

```js
var RxGitHub = require('rx-github');
RxGitHub.repos('yongjhih').subscribe(function (repo) {
  console.log(repo.name);
});
```

## Installation

```sh
npm install rx-github
```
