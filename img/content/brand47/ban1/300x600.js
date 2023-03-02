(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/chicken1.png", id:"chicken1"},
		{src:"images/chicken2.png", id:"chicken2"},
		{src:"images/goblin.png", id:"goblin"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/head1.png", id:"head1"},
		{src:"images/head2.png", id:"head2"},
		{src:"images/light.png", id:"light"},
		{src:"images/pack.png", id:"pack"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.chicken1 = function() {
	this.initialize(img.chicken1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,235);


(lib.chicken2 = function() {
	this.initialize(img.chicken2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,235);


(lib.goblin = function() {
	this.initialize(img.goblin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,321);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,63);


(lib.head1 = function() {
	this.initialize(img.head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,265);


(lib.head2 = function() {
	this.initialize(img.head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,265);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.pack = function() {
	this.initialize(img.pack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,169);


(lib.pack_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pack();
	this.instance.setTransform(-145,-84);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145,-84,290,169);


(lib.light_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.light();
	this.instance.setTransform(-200,-150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200,-150,400,300);


(lib.head2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.head2();
	this.instance.setTransform(-98,-132.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98,-132.5,196,265);


(lib.head1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.head1();
	this.instance.setTransform(-98,-132.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98,-132.5,196,265);


(lib.hand_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(33,-31,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-31,66,63);


(lib.goblin_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.goblin();
	this.instance.setTransform(77,-160,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,-160,153,321);


(lib.chicken2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.chicken2();
	this.instance.setTransform(-150,-117);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-117,300,235);


(lib.chicken1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.chicken1();
	this.instance.setTransform(-150,-117);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-117,300,235);


(lib.bgimg = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E7732").s().p("AkyDaIgkAPIgCgaIBpgtIACAaIgkAQIAJBqIgiAOgAszBpIAzgXIA2BwIAfiVIAygVIAjC0IgsASIgUh4IgfCPIgnAQIgzhsIABCDIgoASgAjJCRIAggNIA6BvIgiAPIgJgVIgvAUIgGAcIggAOgAjCDmIAegPIgTgqgAgRAGIB0gyIADAlIhHAeIALCYIgsAUgApMAEIAugTIAPC7IguAVgAn/gcIAvgUIALCWIA/gbIgLiWIAugVIALCWIAVgJIAGBJIgqASIgDgkIiHA7gACYhDIAvgVIBUCdIgxAVIgNgeIhCAdIgJAoIgvAVgACjAyIAsgTIgcg7gAk3hzIAvgVIAFBJIA/gcIgFhIIAugUIAPC7IgvAUIgGhNIg/AbIAGBNIgvAVgAEdh9IA4gZQAcgLAMgDQASgDAMAFQAQAJACAaQACAagPAaQgLAQgRANQgMAIgVAJIgPAHIAGBAIguAUgAFchzIgOAGIADAyIAOgGQAVgJAGgJQAGgJgBgNQgBgNgHgCIgEgBQgIAAgPAGgAhGjcIAvgVIBRCfIgwAVIgMgeIhCAdIgIAoIgwAVgAg8hlIAtgTIgdg9gAHEjGIAvgUIAGBIIA+gbIgFhIIAugVIAPC9IgvAUIgGhPIg/AbIAGBQIgvAUgAK2kvIAugVIBTCgIgwAUIgOgdIhCAcIgIAoIgvAVgALAi4IAsgUIgcg8g");
	this.shape.setTransform(-49.1,-35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6B4IAeiUIgCgTIAhgIIgCATIAKgJQAMgKALAAQANgBAIALQAJAKAAATQAAAhgQAYQgSAagfAAIgRgDIgHAkIgCAUgAB8gVIgLAKIgLA2IANACQAQAAAKgSQAJgRABgWQAAgTgKAAQgGAAgLAKgAwAA8IALgZQASAQAWABQANAAAJgJQAIgJAAgMQAAgSgWAAIgVABIAEgWIAWAAQAKAAAGABQANgOAAgPQAAgQgSgBQgRABgXASIgHgWQAZgTAbAAQATAAALAHQANAKAAAQQAAAZgcATQARAJABASQAAAagWAPQgTAOgaAAQgZAAgVgPgAtvBBQgKgLABgSQAAgiASgXQATgbAcAAIAsADIgQBPQgCAMABAIQACAIAHAIIgcAEQgFgDgCgHQgCgEAAgEIAAgCQgQAUgRAAIgCAAQgMAAgIgJgAtPgJQgMAQAAAZQAAATAJAAQAMAAAPgSIAMg8IgKgBQgOAAgMATgArwBGIgPgDIARhRQAHggAqAAQApAAAAAXQAAARgWAKQASAHAAARQAAATgPANQgPAMgXAAIgFAAQgOAAgQgCgArgAxIAFACIANABQALgBAHgGQAHgGAAgJQAAgMgVAAIgQAAgArTgOIgDAOIAcAAQAKgIAAgIQAAgKgQAAQgQAAgDAMgAm+A2QgKgMAAgUQAAgdASgVQASgVAbgBQALAAALAFQgGgjg3gDIADgXQBbABAABRQAAAlgQAaQgTAfglABQgZAAgLgRgAmJgdQgPAAgKARQgIAOAAASQAAAOAGAJQAGAHAKAAQASAAAJgZQAIgUAAgWIAAgEQgKgJgLAAIgDABgAk4A7QgGgKADgQIANg+IABgTIAgAAIgQBJIgBAMQABAIAHAAQAKAAAVgUIALg2IACgUIAfAAIgRBOQgCANACAIQABAHAIAIIgcAFQgFgEgCgGQgDgFABgFIAAgBQgEAFgHAGQgPAKgPAAQgRAAgGgLgAqSBGIA4g9IgHgXQgEgMgKAAQgGAAgGACIAIgWQAHgDAGgBQAWAAAHAYIAIAaIAIAAIAGgbIABgTIAfAAIgJAuIADAAIATgaQARgZAbAAQAHAAAFADIgCAXQgHgDgEABQgKAAgJAMIgRAXIAgA9IgfAAIgZgxIgKAAIgFAdIgCAUIgfAAIAKgxIgEAAIgsAygAhrBBIgPgDIARhQQAGggArgBQAoAAAAAXQAAASgVAKQARAGAAARQABATgPAMQgPANgYABQgQAAgSgDgAhbAsIAEABIAOABQALABAHgHQAHgGAAgJQAAgMgVABIgQAAgAhOgSIgDANIAcAAQAKgIAAgHQgBgKgPAAQgQAAgDAMgAEGAwIAAgCQgQAUgRAAQgOAAgIgJQgKgLABgSQAAggASgZQATgbAcAAIAsADIgQBOQgDANACAIQACAIAHAHIgcAFQgJgHAAgLgADvgSQgMASAAAYQAAATAJAAQAMAAAPgSIAMg9IgKAAQgOAAgMASgAFNAxQgKgNAAgUQAAgcASgWQASgVAcgBQALAAAKAGQgFglg4gCIADgWQBbABAABQQABAkgRAbQgTAgglAAIgCAAQgXAAgLgQgAFpgSQgIAQABAQQAAAOAGAJQAGAHAKAAQARAAAKgZQAHgTAAgXIAAgEQgKgIgOgBQgPABgKARgAIcAxQgLgNABgVQAAghASgUQARgUAZgBQATAAAVAHIgIAXQgSgIgLAAQgPAAgKAQQgJAOAAAOQAAAgAYABQASgBASgUIACAaQgFAFgIAEQgQAKgRgBIgCABQgVAAgMgPgAHegeIACgYIAggEIgUBjIgCAUIgfAAgAPCA3QgFgEAAgIQAAgHAFgEQAFgGAIAAQAHAAAFAGQAFAFAAAGQAAAHgFAFQgFAGgIAAQgHAAgFgGgANVA6IgOgEIAShYIACgWIAggFIgIArIALAAQAXAAALAKQALAIAAAPQAAAUgPAMQgPANgYAAQgOAAgSgCgANmAlIAQADQAKgBAHgGQAGgHAAgJQAAgRgRAAIgOAAgAKAA8IAThcIgCgUIAigHIgDAUIALgLQAPgJANgBQAXAAADAWQAVgWAUAAQARAAAGAMQAFAJgDARIgNA+IgBATIggAAIAPhKIACgMQgBgIgGAAQgLAAgVATIgMA4IgBAUIggAAIAPhLIACgLQgBgJgGAAQgIABgMAIIgLAJIgMA5IgCAUgAPKAKIARhmIABgWIAlgFIgiCEgAHqhOQgEgEACgHQABgGAGgFQAGgFAGAAQAHAAADAFQAEAEgCAHQgBAGgFAFQgGAFgGAAQgHAAgEgFg");
	this.shape_1.setTransform(-0.8,-247.8);

	// bgImg.jpg
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pack
	this.instance = new lib.pack_1();
	this.instance.setTransform(325,215);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({x:5},10,cjs.Ease.get(1)).wait(80).to({x:325},10,cjs.Ease.get(-1)).wait(1));

	// goblin
	this.instance_1 = new lib.goblin_1();
	this.instance_1.setTransform(214.7,69,0.851,0.851);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).to({x:81},10,cjs.Ease.get(1)).wait(75).to({x:214.7},10,cjs.Ease.get(-1)).wait(1));

	// hand
	this.instance_2 = new lib.hand_1();
	this.instance_2.setTransform(68.9,16.9,0.851,0.851,-97,0,0,32.9,32);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).wait(1).to({regX:0,regY:0.5,rotation:-95.5,x:44.9,y:47.3},0).wait(1).to({rotation:-91.1,x:42.6,y:45.4},0).wait(1).to({rotation:-83.7,x:39.1,y:41.7},0).wait(1).to({rotation:-74,x:35.3,y:36.4},0).wait(1).to({rotation:-63.6,x:32.4,y:30},0).wait(1).to({rotation:-54,x:30.7,y:23.8},0).wait(1).to({rotation:-46.3,x:30,y:18.6},0).wait(1).to({rotation:-41,x:30.1,y:15},0).wait(1).to({rotation:-37.9,x:30.2,y:12.9},0).wait(1).to({regX:33,regY:31.9,rotation:-37,x:68.7,y:16.8},0).wait(36).to({regX:0,regY:0.5,rotation:-38.2,x:30.2,y:13.2},0).wait(1).to({rotation:-42.2,x:30,y:15.8},0).wait(1).to({rotation:-48.9,x:30.2,y:20.4},0).wait(1).to({rotation:-57.9,x:31.2,y:26.4},0).wait(1).to({rotation:-68.1,x:33.5,y:32.9},0).wait(1).to({rotation:-78.1,x:36.8,y:38.8},0).wait(1).to({rotation:-86.4,x:40.4,y:43.2},0).wait(1).to({rotation:-92.4,x:43.3,y:46},0).wait(1).to({rotation:-95.9,x:45.1,y:47.5},0).wait(1).to({regX:32.9,regY:32,rotation:-97,x:68.9,y:16.9},0).to({_off:true},1).wait(20));

	// head
	this.instance_3 = new lib.head2_1();
	this.instance_3.setTransform(-52,167.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({alpha:1},2).wait(7).to({alpha:0},2).to({_off:true},1).wait(124));

	// head
	this.instance_4 = new lib.head1_1();
	this.instance_4.setTransform(-252,298.5,1,1,-45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({rotation:0,x:-52,y:167.5},10,cjs.Ease.get(1)).wait(35).to({rotation:-45,x:-252,y:298.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(100));

	// light
	this.instance_5 = new lib.light_1();
	this.instance_5.setTransform(-2.5,188);
	this.instance_5.alpha = 0;
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({scaleX:1.02,scaleY:1.2,alpha:1},5).to({scaleX:1.16,scaleY:1.29,alpha:0},3).wait(173));

	// chicken
	this.instance_6 = new lib.chicken2_1();
	this.instance_6.setTransform(0,223);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(65).to({x:300},10).to({_off:true},1).wait(100));

	// chicken
	this.instance_7 = new lib.chicken1_1();
	this.instance_7.setTransform(300,223);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:0},15,cjs.Ease.get(1)).to({_off:true},29).wait(176));

	// bgimg
	this.instance_8 = new lib.bgimg();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,600,641);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(149,299,601,642);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;