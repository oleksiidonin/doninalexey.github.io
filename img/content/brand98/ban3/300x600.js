(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,364,328);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,136);


(lib.spoon = function() {
	this.initialize(img.spoon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,275);


(lib.strawberry = function() {
	this.initialize(img.strawberry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,74);// helper functions:

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


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-102.3,-45.6,204.7,91.2), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-104.6,-37.7,209.2,75.4), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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AMIAACQQAAANgEAEQgEAKgMAAQgLAAgEgKgAidh6QgEgIAAgJIAAg4IhOAAIAAA4IgCARQgEAKgMAAQgNAAgEgKIgCgRIAAiNIACgRQAEgLANAAQAMAAAEALIACARIAAA0IBOAAIAAg0QAAgIAEgJQAEgLAMAAQALAAAGALIACARIAACNIgCARQgGAKgLAAQgMAAgEgKgAoIh6QgEgIAAgJIAAiDIg2AAIAAA2QAABng/AAIgMgCQgIgFAAgKQAAgMAIgDIAIgCQAdgEAAhJIAAg7QAAgMAFgEQAGgGAMAAIBWAAQAMAAAEAGQAHAEAAAMIAACQIgCARQgHAKgKAAQgNAAgEgKgAsniHQgXgWAAg1QAAg0AXgWQAXgYAhAAQAjAAAXAYQAXAWAAA0QAAA1gXAWQgXAXgjAAQghAAgXgXgAsKkGQgPANAAAnQAAAoAPANQAIAKATAAQATAAAKgKQANgNAAgoQAAgngNgNQgKgKgTAAQgTAAgIAKgAuLh6QgEgIAAgJIAAiDIhOAAIAACDIgCARQgEAKgMAAQgNAAgEgKIgCgRIAAiQQAAgMAEgEQAGgGANAAIBsAAQANAAAEAGQAGAEAAAMIAACQIgCARQgGAKgLAAQgMAAgEgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-102.7,-30.8,205.5,61.7), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-103.9,-57.2,207.9,114.4), null);


