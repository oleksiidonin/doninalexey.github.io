(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.billet = function() {
	this.initialize(img.billet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,350);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,272);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,352);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,308);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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


(lib.z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AgoA5QAEgJABgNIAEAAQADAIAGAFQAHAFAJAAQAIAAAHgHQAGgHAAgKQAAgMgHgHQgGgIgLAAQgEAAgFACIAAgNIAIACQAXAAAAgXQAAgJgFgGQgEgGgIAAQgQAAgFAOIgEAAIgFgSQARgIAOAAQAQAAAMAHQAOAJAAAQQAAALgIAIQgHAHgLACIAAABQAcAEAAAaQAAATgQAJQgMAIgTAAQgWAAgMgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.z, new cjs.Rectangle(-4.1,-6.4,8.2,12.8), null);


(lib.y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AgJBBIgKABIAOgaIgCgDIgxhmIAeAAIAiBPIAfhPIAJAAIAJAAIgFAKQgpBXgLAig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.y, new cjs.Rectangle(-5.7,-6.6,11.4,13.3), null);


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AR+AwIgHABIALgVIgTgvIAIAAIAGAAQABALAKAVQAKgXAAgJIAGAAIAGAAIgDAEQgYA1gBALgAzMAwIgHABQAGgIAFgNIgJgZIgKgWIAIAAIAGAAQABAGAKAaQALgYAAgIIAFAAIAGAAIgDAEQgYA1gBALgAhtAqIAAgFQAAgLgGAAIghAAQgHAAAAALIABAFIgDAAIgBgUIAFABIABAAQACgDAHgRIAHgXIALAAIAOArIAGgBIgBAUgAh7AXIgLgiIgMAiIAXAAIAAAAgAlbAqIABgFQAAgLgHAAIghAAQgGAAAAALIAAAFIgDAAIgBgUIAGABIAAAAQADgDAGgRIAIgXIAKAAIAOArIAGgBIgBAUgAlpAXQgFgTgGgPIgMAiIAXAAIAAAAgAQSAWQgGgHAAgLQAAgJAGgIQAHgIALAAQAKAAAGAIQAGAHAAAJQAAALgGAHQgGAIgLAAQgKgBgHgGgAQYAEQAAATALAAQALAAAAgUQAAgRgLAAQgLAAAAASgANRAXIADgKIAEAFQADAEAGAAQAKAAAAgJQAAgHgKgBIgHABIABgEIgBgEIAHABQAHAAAAgGQAAgHgHAAQgFAAgFAFIgBAAIgBgBIgCgFQAIgFAHgBQAHAAAFADQAGAEAAAGQAAAHgHADQAJACAAAJQAAAHgHAFQgGAEgIAAQgKgBgGgFgAlIAWQgGgHAAgLQAAgJAGgIQAHgIALAAQAKAAAGAIQAGAHAAAJQAAALgGAHQgGAIgLAAQgKgBgHgGgAlCAEQAAATALAAQALAAAAgUQAAgRgKAAQgMAAAAASgAnNAWQgGgHAAgLQAAgJAGgIQAGgIALAAQALAAAGAIQAGAHAAAJQAAALgGAHQgHAIgKAAQgLgBgGgGgAnHAEQAAATAKAAQAMAAAAgUQAAgRgLAAQgLAAAAASgAomAWQgGgHAAgLQAAgJAGgIQAGgIALAAQAKAAAGAIQAGAHAAAJQAAALgGAHQgGAIgLAAQgKgBgGgGgAohAEQAAATALAAQAMAAAAgUQAAgRgLAAQgMAAAAASgA0GAXQACgFABgFIAEAFQADAEAGAAQAJAAAAgJQAAgHgJgBIgHABIABgEIgBgEIAHABQAHAAAAgGQAAgHgHAAQgFAAgFAFIgCAAIgBgBIgBgFQAIgFAHgBQAGAAAGADQAGAEAAAGQAAAHgHADQAJACAAAJQAAAHgHAFQgGAEgJAAQgJgBgGgFgARCADQAAgLAHgGQAGgHAMAAQAKAAAFAEIgDAKIgBAAQgCgJgJAAQgOgBAAAUQAAATAPABQAJAAADgHIACABIgBAGQgGAFgJAAQgYAAAAgZgAOuADQAAgLAHgGQAHgHALAAQALAAAEAEIgCAKIgCAAQgCgJgIAAQgOgBAAAUQAAATAPABQAIAAAEgHIABABIgBAGQgGAFgJAAQgYAAAAgZgAHHAXQgHgFAAgKQAAgOAQgFQgMgDAAgLQAAgJAGgEQAGgEAIAAQAUAAAAAPQAAAMgMAEIAAAAQAPADAAAOQAAAKgGAHQgHAFgKAAQgKAAgHgFgAHMAHQAAARAMAAQALAAAAgRQAAgQgLAAQgMAAAAAQgAHOgZQAAAMAKAAQAJAAAAgMQAAgOgJAAQgKAAAAAOgAEZADQAAgLAHgGQAHgHALAAQALAAAEAEIgCAKIgCAAQgCgJgIAAQgOgBAAAUQAAATAPABQAIAAAEgHIABABIgBAGQgGAFgJAAQgYAAAAgZgAgbADQAAgKAFgGQAFgIALAAQAIAAAFAGQAFAFAAAJIAAAEIgcAAQABAUAOAAQAFAAAGgDIgCAEQgHAEgGAAQgWAAAAgZgAgPAAIAPAAIAAgEQAAgPgHAAQgIABAAASgAkSAVQgGgGAAgMQAAgLAHgGQAGgHAMAAQAKAAAFAEQgCAFAAAFIgCAAQgCgJgJAAQgOgBAAAUQAAATAQABQAIAAADgHIACABIgBAGQgFAFgKAAQgMAAgGgHgA03ADQAAgKAFgGQAFgIALAAQAJAAAFAGQAFAFAAAJIAAAEIgdAAQABAUAOAAQAGAAAGgDIgCAEQgHAEgHAAQgWAAAAgZgA0rAAIAQAAIAAgEQAAgPgIAAQgIABAAASgAWSAbIgGABIABgUIgBgBIAAAAIgOAVIgGgBIgJABQAFgFAMgQQgMgBAAgLQAAgIAFgDQAFgFAHAAIAMACIAHgBIgBAcIABAUgAV/gGQAAAIAJAAQAEAAABgCIAAAAIAAgNIgGgBQgIAAAAAIgAVgAbIgGABIABgXIgIAAIgKAAIAAAXIgFgBIgHABIABgUIAAgFIgBgXIAHABIAFgBIAAATIAIAAIAKAAIgBgTIAGABIAGgBIAAAwgAUpAbIgGABIABgXIgIAAIgKAAIABAXIgGgBIgGABIAAgZIAAgXIAGABIAGgBIgBATIAIAAIAKAAIgBgTIAGABIAGgBIgBAVIABAbgATRAOQAAgLAOgDQANgCAAgDQAAgMgKABQgIAAgCAKIgBAAIgCgJQAGgHAKAAQARABAAARIAAATQAAAIAFAAIACAAIAAACQgEACgFAAQgIAAAAgHQgGAIgIAAQgNAAAAgOgAThAEQgFADAAAGQAAAJAHAAQAHgBABgGIABgOQgJABgCACgASkAaIAAgvIAGAAIAMAAQATAAAAALQAAAJgTACQAUACAAALQAAAOgTAAgASvAEIAAATIAHABQAJAAAAgKQAAgLgKAAgASvgRIAAARIAHAAQAHAAAAgJQAAgKgIAAIgGACgAPxAbIgHABIABgVIAAgTIgPABIABgEIgBgFIAcABIAMgBIAAAFIABAEIgNgBIgDAEIABAkgAN9AOQAAgLANgDQANgCAAgDQAAgMgJABQgJAAgBAKIgCAAIgCgJQAGgHALAAQARABAAARIAAATQAAAIAFAAIABAAIAAACQgDACgFAAQgIAAgBgHQgFAIgIAAQgNAAAAgOgAONAEQgGADAAAGQAAAJAIAAQAGgBACgGIAAgOIgKADgAMOAaIAAgvIAGAAIAMAAQATAAAAALQAAAJgTACQAUACAAALQAAAOgTAAgAMZAEIAAATIAHABQAJAAAAgKQAAgLgKAAgAMZgRIAAARIAHAAQAHAAAAgJQAAgKgIAAIgGACgALhAbIgGABIAAgXIgIAAIgKAAIABAXIgGgBIgGABIABgZIgBgXIAGABIAGgBIgBATIAJAAIAJAAIAAgTIAGABIAGgBIgBAVIABAbgAJjAbIgHABIABgWIAAgJQgLANgMASIgDgBIgEABIABgWIgBgaIAGABIAGgBIgBAeIAXgeIADABIAEgBIAAAYIAAAYgAIgAbIgGABIABghIAAgHIgPABIAAgEIAAgFIAMABIAcgBIAAAFIAAAEIgMgBIgDAEQAAAbABAJgAGcAbIgGABIABgUIgBgBIgPAVIgGgBIgJABQAFgFANgQQgMgBAAgLQAAgIAFgDQAEgFAHAAIANACIAHgBIgBAcIABAUgAGJgGQAAAIAJAAQADAAACgCIgBgNIgFgBQgIAAAAAIgAFtAbIgFABIgMggQgJAWgCAKIgFgBIgGABQALgVAJgbIAEA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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-143.2,-4.8,286.5,9.7), null);


