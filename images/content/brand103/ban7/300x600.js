(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,378);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,382);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,382);


(lib.ic1 = function() {
	this.initialize(img.ic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.ic2 = function() {
	this.initialize(img.ic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,32);


(lib.ic3 = function() {
	this.initialize(img.ic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,38);// helper functions:

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
	this.shape.graphics.f("#F01F24").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-127.4,-36.3,254.9,72.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F01F24").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-130,-57.8,260,115.7), null);


(lib.rounds_mc_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDE02").s().p("AkiKwIAAAAQiGg4hnhoQhnhng5iGQg7iMAAiXQAAiWA7iMIAAAAQA5iGBnhnQBnhnCGg5IAAAAQCMg7CWAAQCXAACMA7QCGA5BnBnQBoBnA4CGIAAAAQA7CMAACWQAACXg7CMQg4CGhoBnQhnBoiGA4QiMA7iXAAQiWAAiMg7gAnknkQhgBfg0B7IAAAAQg2CAAACKQAACLA2CAQA0B7BgBgQBfBfB7A0IAAAAQCAA2CKAAQCLAACAg2QB7g0BghfQBfhgA0h7QA2iAAAiLQAAiKg2iAIAAAAQg0h7hfhfQhghgh7g0QiAg2iLAAQiKAAiAA2IAAAAQh7A0hfBgg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD107").s().p("Ak5LnQiRg9hwhvQhvhwg9iRIAAAAQhAiWAAikQAAijBAiWQA9iRBvhwQBwhvCRg9QCWhACjAAQCkAACWBAIAAAAQCRA9BwBvQBvBwA9CRQBACWAACjQAACkhACWIAAAAQg9CRhvBwQhwBviRA9IAAAAQiWBAikAAQijAAiWhAgAoPoPQhnBng5CGIAAAAQg7CMAACWQAACXA7CMQA5CGBnBnQBnBoCGA4IAAAAQCMA7CWAAQCXAACMg7QCGg4BnhoQBohnA4iGQA7iMAAiXQAAiWg7iMIAAAAQg4iGhohnQhnhniGg5QiMg7iXAAQiWAAiMA7IAAAAQiGA5hnBngAiyGoQhSgjhAhAQhAhAgjhTQgjhUgBheQABhdAjhVQAjhSBAhAQBAhABSgjQBVgjBdgBQBeABBUAjQBTAjBABAQBABAAjBSQAjBVABBdQgBBegjBUQgjBThABAQhABAhTAjQhUAjheABQhdgBhVgjgAgdlPQhCAGg6AeQg7AegrAyQgtAzgUBCQgVBBAGBDQAGBCAeA6QAeA7AyArQAzAsBCAVQBBAVBDgGQBBgGA7geQA7geArgyQAsgzAVhCQAVhBgGhDQgGhCgeg6Qgeg7gygrQgzgshCgVQgzgQg0AAIgdABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_38
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBD107").s().p("Am5G6Qi3i4AAkCQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECQAAECi3C4Qi3C3kDAAQkCAAi3i3gAmDmGQiiCjAADiQAADlCiCgQCjCiDhAAQDiAACgiiQCjifAAjjQAAjlijijQigifjiAAQjhAAijCfg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rounds_mc_2, new cjs.Rectangle(-80.7,-80.7,161.4,161.4), null);


(lib.ic3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ic3();
	this.instance.parent = this;
	this.instance.setTransform(-15,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic3_1, new cjs.Rectangle(-15,-19,30,38), null);


(lib.ic2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ic2();
	this.instance.parent = this;
	this.instance.setTransform(-19,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic2_1, new cjs.Rectangle(-19,-16,38,32), null);


(lib.ic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ic1();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic1_1, new cjs.Rectangle(-22,-22,44,44), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuhCLIAGgpIAIACIAIABQALgBAFgFQAFgEAEgLIAFgMIg/iSIA3AAIAhBfIABAAIAehfIA0AAIhDCrQgFANgFAIQgGAJgHAHQgGAFgMAEQgKADgPAAgABmBFQgPgEgMgMQgLgJgHgPQgGgPgBgSQABgTAGgOQAHgPALgJQALgKAQgGQAOgFARgBQATABAOAFQAOAFAMALQALAJAHAPQAHAQAAARQAAAQgHARQgHAPgLAJQgNAMgNAEQgPAHgSAAQgQAAgPgHgAB2gnQgGADgFAGQgEAFgCAHQgDAJAAAFQAAAGADAIQACAGAEAGQAEAGAIADQAFADAJAAQAJAAAHgDQAGgDAFgGQAFgHACgFQACgGAAgIQAAgFgDgJQgBgHgGgFQgFgGgGgDQgIgDgHAAQgHAAgIADgAJ+BIQgKgEgIgEQgHgFgFgKQgFgIgBgNQABgRAIgJQAIgJAPgGQAPgFAQgCQAQgCARAAIAAgCQABgMgJgEQgHgGgMAAQgKAAgKAFQgKAEgGAGIgagbQANgMATgGQARgHATAAQASABANAEQANAFAJAJQAHAJAEAQQAEAQAAATIAABKIgtAAIAAgPIgBAAQgFAIgMAGQgMAFgNAAQgKAAgJgCgAKmAGIgQADQgGACgEAEQgEAEAAAHQAAAEACADIAEAFIAIACIAHABQAPAAAIgIQAIgIAAgOIAAgGIgGAAIgQABgAQ8BGIAAg4IgzAAIAAA4IgxAAIAAiUIAxAAIAAA4IAzAAIAAg4IAwAAIAACUgAOABGIAAhVIhBBVIgyAAIAAiUIAyAAIAABVIBBhVIAyAAIAACUgAIZBGIgfhaIgiBaIg2AAIA6iUIA7AAIA3CUgAFbBGIAAg4IgyAAIAAA4IgxAAIAAiUIAxAAIAAA4IAyAAIAAg4IAxAAIAACUgAhoBGIAAhVIhBBVIgyAAIAAiUIAyAAIAABVIBBhVIAxAAIAACUgAlPBGIAAhuIgpAAIAAgmICEAAIAAAmIgpAAIAABugAnDBGIAAhVIhCBVIgwAAIAAiUIAwAAIAABVIBChVIAyAAIAACUgAqNBGIAAhuIgwAAIAABuIgxAAIAAiUICSAAIAACUgAvkBGQgFgWgHgTQgHgTgJgKQgKgKgOgGQgOgFgTAAIAABbIgyAAIAAjTIAyAAIAABNIAJAAIAIABIBBhOIA4AAIhHBaQAOAHAKAKQANAMAIANQAJANAIAVQAHAWAEAXgANEhrQgNgLgFgSIAhgFQACAHAFAEQAEADAHAAQAHAAAEgDQAFgEACgHIAhAFQgHAUgMAKQgNAJgTAAQgUAAgNgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F01F24").s().p("AyUEXQhSAAg7g7Qg6g6AAhTIAAidQAAhTA6g6QA7g7BSAAMAkoAAAQBTAAA7A7QA6A6AABTIAACdQAABTg6A6Qg7A7hTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-137.2,-27.8,274.5,55.8), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-129,-191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-129,-191,258,382), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-129,-191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-129,-191,258,382), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-128,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-128,-189,256,378), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEC17").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.ic3_1();
	this.instance.parent = this;
	this.instance.setTransform(132.2,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F01F24").s().p("AkmCyIAAkJIA4AAIAAAWIABAAQAIgLAPgIQAPgIATAAQAUAAAPAHQARAIAKANQALANAGARQAGARAAASQAAATgGARQgFAQgLAOQgLAOgQAHQgQAIgUAAQgSAAgNgGQgQgHgIgMIAAAAIAABrgAjUgoQgIAEgGAHQgFAGgDAIQgDAJAAAHQAAAJADAIQADAIAFAHQAGAHAIADQAHAEALAAQALAAAHgEQAIgEAFgGQAFgGADgJQADgHAAgKQAAgJgDgHQgDgIgFgHQgFgGgIgEQgHgEgLAAQgLAAgHAEgAgGBbQgTgHgNgMQgNgLgIgSQgIgSAAgXQAAgVAIgRQAHgRANgOQANgMASgHQAQgHAVAAQAUAAAQAHQARAHAMAMQAMANAGASQAHASAAAWIAAAOIiBAAQABAHADAGQADAGAGAFQAEAEAJADQAJADAHAAQANAAAKgGQAKgFAGgIIApAaQgMASgVAKQgUAKgcAAQgUAAgRgGgABBgSQAAgOgJgKQgJgKgSAAQgIAAgHADQgGACgHAFQgEAEgEAHQgDAIAAAFIBLAAIAAAAgApUBbQgSgHgOgMQgPgOgHgQQgIgTAAgVQAAgUAIgTQAHgRAPgNQAOgNASgGQARgHAWAAQALAAAIACQAKACAJADQAJADAHAEIANAKIgjAoQgFgGgIgFQgJgDgJAAQgKAAgHADQgHAEgGAGQgGAIgCAHQgDAIAAAJQAAAIACAJQADAIAGAHQAFAGAIAEQAHADALAAQAJAAAJgDQAIgDAGgHIAhAoQgLAKgSAHQgSAGgUAAQgVAAgSgGgAs4BaQgSgGgOgNQgNgMgIgSQgIgTAAgVQAAgUAIgTQAIgRANgNQAPgNARgFQASgHAUAAQAVAAASAHQAQAFAQANQANANAIARQAIATAAAUQAAAVgIATQgIASgNAMQgPANgRAGQgSAHgVAAQgUAAgSgHgAskgoQgIAEgFAGQgFAHgDAIQgDAJAAAHQAAAIADAJQADAJAFAGQAGAHAHADQAJAEAKAAQAJAAAJgEQAIgEAFgGQAGgIACgHQADgIAAgJQAAgIgDgIQgDgJgFgGQgGgGgHgEQgIgEgLAAQgLAAgHAEgAPKBcQgGgCgFgFQgEgDgEgIQgDgGAAgHQAAgGADgHQACgEAGgHQAEgFAHgDQAHgCAHAAQAHAAAGACQAHAEAEAEQAGAEACAHQADAGAAAHQAAAOgKAKQgKAKgPAAQgHAAgHgDgAMfBbIAAiyIA7AAIAACygAK9BbQgEgTgGgMQgFgNgHgHQgGgIgKgEQgKgEgJgCIAABFIg7AAIAAiyIA7AAIAABBIAPACIAphDIBBAAIg4BXQAWAOAOAXQANAYAIAegAF8BbIAAiyIA7AAIAAA2IAoAAQAUAAAOAFQAQAFAHAIQAIAIAFALQAEAMAAAMQAAAMgFANQgFALgJAJQgJAJgNAEQgNAFgSAAgAG3AyIAdAAQAMAAAIgFQAIgEAAgMQAAgNgIgEQgIgEgNAAIgcAAgAETBbIAAhDIg8AAIAABDIg7AAIAAiyIA7AAIAABCIA8AAIAAhCIA7AAIAACygAmyBbIAAiEIgxAAIAAguICeAAIAAAuIgyAAIAACEgAwvBbIAAj+IChAAIAAA2IhjAAIAADIgAO7AKIAAgNQAAgKACgHQACgGAEgHQADgGAFgGIANgMIAWgWQAEgHAAgIQAAgLgHgHQgHgHgMAAQgPAAgIALQgHAJgBAOIg5gGQACgTAIgQQAHgOANgKQALgJARgGQAPgEARAAQASAAAOAEQAPADAMAKQANAJAGANQAIAOAAATQAAALgDAJQgDAKgFAHQgGAHgHAHIgbAWIgGAIIgDAIIgBASgAMkh5QgKgKAAgNQAAgGADgHQADgGAEgEQAFgFAGgCQAHgDAGAAQAHAAAGADQAHADAEAEQAFAFACAFQADAGAAAHQAAAHgDAGQgCAFgFAFQgEAEgHADQgGACgHAAQgNAAgLgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-107.2,-28.8,254.4,46.7), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.ic2_1();
	this.instance.parent = this;
	this.instance.setTransform(117.5,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F01F24").s().p("AEyCDQgSgGgOgNQgPgNgGgRQgIgTAAgVQAAgVAIgTQAGgPAPgOQAOgMASgHQASgGAVAAQALAAAJACQAKABAIADQAJADAHAFQAHAEAFAGIgiAmQgEgGgJgEQgIgDgKAAQgJAAgIADQgGADgGAHQgGAGgDAIQgDAJAAAJQAAAJADAJQADAIAFAGQAFAGAIAEQAIAEAKAAQAJAAAJgEQAIgDAGgHIAgAoQgKALgSAGQgSAGgTAAQgWAAgSgGgAMMCFQgFgCgGgFQgGgGgCgFQgCgGAAgHQgBgGADgIQADgFAFgGQAFgFAGgCQAHgDAHAAQAGAAAHADQAFACAGAFQAFAFADAGQADAHAAAGQAAAOgLAKQgJAKgPAAQgHAAgHgCgAJgCEIAAizIA8AAIAACzgAHVCEIAAiFIgyAAIAAguICfAAIAAAuIgzAAIAACFgACeCEIAAg2IgLAAQgHAAgIACQgGAAgFAGQgFAGgEALQgFAMgCARIhBAAQADgSAGgPQAIgPAHgIQAGgIAJgGQAHgEAIgDIAAgBQgIAAgJgEQgHgDgGgGQgGgHgDgJQgDgLgBgNQAAgOAHgKQAIgKAKgFQALgFAMgCIAYgCIBfAAIAACzgAB7ACQgGABgEACQgDACAAADQgCADAAAFQAAAJAGACQAHADASAAIATAAIAAgegAgaCEIgmhtIgoBtIhAAAIBFizIBGAAIBCCzgAj+CEIAAhoIhPBoIg7AAIAAizIA7AAIAABmIBPhmIA7AAIAACzgApZCEIAAizIBjAAQAiAAASAOQATANAAAVQAAALgEAFQgDAHgFAFQgEADgJAEIgPAFQALABAHACQAKADAHAFQAGAFAEAIQAEAJAAAKQAAAVgVAOQgTANgkAAgAofBbIAlAAQAHAAAGgBQAFgCAEgDQADgDAAgGQAAgGgDgEQgEgEgFgBQgHgCgGAAIglgBgAofAYIAjAAIAKgDQAEgBACgDQACgDAAgFQABgJgKgDQgJgDgLAAIgYAAgAq5CEIg4haIg2BaIhJAAIBZiGIhSh4IBKAAIAwBPIAuhPIBIAAIhRB4IBcCGgAL9AyIAAgNQAAgHACgKQABgGAEgIQAFgGAEgEIANgMIALgLIALgMQAFgGAAgIQgBgLgGgHQgJgHgLAAQgPAAgIAKQgHAKgBANIg5gGQADgUAGgOQAKgQAKgJQAMgJAQgFQARgFARAAQARAAAOAEQAOAEANAJQAMAJAIAOQAGAOAAASQAAAMgDAJQgCAJgGAHQgFAJgHAGIgaAVIgHAHQgCAEAAAEIgBAKIAAAJgAJmhRQgJgJAAgOQAAgHACgFQADgGAEgEQAFgFAGgCQAGgDAHAAQAGAAAIACQAGAEAEADQAFAFADAFQACAHAAAGQAAAHgCAGQgEAGgEAEQgEAEgGADQgIADgGAAQgNAAgLgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-88.1,-18.2,224.6,32), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.ic1_1();
	this.instance.parent = this;
	this.instance.setTransform(117.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F01F24").s().p("Ai2CDQgSgGgOgNQgOgNgHgRQgIgSAAgWQAAgWAIgSQAHgPAOgOQAOgMASgHQASgGAVAAQALAAAJACQAJABAJADQAJADAHAFIANAKIgiAmQgFgGgJgEQgIgDgJAAQgKAAgHADQgIAEgFAGQgGAIgDAGQgDAJAAAJQAAAKADAIQACAIAGAGQAFAGAJAEQAHAEAKAAQAKAAAIgEQAJgDAFgHIAhAoQgLALgSAGQgSAGgTAAQgWAAgSgGgAmWCFQgMgDgJgGQgKgGgGgLQgGgLAAgQQAAgTALgMQAKgMARgHQAPgGAWgCQAYgDAQAAIAAgCQAAgOgJgFQgJgGgOAAQgOAAgKAFQgMAFgIAHIgegfQAPgPAWgIQAVgHAWAAQAWAAAQAFQAQAGAJAMQAKALAFASQAEARAAAYIAABbIg2AAIAAgTIgBAAQgHALgOAGQgNAGgRAAQgKAAgMgDgAlnA3IgSADQgIADgFAEQgFAGAAAHQAAAFADAEQACAEAEACIAIADIAJAAQASAAAKgJQAJgLAAgQIAAgGIgHAAIgUABgAMjCFQgGgDgFgEQgFgGgCgFQgDgGAAgHQAAgGACgIQADgFAFgGQAGgFAFgCQAIgDAGAAQAHAAAGADQAGACAGAFQAEAFADAGQADAHAAAGQAAAOgKAKQgKAKgPAAQgGAAgIgCgAJ4CEIAAizIA7AAIAACzgAIOCEIAAhEIg8AAIAABEIg7AAIAAizIA7AAIAABCIA8AAIAAhCIA7AAIAACzgAEuCEIAAgsIgoAAQgVAAgSgGQgQgGgJgMQgJgKgEgRQgEgRAAgTIAAgwIA7AAIABAyQABALADAIQADAHAGAEQAGADAKAAIAgAAIAAhTIA7AAIAACzgABUCEIAAhoIhPBoIg6AAIAAizIA6AAIAABmIBPhmIA7AAIAACzgAoQCEIgmhtIgoBtIhAAAIBGizIBGAAIBCCzgArmCEQgFgdgJgWQgIgVgMgNQgLgNgRgHQgRgGgWAAIAABvIg9AAIAAj+IA9AAIAABcIAKABIAKAAIBOhdIBDAAIhWBrQAQAIAOAMQAPANAKARQAMASAIAYQAIAXAGAggAMUAyIAAgNQAAgHACgKQACgGAEgIIAIgKIAZgXIAKgMQAFgGAAgIQAAgLgHgHQgIgHgMAAQgPAAgHAKQgIAKgBANIg5gGQADgUAHgOQAJgQALgJQAMgJAQgFQAQgFARAAQARAAAOAEQAPAEAMAJQAMAJAIAOQAHAOAAASQAAAMgDAJQgDAJgFAHQgFAHgIAIIgaAVIgGAHQgDAEAAAEIgBAKIAAAJgAJ9hRQgJgJAAgOQAAgHACgFQADgGAEgEQAFgFAGgCQAGgDAHAAQAGAAAIACQAHAEADADQAFAFADAFQACAHAAAGQAAAHgCAGQgDAGgFAEQgDAEgHADQgIADgGAAQgNAAgLgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-90.5,-22,230.2,44), null);


(lib.rounds_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.rounds_mc_2();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-0.1,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,scaleX:6.6,scaleY:6.6,x:1.5,y:0},30).wait(1));

	// Слой_1
	this.instance_1 = new lib.rounds_mc_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.5,0,3.305,3.305);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.4,scaleX:6.6,scaleY:6.6},15).wait(1).to({regX:0,scaleX:0.01,scaleY:0.01,x:1.3,y:-0.1},0).to({scaleX:3.09,scaleY:3.09,x:1.4,y:0},14).wait(1));

	// Слой_4
	this.instance_2 = new lib.rounds_mc_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.3,-0.1,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.4,scaleX:6.6,scaleY:6.6,x:1.5,y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-266.7,533.4,533.4);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-514.4,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,194.6,0.02,0.02);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(12).to({scaleX:0.98,scaleY:0.98},2).to({scaleX:1,scaleY:1},2).wait(3).to({scaleX:0.98,scaleY:0.98},2).to({scaleX:1,scaleY:1},2).wait(16).to({regY:2.5,scaleX:0.02,scaleY:0.02},10,cjs.Ease.get(-1)).wait(1));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-190.4,0.02,0.02);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(59).to({scaleX:0.02,scaleY:0.02},10,cjs.Ease.get(-1)).wait(1));

	// box
	this.instance_3 = new lib.box3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,-1.4,1,1,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115).to({_off:false},0).to({alpha:1},10).wait(25).to({x:-279.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(79));

	// box
	this.instance_4 = new lib.box2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,-1.4,1,1,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({_off:false},0).to({alpha:1},10).to({_off:true},35).wait(115));

	// box
	this.instance_5 = new lib.box1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,70.5,0.02,0.02,0,0,0,0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0.1,regY:0,scaleX:0.43,scaleY:0.43},10,cjs.Ease.get(1)).wait(35).to({regY:0.1,scaleX:1,scaleY:1,y:-1.4},10,cjs.Ease.quadInOut).to({_off:true},35).wait(70).to({_off:false,regX:0,regY:2.5,scaleX:0.02,scaleY:0.02,y:-2.5},0).to({regX:0.1,regY:0,scaleX:0.43,scaleY:0.43},10,cjs.Ease.get(1)).wait(59).to({regX:0,regY:2.5,scaleX:0.02,scaleY:0.02},10,cjs.Ease.get(-1)).wait(1));

	// box
	this.instance_6 = new lib.box3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-248.1,71.5,0.424,0.424,-50,0,0,-0.1,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({regX:0,regY:0,rotation:-10,x:-82.1},10,cjs.Ease.get(1)).wait(25).to({regX:-0.1,regY:-0.1,rotation:-50,x:-248.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(114).to({_off:false,y:-1.5},0).to({regX:0,regY:0,rotation:-10,x:-82.1},10,cjs.Ease.get(1)).wait(49).to({regX:-0.1,regY:-0.1,rotation:-50,x:-248.1},10,cjs.Ease.get(-1)).wait(1));

	// box
	this.instance_7 = new lib.box2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(250.1,71.6,0.424,0.424,50,0,0,0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regX:0,rotation:10,x:82.1},10,cjs.Ease.get(1)).wait(25).to({regX:0.1,rotation:50,x:250.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(114).to({_off:false,y:-1.4},0).to({regX:0,rotation:10,x:82.1},10,cjs.Ease.get(1)).wait(49).to({regX:0.1,rotation:50,x:250.1},10,cjs.Ease.get(-1)).wait(1));

	// t2_3
	this.instance_8 = new lib.t2_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-16,164.1,0.8,0.8,0,0,0,-0.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(125).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:-20,y:234.2},5,cjs.Ease.get(-1)).wait(20).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(79));

	// t2_2
	this.instance_9 = new lib.t2_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-19.3,161.5,0.8,0.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90).to({_off:false},0).to({scaleX:1,scaleY:1,x:-24.1,y:230.9},5,cjs.Ease.get(-1)).wait(20).to({alpha:0},10).to({_off:true},1).wait(114));

	// t2_1
	this.instance_10 = new lib.t2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-19.6,159.7,0.8,0.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).to({scaleX:1,scaleY:1,x:-24.6,y:228.7},5,cjs.Ease.get(-1)).wait(20).to({alpha:0},10).to({_off:true},1).wait(149));

	// t1
	this.instance_11 = new lib.t1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-128.2,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,y:-128.1},10,cjs.Ease.get(1)).wait(35).to({scaleX:0.02,scaleY:0.02,y:-128.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(184));

	// rounds
	this.instance_12 = new lib.rounds_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(240));

	// bg
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-651.7,-300,919.5,600);


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
p.nominalBounds = new cjs.Rectangle(-351.7,299,919.5,602);
// library properties:
lib.properties = {
	id: '540D0CA1887D4E44991EDDBD232BF08A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/ic1.png", id:"ic1"},
		{src:"images/ic2.png", id:"ic2"},
		{src:"images/ic3.png", id:"ic3"}
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
an.compositions['540D0CA1887D4E44991EDDBD232BF08A'] = {
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