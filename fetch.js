// test fetch
var RxGitHub = require('./index');
var user = 'yongjhih';
RxGitHub.Fetch('https://api.github.com/users/' + user + '/repos').take(3).subscribe(function (it) {
  console.log(it);
}, function (e) {
    console.log(e);
});
