(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath','https://nkooler-ang-course5.herokuapp.com' )  // 'https://ychaikin-course5.herokuapp.com'replace my my own 
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
