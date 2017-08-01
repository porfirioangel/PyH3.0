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


// // store the interval promise in this variable
// var promise;
//
// // starts the interval
// $scope.start = function() {
//     // stops any running interval to avoid two intervals running at the same time
//     $scope.stop();
//
//     // store the interval promise
//     promise = $interval(love, 500);
// };
//
// // stops the interval
// $scope.stop = function() {
//     $interval.cancel(promise);
// };
//
// // starting the interval by default
// $scope.start();
//
// // stops the interval when the scope is destroyed,
// // this usually happens when a route is changed and
// // the ItemsController $scope gets destroyed. The
// // destruction of the ItemsController scope does not
// // guarantee the stopping of any intervals, you must
// // be responsible for stopping it when the scope is
// // is destroyed.
// $scope.$on('$destroy', function() {
//     console.log('$scope.$on.$destroy')
//     $scope.stop();
// })