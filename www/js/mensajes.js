angular.module('starter.mensajes', [])
    .controller('MensajesCtrl', function ($rootScope, $scope, $interval, $ionicPlatform) {
        $interval.cancel($rootScope.loveInterval);
        $interval.cancel($rootScope.timeInterval);

        $scope.mensajes = [
            'Tu cara',
            'Tus pestañas',
            'Tus ojos',
            'Tu nariz',
            'Tu sonrisa',
            'Tu pelo',
            'Tu piel',
            'Tus manos',
            'Tus pies',
            'Tu pansita',
            'Tu forma de ser',
            'Tu alegría',
            'Tu sinceridad',
            'Tu cariño',
            'Tu apoyo',
            'Tu nobleza',
            'Tu lealtad',
            'Tu amistad',
            'Tu compañía',
            'Tu sensibilidad',
            'Tu entusiasmo',
            'Tu optimismo',
            'Tu forma de tratarme',
            'Todo de ti'
        ];

        $scope.msgIndex = -1;

        $scope.intervalPaused = false;

        function cambiarPalabra() {
            $scope.msgIndex = $scope.msgIndex % $scope.mensajes.length;
            if ($scope.msgIndex < 0) $scope.msgIndex += $scope.mensajes.length;

            var mensaje = $scope.mensajes[$scope.msgIndex];

            $("#txtMensaje").fadeOut(300, function () {
                $("#txtMensaje").html(mensaje).fadeIn(300);
            });
        }

        $scope.nextMessage = function () {
            $scope.msgIndex++;
            $scope.pauseInterval();
            cambiarPalabra();
        };

        $scope.previousMessage = function () {
            $scope.msgIndex--;
            $scope.pauseInterval();
            cambiarPalabra();
        };

        $scope.pauseInterval = function () {
            $interval.cancel($rootScope.msjsInterval);
            $scope.intervalPaused = true;
        };

        $scope.resumeInterval = function () {
            $scope.intervalPaused = false;
            $rootScope.msjsInterval = $interval(function () {
                $scope.msgIndex++;
                cambiarPalabra();
            }, 1500);
        };

        $rootScope.loveInterval = $interval(function () {
            love();
        }, 500);

        $ionicPlatform.ready(function () {
            $scope.resumeInterval();
        });
    });