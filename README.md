## 1.Node.js介绍
### 1.1 Node.js 是什么
+ Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
  + Node.js 不是一门语言
  + Node.js 不是库、不是框架
  + Node.js 是一个 JavaScript 运行时环境
  + 简单点来讲就是 Node.js 可以解析和执行 JavaScript 代码
  + 以前只有浏览器可以解析执行 JavaScript 代码
  + 也就是说现在的 JavaScript 可以完全脱离浏览器来运行，一切都归功于：Node.js
+ 浏览器中的 JavaScript 
  + ECMAScript
    + 基本的语法
    + if
    + var
    + function
    + Object
    + Array
  + BOM
  + DOM
+ Node.js 中的 JavaScript
  + **没有BOM、DOM**
  + ECMAScript
  + 在 Node 这个 JavaScript 执行环境中为 JavaScript 提供了一些服务器级别的操作 API
    + 例如文件读写
    + 网络服务的构建
    + 网络通信
    + http 服务器
    + 等处理。。。
+ 构建于 Chrome 的 V8 引擎之上
  + 代码只是具有特定格式的字符串而已
  + 引擎可以认识它，引擎可以帮你去解析和执行
  + Google Chrome 的 V8 引擎是目前公认的解析执行 JavaScript 代码最快的
  + Node.js 的作者把 Google Chrome 中的 V8 引擎移植了出来，开发了一个独立的 JavaScript 运行时环境。


### 1.2 Node.js能做什么
+ Web 服务器后台
+ 命令行工具
  + npm(node)
  + git(C语言)
  + hexo(node)
  + ...
+ 对于前端开发工程师来讲，接触 node 最多的是它的命令行工具
  + 自己写的很少，主要是使用别人第三方的
  + webpack
  + gulp
  + npm



### 1.3 一些资源
+ 《深入浅出Node.js》
  + 朴灵
  + 偏理论，几乎没有任何实战内容
  + 理解原理底层有帮助
  + 结合课程的学习去看
+ 《Node.js权威指南》
  + API 讲解
  + 也没有业务，没有实战
+ JavaScript 标准参考教程（alpha）:http://javascript.ruanyifeng.com
+ Node 入门：http://www.nodebeginner.org/index-zh-cn.html
+ 官方API文档：https://nodejs.org/dist/latest-v6.x/docs/api/
+ 中文文档（版本比较久旧，凑合看）：http://www.nodeclass.com/api/node.html
+ CNODE社区：http://cnodejs.org
+ CNODE-新手入门：http://cnodejs.org/getstart



### 1.4 这门课程你能学到啥？
+ B/S 编程模型
  + Browser - Server
  + back-end
  + 任何服务器端技术这种 BS 编程模型都是一样的，和语言无关
  + Node 只是作为我们学习 BS 编程模型的一个工具而已
+ 模块化编程
  + RequireJS
  + SeaJS
  + `@import('文件路径')`
  + 以前认知的 JavaScript 只能通过 `script` 标签来加载
  + 在 Node 中可以像 `@import()` 一样来引用加载 JavaScript 脚本文件
+ Node 常用 API
+ 异步编程
  + 回调函数
  + Promise
  + async
  + generator
+ Express Web 开发框架
+ ECMAScript 6
  + 在课程中穿插讲解
  + 它只是一个新的语法而已
+ ...
+ 学习 Node 不仅会帮助大家打开服务器黑盒子，同时会帮助你学习以后的前端高级内容
  + Vue.js
  + React
  + Angular




## 2.起步 

### 2.1 安装 Node 环境
+ 查看当前 Node 环境的版本号
+ 下载：https://nodejs.org/en/
+ 安装
+ 确认 Node 环境是否安装成功
  + 打开命令行，输入`node --version`
  + 或者`node -v`
+ 环境变量

### 2.2 Hello World
#### 2.2.1 解析执行 JavaScript
1. 创建编写 JavaScript 脚本文件
2. 打开终端，定位到脚本文件所属目录
3. 输入 `node 文件名` 执行对应的文件
```
var foo = 'hello world'

console.log("foo--", foo)

//在控制台输入以下命令：
node helloworld.js   //执行文件
```
注意：文件名不要使用 `node.js` 来命名，也就是说除了 `node` 这个名字你随便起，而且最好也不要使用中文

#### 2.2.2 文件读写
文件读取：
```
/**
 * 浏览器中的 JavaScript 是没有文件操作的能力的
 * 但是 Node 中的 JavaScript 具有文件操作的能力
 * 
 * fs 是 file-system 的简写，就是文件系统的意思
 * 在 Node 中，如果想要进行文件操作，就必须引入 fs 这个核心模块
 * 在 fs 这个核心模块中，就提供了所有的文件操作相关的 API
 * 例如：fs.readFile 就是用来读取文件的
 */

// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs');


/** 
 * 2. 读取文件
 *     第一个参数：要读取的文件路径
 *     第二个参数：是一个回调函数
 *                (error,data)
 *                成功：
 *                    data 数据
 *                    error null
 *                失败：
 *                    data undefined
 *                    error 错误对象
*/
fs.readFile('./data/a.txt', function (error, data) {
  // console.log(data);
  /**
   *  <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
   * 文件中存储的其实都是二进制数据 0 1
   * 这里为什么看到的不是 0 和 1 呢？原因是二进制转为 16 进制了
   * 但是无论是二进制还是 16 进制，人类都不认识
   * 所以我们可以通过 toString 方法
   */
  console.log("error:", error, "data:", data.toString())
})
```

文件写入：
```
var fs = require('fs')

/**
 * 第一个参数：要写入的文件路径
 * 第二个参数：要写入的内容
 * 第三个参数：回调函数
 */
fs.writeFile('./data/b.md', '你好，我是node.js', function (error) {
  if (error) {
    console.log('文件写入失败')
  } else {
    console.log('文件写入成功')
  }
})
```

#### 2.2.3 http
很傻的服务器：
```
//在 Node 中专门提供了一个核心模块：http
//http 这个模块的职责就是帮助你创建编写服务器的

//1.加载 http 核心模块
var http = require('http');

//2.使用 http.createServer() 方法创建一个 Web 服务器
//  返回一个 server 实例
var server = http.createServer();

/**
 * 3.服务器要干嘛？
 *   提供服务：对数据的服务
 *   发请求
 *   接收请求
 *   处理请求
 *   给个反馈（发送响应）
 *   注册 request 请求事件 
 *   当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数：回调处理
 */
server.on('request', function (request, response) {
  console.log("收到客户的请求啦。。。", request.url)
  //不管 request.url 是啥，都只会输出 'hello nodejs'
  response.write('hello nodejs')
  response.end()
})

//4.绑定端口号，启动服务器
server.listen(4000, function () {
  console.log('服务器已经启动成功了，可以通过 http://192.168.99.247:4000/ 来进行访问')
})
```
![1555117727692](C:\Users\18518\AppData\Local\Temp\1555117727692.png)

可以有选择的响应：
```
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
```



## 3.Node 中的 JavaScript
+ ECMAScript
+ 核心模块
+ 第三方模块
+ 用户自定义模块

### 3.1 核心模块