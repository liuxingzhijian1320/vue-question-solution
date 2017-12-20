
export function userAgent(){

  Modernizr.addTest('chrome', function () {
    return navigator.userAgent.match(/(Mozilla)/g) ? true : false
  })


  Modernizr.addTest('weixin', function () {
    return navigator.userAgent.match(/(MicroMessenger)/g) ? true : false
  })

  Modernizr.addTest('zhifubao', function () {
    return navigator.userAgent.match(/(Alipay)/g) ? true : false
  })

}