(lib.u = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AAaA9IABgpIAAgqQgSAVgvA+IgOAAIAChKIgCgvQANABAOgBQgBAOAAAeIAAAoQAmgtAbgmIAOgBQgBAPAAA6QAAAgABAQIgbAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.u, new cjs.Rectangle(-5.3,-6.1,10.6,12.2), null);


(lib.t3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_3, new cjs.Rectangle(-83.4,-81.3,166.9,162.6), null);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-63.8,-14.5,127.7,28), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AHkAiQgIgIAAgOQAAgMAHgIQAHgIAMgBQALABAHAGQAGAHAAAKIAAAHQgGgBgJAAIgTAAIABADQAAAIAEAEQAFAGAHAAQAFAAAJgEIABABIgDAGQgIAFgJAAQgNAAgHgIgAHtAGIARAAIAAgCQAAgQgIABQgJAAAAARgAinAkIABgJIADAAQAFAJAIAAQAMAAAAgLQAAgLgMAAIgGABIABgFIgBgDIAGAAQAJAAAAgJQAAgIgJgBQgHAAgEAIIgCAAIAAgIQAJgFAGgBQAXAAAAAPQAAALgNABQAQADAAAMQAAAJgJAFQgHADgKAAQgMAAgHgGgAlTAiQgHgHAAgNQAAgOAHgIQAIgIANgBQAOABAHAHQAHAIAAANQAAANgHAIQgIAJgOAAQgMAAgIgIgAlKANQAAAXAMAAQALAAAAgZQAAgXgKABQgNgBAAAZgAmRAkIABgJIADAAIAFAGQADADAFAAQALAAAAgLQAAgLgLAAIgGABIABgFIgBgDIAGAAQAJAAAAgJQAAgIgKgBQgHAAgDAIIgCAAIAAgIQAIgFAHgBQAXAAAAAPQAAALgOABQARACAAANQAAAJgJAFQgIADgKAAQgLAAgHgGgAnJAlQgFgEAAgIQAAgMAQgFQAPgDAAgFQAAgIgLgBQgIAAgEAHIgCAAIgBgHQAIgIAMAAQAVAAAAARIAAAYIAAAIQABAFAFgBIAAAEIgLACQgHgBgCgHQgGAIgJAAQgIAAgEgFgAm5AOQgFADAAAHQAAAKAHAAQAIAAAAgRIAAgIQgIADgCACgADsAhQgHgIAAgNQAAgNAHgJQAIgIAOAAQAOAAAIAIQAHAIAAAOQAAANgIAIQgIAJgNAAQgOAAgIgJgAD1AMQAAAYANAAQANAAAAgYQAAgYgNAAQgNAAAAAYgAAeAhQgHgIAAgNQAAgNAHgIQAHgJAOAAQALAAAGAHQAGAHAAAKIAAAGIgBAAIgjAAQAAAXASgBQAKABAFgIIABABIgBAIQgHAFgNABQgNAAgIgJgAA7AGQAAgSgJAAQgGgBgDAIQgDAFAAAGIAVAAIAAAAgAFvAUIAAgkIAPAAIAAAdIABAMQABAHAHAAQAMAAAAgRIAAgJIgBgWIARAAIgBAZIABAfIgQAAIAAgIIAAAAQgHAJgLAAQgSAAAAgVgAjaApIgCgSIgDgTIgGAOIgIAXIgEgBIgGABIgBgBIgPgkIgEAlIgJAAIAJg5IAHABIAFgBQACAIAHAPIAHARIARgoIAHABIAEgBIADATIAHAmIgRAAgAGyAoIABgaIAAgIIgBgWIAQAAIgBAMIABAAQAGgNAKAAQADAAADABIAAAAQgDAJgBAEIgBABQgCgDgEAAQgLAAAAAVIABAYgAEuAoIAAgjIAAgOIAAgfIAfgBQAWAAAAAVQAAAQgLAEQgIAFgSAAIAAABIABAigAE+gjIAAAjIAEAAQAQAAAAgTQAAgQgOAAgADIAoIABgeQAAgKgBgCQgCgGgHAAQgLAAAAAPIAAAJIABAYIgQAAIABgaIAAgJQAAgNgJAAQgMAAAAAPIABAhIgQAAIABgaIAAgIIgBgWIAQAAIgBAIIABAAQAGgKAMAAQAMAAADALQAGgLAMAAQATABAAAUIAAAlgABXAoIAAg4IAQAAIgBAMIAAAAQAGgNALAAIAGABIgEANIgBABQgCgDgEAAQgIAAgCAHIgBAOIAAAYgAg+AoIAAhQIAgAAQAWgBAJAJQALAJAAAVQAAATgMALQgKAMgUAAgAgtghIAABBIALABQAdAAAAgjQAAgggbAAgAoNAoIAAhQIAfgBQAWAAAAAVQAAAQgLAEQgIAFgSAAIABAjgAn8gjIgBAjIAEAAQAQAAAAgTQAAgQgOAAg");
	this.shape.setTransform(-0.2,9.5,1,1,0,0,0,-0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CFB8").s().p("AJmA/QgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQADAEAAAGQAAAFgDAFQgEAEgGAAQgGAAgEgEgAIZAXIgLgSQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIAAAIQAAAbACAaIgaAAQABgaAAgaIAAgTQAAgagBgZQAMABAOgBQgCAYAAAZIAAAGIAEgBQAGgEAQgVIAWgcIATgBIABABQgQAQgdAhQASAeAfApIgBABQgQgBgOABQgJgQgRgagACoAXIgMgSQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIAAAIQAAAbACAaIgaAAQABgaABgaIAAgTQgBgagBgZQAMABAOgBQgCAYAAAZIAAAGIAFgBQAFgEARgVIAWgcIATgBIAAABQgQAQgdAhQATAeAeApIAAABQgRgBgNABQgKgQgQgagApWAXIgMgSQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIAAAIQAAAbABAaIgZAAIABg0IAAgTIgBgzQAMABANgBQgBAYAAAZIAAAGIAEgBQAKgHAiguIATgBIABABQgOAMgfAlQARAbAfAsIAAABQgRgBgNABgAE4BBQgFgSgJgbIgQgrQgVAzgMAlIgIgBIgHABQAohkAIgWIAHABIAHgBQAQAvAdBLgAhxBBQABgaAAgaIAAgTQAAgagBgZIAqAAQAjAAAAAZQAAAbgdAFIAAAAQAiACAAAbQgBAkgrAAgAhYA3IAKABQAVAAAAgbQAAgOgHgFQgFgFgPAAIgFAAgAhYgvIgBArIAGAAQAXAAAAgXQAAgVgWAAgAk3BBQABgaAAgbIAAgIIg2AAIAAAIIABA1IgaAAIABg1IAAgUIgBgxQANABANgBIgBAyIA2AAIAAgGQAAgWgBgWQANABANgBIgBAxIAAAUIABA1IgaAAgAG+BAIABgpIgBgqQgbAgglAzIgPAAIAChJQAAgbgCgVQANABAOgBQgBAOAAAeIAAAoQAogsAagnIAOgBQgCAPABA6QgBAgACAQIgbAAgABNBAIAAgpIAAgqQgbAggmAzIgOAAIAChJIgCgwQANABAOgBQgBAOgBAeIAAAoQAogsAagnIAOgBQgBAPAAA6QAAAgABAQIgaAAgAj8BAQACgPAAgfIAAg1QAAgLgCgLIAbAAQgBAPAAAQIAAASIAJAAQASAAANAIQAOAIAAARQAAAngnAAgAjiADIAAAxIAIABQALAAAFgJQAEgHAAgLQAAgKgFgGQgGgHgJAAgAm5BAIACgpIgBgqQgbAggmAzIgOAAIAChJQAAgbgCgVQANABAOgBQgBAOAAAeIAAAoQAngsAbgnIANgBQgBAPAAA6QAAAgABAQIgbAAgAJsAaQgBgVgFgaQgFgUgBgKQAAgPAQAAQAOAAAAAPQAAAGgCAJIgDAPQgEAWgCAZg");
	this.shape_1.setTransform(0,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-63.8,-14.5,127.7,28), null);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AgMA9QABgZAAgZIAAg8IghACIAAgNIAsABIAtgBIAAANIghgCIAAA6QAAAaABAaIgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t, new cjs.Rectangle(-4.5,-6.1,9.1,12.3), null);


