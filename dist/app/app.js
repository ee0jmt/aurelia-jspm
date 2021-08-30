System.register([], function (_export, _context) {
  "use strict";

  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("App", App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          var _this = this;

          config.title = "SM";

          config.map([{
            route: ["", "welcome"],
            name: "welcome",
            moduleId: "welcome",
            nav: true,
            title: "Welcome"
          }]);

          fetch("https://3981be54-8e71-48d3-8b7c-2af7949ecc37.mock.pstmn.io/routes").then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
            data.routes.forEach(function (route) {
              return _this.router.addRoute(route);
            });

            _this.router.refreshNavigation();
          });

          this.router = router;
        };

        return App;
      }());

      _export("App", App);
    }
  };
});
//# sourceMappingURL=app.js.map
