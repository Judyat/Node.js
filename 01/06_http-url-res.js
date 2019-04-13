var http = require('http');

//1.创建 Server
var server = http.createServer();

//2.监听 request 请求事件，设置请求处理函数
server.on('request', function (req, res) {
  console.log("客户已经发请求啦。。。,请求的url为：", req.url)
  // res.write('hello nodejs!!!!');
  // res.end();

  //上面的方式比较麻烦，推荐使用更简单的方式，直接 end 的同时发送响应数据
  // res.end('hello maomao!!')

  /**
   * 根据不同的请求路径发送不同的响应结果
   * 1.获取请求路径
   *   req.url 获取到的是端口号之后的那一部分路径
   *   也就是说所有的 url 都是以 / 开头的
   * 2.判断路径处理响应
   */

  var url = req.url;

  if (url === '/') {
    res.end('index page')
  } else if (url === '/login') {
    res.end('login page')
  } else if (url === '/products') {
    var products = [
      {
        name: '苹果 X',
        price: 8888
      },
      {
        name: '菠萝 X',
        price: 5000
      },
      {
        name: '小辣椒 X',
        price: 1999
      }
    ]

    //响应内容只能是 二进制 或 字符串
    res.end(JSON.stringify(products))
  } else {
    res.end('404 Not Found')
  }

})

//3.绑定端口号，启动服务
server.listen(5000, function () {
  console.log("服务器已经启动成功啦。。。")
})