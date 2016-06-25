module.exports = RxGitHub;

var Fetch = require('node-fetch');
var Rx = require('rx');

function noop() {}

function RxGitHub() {
}

RxGitHub.prototype.fetch = fetch;
function fetch(url, options) {
    return Rx.Observable.fromPromise(Fetch(url, options)).flatMap(function (response) {
        var next = response.headers.get('Link').replace(/<([^<]*)>; rel="next".*/, '$1');
        return Rx.Observable.concat(Rx.Observable.just(response), next ? fetch(next) : Rx.Observable.empty());
    });
}

RxGitHub.prototype.repos = repos;
function repos(user) {
    return fetch('https://api.github.com/users/' + user + '/repos')
        .map(function (response) { return response.json(); })
        .flatMap(function (json) { return Rx.Observable.from(json); });
}
