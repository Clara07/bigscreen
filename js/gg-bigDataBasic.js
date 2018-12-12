var timer=null;
var show = document.getElementById('gg_rightNow');
function displayClock(num){//num是传入的startClock中的动态值
    if(num<10){
        return "0"+num;
    }
    else{
        return num;
    }
}
//停止计时
function stopClock(){
    clearTimeout(timer);
}
//开始计时
function startClock(){
    var time =new Date();
    var year = time.getFullYear()+"年";
    var month = (time.getMonth()+1)+"月";
    var day = time.getDate()+"日";
    var hours=displayClock(time.getHours())+":";
    var minutes=displayClock(time.getMinutes())+":";
    var seconds=displayClock(time.getSeconds());
    //显示时间
    show.innerHTML=year+month+day+hours+minutes+seconds;//在id为show的块区域显示
    timer=setTimeout("startClock()",1000);//延时器
}