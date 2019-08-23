// for(var i=20;i>=1;i--){
// 	console.log(i);
// }




// for 水花数
for (var a = 1000; a <= 9999; a++) {
	var ge = a % 10; 
	var shi = (a - ge) / 10 % 10; 
	var bai = parseInt(a/100%10);
	var qian = parseInt(a / 1000);
	var b = Math.pow(ge, 4) + Math.pow(shi, 4) + Math.pow(bai, 4) + Math.pow(qian, 4);
	if (a == b) {
		console.log(a + "是水花数");
	}
}
