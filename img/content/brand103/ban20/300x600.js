(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ball_pattern = function() {
	this.initialize(img.ball_pattern);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,140);


(lib.ball_shadow = function() {
	this.initialize(img.ball_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,89);


(lib.ball_shadow_bottom = function() {
	this.initialize(img.ball_shadow_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,186);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,408);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,142);// helper functions:

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


(lib.vector_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPJgQgygeAAg5QAAhNCBhNQBog/C6g8IAgiJQgfAxguAcQgwAcg3AAQg+AAgkgfQghgcgIg1QggA3gqAcQgtAdg6AAQg4AAgigeQgigdgJg4QgiA4grAcQgxAfhFAAQhIAAgpgtQgugyABhdQABizBYiPQBeibCJAAQAyAAAhAYQAgAXALArIAJgnQAFgRANgJQALgIAQAAICBAAIgxDPIg3DpQgRBTA9AAQAaAAAagYQAZgXAMgiIBhmYQAJgiAkAAICQAAIhlGrQgKAzANAXQAMAWAjAAQAqAAAigoQAhgoAQhCIBSlXQAIgiAkAAICSAAIilK3QgtC8hvBhQhpBciXAAQhUAAgwgcgABmGQQg/AngMAjQgLAiASAWQATAWAoAAQA2gBAogkQAlgiATg6QAOgpAPhBQhxAvg5AkgAmrjfQg1B7AABxQAAAkAQATQAQATAdAAQBTAAAzi0QAfhwgEhEQgFhOgzgBIAAAAQg6AAg3CBgAqLGrQhzgLhUAAQiGAAh0AQQAIgRALgiQALgjAHggIC2sRQANg4ACgdQACgbgFgcICrABQAfABAPATQAPATgHAfIjDM9QBNgHBzAHQCYAJAhAAQAyAAAjgKQAfgIAZgTQAPBMguAxQgwAzhhAAQgoAAhygKgAPXEmQgOgNAAgTQAAgSAOgOQANgNATAAQASAAAOANQANANAAATQAAATgNANQgNANgTAAQgTAAgNgNgAPeDtQgKAKAAAPQAAAPAKALQAKAKAPAAQAPAAAKgKQAJgLAAgPQAAgPgJgKQgKgKgPAAQgPAAgKAKgAQBEgIgNgXIgFAAIAAAXIgKAAIAAgzIATAAQAUAAAAAPQAAAMgNABIANAXgAPvEDIAIAAQAKAAAAgIQAAgHgKAAIgIAAgAKBC/Qg0gSgbgYQAMgfAVgTQAXgVAdAAQAXAAAsAUQArAUAlAAQAgAAASgPQASgPAAgaQAAgegfgjQgKgOg4g3QhhhgAAhPQAAhcBDg4QBFg4B4AAQBdAABUAtQgWBNhFAAQgWAAglgOQglgPgXAAQgfAAgSASQgRARAAAbQAAAhAeAkQAMAPA2AzQBhBbAABQQAABRg8A3QhFBCh/AAQg8AAg9gVgAKpnLQAHgIABgLQACgNgEgRIgIgeQgKglANgaQALgXAagIQAggJAXASQAYASAAAjQAAAsgeAkQgfAlgqAAQgMAAgCgGg");
	this.shape.setTransform(0.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE548").s().p("AozO+Qj1iMiUjwQAbgPAbgIQA0gPBigGQAzgCAwAAIA2AAQAzACBlAHIFCAeIAAACQADAQAMASQATAbAmASQAdAOAmAHQAgAGAmABQBLABBDgXQAygQAwggQBVAEA9ABIBBgBQAygBAtgDQA3gFAsgIQAcgEAYgHQBHgRBDgiIAmgWQiNELkBCfQkJCjk3AAQkmAAj8iQgAHCoSIhTgCIhNgEQhRgFhOgIQhKgHhSgMIk5gzQhTgPhGgIQhVgKhHgEQhbgDg/AFQhCAGg0APQCYjZDqh7QDxiAETAAQEhAAD9CPQDzCKCVDvQglAKgpAJQgDgSgJgRQgNgXgWgMQgWgMgZADQgYADgRAMQgUANgHAUQgIASABAVIADAQQgpAEgYABQg8AEg7AAIgngBg");
	this.shape_1.setTransform(0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5142B").s().p("ApPP2QkBiSiej8QgHAIgIAKQgQAWgHAZQgDAKgLABQgKACgGgIQhZh2gri+QgniqAEjBQAEiOAShXQAli0BpiOQAXgZAdgWQCakJEIicQERigE9AAQE3AAEMCbQEECVCcEBQA+gdAUgzIABgDQACgIAJgCQAHgCAGAGQAdAhAZAzQCQETg5FsQgQBmgdBfQgcBagaAmQgcAsgjAiQiDFGkjDIQkpDNlqAAQk0AAkKiXgArvIWQhiAGg0APQgbAIgbAPQCUDwD1CMQD8CQElAAQE4AAEJijQEBifCNkLIgmAWQhDAihHARQgYAHgcAEQgsAIg4AFQgsADgyABIhBABQg9gBhVgEQgwAggzAQQhDAXhKgBQgngBgfgGQgmgHgdgOQgmgSgTgbQgMgSgDgQIgBgCIlBgeQhlgHgzgCIg2AAQgwAAgzACgAEpEGQi5A8hpA+QiABOAABNQAAA4AyAeQAwAdBUAAQCWAABqhdQBuhhAti8IClq3IiSAAQgjAAgJAiIhSFYQgQBBghAoQgiApgqAAQgjAAgMgWQgNgYALg0IBlmqIiRAAQgkAAgIAiIhiGZQgMAhgYAXQgaAZgbAAQg8AAARhTIA2jpIAyjQIiBAAQgQAAgMAIQgNAJgEARIgKAnQgKgrghgXQghgXgyAAQiIAAhfCbQhXCPgCCzQAABdAtAxQAqAtBHAAQBGAAAxgfQArgbAhg4QAKA4AhAdQAiAdA5AAQA6AAAsgdQAqgbAgg3QAIA1AiAcQAjAeA/AAQA3AAAvgcQAvgbAegxgAqEG8QBzAKAoAAQBgAAAwgyQAvgxgPhNQgaATgfAJQgiAJgyAAQgiAAiXgJQhzgHhNAIIDDs+QAHgfgQgTQgPgTgfAAIiqgCQAFAdgCAaQgDAegMA3Ii2MSQgHAfgLAjQgLAjgIAQQB0gPCFAAQBVAAByAKgAPeD4QgNANAAATQAAASANAOQANANATAAQATAAANgNQANgNAAgTQAAgTgNgNQgNgOgTAAQgSAAgOAOgAJbB1QgVASgNAfQAbAYA1ASQA8AVA9AAQB+AABGhBQA7g4AAhRQAAhPhghbQg2g0gNgOQgeglAAghQAAgbARgQQASgTAgAAQAWAAAlAPQAmAPAWAAQBFAAAVhNQhUguhcAAQh4AAhFA5QhEA3AABdQAABPBhBgQA4A2ALANQAeAlAAAeQAAAagRAOQgSAPghAAQgkAAgsgUQgrgUgYAAQgcAAgXAWgALXpmQgaAHgLAYQgNAZAKAlIAIAeQAEARgCANQgBALgIAJQACAGANAAQApAAAfglQAegkAAgtQAAgigXgSQgQgMgTAAQgKAAgKADgAqHqQQBIAEBUAKQBHAIBTAPIE4AzQBTAMBKAHQBOAIBQAFIBOAEIBSACQBPACBQgFQAYgBApgEIgDgQQgBgVAHgSQAIgUATgNQASgMAYgDQAZgDAVAMQAXAMANAXQAJARADASQApgJAlgKQiVjvj0iKQj8iPkiAAQkSAAjxCAQjqB7iYDZQAzgPBDgGQAmgDAxAAIBCABgAAqIjQgTgWAMgiQAMgjA+gnQA6gkBxguQgQBAgNAqQgTA5glAiQgpAlg1AAQgpAAgSgWgAPlExQgKgKAAgPQAAgPAKgKQAKgLAPAAQAPAAAKALQAKAKAAAPQAAAPgKAKQgKAKgPAAQgPAAgKgKgAP8EbIANAWIALAAIgOgWQANgBAAgNQAAgPgTAAIgUAAIAAAzIAKAAIAAgWgAP2EUIAAgPIAJAAQAKAAAAAHQAAAIgKAAgAnJBWQgPgTAAglQAAhxA0h7QA3iBA7ABQAzAAAEBOQAEBFgfBwQgyC0hTAAQgeAAgQgTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vector_logo, new cjs.Rectangle(-124.2,-116.4,248.5,233), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E91D26").s().p("AgiBSQgPgFgQgMIAWgkQATAQAXAAQATAAABgRQAAgHgFgFQgFgFgKAAIgYAAIAAgeIAUAAQAWAAAAgOQAAgOgRAAQgTAAgUAQIgYgdQAbgaAnAAQAaAAAPAMQAQAMAAAWQAAAbgaAKQAQAEAIALQAIAKAAAPQAAAYgTANQgSANgcAAQgTAAgQgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-6.6,-8.7,13.2,17.4), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E91D26").s().p("As1BpIBuhgIBwCBIgjAeIhWhiIgnAjIBVBiIgjAegAKjDIIAngtIgJgJIhEAUIglghIBJgVQgGgOADgPQACgPAMgNQAQgTAWgBQAXgBATAQIA6A0IhwCAgALQBWQgLALANAMIASAPIAVgXIgSgQQgGgGgGAAQgGAAgFAHgAqagWIA+gmQAUgOAZAHQAXAHAMATQAMAUgEAWQgEAYgVANIgXAOIAbAtIgnAZgApJgYIgUAMIATAeIAVgNQAEgDABgEQAAgGgFgHQgFgJgGgBIgDgBQgDAAgDACgAJEBvQgXgCgTgNQgfgTgHglQgGgjASgcQARgcAhgIQAjgKAiAUQAUAOAKASQAKARgBATIgsADQACgNgGgJQgFgIgJgGQgQgKgRAGQgOAHgKAOQgKAQACAQQACARAQAJQAJAHAKAAQALABAJgHIAVAoQgNAJgTAAIgJAAgAoEhwIArgSIAmBaIAdh1IAggOIBBCeIgrARIglhXIgeByIggANgAGXAYIAjhXIhmA9IgggNIBAieIAsARIglBbIBog/IAfANIhACcgAlDi5IBsgaIAKAnIg+APIAeB+IgtALgADCgoQgGgBgIgFQgJgEgEgGIASgjQAAACAEADQAEAEAFABQAGACAEgDQAEgBACgEIgkiFIAzALIAPBRIAuhDIAwALIhXBxQgQAVgLAHQgIAEgKAAIgMgBgAiYhMQgagXgDgiQgDgiAXgcQAWgcAlgEQAmgDAbAZQAaAXADAiQADAjgWAbQgXAcglADIgJABQggAAgYgWgAhji5QgSABgKAQQgIANACASQABASALAMQAMANATgBQATgCAJgPQAIgOgCgTQgBgSgLgLQgLgLgQAAIgEAAgAAxg7IAJiCIgxgDIADgoICQAKIgCAoIgxgDIgJCBgAHDiZQgVgIgIgPQgJgPAGgRIAaAMQgCAFAFAHQAEAGAIADQAIAEAHgCQAIgCADgFIAaALQgGAQgRAEQgHACgGAAQgMAAgNgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-82.2,-23.3,164.5,46.7), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E91D26").s().p("AKqBHQgdgfAAgoQAAgoAcgeQAeggAvAAQAdAAAWAMQAWAMALAUIgrAfQgKgZggAAQgXAAgMARQgMAPAAAUQAAAXANAPQANARAVAAQANAAALgGQAMgHAFgNIAuAcQgJAWgaANQgZAMgcAAQgsAAgeghgAB+BHQgdgfAAgoQAAgoAcgeQAeggAvAAQAdAAAWAMQAWAMALAUIgrAfQgKgZggAAQgeAAgMAdIA6AAIAAArIg8AAQAFAQALAJQAMAKAQAAQANAAALgGQAMgHAFgNIAuAcQgJAWgaANQgZAMgcAAQgsAAgeghgAt4BIQgcgfAAgpQAAgpAdgeQAfgfAsAAQAtAAAeAgQAdAfAAAoQAAAqgeAeQgeAfgtAAQgtAAgegggAtQgjQgLAPAAAVQAAAWALAPQANARAXAAQAXAAAMgSQAMgPAAgWQAAgVgMgPQgNgQgWAAQgXAAgNARgAQjBnIAAg1IA3AAIAAA1gAPDBnIAAhIIgPAAIgtBIIg8AAIAxhOQgjgRAAgrQAAgdATgSQATgTAfAAIBeAAIAADMgAOSgjQAAAUAUAAIAdAAIAAgnIgdAAQgUAAAAATgAHhBnIAAjMIA5AAIAABEIAhAAQAjAAAUASQAUARAAAfQAAAggTATQgTATgiAAgAIaA3IAcAAQAWAAAAgXQAAgJgFgGQgHgHgKAAIgcAAgAFdBnIAAibIg7AAIAAgxICuAAIAAAxIg7AAIAACbgAAvBnIgMgoIg2AAIgMAoIg6AAIBIjMIAyAAIBHDMgAAaAZIgTg+IgSA+IAlAAgAifBnIAAhQIhFAAIAABQIg4AAIAAjMIA4AAIAABLIBFAAIAAhLIA4AAIAADMgAl1BnIAAhxIhXBxIgpAAIAAjMIA4AAIAAB0IBXh0IApAAIAADMgApOBnIAAhIQgPAHgbAAQhCAAAAhFIAAhGIA3AAIAAAzQAAAlAgAAQAMAAAJgEIAAhUIA3AAIAADMgAvhBnIAAibIhAAAIAACbIg4AAIAAjMICwAAIAADMgAQjAQIAAh3IA3AAIAAB3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-111.3,-10.4,222.8,20.9), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E91D26").s().p("AE2CrIgVhDIhbAAIgUBDIhgAAIB3lVIBWAAIB2FVgAESApIgehpIggBpIA+AAgAiaCrIAAlVICTAAQAwAAAiAmQAgAjAAAtQAAAwgfAhQggAlgwAAIg4AAIAABpgAg8gPIAxAAQAXAAAAglQAAgTgIgJQgGgIgLAAIgvAAgAmUCrIAAlVIDfAAIAABSIiBAAIAAEDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-40.5,-17.1,81.1,34.2), null);


(lib.stars_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABFNbQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIADAAQA+AABKgSQA6gOAqgSQAMgFAIgLQALgPAOgaQAjhEAVhPIAMgsIAKgsQACgEgDgFQhQhwhShnQgCgDgCAAIgFABQhIAZhPAWQhhAchfAUQgFABgCADIhYBzIhaByIgCADIAFAGQAZAfAqArIAcAbIACACQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgCgCIgogkQgngigfgjIgGgGIBWhyIBWhzQhWAQhKAIQhUAJhNAAQgxhZgmhUQgqhbgchaIgGAlIgLBSQgEAigBAlIgDBGIgDBFIAAAGIgOgDQhGgVg1gkQgmgbgYgeIgDgCIACAFQBACmCDBwIAFAGIgDAAIgBAAIgEgCQiMh3g9imQgNgjgIgiIABgCIADAHQATAuAjAhQAbAZAgASQArAZAyAPIAGABIABgGIABhEQACg9AFgzIANhsIAEgbIAFgaQABgGgBgEQgjh1gbiNIgHgmIgCgEQgpABgvAKQgmAIgwAQIAEgHQA8h7BzhrIAYgVQAEgEACgFQAfhNAsg9QAZgjAkgcIACgCIA/BKIAGgDQB6g2CTgdIBCgMIAIgDQBRgwBogjIAEgCQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIgBABIgBACIgFACQhYAghDAoIgFADIgBACIAGgBIAigCIAhgCQAogCA5AEQA4AEAyAMIAbAIQAEABAEADQAfAgAdAvQAtBHApBjIAFANQAUgqAVgzIAoheQBxA4BYBhIABAAIgEgGQg4hLhFg/QhwhmiEg5QhdgohlgQQhGgLhHAAIgHAAIgBgBIgBgBIABgBIABgBIAEgBQESgHDgCfQCOBlBeCSIALASIALASIABAEQg0hBg5gwQg6gwhKglIgCAFQgaBIgwBuQgCAHACAGQAoBtAYBvIAIAsIAIAsQAAABABABQAAAAAAABQAAAAABABQAAAAAAABIAEACQBlAtBmA8IAEADIADgDQBHhAAshHIACgEQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCADQgjBBg5A9IgSASQA7AlA6A3IAHgcQAPg/gIg/IgBgLIAAgDIABgDIADACIAAADIAFAfIACAWIABAHIAAAWIgBAJQgBAtgQAzIgBADQhEg+hEgpIgFAFIgvAqQgZAWgXARQgkAZgwAeIgEAEIgCAHIgGAvIgGAuQgJA5gPBSIgJAqIgJAqIAAAHQAAADACADIBSB/IADAFIAHgEQARgLATgQIAhgeQAygvAthIIAjg7IADgFIABAAIABAAIABABIAAABIgCAGQgVArghAyQghAzgwAwQgiAjgnAYIgEACIgCABIhaiDIgCAHQgXBWgYA9IgUAuQgLAYgNAUIgPAWQgJAMgQAGQgyAVhEANQg1ALgsACIgFABgAFLFIIA2BLIA2BNIABgEIAJgxIAJgyQAKhAAIg6IAFgwIAEgwIABgEIAEgCIAUgKQBXgxBWhIIACgDIgFgDQhAgjg2gZIhcgoIgDgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIgShqQgSheghhlIgCgFQgaA6gjBAQgcA1gnBCIgGgCQhUgZhggXQhbgWhIgNQhRgOhQgJQg7gGgtgBIg0gBIg0gBIgcABIgCAEQhKCUgfCSQgBAFACAGQA8C/BhCpIADAEIAGAAIAmgBIAmgCIBMgIIBdgPIBKgOQAEAAADgEIATgbQBRh1BbiXIACgEIihjXIgDgFIAAgBIAAgBIAEAAIADADIC9DaQgtBKgzBMQgjA3hBBbQCkgkCwhBIA5BLgAqikeIAJAAQAQBQAOA/QASBMATBBIABgFIAJggIAIgfQAMgqASguQAPgnAVgvIATgpQABAAAAgBQAAgBAAAAQABAAAAgBQABAAAAAAIAFgBIAUgBQBKgDBBAEQA3ADAjADIAxAGIAyAGQA/AIBKAPQB1AXCCAkIAHABIADgDIAohDQAWgkARggIAYgvIAXgvQACgFgBgDQgSgxgRgnQgUgugVgmQghg5gignQgGgGgHgCQhJgUhbgDQhGgDhVALQgFABgEACQhAAsgwAtQg4A0g2BFIgCADIBdCDIADAFIAAACIAAADQgFgEgFgGIgIgKIgSgVIhWhlIAogvIAqgsIAsgqQAYgVAXgSIAZgTIAZgRQieAZidBGIg9hUIgCACQgaAXgSAZQgyBEgeBWQgBAGgFADQgnAhggAhQhNBLg0BdIgEAHIAHgCIAegKIAfgKQAugNAsgEIAEgBIAFABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.stars_ball, new cjs.Rectangle(-85.4,-85.9,170.8,171.9), null);


(lib.star4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAjIg4AaIAeg2IgpgsIA8AMIAdg2IAHA9IA9AMIg4AZIAHA9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star4, new cjs.Rectangle(-7.9,-8,15.9,16), null);


(lib.star3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAsIg9AkIAchBIg1gtIBGAGIAbhBIAQBFIBGAGIg9AjIAQBFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star3, new cjs.Rectangle(-9.2,-9,18.4,18), null);


(lib.star2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAVIg8gjIBGgGIAQhFIAaBBIBHgGIg1AtIAbBBIg8gkIg0Aug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star2, new cjs.Rectangle(-9.2,-9,18.4,18), null);


(lib.star1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWATIg4gZIA8gMIAIg9IAdA2IA8gMIgqAsIAeA2Ig4gaIgpAtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star1, new cjs.Rectangle(-7.9,-8,15.9,16), null);


(lib.round_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE440").s().p("AhkLdQiQgTh9hJQh9hJhZhxQhch2gniRQgniSAViTQAUiOBIh+QBJh9ByhZQB1hcCSgnQCRgnCTAUQCPAVB9BIQB9BJBZBxQBcB2AnCRQAnCTgVCSQgUCOhIB+QhIB9hyBZQh2BciRAnQhgAahgAAQgxAAgzgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_2, new cjs.Rectangle(-74.1,-74,148.1,148.1), null);


(lib.round_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE35").s().p("AhkLdQiQgTh9hJQh9hJhZhxQhch2gniRQgniSAViTQAUiOBIh+QBJh9ByhZQB1hcCSgnQCRgnCTAUQCPAVB9BIQB9BJBZBxQBcB2AnCRQAnCTgVCSQgUCOhIB+QhIB9hyBZQh2BciRAnQhgAahgAAQgxAAgzgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_1, new cjs.Rectangle(-74.1,-74,148.1,148.1), null);


(lib.round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5142B").s().p("Am5G6Qi3i3AAkDQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECQAAEDi3C3Qi3C3kDAAQkCAAi3i3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round, new cjs.Rectangle(-62.5,-62.5,125,125), null);


(lib.logo_UEFA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEiIWQgFgEAAgHQAAgHAFgEQAFgFAGAAQAHAAAEAFQAFAEAAAHQAAAHgFAEQgEAFgHAAQgGAAgFgFgAEkICQgEADAAAGQAAAGAEAEQAEADAFAAQAGAAADgDQAEgEAAgGQAAgGgEgDQgDgEgGAAQgFAAgEAEgAEyIUIgFgIIgDAAIAAAIIgDAAIAAgSIAHAAQAGAAABAFQgBAFgEAAIAFAIgAEqIKIADAAIADgBIABgCQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAIgDAAgAB0HyQgJgHAAgRIAAgyQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgBgDAAIAAgEIAPABIARgBIAAAEIgFABQgBACAAADIAAAyQgBALAFAEQAEADAIAAQAKAAAEgDQADgFAAgKIAAgyIgBgFIgFgBIAAgEIARABIAPgBIAAAEQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAwQAAASgKAIQgJAHgTAAQgSAAgJgHgAAGHrQgKgMAAgTQAAgVAMgNQANgMAWAAQAQAAAKAGIABAXIgDAAQgCgIgHgFQgHgEgJAAQgNAAgHAJQgIAIAAAOQAAANAIALQAGALAMAAQAGAAAEgDQAEgDAAgEIAAgKQAAgBAAgBQAAAAAAgBQgBgBAAAAQAAAAgBgBQgBgBgFAAIAAgEIAQABIASgBIAAAEIgFABQgCACAAAEIAAAeIgHAAIgEgJQgLALgPAAQgSAAgMgOgADRH3IAAgEQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAhFQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAIAAgDIBDAAIABAUIgEAAQgBgGgCgBQgCgDgFAAIgcAAIAAAaIARAAQAFAAABgCIACgFIAEAAIgBAMIABANIgEAAIgCgFQgBgCgFAAIgRAAIAAAcIAeAAQAFAAACgCQADgDABgIIAFAAIgCAZgAghH2IgRABIAAgEIAFgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAgBIgCgGIgEgNIgaAAIgGAQIgBAEQAAAEAGAAIAAAEIgOg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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_UEFA, new cjs.Rectangle(-56.1,-53.8,112.3,107.8), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-75,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-75,-71,150,142), null);


