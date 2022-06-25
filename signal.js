let colorFlg=0;
var now = new Date();
var tim_red =10;//124;
var tim_blue = 20;
var base_time=40500;//11:15:00
var time_left=0;
var meter_cor=0;

function changeColor(idname,flg){
    var obj = document.getElementById(idname);
    if(flg==0){
        obj.style.color = '#ffffff';            //文字色を白にする
        obj.style.backgroundColor = 'red';  //背景色を赤にする
        // document.getElementById("myicon2").style.setProperty("--logo-color","yellow");
        
        document.documentElement.style.setProperty('--singou_1','red');
        document.documentElement.style.setProperty('--singou_2','black');

    }else{
        obj.style.color = '#ffffff';            //文字色を白にする
        obj.style.backgroundColor = 'blue';  //背景色を赤にする
        
        document.documentElement.style.setProperty('--singou_1','black');
        document.documentElement.style.setProperty('--singou_2','blue');
    }

}

function reset_meter(idname,color){
    for (i=1;i<=10;i++){
    // for (i=4;i<=10;i++){
        var meter="--meter"+i;
        document.documentElement.style.setProperty(meter,color);
    }
}

function change_meter(idname,color,meter_base){
    var obj = document.getElementById(idname);
    time_meter =  time_left/meter_base *10;

    for (i=parseInt(time_meter)+1;i<=10;i++){
    // for (i=4;i<=10;i++){
        var meter="--meter"+i;
        document.documentElement.style.setProperty(meter,"black");
    }
    // if (parseInt(time_meter)==0){
    //     reset_meter("left_signal_svg",color)
    // }
    document.getElementById("meter-time").textContent = parseInt(time_meter);
    meter_cor+=1;
    if (meter_cor==10){
        meter_cor=0;
    }
}

// timerID = 
setInterval('clock()',300); //0.5秒毎にclock()を実行
setInterval('time_count()',1000); //0.5秒毎にclock()を実行


function clock() {
	document.getElementById("view_clock").innerHTML = getNow();
}

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
    var mil = now.getMilliseconds();

    //信号タイミング計算
    var t_sec = (3600*hour + 60*min + sec)-base_time;
    if ((t_sec-tim_red)%(tim_blue+tim_red)<=tim_blue){
        reset_meter("left_signal_svg","blue")
        time_left=tim_blue- (t_sec-tim_red)%(tim_blue+tim_red);
        document.getElementById("timer-time").textContent = time_left;
        changeColor("left_signal_svg",1);
        change_meter("left_signal_svg","blue",tim_blue);//青
        
    }else if(t_sec%(tim_blue+tim_red)<=tim_red){
        reset_meter("left_signal_svg","red")
        time_left = tim_red - (t_sec)%(tim_blue+tim_red);
        document.getElementById("timer-time").textContent = time_left
        changeColor("left_signal_svg",0);
        change_meter("left_signal_svg","red",tim_red);//赤
        
    }
    
	var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒" ; 
    
	return s;
}


// var i = 1
// var time=10
// function time_count() {
//     var count = time-i;
// 	document.getElementById("timer-time").textContent = count;
//     i++;
// }

