var should = require('should'),
assert = require('assert'),
fs = require('fs'),
rimraf = require('rimraf'),
Guard = require('../lib/guard');

var testDirectory = './test/guard-test';

var createTestFile = function(file){
  fs.writeFile(testDirectory + '/' + file, "test", function(err) { });
};

describe('reload-guard', function(){
  var guard;

  beforeEach(function(done){
    fs.lstat(testDirectory, function(err, stats){
      var makeTestDir = function(){
        fs.mkdir(testDirectory, function(err){
          if(err){ throw err;}
          guard = new Guard(testDirectory);
          done();
        });
      };
      if(err) {
        if(err.code === 'ENOENT'){
          makeTestDir();
          return;
        }
        throw err;
      }

      if(stats.isDirectory()){
        rimraf(testDirectory, function(){
          makeTestDir();
        });
      }

    });
  });

  afterEach(function(done){
    rimraf(testDirectory, done);
  });


  describe('on file activity', function(){
    it('should send an activity event on file creation', function(done){
      guard.once('activity', function(){
        done();
      });
      createTestFile('test-creation');
    });
  });
});
