(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,398);


(lib.butterfly = function() {
	this.initialize(img.butterfly);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,44);


(lib.pupil = function() {
	this.initialize(img.pupil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,35);// helper functions:

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


(lib.wog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG5DDQgngRgegcQgdgcgRgmQgQgoAAgsQAAgrAQgoQASgnAegbQAdgeAogQQAqgPAtAAQBFAAA0AfQAwAeAcA3IhmAqQgOgagXgPQgZgQghAAQgwAAgfAgQgfAgAAAtQAAAyAcAeQAfAgA1ABQAmAAAcgTQAagRAFgZIiBAAIAAhTIDsAAQAJAxgLAtQgLArgcAhQgdAigqATQgrATgzAAQguAAgrgQgAgaDDQgogRgegdQgegbgRgmQgQgpAAgrQAAgrAQgoQARgmAegcQAegeAogPQAogQAuAAQAtAAAqAQQAoAPAeAeQAeAcARAmQAQAoAAArQAAArgQApQgRAmgeAbQgeAdgoARQgqAQgtAAQguAAgogQgAgQhNQgfAgAAAtQAAAtAfAgQAeAgAuAAQAtAAAgggQAfggAAgtQAAgtgfggQgggggtAAQguAAgeAggAl7DCQgRgQgIggIgQhHQgQhFgGglIgDAAQgFAkgRBGIgRBHQgGAggTAQQgSARgbAAQgdAAgSgQQgRgRgLggIhulcIB7AAIAqCZIAKAtQAHAmADAaIAEAAQACgbAIglQACgPAHghIAiiWIBqAAIAiCWIALAwQAGAlADAbIAEAAQADgaAHgmQAGgdAEgQIApiZIB7AAIhuFcQgJAggTARQgRAQgcAAQgcAAgTgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-21.1,148,42.2);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C96337").s().p("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AABAAABQABAAAAABQAAAAABAAQAAAAABAAQACAAABgEQAJgeANgdQADgIAJABIAqABQAKABAAAJQABBGgBAuQAAAKgKAAIgaAAQgKAAABgKIAChDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAIgVA7QgDAJgIAAIgSACQgJAAgDgIIgWg8QAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABIADA/QABAKgLABIgXACIgCAAQgIAAgBgKgAD/BXIgegvQgDgEgEADIgLAIQgDADAAAEIABAYQAAAKgKAAIgYAAQgKAAAAgLQAChAgCgtQAAgLAKAAIAWgBQALAAAAAKIAAAeQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABgBQASgQAXgYQAFgFAIABIAZADQAHABABAEQACADgFAFIglAjQgDADACADQASAcAcAiQAEAFgBADQgBAEgGABIgeAGIgEAAQgGAAgDgGgAngBXIgPgYIgOgXQgDgEgFADIgKAIQgEADABAEIABAYQAAAKgKAAIgYAAQgLAAABgLQAChAgCgtQgBgLALAAIAWgBQAKAAAAAKIAAAeQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABgBQASgQAXgYQAFgFAIABIAZADQAHABABAEQABADgEAFIglAjQgDADACADQASAcAcAiQAEAFgBADQgCAEgGABIgeAGIgDAAQgGAAgEgGgAAHBLQgUgTAAggQAAgfAUgSQAWgRAkAAQAcAAASALQARALADATQABAJgKABIgaADQgHAAgFgIQgGgKgQAAQgPAAgIAGQgHAGAAAQQAAASAHAJQAIAKAPAAQAUAAAEgKQACgFACgCQACgCAFAAIAbAAQAGABACACQADADgBAFQgFAVgTALQgRAKgcAAQglAAgVgSgAxUBLQgWgSAAghQAAgfAWgSQAVgRAlAAQAcAAARALQASALACATQACAJgLABIgZADQgHAAgFgIQgGgKgRAAQgPAAgHAGQgIAGAAAQQAAASAIAJQAIAKAOAAQAUAAAFgKQABgFADgCQACgCAEAAIAcAAQAFABADACQACADgBAFQgFAVgTALQgRAKgcAAQgkAAgVgSgAKkBTIgBg4IAAg8QAAgKAKAAIAaAAQAKAAAAAKIgBA4QgBAmABAUQABAKgKAAIgZABIgBABQgJAAAAgKgApuBcQgXgCgBgUQAAgFgDAEQgRAWgbAAQgaAAgPgLQgPgLAAgSQAAgUAQgJQAOgIAlgDQASgCAGgCQAGgDAAgFQAAgLgaAAQgNAAgEAGIgFAGQgCACgEAAIgaAAQgFAAgDgCQgDgDABgFQAEgTATgKQASgIAdAAQAeAAAQAOQAPAOAAAXIABAsQAAAEAEAAIADAAQAKAAAAAKIAAASQAAAJgKABIgTAAgAqRAeIgTADQgOACgGADQgGADAAAHQAAAKASAAQAPAAAJgHQAJgIAAgNIgCAAIgEAAgAFRBKQgVgRAAggQAAggAWgUQAWgUAkAAQAjAAAUATQAUATAAAgQAAAfgVASQgVASgjAAQglAAgUgQgAFzgBQgIAHAAARQAAAhAdAAQAOAAAJgJQAJgKAAgQQAAgQgIgHQgIgIgOAAQgPAAgIAJgAO2BZQhUgChkABQgLABAAgLIgBg3IgBg3QAAgLAKAAIAbAAQAKAAAAALIACAnIAAAoQAAAFAFAAIAYAAQAEAAABgFQABgjgBgiQAAgKAKgBIAbgBQAKAAAAAKQABAigBAlQAAAFAFAAIAVAAQAFAAAAgEIAChSQABgKAKABIAbAAQAKAAAAAKIgDBwQAAALgKAAIgBgBgAjIg7QgMgHgEgOQgBgFACgDQADgDAFAAIAOgCQAFAAACACQACACADAFQACAEAIAAQAMAAADgFIAFgGQACgCAEAAIAUAAQAFAAADACQADADgCAEQgIAfgsAAQgUAAgMgGgAKsg8QgKAAAAgKIgBgPQAAgKAKgBIAcgBQALAAgBALIAAAQQgBAKgKAAgARBilQgKAAAAgKIAAgFQAAgLAIABIAIAAQAHgBAAgHIAAAAQAAgFgFgBIgJAAQgKgBAAgKIAAgaQAAgKAJAAIAhgBQAKAAAAAKIABAiQAAAVgIALQgIALgQAAgALyizIAAgTQgBgGgFAAIhFAAQgFAAAAAGIAAAPQAAAKgKAAIgbAAQgKAAAAgKQgBgYABgXQAAgKAJAAIADAAQAEABACgFQAFgdAAglIgBgQQAAgKAKAAIBvgBQALAAgBAKQgBArABAoQAAAFAFgBIAFAAQAKAAAAAKIAAAyQAAAKgKAAIgaABIgBABQgKAAABgLgAK1klQgBAcgCAVQAAAFAFAAIAiAAQAGAAAAgFIgBgzQAAgFgFAAIgfAAQgFAAAAAHgAg6jGIgaAAQgKgBABgKIADg2QAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQgCgBgCADIgpA3QgFAGgHAAIgbACQgLAAAAgKIgEhxQgBgKALgBIAZgBQAKAAAAAKIACA3QAAABAAABQAAABAAAAQABABAAAAQAAAAABAAQAAABABAAQAAAAABgBQAAAAABAAQAAgBABgBQASgZAaghQAEgHAIABIAcACQAKABAAAKQAAA3gEA7QgBAKgIAAIgBgBgACKjMIgXgmQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgVAjQgFAHgIgBIgbgEQgGgBgCgDQgBgEAEgFQAYgcAOgUQADgDgDgEQgYgfgOgWQgDgEACgEQACgEAFAAIAfgDQAJgBADAIIATAjQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAJgQAIgRQAEgIAIABIAeABQAGAAACADQACAEgEAFQgYAigPASQgDADADAEQAQAVAVAYQAEAFgBAEQgBADgGACIgZAIIgEABQgGAAgDgGgAkMjRQgCgbACgfQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAQgXAbgVAiQgFAHgIgCIgagFQgJgCAAgJQgBhAACgtQABgKAKABIAYABQAKABAAAKQgDAbAAAaQAAAEACABQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgBIAug+QAFgHAIABIAaADQAKACAAAOIgCA6IABAvQABAKgKABIgaADIgCABQgIAAgBgKgAvOjIIgcAAQgKAAAAgKIAAg2QAAgFgFgBIgjgBQgOAAgFAGQgFAGAAASQABAOgFAPQgCAIgJAAIgcAAQgKAAACgLIADgrQADgWARgHQAFgCgEgCQgVgLAAggQgBgWASgOQAQgOAaAAIBbACQAKAAAAAKIAACjQAAAKgJAAIgBgBgAwslUQgFAFAAAMQAAAJAGAEQAGAEAOABIAcABQAFAAAAgFIAAgcQAAgFgFAAIgYgDQgSAAgHAFgAtkjSIABhvQAAgKAKAAIAYgBQAKgBAAALIgBAkQAAAFAGAAQAWAAAWgBQAEAAABgGIACgnQABgJAJgBIAWgBQALAAAAAKQgEBHABAqQAAAKgKAAIgXABQgKABAAgLIAAgbQAAgFgFAAIgrABQgFAAAAAFIABAcQAAAKgKABIgaABQgLAAABgKgAPojJQgKAAAAgKIAAhzQAAgKAKAAQA9gCAhACQAKABgBAKIgBASQgBALgKgCQgdgCgXABQgFABAAAFIADBSQAAAKgLAAgAGdjJQgKAAAAgLQABgpgBgqQAAgFgFAAIgeAAQgLACAAgLIAAgQQAAgKAKAAQA4gDA/AEQAKAAAAAKIABARQABALgLgBQgPgBgRAAQgFABAAAFQABAkgCAtQAAAKgKAAgAM/jaQgVgRAAggQAAghAWgUQAWgUAkAAQAjAAAUATQAUATAAAhQAAAfgVASQgVASgkAAQgkAAgUgQgANhkmQgIAIAAARQAAAhAdAAQAOAAAJgJQAJgJAAgRQAAgQgIgIQgIgHgPAAQgOAAgIAIgADZjaQgVgRAAggQAAghAWgUQAWgUAkAAQAjAAAVATQATATAAAhQAAAfgVASQgUASgkAAQglAAgUgQgAD7kmQgIAIAAARQAAAhAeAAQANAAAJgJQAJgJAAgRQAAgQgIgIQgIgHgOAAQgPAAgIAIgAqpjaQgVgRAAggQAAghAWgUQAWgUAkAAQAjAAAUATQAUATAAAhQAAAfgVASQgVASgkAAQglAAgTgQgAqHkmQgIAIAAARQAAAhAdAAQAOAAAJgJQAJgJAAgRQAAgQgJgIQgHgHgPAAQgOAAgIAIgAoAjLQgKAAgBgKIAAhxQAAgJAKAAIAmgCIAmAAQAWABANAJQANAKAAARQAAAHgFAHQgEAIgJAEQgEADAFACQATAJAAAWQAAARgOAJQgOAJgWAAgAnbkBQgFABAAAEIABANQAAAFAEAAIAaABQAQAAAAgMQAAgLgUgBIgWAAgAnakxQgFAAAAAFIgBALQAAAFAFAAIAXAAQAJAAADgCQADgCAAgHQAAgLgQAAIgVABgAJTkHQgzgBgaABQgKAAgBgKIgBgQQgBgLAKAAQAkgDAvABQALABgBAKIgCASQAAAKgKAAIgBAAgAiQlgQgMgHgEgOQgCgFADgDQADgDAFAAIAOgCQAEAAADACIAEAHQACAEAJAAQAMAAADgFIAEgGQADgCAEAAIATAAQAGAAADACQACADgBAEQgJAfgrAAQgVAAgLgGg");
	this.shape.setTransform(-1.3,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF0E4").s().p("Au9HRIiZAAQggAAgdgKQgpgOgggeQgggggOgtQgIgbgBgaIAAueQAAhMA3g3QA4g2BOAAMAitAAAQBOAAA4A2QA3A3AABMIAAOeQAABMg3A2Qg4A2hOAAI6LAAICNFug");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-130,-83.1,260,166.2), null);


(lib.pupil_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pupil();
	this.instance.parent = this;
	this.instance.setTransform(-18,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pupil_1, new cjs.Rectangle(-18,-17.5,36,35), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BC53F").s().p("Ah3gYQgOgcAAgfQAAg4AognQAngnA3AAQA3AAAnAnQAnAnAAA4QAAAggNAbIh4Dyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-21.8,26.8,43.7);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjPjQQgYgyARg0QATg0AygZQAwgZA1ATQAzARAZAyICqFYQAUAmAAArQAAAsgUAmIhsDdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-40.2,44.3,80.4);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjPjQQgZgyATg0QARg0AygZQAygZA1ATQAzARAZAyICqFYQATAmAAArQAAAsgTAmIhuDdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-40.2,44.5,80.4);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333445").s().p("AgYBxQgzgEgpgiQgLgJAAgMQAAgLAHgKQAIgJAMgCQAMgCALAJQAcAXAfAAQAcABAYgSQAXgSAHgbQAIgfgOghQgGgNAGgKQAGgKALgEQAMgEAKAEQANAFAFAMQAVAxgMAxQgMA1gqAeQglAbgrAAIgOgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(-12.8,-11.3,25.7,22.7), null);


(lib.logo_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC4BLQgfgfAAgsQAAgrAggfQAggeAuAAQAiAAAaAQQAYAPAOAbIgzAUQgHgNgMgHQgMgHgQAAQgYAAgPAPQgQAQAAAWQAAAZAOAPQAPAQAbAAQASAAAOgJQANgJADgMIhAAAIAAgoIB1AAQAJAxgeAiQgeAkgzAAQgvAAgggegAgvBLQgggfAAgsQAAgrAggfQAfgeAuAAQAuAAAfAeQAgAfAAArQAAAsggAfQgfAeguAAQguAAgfgegAgIgmQgPAQAAAWQAAAWAPARQAPAPAXAAQAWAAAQgPQAQgRAAgWQAAgWgQgQQgQgPgWAAQgXAAgPAPgAjIBIIgIgjQgIgjgDgQIgBAAQgDARgIAiIgIAjQgEAQgJAIQgJAJgOAAQgOAAgJgJQgIgHgFgRIg3isIA9AAIAVBNIAFAVIAFAhIACAAQABgPADgSIAFgYIARhKIA1AAIARBKIAFAYQADASABAPIACAAIAFghIAFgVIAVhNIA9AAIg3CsQgFARgJAHQgJAJgNAAQgcAAgIghg");
	this.shape.setTransform(27.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8BC53F").s().p("Ag7gLQgGgOAAgQQAAgbATgUQATgTAbAAQAbAAAUATQATAUAAAbQAAAQgHAOIg7B3g");
	this.shape_1.setTransform(-22.1,-9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNhmQgMgZAJgaQAJgaAXgMQAZgNAaAJQAaAJAMAZIBVCqQAJATAAAVQAAAWgJATIg2BtgAi/hmQgMgZAJgaQAJgaAYgMQAZgMAaAIQAaAJAMAZIBUCqQAJATAAAVQAAAWgJATIg1Btg");
	this.shape_2.setTransform(-44.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_static, new cjs.Rectangle(-64.4,-19.9,129,39.9), null);


(lib.logo_globino = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMA2IAAhbIgzAAIAAgQIB/AAIAAAQIgzAAIAABbg");
	this.shape.setTransform(17.4,-7.4,0.054,0.054);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2A2IAAhaIgpBaIgXAAIgqhbIAABbIgZAAIAAhrIAnAAIAnBVIAmhVIAmAAIAABrg");
	this.shape_1.setTransform(18.3,-7.4,0.054,0.054);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmGBKQABj2Aij1ID7gzQgZC1gHC3IERg4QgGirgYiwID7gzQAiDpgBD2QAAD2gjD8Ij8AzQAbi7AGi8IkRA4QAGC1AZCxIj8AyQghjuAAj3g");
	this.shape_2.setTransform(9.7,-2.6,0.054,0.054);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AldGXQhWkMBlkUQBVjpDVh9QCFhPCZgVQBQgNA1gKIAHgBIAAPRIj6AyIAArAQhPANhBAxQhwBTgKCXQgLCeAxCTQAYBKAaArIjNDHQg/hPgriHg");
	this.shape_3.setTransform(-10.9,1.8,0.054,0.054);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkyF0QiAivAAkEQAAikBkhuQBvh4DfgtQDhgtBuBMQBkBFAAClQAAEEiADhQiCDnixAjQgcAGgcAAQiNAAhtiUgAAAj4QhiAUgrAvQgiAmAAA6QAACPA6BpQA4BkA9gNQA+gMA4h6QA6iAAAiQQAAg6gigYQgagSguAAQgeAAgoAIg");
	this.shape_4.setTransform(14.7,-3.7,0.054,0.054);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmXDKQAAhyA0jPQAwjBArhXIECg0QiOHQAAB5QAABWAiAeQAoAkBlgVICDgaIAArTID6gyIAAPRIl9BNQhMAPg/AAQknAAAAlNg");
	this.shape_5.setTransform(4.4,-1.8,0.054,0.054);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkyI4QiAjHAAlVQAAlMBkidQBjiaDrgwIFRhDIAAD+IlRBEQhwAWgjAlQg1A4AGCXQBuhdCCgaQDBgnBlBOQBfBJAAChQAAD2iADWQiCDaixAjQgcAGgbAAQiSAAhpijgAAAABQhiAUgrAvQgiAmAAA6QAACBA6BcQA4BZA9gNQA9gMA4hvQA7h0AAiBQAAg6gigYQgagRguAAQgeAAgoAHg");
	this.shape_6.setTransform(-0.7,-1.8,0.054,0.054);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AioHsQhNglg9hTQiAivAAkDQAAilBkhtQBvh5DfgtQDggtBvBMQBkBGAACkQAAEEiADiQiCDmixAjQgaAGgaAAQg8AAg4gcgAAAj4QhiAUgrAvQgiAmAAA6QAACPA6BpQA4BkA9gNQA9gMA4h6QA7iAAAiQQAAg6gigXQgagSguAAQgfAAgnAHg");
	this.shape_7.setTransform(-5.8,0.4,0.054,0.054);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlmpGILNiQIgaEiImlBVIAAQAIkOA2g");
	this.shape_8.setTransform(-14.2,1.2,0.054,0.054);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgUoBG2QqZkpoqocQqqqZnKvWQnJvVjIzJQimv/Cys6QCzs5IIpkQI7qfOolmQOolmSeAAQSfAAOoFmQOoFmI7KfQIIJkCzM5QCzM6inP/QjITJnJPVQnKPWqqKZQoqIcqZEpQqZEoqQAAQqQAAqYkogEgaQhDcQtID3o4HsQpyIdj8MhQkUNuC8SDQDNToHZPLQGmNkJmJXQIiIUKIESQJGD2I0AAQI1AAJGj2QKHkSIjoUQJmpXGmtkQHZvLDNzoQC8yDkUtuQj8shpxodQo5nstIj3QsAjjuRAAQuQAAsADjg");
	this.shape_9.setTransform(0,0,0.054,0.054);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D02C1E").s().p("EgR6BDKQqIkSoioUQpmpXmmtkQnZvMjNznQi8yDEUtvQD8sgJyodQI4nsNIj3QMAjjOQAAQORAAMADjQNID3I5HsQJxIdD8MgQEUNvi8SDQjNTnnZPMQmmNkpmJXQojIUqHESQpGD2o1AAQo0AApGj2g");
	this.shape_10.setTransform(0,0,0.054,0.054);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_globino, new cjs.Rectangle(-23.7,-26,47.6,52), null);


(lib.hand_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALsK0QgKgBgGgKQh0ioh/ibQkJlAkzj5QlDkGlkisQgKgEgDgKQgCgJAEgJQAFgIAIgEQAJgEAKAFQCjBOCgBkQFcDZEyEvQEkEgD0FjQAHAKgDAKQgCAIgIAGQgIAFgIAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_r, new cjs.Rectangle(-77.6,-69.2,155.4,138.4), null);


(lib.hand_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGdK+QiLgSh9g1QkUh3jAkdQiqj9g5k1QgHgDgGgFQgQgLgLgQQgIgMgEgNQgEgFgBgGQgCgFACgFQAAgGADgDIAHgIQgGgSgMgUIgegtIg+hdQgGgJACgKQADgJAIgGQAIgFAJABQAKABAGAJIBIBsIAcArIAHAPIAHgDIAKgDQgmhlAIhxQABgLAIgFQAHgFAKACQAJACAHAIQAHAHgBALQgHBmAnBiQAUgIAXAHQAeAIAMAeQAIARgDAOQgCAQgOAJQgOAJgaAPQAAAPgMALQgHAIgNAEIgIABQAMA4AWBJQA0CnBNCKQBVCbBwBxQCgCjDYBIQDTBHDngbQALgBAHAHQAHAGAAAKQABAKgFAHQgGAJgLABQhDAHhCAAQhHAAhGgJgAoGl6QABgHAGgFIgKgbIAAgCIgFgJIgBgBIAAgBIgBAAIgBAAIgDAAIACAAIgCAAIgFADIACgCIgFAEIgEAEIgBACIgFAIIgCACIAAAAIABADIAGALIAAAAIAHAIIADACIAJAGIACAAIAGABgAncmzIAAABIABADIAGARIAVgMQgCgFgGgEQgFgDgFAAQgFAAgFADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_l, new cjs.Rectangle(-70.8,-71.1,141.6,142.3), null);


(lib.butterfly_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.butterfly();
	this.instance.parent = this;
	this.instance.setTransform(-54,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.butterfly_1, new cjs.Rectangle(-54,-22,108,44), null);


(lib.body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.body();
	this.instance.parent = this;
	this.instance.setTransform(-125,-199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_1, new cjs.Rectangle(-125,-199,250,398), null);


(lib.bg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EDF2EE","#FFC547","#EF8201"],[0,0.376,1],84.8,259.2,0,84.8,259.2,499.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF8201").s().p("Egz0Az1Q1f1eAA+XQAA+WVf1eQVe1feWAAQeXAAVeVfQVfVeAAeWQAAeX1fVeQ1eVf+XAAQ+WAA1e1fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-469.1,-469.1,938.3,938.3), null);


(lib.logo_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApGiBIgBgCIABgCIACgBIACABIABACIgBACIgCABIgCgBg");
	var mask_graphics_1 = new cjs.Graphics().p("ApLhIQgOgOAAgTQAAgTAOgOQAOgOATAAQAUAAANAOQAOAOAAATQAAATgOAOQgNAOgUAAQgTAAgOgOg");
	var mask_graphics_2 = new cjs.Graphics().p("ApQgPQgbgaAAgmQAAgmAbgaQAbgbAlAAQAmAAAbAbQAaAaAAAmQAAAmgaAaQgbAagmAAQglAAgbgag");
	var mask_graphics_3 = new cjs.Graphics().p("ApiAdQgngmAAg4QAAg4AngoQAognA4AAQA4AAAoAnQAnAoAAA4QAAA4gnAmQgoAog4AAQg4AAgogog");
	var mask_graphics_4 = new cjs.Graphics().p("ApiBmQg1g1AAhJQAAhLA1g0QA0g1BLAAQBKAAA1A1QA0A0AABLQAABJg0A1Qg1A0hKAAQhLAAg0g0g");
	var mask_graphics_5 = new cjs.Graphics().p("ApjCfQhChCAAhdQAAhcBChCQBBhBBdAAQBdAABCBBQBBBCAABcQAABdhBBCQhCBBhdAAQhdAAhBhBg");
	var mask_graphics_6 = new cjs.Graphics().p("ApkC+QhPhPAAhvQAAhuBPhPQBOhPBwAAQBvAABPBPQBPBPAABuQAABvhPBPQhPBPhvAAQhwAAhOhPg");
	var mask_graphics_7 = new cjs.Graphics().p("AplDeQhchcAAiCQAAiBBchcQBchbCCAAQCCAABbBbQBcBcAACBQAACChcBcQhbBbiCAAQiCAAhchbg");
	var mask_graphics_8 = new cjs.Graphics().p("ApmD9QhphpAAiUQAAiTBphpQBphpCUAAQCVAABpBpQBoBpAACTQAACUhoBpQhpBpiVAAQiUAAhphpg");
	var mask_graphics_9 = new cjs.Graphics().p("ApnEdQh2h2AAinQAAimB2h2QB2h2CnAAQCnAAB2B2QB0B2AACmQAACnh0B2Qh2B2inAAQinAAh2h2g");
	var mask_graphics_10 = new cjs.Graphics().p("AplE8QiDiDAAi5QAAi4CDiDQCDiDC5AAQC6AACBCDQCDCDAAC4QAAC5iDCDQiBCDi6AAQi5AAiDiDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-58.4,y:-13.5}).wait(1).to({graphics:mask_graphics_1,x:-60.2,y:-15.3}).wait(1).to({graphics:mask_graphics_2,x:-62,y:-17.1}).wait(1).to({graphics:mask_graphics_3,x:-65,y:-20.1}).wait(1).to({graphics:mask_graphics_4,x:-66.4,y:-20.5}).wait(1).to({graphics:mask_graphics_5,x:-67.8,y:-19.3}).wait(1).to({graphics:mask_graphics_6,x:-69.2,y:-15.5}).wait(1).to({graphics:mask_graphics_7,x:-70.6,y:-11.8}).wait(1).to({graphics:mask_graphics_8,x:-72,y:-8}).wait(1).to({graphics:mask_graphics_9,x:-73.4,y:-4.3}).wait(1).to({graphics:mask_graphics_10,x:-74.5,y:-0.3}).wait(11));

	// p1
	this.instance = new lib.p1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-107.7,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// Слой_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_2 = new cjs.Graphics().p("AmTiCIgBgCIABgCIACgBIACABIABACIgBACIgCAAIgCAAg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AmYhJQgOgOAAgTQAAgUAOgNQAOgOATAAQATAAAOAOQAOANAAAUQAAATgOAOQgOAOgTAAQgTAAgOgOg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AmdgQQgbgaAAgmQAAgmAbgaQAagbAmAAQAmAAAaAbQAbAaAAAmQAAAmgbAaQgaAagmAAQgmAAgagag");
	var mask_1_graphics_5 = new cjs.Graphics().p("AmvAcQgngnAAg4QAAg3AngoQAogoA4AAQA4AAAnAoQAoAoAAA3QAAA4goAnQgnAng4AAQg4AAgogng");
	var mask_1_graphics_6 = new cjs.Graphics().p("AmwBlQg0g1AAhJQAAhLA0g1QA1g0BKAAQBLAAA0A0QA1A1AABLQAABJg1A1Qg0A0hLAAQhKAAg1g0g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AmxCfQhBhCAAhdQAAhcBBhCQBChBBdAAQBdAABCBBQBBBCAABcQAABdhBBCQhCBBhdAAQhdAAhChBg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AmxC+QhPhPAAhvQAAhuBPhPQBOhPBwAAQBvAABPBPQBNBPAABuQAABvhNBPQhPBPhvAAQhwAAhOhPg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AmyDeQhchcAAiCQAAiBBchcQBbhbCCAAQCCAABbBbQBcBcAACBQAACChcBcQhbBbiCAAQiCAAhbhbg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AmzD9QhphpAAiUQAAiTBphpQBphpCUAAQCVAABnBpQBpBpAACTQAACUhpBpQhnBpiVAAQiUAAhphpg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Am0EdQh2h2AAinQAAimB2h2QB2h2CnAAQCmAAB1B2QB2B2AACmQAACnh2B2Qh1B2imAAQinAAh2h2g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AmyE8QiDiDAAi5QAAi4CDiDQCCiDC6AAQC4AACDCDQCDCDAAC4QAAC5iDCDQiDCDi4AAQi6AAiCiDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_2,x:-40.5,y:-13.6}).wait(1).to({graphics:mask_1_graphics_3,x:-42.3,y:-15.4}).wait(1).to({graphics:mask_1_graphics_4,x:-44.1,y:-17.2}).wait(1).to({graphics:mask_1_graphics_5,x:-47.1,y:-20.2}).wait(1).to({graphics:mask_1_graphics_6,x:-48.5,y:-20.6}).wait(1).to({graphics:mask_1_graphics_7,x:-49.9,y:-19.5}).wait(1).to({graphics:mask_1_graphics_8,x:-51.3,y:-15.8}).wait(1).to({graphics:mask_1_graphics_9,x:-52.7,y:-12}).wait(1).to({graphics:mask_1_graphics_10,x:-54.1,y:-8.3}).wait(1).to({graphics:mask_1_graphics_11,x:-55.5,y:-4.5}).wait(1).to({graphics:mask_1_graphics_12,x:-56.6,y:-0.6}).wait(9));

	// p2
	this.instance_1 = new lib.p2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.8,0);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(19));

	// p3
	this.instance_2 = new lib.p3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-44.7,3.5,0.02,0.02,0,0,0,-2.5,20);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regX:0,regY:21.8,scaleX:1,scaleY:1},4).wait(7));

	// Слой_7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_13 = new cjs.Graphics().p("AxeFKIAAqTMAi9AAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_2_graphics_13,x:-75.1,y:97}).wait(8));

	// wog
	this.instance_3 = new lib.wog("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-80.1,39.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({y:85.4},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,-26.9,0.5,0.5);


(lib.hotdog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// butterfly
	this.instance = new lib.butterfly_1();
	this.instance.parent = this;
	this.instance.setTransform(-23,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({rotation:3},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:6},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:6},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:6},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:6},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:3,x:-22.9},0).wait(1).to({regX:-0.1,regY:0.1,rotation:-3,x:-23},0).wait(1).to({regX:0,regY:0,rotation:0},0).to({_off:true},37).wait(16));

	// mouth
	this.instance_1 = new lib.mouth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.8,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},120).wait(16));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_85 = new cjs.Graphics().p("AhwDuQhegsglhgIgFgNQgkhmAwhiQAvhiBmgkQBmgkBiAvQBbAsAlBcIAIASQAkBmgwBiQgvBihmAkQgsAPgsAAQg4AAg4gbg");
	var mask_graphics_86 = new cjs.Graphics().p("AhsCwQhcgTglg9IgFgIQgjhCAuhIQAthIBjglQBkglBgAVQBaATAlA6IAHALQAkBCguBIQguBIhjAlQhBAXg9AAQgjAAgjgHg");
	var mask_graphics_87 = new cjs.Graphics().p("AjnBeIgFgDQgkgeAtgvQAsgtBhgmQBggmBfgGQBYgGAlAZIAHAEQAjAdgsAvQgsAuhhAmQhhAmheAGIghABQhAAAgegVg");
	var mask_graphics_88 = new cjs.Graphics().p("AjeBPQAqgVBegmQBegmBdggQBWgfAlgKIAHgBQAjgIgqAVQgrAWheAmQhfAmhcAgQhYAgglAJIgFABIgNACQgLAAAggQg");
	var mask_graphics_91 = new cjs.Graphics().p("AjeBPQAqgVBegmQBegmBdggQBWgfAlgKIAHgBQAjgIgqAVQgrAWheAmQhfAmhcAgQhYAgglAJIgFABIgNACQgLAAAggQg");
	var mask_graphics_92 = new cjs.Graphics().p("AjnBeIgFgDQgkgeAtgvQAsgtBhgmQBggmBfgGQBYgGAlAZIAHAEQAjAdgsAvQgsAuhhAmQhhAmheAGIghABQhAAAgegVg");
	var mask_graphics_93 = new cjs.Graphics().p("AhsCwQhcgTglg9IgFgIQgjhCAuhIQAthIBjglQBkglBgAVQBaATAlA6IAHALQAkBCguBIQguBIhjAlQhBAXg9AAQgjAAgjgHg");
	var mask_graphics_94 = new cjs.Graphics().p("AhwDuQhegsglhgIgFgNQgkhmAwhiQAvhiBmgkQBmgkBiAvQBbAsAlBcIAIASQAkBmgwBiQgvBihmAkQgsAPgsAAQg4AAg4gbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_graphics_85,x:-23.6,y:-42.8}).wait(1).to({graphics:mask_graphics_86,x:-23.6,y:-42.8}).wait(1).to({graphics:mask_graphics_87,x:-23.6,y:-42.7}).wait(1).to({graphics:mask_graphics_88,x:-23.6,y:-42.7}).wait(3).to({graphics:mask_graphics_91,x:-23.6,y:-42.7}).wait(1).to({graphics:mask_graphics_92,x:-23.6,y:-42.7}).wait(1).to({graphics:mask_graphics_93,x:-23.6,y:-42.8}).wait(1).to({graphics:mask_graphics_94,x:-23.6,y:-42.8}).wait(26).to({graphics:null,x:0,y:0}).wait(16));

	// pupil
	this.instance_2 = new lib.pupil_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30.7,-37);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({x:-20.7,y:-42},10).wait(19).to({x:-30.3,y:-38},4).wait(3).to({x:-14.7,y:-46},7,cjs.Ease.quadInOut).wait(3).to({x:-22.7,y:-42},4).to({_off:true},49).wait(16));

	// Слой_9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF0E4").s().p("AhwDuQhegsglhgIgFgNQgkhmAwhiQAvhiBmgkQBmgkBiAvQBbAsAlBcIAIASQAkBmgwBiQgvBihmAkQgsAPgsAAQg4AAg4gbg");
	this.shape.setTransform(-23.6,-42.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},120).wait(16));

	// pupil
	this.instance_3 = new lib.pupil_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-106,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({x:-96,y:-16.5},10).wait(19).to({x:-105.5,y:-12.5},4).wait(3).to({x:-90,y:-20.5},7,cjs.Ease.quadInOut).wait(3).to({x:-97,y:-16.5},4).to({_off:true},49).wait(16));

	// Слой_8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF0E4").s().p("AhxDsQhHgigmg/IAAAAQgQgYgJgbQgkhmAvhiQAvhiBmgkQBmgkBiAvQBJAjAnBCIAHALQAJASAHASQAkBmgvBiQgvBihnAkQgsAQgrAAQg5AAg4gbg");
	this.shape_1.setTransform(-97.7,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},120).wait(16));

	// hand_r
	this.instance_4 = new lib.hand_r();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130.1,136.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},120).wait(16));

	// hand_l
	this.instance_5 = new lib.hand_l();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-66.1,134.6,1,1,0,0,0,70.8,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({rotation:-10},5,cjs.Ease.get(1)).to({rotation:10},10,cjs.Ease.quadInOut).to({rotation:-10},10,cjs.Ease.quadInOut).wait(5).to({_off:true},19).wait(16));

	// body
	this.instance_6 = new lib.body_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-31.7,-6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},120).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.7,-205.2,415.6,410.6);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_anim
	this.instance = new lib.logo_anim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(58.4,-77.6,0.72,0.72);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(59).to({startPosition:20},0).to({alpha:0},10).wait(1));

	// logo_globino
	this.instance_1 = new lib.logo_globino();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.9,111.2,0.02,0.02);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(133).to({_off:false},0).to({scaleX:2,scaleY:2},10,cjs.Ease.get(1)).wait(35).to({alpha:0},10).wait(1));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(452.9,-656.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({x:70,y:-104},15,cjs.Ease.cubicInOut).wait(59).to({alpha:0},10).wait(1));

	// logo_globino
	this.instance_3 = new lib.logo_globino();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-105.1,-254.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189));

	// logo
	this.instance_4 = new lib.logo_static();
	this.instance_4.parent = this;
	this.instance_4.setTransform(76.2,-255.5,0.822,0.821);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189));

	// hotdog
	this.instance_5 = new lib.hotdog("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(356.8,130.3,1,1,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:0,x:85.8,y:108.3,startPosition:24},24,cjs.Ease.cubicOut).to({_off:true},96).wait(69));

	// t1
	this.instance_6 = new lib.t1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(90,90.8,0.5,0.5,45);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:0,y:-111},10,cjs.Ease.cubicOut).to({_off:true},102).wait(69));

	// bg
	this.instance_7 = new lib.bg3();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,675.3,668.7);


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
p.nominalBounds = new cjs.Rectangle(149,299,700.4,670.2);
// library properties:
lib.properties = {
	id: 'C6CFCF143BE44602932F386B1A77FDC2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/body.png", id:"body"},
		{src:"images/butterfly.png", id:"butterfly"},
		{src:"images/pupil.png", id:"pupil"}
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
an.compositions['C6CFCF143BE44602932F386B1A77FDC2'] = {
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