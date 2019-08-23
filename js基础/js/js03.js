// var xingzuo = prompt("请输入你的星座");
// switch(xingzuo){
// 	case"白羊座":
// 		alert("今天要注意调整自己的状态，有些人的睡眠质量比较差");
// 		break;
// 	case"金牛座":
// 		alert("今天会在感情方面遇到一些小小的问题");
// 		break;
// 	case"双子座":
// 		alert("要做好心理准备会在工作上被他人挑剔找茬，这是你避免不了的事情");
// 		break;
// 	case"巨蟹座":
// 		alert("工作上要打醒十二分精神，要不然很大可能会经常要返工哦");
// 		break;
// 	case"狮子座":
// 		alert("恋爱中的人今天的心有点摇摆不定，有人可能会有精神上的出轨");
// 		break;
// 	default:
// 	alert("对不起，我们没有收录你的星座运势！");
// 	break;
// }










var month = parseInt(prompt("请输入一个数字"));
switch(month){
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		alert("这个月有31天");
		break;
	case 4:
	case 6:
	case 9:
	case 11:
		alert("这个月有30天");
		break;
	case 2:
		alert("这个月一般来说28天，二般来说29");
	default:
		break;
}