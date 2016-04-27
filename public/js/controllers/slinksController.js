angular
  .module('slinksApp')
  .controller('SlinksController', ['$http', 'SlinksService', 'SlinkFactory', function($http, SlinksService, SlinkFactory) {
    var self = this;

    self.slinks = [];

    SlinksService.getSlinks().then(function(slinks) {
    	var slinks = Array.prototype.concat.apply([],slinks);
      self.slinks = slinks;
      _sendEachSlinkToDb(self.slinks);
    })

    function _sendEachSlinkToDb(slinks) {
      slinks.forEach(_postToDb);
    }

    function _postToDb(slink) {
      var req = {
        method: 'POST',
        url: '/slinks',
        headers: { 'Content-Type': 'application/json' },
        data: { url: slink.url }
      };

      $http(req).then(function success(res) {
        console.log("success" + res)
      }, function error(res) {
        console.log("error");
      });
    }
  }])
