# HelloElectron
2018.6.12为了测试electronjs框架，建立此项目。
## 关于electron框架
以nodejs为基础，可以将html、js、css构建成跨平台的桌面应用。<br>
相当于nodejs的一个库，该库的功能就是将原本需要运行在浏览器或nodejs服务器端的程序以桌面应用程序的形式运行。<br>
这样做的好处是对于不同平台，只需要一套界面和业务代码，提高了代码的复用性和跨平台能力。<br>
该库的使用方式如下。
## 建立步骤
a. 在自己的workspace下新建文件夹，文件夹名为项目名；
b. 然后运行 npm(cnpm) init，根据提示输入相关项，结束后会在项目目录下生成package.json，里面有项目相关信息；
c. 运行npm(cnpm) install -g electron 安装项目依赖； 
d. 在项目目录下建立index.html（页面显示）、main.js（处理操作）两个文件，此时，项目目下共有三个文件：index.html,main.js,package.json;
e. 然后编辑index.html的代码如下：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>hello electron</h1>
</body>
</html>
```
f. 然后编辑main.js的代码如下：
```
const {app, BrowserWindow} = require('electron');
let win;
let windowConfig = {
    width:800,
    height:600
};
function createWindow(){
    win = new BrowserWindow(windowConfig);
    win.loadURL(`file://${__dirname}/index.html`);
    //开启调试工具
    win.webContents.openDevTools();
    win.on('close',() => {
        //回收BrowserWindow对象
        win = null;
    });
    win.on('resize',() => {
        win.reload();
    })
}

app.on('ready',createWindow);
app.on('window-all-closed',() => {
    app.quit();
});

app.on('activate',() => {
    if(win == null){
        createWindow();
    }
})
```
g. 在package.json文件里添加start字段：
```
"start": "electron ."
```
package.json的代码如下：
```
//在b步骤内输入的相关参数
{
  "name": "zzh", 
  "version": "0.0.1",
  "description": "a simple application",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron ."
  },
  "author": "zzh",
  "license": "ISC"
}
```
h. 运行npm(cnpm) start启动项目。
## 打包项目
a. 在项目目下运行npm(cnpm) install -g electron-packager；<br>
b. 运行以下代码：
> electron-packager . HelloWorld(软件名称，自己起) --win(平台，此处为windows) --out ../HelloWorldApp(目的目录) --arch=x64(系统架构，32位还是64位，此处为64位，32位的写ia32)  --electron-version=1.4.13(electron版本)

c. 然后在目的目录里寻找生成exe文件即可。