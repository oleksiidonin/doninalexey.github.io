(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box_new = function() {
	this.initialize(img.box_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,368);


(lib.box_old = function() {
	this.initialize(img.box_old);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,368);// helper functions:

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


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EB39").s().p("AiOGFQgbgIgOgdQgOgeALgZQALgaAagMQAVgKAWAEQAXAEAOAVIghAQQgGgHgJgBQgJgBgIAEQgMAGgFANQgFAMAHAPQAIAQANAEQANAFAMgGQAIgEAFgIQAFgIgCgKIAhgQQAIAYgLAVQgMAUgVALQgQAHgQAAQgKAAgKgCgApnFsIgJgaQASgBAGgIQAFgJgCgSIgBgOIhrhZIgDgEIAlgSIBFA/IABAAIgKhcIAigRIACAEIALCWIABAaQgBALgDAKQgDALgGAGQgFAHgKAEQgKAEgMAAIgCAAgAgwDkIAMgDIBGAuIAuhJIALgCIAdB/IgjAIIgOg6IgZAoIgDAAIgogYIAOA6IgjAJgAChEVQgSgEgIgRQgLgVAJgRQAIgQAUgKQAUgJAQACIgEgJQgIgRgeAOQgVAKgJANIgRgXQAPgRAagMQA5gaAVAsIAXAyIADAEQABABAAAAQABAAABAAQAAABABAAQAAAAABAAQACAAAEgCIAJATIgQAKQgJAEgIgDQgIgCgEgKQgBAMgJALQgKAKgMAGQgMAFgMAAIgLgBgACyDTQgJAFgDAHQgDAHAFAIQADAGAGABQAHABAGgDQAKgEAGgJQAGgIgDgJIgDgHIgGAAQgLAAgLAFgAoLDrQAPgEACgHQABgGgEgPIgXhNIBhgqIA1B4IgiAPIgohaIghAPIAPAuQALAggIAOQgIAPghAJgAECBvIAmgJIALAwIAJgDQAUgEAGgPQAFgPgFgWIAigIQANAvgbAYIAyA0IAAADIglAJIgqgtQgEACgHACIgJACIANAzIglAJgAmOBTIAigOIASArIAVgJQgEgYAMgUQANgTAWgJQAagLAaAJQAaAIAMAeQANAfgMAYQgMAZgaALQgXAJgXgFQgYgFgOgXIgUAIIAUAwIgiAPgAkNA+QgMAFgGAMQgEAMAGAQQAGAPANAFQANAFALgFQAMgFAFgMQAFgNgHgPQgGgPgMgFQgGgDgGAAQgGAAgGADgAiLBaQgVgLgLgYQgMgagCgYQgDgWAJgXQAJgWAXgRQAXgPgIgLIAhgKQATAbggAaIgWASIgHAHQgFAFgCAEIgCAKQgCAFABAHQADgJAJgIQAJgIALgEQAcgKAWAPQAWAOAHAaQAHAagMAYQgMAYgfAIQgOAEgMAAQgNAAgMgGgAh1gCQgNADgGAMQgHALAEANQAFAQALAGQAMAGAOgEQANgEAHgMQAGgLgFgPQgEgNgMgGQgHgEgIAAIgKACgAABApQANgHABgHQABgGgHgOIgkhHIBYg6IBJBtIggAUIg1hRIgfAUIAWArQARAdgFAQQgGAPgfAQgACugXQgbgHgPgdQgOgdAKgZQAKgZAZgNQAfgQAYAMQAXAMAJAiIhPApQAOAXAegNIAQgIQAPgKAJgLIAQAXQgRAVgXAMQgUALgTAAQgJAAgJgDgACwh9QgKAFgFAKQgEAJADALIAzgbQgFgLgJgBIgEAAQgIAAgJAEgAD7jHIAjgMIAPAtIAxgQIgOgtIAjgLIAoB9IgjALIgQgxIgxAQIAPAxIgjAMgAGQjnIAhgRIAeA7IAmhfIAKgFIA9B1IggARIggg8IgmBhIgJAEgAIskzIAkgJIAQBBIA7hUIALgCIAfCAIgkAJIgPhDIg9BVIgKADgAJJlXQgOgIgFgTIAWgIQAFAOASgDQASgEgBgQIAXgDQADASgJAOQgIAOgTAEQgHACgHAAQgKAAgJgFg");
	this.shape.setTransform(0,0,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-71,-39.1,141.8,78.3), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EB38").s().p("AFqE3IAZgvIgvgbIgbAvIghgTIBDh3IAhATIgYAqIAwAbIAYgqIAhASIhCB3gADREPIAShFIhhAwIgKgCIAhiEIAlAJIgRBDIBfgwIALADIghCEgABZDaQgJgCgGgHQgGgHADgLQgJALgOADQgPAEgNgDQgUgEgLgNQgMgOACgUQAEgXAQgKQAPgJAZADQAVAEANALIABgJQADgTgggHQgagDgOAFIAAgdQAXgGAdAFQBAAMgKAxIgJA5IABAGIACAEIAIABIgEAWIgEAAIgQgBgAAYCRQgHAGAAAJQAAAHAEAFQAEADAIADQANAAAIgDQAKgCADgLIABgHQgKgKgQgDIgFAAQgGAAgHADgAhmCzQgfgIgWgTIAKgeQAGAGAOAIQAPAIALAEQAaAHACgPQACgFgBgEQgCgEgEgCIgHgDQgDgCgGAAIgVgHIAGgaIAeAHQADABAFgBQAEgDACgFQAEgMgWgHIgWgDIgWABIAGgcQAWgEAeAIQAYAHAOAMQAMAOgEATQgEALgHAEQgHAGgKAAQALAHAFALQAFAKgEANQgFAWgUAEQgIACgJAAQgNAAgPgEgAjCB+IAChGIhUBEIgKAAIAEiIIAmABIgBBEIBShCIAMABIgECHgADiBzQgVgGgHgNQgLgPAFgTIAYAEQgCAPATAGQASAFAHgPIAWAHQgGAUgPAIQgJAFgLAAQgGAAgHgCgAlVBvIADgeIhVgJIgEAdIghgEIAFg8IADAAQADACAGgCIAGgCIAIgNIAXhUIBlALIgMBoIASACIgIA8gAmIAaQgDANgHAEIAwAHIAJhJIghgDgAFoAuIAShDIhhAvIgKgDIAjiDIAlAJIgRBDIBfgvIALAEIgjCDgADSgRIAYhCIhlAnIgKgDIAtiBIAkANIgXBBIBjgoIALAFIgsCBgABAhHQgKAAgLgCIg9gLIAXiHIBKAOQAJADAJAFQAJAGAFAIQAEAKgCALQgEAVgUABQALAGAGALQAEAKgBAMQgCANgHAGQgGAHgKADQgHABgJAAIgEAAgAAYhqIAdAFIAIAAQAEAAADgDQACgCACgGQAAgGgBgCIgDgFIgGgDQgEgCgCAAIgbgEgAAiigIAZAFIAGgBIAGgDIADgGQABgGgDgDQgDgEgEgBIgbgFgAh3hvQgagMgLgaQgNgaAPgfQAMgeAcgJQAcgIAaAMQAbAMAMAbQAMAagOAeQgPAggbAIQgKACgLAAQgQAAgRgHgAhjjSQgMAEgIAQQgHARAEAMQAFAOAMAFQAMAFAOgEQANgFAIgQQAGgPgEgNQgFgPgMgEQgHgDgHAAQgFAAgHACgAF6hsQgUgGgIgNQgJgNAEgUIAYAEQgCAOASAGQASAGAIgQIAWAIQgGAUgPAIQgJAEgKAAQgHAAgIgCgAjZitIANg1Ig0gNIgOA0IglgKIAiiDIAlAJIgMAvIA1AOIAMgvIAkAJIghCEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-46.1,-32.9,92.3,65.9), null);


(lib.rounds_blue_mc_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0481CC").s().p("Ak5LnQiRg9hwhvQhvhwg9iRIAAAAQhAiWAAikQAAijBAiWQA9iRBvhwQBwhvCRg9QCWhACjAAQCkAACWBAIAAAAQCRA9BwBvQBvBwA9CRQBACWAACjQAACkhACWIAAAAQg9CRhvBwQhwBviRA9IAAAAQiWBAikAAQijAAiWhAgAoPoPQhnBng5CGIAAAAQg7CMAACWQAACXA7CMQA5CGBnBnQBnBoCGA4IAAAAQCMA7CWAAQCXAACMg7QCGg4BnhoQBohnA4iGQA7iMAAiXQAAiWg7iMIAAAAQg4iGhohnQhnhniGg5QiMg7iXAAQiWAAiMA7IAAAAQiGA5hnBngAiyGoQhSgjhAhAQhAhAgjhTQgjhUgBheQABhdAjhVQAjhSBAhAQBAhABSgjQBVgjBdgBQBeABBUAjQBTAjBABAQBABAAjBSQAjBVABBdQgBBegjBUQgjBThABAQhABAhTAjQhUAjheABQhdgBhVgjgAgdlPQhCAGg6AeQg7AegrAyQgtAzgUBCQgVBBAGBDQAGBCAeA6QAeA7AyArQAzAsBCAVQBBAVBDgGQBBgGA7geQA7geArgyQAsgzAVhCQAVhBgGhDQgGhCgeg6Qgeg7gygrQgzgshCgVQgzgQg0AAIgdABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#028CD8").s().p("AkiKwIAAAAQiGg4hnhoQhnhng5iGQg7iMAAiXQAAiWA7iMIAAAAQA5iGBnhnQBnhnCGg5IAAAAQCMg7CWAAQCXAACMA7QCGA5BnBnQBoBnA4CGIAAAAQA7CMAACWQAACXg7CMQg4CGhoBnQhnBoiGA4QiMA7iXAAQiWAAiMg7gAnknkQhgBfg0B7IAAAAQg2CAAACKQAACLA2CAQA0B7BgBgQBfBfB7A0IAAAAQCAA2CKAAQCLAACAg2QB7g0BghfQBfhgA0h7QA2iAAAiLQAAiKg2iAIAAAAQg0h7hfhfQhghgh7g0QiAg2iLAAQiKAAiAA2IAAAAQh7A0hfBgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_38
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0481CC").s().p("Am5G6Qi3i4AAkCQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECQAAECi3C4Qi3C3kDAAQkCAAi3i3gAmDmGQiiCjAADiQAADlCiCgQCjCiDhAAQDiAACgiiQCjifAAjjQAAjlijijQigifjiAAQjhAAijCfg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rounds_blue_mc_2, new cjs.Rectangle(-80.7,-80.7,161.4,161.4), null);


(lib.box_old_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_old();
	this.instance.parent = this;
	this.instance.setTransform(-125,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_old_1, new cjs.Rectangle(-125,-184,250,368), null);


(lib.box_new_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_new();
	this.instance.parent = this;
	this.instance.setTransform(-125,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_new_1, new cjs.Rectangle(-125,-184,250,368), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A5E6").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAHQgDgCAAgEIAAgBQAAgEADgCQADgDADgBQAEABADADQADACAAAEIAAABQAAAEgDACQgDADgEABQgDgBgDgDg");
	this.shape.setTransform(17.7,-21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADBHQgDAAgDgDQgDgDAAgEQABgdgCgeQAAgEADgDQADgDADAAQAEgBADADQADADAAADQACAggBAdQAAAFgDACQgDADgEAAIAAAAgAgKg0QgDgDAAgEIAAgBQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAABQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_1.setTransform(18,-15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKCCQgEgBgCgEQgCgEABgEIADgOIAAAAQAFgVADgVQABgEADgDQACgCAEAAQAFABACADQADAEgBAEQgDAWgFAVIgEAPQgBAFgCACIgFABIgDAAgAAIAMQgEAAgDgDQgCgDAAgEQABgcgCgeQAAgEACgEQACgDAEAAQAFAAADACQADADAAAEQACAggBAdQAAAEgDADQgDACgEAAIAAAAgAgFhvQgDgDAAgEIAAgBQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAABQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(17.5,-9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglC4QgEgCgBgEQgBgEADgEQAPgYAMgbQACgEAEgBQAEgCADACQADABACAEQABAEgBAEQgMAdgRAZQgCAEgEABIgCAAQgDAAgCgCgAAOBKQgFgBgCgEQgCgDABgEIAEgPIAAAAQAFgVADgVQAAgEAEgBQADgDAEABQAEAAADADQACADAAAEQgEAWgFAVIgDAQQgBAEgEACIgFABIgCAAgAAggqQgEAAgDgDQgDgDABgEQABgdgCgfQgBgEADgDQADgDAEgBQAEAAADADQADACABAFQACAfgBAeQgBAEgDADQgDADgDAAIgBAAgAATinQgDgDAAgEIAAgBQAAgEADgDQACgDAFAAQAEAAADADQADADAAAEIAAABQAAAEgDADQgDADgEAAQgFAAgCgDg");
	this.shape_3.setTransform(15.1,-4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhMDjQgEgBgCgEQgDgDABgEQABgEAEgCQAXgPAWgVQACgDAFAAQAEAAADADQADADAAAEQAAAEgDADQgXAXgaAQQgCABgDAAIgCAAgAAECOQgEgCAAgEQAAgEABgDQAPgYAMgcQACgEAEgBQAEgCAEACQADACACADQABAEgBAEQgNAegRAZQgCADgEABIgCAAQgDAAgCgCgAA4AgQgEgBgDgDQgCgEABgEIAEgOIAAgBQAFgTADgVQAAgEAEgDQADgCAEAAQAEABADADQACAEAAAEQgDAVgGAVIgDAPQgBAEgEACIgFACIgCgBgABKhUQgEAAgDgDQgDgDABgEQABgdgCgfQgBgEADgDQADgDAEAAQAEgBADADQADADABAEQACAfgBAeQgBAFgDACQgDADgDAAIgBAAgAA9jQQgDgDAAgEIAAgBQAAgEADgDQACgDAFAAQAEAAADADQADADAAAEIAAABQAAAEgDADQgDADgEAAQgFAAgCgDg");
	this.shape_4.setTransform(10.9,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiID0QgDgCgBgEQAAgEACgEQADgDAEAAQAdgEAbgJQAEgBADACQAEACACADQABAEgCAEQgCAEgEABQgcAKggAEIgBAAQgDAAgDgDgAgUDPQgEAAgCgEQgDgEABgEQABgEAEgCQAXgPAVgVQACgDAFAAQAEAAADADQADADAAAEQAAAEgDADQgXAXgZAQQgCACgDAAIgCgBgAA8B7QgEgCgBgEQAAgEACgEQAPgYAMgbQACgEAEgCQAEgBAEABQADACACAEQABAEgBAEQgNAdgRAZQgCAEgEAAIgCABQgDAAgCgCgABwANQgEgBgDgEQgCgDABgEIAEgOIAAAAQAFgVADgVQAAgEAEgCQADgDAEABQAEAAADAEQACADAAAEQgDAWgGAVIgDAPQgBAEgEACIgFABIgCAAgACChnQgEAAgDgEQgCgCAAgFQABgdgCgeQgBgEADgDQADgDAEgBQAEAAADADQADACABAEQACAggBAeQgBAEgDADQgCADgEAAIgBAAgAB1jkQgDgDAAgEIAAgBQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAABQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_5.setTransform(5.3,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiDD3QgdgCgfgHQgEAAgDgEQgCgDABgEQABgEADgDQAEgCAEABQAeAGAcACQAEABACADQADADAAAEQAAAEgEADQgDACgDAAIgBAAgAhND0QgDgDgBgEQAAgEADgDQACgDAEgBQAegDAagJQAEgCAEACQADACACAEQABAEgCADQgBAEgEACQgdAKgfADIgBAAQgEAAgDgCgAAmDPQgEgBgCgEQgCgDABgEQABgEADgCQAYgPAVgVQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgXAXgZAQQgDABgDAAIgCAAgAB3B6QgEgCAAgEQgBgEACgDQAQgYAMgcQABgEAEgBQAEgCAEACQAEACABADQACAEgCAEQgNAegQAZQgDADgEABIgCAAQgDAAgCgCgACrAMQgEgBgCgDQgCgEABgEIADgNIAAgBQAFgUADgVQAAgEAEgDQADgCAEAAQAEABADADQACAEAAAEQgDAVgFAWIgEAOQgBAEgEACIgFACIgCgBgAC+hoQgFAAgCgDQgDgDAAgEQABgdgCgfQAAgEACgDQADgDAEAAQAEgBADADQAEADAAAEQACAggBAdQAAAFgDACQgDADgEAAIAAAAgACwjkQgDgDAAgEIAAgBQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAABQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_6.setTransform(-0.6,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhLD3QgdgCgfgHQgEAAgCgEQgDgDABgEQABgEAEgDQADgCAEABQAeAGAcACQAEABADADQACADAAAEQAAAEgDADQgDACgEAAIgBAAgAgVD0QgDgDAAgEQgBgEADgDQACgDAEgBQAdgDAagJQAEgCAEACQAEACABAEQABAEgBADQgCAEgEACQgdAKgeADIgBAAQgEAAgDgCgAjBDfQgbgJgdgMQgEgCgCgEQgBgDABgEQACgEAEgCQAEgBAEABQAcAMAaAJQAEABACAEQACADgBAEQgCAEgDACIgFABIgDAAgABeDPQgEgBgCgEQgCgDABgEQABgEADgCQAYgPAVgVQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgXAXgZAQQgDABgCAAIgDAAgACvB6QgDgCgBgEQgBgEACgDQAQgYAMgcQACgEADgBQAEgCAEACQAEACABADQACAEgCAEQgNAegQAZQgCADgEABIgCAAQgDAAgDgCgADjAMQgEgBgCgDQgCgEABgEIADgNIAAgBQAFgUADgVQABgEADgDQADgCAEAAQAFABACADQADAEgBAEQgDAVgFAWIgEAOQgBAEgDACIgFACIgDgBgAD2hoQgEAAgDgDQgDgDAAgEQABgdgCgfQAAgEADgDQACgDAEAAQAEgBAEADQADADAAAEQACAggBAdQAAAFgDACQgDADgEAAIAAAAgADojkQgDgDAAgEIAAgBQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAABQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_7.setTransform(-6.3,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(12));

	// Слой_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhHghICPANIgRA2g");
	this.shape_8.setTransform(-35.3,19.3,1,1,0,0,0,-0.3,-2.1);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(9).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.1,-37.2,2.6,4.3);


(lib.arrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4EpIB6pRIB3JRg");
	this.shape.setTransform(22.9,18,0.24,0.24,93,0,0,1.1,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("AkHjCQgeD5EaBaQCMAtCTgF");
	this.shape_1.setTransform(-3.7,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow1, new cjs.Rectangle(-31.4,-21.2,61.8,41.5), null);


(lib.rounds_blue_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.rounds_blue_mc_2();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-0.1,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,scaleX:6.6,scaleY:6.6,x:1.5,y:0},30).wait(1));

	// Слой_1
	this.instance_1 = new lib.rounds_blue_mc_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.5,0,3.305,3.305);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.4,scaleX:6.6,scaleY:6.6},15).wait(1).to({regX:0,scaleX:0.01,scaleY:0.01,x:1.3,y:-0.1},0).to({scaleX:3.09,scaleY:3.09,x:1.4,y:0},14).wait(1));

	// Слой_4
	this.instance_2 = new lib.rounds_blue_mc_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.3,-0.1,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.4,scaleX:6.6,scaleY:6.6,x:1.5,y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-266.7,533.4,533.4);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgjJAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_29 = new cjs.Graphics().p("EgjJAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_30 = new cjs.Graphics().p("EghlAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_31 = new cjs.Graphics().p("EggBAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_32 = new cjs.Graphics().p("EgedAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_33 = new cjs.Graphics().p("Egc5Au4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_34 = new cjs.Graphics().p("EgbVAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_35 = new cjs.Graphics().p("EgZxAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_36 = new cjs.Graphics().p("EgYNAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_37 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_38 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_39 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_40 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_41 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_42 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_43 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_44 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_190 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_191 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_192 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_193 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_194 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_195 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_196 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_197 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_198 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_199 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_200 = new cjs.Graphics().p("EgYUAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_201 = new cjs.Graphics().p("EgatAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_202 = new cjs.Graphics().p("EgdUAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_203 = new cjs.Graphics().p("EggIAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_204 = new cjs.Graphics().p("EgjJAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-225,y:0}).wait(29).to({graphics:mask_graphics_29,x:-225,y:0}).wait(1).to({graphics:mask_graphics_30,x:-215,y:0}).wait(1).to({graphics:mask_graphics_31,x:-205,y:0}).wait(1).to({graphics:mask_graphics_32,x:-195,y:0}).wait(1).to({graphics:mask_graphics_33,x:-185,y:0}).wait(1).to({graphics:mask_graphics_34,x:-175,y:0}).wait(1).to({graphics:mask_graphics_35,x:-165,y:0}).wait(1).to({graphics:mask_graphics_36,x:-155,y:0}).wait(1).to({graphics:mask_graphics_37,x:-140,y:0}).wait(1).to({graphics:mask_graphics_38,x:-120,y:0}).wait(1).to({graphics:mask_graphics_39,x:-100,y:0}).wait(1).to({graphics:mask_graphics_40,x:-80,y:0}).wait(1).to({graphics:mask_graphics_41,x:-60,y:0}).wait(1).to({graphics:mask_graphics_42,x:-40,y:0}).wait(1).to({graphics:mask_graphics_43,x:-20,y:0}).wait(1).to({graphics:mask_graphics_44,x:0,y:0}).wait(146).to({graphics:mask_graphics_190,x:-1.3,y:0}).wait(1).to({graphics:mask_graphics_191,x:-5.3,y:0}).wait(1).to({graphics:mask_graphics_192,x:-12,y:0}).wait(1).to({graphics:mask_graphics_193,x:-21.3,y:0}).wait(1).to({graphics:mask_graphics_194,x:-33.3,y:0}).wait(1).to({graphics:mask_graphics_195,x:-48,y:0}).wait(1).to({graphics:mask_graphics_196,x:-65.3,y:0}).wait(1).to({graphics:mask_graphics_197,x:-85.3,y:0}).wait(1).to({graphics:mask_graphics_198,x:-108,y:0}).wait(1).to({graphics:mask_graphics_199,x:-133.3,y:0}).wait(1).to({graphics:mask_graphics_200,x:-155.7,y:0}).wait(1).to({graphics:mask_graphics_201,x:-171,y:0}).wait(1).to({graphics:mask_graphics_202,x:-187.7,y:0}).wait(1).to({graphics:mask_graphics_203,x:-205.7,y:0}).wait(1).to({graphics:mask_graphics_204,x:-225,y:0}).wait(1));

	// t2
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(38.4,239.4,0.028,0.028,60,0,0,1.8,-3.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({regX:0,regY:0,scaleX:1.4,scaleY:1.4,rotation:15,x:38.3},10,cjs.Ease.get(1)).wait(126));

	// arrow2
	this.instance_1 = new lib.arrow2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-83.2,234,1,1,96,0,0,0.5,-0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).wait(131));

	// t1
	this.instance_2 = new lib.t1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51,-246.3,0.02,0.02,-52.7,0,0,-1.5,-2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:1.5,scaleY:1.5,rotation:-14.8,x:50.9,y:-246.2},10,cjs.Ease.get(1)).wait(151));

	// arrow1
	this.instance_3 = new lib.arrow1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-16.7,-256.3,0.02,0.02,75,0,0,-33.6,-19.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({regX:-30.4,regY:-20.3,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(146));

	// box_new
	this.instance_4 = new lib.box_new_1();
	this.instance_4.parent = this;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(205));

	// rounds
	this.instance_5 = new lib.rounds_blue_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.3,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).wait(176));

	// box_old
	this.instance_6 = new lib.box_old_1();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(205));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(205));

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
p.nominalBounds = new cjs.Rectangle(-150,299,601,602);
// library properties:
lib.properties = {
	id: '540D0CA1887D4E44991EDDBD232BF08A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box_new.png", id:"box_new"},
		{src:"images/box_old.png", id:"box_old"}
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