(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bgImg.png", id:"bgImg"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/img6.jpg", id:"img6"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/pattern.png", id:"pattern"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,266);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,351);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,200);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,319);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,278);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,134);


(lib.pattern = function() {
	this.initialize(img.pattern);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArlDtQgFgGAAgIIgCiQQAAgIAFgGQAFgFAHAAQAOgBAEAPQAKgQAXAAQAagBAQAWQAOATABAbQAAAagPAUQgRAUgZABQgRAAgPgMIABAqQAAAJgFAFQgFAGgHAAQgIAAgFgFgArCBlQgHAJABAOQAAAOAGAKQAIAMANAAQANAAAHgMQAHgKAAgOQAAgNgHgKQgIgMgNAAQgNABgHALgAk+DoQgFgEAAgGIACgLIAPglIgnhfIgCgJQAAgHAFgEQAFgEAGAAQAMgBAFANIAZBBIAZhCQAEgMANgBQAGAAAFAEQAGAFAAAGIgCAJIg4CRQgFAOgLAAIgCAAQgHAAgFgEgAFODfQgFgFAAgJIgCiQQAAgIAFgGQAFgFAHAAQAOAAAEAOQAKgQAXAAQAagBAQAWQAOATAAAcQABAZgQAUQgQAUgZABQgSAAgOgMIABArQAAAIgFAGQgFAFgHAAQgIAAgFgFgAGFBMQgNAAgHALQgHAJAAAOQABAPAGAKQAIALANAAQANAAAHgMQAHgKAAgNQgBgOgGgKQgIgLgMAAIgBAAgAnjDaQgFgGAAgIIgBgdQAAgIAFgGQAFgFAIAAIABAAQAJgfgBgwQAAgTARgBIA+AAQAIgBAFAGQAEAFABAJIABBOIABAAQAIAAAFAFQAFAGAAAIIAAAdQABAIgFAGQgFAFgIAAQgHAAgFgFQgFgFAAgJIgBgRIhKABIAAARQABAJgFAFQgFAFgIABQgHAAgFgFgAmsBVQgBAugHAaIAnAAIgBhIgAtrC7QgFgFgBgJIgBhbQAAgIAFgGQAFgFAHAAIBQgBQAIAAAFAFQAEAFABAJIABBbQAAAIgFAGQgFAFgHAAQgIABgFgGQgFgFAAgJIgBhQIgtABIABBQQAAAIgEAGQgFAFgIAAIgBAAQgHAAgEgFgApUCrQgRgTgBgcQAAgbARgUQASgVAaAAQAbgBATAVQARATAAAbQABAcgRATQgRAUgcABIgBAAQgbAAgRgTgAooBYQgNAAgIALQgGAKAAAOQAAAOAHAKQAHALAOAAQANAAAIgLQAGgLAAgNQAAgOgHgKQgHgLgNAAIgBAAgAjXCzQgFgGAAgIIgBhdQAAgIAFgGQAFgFAHAAQAIAAAFAFQAFAFAAAJIAAAgIAmgsQAGgHAJgBQAGAAAFAFQAEAEAAAGQAAAHgGAHIggAiIAqAoQAFAEAAAHQAAAHgFAFQgEAFgHAAQgHAAgKgKIgrgtIAAAAIAAAkQAAAJgFAGQgEAFgIAAIgBAAQgHAAgFgFgAhACxQgFgFgBgJIgBhQIgYAAQgPAAAAgPQAAgGAEgEQAEgFAHAAIBTgBQAPAAAAAPQAAAPgPAAIgYABIABBQQAAAIgEAGQgFAFgIAAQgIAAgEgFgABoCvQgGgFAAgHIABgIIAOgfIguhcQgCgEAAgFQAAgHAGgFQAGgFAHAAQAKAAAGAKIAgBBIAdhCQAEgKAMAAQAHgBAGAFQAGAFAAAIQAAAEgCAEIg+CLQgEALgLAAQgHAAgGgFgADVCtQgFgFAAgJIgBhcQgBgJAFgFQAFgFAIgBQAHAAAFAFQAFAGAAAIIABAgIAlgsQAGgHAKgBQAGAAAEAFQAFAFAAAGQAAAGgHAIIggAhIArAoQAEAFAAAHQABAHgFAFQgFAEgHAAQgGABgLgLIgrgsIAAAAIAAAkQABAJgFAFQgFAFgIAAIgBAAQgHAAgEgFgAHcCmQgOgLAAgUQgBgsBPgCIAAgJQAAgKgPABQgLAAgKAGQgJAGgDAAQgHAAgFgEQgDgEAAgGQAAgKAQgJQAQgIAQAAQAYAAANAKQANAKAAASIABBLQAAAIgFAGQgEAFgIAAQgNAAgDgMQgFAHgJAEQgJADgKAAIgCAAQgUAAgMgKgAH/B1QgQAEAAAOQAAAMAVAAQAbAAgBgaIAAgGQgZABgGABgAJXCpQgFgGAAgJIgBhcQAAgJAFgFQAEgFAIgBQAIAAAFAGQAEAFABAJIABBcQAAAJgFAFQgFAFgHABQgIAAgFgFgAKNCoQgFgGAAgIIgBhdQAAgIAFgGQAEgFAIAAQAIAAAFAFQAEAFABAJIAAAcIAtAAIgBgdQAAgIAFgGQAFgFAHAAQAIAAAFAFQAFAFAAAJIABBcQAAAJgEAFQgFAGgIAAQgHAAgFgFQgFgGAAgIIgBgiIgtABIABAhQAAAJgFAFQgFAGgHAAQgIAAgFgFgAMTCmQgFgFAAgJIgBhcQAAgJAFgFQAEgGAIAAQAIAAAFAFQAEAGABAIIAAAyIABAAIArg7QAJgLAIAAQAIAAAFAFQAFAGAAAIIABBdQAAAIgEAGQgFAFgIAAQgHAAgFgFQgFgFAAgJIgBgzIgBAAIguA/QgHAIgHAAQgIAAgFgFgAI7AWQgFgFAAgHQAAgHAFgDQAFgFAHgBQAHAAAFAFQAFADAAAIQABAHgFAFQgGAFgHAAQgHAAgFgFgAJwAWQgFgGAAgHQAAgHAFgDQAFgFAHAAQAHAAAFAFQAFADAAAHQABAHgFAFQgFAFgIAAIgBAAQgGAAgFgEgAvTgMQgGgGAAgIIAAgiQgBgIAGgGQAFgEAHgBQAGAAAFgdQAGgdAAgZIgBgmQAAgIAFgGQAFgFAIAAIBRgBQAIAAAFAFQAFAFABAJIABB5IAEAAQAIAAAFAFQAFAFAAAIIABAhQAAATgSABQgIAAgFgFQgFgFgBgJIAAgUIhmABIAAAUQAAAJgFAFQgFAFgIAAQgIAAgEgEgAuUi7IABAWQAAAWgEAaQgEAZgFANIA7gBIgBhsgADPgeQgFgGAAgIIAAgdQAAgIAFgGQAEgFAIAAIACAAQAJgggBgvQAAgTARAAIA9gBQAIAAAFAFQAFAFAAAJIABBOIACAAQAIAAAFAFQAEAGABAIIAAAdQAAAIgFAGQgFAFgHAAQgIAAgFgFQgFgFAAgJIAAgRIhKABIAAARQAAAJgFAFQgEAGgIAAQgIAAgFgFgAEHijQgBAugHAaIAmAAIgBhIgAslg0QgEgFAAgGQAAgKAKgEQAOgEAAgaIgBgzQAAgJAFgFQAFgFAIgBIBAAAQAHAAAFAFQAFAFAAAJIABBbQABAIgFAGQgFAFgIAAQgHAAgFgFQgFgFAAgJIgBhQIgeABIABAkQAAAegMARQgMAQgUAAIgBAAQgGAAgEgEgAqag2QgEgFAAgHQAAgFAEgEIAbgeQgdgHAAgaQgBgoAtgBIAkgBQAHAAAFAFQAFAGAAAIIACBbQAAAJgFAFQgFAGgIAAQgHAAgFgFQgFgGAAgIIgBgfIAAAAIgkAtQgFAGgIAAQgHAAgFgFgApdh7IAAggIgMAAQgRABAAAQQAAAPARAAIAMAAgAlfg+QgNgLgBgUQAAgtBPgBIAAgJQAAgKgQABQgLAAgJAGQgJAGgDAAQgIAAgEgFQgEgEAAgGQAAgKARgIQAPgIAQAAQAYgBANAKQANAKAAATIABBLQABAIgFAFQgFAGgHAAQgOAAgDgNQgEAHgKAEQgJAEgJAAIgCAAQgUAAgNgKgAk8hvQgQAEABAOQAAAMAVAAQAaAAAAgbIAAgFQgaAAgGACgAngg6QgFgEgBgHIgBhgQAAgHAFgFQAFgEAHAAIAugBQAOAAAKAIQAKAJAAAOQAAATgQAIIAAAAQAMACAIAIQAIAJAAAMQAAASgLALQgMAKgTAAIgxABQgGAAgFgFgAnDhNIAVAAQAHgBAFgEQAFgEgBgHQAAgOgTAAIgTAAgAnEiDIAOAAQAOAAAAgOQAAgNgPAAIgNAAgAgbhMQgRgSgBgcQAAgcARgTQASgVAYAAQAbgBASAVQASATAAAbQABAcgRATQgSAUgbABIgBAAQgZAAgRgUgAgEiTQgGAKAAAOQAAAOAHAKQAFALAOAAQANAAAHgMQAHgKAAgOQAAgNgHgKQgIgMgNAAQgNABgGALgAjjg9QgFgGAAgIIgBhcQAAgIAFgGQAEgFAIAAQAHAAAFAFQAFAFAAAJIABBQIAkAAIgBhQQgBgJAFgFQAFgGAIAAQAHAAAFAFQAFAGAAAIIABBQIAkAAIgBhQQgBgJAFgFQAFgGAIAAQAHAAAFAFQAFAGAAAIIABBbQABAJgFAFQgFAGgIAAIiLACQgIAAgFgFgABhhAQgFgGAAgIIgBhdQAAgIAFgGQAFgFAHAAQAIAAAFAFQAFAFAAAJIABBcQAAAJgFAFQgFAGgHAAIgBAAQgHAAgFgFgAFohDQgFgGAAgJIgBhcQAAgJAFgFQAEgFAIgBQAHAAAFAGQAFAFAAAJIABAyIABAAIArg8QAHgKAKgBQAIAAAFAGQAFAFAAAJIABBcQAAAJgEAFQgFAFgIABQgIAAgEgFQgFgGgBgJIAAgzIgBAAIguA/QgGAIgIABQgIAAgFgFgAIMhGQgFgFAAgJIgBhQIgZABQgPAAAAgPQAAgHAEgEQAEgFAHAAIBTgBQARAAAAAPQAAAQgQAAIgZAAIABBQQAAAJgEAFQgFAFgIAAIgBAAQgHAAgEgFgAJhhHQgFgFAAgJIgBhcQAAgJAFgFQAEgGAIAAQAIAAAFAFQAEAGABAIIAAAyIABAAIArg7QAJgLAJAAQAHAAAFAFQAFAGAAAIIABBdQAAAIgEAGQgFAFgIAAQgHAAgFgFQgFgFAAgJIgBgzIgvA/QgGAIgIAAQgIAAgFgFgALnhIQgFgGAAgIIgBhdQAAgIAFgGQAEgFAIAAQAIgBAFAGQAEAFABAJIAAAcIAtgBIgBgcQAAgJAFgFQAFgFAIAAQAHgBAFAGQAFAFAAAJIABBcQAAAJgEAFQgFAGgIAAQgHAAgFgFQgFgGAAgIIgBgiIgtAAIABAiQAAAJgFAFQgFAGgHAAQgIAAgFgFgANthKQgFgGAAgIIgBhdQAAgIAFgGQAEgFAIAAQAIAAAFAFQAEAFABAJIAAAyIABAAIArg7QAJgLAJAAQAHAAAFAFQAFAFAAAJIABBcQAAAJgEAFQgFAGgIAAQgHAAgFgFQgFgGAAgIIgBgzIgBAAIguA/QgGAIgIAAIgBAAQgHAAgFgFgABFjSQgFgFAAgIQAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFABAHQAAAHgFAFQgFAFgIABQgHAAgFgFgAB6jTQgFgFAAgHQAAgHAFgGQAFgFAHAAQAHAAAFAFQAFAFABAHQAAAHgFAGQgFAFgIAAQgHAAgFgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.6,-24.2,197.4,48.5);


(lib.patternMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pattern();
	this.instance.setTransform(150,-300);

	this.instance_1 = new lib.pattern();
	this.instance_1.setTransform(-150,-300);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,600,600);


(lib.maskRound = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoDIDQjWjVABkuQgBktDWjWQDWjWEtABQEugBDVDWQDWDWAAEtQAAEujWDVQjVDWkuAAQktAAjWjWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73,-73,146,146);


(lib.logo_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-62.5,-67);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.5,-67,125,134);


(lib.img2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img2();
	this.instance.setTransform(-92.5,-100);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.5,-100,185,200);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-127.5,-175.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.5,-175.5,255,351);


