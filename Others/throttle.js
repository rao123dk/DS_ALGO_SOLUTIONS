function throttle(func, timeFrame) {
    var lastTime = 0;
    return function () {
        var now = +new Date();
        if (now - lastTime >= timeFrame) {
            func();
            lastTime = now;
        }
    };
}

var yy = throttle(()=>"hhh", 4000)

yy()