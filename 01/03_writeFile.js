var fs = require('fs')

/**
 * 第一个参数：要写入的文件路径
 * 第二个参数：要写入的内容
 * 第三个参数：回调函数
 */
fs.writeFile('./data/b.mds+', '你好，我是node.js', function (error) {
  if (error) {
    console.log('文件写入失败')
  } else {
    console.log('文件写入成功')
  }
})