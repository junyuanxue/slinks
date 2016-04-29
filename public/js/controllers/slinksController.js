angular
  .module('slinksApp')
  .controller('SlinksController', ['$http', 'SlinksService', 'SlinkFactory', function($http, SlinksService, SlinkFactory) {
    var self = this;

    SlinksService.getSlinks().then(function(slinks) {
      self.slinks = slinks;
      _sendEachSlinkToDB(self.slinks);
    });

    function _sendEachSlinkToDB(slinks){
      slinks.forEach(_postToDB);
    }

    function _postToDB(slink){
      var req = {
        method: 'POST',
        url: '/slinks',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ url: slink.url })
      };

      $http(req);
    }

     self.starLink = function(link) {
      link

    };

  }]);
