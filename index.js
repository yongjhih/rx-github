module.exports = RxGitHub;
function RxGitHub(url, options) {
    var fetch = require('node-fetch');
    var Rx = require('rx');
    return Rx.Observable.fromPromise(fetch(url, options)).flatMap(function (response) {
        var next = response.headers.get('Link').replace(/<([^<]*)>; rel="next".*/, '$1');
        return Rx.Observable.concat(Rx.Observable.just(response), next ? RxGitHub(next) : Rx.Observable.empty());
    })
    .map(function (response) { return response.json(); })
    .flatMap(function (json) { return Rx.Observable.from(json); });
}
