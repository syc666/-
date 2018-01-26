var t=document.getElementsByTagName('strong')[0];
function timeon(){
	var timer=setInterval(function(){
		t.innerHTML--;
		if (em.innerHTML>0) {em.innerHTML-=1;zhongpao.style.color="white";zhongpao.style.backgroundColor="blue"};
		if (em.innerHTML==0) {em.innerHTML="准备就绪";}
		if (em.innerHTML=="准备就绪") {zhongpao.style.color="yellow";zhongpao.style.backgroundColor="red"}
		if (em.innerHTML==13) {bowen.y=300;}
		if (t.innerHTML<0) {
			score.gameover=true;
		   t.innerHTML=0;
	       clearInterval(timer);
        }
	},1000)
	
}
timeon();