(lib.strawberry_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.strawberry();
	this.instance.parent = this;
	this.instance.setTransform(-48,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.strawberry_1, new cjs.Rectangle(-48,-37,96,74), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-73,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-73,-68,146,136), null);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-182,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_1, new cjs.Rectangle(-182,-164,364,328), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D11441").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.strawberrys = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// strawberry
	this.instance = new lib.strawberry_1();
	this.instance.parent = this;
	this.instance.setTransform(-126,-339);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,y:385},15).wait(63));

	// strawberry
	this.instance_1 = new lib.strawberry_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.8,-325.4,0.634,0.634,0,0,0,0.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({rotation:-360,y:398.6},15).wait(61));

	// strawberry
	this.instance_2 = new lib.strawberry_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.5,-335.9,0.755,0.755,-169.8,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({rotation:190.2,y:388.1},15).wait(62));

	// strawberry
	this.instance_3 = new lib.strawberry_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(161.4,-362.1,1,1,135);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({rotation:-225,y:361.9},15).wait(60));

	// strawberry
	this.instance_4 = new lib.strawberry_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-78,-335.9,0.755,0.755,-169.8,0,0,0.1,-0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({rotation:190.2,y:388.1},15).wait(58));

	// strawberry
	this.instance_5 = new lib.strawberry_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-22,-339);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({rotation:-360,y:385},15).wait(59));

	// strawberry
	this.instance_6 = new lib.strawberry_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(42.1,-347.5,0.816,0.816,105,0,0,0.1,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({rotation:465,y:376.5},15).wait(57));

	// strawberry
	this.instance_7 = new lib.strawberry_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(106.5,-347.5,0.816,0.816,75,0,0,0.1,-0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({rotation:-285,y:376.5},15).wait(55));

	// strawberry
	this.instance_8 = new lib.strawberry_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-137,-351.1,0.82,0.82,60,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({rotation:420,y:372.9},15).wait(56));

	// strawberry
	this.instance_9 = new lib.strawberry_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-91,-357.9,1,1,150,0,0,0.1,-0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({rotation:-210,y:366.1},15).wait(54));

	// strawberry
	this.instance_10 = new lib.strawberry_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(135.8,-348,0.825,0.825,105,0,0,0.1,-0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({rotation:465,y:376},15).wait(53));

	// strawberry
	this.instance_11 = new lib.strawberry_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(100,-350.9,0.816,0.816,0,-120,60,0.1,-0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(12).to({_off:false},0).to({rotation:-360,y:373.1},15).wait(51));

	// strawberry
	this.instance_12 = new lib.strawberry_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-34.1,-362.1,1,1,135);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({rotation:495,y:361.9},15).wait(49));

	// strawberry
	this.instance_13 = new lib.strawberry_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-130.1,-349.9,1,1,90,0,0,0.1,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({rotation:-270,y:374.1},15).wait(50));

	// strawberry
	this.instance_14 = new lib.strawberry_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(79.3,-351.1,0.82,0.82,60,0,0,0.1,0.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).to({rotation:420,y:372.9},15).wait(48));

	// strawberry
	this.instance_15 = new lib.strawberry_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-17,-335.9,0.755,0.755,-169.8,0,0,0.1,-0.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(17).to({_off:false},0).to({rotation:-529.8,y:388.1},15).wait(46));

	// strawberry
	this.instance_16 = new lib.strawberry_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-71,-362.5,1,1,0,-129.2,50.8,0.1,0);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(16).to({_off:false},0).to({rotation:360,y:361.5},15).wait(47));

	// strawberry
	this.instance_17 = new lib.strawberry_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(127.6,-359.7,1,1,144.7,0,0,0.1,-0.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(18).to({_off:false},0).to({rotation:-215.3,y:364.3},15).wait(45));

	// strawberry
	this.instance_18 = new lib.strawberry_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(34.4,-347.9,0.82,0.82,150,0,0,0.1,0.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(20).to({_off:false},0).to({rotation:510,y:376.1},15).wait(43));

	// strawberry
	this.instance_19 = new lib.strawberry_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-136,-347.9,0.82,0.82,150,0,0,0.1,0.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(19).to({_off:false},0).to({rotation:-210,y:376.1},15).wait(44));

	// strawberry
	this.instance_20 = new lib.strawberry_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-12.4,-346.7,0.755,0.755,115.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(21).to({_off:false},0).to({rotation:475.2,y:377.3},15).wait(42));

	// strawberry
	this.instance_21 = new lib.strawberry_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(134,-351.1,0.82,0.82,60,0,0,0.1,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(23).to({_off:false},0).to({rotation:-300,y:372.9},15).wait(40));

	// strawberry
	this.instance_22 = new lib.strawberry_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(80.8,-349.8,0.82,0.82,112.2,0,0,0.1,0.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(22).to({_off:false},0).to({rotation:472.2,y:374.2},15).wait(41));

	// strawberry
	this.instance_23 = new lib.strawberry_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(18.9,-362,1,1,60,0,0,0.1,-0.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(26).to({_off:false},0).to({rotation:-300,y:362},15).wait(37));

	// strawberry
	this.instance_24 = new lib.strawberry_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-149.5,-339);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(25).to({_off:false},0).to({rotation:360,y:385},15).wait(38));

	// strawberry
	this.instance_25 = new lib.strawberry_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(154.8,-355.1,1,1,0,-23.7,156.3);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(27).to({_off:false},0).to({rotation:-360,y:368.9},15).wait(36));

	// strawberry
	this.instance_26 = new lib.strawberry_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(58.8,-348,0.825,0.825,105,0,0,0.1,-0.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(29).to({_off:false},0).to({rotation:465,y:376},15).wait(34));

	// strawberry
	this.instance_27 = new lib.strawberry_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-19.7,-339);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(28).to({_off:false},0).to({rotation:-360,y:385},15).wait(35));

	// strawberry
	this.instance_28 = new lib.strawberry_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(93.4,-362.1,1,1,135);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(30).to({_off:false},0).to({rotation:495,y:361.9},15).wait(33));

	// strawberry
	this.instance_29 = new lib.strawberry_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-53.4,-347.7,0.755,0.755,-49.8);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(32).to({_off:false},0).to({rotation:-409.8,y:376.3},15).wait(31));

	// strawberry
	this.instance_30 = new lib.strawberry_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-127.1,-347.9,0.82,0.82,0,-150,30,0.1,0.1);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(31).to({_off:false},0).to({rotation:360,y:376.1},15).wait(32));

	// strawberry
	this.instance_31 = new lib.strawberry_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-92.6,-351.2,0.82,0.82,120,0,0,0.1,0.1);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(33).to({_off:false},0).to({rotation:-240,y:372.8},15).wait(30));

	// strawberry
	this.instance_32 = new lib.strawberry_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(119,-358.1,0.999,0.999,74,0,0,0.2,-0.1);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(34).to({_off:false},0).to({rotation:434,y:365.9},15).wait(29));

	// strawberry
	this.instance_33 = new lib.strawberry_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-23.9,-345.5,0.755,0.755,145.2,0,0,0.1,-0.1);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(36).to({_off:false},0).to({rotation:-214.8,y:378.5},15).wait(27));

	// strawberry
	this.instance_34 = new lib.strawberry_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-64.6,-362,1,1,60,0,0,0.1,-0.1);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(38).to({_off:false},0).to({rotation:420,y:362},15).wait(25));

	// strawberry
	this.instance_35 = new lib.strawberry_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-126.7,-362.5,1,1,129.2,0,0,0.1,0);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(37).to({_off:false},0).to({rotation:-230.8,y:361.5},15).wait(26));

	// strawberry
	this.instance_36 = new lib.strawberry_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(138.1,-343.9,0.747,0.747,150,0,0,0,0.1);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(39).to({_off:false},0).to({rotation:510,y:380.1},15).wait(24));

	// strawberry
	this.instance_37 = new lib.strawberry_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(85.9,-339);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(41).to({_off:false},0).to({rotation:-360,y:385},15).wait(22));

	// strawberry
	this.instance_38 = new lib.strawberry_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-16,-347.9,0.82,0.82,150,0,0,0.1,0.1);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(40).to({_off:false},0).to({rotation:510,y:376.1},15).wait(23));

	// strawberry
	this.instance_39 = new lib.strawberry_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(29.7,-347.9,0.82,0.82,0,-150,30,0.1,0.1);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(42).to({_off:false},0).to({rotation:-360,y:376.1},15).wait(21));

	// strawberry
	this.instance_40 = new lib.strawberry_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-68.8,-362.1,1,1,135);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(44).to({_off:false},0).to({rotation:495,y:361.9},15).wait(19));

	// strawberry
	this.instance_41 = new lib.strawberry_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-120.8,-346.3,1,1,-170.8,0,0,0.1,0.1);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(43).to({_off:false},0).to({rotation:-530.8,y:377.7},15).wait(20));

	// strawberry
	this.instance_42 = new lib.strawberry_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-8.3,-343.9,0.747,0.747,150,0,0,0,0.1);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(45).to({_off:false},0).to({rotation:510,y:380.1},15).wait(18));

	// strawberry
	this.instance_43 = new lib.strawberry_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(104.6,-361,1,1,-140.8,0,0,0.1,0);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(47).to({_off:false},0).to({rotation:-500.8,y:363},15).wait(16));

	// strawberry
	this.instance_44 = new lib.strawberry_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(63.8,-343.9,0.747,0.747,150,0,0,0,0.1);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(46).to({_off:false},0).to({rotation:510,y:380.1},15).wait(17));

	// strawberry
	this.instance_45 = new lib.strawberry_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(129.7,-342,0.82,0.82,88.7);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(48).to({_off:false},0).to({rotation:-271.3,y:382},15).wait(15));

	// strawberry
	this.instance_46 = new lib.strawberry_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(37.2,-350.4,1,1,0,-89.2,90.8,0.1,0.1);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(49).to({_off:false},0).to({rotation:360,y:373.6},15).wait(14));

	// strawberry
	this.instance_47 = new lib.strawberry_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-85,-355.6,1,1,0,155.8,-24.2,0.1,0.1);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(51).to({_off:false},0).to({rotation:-360,y:368.4},15).wait(12));

	// strawberry
	this.instance_48 = new lib.strawberry_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-15.7,-350.3,0.82,0.82,65.3,0,0,0.1,0.1);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(53).to({_off:false},0).to({rotation:425.3,y:373.7},15).wait(10));

	// strawberry
	this.instance_49 = new lib.strawberry_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-139.7,-358.1,0.999,0.999,74,0,0,0.2,-0.1);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(52).to({_off:false},0).to({rotation:-286,y:365.9},15).wait(11));

	// strawberry
	this.instance_50 = new lib.strawberry_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(91.4,-362.4,1,1,0,-54.2,125.8,0.1,0.1);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(54).to({_off:false},0).to({rotation:360,y:361.6},15).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174,-376,96,74);


