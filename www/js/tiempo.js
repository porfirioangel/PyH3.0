angular.module('starter.tiempo', [])

    .controller('TiempoCtrl', function ($rootScope, $scope, $interval, $ionicPlatform) {
        $scope.tabData = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            years: 0
        };

        $interval.cancel($rootScope.loveInterval);
        $interval.cancel($rootScope.msjsInterval);

        $rootScope.loveInterval = $interval(function () {
            love();
        }, 500);

        $rootScope.timeinterval = $interval(function () {
            // Set the date we're counting down to
            var countDownDate = new Date("Aug 10, 2014 20:30:00");

            // Get todays date and time
            var now = new Date();

            // Find the distance between now an the count down date
            var distance = now.getTime() - countDownDate.getTime();

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $scope.tabData.days = days;
            $scope.tabData.hours = hours;
            $scope.tabData.minutes = minutes;
            $scope.tabData.seconds = seconds;
        }, 500);

    });