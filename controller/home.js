class Home {

  constructor() {

  }

  async showHome(req, res, next) {
    res.render('index.html')
  }
}

module.exports = Home;
