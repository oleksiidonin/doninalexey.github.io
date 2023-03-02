(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.dev1 = function() {
	this.initialize(img.dev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,202);


(lib.dev2 = function() {
	this.initialize(img.dev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,202);


(lib.holder1 = function() {
	this.initialize(img.holder1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,216);


(lib.holder2 = function() {
	this.initialize(img.holder2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,216);// helper functions:

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

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A2aiQMAs1AAAIAAEhMgs1AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsDBnIAAhKIAIAAIAAALQAJgNANAAQAKAAAJAIQAIAIAAAOQAAAOgIAIQgJAIgKAAQgNAAgJgMIAAAcgAr1ApQgGAHAAAJQAAAJAGAHQAGAGAJAAQAJAAAFgGQAGgGAAgKQAAgKgGgGQgGgGgIAAQgJAAgGAGgAygBnIAAhKIAJAAIAAALQAJgNANAAQAKAAAJAIQAIAIAAAOQAAAOgIAIQgJAIgKAAQgOAAgIgMIAAAcgAyRApQgGAGAAAKQAAAKAGAGQAGAGAIAAQAJAAAFgGQAGgGAAgKQAAgKgGgGQgGgGgIAAQgIAAgGAGgAE6BkIAAgPIguAAIgBAPIgHAAIAAgWIAGAAQAIgOAAgZIAAgKIAoAAIAAAxIAJAAIgCAWgAEaAsQAAAWgHAMIAfAAIAAgqIgYAAgAz5BkIAAgPIguAAIgCAPIgHAAIAAgWIAHAAQAHgOAAgZIAAgKIApAAIAAAxIAIAAIgBAWgA0aAsQAAAWgGAMIAeAAIAAgqIgYAAgAUgBOQgIgIAAgPIABgSIADgIIADgGQADgEADgCQAEgCAFgBIAfgHIACAHIgfAHQgIACgEAFQgEAGgBAIQAIgNAQAAQALAAAIAJQAIAIAAAMQAAAMgIAIQgJAJgMAAQgNAAgIgJgAUnArQgGAFAAAKQAAAJAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgJQAAgJgGgGQgGgHgJAAQgIAAgGAHgATKBOQgJgJAAgMQAAgMAJgJQAIgJAMAAQAOAAAJALIgFAFQgIgIgKAAQgIAAgGAGQgGAGAAAKQAAAKAGAGQAFAGAKAAQAJAAAIgIIAGAFQgKALgOAAQgMAAgIgJgASGBOQgIgIAAgNQAAgNAIgIQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgASMApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgHQgHgGgIAAQgJAAgGAGgAL0BOQgJgIAAgNQAAgNAJgIQAIgJANAAQANAAAIAJQAIAIAAANQAAANgIAIQgJAJgMAAQgNAAgIgJgAL6ApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgHQgHgGgIAAQgJAAgGAGgAIyBOQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAI4ApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAKAAAFgGQAGgGAAgKQAAgJgGgHQgGgGgJAAQgIAAgHAGgAmGBPQgIgJAAgNQAAgMAIgJQAIgJALAAQAMAAAIAJQAHAIAAAOIAAADIgtAAQABAIAFAFQAGAFAIAAQAKAAAIgIIAFAFQgJALgPAAQgMAAgIgIgAl/AoQgGAGAAAIIAkAAQAAgIgFgGQgEgFgJAAQgHAAgFAFgAn8BSQgGgFAAgIQAAgJAGgFQAHgFALAAQAKAAAHADIAAgCQAAgHgEgFQgFgEgHAAQgJAAgJAFIgCgHQAKgFAKAAQANAAAGAGQAGAGAAALIAAAiIgJAAIAAgIQgIAKgMAAQgJAAgGgFgAn1A8QgFADAAAGQAAAFAEADQAFADAGAAQAHAAAGgEQAGgFAAgGIAAgGQgKgCgHAAQgIAAgEADgAqBBOIAEgGQAKAHAJAAQAHAAADgCQAEgDAAgFQAAgEgDgDQgEgCgHAAIgIAAIAAgHIAIAAQAGAAADgDQAEgCAAgFQAAgEgEgCQgDgCgGAAQgKAAgHAGIgEgGQAJgIANAAQAJAAAGAFQAGAEAAAHQAAAJgKAEQALADAAALQAAAGgGAGQgGAFgLAAQgMAAgLgJgAxXBOQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAxRApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAKAAAFgGQAGgGAAgKQAAgJgGgHQgGgGgJAAQgIAAgHAGgAzeBOQgJgIAAgNQAAgNAJgIQAIgJANAAQANAAAIAJQAIAIAAANQAAANgIAIQgJAJgMAAQgNAAgIgJgAzYApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgHQgHgGgIAAQgJAAgGAGgA1mBOIAEgGQAJAHAKAAQAHAAADgCQAEgDAAgFQAAgEgEgDQgEgCgGAAIgIAAIAAgHIAIAAQAGAAADgDQADgCAAgFQAAgEgDgCQgEgCgFAAQgKAAgHAGIgEgGQAJgIANAAQAJAAAGAFQAFAEAAAHQAAAJgJAEQALAEAAAKQAAAHgHAFQgFAFgLAAQgMAAgLgJgAMpBVIABgH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");
	this.shape_1.setTransform(0.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-144.4,-15.5,289,31), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqHGiIADgaQAEACAGgBQARAAAJgSQALgagBhIIAAgiIB+AAIAACvIghAAIAAiTIg/AAIAAAPQAABPgOAeQgNAZgeAAQgJAAgNgCgAPuGiIAAgiIAiAAIAAAigAOUGiIAAh/IhcB/IgeAAIAAivIAfAAIAACAIBciAIAfAAIAACvgALLGiIg/hPIgcAcIAAAzIghAAIAAivIAhAAIAABYIBWhYIAoAAIhMBMIBPBjgAH0GiIAAhJIhXAAIAABJIggAAIAAivIAgAAIAABJIBXAAIAAhJIAgAAIAACvgAEiGiIAAh/IhdB/IgeAAIAAivIAgAAIAACAIBciAIAeAAIAACvgAAeGiIAAiSIg5AAIAAgdICTAAIAAAdIg6AAIAACSgAhpGiIAAhJIhYAAIAABJIggAAIAAivIAgAAIAABJIBYAAIAAhJIAfAAIAACvgAmcGiIAAivICHAAIAAAcIhoAAIAAAtIBcAAIAAAcIhcAAIAAAvIBpAAIAAAbgAq/GiIgTgqIhWAAIgSAqIghAAIBQiwIAdAAIBRCwgArdFcIgghGIgfBGIA/AAgAwQGiIAAivIBSAAQAeAAARAPQANANAAARQAAAagaANQAjAMABAfQgBAXgSANQgSAMgfAAgAvxGHIA1AAQAkAAgBgZQAAgXglAAIgzAAgAvxE9IAsAAQAiAAAAgYQAAgKgIgHQgIgFgQAAIguAAgAP2FrIgKhvIAAgJIAlAAIAAAJIgJBvgADSA+IARgVQAaAXAjABQAPgBAKgGQALgIgBgMQAAgagpABIgUAAIAAgZIAUAAQARAAALgHQAKgGAAgNQAAgLgKgGQgKgHgPAAQgeAAgVAUIgRgVQAdgaApAAQAcAAASANQASAOAAAUQAAAcgfANQAkAKAAAfQAAAWgSAPQgTAOgeAAQgwAAgfgdgAAlBYIAAiuICHAAIAAAcIhnAAIAAAtIBbAAIAAAbIhbAAIAAAuIBpAAIAAAcgAigBYIAAiuICIAAIAAAcIhpAAIAAAoIA0AAQAeAAASAOQASANAAAZQAAAagTAOQgSAOgfAAgAiBA8IArAAQAWABAJgGQAMgGAAgQQAAgagmAAIgwAAgAlaBYIAAiuIAhAAIAACugAk1kJQgagZAAgmQAAgmAbgaQAcgbApAAQApAAAbAbQAbAaAAAmQAAAlgbAaQgcAbgpAAQgqAAgbgbgAkcl1QgRASAAAbQAAAZARATQASASAbAAQAbAAARgSQARgSAAgaQAAgbgRgRQgSgTgbAAQgaABgSARgAIijxIgSgqIhWAAIgTAqIghAAIBQiwIAeAAIBQCwgAIEk2IgghHIgeBHIA+AAgAE6jxIAAhKIhXAAIAABKIggAAIAAivIAgAAIAABJIBXAAIAAhJIAgAAIAACvgABzjxIg2hOIgdAfIAAAvIgfAAIAAgvIgdgfIg2BOIgnAAIBIhlIhEhKIAnAAIBPBbIAAhbIAfAAIAABbIBQhbIAmAAIhEBKIBIBlgAmijxIAAh9Ig6BSIgBAAIg6hSIAAB9IgfAAIAAivIAiAAIA4BTIA4hTIAhAAIAACvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-104.1,-42,208.3,84), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvXFDQgPgRgFgOQgHgUAGgaQAShPBug1IAOgtQgeAighAEQgtAEgLgwQgMgwAig7QAeg2AlgfQAggaAbgDQATgCAMALQALALABARIASgkQADgHAFgCQAEgBAEAEQAJAJADARQADAVgJAWIghBTQgYA7gNAoQAugcAjgrIAAAAQAEgNALgFIALgQQACgEAEAAQADAAACAEQAEAMgNAZIgHALQgBAIAAAIQABAWAMgBQANgBAXgiQAYgjArhRIA6htQAEgHAHgCQAHgBAEAEQAIAIADAQQACAPgFASIgmCJQgSA8AlgGQASgDAVgcQAJgMAJgOQgCgTADgJQACgIAIgBQADgBADACQAFgKAHAIQAEAFAAAJQAKAMABANIABATQACAHAGAFQAHAFAGAAQATgCAaglQASgZAQghQgYAPgaADQgXADgTgOQgUgNgCgWQgBgKADgPQAFgYARgXQAfgsA4gGQAUgBATANQAPAMACAMQAJgUAHgLQAHgNAIAIQAJAIADASQADAUgJAXQgEAMgVArQgUAogGAUQgKAcACAQQADARAQgCQATgDAXgcQAUgbAPglQACgEADgBQADAAACADQADAFAAAKQAAAMgFANQgKAdgZAVQgaAYgaABQgaACgPgNQgPgMgDgVIACgFIgFAIQgaAwgmAEQgbADgUgXIgJgMQgJAMgLAKQgbAXgbADQgwAFgLgeQgMgiAghRIgFAAQhACVg3AGQgfADgHgYIgCgFQggAdg3AaQgaBVgWAvQggBEgiARQgHAEgIAAQgNAAgLgNgAvDDsQgWAyANANQAIAJAbgvQAdgyAXhGQg1AlgZA6gAs0h/QgPAAgcAeQgcAfgXAqQgWAqgBAjQgBAjATgBQAjgDAwhkQAYg0AEgfQAEgcgPAAIgBAAgAlHi/QgXABgZAiQgZAiAEAcQACAcAXgCQAOgCAPgMQASgPAMgZQALgYgCgSQgCgRgFgGQgEgEgIAAIgFAAgAhQASQgXgSAKgtQADgOAIgUQgHgBACgKQACgOAOgFIALgZQAag6AbgwQAGgLAGAKQAJAMADARQACASgHAQIgXA1IAHgCQArgNAXgJIAIgSQAUguARgdQAHgMAIAHQAJAIADARQADAUgJAWIgWA0QgQAlgGASQgJAdADAQQADARAQgDQAVgDAWgdQAVgbAMgjQACgFADAAQADAAACAEQAJAOgKAZQgLAegaAVQgaAUgbADQgkAEgOgZQgNgXAKgqQAEgPAHgUQgXAIgkALIgPAEQgaA8gSAwQgCAGgEAAQgCAAgEgCgADGgeQgOgYAKgsQAHgeAXguQAdg8AJgYQABgDADgDQAEgDADABQAFABAGAKQAFAIADAJQAFAVgTAsIAMgEQAMgCAHADQAIACAIAHIASAOQAIAJABASIABAJIAJgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgDAFgJACQgDAhgUAZQgcAkgwAEIgLABQgfAAgNgVgAEFiKQgOAegFAOQgIAYACAPQACAbAVgCQATgCAQgYQARgWAEgeIgNgFQgJgFgHgIQgIgKgCgJQgIACgHAFgAEzieQgFACgBAIQgCARAPAKIABABIABgeQgDgIgFAAIgBAAgAG5ghQgYgEgVgVQgXgYAAgnQAAglATgqQARgjAYgZQAbgbAcgEQAPgCAKADQAKAEALAMQAJAJAQANQAMAOABAdIAAAOIANgCQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBABQgGAIgKACQgHAsgYAoQgaAsghAOQgPAHgOAAIgLgBgAGyizQgRAmgDAlQgCAlAOAJQAPAKAYgUQAagVASgsQAMgcAGgYQgIgCgFgEQgNgHgKgOQgLgPgCgQQgcAdgQAjgAIHkFQgHACgBAOQgBANAFAMQAGALAJAHQAFgfgFgQQgDgMgGAAIgCAAgAKUhOQgOgXAKgsQAIghAdg4QAVgqgFgCQgIgBgeARQgkAWgYAfQgLANAAgRQABgRAGgGQAVgaAmgbQAogcAQABQASABALASQAMAUgJAYQgFANgUApQgTAogGASQgKAdAFATQAFATARgDQATgDAVgdQAQgVAOggIAAgCQAAgkAUgqQAQgjAZgZQAagbAcgFQAPgCAKADQAKAEAMAMQAIAJARANQAMAPAAAdIABAOIAMgDQAHAAgEAHQgGAIgLABQgGAsgYAoQgaAsghAOQgUAJgUgDQgZgEgUgVQgJgJgGgMQgLAWgUARQgaAXgcADIgKABQggAAgNgWgANUjeQgRAmgCAlQgDAlAOAJQAQAKAYgUQAZgVATgrQALgbAGgZQgIgDgFgEQgMgHgKgNQgLgPgCgQQgcAbgRAkgAOqkwQgIACgBAOQgBANAGAMQAFAMAJAGQAFgfgEgPQgEgNgGAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-100.7,-33.6,201.5,67.2), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArvFTQgOgQgFgOQgHgUAGgaQARhPBug2IAPgtQgeAjghADQguAFgLgwQgLgwAhg7QAfg2AkgfQAggbAcgDQASgCAMAMQAMAKABARIASgkQADgHAEgBQAFgCAEAEQAJAJACASQADAUgJAWIghBSQgYA9gNAnQAvgcAjgqIAAgBQAEgMALgHIAKgOQADgEADgBQAEAAABAFQAEAKgNAaIgGALIgBAQQAAAWAMgBQANgBAXgiQAYgjArhRIA6htQAEgHAHgCQAHgBAFAEQAIAIACAQQACAQgFARIglCJQgSA9AkgGQATgDAVgdQAJgMAIgPQgBgSACgIQADgJAIgBQADAAADABIAAAAQAFgKAGAIQAEAFAAAKQALAMABALIABAUQABAIAHAFQAGAFAHgBQATgCAaglQARgZARghQgaAQgYACQgYADgTgNQgTgOgCgVQgCgLADgPQAGgYAQgXQAggsA3gFQAVgCASANQAQAMACAMQAIgTAHgMQAIgNAHAIQAKAJACARQADAVgIAWIgaA4QgTAogHATQgKAcADAQQADASAQgDQATgDAWgdQATgaAPgkQACgFADgBQADAAADAEQACAFAAAKQAAAMgEAMQgLAcgYAWQgZAYgaACQgaABgQgNQgPgMgCgWIAFgOIgIASQgaAwgnAEQgbADgUgWIgJgMQgIALgMAKQgaAXgcADQgwAFgLgeQgMgiAhhRIgGAAQg/CWg3AFQgfAEgIgYIgBgGQggAdg3AaQgaBVgWAvQggBEgiARQgIAEgHAAQgNAAgMgNgArbD8QgVAyAMAOQAIAJAbgvQAdgzAYhGQg2AmgZA5gApLhvQgQABgbAdQgdAfgWArQgWAqgCAjQgBAjAUgCQAigDAwhkQAZg0ADgfQAEgcgOAAIgBAAgAhfivQgXACgZAiQgYAhADAcQADAcAXgCQANgCAPgMQATgPAMgZQAHgPABgPIAAgLQgCgSgFgFQgEgFgJAAIgEAAgACYAiQgYgTALgsQADgOAHgUQgGgBABgKQADgNAOgFIALgaQAZg5AbgxQAGgLAIAKQAJALACASQADASgIAQIgYA2QAxgNAagLIAHgSQAUgwARgcQAIgMAIAHQAJAIACARQADAUgIAXIgWA0QgQAlgGASQgJAdADAQQADAPAPgDQAVgCAWgcQAVgbAMgjQABgaAMgeQAYg8AqggQAmgdAcALQAaAMAQARQAKALgCAZQgDAbgRAYQgXAhgdAKQghAKgjgWQgLAsAMAbQAMAaAbgBQAlgCAjgiQAXgWAUgiQAIggAVgvQAUgwARgcQAIgNAHAIQAKAHACASQADAUgIAXIgXA0QgQAkgGATQgJAdADAQQAEAQAPgCQAVgDAWgdQAVgbAMgkQACgEADAAQADgBACAEQAKAOgKAZQgMAfgaAVQgZAVgcACQgkAEgOgZQgFgJgBgMQgPASgVAOQgiAXglAEQg9AHgZguIgFgLQgMAagXATQgZAUgcACQgkAEgOgYQgNgYAKgqQAEgPAHgTQgcAKgvANQgZA6gSAxQgCAHgEAAQgDAAgDgDgAIFjTQgfAfgRAsIgEALQAWALAWgOQAOgLAQgZQAOgWAGgUQAHgWgIgEQgCgCgDAAQgNAAgXAXgAKiklQgIgBgDgJQgDgIADgLQAEgKAIgGQAIgGAIACQAIADADAIQADAIgEAKQgCAJgJAHQgGAFgGAAIgEgBgALpksQgIgCgDgJQgDgIADgKQAEgLAIgGQAIgHAIADQAIACADAJQADAIgDAKQgEAKgIAHQgGAFgFAAIgFgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-77.5,-35.2,155,70.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AikDYIAAgeIhnAAIgCAeIgXAAIAAg0IAOAAQATgjAAg/IAAgUIBmAAIAAB2IASAAIgEA0gAjqBVQAAAwgQAfIBDAAIAAhfIgzAAgAIvCoQgWgVAAgfQAAgeAWgVQAWgVAhAAQAhAAAWAVQAVAVAAAeQAAAegVAVQgWAWghAAQgiAAgVgVgAJCBRQgOAOAAAVQAAAVAOAPQAOAOAWAAQAVAAAOgOQAOgPAAgVQAAgUgOgPQgOgOgVAAQgWAAgOAOgADRC2IAKgTQAJAFAJAAQANAAAKgQIg9hqIAdAAIAtBSIAohSIAcAAIg5BuQgRAhgdAAQgOAAgPgHgAm8CoQgWgVAAgfQAAgeAWgVQAWgVAhAAQAhAAAWAVQAVAVAAAeQAAAegVAVQgXAWghAAQghAAgVgVgAmpBRQgOAOAAAVQAAAVAOAPQAOAOAWAAQAVAAAOgOQAOgPAAgVQAAgUgOgPQgOgOgWAAQgVAAgOAOgAM+C6Igxg/IgXAXIAAAoIgaAAIAAiMIAaAAIAABHIBFhHIAgAAIg9A9IA/BPgAHXC6IAAg7IhGAAIAAA7IgaAAIAAiMIAaAAIAAA7IBGAAIAAg7IAZAAIAACMgABFC6IAAiMIA6AAQAZAAAPANQAPANAAAWQAAAWgRANQgQAMgZAAIgdAAIAAAtgABfB3IAeAAQAOAAAJgHQAIgHAAgLQAAgZgfAAIgeAAgAAGC6IgNghIhFAAIgPAhIgbAAIBBiNIAXAAIBACNgAgRCDIgZg4IgZA4IAyAAgAoVC6IAAh1IhEAAIAAB1IgZAAIAAiMIB3AAIAACMgAtcC6IAAiMIBBAAQAaAAAMANQAKAJAAAOQAAAVgVALQAdAJAAAZQAAASgPAKQgOAKgZAAgAtDClIArAAQAcAAAAgUQAAgTgeAAIgpAAgAtDBpIAjAAQAcAAAAgTQAAgSgaAAIglAAgAA+hNIAKgTQAJAFAJAAQANAAAKgQIg9hqIAdAAIAtBSIAohSIAcAAIg5BuQgRAhgdAAQgOAAgPgHgAhThbQgVgVAAgfQAAgeAVgVQAVgVAhAAQAhAAAXAWIgQASQgTgRgVAAQgVAAgOAOQgNAOAAAVQAAAVANAPQAOAOAVAAQAWAAATgSIAQAQQgYAZgiAAQgfAAgWgVgAmNhbQgWgVAAgfQAAgeAVgVQAWgVAhAAQAhAAAYAWIgRASQgTgRgWAAQgVAAgNAOQgOAOAAAVQAAAVAOAPQAOAOAUAAQAWAAAUgSIARAQQgYAZgjAAQggAAgVgVgAJ3hJIAAhmIhKBmIgYAAIAAiMIAZAAIAABnIBKhnIAYAAIAACMgAF/hJIAAiMIA5AAQAaAAAPANQAPANAAAWQAAAWgRANQgQAMgaAAIgdAAIAAAtgAGYiMIAeAAQAPAAAIgHQAJgHAAgLQAAgZggAAIgeAAgAFAhJIgPghIhFAAIgPAhIgaAAIBAiNIAYAAIBACNgAEoiAIgag4IgZA4IAzAAgAj4hJIAAiMIBsAAIAAAWIhSAAIAAAlIBJAAIAAAWIhJAAIAAAlIBTAAIAAAWgAnWhJIgyg/IgWAXIAAAoIgaAAIAAiMIAaAAIAABHIBFhHIAgAAIg9A9IA/BPgAp3hJIgPghIhFAAIgPAhIgaAAIBAiNIAYAAIBACNgAqPiAIgZg4IgZA4IAyAAg");
	this.shape.setTransform(0,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-86.1,-18.1,172.3,43.3), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnvBhIgegfIhlAAQgYAAgRgDQgUgFgMgMQgQgQAAgdIAAhZQAAgGADgCQAEgEAGAAIBxAAQAYAAAQAEQAVAEALALQARARABAfIAABUIAZAcQADADAAAFQAAAFgFAFQgEADgGAAIgBABQgEAAgEgEgAqwABQABAVAKAJIACACQAMAJAVAAIByAAIAAhMQAAgUgLgMIgCgCQgLgIgXAAIhxAAgAI3BDQgJAAgGgDQgKgDgGgGQgEgHgEgJQgFgJABgMIAAhxIABgDIAEgCIAGACIAAADIAABxQABAJADAHQACAGAEAFQAEAFAGABQAGAEAFAAIAeAAQAOAAAIgLQAHgKAAgQIAAhwIABgEIAFgCQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIACADIAABxQAAAMgCAIQgEAJgFAHQgFAGgHAEQgJADgKAAgALUBCQgNAAgLgEQgKgEgJgHQgGgIgEgKQgEgKAAgOIAAgzQAAgQAEgMQAFgKAGgIQAJgHAJgCQALgDANAAIAKAAQAOAAAKADQAKACAHAHQAHAIAEAKQAEALAAARIAAAzQAAAOgEAKQgEAKgGAIQgIAHgKAEQgKAEgOAAgAK0hNQgMAKAAAZIAAAzQAAAKADAIQAEAJAEAEQAGAHAIADQAIAEALAAIAKAAQALAAAIgEQAHgDAGgHQAGgFACgIQADgIAAgKIAAgzQAAgZgLgKQgMgLgUAAIgKAAQgVAAgLALgAGIBCQgFAAgDgDQgDgDAAgFIAAiRQAAgFADgCQADgDAFAAIAuAAQANAAALADQAKACAHAHQAHAIAEAKQAEALgBARIAAAzQABAOgEAKQgEAKgGAIQgIAHgJAEQgLAEgOAAgAGKA2IAsAAQAKAAAIgEQAIgDAGgHQAGgFACgIQACgIABgKIAAgzQgBgZgKgKQgMgLgUAAIgsAAgAB8BCQgNAAAAgMQABgLAMAAIA8AAQAiAAAJgGQAJgEAAgQIAAgBQAAgJgDgFQgEgFgOgCIgPgBIg8AAQgLAAABgMQgBgLAMAAIA3AAQATAAAIgFQAGgFAAgKIAAgFQAAgPgJgEQgJgEgcAAIg7AAQgNAAAAgMQAAgLANAAIA6AAQAvAAAPAKQAMAIAAAXIAAAKQAAATgIALQAQAKAAAbIAAABQAAAfgZAKQgQAGghAAgAiQBBIAAABQgfgBgPgKQgLgHgCgMIAAgDQgBgGAFgDQAEgCAFAAQAGAAADABQAEADABAEIABADQADAEAIADIATADIA9AAQAiAAAIgGQAJgEAAgQIAAgBQAAgMgGgEQgHgGgXAAIhQAAQgcAAgNgKQgMgKAAgXIAAgKQAAgVAPgJQASgLAuAAIAsAAQAkAAAQAJQAMAHACAOIAAACQAAAHgDACQgEAFgGAAQgGAAgDgEQgDgCgBgEIgCgCQgFgIgJgBQgIgCgUAAIguAAQgcAAgIAEQgJAEAAAPIAAAFQAAAKAHAFQAGAFATAAIBEAAQAkAAANAHQAUAKAAAeQAAAggaAKQgPAGghAAgAsRA/QgEgFAAgHIAAiKQAAgGAEgDQAEgEAGAAQAGAAAEAEQAEADAAAGIAACKQAAAHgEAFQgEADgGAAQgGAAgEgDgAlyBBQgpAAgTgLQgdgPAAgnIAAgiQAAgoAdgPQATgLApAAIAmAAQApAAATALQAcAPAAAoIAAAiQAAAngcAPQgTALgpAAgAmhhFQgNAKAAAaIAAAgQAAAYANALQANAJAZAAIA3AAQAaAAANgJQAOgLgBgYIAAggQABgagOgKQgNgIgaAAIg3AAQgZAAgNAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-79,-10,158,20.1), null);


(lib.holder2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder2();
	this.instance.parent = this;
	this.instance.setTransform(-24,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder2_mc, new cjs.Rectangle(-24,-108,48,216), null);


(lib.holder1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder1();
	this.instance.parent = this;
	this.instance.setTransform(-24,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder1_mc, new cjs.Rectangle(-24,-108,48,216), null);


(lib.dev2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev2();
	this.instance.parent = this;
	this.instance.setTransform(-54,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev2_mc, new cjs.Rectangle(-54,-101,108,202), null);


(lib.dev1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev1();
	this.instance.parent = this;
	this.instance.setTransform(-55,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev1_mc, new cjs.Rectangle(-55,-101,110,202), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("AgbguIA3AuIg3Av");
	this.shape.setTransform(10,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7AFIAAgJID3AAIAAAJg");
	this.shape_1.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-12.7,-6,27,12.1), null);


(lib.holder2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder2_mc();
	this.instance.parent = this;
	this.instance.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:10},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-108,48,216);


(lib.holder1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.holder1_mc();
	this.instance.parent = this;
	this.instance.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:10},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-108,48,216);


(lib.dev2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev2_mc();
	this.instance.parent = this;
	this.instance.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-10},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-101,108,202);


(lib.dev1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.dev1_mc();
	this.instance.parent = this;
	this.instance.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-10},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-101,110,202);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(35.1,-0.7,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:37.5},3,cjs.Ease.get(1)).to({x:35.1},2).wait(3).to({x:37.5},3,cjs.Ease.get(1)).to({x:35.1},2).wait(1));

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjKBAIAAgWIhKAAIgBAWIgRAAIAAgnIALAAQANgZAAgwIAAgOIBKAAIAABXIAMAAIgCAngAj8giQAAAjgMAYIAxAAIAAhHIglAAgACRApIABgPIAHABQAKAAAEgLQAGgQAAgqIAAgUIBIAAIAABoIgSAAIAAhYIglAAIAAAKQAAAugIASQgHAPgSAAIgMgCgAEUAqIAAhoIATAAIAABogABvAqIgLgaIgxAAIgLAaIgTAAIAuhpIARAAIAuBpgABdAAIgSgpIgSApIAkAAgAgfAqIAAhXIghAAIAAgRIBUAAIAAARIggAAIAABXgAikAqIAAhoIBOAAIAAAQIg7AAIAAAbIA0AAIAAARIg0AAIAAAbIA7AAIAAARg");
	this.shape.setTransform(-17.2,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("ApXCcIAAk3ISvAAIAAE3g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-15.6,120.1,31.2);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,279.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190));

	// btn
	this.instance_2 = new lib.btn("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,218.4,1,1,0,0,0,-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({mode:"synched",loop:false},0).wait(31));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,130);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},10).wait(34).to({alpha:0},10).wait(136));

	// bgImg2
	this.instance_4 = new lib.bgImg2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({alpha:0},10).wait(125).to({alpha:1},10).wait(1));

	// holder1
	this.instance_5 = new lib.holder2_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-37,-112);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).wait(20).to({startPosition:20},0).to({alpha:1,startPosition:30},10).wait(20).to({startPosition:50},0).to({alpha:0,startPosition:60},10).wait(20).to({startPosition:80},0).to({alpha:1,startPosition:90},10).wait(31));

	// dev1
	this.instance_6 = new lib.dev2_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(14,-63);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).wait(20).to({startPosition:20},0).to({alpha:1,startPosition:30},10).wait(20).to({startPosition:50},0).to({alpha:0,startPosition:60},10).wait(20).to({startPosition:80},0).to({alpha:1,startPosition:90},10).wait(31));

	// holder1
	this.instance_7 = new lib.holder1_1("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-177,-112);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).to({x:-37,mode:"synched"},15,cjs.Ease.get(1)).wait(121));

	// dev1
	this.instance_8 = new lib.dev1_1("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(206,-63);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).to({x:14,mode:"synched"},15,cjs.Ease.get(1)).wait(121));

	// t2_2
	this.instance_9 = new lib.t2_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.5,160);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).to({alpha:1},5).wait(20).to({alpha:0},5).wait(30).to({alpha:1},5).wait(31));

	// t2_1
	this.instance_10 = new lib.t2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.3,157.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({_off:false},0).to({alpha:1},5).wait(15).to({alpha:0},5).wait(30).to({alpha:1},5).wait(20).to({alpha:0},5).wait(36));

	// t1
	this.instance_11 = new lib.t1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1,94.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).to({alpha:1},15).wait(121));

	// bg
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(190));

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
	id: 'B12536D93F55493D883A9CFDBC1C5E1B',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/dev1.png", id:"dev1"},
		{src:"images/dev2.png", id:"dev2"},
		{src:"images/holder1.png", id:"holder1"},
		{src:"images/holder2.png", id:"holder2"}
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
an.compositions['B12536D93F55493D883A9CFDBC1C5E1B'] = {
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