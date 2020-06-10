// pages/editUserInfo/phone/phone.js
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber : ''
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
    var self = this ;
    console.log(app.user)
    console.log(app.user.phoneNumber)
    self.setData({
      phoneNumber : app.user.phone
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
  haldnumber(ev){
    let value = ev.detail.value;
    var self = this
    self.setData({
      phoneNumber : value
    });
  },
  handlBtn(){
   this.updateSignatrue();
  },
  updateSignatrue(){
    wx.showLoading({
      title: '更新中',
    })
     wx.request({
      url: 'http://127.0.0.1:8080/user/update',
      data: {
        id : app.user.id ,
        phone : this.data.phoneNumber
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        app.user.phoneNumber = this.data.phoneNumber
        wx.hideLoading();
        wx.showToast({
          title: '更新成功',
        })
      }
    });

  }
})