 var t = null;
      t = setTimeout(time, 50);
      function time() {
        clearTimeout(t);
        dt = new Date();
        var y = dt.getFullYear();
        var mt = dt.getMonth() + 1;
        var day = dt.getDate();
        var h = dt.getHours(); 
        var m = dt.getMinutes(); 
        var s = dt.getSeconds(); 
        document.querySelector(".showTime").innerHTML =
         h + "时" + m + "分" + s + "秒";
        t = setTimeout(time,1000); 
      }
   var stop, staticx;
var img = new Image();
img.src = "https://p1.xywm.ltd/2022/07/31/62e604b42d4cf.webp";

function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn
}
Sakura.prototype.draw = function(cxt) {
    cxt.save();
    var xc = 20 * this.s / 2;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 20 * this.s, 20 * this.s);
    cxt.restore()
};
Sakura.prototype.update = function() {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
        this.r = getRandom("fnr");
        if (Math.random() > 0.4) {
            this.x = getRandom("x");
            this.y = 0;
            this.s = getRandom("s");
            this.r = getRandom("r")
        } else {
            this.x = window.innerWidth;
            this.y = getRandom("y");
            this.s = getRandom("s");
            this.r = getRandom("r")
        }
    }
};
SakuraList = function() {
    this.list = []
};
SakuraList.prototype.push = function(sakura) {
    this.list.push(sakura)
};
SakuraList.prototype.update = function() {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update()
    }
};
SakuraList.prototype.draw = function(cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt)
    }
};
SakuraList.prototype.get = function(i) {
    return this.list[i]
};
SakuraList.prototype.size = function() {
    return this.list.length
};

function getRandom(option) {
    var ret, random;
    switch (option) {
        case "x":
            ret = Math.random() * window.innerWidth;
            break;
        case "y":
            ret = Math.random() * window.innerHeight;
            break;
        case "s":
            ret = Math.random();
            break;
        case "r":
            ret = Math.random() * 4;
            break;
        case "fnx":
            random = -0.5 + Math.random() * 1;
            ret = function(x, y) {
                return x + 0.5 * random - 1.7
            };
            break;
        case "fny":
            random = 1.5 + Math.random() * 0.7;
            ret = function(x, y) {
                return y + random
            };
            break;
        case "fnr":
            random = Math.random() * 0.03;
            ret = function(r) {
                return r + random
            };
            break
    }
    return ret
}

function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement("canvas"),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute("style", "position: fixed;left: 0;top: 0;pointer-events: none;");
    canvas.setAttribute("id", "canvas_sakura");
    document.getElementsByTagName("body")[0].appendChild(canvas);
    cxt = canvas.getContext("2d");
    var sakuraList = new SakuraList();
    for (var i = 0; i < 50; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom("x");
        randomY = getRandom("y");
        randomR = getRandom("r");
        randomS = getRandom("s");
        randomFnx = getRandom("fnx");
        randomFny = getRandom("fny");
        randomFnR = getRandom("fnr");
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura)
    }
    stop = requestAnimationFrame(function() {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee)
    })
}
window.onresize = function() {
    var canvasSnow = document.getElementById("canvas_snow")
};
img.onload = function() {
    startSakura()
};

function stopp() {
    if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false
    } else {
        startSakura()
    }
};

function show_date_time(){
                window.setTimeout("show_date_time()", 1000);
                BirthDay=new Date("07-11-2025 12:00:00");//建站日期
                today=new Date();
                timeold=(today.getTime()-BirthDay.getTime());
                sectimeold=timeold/1000
                secondsold=Math.floor(sectimeold);
                msPerDay=24*60*60*1000
                e_daysold=timeold/msPerDay
                daysold=Math.floor(e_daysold);
                e_hrsold=(daysold-e_daysold)*-24;
                hrsold=Math.floor(e_hrsold);
                e_minsold=(hrsold-e_hrsold)*-60;
                minsold=Math.floor((hrsold-e_hrsold)*-60);
                seconds=Math.floor((minsold-e_minsold)*-60);
                momk.innerHTML=daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒" ;
                }
                show_date_time();