(lib.spoon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.spoon();
	this.instance.parent = this;
	this.instance.setTransform(-132.5,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.instance_1 = new lib.light_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,38);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.spoon_1, new cjs.Rectangle(-201,-137.5,364,339.5), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bgImg1
	this.instance = new lib.bgImg1_1();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(234).to({_off:false},0).to({alpha:1},10).wait(1));

	// logo
	this.instance_1 = new lib.logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-72);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},15).wait(40).to({regX:-0.7,regY:-0.4,scaleX:0.8,scaleY:0.8,x:-3,y:-210},10,cjs.Ease.quadInOut).wait(61));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-97.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(184).to({_off:false},0).to({alpha:1},10).wait(51));

	// spoon
	this.instance_3 = new lib.spoon_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(312.6,-98.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).to({x:17.5,y:107.5},15).wait(30).to({x:312.6,y:-98.5},10,cjs.Ease.quadIn).to({_off:true},1).wait(70));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-205.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(119).to({_off:false},0).to({alpha:1},15).wait(30).to({alpha:0},10).to({_off:true},1).wait(70));

	// t1_2
	this.instance_5 = new lib.t1_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-57.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},15).wait(30).to({x:-255},10,cjs.Ease.quadIn).to({_off:true},1).wait(189));

	// t1_1
	this.instance_6 = new lib.t1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-162.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},15).wait(30).to({x:255},10,cjs.Ease.quadIn).to({_off:true},1).wait(189));

	// strawberrys
	this.instance_7 = new lib.strawberrys("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({_off:true},70).wait(126));

	// bgImg2
	this.instance_8 = new lib.bgImg2_1();
	this.instance_8.parent = this;
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(174).to({_off:false},0).to({alpha:1},10).wait(61));

	// bgImg1
	this.instance_9 = new lib.bgImg1_1();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(109).to({alpha:0},10,cjs.Ease.quadIn).to({_off:true},65).wait(61));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(245));

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
	id: 'A8C92D9491EB4AEBA95ED22F9C5E268A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/light.png", id:"light"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/spoon.png", id:"spoon"},
		{src:"images/strawberry.png", id:"strawberry"}
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
an.compositions['A8C92D9491EB4AEBA95ED22F9C5E268A'] = {
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