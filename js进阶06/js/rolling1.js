(function(){
	var rolling=document.getElementById("rolling1");//大盒子
	var m_unit=document.getElementById("m_unit1");//运动的单位
	var listul=m_unit.getElementsByTagName("ul")[0];//ul
	var imgs=listul.getElementsByTagName("img");//所有的图片
	var zhefandian;
	//复制li
	listul.innerHTML+=listul.innerHTML;
	//所有的li，包括新的li
	var lis=listul.getElementsByTagName("li");
	var lislength=lis.length;
	//offsetLeft折返点，[lislength/2]
	for (var i=0,count=0;i<imgs.length;i++) {
		imgs[i].onload=function(){
			count++;
			if(count==imgs.length){
				zhefandian=lis[lislength/2].offsetLeft;
				//开始运动
				move();
			}
		}
	}
	
	var nowleft=0;
	var timer;
	
	//鼠标移入
	rolling.onmouseover=function(){
		clearInterval(timer);
	}
	//鼠标移出
	rolling.onmouseout=function(){
		move();
	}
	function move(){
		clearInterval(timer);
		timer=setInterval(function(){
			nowleft-=5;
			if (nowleft<-zhefandian) {
				nowleft=0;
			}
			m_unit.style.left=nowleft+"px";
		},20)
	}
})();
