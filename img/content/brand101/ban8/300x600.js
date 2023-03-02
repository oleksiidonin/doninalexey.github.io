(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.billet = function() {
	this.initialize(img.billet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,110);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,688);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,600);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,600);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,688);


(lib.logo_znak = function() {
	this.initialize(img.logo_znak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.logo_znak_dark = function() {
	this.initialize(img.logo_znak_dark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);// helper functions:

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


(lib.smachnomu_lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhDB9QAiAAAXgPQARgMAOgYIBwjGIhBAAIhECCIhDiCIhBAAIBkCxQgIAOgIAGQgJAGgOAAQgRAAgTgOIgWAqQAKAIARAFQARAFASAAg");
	this.shape.setTransform(103.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACUB7IAAj1IhSAAIhCCUIhBiUIhSAAIAAD1IA7AAIAAirIBMCrIAZAAIBMirIAACrg");
	this.shape_1.setTransform(73,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAABRQgkAAgXgXQgXgXAAgjQAAgiAXgWQAWgXAlAAQAlAAAXAXQAXAWAAAiQAAAjgXAXQgXAXglAAgAAAB/QA+AAAogkQApgjAAg4QAAg2gpgkQgogkg+AAQg9AAgoAkQgpAkAAA2QAAA4ApAjQAoAkA9AAg");
	this.shape_2.setTransform(40.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AB7B7IAAj1Ig7AAIAABhIh/AAIAAhhIg7AAIAAD1IA7AAIAAhnIB/AAIAABng");
	this.shape_3.setTransform(10.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("Agxh6Ig7AAIAABFQAAArAZAWQAaAZAyAAQAbAAAfgIIAABeIA6AAIAAj1Ig6AAIAABqQgXAIgcAAQgxAAAAgtg");
	this.shape_4.setTransform(-17.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACOB7Ihpj1IhIAAIhqD1IBCAAIASgqIBzAAIASAqgAArAjIhVAAIAqhog");
	this.shape_5.setTransform(-41.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACUB7IAAj1IhSAAIhCCUIhBiUIhSAAIAAD1IA6AAIAAirIBNCrIAZAAIBMirIAACrg");
	this.shape_6.setTransform(-72.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAPB/QBMAAAng8IgygWQgKAQgRAKQgRAKgVAAQgkAAgYgXQgYgXAAgjQAAgiAYgWQAYgXAkAAQAVAAARAKQARAKAKAPIAygWQgng8hMAAQg9AAgpAjQgqAkAAA3QAAA4AqAkQApAjA9AAg");
	this.shape_7.setTransform(-103.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.smachnomu_lines, new cjs.Rectangle(-117.5,-13.6,235,27.4), null);


(lib.na_lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Agjh6IhqD1IBDAAIAQgqIB0AAIARAqIBDAAIhpj1gAAAhFIArBoIhVAAg");
	this.shape.setTransform(26.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABAh6IAABhIh/AAIAAhhIg6AAIAAD1IA6AAIAAhnIB/AAIAABnIA7AAIAAj1g");
	this.shape_1.setTransform(-1.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABBh6IgXA/IgnAAIAXg/IgmAAIgWA/IgqAAIgKAeIAoAAIgWA8IgoAAIgKAdIAnAAIgYA/IAnAAIAXg/IAnAAIgYA/IAmAAIAXg/IAqAAIAKgdIgpAAIAXg8IApAAIAJgeIgnAAIAXg/gAgHgdIAlAAIgWA8IgmAAg");
	this.shape_2.setTransform(-28.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.na_lines, new cjs.Rectangle(-41.8,-13.2,83.7,26.6), null);


(lib.na_gray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AFWB7IgRgqIh1AAIgRAqIhCAAIBpj1IBJAAIBpD1gAE1AjIgqhoIgrBoIBVAAgAAuB7IAAhnIh/AAIAABnIg6AAIAAj1IA6AAIAABhIB/AAIAAhhIA7AAIAAD1gAk7B7IAYg/IgnAAIgXA/IgnAAIAYg/IgnAAIAKgdIAoAAIAWg8IgoAAIAKgeIAqAAIAWg/IAnAAIgXA/IAmAAIAXg/IAnAAIgYA/IAoAAIgKAeIgpAAIgWA8IApAAIgKAdIgqAAIgXA/gAk/AfIAmAAIAXg8IgmAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.na_gray, new cjs.Rectangle(-40.8,-12.2,81.7,24.6), null);


(lib.na = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABLB7IgRgqIh0AAIgRAqIhBAAIBoj1IBJAAIBoD1gAAqAjIgqhoIgpBoIBTAAg");
	this.shape.setTransform(26.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABAB7IAAhnIiAAAIAABnIg5AAIAAj1IA5AAIAABhICAAAIAAhhIA6AAIAAD1g");
	this.shape_1.setTransform(-1.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZB7IAXg/IgnAAIgXA/IgnAAIAYg/IgnAAIALgdIAnAAIAXg8IgpAAIAKgeIAqAAIAWg/IAmAAIgXA/IAmAAIAYg/IAmAAIgXA/IAnAAIgJAeIgqAAIgWA8IApAAIgKAdIgqAAIgXA/gAgeAfIAmAAIAWg8IglAAg");
	this.shape_2.setTransform(-28.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.na, new cjs.Rectangle(-40.8,-12.2,81.7,24.6), null);


(lib.logo_znak_dark_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo_znak_dark();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_znak_dark_1, new cjs.Rectangle(-15,-15,30,30), null);


(lib.logo_znak_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo_znak();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_znak_1, new cjs.Rectangle(-15,-15,30,30), null);


(lib.img5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img5();
	this.instance.parent = this;
	this.instance.setTransform(-172,-344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img5_1, new cjs.Rectangle(-172,-344,344,688), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-175,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-175,-300,350,600), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-175,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-175,-300,350,600), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-172,-344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-172,-344,344,688), null);


(lib.bottle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bottle();
	this.instance.parent = this;
	this.instance.setTransform(-122,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottle_1, new cjs.Rectangle(-122,-225,244,450), null);


(lib.billet_cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.billet();
	this.instance.parent = this;
	this.instance.setTransform(-151,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.billet_cover, new cjs.Rectangle(-151,-55,302,110), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#20AAD2","#00508C"],[0,1],118.7,-209.8,0,118.7,-209.8,301.5).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.smachnomu_gray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.logo_znak_dark_1();
	this.instance.parent = this;
	this.instance.setTransform(40.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AOhB6QgSgFgJgIIAWgqQATAOAQAAQAPAAAJgGQAIgGAIgOIhlixIBCAAIBDCCIBFiCIBBAAIhwDGQgOAYgSAMQgXAPgiAAQgSAAgRgFgAxiBcQgqgkAAg4QAAg3AqgkQApgjA+AAQBLAAAnA8IgyAWQgJgPgRgKQgRgKgVAAQglAAgZAXQgXAWAAAiQAAAjAXAXQAZAXAlAAQAVAAARgKQARgKAJgQIAyAWQgnA8hLAAQg+AAgpgjgAMzB7IAAirIhNCrIgZAAIhNirIAACrIg6AAIAAj1IBRAAIBDCUIBCiUIBRAAIAAD1gACmB7IAAhnIiAAAIAABnIg6AAIAAj1IA6AAIAABhICAAAIAAhhIA6AAIAAD1gAiAB7IAAheQgfAIgbAAQgzAAgagZQgZgWAAgrIAAhFIA7AAIAABFQAAAtAyAAQAdAAAWgIIAAhqIA7AAIAAD1gAlWB7IgQgqIh1AAIgRAqIhDAAIBqj1IBIAAIBqD1gAl2AjIgrhoIgrBoIBWAAgAp9B7IAAirIhOCrIgZAAIhMirIAACrIg7AAIAAj1IBSAAIBCCUIBCiUIBRAAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.smachnomu_gray, new cjs.Rectangle(-116.5,-15,233,30), null);


(lib.smachnomu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.logo_znak_1();
	this.instance.parent = this;
	this.instance.setTransform(40.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOhB6QgSgFgJgIIAWgqQATAOAQAAQAPAAAJgGQAIgGAIgOIhlixIBCAAIBDCCIBFiCIBBAAIhwDGQgOAYgSAMQgXAPgiAAQgSAAgRgFgAxiBcQgqgkAAg4QAAg3AqgkQApgjA+AAQBLAAAnA8IgyAWQgJgPgRgKQgRgKgVAAQglAAgZAXQgXAWAAAiQAAAjAXAXQAZAXAlAAQAVAAARgKQARgKAJgQIAyAWQgnA8hLAAQg+AAgpgjgAMzB7IAAirIhNCrIgZAAIhNirIAACrIg6AAIAAj1IBRAAIBDCUIBCiUIBRAAIAAD1gACmB7IAAhnIiAAAIAABnIg6AAIAAj1IA6AAIAABhICAAAIAAhhIA6AAIAAD1gAiAB7IAAheQgfAIgbAAQgzAAgagZQgZgWAAgrIAAhFIA7AAIAABFQAAAtAyAAQAdAAAWgIIAAhqIA7AAIAAD1gAlWB7IgQgqIh1AAIgRAqIhDAAIBqj1IBIAAIBqD1gAl2AjIgrhoIgrBoIBWAAgAp9B7IAAirIhOCrIgZAAIhMirIAACrIg7AAIAAj1IBSAAIBCCUIBCiUIBRAAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.smachnomu, new cjs.Rectangle(-116.5,-15,233,30), null);


(lib.billet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smachnomu
	this.instance = new lib.smachnomu();
	this.instance.parent = this;
	this.instance.setTransform(41.8,-21.4);
	this.instance._off = true;

	this.instance_1 = new lib.smachnomu_gray();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.8,-22.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({y:-22.1},0).to({_off:true},1).wait(1).to({_off:false,y:-23.3},0).wait(1).to({y:-23.8},0).to({_off:true},1).wait(1).to({_off:false,y:-24.6},0).to({_off:true},1).wait(2).to({_off:false,y:-25.4},0).wait(1).to({y:-25.5},0).to({_off:true},1).wait(1).to({_off:false,y:-25.7},0).wait(1).to({y:-25.8},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,y:-24.2},0).to({_off:true},1).wait(1).to({_off:false,y:-24.9},0).wait(1).to({y:-25.2},0).to({_off:true},1).wait(2).to({_off:false,y:-25.6},0).to({_off:true},1).wait(2));

	// na
	this.instance_2 = new lib.na();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-114.9,-19.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.na_gray();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-114.9,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{y:-22.5}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{y:-24.1}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(1).to({y:-20.5},0).wait(1).to({y:-21.3},0).wait(1).to({y:-21.9},0).to({_off:true},1).wait(1).to({_off:false,y:-23.1},0).wait(1).to({y:-23.6},0).to({_off:true},1).wait(1).to({_off:false,y:-24.5},0).wait(1).to({y:-24.8},0).wait(1).to({y:-25.1},0).wait(1).to({y:-25.3},0).wait(1).to({y:-25.5},0).wait(1).to({y:-25.7},0).wait(2).to({y:-25.8},0).wait(1));

	// smachnomu_lines
	this.instance_4 = new lib.smachnomu_lines();
	this.instance_4.parent = this;
	this.instance_4.setTransform(41.8,-21.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(1).to({y:-22.5},0).wait(1).to({y:-23.5},0).wait(1).to({y:-24.3},0).wait(1).to({y:-24.9},0).wait(1).to({y:-25.4},0).wait(1).to({y:-25.6},0).wait(1).to({y:-25.8},0).wait(13));

	// na_lines
	this.instance_5 = new lib.na_lines();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-114.9,-16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-25.8},10,cjs.Ease.quadOut).wait(13));

	// billet_cover
	this.instance_6 = new lib.billet_cover();
	this.instance_6.parent = this;
	this.instance_6.setTransform(9,-27,0.98,0.98);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},2).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.2,-80.9,313.2,107.8);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.img1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.875,0.875);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,alpha:1},10).wait(1));

	// billet
	this.instance_1 = new lib.billet_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,0.1,0.923,0.923,0,0,0,0.3,-27);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(29).to({startPosition:22},0).to({alpha:0},10).to({_off:true},1).wait(50).to({_off:false,regX:0.5,regY:-26.7,x:-0.7,y:-233.9,alpha:1,startPosition:0},0).wait(56));

	// bottle
	this.instance_2 = new lib.bottle_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(276,60);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({x:0},15,cjs.Ease.cubicOut).wait(56));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({alpha:1},10).wait(71));

	// img
	this.instance_4 = new lib.img5_1();
	this.instance_4.parent = this;
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({scaleX:0.96,scaleY:0.96,alpha:1},10).to({scaleX:0.88,scaleY:0.88},25).to({_off:true},1).wait(70));

	// img
	this.instance_5 = new lib.img4_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(25,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({x:10.7,alpha:1},10).to({x:-25},25).to({_off:true},1).wait(95));

	// img
	this.instance_6 = new lib.img3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-25,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({x:-10.7,alpha:1},10).to({x:25},25).to({_off:true},1).wait(120));

	// img
	this.instance_7 = new lib.img1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.914,0.914);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1},24).to({_off:true},1).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.2,-314.4,314.5,628.9);


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
	this.instance.setTransform(150.1,300.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.8,285.6,314.5,628.9);
// library properties:
lib.properties = {
	id: 'EFBD1E17ABBC4A368B7A72FE21EC61C0',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/billet.png", id:"billet"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/img4.jpg", id:"img4"},
		{src:"images/img5.jpg", id:"img5"},
		{src:"images/logo_znak.png", id:"logo_znak"},
		{src:"images/logo_znak_dark.png", id:"logo_znak_dark"}
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
an.compositions['EFBD1E17ABBC4A368B7A72FE21EC61C0'] = {
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