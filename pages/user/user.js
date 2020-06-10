// pages/user/user.js

const app = getApp();

const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   * 
   * 
   */
  data: {
    imgUrl : "../../images/user/login.png",
    nickName : "张三",
    canIUse : false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this //表示当前页面对象
    //在此处获取用户的相关信息 openid，然后在查询数据库 并设置到app 中
    //这里我是自己写死查询参数值，实际开发过程中因要前台获取用户信息然后在查询数据
    wx.request({
      url:'http://127.0.0.1:8080/user/queryUserByName',
      method:'POST',
      data:{
        //此处可以改为id查询
        nickname : 'LEBRON'
      },
      success:function(result){
        app.userInfos = Object.assign(app.userInfos ,result.data)
        app.user = app.userInfos[0]
        self.setData({
          imgUrl : app.userInfos[0].avatarurl,
          nickName : app.userInfos[0].nickname,
          canIUse : true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindGetUserInfo(ev) {
    var self = this
    let userInfo = ev.detail.userInfo ;
    console.log(userInfo)
  wx.request({
    url: 'http://127.0.0.1:8080/user/userInfo',
    method:'POST',
    data:{
      nickname : userInfo.nickName,
      gender : userInfo.gender,
      city : userInfo.city,
      avatarurl : userInfo.avatarUrl
    },
    success:function(res){
      console.log(res)
      console.log(res.data[0].id)
      wx.request({
        //queryUserByName
        url:'http://127.0.0.1:8080/user/queryById',
        method:'POST',
        data:{
          id : res.data[0].id
        },
        success:function(result){
          app.userInfos = Object.assign(app.userInfos ,result.data)
          app.user = app.userInfos
          self.setData({
            imgUrl : app.userInfos.avatarurl,
            nickName : app.userInfos.nickname,
            canIUse : true
          })
        }
      })
      
    }
  })
  }
})