(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("ArkAAQAAiWA7iJQA4iFBmhnQBnhmCFg4QCJg6CWAAQCXAACJA6QCFA4BnBmQBmBnA4CFQA6CJAACWQAACXg6CJQg4CFhmBnQhnBmiFA4QiJA6iXAAQiWAAiJg6QiGg4hmhmQhmhng4iFQg7iJAAiXMgqVAAAALkAAMAqWAAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE548").s().p("AkfKqQiFg4hmhmQhnhng4iFQg6iJAAiXQAAiWA6iJQA4iFBnhnQBmhmCFg4QCKg6CVAAQCXAACJA6QCFA4BnBmQBmBnA4CFQA6CJAACWQAACXg6CJQg4CFhmBnQhnBmiFA4QiJA6iXAAQiVAAiKg6g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lines, new cjs.Rectangle(-346,-75,692,150), null);


(lib.line2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("EhDVgIIMCGrAQR");
	this.shape.setTransform(70.4,-264.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line2, new cjs.Rectangle(-361.5,-317.1,863.9,106.1), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("AAAojIAARH");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-1,-55.8,2,111.6), null);


(lib.box_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-141,-204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(-141,-204,282,408), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE440").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.ball_shadow_bottom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ball_shadow_bottom();
	this.instance.parent = this;
	this.instance.setTransform(-87,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_shadow_bottom_1, new cjs.Rectangle(-87,-73,154,186), null);


(lib.ball_shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ball_shadow();
	this.instance.parent = this;
	this.instance.setTransform(-62.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_shadow_1, new cjs.Rectangle(-62.5,-44.5,125,89), null);


(lib.ball_pattern_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ball_pattern();
	this.instance.parent = this;
	this.instance.setTransform(-248,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiDlIg/jTIBFl1IF+CDIjIJEg");
	this.shape.setTransform(-187.8,-6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_pattern_mc, new cjs.Rectangle(-248,-70,496,140), null);


(lib.rounds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_109
	this.instance = new lib.round_2();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1998));

	// Слой_110
	this.instance_1 = new lib.round_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(186).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},4).wait(1997));

	// Слой_111
	this.instance_2 = new lib.round_2();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(183).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},7).wait(1997));

	// Слой_112
	this.instance_3 = new lib.round_1();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},10).wait(1997));

	// Слой_113
	this.instance_4 = new lib.round_2();
	this.instance_4.parent = this;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(177).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},13).wait(1997));

	// Слой_114
	this.instance_5 = new lib.round_1();
	this.instance_5.parent = this;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},16).wait(1997));

	// Слой_115
	this.instance_6 = new lib.round_2();
	this.instance_6.parent = this;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(171).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},19).wait(1997));

	// Слой_116
	this.instance_7 = new lib.round_1();
	this.instance_7.parent = this;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(168).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},22).wait(1997));

	// Слой_117
	this.instance_8 = new lib.round_2();
	this.instance_8.parent = this;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(165).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},25).wait(1997));

	// Слой_118
	this.instance_9 = new lib.round_1();
	this.instance_9.parent = this;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(162).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},28).wait(1997));

	// Слой_119
	this.instance_10 = new lib.round_2();
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(159).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},31).wait(1997));

	// Слой_120
	this.instance_11 = new lib.round_1();
	this.instance_11.parent = this;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(156).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},34).wait(1997));

	// Слой_121
	this.instance_12 = new lib.round_2();
	this.instance_12.parent = this;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(153).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},37).wait(1997));

	// Слой_122
	this.instance_13 = new lib.round_1();
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},40).wait(1997));

	// Слой_123
	this.instance_14 = new lib.round_2();
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(147).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},43).wait(1997));

	// Слой_124
	this.instance_15 = new lib.round_1();
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(144).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},46).wait(1997));

	// Слой_125
	this.instance_16 = new lib.round_2();
	this.instance_16.parent = this;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(141).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},49).wait(1997));

	// Слой_126
	this.instance_17 = new lib.round_1();
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(138).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},52).wait(1997));

	// Слой_127
	this.instance_18 = new lib.round_2();
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(135).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},55).wait(1997));

	// Слой_128
	this.instance_19 = new lib.round_1();
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(132).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},58).wait(1997));

	// Слой_129
	this.instance_20 = new lib.round_2();
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(129).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},61).wait(1997));

	// Слой_130
	this.instance_21 = new lib.round_1();
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(126).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},64).wait(1997));

	// Слой_131
	this.instance_22 = new lib.round_2();
	this.instance_22.parent = this;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(123).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},67).wait(1997));

	// Слой_132
	this.instance_23 = new lib.round_1();
	this.instance_23.parent = this;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(120).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},70).wait(1997));

	// Слой_133
	this.instance_24 = new lib.round_2();
	this.instance_24.parent = this;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(117).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},73).wait(1997));

	// Слой_134
	this.instance_25 = new lib.round_1();
	this.instance_25.parent = this;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(114).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},76).wait(1997));

	// Слой_135
	this.instance_26 = new lib.round_2();
	this.instance_26.parent = this;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(111).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},79).wait(1997));

	// Слой_136
	this.instance_27 = new lib.round_1();
	this.instance_27.parent = this;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(108).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},82).wait(1997));

	// Слой_137
	this.instance_28 = new lib.round_2();
	this.instance_28.parent = this;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(105).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},85).wait(1997));

	// Слой_138
	this.instance_29 = new lib.round_1();
	this.instance_29.parent = this;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(102).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},88).wait(1997));

	// Слой_139
	this.instance_30 = new lib.round_2();
	this.instance_30.parent = this;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(99).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},91).wait(1997));

	// Слой_140
	this.instance_31 = new lib.round_1();
	this.instance_31.parent = this;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(96).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},94).wait(1997));

	// Слой_93
	this.instance_32 = new lib.round_2();
	this.instance_32.parent = this;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(93).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},1797).wait(297));

	// Слой_94
	this.instance_33 = new lib.round_1();
	this.instance_33.parent = this;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(90).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},4).wait(2093));

	// Слой_95
	this.instance_34 = new lib.round_2();
	this.instance_34.parent = this;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(87).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},7).wait(2093));

	// Слой_96
	this.instance_35 = new lib.round_1();
	this.instance_35.parent = this;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(84).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},10).wait(2093));

	// Слой_97
	this.instance_36 = new lib.round_2();
	this.instance_36.parent = this;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(81).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},13).wait(2093));

	// Слой_98
	this.instance_37 = new lib.round_1();
	this.instance_37.parent = this;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(78).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},16).wait(2093));

	// Слой_99
	this.instance_38 = new lib.round_2();
	this.instance_38.parent = this;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(75).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},19).wait(2093));

	// Слой_100
	this.instance_39 = new lib.round_1();
	this.instance_39.parent = this;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(72).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},22).wait(2093));

	// Слой_101
	this.instance_40 = new lib.round_2();
	this.instance_40.parent = this;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(69).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},24).wait(2094));

	// Слой_102
	this.instance_41 = new lib.round_1();
	this.instance_41.parent = this;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(66).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},27).wait(2094));

	// Слой_103
	this.instance_42 = new lib.round_2();
	this.instance_42.parent = this;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(63).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},30).wait(2094));

	// Слой_104
	this.instance_43 = new lib.round_1();
	this.instance_43.parent = this;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(60).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},33).wait(2094));

	// Слой_105
	this.instance_44 = new lib.round_2();
	this.instance_44.parent = this;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(57).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},36).wait(2094));

	// Слой_106
	this.instance_45 = new lib.round_1();
	this.instance_45.parent = this;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(54).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},39).wait(2094));

	// Слой_107
	this.instance_46 = new lib.round_2();
	this.instance_46.parent = this;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(51).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},42).wait(2094));

	// Слой_108
	this.instance_47 = new lib.round_1();
	this.instance_47.parent = this;
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(48).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},45).wait(2094));

	// Слой_85
	this.instance_48 = new lib.round_2();
	this.instance_48.parent = this;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(45).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},1596).wait(546));

	// Слой_86
	this.instance_49 = new lib.round_1();
	this.instance_49.parent = this;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(42).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},4).wait(2141));

	// Слой_87
	this.instance_50 = new lib.round_2();
	this.instance_50.parent = this;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(39).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},7).wait(2141));

	// Слой_88
	this.instance_51 = new lib.round_1();
	this.instance_51.parent = this;
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(36).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},10).wait(2141));

	// Слой_89
	this.instance_52 = new lib.round_2();
	this.instance_52.parent = this;
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(33).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},13).wait(2141));

	// Слой_90
	this.instance_53 = new lib.round_1();
	this.instance_53.parent = this;
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(30).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},16).wait(2141));

	// Слой_91
	this.instance_54 = new lib.round_2();
	this.instance_54.parent = this;
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(27).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},19).wait(2141));

	// Слой_92
	this.instance_55 = new lib.round_1();
	this.instance_55.parent = this;
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(24).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},22).wait(2141));

	// Слой_81
	this.instance_56 = new lib.round_2();
	this.instance_56.parent = this;
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(21).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},1395).wait(771));

	// Слой_82
	this.instance_57 = new lib.round_1();
	this.instance_57.parent = this;
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(18).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},6).wait(2163));

	// Слой_83
	this.instance_58 = new lib.round_2();
	this.instance_58.parent = this;
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(15).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},11).wait(2161));

	// Слой_84
	this.instance_59 = new lib.round_1();
	this.instance_59.parent = this;
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(12).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},16).wait(2159));

	// Слой_79
	this.instance_60 = new lib.round_2();
	this.instance_60.parent = this;
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(9).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},1197).wait(981));

	// Слой_80
	this.instance_61 = new lib.round_1();
	this.instance_61.parent = this;
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(6).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},6).wait(2175));

	// Слой_78
	this.instance_62 = new lib.round_2();
	this.instance_62.parent = this;
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(3).to({_off:false},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},999).wait(1185));

	// Слой_77
	this.instance_63 = new lib.round_1();
	this.instance_63.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({scaleX:8,scaleY:8,x:0.4},50).to({_off:true},801).wait(1386));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.1,-74,148.1,148.1);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(243,145,0,0)","#F39100"],[0,0.369],0,-42.4,0,42.4).s().p("A+SGZIAAsxMA8lAAAIAAMxg");
	this.shape.setTransform(-5.7,31.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(141));

	// Слой_4
	this.instance = new lib.stars_ball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},140).wait(1));

	// Слой_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE440").s().p("AsDckQlkiXkSkSQkTkTiXlkQiclxAAmTQAAmSCclwQCXlkETkTQESkTFkiXQFxicGSAAQGTAAFwCcQFkCXETETQETETCXFkQCcFwAAGSQAAGTicFxQiXFkkTETQkTESlkCXQlwCcmTAAQmSAAlxicg");
	this.shape_1.setTransform(0,0,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F19024","#F19024","#F19024","#FECE35","#FECE35"],[0,0.075,0.094,0.839,1],0.1,0.1,0,0.1,0.1,61.6).s().p("AgPJwQh2gDhtgvQhvgvhXhWQhWhWgwhxQgthsgDh2IAAgeQADh3AthsQAwhxBWhVQBXhXBvgvQBtgvB2gDIAfAAQB2ADBtAvQBvAvBXBXQBWBVAwBxQAtBsADB3IAAAeQgDB2gtBsQgwBxhWBWQhXBWhvAvQhtAvh2ADg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEE440").s().p("EgVFAx/QpvkInhnhQnhnhkIpvQkRqFgBrBQABrAERqGQEIpvHhngQHhniJvkHQKFkSLAABQLCgBKFESQJuEHHiHiQHgHgEIJvQERKGABLAQgBLBkRKFQkIJvngHhQniHhpuEIQqFESrCgBQrAABqFkSg");
	this.shape_3.setTransform(0,0,0.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FECC36").s().p("EgWzA2EQqjkdoIoJQoIoHkeqiQknq6AAr7QAAr6Enq6QEeqiIIoHQIIoJKjkeQK5knL6AAQL7AAK5EnQKiEeIJIJQIIIHEdKiQEoK6AAL6QAAL7koK6QkdKioIIHQoJIJqiEdQq5Eor7AAQr6AAq5kog");
	this.shape_4.setTransform(0,0,0.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F19024","#F19024","#F5A42A","#FECE35","#FECE35"],[0,0.4,0.576,0.973,1],0,0,0,0,0,92.1).s().p("AgWOZQivgEighEQimhGh/iAQiAh/hGimQhEiggEivIAAgtQAEivBEigQBGimCAh/QB/iACmhGQCghECvgEIAtAAQCvAECgBEQClBGCACAQCACABGClQBECgAECvIAAAtQgECvhECgQhGCmiAB/QiACAilBGQigBEivAEg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE440").s().p("EgeIBHaQt6l5qvqvQqvqvl5t6QmGuZAAvwQAAvvGGuZQF5t6KvqvQKvqvN6l5QOZmHPvAAQPvAAOaGHQN6F5KvKvQKvKvF5N6QGGOZAAPvQAAPwmGOZQl5N6qvKvQqvKvt6F5QuaGHvvAAQvvAAuZmHg");
	this.shape_6.setTransform(0,0,0.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FECC36").s().p("EgfbBKeQugmJrMrNQrNrMmJugQmXvBAAwbQAAwZGXvCQGJugLNrMQLMrNOgmJQPBmXQaAAQQaAAPCGXQOgGJLMLNQLNLMGJOgQGXPCAAQZQAAQbmXPBQmJOgrNLMQrMLNugGJQvCGXwaAAQwaAAvBmXg");
	this.shape_7.setTransform(0,0,0.2,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#F19024","#F19024","#F5A42A","#FECE35","#FECE35"],[0,0.478,0.631,0.973,1],0,0,0,0,0,126.2).s().p("AgfTtQjvgGjbhdQjjhgiuiuQivivhgjiQhdjcgGjvIAAg/QAGjvBdjbQBgjjCviuQCuivDjhgQDbhdDvgGIA/AAQDvAGDcBdQDiBgCvCvQCuCuBgDjQBdDbAGDvIAAA/QgGDvhdDcQhgDiiuCvQivCujiBgQjcBdjvAGg");
	this.shape_8.setTransform(-0.1,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE440").s().p("Ego5Bg6Qy4n/ukulQulukn/y4QoSzjAA1XQAA1WISzjQH/y4OlukQOkulS4n/QTioSVXAAQVXAATjISQS4H/OkOlQOlOkH/S4QISTjAAVWQAAVXoSTjQn/S4ulOkQukOly4H/QzjIS1XAAQ1XAAzioSg");
	this.shape_9.setTransform(0,0,0.2,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FECE35").s().p("EgreBnCQ0FogvevfQvgvgog0DQoz0zAA2tQAA2tIz0yQIg0EPgvfQPevfUFogQUyozWsgBQWuABUxIzQUEIgPfPfQPgPfIgUEQIzUyAAWtQAAWtozUzQogUDvgPgQvfPf0EIgQ0xIz2uABQ2sgB0yozg");
	this.shape_10.setTransform(0,0,0.2,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE440").s().p("EguEBtKQ1QpAwawbQwbwapA1QQpV2BAA4EQAA4DJV2AQJB1RQawaQQawaVQpBQWBpVYDAAQYEAAWAJVQVRJBQaQaQQaQaJBVRQJVWAAAYDQAAYEpVWBQpAVQwbQaQwaQb1RJAQ2AJV4EAAQ4DAA2BpVg");
	this.shape_11.setTransform(0,0,0.2,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FECE35").s().p("EgwpBzRQ2cpgxWxVQxVxWph2cQp23QAA5aQAA5ZJ23QQJh2cRVxWQRWxVWcpgQXQp3ZZAAQZbAAXPJ3QWdJgRVRVQRVRWJhWcQJ2XQAAZZQAAZap2XQQphWcxVRWQxVRV2dJgQ3PJ35bAAQ5ZAA3Qp3g");
	this.shape_12.setTransform(0,0,0.2,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE440").s().p("EgzOB5aQ3qqCyPyPQyQyRqB3oQqY4fAA6xQAA6wKY4fQKB3pSQyPQSPyQXqqBQYeqYawAAQawAAYfKYQXpKASQSRQSQSPKBXpQKYYfAAawQAAaxqYYfQqAXoyRSRQyQSP3pKCQ4fKX6wAAQ6wAA4eqXg");
	this.shape_13.setTransform(0,0,0.2,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FECE35").s().p("Eg10B/hQ41qhzLzLQzLzLqh41Qq55uAA8HQAA8GK55uQKh41TLzLQTLzLY1qhQZuq5cGAAQcHAAZuK5QY1KhTLTLQTLTLKhY1QK5ZuAAcGQAAcHq5ZuQqhY1zLTLQzLTL41KhQ5uK58HAAQ8GAA5uq5g");
	this.shape_14.setTransform(0,0,0.2,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEE440").s().p("Eg4ZCFpQ6CrC0F0FQ0G0HrC6BQrb69AA9dQAA9cLb69QLC6BUG0HQUF0FaCrCQa9radcgBQdeABa8LaQaCLCUGUFQUFUGLCaCQLaa9AAdcQAAddraa9QrCaB0FUHQ0GUF6CLCQ68La9eABQ9cgB69rag");
	this.shape_15.setTransform(0,0,0.2,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FECE35").s().p("Eg6/CLxQ7Nri1B1BQ1B1Bri7NQr88MAA+0QAA+zL88LQLi7OVB1BQVB1BbNriQcMr8ezAAQe0AAcLL8QbOLiVBVBQVAVBLjbOQL8cLAAezQAAe0r8cMQribN1BVBQ1BVB7OLiQ8LL8+0AAQ+zAA8Mr8g");
	this.shape_16.setTransform(0,0,0.2,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEE440").s().p("Eg9kCR4Q8asC1718Q1817sC8aUgMegdbAAAggKUAAAggJAMegdbQMC8aV817QV718casCUAdbgMeAgJAAAUAgKAAAAdbAMeQcaMCV7V8QV8V7MCcaUAMeAdbAAAAgJUAAAAgKgMeAdbQsCca18V7Q17V88aMCUgdbAMeggKAAAUggJAAAgdbgMeg");
	this.shape_17.setTransform(0,0,0.2,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEE546").s().p("EhTHA7YMAAAh2vMCmPAAAMAAAB2vg");
	this.shape_18.setTransform(0,0,0.2,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEE546").s().p("EhycBdwMAAAi7fMDk5AAAMAAAC7fg");
	this.shape_19.setTransform(0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.7,-202.7,405.4,405.4);


(lib.ball_pattern2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ball_pattern_mc
	this.instance = new lib.ball_pattern_mc();
	this.instance.parent = this;
	this.instance.setTransform(-243.2,4,1.147,1.147,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0,x:369.5,y:3.5},35).wait(1));

	// ball_pattern_mc
	this.instance_1 = new lib.ball_pattern_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-651.5,4,1.147,1.147,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,x:-38.8,y:3.5},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-935.9,-76.4,977.4,160.6);


(lib.ball_pattern_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ball_pattern_mc
	this.instance = new lib.ball_pattern_mc();
	this.instance.parent = this;
	this.instance.setTransform(-243.2,4,1.147,1.147,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0,x:369.5,y:3.5},79).wait(1));

	// ball_pattern_mc
	this.instance_1 = new lib.ball_pattern_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-651.5,4,1.147,1.147,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,x:-38.8,y:3.5},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-935.9,-76.4,977.4,160.6);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am6G6Qi2i3AAkDQAAkCC2i3QC4i3ECAAQECAAC4C3QC3C3AAECQAAEDi3C3Qi4C3kCAAQkCAAi4i3g");

	// ball_shadow
	this.instance = new lib.ball_shadow_1();
	this.instance.parent = this;
	this.instance.setTransform(0,19.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ball_pattern
	this.instance_1 = new lib.ball_pattern_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132,-51.5,1,1,-19,0,0,0,0.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-62.5,-62.5,125,125), null);


(lib.ball2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am6G6Qi2i3AAkDQAAkCC2i3QC4i3ECAAQECAAC4C3QC3C3AAECQAAEDi3C3Qi4C3kCAAQkCAAi4i3g");

	// ball_shadow
	this.instance = new lib.ball_shadow_1();
	this.instance.parent = this;
	this.instance.setTransform(0,19.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ball_pattern
	this.instance_1 = new lib.ball_pattern2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132,-51.5,1,1,-19,0,0,0,0.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball2, new cjs.Rectangle(-62.5,-62.5,125,125), null);


(lib.anim1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-8.5,0.5,0.499,0,0,0,-0.5,-0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(222).to({_off:false},0).to({regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:-76.9,y:1.3},12,cjs.Ease.quadInOut).wait(6));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_209 = new cjs.Graphics().p("Egl+Al/QvuvvAA2QQAA2PPuvvQPvvuWPAAQWQAAPvPuQPuPvAAWPQAAWQvuPvQvvPu2QAAQ2PAAvvvug");
	var mask_graphics_210 = new cjs.Graphics().p("EgjXAjYQuqupAA0vQAA0uOqupQOpuqUuAAQUvAAOpOqQOqOpAAUuQAAUvuqOpQupOq0vAAQ0uAAupuqg");
	var mask_graphics_211 = new cjs.Graphics().p("EggwAgxQtltkAAzNQAAzMNltkQNktlTMAAQTNAANkNlQNlNkAATMQAATNtlNkQtkNlzNAAQzMAAtktlg");
	var mask_graphics_212 = new cjs.Graphics().p("A+KeLQsfsgAAxrQAAxqMfsgQMgsfRqAAQRrAAMgMfQMfMgAARqQAARrsfMgQsgMfxrAAQxqAAsgsfg");
	var mask_graphics_213 = new cjs.Graphics().p("A7jbkQraraAAwKQAAwJLaraQLaraQJAAQQKAALaLaQLaLaAAQJQAAQKraLaQraLawKAAQwJAArarag");
	var mask_graphics_214 = new cjs.Graphics().p("A48Y9QqWqVAAuoQAAunKWqVQKVqWOnAAQOoAAKVKWQKWKVAAOnQAAOoqWKVQqVKWuoAAQunAAqVqWg");
	var mask_graphics_215 = new cjs.Graphics().p("A2WWXQpQpRAAtGQAAtFJQpRQJRpQNFAAQNGAAJRJQQJQJRAANFQAANGpQJRQpRJQtGAAQtFAApRpQg");
	var mask_graphics_216 = new cjs.Graphics().p("AzvTwQoLoLAArlQAArkILoLQILoLLkAAQLlAAILILQILILAALkQAALloLILQoLILrlAAQrkAAoLoLg");
	var mask_graphics_217 = new cjs.Graphics().p("AxIRJQnGnGAAqDQAAqCHGnGQHGnGKCAAQKDAAHGHGQHGHGAAKCQAAKDnGHGQnGHGqDAAQqCAAnGnGg");
	var mask_graphics_218 = new cjs.Graphics().p("AuhOiQmCmBAAohQAAogGCmBQGBmCIgAAQIhAAGBGCQGCGBAAIgQAAIhmCGBQmBGCohAAQogAAmBmCg");
	var mask_graphics_219 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE9k8G+AAQG/AAE9E8QE8E9AAG+QAAG/k8E9Qk9E8m/AAQm+AAk9k8g");
	var mask_graphics_220 = new cjs.Graphics().p("ApUJVQj3j3AAleQAAldD3j3QD3j3FdAAQFeAAD3D3QD3D3AAFdQAAFej3D3Qj3D3leAAQldAAj3j3g");
	var mask_graphics_221 = new cjs.Graphics().p("AmtGuQiyiyAAj8QAAj7CyiyQCyiyD7AAQD8AACyCyQCyCyAAD7QAAD8iyCyQiyCyj8AAQj7AAiyiyg");
	var mask_graphics_222 = new cjs.Graphics().p("AkGEHQhthtAAiaQAAiZBthtQBthtCZAAQCaAABtBtQBtBtAACZQAACahtBtQhtBtiaAAQiZAAhthtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(209).to({graphics:mask_graphics_209,x:-0.1,y:-7.2}).wait(1).to({graphics:mask_graphics_210,x:-0.2,y:-7.4}).wait(1).to({graphics:mask_graphics_211,x:-0.3,y:-7.5}).wait(1).to({graphics:mask_graphics_212,x:-0.3,y:-7.7}).wait(1).to({graphics:mask_graphics_213,x:-0.4,y:-7.8}).wait(1).to({graphics:mask_graphics_214,x:-0.5,y:-8}).wait(1).to({graphics:mask_graphics_215,x:-0.6,y:-8.1}).wait(1).to({graphics:mask_graphics_216,x:-0.6,y:-8.2}).wait(1).to({graphics:mask_graphics_217,x:-0.7,y:-8.4}).wait(1).to({graphics:mask_graphics_218,x:-0.8,y:-8.5}).wait(1).to({graphics:mask_graphics_219,x:-0.9,y:-8.7}).wait(1).to({graphics:mask_graphics_220,x:-1,y:-8.8}).wait(1).to({graphics:mask_graphics_221,x:-1,y:-8.9}).wait(1).to({graphics:mask_graphics_222,x:-1,y:-9}).wait(1).to({graphics:null,x:0,y:0}).wait(17));

	// box
	this.instance_1 = new lib.box_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.9,42.8,1.21,1.21,0,0,0,-0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(154).to({_off:false},0).to({scaleX:0.61,scaleY:0.61,x:-4.8,y:42.7,alpha:1},10,cjs.Ease.get(-1)).to({_off:true},59).wait(17));

	// ball
	this.instance_2 = new lib.ball2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75.6,-27.9,0.379,0.379,0,0,180,0.7,-0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.ball();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-188.6,143.2,0.52,0.52,51.7,0,0,-0.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:85.6,y:-20.2,alpha:0.34},0).wait(1).to({regX:0.6,regY:-0.2,scaleX:0.49,scaleY:0.49,x:94.9,y:-11.9,alpha:0.672},0).wait(1).to({regX:0.7,scaleX:0.54,scaleY:0.54,x:103.3,y:-2.7,alpha:1},0).wait(1).to({regX:0.6,regY:-0.1,scaleX:0.59,scaleY:0.59,x:110.8,y:7.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:116.9,y:18.2},0).wait(1).to({regX:0.7,scaleX:0.7,scaleY:0.7,x:121.4,y:29.7},0).wait(1).to({regX:0.6,scaleX:0.75,scaleY:0.75,x:123.8,y:41.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:122.5,y:53.9},0).wait(1).to({regX:0.7,scaleX:0.86,scaleY:0.86,x:115.7,y:63.9},0).wait(1).to({regX:0.4,regY:0.2,scaleX:0.91,scaleY:0.91,x:104.4,y:68.5},0).wait(1).to({regY:0.3,scaleX:0.87,scaleY:0.87,x:91,y:67.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:78.4,y:63.2},0).wait(1).to({regY:0.2,scaleX:0.79,scaleY:0.79,x:66.6,y:57.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:55.4,y:50.2},0).wait(1).to({regY:0.3,scaleX:0.71,scaleY:0.71,x:45,y:42.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:35.2,y:34.5},0).wait(1).to({regX:0.3,scaleX:0.63,scaleY:0.63,x:26,y:26.3},0).wait(1).to({regX:0.4,regY:0.4,scaleX:0.59,scaleY:0.59,x:17.2,y:17.9},0).wait(1).to({regY:0.2,scaleX:0.56,scaleY:0.56,x:9,y:9.4},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:1,y:0.9},0).wait(1).to({regY:0.1,scaleX:0.52,scaleY:0.52,x:-0.2,y:-0.1},0).wait(1).to({regX:0.5,scaleX:0.53,scaleY:0.53,x:-3.6,y:-3.4},0).wait(1).to({regX:0.4,regY:0.2,scaleX:0.54,scaleY:0.54,x:-9.2,y:-8.6},0).wait(1).to({regX:0.5,scaleX:0.55,scaleY:0.55,x:-17.2,y:-16.2},0).wait(1).to({regX:0.4,scaleX:0.56,scaleY:0.56,x:-27.4,y:-25.7},0).wait(1).to({regX:0.5,regY:0.1,scaleX:0.58,scaleY:0.58,x:-39.9,y:-37.6},0).wait(1).to({regX:0.4,scaleX:0.61,scaleY:0.61,x:-54.5,y:-51.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-71.5,y:-67.5},0).wait(1).to({regX:0.5,scaleX:0.66,scaleY:0.66,x:-90.9,y:-85.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-112.4,y:-106},0).wait(1).to({regX:0.4,scaleX:0.73,scaleY:0.73,x:-136.1,y:-128.5},0).wait(1).to({regX:0.5,regY:0.2,scaleX:0.77,scaleY:0.77,x:-162.2,y:-152.9},0).wait(1).to({regX:0.4,regY:0.1,scaleX:0.81,scaleY:0.81,x:-190.6,y:-179.7},0).wait(1).to({regX:0.5,scaleX:0.86,scaleY:0.86,x:-221.2,y:-208.6},0).wait(1).to({regX:0.1,scaleX:0.91,scaleY:0.91,x:-254,y:-239.5},0).to({_off:true},1).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).to({regX:0.8,regY:-0.1,x:144.4,y:363.8},50).to({_off:true},1).wait(30));

	// ball_shadow_bottom
	this.instance_4 = new lib.ball_shadow_bottom_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(77.1,-27.1,0.569,0.569,0,0,0,0.2,-0.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:88.4,y:-19.5,alpha:0.172},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:99.3,y:-11.4,alpha:0.328},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:109.6,y:-2.6,alpha:0.5},0).wait(1).to({regX:0.3,regY:-0.1,scaleX:0.86,scaleY:0.86,x:119.5,y:7,alpha:0.469},0).wait(1).to({regX:0.2,scaleX:0.93,scaleY:0.93,x:128.3,y:17.5,alpha:0.441},0).wait(1).to({regX:0.3,scaleX:1.01,scaleY:1.01,x:136,y:28.9,alpha:0.41},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:141.8,y:41.3,alpha:0.391},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:144.6,y:54.7,alpha:0.359},0).wait(1).to({regX:0.2,scaleX:1.23,scaleY:1.23,x:141.8,y:68,alpha:0.328},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.3,scaleY:1.3,x:131.9,y:77.3,alpha:0.301},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:116.4,y:80,alpha:0.32},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:100.8,y:77.5,alpha:0.34},0).wait(1).to({regX:0.2,scaleX:1.11,scaleY:1.11,x:86,y:71.8,alpha:0.359},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:71.9,y:64.4,alpha:0.379},0).wait(1).to({regX:0.1,scaleX:0.98,scaleY:0.98,x:58.4,y:55.5,alpha:0.398},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:45.6,y:45.7,alpha:0.422},0).wait(1).to({regX:0.2,scaleX:0.85,scaleY:0.85,x:33.7,y:35.2,alpha:0.441},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:22.2,y:24.2,alpha:0.461},0).wait(1).to({regX:0.1,scaleX:0.72,scaleY:0.72,x:11.3,y:12.6,alpha:0.48},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:0.9,y:0.8,alpha:0.5},0).wait(1).to({regX:0,scaleX:0.65,scaleY:0.65,x:-0.2,y:0.2},0).wait(1).to({regY:0,scaleX:0.66,scaleY:0.66,x:-3.7,y:-1.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-9.4,y:-4.2,alpha:0.488},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-17.4,y:-8.2,alpha:0.48},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-27.6,y:-13.1,alpha:0.461},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-40.2,y:-19.2,alpha:0.449},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-55,y:-26.5,alpha:0.43},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-72.1,y:-34.8,alpha:0.41},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-91.5,y:-44.2,alpha:0.391},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-113.2,y:-54.8,alpha:0.371},0).wait(1).to({scaleX:1,scaleY:1,x:-137.1,y:-66.5,alpha:0.34},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.07,scaleY:1.07,x:-163.3,y:-79.2,alpha:0.309},0).wait(1).to({regX:0,regY:0,scaleX:1.14,scaleY:1.14,x:-191.9,y:-93.2,alpha:0.27},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.22,scaleY:1.22,x:-222.6,y:-108.1,alpha:0.238},0).wait(1).to({regX:0,regY:0,scaleX:1.3,scaleY:1.3,x:-255.8,y:-124.3,alpha:0.199},0).to({_off:true},1).wait(99).to({_off:false,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:84.7,x:-199.4,y:144.1,alpha:0.5},0).to({regY:0,x:133.6,y:364.6},50).to({_off:true},1).wait(30));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_54 = new cjs.Graphics().p("Ag4A5QgYgXAAgiQAAghAYgXQAXgYAhAAQAiAAAXAYQAYAXAAAhQAAAigYAXQgXAYgiAAQghAAgXgYg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AibCcQhAhBAAhbQAAhaBAhBQBBhABaAAQBbAABBBAQBABBAABaQAABbhABBQhBBAhbAAQhaAAhBhAg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AjzD0QhkhlAAiPQAAiOBkhlQBlhkCOAAQCPAABlBkQBkBlAACOQAACPhkBlQhlBkiPAAQiOAAhlhkg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AlAFBQiFiFAAi8QAAi7CFiFQCFiFC7AAQC8AACFCFQCFCFAAC7QAAC8iFCFQiFCFi8AAQi7AAiFiFg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AmDGEQihigAAjkQAAjjChigQCgihDjAAQDkAACgChQChCgAADjQAADkihCgQigChjkAAQjjAAigihg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Am8G9Qi5i4AAkFQAAkEC5i4QC4i5EEAAQEFAAC4C5QC5C4AAEEQAAEFi5C4Qi4C5kFAAQkEAAi4i5g");
	var mask_1_graphics_60 = new cjs.Graphics().p("AnrHsQjLjMAAkgQAAkfDLjMQDMjLEfAAQEgAADMDLQDLDMAAEfQAAEgjLDMQjMDLkgAAQkfAAjMjLg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AoPIQQjbjbAAk1QAAk0DbjbQDbjbE0AAQE1AADbDbQDbDbAAE0QAAE1jbDbQjbDbk1AAQk0AAjbjbg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AopIqQjljlAAlFQAAlEDljlQDljlFEAAQFFAADlDlQDlDlAAFEQAAFFjlDlQjlDllFAAQlEAAjljlg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Ao4I5QjsjrAAlOQAAlNDsjrQDrjsFNAAQFOAADrDsQDsDrAAFNQAAFOjsDrQjrDslOAAQlNAAjrjsg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Ao+I/QjtjuAAlRQAAlQDtjuQDujtFQAAQFRAADuDtQDtDuAAFQQAAFRjtDuQjuDtlRAAQlQAAjujtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_1_graphics_54,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_55,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_56,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_57,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_58,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_59,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_60,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_61,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_62,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_63,x:0.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_64,x:0.8,y:0.7}).wait(1).to({graphics:null,x:0,y:0}).wait(175));

	// logo
	this.instance_5 = new lib.vector_logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.9,0.7,0.628,0.628,0,0,0,0.1,0);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).wait(20).to({regX:0.4,regY:1.1,scaleX:0.59,scaleY:0.31,skewX:30.8,skewY:6.9,x:-32.5,y:138.2},20).wait(40).to({regX:0.7,regY:0.8,scaleX:0.29,scaleY:0.29,skewX:0,skewY:0,x:-0.8,y:-8.7},20,cjs.Ease.quadInOut).to({_off:true},11).wait(75));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_60 = new cjs.Graphics().p("AsWMWQlHlHAAnPQAAnOFHlHQFIlIHOAAQHPAAFHFIQFIFHAAHOQAAHPlIFHQlHFInPAAQnOAAlIlIgAntntQjNDMAAEhQAAEiDNDMQDMDNEhAAQEiAADMjNQDNjMAAkiQAAkhjNjMQjMjNkiAAQkhAAjMDNg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AtrNrQlqlqAAoBQAAoAFqlqQFrlrIAAAQIBAAFqFrQFrFqAAIAQAAIBlrFqQlqFroBAAQoAAAlrlrgAoioiQjjDiAAFAQAAFBDjDiQDiDjFAAAQFBAADijjQDjjiAAlBQAAlAjjjiQjijjlBAAQlAAAjiDjg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AvAPAQmNmNAAozQAAoyGNmNQGOmOIyAAQIzAAGNGOQGOGNAAIyQAAIzmOGNQmNGOozAAQoyAAmOmOgApXpXQj5D4AAFfQAAFgD5D4QD4D5FfAAQFgAAD4j5QD5j4AAlgQAAlfj5j4Qj4j5lgAAQlfAAj4D5g");
	var mask_2_graphics_63 = new cjs.Graphics().p("AwVQVQmxmwAAplQAApkGxmwQGxmyJkAAQJlAAGwGyQGyGwAAJkQAAJlmyGwQmwGyplAAQpkAAmxmygAqNqNQkOEPAAF+QAAF/EOEPQEPEOF+AAQF/AAEPkOQEOkPAAl/QAAl+kOkPQkPkOl/AAQl+AAkPEOg");
	var mask_2_graphics_64 = new cjs.Graphics().p("AxqRqQnUnTAAqXQAAqWHUnTQHUnVKWAAQKXAAHTHVQHVHTAAKWQAAKXnVHTQnTHVqXAAQqWAAnUnVgArCrCQkkElAAGdQAAGeEkElQElEkGdAAQGeAAElkkQEkklAAmeQAAmdkkklQklkkmeAAQmdAAklEkg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_2_graphics_60,x:0.8,y:0.7}).wait(1).to({graphics:mask_2_graphics_61,x:0.8,y:0.7}).wait(1).to({graphics:mask_2_graphics_62,x:0.8,y:0.7}).wait(1).to({graphics:mask_2_graphics_63,x:0.8,y:0.7}).wait(1).to({graphics:mask_2_graphics_64,x:0.8,y:0.7}).wait(1).to({graphics:null,x:0,y:0}).wait(175));

	// round
	this.instance_6 = new lib.round();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.8,0.7,0.13,0.13);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({scaleX:1.55,scaleY:1.55},10,cjs.Ease.get(-1)).to({_off:true},11).wait(175));

	// lines
	this.instance_7 = new lib.line2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-54.8,34.5,1.3,1.3,-22,0,0,0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1.17,scaleY:1.17,rotation:0,x:-8.7,y:333.1},20).wait(40).to({regX:0.1,regY:0.1,scaleX:1.3,scaleY:1.3,rotation:-22,x:-54.8,y:34.5},20,cjs.Ease.quadInOut).to({_off:true},1).wait(85));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_74 = new cjs.Graphics().p("EhYTAXEQk0+2k5+6MCqOgt+QGVaRGYaTUAMxA0jAAVAAKUAAQAAHhYwAf7UhXsAfigA0AAgUAAMgAsgJgg87g");
	var mask_3_graphics_75 = new cjs.Graphics().p("EhYdAVVQkN+ykR+2MCqOgqfQFyaQF2aSUALtA0iAAUAAKUAAQAAIhY6AeDUhX1AdtgA0AAfUAAMgAsgISg8yg");
	var mask_3_graphics_76 = new cjs.Graphics().p("EhYkATmQjm+tjr+xMCqKgnAQFQaOFUaQUAKoA0fAAUAAKUAAQAAIhZBAcNUhX8Ab3gA1AAeUAAOgArgHFg8og");
	var mask_3_graphics_77 = new cjs.Graphics().p("EhYqAR4Qi/+ojD+qMCqAgjkQEuaMEzaOUAJkA0aAAUAALUAAQAAIhZGAaXUhYBAaCgA1AAdUAAOgArgF5g8cg");
	var mask_3_graphics_78 = new cjs.Graphics().p("EhYsAQKQiZ+hid+kMCpzggHQEMaJERaLUAIhA0UAAUAAKUAAPAAJhZIAYhUhYDAYOgA1AAbUAAPgAqgEtg8Pg");
	var mask_3_graphics_79 = new cjs.Graphics().p("EhYsAOdQhz+Zh3+dMCpggctQDsaFDvaHUAHeA0NAAUAALUAAPAAJhZIAWsUhYDAWagA1AAaUAAPgApgDhg8Bg");
	var mask_3_graphics_80 = new cjs.Graphics().p("EhYqAMxQhN+RhR+VMCpKgZUQDKaBDOaDUAGcA0EAATAALUAAPAAJhZGAU3UhYAAUngA1AAZUAAQgApgCXg7wg");
	var mask_3_graphics_81 = new cjs.Graphics().p("EhYmALFQgn+Igr+MMCougV9QCqZ8CtZ+UAFaAz7AASAALUAAPAAJhZBATDUhX7AS1gA2AAYUAARgApgBNg7fg");
	var mask_3_graphics_82 = new cjs.Graphics().p("EhYcAJaQgD9+gG+DMCoQgSnQCIZ3CNZ4UAEZAzvAASAAMUAAOAAKhY5ARPUhX0ARDgA2AAXUAASgAogAEg7Ng");
	var mask_3_graphics_83 = new cjs.Graphics().p("EhXKAHxQAi91Af94MCnsgPTQBpZwBsZyUADYAzjAASAAMUAAOAAKhYwAPdUhXrAPRgA2AAWUAATgAoABEg63g");
	var mask_3_graphics_84 = new cjs.Graphics().p("EhV2AGIQBG9qBD9tMCnFgMBQBJZpBMZsUACXAzVAASAAMUAAOAAKhYkANrUhXfANhgA2AAVUAATgAnACMg6ig");
	var mask_3_graphics_85 = new cjs.Graphics().p("EhUhAEgQBr9eBm9iMCmagIwQAoZiAtZjUABYAzGAARAANUAAOAAKhYWAL6UhXRALxgA2AAUUAATgAmADTg6Lg");
	var mask_3_graphics_86 = new cjs.Graphics().p("EhTKAC4QCO9RCK9VMClqgFiQAJZZANZcUAAZAy2AARAANUAANAAKhYFAKKUhXBAKDgA2AASUAAUgAmAEZg5zg");
	var mask_3_graphics_87 = new cjs.Graphics().p("EhSRABSQCx9ECu9IMCk2gCVQgWZQgSZTUgAlAykAAQAAOUAANAAKhXxAIbUhWwAIUgA2AARUAAVgAlAFdg5Zg");
	var mask_3_graphics_88 = new cjs.Graphics().p("EhR1AAIQDU83DQ86MCj+AA1Qg0ZHgyZKUgBiAyRAAQAAOUAANAAKhXdAGtUhWbAGngA2AAQUAAVgAkAGig4+g");
	var mask_3_graphics_89 = new cjs.Graphics().p("EhRYAAIQD28oDy8tMCjEAD+QhTY9hQZAUgCfAx+AAPAANUAANAALhXGAE/UhWFAE8gA2AAPUAAWgAkAHlg4ig");
	var mask_3_graphics_90 = new cjs.Graphics().p("EhQ4AAIQEX8ZEU8eMCiEAHDQhxYzhuY1UgDbAxqAAPAANUAAMAALhWtADUUhVrADQgA2AAOUAAWgAkAIog4Eg");
	var mask_3_graphics_91 = new cjs.Graphics().p("EhQXAAIQE48JE28PMChBAKHQiPYoiLYpUgEXAxUAAPAAOUAAMAALhWSABoUhVRABngA2AANUAAXgAjAJpg3mg");
	var mask_3_graphics_92 = new cjs.Graphics().p("EhP0AAJQFZ76FW7+MCf7ANIQisYbipYeUgFSAw9AAPAAOUAAMAAMhV1gACUhU0gACgA2AALUAAYgAiAKpg3Fg");
	var mask_3_graphics_93 = new cjs.Graphics().p("EgGFA3OUhUVgBqgA2AALUAAYgAiALpg2jQF57qF27uMCexAQHQjJYQjGYRUgGLAwlAAOAAOQABACgzAAUgHXAAAhNBgBhg");
	var mask_3_graphics_94 = new cjs.Graphics().p("EgG+A2sUhT1gDRgA1AAKUAAYgAhAMog2BQGY7ZGW7cMCdjATCQjlYDjiYFUgHFAwMAAOAAPIgOAAUgEFAAAhQWgDHg");
	var mask_3_graphics_134 = new cjs.Graphics().p("EgG+A2sUhT1gDRgA1AAKUAAYgAhAMog2BQGY7ZGW7cMCdjATCQjlYDjiYFUgHFAwMAAOAAPIgOAAUgEFAAAhQWgDHg");
	var mask_3_graphics_135 = new cjs.Graphics().p("EgGFA3OUhUVgBqgA2AALUAAYgAiALpg2jQF57qF27uMCexAQHQjJYQjGYRUgGLAwlAAOAAOQABACgzAAUgHXAAAhNBgBhg");
	var mask_3_graphics_136 = new cjs.Graphics().p("EhP0AAJQFZ76FW7+MCf7ANIQisYbipYeUgFSAw9AAPAAOUAAMAAMhV1gACUhU0gACgA2AALUAAYgAiAKpg3Fg");
	var mask_3_graphics_137 = new cjs.Graphics().p("EhQXAAIQE48JE28PMChBAKHQiPYoiLYpUgEXAxUAAPAAOUAAMAALhWSABoUhVRABngA2AANUAAXgAjAJpg3mg");
	var mask_3_graphics_138 = new cjs.Graphics().p("EhQ4AAIQEX8ZEU8eMCiEAHDQhxYzhuY1UgDbAxqAAPAANUAAMAALhWtADUUhVrADQgA2AAOUAAWgAkAIog4Eg");
	var mask_3_graphics_139 = new cjs.Graphics().p("EhRYAAIQD28oDy8tMCjEAD+QhTY9hQZAUgCfAx+AAPAANUAANAALhXGAE/UhWFAE8gA2AAPUAAWgAkAHlg4ig");
	var mask_3_graphics_140 = new cjs.Graphics().p("EhR1AAIQDU83DQ86MCj+AA1Qg0ZHgyZKUgBiAyRAAQAAOUAANAAKhXdAGtUhWbAGngA2AAQUAAVgAkAGig4+g");
	var mask_3_graphics_141 = new cjs.Graphics().p("EhSRABSQCx9ECu9IMCk2gCVQgWZQgSZTUgAlAykAAQAAOUAANAAKhXxAIbUhWwAIUgA2AARUAAVgAlAFdg5Zg");
	var mask_3_graphics_142 = new cjs.Graphics().p("EhTKAC4QCO9RCK9VMClqgFiQAJZZANZcUAAZAy2AARAANUAANAAKhYFAKKUhXBAKDgA2AASUAAUgAmAEZg5zg");
	var mask_3_graphics_143 = new cjs.Graphics().p("EhUhAEgQBr9eBm9iMCmagIwQAoZiAtZjUABYAzGAARAANUAAOAAKhYWAL6UhXRALxgA2AAUUAATgAmADTg6Lg");
	var mask_3_graphics_144 = new cjs.Graphics().p("EhV2AGIQBG9qBD9tMCnFgMBQBJZpBMZsUACXAzVAASAAMUAAOAAKhYkANrUhXfANhgA2AAVUAATgAnACMg6ig");
	var mask_3_graphics_145 = new cjs.Graphics().p("EhXKAHxQAi91Af94MCnsgPTQBpZwBsZyUADYAzjAASAAMUAAOAAKhYwAPdUhXrAPRgA2AAWUAATgAoABEg63g");
	var mask_3_graphics_146 = new cjs.Graphics().p("EhYcAJaQgD9+gG+DMCoQgSnQCIZ3CNZ4UAEZAzvAASAAMUAAOAAKhY5ARPUhX0ARDgA2AAXUAASgAogAEg7Ng");
	var mask_3_graphics_147 = new cjs.Graphics().p("EhYmALFQgn+Igr+MMCougV9QCqZ8CtZ+UAFaAz7AASAALUAAPAAJhZBATDUhX7AS1gA2AAYUAARgApgBNg7fg");
	var mask_3_graphics_148 = new cjs.Graphics().p("EhYqAMxQhN+RhR+VMCpKgZUQDKaBDOaDUAGcA0EAATAALUAAPAAJhZGAU3UhYAAUngA1AAZUAAQgApgCXg7wg");
	var mask_3_graphics_149 = new cjs.Graphics().p("EhYsAOdQhz+Zh3+dMCpggctQDsaFDvaHUAHeA0NAAUAALUAAPAAJhZIAWsUhYDAWagA1AAaUAAPgApgDhg8Bg");
	var mask_3_graphics_150 = new cjs.Graphics().p("EhYsAQKQiZ+hid+kMCpzggHQEMaJERaLUAIhA0UAAUAAKUAAPAAJhZIAYhUhYDAYOgA1AAbUAAPgAqgEtg8Pg");
	var mask_3_graphics_151 = new cjs.Graphics().p("EhYqAR4Qi/+ojD+qMCqAgjkQEuaMEzaOUAJkA0aAAUAALUAAQAAIhZGAaXUhYBAaCgA1AAdUAAOgArgF5g8cg");
	var mask_3_graphics_152 = new cjs.Graphics().p("EhYkATmQjm+tjr+xMCqKgnAQFQaOFUaQUAKoA0fAAUAAKUAAQAAIhZBAcNUhX8Ab3gA1AAeUAAOgArgHFg8og");
	var mask_3_graphics_153 = new cjs.Graphics().p("EhYdAVVQkN+ykR+2MCqOgqfQFyaQF2aSUALtA0iAAUAAKUAAQAAIhY6AeDUhX1AdtgA0AAfUAAMgAsgISg8yg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EhYTAXEQk0+2k5+6MCqOgt+QGVaRGYaTUAMxA0jAAVAAKUAAQAAHhYwAf7UhXsAfigA0AAgUAAMgAsgJgg87g");
	var mask_3_graphics_209 = new cjs.Graphics().p("Egl+Al/QvuvvAA2QQAA2PPuvvQPvvuWPAAQWQAAPvPuQPuPvAAWPQAAWQvuPvQvvPu2QAAQ2PAAvvvug");
	var mask_3_graphics_210 = new cjs.Graphics().p("EgjUAjVQuouoAA0tQAA0sOouoQOouoUsAAQUtAAOoOoQOoOoAAUsQAAUtuoOoQuoOo0tAAQ0sAAuouog");
	var mask_3_graphics_211 = new cjs.Graphics().p("EggpAgqQtithAAzJQAAzINithQNhtiTIAAQTJAANhNiQNiNhAATIQAATJtiNhQthNizJAAQzIAAthtig");
	var mask_3_graphics_212 = new cjs.Graphics().p("A9/eAQsbsbAAxlQAAxkMbsbQMbsbRkAAQRlAAMbMbQMbMbAARkQAARlsbMbQsbMbxlAAQxkAAsbsbg");
	var mask_3_graphics_213 = new cjs.Graphics().p("A7VbWQrUrVAAwBQAAwALUrVQLVrUQAAAQQBAALVLUQLULVAAQAQAAQBrULVQrVLUwBAAQwAAArVrUg");
	var mask_3_graphics_214 = new cjs.Graphics().p("A4rYsQqOqOAAueQAAudKOqOQKOqOOdAAQOeAAKOKOQKOKOAAOdQAAOeqOKOQqOKOueAAQudAAqOqOg");
	var mask_3_graphics_215 = new cjs.Graphics().p("A2AWBQpIpHAAs6QAAs5JIpHQJHpIM5AAQM6AAJHJIQJIJHAAM5QAAM6pIJHQpHJIs6AAQs5AApHpIg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AzWTXQoBoBAArWQAArVIBoBQIBoBLVAAQLWAAIBIBQIBIBAALVQAALWoBIBQoBIBrWAAQrVAAoBoBg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AwsQtQm7m7AApyQAApxG7m7QG7m7JxAAQJyAAG7G7QG7G7AAJxQAAJym7G7Qm7G7pyAAQpxAAm7m7g");
	var mask_3_graphics_218 = new cjs.Graphics().p("AuCODQl0l0AAoPQAAoOF0l0QF0l0IOAAQIPAAF0F0QF0F0AAIOQAAIPl0F0Ql0F0oPAAQoOAAl0l0g");
	var mask_3_graphics_219 = new cjs.Graphics().p("ArXLYQkuktAAmrQAAmqEuktQEtkuGqAAQGrAAEtEuQEuEtAAGqQAAGrkuEtQktEumrAAQmqAAktkug");
	var mask_3_graphics_220 = new cjs.Graphics().p("AotIuQjnjnAAlHQAAlGDnjnQDnjnFGAAQFHAADnDnQDnDnAAFGQAAFHjnDnQjnDnlHAAQlGAAjnjng");
	var mask_3_graphics_221 = new cjs.Graphics().p("AmDGEQihihAAjjQAAjiChihQChihDiAAQDjAAChChQChChAADiQAADjihChQihChjjAAQjiAAihihg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AjZDaQhahaAAiAQAAh/BahaQBahaB/AAQCAAABaBaQBaBaAAB/QAACAhaBaQhaBaiAAAQh/AAhahag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_3_graphics_74,x:-16.2,y:76.7}).wait(1).to({graphics:mask_3_graphics_75,x:-13.8,y:91.7}).wait(1).to({graphics:mask_3_graphics_76,x:-11.4,y:106.7}).wait(1).to({graphics:mask_3_graphics_77,x:-9,y:121.7}).wait(1).to({graphics:mask_3_graphics_78,x:-6.6,y:136.7}).wait(1).to({graphics:mask_3_graphics_79,x:-4.3,y:151.6}).wait(1).to({graphics:mask_3_graphics_80,x:-2,y:166.6}).wait(1).to({graphics:mask_3_graphics_81,x:0.3,y:181.5}).wait(1).to({graphics:mask_3_graphics_82,x:2.4,y:196.4}).wait(1).to({graphics:mask_3_graphics_83,x:-2.7,y:211.3}).wait(1).to({graphics:mask_3_graphics_84,x:-7.7,y:226.2}).wait(1).to({graphics:mask_3_graphics_85,x:-12.6,y:241}).wait(1).to({graphics:mask_3_graphics_86,x:-17.4,y:255.9}).wait(1).to({graphics:mask_3_graphics_87,x:-19.2,y:270.7}).wait(1).to({graphics:mask_3_graphics_88,x:-17.7,y:282.8}).wait(1).to({graphics:mask_3_graphics_89,x:-16.2,y:287.6}).wait(1).to({graphics:mask_3_graphics_90,x:-14.7,y:292.5}).wait(1).to({graphics:mask_3_graphics_91,x:-13.2,y:297.5}).wait(1).to({graphics:mask_3_graphics_92,x:-11.7,y:302.6}).wait(1).to({graphics:mask_3_graphics_93,x:-10.2,y:317.3}).wait(1).to({graphics:mask_3_graphics_94,x:-8.7,y:333.1}).wait(40).to({graphics:mask_3_graphics_134,x:-8.7,y:333.1}).wait(1).to({graphics:mask_3_graphics_135,x:-10.2,y:317.5}).wait(1).to({graphics:mask_3_graphics_136,x:-11.7,y:302.7}).wait(1).to({graphics:mask_3_graphics_137,x:-13.2,y:297.6}).wait(1).to({graphics:mask_3_graphics_138,x:-14.7,y:292.6}).wait(1).to({graphics:mask_3_graphics_139,x:-16.2,y:287.7}).wait(1).to({graphics:mask_3_graphics_140,x:-17.7,y:283}).wait(1).to({graphics:mask_3_graphics_141,x:-19.2,y:270.8}).wait(1).to({graphics:mask_3_graphics_142,x:-17.4,y:256}).wait(1).to({graphics:mask_3_graphics_143,x:-12.6,y:241.2}).wait(1).to({graphics:mask_3_graphics_144,x:-7.6,y:226.3}).wait(1).to({graphics:mask_3_graphics_145,x:-2.7,y:211.4}).wait(1).to({graphics:mask_3_graphics_146,x:2.4,y:196.5}).wait(1).to({graphics:mask_3_graphics_147,x:0.4,y:181.6}).wait(1).to({graphics:mask_3_graphics_148,x:-1.9,y:166.7}).wait(1).to({graphics:mask_3_graphics_149,x:-4.3,y:151.8}).wait(1).to({graphics:mask_3_graphics_150,x:-6.6,y:136.8}).wait(1).to({graphics:mask_3_graphics_151,x:-9,y:121.8}).wait(1).to({graphics:mask_3_graphics_152,x:-11.3,y:106.8}).wait(1).to({graphics:mask_3_graphics_153,x:-13.7,y:91.8}).wait(1).to({graphics:mask_3_graphics_154,x:-16.2,y:76.7}).wait(1).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_3_graphics_209,x:-0.1,y:-7.2}).wait(1).to({graphics:mask_3_graphics_210,x:-0.2,y:-7.4}).wait(1).to({graphics:mask_3_graphics_211,x:-0.2,y:-7.5}).wait(1).to({graphics:mask_3_graphics_212,x:-0.3,y:-7.6}).wait(1).to({graphics:mask_3_graphics_213,x:-0.3,y:-7.7}).wait(1).to({graphics:mask_3_graphics_214,x:-0.4,y:-7.9}).wait(1).to({graphics:mask_3_graphics_215,x:-0.5,y:-8}).wait(1).to({graphics:mask_3_graphics_216,x:-0.5,y:-8.1}).wait(1).to({graphics:mask_3_graphics_217,x:-0.6,y:-8.2}).wait(1).to({graphics:mask_3_graphics_218,x:-0.7,y:-8.3}).wait(1).to({graphics:mask_3_graphics_219,x:-0.7,y:-8.5}).wait(1).to({graphics:mask_3_graphics_220,x:-0.8,y:-8.6}).wait(1).to({graphics:mask_3_graphics_221,x:-0.8,y:-8.7}).wait(1).to({graphics:mask_3_graphics_222,x:-0.8,y:-8.8}).wait(1).to({graphics:null,x:0,y:0}).wait(17));

	// lines
	this.instance_8 = new lib.lines();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.9,370.9,0.91,0.91,15);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({regY:0.2,scaleX:1.3,scaleY:1.3,rotation:-15,y:1},20).wait(30).to({regX:0.1,regY:0.5,scaleX:1.23,scaleY:0.64,rotation:0,skewX:30.8,skewY:6.9,x:-32.7,y:138.1},20).wait(40).to({regX:0.5,regY:0.3,scaleX:0.72,scaleY:0.72,skewX:0,skewY:0,x:-0.7,y:-8.6},20,cjs.Ease.quadInOut).to({_off:true},69).wait(17));

	// rounds
	this.instance_9 = new lib.rounds("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.7,10.1,1.3,1.3,0,0,0,-0.1,7.2);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},0).wait(27).to({startPosition:27},0).to({regY:7.5,scaleX:1.26,scaleY:0.57,x:-32.8,y:142.1,startPosition:47},20).wait(40).to({startPosition:97},0).to({regX:0.1,regY:6.4,scaleX:0.72,scaleY:0.72,x:-1,y:-4.2,startPosition:117},20,cjs.Ease.quadInOut).to({_off:true},69).wait(17));

	// logo
	this.instance_10 = new lib.logo_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-76.9,1.3,0.747,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({y:-355.7},10,cjs.Ease.get(-1)).to({_off:true},1).wait(205));

	// bg2
	this.instance_11 = new lib.bg2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-122.3,-334.8,1.729,1.729,-15,0,0,-0.4,-0.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(74).to({_off:false},0).to({regX:-0.5,regY:-0.2,rotation:7,x:-3.9,y:-0.6},20).wait(40).to({regX:-0.4,regY:-0.3,rotation:-15,x:-69.3,y:-334.8},20,cjs.Ease.quadInOut).to({_off:true},1).wait(85));

	// line
	this.instance_12 = new lib.line();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1.7,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({y:-357.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(194).to({_off:false,scaleY:0.01,y:-0.3},0).to({scaleY:1},10,cjs.Ease.quadInOut).wait(1));

	// logo_UEFA
	this.instance_13 = new lib.logo_UEFA();
	this.instance_13.parent = this;
	this.instance_13.setTransform(76.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({y:-356.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(194).to({_off:false,x:226.7,y:0.1},0).to({x:76.7},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2_2
	this.instance = new lib.t2_2();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-313.9,1.464,1.464,0,0,0,0,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(164).to({_off:false},0).to({y:-197.6},5,cjs.Ease.get(-1)).wait(35).to({y:-312.4},6,cjs.Ease.get(-1)).to({_off:true},1).wait(29));

	// t2_1
	this.instance_1 = new lib.t2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-335.2,1.464,1.464);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({_off:false},0).to({y:-222.2},5,cjs.Ease.get(-1)).wait(32).to({regY:-0.1,y:-337.1},6,cjs.Ease.get(-1)).to({_off:true},1).wait(29));

	// star4
	this.instance_2 = new lib.star4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(79.8,-228.7,0.031,0.032,89.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0},5,cjs.Ease.get(1)).wait(32).to({y:-344.7},6,cjs.Ease.get(-1)).to({_off:true},1).wait(99));

	// star1
	this.instance_3 = new lib.star1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-77.7,-228.7,0.031,0.032,89.9,0,0,-1.6,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(97).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:0,x:-77.6},5,cjs.Ease.get(1)).wait(32).to({y:-344.7},6,cjs.Ease.get(-1)).to({_off:true},1).wait(99));

	// star3
	this.instance_4 = new lib.star3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(57.9,-235,0.028,0.027,89.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0},5,cjs.Ease.get(1)).wait(35).to({y:-351},6,cjs.Ease.get(-1)).to({_off:true},1).wait(99));

	// star2
	this.instance_5 = new lib.star2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-55.8,-235,0.028,0.027,89.8,0,0,-1.8,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:0},5,cjs.Ease.get(1)).wait(35).to({y:-351},6,cjs.Ease.get(-1)).to({_off:true},1).wait(99));

	// t1_2
	this.instance_6 = new lib.t1_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-314.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(84).to({_off:false},0).to({y:-200.1},5,cjs.Ease.get(-1)).wait(45).to({y:-316.1},6,cjs.Ease.get(-1)).to({_off:true},1).wait(99));

	// t1_1
	this.instance_7 = new lib.t1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1.9,-320.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(87).to({_off:false},0).to({y:-231},5,cjs.Ease.get(-1)).wait(42).to({y:-347},6,cjs.Ease.get(-1)).to({_off:true},1).wait(99));

	// anim1
	this.instance_8 = new lib.anim1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.1,-0.4,1,1,0,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(240));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(240));

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
	id: '540D0CA1887D4E44991EDDBD232BF08A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ball_pattern.png", id:"ball_pattern"},
		{src:"images/ball_shadow.png", id:"ball_shadow"},
		{src:"images/ball_shadow_bottom.png", id:"ball_shadow_bottom"},
		{src:"images/box.png", id:"box"},
		{src:"images/logo.png", id:"logo"}
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