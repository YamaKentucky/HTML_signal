var now = new Date();
function LoadProc() {
  var target = document.getElementById("now");

  var Year = now.getFullYear();
  var Month = now.getMonth()+1;
  var Date = now.getDate();
  var Hour = now.getHours();
  var Min = now.getMinutes();
  var Sec = now.getSeconds();

  target.innerHTML = Year + "年" + Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec;
}