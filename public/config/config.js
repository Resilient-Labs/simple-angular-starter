/**
 * Created by muigai on 2/23/17.
 */
(function () {
    angular
        .module("SimpleApp")
        .config(configuration);
    /**
     * Configures the routes for the Single Page Application connecting controllers to views
     * @param $routeProvider
     */
    function configuration($routeProvider) {
        // Define your routes here. Each "view" will have a route path
        // associated with it. Also, you will include a Controller for
        // each view to manipulate binded data
        $routeProvider
            /*
            When the url is root + / the webpage view loaded is the templateUrl set below.
             i.e. when on website.com/ the webpage shows the html in
             */
            .when("/", {
                templateUrl: "views/view-one.html"
            })
            .when("/view-one", {
                templateUrl: "views/view-one.html"
            })
            .when("/view-two", {
                templateUrl: "views/view-two.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    }

})();