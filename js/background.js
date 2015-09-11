chrome.app.runtime.onLaunched.addListener(function () {
    var main_window = chrome.app.window.get('index');
    if(main_window){
        main_window.show();
    }else{
        chrome.app.window.create('index.html', {
            id: 'index',
            innerBounds: {
              width: 960,
              height: 800,
              minWidth: 800,
              minHeight: 700,
              maxWidth: 960,
              maxHeight: 800
            },
            frame: 'none',
            resizable: false
        });
    }
});
