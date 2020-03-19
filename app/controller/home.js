const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = "hello world";
    await this.ctx.render("test/index.html")
  }
  // async test() {
  //   await this.ctx.render("index.html");
  // }
  async renderPublic() {
    await this.ctx.render("public/test/index.html")
  }
}
module.exports = HomeController;
