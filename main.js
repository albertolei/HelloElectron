const {app, BrowserWindow} = require('electron');
const {Menu} = require('electron');
const template = require('./menutemplate');
let win;
let windowConfig = {
    width:800,
    height:600
};
function createWindow(){
    win = new BrowserWindow(windowConfig);
    win.loadURL(`file://${__dirname}/index.html`);
    // win.webContents.openDevTools();
    win.on('close',()=>{
        win = null;
    });
    win.on('resize', ()=>{
        win.reload();
    });
    const menu = Menu.buildFromTemplate(template.template());
    Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);
app.on('window-all-closed',()=>{
    app.quit();
});
app.on('activate',()=>{
    if(win == null){
        createWindow();
    }
});