const Controller = require('egg').Controller

class Ejs extends Controller {
  async init() {
    const ctx = this.ctx
    const page = ctx.query.page || 1
    const newList = await ctx.service.news.list(page)
    console.log(newList);
    await this.ctx.render('ejs/index.html', {
      data: "TSRQ",
      appConfig: {
        apiUrl: "http://192.168.111.195"
      }
    })
  }
}

module.exports = Ejs