(lib.Group_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF0E3").s().p("Ak4OwQkHgRjehXQjdhWiSiNQiXiSgvi4Qgwi5BAi8QA+i4CdilQCdikDjh4QDsh8EWg6QEUg5ERASQEHASDeBXQDdBWCSCNQCXCSAvC4QAlCOg+CxQg/C2iTCrQidC3jaCDQjxCPkaA7QjTArjNAAQhDAAhCgFg");
	this.shape.setTransform(138.4,95);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,276.8,189.9);


(lib.btnBg2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006CB5").s().p("AxaDlQhEABgwgxQgxgwAAhEIAAiBQAAhEAxgxQAwgvBEgBMAi0AAAQBFABAwAvQAxAxgBBEIAACBQABBEgxAwQgwAxhFgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-23,256,46);


(lib.btnBg1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#263E8B").s().p("AxaDlQhEABgwgxQgxgwAAhEIAAiBQAAhEAxgxQAwgvBEgBMAi0AAAQBFABAwAvQAxAxgBBEIAACBQABBEgxAwQgwAxhFgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-23,256,46);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-133);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-133,300,266);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCDA9").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.pattern_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.patternMc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-297.8},138).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,600,600);


(lib.logo2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB212E").s().p("Al8CJIgngCIAngDIAsgFIA5gJIAhgFIAigHIAkgIIAmgJIAmgKIAngLIBMgaICZg5ICCg5QAhgNASgLIBHgpIgHAHQgMALgKAHIgjAZIgWAQIh2BBIgkANIiXA/IhPAZQgQAFgYAGIgoAJQgQAEgXADIgmAGIgjAEIgiADIg6ADIgugBg");
	this.shape.setTransform(4.6,10.3,0.303,0.305);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB212E").s().p("AnhCWQAZgXAQgNIAagUQARgOANgIIAigXIAkgXIAogXQAYgNASgIIAtgVQAcgNATgHIBjgkIBigdQAVgGAdgHIAygLIBegRQA4gKAdgCQAmgFAjAAQAXgBAhABQAgAAASAEQgSgBgfADQgVAAgjAFIhHALQgmAGgtAKQgwAKgrAMQhAAPghALIhiAdIhhAjQgTAHgbAMIgtARQgSAHgZAOIgoAUQgQAHgWANIgiAVIg7AlIgsAfIgmAdQAMgNAVgUg");
	this.shape_1.setTransform(-4.8,-9.6,0.303,0.305);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB212E").s().p("AhhDjQgxgcgahYIgFgYIgGghQgDgZAIhVQAJhlAAgZQAAgkAogNQARgGAGAAQAQgDAPAGQAVAJACAmQACAvAJAOIAJAOQAIAHAPAAQAIABAfgDQAigCAZAGQBNASAQBVQAPBPg9BFQgyA6hIAXQgfAKgcAAQgeAAgWgMgAgSgKQggAKgMAdQgKAaAIAdQAGAbAUAQQAYAUAcgKQAdgJARgeQASgegHgdQgHghgYgMQgPgJgRAAQgLAAgPAFg");
	this.shape_2.setTransform(18.5,-4.9,0.303,0.305);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB212E").s().p("AgpDtQg0gQgRgpQgJgVAPgRQAKgMANgEQAfgKAlAVQAiAVAfgJQAcgJAMgZQALgXgJgbQgMgkgsgJQgrgJgHgRQgIgSATghQAPgggMgbQgJgWgTgJQgSgIgWAHQgVAHgVAcQgVAdgUAGQgsAPgMghQgQgnAhgpQAegmAzgQQA8gTAvAIQBCAKAhA9QAPAcgEAgQgEAiAEAKQAHAQAnAYQAkAWANAsQAXBUg7A4QgjAig7ATQgkAMggAAQgYAAgYgIg");
	this.shape_3.setTransform(5,-1.2,0.303,0.305);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB212E").s().p("AhoAhQgOgeAngVQARgLAtgOQAqgOAZgCQArgCAMAcQANAfgnAVQgOAHguAQQgwAQgTABIgJABQgjAAgMgbg");
	this.shape_4.setTransform(-5.1,3.8,0.303,0.305);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB212E").s().p("AgnDtQhbgTgxhOQgDgGgHgRQgIgUgDgLQgHgiAchTQAbhTAkg/QAagtAsgNIAWgHQAOgCAGAKQAFALgUAxQgYAzAEAUQACANACADQAEAIAOABIAhAAQAbABAXAGQBEAVAqBPQAoBMgVA1QgTAxhAAUQgxAQguAAQgbAAgdgGgAgjATQghALgIAeQgIAbAPAaQAOAXAhAOQAiAQAfgKQAbgIAGgbQAGgagQgcQgRgfgZgNQgRgIgPAAQgNAAgOAEg");
	this.shape_5.setTransform(-15.6,5.3,0.303,0.305);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EB212E").s().p("AAACGQgIAAgEgGIh7iFQgIgJACgLQABgIAHgHQAigcAogoQASgSAYgFQAagGATAQQAMAKAEASQAFARADADQAEAEAagDQAZgDARAOQAUAQgBAdQgBAdgZAZQgvAwgzAqQgGAGgKAAIgDAAgAApgMQgNAFgMAJQgXAZAQATQAUAUAagZQAMgMAFgMQAHgRgLgJQgGgFgJAAQgFAAgHACgAgehFQgMADgJAIQgKAKgBAKQgBALAIAIQAIAJALgBQAMgBAKgKQAIgIAEgLQAEgPgIgJQgGgGgJAAIgJACg");
	this.shape_6.setTransform(24.9,8.8,0.303,0.305);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EB212E").s().p("AAcBaIhwiPQgHgIAGgMQAEgJAIgGQAJgHAKgCQAOgDAIAKIB0CJQAIAJgGANQgFAKgLAIQgQALgLAAQgJAAgGgIg");
	this.shape_7.setTransform(20.7,12.1,0.303,0.305);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB212E").s().p("AhSCMQgNgCgEgJIhQibQgGgLAHgKQAFgIALgFQAMgGAKABQAOABAHANIA5BiQAHAMAGAEQARAKAggSQAMgGAJgIQALgHABgLQABgJgGgJIhAhkQgPgXAcgQQAMgHALAAQALABAHAKIBIBkQAGAIAMACIAbAEQAJADAIAJIAOAPQANARADAIQAGASgUANQgVAOgVgPQgVgPgYAOQhHAphDAgQgIAEgIAAIgJgCg");
	this.shape_8.setTransform(16.2,15.6,0.303,0.305);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB212E").s().p("AhMB4QgEgMASgaQARgbgDgIQgDgJgfgKQgegKgKgbQgOgtApgcQATgOA1gSQAcgKAPgBQAXgBAHAQIBKCZQAHAPgMAKQgFAEgOAFQgQAHgHgBQgRgEgLgYQgKgTgNAEQgLADgNAlQgLAjgiAJQgMADgIAAQgLAAgCgHgAgehAQgOAFgHALQgGALAEAMQAEALALAFQAOAGARgFQAZgJgMgcQgHgVgSAAQgFAAgGACg");
	this.shape_9.setTransform(8.1,18.8,0.303,0.305);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB212E").s().p("AhBBfQgqgbgIgyQgIgsAdgmQAdgnA6gKQBAgMALAjQAGAVgSAEQgMACgLgCQgNgBgJACQgfAGgOAYQgLAVAFAYQAGAaAYAPQAXAQAjgHQAKgCAKgFQALgGAIgCQALgCAJAFQAHAFACAIQAHAVgbAPQgRAKgbAFQgWAEgTAAQgrAAghgWg");
	this.shape_10.setTransform(1.2,20.2,0.303,0.305);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EB212E").s().p("AgMBrQgOgFgBgMIgQiwQgBgKAMgHQAJgFAJAAQAMgBAIAEQANAFACANIAXCrQACAMgMAHQgKAGgPAAIgEAAQgJAAgIgCg");
	this.shape_11.setTransform(-4.5,20.9,0.303,0.305);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB212E").s().p("ABxBsQgGgHgGgbQgHgegGgNQgBgDgEgDQgEgCgCAAQgLgBgIAOQgDAGgKAYQgSAwgbgDQgcgDgNgyQgHgagDgHQgHgPgLgBQgDgBgDACQgEABgCADQgFAIgEAMIgHAVQgJAZgGAGQgKAJgYgEQgTgDgGgIQgGgGACgMQABgJA4icQAHgSAiAFQASADAKAFQAJAHADAMIALAkIAHAcQAHASAIAHQAEAEAEAAQACABAHgEQAJgEAIgSIAJgZIANgjQAFgMAJgEQALgEARABQAiACAGATQAPA7AbB0QABALgGAGQgHAGgTAAQgXgBgJgKg");
	this.shape_12.setTransform(-11.7,20.7,0.303,0.305);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EB212E").s().p("AAKAuQgNgEACgMQABgFAOgWIAUgYQAGgGAGAAIAOADQAIACAFAEQAHAGgBAGQgBAFgpApQgEAFgJABIgGABIgIgBgAhAAdQgQgDACgNQABgFAQgVIASgaQAFgGAHgBIAOACQAHACAGAEQAFAFgBAHQAAAFgmAqQgEAFgIACIgIABIgGAAg");
	this.shape_13.setTransform(24.2,-22.2,0.303,0.305);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB212E").s().p("ABABuQgbgDABgYIAGg7QAAgIgBgFQgCgHgJgBQgMgCgSAWIgZAiQgQATgPANQgGAFgXgBQgfgCAAgWIABifQAAgLAMgGQAJgEAJABQAOABAIAGQAIAGAAALIgCA4QAAAHADAIQADAJAIABQAQABAjgxQATgWARgMQAKgIAZAEQANACAJAGQANAIgBANIgUCZQgCAUgUAAIgJgBg");
	this.shape_14.setTransform(17,-21.8,0.303,0.305);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EB212E").s().p("Ah7BmQgFgFgCgLQgChuACg3QABgUAggBQARgCAKAEQAIADAHAMIAPAhIAKAYQAIARAIAGQAEADAEAAQAFAAABgDQAGgHAFgRIAGgZIAJghQADgLAJgFQAIgEASAAQAhAAAEAUQAOA3ARBtQAAALgFAFQgFAFgOgBQgRAAgHgKQgEgGgGgZQgGgdgFgMQgBgCgEgCIgFgCQgIAAgGANIgIAdQgKAugUAAQgSABgSgtQgJgWgEgHQgIgNgIABQgHABgCAGQgDAMgBAdQgBAZgDAHQgFAKgRABIgGABQgJAAgFgEg");
	this.shape_15.setTransform(8.8,-22.1,0.303,0.305);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EB212E").s().p("Ag/BdQgpgWgPguQgPgtAbgmQAbgmA3gKQA2gKArAbQAqAZAJAwQAJAugdAjQgbAhgxAJQgPACgMAAQgiAAgdgQgAgOg9QgbAFgNAWQgLAVAHAYQAHAXASAPQAWASAbgFQAcgFALgXQAKgUgFgWQgFgYgSgPQgRgPgUAAIgOABg");
	this.shape_16.setTransform(0.1,-21.3,0.303,0.305);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EB212E").s().p("AgTBhQgSgBgIgRIg/iKQgLgYAcgKQANgFAJAFQAJAEAHAPQANAaAHAHQALAKARAAQAIgBARgEQAhgJAXAJQAXAJAJAbQAOAmglAZQgOAJgpANQgiAMgOAAIgBAAgAANAAQgNAEgDAJQgEAJAEAKQAHAVAbgIQAKgDAGgGQAHgJgEgMQgEgIgJgFQgHgCgHAAQgFAAgFAAg");
	this.shape_17.setTransform(-7,-19,0.303,0.305);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EB212E").s().p("AAnBfIgyhfQgJgPgLgEQgIgCgNAEQgNAEgFgBQgKgBgGgLQgHgLAHgKQAEgHAIgEQA8gcArgSQAZgKAKAVQAFAMgFAHQgCAEgMAHQgLAHgDAHQgFAKAJARIAwBfQAGALgHAKQgFAHgIAEQgJADgGAAQgNAAgHgNg");
	this.shape_18.setTransform(-13.1,-17.8,0.303,0.305);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EB212E").s().p("AgsA8QgCgDgEgdIgEgeQgCgGAFgHQAEgGAFgEQANgHAIALQAFAIAJA2QACAIgEAFIgLAHQgIAFgGAAQgGAAgEgGgAASAWQgCgDgDgbIgDggQgBgGAFgHQAEgGAGgDQANgHAHALQADAFAJA6QABAIgEAEIgLAHQgIAEgGAAQgHAAgDgGg");
	this.shape_19.setTransform(-18,-16.5,0.303,0.305);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EB212E").s().p("AgIB9Ih7h8QgIgGAFgMQAEgJAHgGQAPgMAMADQAIACANAMIARAQQAJAGAIgGQAGgFgBgWIgBgcQAAgYADgIQADgKAQgMQAUgQAHAJQAFAHgCAuQgCAvAIAJQAHAIAzAKQAzAMAEAGQAGAGgIAJQgDAEgJAGQgNAKgKADQgGABgKgCIgRgEIgagHQgZgGgFAFQgHAGAEAHQABAEAFAFIANAPQAJAJABAFQAFAOgPAOQgLAJgJAAQgGAAgGgGg");
	this.shape_20.setTransform(-24.3,-10.2,0.303,0.305);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EB212E").s().p("AAtBPIiAh0QgHgHAEgMQADgKAGgGQAIgHAJgDQAMgEAJAIIB5B1QAIAIgCALQgCAJgIAHQgLAKgJAAQgHAAgGgFg");
	this.shape_21.setTransform(-27.9,-6.9,0.303,0.305);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EB212E").s().p("AAVBzIiKhkQgJgHgBgIQAAgJAGgHQAagiAjgqQAQgSAXgGQAXgGASAPQALALAFAPQAEAQADACQAEAEAXgBQAXgBAPAOQASAPABAYQACAXgRAUQgdAigiArQgEAGgKABIgBAAQgHAAgGgEgAAogIQgLAEgJAIQgTAXAVAQQAUAPASgWQAWgcgTgOQgGgFgHAAQgFAAgFADgAgfg6QgLAEgHAJQgIAJABALQAAAJAJAHQAJAHAKgCQAJgCAIgJQAHgIACgKQACgOgIgIQgGgFgHAAQgEAAgGACg");
	this.shape_22.setTransform(-31.3,-3.1,0.303,0.305);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EB212E").s().p("AALBQQgQgOgGgBQgDgBgZAHQgTAEgGgOQgBgCABgSQABgSgBgDQgCgDgMgNQgNgLgBgCQgHgPAOgFIAQgEQAKgEAFgFQAFgGAEgUQADgRAHgCQAHgCAOAJIASAOIAIACIAegHQARgEAGAPQABADgBARQgBASABACQACAEAMANIAOANQAGANgMAHQgWAGgKAIQgGAEgEATQgDATgIADIgDAAQgHAAgNgJg");
	this.shape_23.setTransform(35.1,-10.6,0.303,0.305);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EB212E").s().p("AALBPQgQgNgGgCQgDgBgaAHQgSAFgGgPIAAgUQAAgSgBgCQgBgEgNgMQgNgLgBgCQgEgQALgEIAQgFQALgDAFgGQAEgFAEgUQAEgRAHgDQAHgCANAKIATAOIAHACIAfgHQARgEAFAPQABACAAASQgBASABACQABAEANAMQANALABACQAGAOgNAGIgPAGQgLAEgGAEQgGAEgDAUQgEASgIADIgDABQgHAAgMgKg");
	this.shape_24.setTransform(-29.3,10,0.303,0.305);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EB212E").s().p("AsaOhQjDhHiLh1QhMg/g7hQQg8hRgkhaIgehcQgMg3gEgoQgLheAPhdQAZiqBlijQCmkOFEjAQEKidFGhGQEdg+EfAUQEOAVDRBWQDCBOB/B5QBbBTA6BpIARAhIgRggQg8hrhbhQQg/g5hMguQhQgwhognQjehRj9gFQkWgFkRBPQksBWj5CnQiOBhhhBmQh0B1hKCBQgjA9gdBQQgcBOgIBFQgKBPAIBJQADAdALAtIAXBKQA3CMCBBxQA4AxBNAuQBOAtBHAbQCPA6CyAbQCTAXCzgFQExgLEphoQENheDTijQC/iQB1i/QBkiiARimQANhygdh0IgIgaIAJAaQAdBygMB0QgOClheCqQhmC5jDCpQjLCvkPB1QktCBk8AfQhYAHhUAAQkgAAj1hYg");
	this.shape_25.setTransform(-0.2,0,0.303,0.305);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006EB5").s().p("Al8CJIgngDIAngDIAsgFIA6gIIAggFIAigHIBKgRIAmgKIAogMIBLgZQBpgpAwgQICDg5QAjgQAPgJIAngUIAYgPIAIgFIgHAHQgOANgIAFIgjAZIgWAPIiZBPQg7AZhdAlIhPAaIgpALIgnAIQgQAFgXADIglAFIgkAFIghADIgfACIgcABIgugBg");
	this.shape_26.setTransform(5.2,10.3,0.303,0.305);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006EB5").s().p("AnhCWIApgjIAagVQARgOANgIIAigXIAkgXIAogXQAYgMASgIIAtgWQAcgNATgHIBjgkIBigdQAhgKBDgOIAvgKIAvgHQAwgIAlgEQAsgFAdAAQAegBAaABQAgABASADQgSgBgfADQgeACgaADIhHALQgdAEg2AMQgoAJgzANIhhAaIhiAeIhhAiQgTAHgbAMIgtARQgSAIgZANIgoAUQgQAIgWANIgjAUIg6AlIgsAfIgmAdQALgNAWgUg");
	this.shape_27.setTransform(-4.2,-9.6,0.303,0.305);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006EB5").s().p("AhiDjQgwgcgahYQgJgigCgWQgEgaAIhVQAKhlAAgZQAAgkAogNIAXgGQAQgDAPAGQAVAJACAmQACAvAJAOIAJAOQAIAHAPAAQAIABAfgDQAigBAZAFQBNASAQBVQAPBQg9BEQgyA6hIAXQgfAKgcAAQgeAAgXgMgAgSgKQggAKgMAdQgKAaAIAdQAGAbAUAQQAYAUAcgKQAdgJARgeQASgegHgdQgHghgZgMQgOgJgRAAQgLAAgPAFg");
	this.shape_28.setTransform(19.1,-4.9,0.303,0.305);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006EB5").s().p("AgpDtQg0gQgSgpQgIgVAPgRQAJgLAOgFQAfgKAkAVQAjAVAegJQAdgJALgYQAMgYgJgbQgMgkgsgJQgrgJgHgRQgIgSATghQAPgggMgaQgJgXgTgJQgSgIgWAHQgVAHgVAdQgVAcgUAHQgsANgMgfQgQgoAhgpQAegmAzgQQA8gTAvAIQBBAKAhA9QAQAcgEAgQgEAjAEAJQAHAQAnAYQAkAXAMArQAYBUg7A4QgkAjg7ASQgjAMggAAQgYAAgYgIg");
	this.shape_29.setTransform(5.6,-1.2,0.303,0.305);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006EB5").s().p("AhoAhQgOgeAngVQASgLAtgOQArgOAYgCQArgDALAdQANAfgnAUQgQAKgrANQgvAQgUACIgJABQgjAAgNgbg");
	this.shape_30.setTransform(-4.6,3.8,0.303,0.305);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006EB5").s().p("AgnDtQhbgTgxhOQgDgFgHgRQgJgUgCgMQgHgiAchTQAbhUAkg9QAagtAsgOIAWgGQAOgDAGAKQAFAMgUAwQgYA0AEAUQACAMACADQAEAIAOABIAhAAQAbABAXAHQBEAUAqBPQAoBNgVA1QgTAvhAAVQgxAQgvAAQgbAAgcgGgAgkAUQggAKgJAeQgHAbAPAaQAOAXAgAOQAjARAfgKQAbgJAGgbQAGgagQgcQgRgfgagNQgQgIgPAAQgNAAgPAFg");
	this.shape_31.setTransform(-15,5.3,0.303,0.305);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006EB5").s().p("AAACGQgIgBgEgFIh7iGQgIgJACgKQABgJAHgGQAnghAjgkQASgRAYgGQAagGASAQQANALAEARQAFASADACQAEAEAagCQAZgDARAOQATAQAAAdQgBAcgZAaQguAug0AsQgHAGgKAAIgCAAgAApgMQgNAFgMAJQgYAZARATQATAUAbgZQAMgMAFgMQAHgRgMgJQgGgGgIAAQgGAAgGADgAgehGQgMADgJAJQgKAJgBALQgBAKAIAJQAIAIALAAQALgBALgKQAIgIAEgLQAEgQgIgJQgGgFgJAAIgJABg");
	this.shape_32.setTransform(25.5,8.8,0.303,0.305);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006EB5").s().p("AAcBbIhwiQQgHgIAGgMQAEgJAIgGQAagTAPASIB0CIQAIAJgGANQgFAKgLAIQgQAMgLAAQgJAAgGgIg");
	this.shape_33.setTransform(21.3,12.1,0.303,0.305);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#006EB5").s().p("AhSCNQgNgDgEgIIhRicQgFgLAHgKQAFgIALgFQAMgGAKABQAOACAHAMIA5BiQAHANAGADQALAHARgFQAHgCAOgIIAVgNQALgIABgLQABgJgGgJIhBhkQgOgWAcgRQAMgHALAAQALABAHAKIBIBkQAGAIAMACIAbAFQAJACAIAJIAOAPQAOAUACAFQAGATgUANQgVANgVgOQgVgPgYANQhBAnhJAiQgIAEgJAAIgIgBg");
	this.shape_34.setTransform(16.8,15.6,0.303,0.305);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006EB5").s().p("AhMB4QgEgMARgaQASgbgDgIQgDgJgfgKQgegLgKgaQgOgtApgdQATgOA1gSQAbgKAQAAQAWgBAIAQIBKCYQAHAPgMAKQgFAFgOAFIgLAEQgJACgDgBQgRgEgMgXQgJgTgNAEQgLADgNAkQgMAkghAIQgIADgJAAIgCAAQgMAAgCgGgAgehAQgOAEgHALQgGAMAEALQAEAMALAFQAOAGARgGQAZgJgMgbQgEgLgHgGQgHgEgIAAQgFAAgFACg");
	this.shape_35.setTransform(8.7,18.8,0.303,0.305);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#006EB5").s().p("AhBBfQgqgbgIgyQgIgsAdglQAegnA5gLQBAgMALAjQAGAVgSAEQgMACgLgBQgNgCgJACQgfAGgOAYQgLAVAFAYQAGAaAXAPQAYAQAjgHQAKgCAKgFQALgGAIgBQALgDAIAFQAIAFACAIQAHAVgbAPQgRAKgbAFQgWAEgTAAQgrAAghgWg");
	this.shape_36.setTransform(1.8,20.2,0.303,0.305);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#006EB5").s().p("AgMBrQgOgFgCgNIgPivQgBgKALgHQAJgFAKAAQAMgBAIAEQANAFACANIAXCrQABAMgMAHQgKAFgOABIgGAAQgHAAgIgCg");
	this.shape_37.setTransform(-3.9,20.9,0.303,0.305);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#006EB5").s().p("ABxBsQgGgHgGgbQgHgegGgNQgBgDgEgDIgGgCQgLgBgIAOQgDAGgKAYQgSAwgbgDQgcgDgNgyQgHgYgEgIQgHgPgKgCQgDAAgDABQgEACgCADQgFAHgEAMIgIAVQgIAagHAFQgJAJgYgEQgTgDgGgIQgGgGACgLQAAgEA5ihQAHgUAiAGQARACALAGQAJAHADAMIALAlIAHAbQAHASAIAHQAEAEAEAAQAFABAEgEQAJgEAIgRIAJgaIANgiQAFgMAJgEQAJgEATAAQAiACAFAUQAQA6AbB0QABAMgGAFQgHAGgTAAQgXgBgJgKg");
	this.shape_38.setTransform(-11.1,20.7,0.303,0.305);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#006EB5").s().p("AAKAuQgNgEACgMQABgFAOgWIAUgXQAGgHAGAAIAOADQAHACAGAEQAHAGgBAGQgBAGgqAoQgEAFgIABIgGABIgIgBgAhAAdQgQgDACgNQABgEAQgWIASgaQAFgGAHgBIAOADQAHABAGAEQAFAFgBAHQAAAFgmAqQgEAFgIACIgIABIgGAAg");
	this.shape_39.setTransform(24.7,-22.2,0.303,0.305);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#006EB5").s().p("ABABvQgbgFABgXIAGg7QABgTgNgCQgIgBgKAJIgMAMIgZAiQgQATgPANQgHAGgWgCQgfgCAAgWIABifQAAgLAMgGQAJgEAJABQAOABAIAGQAIAHAAAKIgCA4QAAAHACAIQAEAJAHABQALABAVgXQAKgMAKgOQARgUATgOQAKgIAZAEQANACAJAGQANAJgBANIgUCZQgCATgVAAIgIAAg");
	this.shape_40.setTransform(17.6,-21.7,0.303,0.305);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#006EB5").s().p("Ah6BmQgGgFgBgKQgDhuADg4QAAgTAhgCQAPgCALAEQALAFADALIAQAgIAKAZQAIAQAJAHQADACAFAAQAFAAAAgDQAHgHAFgRIAFgZIAJghQAFgMAIgEQAIgEASAAQAhACAEASQAMA3ASBtQAAALgEAFQgGAFgNAAQgSgBgHgKQgEgGgFgZQgGgcgGgMQgBgDgEgCIgEgCQgJAAgGANQgDAHgFAWQgKAugTAAQgTABgRgtQgKgWgEgGQgIgNgJAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDADgBADQgDALAAAdQgCAZgDAHQgEAKgSABIgGABQgJAAgEgEg");
	this.shape_41.setTransform(9.4,-22.1,0.303,0.305);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#006EB5").s().p("Ag/BdQgpgWgPgtQgPguAcgmQAbgmA2gKQA3gKArAbQAqAZAIAwQAJAugcAjQgbAhgyAJQgPACgMAAQgiAAgdgQgAgNg9QgcAFgMAWQgMAVAIAYQAGAXASAPQAWASAbgFQAcgFALgXQAKgUgFgWQgFgXgRgQQgSgPgUAAIgNABg");
	this.shape_42.setTransform(0.7,-21.3,0.303,0.305);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#006EB5").s().p("AgTBhQgSgBgIgSIg/iKQgLgYAcgJQAYgKAOAdIAIAQQAHALAFAFQAKAKASAAQAIAAARgFQAhgJAXAJQAXAKAJAaQAOAnglAYQgMAIgrAPQgiAMgOAAIgBAAgAANAAQgNAEgDAJQgEAJAEAKQAIAVAagIQAKgDAGgHQAHgJgEgLQgEgJgJgFQgHgBgHAAQgFAAgFAAg");
	this.shape_43.setTransform(-6.4,-19,0.303,0.305);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#006EB5").s().p("AAnBfIgyhfQgJgPgLgDQgIgDgNAEQgNAEgFAAQgKgBgGgMQgHgLAHgKQAEgHAIgEQA1gZAygUQAZgLAKAVQAFAMgFAIQgDADgMAHQgKAHgDAHQgFALAJAQIAwBgQAGALgHAJQgFAHgIAEQgJADgGAAQgNAAgHgNg");
	this.shape_44.setTransform(-12.5,-17.8,0.303,0.305);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#006EB5").s().p("AgsA8QgCgCgEgeIgFgeQgBgGAFgHQAEgGAFgDQANgIAIALQAFAHAJA3QACAIgEAFQgCACgJAFQgIAFgGAAQgHAAgDgGgAARAXQgCgDgCgcIgDggQgBgGAFgHQAEgGAFgDQAOgHAHALQADAEAEAdIAFAeQABAIgEAEQgDADgIAEQgIAFgGAAQgHAAgEgGg");
	this.shape_45.setTransform(-17.4,-16.5,0.303,0.305);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#006EB5").s().p("AgIB9Ih7h8QgIgGAFgMQAEgIAHgHQAPgNAMADQAIACANANIARAQQAJAGAIgGQAGgFgBgWIgBgdQAAgYACgHQAEgKAQgMQATgQAIAJQAFAGgCAvQgCAvAIAJQAHAIAzAKQAzAMAEAGQAIAJgWAQQgOALgJABQgGACgKgCIgRgEQgvgQgJAIQgHAFAEAIQABAEAFAEIANAQQAJAJABAFQAFAOgPANQgLAKgJAAQgGAAgGgGg");
	this.shape_46.setTransform(-23.7,-10.2,0.303,0.305);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#006EB5").s().p("AAsBPIh/h0QgHgGAEgNQADgJAGgHQAIgHAJgDQAMgEAJAIIB5B1QAIAIgCALQgCAJgIAHQgLAKgJAAQgHAAgHgFg");
	this.shape_47.setTransform(-27.3,-6.9,0.303,0.305);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#006EB5").s().p("AAVBzIiKhkQgJgHgBgIQAAgJAGgHQAegoAfgkQAQgSAWgGQAYgGASAPQALALAFAPQAEAQADACQAEAEAXgBQAXAAAPANQASAQABAXQACAXgRAUQggAlgfAoQgEAGgKABIgBAAQgIAAgFgEgAAngIQgLAEgIAIQgTAYAVAPQATAQATgWQAIgLADgKQADgOgLgHQgGgGgHAAQgFAAgGADgAgfg5QgLADgHAJQgIAJABALQAAAJAJAHQAJAHAKgCQAJgBAIgKQAHgIACgKQACgOgIgIQgFgEgIAAQgEAAgGACg");
	this.shape_48.setTransform(-30.7,-3.1,0.303,0.305);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#006EB5").s().p("AALBPQgQgNgGgCQgDgBgZAHQgTAFgGgPQgBgCABgSQABgRgBgDQgCgEgMgMIgOgNQgCgFAAgFQABgHAHgDIAQgFQALgDAFgGQAFgFAEgUQADgRAHgCQAHgDAOAKIASAOIAIACIAegHQARgEAGAPQABACgBASQgBASABACQACAEAMANQANAKABADQAFAOgLAGIgPAFQgLAEgGAEQgGAEgEAUQgDASgIADIgDABQgHAAgNgKg");
	this.shape_49.setTransform(35.7,-10.6,0.303,0.305);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#006EB5").s().p("AALBQQgQgOgGgCQgDgBgZAHQgTAFgGgPIAAgUQABgRgBgDQgCgEgMgMIgOgNQgFgQAMgEIAQgFQAKgDAFgFQAFgGAEgUQADgRAHgCQAHgDAOAKIASAOIAIACIAegHQARgEAGAPQABACgBASQgBASABACQACAEAMANQANAKABADQAGANgMAHIgPAFQgLAEgGAEQgGAEgEAUQgDATgIACIgEABQgHAAgMgJg");
	this.shape_50.setTransform(-28.8,10,0.303,0.305);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#006EB5").s().p("AsaOhQjDhHiLh1QhMg/g7hQQg8hRgkhaIgehcQgMg3gEgoQgLheAPhdQAZiqBlijQCmkOFEjAQEKidFGhGQEdg+EfAUQEOAVDRBWQDCBOB/B5QBbBTA6BpIARAhIgRggQg8hrhbhQQg/g5hMguQhQgwhognQjehRj9gFQkWgFkRBPQksBWj5CnQiOBhhhBmQh0B1hKCBQgjA9gdBQQgcBOgIBFQgKBPAIBJQADAdALAtIAXBKQA3CMCBBxQA4AxBNAuQBOAtBHAbQCPA6CyAbQCTAXCzgFQExgLEphoQENheDTijQC/iQB1i/QBkiiARimQANhygdh0IgIgaIAJAaQAdBygMB0QgOClheCqQhmC5jDCpQjLCvkPB1QktCBk8AfQhYAHhUAAQkgAAj1hYg");
	this.shape_51.setTransform(-0.2,0,0.303,0.305);

	this.instance = new lib.Group_2();
	this.instance.setTransform(1,0,0.303,0.305,0,0,0,138.2,94.8);

	this.addChild(this.instance,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-31,86,62);


(lib.img6_1 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvWPWQmXmXAAo/QAAo+GXmYQGXmXI/AAQI/AAGXGXQGYGYAAI+QAAI/mYGXQmXGYo/AAQo/AAmXmYg");

	// Слой 1
	this.instance = new lib.img6();
	this.instance.setTransform(-139.5,-139);

	this.instance.mask = mask;

	// Слой 3
	this.instance_1 = new lib.maskRound();
	this.instance_1.setTransform(-5,-9,2.06,2.06);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-155.4,-159.4,300.8,300.8);


(lib.img3_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwWRgQmwnQAAqQQAAqPGwnRQGxnPJlAAQJlAAGwHPQGyHRAAKPQAAKQmyHQQmwHQplAAQplAAmxnQg");

	// Layer 1
	this.instance = new lib.img3();
	this.instance.setTransform(-148,-159.5);

	this.instance.mask = mask;

	// Layer 3
	this.instance_1 = new lib.maskRound();
	this.instance_1.setTransform(-5,-8.5,2.095,2.301);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-158,-176.5,306,336);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

	// Слой 4
	this.instance = new lib.btnBg1();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0},15).wait(1));

	// Слой 3
	this.instance_1 = new lib.btnBg2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-23,256,46);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:33});

	// timeline functions:
	this.frame_283 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(283).call(this.frame_283).wait(1));

	// btn
	this.btn = new lib.btn();
	this.btn.setTransform(0,162.9,0.01,0.011);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(198).to({_off:false},0).wait(1).to({scaleX:0.03,scaleY:0.03},0).wait(1).to({scaleX:0.09,scaleY:0.1},0).wait(1).to({scaleX:0.2,scaleY:0.2},0).wait(1).to({scaleX:0.35,scaleY:0.35},0).wait(1).to({scaleX:0.52,scaleY:0.53},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).to({scaleX:1,scaleY:1},5).to({scaleX:1.16,scaleY:1.16},15).to({scaleX:1,scaleY:1},15).to({scaleX:1.16,scaleY:1.16},15).to({scaleX:1,scaleY:1},15).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.51,scaleY:0.51},0).wait(1).to({scaleX:0.34,scaleY:0.34},0).wait(1).to({scaleX:0.2,scaleY:0.2},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.03,scaleY:0.03},0).wait(1).to({scaleX:0.01,scaleY:0.01},0).wait(1));

	// img
	this.instance = new lib.img6_1();
	this.instance.setTransform(5,13,0.01,0.01);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(183).to({_off:false},0).wait(1).to({regX:-5,regY:-9,scaleX:0.03,scaleY:0.03,x:4.9,y:12.8},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:4.6,y:12.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:4,y:11.2},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:3.3,y:9.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:2.4,y:8.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1.5,y:6.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:0.7,y:5.2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-0.3,y:3.4},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:5,y:13},0).to({scaleX:1,scaleY:1},5).wait(76).to({regX:-5,regY:-9,scaleX:0.98,scaleY:0.98,x:0.1,y:4.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:0.4,y:4.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:0.9,y:5.7},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:1.6,y:6.9},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:2.4,y:8.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:3.2,y:9.7},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:3.9,y:11.1},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:4.5,y:12.1},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:4.9,y:12.7},0).wait(1).to({regX:0,regY:0,scaleX:0.01,scaleY:0.01,x:5,y:13},0).wait(1));

	// logo2
	this.instance_1 = new lib.logo2();
	this.instance_1.setTransform(-100.1,259.5,2,2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,alpha:1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(33).to({alpha:0},10).to({_off:true},1).wait(106));

	// img
	this.instance_2 = new lib.img1_1();
	this.instance_2.setTransform(279,95.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({x:39.5},10,cjs.Ease.get(1)).wait(53).to({x:279},10,cjs.Ease.get(-1)).to({_off:true},1).wait(101));

	// img
	this.instance_3 = new lib.img2_1();
	this.instance_3.setTransform(-244,94);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({x:-69.5},10,cjs.Ease.get(1)).wait(53).to({x:-244},10,cjs.Ease.get(-1)).to({_off:true},1).wait(101));

	// img1
	this.instance_4 = new lib.img3_1();
	this.instance_4.setTransform(8,101,0.01,0.01);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).wait(1).to({regX:-5,regY:-8.5,scaleX:0.04,scaleY:0.04,x:7.8,y:100.7},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:7.4,y:100},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:6.7,y:98.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:5.9,y:97.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:4.9,y:95.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:4.1,y:94.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:3.4,y:93.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:2.9,y:92.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:2.6,y:91.8},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:8,y:101},0).to({scaleX:1,scaleY:1},5).wait(35).to({scaleX:1.1,scaleY:1.1},5).wait(1).to({regX:-5,regY:-8.5,scaleX:1.08,scaleY:1.08,x:2.7,y:91.9},0).wait(1).to({scaleX:1,scaleY:1,x:3,y:92.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:3.6,y:93.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:4.4,y:94.9},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:5.3,y:96.4},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:6.2,y:97.9},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:7,y:99.2},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:7.5,y:100.2},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:7.9,y:100.8},0).wait(1).to({regX:0,regY:0,scaleX:0.01,scaleY:0.01,x:8,y:101},0).to({_off:true},1).wait(174));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.setTransform(300,-118.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(125).to({x:13},5).wait(1).to({x:5.4},0).wait(1).to({x:-17},0).wait(1).to({x:-52.7},0).wait(1).to({x:-98.3},0).wait(1).to({x:-148.8},0).wait(1).to({x:-198.1},0).wait(1).to({x:-241},0).wait(1).to({x:-273.5},0).wait(1).to({x:-293.4},0).wait(1).to({x:-300},0).to({_off:true},1).wait(100));

	// logo
	this.instance_6 = new lib.logo_1();
	this.instance_6.setTransform(0,-367);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).wait(1).to({y:-363.3},0).wait(1).to({y:-352},0).wait(1).to({y:-333.8},0).wait(1).to({y:-310.3},0).wait(1).to({y:-284.6},0).wait(1).to({y:-259.9},0).wait(1).to({y:-239.1},0).wait(1).to({y:-223.9},0).wait(1).to({y:-214.9},0).wait(1).to({y:-212},0).to({y:-224},5).wait(251));

	// bgImg
	this.instance_7 = new lib.bgImg_1();
	this.instance_7.setTransform(0,-433);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).wait(1).to({y:-430.1},0).wait(1).to({y:-421.2},0).wait(1).to({y:-405.8},0).wait(1).to({y:-384},0).wait(1).to({y:-356.4},0).wait(1).to({y:-324.9},0).wait(1).to({y:-291.7},0).wait(1).to({y:-259.6},0).wait(1).to({y:-231},0).wait(1).to({y:-207.2},0).wait(1).to({y:-189},0).wait(1).to({y:-176.5},0).wait(1).to({y:-169.3},0).wait(1).to({y:-167},0).wait(261));

	// pattern
	this.pattern = new lib.pattern_1();

	this.timeline.addTween(cjs.Tween.get(this.pattern).wait(284));

	// bg
	this.instance_8 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(284));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,600,600);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(149,299,601,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;