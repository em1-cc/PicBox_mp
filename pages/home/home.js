// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // TODO
    swiperData:[
      {
        id: 1,
        src: "/img/home/0banner1.png",
        link: ""
      },
      {
        id: 2,
        src: "/img/home/0banner2.png",
        link: ""
      }
    ],
    gridData:[
      {
        id: 1,
        name : "次元动漫",
        icon: "/img/home/n1.png",
      },
      {
        id: 2,
        name : "Q版萌宠",
        icon: "/img/home/n2.png",
      },
      {
        id: 3,
        name : "图片盲盒",
        icon: "/img/home/n3.png",
      },
      {
        id: 4,
        name : "电子潮玩",
        icon: "/img/home/n4.png",
      },
      {
        id: 5,
        name : "更多分类",
        icon: "/img/home/n5.png",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.showToast({
      title: '开发中',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})