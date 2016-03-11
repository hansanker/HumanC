(function() {
  'use strict';

  angular
    .module('humanC')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