(lib.p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AAbA9IABg5IAAgxIgKgBIgjAAIgKACIAAAgIAAAAIAAAQQAAAdABAcIgbAAIACg6QAAgqgCgVIAbAAIA1AAIAbAAIgCAoIAAASQAAAfACAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p, new cjs.Rectangle(-5.4,-6.1,10.8,12.3), null);


(lib.n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AAZA9QACgaAAgaIAAgIIg1AAIAAAIQAAAaACAaIgbAAQABgaABgaIAAgVQgBgYgBgYQAOABANgBQgCAWAAAWIAAAGIA1AAIAAgGQAAgWgCgWQAOABANgBIgBAwIAAAVIABA0IgbAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.n, new cjs.Rectangle(-5.2,-6.1,10.4,12.3), null);


(lib.more = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A50C35").s().p("Ao4BHIAAgNQgCgHgGgBIgcAAIghAAQgIABAAAOIAAAGIgEAAQgBgUgCgJIAKABQALgcAUg3QAFABAFgBQAKAfAUA0IAKgBQgCAJgBAUgApNAsQgIgZgOgnQgQAqgGAWIAsAAIAAAAgAoFAwIADgQIADAAQACAPANAAQAKAAAFgHQAEgHAAgJQAAgTgRAAIgGABIAAgGQAVABAAgVQAAgQgNAAQgMAAgCAOIgDAAIgEgLQAJgJAOAAQALAAAHAEQAJAHAAAKQAAASgUAEIAAABQAXACAAAUQAAAOgKAIQgKAHgOAAQgPAAgIgFgAACAoQgMgMAAgYQAAgVAMgMQANgMAXAAQAQAAAOAFIgEAPIgCAAQgEgOgTAAQgRAAgIANQgHAKAAAQQAAAoAiAAQAQABAIgLIABABIgBAKQgKAIgSgBQgWAAgNgMgAGOAsIgIAGIgDAAIABgmIAAgRIgBgsQAIABAIgBIgBAsIAAADIAAAAQAHgMAOAAQAOAAAGAKQAGAIAAAOQAAAOgHAKQgJAKgOAAQgNAAgIgIgAGSAXQAAAXAPAAQARAAAAgbQAAgZgQAAQgQAAAAAdgAJfAzIABgnIAAgQIgBgkIAuAAIAAAJQgJgBgUAAIAAAgQASAAAIgCIAAAJIgagBIAAAlQARAAAMgCIAAAKgAHcAyIgJABIAAhbIASAAIgBBSQAIABAIAAQANAAAFgBIAAhSIAIAAIAJAAIgBAkIABAuIAEABIAUAAIAIgCIAAgZIABgVIgCgjQAJABAJgBIAABbgAFhAzIgLgkIgNgjQgRAtgIAaIgFgBIgEABQAbhCAIgZIAEAAIAFAAQALAfAXA8gAEHAzIABgnIAAgQIgBgkIARAAIgBAkIAAAQIABAnIgRAAgADDAyIgJABIAAhbIAkABIAPgBIAAAEIAAAEIgjgBIAAAhIAKAAQANAAAJAFQAJAIAAAMQAAAagcAAgADKAGIABAmIAGAAQARAAAAgUQAAgIgEgFQgFgGgHAAgAB9AzIABgoIAAgFIgDABIgJAOIgTAeIgLgBIgJABIAAgBQAXgfAKgOQgXgDAAgVQAAgVAaAAIAeAAIAAA0IABAnIgRAAgAB+ACIgBgjIgGgBQgSAAAAARQAAASAVABIAEAAgAgmAzQACgPAAggIAAgUIgDADQggAmgUAaIgJAAIABgtQAAgegCgQQAGABAFgBQgCAQAAAeIAAASIABAAIA1hAIAKAAIAAAmQAAAjABASQgFgBgGABgAiDAzIgKgiIggAAIgLAiQgFgBgGABIAAgBQAUgqATgwIAKAAQATA2AOAkIAAABIgSAAgAiqALIAJAAIAHAAIAKAAIgMgigAkFAzIAAhbIAeAAQAaAAAAATQAAATgWAEQAZACAAAUQAAAbggAAgAj1AUIABAYIAIAAQASAAAAgUQAAgLgGgEQgFgDgLgBIgFAAgAj0ghIgBAhIAFAAQATAAAAgSQAAgQgSAAgAkkAzQgCgLgIgXIgfAAIgLAiIgLAAIgBgBIAohaIAJAAQAWA+AMAcIgBABIgSAAgAlLALIAJAAIASAAIgMgigAmAAzIABguIgrAAIAAAHIABAnIgRAAIAAhbQAIABAJgBIgBAmIArAAIgBgmQAJABAIgBIAABbIgRAAgAokAzIAAhbIASAAQgCASAAASIAAAQQAAATACAUIgSAAgAhWg6IACgMQAFAMAPAAQAQAAAEgMQAAAHACAFQgJAEgNAAQgLAAgLgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.more, new cjs.Rectangle(-65.3,-7.1,130.6,14.2), null);


