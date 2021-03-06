'use strict';
angular.module('tcApp').value('Toastr', toastr);

angular.module('tcApp').factory('Notifier', function(Toastr) {
  return {
    notify: function(msg) {
      Toastr.success(msg);
    },
    error: function(msg) {
      Toastr.error(msg);
    }
  };
});