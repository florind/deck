'use strict';

angular.module('deckApp.utils.waypoints.container.directive', [
  'deckApp.utils.waypoints.service',

])
  .directive('waypointContainer', function (waypointService) {
    return {
      restrict: 'A',
      scope: {
        key: '@waypointContainerKey',
        offsetHeight: '=waypointOffset',
      },
      link: {
        post: function (scope, elem) {
          var offset = scope.offsetHeight || 0;
          waypointService.registerWaypointContainer(scope, elem, scope.key, offset);
        }
      }
    };
  });