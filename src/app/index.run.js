(function() {
  'use strict';

  angular
    .module('myWebsite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
