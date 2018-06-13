const electron = require('electron');
let inputpath;
exports.template = function(){
  var template = [
    {
      label: '文件',
      submenu: [{
        label: '打开',
        click: function(item, focusedWindow){
            let dialog = electron.dialog;
            dialog.showOpenDialog({
              properties:['openFile'],
              filters:[ {name: 'text files', extendsions:['json']}]
            }, function(res){
              //此处可以写处理imodel的函数
              if(res != null){
                inputpath = res[0];    
              } else {
                inputpath = "";
              }
            });    
          }
        },
        {
          label: '输出',
          click: function(item, focusedWindow){
            if(inputpath == ""){
              console.log('inputpath is null');
            } else {
              console.log(inputpath);    
            }
            
          }
        }
      ]
    }
  ];
  
  if (process.platform == 'darwin') {
    var name = require('electron').remote.app.getName();
    template.unshift({
      label: name,
      submenu: [
        {
          label: 'About ' + name,
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          label: 'Services',
          role: 'services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          label: 'Hide ' + name,
          accelerator: 'Command+H',
          role: 'hide'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Alt+H',
          role: 'hideothers'
        },
        {
          label: 'Show All',
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: function() { app.quit(); }
        },
      ]
    });
    // Window menu.
    template[3].submenu.push(
      {
        type: 'separator'
      },
      {
        label: 'Bring All to Front',
        role: 'front'
      }
    );
  }
  return template;
}