(function() {
  'use strict';

  angular
      .module('myWebsite')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'SkyGate Software House',
        'url': 'https://skygate.pl/',
        'description': 'FrontEnd Developer',
        'logo': 'sky-gate.png'
      },
      {
        'title': 'EUVIC SA',
        'url': 'http://euvic.pl/',
        'description': 'ASP .NET Developer',
        'logo': 'euvic.png'
      },
      {
        'title': 'Life in Mobile',
        'url': 'www.lifeinmobile.pl/',
        'description': 'PHP Developer',
        'logo': 'LIM_logo.png'
      }
    ];

    this.getTec = getTec;

    var images = [
    {
      'url': 'https://farm6.staticflickr.com/5830/20552523531_e1efec8d49_k.jpg',
      'thumbUrl': 'https://farm6.staticflickr.com/5830/20552523531_ef720cd2f1_s.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    }];

    this.getImg = getImg;

    function getImg () {
      return images;
    }
    
    function getTec() {
      return data;
    }
  }

})();
