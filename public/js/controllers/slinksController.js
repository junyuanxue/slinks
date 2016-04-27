angular
  .module('slinksApp')
  .controller('SlinksController', ['$http', 'SlinksService', 'SlinkFactory', function($http, SlinksService, SlinkFactory) {
    var self = this;

    self.slinks = [new SlinkFactory('https://slack.com/')];

    SlinksService.getSlinks().then(function(slinks) {
    	var slinks = Array.prototype.concat.apply([],slinks)
      self.slinks = slinks;


      self.sendSlinks();
    })

    self.sendSlinks = function() {
      var slink = new SlinkFactory('DUMMY SLINK');
      var req = {
        method: 'POST',
        url: '/slinks',
        headers: {
          'Content-Type': undefined
        },
        data: { object: slink }
      };

      $http(req).then(function success(res) {
        console.log("SUCCESS" + res);
        console.log(res);
      }), function error(res) {
        console.log("FAIL" + res);
      }

    }
  }])
