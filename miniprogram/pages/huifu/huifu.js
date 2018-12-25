//huifu.js
const app = getApp()

Page({
  onLoad: function () {
    //console.log(this)
    //获取数据库引用
    var that = this
    wx.request({
      url: 'https://weixin.nxhello.com/detail/' + that.options.id, // 仅为示例，并非真实的接口地址

      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          id: res.data[0].id,
          name: res.data[0].name,
          edu2: res.data[0].edu2,
          lilv2: res.data[0].lilv2,
          pic: res.data[0].pic,
          qixian: res.data[0].qixian,
          ren: res.data[0].ren,
          rz: res.data[0].rz,
          tiaojian: res.data[0].tiaojian,
          address: res.data[0].address
        })
      }
    })
  }

})
