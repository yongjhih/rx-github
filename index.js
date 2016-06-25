module.exports = RxGitHub;

require('es6-promise').polyfill();
var Fetch = require('isomorphic-fetch');

var Rx = require('rx');

function noop() {}

function RxGitHub() {
}

RxGitHub.Fetch = fetch;
function fetch(url, options) {
    return Rx.Observable.fromPromise(Fetch(url, options)).flatMap(function (response) {
        var next = response.headers.get('Link').replace(/<([^<]*)>; rel="next".*/, '$1');
        return Rx.Observable.concat(Rx.Observable.just(response), next ? fetch(next) : Rx.Observable.empty());
    });
}

RxGitHub.Repos = repos;
function repos(user) {
    return fetch('https://api.github.com/users/' + user + '/repos')
        .map(function (response) { return response.json(); })
        .flatMap(function (json) { return Rx.Observable.from(json); });
}
