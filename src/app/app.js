export class App {
  // configureRouter(config, router) {
  //   fetch("https://3981be54-8e71-48d3-8b7c-2af7949ecc37.mock.pstmn.io/routes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       console.log(router);
  //     });

  //   config.title = "Aurelia";
  //   config.map([
  //     {
  //       route: ["", "welcome"],
  //       name: "welcome",
  //       moduleId: "welcome",
  //       nav: true,
  //       title: "Welcome",
  //     },
  //   ]);

  //   // [
  //   //   {
  //   //     route: ["", "welcome"],
  //   //     name: "welcome",
  //   //     moduleId: "welcome",
  //   //     nav: true,
  //   //     title: "Welcome",
  //   //   },
  //   //   {
  //   //     route: "users",
  //   //     name: "users",
  //   //     moduleId: "users",
  //   //     nav: true,
  //   //     title: "Github Users",
  //   //   },
  //   //   {
  //   //     route: "child-router",
  //   //     name: "child-router",
  //   //     moduleId: "child-router",
  //   //     nav: true,
  //   //     title: "Child Router",
  //   //   },
  //   // ];

  //   this.router = router;
  // }

  configureRouter(config, router) {
    config.title = "SM";

    //configure one static route:
    config.map([
      {
        route: ["", "welcome"],
        name: "welcome",
        moduleId: "welcome",
        nav: true,
        title: "Welcome",
      },
    ]);

    fetch("https://3981be54-8e71-48d3-8b7c-2af7949ecc37.mock.pstmn.io/routes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.routes.forEach((route) => this.router.addRoute(route));
        //once all dynamic routes are added, refresh navigation:
        this.router.refreshNavigation();
      });

    //routeMaps(this.navRepo) //your repo/service doing the async HTTP fetch, returning a Promise<Array<any>> (i.e., the routes)
    // ).then((r) => {
    //   r.routes.forEach((route) => this.router.addRoute(route));
    //   //once all dynamic routes are added, refresh navigation:
    //   this.router.refreshNavigation();
    // });

    this.router = router;
  }
}
