// pages/Logup/Logup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mail:"",
    password:""

  },
  bindmail:function(e){
    this.setData({ mail:e.detail.value});
  },
  bindpassword:function(e){
    this.setData({ password:e.detail.value});
  } ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  // 注册页面跳转
  jumpPage_logup_t:function(e){

     //判mail不为空
     if (this.data.mail == "") {
      wx.showToast({
        title: "请输入邮箱地址",
        icon: "none",
      });
    
        return false;
    }
    //判password不为空
    if (this.data.password == "") {
      wx.showToast({
        title: "请输入密码",
        icon: "none",
      });
    
        return false;
    }

    wx.navigateTo({
      url: '/pages/form/form',
    })
    wx.request({
      url: 'http://127.0.0.1:8000//logup/',
      data: {mail: this.data.mail, password: this.data.password},
      // dataType: dataType,
      // enableCache: true,
      // enableChunked: true,
      // enableHttp2: true,
      // enableHttpDNS: true,
      // enableQuic: true,
      // forceCellularNetwork: true,
      // header: header,
      // httpDNSServiceId: 'httpDNSServiceId',
      method: "POST",
      // responseType: responseType,
      // timeout: 0,
      success: (result) => {
        console.log(result);
      },
      fail: (err) => {},
      complete: (res) => {},
    })

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