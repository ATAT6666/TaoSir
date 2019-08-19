var a1 = parseInt(prompt("请输入一个数字"));
var a2 = parseInt(prompt("请输入另一个数字"));
var a3 = parseInt(prompt("请输入最后一个数字"));
// if (!isNaN(a1) === false && !isNaN(a2) === false && !isNaN(a3) === false) {
// 	alert("俩次输入的数字加起来合" + (a1 + a2 - a3));
// }	else {
// 	alert("前二减去最后" + (a1 + a2 - a3));
// }
if(isNaN(a1) === false){
	if(isNaN(a2) === false){
		if(isNaN(a3) === false){
			alert("前俩个数字加和减去最后一个数字" + (a1+a2-a3));
		}
	}
}