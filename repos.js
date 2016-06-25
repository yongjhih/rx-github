var RxGitHub = require('./index');
var github = new RxGitHub();
github.repos('yongjhih').subscribe(function (it) {
    console.log(it);
});
