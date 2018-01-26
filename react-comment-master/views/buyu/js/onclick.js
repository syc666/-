 
 can2.onclick=function(e){
    if (!score.gameover) {
      //点击炮车图片的参数循环一次
      var timer=setInterval(function(){
        if (paocheCount<7) {
         paocheCount ++;} 
      },100)    
      if (paocheCount!=1) {clearInterval(timer);}
      paocheCount=1;
     
     //点击是获取坐标点，然后计算出和子弹固定射出点的角度，创建一个带有固定角度子弹对象
     var bbox = can2.getBoundingClientRect();
     var dx =  e.clientX - bbox.left * (can2.width/bbox.width);
     var dy = e.clientY - bbox.top * (can2.height/bbox.height);
     var jiaodu=Math.atan2(dx-407,dy-560)-Math.PI/2; 
     ajiaodu.push(jiaodu);
  
     var bu=new paodanObj();
     bull.push(bu);
     bu.init();
     bu.draw();
     
     

     setTimeout(function(){
      if (bu.alive==false) { score.scoreNum+=50;}
      if(Math.random()>0.95){
        score.scoreNum+=500;
        score.addmany=true;
        setTimeout(function(){
          score.addmany=false
        },2000)
      }
     },1000)

     shuoming.style.zIndex=-1;
     
  }
}

var play=document.getElementById('play');
play.onclick=function(){
  
    location.reload();
  
}

var yin=document.getElementById('yin');
var audio=document.getElementsByTagName('audio')[0];
yin.onclick=function(){
  if (audio.paused) {
    audio.play();
    yin.src="img/yin1.png";
  }else{
    audio.pause();
    yin.src="img/yin2.png";
  }
}

var zhongpao=document.getElementById('zhong');
var em=document.getElementsByTagName('em')[0];
zhongpao.onclick=function(){
  if (em.innerHTML=="准备就绪") {
  for(var i=0;i<30;i++){allfish[i].alive=false};
  Math.random()>0.8?score.scoreNum+=800:score.scoreNum+=400;
  em.innerHTML=15;
  bowen.y=0;
  console.log(bowen.y);
 }
}

var jia=document.getElementById('jia');
var jian=document.getElementById('jian');
jia.onclick=function(){
  if (sudu<0.6) {sudu+=0.1};
  
}
jian.onclick=function(){
  if (sudu>0.2) {sudu-=0.1}
}

var readme=document.getElementById('readme');
var shuoming=document.getElementById('shuoming')
readme.onclick=function(){
  shuoming.style.zIndex=11;
}
