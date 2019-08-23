//第一题
// for(var a=1;a<=1000;a++){
// 	if(a%5 ==0){
// 		console.log(a +"这个可以把5整除");
// 	}else if(a%6 ==0){
// 		console.log(a+ "这个可以把6整除")
// 	}
// }

//第二题
// var a = parseInt(prompt("请输入一个数"));
// var he = 0;
// for (var b=1;b<=a;b++) {
// 	if(!isNaN(a)){
// 		he = he+b;
// 	}
// }
// console.log(he);




//第三题
// var a =  parseInt(prompt("请输入一个数"));
// var b = 0;
// var c = 0;
// for (var i=3;i<=a;i++) {
// 	for (var d=2;d<=a;d++) {
// 		if (!isNaN(a)) {
// 			b = i /d;
// 			c = b + c;
// 		}
// 	}
// }
// console.log(c);



// var a = parseInt(prompt("请输入一个数"));
// for (var i=1;i<=a;i++) {
// 	if( a%i ==0){
// 		console.log(i + "是"+ a + "的约数")
// 	}
// }



//第九题
var num =0;
for (var i=1;i<=10000;i++) {
	for (var j=1;j<=i;j++) {
		if (i%j ==0) {
			num++;
		}
	}
	if(num == 2){
		console.log(i + "是质数")
	}
}