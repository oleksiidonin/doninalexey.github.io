(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bubble2 = function() {
	this.initialize(img.bubble2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,326);


(lib.bubble3 = function() {
	this.initialize(img.bubble3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.bubble4 = function() {
	this.initialize(img.bubble4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,132);


(lib.iPhone = function() {
	this.initialize(img.iPhone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,332);// helper functions:

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
	this.shape.graphics.f("#000000").s().p("AFWCNIAEgJQAFACADAAQAEAAADgGIgWg1IANAAIAOAoIAOgoIAMAAIgUA3QgGAOgLAAQgHAAgGgDgADmCQIAAhFIAMAAIAAAJQAHgKAKAAQALAAAGAHQAIAIAAANQAAAMgIAIQgGAHgLAAQgKAAgHgJIAAAYgAD2BaQgFAEAAAIQAAAHAFAFQAFAFAGAAQAGAAAEgFQAFgFAAgHQAAgIgFgEQgEgFgGAAQgGAAgFAFgAgVCNIAAgNIgqAAIAAg1IAMAAIAAArIAWAAIAAgrIANAAIAAArIAHAAIgCAXgACqB5QgIgIAAgLQAAgMAIgIQAHgIANAAQALAAAJAIQAHAIABAMQgBALgHAIQgJAIgLAAQgNAAgHgIgACyBaQgEAEAAAIQAAAHAEAFQAFAFAHAAQAHAAAFgFQADgFAAgHQABgHgFgFQgFgFgGAAQgIAAgEAFgAAmB3QgKgLAAgPQAAgPAKgKQALgLAPAAQAQAAALALIgIAJQgJgJgKAAQgKAAgGAIQgHAHAAAKQAAALAHAHQAGAHAKAAQAKAAAKgJIAIAIQgLAMgRAAQgQAAgKgKgAh3B9QgGgEABgIQgBgRAWAAQAJAAAFACIAAgBQAAgMgNAAQgGAAgJAEIgDgKQAJgEALAAQAXAAAAAWIAAAfIgMAAIAAgGQgGAHgLAAQgIAAgFgEgAhxBwQAAAIAKAAQAGAAAEgDQAEgDAAgFIAAgDQgFgCgHAAQgMAAAAAIgAjvB9QgFgEgBgIQAAgRAWAAQAIAAAGACIAAgBQAAgMgNAAQgGAAgJAEIgDgKQAJgEALAAQAXAAAAAWIAAAfIgMAAIAAgGQgGAHgLAAQgIAAgFgEgAjoBwQAAAIAKAAQAFAAAFgDQADgDAAgFIAAgDQgFgCgHAAQgMAAABAIgAi/CAIABgKIAEABQAFAAADgHQACgJAAgcIAoAAIAAA1IgMAAIAAgqIgRAAQAAAbgEAJQgFAHgKAAgAExCAIAAgqIgQAAIAAgLIAuAAIAAALIgRAAIAAAqgACKCAIAAgqIgXAAIAAAqIgMAAIAAg1IAuAAIAAA1gAkOCAIAAg7IggAAIAAA7IgMAAIAAhGIA5AAIAABGgAlXCAIAAgOIANAAIAAAOgAlyCAIAAgjIgQAYIgQgYIAAAjIgMAAIAAg1IAMAAIARAZIAQgZIAMAAIAAA1gAg5AmIAFgJQAJAGAKAAQAQAAAAgRIAAgEQgGAKgMAAQgKAAgGgGQgIgIAAgKQAAgLAIgHQAGgHAKAAQALAAAHAJIAAgIIAMAAIAAApQAAAOgHAGQgGAHgPAAQgNAAgLgGgAgqgLQgFAFAAAGQAAAGAFAEQAEAEAGAAQAGAAAFgEQAFgEAAgGQAAgGgFgFQgFgEgGAAQgGAAgEAEgAsQArIAAgPIgxAAIgBAPIgLAAIAAgaIAHAAQAIgRAAgfIAAgKIAxAAIAAA6IAJAAIgCAagAsxgWQAAAXgIAQIAgAAIAAgvIgYAAgAK/AVQgIgIAAgLQAAgLAIgIQAIgIAMAAQAMAAAIAIQAIAIAAALQAAALgIAIQgIAIgMAAQgMAAgIgIgALIgJQgFAEAAAHQAAAHAFAFQAEAFAHAAQAHAAAEgFQAFgFAAgHQAAgGgFgFQgEgFgHAAQgHAAgEAFgAKHAVQgHgIAAgLQAAgLAHgIQAIgIAMAAQANAAAIAJIgIAIQgGgGgHAAQgGAAgFAFQgEAFAAAGQAAAHAEAFQAFAFAHAAQAHAAAGgHIAHAHQgIAKgNAAQgMAAgIgIgAITAWQgIgIABgMQAAgLAGgIQAIgIALAAQAMAAAHAJQAGAIAAALIAAADIgnAAQACANAOAAQAHAAAGgGIAHAGQgIAKgNAAQgLAAgIgHgAIygBQgBgOgMAAQgMAAgCAOIAbAAIAAAAgAHqAOIAAgbIgHAAIAAgLIAHAAIAAgOIALAAIAAAOIAPAAIAAALIgPAAIAAAZQABAGAGAAQAEAAAEgCIAAAKQgFADgGAAQgQAAABgPgAFzAWQgIgIAAgMQAAgLAHgIQAIgIALAAQAMAAAGAJQAHAIgBALIAAADIgmAAQABANAOAAQAIAAAGgGIAHAGQgIAKgNAAQgMAAgHgHgAGRgBQAAgOgMAAQgMAAgCAOIAaAAIAAAAgAE8AVQgIgIAAgLQAAgLAIgIQAHgIAMAAQANAAAIAJIgIAIQgHgGgGAAQgHAAgEAFQgEAFAAAGQAAAHAEAFQAEAFAIAAQAGAAAHgHIAHAHQgJAKgMAAQgMAAgHgIgADZAWQgIgIAAgMQgBgLAIgIQAIgIALAAQALAAAHAJQAHAIgBALIAAADIgnAAQADANANAAQAIAAAGgGIAHAGQgIAKgNAAQgMAAgHgHgAD4gBQgCgOgMAAQgMAAgCAOIAcAAIAAAAgAAOAYQgFgGgBgJIAAghIANAAIAAAdQgBANALAAQAMAAAAgNIAAgdIANAAIAAA0IgNAAIAAgIQgGAJgKAAQgJAAgEgFgAmfAZQgGgEABgIQgBgQAVAAQAKAAAFACIAAgBQAAgMgNAAQgGAAgJAEIgDgKQAJgEALAAQAXAAAAAWIAAAeIgMAAIAAgGQgGAHgLAAQgIAAgFgEgAmZAMQAAAIAKAAQAHAAADgDQAEgDAAgFIAAgDQgFgCgHAAQgMAAAAAIgAqPAZQgGgEAAgIQAAgQAVAAQAKAAAFACIAAgBQAAgMgNAAQgHAAgIAEIgEgKQAKgEALAAQAWAAAAAWIAAAeIgLAAIAAgGQgHAHgKAAQgIAAgFgEgAqJAMQAAAIAKAAQAGAAAEgDQAEgDAAgFIAAgDQgFgCgHAAQgMAAAAAIgAr2AWQgIgIAAgMQABgLAGgIQAIgIALAAQAMAAAGAJQAHAIAAALIAAADIgmAAQABANANAAQAIAAAHgGIAHAGQgJAKgNAAQgMAAgHgHgArXgBQgBgOgNAAQgMAAgBAOIAbAAIAAAAgACsAdIgWg1IAOAAIANAmIAPgmIAMAAIgVA1gAhxAdIgNgkIgLAkIgLAAIgRg1IAMAAIALAkIAMgkIAKAAIALAkIALgkIAMAAIgRA1gAjGAdIgMgkIgLAkIgLAAIgRg1IAMAAIAKAkIAMgkIALAAIALAkIALgkIAMAAIgRA1gAkbAdIgLgkIgMAkIgLAAIgRg1IANAAIALAkIALgkIAKAAIAMAkIALgkIALAAIgRA1gApfAcIABgKIAEABQAFAAACgHQADgJAAgbIAnAAIAAA0IgLAAIAAgpIgRAAQAAAagFAJQgDAHgKAAgAM/AcIAAgdQAAgNgLAAQgLAAAAANIAAAdIgMAAIAAgdQAAgNgKAAQgMAAAAANIAAAdIgMAAIAAg0IAMAAIAAAIQAHgJAJAAQAMAAADAKQAIgKAKAAQASAAAAAUIAAAhgAJpAcIAAgOIAOAAIAAAOgAJKAcIAAg0IAMAAIAAAMQAGgNAMAAIAAANIAAAAQgSAAAAAUIAAAUgAHNAcIAAgdQAAgNgMAAQgLAAgBANIAAAdIgLAAIAAg0IALAAIAAAJQAHgKAKAAQATAAAAAVIAAAggAEQAcIAAg0IAMAAIAAAMQAEgNAOAAIAAANIgBAAQgRAAAAAUIAAAUgACAAcIAAg0IAMAAIAAA0gABkAcIAAhIIAMAAIAABIgABHAcIAAhIIAMAAIAABIgAhTAcIAAgOIAOAAIAAAOgAm8AcIAAgVIgXAAIAAAVIgMAAIAAg0IAMAAIAAAWIAXAAIAAgWIAMAAIAAA0gAoYAcIAAg0IALAAIAAA0gAq2AcIAAgpIgRAAIAAgLIAuAAIAAALIgQAAIAAApgACAggIAAgLIAMAAIAAALgAoZggIAAgLIANAAIAAALgApBg6IAAgNIglAAIgBANIgKAAIAAgXIAGAAQAGgMAAgYIAAgHIApAAIAAArIAHAAIgCAXgApahqQAAAPgFAKIAWAAIAAggIgRAAgAr2g6IAAgNIgqAAIAAg1IAMAAIAAArIAWAAIAAgrIAMAAIAAArIAHAAIgBAXgAN7hQQgJgKABgQQgBgPAJgKQAJgLANAAQANAAAJALQAIAKAAAPQAAAQgJAKQgIAKgNAAQgOAAgIgKgAOEh7QgFAHAAAKQAAALAFAHQAFAHAIAAQAIAAAEgHQAGgHAAgLQAAgKgGgHQgFgIgHAAQgIAAgFAIgAL4hQQgJgKAAgQQAAgPAJgKQAIgLANAAQANAAAKALQAHAKABAPQAAAQgJAKQgIAKgOAAQgOAAgHgKgAMBh7QgFAHgBAKQABALAFAHQAFAHAHAAQAJAAAEgHQAFgHAAgLQAAgKgFgHQgFgIgIAAQgIAAgEAIgAJghLQgIgGAAgJQAAgLANgGQgLgGAAgKQABgIAGgFQAHgGAKAAQALAAAHAGQAGAFABAIQgBALgJAFQAMAGAAALQAAAJgIAGQgGAFgNAAQgLAAgHgFgAJkhbQAAALAOAAQAPAAAAgLQAAgKgPAAQgOAAAAAKgAJpiBQgDADAAAEQAAALAMAAQANAAAAgLQAAgEgEgDQgDgDgGAAQgFAAgEADgAIZhQQgHgKgBgQQAAgPAJgKQAIgLAOAAQAMAAAJALQAJAKAAAPQAAAQgJAKQgIAKgNAAQgOAAgJgKgAIih7QgEAGAAALQAAALAFAHQAFAHAIAAQAHAAAFgHQAFgHAAgLQAAgKgFgHQgFgIgHAAQgIAAgGAIgAHAhLQgHgGAAgJQAAgLANgGQgLgGABgKQgBgIAIgFQAHgGAJAAQALAAAHAGQAHAFAAAIQAAALgLAFQANAGAAALQAAAJgHAGQgIAFgMAAQgLAAgIgFgAHFhbQAAALAOAAQAQAAgBgLQABgKgQAAQgOAAAAAKgAHLiBQgDADgBAEQABALALAAQANAAAAgLQAAgEgEgDQgDgDgGAAQgFAAgDADgAF7hQQgIgKAAgQQgBgPAJgKQAJgLAMAAQAOAAAIALQAJAKAAAPQAAAPgJALQgIAKgOAAQgNAAgIgKgAGEh7QgFAHAAAKQAAALAFAHQAFAHAHAAQAJAAAEgHQAFgHAAgLQAAgKgFgHQgEgIgJAAQgHAAgFAIgAEbhOQgJgIAAgLQAAgMAJgIQAHgIAMAAQANAAAHAIQAJAIgBAMQABALgJAIQgIAIgMAAQgMAAgHgIgAEjhtQgFAEAAAIQAAAHAFAFQAFAFAGAAQAIAAAEgFQAEgFABgHQgBgHgEgFQgFgFgHAAQgHAAgEAFgAB5hQQgJgKAAgQQAAgPAJgKQAIgLANAAQANAAAKALQAHAKABAPQgBAQgHAKQgJAKgOAAQgNAAgIgKgACCh7QgFAGAAALQAAALAFAHQAFAHAHAAQAIAAAGgHQAEgHAAgLQAAgKgFgHQgEgIgJAAQgHAAgFAIgAgKhQQgJgKAAgQQAAgPAJgKQAIgLANAAQANAAAJALQAIAKAAAPQAAAQgIAKQgJAKgNAAQgNAAgIgKgAgBh7QgFAGABALQgBALAFAHQAEAHAIAAQAIAAAFgHQAFgHAAgLQgBgKgFgHQgEgIgIAAQgIAAgEAIgAjZhQQgJgKAAgQQAAgPAJgKQAIgLAOAAQANAAAJALQAIAKAAAPQAAAQgIAKQgJAKgNAAQgOAAgIgKgAjQh7QgFAGABALQgBALAFAHQAFAHAIAAQAIAAAFgHQAFgHAAgLQgBgKgFgHQgEgIgIAAQgIAAgFAIgAlhhQQgIgKAAgQQAAgPAIgKQAJgLAOAAQAMAAAJALQAJAKgBAPQAAAQgIAKQgJAKgNAAQgNAAgJgKgAlYh7QgEAHAAAKQAAALAEAHQAGAHAIAAQAHAAAFgHQAFgHAAgLQAAgKgFgHQgFgIgIAAQgHAAgGAIgAm9hOIAGgIQAHAHAJAAQAKAAgBgIQABgGgLAAIgGAAIAAgJIAGAAQAJAAAAgHQAAgGgJAAQgIAAgGAFIgGgHQAKgIAMAAQAJAAAFAEQAGAEAAAGQAAAIgJAEQAKADAAAKQgBAHgFAFQgGAEgKAAQgNAAgJgIgAoKhOQgIgIAAgLQAAgMAIgIQAHgIANAAQALAAAJAJIgHAIQgFgGgIAAQgNAAgCAMIAUAAIAAAJIgUAAQACANANAAQAHAAAHgGIAHAHQgIAJgNAAQgMAAgIgIgAM1hHIAAgKIAYgUQANgLAAgIQAAgLgLAAQgIAAgIALIgJgHQAKgPAQAAQAJAAAHAGQAGAGAAAJQABAIgFAGQgDAFgLAIIgOAMIAhAAIAAALgAKxhHIAAgKIAZgUQAMgLAAgIQAAgLgLAAQgIAAgIALIgJgHQAKgPAQAAQAKAAAHAGQAGAGAAAJQAAAIgFAGQgDAFgKAIIgOAMIAhAAIAAALgAKYhHIAAgOIAOAAIAAAOgAH6hHIAAgOIANAAIAAAOgAD6hHIAAgqIgWAAIAAAqIgNAAIAAg1IAwAAIAAA1gAAyhHIAAgKIAZgUQANgLgBgIQABgLgLAAQgJAAgIALIgJgHQALgPAPAAQAKAAAHAGQAGAGAAAJQAAAIgFAGQgDAFgKAIIgOAMIAhAAIAAALgAhQhHIAAgKIAYgUQANgLAAgIQAAgLgLAAQgIAAgIALIgJgHQAKgPAPAAQALAAAGAGQAHAGgBAJQAAAIgEAGQgDAFgLAIIgOAMIAhAAIAAALgAhohHIAAgOIAMAAIAAAOgAiXhHIAfg7IgjAAIAAgLIAxAAIAAAJIggA9gAj5hHIAAgOIANAAIAAAOgAkVhHIAAg6IgNAEIgCgKIASgGIAJAAIAABGgAoqhHIAAg1IALAAIAAA1gAqkhHIAAgSIgKAAIgMASIgPAAIAPgUQgNgDAAgMQAAgIAGgFQAGgFAJAAIAbAAIAAA1gAq6hqQAAAIAKAAIAMAAIAAgQIgMAAQgKAAAAAIgArfhHIAAg1IALAAIAAA1gAs3hHIgQgWIgIAJIAAANIgMAAIAAg1IAMAAIAAAaIAXgaIAOAAIgVAXIAXAegAtzhHIgGgRIghAAIgIARIgMAAIAehGIAMAAIAfBGgAt+hjIgMgcIgMAcIAYAAgAoriEIAAgLIANAAIAAALgArgiEIAAgLIANAAIAAALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-94.3,-14.4,188.6,28.9), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ARTFiQgigfAAgwQABgvAhggQAhghAxAAQAyAAAgAhQAiAgAAAvQgBAvghAgQghAhgxAAQgxAAghghgAR9DpQgQARABAZQAAAZAPARQAQARAYAAQAZAAAQgRQAPgRgBgZQAAgZgPgRQgQgRgYAAQgZAAgPARgAiLFkQgfgfABgyQAAgvAdggQAeghAuAAQAyAAAaAiQAbAigBAxIAAAQIiTAAQAEAUAOALQANALAUAAQAeAAAWgWIAiAfQggAog3AAQgvAAghgfgAgTECQgDgVgMgMQgLgNgTAAQgTAAgMAMQgMAMgDAWIBbAAIAAAAgAqJFiQgggfgBgwQAAgvAiggQAhghAxAAQAyAAAgAhQAhAgAAAvQAAAvghAgQgiAhgwAAQgxAAgighgApfDpQgPARAAAZQAAAYAQASQAPARAZAAQAZAAAPgRQAQgRgBgZQABgYgRgSQgPgRgYAAQgaAAgPARgAOcF+IAAjXIA8AAIAAAsQAVgxAvABIAABAIgDAAQgfAAgRATQgRATAAAmIAABPgAKZF+IAAkYIBxAAQAxAAAdAbQAdAbgBArQABAvggAaQggAagxAAIguAAIAABUgALWDzIAwAAQAXAAANgMQAMgLAAgUQAAgUgMgMQgOgLgXAAIgvAAgAGeF+IAAjcIgwAMIgNgyIBQgYIAqAAIAAEagAD2F+IAAjcIgwAMIgMgyIBPgYIAqAAIAAEagAkQF+IAAh4QAAgVgKgLQgJgLgSAAQgSAAgKALQgJAKgBAWIAAB4Ig8AAIAAjXIA8AAIAAAfQAbgjAkAAQAiAAATAWQATAUAAAmIAACLgAsQF+IAAh4QAAgVgKgLQgJgLgSAAQgRAAgKALQgLAKAAAWIAAB4Ig8AAIAAkkIA8AAIAABsQAbgjAkAAQAiAAATAWQATAUAAAmIAACLgAyaF+IAAkYIByAAQAwAAAdAbQAdAbAAArQAAAvggAaQgfAagxAAIgvAAIAABUgAxdDzIAwAAQAYAAAMgMQANgMAAgTQAAgUgOgMQgNgLgXAAIgvAAgA0WF+IAAjXIA9AAIAADXgA0YCQIAAg2IBAAAIAAA2gANZgRIAAi4Ih5C4Ig6AAIAAkYIA9AAIAAC3IB6i3IA5AAIAAEYgAI7gRIgZg/Ih3AAIgZA/Ig+AAIB3kaIA4AAIB4EagAILiGIglhbIgkBbIBJAAgABUgRIAAkYICCAAQAvAAAaAZQASATABAdQAAAoglAUQAaALANAQQANAQAAAbQAAAmgcATQgcAUgwAAgACQhHIBJAAQArAAAAgfQAAgfgtAAIhHAAgACQi4IA4AAQAsAAAAgeQABgOgLgIQgKgHgTAAIg9AAgAgWgRIgZg/Ih2AAIgZA/Ig/AAIB4kaIA4AAIB3EagAhFiGIglhbIglBbIBKAAgAnTgRIAAkYIByAAQAyAAAcAbQAcAbAAArQAAAvgfAaQggAagxAAIguAAIAABUgAmVicIAwAAQAXAAAMgMQAOgMAAgTQAAgUgOgMQgOgLgWAAIgvAAgArAgRIAAkYIDCAAIAAA3IiGAAIAADhgAtAgRIAAi4Ih5C4Ig7AAIAAkYIA9AAIAAC3IB7i3IA4AAIAAEYgA0SgRIAAkYICBAAQAvAAAZAZQATATAAAdQAAAogkAUQAaALANAQQANAQAAAbQAAAmgbATQgdAUgwAAgAzXhHIBJAAQArAAAAgfQAAgfgtAAIhHAAgAzXi4IA4AAQAtAAgBgeQAAgPgKgHQgKgHgTAAIg9AAgALylOQgTgRgDgcIAjgHQAJAbAXAAQAXAAAIgbIAjAHQgDAcgSARQgSAQgbAAQgbAAgSgQg");
	this.shape.setTransform(130.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,-38.7,260.9,77.4), null);


(lib.iPhone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.iPhone();
	this.instance.parent = this;
	this.instance.setTransform(-115,-166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.iPhone_1, new cjs.Rectangle(-115,-166,230,332), null);


(lib.gulliver_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gulliver_logo, new cjs.Rectangle(-99,-26.9,198.1,53.8), null);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.498,1],-92.5,0,92.5,0).s().p("EgOcAsiMAAAhZDIc5AAMAAABZDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-92.5,-284.9,185,570), null);


(lib.eldorado_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D22E2F").s().p("AEbBPIAAiHIB8AAIAAgWIALAAIAAAWIAWAAIAAALIgWAAIAAB8gAEmBEIBxAAIAAhxIhxAAgADFA0QgJgDgGgGQgGgGgDgJQgEgIAAgJQAAgJAEgHQADgJAGgGQAGgGAJgDQAJgDAJAAQAJAAAJADQAJADAGAGQAGAGADAJQAEAHAAAJQAAAJgEAIQgDAJgGAGQgGAGgJADQgJADgJAAQgJAAgJgDgADOgJQgFABgDAEQgDADgCADQgCAFAAAEQAAAGACAEIAFAGQADAEAFACQAEABAFAAQAFAAAEgBQAFgCADgDQADgEACgEQACgEAAgFQAAgFgCgEQgCgDgDgDQgDgEgFgBQgEgCgFAAQgFAAgEACgAirA0QgJgDgGgGQgGgGgDgJQgEgIAAgJQAAgJAEgHQADgJAGgGQAGgGAJgDQAJgDAJAAQAJAAAJADQAJADAGAGQAGAGADAJQAEAHAAAJQAAAJgEAIQgDAJgGAGQgGAGgJADQgJADgJAAQgJAAgJgDgAiigJQgFABgDAEQgDADgCADIgCAJQAAAGACAEIAFAGQADAEAFACQAEABAFAAQAKAAAHgGQADgEACgEQACgEAAgFQAAgFgCgEQgCgDgDgDQgDgEgFgBQgEgCgFAAQgFAAgEACgABUA2IAAhVIAdAAQALAAAJADQAIADAGAGQAGAGADAHQADAHAAAKQAAAKgDAHQgCAHgGAGQgFAEgGAEQgKAFgMAAgABqAjIAFAAIAJgBQAGgBAEgEIAEgHQACgEAAgHQAAgGgBgFQgCgEgDgDQgEgDgFgCIgJAAIgGAAgAAyA2IgGgRQgHACgIAAQgIAAgHgCIgBACIgGAPIgWAAIAghVIAYAAIAgBVgAAUAUIAJABIAJgBIgJgZgAgsA2IgPgbIgGAAIgFAAIgDgBIAAAcIgVAAIAAhVIAhAAIALABIAGABQAGACAEAFQADAEACAGIABAJIAAAGIgDAGIgDAGIgGAEIgBABIAVAigAhJAIIAIABIAGAAIAFgCIAEgEQABgCAAgCIAAgBQAAgEgBgCQgCgCgDgBIgJgBIgJAAgAkdA2IAAhVIAdAAQALAAAJADQAIADAGAGQAGAGADAHQADAHAAAKQAAAKgDAHQgCAHgGAGQgFAEgGAEQgKAFgMAAgAkHAjIAFAAIAJgBQAGgBAEgEQADgDABgEQACgEAAgHQAAgGgBgFQgCgEgDgDQgEgDgFgCIgJAAIgGAAgAlnA2IAAhVIAWAAIAABCIAlAAIAAATgAm3A2IAAhVIA7AAIAAATIglAAIAAANIAkAAIAAATIgkAAIAAAPIAlAAIAAATgAE/AfQgDgBgCgCIgEgFQgCgEAAgFIAAgYIALAAIAAAaQAAADACACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIACAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCAAgDIAAgaIALAAIAAAYQAAAFgCAEIgDAFQgDACgDABQgDACgEAAQgEAAgDgCgAF9AgIgDgIIgIABIgHgBIgDAIIgMAAIARgqIAMAAIAQAqgAFuAQIAEAAIAFAAIgFgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.eldorado_logo, new cjs.Rectangle(-44,-7.9,88,15.8), null);


(lib.bubble4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bubble4();
	this.instance.parent = this;
	this.instance.setTransform(-66,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble4_mc, new cjs.Rectangle(-66,-66,132,132), null);


(lib.bubble3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bubble3();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble3_mc, new cjs.Rectangle(-100,-100,200,200), null);


(lib.bubble2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bubble2();
	this.instance.parent = this;
	this.instance.setTransform(-163,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble2_mc, new cjs.Rectangle(-163,-163,326,326), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9BBAFD","#B4D3FF"],[0,1],-143.6,248.7,143.6,-248.7).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bubble4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bubble4_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-20},50,cjs.Ease.quadInOut).to({x:0},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-66,132,132);


(lib.bubble3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bubble3_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-20},40,cjs.Ease.quadInOut).to({x:0},40,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.bubble2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bubble2_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:50},59,cjs.Ease.quadInOut).to({x:0},61,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163,-163,326,326);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:25});

	// timeline functions:
	this.frame_506 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(506).call(this.frame_506).wait(1));

	// eldorado_logo
	this.instance = new lib.eldorado_logo();
	this.instance.parent = this;
	this.instance.setTransform(92.5,-278.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(492));

	// gulliver_logo
	this.instance_1 = new lib.gulliver_logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.5,-267.5,0.681,0.681,0,0,0,-0.1,-0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},15).wait(492));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,280);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},15).wait(492));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-278.5,-166.1,0.985,0.984,0,0,0,130.4,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({x:-0.5},10,cjs.Ease.get(1)).wait(482));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoiYpQjJAAAAjIMAAAgrBQAAjIDJAAIRFAAQDIAAAADIMAAAArBQAADIjIAAg");
	mask.setTransform(32.8,69.8);

	// grad
	this.instance_4 = new lib.grad();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-162.5,-79.1,1,1,33.5);
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({x:221.5,y:223.2},25).to({_off:true},1).wait(118).to({_off:false,x:-162.5,y:-79.1},0).to({x:221.5,y:223.2},25).to({_off:true},1).wait(117).to({_off:false,x:-162.5,y:-79.1},0).to({x:221.5,y:223.2},25).to({_off:true},1).wait(147));

	// iPhone
	this.instance_5 = new lib.iPhone_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(270,71);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(482));

	// Слой_10
	this.instance_6 = new lib.bubble2_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-62,-280.1,0.54,0.54,0,0,0,-0.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(507));

	// Слой_2
	this.b3 = new lib.bubble3_1();
	this.b3.name = "b3";
	this.b3.parent = this;
	this.b3.setTransform(45,-27.8);

	this.timeline.addTween(cjs.Tween.get(this.b3).to({y:-167},24).wait(1).to({y:-172.8},0).to({y:-723.8},95).wait(1).to({skewY:180,x:-65,y:468.2},0).to({y:-463.8},240).wait(1).to({skewY:0,x:45,y:668.2},0).to({y:-22},119).wait(1).to({y:-27.8},0).to({y:-167},24).wait(1));

	// Слой_4
	this.b4 = new lib.bubble4_1();
	this.b4.name = "b4";
	this.b4.parent = this;
	this.b4.setTransform(-150,667);

	this.timeline.addTween(cjs.Tween.get(this.b4).to({y:563.6},24).wait(1).to({y:559.3},0).to({y:-367},215).wait(1).to({skewY:180,x:130,y:667},0).to({y:-367},240).wait(1).to({skewY:0,x:-150,y:667},0).to({y:563.6},24).wait(1));

	// Слой_5
	this.b2 = new lib.bubble2_1();
	this.b2.name = "b2";
	this.b2.parent = this;
	this.b2.setTransform(33,467);

	this.timeline.addTween(cjs.Tween.get(this.b2).to({y:374.2},24).wait(1).to({y:370.4},0).to({y:-461},215).wait(1).to({skewY:180,x:-53,y:467},0).to({y:-461},240).wait(1).to({skewY:0,x:33,y:467},0).to({y:374.2},24).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(507));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,-367.9,412,1100.9);


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
p.nominalBounds = new cjs.Rectangle(84,232.1,412,1100.9);
// library properties:
lib.properties = {
	id: '91D4C62FD16542E6830CFC2A58513868',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bubble2.png", id:"bubble2"},
		{src:"images/bubble3.png", id:"bubble3"},
		{src:"images/bubble4.png", id:"bubble4"},
		{src:"images/iPhone.png", id:"iPhone"}
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
an.compositions['91D4C62FD16542E6830CFC2A58513868'] = {
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