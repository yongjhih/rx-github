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
        var next;
        try {
            next = response.headers.get('Link').replace(/<([^<]*)>; rel="next".*/, '$1');
        } catch (e) {
        }
        return Rx.Observable.concat(Rx.Observable.just(response), next ? fetch(next) : Rx.Observable.empty());
    });
}

RxGitHub.Repos = repos;
function repos(user, baseUrl) {
    if (!baseUrl) baseUrl = 'https://api.github.com';
    var url = baseUrl + `/users/${user}/repos`;
    console.log(url);
    return fetch(url)
        .map(function (response) { return response.json(); })
        .flatMap(function (json) { return Rx.Observable.from(json); });
}
