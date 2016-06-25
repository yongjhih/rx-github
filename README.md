# rx-github

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
<!--[![coverage status][coveralls-image]][coveralls-url]-->

[npm-image]: https://img.shields.io/npm/v/rx-github.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/rx-github
[travis-image]: https://img.shields.io/travis/yongjhih/rx-github.svg?style=flat-square
[travis-url]: https://travis-ci.org/yongjhih/rx-github
[coveralls-image]: https://img.shields.io/coveralls/yongjhih/rx-github.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yongjhih/rx-github

![](art/rx-github.png)

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

## TODO

```js
var RxGitHub = require('rx-github');
var github = new RxGitHub({ token: token });
github.repos('yongjhih');
```

```js
var RxGitHub = require('rx-github');
RxGitHub.token({ key: CLIENT_ID, secret: CLIENT_SECRET }).subscribe(function (token) {
  console.log(token);
});
```

```js
var RxGitHub = require('rx-github');
var github = new RxGitHub({ key: CLIENT_ID, secret: CLIENT_SECRET });

github.repos('yongjhih').subscribe(function (repo) {
  console.log(repo.name);
});
```

```js
var RxGitHub = require('rx-github');
var github = new RxGitHub({ username: USERNAME, password: PASSWORD });

github.repos('yongjhih').subscribe(function (repo) {
  console.log(repo.name);
});
```

## Installation

```sh
npm install rx-github
```

## Test

```sh
npm test
```

## docker

```sh
./docker-run.sh
```

## License

```
MIT License

Copyright (c) 2016 Andrew Chen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
