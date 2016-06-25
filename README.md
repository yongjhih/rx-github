# rx-github

## Usage

```js
var RxGitHub = require('rx-github');
RxGitHub.Fetch('https://api.github.com/users/yongjhih/repos').subscribe(function (json) {
  console.log(json);
});
```

```js
var RxGitHub = require('rx-github');
RxGitHub.Repos('yongjhih').subscribe(function (repo) {
  console.log(repo.name);
});
```

## Installation

```sh
npm install rx-github
```
