function waitFive(name,function_name){
	var pus=0;
	var currentDate=new Date();
	while(pus<5000){//等待5秒
		var now=new Date();
		pus=now-currentDate;
	}
	function_name(name);//执行回调函数
}
function echo(name){//定义回调函数
	console.log(name);
}
waitFive("danhuang",echo);//调用waitFive方法
console.log("its over");
