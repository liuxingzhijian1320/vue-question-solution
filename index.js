//引入express中间件
var express = require('express');
var app = express();

//ip 的插件
const ip = require('ip');
const IP = ip.address();

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('./dist'));

// 监听端口为3000
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.info('复制打开浏览器', 'http://' + IP + ':' + port);
});

// 执行 npm install express ip -D
//node index.js