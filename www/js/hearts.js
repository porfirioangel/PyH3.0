angular.module('starter.hearts', [])

    .controller('HeartsCtrl', function ($ionicPlatform, $rootScope, $scope, $interval) {
        $interval.cancel($rootScope.loveInterval);
        $interval.cancel($rootScope.timeinterval);
        $interval.cancel($rootScope.msjsInterval);

        $rootScope.loveInterval = $interval(function () {
            love();
        }, 500);
    });
