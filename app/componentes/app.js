(function () {
    'use strict';


    angular.module('blablapet', ['blablapet.menuController','ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngAnimate', 'ngMaterial', 'satellizer']);

    /*
     * Rutas de la aplicacion
     */
    function config($routeProvider, $authProvider) {
       // $authProvider.loginUrl = 'http://localhost:11342/login'; // para local
         //$authProvider.loginUrl = 'http://contraste.unileon.es/Queso/login'; // para despliegue
        //$authProvider.tokenName = 'token';
        //$authProvider.tokenPrefix = 'blablapet';
        $routeProvider
        // En raiz vista del menu y las sugerencias
            .when('/', {
                templateUrl: 'componentes/inicio/inicio.html'
            })
            .when('/proyectos', {
                templateUrl: 'componentes/proyectos/proyectos.html'
            });

    }
    angular
        .module('blablapet')
        .config(config);
})();
