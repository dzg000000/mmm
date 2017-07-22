(function(){
	var b=this;
	if(typeof SNTouch==="undefined"){b.SNTouch={}}
	SNTouch.Model={};
	SNTouch.Controller={};
	SNTouch.View={};
	SNTouch={init:function(){return},
	
	checkDetect:function(){
		var n={
			webkit:/(AppleWebKit)[ \/]([\w.]+)/,
			ipad:/(ipad).+\sos\s([\d+\_]+)/i,
			windows:/(windows\d*)\snt\s([\d+\.]+)/i,iphone:/(iphone)\sos\s([\d+\_]+)/i,
			ipod:/(ipod).+\sos\s([\d+\_]+)/i,
			android:/(android)\s([\d+\.]+)/i};
			var o=window.navigator.userAgent,
			m=n.webkit.exec(o),
			j=/\((iPhone|iPad|iPod)/i.test(o),
			l=[],a={},k=[];
			for(i in n){
				k=n[i].exec(o);
				if(k){l=n[i].exec(o)}
				}
				a={
					system:l[1].toLowerCase(),
					version:l[2].replace(/(\_|\.)/ig,".").toLowerCase(),
					browser:m?m[1].toLowerCase():"apple/webkit",
					ios:j};return a
				},

			
			placeHolder:function(e,f){
				if(!document.querySelector(e)){return}
				var e=f?document.querySelectorAll(e):document.querySelector(e);
				var a=e.defaultValue;
				e.addEventListener("focus",function(){
					if(e.value==a){e.value=""}
					},false);
			    e.addEventListener("blur",function(){
					if(e.value==""){e.value=a}
					},false)},
			    D:function(){
					if(arguments.length==0){return}
					return typeof arguments[0]=="string"?document.querySelector(arguments[0]):arguments[0]},
				DA:function(){if(arguments.length==0){return}
				    return typeof arguments[0]=="string"?document.querySelectorAll(arguments[0]):arguments[0]},
				proxyEvent:function(){
					if(!arguments[0]){
						return}var a={
							eq:0,
							elemA:"",
							elemB:"",
							typeA:"click",
							typeB:"click",
							Fntype:"Fn"
						};
						$.extend(a,arguments[0]);
						var d={
							index:a.eq,
							Fn:function(){$(a.elemB).eq(a.eq)[a.typeB]()},
							Fn_form:function(){$(a.elemB).eq(a.eq)[a.typeB]}};
							$(a.elemA)[a.typeA]($.proxy(d,a.Fntype))
							},
						rBlur:function(){
							if(this.checkDetect().system=="android"){
								var a=document.createElement("style");
								a.type="text/css";
								a.innerHTML="*{-webkit-tap-highlight-color:rgba(0,0,0,0)}";
								document.body.appendChild(a)
							}
						}
				
							};
	 

SNTouch.Widget={
	SNCarousel:function(h)
	{
		var a=this;
		var g={
			hook:"#J_index_slide",
			direction:"X",
			slideBox:".index-slide-box",
			slideUl:".slide_ul",
			slideLi:".slide_ul li",
			prev:".prev",
			next:".next",
			disable:"disabled",
			counter:".trigger",
			effect:"scroll",
			current:1,
			timer:350,
			autoplay:1,
			cycle:1,
			touch:true,
			asyncLoad:true
			};
		if(h){$.extend(g,h)}
		if(!a.D(g.hook)){return}
		function f(Q){
			var w=Q;
			var l=$(w.hook);
			var T=w.hook;
			var V=w.current;
			var J=0,O=0,I=0,H=0;
			len=Math.ceil(a.DA(T+" "+w.slideLi).length),
			Li=a.DA(T+" "+w.slideLi),
			Ul=a.DA(T+" "+w.slideUl),
			$Li=$(Li),
			$Ul=$(Ul),
			I=l.find(w.slideBox).width(),
			H=l.find(w.slideBox).height(),
			X=w.direction=="X"?true:false,
			autoplay=w.autoplay,
			flag=false,
			f=null;
			if(len==1){
				Ul[0].onmousedown=Ul[0].ontouchstart=null;
				M();
				return
				}
			if(w.cycle==1){
				var W=$(Li[len-1]).clone();
				var r=$(Li[0]).clone();
				$Ul.append(r);
				$Ul.append(W);
				Ul[0].style.width=I*(len+2)+"px";
				W.get(0).style.left=-I*(len+2)+"px"
				}
			if(X){for(var e=0;e<len;e++){J+=$Li.eq(e).width()}}
			else{for(var e=0;e<len;e++){O+=$Li.eq(e).height()}}
			M();
			switch(w.effect){
				case"ctrl":S();
				break;
				case"scroll":p();
				break;
				case"both":S();
				p()
				}
			function p(){
				if(X){var j=-J+I}
				else{var j=-O+H}
				if(w.touch){Ul[0].onmousedown=Ul[0].ontouchstart=m}
				else{
					Ul.hover(function(){U.dispose()},function(){U.process()})
				}
				function m(s){
					var t,q;
					U.dispose();
					var n=[$Ul.position().left,$Ul.position().top];
					t=k(s);
					Ul[0].ontouchmove=Ul[0].onmousemove=u;
					function u(v){
						q=k(v);
						if(X){
							var x=(q[0]-t[0])+n[0];
							if(Math.abs(q[0]-t[0])-Math.abs(q[1]-t[1])>0){
								v.preventDefault();
								y();
								Ul[0].ontouchend=document.onmouseup=o}
							}
						else{
							var x=(q[1]-t[1])+n[1];
							v.preventDefault();
							y();
							Ul[0].ontouchend=document.onmouseup=o
						    }
					function y(){if(X){Ul[0].style.left=x+"px"}
					else{Ul[0].style.top=x+"px"}
					}
					if(flag){Ul[0].ontouchmove=Ul[0].ontouchend=Ul[0].onmousemove=document.onmouseup=null}
				}
				function o(y){
					var x,z=k(y);
				    if(autoplay){U.process()}
					if(X){x=z[0]-t[0];v(y)}
					else{x=z[1]-t[1];v(y)}
				function v(){
					if(x<-I/5){K()}
					else{if(x<0&&x>-I/5){P()}
					else{if(x>I/5){d()}
					else{P()}
				}
				}}
				M();
				Ul[0].ontouchmove=Ul[0].ontouchend=Ul[0].onmousemove=document.onmouseup=null
				}}
				function k(o){
					var n=[];
					n[0]=o.changedTouches?o.changedTouches[0].clientX:o.clientX;
					n[1]=o.changedTouches?o.changedTouches[0].clientY:o.clientY;
					return n
				    }}
				var P=function(){
					$Ul.animate({left:-(I*(V-1))});
					if(w.cycle==1){}
					else{}
					};
				var d=function(){
					if(autoplay){U.process()}
					if(w.cycle==1){
						if(V!=1){L();return false}
						else{L();
						Li[len-1].style.left=-(I*len)+"px";
						Li[0].style.left=0;
						return false
						}
					}
					else{
						if(V!=1){L();return false}
						else{P()}
						}};
					function L(){
						if(flag){
							return}if(X){
								l.find(w.slideUl).animate(
								{left:-(I*(V-2))},
								w.timer,
								function(){
									M();
									Ul[0].style.left=-(I*(V-1))+"px";
									Li[len-1].style.left=0;
									flag=false
								})
						}
						else{
							$Ul.animate(
							{top:-(H*(V-2))},
							w.timer,
							function(){flag=false})
							}
							V==1?V=len:V--;
							flag=true;
							if(!w.touch||w.asyncLoad){R()}
						}
						var K=function(){
							if(w.autoplay==1){U.process()}
							if(w.cycle==1){
								if(V!=len){
									N();
									return false
								}
							else{
								N();
								Li[0].style.left=I*len+"px";
								return false
								}
							}
							else{
								if(V!=len){
									N();
									return false
								}
								else{P()}
							}
						};
					function N(){
						if(flag){return}
						if(w.direction=="X"){
							l.find(w.slideUl).animate(
							{left:-(I*V)},
							w.timer,
							function(){
								M();
								Ul[0].style.left=-(I*(V-1));
								Li[0].style.left=0;flag=false
							})
						}
						else{
							$Ul.animate(
							{top:-(H*V)},
							w.timer,
							function(){flag=false}
							)}
						flag=true;
						V==len?V=1:V++;
						if(!w.touch||w.asyncLoad){R()}
						}
						var R=function(){
							try{
								$Li.eq(V-1).find("img").attr("src",$Li.eq(V-1).find("img").attr("data-src")).removeAttr("data-src")}catch(j){}};
							var c={
								timerid:null,
								action:function(k){try{k()}
								catch(j){}},
								process:function(j){
									clearTimeout(this.timerid);
									this.timerid=setTimeout(function(){c.action(j)},0)
									}
									};
						function S(){
							l.find(w.prev).click(function(j){
								if(w.cycle==1){c.process(d)}
								else{if(V!=1){c.process(d)}
								}});
							l.find(w.next).click(function(j){
								if(w.cycle==1){c.process(K)}
								else{if(V!=len){c.process(K)}}})}
					    function M(){var m=l.find(w.counter);if(m.length>0){m.find("li").eq(V-1).addClass("cur").siblings().removeClass("cur")}else{if(w.cycle!=1){var k=l.find(w.prev),j=l.find(w.next);k.removeClass(w.disable);j.removeClass(w.disable);if(len==1){k.addClass(w.disable);j.addClass(w.disable);return}if(V==1){k.addClass(w.disable)}else{if(V==len){j.addClass(w.disable)}}}}}
						var U={
							timeoutId:null,performProcessing:function(){try{K()}
							catch(j){}},
						process:function(){
							clearInterval(this.timeoutId);
							this.timeoutId=setInterval(function(){U.performProcessing()},3000)},dispose:function(){clearInterval(this.timeoutId);return}};
							if(w.autoplay==1){U.process()}}return f(g)},
							addAppDownLoad:function(d){var a=null;if(SNTouch.checkDetect().ios){a="http://itunes.apple.com/us/app/id424598114?ls=1&mt=8";$("body").before('<div class="appdownload w" style="position:relative;" id="appdownload"><a href="'+a+'"><img height="40" src="'+d+'" alt=""></a><a href="javascript:;" style="position:absolute;right:0;top:0;width:40px;height:40px;" onclick="this.parentNode.parentNode.removeChild(this.parentNode)"></a></div>')}if(SNTouch.checkDetect().system=="android"){a="http://mapp.suning.com/index.php?app=topicdetail&specialId=48";$("body").before('<div class="appdownload w" style="position:relative;" id="appdownload"><a href="'+a+'"><img height="40" src="'+d+'" alt=""></a><a href="javascript:;" style="position:absolute;right:0;top:0;width:40px;height:40px;" onclick="this.parentNode.parentNode.removeChild(this.parentNode)"></a></div>')}}};
								

$.extend(SNTouch.Widget,SNTouch);
window.SNTouch=window.SN=SNTouch;return SNTouch})(window);