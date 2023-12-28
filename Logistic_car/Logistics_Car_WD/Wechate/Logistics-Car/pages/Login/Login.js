// pages/Login/Login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mail:"",
    password:"",


  },
  bindmail:function(e){
    this.setData({ mail:e.detail.value});
  },
  bindpassword:function(e){
    this.setData({ password:e.detail.value});
  } ,

   //登陆页面跳转
   jumpPage_login_t:function(e){
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
      url: '/pages/format/format',
    })

    wx.request({
      url: 'http://127.0.0.1:8000//login/',
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
        wx.setStorageSync('QRCimg_url', result.data);
      },
      fail: (err) => {},
      complete: (res) => {},
    })
    
    wx.downloadFile({
      url:wx.getStorageSync('QRCimg_url'),
      success: function(res) {
        if (res.statusCode === 200) {
          console.log('图片下载成功' + res.tempFilePath)
          // 第二步: 使用小程序的文件系统，通过小程序的api获取到全局唯一的文件管理器
          const fs = wx.getFileSystemManager()
          //  fs为全局唯一的文件管理器。那么文件管理器的作用是什么，我们可以用来做什么呢？
         //   文件管理器的作用之一就是可以根据临时文件路径，通过saveFile把文件保存到本地缓存.
          fs.saveFile({
            tempFilePath: res.tempFilePath, // 传入一个临时文件路径
            success(res) {
              console.log('图片缓存成功', res.savedFilePath) // res.savedFilePath 为一个本地缓存文件路径  
              // 此时图片本地缓存已经完成，res.savedFilePath为本地存储的路径。
              //小程序的本地文件路径标准： {{协议名}}://文件路径
              //协议名在 iOS/Android 客户端为 "wxfile"，在开发者工具上为 "http"，
              //开发者无需关注这个差异，也不应在代码中去硬编码完整文件路径。
              //好了，到此为止，我们已经把图片缓存到本地了，而且我们也得到了本地缓存的路径。
              // 那么我们把本地缓存的路径，通过小程序的数据缓存服务保存下来。
              // 下次打开小程序 首先去缓存中检查是否存在本地文件的缓存路径
              // 如果有，直接image src赋值本地缓存路径。
              //如果没有，则是第一次下载图片，或者用户手动清理缓存造成的。
              wx.setStorageSync('image_cache', res.savedFilePath)
            }
          })
        }else {
          console.log('响应失败', res.statusCode)
        }
      } 
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