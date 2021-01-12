//Floating Décor

//by suiomi.com

//--

//[ Change Log ]

//Version 2 - 12th January 2021
//- Hosting changed.
//- Fixed objects not showing up.

//--

//This work is protected under the Terms of Use available at
//suiomi.com/legal
 
// Viewing this source code is prohibited. Please close this window immediately.

$(document).ready(function(){var Circumstant=function(t){this.viewport=t,this.world=document.createElement("div"),this.obiecti=[],this.options={numObiecti:40,ventus:{magnitude:1.2,maxSpeed:2,duration:200,start:0,speed:0}},this.width=this.viewport.offsetWidth,this.height=this.viewport.offsetHeight,this.timer=0,this._resetObiectus=function(t){t.x=2*this.width-Math.random()*this.width*1.75,t.y=-10,t.z=200*Math.random(),t.x>this.width&&(t.x=this.width+10,t.y=Math.random()*this.height/2),0==this.timer&&(t.y=Math.random()*this.height),t.rotation.speed=10*Math.random();var i=Math.random();return i>.5?t.rotation.axis="X":i>.25?(t.rotation.axis="Y",t.rotation.x=180*Math.random()+90):(t.rotation.axis="Z",t.rotation.x=360*Math.random()-180,t.rotation.speed=3*Math.random()),t.xSpeedVariation=.8*Math.random()-.4,t.ySpeed=Math.random()+1.5,t},this._updateObiectus=function(t){var i=this.options.ventus.speed(this.timer-this.options.ventus.start,t.y)+t.xSpeedVariation;t.x-=i,t.y+=t.ySpeed,t.rotation.value+=t.rotation.speed;var e="translateX( "+t.x+"px ) translateY( "+t.y+"px ) translateZ( "+t.z+"px )  rotate"+t.rotation.axis+"( "+t.rotation.value+"deg )";"X"!==t.rotation.axis&&(e+=" rotateX("+t.rotation.x+"deg)"),t.el.style.webkitTransform=e,t.el.style.MozTransform=e,t.el.style.oTransform=e,t.el.style.transform=e,(t.x<-10||t.y>this.height+10)&&this._resetObiectus(t)},this._updateVentus=function(){if(0===this.timer||this.timer>this.options.ventus.start+this.options.ventus.duration){this.options.ventus.magnitude=Math.random()*this.options.ventus.maxSpeed,this.options.ventus.duration=50*this.options.ventus.magnitude+(20*Math.random()-10),this.options.ventus.start=this.timer;var t=this.height;this.options.ventus.speed=function(i,e){var s=this.magnitude/2*(t-2*e/3)/t;return s*Math.sin(2*Math.PI/this.duration*i+3*Math.PI/2)+s}}}};Circumstant.prototype.init=function(){for(var t=0;t<this.options.numObiecti;t++){var i={el:document.createElement("div"),x:0,y:0,z:0,rotation:{axis:"X",value:0,speed:0,x:0},xSpeedVariation:0,ySpeed:0,path:{type:1,start:0},image:1};this._resetObiectus(i),this.obiecti.push(i),this.world.appendChild(i.el)}this.world.className="obiectus-ferenti",this.viewport.appendChild(this.world),this.world.style.webkitPerspective="400px",this.world.style.MozPerspective="400px",this.world.style.oPerspective="400px",this.world.style.perspective="400px";var e=this;window.onresize=function(t){e.width=e.viewport.offsetWidth,e.height=e.viewport.offsetHeight}},Circumstant.prototype.render=function(){this._updateVentus();for(var t=0;t<this.obiecti.length;t++)this._updateObiectus(this.obiecti[t]);this.timer++,requestAnimationFrame(this.render.bind(this))};var obiectusArca=document.querySelector(".incidentia-obiecti"),obiecti=new Circumstant(obiectusArca);obiecti.init(),obiecti.render();});
