var money = parseInt(prompt("请输入预算价格"));
if (!isNaN(money) && money % 1000 == 0) {
	switch (money) {
		case 1000:
			document.write("<img src ='phone/1000/honor.jpg'><img src ='phone/1000/redmi.jpg'>");
			break;

		case 2000:
			document.write("<img src ='phone/2000/9x.jpg'><img src ='phone/2000/miplay.jpg'><img src ='phone/2000/nova.jpg'>");
			break;

		case 3000:
			document.write("<img src ='phone/3000/blackshark.jpg'/><img src ='phone/3000/iqco.jpg'><img src ='phone/3000/mi9.jpg'>");
			break;
		default:
			document.write("<img src='phone/3000+/hwmate20.jpg' /><img src='phone/3000+/iphonexr.jpg'><img src='phone/3000+/samsung.jpg'>");
			break;
	}
} else {
	alert("请重新输入");
}