(lib.mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask, new cjs.Rectangle(-150,-300,300,600), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#233340").s().p("AgUBIQgQgSAAgeQAAgdAQgRQAPgRAXAAQAYAAANAOQANAPAAAaIAAAJIhGAAQAAAWAIAOQAJAMARAAQAQAAANgLIgCAQQgSAMgTAAQgaAAgQgSgAADgRQgEALgBASIAnAAQgBgogRAAQgKAAgGALgAh8BIQgRgQAAgdQAAgdARgSQAQgTAbAAQAVAAAOAKIgFAPIgKgIQgIgDgJgBQgMACgIANQgHAMAAAYQAAAYAIAMQAJAMAQAAQANAAALgIIgDAQQgNAIgTAAQgaAAgPgRgAkKAtIAAhRIAfAAIAABOQAAAaAUAAQAUgBAAghIAAhGIAfAAIAAB7IgfAAIAAgTQgMAVgWAAQglAAAAgsgAE7BXIAAhMQAAgcgSAAQgUAAAAAjIAABFIgfAAIAAh7IAfAAIAAASQAOgVAVAAQAOAAAIAIQAMALAAAVIAABWgAC2BXIAAh7IAgAAIAAB7gABbBXIAAh7IAfAAIAAAfQAHgSAIgHQAIgIALAAIAFAAIgBAlQgGgEgIAAQgKAAgHAHQgHAIAAAKIAABDgAl5BXIAAiwIBaAAIAAARIg1AAIAAA6IAuAAIAAAQIguAAIAABDIA3AAIAAASgAFag5QgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFgAFdhRQgFAEAAAGQAAAIAFADQAEAFAGAAQAHAAAEgFQAFgEAAgHQAAgGgFgEQgEgFgHAAQgGAAgEAFgAC2g4IAAghIAgAAIAAAhgAFtg8IgGgJIgDAAIAAAJIgEAAIAAgVIAIAAQAIAAAAAGQAAAFgGAAIAHAKgAFkhIIADAAQAGAAAAgDQAAgEgFAAIgEAAg");
	this.shape.setTransform(2.1,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A50C35").s().p("AlQgoIKhAAIlRBQg");
	this.shape_1.setTransform(0.9,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-35.7,-13,75.6,30.6), null);


(lib.K1w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBWIgagoQgPgYgMgPQgFgGgJAAIAAAiQAAB/AGBpQg5gBg6ABQAHhtAAh2IAAhXQAAhygHhrQA6ADA5gDQgGBiAAB0IAAAZQALAAAFgDQAYgRBLhdQBBhQAdgsIBTgCIADADQhGBEiACTQBNB/CMC8IgCABQhNgCg4AFQgohGhIhxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.K1w, new cjs.Rectangle(-21.2,-26.9,42.3,53.8), null);


(lib.K1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AgjBWIgagoQgPgYgMgPQgFgGgJAAIAAAiQAAB/AGBpQg5gBg6ABQAHhtAAh2IAAhXQAAhygHhrQA6ADA5gDQgGBiAAB0IAAAZQALAAAFgDQAYgRBLhdQBBhQAdgsIBTgCIADADQhGBEiACTQBNB/CMC8IgCABQhNgCg4AFQgohGhIhxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.K1, new cjs.Rectangle(-21.2,-26.9,42.3,53.8), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.H1w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABwEMQAGhlAAiAIAAgjIhPgBIhUAAIhHABIAAAjQAACIAFBdQg6gCg6ACQAHhuAAh3IAAheQAAhugHhmQA6ADA6gDQgFBYAABoIAAAcIDqAAIAAgbQAAhggGhhQA6ADA6gDQgGBhAAB0IAABdQAAB9AGBoQg6gCg6ACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.H1w, new cjs.Rectangle(-22.7,-26.8,45.6,53.7), null);


(lib.H1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("ABwEMQAGhlAAiAIAAgjIhPgBIhUAAIhHABIAAAjQAACIAFBdQg6gCg6ACQAHhuAAh3IAAheQAAhugHhmQA6ADA6gDQgFBYAABoIAAAcIDqAAIAAgbQAAhggGhhQA6ADA6gDQgGBhAAB0IAABdQAAB9AGBoQg6gCg6ACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.H1, new cjs.Rectangle(-22.7,-26.8,45.6,53.7), null);


(lib.E1w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKEJIhLABQgrABggAFQAGhUAAiAIgBiMIgBhfQgBg3gDgpQBMAHAngBIAtAAQA0ABBFgHIAABGQhIgFhhgBIAACpIAzABQAfAABTgFIgDAjIADAhQhPgHghAAIg1ABIAAC8IAwAAQAYAAAlgCIA8gEIAABGQhAgHhDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.E1w, new cjs.Rectangle(-14.1,-27.1,28.3,54.3), null);


(lib.E1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AAKEJIhLABQgrABggAFQAGhUAAiAIgBiMIgBhfQgBg3gDgpQBMAHAngBIAtAAQA0ABBFgHIAABGQhIgFhhgBIAACpIAzABQAfAABTgFIgDAjIADAhQhPgHghAAIg1ABIAAC8IAwAAQAYAAAlgCIA8gEIAABGQhAgHhDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.E1, new cjs.Rectangle(-14.1,-27.1,28.3,54.3), null);


(lib.e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AACA9QgaAAgHABQABgYAAgYIAAggQAAghgBgKIAaACIAKAAQAOgBANgBIAAAQQgTgBgTgBIAAAnIALABIAagCIAAAIIAAAHIglgCIAAAsIAmgBIAAAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e, new cjs.Rectangle(-3.2,-6.2,6.5,12.4), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-36,-154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAGIgMgKIAQgDIAGgOIAHAOIAQADIgLAKIACAQIgOgIIgNAJg");
	this.shape.setTransform(47.4,6.5,0.877,0.877,0,0,0,0,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAHIgOgMIAUgDIAHgSIAIARIAUAEIgOAMIADATIgRgJIgQAKg");
	this.shape_1.setTransform(29.8,0.5,0.877,0.877,0,0,0,0.1,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAJIgSgQIAZgEIAKgXIALAXIAYADIgRARIAFAZIgXgLIgVAMg");
	this.shape_2.setTransform(51.8,-2.1,0.877,0.877,0,0,0,0.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAOIgagZIAjgFIAPghIAPAhIAkAFIgaAYIAHAkIgggQIgeARg");
	this.shape_3.setTransform(58.3,13.7,0.877,0.877,0,0,0,0.2,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWCZQhAgUgfg7Qggg7AUg/QAOgrAhgeQAhgdArgJQgSAYgJAdQgVBDAhA+QAgA+BEAVQAeAJAdgBQgfAegrALQgUAFgTAAQgYAAgXgHg");
	this.shape_4.setTransform(44.4,11.9,0.877,0.877,0,0,0,0.1,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.9).p("AE5AAQAAiBhchbQhchciBAAQiBAAhbBcQhcBbAACBQAACBBcBcQBbBcCBAAQCCAABbhcQBchbAAiCg");
	this.shape_5.setTransform(45,9.9,0.877,0.877,0,0,0,0.1,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9BCEB7").s().p("AjcDdQhchcAAiBQAAiBBchbQBbhcCBAAQCBAABcBcQBcBbAACBQAACChcBbQhbBciCAAQiBAAhbhcg");
	this.shape_6.setTransform(45,9.9,0.877,0.877,0,0,0,0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-36,-154,109.3,308), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-53,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-53,-176,106,352), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAhQgMgLALgMIArgrQAMgLALAMQAMAMgLALIgrAqQgGAGgFAAQgGAAgGgGg");
	this.shape.setTransform(-42.1,-89.4,0.838,0.838,0,0,0,-1,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAhQgMgMAMgLIAqgrQAMgLALAMQAMAMgLALIgrArQgGAFgGAAQgGAAgFgGg");
	this.shape_1.setTransform(-63.2,-68.8,0.838,0.838,0,0,0,-1.4,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAiIgrgrQgLgMAMgLQAMgMALALIArArQALAMgMALQgGAGgGAAQgFAAgGgFg");
	this.shape_2.setTransform(-42.1,-68.8,0.838,0.838,0,0,0,-1,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKAhIgqgqQgMgLAMgMQALgMAMALIArArQALAMgMALQgGAGgGAAQgFAAgGgGg");
	this.shape_3.setTransform(-63.2,-89.4,0.838,0.838,0,0,0,-1.4,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAQQgQAAAAgQQAAgPAQAAIA9AAQAQAAAAAPQAAAQgQAAg");
	this.shape_4.setTransform(-37.7,-79.3,0.838,0.838,0,0,0,-0.9,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAQQgQAAAAgQQAAgPAQAAIA9AAQAQAAAAAPQAAAQgQAAg");
	this.shape_5.setTransform(-67,-79.3,0.838,0.838,0,0,0,-0.8,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAfIAAg9QABgQAPAAQAQAAAAAQIAAA9QAAAQgQAAQgPAAgBgQg");
	this.shape_6.setTransform(-52.3,-64.3,0.838,0.838,0,0,0,-0.7,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAfIAAg9QABgQAPAAQAQAAAAAQIAAA9QAAAQgQAAQgPAAgBgQg");
	this.shape_7.setTransform(-52.3,-94,0.838,0.838,0,0,0,-0.7,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhLBMQgggfAAgtQAAgrAgggQAfgfAsgBQAtABAfAfQAgAggBArQABAtggAfQgfAfgtAAQgsAAgfgfg");
	this.shape_8.setTransform(-52.3,-79.3,0.838,0.838,0,0,0,-0.7,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.9).p("AE5AAQAAiAhchcQhbhciCAAQiBAAhbBcQhcBcAACAQAACCBcBbQBbBcCBAAQCBAABchcQBchbAAiCg");
	this.shape_9.setTransform(-52.2,-80.2,0.838,0.838,0,0,0,-0.7,-1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9BCEB7").s().p("AjcDdQhchbAAiCQAAiABchcQBbhcCBAAQCCAABbBcQBcBcAACAQAACChcBbQhcBciBAAQiBAAhbhcg");
	this.shape_10.setTransform(-52.2,-80.2,0.838,0.838,0,0,0,-0.7,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-34,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-78.9,-136,112.9,272), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AgnA9IABgvIgBhKIAbAAIgBAeIAAATIAJAAQARAAAMAIQAPAIAAARQAAAngnAAgAgNAAIAAAxIAJAAQAIAAAGgIQAEgIAAgKQAAgKgFgHQgGgGgIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bb, new cjs.Rectangle(-4,-6.1,8,12.2), null);


(lib.b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AgnA9QABgKAAglIAAg0IgBgWIAiACQAcgBAJgBIAAAHIAAAHIgtgCIAAAoIAKAAQASAAALAIQAOAJAAARQAAARgKAJQgLAJgQAAgAgNADIAAAuIAJAAQASAAAAgZQAAgKgFgGQgFgGgJAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b, new cjs.Rectangle(-4,-6.1,8,12.2), null);


(lib.A1w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB5EMQgRhGglh0IhagBIhWABQglBfgYBbQgbgCgsACIgCgCQB1kCBrkTIBOAAIBZELQAzCVAtB1IgBACQg9gCg9ACgAhdAmIA6ABIAeAAIA7gBQgmh7gchPQgjBQguB6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.A1w, new cjs.Rectangle(-24.4,-26.8,48.8,53.7), null);


(lib.A1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AB5EMQgRhGglh0IhagBIhWABQglBfgYBbQgbgCgsACIgCgCQB1kCBrkTIBOAAIBZELQAzCVAtB1IgBACQg9gCg9ACgAhdAmIA6ABIAeAAIA7gBQgmh7gchPQgjBQguB6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.A1, new cjs.Rectangle(-24.4,-26.8,48.8,53.7), null);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CFB8").s().p("AgIA8QgEgFAAgFQAAgGAEgEQAEgDAEAAQAGAAAEADQADAEAAAGQAAAFgDAFQgEAEgGAAQgEAAgEgEgAgCAYQgBgPgFgdIgFgdQAAgOANAAQAOAAAAAOQAAAJgFAUQgEAWgCAWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(-1.4,-6.4,2.8,12.8), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// E1
	this.instance = new lib.E1w();
	this.instance.parent = this;
	this.instance.setTransform(61.9,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:81.7,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// H1
	this.instance_1 = new lib.H1w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.8,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:30.8,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// K1
	this.instance_2 = new lib.K1w();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-14,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-19,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// A1
	this.instance_3 = new lib.A1w();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56.5,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-71.4,alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-27.1,157,54.3);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// !
	this.instance = new lib.Symbol();
	this.instance.parent = this;
	this.instance.setTransform(42.3,-0.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:82.3,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// b
	this.instance_1 = new lib.b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.7,-0.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:65.5,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// e
	this.instance_2 = new lib.e();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.3,-0.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:75.5,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// e
	this.instance_3 = new lib.e();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.3,-0.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:55.6,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// t
	this.instance_4 = new lib.t();
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.1,-0.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:45.9,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// bb
	this.instance_5 = new lib.bb();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.6,-0.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:32.8,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// t
	this.instance_6 = new lib.t();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2.5,-0.3);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:22.2,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// u
	this.instance_7 = new lib.u();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-11.1,-0.3);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:11.2,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// n
	this.instance_8 = new lib.n();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-21.9,-0.3);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-2.9,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// u
	this.instance_9 = new lib.u();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-32.3,-0.3);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-15.8,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// p
	this.instance_10 = new lib.p();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-43.1,-0.3);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-29.9,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// y
	this.instance_11 = new lib.y();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-52.7,0.2);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-42.7,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// z
	this.instance_12 = new lib.z();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-60.9,-0.3);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-54.1,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// e
	this.instance_13 = new lib.e();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-70.1,-0.3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:-66.8,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// n
	this.instance_14 = new lib.n();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-78.5,-0.3);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.7,-6.7,127.4,13.6);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// E1
	this.instance = new lib.E1();
	this.instance.parent = this;
	this.instance.setTransform(46.7,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:81.7,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// H1
	this.instance_1 = new lib.H1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.8,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:30.8,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// K1
	this.instance_2 = new lib.K1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-19,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// A1
	this.instance_3 = new lib.A1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-71.4,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.8,-27.1,156.7,54.3);


(lib.billet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.t3_3();
	this.instance.parent = this;
	this.instance.setTransform(0,-5.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,scaleX:1.05,scaleY:1.05},5).wait(10).to({regY:0,scaleX:0.9,scaleY:0.9},5).wait(1));

	// Слой_4
	this.instance_1 = new lib.billet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-174,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174,-175,348,350);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(247).to({_off:false},0).to({alpha:1},10).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_175 = new cjs.Graphics().p("EgXbBGUMAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_176 = new cjs.Graphics().p("EgXbA9aMAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_177 = new cjs.Graphics().p("EgXbA1cMAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_178 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_179 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_180 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_181 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_182 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_183 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_184 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(175).to({graphics:mask_graphics_175,x:0,y:450}).wait(1).to({graphics:mask_graphics_176,x:0,y:393}).wait(1).to({graphics:mask_graphics_177,x:0,y:342}).wait(1).to({graphics:mask_graphics_178,x:0,y:294}).wait(1).to({graphics:mask_graphics_179,x:0,y:216}).wait(1).to({graphics:mask_graphics_180,x:0,y:150}).wait(1).to({graphics:mask_graphics_181,x:0,y:96}).wait(1).to({graphics:mask_graphics_182,x:0,y:54}).wait(1).to({graphics:mask_graphics_183,x:0,y:24}).wait(1).to({graphics:mask_graphics_184,x:0,y:6}).wait(2).to({graphics:null,x:0,y:0}).wait(72));

	// billet
	this.instance_1 = new lib.billet_1("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-20,0.02,0.02,0,0,0,2.5,0);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(185).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:0},10,cjs.Ease.get(1)).wait(24).to({mode:"synched",loop:false},0).wait(39));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,286.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(185).to({_off:false},0).to({alpha:1},10).wait(63));

	// more
	this.instance_3 = new lib.more();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.7,258.8,1.35,1.34,0,0,0,0.5,0.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(205).to({_off:false},0).to({alpha:1},10).wait(43));

	// t2_2
	this.instance_4 = new lib.t3_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.4,189.7,2.018,2.018,0,0,0,0.2,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(195).to({_off:false},0).to({alpha:1},10).wait(53));

	// t2_1
	this.instance_5 = new lib.t2_1("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2.5,-244.3,1.399,1.399,0,0,0,0.1,-0.2);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(185).to({_off:false},0).wait(73));

	// final
	this.instance_6 = new lib.mask();
	this.instance_6.parent = this;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(175).to({_off:false},0).wait(83));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_135 = new cjs.Graphics().p("A3bXcMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_136 = new cjs.Graphics().p("EgXbAgWMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_137 = new cjs.Graphics().p("EgXbAoUMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_139 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_140 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_141 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_142 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_143 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(135).to({graphics:mask_1_graphics_135,x:0,y:-450}).wait(1).to({graphics:mask_1_graphics_136,x:0,y:-393}).wait(1).to({graphics:mask_1_graphics_137,x:0,y:-342}).wait(1).to({graphics:mask_1_graphics_138,x:0,y:-294}).wait(1).to({graphics:mask_1_graphics_139,x:0,y:-216}).wait(1).to({graphics:mask_1_graphics_140,x:0,y:-150}).wait(1).to({graphics:mask_1_graphics_141,x:0,y:-96}).wait(1).to({graphics:mask_1_graphics_142,x:0,y:-54}).wait(1).to({graphics:mask_1_graphics_143,x:0,y:-24}).wait(1).to({graphics:mask_1_graphics_144,x:0,y:-6}).wait(2).to({graphics:null,x:0,y:0}).wait(112));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-2.1,264.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(135).to({_off:false},0).to({_off:true},50).wait(73));

	// img2
	this.instance_8 = new lib.img2_1();
	this.instance_8.parent = this;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(135).to({_off:false},0).to({_off:true},50).wait(73));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_54 = new cjs.Graphics().p("EgXbBGUMAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EgXbA9aMAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EgXbA1cMAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_63 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_2_graphics_54,x:0,y:450}).wait(1).to({graphics:mask_2_graphics_55,x:0,y:393}).wait(1).to({graphics:mask_2_graphics_56,x:0,y:342}).wait(1).to({graphics:mask_2_graphics_57,x:0,y:294}).wait(1).to({graphics:mask_2_graphics_58,x:0,y:216}).wait(1).to({graphics:mask_2_graphics_59,x:0,y:150}).wait(1).to({graphics:mask_2_graphics_60,x:0,y:96}).wait(1).to({graphics:mask_2_graphics_61,x:0,y:54}).wait(1).to({graphics:mask_2_graphics_62,x:0,y:24}).wait(1).to({graphics:mask_2_graphics_63,x:0,y:6}).wait(83).to({graphics:null,x:0,y:0}).wait(112));

	// more
	this.instance_9 = new lib.more();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.7,258.8,1.35,1.34,0,0,0,0.5,0.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({_off:false},0).to({alpha:1},10).to({_off:true},54).wait(112));

	// t2_2
	this.instance_10 = new lib.t2_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0.4,189.7,2.018,2.018,0,0,0,0.2,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(72).to({_off:false},0).to({alpha:1},10).to({_off:true},64).wait(112));

	// box
	this.instance_11 = new lib.box3_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(279,14.9,1,1,50);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(62).to({_off:false},0).to({rotation:0,x:73,y:32},10,cjs.Ease.get(1)).to({_off:true},74).wait(112));

	// box
	this.instance_12 = new lib.box1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-245.8,43.5,1,1,-50,0,0,0.1,0.1);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(62).to({_off:false},0).to({regX:0,regY:0,rotation:0,x:-64,y:44},10,cjs.Ease.get(1)).to({_off:true},74).wait(112));

	// box
	this.instance_13 = new lib.box2_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-1.8,413.1,0.662,0.662,38.2,0,0,0.1,-0.1);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(57).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-2,y:-38},10,cjs.Ease.get(1)).to({_off:true},79).wait(112));

	// t2_1
	this.instance_14 = new lib.t1_1("single",14);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-2.5,-244.3,1.399,1.399,0,0,0,0.1,-0.2);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(54).to({_off:false},0).to({_off:true},92).wait(112));

	// bg
	this.instance_15 = new lib.bg();
	this.instance_15.parent = this;
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54).to({_off:false},0).to({_off:true},92).wait(112));

	// logo
	this.instance_16 = new lib.logo();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-2.1,264.2);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:1},10).to({_off:true},54).wait(194));

	// t1_2
	this.instance_17 = new lib.t1_2("synched",0,false);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-0.1,-179.1,1.34,1.34,0,0,0,0,-0.3);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).to({_off:true},59).wait(194));

	// t1_1
	this.instance_18 = new lib.t1_1("synched",0,false);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-2.5,-244.3,1.399,1.399,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},64).wait(194));

	// img1
	this.instance_19 = new lib.img1_1();
	this.instance_19.parent = this;
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({alpha:1},10).to({_off:true},54).wait(194));

	// bg
	this.instance_20 = new lib.bg();
	this.instance_20.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(258));

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
	this.instance.setTransform(150,300.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: 'F545D923124943708BEDF02568670695',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/billet.png", id:"billet"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"}
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
an.compositions['F545D923124943708BEDF02568670695'] = {
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