const Controller = require("egg").Controller;

class NewsController extends Controller {
  async list() {
    // const ctx = this.ctx;
    // const page = ctx.query.page || 1;
    // const newsList = await ctx.service.news.list(page);
    // console.log(newsList);
    const dataList = {
      list: [
        { id: 1, title: "this is news 1", url: "/news/1" },
        { id: 2, title: "this is news 2", url: "/news/2" }
      ]
    };
    await this.ctx.render("view/tpl.html", dataList);
  }
}

module.exports = NewsController;
