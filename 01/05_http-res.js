var http = require('http');

var server = http.createServer()

server.on('request', function (request, response) {
  console.log("收到客户的请求啦。。。", request.url)
  response.write('hello nodejs')
  response.end()
})

server.listen(5000, function () {
  console.log("服务器已经响应了。。。")
})