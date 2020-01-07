//类似安卓toast
function toast(msg="Toast内容",local=-1) {
	// local 位置
	// 	1 上
	// 	0 中
	// 	-1 下
	var time=3000;
	var m = document.createElement('div');
	m.innerHTML = msg;
	m.style.cssText="max-width:60%;min-width: 150px;height:40px;color:#FFFFFF;line-height:40px;text-align:center;padding:5px 15px;border-radius:6px;position:fixed;left:50%;top:80%;background:#C0C0C0;font-size: 14px;transform: translate(-50%, -50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);z-index: 999999;";
	if(isNaN(local)==false && local==1){
		m.style.top="20%";
	}
	if(isNaN(local)==false && local==0){
		m.style.top="50%";
	}
	  document.body.appendChild(m);
		setTimeout(function() {
			document.body.removeChild(m);
		}, time);
}
