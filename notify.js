/*! Copyright (c) 2016 Rene Tanczos <gravmatt@gmail.com> - The MIT License (MIT) */
var notify = function (title, options) {
    var guid = function() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      };

    if (!'Notification' in window) {
        return;
    }
    if (Notification.permission === 'default') {
        Notification.requestPermission(function () {
            notify(title, options);
        });
    }
    else if (Notification.permission === 'granted') {
        opt = options || {}
        opt.tag = guid()
        var n = new Notification(title, opt);
        n.onclick = function () {
            opt.onclick && opt.onclick(this);
            this.close();
        };
        n.onclose = function () {
            opt.onclose && opt.onclose(this);
        };
    }
    else if (Notification.permission === 'denied') {
        (options && options.ondenied) && options.ondenied(this);
    }
};
