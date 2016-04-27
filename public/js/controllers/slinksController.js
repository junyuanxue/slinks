angular
  .module('slinksApp')
  .controller('SlinksController', ['$http', 'SlinksService', 'SlinkFactory', function($http, SlinksService, SlinkFactory) {
    var self = this;

    self.slinks = [new SlinkFactory('https://slack.com/')];

    SlinksService.getSlinks().then(function(slinks) {
    	var slinks = Array.prototype.concat.apply([],slinks)
      self.slinks = slinks;


      self.sendSlinks("string");
    })

    self.sendSlinks = function(slink) {
      var params = JSON.stringify({ "hello": slink })
      // var req = {
      //   method: 'POST',
      //   url: 'http://requestb.in/ym7vyqym',
      //   headers: { 'Content-Type': 'application/json' },
      //   data: data
      // };

      $http.post('http://requestb.in/ym7vyqym', params).then(function success(res) {
        console.log("SUCCESS" + res);
        console.log(res);
      }), function error(res) {
        console.log("FAIL" + res);
      }

    }
  }])
