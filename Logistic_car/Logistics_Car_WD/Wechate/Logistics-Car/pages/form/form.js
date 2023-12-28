// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area: "",
    name: "",
    phone: "",
  },

  bindarea:function(e){
    this.setData({ area:e.detail.value});
  },
  bindname:function(e){
    this.setData({ name:e.detail.value});
  } ,
  bindphone:function(e){
    this.setData({ phone:e.detail.value});
  } ,
  // 表单提交
  message_submit: function (e) {
  //判area不为空
  if (this.data.area == "") {
    wx.showToast({
      title: "请输入住址",
      icon: "none",
    });
  
      return false;
  }
  //判name不为空
  if (this.data.name == "") {
    wx.showToast({
      title: "请输入姓名",
      icon: "none",
    });
  
      return false;
  }
  //判phone不为空
  if (this.data.phone == "") {
    wx.showToast({
      title: "请输入联系电话",
      icon: "none",
    });
    
    return false;
  }
  // 验证电话格式
  if (!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.data.phone)) {
    wx.showToast({
      title: "手机号码有误",
      duration: 2000,
      icon: "none",
    });                                                      

    return false;
  }
 
    wx.navigateTo({
      url: '/pages/Login/Login',
    })

    wx.request({
      url: 'http://127.0.0.1:8000//message/',
      data: { name: this.data.name, area: this.data.area, phone: this.data.phone},
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