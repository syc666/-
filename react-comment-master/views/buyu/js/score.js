var scoreObj=function(){
	this.diefish;
	this.scoreNum;
	this.gameover;
	this.alpha;
    this.addmany;
}

scoreObj.prototype.init=function(){
    this.alpha=0;
    this.diefish=0;
	this.scoreNum=0;
	this.gameover=false;
    this.addmany=false;
}

scoreObj.prototype.draw=function(){
	var w = can1.width;
    var h = can1.height;

    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "#fff";
    ctx2.fillStyle = "#fff";
    ctx2.font = "30px Verdana";
    ctx2.textAlign = "center";
    ctx2.fillText("Score: "+this.scoreNum,w/2+200,h-40);
    if(this.gameover){
        this.alpha += deltaTime*0.0005;
        if(this.alpha >1)this.alpha=1;
        ctx2.fillStyle = "rgba(255,255,255,"+this.alpha+")";
        ctx2.fillText("GAME OVER",w/2,h/2);
        
    }
    if (this.addmany==true) {
        this.alpha=1;
        ctx2.fillStyle = "rgba(255,0,0,1)";
        ctx2.fillText("恭喜你，打到藏宝鱼了，获得500元",w/2,h/2);
    }
    

    ctx2.restore();
    
}