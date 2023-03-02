(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,118);


(lib.clouds = function() {
	this.initialize(img.clouds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,97);


(lib.lines1 = function() {
	this.initialize(img.lines1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,53);


(lib.lines2 = function() {
	this.initialize(img.lines2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,63);// helper functions:

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


(lib.wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AhoN8IAbgQQAigUAogdQB0hWB1iZQCWjCByj+QBIihAiiKQAYhjAAhEQAAgzgOgfQgJgTgPgIQgNgIgSABQhEBAg0BrQgVAsgVA8IgmBuIgegJQA5kIgaj4QgLhLgmgjQgWgUgfgEQgggFgWAQQgVAOgEAiQgCAMgBA3IgFHrIgfhfQgviPhMiCQhKh/hhhpQhvhxh0glQhEgWg7AJIgeAHIggAMQgfAOgMAUQgNAWAQAZQAGAKAMANIAWAXIBVBfQBVBoA3BfQBrCwBBDfQAxCoAKC2IADBMIgBBGQgCBEgKA3QgRBggqA+QgNATgOAQIgLAKIAIgMQANgRALgTQAnhAANhdQAIg0AChFIgBhGIgDhLQgPi4gxihQhCjbhrisQg1hahWhoIhUhdIgWgYQgOgPgIgNQgLgSgCgTIAAgLIACgJQADgLAFgJQARgdApgTIAfgMIAkgIQBEgLBKAYQB7AoB1B2QCuC6BhDzIADkrIAAgjQABgVACgQQAGguAhgXQAggXAuAGQAnAGAfAaQAvArANBYQARCsgWC0QANgeALgYQA3hyBMhFIAEgDIAFgBQAfgCAWANQAWANANAbQAQAjABA7QgBBKgaBkQgkCOhKCgQh1D/ibDBQh4CYh7BVQgqAdgiARQgZALgDAAIgBAAg");
	this.shape.setTransform(0,0,0.486,0.486);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AjhMcQA1g6AZhaQAUhHADhlQALlKh8k7Qh9k8jpjrQgVgVgIgNQgOgVABgUQABgVASgTQAPgPAXgLQBxgzCIA/QBzA1BjBzQC1DUBXEKIAFmgQAAgdACgRQAEgYAMgRQAZgjAyAEQAwAEAeAiQAbAeAMAwQAJAiADA2QANDrgzDkQA3idAUgqQA4h8BOhGQBmgJgOCwQgOCmhrDyQhvEAicDLQixDniwBTg");
	this.shape_1.setTransform(0,0.4,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing2, new cjs.Rectangle(-31.7,-43.3,63.5,86.7), null);


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AsCQdQgmgCAAgBQAAgCAmgBQAbABBSgGQDBgRDSg/QE6hfEMigQC9hyB4h5QBVhXAlhPQAVgoAIg7QADg0gWgwIgBgCQgEgKgKgEQgLgFgQACQgbABglAPQg8AZhBAvQgnAcgiAfQg7BVhDBOIhcBtIA7iCQAdg/BAhEIAegeQAkgzAgg0QAthIAkhGIAlhLQAUgqAMgiQAghbgZg9QgOgighgWQgQgLgRgEQgSgFgPAEIgIABIgKAFQgGACgHAGQgOAMgLAQQgIAMgjA/IkjIWIAVh8QAhi6gIi8QgIi5gviuQg3i+hqhuQg9hAhKgZIglgLIgpgFQgrgDgaAQQgbAQACAlQABAPAGAVIALAnIAmCcQAhClAFCKQADApAAAgIAABIIgDBGQgCAqgDAbIgQCFQgDAagHAmIgMA+QguDYhgDRIgqBWIgqBNQgsBMgqA1QhLBghUAtQgbAPgYAIQgSAGAAgBIARgJQAZgLAXgPQBRgxBFhfQApg2AphKIAphOIAohVQBcjTAqjTIALg+QAHglADgZIAOiDQADgbABgpIAChFIgBhHQABgdgEgrQgGiFghilIgShMIgVhNIgLgnQgGgZgCgTQgBgbAJgWIAKgQIAFgFQAJgLALgGQAUgNAZgEQAZgEAWACIAqAFIAtAMQBRAcBEBGQByB2A7DHQAwCyAJC/QAGCGgPCFICwlCIAVgnQANgXALgRQAQgWASgOQAOgLAJgEIAKgEIAOgEQAygLAxAhQArAdATAtQAFAKADAOIAFAXQACAWgBAZQgEAqgQAvQgNAlgVArIglBMQglBEguBMQA+grA3gVQAugSAegBQAYgCATAIQALAFAKAJQAJAJAEALQAaA6gFA9QgIBAgYAvQgqBVhYBZQh9B8jBBxQkSCgk9BbQjXA8jCAKIhDABQgbAAgPgBg");
	this.shape.setTransform(0,0,0.486,0.486);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AsfQSIgLgkQBdggBRhWQBAhEA/htQDPlpAwmnQAwmoh4mOQgLgjgCgUQgDggANgVQAOgXAegKQAZgIAhACQCbAJByCWQBgB/AqC7QBOFXg9FYID6nKQASghAMgQQATgZAWgLQAwgZA2AiQA0AhANA4QAMAxgPA7QgKAsgdA9QhRCvhtCcQA4g1BCgpQBPgxA6gLQA/gMAPAoQBCCIiLCxQiACjkICaQkFCXkoBYQkXBTjmAAIg6gBg");
	this.shape_1.setTransform(-0.4,0.4,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing1, new cjs.Rectangle(-39.8,-51.2,79.7,102.5), null);


(lib.lines2Mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG/B+IgChMQgBgKALAAQAEgBADADQADADAAAFIABAcIApgBIgBgdQAAgKAKAAQAKAAAAAKIADBLQAAALgKAAQgJABgBgLIgBgdIgqABIABAdQABAFgDADQgDADgEAAIgCAAQgIAAgBgKgAGaCFIgigCQgKgBAAgKIAFhJQABgLAKABIAhACQAJAAAAAKQgBAJgJgBIgYgBIgBATIAWABQAJABAAAJQgBAJgKAAIgVgCIgCAUIAZACQAJAAAAAKQgBAJgIAAIgBgBgAIwB4IgPhKQgDgKAKgCQAKgCACAKIAGAcIApgJIgGgbQgDgKAKgDQAKgBACAKIAQBJQACAKgKADQgJACgDgLIgGgcIgoAJIAGAcQABALgJABIgCABQgIAAgCgJgAFCB/QgJgCABgKIAEgdIgpgFIgEAcQgCAKgJgBQgKgBABgKIALhLQABgKAKABQAKACgCAKIgEAbIAqAGIADgcQACgKAKABQAKACgCAKIgKBLQgCAJgHAAIgDAAgADBBpIgagFQgKgDABgJIAPhKQACgJAKACIAZAFQALACAFAHQAGAIgCALQgDANgNADIAAABQAIACAFAIQAEAHgCAJQgCANgKAGQgGAEgIAAIgKgBgACzBUIAQADQAMADACgMQACgKgOgDIgNgCgAC7AtIAKACQAKADADgLQABgJgKgCIgKgCgAKgBkQgEgCgCgDQgBgEABgDIAJggQgYAIgJgTQgNgbAdgPIAVgJQAJgFAFAJIAhBCQAEAJgIAFQgJAFgFgKIgNgaIAAAAIgKAuQgCAEgEACIgEACIgDgBgAKaAUQgLAFAFALQAGAKALgFIAMgGIgLgVgABdBUQgTgFgJgQQgJgRAFgUQAFgUAPgKQAQgLATAFQAUAFAJAQQAJARgFAUQgFAUgPAKQgLAIgNAAQgGAAgGgCgABcAMQgIAGgDANQgDANAEAJQAEALAMADQALADAJgIQAIgHADgMQADgNgEgJQgEgLgMgDIgGAAQgIAAgGAFgAAVBBQgJgCADgLIAShAIgngLIgSBAQgDAKgKgDQgJgCADgKIAUhHQADgKAJACIA6ARQAKADgDAKIgUBHQgCAIgHAAIgEgBgAhsAbQgTgGgIgRQgIgQAGgUQAHgUAQgKQAQgJATAGQATAGAIARQAIASgGATQgGATgQAKQgKAGgLAAQgHAAgIgDgAhpgsQgIAGgEAMQgEANAEAJQADAKAMAEQALADAJgGQAJgGADgMQAEgMgDgKQgEgLgLgEIgHgBQgHAAgHAFgAiyAEQgKgCACgJIARhCIgpgKIgQBBQgDAKgJgCQgKgCADgKIAShJQACgKAKACIA8APQAJADgCAKIgSBIQgCAHgHAAIgDAAgAlWgbQgUgCgLgQQgLgPADgVQACgVAOgMQAPgMAUACQAKABAHAEQAKAGgBAHQgBAJgIgBIgIgDQgFgDgHgBQgLgCgIAJQgIAHgBANQgBAMAFAJQAFAJAMACQAGABAHgCQAHgCACAAQAEABACADQACADgBADQgBAJgLACIgLACIgIgBgAq3gdQgEgCgBgEIABgFIAFgRIgfgwQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgEADgDQADgDAEgBQAFgBAEAGIAWAhIALgmQACgGAGgBQAEgBAEADQADACABAEIgBAFIgYBQQgCAGgGABIgBABQgDAAgDgDgAmagjQgHAAgCgIIgDgMIglgCIgFAMQgCAHgHAAQgLgBABgJIABgFIAfhGQAEgLAKAAQALABADALIAWBKIABAFQgBAIgHAAIgCAAgAmrhKIgKgnIgBAAIgOAmIAZABgApFgwIgChLQAAgLAKAAQAEAAADADQADACAAAFIAAAcIAqAAIgBgdQAAgKAKAAQAKAAAAAKIACBLQAAAKgKABQgJAAgBgKIgBgdIgpABIAAAdQABAKgKAAQgKAAAAgKg");
	this.shape.setTransform(95.3,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.lines2();
	this.instance.parent = this;
	this.instance.setTransform(0,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lines2Mc, new cjs.Rectangle(0,-31.5,240,63), null);


(lib.lines1Mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.lines1();
	this.instance.parent = this;
	this.instance.setTransform(0,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lines1Mc, new cjs.Rectangle(0,-26.5,97,53), null);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,74.8).s().p("AoMINQjZjZAAk0QAAkzDZjZQDZjZEzAAQE0AADZDZQDZDZAAEzQAAE0jZDZQjZDZk0AAQkzAAjZjZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-74.2,-74.2,148.4,148.4), null);


(lib.gal40nokBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("ApZIQIi0gJIhCABQgggCgRgHQgQgGgJgMQgEgJABgBQABAAAGAIQAIAJAPAEQARAFAegBIBCgEIC0ACQCGACBqgDQCjgGCAgTQBWgMBJgSQBYgVBMgfQCphDCZh2QB3hgBOhrQgXAOgdAMQg5AYgZAJQgxARgpAFQgdAFgkgDQgfgDgggLQgygRg7gsQhTg7hEh8Qg1hhghhyIgPg2QgHgfgHgOQgHgKgFgDQgGgEgJgBQgFAAgSACIgLABQgMCNg2CNIgOAiQgIAUgHANIggA/IgjA8QgVAggRAWQiFC7jKB7QiJBRiJAiQghAJgsAGQgbAEAAgCQAlgJBBgUQCGgqCChRQDCh9B/i4QAQgVATggIAig6IAeg+QAHgNAHgTIANghQA2iRAKiRIABgVIAUADQAHABAQgCIAbgCQAUABAQAKQALAHANATQAJAQALAoQAEASAJAiQAhBsAzBeQBAB0BMA3QA1AmAtAPQA0ATA4gIQAlgFAsgQQAYgIA4gXQArgSAegVQAdgVAiggIBbhVIg6BuQhdCri0COQidB5iwBDQhNAfhcAVQhOARhVAMQh+AQioADIgxABQhbAAhlgFg");
	this.shape.setTransform(-89,-16.6,0.486,0.486);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCE12").s().p("ArYH8Qg7AEgfgCQg4gCgLgcIgGgFQCwgdCghbQCchZB7iHQB7iHBIikQBMipAKiwQATACAqgEQAjAHAPA+QAdB/A5BxQBDCGBTBAQBdBFBQAIQBNAHBvgvQBAgbAVgLQApgYA0gxQhkC+jSCXQjICPjhA3Qi+Awj4AJQgwACg/AAQiGAAjJgIg");
	this.shape_1.setTransform(-90.9,-16.4,0.486,0.486);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ABBEC9").s().p("ACsBKIhBgFIgXgEIkJg5QhMgShCgSQiCgjACgJQACgICFAXIGXBSIAVAEIAVACIApAFQBEAFBMgDQAggCBBgGQAkgEABAEQABAFgjALQgpANg4AIQg8AIg4AAIghgBg");
	this.shape_2.setTransform(50.1,24.7,0.486,0.486);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ABBEC9").s().p("AP5PyQgUgjgcg6QhQirg2i9QgghxgbiSIg0kqQgijAgoiFQg5i2hbiKQhnifiPhWQiAhOi0gYQiVgUiVAQQiGAOh5ApQhoAihcA2QhPAvg2AvQgSAOgaAaIgfAfQgZAagCgBQgBgCAWgdQAUgaAIgIIATgVQANgNAKgJQA0gyBQg0QBdg7BpglQB8gtCJgRQCZgSCaASQC9AYCGBRQCYBaBtCoQBfCOA5C9QAoCEAhDGIAwErQAYCPAeByQAtCtBLC8IAoBgQAOAigCABIAAAAQgCAAgRgfg");
	this.shape_3.setTransform(-47.6,-49.2,0.486,0.486);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("ABzE+QgdgQgjgiQgngkgmg5Qgqg+gdhEQgbhBgPhMQgMhCABg2QABgyAJgfQAIgcALgBQAQAAAcBlQAoCTAkBTQAhBUBMCFQA0BbgLALQgCADgFAAQgKAAgRgJg");
	this.shape_4.setTransform(31.6,109.1,0.486,0.486);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AAbEiQgUgWgSgmQgWgsgNg4QgPhAgBhBQAAhBAOhAQANg4AWgsQASgoAUgUQASgTAKAEQAOAHgLBaQgRCEABBKQAABLASCFQALBZgOAHIgEABQgJAAgPgPg");
	this.shape_5.setTransform(22.7,108,0.486,0.486);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AgzEuQgVgZgQgtQgSgzgGhBQgEhKAOhHQARhKAhg/QAgg6AkgmQAhgjAdgPQAZgNAJAHQAHAHgMAbQgHARgZAvQgUAngWA3QgWA+gMA5QgLA2gFBDQgCA6ACAtIAEBIQgBAcgJAEIgDABQgKAAgPgUg");
	this.shape_6.setTransform(18.2,108.4,0.486,0.486);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("ABsDrQgZgHgfgXQgjgYghgnQgmgrgbgzQgcgygPg4QgNgxgBgrQgCgnAIgYQAGgXALgBQARgBAfBJQA0B4AYAtQAYAtBHBtQArBDgKANQgDAEgJAAQgHAAgKgDg");
	this.shape_7.setTransform(56.8,103,0.486,0.486);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AAXEtQgSgXgQgpQgrhlgGiEQgFiBAihqQAOgqAQgYQAOgXAKACQARAFAABeQABDDABAYQABAaAQDBQAHBegQAGIgDAAQgJAAgPgSg");
	this.shape_8.setTransform(47,111.9,0.486,0.486);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("AA1FaQgfgXgXgtQgagvgShHQgShJgKhGQgWiQAIh4QAIhuAXgBQAUAAAWBqQAPBJAbC1IAUCMQAJBJAJAkQADAQARA3QAIAcgGAGQgDADgEAAQgKAAgSgNg");
	this.shape_9.setTransform(53.1,111.2,0.486,0.486);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AkXHdQgMhYANhOQAUh7A8hyQBGiHB8hlQAygqA4gfQhmhTiShtQh9hdAGgMQAEgIApANQAqAOBBAgQClBSCsCIIA9AxIhJAjQhSAohGA5QhrBYhFBzQg5BfghBuQgMAngJAuIgMBCQgHA6gLABIAAAAQgLAAgLg7g");
	this.shape_10.setTransform(59.7,83.3,0.486,0.486);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("AhFCGQgUgGAFgxQAFgzAgg3QAfg4AogfQAngdAQANQAaAXhGB+QhBB0ghAAIgGgBg");
	this.shape_11.setTransform(-78,-109,0.486,0.486);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AgxDEQgTgFABg9QABg9AVhQQAVhRAbg2QAcg2ATAFQATAFgBA9QgBA8gVBRQgVBRgbA2QgaAygSAAIgDgBg");
	this.shape_12.setTransform(-86.8,-107.7,0.486,0.486);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AgjFnQgOgfgKg1QgaiCAQibQASicA0h5QAVgxAUgcQATgaAJADQAOAGgTBxQggC+gIBOQgJBQgJC+QgGBzgOADIAAAAQgKAAgMgdg");
	this.shape_13.setTransform(-95.5,-109.7,0.486,0.486);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1C").s().p("AAmCJQgOgFgQgPQgmgigWg+QgWg9AJgzQAEgWAIgMQAIgNAKAAQASAAASAmQAMAYAYBCQAXBCAFAaQAJAqgOAMQgFADgGAAQgFAAgGgCg");
	this.shape_14.setTransform(-104.1,-92.7,0.486,0.486);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("AC2HPIgtAAIgugDIhcgGIhbgLQiygZi1g3QiOgpiwhTQh3g3iXhfQh+hUhZhLQiniMhqiGQgogzgWgiQgTgeADgEQAEgDAbAZIBLBIQCDCBCbB2QBbBEB9BMQCaBZBuAxQCuBMCHAmQCpAyCuAZIBaAKQAeAEA6ADIArACIAsABQBIACAOgBQCHAADBgaQB3gRCsgsQCMgoBsgqQCxhFCmhaIBbgwQAhgRACAEQADAEgbAXQgfAcg0AlQiLBljGBZQhqAxiQAuQisAziAAVQi/AfiVACIggABIg6gBg");
	this.shape_15.setTransform(-8.7,46.7,0.486,0.486);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1C").s().p("AHCKAQgBgEAVgOIA7gpQBohNA4h1QARgjAMgpIAJgrQADgXgCgPQgGgjgggSQgegTg4gGQgrgFhCACQg7ACg+gCQiEgCh9gTQiGgTh2gmQg1gRhBgbIg2gZIg0gbQhig3hShIQhLhDg4hKQhch+gfh5IgKgrIgDgfQgCgaAFgBQAFgBALAXIAdBCQA0BzBZBmQB6COCyBcIAxAYIA0AXQBBAZAsANQBuAhB/ASQB7ASB7AEQBDACAzAAQBMgBAuAIQBKAMAuAeQAgAWARAbQALAWADAKIAFARQACAKAAAGQADAZgHAjQgCANgFAOIgGAWQgRAxgXAnQgqBIg7A2QgwArg0AZQgnAUgfAHQgOADgGAAQgHAAgBgCg");
	this.shape_16.setTransform(40.3,18.4,0.486,0.486);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1C").s().p("ADvGZIgbgIIgYgGIgagFIg0gKQgmgIg/gRQhXgahhgmQhJgdhagnIiMg+IjMhYQhKggABgEQABgEBOAZQBpAjBoApICOA5ICkBAQBjAlBSAXQA9AQAmAIIAzAKIAaAFQAKABASAGQAfAKAOgBQANAAAJgDQALgDAKgFQAigQAngrQBIhTAzhBQA4hHAshHQAqhEAchAQAshlARhtIAHg7QADgVACAAQACAAACAVQACAggCAdQgFBngsB0QgdBIgnBDQgpBGg6BOQg0BEhIBUQguAygnATQgSAIgLADQgMADgSABIgDABQgOAAgPgEg");
	this.shape_17.setTransform(-88.2,6.9,0.486,0.486);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2981E").s().p("ADpGLQgegJgJgBQi6gej2hkIjphhQiYhAiCguIXjnBQABDDhnC/QhKCHilDBQgiAogdAUQgoAcgnABIgCAAQgOAAgWgHg");
	this.shape_18.setTransform(-88.4,6.4,0.486,0.486);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1C").s().p("Aj4CmQgEgCAHgYQAIgdATgkQAXgqAogpQArguA1glQA7gtA2gQQA2gRA0AEQAoAEAdANQAYAMgDAFQgBADgZgDQgjgEgeACQgvACguARQgsARg3AqQg4AngmAjQgkAjgcAmIgnA3QgNATgEAAIgBAAg");
	this.shape_19.setTransform(-102.5,-50.6,0.486,0.486);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1C").s().p("AlGBlQgFgFAQgYQAUggAhgfQAsgnA+gYQBDgaBLgOQBQgNBHAPQA9ANA1AlQAhAYAcAeQATAXgEAEQgDADgZgQQglgZgdgOQg0gbg0gIQg9gJhJALQhLAOg9AUQg5ASgqAeQgYARgkAfQgUARgFAAIgBAAg");
	this.shape_20.setTransform(-74.9,-62.6,0.486,0.486);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#82929B").s().p("AhnhDQAhgzAtgZQAsgaArAIQAtAHAkArQAlArANBAQhagchvAwQhyAxhHBjQAiiTA4hUg");
	this.shape_21.setTransform(-100.9,-57.3,0.486,0.486);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#82929B").s().p("AigAOQAGgLAog0QApg3BSgFQBfgGBTBHQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQhlALhDAUQiIAmhDBRQALhCAPgeg");
	this.shape_22.setTransform(-78.8,-65.4,0.486,0.486);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQBHQgogKgXgcQgXgbAHgdQAHgdAhgOQAigOAnAKQAoAKAXAcQAXAbgIAdQgHAdghAOQgUAIgVAAQgPAAgQgEg");
	this.shape_23.setTransform(-105.3,-32.7,0.486,0.486);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1C").s().p("AhlD5IgHgDQg4hXgHhpQgGhYAdh0QAShIAmgmQAXgXAggLQAigLAdAIQAqALAlAzQA8BTAHBqQAHBgglB/QgGAXgYAdQgcAiggATQgiATgdAAQgxAAgpg0g");
	this.shape_24.setTransform(-97.3,-31.5,0.486,0.486);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMBPQgtgHgcgdQgbgcAFggQAGghAjgSQAkgSArAIQAtAHAcAdQAbAcgFAgQgFAhgkASQgZANgeAAQgMAAgMgDg");
	this.shape_25.setTransform(-75.9,-38.1,0.486,0.486);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1C").s().p("Ah3B+IgOgvQAbhEAug3QAwg5A8glQAagPAQAEQAVAFAPAkQAIAWAAAOQgBAbgbAUQgNALglAPQg4AYgiAbQgSAQgMASQgHANgTAnQgFAMgGAAQgJAAgJgYg");
	this.shape_26.setTransform(-106.8,-69.9,0.486,0.486);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1C").s().p("AB2CEQgHgGgRgVQgdgngrgYQgrgZgwgFIgigCQgTgCgNgGQgWgHgOgVQgOgUAAgYQgBgXAOgVQAOgVAVgJIAoAHQA1gCA8AkQAiAVBCA2QAoAhAQAdQALATADAVQADAWgIATQgEAMgIAIQgKAIgLABIgDABQgNAAgOgNg");
	this.shape_27.setTransform(-68.7,-80.5,0.486,0.486);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1C").s().p("AgpI8QgLgBgEgDIgKgHIgGgGQgEgFABgBQABgBAFAEIAGAEIAKAEQALAEAQgGQAQgIANgRQA6hBA4ivQA+jEARjDQAFg9gCg1IgEg7IgEgdIgFgeQgOhKgSgsQgMgfgRgUQgJgLgKgGIgEgEIgIgDIgFgDIgHgBQgagIgdAHQgaAGgZASQgwAgghA1Qg6BbgYB7QgiCvAsDaQAPBIAXBOIAiBwQAeBfgDABQgFACglhdQg5iSgbhyQg1jeAhi5QAYiBA+hkQAmg8A2gkQAfgVAhgJQAmgJAkAKIAKADIAAAAIADABIACABIAVALQANAIAPASQAUAYAPAlQATAwAOBOIAKA+QACAVABApQABAygGBEQgSDFhGDIQg/CxhCBBQgRASgUAHQgLADgGAAIgCAAg");
	this.shape_28.setTransform(-100.9,-38.6,0.486,0.486);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhKIdIgDgDQg3iTgchdQgniGgNhyQgPiEAUh5QAWiEA/hlQAphAA4giQA/gmA7AUQAxASAeBMQAQArASBdQAVBygYCvQgVCggzCaQgzCag3BKQglAzgfAAQgTAAgQgTg");
	this.shape_29.setTransform(-100.9,-38.3,0.486,0.486);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1C").s().p("AhbEbIgIgEQhFhbgRhzQgNhgAWiCQAOhRAmgsQAYgcAigOQAkgQAhAHQAuAJAuA0QBJBWARB0QAQBpgeCQQgGAZgYAjQgbAmgiAYQgnAbglAAQgxAAgugxg");
	this.shape_30.setTransform(-67.1,-37.5,0.486,0.486);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1C").s().p("AAvJPIgNgEIgjgPIgOgJIgcgUQgugnglg1Qgcgpgcg5QgmhNghhmIgThAIAFAaQAFAfgBABQgDAAgJgeQgLglgLg0QgQhFgJhIQgOhwAAhQQAAhAAKgxQAPhEApgvQASgWAfgXQAhgZAfgHQAhgJArAKQAgAJAkARQBGAiAyA1QAyAzAnBNQAVArAKAdIAaBLQAWBGAVBVQAWBbAIBDQANBSgCBLQgBBagWBAQgQArgVAbIgNAQIgTASIgBAAIgCACIgVAPQhIAvhAACIgEAAQgPAAgTgDgAiUoqQgZAGgbATQgbATgSAVQgjAmgPA9QgKApgCBBQgCBRAKBsIAFAwIAUBNQAUBHAXBBQAjBjAoBLQA9B0BKA9QAHAGAQAKIAMAIIAfANIADAAIAIACQAUADAHgBQA3gCA+gqIASgOIAUgTIAJgMQARgWANgkQATg5ABhUQABhJgMhPQgKhFgUhUQgThPgXhKIgZhJQgKgbgTgpQgkhHgtgvQgvgxg+ggQg5gcgnAAQgMAAgKACg");
	this.shape_31.setTransform(-72.2,-43.6,0.486,0.486);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAqI6Qh/gohojmQhGibgjisIAhDCQgchqgSiRQgTifAJhfQAHhBATgrQAWgvArgkQAxgqAsgEQAygEBKAnQBNApA2BDQA/BQAqCCQBbEZACC+QADDDhaBGQgsAjgvAQQghALgcAAQgVAAgSgGg");
	this.shape_32.setTransform(-72.3,-43.6,0.486,0.486);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1C").s().p("AuhQJQgig3gshWQg7h3gthyQgbhDgbhUQgehdgQhRIgJgwIgDgUIgJi6IATijQAsjnCJjWQCejrDdiJIAegTIBYguIAHgDIA/gbQAlgPAfgJQAegLApgKIBHgQIBIgLQArgGAfgBQAegDArAAIBJAAIBIAHQAqAEAeAGQAdAEApAKIBFARIBDAWQAnAOAaAMQAcAMAkASIA8AhQAQAKAqAcIAcATIAaAWIAaAWQAQAMAJAKIAvAwQAQAQAaAjIAUAaIATAaQB7C7AsEIQARBjAGBzQAHCNAEA0QANCjAiClQAWBsAnCIIAtCZQAQA2gFACQgFACgYgzQgcg7gjhZQhqkgghkhQgHg1gKiPQgJhsgThgQgvj3hzioIgRgZIgTgWIgSgXQgLgOgJgJIgrgqQgIgIgOgMIgYgTIgYgTIgZgSIg1giIg3gdQghgRgZgKQgYgLgkgMIg+gVIhAgPQglgJgcgEQgbgFgngEIhDgGIhDAAQgnAAgdADQgcABgnAFIhDAKIhCAPQgmAJgZAJQgZAHglAPIg/AaIgEACIgCABIhqA7QjOB9iVDYQiDDEgvDXIgVCYQgCARAAAgIAAAwIAOCMQANBSAZBYQASBCAcBTQAoB1AwB3IA9CUQAUA0gEACIAAAAQgGAAgbgtg");
	this.shape_33.setTransform(-56.8,-54.1,0.486,0.486);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1C").s().p("Am0HFIhZgUQgfgJABgCQAAgCAgAGIBZAOQBOAJA/ACQBgACBbgLQBugNBvgjQB8goByhAQA+giA5gpIAdgWQAUgOAGgHQAFgGACgEIABgDIAAgBIACgJQAAgJgFgYIhunlQhxDWisCmQhPBOhaBGQgqAhgoAaIgVAOQgNAJgHADQgUAKgXAJQiOA4iBAPQg1AGgWgDIgUgEQgGgCAAgBQAAgBAaABQAVABA1gJQCBgYCGg4QAbgMANgHIAmgZQAdgVAzgoQBZhIBMhLQC2i4BzjpIAWgtICDJFQAGAcgBAOIgCAMIAAADIgDAJQgGAMgIAIQgGAHgZATIgeAVQg6AqhAAjQh1BAiAAnQhzAihwAKQg6AHg8AAQhpAAhugUg");
	this.shape_34.setTransform(106.5,11.9,0.486,0.486);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1C").s().p("AoiGRIgPhcQA8AQCggsQCYgpA6goQC3h/CHiTQCXilBjjKIB4IRQAIAkgFARQgFASgWASQjpC0kaA6Qh8Abh+AAQidAAidgpg");
	this.shape_35.setTransform(106.1,12.9,0.486,0.486);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1C").s().p("AmxKjQgfgCAAgCQAAgCAfAAQAqgDAsgPQA4gSBDgsQBIgwBHhHQCXiUCRjuQBJh4A+iJQBHiiAah4IkmigQAGEzhLEHQgmCFg4BuQgZAzgjA0QgWAggrA2QhIBdgxAwQg9A8g0AYQgtAUgrgDQgdgEAAgDQAAgCAeADQApgBAogWQAygaA4g7QArgtBIhhQApg2AWghQAhg0AXgwQA2hwAjh/QBKkQgKk/IgBgeIFyDIIgCANQgbCDhNCrQg8CEhPB/QiVDwieCTQhKBHhLAuQhGAsg8APQgJAEgSADIgYAEIghABIgFAAg");
	this.shape_36.setTransform(97.6,-5.2,0.486,0.486);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1C").s().p("AnGKRIgWgwQBdAWBuhnQAvgsB5icQB+ikBCkBQBEkGgKkvIFMC0QgdCZhiDJQhjDKiECxQiODAiOBqQiOBqh4AAIgbgCg");
	this.shape_37.setTransform(97.1,-4.5,0.486,0.486);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1C").s().p("AkMJmQgGgIgCgHQgHAFgBgBQAAAAAHgIIgBgCQgBgKACACIADAHIAIgJQASgQAlgmQBdhkBJiAQBmi2AvjQQA+kVgijuIgCgNIAMgFQAMgGATgBQANAAAPABQAcADAaAJIAQAGIACAKQANBRgCBEQgBBGgPBKQghCogeBgQhFDkh9C6QhXCGhxBkQgZAXgTACIgCAAQgTAAgOgQgACppRQAeDvhAEQQg0DZhrCzQhRCFhhBbQglAigWAQIgLAIQAEAHAFAGQAOANAOgDQAQgCAVgWQBuhuBPiAQB1i5BCjgQAcheAginQAPhNAAg9QAChAgLhFQgRgGgZgDIgUgBIgJABg");
	this.shape_38.setTransform(86.8,-4.9,0.486,0.486);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1C").s().p("Aj+JgQgJgIgDgKQCkiIBujYQByjdAjkGQAajCgZiuQAQgHAlAEQAiADAUAJQASBtgLBpQgGAwgeCNQgyDvhsDNQhrDMiZCQQgbAagTABIgCAAQgNAAgLgKgAkMJDIACALIgJAHgAkKJOIAAAAg");
	this.shape_39.setTransform(86.3,-4.6,0.486,0.486);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#82929B").s().p("ABpbTQhXgRjHhMQj1hdjjh0QqJlMillWQhBiIhHh0QhIhygfgzQhmiphHkQQhYlVAIi5QAKjFB+k7QCAk+EjirQEfioFcAeQDQASDPBWQDnBiBvCMQBzCSAxCQQAtCGASDjQAvJnCzFrQBZC2BQA7QBzCsC8BXQCTBEDYAZQB7APDmALQC+APBWArIAzA0QAjDqjwC3QjICYl0BoQkwBVlWAjQinARhyAAQhbAAg4gLg");
	this.shape_40.setTransform(-18.6,-18.4,0.486,0.486);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1C").s().p("AmWGnQgJgHAfgwQAig3A9hDQBKhQBhhKQBxhXB8g+QAhgRAjgPQgzgkgugnQhIg9g1g+Qgtg1gYgnQgWgkAIgGQAGgGAiAYIBXBGQCjCACTBTIBaAxIhhApQhJAehJAkQjJBmjMCkIhzBeQgmAdgLAAIgDAAg");
	this.shape_41.setTransform(39.5,78.7,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gal40nokBody, new cjs.Rectangle(-134.2,-128.6,268.4,257.2), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#131413").ss(2,2,2).p("AHtjMQiYBFiFANQiUAOjOguQgQgDhLg6QhGg3gVACQg8AFhAAQQhQAWgeAcQgnAlgTAvQgQAngHA+QgGA6APAjQARAlAwAcQBjA3B4AhQCVAqCHgHQCegJB0gnQBvglBhhLQB/hiA/hiQBGhug2g2g");
	this.shape.setTransform(84.4,51.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AleDqQh4ghhjg3QgwgcgRglQgPgjAGg6QAHg+AQgnQATgvAnglQAegcBQgWQBAgQA8gFQAVgCBGA3QBLA6AQADQDOAuCUgOQCFgNCYhFICBgvQA2A2hGBuQg/Bih/BiQhhBLhvAlQh0AnieAJIgnABQh1AAiAgkg");
	mask.setTransform(84.4,51.1);

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5090C6").s().p("AkWGeQg2gegQg7QgQg6Afg3QAfg5A6gOQAKgCAZgHIAHgCIAFgDIAigTIAPgLIADgBIASgQQAOgMARgSQAOgPAQgTIAJgMQAdgqARgeIAUgrIAHgLIADgMQARgvAHgfIAKgvIACgIIABgQQAGg/AngqQAqgsA+AAQA7AAAuAtQAxAugFA6QgWDxiDDGQiUDgjaAxQgTAEgTAAQgnAAgkgTg");
	this.shape_1.setTransform(35.4,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5E6E6").s().p("ADOkcQgQDIh8CpQh6CqiVAeg");
	this.shape_2.setTransform(35.4,43.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5090C6").s().p("AjKHPQg3gigQg4QgQg8AggzQAcguA4gYQgUAIAKgGIAXgMIACgBIABgBIAegfIADgEQgMAUAOgRQAMgQgOANIACgCQAfgxAMgZIAYg9QAOgoALgxIAIgtIgBAFIADgbQADgzgCgoIgCgkIgEgVQgNg9AcgzQAcg2A8gRQA4gQA5AfQA6AfAMA6QAyD5hWDyQhgEPjaBaQgVAIgVAAQgiAAglgWg");
	this.shape_3.setTransform(84.1,58.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5E6E6").s().p("AB1lOQAoC4hKDTQhMDeiJA0g");
	this.shape_4.setTransform(84.2,58.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5090C6").s().p("AieGmQgrgqAAg/QAAg/ArgqIAVgWIABgBIAJgNIAMgWIAAgBIAGgOQAIgbAEgWIADgdIAAgeQAAg8gVhLQgUhHgghCQgbg5ANg4QAOg7A1ggQAzgdA/AOQA/AQAaA1QBsDbAFDIQAFD1icCVQgsArg8AAIgCAAQg9AAgqgrg");
	this.shape_5.setTransform(139.3,47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5E6E6").s().p("Agmk8QBcC6AACoQAAC0hrBjg");
	this.shape_6.setTransform(139.3,47);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E6E6").s().p("AleDqQh4ghhjg3QgwgcgRglQgPgjAGg6QAHg+AQgnQATgvAnglQAegcBQgWQBAgQA8gFQAVgCBGA3QBLA6AQADQDOAuCUgOQCFgNCYhFICBgvQA2A2hGBuQg/Bih/BiQhhBLhvAlQh0AnieAJIgnABQh1AAiAgkg");
	this.shape_7.setTransform(84.4,51.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(18.8,23.1,131.1,56), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#131413").ss(2,2,2).p("AJkAPQgVh1AShrQioBaiQAvQiyA5h/gPQitgUjwi6QhthZgpgfQhCgygVAIQgaAKgIA7QgJBAATBTQAyDcDDCwQCNCACzAnQCJAeDhgRQBegHB7gnQCMgtBfg9QgbgvgXg8QgYhAgLg4g");
	this.shape.setTransform(82.9,56.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah2F9QiygniOiAQjDiwgyjcQgShTAJhAQAIg7AagKQAVgIBCAyQApAfBtBZQDvC6CtAUQCAAPCxg5QCQgvCphaQgTBrAWB1QAKA4AZBAQAWA8AbAvQheA9iMAtQh8AnhdAHQhQAGhFAAQh8AAhagTg");
	mask.setTransform(83,56.1);

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5090C6").s().p("AgaGQQiGiWgujDQgtjEA7i/QASg6A0gfQA2gfA7AQQA4AQAgA3QAgA4gRA4QgLAhgIAqIgCAJQAAgBAAAAQAAAAABABQAAAAAAACQgBABAAACIgCAeQgBAcADApIAAALIABADIAGAeQAOBDAZAwQARAhASAaIANARIARATQApAuABA8QABA9grAsQgqAqhAABIgDAAQg/AAgmgrg");
	this.shape_1.setTransform(138.2,60.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5E6E6").s().p("Ag/ARQgjifAxiXIB/JLQhqh1gjigg");
	this.shape_2.setTransform(138.2,60.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5090C6").s().p("AAVHoQg1gQgmgzQiFi1gEjvQgDjxCEi0QAmgzA0gQQA6gSA3AfQAyAeASA+QAUBCgjAuQgZAigTAjIgJATIgBAFIgIAUQgFAOgQBBIgCAJIAAAHIgDAqQgBAoAEAkIACAHIAEAUIALAsIAMAkIAFAJIAIASQAUAmAfArQAjAvgUBBQgSA+gyAeQgjAUgkAAQgVAAgUgHg");
	this.shape_3.setTransform(78.6,75.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5E6E6").s().p("Ag5gUQAFi8BmiJIAIKzQh4ihAFjNg");
	this.shape_4.setTransform(78.5,75.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5090C6").s().p("AjvF7QgpgrgDg+QgKjHBgi1QBciwCmh2QAwgiBAATQA+ASAeAzQAfA1gRA7QgRA3gzAkQgtAggnAwQgpAxgdA5IgMAaIgHAXQgLAfgHAiIgEAWIgCAUQgCAmACAlQADA7guAuQguAsg7AAQg+AAgrgsg");
	this.shape_5.setTransform(28.5,42.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5E6E6").s().p("AhGggQBJiVCFhbIkOIhQgKidBKiUg");
	this.shape_6.setTransform(28.5,42.3);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E6E6").s().p("Ah2F9QiygniOiAQjDiwgyjcQgShTAJhAQAIg7AagKQAVgIBCAyQApAfBtBZQDvC6CtAUQCAAPCxg5QCQgvCphaQgTBrAWB1QAKA4AZBAQAWA8AbAvQheA9iMAtQh8AnhdAHQhQAGhFAAQh8AAhagTg");
	this.shape_7.setTransform(83,56.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(12.4,14.9,141.7,82.3), null);


(lib.cloudsMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.clouds();
	this.instance.parent = this;
	this.instance.setTransform(0,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloudsMc, new cjs.Rectangle(0,-49,357,97), null);


(lib.catBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#131413").ss(2,1,0,4).p("Ai3BPIAYg1QAhg5AsghQAtghAvgKQAYgFAPABIBvB4QgagKgmgHQhMgOg8AWQg9AWgnAvIgaAr");
	this.shape.setTransform(61.5,-152.4,0.761,0.761);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#131413").ss(2,1,0,4).p("Ah9CWQgGgdAAgpQgBhSAdg5QAcg6AtghQAXgRAQgFIBmA0QgaAEghAQQg/AhggA9QgfA7gEBCQgCAiAEAV");
	this.shape_1.setTransform(50.7,-161.8,0.761,0.761);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#131413").ss(2,1,0,4).p("AAAB2QgRgQgRgdQgig4ABg8QACg9ANgcQAHgOAGgCIBagCQgWAYgJAyQgTBjBDCB");
	this.shape_2.setTransform(32.3,-161.7,0.761,0.761);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#131413").ss(1,1,0,4).p("ACbAQQglgQg4gIQhxgShnAg");
	this.shape_3.setTransform(-47.7,-134.7,0.761,0.761);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#131413").ss(1,1,0,4).p("ACGA4QgagWgvgZQhcgxhmgP");
	this.shape_4.setTransform(-46.5,-142.6,0.761,0.761);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#131413").ss(1,1,0,4).p("ACMBrQgcgwgxgzQhhhlhpgN");
	this.shape_5.setTransform(-43.7,-150,0.761,0.761);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#131413").ss(1,1,0,4).p("AC7gRQgbAJgpAGQhTAKhIgQQhJgSgsgnQgagYgFgRQgEgJAGAdQAFAbAMAcQAlBZBSAz");
	this.shape_6.setTransform(62.5,-103.1,0.761,0.761);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#131413").ss(1,1,0,4).p("Anfh1IBlgGQB+gDB7ANQGJAsDYDB");
	this.shape_7.setTransform(28.2,-118.8,0.761,0.761);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#131413").ss(1,1,0,4).p("AmJi5IA2AGQBIANBVAdQEPBeExDl");
	this.shape_8.setTransform(19.2,-109.8,0.761,0.761);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#131413").ss(1,1,0,4).p("AkqjlIAzAOQBBAXBGAoQDgCBC7D9");
	this.shape_9.setTransform(11.2,-103.8,0.761,0.761);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131413").s().p("AAvBlQgUgCgYgoQgUgigYgLQgegOgNgNQgWgXALgcIAPgXQAWgSAmAIQAnAIAfAgQAfAiAOAzQAOA0gWAJQghAMgGAAIgBAAg");
	this.shape_10.setTransform(43.2,-142.9,0.761,0.761);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#131413").s().p("Ag+AuIgTgLQgbgrAxgcQAxgcA4AUQAvARgBAhQAAARgKANQAEAGhKAJQgQACgPAAQgZAAgSgHg");
	this.shape_11.setTransform(6.4,-161,0.761,0.761);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAeQgIgGAEgOQADgNANgNQAMgMANgEQANgEAHAHQAIAHgEAOQgDAMgMANQgNANgMADIgJACQgIAAgEgFg");
	this.shape_12.setTransform(-11.9,-149,0.761,0.761);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#131413").s().p("Ag5AyQgMgOAIgZQAIgYAYgVQAYgUAZgFQAZgEANAOQAMAOgIAZQgIAXgYAVQgYAVgZAEIgMACQgRAAgJgLg");
	this.shape_13.setTransform(-14.2,-149,0.761,0.761);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiAkQgJgIAEgRQAEgPAPgPQAPgPAPgFQAQgFAJAJQAIAIgDARQgFAPgOAPQgPAPgPAFQgGACgFAAQgJAAgFgGg");
	this.shape_14.setTransform(10.4,-133.9,0.761,0.761);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#131413").s().p("Ag/BCQgPgQAHgdQAIgdAagcQAagbAdgJQAegIAPAPQAQAPgHAeQgIAdgaAcQgaAbgdAIQgLAEgJAAQgQAAgKgKg");
	this.shape_15.setTransform(7.9,-133.1,0.761,0.761);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#131413").ss(2,1,0,4).p("ADogjIAaAPQAeAPAZACQAkADhCAPQhDAQhCgDQhugFjEALQhDAEg6gKIgsgL");
	this.shape_16.setTransform(39.8,-65.4,0.761,0.761);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#131413").ss(2,1,0,4).p("AqPm6IAagdQAjgiAvgaQCUhVDJAaQDgAdCKBvQByBcBDCgQBrEADLA6QgEASgSAWQgjAshDARQhDARgiAGIgVACIgGBPQgDBWAVAmQAVAnAYAQQAMAIAHAAQhHAGgOgHIgOgIIAdAZQAiAbAYAEIAmAIQgMALgVAJQgoASgmgG");
	this.shape_17.setTransform(27.8,-113.2,0.761,0.761);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#131413").ss(1.6,1,0,4).p("Ag/BrIAxgVQA0ghAUg/QAhhmiKAG");
	this.shape_18.setTransform(-4.3,-148.2,0.761,0.761);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#131413").ss(1.6,1,0,4).p("Ai+AoQADgJAGgPQANgbAUgaQBBhTBygbQBDgPAuAiQArAgADA5QAEA6gsAzQgzA6hiAZ");
	this.shape_19.setTransform(16.5,-133,0.761,0.761);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#131413").ss(1.6,1,0,4).p("AhJgoIAGAPQAKASAOANQArAsBKgM");
	this.shape_20.setTransform(-23,-86.1,0.761,0.761);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#131413").ss(1.6,1,0,4).p("AhmA7QAFgvAdghQA4hFBzA/");
	this.shape_21.setTransform(-15.2,-97,0.761,0.761);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#131413").ss(1.6,1,0,4).p("Ai4AaIgCAJQADAQAaAkQAgAtAxAQQAzARAugXQAqgVAZg2QAOggANg7QAJglAWgnQAUgjAVgU");
	this.shape_22.setTransform(-14.4,-101.8,0.761,0.761);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#131413").ss(1.6,1,0,4).p("AgTiTIASAnQASA1ADBFQADBFgOAoQgGAUgHAF");
	this.shape_23.setTransform(-28.2,-109.9,0.761,0.761);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#131413").ss(1.6,1,0,4).p("AhDgpIAGARQAJAUANAOQApAwBCgW");
	this.shape_24.setTransform(-30.8,-124.6,0.761,0.761);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#131413").ss(1,1,0,4).p("AhshSIAbAFQAhAJAeAPQBgAuAfBa");
	this.shape_25.setTransform(-3.1,-114.2,0.761,0.761);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#131413").ss(1.6,1,0,4).p("AisibIgGBMQADBWAsA3QA5BIBUASQBeATBLg+");
	this.shape_26.setTransform(-12.9,-122.7,0.761,0.761);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAhQgYgJgNgQQgNgQAGgOQAFgOAVgDQAUgDAXAJQAYAKANAQQANAQgGANQgFAOgVADIgLABQgQAAgQgHg");
	this.shape_27.setTransform(-22.4,-142.4,0.761,0.761);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#131413").s().p("AAEBeIg4gGQgXgCgJAJQgLgPgLgXQgVguACgmQACgtAggQQAegPAyANQA2AOArAnQAxArgLAsQgKAogmAGIgJABQgRAAgugDg");
	this.shape_28.setTransform(-20.3,-139.9,0.761,0.761);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#131413").ss(1.6,1,0,4).p("ACSCNQgPgfgYgoQgxhPgygoQg3gtgegSQgZgOgrgO");
	this.shape_29.setTransform(-3.8,-131.4,0.761,0.761);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#131413").ss(1.6,1,0,4).p("AmEk0IAAA6QADBHAKBFQAiDZBjBqQBmBtBogJQA6gFAzgpQATgPBBhVQAigsAvg+IAbgiIAOgCQAQgDAQgIQAxgZAUg+QAWhEgchAQgWg2gsgdQgegUgTgEIgMAA");
	this.shape_30.setTransform(-12.3,-98.3,0.761,0.761);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#131413").ss(1.6,1,0,4).p("AArh0QgRAGgTAPQglAdgKAqQgKAqAgAyQAWAjAWAO");
	this.shape_31.setTransform(-42.5,-129.8,0.761,0.761);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#131413").ss(1.6,1,0,4).p("ABGg6QgigDgjANQhEAbgCBR");
	this.shape_32.setTransform(-34.3,-139.3,0.761,0.761);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#131413").ss(2,1,0,4).p("Aq0l2QgFAGgHAHQgZAegLAXQgLAYgDAWQgCALABAGIA3gmQgIALgIAPQgRAegBAXQgBAXATgQQAJgIAKgMIAMBiQAWB2AvBcQBFCLA9BIQBXBpB7AuQB+AwBrAJQBRAGB7gOQA0gGB1gXQBWgRBJgBQCCgCAyAJQgUgSgVgSQgrgkgEgBQgRgDA7ACQA1ACAcALQAcALALAIQAFADABACQgCgMgIgRQgRgjgigZQgjgagXgOIgQgJIAegDQAigCAUAGIAgALQgHgGgQgUQgigpgxhGQhIhwgig0Qg9hchAg3QhLhBhDgYQg+gXhFAIAnzn/QgXABgcAHQg4ANgxAlQgwAlgZAlIgPAdIAzgYIACgBIAJgKQgFAFgGAG");
	this.shape_33.setTransform(0.5,-102.1,0.761,0.761);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#131413").ss(2,1,0,4).p("AiRgiIATAUQAaAVAeANQBiApB1hH");
	this.shape_34.setTransform(-28.1,167.3,0.761,0.761);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#131413").ss(2,1,0,4).p("AhdhNIgCAZQABAeAMAXQAmBOCMgC");
	this.shape_35.setTransform(-45.2,160.7,0.761,0.761);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#131413").ss(2,1,0,4).p("AB5iWQgQgLgdgEQg6gHhCAiQgnAUgTAwQgTAuAHAzQAHA1AfAmQAjApA3AI");
	this.shape_36.setTransform(-51.2,150.9,0.761,0.761);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#131413").ss(2,1,0,4).p("AhvgaIAXgHQAegGAcAAQBbADAzBM");
	this.shape_37.setTransform(-23.1,143.2,0.761,0.761);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#131413").ss(2,1,0,4).p("AheAIIANgHQATgHAVgDQBCgLBGAh");
	this.shape_38.setTransform(-39,140.5,0.761,0.761);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#131413").ss(2,1,0,4).p("AguqGIgXFTQAHBcAUAyQAhBVAWBNQAiB1ARB+QAhD4iQCf");
	this.shape_39.setTransform(25,2.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#131413").ss(2,1,0,4).p("ABlQyQACgEgVi1QgWjAgOhTQgOhOgZhoIgVhYQgogpgrhJQhViSgOibQgTjKAmi8QApjSBliFQBYh1BUhYQAqgsAYgU");
	this.shape_40.setTransform(-57.1,29.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#131413").ss(2,1,0,4).p("AhLpGIgHAxQgFA8AIBEQAJBSAdCeQAfCiAZBgQASBCAjBtQAYBbgKBPQgKBPgbApQgOAUgMAF");
	this.shape_41.setTransform(-18,121.8,0.761,0.761);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#131413").ss(2,1,0,4).p("AhHiaIgiAmQghAzABBAQACBBAYAnQAQAYAcAPQAXANBAAAQBJABAtgW");
	this.shape_42.setTransform(44.1,163.2,0.761,0.761);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#131413").ss(2,1,0,4).p("AlsrAIB/C0QCMDDBGBNQBtB7BUB1QB0CfAiBrQAyCagBBLQAAB0hcBEQhfBFhxg6");
	this.shape_43.setTransform(47.2,120.4,0.761,0.761);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#131413").ss(2,1,0,4).p("AhAARIAggWQAqgUA3AP");
	this.shape_44.setTransform(64.2,141.7,0.761,0.761);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#131413").ss(2,1,0,4).p("AhzAUIAggVQAsgVA3AEQA4ADAcAOQAOAGACAG");
	this.shape_45.setTransform(51.5,143.8,0.761,0.761);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#131413").ss(2,1,0,4).p("ACEimQghgSgsAAQhYgBg6BWQg7BXAbBMQAJAdAnAtQAKAMAzASQAxARAVAA");
	this.shape_46.setTransform(32.1,158.4,0.761,0.761);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#131413").ss(2,1,0,4).p("Akkm0IB3BsQCHCCBSBzQAhAuA9BQQAxBFAcAxQBJCBAGCS");
	this.shape_47.setTransform(8,112.1,0.761,0.761);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#131413").ss(2,1,0,4).p("AjrgsIAgAVQAqAXAyAQQCgA0C6gs");
	this.shape_48.setTransform(-17.8,75.2,0.761,0.761);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#131413").ss(0.7,1,0,4).p("AjVBDIA8ALQBQAFBdgbQBrgfAyglQAsghgJgh");
	this.shape_49.setTransform(7.7,78.4,0.761,0.761);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#131413").ss(0.7,1,0,4).p("AjEAxIAHAGQAKAIARAEQA1AOBhgTQBrgWA5gpQAwgkgDgj");
	this.shape_50.setTransform(21.9,96,0.761,0.761);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ai+A6IALAJQAPAJAUAHQA+ATBSgXQCAgkA0hMQAHgKACgZIACgW");
	this.shape_51.setTransform(37,116.4,0.761,0.761);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ai+g0IAsApQA/ArBbAPQBdAOA3gXQAbgLAJgP");
	this.shape_52.setTransform(-32.9,122.9,0.761,0.761);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ai7hFIAKAPQANASAUARQA+A1BfAWQBhAWAwgMQAZgGAFgL");
	this.shape_53.setTransform(-37.3,98,0.761,0.761);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#131413").ss(0.7,1,0,4).p("AjLhLIA+A2QBQA5BbAXQBbAXAzgJQAZgEAHgJ");
	this.shape_54.setTransform(-40.3,78.6,0.761,0.761);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#131413").ss(0.7,1,0,4).p("AqXhsIAoAdQA1AjA+AfQDGBhDdATQDdAUC8gvQBsgaAygfQArgWAmgXQBLgtAegf");
	this.shape_55.setTransform(-19.9,52.8,0.761,0.761);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#131413").ss(0.7,1,0,4).p("Aq/h8IAkAaQAvAfA3AdQCvBdC3AmQDMArCrgQQCJgOCXg4QBwgqBNgxQA5glACgK");
	this.shape_56.setTransform(-22.7,31.6,0.761,0.761);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#131413").ss(0.7,1,0,4).p("AqxhnIAmAaQAzAfBCAdQDTBZEZAZQEYAZD+hGQB/gjBHgn");
	this.shape_57.setTransform(-24.8,11.9,0.761,0.761);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ap9hQIATAPQAbATAsASQCNA6EAAeQEFAgEQgPQDBgLA+gS");
	this.shape_58.setTransform(-26.1,-9.8,0.761,0.761);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ao9hhIAZATQAjAYAzAWQCjBHD+AfQD+AfDRgDQBngCA1gI");
	this.shape_59.setTransform(-25.4,-29.1,0.761,0.761);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#131413").ss(0.7,1,0,4).p("AndhhIAdARQAmAUAwAUQCYA9C9AdQC9AeCuAMQBXAGAxAA");
	this.shape_60.setTransform(-21.6,-45.3,0.761,0.761);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#016BA9").s().p("AgdB8IhDgpQAEhTAGg9QADgnAIguIAHglIAOALQARANATAMQAdATBJAWIgCAjQgDAsABAuQABBLAQBaQgygQhMgsg");
	this.shape_61.setTransform(-69.8,-2.1,0.761,0.761);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#016BA9").s().p("ACWDYQgugPg2gWQg4gYgpgWQgigTg6gkIgzgfQgehFgUhMQgNgwgHg2IgFgtQACgDAjAYQA1AjAWANQA2AgBgApIASAvQAaA6AkA3QAkA2BQBKQAoAkAhAaQg6gNg6gSg");
	this.shape_62.setTransform(-56.8,40.7,0.761,0.761);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#016BA9").s().p("ABWB0QgZgEgPgFIgLgFQixi9gjgeIAKAEQARAEAdACQAwADAigEIASAWQAZAeAkAiQA7A3BPBQQgfAFgaAAQgTAAgQgCg");
	this.shape_63.setTransform(4.9,92.6,0.761,0.761);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5090C6").s().p("AgbC2IgrgHIgUgEQgmgygtg1QhahogjgRIAoAHQAxAGAhgDQAqgEA4gOQA6gPApgSQAqgSAUgOQAVgOAJgPIAPgVIAFgGIAvA+QA0BEAUAfIAvBJIgPAdQgcAig5AYQhAAZhKAMQgtAHgZAAIgSgBg");
	this.shape_64.setTransform(14.1,87.7,0.761,0.761);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#016BA9").s().p("AgUB8QgPgEgGABIgEACIgbkIIARAQQAUATAWAPQAiAWAyAVIACAzQgBA4gKAaQgPAqgHALIgZAEQgLgMgYgGg");
	this.shape_65.setTransform(-43.3,129,0.761,0.761);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#016BA9").s().p("AANCFQgWgVgQgSIgLgOQgvjwgMgYIARARQAWATAYAQIAzAjIAlCDIAoCXQgtgTgmghg");
	this.shape_66.setTransform(-49.2,86.6,0.761,0.761);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#016BA9").s().p("AgHB2QgDg0gMgwQgMgvgjhGIggg8IAEADIAVALQAbALAdABQAuABAmgJIAQAkQAQAuAFA4QAFA3gRAzQgJAZgKAOIgQAAQgTACgPAHQgPAGgHACIgFABQABgQgBgag");
	this.shape_67.setTransform(30.7,133.7,0.761,0.761);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5090C6").s().p("AjkDAQgEg7gSgxQgSgxgcg9IgZg0IArAQQAxAPAdgEQApgGA1gRQA/gVAbgWIAngiQAMgLAIgVQAHgTAEgWIACgRIAiApQAqA0AmAxQAoA2AlBAQAdAzASArQAUAsAIAqQgFgGgMgGQgZgNghAAQgjgBgaAKQgSAHgIAJQgHAHgCAFQgTgHgZgFQgzgJggAIQgfAIgiASQgQAKgKAHQgJgGgPgFQgdgKgdAEQgdAEgbAHIgWAHQACgUgDgeg");
	this.shape_68.setTransform(47.5,127.5,0.761,0.761);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5090C6").s().p("AC7CXQglghglgGQglgFgvAHIgoAIQgGgFgMgFQgXgLgcgEQgdgEgUACIgPACQgNgKgVgEIgUgFIgEgCIgGgDIgbkAIAyAoQA4AqAmALQAxAPAiAFQAkAFAigDQAkgDARgFQARgFAOgKIARgOIAEgEIAJA0QANA5ASAjQAcA5ABBAQgBAJgTATQgLgQgSgRg");
	this.shape_69.setTransform(-30.9,132.1,0.761,0.761);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5090C6").s().p("ABVDFQibgkg/hCQgagbgKgSIgFgNIgwjwIBEA1QBLA4AnANQApAPA3ALQAyAKAZAAQAWAAAUgGQASgGADgHQACgEADAsQACA4ACAXQAHAuANBKQgJALgVAJQgXAJgdAAQgaAAgegHg");
	this.shape_70.setTransform(-39.5,88,0.761,0.761);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5090C6").s().p("AlJDGQhOgVh+hIIhuhEQgbhGgWhVQgNg1gGgvIgDgmQAJAJBjA4QBwBAA7AYQBUAjBwAaQCNAhB9AEQCDAEB2gZQBkgVB3gxQBbglBDgwIAygoIAEAdQAFAjACAmQAEA9gQBiIg5ArQhHAzhIAlQiWBMkGAJIgcABQikAAjjg7g");
	this.shape_71.setTransform(-22.4,41.5,0.761,0.761);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5090C6").s().p("ABIDqQiogBi0gkQingiiMhGQgsgWgkgXIgbgSQADgzAGg7QAMh1ALglIBEAoQBXArBaARQCAAZBdANQB7AQBxAEQCnAFA0AAQBoAABPgJQB2gOBBgPIANAeQAPAmALAnQARA+AGAvQgrAWhBAYQiBAxhqANQiRAUh3AAIgMgBg");
	this.shape_72.setTransform(-24.5,1.9,0.761,0.761);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#016BA9").s().p("AhOBqIgsggQAUgpAagwQA2hhAmgjIASAMQAVAPAVAKIAuAUIgXAgQgcAngQAiQgbA2gaBPQgxgUgfgWg");
	this.shape_73.setTransform(-59.5,-42,0.761,0.761);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5090C6").s().p("ADqDPQiFgJiCgQQifgThugYQhkgVhgg1IhOgxQgEgBA6hkQA7hpAWgTIBrA2QB+A7BlATQEEA0CcAKQBvAIBaACIAyARIAJC6QgvAFhCADQhEAEg6AAQg2AAgugDg");
	this.shape_74.setTransform(-25.3,-37.5,0.761,0.761);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#812D2C").s().p("AidCHQgJgQgCgKIABgHQAIgRAGgeQAMg5gJg6QgJg5gOgqIgMgfIAFADQAIABAPgCQAYgGAEgCIAjA0QAsA3AoAPQBkAkAxgSIAvgRIgDAGQgIAHgKAOQgTAagIAdQgMAwgPAuQgQgHgVgIQgqgQgYACQgbADgYAOQgWAOgKAWQgNAcgMArQgqgmgPgZg");
	this.shape_75.setTransform(-15.5,-106.9,0.761,0.761);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF9FAC").s().p("AhtCnQgtgmgKgXQgDgKACgJIADgHQAGgVAFgfQAJg9gKgwQgKgxgLgpIgJggIAHADQAJACANgEIAZgHIAjAvQAoAyAiAQQAnATAlAIQAkAHAbgFQAigHAdgOIgDAKIgWAwQgaA3gJAkQgmCHhYANIgMABQgrAAgzgrg");
	this.shape_76.setTransform(-15.6,-105.6,0.761,0.761);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#FFB2B5","#D6828C"],[0,1],0.4,2.7,0,0.4,2.7,15.3).s().p("AheBBQgsglgPgfQgQgfgJgjIgGgbIAuAjQA1AjAxAHQBDAHAZACQAlABAcgHQAqgIAHgEIAPABIAAAJQgCAMgLAPQgUAfgmAOQgnAOhFARIg9AMQgSgMgVgUg");
	this.shape_77.setTransform(63,-102.2,0.761,0.761);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#8AC827","#83C325","#73B725","#57A22C","#368A39","#117043","#036B43"],[0.208,0.329,0.478,0.635,0.8,0.973,1],-0.3,-0.7,0,-0.3,-0.7,8.2).s().p("AhmA+QgPgYAVgjQAUgiAqgaQAqgaAogBQApgBAOAYQAPAYgUAjQgVAigqAaQgqAagoABIgFAAQglAAgNgXg");
	this.shape_78.setTransform(-13.6,-148.2,0.761,0.761);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#8AC827","#83C325","#73B725","#57A22C","#368A39","#117043","#036B43"],[0.208,0.329,0.478,0.635,0.8,0.973,1],-0.6,-0.8,0,-0.6,-0.8,12).s().p("AhnBWQgagfAMgvQAMgvArgjQArgkAwgEQAxgDAaAgQAaAfgMAvQgNAvgrAkQgrAjgvAEIgIAAQgrAAgYgdg");
	this.shape_79.setTransform(11.4,-132.7,0.761,0.761);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhHCWIgTAAIgkgNQgCABg+hjQgFgFAlgzQAog7ApgXQA+gjApgMQA+gQApAYQAuAbAMA1QAMAzgaAsQgWAmg5AkQgoAZgaAJIgWAIQhCgEgLABg");
	this.shape_80.setTransform(16.4,-132.9,0.761,0.761);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgBBiQgRgLgNgDQgMgCghgUQgkgXgOgFQgTgHgEgIIAAgGQACgGAvglQA2gtAhgNQAwgTAlAAQAzABATAmQAdA5hMBLQgMANgdAPQgbAOgJABIgBABQgFAAgNgKg");
	this.shape_81.setTransform(-10.6,-148.1,0.761,0.761);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5090C6").s().p("AhxJtIgogKIATgDIBqgTQBYgQAsgEQAvgEBVADIBLADIhMhDIAYgCQAegBAaAGQArAJAhANQgCgHgFgLQgLgYgTgYQgUgYghgVIgdgRIAhgEQAagDAkAKQgZgtglgoQgWgXg7hgQhMh6gLgQQgggvg7gwQg0grg9giQgugbg8gCIgzADIgtgSQgNgXgXggQguhAgxgtQgwgsg5ghIiXhLIA8gzQBEg2ArgRQA3gVBWgKQBdgLBGALQChAZCEBLQBAAlBHBWQBBBPAeBFQAsBlBWB1QAbAjBRAtQApAXAkAPQgBAQgGAJQgKAOgLAJQgWATgpAUQgnAUg7AKIgzAGIgIBWQgEAnAJAkQADAPAOAjQAHARAXAWIAWASIhFAFIAMAMIAYAXQARAOAvgBQgGANgaALQgRAGgaAGIgWAEIAMAGQAMAHApANQgRALhHAOQgrAJgogCQgxgFgmgCQgugChRAFIh2AIIgKAAQglAAgtgJgAihJjIADgBIAFABIgHAAIgBAAgAiZJjg");
	this.shape_82.setTransform(27.2,-110.6,0.761,0.761);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhmC5Qg2gagRg4QgPgzAjhFIAng9IgWAKQgbATgRAhQgRAigCAnQgBAXAGAlQAEAagOAHQgQAHgigQQgigPgUhBQgThAAQgsQAOglAlgkIAkgdQA0geA7ALQAdAGATAMQAMgKAUgKQAmgUAlgEQAlgDAyAQQAZAIARAJQAFgIAHgJQAOgQANgCQAagCAWAHQAiAMAMAkQAQAwAAA4QgBBCgaA8QgZA8gxAaQgpAVgugGQgcgDgbgVQgVgPgJAEQgNAGgBANQAAALADABQADABgNAEQgQAGgbAGQgMACgLAAQgeAAgggPg");
	this.shape_83.setTransform(47.3,157.3,0.761,0.761);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AByDBQgxgBgmgiQgfgdgIghIgIgpQgDgNgJAGQgJAHgDAZQgCAUADARQADAQgHAKQgJAMgYgBQgagBgfgSQgegSgMgVQgKgRgEgfIgCgcIgGgCQgHADgFAaQgGAZAJAdQAEAOAFAJQgHgBgNgIQgagRgZglQgggtAMhGQAOhJA1glQAughA/AFQAfACAZAJIAIAIIATAAQAZABAcADQAeADASAIQAJAEADADIASgHQAXgIAWABQAeABAVAIQAaAKAbAZQAfAdAMA8QAOA/gTA4QgSA3gyAcQgrAXg3AAIgFAAg");
	this.shape_84.setTransform(-37.9,153,0.761,0.761);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AjBGmQgoggAYgVQAQgNAhgGQAVgDAKgQQAKgQgeAJQggAJgygbQgygagRglQgQghAFghQAFggAKAKIAWAdQATAZAOAOQAVAVAnAHQAtAJAugRQBVgeAeiRQAKguAUgkQAJgTAIgJIAPgMQAPgLAEgBQADgBAUAgIATAgIACAFQACAGAEAAQAFAAACgJQACgNgFgaQgFgYgWgXQgQgRgIgCQgDgBgrgFQgFACgUAQQgTAPg+gIQhKgKg3gmQg0gjgPhZIgGhRQCJAFAXgzQALgagQgbIAlASQAtAYAkAeQAlAdA4BOQAbAnAVAhIAJACQANAEAQAGQAUAIAZAaQAYAaAOAbQARAiACAoQADAwgXAsQgUAngsAWIgoANQgGACgLAPIhJBiQhEBbgTAUQggAhg6ATQgfALgZAAQgiAAgXgSg");
	this.shape_85.setTransform(-6.2,-107.7,0.761,0.761);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAEB3QgYgJgWgdQgVgbgGgeQgGgcAFggQAGghANgOQAMgNAmgPQAkgOgCAFQgMAUAaA4QAMAdAPAbIgDBgQgIAGgNAEQgNAEgNAAQgKAAgKgDg");
	this.shape_86.setTransform(-32,-134.3,0.761,0.761);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#AFB4BA").s().p("ADsHjQhTgag1gaQhtg2iLjjQgxhRgfiUIgUiEQgVAYgOAEQgJADAOgsIAPgsIgsAdQABghAOggQAKgTARgVIARgSQgpANgDgBQgCAAAEgIIAOgXQAKgQAdgYQAbgXAhgXQAbgRA0gLQAagGAUgBIgQAhQgKgBgWAOQgVAOgMAQQgQAXgHAiQgFAfAaAuQANAXAPARIADBqQABA5AQBPQARBLAdBSQAYBEBGBEQAkAiAfAUIAFANQALATAdAlQAeAlA8AiQAeARAXAKQgegJgqgMg");
	this.shape_87.setTransform(-33.6,-102.7,0.761,0.761);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B2AEAF").s().p("AJ/VoQgQhhgagvQgnhGghg1QgwhLg8hPQg4hJgogsIgdgeQiiicgZgcQgPgRgHgNIgDgKQhsgLhKgWQhGgWhCgbQhXglgugjQgagUgIAFQgIAFAFAeQADARA3DJQA1DAAYBzQAgCfgDBeIgGCJIgHALIgtAFIgZgNQgagMgFABQgEACgdjtQgjkdgIg1QgOhYgkibQggiIgGgPQg4hGg4hjQhwjFgNixQgQjLAkjsQAgjYA1h3QAshhBkiJQBKhlA8hDQA0g6BchaIAwAlIB6BKQBhA1BCAPQgvgEg3ADQiuALh8BVQidBthND9QhTETA7E8QA4EuCWCoQByB+DTBUQCUA7CXALQBMAFAugHIh0BLQgdATASAqQAQAmAxAsQBgBUByB8QCoC3AfBcQAeBagJBTQgEAqgKAXQgbgBggAMIgoAOQgDgmgIgwg");
	this.shape_88.setTransform(-19.1,34,0.761,0.761);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E1DCE3").s().p("ACxJ1Qg1gIgfgHIgUgFIkzACQiZgsgwgUQhYglg7hAQhEhKhEh+QhGiEgOhXQgMhJgEgoIgCgZQgcAngHgLQgFgHAHgcQAHgbAHgMQAJgOg1AnQAHgYAKgbQAVg3AUgPIgnADIAog0QAxg5AvgRQAvgSAfgGQAPgDAFAAIAIgIQAOgKAhgIQAhgIATABQAKAAADACIBRgiIAlgxQA1g2BRgZQBWgbBZgHQBCgEA+AGQA8AHBmAgQB2AmAtAlQA3AtA7BIQBABOAOAuQAOAwAvBMQAvBLAtAxQAlAoBGAkQAjATAbAKIgHAZQgPAQgZARQgyAkg1ALIhUASIgKA5QgJA+AHAdQAIAiAOAdQAPAdAOAIIARALIggAHQgeAHgCAAIAcATQAhAVAMACIAaAFQgGAHgKAIQgUAPgUACIglACIgOAAIBGAcIgPAQQgXAFgjADQhGAIg+gGQg+gFgwAIQgnAJgIAAQgcAFgdADQgYACgXAAQgfAAgegEg");
	this.shape_89.setTransform(10,-110.3,0.761,0.761);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E1DCE3").s().p("ACdK2IgigTQgJAAgRgDQghgGgmgQQgtgUgZgzQgYgzAJg7QAIgwAxg2IAvgsQAAgKgIhEQgGgzgfhHQgehJgwhJQgpg+hkh9IhbhwQgcgQhngkQhBgWhFhTIg4hPQBeAWDlhVQBygrBggvIAVAiQAfAvCRDCQCpDhA7A9QA8A/BKBxQA3BUAsBSQAgA6AWBkQAVBfgDA4QgDA3gjA0QgkA1gxAUQgqASg7gEIgygIQgMAGgVAGQgqALgqABIgGABQgnAAgngSg");
	this.shape_90.setTransform(26.8,120.8,0.761,0.761);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E1DCE3").s().p("AAjK3Ig7gcQgOAEgngCQgZgBgpgUIgkgTIg0gMQgogKgbg/QgdhCAPhFQANg9BOgnIBLgbIgJg/IgajqQgWjWgNhYQgNhggoiTIgliAQgfgvB6AxQBuAtBVA2QA5AlBEAZQAiANAXAFIgFATQgFAagCAkQgDAkAJBHIAXCiQAMBWAxDHQAoCmAVBDQAQA0ABAoQACAzgTBEQgSBCgqAfQgcAVhBASQgPAEgRAAQgjAAgugRg");
	this.shape_91.setTransform(-35.9,115.9,0.761,0.761);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E1DCE3").s().p("AgUPbQiVgwhsgeQiLgnhqh9Qg6hDgzhmQglhJgXhzQgiijAHi8QAIjZA7i6QA+jBB4iqQBliPBihTQAxgpAcgMIBFACQB2BYEwAmQA2AHCKANQBQAHgDAGQgEAMgPCmQgOClgBADQgCAHAKBoQAMBtAJAsQAIAlAmByIA+C6QAtCQAFCgQAIDzhnCHQhmCHiKAwQgxAShBAKIhnANQgWADgYAAQg/AAhPgWg");
	this.shape_92.setTransform(-22.8,2,0.761,0.761);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#565853").s().p("AieBvIgLgdQARgrAVgfQAagmApgiQAkgfAygNQAagGASgBIBoB5IgdgIQgXgHgdgEQgkgFgbAFQgdAEgiAOQghAOgXASQgTAPgWAiIgRAeg");
	this.shape_93.setTransform(60.1,-152.4,0.761,0.761);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#565853").s().p("AhwCdQgEgVgDgcQgFg5AKgnQAWhbAuguQAegeAjgTIBmA2QgUAEgaANQg2AYghAoQgjAqgOBJQgKA3AFAnIABAFg");
	this.shape_94.setTransform(49.9,-161.7,0.761,0.761);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#565853").s().p("AgDBxQgSgWgSgfQgkg/AHgyQAGgxALgdQAFgPADgEIBcgFQgJANgJAWQgSArABArQACAtAVA+QAPAwASAjg");
	this.shape_95.setTransform(32.3,-161.3,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catBody, new cjs.Rectangle(-78.4,-176,157.2,352.8), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah1EJQgGgGAAgLIAAiOIg4AAIAAA+QAAA9ggAbQgRAOgQAAQgJAAgGgGQgEgFAAgIQAAgHAEgFQADgEAJgEQALgFAGgMQAJgPAAgWIAAhXQAAgKAGgGQAGgGAJAAIBiAAQAJAAAGAGQAGAGAAAKIAACeQAAALgGAGQgGAFgJAAQgJAAgGgFgAk7EJQgGgGAAgLIAAifQAAgKAGgGQAGgGAJAAQAJAAAGAGQAGAFAAALIAACfQAAALgGAGQgGAFgJAAQgJAAgGgFgAGXEMQgJAAgGgGQgHgFAAgKIAAiaQAAgZAWAAIBGAAQAJAAAGAGQAFAGAAAIQAAAIgFAFQgGAGgJAAIgxAAIAAApIAuAAQAJAAAGAGQAFAGAAAIQAAAHgFAGQgGAGgJAAIguAAIAAArIA0AAQAJAAAFAGQAFAFAAAIQAAAIgFAFQgFAGgJAAgAB4EMQgJAAgGgFQgGgGAAgLIAAidQAAgKAGgGQAGgGAJAAQAKAAAFAGQAGAGAAAKIAACOIBFAAIAAiOQAAgKAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAKIAACOIBEAAIAAiOQAAgKAGgGQAGgGAJAAQAKAAAFAGQAGAGAAAKIAACdQAAALgGAGQgFAFgKAAgAgiEMQgKAAgGgFQgGgGAAgKIAAieQAAgKAGgGQAGgGAJAAQAJAAAGAGQAGAFAAALIAAA4IAcAAQAgAAASAPQAUAQAAAeQAAAdgSARQgRAQgeAAgAgODnIAcAAQAMAAAHgHQAHgHAAgMQAAgKgHgGQgIgHgOAAIgZAAgAnMEMQgKAAgGgFQgGgGAAgKIAAidQAAgKAGgGQAGgGAKAAIBUAAQAJAAAGAGQAEAGAAAIQAAAIgFAFQgFAGgJAAIhAAAIAAApIAhAAQAgAAASAOQAUAPAAAeQAAAegSAQQgRAPgeAAgAm4DnIAhAAQAMAAAHgGQAHgHAAgLQAAgKgHgGQgIgGgOAAIgeAAgAnpAcQgGgGAAgLIAAgWIh3AAIAAAWQAAALgGAGQgGAFgJAAQgJAAgGgFQgGgGAAgLIAAgmQAAgKAGgGQAGgFAJAAQAGAAAHgjQAHgiAAgcIAAgsQAAgKAGgGQAGgGAJAAIBfAAQAJAAAGAGQAGAGAAAKIAACNIAEAAQAJAAAGAFQAGAGAAAKIAAAmQAAALgGAGQgGAFgJAAQgJAAgGgFgAo9iUQAAAagFAdQgFAegGAPIBFAAIAAh+Ig1AAgAFygmQgbgdAAgsQAAgtAagdQAcgeAqAAQAVAAARAHQAXAIAAARQAAAIgFAFQgFAGgIAAQgEAAgNgFQgMgFgOAAQgZAAgOATQgOARAAAbQAAAbAOARQAOATAZAAQAOAAANgGQAOgGAEAAQAIAAAGAHQAEAGAAAGQAAASgYAIQgRAHgWAAQgqAAgbgegAljgPQgagJAAgRQAAgJAFgFQAGgGAIAAQAFAAAOAHQAOAHAOAAQALAAAIgHQAIgIAAgLQAAgOgJgGQgGgDgNgCQgLgCgFgDQgHgEAAgJQAAgLAJgFIARgFQARgEAAgQQAAgIgGgFQgFgGgJAAQgLAAgNAGQgMAGgFAAQgJAAgFgGQgFgGAAgJQAAgPAXgIQASgHAVAAQAdAAAQAPQAPAOAAAXQAAAfgZAMQAQAEALAPQAJAOAAARQAAAagTASQgUASgfAAQgXAAgTgHgAJtgPQgGgGAAgLIAAg9IgBAAIg+BMQgGAHgKAAQgJAAgGgGQgGgHAAgIQAAgHAFgGIAwgzQgXgDgOgNQgPgPAAgWQAAg/BGAAIAxAAQAWAAAAAWIAACdQAAALgGAGQgFAFgKAAQgJAAgGgFgAI3imQgHAHAAALQAAAMAHAHQAHAGAMAAIAdAAIAAgyIgdAAQgMAAgHAHgAEhgPQgGgGAAgLIAAhoIAAAAIhbB1QgIAJgKAAQgJAAgGgFQgGgGAAgLIAAifQAAgKAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAKIAABqIAAAAIBbh3QAIgJAKAAQAKAAAFAGQAGAGAAAKIAACfQAAALgGAGQgFAFgKAAQgJAAgGgFgABkgYIgJgbIhOAAIgIAaQgEAPgPAAQgJAAgGgFQgGgGAAgIIACgKIA3iYQAJgYAVAAQAWAAAIAYIA3CYQADAGAAAFQAAAIgGAFQgGAFgIAAQgPAAgFgOgABPhZIgahSIgBAAIgbBSIA2AAgAhUgPQgGgGAAgLIAAg9IhZAAIAAA9QAAALgGAGQgFAFgKAAQgJAAgGgFQgGgGAAgLIAAifQAAgKAGgGQAGgGAJAAQAKAAAFAGQAGAGAAAKIAAA7IBZAAIAAg7QAAgKAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAKIAACfQAAALgGAGQgGAFgJAAQgJAAgGgFgAmxgPQgGgGAAgLIAAifQAAgKAGgGQAGgGAJAAQAKAAAFAGQAGAGAAAKIAACfQAAALgGAGQgFAFgKAAQgJAAgGgFgADRjmQgQgIAAgPQAAgGADgFQADgFAHAAQAJAAAGAJQAGAKANAAQAMAAAHgKQAHgJAKAAQAFAAAEAFQAEAGAAAFQAAAPgQAIQgOAHgTAAQgSAAgNgHg");
	this.shape.setTransform(-0.1,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("APfh3IiTgWQjIhiiQAsQiOAqh2BiQhDA3hjBoQhgBdikALQiOAJiug0QibgviMhRQiEhLg9hJ");
	this.shape_1.setTransform(-102.9,84.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AgtLRQA1gKBQgcQChg3CEhWQGlkVgYnmQgPkrjtivQjVifkvgCQktgDjaCaQjvCpgVElIgJBXQgBBvAkBxQBxFuG3EIIhfBrQAtATA4APQByAeA8gTg");
	this.shape_2.setTransform(0.7,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("Ai5NHQg4gPgtgTIBfhrQm3kIhxluQgkhxABhvIAJhXQAVklDvipQDaiaEtADQEvACDVCfQDtCvAPErQAYHmmlEVQiEBWihA3QhQAcg1AKIAiCBQgXAHggAAQgxAAhGgSg");
	this.shape_3.setTransform(0.7,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-202.9,-86.5,282.5,192.7), null);


(lib.box_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-68,-43,0.869,0.869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(-68,-43,126,102.6), null);


(lib.bgBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgBtn, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ah9DhIhInBIGLDnIiVAuIBXBtIhWA9IhRh0g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjFjfIGLDmIiVAtIBXBuIhWA9IhRh0IheB1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-20.8,-23.4,41.6,46.9), null);


(lib.lines2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.lines2Mc();
	this.instance.parent = this;
	this.instance.setTransform(113,-29,1,1,0,0,0,233,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-29.1,scaleX:1.05,skewY:4.3,x:113.1,y:-29.1},25).to({scaleX:1,skewY:0,y:-29},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-31.5,240,63);


(lib.lines1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.lines1Mc();
	this.instance.parent = this;
	this.instance.setTransform(42.5,12.5,1,1,0,0,0,91,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:90.9,regY:12.6,scaleX:1.1,skewY:-5.2,y:12.6},20).to({scaleX:1,skewY:-0.3,x:42.7},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-26.5,97,53);


(lib.h1rMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(-25.8,10.8,1,1,0,0,0,80.4,62.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131413").s().p("ABBBlQgFhLgegxQgkg/hDgFQgJgBAAgJQAAgIAJAAQBKAGApBDQAjA3AFBSQABAJgJAAQgIAAgBgJg");
	this.shape.setTransform(67.5,-7.8,1,1,60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131413").s().p("AA/B1QgChIglg7Qgkg8g/giQgIgEAFgIQAEgHAIAEQBCAlAnBAQAnA/ADBMQAAAIgJAAQgJAAAAgIg");
	this.shape_1.setTransform(79.6,5.5,1,1,60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#131413").ss(2,2,2).p("ABKEMQBphCA3h1QA4h0gPh7QgEgngQgcQgSgigegJQgbgHgMgCQgYgEgOAHQgLAGgOAWQgPAYgHAGQhDg5g3gDQglgCgeAVQggAWgEAiQgNgGgQACQgQACgNAJQgUAMgUAgQgbAwAAAqQAAAZAKAWQALAWATANQgbAQgOAjQgLAfACAkQACAbAKAnQAPA8ABAGQA1gCBugOQBggIA9AYg");
	this.shape_2.setTransform(62.9,4.2,1,1,60);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWEEQhuAOg1ACIgQhCQgKgngCgbQgCgkALgfQAOgjAbgQQgTgNgLgWQgKgWAAgZQAAgqAbgwQAUggAUgMQANgJAQgCQAQgCANAGQAEgiAggWQAegVAlACQA3ADBDA5QAHgGAPgYQAOgWALgGQAOgHAYAEQAMACAbAHQAeAJASAiQAQAcAEAnQAPB7g4B0Qg3B1hpBCIgDAIQg9gYhgAIg");
	this.shape_3.setTransform(62.9,4.2,1,1,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h1rMc, new cjs.Rectangle(-106.2,-51.8,203.6,125.1), null);


(lib.h1r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131413").s().p("AhtAfQgHgFAEgHQAhguBJgEQBBgDAzAgQAHAEgEAHQgFAIgHgFQgrgbg8ACQhDABgbAoQgDAEgEAAQgDAAgDgBg");
	this.shape.setTransform(51.3,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131413").s().p("AgwB1QgGgGAFgHQAsgrAUg4QAWg1gCg/QgBgIAJAAQAJAAAAAIQACBBgXA6QgXA7gsAuQgDADgDAAQgDAAgDgDg");
	this.shape_1.setTransform(65.5,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131413").s().p("AhaA5QgYgwAjgjQAfgfA1gDQAugCAhAiQAjAlglAkQgHAGgGgGQgGgGAGgGQAVgTgNgXQgLgTgXgJQgXgJgbAFQgnAHgVAWQgaAZASAjQAEAHgIAFIgFABQgEAAgCgEg");
	this.shape_2.setTransform(51.2,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7BFDA").s().p("AhbAPQABgTAPgOQAdgZAngHQAqgHAdAUQAVAOAFAUQADALgDAMQgDAMgKAHIieANQgLgTABgSg");
	this.shape_3.setTransform(51,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131413").s().p("ABfA2QgCgigUgaQgUgaghgJQg3gPg9A5QgGAGgGgGQgGgFAGgGQBIhFBEAYQAkAMAWAeQAVAcABAnQABAIgJAAQgJAAAAgIg");
	this.shape_4.setTransform(74,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131413").s().p("ABaAdQgWgUg1gQQgagJgcAGQgQADgmANQgIADgCgIQgDgIAIgDQApgPASgEQAfgFAcAKQAdAKAOAHQAYAKAPAOQAGAFgGAHQgDADgDAAQgDAAgDgDg");
	this.shape_5.setTransform(79,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131413").s().p("AkLEuQgsg+gXhQQgYhXASg3QAHgWARgcQAKgQAWghQAZglAJgPQAQgcAEgWQACgPACgcQAEglACgKQAMhBArgYQAVgMAYAAQAXAAAXAKQAWALAQASQAUAXAIAgQAIAggEAkQgEAkgSAsQA9gLAtAAQA8AAAzAUQAzATAtApQANALAJAZQAJAZgBATQAAAGgBAFQAnAngIBDQgDAagXAYQgUAVgcANQgVA4gfARQgnAXhAAAQgYAAgugEIgBgBIgNAAQhBAAheA4QgRAKgTAAQg0AAg2hJgAiblZQgiAUgMA3QgCAPgDAeQgCAegDAPQgGAlgtBBQgxBIgKAeQgaBNA8B/QA9B/BBAAQAOAAAMgHQBkg7BFAAIAPABQAtAEAYAAQA5AAAkgVQAagOAUg4QAagKATgSQAWgVADgXQAJg/gtgjQALgJgIgfQgHgegNgLQgugpgzgSQgsgQg1AAQgwAAhbASQAPgiAHgUQAKgeADgZQAEgegGgcQgHgdgSgVQgNgPgSgJQgTgIgTAAQgTAAgQAJg");
	this.shape_6.setTransform(58,-6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjQFQQgkgcggg8Qggg5gNg9QgOhBAOgpQAKgeAxhIQAthBAGglQADgPACgeQADgeACgPQAMg3AigUQAYgOAfAHQAdAHAUAXQASAVAHAdQAGAcgEAeQgDAZgKAeQgHAUgPAiQBvgWA5AFQBbAIBKBCQANALAHAeQAIAfgLAJQAtAjgJA/QgDAXgWAVQgTASgaAKQgUA4gaAOQgfASgvADQgbABg5gFQhKgIhuBCQgMAHgOAAQgWAAgZgTg");
	this.shape_7.setTransform(58,-6.9);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(-25.8,10.8,1,1,0,0,0,80.4,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h1r, new cjs.Rectangle(-106.2,-51.8,199.1,125.1), null);


(lib.h1lMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131413").s().p("AAqBlQgIgEAEgIQATgtgjg4Qgfg1gvgVQgIgDAFgIQAEgHAIADQA2AZAhA7QAkA+gXA1QgCAFgEAAIgFgCg");
	this.shape.setTransform(-58.9,-2.2,1,1,-67);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131413").s().p("AhHBpQgJgCACgJQAPg/AlgyQAlgzA3ghQAHgEAFAHQAEAIgHAEQg0AfgjAxQgjAvgOA8QgBAGgGAAIgDAAg");
	this.shape_1.setTransform(-73.8,-4.2,1,1,-67);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131413").s().p("AAABaQAAgJAIgBQAjgDAKgfQAJgagLghQgIgbgTgTQgUgSgaAAQgeAAgFAcQgCAIgIgCQgJgCACgJQAEgVASgMQARgMAXADQAWADAVARQASAQALAXQAXAugMAnQgMAtgzAFIgCAAQgGAAAAgIg");
	this.shape_2.setTransform(-59.5,-8.4,1,1,-67);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7BFDA").s().p("AhBgzQAAgMAJgKQAIgJAMgEQAUgGAWAKQAgAOARAoQAQAkgGAmQgDAUgRALQgPALgWABg");
	this.shape_3.setTransform(-59.5,-8.4,1,1,-67);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131413").s().p("ABMBYQgIgDACgIQAQhPgpgoQgZgYghgDQgigDgeARQgHAFgFgIQgEgHAHgFQAigUAmADQAmADAdAaQA1AugUBeQgBAGgFAAIgEAAg");
	this.shape_4.setTransform(-81,7.8,1,1,-67);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131413").s().p("AA2BNQgJgqgDgJQgJgagSgPQgvgqgggIQgIgCACgIQADgJAIACQAjAJA1AvQATAQAKAcQAEALAJArQACAJgJACIgDAAQgGAAgBgGg");
	this.shape_5.setTransform(-87.7,-5.6,1,1,-67);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131413").s().p("AjWE3QgogYgBgoQgEh4gqg3IgBgBQgkgvgOgYQgZgsgCgoQgCgjAjgwQgDgfAGgbQAIghAVgRQAoghAoAAQANAAAMADQANgNAZgIQAVgGASgBQALAAAGACQBcAaA5BEQApAvAkBYQAbgoAcgWQAygpA1AAIATABQAlAFAaAcQAbAbACAjQACAxgwAsQgOAOgXAQQgWAQgLALQgRAPgPAcQgIARgRAoQgPAjgJASQgPAdgQATQghAqhQAaQhHAYhJgBQhFAAgogWgAktkEQgSAPgGAeQgEAZAEAdQgjAuABAeQACAkAXApQAOAXAjAtQAvA8ADB+QABAiAmARQAiAQA5ABQBHAABEgXQBJgYAeglQAVgaAihPQAfhKAbgZQALgKAZgRQAXgSAMgLQApgmgCgoQgCgcgWgXQgWgUgdgFIgQgBQgvAAgrAkQgfAagqA+QgqhpgjguQg3hJhfgbIgLgBQgUABgWAIQgYALgBAMQgSgHgRAAQgiAAghAcg");
	this.shape_6.setTransform(-61.6,-10.2,1,1,-67);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai6EuQgwgSgBglQgDh/gvg8QgjgtgOgXQgXgpgCgkQgBgeAjguQgEgcAEgaQAGgeASgOQAxgpA1ATQABgPAfgKQAdgKARAFQBfAaA3BJQAjAuAqBqQAqg/AfgaQAXgTAbgJQAcgLAcAEQAdAFAWAVQAWAWACAcQACAogpAmQgMALgXASQgZARgLAKQgbAagfBJQgiBPgVAaQgbAhg+AXQg6AWhBAFIgdABQgwAAgigMg");
	this.shape_7.setTransform(-61.6,-10.2,1,1,-67);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(10,14.7,1,1,0,0,0,79.7,53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h1lMc, new cjs.Rectangle(-100,-50,189.8,118.1), null);


(lib.h1l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131413").s().p("AgbBoQgegMgMgfQgPglAIgtQAIgzAfgWQAhgYAgASQAeAQAMAlIABAEQAOAigJAnQgKAtgiAWQgRALgSAAQgLAAgNgEgAgvg0QgLAWgCAbQgCAaAHAYQAJAgAdAJQAcAJAXgZQAVgXAGgfQAFgfgOgcQgBgDABgDQgOgjgggFIgHAAQgdAAgRAjg");
	this.shape.setTransform(-40.9,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7BFDA").s().p("AgOBiQghgFgNgdQgNgfAEgnQAEgnASgcQALgQATgGQASgHASAHQAeAKAMApIgCgBQARAdgHAjQgHAhgXAbQgSAUgZAAIgKgBg");
	this.shape_1.setTransform(-40.8,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131413").s().p("Ag/CRQgCg1ADgeQADguAOgiQAOggAcglIA1g+QAFgHAHAGQAGAGgGAHIgxA5QgaAhgNAdQgPAhgEAvQgCAcACA3QAAAIgJAAQgIAAgBgIg");
	this.shape_2.setTransform(-55.1,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131413").s().p("Ag1BoIgTgeQgJgSgCgPQgCgkAVgkQAVgkAngVQAlgUAqABQAJAAAAAJQAAAJgJgBQglAAgiASQgiASgTAgQgTAfAFAdQAEAVAVAkQAEAHgHAFQgDABgDAAQgDAAgDgEg");
	this.shape_3.setTransform(-25.1,-24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#131413").ss(2,2,2).p("AECALQACgEAZg+QAQgqAQgWQAPgSAHgKQAMgRADgOQAEgVgNgUQgMgUgVgKQgjgQgzAMQgkAJgbASQgfATgQAcQgGALACAZQghgRgwgxQgygygfgSQgPgIgYgKQgegMgLAAQglgCgZArQgbAsAVAqQAKATAjAeQAUAQAiAaQgkgRgvgNQg4gQgUAEQgpAKgcAiQglAtAZA7QALAbBcATQBIAPgJACQgaABgdACQg5AEgaAJQgyAQAJAzQAGArAkAfQAuAnBJATQBFATBAgIQBNgJBMg8QBjhOBAiUg");
	this.shape_4.setTransform(-43.8,-8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai/EnQhJgTgugnQgkgfgGgrQgJgzAygQQAagJA5gEIA3gDQAJgChIgPQhcgTgLgbQgZg7AlgtQAcgiApgKQAUgEA4AQQAvANAkARIg2gqQgjgegKgTQgVgqAbgsQAZgrAlACQALAAAeAMQAYAKAPAIQAfASAyAyQAwAxAhARQgCgZAGgLQAQgcAfgTQAbgSAkgJQAzgMAjAQQAVAKAMAUQANAUgEAVQgDAOgMARIgWAcQgQAWgQAqIgbBCQhACUhjBOQhMA8hNAJQgTACgUAAQguAAgwgNg");
	this.shape_5.setTransform(-43.8,-8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131413").s().p("AgbBoQgegMgMgfQgPglAIgtQAIgzAfgWQAhgYAgASQAeAQAMAlIABAEQAOAigJAnQgKAtgiAWQgRALgSAAQgLAAgNgEgAgvg0QgLAWgCAbQgCAaAHAYQAJAgAdAJQAcAJAXgZQAVgXAGgfQAFgfgOgcQgBgDABgDQgOgjgggFIgHAAQgdAAgRAjg");
	this.shape_6.setTransform(-40.9,-3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7BFDA").s().p("AgOBiQghgFgNgdQgNgfAEgnQAEgnASgcQALgQATgGQASgHASAHQAeAKAMApIgCgBQARAdgHAjQgHAhgXAbQgSAUgZAAIgKgBg");
	this.shape_7.setTransform(-40.8,-3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#131413").s().p("Ag/CRQgCg1ADgeQADguAOgiQAOggAcglIA1g+QAFgHAHAGQAGAGgGAHIgxA5QgaAhgNAdQgPAhgEAvQgCAcACA3QAAAIgJAAQgIAAgBgIg");
	this.shape_8.setTransform(-55.1,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#131413").s().p("Ag1BoIgTgeQgJgSgCgPQgCgkAVgkQAVgkAngVQAlgUAqABQAJAAAAAJQAAAJgJgBQglAAgiASQgiASgTAgQgTAfAFAdQAEAVAVAkQAEAHgHAFQgDABgDAAQgDAAgDgEg");
	this.shape_9.setTransform(-25.1,-24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#131413").ss(2,2,2).p("AECALQACgEAZg+QAQgqAQgWQAPgSAHgKQAMgRADgOQAEgVgNgUQgMgUgVgKQgjgQgzAMQgkAJgbASQgfATgQAcQgGALACAZQghgRgwgxQgygygfgSQgPgIgYgKQgegMgLAAQglgCgZArQgbAsAVAqQAKATAjAeQAUAQAiAaQgkgRgvgNQg4gQgUAEQgpAKgcAiQglAtAZA7QALAbBcATQBIAPgJACQgaABgdACQg5AEgaAJQgyAQAJAzQAGArAkAfQAuAnBJATQBFATBAgIQBNgJBMg8QBjhOBAiUg");
	this.shape_10.setTransform(-43.8,-8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai/EnQhJgTgugnQgkgfgGgrQgJgzAygQQAagJA5gEIA3gDQAJgChIgPQhcgTgLgbQgZg7AlgtQAcgiApgKQAUgEA4AQQAvANAkARIg2gqQgjgegKgTQgVgqAbgsQAZgrAlACQALAAAeAMQAYAKAPAIQAfASAyAyQAwAxAhARQgCgZAGgLQAQgcAfgTQAbgSAkgJQAzgMAjAQQAVAKAMAUQANAUgEAVQgDAOgMARIgWAcQgQAWgQAqIgbBCQhACUhjBOQhMA8hNAJQgTACgUAAQguAAgwgNg");
	this.shape_11.setTransform(-43.8,-8.6);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(10,14.7,1,1,0,0,0,79.7,53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h1l, new cjs.Rectangle(-80.2,-40.4,170,108.5), null);


(lib.gal4onokMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wing1
	this.instance = new lib.wing1();
	this.instance.parent = this;
	this.instance.setTransform(47.4,-76.6,1,1,0,0,0,-39.9,51.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-39.8,skewX:180,x:47.5,y:-86.5},5).to({scaleY:1,skewX:35.9,x:47.4,y:-78.6},4).wait(1));

	// Слой_7
	this.instance_1 = new lib.gal40nokBody();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.9,-92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-102.2},5).to({y:-94.2},4).wait(1));

	// wing2
	this.instance_2 = new lib.wing2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(26.1,-76.9,1,1,0,0,0,-11.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:180,y:-87},5).to({scaleY:1,skewX:35.9,y:-78.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.3,-220.8,268.4,257.2);


(lib.gal4onok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lines1
	this.instance = new lib.lines1_1();
	this.instance.parent = this;
	this.instance.setTransform(7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.5},5).to({y:1.1},4).wait(1));

	// box
	this.instance_1 = new lib.box_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:43.5},5).to({y:45.1},4).wait(1));

	// gal4onok
	this.instance_2 = new lib.gal4onokMc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(26.9,28.8,0.3,0.3,0,6.3,-173.7,-0.8,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// lines2
	this.instance_3 = new lib.lines2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-68,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:36},5).to({y:38.4},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-36.3,297.5,141.4);


(lib.cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fst:0,fin:44});

	// timeline functions:
	this.frame_43 = function() {
		if(bool){
			//this.stop();
		}else {
			this.gotoAndPlay('fst');
		}
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(21).call(this.frame_64).wait(15));

	// Layer 2
	this.instance = new lib.catBody();
	this.instance.parent = this;
	this.instance.setTransform(-13.7,237.3,1,1,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:1.3},10,cjs.Ease.get(1)).wait(9).to({y:237.3},10,cjs.Ease.get(-1)).wait(6).to({skewY:180,x:-35.3},0).to({y:1.3},10,cjs.Ease.get(1)).wait(9).to({y:237.3},10,cjs.Ease.get(-1)).wait(1));

	// h1r
	this.instance_1 = new lib.h1r();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19.9,161.3,0.761,0.761,0,0,0,-91.7,-31.2);

	this.instance_2 = new lib.h1rMc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.5,-60.4,0.761,0.761,-27.8,0,0,-91.7,-31.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({regX:-0.5,regY:0.5,x:49.5,y:140.6},0).wait(1).to({y:100.5},0).wait(1).to({y:65.1},0).wait(1).to({y:34.4},0).wait(1).to({regX:-91.6,regY:-31.2,x:-19.9,y:-15.7},0).wait(1).to({regX:-0.5,regY:0.5,rotation:-10,x:49.9,y:-20.1},0).wait(1).to({rotation:-17.8,x:48.6,y:-42.6},0).wait(1).to({rotation:-23.3,x:46.9,y:-58.6},0).wait(1).to({rotation:-26.7,x:45.6,y:-68.3},0).to({_off:true},1).wait(6).to({_off:false,regX:-91.7,regY:-31.2,rotation:-27.8,x:-27.5,y:-60.4},3).to({regX:-91.6,rotation:0,x:-19.9,y:-36.9},4).wait(1).to({regX:-0.5,regY:0.5,x:49.4,y:8.4},0).wait(1).to({y:34.4},0).wait(1).to({y:65.1},0).wait(1).to({y:100.5},0).wait(1).to({y:140.6},0).wait(1).to({regX:-91.7,regY:-31.2,x:-19.9,y:161.3},0).wait(6).to({skewY:180,x:-29.1},0).wait(1).to({regX:-0.5,regY:0.5,x:-98.5,y:140.6},0).wait(1).to({y:100.5},0).wait(1).to({y:65.1},0).wait(1).to({y:34.4},0).wait(1).to({regX:-91.6,regY:-31.2,x:-29.1,y:-15.7},0).wait(1).to({regX:-0.5,regY:0.5,skewX:10,skewY:190,x:-98.8,y:-20.1},0).wait(1).to({skewX:17.8,skewY:197.8,x:-97.6,y:-42.6},0).wait(1).to({skewX:23.3,skewY:203.3,x:-95.9,y:-58.6},0).wait(1).to({skewX:26.7,skewY:206.7,x:-94.5,y:-68.3},0).to({_off:true},1).wait(6).to({_off:false,regX:-91.7,regY:-31.2,skewX:27.8,skewY:207.8,x:-21.5,y:-60.4},3).to({regX:-91.6,skewX:0,skewY:180,x:-29.1,y:-36.9},4).wait(1).to({regX:-0.5,regY:0.5,x:-98.4,y:8.4},0).wait(1).to({y:34.4},0).wait(1).to({y:65.1},0).wait(1).to({y:100.5},0).wait(1).to({y:140.6},0).wait(1).to({regX:-91.7,regY:-31.2,x:-29.1,y:161.3},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({rotation:-46.5,x:-23.6,y:-53},3).wait(3).to({_off:true,rotation:-27.8,x:-27.5,y:-60.4},3).wait(26).to({_off:false,rotation:0,skewX:27.8,skewY:-152.2,x:-21.5},0).to({skewX:46.5,skewY:-133.5,x:-25.4,y:-53},3).wait(3).to({_off:true,skewX:27.8,skewY:-152.2,x:-21.5,y:-60.4},3).wait(11));

	// h1l
	this.instance_3 = new lib.h1l();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47.5,164.1,0.761,0.761,0,0,0,77.5,-10.4);

	this.instance_4 = new lib.h1lMc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-45.4,-65.8,0.761,0.761,38.3,0,0,77.3,-10.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({regX:0,regY:0,x:-106.5,y:127.2},0).wait(1).to({y:87},0).wait(1).to({y:51.6},0).wait(1).to({y:21},0).wait(1).to({regX:77.5,regY:-10.4,x:-47.5,y:-12.9},0).wait(1).to({regX:0,regY:0,rotation:13.8,x:-105.9,y:-38.3},0).wait(1).to({rotation:24.5,x:-103.1,y:-64},0).wait(1).to({rotation:32.1,x:-99.9,y:-82},0).wait(1).to({rotation:36.7,x:-97.5,y:-92.6},0).to({_off:true},1).wait(6).to({_off:false,regX:77.3,regY:-10.5,rotation:38.3,x:-45.4,y:-65.8},3).to({regX:77.5,rotation:0,x:-47.5,y:-34.2},4).wait(1).to({regX:0,regY:0,x:-106.5,y:-5},0).wait(1).to({y:21},0).wait(1).to({y:51.7},0).wait(1).to({y:87.1},0).wait(1).to({y:127.2},0).wait(1).to({regX:77.5,regY:-10.4,x:-47.5,y:164.1},0).wait(6).to({skewY:180,x:-1.4},0).wait(1).to({regX:0,regY:0,x:57.5,y:127.2},0).wait(1).to({y:87},0).wait(1).to({y:51.6},0).wait(1).to({y:21},0).wait(1).to({regX:77.5,regY:-10.4,x:-1.5,y:-12.9},0).wait(1).to({regX:0,regY:0,skewX:-13.8,skewY:166.2,x:56.9,y:-38.3},0).wait(1).to({skewX:-24.5,skewY:155.5,x:54.1,y:-64},0).wait(1).to({skewX:-32.1,skewY:147.9,x:50.9,y:-82},0).wait(1).to({skewX:-36.7,skewY:143.3,x:48.5,y:-92.6},0).to({_off:true},1).wait(6).to({_off:false,regX:77.3,regY:-10.5,skewX:-38.3,skewY:141.7,x:-3.6,y:-65.8},3).to({regX:77.5,skewX:0,skewY:180,x:-1.5,y:-34.2},4).wait(1).to({regX:0,regY:0,x:57.5,y:-5},0).wait(1).to({y:21},0).wait(1).to({y:51.7},0).wait(1).to({y:87.1},0).wait(1).to({y:127.2},0).wait(1).to({regX:77.5,regY:-10.4,x:-1.4,y:164.1},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({regX:77.2,regY:-10.4,rotation:71.7,x:-42.5,y:-64.3},3).wait(3).to({_off:true,regX:77.3,regY:-10.5,rotation:38.3,x:-45.4,y:-65.8},3).wait(26).to({_off:false,rotation:0,skewX:-38.3,skewY:141.7,x:-3.6},0).to({regX:77.2,regY:-10.4,skewX:-71.7,skewY:108.3,x:-6.4,y:-64.3},3).wait(3).to({_off:true,regX:77.3,regY:-10.5,skewX:-38.3,skewY:141.7,x:-3.6,y:-65.8},3).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.8,60.9,288.5,352.8);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.cloudsMc();
	this.instance.parent = this;
	this.instance.setTransform(385.5,-112,1,1,0,0,0,178.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29.3},477).wait(1));

	// Слой_2
	this.instance_1 = new lib.cloudsMc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,-112,1,1,0,0,0,178.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-327.7},477).wait(1));

	// Слой 1
	this.instance_2 = new lib.bgImg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(478));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,714,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var frequency = 3;
		var myLocalThis01 = this;
		stage.enableMouseOver(frequency);
		
		this.btn.addEventListener("mouseover", fl_MouseOverHandler);
		interval = setInterval(startAnimation, 5000);
		
		function fl_MouseOverHandler() {
			startAnimation();
			
		}
		function startAnimation(){
			console.log(myLocalThis01.cat.currentFrame);
			if(myLocalThis01.cat.currentFrame <= 15){
				myLocalThis01.cat.gotoAndPlay('fin');
			}
				
			clearInterval(interval);
			bool = true;
			myLocalThis01.play();
			myLocalThis01.btn.removeEventListener("mouseover", fl_MouseOverHandler);
		}
	}
	this.frame_109 = function() {
		this.cat.play();
		bool = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(109).call(this.frame_109).wait(16));

	// btn
	this.btn = new lib.bgBtn();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(125));

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(180.5,22.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({x:47.6,y:-11.9},10).wait(30).to({scaleX:0.94,scaleY:0.94,x:47.5,y:-11.8},0).wait(3).to({scaleX:1,scaleY:1,x:47.6,y:-11.9},0).wait(2).to({scaleX:0.94,scaleY:0.94,x:47.5,y:-11.8},0).wait(3).to({scaleX:1,scaleY:1,x:47.6,y:-11.9},0).wait(17).to({x:178.5,y:3.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// grad
	this.instance_1 = new lib.grad();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.9,-75.9);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(33));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-233,157);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({x:-18,y:-65},20,cjs.Ease.get(1)).wait(65).to({regX:-0.1,regY:-0.1,scaleX:0.8,scaleY:0.8,rotation:-15,x:-212.9,y:-239.1},15,cjs.Ease.get(-1)).wait(1));

	// gal4onok
	this.instance_3 = new lib.gal4onok();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-225.5,-252.6,1,1,0,0,0,31.4,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:69.5},18).wait(90).to({x:372.5},15,cjs.Ease.get(-1)).wait(1));

	// cat
	this.cat = new lib.cat();
	this.cat.name = "cat";
	this.cat.parent = this;
	this.cat.setTransform(12.7,241.9,1,1,0,0,0,-0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.cat).wait(125));

	// bg
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.8,-300,718.8,955);


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
p.nominalBounds = new cjs.Rectangle(145.2,299,718.8,956);
// library properties:
lib.properties = {
	id: '293B74A1DC1244D181BC0FCC14AD99D2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/box.png", id:"box"},
		{src:"images/clouds.png", id:"clouds"},
		{src:"images/lines1.png", id:"lines1"},
		{src:"images/lines2.png", id:"lines2"}
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
an.compositions['293B74A1DC1244D181BC0FCC14AD99D2'] = {
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