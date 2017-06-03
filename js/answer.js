function Person(){
	this.think=function(callback){//定义Person对象的think方法
		setTimeout(function(){console.log('think^^^!');callback()},5000);
	}
	this.answer=function(){
			console.log('I am answering other question');
	}
}
var person=new Person();//new创建Person对象
person.think(function(){
	console.log('thinking 5 second, get the right answer!')
	
});
person.answer();//根据Person对象调用answer方法


//5秒之后执行callback函数
//setTimeout()是异步函数

