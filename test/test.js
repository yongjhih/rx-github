var chai = require('chai');
var expect = chai.expect;
var nock = require('nock');
var RxGitHub = require('../index');

describe('rx-github', function() {
  it('should be defined', function() {
    expect(RxGitHub).to.be.a('function');
  });

  it('should be .Repos defined', function() {
    expect(RxGitHub.Repos).to.be.a('function');
  });

  it('Fetch("yongjhih") should be least 1', function(done) {
    // https://api.github.com/users/yongjhih/repos
    nock('https://api.github.com')
      .get('/users/yongjhih/repos')
      .replyWithFile(200, __dirname + '/repos.1.json', {
        'Link': '<https://api.github.com/user/213736/repos?page=2>; rel="next", <https://api.github.com/user/213736/repos?page=10>; rel="last"'
      });

    nock('https://api.github.com')
      .get('/user/213736/repos?page=2')
      .replyWithFile(200, __dirname + '/repos.2.json');

    RxGitHub.Fetch('//api.github.com/users/yongjhih/repos').subscribe(function (it) {
    }, function (e) {}, function () {
      done();
    });
  });

  it('Repos("yongjhih") should be least 1 repo', function(done) {
    // https://api.github.com/users/yongjhih/repos
    nock('https://api.github.com')
      .get('/users/yongjhih/repos')
      .replyWithFile(200, __dirname + '/repos.1.json', {
        'Link': '<https://api.github.com/user/213736/repos?page=2>; rel="next", <https://api.github.com/user/213736/repos?page=10>; rel="last"'
      });

    nock('https://api.github.com')
      .get('/user/213736/repos?page=2')
      .replyWithFile(200, __dirname + '/repos.2.json');

    RxGitHub.Repos('yongjhih', '//api.github.com').subscribe(function (it) {
    }, function (e) {
      console.log(e);
      expect(e).be.an.instanceOf(TypeError);
      done();
    }, function () {
      done();
    });
  });

});
