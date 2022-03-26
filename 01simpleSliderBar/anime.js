

//左侧动画函数
function leftanimate(obj, target,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}



//右侧动画函数
function rightanime(obj, target) { 
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - parseInt(obj.style.right)) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
    
        if (parseInt(obj.style.right) == target) {
            clearInterval(obj.timer);
        }
        obj.style.right = parseInt(obj.style.right) + step + 'px';
        console.log(parseInt(obj.style.right));

    }, 15)
}


//上方动画函数
function topanimate(obj, target,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.top = obj.offsetTop + step + 'px';
    }, 15)
}

//下方动画函数
function bottomanime(obj, target) { 
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - parseInt(obj.style.bottom)) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
    
        if (parseInt(obj.style.bottom) == target) {
            clearInterval(obj.timer);
        }
        obj.style.bottom = parseInt(obj.style.bottom) + step + 'px';
        console.log(parseInt(obj.style.bottom));

    }, 15)
}