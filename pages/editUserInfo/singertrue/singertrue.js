// pages/editUserInfo/singertrue/singertrue.js

const app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    singertrue:''

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
    self.setData({
      // app.user.singertrue    singertrue  必须与实体类字段相同
      singertrue : app.user.singertrue
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
  haldtest(ev){
    let value = ev.detail.value;
    var self = this
    self.setData({
      singertrue : value
    });
  },
  handleBtn(){
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
        singertrue : this.data.singertrue
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        app.user.singertrue = this.data.singertrue
        wx.hideLoading();
        wx.showToast({
          title: '更新成功',
        })
      }
    });

  }
})