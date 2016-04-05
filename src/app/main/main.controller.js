(function() {
  'use strict';

  angular
    .module('myWebsite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, Lightbox) {
    var vm = this;

    vm.jobs = [];
    vm.images = [
    {
      'url': '../../assets/images/forest-1.jpg',
      'thumbUrl': '../../assets/images/forest-1.jpg',
      'caption': ''
    },
    {
      'url': '../../assets/images/forest-2.jpg',
      'thumbUrl': '../../assets/images/forest-2.jpg',
      'caption': ''
    },
    {
      'url': '../../assets/images/forest-3.jpg',
      'thumbUrl': '../../assets/images/forest-3.jpg',
      'caption': ''
    }];
    vm.classAnimation = '';
    vm.creationDate = 1459790889420;
    vm.showToastr = showToastr;
    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.jobs = webDevTec.getTec();
      vm.image = webDevTec.getImg();

      angular.forEach(vm.awesomeThings, function(jobs) {
        jobs.rank = Math.random();
      });
    }


    vm.openLightboxModal = function (index) {
      Lightbox.openModal(vm.images, index);
    };
  }
})();
