var baseUrl = "http://39.104.106.73/";

var rh = new Object();
rh.ReqId = "ls123";
rh.Salt = "sssseee";

//检查登录信息
function checkLogin() {
	var sesid = localStorage.getItem("sesid");
	if(sesid == null || sesid == "") {
		denglu();
		return;
	}//if
return sesid;
} //checkLogin

function checkCurrentUser(data){
	if (data.RespHead.ResponseCode != 0) {
		denglu();
		return;
	}
}

function denglu(){
	//打开新窗口
		mui.openWindow({
			url: 'myinfo/denglu.html', //需要打开页面的url地址 
			id: 'cs', //需要打开页面的url页面id
			styles: {
				top: '0px', //新页面顶部位置 
				bottom: '0px', //新页面底部位置 
				//					width:newpage-width,//新页面宽度，默认为100% 
				//					height:newpage-height,//新页面高度，默认为100% ...... 
			},
			extras: {
//				nologin:'ng'nologin
			},
			show: { //控制打开页面的类型
				autoShow: true,
				//					//页面loaded事件发生后自动显示，默认为true 
				aniShow: 'zoom-fade-out', //页面显示动画，默认为”slide-in-right“；  页面出现的方式 左右上下
				duration: '300' //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒； 
			},
			waiting: { // 控制 弹出转圈框的信息
				autoShow: true, //自动显示等待框，默认为true 
				title: '正在加载...', //等待对话框上显示的提示内容 
				options: {
					width: '300px', //等待框背景区域宽度，默认根据内容自动计算合适宽度 
					height: '300px', //等待框背景区域高度，默认根据内容自动计算合适高度 ...... 
				}
			}
		}); //openWindow
}//denglu
