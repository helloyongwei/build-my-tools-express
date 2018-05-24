# 实现
总体的目录机构
```
bin
    --www
lib
    --express.js
    --mime.js
node_modules
    --文件略
static
    css
        --style.css
    imgs
        --1.jpg
    js
        --script.js
    --index.html
```
在`bin/www`文件中启动服务器, `www`文件的内容为:
```
#!/usr/bin/env node

var app=require('../app')
var http=require('http')
http.createServer(app).listen(8888)
console.log('open http://localhost:8888')
```
注意我们引入了`app`模块, 则`app.js`文件内容.



# 使用
运行程序需要使用`node`. 因此需要提前安装[node](https://nodejs.org/en/download/)

将库克隆到本地:
```
git@github.com:helloyongwei/build-my-tools-express.git
```
进入文件夹:
```
cd build-my-tools-express
```
执行命令:
```
node bin/www
```
在浏览器打开网址[http://localhost:8888](http://localhost:8888) 即可
