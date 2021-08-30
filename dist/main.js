System.register(["bootstrap", "aurelia-pal"], function (_export, _context) {
  "use strict";

  var PLATFORM;
  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.start().then(function () {
      return aurelia.setRoot(PLATFORM.moduleName("app/app"));
    });
  }

  _export("configure", configure);

  return {
    setters: [function (_bootstrap) {}, function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=main.js.map
