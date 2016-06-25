repos('yongjhih').subscribe(function (it) {
    console.log(it);
});

function repos(user) {
    var RxGitHub = require('./index');
    return RxGitHub('https://api.github.com/users/' + user + '/repos')
        .map(function (json) { return json.name; });
}
