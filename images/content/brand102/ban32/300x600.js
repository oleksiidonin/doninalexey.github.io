(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.cap1 = function() {
	this.initialize(img.cap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,270);


(lib.cap2 = function() {
	this.initialize(img.cap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,270);


(lib.cap3 = function() {
	this.initialize(img.cap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,270);


(lib.cap4 = function() {
	this.initialize(img.cap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,270);


(lib.cap5 = function() {
	this.initialize(img.cap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,270);


(lib.cap6 = function() {
	this.initialize(img.cap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,270);


(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,440);// helper functions:

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


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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IgOgLIAEgEIANAMQAIgJAAgMQAAgOgJgJQgIgJgNAAQgNAAgIAJgAMWgmIADgEQAHAHALAAQAFAAAEgDQAEgDAAgFQAAgJgOAAIgHAAIAAgFIAHAAQANAAAAgKQAAgJgMAAQgJAAgHAFIgDgDQAIgGALAAQARAAAAANQAAAJgIADQAKAEAAAJQAAAGgFAEQgGAFgIAAQgLAAgKgIgAIvgmQgIgIAAgLQAAgLAIgIQAHgIALAAQAMAAAJAKIgEADQgIgIgJAAQgIAAgGAGQgGAHAAAJQAAAJAGAHQAGAGAJAAQAJAAAHgJIAEAEQgJAKgMAAQgLAAgHgIgAGZgmQgIgIAAgLQAAgLAIgIQAHgIALAAQAMAAAIAKIgDADQgIgIgJAAQgIAAgGAFQgFAGgBAIIAaAAIAAAFIgaAAQAAAIAGAGQAGAGAJAAQAJAAAHgIIAEADQgIAKgNAAQgLAAgHgIgAFbgiQgGgFAAgHQAAgRAWAAQAIAAAJACIAAgCQAAgQgRAAQgGAAgKAEIgCgEQAKgEAIAAQALAAAFAFQAGAGAAAJIAAAgIgFAAIAAgJQgIAKgMAAQgIAAgFgEgAFagvQAAAMAPAAQAHAAAGgEQAGgFAAgHIAAgFQgKgDgHAAQgRAAAAAMgADlglQgGgHgBgLIgMAAIAAAYIgFAAIAAgzIAFAAIAAAXIAMAAQABgLAHgHQAHgHAKAAQALAAAHAIQAHAIAAALQAAALgHAIQgHAIgLAAQgLAAgHgHgADphJQgFAHAAAJQAAAKAFAGQAFAGAJAAQAJAAAFgGQAFgGAAgKQAAgJgFgHQgFgGgJAAQgJAAgFAGgAh4gmQgIgHAAgMQAAgLAHgIQAHgIAKAAQALAAAGAIQAHAHAAAMIAAACIgrAAQABAJAGAGQAFAFAIAAQALAAAHgIIADADQgIAKgNAAQgKAAgHgIgAhVg7QgCgUgRAAQgHAAgGAFQgFAGgBAJIAmAAIAAAAgAkWgqIAEgEQAKALAPAAQAIAAAFgEQAFgEAAgGQAAgGgEgDQgFgEgLgCQgNgDgFgEQgGgFAAgIQAAgIAHgFQAGgFAKAAQAOAAAKAIIgEAEQgIgIgNAAQgHAAgFAEQgFAEAAAGQAAAGAEADQAFAEAMACQAXAFAAAOQAAAJgHAFQgGAGgKAAQgQAAgNgMgAlbgpQgJgLAAgOQAAgP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");
	this.shape.setTransform(-0.6,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A02jBMAptAAAIAAGDMgptAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-134.4,-20.4,269,40.8), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMbBXQgigjAAg0QAAgzAigiQAjglA1ABQAfgBAXAKQAUAKATARIgbAfQgggdgigBQgiABgXAYQgWAYAAAjQAAAjAWAYQAXAZAiAAQAUAAARgIQAOgHARgQIAaAbQgUAWgUAJQgYALggAAQgzAAgjgjgACUBXQgigjAAg0QAAgyAigjQAjglA1ABQAeAAAXAKQATAIATASIgYAdQgfgcgkAAQgdAAgWATQgVASgFAdIBqAAIAAAjIhrAAQAFAdAVAUQAWATAeAAQAVAAARgIQAOgHARgPIAbAbQgUAUgVAKQgZAKggAAQgzAAgjgjgAiEBdQgegegGgtIgnAAIAABlIgqAAIAAjtIAqAAIAABjIAnAAQAGgsAfgdQAfgeAtABQAyAAAfAjQAgAjAAAzQAAA0ggAjQggAjgyAAQgtAAgfgdgAhrg7QgTAYAAAjQAAAkAUAYQAUAZAfAAQAfAAAVgZQASgYAAgkQAAgjgTgYQgVgZgfAAQgfAAgUAZgAySBxQgXgKgVgTIAXgdQAhAfAuAAQATAAANgJQAOgKAAgRQAAgQgPgKQgPgIgYAAIgbAAIAAgiIAbAAQAXAAAMgJQANgIAAgRQAAgPgMgJQgMgJgUAAQgnAAgcAbIgWgcQAlgjA2AAQAlAAAYASQAXARAAAcQAAAmgpARQAvAOAAAqQAAAegYAUQgYATgnAAQgiABgZgKgAQNB3IAAjtICwAAIAAAlIiGAAIAAA+IB3AAIAAAkIh3AAIAABAICIAAIAAAmgAH5B3IAAjtIBqAAQApAAAVAWQAQAPAAAYQAAAkgiARQAXAGALANQANAPAAAXQAAAggYARQgXARgoAAgAIiBSIBFAAQAugBAAggQAAgggxgBIhCAAgAIigSIA5AAQAtAAAAggQAAgOgLgJQgLgHgUgBIg8AAgAlzB3IAAhkIhxAAIAABkIgqAAIAAjtIAqAAIAABjIBxAAIAAhjIAqAAIAADtgAqJB3IAAjtIAqAAIAADtgAsBB3IAAipIhLBuIgBAAIhLhuIAACpIgpAAIAAjtIAtAAIBIBxIBIhxIAsAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-121.4,-12.2,243,24.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B184A0").s().p("AmEBqQgqgrAAg/QAAg+AqgrQAsgtBCAAQBDAAArAtQAqArAAA+QAAA/gqArQgtAthCAAQhBAAgsgtgAldhIQgcAdAAArQAAArAcAeQAcAfArAAQArAAAcgeQAbgeAAgsQAAgqgbgeQgcgfgsAAQgqAAgcAfgAg4CRIAGgqQAKACAHAAQAbAAALgfQASgsAAh1IAAg6IDHAAIAAEjIgzAAIAAj1IhlAAIAAAbQAACCgXAyQgVApguAAQgRAAgTgEgAIqCSIAAkjIBzAAQAzAAAeAbQAeAbAAAtQAAAugiAbQggAZgzAAIg5AAIAABegAJeAGIA7AAQAdAAARgOQARgOAAgYQAAgZgRgOQgQgNgeAAIg7AAgAFqCSIAAkjIAzAAIAAEjgApGCSIhkiDIgtAuIAABVIg0AAIAAkjIA0AAIAACSICKiSIA/AAIh6B+ICAClg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#016668").s().p("AmEBqQgqgrAAg/QAAg+AqgrQAsgtBCAAQBDAAArAtQAqArAAA+QAAA/gqArQgtAthCAAQhBAAgsgtgAldhIQgcAdAAArQAAArAcAeQAcAfArAAQArAAAcgeQAbgeAAgsQAAgqgbgeQgcgfgsAAQgqAAgcAfgAg4CRIAGgqQAKACAHAAQAbAAALgfQASgsAAh1IAAg6IDHAAIAAEjIgzAAIAAj1IhlAAIAAAbQAACCgXAyQgVApguAAQgRAAgTgEgAIqCSIAAkjIBzAAQAzAAAeAbQAeAbAAAtQAAAugiAbQggAZgzAAIg5AAIAABegAJeAGIA7AAQAdAAARgOQARgOAAgYQAAgZgRgOQgQgNgeAAIg7AAgAFqCSIAAkjIAzAAIAAEjgApGCSIhkiDIgtAuIAABVIg0AAIAAkjIA0AAIAACSICKiSIA/AAIh6B+ICAClg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#134D99").s().p("AmEBqQgqgrAAg/QAAg+AqgrQAsgtBCAAQBDAAArAtQAqArAAA+QAAA/gqArQgtAthCAAQhBAAgsgtgAldhIQgcAdAAArQAAArAcAeQAcAfArAAQArAAAcgeQAbgeAAgsQAAgqgbgeQgcgfgsAAQgqAAgcAfgAg4CRIAGgqQAKACAHAAQAbAAALgfQASgsAAh1IAAg6IDHAAIAAEjIgzAAIAAj1IhlAAIAAAbQAACCgXAyQgVApguAAQgRAAgTgEgAIqCSIAAkjIBzAAQAzAAAeAbQAeAbAAAtQAAAugiAbQggAZgzAAIg5AAIAABegAJeAGIA7AAQAdAAARgOQARgOAAgYQAAgZgRgOQgQgNgeAAIg7AAgAFqCSIAAkjIAzAAIAAEjgApGCSIhkiDIgtAuIAABVIg0AAIAAkjIA0AAIAACSICKiSIA/AAIh6B+ICAClg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#304551").s().p("AmEBqQgqgrAAg/QAAg+AqgrQAsgtBCAAQBDAAArAtQAqArAAA+QAAA/gqArQgtAthCAAQhBAAgsgtgAldhIQgcAdAAArQAAArAcAeQAcAfArAAQArAAAcgeQAbgeAAgsQAAgqgbgeQgcgfgsAAQgqAAgcAfgAg4CRIAGgqQAKACAHAAQAbAAALgfQASgsAAh1IAAg6IDHAAIAAEjIgzAAIAAj1IhlAAIAAAbQAACCgXAyQgVApguAAQgRAAgTgEgAIqCSIAAkjIBzAAQAzAAAeAbQAeAbAAAtQAAAugiAbQggAZgzAAIg5AAIAABegAJeAGIA7AAQAdAAARgOQARgOAAgYQAAgZgRgOQgQgNgeAAIg7AAgAFqCSIAAkjIAzAAIAAEjgApGCSIhkiDIgtAuIAABVIg0AAIAAkjIA0AAIAACSICKiSIA/AAIh6B+ICAClg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#933032").s().p("AmEBqQgqgrAAg/QAAg+AqgrQAsgtBCAAQBDAAArAtQAqArAAA+QAAA/gqArQgtAthCAAQhBAAgsgtgAldhIQgcAdAAArQAAArAcAeQAcAfArAAQArAAAcgeQAbgeAAgsQAAgqgbgeQgcgfgsAAQgqAAgcAfgAg4CRIAGgqQAKACAHAAQAbAAALgfQASgsAAh1IAAg6IDHAAIAAEjIgzAAIAAj1IhlAAIAAAbQAACCgXAyQgVApguAAQgRAAgTgEgAIqCSIAAkjIBzAAQAzAAAeAbQAeAbAAAtQAAAugiAbQggAZgzAAIg5AAIAABegAJeAGIA7AAQAdAAARgOQARgOAAgYQAAgZgRgOQgQgNgeAAIg7AAgAFqCSIAAkjIAzAAIAAEjgApGCSIhkiDIgtAuIAABVIg0AAIAAkjIA0AAIAACSICKiSIA/AAIh6B+ICAClg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C6C6C").s().p("AmEBqQgqgrAAg/QAAg+AqgrQAsgtBCAAQBDAAArAtQAqArAAA+QAAA/gqArQgtAthCAAQhBAAgsgtgAldhIQgcAdAAArQAAArAcAeQAcAfArAAQArAAAcgeQAbgeAAgsQAAgqgbgeQgcgfgsAAQgqAAgcAfgAg4CRIAGgqQAKACAHAAQAbAAALgfQASgsAAh1IAAg6IDHAAIAAEjIgzAAIAAj1IhlAAIAAAbQAACCgXAyQgVApguAAQgRAAgTgEgAIqCSIAAkjIBzAAQAzAAAeAbQAeAbAAAtQAAAugiAbQggAZgzAAIg5AAIAABegAJeAGIA7AAQAdAAARgOQARgOAAgYQAAgZgRgOQgQgNgeAAIg7AAgAFqCSIAAkjIAzAAIAAEjgApGCSIhkiDIgtAuIAABVIg0AAIAAkjIA0AAIAACSICKiSIA/AAIh6B+ICAClg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-15,156,30.2);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqvBqIghgiIhtAAQgaABgRgEQgWgGgNgMQgRgRAAghIAAheQAAgGAEgEQAEgEAHAAIB4AAQAbAAAQAEQAWAFANAMQASASAAAhIAABcIAbAcQAEAEAAAFQAAAGgFAFQgFAFgGAAQgFAAgEgEgAt+ABQAAAXAMAMIACAAQALAKAYAAIB5AAIAAhRQAAgYgMgLIgCgBQgLgJgYgBIh5AAgAPcBBIAAinQAAgHAJAAQAHAAABAIIAACmQgBAJgHgBQgJABAAgJgANYBCIAAigIg0AAQgIAAAAgIQAAgHAIAAIB2AAQAJAAgBAHQABAIgJAAIgyAAIAACgQAAADgDACQgDACgDAAQgHAAAAgHgAK6BJQgOABAAgMIAAikQAAgHAIAAQAJAAAAAHIAACfIBMAAQAKABAAAHQAAAJgJgBgAIbBJQgVABgOgOQgOgPAAgaIAAh5QAAgHAIAAQAIAAAAAHIAAB5QAAASAKALQAKAKANAAIAfAAQAPAAAJgKQAIgLAAgSIAAh5QAAgHAHAAQAJAAAAAHIAAB5QAAAZgNAOQgMAPgXAAgAGLBBIAAiaQAAgFgDAAQgDgBgCAGIgxCbQgEAHgGAAQgKAAgBgHIgvibQgBgGgDABQgDAAAAAFIAACaQABAJgJgBQgIABAAgJIAAiaQAAgJAGgGQAGgFAIAAQAPAAAEANIAqCMIAsiNQAEgMAPAAQAJAAAGAFQAFAGAAAJIAACaQAAAJgIgBQgIABAAgJgAgXBIQgOABABgNQAAgNANAAIBBAAQAjABALgGQAIgFABgRIAAgBQgBgLgDgFQgEgFgPgCIgPgBIg/AAQgNAAAAgMQAAgOAOAAIA6AAQAUAAAHgEQAHgGAAgLIAAgHQAAgOgJgEQgKgFgeABIg/AAQgNgBAAgMQAAgNANAAIA+AAQAyAAAQALQANAJAAAZIAAAKQAAAVgIAMQAQALAAAcIAAACQAAAhgcALQgPAGgkAAgAk3BIIAAAAQgigBgPgJQgMgIgCgPIAAgDQAAgFAEgDQADgEAHAAQAFAAAEADQAEADABAEIACACQACAGAJACQAHACAOABIBAAAQAlAAAKgFQAJgFAAgRIAAgBQAAgNgGgFQgIgGgYAAIhXAAQgfAAgMgLQgNgLAAgZIAAgKQAAgXAQgKQATgMAxAAIAvAAQAnAAARAKQANAIADAQIAAACQAAAGgEADQgEADgGAAQgGAAgEgDQgEgCgBgEIgBgCQgEgIgMgCQgIgBgVAAIgxAAQgegBgKAFQgJAEAAAOIAAAHQAAALAGAGQAIAEAUAAIBLAAQAkAAAPAIQAVAMAAAfIAAABQAAAhgcAMQgQAGgkAAgAvnBFQgEgFgBgHIAAiUQABgIAEgEQADgEAIAAQAGAAAEAEQAEAEAAAIIAACUQAAAHgEAFQgEAEgGgBQgIABgDgEgAoqBIQgsAAgVgMQgegQAAgrIAAgkQAAgrAegRQAVgMAsAAIApAAQAsAAAVAMQAeARAAArIAAAkQAAArgeAQQgVAMgsAAgApbhIQgPALAAAaIAAAjQAAAbAPALQANAJAcAAIA6AAQAcAAAMgJQAQgLAAgbIAAgjQAAgagQgLQgMgKgcABIg6AAQgcgBgNAKg");
	this.shape.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-100.8,-11,200.9,22), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-72,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-72,-157,144,440), null);


(lib.cap_mc_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.cap6();
	this.instance.parent = this;
	this.instance.setTransform(-71,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap_mc_6, new cjs.Rectangle(-71,-135,142,270), null);


(lib.cap_mc_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap4();
	this.instance.parent = this;
	this.instance.setTransform(-71,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap_mc_5, new cjs.Rectangle(-71,-135,142,270), null);


(lib.cap_mc_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap5();
	this.instance.parent = this;
	this.instance.setTransform(-71,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap_mc_4, new cjs.Rectangle(-71,-135,142,270), null);


(lib.cap_mc_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap2();
	this.instance.parent = this;
	this.instance.setTransform(-71,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap_mc_3, new cjs.Rectangle(-71,-135,142,270), null);


(lib.cap_mc_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap3();
	this.instance.parent = this;
	this.instance.setTransform(-71,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap_mc_2, new cjs.Rectangle(-71,-135,142,270), null);


(lib.cap_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap1();
	this.instance.parent = this;
	this.instance.setTransform(-71,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap_mc_1, new cjs.Rectangle(-71,-135,142,270), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AldArQgSgSABgZQgBgYASgRQARgSAbAAQAaAAARARQASASgBAYQABAZgSARQgRASgbAAQgaAAgRgRgAlOgcQgLAMAAAQQAAARALAMQALAMASAAQAQAAAMgMQALgLAAgSQAAgQgLgMQgMgMgRAAQgRAAgLAMgAFbA6IAAhUIg6BUIgUAAIAAhzIAVAAIAABUIA6hUIATAAIAABzgAC0A6IAAhgIgmAAIAAgTIBfAAIAAATIglAAIAABggABwA6IgLgcIg3AAIgNAcIgVAAIA0h0IATAAIAzB0gABdAMIgUguIgUAuIAoAAgAhVA6IAAhzIAuAAQAUAAANALQALAKgBASQAAASgMALQgNAKgUAAIgYAAIAAAlgAhBACIAYAAQAMAAAHgFQAGgFABgKQAAgVgaAAIgYAAgAjVA6IAAhzIBXAAIAAASIhDAAIAAAbIAhAAQATAAALAJQAMAJAAAQQAAASgMAJQgLAJgUAAgAjBAoIAbAAQAOAAAGgEQAIgEgBgKQABgSgYAAIgfAAg");
	this.shape.setTransform(0.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("ApmDSIAAmjITNAAIAAGjg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-61.5,-21,123,42), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8CB5DA","#87D5F1"],[0.008,1],0,299,0,-298.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.cap6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al/MpQgPgHgIgIIgQg4IgO4UQAAgBG0AFQGzAGAAgCIACJBQABJFgFARQgHAcgjAlQgIAJgqAcIg9ApQgcAUgDgDQgJgJgPgEQgKgDgJADIgIADIjqCKQgXAPgFASQgCAHgBAaIi6BXQgfAJggAEIgPAAQgcAAgYgKgAGzsqIAAAAIAAAAg");
	mask.setTransform(-0.8,-3.2);

	// Слой_1
	this.instance = new lib.cap_mc_6();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.1,0.6,0.6,0,0,0,0.4,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap6_1, new cjs.Rectangle(-42.6,-81,85.2,159.7), null);


(lib.cap5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al/MpQgPgHgIgIIgQg4IgO4UQAAgBG0AFQGzAGAAgCIACJBQABJFgFARQgHAcgjAlQgIAJgqAcIg9ApQgcAUgDgDQgJgJgPgEQgKgDgJADIgIADIjqCKQgXAPgFASQgCAHgBAaIi6BXQgfAJggAEIgPAAQgcAAgYgKgAGzsqIAAAAIAAAAg");
	mask.setTransform(-0.8,-3.2);

	// Слой_1
	this.instance = new lib.cap_mc_5();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.1,0.6,0.6,0,0,0,0.4,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap5_1, new cjs.Rectangle(-42.6,-81,85.2,159.7), null);


(lib.cap4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al/MpQgPgHgIgIIgQg4IgO4UQAAgBG0AFQGzAGAAgCIACJBQABJFgFARQgHAcgjAlQgIAJgqAcIg9ApQgcAUgDgDQgJgJgPgEQgKgDgJADIgIADIjqCKQgXAPgFASQgCAHgBAaIi6BXQgfAJggAEIgPAAQgcAAgYgKgAGzsqIAAAAIAAAAg");
	mask.setTransform(-0.8,-3.2);

	// Слой_1
	this.instance = new lib.cap_mc_4();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.1,0.6,0.6,0,0,0,0.4,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap4_1, new cjs.Rectangle(-42.6,-81,85.2,159.7), null);


(lib.cap3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al/MpQgPgHgIgIIgQg4IgO4UQAAgBG0AFQGzAGAAgCIACJBQABJFgFARQgHAcgjAlQgIAJgqAcIg9ApQgcAUgDgDQgJgJgPgEQgKgDgJADIgIADIjqCKQgXAPgFASQgCAHgBAaIi6BXQgfAJggAEIgPAAQgcAAgYgKgAGzsqIAAAAIAAAAg");
	mask.setTransform(-0.8,-3.2);

	// Слой_1
	this.instance = new lib.cap_mc_3();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.1,0.6,0.6,0,0,0,0.4,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap3_1, new cjs.Rectangle(-42.6,-81,85.2,159.7), null);


(lib.cap2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al/MpQgPgHgIgIIgQg4IgO4UQAAgBG0AFQGzAGAAgCIACJBQABJFgFARQgHAcgjAlQgIAJgqAcIg9ApQgcAUgDgDQgJgJgPgEQgKgDgJADIgIADIjqCKQgXAPgFASQgCAHgBAaIi6BXQgfAJggAEIgPAAQgcAAgYgKgAGzsqIAAAAIAAAAg");
	mask.setTransform(-0.8,-3.2);

	// Слой_1
	this.instance = new lib.cap_mc_2();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.1,0.6,0.6,0,0,0,0.4,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap2_1, new cjs.Rectangle(-42.6,-81,85.2,159.7), null);


(lib.cap1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al/MpQgPgHgIgIIgQg4IgO4UQAAgBG0AFQGzAGAAgCIACJBQABJFgFARQgHAcgjAlQgIAJgqAcIg9ApQgcAUgDgDQgJgJgPgEQgKgDgJADIgIADIjqCKQgXAPgFASQgCAHgBAaIi6BXQgfAJggAEIgPAAQgcAAgYgKgAGzsqIAAAAIAAAAg");
	mask.setTransform(-0.8,-3.2);

	// Слой_1
	this.instance = new lib.cap_mc_1();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.1,0.6,0.6,0,0,0,0.4,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap1_1, new cjs.Rectangle(-42.6,-81,85.2,159.7), null);


(lib.caps_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap3_1();
	this.instance.parent = this;
	this.instance.setTransform(55.2,-0.9,1,1,0,0,0,-0.8,-2.1);

	this.instance_1 = new lib.cap1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.caps_top, new cjs.Rectangle(-100.4,-84,199.4,166.2), null);


(lib.caps_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap5_1();
	this.instance.parent = this;
	this.instance.setTransform(55.2,-0.9,1,1,0,0,0,-0.8,-2.1);

	this.instance_1 = new lib.cap6_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56.8,-0.9,1,1,0,0,0,-0.8,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.caps_bottom, new cjs.Rectangle(-100.4,-84,199.4,166.2), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,266.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(205));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-25.4,0.02,0.02,0,0,0,0,-2.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({_off:false},0).to({regY:0.1,scaleX:1,scaleY:1,y:-56.8},10,cjs.Ease.get(1)).wait(35).to({regY:-2.5,scaleX:0.02,scaleY:0.02,y:-25.4},9,cjs.Ease.get(-1)).wait(1));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-24.3,0.02,0.02);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({scaleX:1,scaleY:1,x:-0.4,y:-2.7},10,cjs.Ease.get(1)).wait(10).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-0.5,y:-2.6},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-0.4,y:-2.7},2).wait(2).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-0.5,y:-2.6},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-0.4,y:-2.7},2).wait(15).to({scaleX:0.02,scaleY:0.02,x:0,y:-24.3},9,cjs.Ease.get(-1)).wait(1));

	// caps
	this.instance_3 = new lib.caps_bottom();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.2,138.9,1,1,0,0,0,-0.8,-1);

	this.instance_4 = new lib.caps_top();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.2,-184.1,1,1,0,0,0,-0.8,-1);

	this.instance_5 = new lib.cap1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(56.2,138.9,1,1,0,0,0,-0.8,-2.1);

	this.instance_6 = new lib.cap4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-55.8,138.9,1,1,0,0,0,-0.8,-2.1);

	this.instance_7 = new lib.cap2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(56.2,-184.1,1,1,0,0,0,-0.8,-2.1);

	this.instance_8 = new lib.cap3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-55,-182);

	this.instance_9 = new lib.cap6_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(56.2,138.9,1,1,0,0,0,-0.8,-2.1);

	this.instance_10 = new lib.cap5_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-55,-182);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},161).to({state:[{t:this.instance_8,p:{regX:0,regY:0,x:-55,y:-182}},{t:this.instance_7,p:{x:56.2,y:-184.1,regX:-0.8,regY:-2.1}},{t:this.instance_6,p:{x:-55.8,y:138.9,regX:-0.8,regY:-2.1}},{t:this.instance_5,p:{y:138.9,x:56.2}}]},4).to({state:[{t:this.instance_10,p:{regX:0,regY:0,x:-55,y:-182}},{t:this.instance_5,p:{y:-184.1,x:56.2}},{t:this.instance_8,p:{regX:-0.8,regY:-2.1,x:-55.8,y:138.9}},{t:this.instance_9,p:{regX:-0.8,regY:-2.1,x:56.2,y:138.9}}]},5).to({state:[{t:this.instance_9,p:{regX:0,regY:0,x:-55,y:-182}},{t:this.instance_6,p:{x:56.2,y:-184.1,regX:-0.8,regY:-2.1}},{t:this.instance_7,p:{x:-55.8,y:138.9,regX:-0.8,regY:-2.1}},{t:this.instance_10,p:{regX:-0.8,regY:-2.1,x:56.2,y:138.9}}]},5).to({state:[{t:this.instance_7,p:{x:-55,y:-182,regX:0,regY:0}},{t:this.instance_8,p:{regX:-0.8,regY:-2.1,x:56.2,y:-184.1}},{t:this.instance_5,p:{y:138.9,x:-55.8}},{t:this.instance_6,p:{x:56.2,y:138.9,regX:-0.8,regY:-2.1}}]},5).to({state:[{t:this.instance_6,p:{x:-55,y:-182,regX:0,regY:0}},{t:this.instance_10,p:{regX:-0.8,regY:-2.1,x:56.2,y:-184.1}},{t:this.instance_5,p:{y:138.9,x:-55.8}},{t:this.instance_7,p:{x:56.2,y:138.9,regX:-0.8,regY:-2.1}}]},5).to({state:[{t:this.instance_4},{t:this.instance_3}]},5).to({state:[]},5).wait(10));

	// caps_bottom
	this.instance_11 = new lib.caps_bottom();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0.2,378.9,1,1,0,0,0,-0.8,-1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150).to({_off:false},0).to({y:138.9},10,cjs.Ease.get(1)).to({_off:true},1).wait(34).to({_off:false},0).to({y:378.9},9,cjs.Ease.get(-1)).wait(1));

	// caps_top
	this.instance_12 = new lib.caps_top();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0.2,-384.1,1,1,0,0,0,-0.8,-1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(150).to({_off:false},0).to({y:-184.1},10,cjs.Ease.get(1)).to({_off:true},1).wait(34).to({_off:false},0).to({y:-384.1},9,cjs.Ease.get(-1)).wait(1));

	// cap
	this.instance_13 = new lib.cap_mc_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1,-3);

	this.instance_14 = new lib.cap_mc_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1,-3);

	this.instance_15 = new lib.cap_mc_3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1,-3);

	this.instance_16 = new lib.cap_mc_4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1,-3);

	this.instance_17 = new lib.cap_mc_5();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1,-3);

	this.instance_18 = new lib.cap_mc_6();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1,-3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},110).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_15}]},5).to({state:[{t:this.instance_16}]},5).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_18}]},5).to({state:[{t:this.instance_18}]},5).to({state:[{t:this.instance_18}]},10).to({state:[]},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(135).to({_off:false},0).wait(5).to({y:564},10,cjs.Ease.get(-1)).to({_off:true},1).wait(54));

	// dev
	this.instance_19 = new lib.dev_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(2,584);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(94).to({_off:false},0).to({y:18},11,cjs.Ease.get(1)).wait(35).to({y:585},10,cjs.Ease.get(-1)).to({_off:true},1).wait(54));

	// t2
	this.instance_20 = new lib.t2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0.5,-316);
	this.instance_20.alpha = 0.398;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(53).to({_off:false},0).to({y:217},30,cjs.Ease.get(1)).to({_off:true},1).wait(121));

	// t2
	this.instance_21 = new lib.t2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0.5,-316);
	this.instance_21.alpha = 0.699;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(51).to({_off:false},0).to({y:217},25,cjs.Ease.get(1)).to({_off:true},1).wait(128));

	// t2
	this.instance_22 = new lib.t2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0.5,-316);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(50).to({_off:false},0).to({y:217},20,cjs.Ease.get(1)).wait(14).to({alpha:0},10).to({_off:true},1).wait(110));

	// t1
	this.instance_23 = new lib.t1("single",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,0,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleX:1,scaleY:1,mode:"synched",loop:false},10,cjs.Ease.get(1)).to({scaleX:1.8,scaleY:1.79,startPosition:30},30).to({scaleX:5,scaleY:5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(154));

	// bg
	this.instance_24 = new lib.bg();
	this.instance_24.parent = this;
	this.instance_24.setTransform(0,300,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(205));

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
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cap1.png", id:"cap1"},
		{src:"images/cap2.png", id:"cap2"},
		{src:"images/cap3.png", id:"cap3"},
		{src:"images/cap4.png", id:"cap4"},
		{src:"images/cap5.png", id:"cap5"},
		{src:"images/cap6.png", id:"cap6"},
		{src:"images/dev.png", id:"dev"}
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
an.compositions['E5F08688052A497EA765790B818200C2'] = {
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