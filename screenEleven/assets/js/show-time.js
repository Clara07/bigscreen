$(function(){
    function showTime(){
        var myDate = new Date();
//获取当前年
        var year=myDate.getFullYear();
//获取当前月
        var month=myDate.getMonth()+1;
//获取当前日
        var date=myDate.getDate();
        var h=fnW(myDate.getHours());       //获取当前小时数(0-23)
        var m=fnW(myDate.getMinutes());     //获取当前分钟数(0-59)
        var s=fnW(myDate.getSeconds());
        $('.date-year').text(year);
        $('.date-month').text(month);
        $('.date-day').text(date);
        $('.date-hour').text(h);
        $('.date-minus').text(m);
        $('.date-second').text(s);

/*
        var weekday=new Array(7);
        weekday[0]="星期天";
        weekday[1]="星期一";
        weekday[2]="星期二";
        weekday[3]="星期三";
        weekday[4]="星期四";
        weekday[5]="星期五";
        weekday[6]="星期六";
        var week=weekday[myDate.getDay()];
        $('.date-week').text(week);*/

    };
    //延时器
    setInterval(function(){
        showTime();
    },1000);
    function fnW(str){
        var num;
        str>=10?num=str:num="0"+str;
        return num;
    }
})
