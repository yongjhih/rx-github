// test Repo
var RxGitHub = require('./index');
RxGitHub.Repos('yongjhih').subscribe(function (it) {
    console.log(it);
});

// test fetch
//var user = 'yongjhih';
//RxGitHub.Fetch('https://api.github.com/users/' + user + '/repos').subscribe(function (it) {
    //console.log(it);
//});
