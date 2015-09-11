window.onload = function() {
    var current_window = chrome.app.window.current();

    document.getElementById('close').onclick = function(){
        current_window.hide();
    }

    document.getElementById('minimize').onclick = function(){
        current_window.minimize();
    }

    document.getElementById('close').onclick = function(){
        current_window.close();
    }

    document.getElementById('maximize').onclick = function(){
        current_window.isMaximized()?current_window.restore():current_window.maximize();
    }
    
    if(current_window.focused){
        alert("活动窗口!");
    }
}

