module.exports = (app) => {
  const { _router: router, controller } = app;
  router
    .get('/', controller.home.showHome)
};
