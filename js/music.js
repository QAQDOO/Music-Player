


//���ֲ����� music
//�������� canvasholder
function audioContext(music,canvasholder){
window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;
window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;
window.onload=function(){
var audio=music;
//����Ƶ��
var actx=new AudioContext();
var analyser=actx.createAnalyser();
var audioSrc=actx.createMediaElementSource(audio);//��Դ
audioSrc.connect(analyser);
analyser.connect(actx.destination);
var can=canvasholder;
var w=window.innerWidth;
h=110;
can.width=w;
can.height=h;
window.onresize=function(){
	var w=window.innerWidth;
	can.width=w;
};
var cxt=can.getContext("2d");
color=cxt.createLinearGradient(can.width*.5,0,can.width*.5,110);
color.addColorStop(0,"#00f");
color.addColorStop(0.5,"#f00");
color.addColorStop(1,"#0f0");
var num=100;
function draw(){
	var voicehigh=new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(voicehigh);
	var step=Math.round(voicehigh.length/num);
	cxt.clearRect(0,0,can.width,can.height);
	cxt.beginPath();
	for(var i=0;i<num;i++){
		var value=(voicehigh[step*i])/3;
		cxt.fillStyle=color;
		cxt.fillRect(i*10+can.width*.5,110,7,-value+1);
	}
	requestAnimationFrame(draw)
}
draw();
};
function id (idName){
	return document.getElementById(idName);

	}
}