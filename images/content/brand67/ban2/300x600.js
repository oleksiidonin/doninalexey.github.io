(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bottle1 = function() {
	this.initialize(img.bottle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,432);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.bottle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottle1();
	this.instance.parent = this;
	this.instance.setTransform(-46,-211.9,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-211.9,95,418.7);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.hw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hw, new cjs.Rectangle(-150,-45,300,90), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{videoIsPlaying:2,playAnim:4});

	// timeline functions:
	this.frame_1 = function() {
		playVideo();
	}
	this.frame_3 = function() {
		if(bool){
			this.gotoAndPlay('playAnim');
		}else {
			this.gotoAndPlay('videoIsPlaying');
		}
	}
	this.frame_704 = function() {
		bool=false;
		playVideo();
	}
	this.frame_754 = function() {
		this.gotoAndPlay('videoIsPlaying');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(701).call(this.frame_704).wait(50).call(this.frame_754).wait(1));

	// hw
	this.instance = new lib.hw();
	this.instance.parent = this;
	this.instance.setTransform(0,255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(755));

	// Слой 6
	this.instance_1 = new lib.bottle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,-60);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},100).wait(600).to({alpha:0},50).wait(1));

	// bgImg
	this.instance_2 = new lib.bgImg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(755));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '0D8A0D6C9BCE46E9AB3DD98FE7A8A9E7',
	width: 300,
	height: 600,
	fps: 120,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/bgImg.png", id:"bgImg"},
		{src:"images/bottle1.png", id:"bottle1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0D8A0D6C9BCE46E9AB3DD98FE7A8A9E7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;