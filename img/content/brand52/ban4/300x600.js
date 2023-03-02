(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.boxes1 = function() {
	this.initialize(img.boxes1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,102);


(lib.boxes2_1 = function() {
	this.initialize(img.boxes2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,170);


(lib.dom1 = function() {
	this.initialize(img.dom1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,58);


(lib.dom2 = function() {
	this.initialize(img.dom2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,58);// helper functions:

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


(lib.uzelokMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-102,-100,2.431,2.431);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B7AB1").ss(4.3).p("AFLE4Qhxhgh+h+Qj8j6hEiRQgmhSgegHQgbgHgGA0QgFA1AXBIQAbBUA4BDQBlB5DmC6QBzBdBfBF");
	this.shape.setTransform(-25.4,-122.4,0.486,0.486);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4B7AB1").ss(4.3).p("AFalQQjJBNi3B8QluD4BbDu");
	this.shape_1.setTransform(21.9,-125.9,0.486,0.486,0,0,0,0.7,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4B7AB1").ss(4.3).p("ACsNnQhljWhblFQi4qLAsov");
	this.shape_2.setTransform(12.6,-45.8,0.486,0.486,0,0,0,0,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4B7AB1").ss(4.3).p("EgHVAnEQA8iWBMlBQCXqABRtRQBQtQCPwbQBIoOA4lkQB1AYA/hBQAfghAIglQAEivhvAhQgjAKgqAeQgVAOgOAN");
	this.shape_3.setTransform(-13.7,20.9,0.486,0.486);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4B7AB1").ss(4.3).p("ABMBZQAFgegTglQglhIh0gl");
	this.shape_4.setTransform(5,-107.2,0.486,0.486,0,0,0,-0.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93B7D4").s().p("AklYlQgLlMASm5QAltyCWoiQCVoiCLkyQArhfAlg8IAdgpQhlPxh9ONQjDWbhyAAQgfAAgZhog");
	this.shape_5.setTransform(-25.3,61.5,0.486,0.486,0,0,0,-0.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4B7AB1").ss(4.3).p("AgZB6QgRgXAAgqQAChUBYhl");
	this.shape_6.setTransform(-8,-103.1,0.486,0.486,0,0,0,0.2,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4B7AB1").ss(4.3).p("Ah4BYQAngOAxgeQBjg7A2hS");
	this.shape_7.setTransform(-16.1,146.8,0.486,0.486,0,0,0,-0.1,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4B7AB1").ss(4.3).p("Ag6EqQA3hNAhhxQBDjghsi1");
	this.shape_8.setTransform(62.6,138.3,0.486,0.486,0,0,0,-0.3,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4B7AB1").ss(4.3).p("AgTxgQgKABgNADQgcAHgRALQgKgagVgpQgrhTg5hLQi4jwkHhJQgVADgPAVQgdAqAhBdQAsB3CWCJQCkCVDYBgIABAHQACAHAFAJQAOAbAlAXQAnAYh8GXQhiFDhgD6QgmBjgmCGQgtChgeCdQhNGcA8DxQA4DlBvAKQAjADAjgTIAdgTICKAwQCgA0BxARQCTAWBagUQBpgYA8hWQAkAAAkgdQBIg6ADiQQAChNhek3Qg7jAiZnOQifnfg9jDQholRgMhzIgNg6QAEgGACgPQAFgdgLgtQANgcAjgpQBEhRBpg/QCBhMBBhJQBEhMgNg7QgHgeg9ACQg6AChQAdQhVAhhGAxQhQA5gmBCQgVASgTAiQglBFAFBSg");
	this.shape_9.setTransform(3,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D5E7EF").s().p("AnTFyQgnhABQjCQBVjPETiVQDZh1DfggQBUgMASAmQARAkgsBCQgsBDhYBHQhfBNh1A4QjJBiiyCcQhZBOgxA6IgLABQgcAAgQgbg");
	this.shape_10.setTransform(27.9,-129.8,0.486,0.486,0,0,0,-0.1,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D5E7EF").s().p("AAyE2QnZm9gGkRQgChWAtg6QAXgdAXgMQBhAIBoA9QBaA1BMBRQBGBJAdBAQAdBAgfAQQg2AbAiBnQAHAUA9CAIBlChQBjCcAkBPQAqBdgkAAQg/AAktkcg");
	this.shape_11.setTransform(-48.3,-135.5,0.486,0.486,0,0,0,0,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D5E7EF").s().p("AhICkQgzgjgOhGQgPhIAkhBQAohKBagiQAOgFAjAuQAmAxAWA8QA9CliBAwQgdAKgaAAQgmAAgigXg");
	this.shape_12.setTransform(-1,-101.5,0.486,0.486,0,0,0,-0.1,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D5E7EF").s().p("AiHedQiAhyhljNQgzhqgZgyQgshVgsg1QhdhwgQjWQgKiFAVlIQAXlaB+vcQCKw9A1hQQAGgIAKgJQATgTASgEQA4gMAVCLQAGArAaD4QAbELAYCsQBOJMBsB0QA6A9AzAKQAgAFArgQQAmgPANAGQAWALAQBCQCDISBKH6QCCN3jPgNQhsgGhkBPQg3ArhlB6QhYBpgwAaQgaAOgcAAQgvAAgwgrg");
	this.shape_13.setTransform(10.6,22.7,0.486,0.486,0,0,0,-0.2,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BFD4E6").s().p("EAFVA0SQjpgjlJhrIkbhkIg8AoQhKAohHgHQjkgVh0nXQh7nxCftQQA9lBBelMQBOkUBOjLQDGoEDJqZQD+tGhQgxQhLgvgeg4QgKgRgDgQIgCgNQm9jHlSkzQk1kZhZj1QhGjAA8hWQAfgsAsgFQIcCXF7HtQB3CbBXCqQAsBVAVA2QAjgXA4gOQAbgHAVgDQgLioBOiOQAnhHAqglQBPiGCkh1QCRhnCvhCQCkg9B5gEQB8gEAOA9QAcB7iMCcQiGCVkKCeQjXCAiNCnQhHBUgcA6QAXBdgJA8QgFAfgJALIAcB5QAZDrDWK2QB8GSFIPbQE8O2B4GMQDCKAgECeQgHEpiVB2QhKA7hJAAQh8CyjYAxQhaAUh1AAQh9AAicgXg");
	this.shape_14.setTransform(3,0.7,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uzelokMc, new cjs.Rectangle(-102,-167.9,186.8,338), null);


(lib.t2Mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EB349").s().p("AnnDoQgWArg9AAQhDAAgTgeQgggpAAg1QAAhiBJhMQAzg3BTAKQgEhCgJgaQgPgmgiANQgIAEgEAcIgBAGQgIAagLANQgbAggUAAQgeAAgEhBQgEgkARgiQARgiAggVQAXgQArAAQBFAAAuA8QApA4AEBNIAAA1IgCANQAAA0gGAvQgHBFADA+QAAAdgWAYQgVAXgaABQgmAAAAg0gAodAuQgMAJgNAeQgNAegCAeQgEAqAOACQAhAHAZgmQAVghAAguQAAg0gTAAQgGAAgYATgAHmDsQgLgZgGg4IgBhIQAAhdABgLIgJiLQAAgIgCAAIgCAAIgaAGQgcACgdgRQgfgTgCgaQgCgNAPgOQAPgNAPgCICrgRQA8gFAcAFQAuAIABAkQACASgPAPQgPAQgWADIgxAEIgIAAQgNACAAAPIACA8QAGDFgCAlIAHBKQAGA4gxAGIgEAAQghAAgQgeg");
	this.shape.setTransform(80.3,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED492E").s().p("AH5FUQAAgnAggXQAggaAAhzIgLi3QgIhcAEgbQAHhRA1gFIBLgCIgCACIAfADIABAAIATACQAbAGAaAAQAPAEAGAcIABARIgBAHIAPDLIAAAPQgGAvAGBNIALCAQAAAUgLAPQgOAPgSACQg3AEgHhTIgMjcIgCgFIgJhSIgChoQAAgDgJgCIgcADQgGAAAAAVIACALIAFEdQACBMgaA8QggBJhAAGIgJAAQghAAgFgmgAs4DQQgPgQACgXIAGgYQACgOAchLIAZg9IAAgHIABAAQgpgfgGhDQgFhmAWhFQAZhAA2gPIAIgEQAPgIArgFQBJgCAPBRIACANIACAHIAPG0QACAPgWATQgVAQgTgBQgcgEgNgZQgTg0ACgdQAEgPgGgyIgkBnIgFAXQgGARgXAYQgaAcgVAAQgUgCgOgRgArMjbQgGARgEA6QAGA6AeANQAVAAgCgPIgCgPIAAgPQgEhAAEgeIAAg8QgiARgJAkg");
	this.shape_1.setTransform(-6.2,59.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBB439").s().p("AypEZQAAglAkgXIgCAAQAjgZAEhyQACgTgEinQgDhYAFgeQALhSA1gCQApAAAgADIAgAIIATABQAbAHAaABQAPAGAEAcIACARIgCAFIADDdQgHAtACBOIAECBQAAAVgOAOQgNAPgTACQg6ABAAhUIAAiwIACgSIgEgUIgFhgIABgTIAAhLIACgJQAAgEgJgCIgeACQgEAAAAAVIgJEoQgCBNgcA7QgkBJhAACQgpAAgEgqgAOqEPQgUgBgNgRQgMgTACgWIAIgZQAHgeAcg5IAeg7IAAgGIACAAQglgigEhDQAAhnAchEQAcg+A7gLIAFgCQAVgKAoAAQBJABAJBSIACAPIgNFlIACAOIgCBIQAAAPgXARQgYARgRgEQgggIgHgWQgRgzAFgfQACgIAAg6IgrBlIgIAWQgFAPgZAYQgcAYgSAAIgDgBgAQSioQgIAQgHA6QAEA+AcAMQADABAIgEQAJgEAAgHIgBgeQAAg+AHggIAEg8QgiAPgNAjg");
	this.shape_2.setTransform(-9.1,59);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3EC6F2").s().p("AL3FgQgBgQAJhvIAEgoIAAgLIAJgzIAAgRIgEAKIgrBRQgWAdgogBQgXgEgHgMQgEgDgNgoIgLgfIgbC+QAAANAGAUQgCAVgWANQgVAKgTgDQgigCgHgbQgIgUAGg6QAFg0AOhAIAHgzQAKgvABgYQgDgjACgTIAAgEIASiFQACAAAAgIQACgNARgKQALgHAdgIQAlAHAZBSQANAvATBVIAagtQATgjA+hKQAJgOATgJQAVgNASABQAiAEgDAtIgCAkIgEAOIAAAJQgJBlgMEQIgHA8QgEAVgYANQgTAJgPABQgqgEgChOgAoQETQgagFgLgaQgGgSACgFIgCgkIiEgHQgPAAgNgGQgNgFgiALIgLACIgIAWQgHAigKALQgLALgagDQgTgEgPgVQgPgUACgXIACgGIALhFQAGgmAtAAQAggEADghIAGgVIgCAAQARglAIg9IA8k5QAHgcATgHQANgEAkAEIBTARIAHgCQAogSAiAdQAUAUgHAkQgGAPgEAeQgLCEgeCNIgJBgIAAAdIgEAAIAJAEIAKABIAWAIQArARgPApIgJAaIgLAyQgMAjgdAAQgGAAgIgCgApukJIgUByIgEAMIgoCzQgCAVgLAVIgEAGIBGACIANiLIANhIIAEgHIgCAAIANgvIAPiRQAAgHgDAAIgogCQAEAigGAeg");
	this.shape_3.setTransform(-82.6,54.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005CA9").s().p("AfbCMQgzg4AAhTQAAhUAzg4QA0g5BRAAQBPAAA2A6QAzA4AABTQAABTgzA4QgzA5hSAAQhRAAg0g5gEAgVgBUQgZAjAAAyQAAAzAZAjQAbAkAwAAQAxAAAbgkQAZgiAAg0QAAgygagjQgagmgxAAQgvAAgcAmgAqFCMQgzg4AAhTQAAhUAzg4QAzg5BSAAQBPAAA2A6QAzA4AABTQAABTgzA4Qg1A5hQAAQhRAAg0g5gApMhUQgZAjAAAyQAAA0AYAiQAdAkAwAAQAwAAAbgkQAZgjABgzQgBgygZgjQgcgmgvAAQgwAAgcAmgAzNCMQg0g4AAhTQAAhUA0g4QA0g5BRAAQAoAAAgAMQArASAAAfQAAAOgKAKQgIALgPAAQgJAAgYgKQgYgJgZAAQgxAAgbAkQgZAiAAAzQAAAyAZAhQAcAjAwAAQAZAAAZgKQAagNAIAAQARAAAKAOQAJAMAAALQAAAjgtAQQghAMgqAAQhRAAg0g5gA5QCMQg0g4AAhTQAAhUA0g4QA0g5BRAAQBPAAA1A6QA0A4AABTQAABTg0A4QgyA5hSAAQhRAAg0g5gA4XhUQgZAjAAAyQAAAzAZAjQAbAkAxAAQAwAAAcgkQAZgiAAg0QgBgygZgjQgbgmgwAAQgxAAgbAmgAc3CZIAAh1IioAAIAAB1QAAApgoAAQgpAAAAgpIAAkvQABgUAMgLQAKgLASAAQASAAAKALQAMALAAAUIAABxICoAAIAAhxQAAgqAoAAQASAAAKALQANALAAAUIAAEvQAAApgpAAQgoAAAAgpgAW+CZIAAjIIgBAAIiuDgQgOARgTAAQgpAAAAgpIAAkvQAAgqApAAQARAAALALQAMALAAAUIAADIIABAAICujgQANgSAUAAQARAAALALQANALAAAUIAAEvQAAAUgNAKQgLALgRAAQgoAAAAgpgAI9CmIgPgyIiUAAIgRAyQgIAcgfAAQgQAAgKgLQgMgKAAgQIACgSIBskiQASgtAnAAQAqAAARAtIBoEiIAFAUQgBAPgKALQgLAJgPAAQgfAAgKgcgAGxAqIBlAAIgxiaIgCAAgAhNCpIiKiVIAACHQAAAQgLAMQgMALgSAAQgRAAgLgLQgMgKAAgSIAAk0QAAgQALgLQAMgMARAAQASAAAKALQANALAAARIAAB0ICDiMQAPgPARAAQAQAAAMALQAMALgBAQQABAQgbAbIhlBjIB8CAQAVAaAAAQQABARgLAKQgNAJgRAAQgRAAgZgZgAteC3QgNgKAAgUIAAkMIg5AAQglAAAAgmQAAgPAKgKQALgLAQAAIDEAAQARAAALALQAJAKAAAPQAAAmglAAIg6AAIAAEMQAAApgoAAQgSAAgKgLgA+dCZIAAksQAAgqApAAIBeAAQA8AAAnAjQAnAkgBA5QABA4gnAjQgmAjg5AAIg8AAIAABYQAAApgnAAQgoAAAAgpgA9OgFIA3AAQAaAAAOgQQAPgQAAgYQAAgZgPgQQgQgRgYAAIg3AAgEggSAC3QgMgKAAgUIAAkQIioAAIAAEQQgBApgoAAQgoAAAAgpIAAksQAAgVAMgKQALgLARAAID5AAQARAAALALQAMAKAAAVIAAEsQAAApgoAAQgSAAgKgLgALMC/QgSAAgKgKQgMgMAAgTIAAksQAAgUAMgLQAKgLASAAQASAAAKALQANALAAAUIAAEOICBAAIAAkOQAAgUANgLQALgLARAAQARAAALALQAMALAAAUIAAEOICDAAIAAkOQAAgUAMgLQAKgLASAAQARAAALALQAMALAAAUIAAEsQAAATgMAMQgMAKgQAAgABKC/QgTAAgMgKQgMgMAAgTIAAkrQAAgoAqAAIBnAAQAqAAAdAZQAeAbAAAqQAAA3gyAYQAjAGAXAYQAWAaABAjQgBA3ghAgQgiAdg4AAgABwB4IA+AAQAzAAAAgvQAAgpg5AAIg4AAgABwgnIApAAQArAAAAgpQAAgTgNgLQgLgJgTAAIgpAAg");
	this.shape_4.setTransform(68.5,-19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#82929C").s().p("EAlrAItQgMgMAAgSQAAgRAMgMQAMgNARAAQASAAAMANQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgA0pIqQgLgMAAgSIAAjOQAAgTALgMQAKgMAQAAQASAAALAMQAKAMAAATIAADOQAAASgKAMQgLAMgSAAQgQAAgKgMgEAltAG8QgKgJAAgSIAAjNQAAgQAKgLQALgJAQAAQAQAAAMAJQALALAAAQIAADNQAAAQgLALQgMAKgQAAQgQAAgLgKgA0sDoQgOgNAAgSQAAgQAOgMQAMgNARgBQASABANANQAOAMAAAQQAAATgOAMQgMAOgTAAQgRAAgMgOgA0ghSQgLgMAAgSIAAlAQAAgTALgMQALgMARAAQAfAAAHAgQAXgjAzAAQA7AAAhAxQAfAqAAA9QAAA6ghArQglAsg4AAQgrAAgcgbIAABgQAAASgLAMQgLALgQAAQgRAAgLgLgAzPl/QgPAUAAAfQAAAhAPAXQAQAZAdAAQAcAAASgZQAPgXAAgdQAAgggPgWQgSgagcAAQgcAAgRAZgA4yjeQgogqAAhAQAAg9AngrQAnguA7AAQA8AAAqAuQAlApAAA1QAAAjgjAAIijAAQAEAaAVAPQATAOAcAAQAXAAAcgPQAcgQAIAAQAOAAAJALQAKAJAAANQAAAZgqAUQgoAUgtAAQg/AAgogpgA37mMQgQAPgDAaIB6AAQgGg7g3AAQgZAAgRASgEgh8gDeQgogqAAhAQAAg9AngrQAnguA8AAQA7AAAqAuQAmApAAA1QAAAjgiAAIikAAQAIA3BBAAQAVAAAegPQAcgQAIAAQAMAAAKALQAJAJAAANQAAAZgqAUQgoAUgrAAQhAAAgpgpgEghFgGMQgQAPgDAaIB8AAQgJg7g1AAQgZAAgSASgA64jDQgLgNAAgTIAAixIhkAAIAACxQAAATgKANQgLALgSABQgRgBgLgLQgKgNAAgTIAAjJQAAgUAKgLQALgMARAAICyAAQAQAAALAMQAKALAAAUIAADJQAAATgKANQgLALgQABQgSgBgKgLgEglTgDhIAAkNIg5AAQglAAAAgmQAAgOAKgLQAKgLARAAIDFAAQAQAAALALQAJALAAAOQAAAmgkAAIg7AAIAAENQAAAUgMALQgLAKgRABQgpAAAAgqg");
	this.shape_5.setTransform(-77.2,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2Mc, new cjs.Rectangle(-352.2,-72.2,704.5,170), null);


(lib.t1Mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82929C").s().p("AR4FoQgKgKAAgNQAAgOAKgKQAKgJANgBQAOABAKAJQAKAKAAAOQAAANgKAKQgKAKgOAAQgNAAgKgKgADgFRQgfgiAAgzQAAgwAfgjQAggkAvAAQAvAAAhAkQAeAjAAApQAAAbgbAAIiCAAQADAWAQALQAQALAWAAQASAAAXgMQAXgMAGAAQAKgBAIAJQAHAIABAKQAAAUgiAQQgfAQgkAAQgzAAghghgAFgDnQgDgVgMgNQgOgNgUAAQgUAAgNAOQgNANgCAUIBhAAIAAAAgAnTFPQgegigBgxQABgwAegjQAggkAvAAQAwAAAfAkQAfAjABAwQgBAxgeAiQgfAjgxAAQgwAAgfgjgAmpDSQgMARABAZQgBAYAMASQAOATAXAAQAYAAANgTQAMgSAAgYQAAgZgMgRQgNgVgYAAQgXAAgOAVgAutFPQgfgiAAgxQAAgwAfgjQAggkAwAAQAuAAAgAkQAgAjAAAwQAAAxgeAiQggAjgwAAQgxAAgfgjgAuCDSQgMARAAAZQAAAYAMASQANATAYAAQAWAAAOgTQAMgSAAgYQAAgZgLgRQgOgVgXAAQgYAAgNAVgAQDFmQgJgJAAgPIAAg4IAAAAIhCBPQgIAKgOAAQgMAAgJgJQgIgJAAgLQAAgKAHgHIAyg0QgYgGgNgOQgPgQAAgXQAAhIBPAAIBAAAQANAAAJAKQAJAJgBAPIAACiQABAPgJAJQgJAJgNAAQgNAAgJgJgAPQC+QgIAHAAANQAAANAIAIQAIAHANAAIAVAAIAAg4IgVAAQgNAAgIAIgAM2FmQgJgJAAgPIAAg8IhQAAIAAA8QAAAPgIAJQgJAJgNAAQgOAAgIgJQgJgJAAgPIAAilQAAgOAJgKQAIgKAOABQANgBAJAKQAIAKAAAOIAAAzIBQAAIAAgzQAAgPAJgJQAIgKANABQAOgBAJAKQAIAJAAAPIAAClQAAAPgIAJQgJAJgOAAQgNAAgIgJgAJIFmQgIgJAAgPIAAg8IhPAAIAAA8QAAAPgJAJQgIAJgOAAQgNAAgJgJQgJgJAAgPIAAilQAAgOAJgKQAJgKANABQAOgBAIAKQAJAJAAAPIAAAzIBPAAIAAgzQAAgPAIgJQAJgKAOABQANgBAIAKQAJAJAAAPIAAClQAAAPgJAJQgIAJgNAAQgOAAgJgJgAB3FmQgJgJAAgPIAAg8IhPAAIAAA8QAAAPgJAJQgIAJgOAAQgNAAgIgJQgJgJAAgPIAAilQAAgPAJgJQAIgKANABQAOgBAIAKQAJAJAAAPIAAAzIBPAAIAAgzQAAgOAJgKQAIgKANABQAOgBAJAKQAJAKAAAOIAAClQAAAPgJAJQgJAJgOAAQgNAAgIgJgApBFmQgIgJAAgPIAAiOIhPAAIAACOQAAAPgJAJQgJAJgNAAQgNAAgJgJQgIgJAAgPIAAiiQAAgPAIgJQAJgKANAAICNAAQANAAAJAKQAIAJAAAPIAACiQAAAPgIAJQgJAJgNAAQgNAAgKgJgAwaFmQgJgJAAgPIAAiOIhPAAIAACOQAAAPgJAJQgJAJgNAAQgOAAgIgJQgJgJAAgPIAAiiQAAgPAJgJQAIgKAOAAICMAAQAOAAAJAKQAJAJAAAPIAACiQAAAPgJAJQgJAJgOAAQgNAAgIgJgAjeFtQgMAAgJgJQgJgIAAgMIAAiqQAAgLAJgJQAJgIAMAAIBSAAQAaAAAQAQQARAPAAAZQAAAigdANIAAAAQAVAEAOAPQAOAPAAAVQAAAggVATQgTASgjAAgAi/FCIAlAAQANAAAJgGQAIgIAAgNQAAgMgIgGQgKgHgPAAIgiAAgAi/DkIAZAAQALAAAHgHQAHgHAAgLQAAgLgHgGQgIgGgKABIgZAAgAR6EPQgKgJABgNIAAikQgBgNAKgIQAIgHANAAQANgBAJAJQAJAIAAAMIAACkQAAANgJAJQgJAHgNAAQgNAAgIgHgApPAWQgJgJAAgPIAAj+QAAgPAJgJQAIgKANAAQAaABAFAZQAJgNAQgIQAQgHARAAQAvAAAcAmQAZAigBAxQAAAugbAhQgdAlgsgBQggAAgZgUIAABKQAAAPgIAJQgJAJgOAAQgNAAgIgJgAoPjZQgMARAAAZQAAAZAMASQANAVAYgBQAWABAOgVQALgRAAgZQAAgXgLgTQgOgUgWAAQgYAAgNATgAtEAWQgJgJAAgPIAAj+QAAgPAJgJQAJgKANAAQAZABAFAZQAJgNAQgIQAQgHASAAQAvAAAbAmQAZAiAAAxQAAAugbAhQgeAlgsgBQgfAAgagUIAABKQABAPgJAJQgJAJgNAAQgNAAgJgJgAsDjZQgNARAAAZQAAAZAMASQANAVAYgBQAWABAOgVQAMgSgBgYQABgXgMgTQgOgUgWAAQgXAAgNATgAO6hbQgeghgBgyQABgvAegjQAggkAvAAQAZAAAWAIQAdALAAATQAAALgHAJQgHAKgKAAQgHAAgPgGQgQgGgKAAQgZAAgPATQgMASAAAZQAAAZANASQAPAUAYgBQAIAAARgGQARgHADABQALAAAIAHQAHAJABALQAAAUgeAMQgWAKgYgBQgwABgfgkgALShKQgYgUAAgjQABhQCLAAIAAgQQAAgQgaAAQgVAAgQALQgRAKgFAAQgNAAgIgJQgGgHAAgKQAAgSAdgPQAcgNAdAAQAqAAAXASQAXARgBAiIAACEQAAAOgHAKQgKAJgNAAQgLAAgGgEQgIgFgDgOQgIAMgSAHQgQAGgQAAQgmAAgXgSgAMRifQgcAGAAAYQAAAMAMAFQAJAFAQABQAvAAAAgvIAAgKQgrAAgNAEgAhjhBQgKgJAAgOQAAgOAKgKQAKgKANAAQAOAAAKAKQAKAKAAAOQAAAOgKAJQgKAJgOAAQgNAAgKgJgAlThKQgYgUAAgjQAAhQCMAAIAAgQQAAgQgbAAQgUAAgQALQgRAKgGAAQgNAAgHgJQgHgHAAgKQAAgSAdgPQAcgNAdAAQArAAAWASQAXARAAAiIAACEQAAAOgIAKQgJAJgNAAQgLAAgHgEQgHgFgEgOQgHAMgSAHQgQAGgRAAQglAAgXgSgAkUifQgcAGAAAYQAAAMAMAFQAJAFAQABQAuAAAAgvIAAgKQgrAAgMAEgAJqhDQgIgKgBgPIAAg7IhPAAIAAA7QABAPgJAKQgJAJgNAAQgOAAgIgJQgJgKAAgPIAAikQAAgPAJgJQAIgKAOAAQANAAAJAKQAJAJgBAPIAAAzIBPAAIAAgzQABgPAIgJQAJgKAOAAQANAAAIAKQAJAJAAAPIAACkQAAAPgJAKQgIAJgNAAQgOAAgJgJgACrhDQgLgIAAgNQAAgGAEgJIAYg2IhPikQgDgHgBgIQABgNAKgIQAKgJANAAQATgBAJAUIA4ByIA0hyQAJgUATABQANAAALAJQAKAIAAANQAAAGgDAJIhxD1QgJASgSAAQgNAAgKgJgAwFhDQgLgIABgNQAAgIADgHIAYg2IhPikQgDgHAAgIQAAgNALgIQAKgJANAAQASgBAKAUIA4ByIA0hyQAJgUATABQANAAAKAJQALAIAAANQAAAGgEAJIhwD1QgJASgSAAQgNAAgLgJgAhhibQgJgHAAgOIAAikQAAgNAJgIQAIgIANAAQANAAAJAIQAJAIAAANIAACkQAAANgJAIQgJAIgNAAQgNAAgIgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1Mc, new cjs.Rectangle(-120,-37,240.1,74), null);


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


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(2,2,2).p("AHpB3QgDhjAbhXQlMB5i5g1QiIgliqi5QhOhYgdgfQgvgygSAEQgWAFgOAvQgOA0AFBIQANC+CICpQBjB9CLA2QBsArC1APQBMAGBogRQB2gTBTgnQgQgpgLg1QgMg4gCgwg");
	this.shape.setTransform(70.3,50.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACVGCQi2gPhsgrQiKg2hjh9QiIipgOi+QgFhIAPg0QAOgvAWgFQASgEAvAyQAdAfBNBYQCqC5CJAlQC4A1FNh5QgcBXAEBjQACAwALA4QAMA1AQApQhUAnh1ATQhLANg9AAQgXAAgVgCg");
	mask.setTransform(70.4,50.3);

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#186FAE").s().p("AAFGCQg2gPgfgxQhbiQgIitQgHioBJieQAXgyA+gOQA6gOAwAbQAyAeANA4QAMA0gZA2QgmBTAJBhQAIBgA2BVQAeAwgQA6QgQA5gwAcQghATgjAAQgTAAgTgFg");
	this.shape_1.setTransform(112.8,64.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#186FAE").s().p("AgsGmQg8gPgZgyQhei4AZjKQAZjRCNiTQAmgpA8AAQA7ABAoAoQAoAoAAA6QgBA6gnAqQgMAMgJALIgHAKQgVAigKAUIgCAEQAFgOgFANQgFAKAFgJIgBADIgMAiQgIAagGAgIgCAGIAAAJIgBBFIABAMQAAAHgBgJQAHA/AeA8QAbA0gNA2QgOA4gyAeQggATgkAAQgSAAgTgFgABJANQgEAZAGghIAAAAIgCAIg");
	this.shape_2.setTransform(65.9,69.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#186FAE").s().p("AjvEyQgugrAFg3QARitBaiNQBeiSCWhOQA0gaA3ANQA4AOAdAyQAcAwgOA6QgPA8gxAZQhmA0grBFIgeAzIgMAXIABgEIgCAHIABgDIgEAKQgMAmgEASIgGAaIAAAJQgFA8glAnQgnApg7AAQg3AAgsgqg");
	this.shape_3.setTransform(28.1,34.8);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACVGCQi2gPhsgrQiKg2hjh9QiIipgOi+QgFhIAPg0QAOgvAWgFQASgEAvAyQAdAfBNBYQCqC5CJAlQC4A1FNh5QgcBXAEBjQACAwALA4QAMA1AQApQhUAnh1ATQhLANg9AAQgXAAgVgCg");
	this.shape_4.setTransform(70.4,50.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(16.4,10.4,108.3,79.7), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(2,2,2).p("AJ4QFQgNgPAKhCQAQhMACgaQACgZA+i2QA/i5ANh5QBNr3jto3QhKiyhhiIQgegrgcgiIgXgZQhOgWhfgRQi+gkhVAXQhWAXh1AxIhjAsQAdC9AZDfQAyG9gUClQgEAcgVBUQgcBpgIAoQgBAEgmBvQgmBxgbBsIhHFwQhJF7gHA8QgDAUgwgBQhEgBgoARQhMAbgSBGQgJAlAIApQAIAnA3AwQBBA4BFACQA8AdBOAIQBPAHBIgRQCsgqAUiRQALhLAHgfQAQhPAbhPQA0h+AnhlQBJjBAdiWQA0AIATABQArAABTgPQguFtgYBUQglCEAnC6QAOBDA3A2QA+A/BXAMQA3AKA6gLQAygJAKgNQBbAVBDglQA6ggAEgxQA1gkABglQAIh5hVghQgdgLgxgEQg2gCgYgCg");
	this.shape.setTransform(102.7,156.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoOW9QhOgIg8gdQhFgChBg4Qg3gwgIgnQgIgpAJglQAShGBMgbQAogRBEABQAwABADgUQAHg8BJl7IBHlwQAbhsAmhxIAnhzQAIgoAchpQAVhUAEgcQAUilgym9QgZjfgdi9IBjgsQB1gxBWgXQBVgXC+AkQBfARBOAWIAXAZQAcAiAeArQBhCIBKCyQDtI3hNL3QgNB5g/C5Qg+C2gCAZQgCAagQBMQgKBCANAPQAYACA2ACQAxAEAdALQBVAhgIB5QgBAlg1AkQgEAxg6AgQhDAlhbgVQgKANgyAJQg6ALg3gKQhXgMg+g/Qg3g2gOhDQgni6AliEQAYhUAultQhTAPgrAAQgTgBg0gIQgdCWhJDBQgnBlg0B+QgbBPgQBPQgHAfgLBLQgUCRisAqQgyAMg2AAQgXAAgYgCg");
	mask.setTransform(102.7,156.6);

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AhVETQjQgEhfhhQhOhQADiIQACh0ArgsQAngnBugRQEpgvDkBaQBiAnA4A4QA4A5gBA8QgCB3iiBSQiZBNjSAAIgXAAg");
	this.shape_1.setTransform(166.6,287.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("ABbEaQjhgFidhYQiehYACh4QADiABbhBQBmhJDXAFQDkAFB/BBQCDBDgCB2QgDCQhABHQhRBcjAAAIgRAAg");
	this.shape_2.setTransform(44.8,291.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#186FAE").s().p("AipFoQkNgHj7heQhGgagig5Qgig7AQhJQAPhBBEgnQBFgpA/AYQB/AvB3AWIA0AIQgGAAgCAAQgCAAAAAAQABAAADAAQADAAAHAAIAiAEQAwAFA7ABQA3ABAxgDIA9gFIAZgDQACAAABAAQABAAAAAAQAAAAgCAAQgBAAgDAAQBfgOBQgYQApgMAngPIAPgGIAegPQAjgRAfgTIAZgQIAEgDIAfgcQgGgzAegxQAmg9BDgWQBEgWBAAnQA9AlAXBEQAbBTgjBbQgfBPhFBBQh8B1jdBNQjiBPj7AAIgtgBgAHPirIABgCIACgBIgBAAIABgBIADgEIADgEIAEgFQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgBAAQgEAAgHATg");
	this.shape_3.setTransform(120.8,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#186FAE").s().p("AkuEQQjTgRiihmQgwgegQg3QgPg4AdgxQAcgxA6gPQA6gQAwAeQAOAJAZANQAXAOAIADIAVAIIAoANQAfAJAyAJIAHACIALAAIAqADQBXAEBEgIQA7gHBagXQBPgUBQgdIBEgaIAFgCIAJgEIAigPQB5g5BfhAQAugfA8ARQA6AQAcAwQAdAygQA4QgPA1gxAhQiABWiZBBQiUA/icAlQigAmiTAAQgrAAgqgEg");
	this.shape_4.setTransform(112,27.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#186FAE").s().p("AszCIQg3gMgdg2Qgdg0APg1QAPg3AzgcQAxgbA5AMQIFBzHNgqQAYgBAYgDIAmgFQAqgFAigHQBZgRBEgWIA5gUIAbgNQAXgPANgHIANgOQAkgqA/ABQA8ABAnAoQApApgBA5QgBA4gnArQgpAvhHAlQg0AbhPAaQhVAchnATQhSAOhtALQiIAOiPAAQl4AAmphfg");
	this.shape_5.setTransform(106.6,251.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#186FAE").s().p("AiMDjQiwgJiNgVQiqgZiLgvQg3gSgdgwQgdgyAPg3QAPg2A0geQA1gfA0ARQB5AoCpAbIAiAFIACAAIAFABIAMABIBKAIQBHAIBaAEQCwAHCZgNIBDgHIAXgEIAjgGQBKgNA9gUIAxgRIAQgHIAZgNQAIgEAngZIABAAIASgRQAtgtA6AEQA0AEAoApQAoAoAEAzQAEA6gtAsQhpBoi+A4QjZA/krAAQhMAAhSgEg");
	this.shape_6.setTransform(120,208.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#186FAE").s().p("ArfDkQhGgYgig7Qgjg8ARhIQAPhCBEgmQBDgnBBAWQCHAuCBAcIB6AWIAAAAIBMAHQBZAHBdgDQApgCAxgFIACAAIApgHQBJgNBCgWIA3gUIAdgNQAxgZAtgfIADgCIAFgEIA4g4IACgHIAEgLQAOhFBEgjQBAghBFAPQBFAQAjBDQAhA+gPBGQgMA4gmA7QghAxgwAtQhnBiiSBAQiFA7iZAXQh+AUiCAAQlCAAleh3g");
	this.shape_7.setTransform(130.9,139.8);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AoOW9QhOgIg8gdQhFgChBg4Qg3gwgIgnQgIgpAJglQAShGBMgbQAogRBEABQAwABADgUQAHg8BJl7IBHlwQAbhsAmhxIAnhzQAIgoAchpQAVhUAEgcQAUilgym9QgZjfgdi9IBjgsQB1gxBWgXQBVgXC+AkQBfARBOAWIAXAZQAcAiAeArQBhCIBKCyQDtI3hNL3QgNB5g/C5Qg+C2gCAZQgCAagQBMQgKBCANAPQAYACA2ACQAxAEAdALQBVAhgIB5QgBAlg1AkQgEAxg6AgQhDAlhbgVQgKANgyAJQg6ALg3gKQhXgMg+g/Qg3g2gOhDQgni6AliEQAYhUAultQhTAPgrAAQgTgBg0gIQgdCWhJDBQgnBlg0B+QgbBPgQBPQgHAfgLBLQgUCRisAqQgyAMg2AAQgXAAgYgCg");
	this.shape_8.setTransform(102.7,156.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(15.1,8.6,175.2,296.3), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(2).p("AsTqzQAZBOA8AiQAiATBKAdQA+AjAcBSQAlBqgGDWQgGD6CIDvQBjCtCIB0QBrBaDVBFQCjA2CoAaQDaAhgFglQgMhOAIg7QAGgpAjh/Qh+AUidgVQk7gqidjKQhliCgtiVQgjhxgIiXQgCipgEhPQgFiKgfhZQgziWh5hOQheg+hdABQiBABhFBNQhCBKAdBfg");
	this.shape.setTransform(80.6,94.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AIhObQiogaijg2QjWhFhqhaQiIh0hjitQiIjvAGj6QAGjWglhqQgchSg+gjQhKgdgigTQg8gigZhOQgdhfBChKQBFhNCBgBQBdgBBeA+QB5BOAzCWQAfBZAFCKQAEBPACCpQAICXAjBxQAtCVBlCCQCdDKE7AqQCdAVB+gUQgjB/gGApQgIA7AMBOQACAUg6AAQg1AAhogQg");
	mask.setTransform(80.4,94.9);

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#186FAE").s().p("AipE5QgtgrAEg3QANiiAniAQAYhQAYgyQAkhHAvgmQAvglA0gCQA4gDAqAqQAnAnACA9QACBAgrAiQgJALgFACQgHAOgQAZIgCAFIgIATQgKAdgGAWQgRA5gKA9IgFAbIgCAQIAAABIgEAqQgFA7glAnQgmAqg7AAQg3AAgsgqg");
	this.shape_1.setTransform(127.1,172.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#186FAE").s().p("AjsF5Qg0gZgQg+QgZhdAhh0QAahcA9hjQBChrBQhGQBhhVBpgPQA8gIAuAXQAyAZAQA6QAOA0gcA3QgeA6g2AHIgoAJIgDABQARgLgSAHQgQAHARgDIgCABIgmAWIgCACIgGAFQguAugMAPIgDAEIgFAHIgYAjIglBGIgDAIIgQArIgJAjIgBAEIAAABIAAAYIAAABQAQA+ggAvQgdAsg3APQgWAGgVAAQgfAAgcgNgAgnDUQABAXADgSIABgCQgEgMgBAAQgBAAABAJg");
	this.shape_2.setTransform(85,154.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#186FAE").s().p("AkQE2Qg4gegKg2QgVhzAxhsQAthiBfhPQBXhIBXgoQBtgyBcAKQA8AHAnAjQApAnAAA7QAAA3gpAtQgsAug3gGIgbgBQgKAEgTAFIgdAIIgoAVIggASIgUANIgYAVIgZAZIgSAUIgBACIgKAPQgLATgEALQAMgbgNAiIgBACIABACIACATQAAAHgDgOQAJA2gYAtQgbAzg4AQQgSAFgSAAQgjAAgkgTg");
	this.shape_3.setTransform(49.2,116.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#186FAE").s().p("AlyEdQgxgcgSg3QglhyBch7QBHhfB5hLQCHhUCSgMQChgOB/BNQAxAeAPA4QAPA5gdAxQgcAvg5AQQg6APgwgdIgbgOIAAAAIgvgNQAGABAEAAQAFAAgOgBIgBAAIgtAAIgQABIgCAAIgIACIgWAFIgzAQIgBAAIg6AeQgZAPgSANIgIAGIADgDQACgBAAAAQAAgBAAABQAAAAgCABQgBABgCABQgKAJAKgIIgGAFQgWATgmApIAJgIQgKAMgEAHIgCADQAJAtgbAtQgeA0g2APQgSAFgSAAQgkAAghgUgAipCSQgFANAFgFIADgFIAAgJIAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIgCAEg");
	this.shape_4.setTransform(47.4,59);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AIhObQiogaijg2QjWhFhqhaQiIh0hjitQiIjvAGj6QAGjWglhqQgchSg+gjQhKgdgigTQg8gigZhOQgdhfBChKQBFhNCBgBQBdgBBeA+QB5BOAzCWQAfBZAFCKQAEBPACCpQAICXAjBxQAtCVBlCCQCdDKE7AqQCdAVB+gUQgjB/gGApQgIA7AMBOQACAUg6AAQg1AAhogQg");
	this.shape_5.setTransform(80.4,94.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(-2.1,-3.9,163.4,200.8), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(2,2,2).p("AH3CEQgBhkAfhVQlaByi+g5QiMgpiqi9QhNhZgdgfQgwgzgSADQgXAEgQAwQgQAzADBIQAJC+CHCtQBjB+CNA6QBuAtC8ATQBOAIBsgPQB6gQBXglQgQgrgKg0QgLg4AAgxg");
	this.shape.setTransform(72.2,50.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACQGIQi7gThugtQiOg6hih+QiIitgJi+QgDhIARgzQAPgwAXgEQATgDAvAzQAdAfBNBZQCrC9CMApQC9A5FbhyQgfBVAABkQABAxAKA4QALA0APArQhXAlh6AQQhHAKg6AAQgeAAgbgDg");
	mask.setTransform(72.3,50.6);

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#186FAE").s().p("AADGDQg3gPgegxQhaiSgFiuQgEiqBPibQAZgxA8gPQA5gOAwAcQAyAdAOA5QANA2gaA0QgrBUAFBgQAFBgA1BVQAdAwgPA6QgQA5gwAdQghATgkAAQgSAAgTgFg");
	this.shape_1.setTransform(115.5,65.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#186FAE").s().p("Ag4GlQg9gPgYgxQhci8AejKQAejSCUiOQAognA6gBQA6AAApAoQAnAoABA7QAAA8goAnQgnAmgYAsQgYAsgNA6IgFAbIgBASQgBAmACAdIACAFIADARQADATAFAMQAHAcAMAZQAaA1gMA1QgNA4gzAeQggATgkAAQgSAAgTgFg");
	this.shape_2.setTransform(67.6,69.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#186FAE").s().p("Aj6EvQgvgsAHg2QAWivBgiKQBjiRCbhJQA1gaA1AMQA4ANAdAzQAcAvgOA7QgOA+gyAXQgiARgYAOIgYAQIgGAEQASgOgQAMQgBABgBABQgBAAAAABQgBAAAAAAQABAAAAAAQgSAPgXAXQgVAVgKANIgQAXIgOAZQgWArAEgKQgKAYgGAcIgHAcIgCALIABgFQgIA8giAlQgnAqg7AAQg3AAgtgqg");
	this.shape_3.setTransform(29.2,34.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACQGIQi7gThugtQiOg6hih+QiIitgJi+QgDhIARgzQAPgwAXgEQATgDAvAzQAdAfBNBZQCrC9CMApQC9A5FbhyQgfBVAABkQABAxAKA4QALA0APArQhXAlh6AQQhHAKg6AAQgeAAgbgDg");
	this.shape_4.setTransform(72.3,50.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(17.4,10,110.2,81.1), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D1D1C").ss(2,2,2).p("AEDmCQg3CLhNBZQhWBkigBhQgMAHhTAJQhPAJgMANQgkAogeAyQgnA/gCAlQgCAwARApQAOAiAhAtQAgApAgANQAiAOAvgMQBhgaBig0QB4hBBShXQBhhoAyhfQAwhcAQhsQAViNgVhlQgXhxhDgCg");
	this.shape_5.setTransform(47.4,63.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkeHpQgggNgggpQghgtgOgiQgRgpACgwQACglAng/QAegyAkgoQAMgNBPgJQBTgJAMgHQCghhBWhkQBNhZA3iLIA2htQBDACAXBxQAVBlgVCNQgQBsgwBcQgyBfhhBoQhSBXh4BBQhiA0hhAaQgWAFgUAAQgVAAgSgHg");
	mask_1.setTransform(47.4,63.7);

	// Слой_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#186FAE").s().p("Ag6GtQgwgcgQg6QgRg7AfguIARgdIADgEQgEARAGgQQAIgPgKAOIABgFIANguIADgaIAAhJIgCgRIAAgCQgKhEgbhFIgNgaIgSggIgTgfIgNgSQglgwgCg0QgDg4AqgqQAngnA9gCQBAgCAhArQCJCrAnDRQAtDshwCpQghAxg1APQgUAFgSAAQgiAAghgTg");
	this.shape_6.setTransform(21.3,93.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#186FAE").s().p("AAuGdQgxgegNg4QgKgxAVg1QgNAdAQgsIAAgiIgCgTIAAgBIgBgCIAAAAQgIgmgIgYIgOgmIACAEIgHgOQgTgngVghIgUgdIgLgQQgXgegggeIgdgaIgCgCQABAAAAAAQABABAAgBQAAAAgBgBQgBgBgCgBQgTgQAVATIgJgGQgwgigQg0QgQg3AegzQAcgwA6gQQA8gSAtAgQC8CDBfDSQBqDqhWDEQgWAyg/APQgUAEgSAAQglAAgggSg");
	this.shape_7.setTransform(59,73.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#186FAE").s().p("ABcEzQgsgqACg4QABgRgBgRIAAAAIAAgDIgIgdIgGgPQgNgYgNgSIgDgEIgEgEIgSgUQgagbgQgMQgQgMgjgUQg8gkg6gWQg4gUgcguQgegxAQg5QAPg1AzgfQA2ghA0ATQDNBMCAB/QCeCagJDBQgCA5gnApQgpAqg6AAQg4AAgqgqg");
	this.shape_8.setTransform(83.9,34.8);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Слой_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkeHpQgggNgggpQghgtgOgiQgRgpACgwQACglAng/QAegyAkgoQAMgNBPgJQBTgJAMgHQCghhBWhkQBNhZA3iLIA2htQBDACAXBxQAVBlgVCNQgQBsgwBcQgyBfhhBoQhSBXh4BBQhiA0hhAaQgWAFgUAAQgVAAgSgHg");
	this.shape_9.setTransform(47.4,63.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(5.1,12.7,84.7,101.6), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1D1C").ss(2).p("AtEowQgnCPAYDkQAfExCWDJQCXDMDZBgQCXBECuAKQCMAJDVhIQClg3CVhQQDChngagbQg6g4gcg1QgVglgwh7QhaBpiLBaQkWC1j3hFQkvhUhcjyQgihXgIh1QgEg0ACiCQADi6gRhLQgXhphKgPQi9gmguCmg");
	this.shape_9.setTransform(108,70.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAXK3QiugKiXhEQjZhgiXjMQiWjJgfkxQgYjkAniPQAuimC9AmQBKAPAXBpQARBLgDC6QgCCCAEA0QAIB1AiBXQBcDyEvBUQD3BFEWi1QCLhaBahpQAwB7AVAlQAcA1A6A4QAaAbjCBnQiVBQilA3Qi+BAiEAAIgfgBg");
	mask_1.setTransform(108,70.6);

	// Слой_3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#186FAE").s().p("AAOFoQg9gOgXgyQhFicgah9QgShTgDg3QgEhRAXg4QAYg4ArgcQAwgeA5AQQA0AOAgA1QAiA3gVAyIgGAXIgCAGIAAAHIACAwIAAAEQAFAfAGAXQANA5AVA+QAIAZALAcIAHARIAAAAIAEAKQAZA2gLA0QgNA3gzAeQggATglAAQgSAAgUgFg");
	this.shape_10.setTransform(152,116.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#186FAE").s().p("Ah8GTQh6iWAkkOQARiEAwhhQA6h0Bgg9QAwgeA6AQQA6APAcAxQAdAxgQA5QgPA3gwAeIgHAFIgDACQgWAcAEgGQgMATgLAVQAGgKgRAnIgKAgQgHAYgDAVIgGAgIgBAVIgBAsQAAAcACAeIABADIAEAYIAHAaIABAEIAMARQADAFgOgRIAAABQAiArABAyQACA5gpAqQgnAmg8ACIgGABQg7AAghgpg");
	this.shape_11.setTransform(108,129.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#186FAE").s().p("AkKE8Qg3gegLg2QgYhxAwhvQArhkBehRQBWhKBWgqQBrgzBdAIQA8AFAnAlQApAnAAA7QAAA3gpAsQgsAug3gFQgRAAgJgBIAAABIgdAIIgPAFIgXALIhLAtQghAdgVAZQgVAcAIgMIgOAWIgIASIgBACIgFATIgCAEIACAGIAAAAQAMA5gaAxQgcAyg4AQQgSAEgSAAQgjAAgjgSg");
	this.shape_12.setTransform(65.6,106.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#186FAE").s().p("AmpDaQgkgngGg7QgMh1B5hlQBahLCHgwQCVg2CTAWQCdAWBtBoQApAngBA8QAAA6goAoQgpApg6gBQg6AAgpgoIgMgKIgEgDIgHgGIgagMQgMgGAJACQgZgIgOgDIgJgCIgDAAIgEgBIgJgBIgvAAIgLABIgMAAIgDAAIgBAAQg0ALglAMIgZAJIgmATIgnAYIgKAGIAEgDIgHAFIADgCIgbAaQACAygrApQgtApg2AAQg7AAgngqgAjECIIACgEIABgCQgHAJAEgDgAjACBIgBAAIAAAEIABADIAAgCIABgCIABgCIABgGIgDAFg");
	this.shape_13.setTransform(46.9,61.9);

	var maskedShapeInstanceList = [this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Слой_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXK3QiugKiXhEQjZhgiXjMQiWjJgfkxQgYjkAniPQAuimC9AmQBKAPAXBpQARBLgDC6QgCCCAEA0QAIB1AiBXQBcDyEvBUQD3BFEWi1QCLhaBahpQAwB7AVAlQAcA1A6A4QAaAbjCBnQiVBQilA3Qi+BAiEAAIgfgBg");
	this.shape_14.setTransform(108,70.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(20.8,-1,180.8,142.2), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1D1C").ss(2,2,2).p("AJ4QFQgNgPALhDQAPhLACgaQACgaA+i1QA/i5ANh5QBNr3jto3QhKiyhhiIQgegrgcgiIgXgZQhOgWhfgSQi+gjhVAXQhWAXh1AxIhjArQAdC+AZDeQAyG+gUClQgEAcgVBUQgcBpgIAoQgBAEgmBvQgmBxgbBsIhHFwQhJF7gHA7QgDAVgwgBQhEgBgoARQhMAbgSBGQgJAlAIAoQAIAoA3AwQBBA4BFACQA8AdBOAIQBPAHBIgRQCsgqAViRQAJhFAIglQAQhOAbhQQA0h+AnhlQBKjBAdiWQAzAIATABQArAABTgPQguFwgXBRQgmCDAnC7QAOBDA3A2QA+A/BXAMQA3AKA6gLQAygKAKgMQBbAUBDglQA6ggAEgwQA0gkADglQAHh5hVghQgdgLgxgEQg2gCgYgCg");
	this.shape_6.setTransform(102.7,156.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AoOW9QhOgIg8gdQhFgChBg4Qg3gwgIgoQgIgoAJglQAShGBMgbQAogRBEABQAwABADgVQAHg7BJl7IBHlwQAbhsAmhxIAnhzQAIgoAchpQAVhUAEgcQAUilgym+QgZjegdi+IBjgrQB1gxBWgXQBVgXC+AjQBfASBOAWIAXAZQAcAiAeArQBhCIBKCyQDtI3hNL3QgNB5g/C5Qg+C1gCAaQgCAagPBLQgLBDANAPQAYACA2ACQAxAEAdALQBVAhgHB5QgDAlg0AkQgEAwg6AgQhDAlhbgUQgKAMgyAKQg6ALg3gKQhXgMg+g/Qg3g2gOhDQgni7AmiDQAXhRAulwQhTAPgrAAQgTgBgzgIQgdCWhKDBQgnBlg0B+QgbBQgQBOQgIAlgJBFQgVCRisAqQgyAMg2AAQgYAAgXgCg");
	mask_1.setTransform(102.7,156.6);

	// Слой_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("AhVETQjRgFhfhhQhOhPADiIQACh0AsgsQAmgnBvgRQEogvDkBaQBjAnA4A4QA4A5gBA8QgDB3ihBSQiZBNjSAAIgXAAg");
	this.shape_7.setTransform(166.7,287.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("ABbEaQjggFiehYQiehZACh3QADiABbhBQBmhJDXAFQDkAEB/BCQCDBCgCB3QgDCPhABIQhRBcjAAAIgRAAg");
	this.shape_8.setTransform(44.8,291.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#186FAE").s().p("AipFoQkNgHj7heQhGgagig5Qgig7AQhJQAPhBBEgoQBFgoBAAYQB5AuB8AXIAvAIQgMgCAVACIAiAEQA5AFAyABQA4ABAwgDIA9gFIAZgDQACAAABAAQABAAAAAAQAAAAAAAAQAAAAgBAAQBdgPBNgXQApgMAngPIAtgVQAmgTAcgRIAZgRIAEgCIAfgdQgGgyAegxQAmg9BDgWQBEgWBAAnQA9AlAXBEQAbBSgjBbQgfBPhFBCQh8B1jdBNQjiBPj8AAIgsgBgAHRiuIAAAAIACgCIgCACg");
	this.shape_9.setTransform(120.8,74.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#186FAE").s().p("AkuEQQjTgRiihlQgwgfgQg3QgPg4AdgxQAdgwA5gQQA6gQAwAeIAnAWIAfARIAWAIIAnANQAbAIA2ALIAHABIALABIAqADQBXADBEgHQA8gHBZgYQBOgTBRgeIBEgaIAFgCIAJgEIAigPQB5g4BfhBQAugfA8ARQA6ARAcAwQAdAygQA3QgPA1gwAhQiBBWiZBCQiTA/idAkQifAmiRAAQgtAAgrgEg");
	this.shape_10.setTransform(112,27.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#186FAE").s().p("AszCJQg3gMgdg2Qgdg1APg1QAPg3AzgcQAygbA4ANQICByHRgpIBLgIQAdgEA5gKQBUgQBJgWIA8gWIAYgMQAXgPANgHIANgOQAkgqA/ABQA8ACAnAnQApApgBA6QgBA3gnArQgpAvhHAlQgzAbhQAaQhUAchoATQhQAOhvALQiIAOiOAAQl5AAmpheg");
	this.shape_11.setTransform(106.6,251.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#186FAE").s().p("AiMDjQiwgJiMgVQirgaiLguQg3gTgdgwQgdgxAPg3QAPg2A0geQA1ggA1ASQB3AoCqAbIAiAFIACAAIAFABIAMABIBLAIQBZAJBHACQCqAICfgOIBDgHIAXgDQASgCARgEQBMgOA7gTIAjgMIASgHIAMgFIAagNIAugdIABgBIASgQQAtgtA6AEQA0AEAoApQAoAoAEAzQAEA6gtAsQhpBoi9A4QjaA/krAAQhMAAhSgEg");
	this.shape_12.setTransform(120,208.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#186FAE").s().p("ArfDkQhGgYgig7Qgjg8ARhIQAPhCBEgnQBDgnBBAWQCLAwB9AaQAcAHBeAQIAAAAIBMAHQBgAGBWgCQAogCAygFIACAAIApgHQBJgNBCgWIA3gUIAdgNQA1gbApgdIAGgEIACgCIAhgeIARgTIAGgHIACgGIAEgMQAOhFBEgjQBAgiBFAQQBFAQAjBCQAhA/gPBGQgMA4gmA6QghAxgwAuQhnBiiRBAQiGA7iZAXQh+AUiCAAQlDAAldh3g");
	this.shape_13.setTransform(130.9,139.8);

	var maskedShapeInstanceList = [this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Слой_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AoOW9QhOgIg8gdQhFgChBg4Qg3gwgIgoQgIgoAJglQAShGBMgbQAogRBEABQAwABADgVQAHg7BJl7IBHlwQAbhsAmhxIAnhzQAIgoAchpQAVhUAEgcQAUilgym+QgZjegdi+IBjgrQB1gxBWgXQBVgXC+AjQBfASBOAWIAXAZQAcAiAeArQBhCIBKCyQDtI3hNL3QgNB5g/C5Qg+C1gCAaQgCAagPBLQgLBDANAPQAYACA2ACQAxAEAdALQBVAhgHB5QgDAlg0AkQgEAwg6AgQhDAlhbgUQgKAMgyAKQg6ALg3gKQhXgMg+g/Qg3g2gOhDQgni7AmiDQAXhRAulwQhTAPgrAAQgTgBgzgIQgdCWhKDBQgnBlg0B+QgbBQgQBOQgIAlgJBFQgVCRisAqQgyAMg2AAQgYAAgXgCg");
	this.shape_14.setTransform(102.7,156.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(15.1,8.6,175.2,296.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D1D1C").ss(2,2,2).p("AICAMQgThgAQhbQlCCsjEgWQiRgRjIicQhchLgigZQg4gqgRAGQgWAIgHAyQgHA1APBGQAqC5CkCUQB3BrCVAgQBzAZC9gOQBOgGBoggQB1glBQg0QgXgngTgyQgVg2gIgwg");
	this.shape_5.setTransform(71,48.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhjE/QiVggh3hrQikiUgqi5QgPhGAHg1QAHgyAWgIQARgGA4AqQAiAZBcBLQDICcCRARQDEAWFCisQgQBbATBgQAIAwAVA2QATAyAXAnQhQA0h1AlQhoAghOAGQhEAFg6AAQhnAAhLgQg");
	mask_1.setTransform(71.1,48.6);

	// Слой_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#186FAE").s().p("AggFaQh0iCgnimQgnioAyikQARg3AxgdQAzgdA3APQA1APAeAzQAfA0gRA2QgdBgASBeQATBeBABIQAnArABA4QABA6gpApQgoAng8ABIgCAAQg8AAgjgog");
	this.shape_6.setTransform(117.4,52.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#186FAE").s().p("AANGoQgygPgjgwQhxicgDjMQgDjOBwiaQAkgxAxgPQA3gRAzAeQAvAcARA6QATA+ghAsQgVAcgNAaIgKATIgBAEIgHARQgKAggHAjIAAAFIgCAkIAAAjIACAcIAMA0QAKAhAPAcQANAYAaAkQAgAsgSA9QgRA6gvAcQghATgiAAQgTAAgUgGg");
	this.shape_7.setTransform(67.4,64.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#186FAE").s().p("AjSFIQgogogCg6QgJirBTibQBPiWCOhmQAuggA8ASQA6ARAcAvQAeAygRA4QgPA0gwAiQhEAwg4BmQgUAkgJAzQgIAwADAzQACA4grAqQgqAqg4AAQg6AAgogqg");
	this.shape_8.setTransform(25.4,36.9);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Слой_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhjE/QiVggh3hrQikiUgqi5QgPhGAHg1QAHgyAWgIQARgGA4AqQAiAZBcBLQDICcCRARQDEAWFCisQgQBbATBgQAIAwAVA2QATAyAXAnQhQA0h1AlQhoAghOAGQhEAFg6AAQhnAAhLgQg");
	this.shape_9.setTransform(71.1,48.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(11.7,13.8,119.2,69.3), null);


(lib.dom2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dom2();
	this.instance.parent = this;
	this.instance.setTransform(-204,-91,3.138,3.138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dom2_1, new cjs.Rectangle(-204,-91,408,182), null);


(lib.dom1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dom1();
	this.instance.parent = this;
	this.instance.setTransform(-204,-91,3.138,3.138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dom1_1, new cjs.Rectangle(-204,-91,408,182), null);


(lib.dogHand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AgbA/QgLgHgFgPQgFgNAAgOQgBgbAPgXQAMgTAUgKQAWgLAQADQAAABgKADQgNAFgLAGQgRAMgJAQQgMAVAAAWQAAANAEALQAEAKAIAHQANAJAVACQAQABAKgFIAJgEIgBADQgCADgEADQgKAIgSAAQgZAAgQgLg");
	this.shape.setTransform(-70.3,51,1.444,1.444);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AALA7QgLgCgMgLQgNgNgEgRQgHgdARgcQAFgJAGgFQAEgFABABQABAAgCAGIgHAQQgMAcAGAWQAEAOAJALQAIAKAKADIAIACQABAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIABgDIAAgCIADABQACACgCAEQgCAFgHAAIgCAAIgJgBg");
	this.shape_1.setTransform(-89.7,30.3,1.444,1.444);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("AgdBCQgPgWAGggQAKgvAngiQANgLALgEIACgCIAAAAIAAAAIgBgBIAAABIgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIACAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAADgDADIgVASQgPAOgKASQgOAZgEAUQgFAbAMASQALASASADQARADAFgKIABgGIAAgDIACACQACAFgBAEQgBAHgIAEQgHADgLAAQgWgBgQgXg");
	this.shape_2.setTransform(-80.7,39.3,1.444,1.444);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AosDiQALgMASgNQAZgRAcgKQAdgLAvgKQBJgPCBgPID3gaQBEgHA8gIIAegEQAPgCAMgHIAXgSIAWgSQBOg/BKhHQAvguAyg0IAagaIAJgJIgHAKIgZAdQgiAog8A8QhFBGhRBDIgXASQgPANgJAGQgMAJgTACIgeAFQgwAGhRAJIj3AZQiCANhHAOQgsAIggAKQgfALgWAOQgQALgNALIgKAJIAIgKg");
	this.shape_3.setTransform(-10.6,-10.1,1.444,1.444);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AlVBYQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQACACAFgCIAUgJQAvgWAXgOQA5gjAcgqQAOgVAIgHQAOgOAUgFQAQgFAWAAIAnACQA8AFBUALIB1AQQAxAGAfABIAdACQAAACgdABQggABgwgEIh3gNQhYgLg3gEIgmgCQgUAAgPAEQgSAFgKAKQgHAHgOATQggAug6AgQgiATgoAPIgVAHIgBAAIgFgBg");
	this.shape_4.setTransform(-18.3,44.2,1.444,1.444);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AjcFZQAAgBAfgVIAkgaQAZgTAVgRQCDhtBbiPIAZgoIAXgqQAZguALgjQANgrgDgkQgEglgUgZQgRgVgcgNQgTgIgXgCQgOgBgNACIgKABIAJgEQAOgDAOAAQAVAAAYAIQAeAOATAVQAXAbAEAoQAFAmgOAtQgKAggaA0IgXAqIgZApQg1BSg/BCQg0A5g8AvQgiAbgyAgIghASIgBAAg");
	this.shape_5.setTransform(62.5,-12,1.444,1.444);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AAFAIIgFgGIgJgDQgGgEACgCQABgBAFgCIAGAAQAEAAAEACQAFAEACAIIAAABIAAACQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIAAABIgDAAIgBAAg");
	this.shape_6.setTransform(-64.9,57.9,1.444,1.444);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCCA69").s().p("AgxC0QgSgCgOgKQgNgLgGgRQgFgSAGgQQgLAGgOgFQgMgEgJgLQgNgPgDgWQgDgVAJgTQgOAGgPgGQgPgGgIgMQgQgaAOggQALgZAbgVQAigcA3gOQATgEBPgOQA/gLARAAQAugCAcAUQAiAXAKArQAJAqgTAkIgLgDQgXAIgWAaIgkAwQgZAdgqAVQgZANg0ATQAMACAFAEQAEADABAFQABAFgDAEIgEAEQgOAIgQAAIgDAAg");
	this.shape_7.setTransform(-62.1,35.1,1.444,1.444);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CA7D28").s().p("Ag+FQQhlgQgUgBIiPgLQgygCgIAFQAEg7gUgnQgag0hCgNQC6gREygmQBxhdA3gzIA9g2QAkgiARgbQAFgHAdgbQASgRgGgRQgRg2APgeIASgTQAlgQAqAUQAoATASAnQAQAigGAqQgDAbgSAyQgpB5h5CDQguAyhZBQQhMBEgpAOQgIADgTAAQgeAAg9gJg");
	this.shape_8.setTransform(22.6,-11.9,1.444,1.444);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dogHand2, new cjs.Rectangle(-94.3,-61.8,188.7,123.7), null);


(lib.dogHand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AgJBjIgegWIgdgVIg5gmIhehBQgogdgVgUQgUgSAAgDIAXARQAZATAmAaIDUCQQAbATAmgEQAagBAhgYICbhxQAXgRABABQABABgWASIg9AwIhbBIQgOALgPAHQgQAIgTACIgNABQgiAAgagTg");
	this.shape.setTransform(13.4,38.1,1.444,1.444);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AhlCoIgLgEIgTgJQgggRhbg4QgvgeghgYQgegTABgBQABgCAeASIBTAyIA5AiQAlAWAeAPIASAJIAIACIACAAIAFgBQASgIAVgKQAlgVAjgeQAagWAigsQAmgzAPgPQANgOARgMQAQgNAPgJQAigVAdgFQALgBATAAQAOAAALgCQAXgDAOgMQAIgHAFgOIAEgJIgBAKQgEAPgJAJQgIAHgIAEQgNAGgJACQgJACgSAAIgcACQgdAGgeAUQgLAGgTAQQgMAIgRARQgOAPglAyQgeAqggAaQgjAfgnAVQgWAMgSAGIgHADIgDAAg");
	this.shape_1.setTransform(44.6,-1.1,1.444,1.444);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA7D28").s().p("Ah7D0Qhwg9hehKQgagUgIgRQgGgMgBgaQgCg9AZg7QAKgXANgHQAOgIAQAGQAHADAfAUQAeAUBEAmQBGAmAbASQAPAIAHABQAGAAAJgDQArgPAbgQQAZgPAjgiQAWgVArg3QAqg1AYgWQAegcAZgLQAQgHARAAQASgBAPAHQAIAEADAFQACAEAAAJQgBAhgYAmQgGALgoA0Ig4BRQghAvgcAcQgfAeg/ArQhlBIg6AhQgQAJgKAAQgKAAgRgJg");
	this.shape_2.setTransform(34.7,18.4,1.444,1.444);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AgdAuQgVgLgKgWQgJgQAAgSQAAgNAEgLQAEgJACABIAAAJQgCAMACAKQABAQAJANQAKARARAKQARAIATgBQAQgCAOgHQAJgEAJgIQAHgGABABQABABgEAHQgGAJgMAIQgOALgUADIgJAAQgSAAgRgIg");
	this.shape_3.setTransform(-47.2,-15.7,1.444,1.444);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AFtDOQilg0iHhoQgugjg7hAQgZgcgGgCQgHgDgxAEQhAAEgYgBQgsgBglgKQgkgKgVgRQgKgIgFgOQgFgOADgOQAEgbAegJQAagJAhAEQAQACAMAEQAFADgCAFQgCAFgFgCQgKgEgPgCQgegEgZAIQgXAIgDAUQgCALAEALQADALAIAGQAOAMAYAIQAnAPA2ABQAdAAA6gDQAzgEAKAEQAIADAbAeQA4A8AwAmQCFBmCkAzQAFACgCAFQgBAEgEAAg");
	this.shape_4.setTransform(-37.5,16.4,1.444,1.444);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AhCAvQgQgUAGgbQAIghAmgQQAfgOAnABQATAAAPADQAFACgBAFQgBAGgFgCQgNgDgTAAQglgBgdANQggAPgHAbQgFAVAMAQQAOAQAHgEQADgDAEAEQAEAFgFADQgFADgDAAQgNAAgOgRg");
	this.shape_5.setTransform(-85.9,-13.7,1.444,1.444);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AAMBDIAAgBIgSgcQgNgVgCgpQgBgbACgNQABgFAFAAQAGABgBAFIgBAlQACAnALATIASAcIABABQACAEgEAEIgDABQgCAAgDgDg");
	this.shape_6.setTransform(-72.7,-15.6,1.444,1.444);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("AihA0QgFgCABgFQAGgSAQgSQAbgeAwgRQA1gTBVAIQBIAGAVAMQAFAEgDAEQgDAFgFgDQgRgLhGgGQhTgIgzASQgtAQgZAcQgPARgFAQIAAAAQgBAEgEAAg");
	this.shape_7.setTransform(-70.7,-25,1.444,1.444);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AFnE2QhSgmiihfQhgg4g9gvQglgdg1gxIgXgXQg1gxgWg7QgPgpABgqQABgagKgWQgKgVgQgIQgWgLgcAXQggAbAHA5QAEAdALAYQACAFgFACQgFACgDgFQgMgbgDgfQgIg9AlgeQAggcAeAOQATAJALAYQAMAZgBAdQgBAnAPAoQAVA5AyAvIAYAXQA2AyAkAcQA7AuBgA4QChBeBSAmQAFADgDAFQgBADgEAAg");
	this.shape_8.setTransform(-3.1,-10.2,1.444,1.444);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CA7D28").s().p("AhMCYQgpgThRhAQg/gxgdgbQgLgLgOgVQBjgxAMiAQAeAgAdAcQAgAfAOAJIBkBGQBcA+A7AfICkBXQgMgCgTACQgmACggANQggAOgwAcIgqAaQhqgjg/geg");
	this.shape_9.setTransform(2.4,14,1.444,1.444);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCCA69").s().p("ABqEYQgpgThQhAQg/gxgdgdQgJgIgTgbQgPgTgJgEQgIgDg6ADQhDADgZgCQgogEgggIQgjgIgMgKQgLgJgHgLQgGgJAAgFIAAgGQgEACgFAAQgKABgIgLQgJgNgCgRQgCgSAIgOIALgTQAEgKAIgMQARgZAZgPQAmgUA4gKQBGgLA+AOQgGgSgEgYQgJguALgbQAMgdAcgKQAZgJAPALQAdAXAGAuQAFAvAEATQAIArAPAWQARAZA1A4QA1A2AWAOIBlBGQBcA/A7AfICkBWQgMgBgTABQgmADggANQggAOgwAcIgqAaQhrgkg/gdg");
	this.shape_10.setTransform(-24.1,-4.4,1.444,1.444);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dogHand1, new cjs.Rectangle(-97.2,-55,194.5,110.1), null);


(lib.dogBody2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AgTDGQgcgGgTgSQgOgMgRgaQgOgZgIgQQglhOgEhMQgCgcAEgiQAEgbAGgTIALgbIAFgJIgCAKIgJAcQgFAQgDAdQgDAhADAbQAGBLAlBLQAKAUAMATQAPAZAOALQARAPAYAGQATAFAdAAQBAABAfgSQAYgOgBgSQAAgGgGgOIgJgVQgfhIgXhOQgPg1gJg0IgFgdQgBgKABAAQABAAAJAmQALAxARA2QAXBLAgBJIAKAVQAGAPABAJQABAPgKALQgIALgMAGQgTAMgeAFQgUADggAAQgggBgTgFg");
	this.shape.setTransform(34.4,-216.9,1.444,1.444,-15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AgLAbQgigKgQgYQgGgJgCgIQgCgHACAAIAEAFIALANQARATAdAJQAXAHAgAAQAJAAAIgCIAGgBQACABgGAEQgGAFgMACIgUABQgVAAgSgFg");
	this.shape_1.setTransform(-1.2,-221.3,1.444,1.444,-15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("Ag4ApQgMgEgJgFQgDgDgBgCQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAGADQAKADALACQAiAFAfgQQAdgNAYgdIAOgRIABgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIABACIgBAEQgDAIgHAMQgXAhggAPQgYAMgYAAQgMAAgNgDg");
	this.shape_2.setTransform(-1.8,-230.2,1.444,1.444,-15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AioA4QAAgBANgHIAkgVQAggVASgOIAbgYQAUgRAPgEQAUgGAWAMQAKAFAUARQAXAVAbALQASAIAVAGQAPAEAAABQgXACgigNQgegLgYgUQgRgOgMgGQgSgKgOAFQgMADgTAQQgTARgJAFQgXATgdAQQgVALgSAGQgLAEgDAAIgBAAg");
	this.shape_3.setTransform(8.4,-242.6,1.444,1.444,-15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA7D28").s().p("ACIDoQgnAAgXgEQghgHgVgRQgSgPgPgfQgwhYgOhJQgQhPAag5IgFAGIgMAPQgTAVghAJQgeAJgggFQgKgBgMgIQgOgKAAgJQAAgFAHgEIAMgGIBLgsQApgbAggaQAMgKAkAGQAJABAIAHIARANQAiAeBBARQALADAEAEQABACADAJQAWBpASA+QAZBYAfBEQgEALgHALQgMASgNAEQgSAHggAAIgJAAgAg4igIABACIACgEIgDgBQAAAAAAAAQgBAAAAABQAAAAABAAQAAABAAABgADnC1IACgKIAAAPIgCgFgADnC1IAAAAg");
	this.shape_4.setTransform(21.9,-218.8,1.444,1.444,-15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCCA69").s().p("AgOA/QgegIgVgWQgPgPgCgQQArACAogPQApgRAcggQADgEADgBQAEgCADAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBABQAAAAAAAAQgBABAAgBQAAAAgBAAIgBAHQgVAsgBAxQAAAMgEADIgHAEQgQAEgQAAQgNAAgOgDg");
	this.shape_5.setTransform(-0.6,-226.7,1.444,1.444,-15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AgoAaQgDgFAIgVQAJgVANgEQAJgCAqABIADAIQABAEgBAEIgEAIIgGAKQgFAOgFADQgDACgIgBIgbABIgOABQgJAAAAgCg");
	this.shape_6.setTransform(-44.5,-228.6,1.444,1.444,-15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("AACA4QgDgFgKgVQgKgXgFgHIgMgUQgEgHACgEQADgLADgEQAGgJAPgCQAOgDAKALQAIAIAGATIANAkQAIAPgKAHIgRARQgHAGgFAAQgDAAgCgDg");
	this.shape_7.setTransform(-19.6,-224.6,1.444,1.444,-15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AguBLQgIgDgIgGIgPgLQgKgKABgLQAAgEADgHIAOgZQAXgjAdgVQAQgLAOgEQAQgEAOADQAKACAMAJIANAMQAKALgBABQAAABgMgJQgVgQgNgCQgXgFgcAWQgcAVgUAfIgKAQIgGAPQgBAIATAOQAPALAKgDQAFgCAFgFIAIgKQANgRAUgJQANgGACADIgNAIQgSALgKAPIgIALQgGAIgHADIgKABIgJgBg");
	this.shape_8.setTransform(-39.6,-244.8,1.444,1.444,-15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("AhBBbQgDgCgFgJQgLgMgGgKQgEgJABgJQABgGAFgLIAqg7QAdgmAYgMQARgIAQAAQAPAAAMALQANALAJAYQAFAOgBAAQgBAAgHgMQgNgWgKgIQgLgHgMAAQgMAAgPAHQgVAMgbAkIgqA5QgIANAFALQADAIALAPIAGAJQADACAEAAQAHAAAGgGIAKgKQACACgJALQgFAJgLABIgCABQgFAAgFgEg");
	this.shape_9.setTransform(-26.9,-241.2,1.444,1.444,-15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AhCBFQgIgFgGgPIgGgVQgDgPADgKQADgMALgJQAHgHANgIQAzgcAhgHIAVgCQAMAAAJAFQAKAGADALQACAIgDAKQgHAfAAAQIAAASIgCgEQgCgGgBgIQgCgSAGgfQABgLgBgDQgCgGgHgEQgLgGgYAGQghAHgvAbQgYAOgEAOQgDANAIAaQAEALAFADQAEACAKgCQARgEAOgIIAXgOIASgLQAIgEACgEIACgEIABABIAAAEQgBAEgJAHQgVASgTALQgPAJgRAFQgHACgFAAQgGAAgFgCg");
	this.shape_10.setTransform(-17.6,-238.4,1.444,1.444,-15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CA7D28").s().p("ABkB3QgRgBgEgLQgBgEABgIQACgNAOgeQgjAhgwALQgFABgDgBQgEgCgBgFQgIgLgEgQQgKATgLACQgMADgLgJQgHgHgHgNQgGgKAAgGQAAgFADgHQAMgdAWgWQgXAAgYAeQgHALgGACQgLAFgSgLQgSgMgEgKQgEgOAJgSQALgUAVgTQANgMAcgTQAMgHAFgBQAHgCAMACQAYAEAKAFQASAJAEARQAOgHARABQAQABANAJQANAJAHAPQAGAPgCAQQAVgEAJABQAHACAGAFQAGAGABAHQAAAEgDAJQgPAqAMAYIAEAJQgFARgPAKQgNAKgPAAIgDAAg");
	this.shape_11.setTransform(-28.1,-240.6,1.444,1.444,-15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAvBDQgdgTggggQgigggTgbQgTgcAGgHQAHgGAcASQAcASAhAhQAhAfATAcQAUAcgHAHQgCABgDAAQgJAAgUgNg");
	this.shape_12.setTransform(-93.6,-191.9,1.444,1.444,-15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AhNCAQg3h0ANhIQAQheBPAjQAYALAxA3QAlApAbAlQARAYgOASQgHAIgbARQgkAPg7AOQgpAJgOAAQgHAAgCgCg");
	this.shape_13.setTransform(-95.1,-187.9,1.444,1.444,-15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D1D1C").ss(0.8).p("AgOAAQgBAFAEAGQAEAFAHAAQAFABAFgFQAFgEABgHQAAgGgEgFQgEgFgHAAQgFgBgFAFQgFAEAAAHg");
	this.shape_14.setTransform(-77.6,-146.8,1.444,1.444,-15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("AAAAQQgHAAgEgFQgEgGABgFQAAgHAFgEQAFgFAFABQAHAAAEAFQAEAFAAAGQgBAHgFAEQgFAEgFAAIAAAAg");
	this.shape_15.setTransform(-77.6,-146.8,1.444,1.444,-15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D1D1C").ss(0.8).p("AgOAAQgBAFAEAFQAEAEAHABQAFABAFgFQAFgEAAgGQABgFgEgFQgEgFgHAAQgFgBgFAEQgFAEAAAHg");
	this.shape_16.setTransform(-82.9,-156.5,1.444,1.444,-15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1C").s().p("AAAAPQgHgBgEgEQgEgFABgFQAAgHAFgEQAFgEAFABQAHAAAEAFQAEAFgBAFQAAAGgFAEQgEAEgFAAIgBAAg");
	this.shape_17.setTransform(-82.9,-156.5,1.444,1.444,-15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D1D1C").ss(0.8).p("AgRgBQAAAGAEAFQAFAGAHAAQAHABAFgEQAGgFAAgHQABgGgFgFQgFgFgHgBQgGAAgGAEQgFAEgBAHg");
	this.shape_18.setTransform(-72.4,-157.5,1.444,1.444,-15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1C").s().p("AgBAQQgHAAgFgGQgEgFAAgGQABgHAFgEQAGgEAGAAQAHABAFAFQAFAFgBAGQAAAHgGAFQgEAEgGAAIgCgBg");
	this.shape_19.setTransform(-72.4,-157.5,1.444,1.444,-15.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOARQgFgDACgIQABgHAGgIQAGgGAHgDQAHgDAFAEQAEAFgBAHQgBAHgGAHQgHAHgGADIgFABQgEAAgDgDg");
	this.shape_20.setTransform(-48.5,-206.7,1.444,1.444,-15.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAZQgHgFABgKQABgKAIgKQAIgLAJgEQAJgDAHAEQAGAFgBALQgBAJgIAKQgHAKgJAFQgEABgEAAQgFAAgDgCg");
	this.shape_21.setTransform(-25.6,-199.4,1.444,1.444,-15.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1C").s().p("AgmAQQgEgFACgIQACgJAKgGQAKgGAMAAQAVgBAQAMQAGAEADADQABABAAABQABAAAAABQAAABAAAAQAAAAAAABQgBABgOgGQgSgGgPAAQgJAAgHAEQgHACgCAGQgCAEAAAFIgBAEIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBgBAAgBg");
	this.shape_22.setTransform(-56.8,-123.7,1.444,1.444,-15.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1C").s().p("AAtAQIgJgJQgQgNgUAAQgTAAgRANIgJAJQgCAEgBAAQgCgBACgFQABgGAFgHQAHgHAKgGQAMgHANAAQAcAAAPAUQAFAHACAGQABAFgBABIgBAAIgEgEg");
	this.shape_23.setTransform(-47.6,-124.1,1.444,1.444,-15.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1C").s().p("AgLAQQgQgKgCgPQgBgGABgEQABgBAAAAQAAgBAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABABAAABIAEAHQAFAMALAGQAJAHANABQALABABABQABAEgMADIgJAAQgLAAgKgHg");
	this.shape_24.setTransform(-55,-110.2,1.444,1.444,-15.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1C").s().p("AhdBlQgcgHgQgZQgNgTgBgbQgBgUAHgVQAKgbATgZQAOgRABABIgLATQgRAcgHAYQgGATACASQABAXAMASQAMAUAaAGQAaAIAWgNQATgJAVgaIBahnQAYgbAUgNIAOgIIAFgBQABABgRAMQgQANgZAdIhXBqQgXAagUALQgNAHgQACIgIAAQgKAAgLgDg");
	this.shape_25.setTransform(-42.8,-129.6,1.444,1.444,-15.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1C").s().p("AgYCJQgmgBgdgFQgogJgXgQQgagRgRgeQgMgUgLggQgIgYgDgXQgCgUAAgzIACgaQACAAABAaIACAeIAEAoQAEAZAIATQAKAdANAVQARAbAXAQQAUANAnAJQAbAGAmABIA8ABQAvgBA5gDIBGgDQAMgCAFgEIAFgEQACACgFAEQgGAGgMADIhHAHQg4AFgwABIgeABIgfgBg");
	this.shape_26.setTransform(-63.4,-157.2,1.444,1.444,-15.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1C").s().p("AARAmQgCgBABgPQAAgVgFgLQgIgPgPgEIgKgBIgEAAQAAAAAAgBQAAAAAAgBQAAAAABgBQABAAABgBQAFgDAHAAQAJgBAIAGQALAGAFALQAJARgGAVQgEAPgDAAIgBAAg");
	this.shape_27.setTransform(-18.5,-155.6,1.444,1.444,-15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1C").s().p("AAGAWQgHgHgFgLQgGgKgBgKQgCgJADgBQADgBANAaQANAagDACIgBAAQgCAAgFgFg");
	this.shape_28.setTransform(-25.4,-150.2,1.444,1.444,-15.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1C").s().p("AgbAsIgDAAIgDgCIgBgBIgBAAIgCgDIgBgFIABgGQADgYAOgSQAHgKAKgHQALgKAKgBQAHAAAFADQAGAEACAGQABAEgBAHIgCAIQgEAPgFAHQgFAHgCAAIgEAHQgDAEgFAEQgFAEgHACIgIADIgJACgAATggQgGABgKAIQgHAGgGAJQgNAPgDAWIgBAFIABAAIAEAAIAPgDQAGgBAGgDIAIgFIAHgFIADgIQACgGADgQQACgLgBgDQgBgCgDgCIgFgBIgBAAg");
	this.shape_29.setTransform(-52.2,-199.4,1.444,1.444,-15.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1C").s().p("AgfAlQAAAAgBgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgTAKgRQAJgRAPgMQAKgHAGAAQAMgBADAKQACAEgCAGIgFATQgDAKgGAHIABgBQgKAMgGADIgRAGIgMACQgEAAgCgCg");
	this.shape_30.setTransform(-52.1,-199.4,1.444,1.444,-15.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1C").s().p("Ag0BDQgFgCgBgFIgCgGQAAgFADgPQAHgTAJgPQAJgRAMgPQAPgRALgIQATgMAPAFQAKADAEAHQAFAHABAHQACAMgFAMQgEAIgGAIIgGAGIgCADQgNATgNAMIgLAJIgLAIIgQAFIgJABIgKADIgFABIgDAAgAAMgwQgJAHgNARQgLAMgJARQgKASgFAPQgDAKAAAFIABACIADgBQAFgCAEAAIAIgBQAIgBAFgCIAMgHIAJgIQAJgGATgVIAGgGIACgDIAHgPQAEgLgDgJQgDgNgLgDIgFgBQgJAAgLAHg");
	this.shape_31.setTransform(-51.2,-203,1.444,1.444,-15.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#24BCEC").s().p("Ag2A5QgCgGADgLQAOguAkglQAKgKALgFQAOgFAKAGQAIAEAEAKQADAKgDAKQgDAMgPAUIAJgMQgQAUgKAKQgLAMgQALQgHAFgVACIgMAEIgBAAQgDAAgCgEg");
	this.shape_32.setTransform(-51.1,-203.1,1.444,1.444,-15.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1C").s().p("Ag4BTQgFgBgDgCQgDgDgBgEQgCgHABgHQABgKAFgNQASgoAeghQAYgcAegQQAIgGAJAEQAIADADAHQAFAIgDAOQgEAOgCACIAAADQAAAFgDAIQgFAUgRAVIgWAZQgNAMgQALIgSALIgMAEIgCAAQgGAAgFgCgAArhKQgbASgXAbQgdAggPAmQgFANgBAGQgBAGACACIADAEQAGABACAAIAIgDIARgKQATgKAJgLQAIgGAPgRQAPgQAKgVQAFgOABgCIADgPQABgLgFgGQgDgEgFgDIgCAAQgDAAgFACg");
	this.shape_33.setTransform(-50.3,-205.4,1.444,1.444,-15.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag5BOQgPgEANghQAdhJBCgqIAKgFQAHgBAGAGQAGAFABAHQABAKgGARQgEAcgXAYIgaAdQgOAOgbAPIgLAFIgDAAQgEAAgGgCg");
	this.shape_34.setTransform(-50.1,-205.6,1.444,1.444,-15.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1C").s().p("AgcA9QAAgBAKgGQARgMAGgHQANgOAJgZQAEgOABgNIgBgMIgCgFIgBAAQgbAGgRAXQgQATgCAUQgCAQAEAPIADAHQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBgBQgDgCgCgFQgIgQABgRQABgXARgYQATgaAggHQACgBAEABQADABAEADIAEAJQACAIgBAJQAAAMgGARQgLAcgQAOQgKAJgRAIIgMAEIAAgBg");
	this.shape_35.setTransform(-30.8,-191.7,1.444,1.444,-15.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1C").s().p("AgbA4QgDAEgFgQQgJgeARgeQASggAjgJQAEgBABABQACABACADQAHALgFAYQgFATgJAPQgJAQgNAKQgJAHgUAJg");
	this.shape_36.setTransform(-30.7,-191.3,1.444,1.444,-15.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1C").s().p("AgyBfQgJgHgGgMQgEgIgCgHIgBgSQAAgkAbgqQAOgXAPgRQAKgLAKgHQAOgJAPADQAPADALANQAJALADAOQACALgBAQQgBAMgEAMQgNAkgfAiQgYAbgUAHQgFADgFAAIgEABQgHAAgIgGgAgHhCQgPAQgNAVQgaAngCAiIAAAQQABAFADAIQAEAKAJAIIAHAFIADABQAFAAAIgEQASgJAVgbQAdgiALghQADgLABgLQABgMgCgLQgDgMgHgIQgHgKgLgBIgEgBQgRAAgRAVg");
	this.shape_37.setTransform(-28.7,-196.6,1.444,1.444,-15.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#24BCEC").s().p("Ag0BVQgNgOgBgPQgFg4A3hDQAZggAXADQAJABAJAHQAIAGAEAKQAHAQgCAWQgDArgsAxQgfAkgSACIABAAIgEABQgKAAgKgMg");
	this.shape_38.setTransform(-28.7,-196.2,1.444,1.444,-15.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1C").s().p("AgyB2QgMgDgIgHIgEgFIgDgDQgFgGgDgIQgCgGgBgLQgCgSAHgZQANg2AogqQAYgYAcgPQAUgLARACQAMADAGAIQAFAHAEALQAJAfgPApQgKAcgRAeQgPAagVAWQgMALgIAGIgMAHIgMAEQgGACgGAAIgLgBgAAchiQgeAQgTAVQgnAmgPAzQgEARgCANIADATQADARAKAJQAOAMAWgGQAJgDALgIQALgJAHgIQATgTAPgaQAQgcAKgdQANgmgIgaQgDgIgEgGQgEgFgHgBIgEgBQgLAAgNAIg");
	this.shape_39.setTransform(-26.3,-199,1.444,1.444,-15.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag2BwIABACQgJgDgIgJQgIgKgDgJQgEgQADgWQAIgvAdgoQAegpAqgWQAbgOAPALQAFAEAFAKQAKAYgJAlQgJAjgWAlQgcAvghAUQgNAIgOAAQgIAAgHgCg");
	this.shape_40.setTransform(-26.4,-198.8,1.444,1.444,-15.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1C").s().p("AkGB+QgUgHgSgQQgPgOgJgTQgQgggCgmQgCg3AaguQAGgLAKgMQAGgIABABIgFAIQgHAMgGAMQgXAvADA0QACAkAQAdQAUAmAlAMQAlAMAwgPQAigLAyghQA5glAcgMQAmgQA0gBQAeAAA0ADQAcABAIgBQAPgCARgFQA6gWAdgeQALgKAGgMIAEgJIgCAKQgEAMgLANQgdAhg6AWQgVAIgNABQgNACgZgBQg9gCgVAAQgyACgkAPQgZALg5AmQg0AigjALQgdAJgZAAQgVAAgSgHg");
	this.shape_41.setTransform(-21.8,-130.3,1.444,1.444,-15.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1D1D1C").s().p("AAsCaQgVgBgSgLQgZgOgRgcQgSgegDgqQgCgfAHgpQAEgWAKgjQAOg1ACABQADABgLA1IgKA5QgGAqACAbQACAmAQAdQAOAZAXAQQARALASADIAOADIgEACIgHAAIgEAAg");
	this.shape_42.setTransform(-100.4,-159.1,1.444,1.444,-15.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1D1D1C").s().p("Ah9B+QAAgBANgHIAhgUQAtgcAzg1QAtgtAjg1IAUggQAIgNABABQABABgFANQgHAQgLATQgdA1gxAxQgyA0gzAcQgTALgQAGIgOADIgBAAg");
	this.shape_43.setTransform(-58.9,-211,1.444,1.444,-15.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1D1C").s().p("AgxBbQglgEgegRQgWgMgPgRQgMgMABgBIAOAKQASAOAUAKQAeAPAiACQAoADAmgQQAjgPAeghQAYgaAQgbQALgSAKgWQAHgQABABQACAAgFAQQgGAVgMAXQgPAcgYAcQgRATgNAJQgTAPgUAIQgiAOgiAAIgQAAg");
	this.shape_44.setTransform(-60.2,-201.8,1.444,1.444,-15.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1C").s().p("AApDiIgBgCQgYglgQgnQgchBgNhNQgHgyAAgtQABgyAFgcIAFgfQACgLADgLQAFgSABAAQADAAgLBIQgDAgAAAtQACAyAHArQAMBMAYA/QAJAYAMAZIAKAVIAAgBQABAAAEAKIAAABIAAAAIAAABIAFAPg");
	this.shape_45.setTransform(9.2,-184.7,1.444,1.444,-15.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D1D1C").s().p("AgnBFQgCAAABgHIADgRQAHgXARgeQASgeAQgQQAJgJAFgDQAHgEAAACQAAABgDAFIgLANQgPAWgPAaQgOAXgMAaQgKAVgBAAIAAAAg");
	this.shape_46.setTransform(-81,-281.1,1.444,1.444,-15.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D1D1C").s().p("AAnDZQgPgTgOgZQgphLgHhaQgDgjAFg8QADg1gCgXQgBgagIgYQgHgSABAAQACAAAIAQQALAWADAdQAEAbgDAzQgDBDACAaQAHBUAlBOQALAWAOAYIAJARIgBAAQgCAAgKgPg");
	this.shape_47.setTransform(-65.1,-269.3,1.444,1.444,-15.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1D1D1C").s().p("ABcDRIAAgNIABgRQADgsAYg9IAbhGQAJgWAFgQQAFgNAAgGQABgJgIgFQg4gWgegOQg2gageghQgWgbgNgJQgJgHgLAAQgKAAgJAHQgNAKgNAaIgUAqQgQAngLApQgNAvAHAXQAGAWAZAcQAXAYALAHQAPAJALgCQAHgCADgCIgCACQgCADgFABQgNAFgRgKQgLgGgZgYQgbgbgIgZQgFgSACgTQACgMAGgaQAKgoARgrQAIgUALgWQAPgdAPgMQANgKANAAQAOAAANAJQAQALAVAbQAaAeA2AaIAsATIAWAJQAPAFAHAFQAGAFADAGQACAFAAAJQAAAHgGAPIgOAmIgdBFQgZA+gFApQgCANgBAQIgBAKIgCgKg");
	this.shape_48.setTransform(-62.1,-280.3,1.444,1.444,-15.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CA7D28").s().p("AAkECIghgMQgohFgUhPQgThPADhPIADg0QABgegFgVQgRABgQAdIg1BtQgEAJgFACQgGg0AVg7QAQguAjg7QASgeATgDQAPgCAPANQAGAEAQAUQAuA5BHAXIAlAMQAUAIAJAOQAFAJgFAOIgIAYQgEAQgOAbQgfA8gMBZQgCAQgBAdIgDAtQgFAmgVAHQgFACgGAAQgJAAgMgFg");
	this.shape_49.setTransform(-60.3,-273.8,1.444,1.444,-15.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCCA69").s().p("AAEBnQgTgSgVgaQgKgOgBgJQAAgHAFgOQAehIA1g8QAFACABAKQACAagHBOQgHBAAKAmIABAQIgJABQgPAAgSgPg");
	this.shape_50.setTransform(-78.3,-275.5,1.444,1.444,-15.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#1D1D1C").ss(0.4,0,0,4).p("ABNgGQgKgTgXgIQgXgHgUAJIADgEQgIgLgagDQgagDgKAIQgMAJABAQQAAAMAIAOQAKATARAMQASANATAAQANgBAVgKQAjgTAMgYg");
	this.shape_51.setTransform(-50.7,-119.8,1.444,1.444,-15.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E14722").s().p("AgqAmQgQgMgKgTQgIgOAAgMQgBgQALgJQAKgIAbADQAZADAIALIgCAEQAUgJAXAHQAXAIAKATIgCADQgLAYgjATQgVAKgNABIgCAAQgTAAgRgNg");
	this.shape_52.setTransform(-50.8,-119.8,1.444,1.444,-15.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B03A18").s().p("AhTBlQgWgCgSgMQgMgHgGgKQgFgJgCgOQgFg0AthEQAEgGADgCIAJgCIB9gGQBMgDAogIIAAAEQgiAYgmAsQgWAZgqAzQgfAkgYAKQgQAHgSAAIgHAAg");
	this.shape_53.setTransform(-42.9,-130.5,1.444,1.444,-15.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCCA69").s().p("AhLBdQgJgBgEgHQgEgHAHgWQAHgWALgLQANgOAQgMQASgOAJgJIAhgnQAWgYAOgDQAIgCALAGQAQAIgEAkIACgDQgSA/hgA/QgVANgNABIgNABIgFgBg");
	this.shape_54.setTransform(-52.4,-205.4,1.444,1.444,-15.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FCCA69").s().p("AguCTQgPgCgMgHQgTgNgFgdQgEgSAFgfQALg/AcguQAhg3AzgXQAQgHAMABQAQACALASQAIALAHAXIABgEQAHA4gTA3QgUA4goAoQgWAYgXAIQgLAEgMAAIgEAAg");
	this.shape_55.setTransform(-26,-196,1.444,1.444,-15.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCCA69").s().p("AhBFCQgmgFgdgfQgcgegGgnQgHgqAIglQAKgpAagaIgdgHQgOgDgPgIQgngTgOggQgdAGgdgSQgbgRgMgeQgXg6AKg/QAPhXAPgpQAgALAmAAQAoAAAdgNIAUgJQALgEAJgBQAMAAAOAGIAXAOQALAGATAIIAeANQANAGAQABIAeAAIAGACQAXABASASQASARAHAZQAGARADAeQAEAjADANQAFAaANATQAPAWAWAGQARAGAdgFQAkgGAMABQAbACAWASQAWASAKAZQATAwgUA8QgOAngZARQgTANgiACQgnACgTADQgfAFgjAWQgMAGgxAjQgjAZgcAMQgcAMgbAAIgOgBg");
	this.shape_56.setTransform(-53.1,-150.5,1.444,1.444,-15.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CA7D28").s().p("AgIGDQgJgEgDgCQgJgIAEgQIAKgdQAJgZgKgeQgJgagVgXQgOgPgdgXQghgZgMgLQgigggohEQgvhQgVgZQgHgIgCgFQgFgTAigTQBFgmA5g4QA5g5AnhEIASgeQALgQALgKQAjgbA1ANQAjAHAeAWQAeAVASAfQATAfAGAkQAGAmgKAhIgHABQglB1ATCBQASB8BBBvQg1A9hSAXQgnAKglAAQgrAAgogNg");
	this.shape_57.setTransform(-28.2,-186.3,1.444,1.444,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1D1D1C").s().p("AgnB5QAFg9APhAQAQhEAVg1QAUgxADACQABAAgPAyQgWBDgLA2QgNA1gLBGQgHAzgCAAQgDAAADg0g");
	this.shape_58.setTransform(-86.5,-65.1,1.444,1.444);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1D1C").s().p("ABFDXQABgcgDgZQgGhJgnheIgmhYIgghIQgdhDACgBQACgBAhBBIAjBHIAnBYQAnBhADBKQACAbgEAbQgDATgBAAQgBAAAAgTg");
	this.shape_59.setTransform(-75.8,23,1.444,1.444);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1D1D1C").s().p("AgtGrQgbgBgWgHIgrgQQgqgRgegQQgxgagpglIgZgYIgCgCIACABIAaAYQAqAjAxAZQAeARAqAQIArAPQAWAGAaACQAqABBCgIQA8gJAsgVIgfACQgeADgTgEIgXgHIgYgHQgOgFgJgIQgJgHgJgNQgBgDADgDIADAAQA3AVAxgEQA5gEAugjQBXhGAuhZIgXAXQgcAagcAOQgiARgigDIgjgDIgigEQgGAAABgFQAAgEADgBQBBgaAZgPQAqgaAZgtQALgSAGgdQAFgbACgYQACgbgBgYIgCgaQgHAagJAUQgPAmgWAcQgYAeghAYQgdATgoATQgFACgDgFQgCgFAEgCQAugpAagqQAFgIAIgQIALgZIALg2QAEgxgQg+QgGgYgLgbQAFAgAAAaQgBAxgdBFIgJAVIAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAQgCABgDgBQgFgCACgGQAjhmgshvQgjhbhHg6QAkBBAUBIQAZBVADBXQAAAGgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQgFg7gTgzQgVg4gkgnQglgpgzgUQglgOglAAQAgAMAeAWQAnAeAcArQAdAvALAoQALAiACA6IAAAAQABAGgGAAQgEAAgBgFQgJg6gSgtQgTgwgigoQgkgpgmgaQgWgPgUgEQgMgCgKACIgNAFQBOApAsBWQATAlALAsQAKAngCApQgDBKgjBAQgQAbgWAZQgSATgaASQgoAagyALQgfAHgnAAQgWAAgWgEIgLgCIgDgBIAOACQAZADATAAQAiAAAjgJQAygMAmgZQAZgSASgTQAWgZAOgaQAjg+AChJQACgmgKgoQgLgsgTgjQgthYhSgnQgEgCACgEIACgCQALgHAMgDIAMgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAQABgEADgBQA2gJA4AWQA1AVAnAqQAlAoAWA3QgGgZgHgZQgZhVgthMQgDgFAFgDQADgCADACQApAWAnA2QAjAwAUAwQAVA1ADA5IAAAjQAKgiAAgcQABgogThLIAAgBQgCgFAHgCQAFgBACAEIAAABQAfBBAMArQARA+gFA2IgCAPIgCAOIgIAcIgLAaQgLAWgDADQgSAdgaAcQA4ggAcglQAmgvAUhXQACgFAFABQADABABADQAGAWABAgQACAZgDAcQgBAYgGAcQgHAggLASQgaAwgtAbQgZAQgtARIAMACIAhAEQAhACAfgQQAagNAbgYIAtgvQAEgEADADQADADgCADQgWA3grA1QgnAwgvAkQgvAlg8AEQguADgxgQQAMAOAQAFIAYAHIAXAGQARAEAdgCQAigDANABQAEAAgBAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQgyAbhFAKIg5AGIggABIgVgBgAggkXQAgAmAVAvQgMgdgUghQgbgqgmgcQgNgKgNgHQAjAZAjAng");
	this.shape_60.setTransform(53.3,29.1,1.444,1.444);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CA7D28").s().p("AgfGnQgoAAgdgLQhJgbgqgYQg6gggygyIgrhSQBHAOBGgUQBJgUAugyQAwg0AShGQAShGgPhFQgRhHgng4Qgqg7g+geQAagRAgAMQAZAIAgAbQA8AzAdA5QAdA3AMBPQgBg2gKggQgJgjgagtQgagvgpggQgsgigygLQA2gJA3AWQA1AWAlArQBHBPAJB+QgChXgZhUQgZhWgthKQArAXAqA+QAlA2ARAwQASA2gBA7QgBAjgCAJIgNAqQAjhLADgxQADgwgVhSQBJCTgXBrQgTBShWBMQBPglAlgsQAsgyAWhfQALAlgEBBQgEBBgSAgQgaAwgqAcQgcAThDAZQAIAAAoAGQAeAEAVgEQA8gLBMhYQgsBphjBRQgvAmg5AHQg3AFg6gXQANAVATAJIArANQAWAHAdgDQAogDAMABQg5AghSAHQguAEgZAAIgGAAg");
	this.shape_61.setTransform(52.9,29.3,1.444,1.444);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1D1D1C").s().p("AAJBBQgRgDgOgPQgRgSgCgXQgCgXAMgUQALgTARgGQANgGALAGIAGADIABACIgIgBQgMgBgIAFQgMAGgIAQQgKASACATQACATAMAPQAMANANAEQALADALAAIAJAAQAAABgIADQgHADgHAAIgLgBg");
	this.shape_62.setTransform(89.5,218.7,1.444,1.444);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1D1D1C").s().p("AhXK/IARgqQAehJAchRQAVg8APgvIAVhMIADgQIAEghQACgXgBgMQgBgSgGgNQgFgLgOgUIgVgdQgIgKgTgOIgegYIgOgPIgHgJIgEgKQgGgPgCgZQgBghAJguQAHgkANgmQAUg9AWhNQAUhFAUg3QAWg7ANgxQAYhXADhJIAAgtQgBgPABAAQABAAABAPQADAPAAAeQAABLgXBYQgOA0gVA5QgTA5gTBDQgXBRgTA5QgLAggIApQgJAsACAfQgDAjAfAeQASARAoAhIALAPIALAPQAPAWAFAKQAHAPABAWQAAARgBASQgBARgDASIgIAhIgSA8QgQAvgVA9QgeBOghBKIgTApIgHANQgBAAAGgOg");
	this.shape_63.setTransform(-78.6,146.2,1.444,1.444);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1D1D1C").s().p("AAAAUQgCgBgBgFIgCgOQgCgSADgBQADgBACAFQAEAGABAJQABAIgDAHQgCAFgCAAIAAAAg");
	this.shape_64.setTransform(63.9,223.2,1.444,1.444);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1D1D1C").s().p("AgHAQQgBgCABgFIADgJIACgJQABgFABgBQADgCADAGQAEAGgCAIQgCAJgGADIgFACIgCgBg");
	this.shape_65.setTransform(72.3,224.4,1.444,1.444);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1D1D1C").s().p("AgFABQgCgJAFgCQACgBACADQADADABAFQABAEgCAEQgCADgCAAQgEAAgCgKg");
	this.shape_66.setTransform(-102.3,261.9,1.444,1.444);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1D1D1C").s().p("Ag3A1IgCAAIAAgDQgGgqAXggQANgUAXgHQARgHASADQANACAKAHQAHAGgCABIgIgDQgKgEgLAAQgPgBgPAHQgTAHgLAQQgSAaAAAnQADACAEgCQAEAAACgFIACgFIAAgDIACACQABAEAAAEQgBAGgHAEQgEACgEAAQgFAAgEgEg");
	this.shape_67.setTransform(-92.7,259.6,1.444,1.444);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1D1D1C").s().p("Ag9BAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgDgNQgDgPgBgJQgBgcASgZQAFgJANgOQAMgLAOgCQAIgCAQADIAVAFQAPAGALALQAJAJgDAAIgJgFQgMgIgOgEIgTgEQgPgBgGABQgMADgHAIQgKAKgHALQgPAWAAAYIACAWIACANIAAABIABAAIAGgJQAEgHAAgEIADgLQACgBAAAMQAAAIgCAGIgEAHIgDAEQgCAEgFAAQgFAAgDgEg");
	this.shape_68.setTransform(-74.3,261.2,1.444,1.444);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1D1D1C").s().p("AivJbQgmgJgTgKQgMgGgKgMQgIgLgCgOQgDgZAHgWQAIgVAOgMQAMgKARgBQANgBAKAFQAHADAFAFIACAEQgEgFgLgFQgJgEgMACQgPABgMAKQgNALgGAUQgGAVADAXQAEAZAZAMQATAKAkAHQA5AMBMgIIBJgLQAfgLAXgnQAKgRAHgUQAFgOAFgbIAUhVQAWhgAShUQAWhnAPhNIAIgrQAFgagEgOQgFgOgTgPIgigXQgjgYgRgoQgRgmAFgmQADgZAQgsIBfjzQAHgTAJgIQAJgKALgBQAJAAAFADIAEADQgFgFgMACQgLACgHAIQgHAIgHATIhaD0QgQAqgDAZQgEAkAQAjQAQAkAgAWIAjAXQAXASAGASQAEAQgFAeIgIAqQgPBUgWBhIg8EJIgLAqQgHAUgLASQgZAsgkALIgUAEIg3AIQgcADgaAAQgtAAglgJg");
	this.shape_69.setTransform(-67,184.1,1.444,1.444);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1D1D1C").s().p("AFcF7QgMhBgWg9QgPgngVgqIgZgsIgOgVQgJgLgJgCIgaAAIhXACQhLgBgvgVQgfgNgWgWQgTgSgVgcIhBhfQg+hfgkhIIgfhEQgOgegMgTQgJgQgLgNIgIgKIAKAIQALAKAMASQAOAWANAbQAZA1AIANQAjBEBBBiQAnA7AaAiQAUAbASARQAUAUAeAOQAtATBIABIA6AAIAcgBIAdABQAIABAHAFIAKALIAPAXIAYAsQAUApAPArQAXBDAHA8QADAXAAANQABAMgBAAIgHgvg");
	this.shape_70.setTransform(16.1,149.9,1.444,1.444);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1D1D1C").s().p("AALBOQgZgBgRgQQgLgKgDgPQgDgJgBgTQgCgVADgOQAEgTAMgLQAMgLAQABQAJABAGAEIAAgJQABgGABAAIAEANIAAAEIAAAHIgBAGIgFgFQgEgGgLAAQgNABgIAIQgIAJgDAQQgCALACAUQABATACAHQACAMAIAIQANANAWADQALACARAAQALAAAAABQABABgLADQgPACgKAAIgFAAg");
	this.shape_71.setTransform(65.2,219.4,1.444,1.444);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1D1D1C").s().p("AhDALQgLgDgIgGQgGgEABgBIAIACQAJADAJABQAVACAsgFQATgCAtgIQAcgFAAACQABADgaAIQgfAJgjAFQgVADgRAAQgSAAgMgEg");
	this.shape_72.setTransform(84.2,229.1,1.444,1.444);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1D1D1C").s().p("AgJBDIgGgCQgKgFgHgKQgKgLgCgUQgCgUAIgUQAIgVAQgMQANgKASgCQAMgBAKAEQAIADgBACIgIAAQgLgBgJACQgOACgLAKQgMALgHASQgHAQABASQAAARAHALQAFAIAIAHIAFAFIgBABIgBAAg");
	this.shape_73.setTransform(74.6,220.4,1.444,1.444);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1D1D1C").s().p("AFOPWQgSgDgMgKQgXgSgBghQAAgYAOgSQANgPAPgCQALgCAJAEIAEADIABACIgGgEQgJgDgKACQgOAEgLANQgMARAAAXQACAeAVAQQAYATAjgJQASgFAMgLQANgKAIgUQANgfgIgyQgThbgnhcQgrhlg/hcQgigxgmgtQgWgbgVgRQgbgWgagDQgWgDgkASIgeAOQgUAHgOgDQgKgBgIgFQgGgCgJgIQgIgIgOgSQgZgggPgXQhKhugkiCIgRg8QgKgigJgYQgOgmgmhFQgvhTgIgRQgRglgEgOIgQgzQgWhWAGhrQAHiGA1iLIARgpQAHgRAHgMIAJgSIADgFIgCAGIgIASIgMAeIgQApQgyCLgGCEQgFBrAWBTIAQAyQAEANARAlIAaAyIAdAyQAlBBARArQAKAaAaBdQAjB/BKBtQATAcAUAaIAVAZQANALAMACQATACAmgTQAogTAZADQAdAEAfAYQATAPAZAeQAkAqAlA2QB7C2AoDHQAIA0gOAhQgJAVgPAMQgPAMgSAFQgLACgKAAIgOgBg");
	this.shape_74.setTransform(43.7,85.6,1.444,1.444);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1D1D1C").s().p("AATBzQgRgBgOgLQgXgQgIgYQgGgPABgPQACgOAJgRQAVgkAWgiQANgUANgOQgBAAAAgBQAAAAAAAAQABgBAAgBQAAAAABgBQADgFAGgBIAHgCIgEAGIgeAuIgpBGQgIAPgBALQgCAMAFAOQAGATAUARQAJAIARAGQALADAAACIgDAAIgJAAg");
	this.shape_75.setTransform(-18.1,-121.9,1.444,1.444);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1D1D1C").s().p("AgCAUQgCgBgBgGQgBgGABgHQABgIACgGQACgFACAAQADAAABAGQABAGgBAHQgCAUgFAAIgBAAg");
	this.shape_76.setTransform(90,222,1.444,1.444);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FCCA69").s().p("AiECIQgagNgGglQgEgaAFgbQABgHAIgKQAKgNAPAAQASgBALAHQgNgugGgvQgBgGACgDQACgDAEgCQAPgIAdgKQApgNAqgIQAugIAZAEQAGABAOAGQANAFAIAAIABABQAcA6AHAnQAKA5gTAsQgKAWgQAMQgPALgeAGQhRARg6gDQgJAAgDACIgHAEQgEADgKAAQgegBgNgHg");
	this.shape_77.setTransform(82.4,209.9,1.444,1.444);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FCCA69").s().p("AiuBqQgOgJgGgKQgJgQAIgcQAKggAUgOQALgJAPgCQAQgBALAIIAlhPQAJgVALgKQAJgGAVgGQA9gQAvAGQA9AHAkAoIAUAZQgFA8gXA4QgNAfgPAPQgYAYg4ALQg4AMguAAQhSAAg2gkg");
	this.shape_78.setTransform(-76.6,251.6,1.444,1.444);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FCCA69").s().p("ABLMgQgOgEgTgMQg3gjgng3Qgmg4gNhBQgIglgChEQgChKgFgfQgKg9gqhkQgwhxgMgwQgeh0AbiOQAVhwA9iMQAZg7AagbQAOgPAcgUQAhgXALgJQAVgTAXggIAog4QA4hJA1AAIADAHQg5BaABBNQABAvAWAnQAYAqAnASQARAIADAGQADAEABAIQAHA3gSBBQgNAwggBCQgwBggGAPQgcBAgHAzQgPBqA7CTIAzB4QAgBIAOAxQAgBpgVBMQgNAuggAiQgjAkgsAHIgSABQgNAAgLgDg");
	this.shape_79.setTransform(-49.7,-18.8,1.444,1.444);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CA7D28").s().p("ApvSgQANgfAPgvQAPgvAMgfQAihXAJgeQAWhKgLgsQgUhNhRgyQgZgQgIgJQgIgLABgjQABgdAEgUIAtixQAOg0AhhjQAbhSANgcQAJgyAKgmQAKggABgKQAJhFgGg/QgFg8gRgqQguhxgkhJQg3hwgQhzQgRh8AfhvQAahbAVgyQAjhRAugmQA2grBCgMQAmgHBaAAIBOAHQAPAYAXAJQAVAJAYgFQAdgHAfA2QAZArAIAsQAIAngNAwQgHAagXA6QhSDHgRCdQgKBYATBkQASBbAoBZIApBPQAhBAAHAaQANAbALAuQAyDQB1CPQAZAgAXAFQAUAEAegOQApgUAJgCQATgEAWAJQANAGAZAPQAPAKAtA0QAjApAUAaQA0BEAcBEQARArAnBrIgIAEQgeAWgiAIIg8AMQgYAGgWABQgdACgQgIQgTgJgKgXQgJgegGgPIg2h8QgOgkgTgLQgOgIgjACQhYAGgsgFQhMgLgtgoQgWgWgegwIhdiZQgkg6gSgkIgYgvQgOgcgHgVQgJADgHAAIgSAJQgPAUgLAkIgUA8QgkBbgMAhIgTA1QgIAcgBAbQAAAiALAcQAMAgAXATIAmAaQAXAPAJAQQAPAZgGAvQgFAigQBDIgtC9QgWBVgNAiQhWhIisAdg");
	this.shape_80.setTransform(4,64.9,1.444,1.444);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CA7D28").s().p("Ag+CvQgngJgYgTQgNgLgIgPQgIgRABgQQABgLAHgJIAOgRIAPgZQAFgLgBgOQgBgbAmgrQAQgTAugqQA2g0A+ADQAOABANAEQARAGAFAJIADAIQgJAOghAsQgbAkgMAWQgKAVgEAMQgGASAEAPQACAKAJARQAKARADAJQAHAYgOAZQgNAYgYAMQgXALgeAAQgWAAgZgFg");
	this.shape_81.setTransform(-32.2,-118.9,1.444,1.444);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dogBody2, new cjs.Rectangle(-114.3,-308.3,221,580.9), null);


(lib.cow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2472B6").s().p("AAGAeIgBAAIgFgQIAAgDIAAgBIAAgBIAAAAIABAAIAAABIAFANIADgJIABgBIABAAIAAABIADAGQAAgEgCgDIgBgBIABgBIAAAAIABAAIABAAIAJADIgGgHIgBgBIAAAAIAAgBIABgBIABAAQACABADgBIAAAAIABAAIgHgEIAAgBIAAgBIAAAAIABgBIAGAAQgDgCgEABIgBAAIAAAAIgBgBIABgBIAGgHIgJACIgBAAIgBAAIAAgBIADgGQgFADgGABIAAAAIgBgBIAAAAIADgGQgDACgBAEIgBAAIAAAAIAAAAIgBgBIgDgIIgCAJIAAAAIgBABIgBAAIAAgBIgFgFIgBgBIAAABIgBAAIgBgCIAAACIABAIIAAABIgBABIAAAAIgGgFQACAEADACIABABIAAAAIAAABIgBAAIgJACIAIADIABABIAAABIgBAAIgFADIgEABIgEABIABABIAAAAIAAABIACgBIAAAAIAAgBIABAAIAAAAIACgBIACgBIACgBIABAAIABABIAAABIgBAAIAAAAIgCABIABAAIAJABIABABIAAABIAAAAIAAABIgGADQAEAAADgDIABgBIAAABIABAAIAAABIgBAKIAGgIIAAAAIABAAIABAAIAAABIABAGIAAAEIABADIAAABIAAAAIAAABIgBAAIAAgBIgDgLIgGAIIgBAAIgBAAIAAAAIgBgBIABgKQgFADgFgCIgBAAIAAgBIAAgBIAGgEIgLgBIAAAAIgBAAIgCAAIgBAAIAAAAIgBgBIABgBIAJgFIgJgEIAAAAIgBgBIABgBIAAAAIAKgDQgDgDgBgGIAAgBIABAAIABAAIAGAFIgDgLIgBAAIAAgBIABgBIABAAIABAAIAAABIAAAAIABABIAAAAIgBgBIABAAIAAgBIABABIAAAAIAIAIIACgKIAAgBIABAAIABAAIAAAAIAEAKQACgFAGgCIABAAIAAABIABAAIgBABIgEAHIAHgDIAEgGIABAAIABAAIABABIgBABIAAAAIAAAAIgBABIABAAIAAABIAAAAIAAABIAAABIgBABIgCAFIAJgDIABAAIABABIAAABIAAAAIgGAIQAFAAAEAFIAAABIAAABIgBAAIgHAAIAEACIAGABIgDABIgBAAIAAAAIAAABIABAAIAAAAIAAgBIAAAAIAAAAIABABIABAAIAAABIABAAIAAAAIAAABIgBABIgBAAIgGgBIgDAAIAHAIIAAABIAAABIgBAAIgLgCQADAEgDAGIAAAAIgBAAIgBAAIgDgHQgCAGAAAFIAAAAIAAABIgBAAIAAAAIgBAAgAAeAGIABAAIgBAAgAAfAGIAAAAIAAgBIAAgCIAAAAIABABIAAABIAAABIgBAAIAAAAg");
	this.shape.setTransform(-148.7,-84.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244794").s().p("AABALIAAgBIgBAAIAAAAIAAABIAAABIAAADIAAAJIAAgEIgBgGIAAgBIgBAAIgBAAIAAAAIgGAIIABgKIAAgBIgBAAIgBgBIAAABQgEADgDAAIAGgDIAAgBIAAAAIAAgBIgBgBIgJgBIgBAAIACgBIAAAAIABAAIAAgBIgBgBIgBAAIgCABIAFgDIABgBIAAAAIgBgBIgIgDIAJgCIAAAAIABgBIAAAAIgBgBQgDgCgCgEIAFAFIABAAIABgBIAAgBIgBgIIgBgCIACACIABAAIAAgBIABABIAFAFIAAABIABAAIABgBIAAAAIACgJIADAIIAAABIABAAIAAAAIAAAAQACgEADgCIgDAGIAAAAIABABIAAAAQAGgBAFgDIgDAGIAAABIABAAIABAAIAJgCIgGAHIgBABIABABIAAAAIABAAQAEgBADACIgGAAIgBABIgBAAIAAABIABAAIAHAFIgBAAIAAAAQgDABgCgBIgBAAIgBABIAAABIAAAAIABABIAGAHIgJgDIgBAAIgBAAIAAAAIgBABIABABQACADAAAEIgDgGIAAgBIgBAAIgBABIgDAJgAgeAHIACgCIAFgBIgDABIgBABIAAAAIgBAAIgCABgAAcAGIgCAAIABgBIAAAAIABAAIAAABgAAcAFIADABIgCAAg");
	this.shape_1.setTransform(-148.7,-84.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2472B6").s().p("AgIBTIgBAAQgGgPgCgOIgQAUIgBABIgBAAIgBgBIAAgBQgBgMACgOQgKAIgPgDIgBgBIAAgBIABgBIARgLQgPgDgOABIgCAAIAAgBIAAgBIABgBIAAAAQAcgMAbgSQgGABgIACIgyAQIgBAAIgBgBIAAgBIAAgBQAMgKAMgGIgXgIIgBgBIAAgBIAAgBIABgBQALgEAPgCQgLgIgCgOIAAgCIACAAIABAAIAQAMQgCgPgFgMIgBgBIAAgBIABgBIABAAIABAAQAWAaAbAVQAAgHgGgLIgZguIAAgBIABgBIABgBIABAAQAMAJAIAMIAFgZIAAgBIABgBIABAAIABABQAHAMADAMQAGgMANgEIACAAIABABIgBABIgJASQAOgEANgJIABAAIABABIABABIgBABQgTAZgRAfQAIgCAIgNIAdgsIABgBIABAAIABABIAAABQgCAPgHANIAZgIIABAAIABAAIABABIgBABQgHANgJAJQAOgBAKAKIABABIgBACIgBAAIgVAAQALAKANAGIAAAAIABABIAAABIgBABIgBABQgigGglABQAGAFAOADIA0AIIABABIAAABIAAABIgBABQgOADgPAAIARATIABABIgBABIAAABIgBAAQgNgBgNgFQAGAMgFANIgBABIgBABIgBgBIgJgSQgFAPgBAMIAAABIAAABIgBABIgBgBIgBgBQgKglgPgjQgFAHAAAOIgBA1IAAABIgBABIAAAAIgBgBgAgPAxIABABQABALAEALIAAgrQAAgTAJgGIAAAAIAAAAIABABQAPAfAKAiQABgLAFgNIABgBIABAAIABAAIABABIAIASQACgMgHgKIAAgBIABgBIAAgBIACAAQAMAFAMACIgQgTIgBgBIABgBIABgBQALABALgCIgpgHQgTgDgFgJIgBgBIABgBIABgBQAigBAfAFQgKgGgJgJIgBgBIAAgBIABgBIABAAIAVAAQgKgHgNACIgBgBIgBAAIAAgBIAAgBQAJgJAIgLIgZAIIgBgBIgBgBIAAgBQAGgKACgLIgXAkQgKAPgJACIgBABIgBAAQAAABAAAAQgBABAAAAQgBAAAAABQAAAAAAAAIgBABIAAAAIAAACIgCAAIgBAAIAAAAIAAgCIAAgBIAAAAIAAAAQARghATgaQgMAHgMADIgBAAIgBgBIAAgBIAAgBIAKgRQgMAFgDAMIgBABIgBAAIgBAAIgBgBQgCgLgHgNIgEAZIgBABIgBAAIgCgBQgGgJgIgIIAVAmQAHAQgCAIIgBABIgBAAIgBAAQgYgUgVgXQAEAMABAOIgBABIAAAAIgBABIgBgBQgHgGgJgHQADAMALAGIABABIAAABIAAABIgBABQgOABgLAEIAXAIIABABIAAABIAAABIgBABQgKAEgKAGIApgMQAOgDAHAAIABABIAAABIgBABQgZARgaAMQAMAAANADIABABIAAABIAAABIgBAAIgQALQALACAKgKIABAAIABAAIAAABIABABQgDAOAAAMIAQgUIABAAIAAAAIABAAg");
	this.shape_2.setTransform(-148.5,-84.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0EBFB").s().p("AgNA1IgBgBIgBgBIgBABIgQAUQAAgMADgPIgBgBIAAAAIgBgBIgBABQgKAJgMgBIARgLIABgBIAAgBIgBgBIAAAAQgNgDgNAAQAbgMAZgRIABgBIAAgBIgBgBQgHgCgOAEIgpANQAKgHAKgEIABAAIAAgBIAAgBIgBgBIgXgIQAKgEAPgCIABAAIAAgBIAAgBIgBgBQgLgGgDgMQAJAHAHAGIABAAIAAAAIABAAIAAgCQgBgNgDgMQAUAXAZATIABABIABAAIABgBQACgIgIgQIgUgmQAIAIAGAJIACABIABAAIAAgCIAFgYQAHAMACAMIABAAIABABIABAAIAAgBQAEgNAMgFIgKASIAAABIAAABIABABIABAAQAMgEAMgGQgTAagRAfIgBABIAAABIAAABIAAABIABABIABAAIACgBIAAgBIAAgBIABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIABgBIAAgBQAKgBAKgPIAXgkQgDALgFAKIAAABIABABIABAAIAYgIQgHAMgJAIIgBABIABABIAAABIABAAQAOgCAKAIIgVgBIgBABIgBAAIAAABIABABQAIAJALAGQgggEghABIgCAAIAAABIAAACQAFAJAUADIApAHQgLACgLgBIgCAAIAAACIAAABIARATQgMgCgNgFIgBAAIAAABIgBABIAAABQAHAKgCAMIgJgTIAAAAIgBgBIgBABIgBAAQgFANgCAMQgKgigOggIgBAAIgBgBIAAABQgIAGAAATIgBAqQgDgLgBgKg");
	this.shape_3.setTransform(-148.6,-84.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2472B6").s().p("AgUCfIgBgBIAAgBQAMhGAChLQgPAGgOAbIgrBZIAAABIgCAAIgBgBIAAgBQACgdAJgcIgvAXIgBAAIgBgBIgBAAIAAgCQAKgYAQgWQgZAHgXgRIgBgBIAAgBIABgBQAUgFAWgBQgXgSgdgLIgBgBIAAgBIABAAIABAAIAAAAQBBAAA6gHQgKgFgVgEIhhgNIgBAAIgBgBIAAgBIABgBQAdgIAcABIgjgnIgBgBIAAgBIABAAIABgBQAbACAZAKQgOgYAJgaIABgBIABAAIABABQAMATAHASQAKgcABgdIAAAAIABgCIABAAIABAAIABABQAQA6AeA/QAHgLgBgcIgFhiIAAgBIABgBIACAAIAAABQAMAYAFAeIAfgqIABgBIABAAIABABIAAABQADAbgEAaQAJgHALgEQAOgFAOACIABABIAAABIAAABQgSAQgPAJQAcAFAfgFIABAAIABABIAAABIgBABIgBAAQg3Aeg1AmQAQAFAcgRIBTgzIACgBIABABIAAABIAAABQgPAWgYAUIAzAHIABAAIABABIAAABIgBABQgXAPgYAJQAKAEAJAIQALAKAFAMIAAACIgBABIgBAAQgTgGgTgLQAKAdASAXIAAABIAAABIgBAAIgCAAQg3gmg/gdQADAQAZASIBQA3IABABIAAABIgBABIgBAAQgcgFgagOIAPAyIAAABIgBABIgBAAIgBAAQgXgOgSgTQABAbgTATIgCABIgBgBIAAgBQgCgUACgWQgUAUgPAaIAAABIgBABIgBAAIAAAAgAAUBqIABAAIAAABQgCAWABAUQARgTgDgbIAAgBIABgBIABAAIABAAQASAVAWAOIgOgyIAAgBIABgBIABAAQAXANAZAGIhJgyQgcgUgCgSIgDgBIAAgBIgBgBIgBgBIAAgBIABgBIACABIAAAAQA/AcA3AkQgPgVgJgbIAAgBIAAgBIABgBIABABQAUAKASAHQgFgKgIgIQgKgJgNgEIgBAAIAAgBIAAgBIABgBQAYgHAXgPIgzgHIgBgBIAAgBIAAgBQAWgRAPgUIhMAvQgeASgRgFIgCACIgBAAQgEAAgFADIgBAAIAAAAIAAABIAAABIgBABIgBABIAAAAIgCgBIgBgBIAAgCIABAAIACgBIAAAAIAAgBIAAAAIABgBQA3gpA6gfQgcADgagFIgBgBIgBgBIAAgBIABAAQAPgJASgQQgLgBgLAEQgNAFgJAJIgBABIgBAAIgBgBIAAgBQAEgagCgbIgeAqIgBAAIgCAAIAAgBQgFgbgJgXIAEBaQABAggJAMIgBAAIgBAAIgBgBQgdg7gQg3QgDAbgJAaIgBABIgBAAIgBAAIgBgBQgHgSgLgUQgGAZAPAWIAAABIAAABIgBABIgBAAQgZgKgbgDIAkAmIAAACIAAABIgCAAQgZgBgaAGIBYAMQAbAEAKAIIABABIgBACIgBAAQg5AHg+AAQAbALAUARIABABIAAABIgBABIgBAAQgVABgUAEQAXAPAYgJIABAAIABABIABABIgBABQgQAWgLAYIAvgWIABgBIABABIABACQgJAYgDAaIAnhQQAPggASgEIABAAIABABIAAABQgBBHgLBDQAPgYATgSIABgBIAAAAIABABg");
	this.shape_4.setTransform(-148.7,-84.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4EC2EE").s().p("AATBrIAAgBIgBAAIgBgBIgBABQgTASgPAYQALhDABhHIAAgBIgBgBIgBAAQgSAEgPAgIgnBQQADgaAJgYIgBgCIgBgBIgBABIgvAWQALgYAQgWIABgBIgBgBIgBgBIgBAAQgYAIgXgOQATgEAWgBIABAAIABgBIAAgBIgBgBQgUgRgbgLQA+AAA5gHIABAAIABgCIgBgBQgKgIgbgEIhYgMQAagGAZABIACAAIAAgBIAAgCIgkgmQAbADAZAKIABAAIABgBIAAgBIAAgBQgPgWAGgZQALAUAHASIABABIABAAIABAAIABgBQAJgaADgbQAQA3AdA7IABABIABAAIABAAQAJgMgBggIgEhaQAJAXAFAbIAAABIACAAIABAAIAegqQACAbgEAaIAAABIABABIABAAIABgBQAJgJANgFQALgEALABQgSAPgPAKIgBAAIAAABIABABIABABQAaAFAcgDQg6Afg2ApIgBABIAAAAIAAABIAAAAIgDABIgBAAIAAACIABABIACABIABAAIABgBIAAgBIAAgBIAAgBIAAAAIABAAQAFgDAEAAIABAAIACgCQARAEAegRIBMgvQgPAUgWARIAAABIAAABIABABIAzAHQgXAPgYAHIgBABIAAABIAAABIABAAQAMAEALAJQAIAIAFAKQgSgHgUgKIgBgBIgBABIAAABIAAABQAJAbAPAVQg3gkg/gcIAAAAIgCgBIgBABIAAABIABABIABABIAAABIADABQACASAcAUIBJAyQgZgGgXgNIgBAAIgBABIAAABIAOAyQgXgPgRgUIgBAAIgBAAIgBABIAAABQADAagRAUQgBgUACgWg");
	this.shape_5.setTransform(-148.5,-84.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2472B6").s().p("AAFAeIAAgBIgDgKIAAAHIAAABIgBABIgBAAIAAgBIAAgBIgDgJIgGAHIgBAAIgBAAIAAAAIgBgBIAAgKQgEADgFgCIgBAAIAAgCIABgBIAFgDIgKAAIgBAAIAAgBIACAAIgBgBIAAgBIgCACIABAAIgCABIgBAAIgBgBIAAgBIABgBIAAgBIAAAAIAIgEIgIgDIgBgBIAAgBIAAgBIABgBIAJgCQgDgDgBgGIAAgBIABgBIACABIAEAEIgCgKIAAgBIABgBIABAAIABABIAAgBIACABQAEADADAEIACgJIAAgBIABAAIABAAIABABIADAIQADgEAEgCIACABIABABIAAABIgDAFIAFgCIADgFIAAAAIAAAAIABgBIABAAIABABIAAABIAAADIAAAAIgBABIgBgBIAAAAIgBAAIgBAAIAAAAIAAAAIAAAAIACABIABAAIAAABIgCAFIAJgDIABAAIABABIAAABIAAABIgFAHQAEABAEADIAAABIAAABIgBABIgFAAIACABIAGABIABABIAAABIAAABIgBABIAAAAIAAABIgBABIgBAAIgIAAIAGAGIAAABIAAABIgBABIgBAAIgJgCQACAEgCAFIgBABIgBAAIgBAAIAAgBIgDgFIgCAJIAAABIgCABIAAAAIgBAAgAABAIIABABIAAABIAEAKIADgHIAAAAIACAAIAAAAIAAgBIAAgBIABgBIABAAIAIADIgFgGIgBgBIAAgBIABgBIABAAIAGAAIgHgEIAAgBIAAgBIAAgBIABAAIABAAIAEAAIgFAAIgBAAIgBgBIAAgBIAAgBIAFgGIgHACIgCAAIgBgBIABgBIABgFIgIAEIgBAAIgBgBIgBgBIAAAAIAAABIgBAAIgBAAIAAgBIgDgHIgBAHIgBABIgBABIgBAAIAAgBIgEgFIgCgCIAAAAIgBgBIAAACIAAABIABAIIAAABIgBAAIgBAAIgDgCIADADIABAAIAAABIAAABIgBABIgIABIAHADIABABIAAABIgBAAIgCABIABABIAAABIgBABIAAAAIgBgBIAAAAIAAgBIgEACIAAAAIACAAIADAAIAIABIABABIAAABIgBACIgCABIADgCIABAAIABAAIABABIAAABIgBAIIAFgGIABgBIABAAIABABIAAgCIAAgBIAAgBIAAAAIABAAgAAdAEIABABIAAAAIAAgBIAAgCIgDABIgBAAIAAABIgBAAIADAAIAAAAgAgUgYIADACIABACIgCgEIAAgBIAAAAIgBAAgAgQgZIAAAAIgBgBIABABg");
	this.shape_6.setTransform(-110.4,-111.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A3F8E").s().p("AAAANIAAgBIAAgBIgBAAIgBABIgBABIAAACIgBgBIgBAAIgBABIgFAGIABgIIAAgBIgBgBIgBAAIgBAAIgDACIADgBIABgCIgBgBIgBgBIgIgBIgDAAIADgBIAAABIABAAIABgBIgBgBIAAgBIACgBIABgBIgBgBIAAgBIgIgCIAIgBIABgBIABgBIgBgBIAAAAIgEgDIADACIABAAIABAAIABgBIgBgIIgBgBIAAgCIABACIAAgBIABAAIABACIAEAFIABABIABAAIABgBIAAgBIACgHIACAHIABABIABAAIABAAIABgBIAAAAIAAABIAAABIABAAIAJgEIgCAFIAAABIABABIABAAIAIgCIgFAGIgBABIAAABIABABIABAAIAFAAIgEAAIgBAAIAAAAIgBAAIAAABIABABIAGAFIgFAAIgBAAIgBABIAAABIAAABIAFAGIgHgDIgCAAIAAABIgBABIAAABIAAAAIgBAAIgBAAIgCAHIgEgKgAAZAHIADAAIgBAAgAAXAHIAAAAIABgBIAAAAIABABIAAAAgAgXAFIABABIgEABIADgCgAAMgSIABAAIAAABIAAgBIAAAAIAAABgAgUgTIgBgCIACAEgAgVgWIAAAAIAAAAg");
	this.shape_7.setTransform(-110.1,-111.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2472B6").s().p("AgIBSIgBgBQgGgPgBgNIgQAUIgBAAIgBAAIgBAAIAAgBQgBgNACgNQgLAHgNgCIgBgBIAAgBIAAgBIARgLQgPgDgNABIgCAAIAAgBIAAgBIABgBIAAAAQAdgNAYgQQgGABgHACIgxAPIgBAAIgBgBIAAgBIABgBQAKgJANgGIgXgIIgBgBIAAgCIABAAQAKgFAPgCQgLgIgBgOIAAgBIACgBIABABIAPAMQgCgPgFgMIAAAAIAAgBIAAgBIACgBIABABQAWAYAZAVQAAgGgFgMIgZgtIAAgBIABgBIABAAIABAAQALAIAIANIAFgZIABgBIABgBIABABQAHAKAEANQAFgLANgFIACABIABABIgBABIgJARQAMgEAOgIIABAAIABAAIABACIgBABQgSAXgRAfQAIgCAIgNIAcgqIABgBIABAAIABABIAAABQgDANgFAOIAYgIIABAAIABABIAAABIAAABQgIAMgIAIQANAAAKAJIABACIgBABIgBAAIgUABQAKAJANAGIABAAIAAABIABABIgBABIgBAAQgmgFggAAQAFAGAPACIAyAIIABABIABABIgBABIgBABQgMADgQAAIARATIAAABIAAABIgBABIgBAAQgNgCgMgEQAGAMgFANIgBABIgBAAIgBgBIgJgSQgEANgBAPIgBABIgBAAIgBAAIgBgBQgJgjgPgjQgFAGAAAPIAAAzIgBABIgBABIAAAAIgBAAgAgPAvIABABIABABQABAKADALIABgpQgBgTAIgGIABgBIAAABIABAAQAPAgAJAgQACgMAFgMIAAAAIABgBIABABIABAAIAIATQACgMgHgKIAAgBIABgBIAAgBIACAAQALAFANACIgQgTIgBgBIABgBIABgBQAMABAKgCIgpgGQgSgDgFgIIgBAAIgBgBIgBAAIAAgBIAAgCIABAAQAfgBAkAFQgLgGgIgJIgBgBIAAgBIABgBIABAAIATAAQgJgHgMACIgBAAIgBgBIAAgBIAAgBQAIgIAIgLIgXAHIgBAAIgBgBIAAgBQAEgKADgKIgWAiQgJAQgLABIAAABIgBABIgDACIAAABIAAABIAAABIgCAAIgBAAIAAAAIAAgBIAAgCIAAAAIAAAAIAAgBQARggASgYQgMAGgLADIgBAAIgBAAIAAgBIAAgBIAJgRQgKAEgEAMIgBABIgBAAIgBAAIAAgBQgEgNgFgKIgFAYIgBACIgBAAIgBgBQgHgKgHgHIAUAlQAIAQgCAHIgBABIgBAAIgBAAQgYgTgVgWQAEALABANIAAABIgBABIgBAAIgBAAIgPgNQADALALAHIAAAAIABABIgBABIgBABQgOABgLAEIAXAIIABABIABABIgBABQgLAFgIAGIAngNQAMgCAIAAIABAAIABABIAAABIgBABQgXAQgcAMQAMAAANADIABABIAAABIAAABIgBABIgQAKQALABAKgJIABAAIABAAIAAABIABABQgDANAAAMIAPgTIABgBIABAAIAAAAgAAAABIABAAIAAAAg");
	this.shape_8.setTransform(-110.1,-111.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CAE9FA").s().p("AgMAzIgBAAIAAgBIgBAAIgBABIgQASQAAgMADgNIAAgBIgBAAIgBgBIgBABQgJAIgMgBIARgKIAAgBIAAgBIAAgBIgBAAQgMgDgMAAQAbgNAXgPIABgBIAAgBIgBgBIgBgBQgHgBgNAEIgnAMQAJgGAKgEIABgBIAAgCIgBgBIgYgHQALgEAOgCIABAAIABgBIAAgBIgBgBQgLgGgCgLIAOAMIABABIABAAIABgBIAAgBQgBgNgEgMQAVAWAYATIABABIABAAIABgBQACgIgIgQIgUglQAIAIAGAKIABAAIACAAIAAgBIAFgYQAGAKADANIABABIABAAIABAAIAAgBQAEgMALgFIgKARIAAABIAAABIABABIABAAQALgDAMgHQgSAZgQAfIgBABIAAAAIgBABIAAABIAAABIACABIABAAIABgBIAAgBIAAgBIABAAIADgDIAAgBIABgBQAKgBAJgPIAXgiQgDAKgFAJIAAACIABABIABAAIAXgIQgHAMgJAIIAAABIAAABIABABIABAAQAMgCAKAHIgUgBIgBABIAAAAIgBABIABABQAIAJALAGQgjgEgfAAIgCABIAAABIAAABIABABIABAAIABAAQAFAIASADIAqAHQgLACgMgBIgBAAIgBACIABABIAQASQgMgBgMgFIgBgBIgBABIgBABIABABQAHALgDALIgIgSIAAgBIgBAAIgBAAIgBABQgFALgCANQgJgggPggIgBgBIgBAAIAAAAQgHAHAAATIgBAoQgDgLgBgKgAACADIAAAAIAAABg");
	this.shape_9.setTransform(-110.3,-111.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2472B6").s().p("AgTCbIgBgBIgBgBQANhFABhIQgPAGgNAbIgqBWIgBAAIgBABIgBgBIAAgBQABgbAJgcIguAVIgBABIgBgBIAAgBIAAgBQAJgWARgXQgLACgMgBQgNgCgLgJIgBgBIAAgBIABgBQATgEAVgCQgXgSgbgJIgBgBIAAgBIABgBIABAAIAAAAQA5ABA/gHQgLgGgUgDIhfgNIgBAAIAAgCIAAgBIABAAQAcgHAcAAIgjglIgBgBIABgBIAAgBIABAAQAbACAYAIQgFgJgCgLQgCgPAEgNIABgBIABAAIABABQAKAQAJAUQAJgaABgeIAAAAIABgBIABgBIABAAIABABQARA6AcA9QAHgMgCgbIgEhgIABgBIABAAIABAAIABABQALAZAFAcIAegpIABgBIABAAIAAABIABABQADAagEAaQAJgIAKgEIABAAQANgEANACIABAAIABACIgBABQgOANgSALQAdAEAcgEIACAAIAAABIAAACIgBAAIAAABQg3AcgyAlQAJADAMgDQAJgDANgIIBRgzIABAAIABABIABABIAAABQgRAXgWASIAyAHIABAAIABABIAAABIgBABQgXAOgXAJQAKAEAJAIQALAJAFANIAAABIgBABIgBAAQgTgGgTgLQAKAbASAYIAAABIgBABIgBABIgBgBQg2gkg+gdQAEAQAYAQIBPA3IAAABIAAABIgBABIgBAAQgbgFgZgOIAOAxIAAABIgBABIgBAAIgBAAQgUgMgUgVQACAbgUATIgBAAIgBAAIgBgCQAAgRABgXQgTATgPAaIAAAAIgBABIgBAAIAAAAgAAUBnIAAABQgBAYABARQARgTgFgZIABgBIAAgBIABAAIABAAQAUAVAUAMIgOgwIAAgBIABgBIABAAQAXANAYAGIhHgyQgcgSgCgTIgCgBIgBAAIgBgBIAAgBIAAgBIABgBIABAAIABABQA9AcA2AjQgPgXgJgZIAAgBIABgBIABAAIABAAQATALASAGQgFgJgJgIQgKgJgMgDIgBgBIAAgBIAAgBIABgBQAXgHAXgPIgygGIgBgBIAAgBIABgCQAUgPAPgUIhJAuQgOAIgJADQgNADgKgCIgCACIgBAAQgEAAgFADIgBABIAAABIgBABIgBABIAAgBIgCAAIgBgBIAAgBIABgBIACgBIAAAAIAAAAIAAgBIABAAIAAgBQA1gnA6gfQgbADgbgFIgBAAIgBgBIABgBIAAgBQASgLAPgNQgLgBgKAEIAAAAQgNAFgJAJIgBAAIgBAAIgBgBIAAgBQAEgZgCgaIgdAoIgCABIgBAAIgBgBQgEgagJgXIAEBXQACAfgKAMIgBABIgBgBIgBAAQgbg5gRg3QgCAbgKAZIAAAAIgBABIgBgBIgBAAQgIgUgKgRQgCALABALQACANAIALIAAABIAAABIgBABIgBAAQgYgJgagDIAiAkIAAABIAAACIgBAAQgZAAgZAFIBVAMQAZADAMAJIAAABIAAABIgBABQg9AHg2gBQAYAKAVARIAAABIAAABIAAABIgBAAQgWACgSAEQAJAGALABQANACANgEIABAAIABABIAAABIAAABQgRAWgKAWIAtgVIACAAIABABIAAABQgIAZgDAYIAmhOQAPgfARgEIABAAIABABIAAABQAABEgLBCQAOgXASgSIACAAIAAAAIABAAg");
	this.shape_10.setTransform(-110.4,-111.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#65C7F0").s().p("AASBoIAAgBIgCgBIgBABQgSASgPAXQAMhDAAhDIAAgBIgBgBIgBAAQgSAEgPAfIglBOQACgZAJgYIgBgCIgBgBIgBABIgtAVQAJgWARgWIABgBIgBgBIgBgBIgBAAQgMAEgNgCQgLgCgJgGQASgEAVgBIABAAIABgBIAAgBIgBgBQgUgRgZgKQA3AAA9gGIABgBIAAgBIgBgBQgLgKgZgDIhVgLQAZgGAYABIACgBIAAgBIAAgBIgjglQAbADAYAJIABAAIABAAIAAgBIAAgBQgIgLgCgNQgBgMACgKQAKAQAIAUIAAABIABAAIABAAIABgBQAJgYADgbQARA2AbA5IABABIABAAIABAAQAKgMgCgfIgEhXQAJAXAEAZIABACIABAAIABgBIAegoQACAZgEAaIAAABIABABIABAAIABgBQAJgJANgFIgBAAQALgDALAAQgPAOgSALIgBAAIAAABIABABIABABQAaAEAbgDQg6AfgzAoIgBAAIAAABIAAAAIAAABIgBAAIgCABIgBAAIAAACIABABIACAAIABAAIABAAIAAgCIAAgBIABAAQAEgDAFAAIAAAAIADgCQAKACANgDQAJgDANgIIBKguQgQAUgUAPIAAABIAAACIABAAIAyAHQgXAPgXAHIgBABIAAABIAAABIABAAQAMAEAKAJQAJAHAFAKQgSgHgTgKIgBgBIgBABIgBABIAAABQAIAZAQAXQg2gkg9gcIgBAAIgBAAIgBABIAAABIAAABIABABIABAAIACABQACATAcASIBHAxQgZgGgWgMIgBAAIgBABIAAABIAOAwQgUgMgUgVIgBgBIgBABIgBAAIAAABQAEAagRATQAAgRABgYg");
	this.shape_11.setTransform(-110.1,-111.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2472B6").s().p("AAGAeIgBgBIgFgOIgBgFIAAAAIABgBIAAgBIABAAIABABIAEAMIACgHIABgBIABAAIABABIABADIgBgEIAAgBIAAgBIABgBIABAAIAHADIgFgGIAAgBIAAgBIABgBIAFAAIgFgEIgBgBIAAgBIABgBIABAAIAEAAIgFAAIgBgBIgBAAIAAgBIABgBIAFgGIgIADIgBAAIAAgBIgBgBIAAgBIACgEIgIADIgCAAIAAAAIgBgBIAAgBIACgEIgCAEIgBABIAAAAIgBAAIAAgBIgDgHIgCAHIAAABIgBABIgBgBIgBAAIgEgFIgBgBIAAgBIgCgCIAAABIABADIAAAAIABAIIAAABIgBABIgCgBIgDgCIAEADIAAABIABABIgBABIgBAAIgIABIAIADIAAABIABABIgBAAIgBABIgBAAIgCABIgEACIACAAIADAAIABAAIAHACIABABIABABIgBABIABgBIABAAIABAAIAAABIABABIgBAIIAFgGIAAgBIABAAIABABIAAAAIABABIAAAHIACAFIAAABIgBABIgBABIAAgBIgBgBIgCgJIgGAHIgBAAIgBAAIgBgBIAAgKQgEADgFgBIgBgBIAAgBIAAgCIAFgDIgJAAIgBAAIgBgBIgBABIgBgBIgBAAIAAgBIAAgBIAIgFIgHgEIgBAAIAAgBIAAgBIABgBIAIgCQgCgDgBgFIAAgCIABAAIABAAIAFAEIgCgJIACADIACACIgCgFIAAgBIAAgBIABACIABgBIgCgBIAAABIgBAAIgBABIgBAAIAAgCIABgBIABAAIABABIABgBIABABIABAAIAAAAIAGAHIACgIIABgCIABAAIABABIAEAIQACgEAFgBIABAAIABAAIAAABIAAABIgDAFIAGgCIADgEIAAgBIAAAAIABgBIABAAIABABIAAABIgBAEIAAABIgCAFIAIgDIABAAIABABIABABIgBABIgFAHQAFAAAEAEIAAABIAAABIgBABIgBAAIgFAAIADACIAFABIgEAAIgBABIAAAAIACAAIAAAAIAAgBIABABIABABIAAAAIABABIAAAAIgCAAIAAAAIAAAAIAAAAIACAAIAAgCIAAgBIABAAIABAAIAAACIAAABIgCAAIAAAAIAAABIgBABIgBAAIgGgBIgCAAIAGAHIABABIgBABIAAABIgBAAIgJgCQABAFgBAEIgBABIgCABIgBgBIgCgGIgCAJIAAAAIAAABIgBABIAAAAIgBAAgAAPgVIAAAAIAAgBg");
	this.shape_12.setTransform(-103.6,-130.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A3F8E").s().p("AAAAMIgBgBIgBAAIgBAAIAAABIAAABIACAFIAAAFIgCgIIAAgBIAAAAIgBAAIgBAAIgBAAIgFAGIABgIIAAgBIgBAAIgBgBIgBABIAAAAIAAgBIAAgBIgBgBIgHgBIgBAAIgDAAIADgCIgFACIAEgCIABgBIACgBIABgBIAAAAIAAgBIgBgBIgHgCIAIgBIABgBIAAgBIAAgBIgBAAIgDgDIADACIABAAIACAAIAAgCIgBgHIgBgBIAAgDIACADIgBgBIABAAIABACIAEAEIAAABIABAAIABAAIABgBIABgIIADAHIABABIABABIABgBIABgBIABgDIgBADIAAABIAAABIAAABIABAAIAJgEIgCAFIAAABIAAABIABAAIABAAIAHgCIgFAFIAAABIAAABIABABIABAAIAFABIgEAAIgBAAIgBAAIAAABIABABIAFAEIgFABIgBAAIgBACIABABIAFAFIgHgCIgBAAIgBAAIgBABIABABIABAFIgBgEIgBgBIgCAAIAAABIgDAHgAAaAJIAAAAIAAAAgAAaAHIACAAIgCAAgAAXAHIAAgBIACAAIAAABgAgUgSIgBgEIABAAIACAGgAAMgTIABAAIAAAAg");
	this.shape_13.setTransform(-103.4,-130.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2472B6").s().p("AgIBRIgBAAQgFgNgCgPIgQATIgBABIgBAAIgBgBIAAgBQgBgNACgMQgLAHgNgCIgBgBIAAgBIABgCIAPgKQgMgDgQABIgBAAIgBgBIAAgBIABgBIABAAQAbgMAagRQgFAAgIADIgxAPIgBAAIgBgBIAAgBIAAgBQAKgIAOgHIgXgJIgBgBIAAgBIAAgBIABAAQALgFAOgBQgLgIgBgOIAAgBIABgBIABAAIAQAMQgBgOgGgMIAAgBIAAgBIAAgBIACAAIABAAQAXAaAYAUQABgHgHgLIAAAAIgYgtIAAgBIAAgBIABAAIABAAQAMAIAJAMIAEgYIABgBIABgBIABAAIAAABQAHAMADALQAGgLANgFIABAAIABABIAAACIgJARQANgEANgIIABAAIABAAIABABIgBABQgUAbgPAcQAHgCAJgNIAbgrIABgBIABAAIABABIABABQgCAOgHANIAYgHIABAAIABAAIABABIgBABQgGALgJAKQANgBAKAKIABABIgBACIgBAAIgUAAQALAKAMAGIAAAAIABABIAAABIgBABIgBAAQghgFgkAAQAFAGAOACIAzAIIABABIAAABIAAABIgBABQgNADgPAAIARATIAAABIAAABIgBAAIgBABQgNgCgMgEQAGALgFANIgBABIgBABIgBgBQgFgJgEgJQgEANgBAOIAAAAIgBACIgBAAIgBAAIgBgBQgJgigPgkQgFAGAAAOIAAA0IgBABIgBABIAAAAIgBgBgAgOAvIAAABIABABQABAMADAKIAAgrQAAgSAIgGIABgBIAAAAIABABQAPAhAJAfQACgMAFgMIAAgBIABAAIABAAIABABQADAJAFAJQACgLgGgLIgBgBIABgBIABAAIABAAQAMAFAMACIgQgTIgBgBIABgBIABgBQALABALgCIgpgGQgSgDgFgIIgBAAIgBgBIgBAAIgBgCIABgBIABAAQAjgBAgAEQgKgFgJgJIgBgBIAAgBIABgBIABAAIAUAAQgKgHgMACIgBAAIgBgBIAAgBIAAgBQAKgJAGgKIgYAHIgBAAIAAgBIgBAAIAAgBQAGgKADgMIgXAkQgKAPgKACIAAABIgBAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIgBABIAAAAIAAACIgCAAIgBAAIAAAAIAAgCIAAgBIAAAAIAAAAIAAgBQAPgdAUgcQgMAHgLADIgBAAIgBgBIAAAAIAAgBIAJgSQgKAFgEAMIgBABIgBAAIgBAAIgBgBQgCgLgGgMIgFAYIgBABIgBAAIgBgBQgHgJgIgHIAUAlIAAgBQAJAOgDAKIAAABIgBAAIgCAAQgWgTgWgXQAEAMABANIAAABIgBAAIgBABIgBgBIgPgMQADALALAGIABABIAAABIgBABIgBABQgNABgMAEIAXAIIABABIAAABIgBABQgKAFgJAGIAogNQANgDAHABIABAAIABACIgBABQgZAQgaAMQANAAAMADIABABIAAABIAAABIgBAAQgHAEgJAHQAMABAJgJIABAAIABAAIAAABIABABQgDALAAAOIAPgTIABgBIABAAIABAAgAABABIAAAAIgBAAg");
	this.shape_14.setTransform(-103.4,-130.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#75CBF2").s().p("AgMAzIgBgBIgBgBIgBAAIgBABIgPATQAAgOADgLIgBgBIAAgBIgBAAIgBAAQgKAJgLgBQAJgHAHgEIABAAIAAgBIAAgBIgBgBQgMgDgNAAQAagMAZgQIABgBIgBgCIgBAAQgHgCgNAEIgoANQAJgGAKgFIABgBIAAgBIgBgBIgXgIQAMgEANgBIABgBIABgBIgBgBIAAgBQgMgGgCgLIAPAMIABABIABAAIABgBIAAgBQgBgNgEgLQAWAWAWATIABAAIABAAIABgBQADgKgJgNIAAAAIgUglQAIAHAHAJIABABIABAAIABgBIAFgYQAGAMACALIABABIABAAIABAAIABgBQAEgMAKgFIgJASIAAABIAAAAIABABIABAAQALgDAMgHQgUAcgPAcIAAABIAAABIgBAAIAAABIAAACIABAAIABAAIACAAIAAgCIAAAAIABgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIABgBIAAgBQAKgCAKgPIAXgjQgDALgGAKIAAABIABAAIAAABIABAAIAYgHQgGAKgKAJIAAABIAAABIABABIABAAQAMgCAKAHIgUAAIgBAAIgBABIAAABIABABQAIAIALAGQgggEgjABIgBAAIgBABIABACIABAAIABABIABAAQAFAIASADIApAGQgLACgLgBIgBABIgBABIABABIAQATQgMgCgMgFIgCAAIAAAAIgBABIAAABQAHALgCALQgFgJgDgIIgBgBIgBgBIgBABIAAAAQgFAMgCAMQgJgfgPghIgBgBIgBAAIAAABQgIAGAAASIAAArQgDgKgBgMgAABADIABAAIAAAAg");
	this.shape_15.setTransform(-103.5,-130.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2472B6").s().p("AgSCPIgBgBIAAgBQAMhAAAhCQgOAGgLAYIgnBQIgBAAIgBABIgBgBIAAgBQABgbAJgYIgrAUIgBAAIgBAAIAAgBIAAgBQAJgXAPgSQgXAFgVgPIgBgBIABgBIABgBQASgEATgCQgVgPgZgJIgBgBIgBgBIABgBIABAAIABAAQA3ABA2gGQgJgGgTgCIhXgMIgBgBIAAgBIAAgBIABgBQAYgHAbABIgggiIAAgBIAAgBIABgBIABAAQAXABAXAIQgMgVAIgXIABgBIABAAIABABQAJAQAHARQAJgXABgcIAAAAIABgBIABgBIABAAIABABQAQA4AZA1QAGgLgBgZIgEhYIABgBIABAAIABAAIABABQAKAXAFAZIAbglIABgBIABAAIABABIAAABQADAYgDAXQAHgGAKgEQANgEAMACIABAAIAAACIAAABQgNAMgQAKQAYAEAcgEIABAAIABABIAAACIgBAAIgBABQgxAZgvAjQAPAFAYgQIBLguIABAAIABAAIAAABIAAABQgPAXgUAPIAuAGIABAAIABABIAAABIgBABQgUANgWAIQAXAIAIAXIAAACIgBAAIgBABQgPgGgTgKQAJAaAQAUIAAAAIgCACIgDgDIgDgFQgOgTgIgYIAAgBIABAAIABgBIABAAQASAKAPAGQgJgVgXgGIgBgBIgBgBIABgBIABgBQAWgGAUgNIgugGIgBgBIAAgBIAAgBIABgBQASgMAOgTIhDApQgaAQgQgFIgCACIgBAAQgEABgEACIgBABIAAABIgBABIgBAAIAAAAIgCgBIgBAAIAAgCIABgBIACAAIAAgBIABgBQAxglA0gbQgZACgYgEIgBgBIAAgBIAAgBIABgBQAQgJANgMQgJgBgKAEQgLAEgJAIIgBABIgBgBIAAAAIgBgBQAFgXgDgYIgbAlIgBABIgBgBIgBgBQgEgXgIgVIAEBPQABAegJALIgBAAIgBAAIAAgBQgZgygQg0QgCAZgJAWIAAAAIgBABIgBgBIgBAAQgHgSgJgQQgGAWAOAUIAAABIAAABIgBABIgBAAQgXgJgXgCIAfAhIABABIgBACIgBAAQgYgBgVAFIBOALQAYADAJAJIABABIgBABIgBABQg0AGg1gBQAWAKATAPIABAAIAAABIgBABIgBABQgSABgSAEQAUAMAWgHIABAAIABAAIAAABIgBABQgOATgKAWIAqgUIABAAIABABIAAAAIAAABQgIAWgCAXIAjhHQAMgdARgEIABAAIABABIAAABQAAA/gKA8QAMgTASgSIABAAIABAAIABAAIAAABQgBAWAAAQQAQgSgEgXIAAgBIABgBIABAAIABAAQAPARAVAOIgNgsIAAgBIABgBIABAAQAUAKAWAGIhAgtQgagRgCgQIgCgCIgBgBIgBgBIABgBIABgBIABAAIAAABIABAAIADACIABABIAAAAIAAABIAAACQADAOAXAPIBIAzIABABIAAABIgBABIgBAAQgZgFgYgMIANAsIAAABIAAABIgBABIgBgBQgVgNgQgQQACAYgSARIgBABIgCgBIAAgBQgBgQABgVQgTATgMAWIAAAAIgBABIAAAAIgBAAg");
	this.shape_16.setTransform(-103.7,-130.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3EAADF").s().p("AARBgIAAgBIgBgBIgBAAIgBABQgSARgMATQALg8gBg/IAAgBIgBAAIgBAAQgRAEgMAcIgjBIQADgYAHgVIAAgBIAAgBIgBAAIgBAAIgqATQAKgWAPgSIAAgBIAAgBIgBgBIgBAAQgWAHgUgMQASgEASgBIABAAIABgBIAAgBIgBgBQgTgPgWgKQA1ABA0gGIABgBIABgBIgBgBQgJgIgYgDIhOgLQAVgFAYABIABgBIABgBIgBgBIgfgiQAXADAXAIIABAAIABgBIABgBIgBgBQgNgUAFgVQAJAQAHARIABABIABAAIABAAIAAgBQAJgWACgZQAQA0AZAzIAAAAIABABIABgBQAJgLgBgdIgDhPQAHAVAEAXIABABIABAAIABgBIAbglQADAYgFAXIABABIAAABIABAAIACAAQAIgJALgEQAKgEAKABQgOAMgQAKIgBABIAAABIABABIABAAQAXAEAZgCQg0AbgwAmIgBAAIAAABIgDABIgBABIAAABIABABIACAAIABABIABgBIAAgBIAAgBIABAAQAEgDAEAAIABAAIACgCQAQAEAagQIBDgpQgOATgSANIgBABIAAABIABABIABAAIAtAGQgUANgWAHIgBAAIgBABIABABIABABQAXAHAJAUQgPgGgSgJIgBAAIgBAAIAAABIAAABQAIAYANATIADAEQgvggg5gaIAAAAIAAgBIgBgBIgDgBIAAgBIgBAAIgBAAIgBAAIgBACIABABIABABIADABQABARAaARIBAAtQgVgGgVgLIgBAAIgBABIAAABIANAsQgVgNgPgRIgBgBIgBAAIgBABIAAABQAEAYgQARQAAgQABgVg");
	this.shape_17.setTransform(-103.5,-130.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2472B6").s().p("AAGAeIgBgBIgDgMIAAAKIAAAAIgBABIgBAAIAAgBIAAAAQgCgFgBgGIgGAIIgBAAIgBAAIAAAAIgBgBIABgKQgFADgFgCIgBAAIAAgBIAAgBIAHgEQgGgBgFAAIgBAAIAAAAIgDAAIAAAAIgBAAIAAgBIAAgBIAKgFIgKgEIAAAAIgBgBIABgBIAAAAIALgCQgEgEgBgGIAAgBIABAAIABAAIAGAFQgBgFgCgGIgBAAIAAgBIABgBIABAAIABAAIAAABIAAAAIABgBIABABIAAAAIAIAHIACgJIAAgBIABAAIABAAIAAAAIAEAKQACgFAGgCIAAAAIABABIABABIgBAAIgDAHIAHgDIADgFIAAAAIAAAAIABgBIABAAIAAABIABAAIgBADIAAABIAAABIgBABIgCAFIAKgDIABAAIAAABIAAABIAAAAIgGAIQAFABAEAEIABAAIAAABIgBABIAAAAIgIAAIAFACIAFABIgDABIgBAAIAAAAIgBABIACAAIAAAAIAAgBIABABIABAAIAAABIABAAIgBAAIAAAAIABAAIAAAAIAAABIgBABIgBAAIgGgBIgDAAIAHAIIABAAIgBABIAAABIgBAAIgKgCQACAFgCAFIgBABIgBAAIAAgBIgEgGIgCAKIAAAAIgBABIAAAAIAAAAIgBAAgAABAJIABABIAEANIADgJIABAAIAAgBIABABIAAAAIADAHQABgEgDgEIAAgBIAAgBIABAAIABAAIAJADIgHgIIAAAAIAAgBIABgBIABAAQACABADgBIAAAAIABABIgHgFIgBgBIAAgBIABAAIABgBIAHAAQgEgCgEABIgBAAIAAAAIgBgBIABgBIAGgHIgJADIgBAAIAAgBIgBAAIABgBIACgGIgKAEIgBAAIgBAAIAAgBIAAAAIADgHQgDACgBAEIAAABIgBAAIAAAAIgBAAIgDgJIgCAJIAAAAIgBABIgBAAIAAgBIgFgFIAAABIgBAAIgBAAIgBgBIABAJIAAAAIgBABIAAAAIgGgFQACAEADACIABABIAAAAIAAABIgBAAIgJACIAIADIABABIAAABIgBAAIgFADIgEABIgDABIAAABIAAAAIABABIABgBIAAAAIABgBIAAAAIAAAAIABAAIADgCIACgBIABAAIABABIAAABIgBAAIAAAAIgBABIAKABIAAABIAAABIAAABIgFADQADgBADgCIABgBIABABIABAAIAAABIgCAKIAGgIIABAAIABAAIAAABIABAGIAAgJIAAgBIABAAIAAAAIAAAAgAgRgXIABABIABACIABAAIABgBIgCgBIgCgCIAAABgAAfAGIAAAAIAAgBIAAgCIAAAAIABABIAAABIAAABIgBAAIAAAAg");
	this.shape_18.setTransform(-126.4,-100.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#24408B").s().p("AACALIgBgBIgBAAIAAABIAAAAIAAAJIgBgGIAAgBIgBAAIgBAAIgGAIIABgKIAAgBIAAAAIgBAAIgBAAQgDADgEAAIAGgDIAAgBIAAgBIgBgBIgJgBIABgBIAAAAIABAAIAAgBIgBgBIgBAAIgCABIgEACIAAAAIAAAAIAAAAIgDABIAAAAIADgCIAEgBIAFgDIABgBIAAAAIgBgBIgIgDIAJgBIAAgBIABAAIgBgBIAAgBQgEgCgBgDIAFAEIABAAIABgBIAAAAIgBgJIABABIABAAIABAAIAAgBIAEAGIABAAIABAAIAAAAIABgBIABgJIAEAJIABAAIAAABIAAgBIABAAQABgEADgDIgDAHIAAABIAAAAIABAAIAAAAIALgEIgDAGIAAABIAAAAIABABIABAAIAJgDIgGAHIgBABIAAABIABAAIABAAQAEAAADABIgHAAIAAABIgBAAIAAABIABAAIAHAGIgBgBIgBAAQgCABgDgBIgBAAIAAABIAAABIAAAAIAHAIIgKgDIAAAAIgBABIAAAAIAAABQADAEgBAFIgDgIIAAAAIgBgBIgBABIAAAAIgDAJIgEgNgAAbAGIgBAAIABgBIAAAAIABAAIAAABgAAcAFIADABIgCAAgAgRgVIAAgBIADADIgBgCIABABIAAABIgBAAg");
	this.shape_19.setTransform(-126.4,-100.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2472B6").s().p("AgIBUIgBgBIAAgBQgGgNgBgOIgRAUIgBAAIgBAAIgBAAIAAgBQgBgNADgOQgMAIgNgDIgCAAIAAgCIABgBIARgLQgPgDgOABIgCAAIAAgBIAAgBIABgBIAAAAQAbgMAcgRQgGAAgIACIgyAQIgBAAIgBgBIAAgBIABgBQALgKANgGIgYgIIgBgBIAAgCIABAAQAKgFAQgCQgMgJgBgNIAAgBIACgBIABAAQAJAGAHAHQgBgOgGgOIgBgBIAAgBIABgBIABAAIABAAQAYAbAZAVQABgIgHgLIAAAAIgZguIAAgBIABgBIABgBIABABQALAIAJAMIAFgZIABgBIABgBIABABQAHALAEANQAFgMAOgEIABAAIABABIAAABIgJATQANgFANgIIABgBIABABIABABIgBABQgVAbgPAdQAIgCAIgNIAdgsIABgBIABAAIABABIAAABQgCAOgGAOIAYgIIABAAIABABIABAAIgBABQgHAMgIAKQANgBAKAKIABACIgBABIgBAAIgUABQAKAJANAGIABABIAAAAIABACIgBABIgBAAQgjgGgkABQAFAFAOADIA0AIIABABIABABIgBABIgBABQgOADgPAAIARATIABABIgBABIAAABIgBAAQgOgBgMgEQAGALgFAOIgBABIgBAAIgBgBQgGgKgDgIQgFAMgBAQIAAAAIAAABIgBABIgCAAIAAgBQgKgmgPgjQgGAHABAPIgBA0IAAABIgBABIgBAAIAAAAgAgOAxIABABQABALADALIAAgqQAAgUAIgGIABAAIAAAAIABABQAPAfAKAjQACgOAFgLIAAgBIABAAIABAAIABABQADAJAFAKQACgMgHgLIAAgBIABgBIAAgBIACABQALAEAOACIgRgTIAAgBIAAgBIABgBQALABAMgCIgqgHQgTgDgFgIIgBAAIgBAAIgBgBIAAgBIAAgBIABgBQAkgBAgAFQgKgGgJgJIAAgBIAAgBIABgBIABAAIAUAAQgKgHgNACIgBAAIgBgBIAAgBIABgBQAJgJAHgLIgYAIIgBAAIgBgBIAAgCQAFgLADgKIgYAkQgJAPgKACIgBABIAAABIgEADIAAAAIAAABIAAABIgCAAIgBAAIAAAAIAAgBIAAgCIAAAAIAAAAIAAAAIABgBQAOgdAVgcQgMAGgMADIgBAAIgBAAIAAgBIAAgBIAKgSQgLAFgEAMIgBABIgBAAIgBAAIAAgBQgDgNgGgLIgFAZIgBABIgBAAIgCAAQgGgKgIgIIAUAmIAAAAQAJAOgDAKIgBABIgBAAIgBAAQgXgSgWgYQAEAMABANIgBABIAAABIgBAAIgBgBQgHgGgJgHQADAMAMAHIAAAAIABACIgBAAIgBABQgPABgLAEIAYAIIABABIAAABIAAABIgBABQgKAEgKAHIApgNQAOgDAHAAIABABIABABIgBACQgbARgZALQAMAAANADIABABIABABIgBABIAAABIgRAKQALABAKgJIABAAIABAAIABABIAAABQgDANAAANIARgTIABgBIAAAAIABAAg");
	this.shape_20.setTransform(-126.2,-100.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#75CBF2").s().p("AgMA1IgBgBIgBAAIgBAAIgRAUQAAgNADgNIAAgBIgBgBIgBAAIgBAAQgJAJgMgBIARgLIAAAAIABgBIgBgBIgBgBQgNgDgMAAQAZgLAbgSIABgBIgBgBIgBgBQgHgCgOAFIgpAMQAKgGAKgEIABgBIAAgBIAAgBIgBgBIgYgIQALgEAPgBIABgBIABgBIgBgBIAAgBQgMgGgDgMQAJAGAHAHIABABIABgBIAAAAIABgBQgBgNgEgNQAWAZAXASIABAAIABAAIABgBQADgKgJgOIAAAAIgUgmQAIAIAGAJIACABIABAAIABgBIAFgZQAGALADANIAAABIABAAIABAAIABgBQAEgMALgFIgKARIAAABIAAABIABABIABAAQANgDALgGQgVAcgOAcIgBAAIAAABIAAAAIgBABIAAABIAAACIABAAIABAAIACAAIAAgCIAAAAIAAgBIAEgDIAAAAIABgBQAKgCAJgPIAYglQgDALgFALIAAABIABABIABABIAYgIQgHALgJAJIgBABIAAABIABAAIABABQANgCAKAHIgUAAIgBAAIgBABIAAABIAAABQAJAIAKAHQgggFgkABIgBABIAAABIAAABIABABIABAAIABAAQAFAIATADIAqAHQgMACgLgBIgBABIAAABIAAABIARATQgOgCgLgFIgCAAIAAABIgBABIAAABQAIAKgDAMQgFgJgDgJIgBgBIgBAAIgBAAIAAABQgFALgCANQgKgigPgfIgBgBIgBAAIAAAAQgIAGAAATIAAAqQgDgKgBgLg");
	this.shape_21.setTransform(-126.3,-100.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2472B6").s().p("AgUCfIgBgBIAAgBQANhHABhKQgPAGgOAbIgrBZIAAABIgCAAIgBgBIAAgBQACgdAJgcIgvAXIgBAAIgBgBIgBgBIAAgBQALgZAQgVQgaAHgXgRIgBgBIAAgBIABgBQAUgFAWgBQgXgSgdgLIgBgBIAAgBIABAAIABAAIAAAAQBAAAA7gGQgKgGgVgEIhhgNIgBAAIgBgBIAAgBIABgBQAdgIAcABIgjgnIgBgBIAAgBIABAAIABgBQAaACAaAJQgFgJgCgMQgCgOAEgOIABgBIABAAIABABQALASAIATQAKgaABgfIAAAAIABgCIABAAIABAAIABABQASA/AcA6QAIgMgCgbIgFhiIAAgBIABgBIACAAIAAABQANAaAEAcIAfgqIABgBIABAAIABABIAAABQAEAbgEAaQAIgHALgEQAOgFAOACIABABIABABIgBABQgQAOgRALQAdAFAegFIABAAIABABIAAABIgBABIgBAAQg5AfgzAlQAQAFAcgRIBUgzIABgBIABABIABABIgBABQgQAXgXATIAzAHIABAAIABABIAAABIgBABQgWAPgZAJQAKAEAJAIQALAKAFAMIAAACIgBABIgBAAQgTgHgTgKQAKAbASAZIAAABIAAABIgBAAIgCAAQg3gmg/gdQADAQAZASIBRA3IABABIgBABIAAABIgBAAQgdgFgagOIAPAyIAAABIgBABIgBAAIgBAAQgXgOgSgTQABAbgTATIgBABIgBgBIgBgBQgBgWABgUQgUAVgOAZIgBABIAAABIgBAAIgBAAgAAUBqIABAAIAAABQgCAUABAWQARgTgDgbIAAgBIABgBIABAAIABAAQASAVAWAOIgOgyIAAgBIAAgBIABAAIABAAQAXANAZAGIhJgyQgcgUgCgSIgDgBIAAgBIgBgBIgBgBIAAgBIABgBIACABIAAAAQA/AcA3AlQgQgYgIgZIAAgBIABgBIABgBIABABQATAKASAHQgFgKgIgIQgKgJgNgEIgBAAIAAgBIAAgBIABgBQAZgHAWgPIgzgHIgBgBIAAgBIAAgBQAWgRAPgTIhMAuQgdARgRgEIgDACIAAAAQgEAAgGADIAAAAIAAABIgBABIgBABIgBABIAAAAIgBgBIgBgBIAAgCIABAAIABgBIABAAIAAgBIAAgBIAAAAQA1gnA8ghQgbADgbgFIgBgBIgBgBIAAgBIABAAQARgLARgOQgLgBgMAEQgNAFgJAJIgBABIgBAAIgBgBIAAgBQAFgagDgbIgeAqIgBAAIgCAAIAAgBQgEgagKgYIAEBaQACAggKAMIgBAAIgBAAIgBgBQgbg3gSg8QgDAdgKAZIAAABIgBAAIgBAAIgBgBQgHgUgLgSQgCALABALQADAPAHAKIABABIgBABIgBABIgBAAQgagKgagDIAkAmIAAACIAAABIgCAAQgZgBgaAGIBYAMQAbAEAKAJIABABIgBABIgBABQg5AGg9AAQAZALAWARIABABIAAABIgBABIgBAAQgWABgUAEQAXAPAZgJIABAAIABABIAAABIAAABQgRAVgLAZIAvgWIABgBIABABIABACQgJAYgDAaIAnhQQAPggASgEIABAAIABABIAAABQAABGgMBEQAOgXAUgTIABgBIAAAAIABABg");
	this.shape_22.setTransform(-126.4,-100.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3EAADF").s().p("AATBrIAAgBIgBgBIgBAAIgBABQgUASgOAYQAMhEAAhGIAAgCIgBAAIgBAAQgSAEgPAgIgnBQQADgaAJgYIgBgCIgBgBIgBAAIgvAXQALgZARgVIAAgBIAAgBIgBgBIgBAAQgZAIgXgOQATgEAXgBIABgBIABgBIAAAAIgBgBQgWgSgZgKQA8AAA6gGIABgBIABgBIgBgBQgKgJgbgEIhYgMQAZgGAaABIACAAIAAgCIAAgBIgkgmQAaADAaAKIABAAIABgBIABgBIgBgBQgIgLgCgOQgCgLADgLQALASAHAUIABABIABAAIABAAIAAgBQAKgZADgdQASA8AbA3IABABIABAAIABAAQAKgNgCgfIgEhaQAKAYAEAaIAAABIABAAIACAAIAegqQADAbgFAaIAAABIABAAIABABIABgBQAJgJANgFQALgEAMABQgRAOgRALIgBAAIAAABIABABIAAABQAcAFAbgDQg8Agg0AoIAAAAIAAABIAAABIgBAAIgDABIgBAAIAAACIABAAIACABIABABIABgBIAAgBIABgBIAAgBIAAAAQAGgDAEAAIAAgBIACgCQASAFAdgRIBMguQgQATgVARIAAABIAAABIABABIAzAHQgWAPgZAHIgBAAIgBABIABACIABAAQAMAEALAJQAIAIAFAKQgTgHgTgLIAAAAIgBABIgBAAIAAABQAIAaAQAYQg3glg/gcIgBAAIgBgBIgBABIAAABIAAABIABABIABABIADABQACARAcAUIBJAzQgZgGgXgNIgBAAIgBAAIgBABIAAABIAPAyQgXgPgRgUIgCAAIgBAAIAAABIgBABQAEAbgRATQgBgXACgTg");
	this.shape_23.setTransform(-126.2,-100.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2472B6").s().p("AADASIAAAAIgDgIIAAgCIAAACIABAGIAAAAIAAABIgBAAIAAAAIAAgBIAAgGIAAgBIAAAAIgFAGIgBAAIAAAAIgBAAIAAgBIAAgFIAAgCIABgCIgEADIgBABIAAgBIAAAAIgBgBIACAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIAAAAIABAAIABAAIAAABIAAAAIAAAEIACgDIABAAIABAAIAAAAIAAgBIAAAAIAAgBIAAAAIABAAIAAAAIADAHIABgEIABAAIAAAAIAAgBIABAAIAAgBIABAAIAEABIgDgDIAAgBIAAgBIABAAIADAAIgDgCIgBAAIAAgBIABAAIAAAAIAAgBIgBAAIAAgBIAAgBIADgCIgEABIgBgBIgBAAIAAgBIACgEIAAgBIABgBIAAgCIABgBIABAAIAAABIAAABIAAABIAAAAIAAAAIAAAAIAAABIAAABIAAAAIgBACIAFgBIABAAIAAABIAAAAIAAABIgDAEIAFACIAAABIAAABIAAAAIgBAAIgDAAIACABIADABIABAAIAAABIAAABIgBAAIAAAAIgBAAIgBAAIAAABIgDAAIgBAAIAEAEIAAAAIAAABIgBABIgBAAIgFgCQABADgBADIgBABIgBAAIAAgBIgCgDIgBAFIAAAAIAAABIgBABIAAAAIgBgBgAAKgKIAAgBIAAAAgAgIAFIgCAAIABgBIABgBIABABIAAABIAAABIgBgBgAgSAFIAAAAIgBgBIABgBIAEgDIgEgBIgBgBIAAgBIAAAAIABgBIAFgBQgCgDAAgCIAAgBIABAAIABAAIAEADIABABIgBAAIAAABIgBAAIABABIAAAAIAAABIAAAAIAAABIgBAAIgEABIAEABIABABIAAAAIAAAAIgBABIgBAAIAAAAIAAABIAAAAIAAABIAAAAIgBABIgDABIAAgBIgBABIgBgBIAAAAIABgBIADgCIABABIgBAAIAAAAIABAAIAAAAIAAAAIABgBIAAAAIgBAAIgCAAIgEACIABABIAAAAIABABIgBAAIAAAAIgBAAgAgMACgAgEgHIgBgBIgCgDIgBgBIgBAAIAAABIABABIgBgBIgBgBIgCgDIABAAIAAAAIABgBIAAAAIABAAIAEAEIABgEIABgBIAAAAIABAAIABAAIABAFIAEgDIABAAIABAAIAAABIAAABIgCAEIgBABIAAAAIgBABIgBgBIAAAAIAAgBIgBABIAAAAIAAAAIgBgBIgBgDIgBAEIAAAAIgBABIAAAAIAAAAgAAHgMIABAAIgBAAg");
	this.shape_24.setTransform(-107.4,-142.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#233D8D").s().p("AAEAGIAAAAIgBgBIgBABIAAABIAAAAIAAABIAAAAIgCgBIAAABIgCADIABgEIAAgBIgBAAIAAgBIgBABIAAAAQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAIACgCIACAAIgBgBIABAAIgBAAIAAgBIgBABIgEgBIABAAIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIABgBIgBAAIAAAAIgEgCIAEAAIABAAIAAgBIAAgBIAAAAIAAAAIgCgBIACgBIAAABIAAgBIABAAIgBgBIgCgEIACABIAAAAIAAAAIAAgCIABABIABABIACADIAAAAIABAAIABAAIAAgBIAAgEIABAEIABABIAAAAIABAAIABgBIAAAAIAAABIABAAIAAAAIABAAIAAgCIAFgBIgCAEIAAABIABAAIABAAIADgBIgCADIAAABIAAABIAAAAIABAAIAAABIgBAAIAAAAIABABIACACIgCAAIgBAAIAAABIAAABIADADIgEgBIgBAAIgBAAIAAABIAAAAIgBAAIAAABIgCAEgAACAJIABACIAAAAgAABAKIABAAIAAABgAgDAGIgBACIgDABgAgJAJIAAgBIAAABgAgOAEIACgCIACgBIABAAIABABIgCAAIAAAAIgDACIgBAAIAAABgAgKADIABAAIAAAAIgBAAgAgKACIABABIgCAAIABgBg");
	this.shape_25.setTransform(-107.6,-143);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2472B6").s().p("AgFAyIgBAAQgDgIgBgJIgJAMIgBAAIgBAAIAAAAIgBgBQAAgIABgHQgGAEgIgBIgBgBIAAgBIABgBIAJgGQgIgCgJABIAAAAIgBAAIAAgBIAAgBIAAAAQATgJAPgJQgEAAgFACIgdAKIgBAAIgBgBIAAgBIAAgBIABAAQAGgFAHgEIgOgEIAAgBIgBgBIABAAIAAgBQAIgDAHgBQgGgFgBgIIABgBIAAAAIABAAIAKAHQgBgHgEgJIAAgBIABgBIAAAAIABABIAAAAQAOAPAPAMQAAgEgDgHIgPgbIgBgBIABgBIABAAIAAAAQAHAFAGAIIACgPIAAgBIABAAIABAAIAAAAQAEAHACAHQAEgHAHgCIABAAIABAAIAAABIgFALQAHgCAIgGIABAAIABABIAAAAIAAABIAAAAQgMAPgKASQAEgBAGgHIAQgaIABgBIAAAAIABAAIABAAIAAABIgFAQIAPgEIAAAAIABAAIAAABIAAABIgJAMQAHAAAGAFIAAABIAAABIgBABIgLAAQAGAFAHAEIAAAAIAAAAIABAAIAAABIgBABIgBAAQgUgDgVAAQAEADAHACIAfAFIABAAIABABIgBABIgBAAQgIACgIAAIAJALIABABIgBABIgBAAQgHAAgIgDQAEAHgDAIIAAAAIgBABIgBgBIAAAAIgGgLQgDAIAAAJIAAAAIAAABIgBAAIgBAAIgBgBQgFgUgJgWQgDADAAAJIAAAfIAAABIgBABIAAAAIgBgBgAgIAdIAAABIABAAIABAMIABgYQAAgMAFgEIAAAAIABAAIAAABQAJAUAFASQABgHADgHIABAAIABAAIAAAAIAFAKQABgGgEgGIAAgBIAAAAIABgBIABAAQAHADAHABIgJgLIgBAAIABgBIAAgBIABAAIAMAAIgYgEQgLgCgEgFIAAgBIAAgBIABAAQAUgBATADQgGgDgFgGIgBAAIAAgBIABgBIABAAIALAAQgFgEgIACIAAgBIgBAAIAAgBIAAgBQAFgDAFgIIgOAFIgBgBIgBAAIAAgBIAEgKIgMATQgHAJgFABIgBABIAAAAIgCABIAAABIAAABIgBAAIgBAAIAAAAIAAgBIAAgBIAAAAIAAAAQAKgTALgPQgHAEgHACIgBAAIAAgBIgBgBIABAAIAFgLQgGADgCAHIgBABIAAAAIgBAAIAAgBQgBgHgEgHIgDAPIAAABIgBAAIgBAAIgIgKIAMAVQAFAJgBAGIgBABIgBAAIgBAAQgOgMgNgNQADAIABAGIgBABIAAABIgBAAIgBgBIgJgHQACAHAHADIAAAAIAAABIAAABIgBAAIAAAAQgIABgGACIANAFIABAAIAAABIAAABIgBAAIgKAGIAWgHQAIgDAFABIABABIAAABIAAAAQgNAJgRAIQAHAAAGACIABABIAAAAIAAABIAAABIgKAFQAHAAAGgEIAAAAIABAAIABAAIAAABQgCAHAAAIIAJgLIABgBIAAAAIABAAg");
	this.shape_26.setTransform(-107.2,-143);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4EC2EE").s().p("AgHAgIAAAAIgBgBIAAAAIgBABIgJALQAAgIABgHIAAgBIAAAAIgBgBIgBABQgFAEgHAAIAKgGIAAAAIAAgBIAAAAIgBgBQgGgCgHAAQAQgIAOgJIAAAAIAAgBIgBgBQgFgCgIAEIgWAHIAKgGIABAAIAAgBIAAgBIgBAAIgOgFQAHgCAIgBIAAAAIABAAIAAgBIAAgBIAAgBQgHgCgCgHIAJAHIABAAIABAAIAAAAIAAgBQAAgGgDgIQANANAOAMIABAAIABAAIAAgBQABgGgEgJIgMgVIAIAJIABABIABAAIAAgBIADgPQADAHABAHIABABIABAAIAAAAIABgBQACgHAGgDIgFALIgBAAIABABIAAAAIABAAQAHgBAHgEQgLAPgKASIgBABIAAAAIAAABIAAABIABAAIgBAAQgEAEAAAMIgBAYIgCgMgAACAFIgBgBIAAAAIABAAIABAAIAAgBIAAgBIACgCIAAAAIABAAQAFgBAHgJIAMgTIgEAKIAAABIABAAIAAAAIAPgEQgGAIgEADIAAABIAAABIABAAIAAAAQAHgBAGAEIgLAAIgBAAIgBABIAAABIABAAQAFAFAGAEQgTgDgUABIgBAAIAAABIAAABQAEAFALACIAYAEIgMAAIgBAAIAAABIgBAAIABABIAJALQgHgBgHgDIgBAAIgBAAIAAABIAAABQAEAGgBAGIgFgKIAAgBIgBAAIgBABQgDAHgBAHQgFgSgJgUg");
	this.shape_27.setTransform(-107.3,-143.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2472B6").s().p("AgMBfIAAAAIgBgBQAIgoABguQgJADgIAQIAAAAIgaA1IAAABIgBAAIgBgBIAAgBIAAAAQABgRAFgQIgbANIgBAAIgBAAIAAgBIAAgBQAFgOAKgMQgPADgOgKIAAgBIAAgBIABAAQALgCANgCQgMgKgSgGIgBgBIAAgBIAAAAIABAAIABAAQAnAAAhgDQgGgDgMgDIg6gHIAAAAIgBgBIAAgBIAAAAIABgBQARgEARAAIgVgXIgBAAIAAgBIABAAIABgBQAQACAOAEQgIgOAFgPIABgBIABAAIABABQAHANAEAJQAGgSAAgQIAAAAIABgBIAAAAIABAAIABABQAJAiASAmQAEgIgBgQIgCg6IAAgBIABAAIABAAIAAABIAAAAQAHAPADAQIASgYIABgBIAAAAIABABIAAAAQACAPgCAQQAMgKAQACIABABIAAABIgBAAIgTAPQAQADATgDIABAAIAAABIAAABIAAAAIgBABIAAAAIgDAAIgDAAQgRACgQgDIAAAAIgBgBIABgBIAUgPQgPgBgLAMIgBAAIAAAAIgBgBIAAAAQACgRgBgOIgSAYIgBABIgBAAIAAgBQgCgPgGgOIACA0QACAUgGAHIgBABIAAAAIgBgBQgRgkgKgfQgBAOgGAQIgBAAIAAABIgBgBIgBAAQgDgJgHgNQgEAOAJANIAAABIAAABIgBAAIAAAAQgOgFgQgCIAVAWIAAABIgBABIAAAAQgPAAgPADIAzAHQARADAFAFIABAAIAAABIgBABQggADgmAAQAQAHALAJIABABIAAABIgBABQgOABgLACQANAIAPgFIABAAIABABIAAAAIAAABQgKANgGANIAbgMIABAAIABAAIAAABQgFAOgCAPIAWgvIABAAQAKgTAKgCIABAAIAAAAIAAABQAAAsgHAmQAJgOALgLIAAAAIABAAIABAAIAAABQgBALAAANQAKgLgCgPIAAgBIABgBIAAAAIABABQALALANAJIgJgdIABgBIAAgBIABABQANAGAPAEIgrgdQgRgMgCgLIgBgBIAAAAIgBgBIAAAAIAAgBIABgBIABAAIAAABIABABIgBAAIACAAIABABIAAAAIAAAAIAAACQACAJAPAKIAwAiIABABIAAAAIgBABIgBAAQgRgEgOgHIAIAdIAAABIgBAAIAAABIgBgBQgNgIgLgLQABAQgMALIgBABIgBgBIAAgBQgBgNABgLQgLANgJAOIAAABIgBAAIAAAAIgBAAgABNAvIgCgDQgJgNgFgPIAAgBIAAgBIABAAIABAAQAMAHAKADQgHgOgPgDIAAgBIgBAAIABgBIAAgBQAQgEAMgIIgegFIgBAAIAAgBIAAgBQALgIAKgMIgsAaQgRALgLgDIgBABIAAAAIgGACIgBAAIAAABIAAABIgBAAIAAAAIgBgBIgBgBIABgBIABAAIAAAAIAAgBIABAAIAFgBIABgBIAAABIACgCIABAAIAAAAQAKADAQgKIAygfIABAAIABAAIAAABIAAABIgBAAQgKAPgNAJIAfAFIAAAAIABABIAAAAIgBABQgLAIgQAGQAOAEAGAQIAAABIAAABIgBAAQgKgDgNgIQAGARAKAOIAAABIgBAAIAAABIgCgDg");
	this.shape_28.setTransform(-107.4,-143.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0088C7").s().p("AALBAIAAgBIAAAAIgBAAIgBAAQgKALgKAOQAHgmABgsIAAgBIgBAAIgBAAQgKACgKATIAAAAIgXAvQACgPAFgOIAAgBIAAAAIgBAAIgcAMQAGgNAKgNIAAgBIAAAAIAAgBIgBAAQgPAFgNgIQALgCANgBIABgBIAAgBIAAgBQgLgJgQgHQAmAAAfgDIABgBIAAgBIAAgBQgFgEgRgDIg0gHQAPgDAPAAIABAAIAAgBIAAgBIgVgWQAQACAOAFIABAAIABAAIAAgBIAAgBQgJgNAEgOQAHANADAJIAAAAIABABIABgBIAAAAQAGgQACgPQAJAgARAkIABABIABAAIABgBQAFgIgBgTIgCg0QAFANACAQIABAAIABABIABgBIASgYQABAOgDARIABAAIAAABIABAAIABAAQAKgMAPABIgUAPIAAABIAAABIABAAQAPADARgCIADAAQgfAQgiAaIgEABIAAAAIgBABIAAAAIgCAAIAAABIAAABIABABIABAAIABAAIAAgBIAAgBIAAAAIAGgCIAAAAIACgBQALADARgLIAsgaQgKAMgLAIIgBABIABABIAAAAIAfAFQgMAHgQAFIgBABIAAAAIAAABIABABQAOADAHAOQgKgDgMgHIAAAAIgBAAIgBABIAAAAQAFAPAJAOIACADQgggWglgRIAAAAIAAgBIgCgBIAAAAIAAgBIgBAAIgBAAIAAABIgBAAIABABIAAABIABAAIABABQABALARALIArAeQgPgEgMgHIgBAAIgBABIAAABIAIAdQgNgJgKgLIgBgBIgBAAIAAABIgBABQADAPgKALQgBgNABgLgABOAxIAAAAIAAAAg");
	this.shape_29.setTransform(-107.2,-143.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2472B6").s().p("AAEAWIAAgBIgCgGIAAAEIgBAAIAAABIgBAAIAAgBIAAAAIgCgHIgEAFIgBAAIgBAAIAAAAIAAgBIAAgGIAAgCIABgCIABABIAAAAIABABIgBAFIAEgFIABAAIABAAIAAABIAAgCIAAgBIAAAAIABAAIABABIACAIIACgFIAAgBIABAAIABABIABADIgBgEIAAAAIAAgBIAAgBIABAAIAGACIgDgEIgBgBIAAAAIABgBIABAAIADAAIgEgDIgBgBIAAAAIABgBIAAAAIAAAAIgBgBIAAgBIAAAAIADgEIgFABIgBAAIAAAAIAAgBIABgEIgGADIgBAAIgBgBIAAAAIAAgBIACgDIgCAEIgBAAIAAAAIAAAAIgBgBIgCgFIgBAGIAAABIgBAAIAAAAIgBgBIgDgEIgBgBIAAAAIgBgBIAAACIgBgDIgBAAIAAgBIAAAAIgBABIAAgBIAAAAIAAgBIABAAIABAAIAAAAIABAAIAGAFIABgGIAAAAIABgBIAAAAIABABIACAGQACgDAEgBIAAAAIABAAIAAABIAAABIgCADIAEgCIACgCIAAgBIAAAAIABgBIAAAAIABABIAAABIAAADIgBABIgBADIAGgCIABAAIAAAAIABABIgBABIgDAFQADAAADADIAAABIAAABIgBAAIgEAAIACABIAEABIABAAIAAABIAAABIgBAAIAAABIgBABIAAAAIgFAAIADAEIABABIgBABIgBAAIgGgBQABADgBAEIgBAAIgBAAIgBAAIgCgFIgBAHIAAABIAAAAIgBABIAAAAIgBAAgAASAEIAAABIACABIABgBIgCAAIABgBIAAAAIgCAAIAAAAgAAVAEIAAABIAAAAIABgBIgBAAgAALgNIABAAIAAAAgAALgPIAAAAIABgBgAgOAJIAAAAIAAgBIABAAQAEAAACgCIAAgBIAAABIgGADIgBABgAgKAGIgCAAIACgBIABgBIAAABIAAAAIABABIgCAAgAgWAFIAAAAIAAgBIAAgBIAGgDIgGgCIAAgBIAAAAIAAgBIAAgBIAHgBQgCgDgBgDIAAgBIABgBIABABIADACIgBgGIABACIACACIACAFIAAABIgBAAIgBAAIAAAAIgDgCIACACIABABIABAAIAAABIgBABIgBAAIgFABIAFACIABABIAAAAIgBAAIgCABIABABIAAABIAAAAIgBAAIAAAAIAAAAIgBABIgBAAIgCABIAAAAIgCAAIgBAAIAAAAIgBAAgAgOABIgEABIgDABIAAABIAAAAIABABIAAAAIAAgBIAAAAIABgBIAFgCIAAAAIgDACIAAAAIABAAIACAAIAAgBIAAgBIAAAAIAAAAIAAAAg");
	this.shape_30.setTransform(-164.2,-93.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#244794").s().p("AACAIIAAAAIgBAAIgBAAIAAABIAAACIAAgBIgBAAIgBAAIgDAEIAAgEIgBgBIAAgBIAAABIgBgBIAAACQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAIAFgDIABgBIgBAAQgCADgDAAIADgCIABAAIAAgBIAAAAIAAAAIAAgBIgBAAIgHAAIACgBIABAAIAAAAIAAAAIAAAAIABAAIAAgBIgBgBIABgBIABAAIAAgBIgBgBIgFgBIAGgBIABgBIAAAAIAAgBIgBAAIAAgBIgCgCIACACIABAAIABAAIAAAAIAAgBIgBgGIgCgBIgBgDIABAAIAAABIAAAAIACACIgBgBIACABIAAAAIAAAAIABABIACAEIABABIABAAIAAAAIABgBIABgGIACAFIAAABIAAAAIABAAIAAgBIACgDIgBADIAAAAIAAABIABABIAAAAIAGgDIgBAEIAAABIABAAIABAAIAFgBIgEADIAAABIAAABIABABIABAAIgBAAIAAAAIAAAAIAAABIAEAEIgDAAIgBAAIAAAAIAAABIAAABIADAEIgFgCIgBAAIgBABIAAABIAAAAIACAEIgCgDIAAgBIgBAAIgBABIgBAFgAgOALIAAAAIAAAAgAAVAGIAAAAIAAAAgAATAGIAAAAIABAAIAAAAgAgUAGIACgCIAEgBIABAAIgBAAIAAABIABABIgCAAIABgBIgCABIgBAAIADgCIAAAAIgFACIAAAAIAAABIgBAAgAALgNIABgBIgBABg");
	this.shape_31.setTransform(-164.2,-93.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2472B6").s().p("AgGA7IAAgBQgEgKgBgKIgMAPIgBAAIAAAAIgBAAIAAgBQgBgIACgLQgHAFgKgBIgBAAIAAgBIAAgBIAMgIQgKgCgKABIgBAAIAAgBIgBAAIAAgBIABgBQAUgJATgMIgKADIgjALIgBAAIgBgBIAAgBIABgBQAGgFALgGIgSgFIAAgBIAAgBIAAAAIAAgBQAJgDAKgCQgIgGgBgJIAAgBIABAAIABAAIALAJQgBgLgEgJIAAgBIAAgBIABAAIABABIAAAAQARASASAPQAAgGgFgHIAAgBIgRggIAAgBIAAgBIABAAIABAAQAIAGAGAJIADgSIABgBIABAAIAAABQAFAHADAJQAEgIAJgDIABAAIABABIAAABIgHAMQAJgDAKgGIABAAIAAABIABAAIgBABIAAAAIgDACIgCACQgJAFgIACIgBAAIgBgBIAAgBIAAAAIAHgMQgHADgDAJIgBAAIgBABIAAgBIgBAAQgBgKgFgHIgDARIgBABIgBAAIgBAAQgEgHgGgGIAOAbIAAAAQAHAKgCAHIgBABIgBAAIAAAAQgRgNgPgRQADAIAAAKIAAAAIgBABIAAAAIgBAAIgLgJQACAHAIAFIABABIAAABIgBAAIgBABQgJAAgIADIAQAGIABAAIAAABIgBABIgOAIIAdgJIAAAAQAKgCAFAAIABAAIAAABIAAABIAAAAQgSAMgUAJQAKAAAJACIAAAAIABABIAAAAIgBABIgMAIQAJAAAGgGIABAAIABAAIAAABIAAABQgCAKAAAHIALgNIABgBIABAAIABABIADAPIAAgdQAAgNAGgFIAAAAIAAAAIABAAQAKAXAHAYQACgJADgJIABAAIAAAAIABAAIABAAIAFAOQACgJgFgHIAAgBIAAgBIABAAIAAAAQAIADAKACIgMgOIAAgBIABgBIAAAAIAPgBIgdgEQgNgDgDgFIgBAAIgBgBIgBAAIAAgBIAAgBIABAAQAbgBAWAEQgIgEgGgHIAAAAIAAgBIAAgBIABAAIAOAAQgHgFgJACIgBAAIAAgBIAAgBIAAgBQAHgGAFgIIgRAGIgBgBIgBAAIAAgBIAGgPIgRAaQgHAKgGACIgBAAIgDADIAAAAIAAAAIAAABIgBABIgBAAIAAgBIAAgBIAAgBIAAAAIAAAAIADgEIABgBIABAAIAAAAQAGgCAGgJIAUgeIAAgBIABAAIABAAIAAAAIABABQgCAJgEAKIARgFIABAAIABABIgBAAQgEAJgGAHQAJgBAHAHIABABIgBABIgBAAIgOABQAIAGAIAFIAAAAIAAAAIABAAIAAABIAAABIgBAAQgXgEgcAAQAEAEALACIAkAGIABABIAAAAIAAABIgBABQgLACgJAAIAMAOIABAAIgBABIAAAAIgBABQgKgCgIgCQAEAIgDAJIgBABIgBAAIgBgBIgGgMQgDAJgBAKIAAAAIAAABIgBABIgBgBIAAAAQgIgagKgZQgDAFAAAKIgBAlIAAABIgBAAIAAAAIgBAAg");
	this.shape_32.setTransform(-164,-93.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#75CBF2").s().p("AgJAlIAAAAIgBgBIgBABIgLAOQAAgIACgKIAAgBIgBAAIAAgBIgBABQgHAFgIAAIAMgIIAAAAIAAgBIAAgBIgBAAQgJgCgJAAQATgJASgLIABgBIAAgBIAAAAIgBgBQgGgBgJADIAAAAIgdAJIAOgIIABAAIgBgBIAAgBIgRgFQAJgDAJgBIABAAIAAgBIAAgBIAAAAQgIgFgCgIIALAJIAAAAIABAAIABAAIAAgBQgBgJgDgJQAQARAQANIABAAIABAAIAAgBQACgHgGgKIAAABIgOgbQAFAFAFAHIABAAIABAAIAAgBIAEgRQAEAHACAKIAAABIABAAIABAAIAAgBQADgIAHgEIgGAMIAAABIAAAAIAAABIABAAQAIgCAJgFIADgCQgOAUgKATIgBABIgDACIgBABIAAABIAAABIAAABIABAAIABAAIABAAIAAgBIAAgBIAAAAIACgDIABAAQAHgCAHgKIAQgZIgFAOIAAABIABABIAAAAIASgGQgFAJgHAGIgBAAIABABIAAABIABAAQAJgCAHAFIgOAAIgBABIgBAAIAAABIABABQAGAFAIAFQgWgDgbAAIgBAAIAAABIAAABIABABIAAAAIABAAQAEAGANACIAdAFIgPAAIgBABIAAABIAAAAIAMAOQgKgCgIgDIgBAAIAAAAIgBABIABABQAFAHgCAJIgGgNIAAgBIgBAAIgBAAIAAABQgEAIgBAJQgHgYgLgWIgBgBIAAAAIAAAAQgFAFAAANIgBAdIgDgPg");
	this.shape_33.setTransform(-164.1,-93.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2472B6").s().p("AgOBwIAAAAIgBgBQAKgxAAg1QgLAEgJATIAAAAIgeA+IgBABIgBAAIAAAAIgBgBQACgWAGgSIghAQIgBAAIgBAAIAAgBIAAgBQAIgSALgOQgSAEgRgLIAAgBIAAgBIABgBQAOgDAPgBQgQgMgUgIIgBgBIAAgBIAAAAIABAAIABAAQArABArgFQgIgFgOgBIhFgKIgBAAIAAgBIAAgBIABAAQAVgFATAAIgZgbIAAgBIAAgBIABAAIAAAAQATABASAGQgKgQAGgTIABAAIABAAIABAAQAHANAGAOQAHgUAAgVIAAAAIABgBIAAAAIABAAIABABQANAsAUApQAEgIgBgUIgChFIAAgBIABAAIABAAIAAAAQAIATAEAUIAVgeIABAAIAAAAIABAAIAAABQADAUgDARQAOgMATACIABABIAAAAIAAABQgNAMgKAGQAWADATgDIABAAIABABIAAABIgBABIAAAAIAAAAQgmATgnAcQAMAEATgMIA7gkIABAAIABAAIAAABIAAABIAAAAQgNARgPAMIAlAFIAAAAIABABIAAAAIgBABQgOAKgTAGQASAHAHASIAAABIgBABIgBAAQgOgFgNgHQAIATAMARIgBABIAAAAIgBABIgCgDIgCgDQgLgQgGgTIAAAAIAAgBIABAAIABAAQAMAHAOAFQgHgQgSgFIgBgBIAAgBIAAAAIABgBQATgGAOgJIgkgFIgBgBIAAgBIAAgBQAOgKAMgOIg1AgQgUAMgNgDIgBABIgBAAIgHADIAAAAIAAABIgBABIgBAAIAAAAIgBgBIAAAAIgBAAIAAgBIABgBIAAAAIABAAIAAAAIAAAAIAAgBIAAAAIABgBIAAAAQAogdAogVQgSACgVgEIgBAAIAAgBIAAgBIAAAAQALgGANgMQgSgBgNAOIgBAAIAAAAIgBAAIAAgBQADgRgCgVIgVAeIgBAAIgBAAIAAgBQgDgRgHgRIADA+QABAXgGAIIgBABIgBgBIAAAAQgTgngNgqQgCAUgHASIgBAAIAAABIgBgBIgBAAQgFgOgHgNQgFASALAPIAAABIAAABIgBAAIAAAAQgSgHgTgCIAZAbIAAABIAAABIgBAAQgRAAgTAEIA+AIQASACAIAHIAAABIAAABIgBAAQgpAFgqgBQATAIAOAMIAAABIAAAAIAAABIgBAAQgPABgOADQAQAKASgGIABAAIAAABIAAAAIAAABQgLAOgIASIAhgPIABAAIAAAAIAAABQgGAQgCAUIAcg5QALgWAMgDIABAAIAAAAIAAABQAAAzgIAvQALgRANgNIAAAAIABAAIABABIAAAAQgBANAAAQQANgNgDgTIAAgBIABAAIAAAAIABAAQANAPAQAJIgLgjIABgBIAAgBIABAAQARAKARAEIg0gjQgTgPgCgMIgCgBIAAAAIgBgBIAAgBIAAgBIABAAIABAAIAAAAIABABIACABIAAAAIAAABIABABQACALASANIA5AoIAAAAIAAABIAAAAIgBABQgTgEgTgKIAKAkIAAAAIgBABIAAAAIgBAAQgQgJgNgOQACASgPAPIgBAAIgBAAIAAgCQgBgQABgNQgNAOgLASIAAAAIAAABIgBAAIAAAAIgBAAgAAAADIAAAAIAAAAg");
	this.shape_34.setTransform(-164.2,-93.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3EAADF").s().p("AANBMIAAgBIgBgBIAAAAIgBAAQgNANgLARQAJgvAAgzIgBAAIAAgBIgBAAQgMAEgLAWIgbA4QACgTAGgQIAAgBIgBgBIgBAAIghAQQAIgSALgOIABgBIgBgBIAAAAIgBAAQgSAGgPgLQAOgCAOgBIABgBIABAAIAAgBIgBgBQgOgLgTgJQAqABAqgEIAAgBIABgBIgBgBQgHgGgSgCIg+gJQATgEAQABIABgBIABgBIgBAAIgZgbQATACASAHIABAAIAAgBIABgBIgBAAQgKgQAEgRQAHAMAGAOIAAABIABAAIABAAIAAgBQAHgSACgTQANApATAnIAAABIABAAIABAAQAGgJgBgXIgCg+QAGARADASIABAAIABABIAAgBIAVgdQACAUgDARIAAABIABAAIABABIAAgBQANgNASABQgNALgKAGIgBABIAAABIABAAIAAABQAVADASgCQgoAVgnAeIAAAAIAAAAIAAABIgBAAIAAAAIAAAAIgCAAIAAABIAAAAIAAABIAAABIAAAAIACAAIABABIAAgBIAAgBIAAgBIABAAIAGgCIABAAIABgCQANADAUgMIA1ggQgLAPgOAKIgBABIAAABIABAAIAkAFQgOAKgTAGIgBAAIAAABIAAABIABAAQASAFAIARQgOgFgNgIIgBAAIAAAAIgBABIAAABQAHATAKAPIACADQglgZgsgVIgBAAIAAgBIgCgBIgBgBIAAAAIgBAAIgBABIAAAAIAAABIABABIAAABIACAAQACAMAUAPIA0AjQgRgEgSgJIAAAAIgBAAIAAABIAKAkQgPgKgOgOIAAgBIgBAAIgBABIAAABQADASgNAOQAAgRABgMgABcA5IAAAAIAAAAg");
	this.shape_35.setTransform(-164,-93.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2472B6").s().p("AAEAVIgBAAIgBgFIAAADIAAABIgBAAIgBAAIAAgBIAAAAIgCgHIgEAFIgBABIAAAAIgBgBIAAAAIAAgHIAAgCIABgBIgFADIgCAAIAAgBIAAAAIAAgBIABAAQADAAADgCIAAAAIABAAIABAAIAAABIAAABIgBAFIAEgEIABgBIAAAAIABABIAAAAIAAgCIAAgBIAAAAIABAAIABABIACAJIACgGIAAgBIABAAIABAAIAAABIAAgBIAAgBIABAAIABAAIAFABIgEgEIACgCIABACIAGAFIAAABIgBABIAAAAIgIgBQABADgBAEIAAAAIgBABIgBgBIAAAAIgCgDIgBAGIgBAAIgBABIAAgBgAgKAHIgCgBIACgBIABAAIABAAIAAABIAAABIgCAAgAgWAGIAAgBIAAgBIAAgBIAGgDIgGgCIAAAAIAAgBIAAgBIAAAAIAHgCQgCgCgBgEIABgBIAAgBIABAAIABAAIACADIgBgGIAAgBIAAAAIABgBIABABIAAgBIABABIAFAEIACgGIAAAAIABgBIAAABIABAAIACAGQACgDAEgBIAAAAIABAAIAAABIAAAAIgCAFIAEgCIACgEIAAAAIABAAIABAAIAAABIgBADIAAAAIAAABIgBADIAGgCIABAAIABABIAAABIAAAAIgEAFQADABADADIAAABIAAAAIgBAAIgEAAIACABIAEABIAAAAIABABIAAABIAAABIgBAAIAAAAIgBAAIAAABIgBgBIgBAAIgBgBIAAAAIgBAAIAAgBIgBAAIgEgDIgBAAIAAgBIABAAIAAgBIgBAAIAAAAIAAgBIAAgBIADgEIgEABIgBAAIgBgBIAAgBIABgCIgGACIgBAAIAAAAIgBgBIABAAIABgFQgBACgBADIgBABIAAAAIAAAAIgBgBIgCgGIgBAGIAAABIgBAAIgBAAIAAgBIgCgDIgCgBIAAgBIgBgBIAAACIABABIAAAFIAAABIgBABIgBgBIgBgBIABACIABAAIAAABIAAABIgBAAIgFABIAFACIABABIAAAAIgBABIgCAAIAAAAIgEABIgDABIAAABIAAABIABABIAAgBIAAABIgBAAIAAAAIgBAAgAAUADIABAAIAAAAIAAAAIABAAIAAgBgAgSAFIAAAAIAAgBIAAAAIgCABIAAAAIAAgBIAAAAIABgBIAEgCIABABIgDABIABAAIAAAAIACAAIAAgBIAAAAIAAgBIABABIAAABIAAAAIgBAAIAAAAIAAABIgBAAIgBABIgCABgAAQAFIABAAIgBAAg");
	this.shape_36.setTransform(-126.5,-82.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#24408B").s().p("AAEAHIgBgBIgBAAIgBABIAAAAIAAADIAAgBIgBAAIAAAAIAAAAIgEAEIABgFIAAgBIAAgBIgBAAIgBAAIAAAAQgDADgDAAIADgCIABAAIAAgBIABAAIgBAAIAAgBIgBAAIgGAAIABgBIABAAIAAAAIAAAAIABAAIAAAAIAAgBIgBgBIAAAAIAAABIAAABIgCAAIACgBIgDABIAAAAIADgCIgBAAIgEACIgBAAIAAABIgBAAIAAAAIADgCIAEgBIAAAAIACgBIAAAAIAAgBIAAAAIgFgCIAFgBIAAgBIABAAIAAgBIgBAAIgBgCIABABIABAAIABAAIAAgBIgBgGIAAAAIAAgCIABACIAAgBIAAAAIABABIADADIAAABIABAAIABAAIAAgBIABgFIABAFIAAABIABAAIABAAIAAgBQABgCACgCIgCAEIAAABIAAAAIABABIABAAIAFgDIgBADIAAABIABABIABAAIAFgCIgDAFIAAAAIAAABIAAABIABAAIAAAAIgBAAIAAABIABAAIAEAEIAAAAIABAAIABAAIAAABIgCgBIgCABIgBgBIgCACIAEAEIgGgCIgBAAIAAABIgBABIABAAIgBAAIAAAAIgBAAIgBABIgBAFgAgGAHIAAACIgEABgAgNAKIABAAIAAAAgAgRAFIAAAAIAAAAg");
	this.shape_37.setTransform(-126.7,-82.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2472B6").s().p("AgGA7IAAAAQgEgJgCgLIgLAOIgBAAIAAAAIgBAAIAAgBQgBgIACgKQgIAFgJgCIgBgBIAAgBIAAAAIAMgIQgKgCgLABIAAAAIgBAAIAAgBIAAgBIAAgBQASgIAWgNQgEAAgGACIgjAMIgBAAIgBgBIAAgBIAAAAQAIgIAJgEIgRgGIAAAAIAAgBIAAgBIAAAAQAJgEAKAAQgIgGgBgKIAAgBIABAAIABAAIALAJQgBgLgEgJIAAgBIAAgBIABAAIABAAIAAABQAQASATAPQAAgGgFgIIAAAAIgRggIAAgBIAAgBIABAAIABAAQAIAHAGAIIADgSIAAgBIABAAIABAAIAAAAQAFAJADAJQAEgIAJgEIABAAIAAAAIABABIgBABIgGANQAJgDAKgGIABgBIAAABIABABIgBAAIAAABIgDABIgCACQgJAEgIADIgBAAIgBgBIAAgBIAHgMQgIAEgCAIIgBABIgBAAIAAAAIgBgBQgBgJgFgIIgDARIgBABIgBAAIgBAAQgEgHgGgFIAOAaIAAAAQAHAKgCAHIgBABIgBAAIAAAAQgRgNgPgRQADAIAAAKIAAAAIgBABIgBAAIgLgJQACAIAIAFIABAAIAAABIgBABIgBAAQgJAAgIADIAQAGIABAAIAAABIAAABIgBAAQgHADgHAFIAdgJQAJgCAGAAIAAABIABABIgBABQgUAMgQAIQAJAAAJACIAAAAIABABIgBABIAAAAIgMAIQAJABAGgHIABAAIAAAAIABABIAAAAQgCALAAAIIALgOIABgBIABAAIAAABIABAAIADAQIAAgeQAAgOAGgEIAAAAIAAAAIABABQAKAWAHAYQACgKADgHIABgBIAAAAIABAAIABABIAFAMQACgIgFgHIAAgBIAAgBIABAAIAAAAQAKADAIACIgMgOIAAAAIAAgBIABgBIAQgBIgegFQgNgCgDgFIgBAAIgBAAIgBgBIAAgBIAAgBIABAAQAXgBAaAEQgHgEgHgHIAAgBIAAAAIAAgBIABAAIAOAAQgHgFgJACIgBAAIAAgBIAAgBIAAAAQAHgIAFgHIgSAGIgBAAIAAgBIAAgBQAEgHACgIIABgEIAAgDIAAAAIABgBIABAAIAAABIABABQgCAKgFAKIASgGIABAAIABABIgBABQgDAHgIAIQAJAAAIAGIAAABIAAABIgBAAIgOABQAHAGAJAEIAAAAIAAABIABAAIAAABIAAABIgBAAQgcgEgXAAQAEAEALACIAkAGIABAAIAAABIAAABIgBAAQgIADgMAAIAMANIAAABIAAABIgBAAQgIAAgKgDQAEAIgDAJIgBABIgBAAIgBgBIgGgMQgDAIgBALIAAABIAAAAIgBABIgBAAIAAgBQgIgagKgZQgDAFAAAKIgBAlIAAABIgBAAIAAAAIgBAAgAABACIgBAAIAAAAIAAgBIAAAAIAAgBIABAAIgBAAIABgBIACgCIAAgCIABAAIACAAIgBABIgBABIABAAIAAAAIAAACIgDACIAAAAIAAAAIAAABIgBAAIAAAAg");
	this.shape_38.setTransform(-126.4,-82.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00B6EA").s().p("AgIAlIgBgBIAAAAIgBAAIgBAAIgLAOQAAgIACgKIAAgBIgBAAIgBgBIAAABQgHAGgIgBIAMgHIAAgBIAAgBIAAAAIgBAAQgIgDgJABQAQgJAUgMIAAgBIAAgBIAAAAQgGgCgJADIgdAKQAGgFAIgDIABAAIAAgBIAAgBIgBgBIgQgFQAIgDAJgBIABAAIAAgBIAAAAIAAgBQgIgFgCgHIALAIIABABIABgBIAAgBQgBgJgCgIQAPAQAQAOIABAAIABAAIABgBQABgHgGgKIAAAAIgOgbQAGAGAEAGIABABIABAAIABgBIADgSQAEAJACAIIAAABIABAAIABAAIAAgBQADgHAIgEIgHAMIAAAAIABABIAAAAQAJgCAJgEIACgCQgOATgKATIgBAAIAAABIgCACIgBAAIAAAAIAAABIAAABIgBABIAAABIABAAIABAAIABAAIAAgBIAAgBIAAAAIADgCIAAgBIAAAAIgBAAIABgBQAHgBAGgLIASgcIAAADQgCAIgEAIIgBAAIABABIABABIASgGQgFAHgHAHIgBABIABABIAAABIABAAQAIgCAHAFIgNgBIgBABIAAAAIgBABIABAAQAGAGAIAFQgbgDgWAAIgBABIAAABIAAABIABAAIABABIABAAQADAFANACIAeAFIgQABIgBAAIAAABIAAABIAMANQgIgBgKgEIgBAAIAAABIgBABIABABQAFAHgCAIIgFgMIgBgBIgBAAIAAAAIgBAAQgDAIgCAKQgHgYgLgXIAAAAIgBAAIAAAAQgFAEAAAOIgBAeIgCgQg");
	this.shape_39.setTransform(-126.5,-83.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2472B6").s().p("AgOBwIAAAAIgBgBQAKgxAAg1QgKADgKAUIAAAAIgeA/IgBAAIgBAAIAAAAIgBgBIAAAAQABgUAHgUIghAQIgBAAIgBgBIAAAAIAAgBQAHgSAMgOQgSAEgRgMIAAAAIAAgBIABgBIAdgEQgSgOgSgGIgBgBIAAgBIAAAAIABAAIABAAQArABArgFQgIgFgPgBIhEgKIgBAAIAAgBIAAgBIABAAQATgGAVABIgZgbIAAgBIAAgBIABAAIAAAAQATABASAHQgKgSAGgSIABAAIABAAIABAAQAGALAHAPQAGgTABgVIAAAAIABgBIAAAAIABAAIABABQANAsAUApQAEgJgBgTIgDhFIABgBIAAAAIABAAIABAAIAAABQAIASADAUIAWgeIABAAIAAAAIABAAIAAABQACASgCAUQAPgOASADIABABIAAAAIAAABQgLAKgMAIQAUADAVgDIABAAIABABIAAABIgBAAIAAABIAAAAQgmATgnAcQAMAEATgMIA7gkIABgBIABABIAAAAIAAABIAAAAQgMASgQAMIAlAFIAAAAIABABIAAAAIgBABQgPAKgSAGQASAGAHATIAAABIgBABIgBAAIgbgMQAIATAMARIgBAAIAAABIgBAAIgCgDIgCgCQgKgQgHgTIAAAAIAAgBIABAAIABAAIAaAMQgHgRgSgEIgBgBIAAgBIAAAAIABgBQASgFAPgKIgkgFIgBgBIAAgBIAAgBQAPgKALgPIg1AhQgUALgNgCIgBABIgBAAQgDAAgEADIAAAAIAAABIgBABIgBAAIAAAAIgBgBIgBgBIABAAIAAgBIABAAIAAgBIAAABIAAgBIAAAAIAAAAIABgBIAAAAQAogdAogVQgUABgTgDIgBAAIAAgBIAAgBIAAAAQANgIALgKQgRgBgOAOIgBAAIAAAAIgBAAIAAgBQADgUgCgSIgVAeIgBAAIgBAAIgBgBQgCgSgHgRIADA/QABAXgGAIIgBABIgBgBIAAAAQgTgngOgqQgBATgHASIgBABIAAAAIgBAAIgBgBQgGgPgGgLQgFARALAQIAAABIAAABIgBAAIAAAAQgSgHgTgCIAZAbIAAABIAAABIgBAAQgTgBgRAEIA+AJQASACAIAHIAAABIAAABIgBAAQgpAFgpgBQAQAHAQANIAAAAIAAABIgBABQgQACgNACQAQAKASgGIABAAIAAABIAAAAIAAABQgMAOgHASIAhgPIAAAAIABAAIAAABIAAAAQgGASgCARIAbg4IABAAQALgXAMgCIABAAIAAAAIAAABQAAAzgIAvQALgRANgNIAAgBIABABIABAAIAAABQgBANAAAQQAMgOgCgSIAAgBIABgBIAAAAIABABQAMANAQALIgKgjIABgBIAAgBIABAAQAQAJASAFIg0gkQgUgOgBgMIgCgCIAAAAIgBAAIAAgBIAAgBIABAAIABAAIAAAAIABAAIgBAAIADACIAAAAIAAABIABABQACAMASAMIA4AoIABAAIAAABIgBABIgBAAQgUgFgRgJIAKAkIAAAAIgBABIAAAAIgBAAQgRgLgMgNQABATgOAOIgBAAIgBAAIAAgBQgBgQABgNQgNAPgLARIAAABIgBAAIAAAAIgBAAgAACACIAFgCIACgCIgBAAIAAAAIgCAAIgFACIABABIAAAAIABAAIAAAAIAAAAIAAAAg");
	this.shape_40.setTransform(-126.6,-83.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0092D0").s().p("AANBMIAAgBIAAAAIgBgBIAAABQgOANgKARQAIgvAAgzIAAgBIgBAAIAAAAQgMACgMAXIAAAAIgbA5QABgSAHgRIAAgBIgBgBIAAAAIgBAAIghAPQAIgRAMgPIAAAAIAAgBIgBgBIgBAAQgRAGgQgKQAMgCARgCIABgBIAAgBIAAAAQgQgNgRgHQAqABApgFIABAAIAAgBIgBgBQgHgHgSgCIg/gIQASgEATAAIABAAIAAgBIAAgBIgZgaQASABASAHIABAAIABAAIAAgBIAAgBQgLgQAFgRQAGALAGAQIAAAAIABAAIABAAIAAAAQAHgSACgUQANAqATAnIABABIABAAIAAgBQAHgIgBgXIgDg/QAHARACASIAAABIACAAIAAAAIAWgdQABARgCAUIAAABIAAAAIABAAIABAAQANgOASACQgMAJgMAIIAAABIAAAAIAAABIAAAAQAUADAUgBQgoAVgoAdIAAABIAAAAIAAAAIAAABIgBAAIAAAAIAAAAIgBAAIgBABIAAAAIAAABIABABIABAAIABAAIAAgBIABgBIAAAAQAEgDACAAIABAAIACgBQAMADAUgMIA2ghQgMAPgOALIgBAAIABABIAAABIAlAFQgQAKgSAFIAAABIAAABIAAAAIABABQARAEAIARIgbgMIgBAAIAAAAIgBABIAAABQAHASALAQIACADQgmgagsgUIAAgBIgBAAIgCgBIAAAAIAAgBIgBAAIAAAAIgBAAIAAABIAAABIAAABIABAAIABABQACANAUANIAzAkQgSgFgPgIIgBgBIgBABIAAABIAKAjQgRgLgLgNIgBgBIgBAAIAAABIAAABQACATgMANQgBgQABgNgABdA6IAAgBIAAABgAABACIABAAIAAgBIgBABIAAgBIAEgBIgEACgAAAABIAFgCIgFACg");
	this.shape_41.setTransform(-126.4,-83.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#056535").s().p("AhSA6QgDgDARgaQATgcAhgaQAXgSAMgFQATgKARACQAOABAJAIQAHAFgCACIgIgBQgKgDgKABQgNABgPAJQgMAGgTARQgYARgeAfQgUAUgDAAIgBAAg");
	this.shape_42.setTransform(-99.3,-127);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#056535").s().p("Ag4A3QgEgCANgVQANgWAVgXIAWgWQAKgKANgGQALgEAIABQAGABAAACQAAABgGADIgNAIQgHAEgLAMIgUAWIglApQgPAPgDAAIgBAAg");
	this.shape_43.setTransform(-154,-80.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#056535").s().p("AAfAfQgSgHgTgOQgUgMgNgPQgNgOADgDQAEgEAwAjQAxAhgCAEQAAABAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgFAAgLgFg");
	this.shape_44.setTransform(-159.7,-95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#056535").s().p("AA4AmQgdgngQgPQgbgZgfgHQgIgCgNgBQgIgBgBgCQAAgCAIgCQAKgDANAAQARABASAIQATAIAQAPQAaAZARAkQANAbgDADIAAAAQgEAAgRgYg");
	this.shape_45.setTransform(-131.7,-79.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#056535").s().p("AgOBsQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIABAAIAAABIABgBIADgBIAAgBQAJgMAEgJQATgigHgrQgGgggWgsQgQgfACgCQAFgCAUAcQAcAoAHAoQAEAZgGAZQgGAWgLAPQgJAMgKAHIgBABIgCABg");
	this.shape_46.setTransform(-125.2,-109.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#056535").s().p("AjKCdQgogDgngMQgdgKACgCIAdAFQAmAIAnABQA4ACA7gNQBEgPBBgiQA6gdA/guQA8grAcgfQAdggAOghIAHgUQACgHABAAQABAAAAAIQgBAKgEAMQgJAigeAkQgeAkg6ArQg+Awg9AeQhGAkhDANQgsAJgsAAIgfgBg");
	this.shape_47.setTransform(-134.2,-106.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#056535").s().p("Ah8E+Qg7gLgsgcIgOgKIgKgIQgIgGABgBIAJAEIAaAPQAwAZA1AHQBTALBHgcQArgQAlgfQATgQAQgSQARgUANgUQAzhQALhlQAJhLgKhVIgJg9QgFghAAgOQgBgRABgNQABgKABAAQACAAADAoIAIAtQAIAmAEAYQANBZgIBKQgLBqg0BSQgRAagPARQgRATgVARQgoAggtAQQgyAUg4AAQgbAAgdgFg");
	this.shape_48.setTransform(-133.5,-117.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#056535").s().p("AiJE+QgogKgqgWQhAgigogoQgNgOgJgMIgHgLQACgBAgAhQAsAmA9AdQApAVAnAJQAuALAygIQAygIAxgcQAwgcAsgrQAlgkAog0QAkguAYguQAZguALgsQALglACgvQADgzgJhKQgGguABAAQACAAAKAtQANBGgBA4QgBAvgLApQgLAwgZAuQgXAugkAwQgoA1gnAmQgwAugwAbQg1Aeg1AIQgTACgTAAQghAAgfgIg");
	this.shape_49.setTransform(-139.4,-118.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#056535").ss(0.6,1,1).p("AgvBiQAVg5AmgtQAogvA0geQgjgSgqADQgpAEggAXQgfAYgQAnQgPAmAIAng");
	this.shape_50.setTransform(-93.2,-136.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#009544").s().p("AhkBHQgIgnAPgmQAQgnAfgYQAggXApgEQAqgDAjASQg0AegoAvQgmAtgVA5g");
	this.shape_51.setTransform(-93.2,-136.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#056535").ss(0.5,1,1).p("AApBWQgjAmgihZQgkhsgQgXQAygDApAdQAOAJAfA5QAfA6gHALg");
	this.shape_52.setTransform(-121.1,-117.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#009544").s().p("AgcAjQgkhsgQgXQAygDApAdQAOAJAfA5QAfA6gHALIgnAVQgLALgKAAQgXAAgZg+g");
	this.shape_53.setTransform(-121.1,-117.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#056535").ss(0.5,1,1).p("ABHghQhOAig3BDQgQgwARguQASgvAVAHg");
	this.shape_54.setTransform(-149.7,-74.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#009544").s().p("Ag9gaQASgvAVAHIBdAhQhOAig3BDQgQgwARgug");
	this.shape_55.setTransform(-149.7,-74.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#056535").ss(0.5,1,1).p("AAdhdQAQATAFAbQAFAZgFAaQgKAvgnArQAFgZgGgZQgHgagRgSQgIgJgEgEQgHgIgEgGQgIgQAHgUQAHgTARgHg");
	this.shape_56.setTransform(-138.9,-74.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#009544").s().p("AAAAsQgHgagRgSIgMgNQgHgIgEgGQgIgQAHgUQAHgTARgHIA1gEQAQATAFAbQAFAZgFAaQgKAvgnArQAFgZgGgZg");
	this.shape_57.setTransform(-138.9,-74.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#056535").ss(0.5,1,1).p("ACYAzQgPAJgdgHQhbgVg7giQhNgtgjhFQgEA9AFAiQAHA0AbAgQAYAcA3AJQBSAOAKADgACdAxQgCABgDAB");
	this.shape_58.setTransform(-147.3,-100);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#009544").s().p("AgmBkQg3gJgYgcQgbgggHg0QgFgiAEg9QAjBFBNAtQA7AiBbAVQAdAHAQgJIhlBCQgKgDhSgOg");
	this.shape_59.setTransform(-147.5,-100);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#056535").ss(0.5,1,1).p("AAoBOQgWgxgIgbQgLgrAFgkQgaAkgRA4g");
	this.shape_60.setTransform(-106.5,-148.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#009544").s().p("AgnAPQARg4AagkQgFAkALAqQAIAcAWAxg");
	this.shape_61.setTransform(-106.5,-148.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#056535").ss(0.5,1,1).p("AgXhuQAQgBAPAZQAnA9AQAhQAbA3ADAwIiPh1QgagVgIgQQgHgMgBgNQAAgPAHgJg");
	this.shape_62.setTransform(-123.7,-84.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#009544").s().p("AgygGQgagVgIgQQgHgMgBgNQAAgPAHgJIA+gSQAQgBAPAZQAnA9AQAhQAbA3ADAwg");
	this.shape_63.setTransform(-123.7,-84.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#056535").ss(0.4,1,1).p("AgShRQA4AeAVAgQAdAtgnA4QABghgZgWQgSgRgqgRQgmgQADgVQACgQARgJQAHgDAYgDg");
	this.shape_64.setTransform(-116.2,-96);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#009544").s().p("AAZAbQgSgRgqgRQgmgQADgVQACgQARgJQAHgDAYgDIACgGQA4AeAVAgQAdAtgnA4QABghgZgWg");
	this.shape_65.setTransform(-116.2,-96);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#056535").ss(0.4,1,1).p("AhwAAQA7g2AwgMQBDgRAzA9QgngMglAUQgcAPgmApQgjAkgZgJQgRgHgFgWQgBgIACgLQADgMACgGg");
	this.shape_66.setTransform(-90.1,-126.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#009544").s().p("AhZBFQgRgHgFgWQgBgIACgLIAFgSIgHgDQA7g2AwgMQBDgRAzA9QgngMglAUQgcAPgmApQgcAdgVAAQgGAAgFgCg");
	this.shape_67.setTransform(-90.1,-126.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#056535").ss(0.5,1,1).p("ABuAjQgqgzg5glQg4glhAgRIB8CwQAeAtAegHQAUgEAIgYQADgIgBgMQgBgOgBgHg");
	this.shape_68.setTransform(-115.7,-132.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#009544").s().p("AAPBFIh8iwQBAARA4AlQA5AlAqAzIgHADIADAVQAAAMgDAIQgIAYgVAEIgHABQgZAAgbgng");
	this.shape_69.setTransform(-115.7,-132.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AjABMQgEgFAKgOQALgPAWgSQA3gsBPgdQBOgcBHgBQAdgBASAFQARAEABAHQAAAGgPAIQgNAHgdAKQhTAbg0ASIiEAzQgdALgOADIgLABQgHAAgCgDg");
	this.shape_70.setTransform(-61.8,-41.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#1D1D1C").ss(0.7).p("AguAHQgCgQAMgPQAMgPARgCQAQgCAPAMQAPAMACARQgCgNgOgGQgNgHgMAGQgHAEgIALQgNAQgBABQgIAJgFgFQgDgBgBgGg");
	this.shape_71.setTransform(-26,-46.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1D1D1C").s().p("AgnAbQgDgBgBgFQgCgSAMgOQAMgPARgCQAQgCAPAMQAPAMACAQQgCgMgOgGQgNgHgMAGQgHAEgIAKIgOATQgFAFgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_72.setTransform(-26.3,-47.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#1D1D1C").ss(0.7).p("AgRA0QAsgOAGgeQAFgXgTgTQgRgPgZgCQASAPABAXQABAXgRAQQgJAIgCADQgDAEABAEQAAAFADACQAEADAJgDg");
	this.shape_73.setTransform(-78.4,-15.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1D1D1C").s().p("AgeAzQgDgCAAgEQgBgFADgDQACgEAJgIQARgQgBgWQgBgXgSgQQAZADARAPQATATgFAWQgGAegsAOIgHACQgEAAgCgCg");
	this.shape_74.setTransform(-78.4,-15.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F8B143").s().p("ABjAxIgQgVQgcgigogTQgmgSgtABIgbABQgKABgBgBQAAgCAKgEQALgFAQgCQAvgHAsAVQAvAWAXAnQAJAOAEAMQADAJgCABIAAAAQgCAAgFgIg");
	this.shape_75.setTransform(-80,-130.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F8B143").s().p("ABHALIhHgGIhHgCQgeAAAAgDQgBgDAegFQAjgFAmACQAnADAiAIQAdAIgBAEQAAABgHAAIgYgCg");
	this.shape_76.setTransform(-132.2,-131.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F8B143").s().p("AhVAmQAAgDAagIQAlgLAYgMQAZgKAhgUQAYgOABABQAEAEgWASQgXAVgjAPQggAPghAFIgUABQgJAAAAgCg");
	this.shape_77.setTransform(-124.6,-125.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F8B143").s().p("AA/AcQgjgVgagKQgZgMgngMQgbgJAAgCQABgEAdAEQAjAFAhAPQAjAQAaAUQAXAUgDADIgBAAQgEAAgWgNg");
	this.shape_78.setTransform(-123.7,-140.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F8B143").s().p("AgGADQgGgMAEgFQADgCAFADQAFADADAHQADAGgBAGQgBAGgDAAIgBABQgFAAgGgNg");
	this.shape_79.setTransform(-111.1,-147.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F8B143").s().p("AATAWIgVgSQgfgZACgEQACgDAMAEQANAFALALQANAKAIAMQAGALgDACIgBAAQgEAAgHgFg");
	this.shape_80.setTransform(-116.9,-144.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F8B143").s().p("AhOA1QgEgCASgYQAVgZAggUQAfgUAfgIQAcgIABAEQAAACgZAMQgjASgWAPQgXAOgeAZQgUARgDAAIAAAAg");
	this.shape_81.setTransform(-81.9,-147.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F8B143").s().p("AAAApQgDAAgBgMIgCgcIgCgbQgCgNADgBQAEgCAFAMQAGANACARQABAQgEAOQgEALgDAAIAAAAg");
	this.shape_82.setTransform(-100.9,-126.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F8B143").s().p("AAEAxQgCgBgCgOIgDgiIgIggQgDgOACgCQAEgCAIANQAIAPAEAUQADATgDARQgDAPgEAAIgBAAg");
	this.shape_83.setTransform(-94.1,-126.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F8B143").s().p("AB7BKQgOgEgSgLQgTgNgVgUIgtgqQgogmg3gJQgPgCgSgBQgNgBAAgBQgBgCANgDQAPgDAUABQAaACAaAKQAcALAZAXQALAKAiAiQAQASAUAQQAMAKAPAJQALAGAAABIgBABIgMgCg");
	this.shape_84.setTransform(-78.4,-119.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1D1D1C").s().p("Ah5A9QgBg7AVgsQAIgQAIgKIAHgIIgFAJQgHANgFAOQgPAnAAAuQAjgxA4gaQAegOAegFIAhgFIgdAQQgJAFgIAJIgFAJIgDAJQAAAAAAAAQABABAAAAQAAAAABAAQAAABABAAQADAAAGgBIAUgGQAigLAegRIAGgDIgBAHQgCANgKAJQgFAGgKADQgHACgFgBQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAAAIAEgBIAKgDQAIgDAGgGQAFgGACgGQgcARgeAKIgVAGQgHACgFgBQgFgBgDgCQgEgDAAgFQAAgEADgJIAHgMIABgCQgSAFgRAJQg7AbgmA4IgJANg");
	this.shape_85.setTransform(-127.9,-117.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1D1D1C").s().p("AA4BMQgSgHgSgGQgygPhSgFIgOAAIALgJQAkgaApgMQAjgLAjgBQgPgDgRAAQgYgBgqAGIgRADIAMgMQAggcAqgPQAfgLAjgCQAXgCAUAEQAOADAAABIgPgBQgUgBgWACQgfADggAMQgfANgYASQAegEATAAQAqAAAeARIAXANIgqgDQgugDgrAMQghALgcASQBKAHAtARQAPAFAVAKIALAIIAAAAIgNgFg");
	this.shape_86.setTransform(-143.5,-131.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1D1D1C").s().p("AgoBGQgMgIgMgHQgygag0ABIgaAAIAZgJIABAAQA0gSA3AAQA5ABAzAVIgwhYIAMADQAZAFAgAXQANAJAgAaIAEAEIAAgEIgDgYQgCgXgFgXIgBgIIAHAEQAmAVAZAiQAIANADAFQAEAIgBAAIgSgXQgZgegegRQAEARACAVQADAMAAAMIABALIgBACIgBACIAAABIgBABIgEABIgDgBIgFgEIgFgEQgagWgTgMQgXgQgRgGIA0BdIgQgHQg6gag9gBQgqgBgoAKQArAGAkAWQANAIALAJQAHAGAAACIAAAAIgJgGg");
	this.shape_87.setTransform(-127.6,-146.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1D1D1C").s().p("AAyA5QgIgdgIgXQgKgYgJgVIgPBJIgFgUQgLgjgZgcQADAigLAYQgMAdgcANQgRAIgTgEIgMgEQAAgCANADQAQACARgJQAYgLALgcQAMgbgIgpIgDgOIAKAKQAcAZAPAjIAMhFIAHAQQARAhALAdIAKAeQAIgogGgpIgBgOIAKAIQArAkATAyQAFglgDgiIgDgZIgBgIQACAAAHAgQAGAqgHAwIgDASIgFgRQgRgzgoglQAEAvgMAwIgGAVg");
	this.shape_88.setTransform(-106.2,-122.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1D1D1C").s().p("ABHBAQgVgMgYgXIgkgiQgkgeglgNQgegKgaACQgVADAAgBIAFgDQAGgCAJgCQAcgEAgAKQAmALAmAfIAlAiQAYAWATALQAbAOAWgBQgbgOgWgaQgUgXgQgdQgMgWgGgQIgFgOQABgBAIAOIAUAkQAWAgAPARQAcAfAjAMIAQAGIgQAFQgMADgMAAQgYAAgbgOg");
	this.shape_89.setTransform(-76.5,-118.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1D1D1C").s().p("AAlBgIgGgDIgNgJQgagSgggbQgWgSgPgQQgMgMABgBIAOAKQAVASARANQAgAZAbASIAOAIIAEACQAIAEAMAAQAKAAAMgDIAFgBIgSgFQgbgKgWgSQgSgOgPgZIgYgmQgNgWgJgLQgTgYgYgLIgOgFIgGgCIAGgBQAHABAJADQAXAHAYAbQALALANAWIAYAlQAPAWARAOQAUARAZAJQARAGARABIAPACIgMAIQgIAHgQAEQgNADgMAAQgPgBgJgEg");
	this.shape_90.setTransform(-65.8,-125.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1D1D1C").s().p("AB4BZQhPg3g8gdQgUgIgYgIIgQgFQAAgCARADQAVAEAZALQA1AVBBApIgRgWQgogzgggfQgSgRgTgMIgKgFIgcgLQgjgNgYACQgIABgIACIgGABIAFgDQAHgEAJgBQAZgFAlAMIApAQQAVANASAQQAhAfApA0QATAZAPAXIAQAYg");
	this.shape_91.setTransform(-69.9,-134.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1D1D1C").s().p("AgbA1QgCAAAGgMQAIgQAPgOQAOgLAGgDQAKgHARgGIAggLIASgHQgPgDgKgBQhKgLhHAfQgUAIgUALIgPAJQgBgBAOgKQAUgQATgJQAegOAkgHQAqgIAqAFQAQACAZAIIAOAEIgNAGQgOAHgUAGIgfAKQgPAFgMAFQgKAGgKAIQgNALgKAPQgHAKgBAAIAAAAg");
	this.shape_92.setTransform(-81.3,-149);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1D1D1C").s().p("AiIBBQgCAAAMgQQATgZARgPQAdgbAlgTQAsgYAygDQAggCAjAIIgBALIgBAAQgjgCgeAVQgYARgPAWQgKAQgGASIgEANQgCAAACgOQADgSALgTQAOgYAagSQAPgMARgFQgOgBgNABQgvADgrAVQggARggAaQgUAQgSAUIgOAOIAAAAg");
	this.shape_93.setTransform(-95.3,-153.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#1D1D1C").ss(0.7).p("AnxBNQAHgKAUgJQA5gYBPgFQgkgNgYgCQgbgCgjALQAcgaAmgQQAlgPAogBQAMgBAZAAIAGAAIgCgDQgRgVgkgLQgLgDgTgFQgXgFgIgCQASgKAqgCQAmgBAYABQAhACAaAJQAPAEAaAPIgMgbQgQgjgbggQA3AIAoAmIAQARQgGghgCgvQAyAiAVAgQACgCABgDQABgDACgDQA8hBAsgZQAggSAigGQAkgHAgAJQgnAYgPAOQgaAXgKAYIgEAaIAtgWQAUgMASgGQBJgaBQAaQgJAEgPADQgUADgEABQgTAGgdAZQgeAZgIARQAOgBAUgEQARgCAQAFQAJADASAJQALAGAQAIQAmATAUATQARARAVAkQAYAqAMAPIgjgXQgmgZgVgLQgigSgfgFIgEgBQAKAGAHAGQAVARAcAvQAdAuAUARQAYAUA3ATQgbANgdgHQgOgDgPgKQgHgEgRgPIgqgkQgJgGgQgOQgOgNgBAAQgBAAAAgCQABgCgBABQgBABABADQAbBPBbBHQgaACgZgLQgTgJgZgUQgKgIgfgdQgYgWgTgLQgZgPgjgIQgkgHgTAHQgCgSgHgRQAHA9gIAuQgGgmgpgoIgPgOIgOBVQgOg1gag6QgHApgKAgQgOgkgbgdIAAAKQgCASgFAWQgEAQgDAHQgLAWgTAKQgWAMgYgKQANAAAKgLQAKgKAAgNQgIAKgYAIQguAQgVADQgBgQAKgOQAJgOAPgFQgUAEgUAIQgMAFgZANQgZANgRARQgOAQgHAHQgMANgMAHQgCgOAEgYQAHgoATgnQglgQgygLQgdgHg9gJg");
	this.shape_94.setTransform(-104.7,-135.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1911F").s().p("AFyDpQgTgJgZgUIgqglQgYgWgSgLQgZgPgjgIQgkgHgTAHQgCgSgHgRQAGA9gIAuQgFgmgpgoIgPgOIgPBVQgNg1gbg6QgHApgJAgQgOgkgbgdIgBAKQgBASgFAWQgFAQgDAHQgKAWgUAKQgWAMgYgKQAOAAAKgLQAJgKABgNQgIAKgYAIQgvAQgUADQgBgQAKgOQAJgOAPgFQgVAEgTAIQgMAFgZANQgZANgRARIgVAXQgMANgNAHQgBgOADgYQAIgoATgnQglgQgygLQgegHg8gJQAHgKAUgJQA5gYBPgFQglgNgXgCQgbgCgkALQAdgaAlgQQAlgPAogBIAmgBIAGAAIgCgDQgRgVgkgLIgfgIIgegHQASgKAqgCQAmgBAXABQAiACAaAJQAPAEAaAPIgNgbQgPgjgbggQA3AIAoAmIAQARQgHghgBgvQAyAiAVAgIADgFIADgGQA7hBAtgZQAggSAhgGQAlgHAgAJQgnAYgQAOQgZAXgKAYIgEAaIAtgWQATgMATgGQBIgaBRAaQgJAEgPADIgZAEQgTAGgdAZQgdAZgIARIAigFQARgCAQAFQAJADASAJIAbAOQAmATAUATQARARAVAkQAXAqAMAPIgigXQgmgZgVgLQgjgSgegFIgEgBIARAMQAVARAcAvQAdAuAUARQAYAUA2ATQgbANgdgHQgNgDgPgKQgHgEgSgPIgpgkQgJgGgQgOIgQgNQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgBQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAbBPBbBHIgJAAQgVAAgVgJg");
	this.shape_95.setTransform(-105,-135.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1D1D1C").s().p("AgFARQgVgFgOgPQgFgGgBgEQgCgFABAAIANAJQANAJATAFQASAEAQgDIALgDQABAAABAAQABAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQgBABgBAAQgEAEgGADQgLAFgNAAQgIAAgIgCg");
	this.shape_96.setTransform(-157.6,-139.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1D1D1C").s().p("Ag2BHQgKgEACgBIAJAAQAMACALgBQAQgDAOgIQAQgKANgTQAKgOAIgWQAGgVACgNQABgLgCgMIgBgIQACgBAEAIQAEAKAAAPQAAAPgFAVQgHAXgMARQgOAVgTAKQgRAJgSABIgDAAQgMAAgKgEg");
	this.shape_97.setTransform(-155.2,-115.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1D1D1C").s().p("ABuC1QglgDgcgKQgXgIgSgOQgXgSgLgYQgNgZAGgjQADgUARgmQARgmAEgTQAHgfgGgXQgGgZgWgMQgSgJgYgBQgTgBgRAFQgPAEgIAJQgEAEgBAEQgBADACADQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAIABAAIAAABQgCADgDgEQgDgDAAgFIAGgKQAIgLAQgGQAQgGAWAAQAcABASAJQANAHAIAKQAJAKAEAQQAJAagJAiQgDAQgSArQgQAjgEAVQgFAeALAXQAKAVAUARQARAOAVAIQAZAKAmAGQAXAFAAABIgEAAIgUgBg");
	this.shape_98.setTransform(-151.4,-138.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1D1D1C").s().p("AglBhIAHgHQAJgHAHgJQAKgLAGgRQAGgMAHgbQAPg0gBgUQgBgLgDgLIgDgJQACgBAFAIQAGAKACANQACAOgDAWQgCAQgHAYQgHAagIAPQgJASgLALQgKAKgKAEIgIADIgBAAg");
	this.shape_99.setTransform(-140.6,-110.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1D1D1C").s().p("ABuD7QglAAgngOQgTgGgegRQgagQgXgWQgXgWgUggQgWgmgFgfQgIglANglQAKgeAVgfQAIgMAeglQAWgaAGgRQAEgKABgMQABgIgDgLQgGgRgLgIQgIgHgKgBIgIgBIAIgBQAJgBALAHQAPAJAGASQAEALAAALQgBANgEALQgHAUgVAaQgbAjgJAOQgVAfgJAcQgLAhAGAjQAGAfAUAiQATAeAWAWQAVAVAaAQQAbARATAHQAkAPAlADQAJABAMAAIAIABIgIACIgOAAIgHAAg");
	this.shape_100.setTransform(-157.3,-127.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1D1D1C").s().p("Ag8AlQgKgCgDgBQgGgDgCgFQgBgFACgDQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAAACQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQACAEAPABQAjADAggMQAggLAZgYQAIgIAFgJIADgHQADAAgCAJQgBAJgJALQgWAcgmANQgYAJgXAAQgNAAgMgDg");
	this.shape_101.setTransform(-162.6,-124.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FCE938").s().p("AAACeIgcgUQgLgIgFgGQgJgIgDgNQgEgOAAggQABgXAFgaQAEgYAJgWQAEgNAOgdQAKgVAEgPQAEgUgDgMQgGgbgUgKQgGgDgGgBIgFgBQAAAAAAAAQAAAAABgBQAAAAABAAQABAAABgBQAHgBAIACQALADAJAKQALALAEAQQAIAdgUAxQgMAagFAOQgHAVgFAXQgFAZAAAVQgBAeADAMQADAOASAOIAbAVQA4AqgDADIAAAAQgFAAg3gjg");
	this.shape_102.setTransform(-152.1,-134.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FBC244").s().p("ABYESQgSgCgXgIIgogPQhkglgthOQgZgqgBgwQgCgyAZgnQAIgNAQgRIAZgcQAfglACgfQACgTgKgRQgKgTgSgFQgHgCgDgCQgFgFAFgIQAEgGAIgFQAcgPAdAAQAhgBATAUQATATABAfQACAcgLAeQgGASgPAjQgLAgAAAXQAAAjAVAcQAWAdAgAKQAhAKA2AJQAMAggGApQgEAdgQAvQgDALgOANQgNANgLAFIgHADIgHgCg");
	this.shape_103.setTransform(-153.8,-128.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F8B143").s().p("ABQAhIgTgGIhBgOIgkgJQgSgEgMgJQgJgGgFgKQgEgHACgBQABgBAGAFIAQALQAJAFASADIAkAIQAuAJATAJQALAGAHAGQAGAFgBABIgBAAIgHgBg");
	this.shape_104.setTransform(-181.7,-86.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F8B143").s().p("AjTA7IgOgCIgFgCIATgCQAZgDAYgLQAXgIAugaQAzgbAjgPQA1gWApABQAWAAAVAGIAjAOQAfAPARAEIASAFQAAADgUgCQgRgCgigMIgigLQgUgGgTABQgoABgwAUQgbAMg6AcQgrAYgdAJQgZAIgXAAIgFAAg");
	this.shape_105.setTransform(-167.3,-95.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1D1D1C").s().p("AACB1QhIgIhIgqQhDgngggmQgegmgDgoQgBgNACgKQABgJABABIABAIQAAAMACAKQAGAnAeAhQAfAhBCAmQBHAnBEAIQApAEAjgFQAlgGAfgPQA7gcAegxQATgdALguIAHgeQADACgEAdQgGAvgUAhQgeA2g/AfQghAQgmAHQgTAEgYAAQgSAAgUgDg");
	this.shape_106.setTransform(-166.5,-77.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1D1D1C").s().p("AhKCDQhAgEgrghIgOgLIAmgHQgngLgkgWQgggUgZgYIgTgTIAbAFQAdAGAhgIQAdgHAegQQASgJAjgWQAigVARgJQAbgPAbgHQAcgIAaABQAlACA4AXQAzAVAWAGQAMAEASADQASACAJADQAMADAIAHQAHAIABAHQADAIgEAFQABgFgDgHQgGgRgUgDQgIgCgTgBQgOgCgSgEQgWgGg0gTQg4gVgigCQgYAAgaAHQgVAHgdAPQgRAJghAVQgjAXgTAKQgjASgbAGQgWAFgWgBQAQAOATAMQA1AgA7AIIA1AGIhgARQAjAUAvAEQAsADA1gLQBPgQBOglQAtgWAxghIAigVQABACgfAXQguAjgwAZQhNAnhRATQgtAJgmAAIgSAAg");
	this.shape_107.setTransform(-167.3,-90.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F1911F").s().p("Ai2BeQAcgOAiABQgzgEgugYQgvgXghgmQAtAXA7gaIAogUQARgKATgQQAVgSAbgPQAdgQAZgHQA3gQBZAdIBFAXQAjAKAjAGIAaAQQAKAQgMAUQgHAJgVAOQhOAyhZAbQhZAbhbACIgFAAQhBAAgdgag");
	this.shape_108.setTransform(-166.7,-90.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F8D2E4").s().p("AAYBtQgfAAgqgNQhSgZgngUQg6ggghg0QgLgSgCgRQgCgUAMgLQAVgSArAZQAtAaAXAHQAjALArgDQAjgDArgMQAagHAzgWQAtgRAgAGIBhgDQgTBpg8BBQgdAfgxALQgeAHgxAAIgPgBg");
	this.shape_109.setTransform(-166,-77.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1D1D1C").s().p("AgrAkQgGgCAEgUQADgMAGgJQAJgPANgIQAQgIARAEQAPAEAIALQAGAIgBAKQgBADgDACQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgBgCIgCgBIgIgIQgFgDgJgBQgKgBgHAFQgNAHgOAVQgJAQgEAAIgBAAg");
	this.shape_110.setTransform(-130.2,-30.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1D1D1C").s().p("AAHBtIgPguQgLgggGgbQgLg5ARg2QAGgTAHgMQAGgLACABQACABgCAMIgFAgQgHA5AJAuQABAMAMAsIAMAwQAJAsgEABIAAAAQgFAAgRgog");
	this.shape_111.setTransform(-128.7,-17.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1D1D1C").s().p("AgEATQgYgEgLgRQgFgGgCgFQgBgEABgBQACgBAKALQAPAMARADQARADARgHIAKgDQAEgCABABQAAAAAAABQAAAAAAAAQAAAAgBABQAAABgBABQgDAEgHAEQgNAJgQAAIgKgBg");
	this.shape_112.setTransform(-115.1,-73.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1D1D1C").s().p("AgCAKQgRgGgNgIQgMgHABgCQABgCANAFIAdAKQARAGANACIANAAQABAAAAABQAAAAgBAAQAAABgBAAQAAABgBABQgFACgGABIgEAAQgNAAgPgFg");
	this.shape_113.setTransform(-113.6,-76.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1D1D1C").s().p("AAgAYQgUgCgSgJQgTgJgNgNQgLgMADgCQABgBANAIQASANAOAFQATAJAOAEIAKACIAEgBQACACgEADQgDADgGAAIgEAAg");
	this.shape_114.setTransform(-112.5,-79.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1D1D1C").s().p("AAZAcQgTgBgPgMQgRgMgIgPQgHgOADgBQABgBAKALQAMAPAMAHQAMAKARAFIAOAEQAAAEgKAAIgFAAg");
	this.shape_115.setTransform(-109,-82.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1D1D1C").s().p("AhjAzQgBgBAFgIQAIgPAGgHQAagkAogUQAVgKAZgDQAWgDASAEQARAEAHAIQAEADABADQAAABAAABQAAAAAAABQAAAAAAAAQAAAAgBAAIgHgGQgIgFgPgCQgpgEgmATQgjARgeAhIgQAUQgGAGgCAAIAAAAg");
	this.shape_116.setTransform(-101.7,-78);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1D1D1C").s().p("AhhA/QgBgPABgUQADgcAKgVQAQgiAdgNQARgIARACQAOABAPAHQAWAIAWAUQAOANAJAMQAIAKgBABIgKgIIgagWQgWgRgUgHQgPgGgLAAQgQgBgMAGQgZAMgPAdQgJAQgFAdIgEAiQgCAMgBAAQgCAAAAgMg");
	this.shape_117.setTransform(-101.7,-81);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F1911F").s().p("AhRgOQAJgXAQgPQASgQAVgDQAigFAtAiQAYASAIARIgNgGQgwgIghALQgaAJgZAYQgRAQgZAiQABg7ALgcg");
	this.shape_118.setTransform(-101.7,-80.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1D1D1C").s().p("AgSARQAAgCAHgEQAIgFAEgFQAFgEAFgJQADgHACAAQADAAAAAJQgBALgIAIQgJAKgKABIgDAAQgGAAAAgDg");
	this.shape_119.setTransform(-62.6,-87.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1D1D1C").s().p("AgSAXQgMgBAAgDQAAgCAMgDQASgEAHgEQALgGAFgLIACgHIABgEQABAAAAAAQAAAAABAAQAAABABAAQAAABAAABQACAEAAAGQAAAHgFAGQgFAJgJAEQgLAGgOAAIgFAAg");
	this.shape_120.setTransform(-59.3,-87.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1D1D1C").s().p("ABaAnQgDgOgHgNQgJgSgTgLQgVgOgagFQgagDgXALQgSAJgNASQgIAKgFAOIgEAKQgCAAABgLQACgOAJgOQAMgUAVgMQAagOAdAEQAbAEAaARQAUAPAJAUQAHAQAAAOQAAAMgCAAIgDgLg");
	this.shape_121.setTransform(-69.2,-89.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1D1D1C").s().p("AgXAdQgQgCABgDQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAIALgCQASgDALgJQAOgIAJgPQAHgNABAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAABQAAAFgCAGQgGARgSANQgPALgSAAIgDAAg");
	this.shape_122.setTransform(-55.3,-86.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#1D1D1C").s().p("AgKATQAAgBADgGQAFgHABgFQABgEAAgIQAAgGABgBQADgCAEAHQAFAIgDAKQgEALgHAEIgGACQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_123.setTransform(-65.5,-88.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#1D1D1C").s().p("ABQAQIglgJIgrgLQgXgGgWAAQgRAAgSAFIgNAFIgKAEQgFACgDgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIACAAQADABADgCIAJgFQAHgFAGgDQARgIAVAAQATgCAbAHIAtANIAkALQAhAMgBACIgCAAQgGAAgagGg");
	this.shape_124.setTransform(-67.5,-85.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F1911F").s().p("AAAATQg4gJgoAdQAGgXAOgTQAOgUAUgNQAYgOATACQAZABAXAUQAoAfABApIAHAFQhAgbghgEg");
	this.shape_125.setTransform(-68.9,-89.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgCASQgLgCgHgGQgHgHABgHQACgHAIgEQAJgEAKACQALACAHAHQAHAGgBAGQgCAIgIAEQgGADgHAAIgGgBg");
	this.shape_126.setTransform(-97.4,-66.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1D1D1C").s().p("AgaA+QgJgMgIgcQgJgeAAgTQAAgfAVgOQANgJARABQAPABANALQAKAJAFANQAPAYgGArQgDAZgIANQgLAVgUABIgDAAQgSAAgOgTg");
	this.shape_127.setTransform(-103.1,-69);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#1D1D1C").s().p("AgSB0QgSgIgLgOQgIgLgIgVIgKggQgJgkAAgaQAAggAPgYQAPgYAZgIQAWgGATAHQAPAFAMALQAIAJAEAIIACAGIgEgFIgBgCIAAABQASAaAJApQADALABALQACARAAAKQgBAJgEASQgEASgFALQgHAPgPAKIgOAIQgKAEgIABIgEAAQgNAAgQgIgAgYhwQgWAIgNAVQgMAVAAAeQAAAWAKAlIAJAfQAGARAJALQAKAMAOAHQAOAIANgBQAGAAAIgEIANgHQALgHAHgNQAKgYAEgcQABgIgCgRIgDgWQgIgngPgaIgMgTQgKgHgMgEQgIgCgIAAQgKAAgKADg");
	this.shape_128.setTransform(-100.6,-67.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3EAADF").s().p("AgHBzQgPgFgNgMQgOgMgJgcQgJgZgEgUQgIglADgZQAFgjAYgTQAZgVAfAIQAPADAMAKQAMAKAHAOIgQgRQARAVAKAgQAKAeACAfQABAagNAiQgKAcggALQgGACgGAAQgJAAgKgEg");
	this.shape_129.setTransform(-100.6,-67.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#1D1D1C").s().p("AhYBTQgLgRgGgaQgHgjAHggQAFgXANgPQAOgTAXgHQAWgGAXACQAUADASAKQAeAQAXAcQAQAVAFATIADANIgBAEIgGgPQgJgTgPgRQgVgagegOQgkgTgmAMQgUAGgMAPQgLANgFAUQgIAdAGAjQAEAWAIAUIAGAQIAAAAQgBAAgJgOg");
	this.shape_130.setTransform(-100.7,-78.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AhpgLQADglAUgUQASgUAegDQAdgEAZALQAdANAZAZQAcAeAFAgIi7BOQgfgxAGg4g");
	this.shape_131.setTransform(-100.5,-78.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1D1D1C").s().p("AALCVQgcgGgagYQgXgWgLgVQgKgRgJgbQgNgkgFgdQgEgZADAAIAGAYQAIAhANAeQAWA2AfAcQAYAWAYAEQAhAHAWgTQAWgSAJghQAHgYAAghQABg5gRgnQgOghgXgWQgTgPAAgBIAGACIAQALQAaAVAPAiQAUAoAAA7QABAhgIAcQgEAQgIAOQgJAPgNAMQgOALgSAEIgPABQgJAAgJgCg");
	this.shape_132.setTransform(-99.4,-69.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgCCNQgdgMgaghQgUgagRgvQgOgpgFglICWhcQAzAfASBBQAIAiAAApQgBAvgMAaQgOAegUAMQgPAJgTAAQgSAAgRgHg");
	this.shape_133.setTransform(-99.6,-70.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgBARQgKAAgIgGQgGgGAAgHQABgHAHgEQAJgEAJAAQAMABAGAGQAIAGgBAGQgBAHgIAFQgHAEgIAAIgDgBg");
	this.shape_134.setTransform(-67,-73.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#1D1D1C").s().p("AgCBLQgVgDgMggQgNgnAGgmQADgVAKgGQAOgKAKAAQAHAAAKADQAKADAGAEQAHAFAEAKQAFAJgCAIIADAPQACAWgFAYQgEAVgKAMQgLANgPAAIgEAAg");
	this.shape_135.setTransform(-71.4,-75.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1D1D1C").s().p("AgZB4QgRgGgKgRQgHgMgFgTQgHghgCgfQgCgkAGgXQAHgbAVgVQAMgLALgDQAOgDAIABQAKABALAFQAJAFAHAFQALAKAGAPIACAGIAHARQAKAhgFAiQgCAUgJAaQgKAggRAQQgMAMgPAEQgHADgIAAQgJAAgIgDgAgQhuQgJADgJAJQgTATgFAZQgGAWADAiQABAdAHAgQAFASAGAKQAIANAMAFQANAEAMgEQANgDAKgKQAQgPAKgcQAJgYADgUQAGgggIggIgBgGIgIgRQgGgOgKgIQgIgFgHgDQgKgFgIAAIgCAAQgHAAgLADg");
	this.shape_136.setTransform(-69.6,-74.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#3EAADF").s().p("AgeBwQgWgMgIgoQgIglAAgiQAAgkAIgUQAGgPALgNQAMgPANgEQATgGATAIQARAHAJALQAHAJAFAOIgCgIQAOAigBAiQAAAegNAlQgMAigUAPQgMAKgOACIgIABQgLAAgJgGg");
	this.shape_137.setTransform(-69.6,-74.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#1D1D1C").s().p("ABiBSQgBgdgEgSQgCgNgGgTQgHgRgJgPQgZgngmgOQgVgHgTAFQgTAGgOAPQgVAUgFApQgDAWgBAZIgBARQgBAAgCgRQgDgdACgTQABgQAFgSQAHgUAOgOQARgSAVgGQAWgHAZAJQAVAHATARQAPAOANAUQAKAPAGAUQAGASACAPQADAZgCAYQgCARgBAAIgCgRg");
	this.shape_138.setTransform(-68.1,-84.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhiA7QgFg+AMgjQAJgZAUgQQAogfAvAbQAqAYASAuQATAwgEA9g");
	this.shape_139.setTransform(-68.1,-84);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#1D1D1C").s().p("AgKCBQgbgHgYgbQgSgUgMgcQgJgZgDgYQgCgUABgYQABgWAEgoIADgXQABAAAAAXIgBA+QAAA1AQAkQALAZAQATQAWAYAYAHQAZAHAZgRQAVgOAOgZQALgUAFgZQADgWAAgTQgBgZgFglQgEgXACAAQABgBAGAXQAIAhABAeQABAYgDATQgDAXgMAaQgPAbgXAQQgVAOgWAAQgIAAgJgDg");
	this.shape_140.setTransform(-68.2,-73.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgwBoQgWgUgNgfQgNgdgDgeQgCgZACgkIADg9IC5AdQAIAlACAZQAEAggEAcQgDAbgNAYQgOAagUAOQgVAPgWAAQgaAAgcgZg");
	this.shape_141.setTransform(-68.2,-73.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#1D1D1C").s().p("AgPAhQgCgBAHgKQAKgNACgIQAFgLgDgLQgDgJABgCQAAAAAAAAQABAAAAAAQABAAAAAAQABABABAAQADACADAFQAIANgHAQQgFAOgMAJQgHAFgCAAIgCAAg");
	this.shape_142.setTransform(-55.8,-68.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#1D1D1C").s().p("AADAOQgFgDgEgHQgEgGABgGQAAgGADgBQADAAAHAOQAHANgBADIgCABIgFgCg");
	this.shape_143.setTransform(-112.1,-58.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1D1D1C").s().p("AAQAiQgQgHgNgQQgOgPgDgSQgBgGAAgFQAAgBAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQABAAAGAOQAIARAKALQAJAMAPALQAMAJAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgEAAgJgFg");
	this.shape_144.setTransform(-109.5,-60.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#1D1D1C").s().p("ACID3QgVgUgYgcQhGhSgvhnQgQgigchNQgUg5gQghQgPgdgTgaIgOgUIAFAEQAHAEAHAIQAUAVATAhQATAiAVA4QAeBQAPAdQAsBgBDBYIApA0QAPASgBABIAAABQgDAAgQgQg");
	this.shape_145.setTransform(-55.3,-87.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#1D1D1C").s().p("ABHKKIggg7QgWgpgRgnQgWg0gOgyQgTg/gLg5QgMhCgFhGQgGhhgEgxQgHg9AChVQABg8AGhNQAMiEAThiQAUhiAZgzQAMgYAMgMIAFgEIAEgCIAEgBIgHAFIgEAFQgLAMgJAXQgWAzgRBjQgSBngJB9QgGBIgBBAQgCBUAHA8QAFAyAFBgQAFBFALBCQAKA3ASBAQAQA5ASAsQAZA9AoBQIASAnIAFANIAAAAQgBAAgbgxg");
	this.shape_146.setTransform(-136.8,-56.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#1D1D1C").s().p("Ah+BfQgfgDgWgIQgSgIAAgCQAAgBATAEQAbAFAZABQAwABAfgCQAzgCAqgLQAvgOAkgcQAggYARggQAOgagCgXIgCgOIgBgFQABgBADAFQADAFACAJQAGAZgNAeQgPAjgjAcQgmAggzAOQgrAMg1ABIgKAAQgiAAgkgDg");
	this.shape_147.setTransform(-56.4,30.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#1D1D1C").s().p("AkkFLQgGgMgFgRQgMguAMhBQAPhSAfhNQAohlA+hIQAdgjAwgmQAqgfAogVQBJglBSgUQA7gNAzgCQAPgBAPABQALAAAAABIgpAFQg2AGg1APQhRAVhGAmQgqAXgmAcQgxAogYAeQg7BGgqBjQgeBKgSBRQgOA9AJAvQACAOAFAPIADAKIAAAAIgGgJg");
	this.shape_148.setTransform(-96.5,-16);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#1D1D1C").s().p("Ah5B5Qg1gHgtgPQhZgeg3g9QgVgXgSgdIgYgrQgTglACgBQABgBAWAkIAaApQATAcAVAVQA2A4BWAcQArAOA0AHQA1AGA1gCQAygDA1gLQA3gMAngQQBMgbBHgyQAzgkAjgkQATgTAJgMQABAAgGAKQgGAMgMANQgiAogyAmQhIA1hMAdQgpAQg3ANQg1AMg2ADIgYAAQgoAAgsgFg");
	this.shape_149.setTransform(-82.6,26.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#1D1D1C").s().p("AgtGjIgCgEIADADQADACAIgBQAfgHAOgFQBSgbBEg6QBbhOA5iBQAlhWAEg6QACgngHgoQgJgqgPgjQgNgegdgpQgWgegggbIgfgYIghgTQgfgRglgMQhHgXg+AAQhBAAgzATQgrAPgrAgQgWAPgsAXIgrAUQgPAGgBgBIA4gfQAygdANgLQAqgiAugQQA4gWBAAAQA/gBBLAYQAsAPAbAOQAKAFAHAFIARAKIAgAYQAgAbAZAiQAdAnAPAiQARAnAIAqQAIAqgDApQgFBBgmBUQg7CEhgBOQhJA8hSAWQgWAGgZADIgDABQgGAAgDgEg");
	this.shape_150.setTransform(-36.8,-21.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#23010B").s().p("AAMA6QgSgEgfgMQgigNgRgMQgOgIgHgNQgFgJACgIQACgJAIgGQAIgFASgFQAKgEAPgDQAsgJArAFQAnAEASAPIAIAGQAEAFAEAHQAFAMgBANQgCATgNANQgPAPgXAGQgKACgMAAQgMAAgOgCgAgxgqQgMADgLAEQgSAFgFAEQgIAHAEAKQAFAJANAHQAQALAgANQAfAMAQAEQAYAFAUgEQAUgEAOgNQAMgLACgQQACgKgEgMIgEgJIgKgHQgSgMglgCIgWgBQgeAAggAHg");
	this.shape_151.setTransform(-86.1,-15.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#AB4928").s().p("AAlA3QgZAAgrgQQgjgNgWgPQgLgHgFgIQgGgKAEgKQAFgJAPgEQA/gYBFAKQAfAEAQANIAHAGIADAEQAEAIABAKQACASgKAPQgKAOgSAHQgPAHgRAAIgDAAg");
	this.shape_152.setTransform(-86,-15.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#23010B").s().p("AgOBMQgFgDgCgFIgEgGQgLgRgJgYQgGgPgCgOQgDgVAHgRQAJgWAUgJQAKgFAMABQAMACAKAGQAUAOAHAWQAHAUgFAUQgDASgHARQgHATgHAKQgLANgNABIgEABQgIAAgHgGgAgQhCQgPAHgIASQgGAOACASQABAKAFASQAGAUAKAUIAEAJQACADAEABQAGAEAJgBQAKgCAIgLQAFgIAHgTQAGgRACgQQADgRgFgSQgGgSgQgLQgLgHgKAAQgGAAgHADg");
	this.shape_153.setTransform(-26.3,-43.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#AB4928").s().p("AgIBLIgHgEIABACIgCgCIgEgHQgMgUgHgUQgNghAFgZQADgPAKgMQALgMAOgDQARgDARANQARAMAFAUQAIAegSAtQgLAagOAIQgFACgGAAQgEAAgFgCg");
	this.shape_154.setTransform(-26.3,-43.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#1D1D1C").s().p("AA9AvIgSgGIgkgMQgOgGgbgCQgYgCgFgDQgHgEAAgPIABgPQgBgGABgGQACgNAJgDQAagHA2AfQAYANAMAVQAHANAHATQgDAEgFAAIgDgBg");
	this.shape_155.setTransform(-74.8,-108.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#1D1D1C").s().p("AhMBQQgJgYAKgzQAEgNATgXQAZgeAcgMQAcgLAWgBQALAAAFACQAMADACAiIABAVQgCAXgMAFQgEACgnAIQghAGgTAOQgOALgTAeQgHAMgEAAQgDAAgCgGg");
	this.shape_156.setTransform(-105.8,-102.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#1D1D1C").s().p("AgMAfQgngQgcgfQgKgLgFgJQgFgIABgBQACgBAXAYQAgAcAiAOQAmARAmAAQAPgBAHgFIAFgDIADgBIgBADIgEAFQgJAIgQACIgPABQggAAgigPg");
	this.shape_157.setTransform(-50.9,-124.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#1D1D1C").s().p("Ag5AIQgJgFgGgGQgFgFABgBQACgCAVAMQAbALAdgCQAhgCAXgOQAHgEAGgHIAFgFQABAAgCAHQgDAIgJAHQgYAUgkACIgKABQgdAAgWgPg");
	this.shape_158.setTransform(-52.8,-135.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#1D1D1C").s().p("AgTAWQgNgEgIgIQgHgGgEgFQgDgFABgBQACgBAQALQAUANAXgCQANgBALgHQAKgGADgGQACgGgBgHIAAgGQACgCADAGQAEAIgCAJQgDALgMAJQgNAIgQACIgGAAQgLAAgLgEg");
	this.shape_159.setTransform(-60.7,-143.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#1D1D1C").s().p("AhcCnIAFgEQAGgEAKgDQALgDAQAAIAjAAQAYgCAMgLQARgOgEgaQgCgYgSgWIgTgVIgTgWQgWgYgIgcQgGgcAEgcQAEghAQgPQAIgIANgEIAUgFQAngIAYAJQAOAFAFAIIgGgCIgPgHQgVgGgnAKIgSAFQgLAEgGAGQgNANgDAdQgEAcAHAYQAGAZAVAWIATAWIATAVQAUAYADAdQABAQgEALQgFANgKAJQgQAMgbABIgjgBQgOgBgMACQgIABgIADIgGACIAAAAg");
	this.shape_160.setTransform(-64.3,-143);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#1D1D1C").s().p("AAdBQQgHgFgIgJQgWgVgOgjQgOghABgfIACgVQACgHABAAIAEAbQAEAiALAbQALAcAUAbIAQAWIgBAAIgGgDg");
	this.shape_161.setTransform(-70.4,-118.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#1D1D1C").s().p("AhqDyQgNgBgKgDIgIgCIAfACQAvABAjgIQAcgHAYgMQAegOAVgYQAZgaAMgiQAOgmgHgkQgHglgZgeQgUgYgggYIg2gmQgfgVgJgWQgFgNACgOQACgNAIgJQAHgJALgCIAPgEQAEgEgBgGIgEgHIgFgHIAHAFQAEADACAFQADAJgIAFQgDADgNAEQgJACgFAHQgGAIgBALQgCAMAFALQAIATAeATIA2AlQAiAYAVAaQAbAhAIAnQAHAogPAoQgMAigbAeQgaAZgdAOQgcANgbAGQgZAFgZAAQgRAAgRgDg");
	this.shape_162.setTransform(-53.6,-133.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FCE938").s().p("AgQDNQgBgBARgMQAagTANgQQAageACgpQABgXgIgVQgIgVgSgUQgNgMgYgUQgcgWgKgKQgmgmgCglQgCgRAGgQQAEgNAIgJQAGgGAHgDQAEgDABABIgDAFIgKAKQgOAUAEAeQAFAhAjAgQAJAIAbAWQAaAUAOAPQAVAVAIAYQAIAWgBAdQgDAugfAgQgTAUgbANQgOAHgDAAIgBAAg");
	this.shape_163.setTransform(-51.9,-136.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FBC244").s().p("AhSD7QgJgDgKgKQgggfgRgrQgRgrACgsIBlgMIAMAAQAEgBAGgEQAGgGAEgKQAEgKAAgJQACgUgKgOQgEgGgVgYQgggkgTgjQgLgWAAgfQAAghAPgPQAGgFAJgMQAJgKAJgDIAigIQANgCAVADIAVANQAHAFgBAMQgBANgJACIgLAAQgKACgEAKQgEAJABAMQAFAjAhAdQAUARArAdQA9AsASA8QAJAfgMAqQgMAngYAaQgiAmg2ARQgjAKg9ACQgJACgGAAIgGAAg");
	this.shape_164.setTransform(-56.9,-134.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F8B143").s().p("AiBAqQgXgJgRgLQgNgJABgBQAAgBAPAGQAWAIATAFQBEAUBFgNQBFgNA4gsQAPgLASgRQALgKABAAQACABgJAOQgMAQgSAQQgXAVgfAQQgkAUgoAHQgaAGgaAAQgvAAgtgRg");
	this.shape_165.setTransform(-43.5,-108.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F8B143").s().p("ABKAiQgggFgqgRIhIgZQgegIgdgDIgqgDQgQgCAAgCQAAgBAQgCQASgCAYAAQAfAAAgAJQAWAGAyATQAvAQAZAFQAgAHAcgEQAUgCATgIIAPgGQACADgOAJQgRALgXAFQgPADgQAAQgQAAgRgDg");
	this.shape_166.setTransform(-43.9,-116.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#1D1D1C").s().p("ACJARIgggIQgpgIhAgDQhHgFgiAGQgPACgQAGIgLADQgCgCAKgHQANgIASgFQAmgLBHAEQA/ADAtAPQAPAEAPAJQAKAHAAABIgBABIgLgEg");
	this.shape_167.setTransform(-57.1,-119.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#1D1D1C").s().p("AgjB1QgfgHg0gXIg1gZQgTgJABgCQAAgCAVAHIA3AUQAxATAgAHQA2AMAugPQAagKASgQQAQgQAMgXQAOgcANg0QAUhNADAAQADAAgOBQQgKA0gPAfQgNAbgSARQgTAUgfAKQgbAKgeAAQgYAAgbgHg");
	this.shape_168.setTransform(-43.1,-102.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#1D1D1C").s().p("AgBAUQgYgCgTgFQgXgHgLgGQgMgFgIgHQgHgFABgCQABgBAIADIAWAHQAOAFASAEQATADAWACQAlACAkgFIAXgDQAIgCABACQABABgIAEQgJAFgNAEQgKAEgZADQgNACgOAAIgPgBg");
	this.shape_169.setTransform(-33.9,-116.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#1D1D1C").s().p("AhBBaQgsgHgigRQgagNgTgQQgPgOABgBIASAKQAXAOAXAKQAjAOAoAEQAwAFAsgMQAtgNAmgdQAggYAWgeQAPgUAMgZQAJgRABAAQgCAdgZAoQgVAgghAbQgnAfgyAPQghAJghAAQgQAAgQgCg");
	this.shape_170.setTransform(-43.9,-107.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F1911F").s().p("AgZBlQhIgIhDgtQgRgKgIgKQgHgJgGgRIgihLQB4gvB8AbQAeAHAGANIgHgEQAsAeA3ACQA3ACAugaQgYAxgOAWQgYAmgxAgQgeAUgrAHQgXAEgXAAQgPAAgRgCg");
	this.shape_171.setTransform(-47,-110.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F8D2E4").s().p("AgYB0QgygLhIgqQgLgHgDgDIgIgPIgkhSQBOA+BaAFQAuADAsgQQAtgPAgghIBJhSQACATgIAiQgPA7gRAiQgYAxgmAYQgbARgjAEIgXABQgVAAgWgFg");
	this.shape_172.setTransform(-44.8,-103.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F8B143").s().p("AhQBDQAAgCAdgNQAngRAbgUQAlgZAOgbQAFgKADgLQACgJABAAQACgBABAKQABAMgEANQgFAPgOARQgOAQgTANQgiAZgmAKQgOAEgKABIgEAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_173.setTransform(-45.8,28.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F8B143").s().p("AjjCAQAAgCAVgEIA4gMIAmgKIArgPQAxgTAsgZQAsgZAqgfIAjgdIAcgcIAogpQAOgQABABQACABgMASQgOAVgWAYQgOARgOANIgiAfQgsAigsAZQgtAagzASQggAKgMADQgVAGgTADQggAFgZACIgKAAQgMAAAAgBg");
	this.shape_174.setTransform(-60.3,23.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F8B143").s().p("AiJFiQgBgBAcgUQAlgdAgggQAtguAmg+QAVgjAQglQAQgiAMgwQAYhYgPhMQgMhHgqgzQgdgigngaIgWgMQgIgFAAgBIAJADQAQAFAIAFQApAVAhAlQAuA0AOBLQARBOgZBcQgMAvgRAmQgPAkgYAlQgpBAgvAsQgmAlgkAVQgZARgEAAIgBgBg");
	this.shape_175.setTransform(-18.1,-21.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F8B143").s().p("ABZA0IABgLQADgLgEgOQgGgSgNgMQgQgOgbgFQgUgDgbACQgeADgMAAQgQABgMgCQgLgBAAgCQAAgBAKgCIAcgFIApgHQAbgDAZAEQAfAFATASQARARAEAXQACARgHANQgEAIgCAAIgBAAg");
	this.shape_176.setTransform(-82.8,-17.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F8B143").s().p("AAnBLQgBgBAEgLQAGgRACgPQADgagGgUQgKgegagIQgNgFgNACQgNACgJAJQgNAOgCAcIACAgQABAMgCAAQgBABgFgMQgGgTgBgOQgCgfASgVQANgOARgDQARgEASAHQASAHALAOQAKAMAFARQAHAZgGAbQgFATgJANQgGAKgDAAIAAAAg");
	this.shape_177.setTransform(-26,-45.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F1911F").s().p("AhpH0IgIgJQgiAQg4ACQhPADhMgSQhggWhGg1QhPg9gWhTQgQg+ARhMQANg5AjhNQAqhdArg+QA3hPBCguQA1gkBNgaQAsgPBhgYQAbgHAMgFQALgGARgMQBFgwAvgWQBEghA9gCQA4gCBDAVQB0AkBMBJQApAoAaAxQAcAyAIA2QAPBng3BwQgmBPhYBpQgtA1giAWQgaARgjALQgaAJgoAHQAJAjgQAmQgQAjgfAYQgeAWgqANQggAJgwAGQgwAGgvAAIgFAAQgoAAgSgOg");
	this.shape_178.setTransform(-63.4,-12.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("Ai1MRQhngWg6hGQgbgjghhKQhFibgchlQgvisAFjcQAFiWAjj3QANhgATg2QAchPA2gqQAxgmBXgPQBdgQBNAOQBnARBYBGQBWBEAxBiQAQAgASAvIAeBRQBJC6CBCcIAKgKQAjCBgVCLQgWCKhHB0QhHBzhyBQQhyBRiEAbQg0ALgyAAQgvAAgrgJg");
	this.shape_179.setTransform(-92,-58.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#1D1D1C").s().p("AhRAPQgPgQgFgaIgBgVIARAKQAaAMAvALQAuALAfgPQAPgIAGgHIASBLIiTAJQgHgBgfgig");
	this.shape_180.setTransform(-30.5,154.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#1D1D1C").p("Ah/AdICyAFIA7g2QgIAEgRADQggAHgmgCQglgCghgLIgZgJg");
	this.shape_181.setTransform(-94,152.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#1D1D1C").s().p("Ah2AcIAvg8IAZAKQAgAKAmADQAmABAggGQAQgDAJgEIg7A1g");
	this.shape_182.setTransform(-94.9,152.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#1D1D1C").s().p("AB3D8QgBgBAEgJIANgZQAJgUgCgWQgBgKgEgRQgHgTgEgJQgGgLgNgRIgYgeQgQgUgDgTIgBgXIAHhCQAAgWgIgVQgLgagWgVQAEASgEAWQgEAUgNAWIgNAZIgEgdQgCgVgPgZQgLgTgSgUQgSgUgUgPQAOAaAHAeQAJAlgDAnQgDAcgGAUQgFAQgCAAIACgRQAEgXAAgYQAAgogJggQgNgwgegiIgbgfIAkASQAqAUAkAmQATAUANAWQAGAOAFAMIAEgNQAEgUgGgTQgEgNgFgKIgXgmIAjAZQAyAhASAuQAKAYgBAaIgDAZIgDAVIgCAfIAAAJQADAPANASIAWAeQAOASAGANQAGANAEASQAEAQAAANQABAYgMAWQgEAJgMAPQgFAIgBAAIAAAAg");
	this.shape_183.setTransform(180.8,-55.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#1D1D1C").s().p("ABTCdQgdgCgegSQgVgNgMgPQgIgLgFgLQgGgOACgOQABgLAHgQIAJgYQAGgTgKgfQgRgzgigdIgogiIAwATQAMAFAXAIQAVAHAMAJQAUAOARAfQALATAFAPQAFANgCABQgBAAgHgLIgTggQgVgcgQgLQgLgHgSgGIgFgBQAVAaAMAmQALAkgHAYIgKAaQgGAOgBAIQgCAKAFAKQAEAKAFAIQALAPASAMQAYASAdAGIAVAFQAAABgFABIgLAAIgGAAg");
	this.shape_184.setTransform(171.3,-46.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#1D1D1C").s().p("AAsGoQgRgCgIgDIgXgGQgUgIgagMQgngUgtgfIgmgeQgVgTgNgNQg7g9grhXQgcg4gihdQgWg+gShJQgUhQgVh3IgIg3IgCgTQABgBAEATIAMA2QAYB3AVBPQAVBNAVA4QAjBdAbA2QArBUA6A7QANAOAUASQAOAMAXARQApAdApAUQBSAtBhgRQAogIAsgUQAkgQAlgcQAfgXAdggQAggmAOgYQAjg6AMhHQAKg2gKg6QgGgpgTgqQgLgZgNgYIgJgRQABAAALAPQAIALAEAJIAPAcQAUAqAIAqQALA7gIA5QgLBJglA9QgOAaggAnQgfAigeAXQgmAdgmASQguAVgqAIQgcAEgbAAQgVAAgUgCg");
	this.shape_185.setTransform(152,-15.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#1D1D1C").s().p("AAwAOQgagNgVgDQgcgIgVAFQgHABgHADIgGABQgCAAAEgGQAFgGAKgFQALgEAOgBQAQAAAOADQAeAHAVAQQAIAGAEAGQAEAFgCACIAAAAQgCAAgTgJg");
	this.shape_186.setTransform(86.9,-81.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#1D1D1C").s().p("AEsIUQg2gUgqglQgoglggg3QgdgzgSg7QgIgZgJgiIgPg8Ig4jpQgRhHgLgnQgRg7gTgsQgshphFg5IgJgHIg5gkIg7gYIgegHQhFgPhKAHQgwAEg7AQQgiALgfANIgXAJQAAgBAVgLIAbgMIAmgPQA3gSA1gGQBOgIBEAOIA+ASIAfANIAyAeIATAPQBHA5AvBtQATAtASA8QALAmARBJIA5DoIAPA8QAJAjAHAXQAUA9AaAuQAfA2AlAiQAnAjA0ATQAwASA0AAQAxAAAtgQQAqgQAigeQAggcAUgkQAjg9ADhMQADg3gSg0IgPglIgOgZIgNgUIAQASIAQAZIAQAlQAUAygCA7QgCBPgjA/QgUAmghAeQgkAggsASQgvARg0ABIgDAAQg0AAgygSg");
	this.shape_187.setTransform(120.2,-41.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#1D1D1C").s().p("AjUFTQgHgOgCgKIgFgRIgCgLIAAgLQgBgIACgSQADgQAEgLQALgdAWgcQAQgUAighQBEhBAxgzQB3h/BEhsIAbgsIATgiQAOgfACABQABAAgLAgIgRAkIgZAvQhBBvh3B/Qg1A5hCA8QgeAbgVAYQgVAagLAaIgIAZQgCATAAAFIABAUIADASIAGAYQADAIgBAAIAAABIgFgIg");
	this.shape_188.setTransform(0.8,124.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#1D1D1C").s().p("AgnDwIgHgBQgEAAgFgDQgGgFgFgGQgJgMgHgOQgOgegFgeQgCgIAAgJIABgKIABgDIACgGIALgfQAQgsAIhNQAHhNAFgaQAIgpAMgbQALgYADACIgIAYQgKAhgEAiIgJBnQgCAjgFAaQgFAhgLAfIgLAgQgDAHAAAGQgBAGACAIQAFAbAMAdQAIARAFAHQAEAFAEADIAEACIAGABQATADAbABQAiABAjgCIAZgBQABADgZAFQgfAGgnAAQgbAAgVgDg");
	this.shape_189.setTransform(-31.1,136);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#1D1D1C").s().p("AgmBfQAEgyAOgyQAOgzAWgsQATgmAEACQACABgPAoQgUA2gKApQgMAngKA5QgIApgCAAQgEAAACgqg");
	this.shape_190.setTransform(-68.4,125.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#1D1D1C").s().p("AkWBnQgBgCAWgLIAZgQQAQgLAMgNQATgVAKgPQAWggAKgMQATgYAcgQIAOgIIAPgHIAggKQAKgEAXgDQATgBANACQAQACAsAJIBiAZIBDAPQAYAGAAABQAAACgZgDQgdgDgngHQgigGhBgPQgqgIgQgCQghgDgbAJIgeAKIgbANQgaAPgSAVIggAqQgMARgTATQgVATgmATQgUAHgEAAIAAAAg");
	this.shape_191.setTransform(25.6,-85.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#1D1D1C").s().p("AgaLvIAJgPIAcgqQA0hSAchUQAph4AGiWQAFiCgXjNQgOh2gFg5QgLh1ACgvIAFhMQAEgwAAgXQAAgpgFgYQgGgfgUgVQgWgWgWgIQgVgIgZADIgrAGQgYADgNgCQgPgCgNgKQgJgGgHgJIgIgLQAAgBgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIALANQAVAUAVACQAPACAVgEIArgIQAbgDAYAIQAZAJAXAXQAWAWAIAjQAHAaAAAqIgEBIIgEBMQgBAtALB1QAGA4AOB2QAXDQgHCCQgHCYgsB5QgfBWg3BQIgQAYIgOAQIgMANIAAAAg");
	this.shape_192.setTransform(95,-6.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#1D1D1C").s().p("AlFAxQgygKg1gOQgmgJABgCQAAgCAmAHIBoASQBYAOBBAIQBkAKBZgBQBqgBBRgSQBRgRBAghQAxgaAlggQAcgaABABQACACgbAbQgiAjgzAcQg/AkhTAUQhXAUhoABIgMAAQiUAAi4gkg");
	this.shape_193.setTransform(-13.3,-82.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#1D1D1C").s().p("AmOEjQgSAAgPgCQgMgBAAgBQAAgCAtgBQA7gDA8gMQBSgQBZgiQBngnBdg4QAxgeAtghQAxgmAfgcQBEg/AvhIQAjg2ASg2IAKgfQADgLABAAQABABgCAKQgDATgEAOQgOA2gjA6QguBLhEBAQgeAdg0AoQgsAhgzAfQheA5hoAmQhbAhhUAPQg8AKg0AAIgJAAg");
	this.shape_194.setTransform(59.6,74.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#1D1D1C").s().p("ADgJgQgkgCgegDQgYgCgwgHQgfgEgtgCIgogEQgSgCgXgLQgegPgpgkIg+hCQg4hDgyhaQhWidgvi1QgjiEgOihIgFg8IACjDQABgTABAAQABAAAAATIABA3IAAAnIALCgQAQCdAkCFQAuCwBWCeQA0BcA0A/IA9BAQAlAiAeAPQARAJAUAEQARACAVABQAuADAfAEIBHAKIBCAGQA1ADA8AAIBWAAIA3AAQASAAABABQAAABgTABIg3AEQhMADg7AAIhBgBg");
	this.shape_195.setTransform(-79.4,51.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F1911F").s().p("ACHCYQgagGgfgcQgVgTghgmQgOgRhmg5Qhbg0gQgoQAKgQBIAAQA6AAAiAHQARADAVgEQANgCAXgHQATgFA5gIQA2gHAVgIIgWAjQAJAKABAQQABAOgGAJQgDAGgKAIQgKAJgEAFQgKAPABAbQABAZAKAcIANAfQAHASABANQAAAUgOAKQgIAGgLAAIgLgBg");
	this.shape_196.setTransform(-8.9,-62.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#1D1D1C").s().p("AiuExIAEgLQAJgbAYgbQAdgfANgQQAgglAIg3QAEgegChDQgCgYgMg+IgShLIgZhuQgJgpACAAQABAAAMAnIAfBtQAJAfAKAsQANA3ADAiQAEA9gFAnQgFAegJAWQgIAXgVAZQgOARgcAeQgSAUgJASICUAGQAIAAAFgDQAGgEAFgGIAXgYIAqgpQAhgfAfgZQAYgSABABQABABgWAVIg8A6Ig/BDQgIAJgGAEQgIAFgMAAg");
	this.shape_197.setTransform(-89.8,125.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F1911F").s().p("AgdCXQgPgEgPgfQgSglgFgtQgGgzAOgoQAGgQAOgWQAdgrAWgJQAVgKAWAQQAXAQAOAjIACAGQALAjgJAsQgHAdgSAiQgWAogXAcQgVAagPAAIgEgBg");
	this.shape_198.setTransform(-17.7,124.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F1911F").s().p("AAQCAQgdgDgcgdQgagagVgrQgZg0ADgqQACgaANgRQANgRARAAIAsAjQAuAcAKggQAGgSAOAGQANAFAOAWQAiA1gFAxQgGAwgcAgQgaAbgdAAIgGAAg");
	this.shape_199.setTransform(78.2,24.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F1911F").s().p("ACPGnQgZgBgVgkQgIgPgMgcQgOgigFgLQgYgygkgcQglgbgnADQgXABhAA7Qg+A4gZgBQgxgEgZgmQgXgjAFg2QAFg1AfgwQAig0A2gaIAKgEQAHgDADgEQALgNgFgSQgCgIgLgUQgNgXgkgNIg3gUQgagQgMgnQgOgqAUgZQAKgNANgBQAjgFAsANQAoALAjAXQALAGAIgFQAOgIgBgbQgBgYgLgVQgLgVgCgNQgEgRAGgXQACgJAGgJQASgfAfAAQAbgBAcAUIAvApQAdAZAVAIQAqARAJAAQAbABAGgjIAZglQAMgiAdAIQAcAHAKAlQAGAZgKA2QgMA6AEAgQAFAnAmAeQA3AsAOASQAJALAEARQAEARgCASQgFAkgkAnQgeAhgeAOQgpATgLAzQgIAhACBWQABAhgIAaQgQA2gcAAIgCAAg");
	this.shape_200.setTransform(63.2,-34.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F1911F").s().p("Ai5FeQgigDgYgWQgcgagLg4QgMg5ARgqQALgaAXgQIAqgYQAsgaAlg4QAkg5AUhLQANg8AIgbQAPgwATgTQAMgMAdgjQAcgZAaAXQAWATANAmQALAhANAFQAJAEAiAHQAaAGAPALQAnAcAPBPQAOBPgWA/IgKAcQgHARgDAMQgIAnAMA4IAXBhIhEAaQgnAOgdAJQgzAPg8ADQhPAEgugXQgNgGgKAJIgKALQghAHgVAAIgIgBg");
	this.shape_201.setTransform(20.9,68.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#F1911F").s().p("ABgDcQgNgCgMAFQgNAFgHAKQgKgfgtgSIgkgOQgVgIgNgKQgZgTAAgZQgBgHADgKIAGgSQAJgdgCgfQgDgegNgcQgJgUgOgNQgGgFgGgEQAmABAoArQgEgVACghIAEg1QABgfgJgXQgJgdgVgNQApAQAdAkQAdAkAGAsQARgUAEgbQAEgcgLgXQAEAEAdAbQAUATAGARQAIATgFAkQgGAqACAOQAEAcAhAtQAhAvAEAbQAEAfgQAiQgLAZgBAFQgEAUAMAJQgZgSgVgEgAiJhSIgVgHQAMABALAGIgCAAg");
	this.shape_202.setTransform(179.5,-51.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("ADGItQiLhjg+hsQgfg2g3ilQgZhMgjigQgdiBgWgqQgkhYgYgpQgrhIhHgIQhIgIgLAFQgGANgSAMQgmAahMASQhaAVgUgjQgXgmgJgcQgKgbAHgFICWhDQCGgaBOARQBsAZBRBJQAjAgAoBMQAlBFAOA0IA3DoQAqC9AJASIAgBXQAbBKAYAnQAlA/BqAjQBfAgAxgOQAzgPAqgWQA2gdATggIAjg5QAOgeAFg3QAGg3gIguQgEgWgNgqQgKgeAEgVQAEgYAVACQAnACAJAUIANAkQAJAdAEAFQAMAQALAjQASA0gGA0QgGA7gdBEQgcBCgcAdQhUBUhKAiQhCAfg+AAQhWAAhRg6g");
	this.shape_203.setTransform(123.7,-34.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F1911F").s().p("AByFWQgsgZg3g8QhIhRg+h5Qg7h0goiJIgqipQAMAFBFBeQBDBbAQABQA4ADAWAfQASAagLA6QgNBBAIAZQALAfArAdQA+AoAJAJQALAKAQAYQASAYAJAKQALAMAVARQAYASAJAJQAnAlgGAnQgCAMgHAFQgEADgIACQgSAFgTAAQgrAAgugag");
	this.shape_204.setTransform(-98.6,73.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AksSnQgEgOACgMIAFgVIAEgUQADgLAIgTQAIgRAIhGIAJhSIAEgpQAEgeAIgaQAIgZAOgKIAMgFQirAAhIAGQgtAEgbgJIgTgKIgTAzQgXA6gRAfQgPAagDBEQgDA9gLAIQgPALg5A8Qg4A7gDAHQgDAJilgWQADgMAlgyQAZghAOgmQAHgSAOg0QANgwgjiLQgsiugZgjQgggug+iIQhUi4gpiZQgniTgGjHIACioIgJiGQgHiMAGgdIALhFQALg+ARg0QAyijBphPQBnhODOAvQBoAYBjApQBGAJAxAKQAeAGCNANQCGAMAXAAQASAAA2gFQA2gFAHgCQAHgCAOgKIA2gmQAegWAQgaQAUgiAMgMQAYgYAhgKQAdgJAYACIBnAKQAUACBIARQBJARAHAEQAFAEAbgHIA0gMQAXgFAtAMQAVAFBTAZQAxAPgLAQIgNAOQgIAIABAHQADAOATAHQAHACAZAFQAHABAlgFQAjgFAGABQAGACAVAAQAUABAFACQAIACARATQAUAXAOAbQAOAagBAmQgCAWgHAxQgEAdgBArIgCBdQgCA1AUCUQASCLAIAXQAFANgEBvQgFCNABAxIgFAyQgJA+gVBAQhEDLikCKQikCJiAAwQgnAOgxAKQgxALgPAFQgvASgdADIgTgBQhVAOgcgEQgGgBgbAkIgaAlIhIBkQjHC+gWATQgbAXgKBDQgEAaAIAdQAEAOAEAKIifAJQgfg4gGgWg");
	this.shape_205.setTransform(-10.3,32.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#1D1D1C").s().p("AhZATQABgLAGgYIAIgaIACAOQANAPAvACQAuACAagUIARgTIAQBUIi5AOIADgfg");
	this.shape_206.setTransform(68.5,141.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#1D1D1C").s().p("AjWKzQADgnAOg1QAMgrATgqIASgnIAFgKQACgDAAgEQAAgIgEgKQgGgUgXg2IhAiFQgdg+gUg3QgUg7gHgpQgIgsAFggQADgcAKgTIAGgLIADgDQABABgIAOQgIAVgCAZQgHBBAqBrQATA0AfBAQATApAuBbQAZA3AGAVQAEAQAAAGQAAAIgDAGIgFAJIgSAnQgSAsgLAnQgMAsgEAkIBagFIBKgFIgBgDQgIgWgEgfQgBgQABgMIABgIIACgFIAJgOQAjg4AigdQARgNALgGIAPgHQAFgDAGgFQAHgJgHgMIgUgYQgNgQgBgSQgBgOAHgUQAHgTAXgmIAdg2QANgZATgcIAigwQAMgQANgjQANgmAShDIAWhnQARhXANhjQAWikgDhtQAAgsgGgeIgDgTIgBgGIADAGIAFATQAHAcACAuQAGBtgUClQgMBkgQBYQgMA9gKAqQgRBEgOAnQgNAlgNARIgiAxQgWAhgJASIgdA3QgWAlgHARQgFASAAAKQACAMAJANIAKAMIALAOQAGAJAAAKQAAALgIAJQgFAHgKAFIgPAIQgQAJgKAIQggAbghA2IgHALIgBADIgBABIgBAFQgBAKACAOQACAZAIAYIAEAIIABABIACACQACAEgCAEIgEAEIgDABIjDAMg");
	this.shape_207.setTransform(80.2,77.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AjVLSQAKgmAPgsQANgYAHgTQAPgjgBgbQgCgcgSgvQgRgsgIgEQgIgFgQgoQgSgtgHgJQgHgKgUgqQgVgqgBgHQB7gfB3hPQB8hTBAhlQArhCATliQAJioAGgsQAJhUATAYQAiAtAQCEQAIBCACBDQACBLgUClQgPCFgQBZQgKA1gXA/QgMAhgOAhQgEALgfA1IgmA+Ig1BXQgDAHgIAMQgIAOAAAXQAAAYATAWQAKALAJAGQADAQgPAPIglAbQgfAVgTAYQgVAagMAYQgGAMgCAHIAHBUIipANg");
	this.shape_208.setTransform(81.9,69.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#1D1D1C").s().p("AgLAcQgrgRgggbQgLgKgHgJQgGgHABgCQABgBAeAUQAmAZAjANQAjAOAtAHQAjAFAAABQAAACgKACQgLABgPAAQgqAAgrgRg");
	this.shape_209.setTransform(27.6,105);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#1D1D1C").s().p("AgtANQgUgFABgEQABgCATgBQAbAAARgCQASgDAbgHQATgFABACQACAEgSAKQgVAKgZAEIgVACQgPAAgMgDg");
	this.shape_210.setTransform(56.8,108);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#1D1D1C").s().p("AgVAsQgLgDgJgJQgIgIgEgLQgHgRAFgRQAEgOAIgHQAFgFADABIgDAIQgEAJgBAKQgCAOAGAMQAHAQARAFQAQAGAQgGQALgEALgNIAMgQQAFgHABABQACABgCAIQgCAIgGALQgLASgPAHQgMAGgLAAQgKAAgLgEg");
	this.shape_211.setTransform(24.6,108.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#1D1D1C").s().p("AgCA7QgfgDgSgeQgMgTgBgZQAAgRADgOQADgKACAAQABAAAAALQABARACAMQACAUALARQAQAXAXACQAXADAQgWQAMgOACgWQACgNgCgPQgBgLABgBQADAAADAKQAGAQAAAPQAAAZgOAUQgKANgMAGQgMAHgMAAIgHgBg");
	this.shape_212.setTransform(44.4,111);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#1D1D1C").s().p("AglAjQgNgQgGgXQgEgQAAgMQAAgKABAAQACgBADAKIAJAaQAIAUALALQASASAUgBQAVgCAJgXQAHgNgBgWIgEgbQgBgLABAAQACgBAEAKQAGALADAQQAFAXgHAUQgFANgLAKQgMALgQABIgFABQgZAAgUgXg");
	this.shape_213.setTransform(68.4,106.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F9CFBE").s().p("AgbCIQgOgFgLgLQgNgOgRgmQgmADgogKQgJAVgVAMQgVAMgVgHQgWgIgMgcQgMgeAPgPIgSgTQAFgIAMgGIAVgJQBWgkAlgOQBGgbA3gRQAQgGAKABQADABAigJQAhgJADACQAgARAlAoQAgAiAsAQIAXASQgFAJAHASQAJAVgBAIQgDASgPANQgPAOgSABQgTABgXgPQgXgPgFgSQg/Ajg+gRQgHAqgCAEQgHAZgTAGQgFACgGAAQgIAAgJgDg");
	this.shape_214.setTransform(46.9,102.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#1D1D1C").p("AgwgfQADgBAdAIQAeAJAcgGIA6gMIgcBFIiqgDg");
	this.shape_215.setTransform(-0.5,141.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#1D1D1C").s().p("AhjAgIAzhAQACgBAdAIQAfAJAbgGIA6gMIgcBFg");
	this.shape_216.setTransform(-0.4,142);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#1D1D1C").s().p("AjTDpQA5hGAnhIQAmhEAPg4QAOgvAAgpQgCggABgBQABABABAHQADAKABAPQADAogMAyQgOA7gkBGQgkBDgzBBICSgEIAWgzQAPgkAFgSIAAgDIACgHIAFgHIAMgKIAXgSIAugeQA8glAagQIAJgHQAFgDACgEIALgTQAMgZAAgMQACgQgHgUIgPgfQgNgdAAgaQAAgVAEgOIADgMQABABgBALQgCAPACAUQABAZANAbIAQAeQAJAUgBAUQgBAPgMAcIgLAVQgCADgIAGIgJAHQgbASg6AlIguAfIgWARQgFADgFAGIgDAEIAAABIgBADQgFATgOAnIgZA5IgCAEIi/AFg");
	this.shape_217.setTransform(10.3,121.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("Ah4CbQAUgnAYg/QAdhNADgmQALh8ABgCQAIgbAYgcQAqguA4AHQBgAMARAcQAEAGgcAbIgeAcIAbBLQAaBJAAADQAAAEgIAZQgJAZgEAEQgCADhOAzQhPAzgEAEQgSAPgGAMQgEAIgJAcIgKAgQgCAIgTAoIioAEQBHhaATgng");
	this.shape_218.setTransform(10.8,116.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cow, new cjs.Rectangle(-198.2,-160.8,396.4,321.2), null);


(lib.catHand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#131413").ss(0.7,1,0,4).p("AgGgsIAJASQAIAagJAt");
	this.shape.setTransform(-77.7,32.9,1.098,1.098,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#131413").ss(0.7,1,0,4).p("AA0ifIALAhQAJAtgLA0QgMA3gbAxQgWAngVAUQgYAWgWAE");
	this.shape_1.setTransform(-55.8,43.6,1.098,1.098,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ag+CqQAPgEAMgIQAegVAagwQAcgyAKhHQAGgwgCgsQgBgWgGgOIgGgJ");
	this.shape_2.setTransform(-31.2,40.6,1.098,1.098,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#131413").ss(0.7,1,0,4).p("ABCipIAKAYQAIAkgJA5QgJA9gnA8QgcAsggAcQgdAagRAE");
	this.shape_3.setTransform(-8.7,36.3,1.098,1.098,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#131413").ss(0.7,1,0,4).p("AA9iqIAEAoQACA1gSBDQgUBGgoA6QgiAxgTAE");
	this.shape_4.setTransform(13.7,29.2,1.098,1.098,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#131413").ss(0.7,1,0,4).p("AA3ipIAIAmQAEA0gRBCQgQBCgyBBQgZAggWAU");
	this.shape_5.setTransform(33.3,20.5,1.098,1.098,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#131413").ss(2,1,0,4).p("Ag4A4QgNgJgJgOQgRgdAWgcQAaggA1ABQAxABASAXQANARABATQAAAJgCAG");
	this.shape_6.setTransform(58.6,14,1.098,1.098,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#131413").ss(2,1,0,4).p("AhvAiQAEgGAJgIQARgPAWgLQBHgmBkAQ");
	this.shape_7.setTransform(56.2,20.2,1.098,1.098,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#131413").ss(2,1,0,4).p("AoKicQgUAAgbAGQg4ANgmAfQgqAiAOAvQAMAqAoAOQAoANA8gEQBGgEBPgdQA5gTA8gWQAjgMATAAQALABBgAtQBwA4BgAdQEjBYE0gT");
	this.shape_8.setTransform(17.4,44,1.098,1.098,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#131413").ss(2,1,0,4).p("ABoiCQgYADghAMQhAAXgrAqQgwAvAGA1QAEAwAlAVQAbAPARgDQAIgCADgF");
	this.shape_9.setTransform(92.9,29,1.098,1.098,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#131413").ss(2,1,0,4).p("AhDhgIAWA/QAdBDAiAaIAyAl");
	this.shape_10.setTransform(75,20.9,1.098,1.098,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#131413").ss(2,1,0,4).p("AjQCQQgDgaAMglQAXhJBJg8QBKg+BwgUQBOgOAwAJ");
	this.shape_11.setTransform(80.5,12.1,1.098,1.098,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#131413").ss(2,1,0,4).p("Aq0AAQghgggagwQg0hgAohGQAshPBEAcQA+AaAcBQQAbBPA+BAQBGBJBqArQCyBIAtAPQCOAvDbAkQDRAjCjAUQBSAJAnAD");
	this.shape_12.setTransform(-10.6,-3.6,1.098,1.098,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9FAC").s().p("AgCAGIAHgNQgEAHgEAIIABgCg");
	this.shape_13.setTransform(-103.8,-2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#016BA9").s().p("AlfCMIg/gDIgGgGIgEADIgEgGIgBgBIgRgXIg2hDIhKhYIACACIAcAYQAbAXBaAeIAMAEIACAAQAMAaAQAXIAPASQAUAZAdANIAJADIgnAAgAg9B6IgCAAQgKgCgLgGQgJgFgUgRQgLgIgKgMIgIgLIgMgRIACAAQBHgFA1gJIBxgVIAEgBIAgAhIAHAIQASASAPAGIAIADIgVAHQgUAGggAHIgKACIgKACIgfAGQg+AMgbADIgEAAIgKABIgDAAgAFogIQgJgHgNgQIgKgNIgLgPIgIgKIABAAQAegOAwgRIAegKQAYgIAggIIAygOIAOAQIAhAnIAEABQgNAEhcAtIgtAVIgsAVQgFgDgQgMg");
	this.shape_14.setTransform(-17.2,47.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5090C6").s().p("AkuEpQgdgNgUgZIgPgSIAFAFQAHAHASAQQATAQAZAMgAg0EZQgLgDgOgKQgVgPgRgVQALAMAKAIQAUARAJAFQALAGAKACIgIgBgABAEKIAggGQhCAPgYADIgfADQAagDA/gMgAC8DsIgIgDQgPgGgRgSIgIgIQAfAXAXALIADABIgeAHIAVgHgAi6AZQgHhPALgYIAHgTQABgBBkgSQBlgTAFgCIgLAfQgJAkAFAiQAJBQAkA+IAgAyIAIAJIACAEIhxAVQg1AJhHAFQgthRgIhigAmYC8QhagfgbgXIgcgYIgkgoIgBgHQgHgmAIgdQAFgUAEgIIAEgEICZgRIgMApQgKAvAJAlQAKAsAPAoQAHASAHAPIABADIgMgEgAHqB8QBbgtANgEIhNAlIhIAhIAtgVgAFQBkIAMAPIAKANQgMgNgKgPgAFJBZIgJgQQgagygRg1QgRg4gCguQgCgmADgZIADgRIDLhUIgHAkQgFAuAIAvQAKA5ALAdQAKAeAUAdQAQAWAbAeIAnAtIgEgBIghgnIgNgQIgzAOQggAIgYAIIgeAKQgwARgeAOIAAgBg");
	this.shape_15.setTransform(-19.2,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B2AEAF").s().p("AozCHIgtgDIAoABIgJgEIAJAAQgYgLgUgRQgSgQgHgHIgFgFQgPgWgNgaIgCgBIgBgDIAWADQCEAPBsgDIAMARIAIALQARAWAVAOQAPAKAKAEIAIAAIACAAIAOAAIgkAHIgdAGQg6AKhJAAQgeAAghgCgAiGAiIghgiIgDABIgDgCIAlgLQBpgeBUgkIABABIgBABIAIAKQAKAOALANQANAQAIAHQARANAFADIAsgVIBIgiIBNgkIgngtQASAHAXADQBkAKBcAyQA5AeA6ATIAvANIgagBQgygGhUgZQhGgUgrgRIgMgFQgTgIgSgCIgMAAQgZAAgaANIgpAUIggAPQg7AchKAeIgIADQguATg/AQIguAMQgYgLgegXg");
	this.shape_16.setTransform(8.4,48.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdFyQgygig8gbQhJgggnAAQgnABgTgCQgPgCgWgFQgWgFgRggQgSgkAPggQAMgcAOgNQgnAEgPgsQgPguAagxQAUgoArgkQA0glAbgVQAggaAVgzQAWhCAQgnQAVg0AmgJQAagHAeANIARAMQATAVAKAqQALAugZAwQgVAnglAeQgtAjgYAPQAyABA8AJQB4ARAzAmQA3AnAoAzQAgAoADARQADAMghgNQghgNgYgVQgUgSgjgJQgRgEgNAAIgbBEQggBHgVAOIghAVIgZglQgYgmgFgDIASgfQASghgPgUQgWgdglgMQgrgNgsASQgoAQgCAfQAAAPAHAMIgfAFIgRADQA1AGA2ATQB4AqAIBOQAAADAXgUIAagXQALgDAgACQAtADAfARQAoAWAVAoQAYAtgfAVQgkAZg7AFIgVABQgyAAgggWgAEoEyQgUgogRgVQgcgggogQQgogOgKglQgGgUADgjQAaAEAhAKQBAAUAgAbQAnAhATAlQAUAngKAfQgKAigUAFIgFAAQgRAAgNgZg");
	this.shape_17.setTransform(67.7,6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E1DCE3").s().p("AkzJhIAkgHIAEAAIAggDQAYgDBCgPIAJgCIAKgCQAhgHATgGIAegHIgDgBIAvgLQjDA+hZAFIg0AEIAdgHgAppIAIgWgCQgHgPgHgSQgPgogKgsQgJglAKgwIAMgpIiZARIgEAEQgEAIgFAUQgIAeAHAmQgigqgWgoIhnAAQCVgRDSgaQCCgRDWgyQDKg0AhgIQAygLCIg/QCJg/AygjQAqgdAuhLQARgbAuhYQAqhSBGgVQAjgKAoAiQAtAnACA+QABA5gwBPQgYAogYAdQB9ATBPArQA8AiA1A+QAlAsANA6QAHAdgBAUIAIAsQAGAfgRAgQgQAfgaARQgWANgSgHQgKgEgEgGIgFALQgEALgRANQgVAOgcAJQgdAKhFgKIgdgDIAaABIgvgNQg7gUg5geQhcgxhjgKQgXgEgSgHQgbgegQgXQgUgdgKgeQgLgdgKg5QgIgvAFguIAHgkIjLBUIgDARQgDAZACAmQACAuARA4QARA2AaAyIAJAQQhVAkhpAeIgkAKIgIgJIgggyQgkg+gJhRQgFgiAJgkIALgfQgFAChmATQhkASgBABIgHATQgLAYAHBQQAIBiAtBRIgCAAIgkAAQheAAhugNgAIhF2QA8AbAzAjQAnAaBAgFQA7gFAkgZQAfgVgYgtQgVgpgogVQgfgRgtgDQgggCgLADIgaAWQgXAVAAgDQgJhOh4gqQg2gUg1gFIARgEIAfgEQgHgMAAgPQACgfAogQQAsgTArAOQAlAMAWAdQAQAUgTAhIgSAeQAFAEAZAmIAZAlIAhgWQAVgNAghHIAbhFQANABARAEQAjAIAUATQAYAVAhANQAhANgDgMQgDgSgggoQgogyg3gpQgzglh4gRQg9gIgygBQAYgPAtgjQAmgeAVgnQAZgwgLgvQgKgpgTgVIgRgMQgfgOgaAIQgmAJgVA0QgQAngWBCQgVAzggAZQgbAWg0AlQgrAjgUAnQgaAzAPAuQAPAsAngEQgOANgMAcQgPAgASAkQARAfAWAGQAWAFAPABQATACAnAAIABAAQAnAABIAfgAMADUQAKAlAoAOQAoAPAcAhQARAVAUAoQAPAdAUgFQAUgFAKghQAKgggUgnQgTgkgnghQgggbhAgUQghgKgagEQgDAjAGAUgAD5HAIAhgQQgqAbgSAHQgoARhBAYQBKgfA6gcgAGCGQQARACAUAIIAMAFQgegKgTgFgAralIQAWAZAQAFQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgKAAgYgggAq5lXIgRgvIAxAeIgBgJIAFARQg6gqAKAPQAIANAHAdIAEAUIgHgagArQnlIgKgKQAgALALACgAspphIgJgGQAhAQAiAhQgagWgggVg");
	this.shape_18.setTransform(5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catHand2, new cjs.Rectangle(-104.2,-62.1,209.6,124.4), null);


(lib.catHand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#131413").ss(0.7,1,0,4).p("AARjRQgPAGgSAVQgkApgRBIQgTBUAvBXQAtBVBHAX");
	this.shape.setTransform(-1.4,8.7,1.098,1.098,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#131413").ss(0.7,1,0,4).p("AAkjPQgPAEgTARQglAjgcBGQggBRAwBgQAvBdBNAT");
	this.shape_1.setTransform(19.8,9.7,1.098,1.098,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#131413").ss(0.7,1,0,4).p("AA1jNQgQAFgTAQQglAhgZA+QgfBMAfBcQAgBgBIAf");
	this.shape_2.setTransform(41.4,8.5,1.098,1.098,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#131413").ss(0.7,1,0,4).p("ABBjOQgSAKgWATQgqAmgYAtQhKCOChCf");
	this.shape_3.setTransform(60,5.5,1.098,1.098,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#131413").ss(0.7,1,0,4).p("AA1ioQgtAcgdA4Qg8BtA6CQ");
	this.shape_4.setTransform(80.4,-0.1,1.098,1.098,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#131413").ss(2,1,0,4).p("AhjgYIAIgNQAMgOAPgKQAxgdBBAhQBGAjgcAzQgKATgWAOQgUAOgRgB");
	this.shape_5.setTransform(-56.3,4.1,1.098,1.098,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#131413").ss(2,1,0,4).p("ABdA+QgghLhPgfQgZgKgbgEIgWgD");
	this.shape_6.setTransform(-47.5,6.8,1.098,1.098,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#131413").ss(2,1,0,4).p("AChC4IAdgRQAdgbgCgzQgDg9gmg0Qgng2hHgmQhCglhYgSQhQgRgwAH");
	this.shape_7.setTransform(-78.3,5.3,1.098,1.098,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#131413").ss(2,1,0,4).p("Ag1BrIAOAGQASAHASACQA4AGAigvQAkgwgig0QgNgTgqgmQgOgNg4gRQg3gRgNAB");
	this.shape_8.setTransform(-86.1,28.1,1.098,1.098,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#131413").ss(2,1,0,4).p("ACKiKQACgDAngdQAngoABg5QABg9gngnQgfgegggCQgVgCgfAdQgSAQghAmQgPASg8AgQhKAngmAcQhLA4gXBMQggBkBIBuQBGBrCBBKQBYA0BPASQBEAQAogRQA4gYgdhUQgchPhPgYQgZgHgbgBIgWAA");
	this.shape_9.setTransform(-49.1,-0.2,1.098,1.098,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#131413").ss(2,1,0,4).p("Al3gaIAhALQAsAMAzAJQCjAdCtgMQCvgMBKgKQAlgEACgD");
	this.shape_10.setTransform(17.3,-16.4,1.098,1.098,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#131413").ss(2,1,0,4).p("ApohqIAnAaQAzAgBAAcQDMBaD6AZQD5AZDVgbQBrgNA4gT");
	this.shape_11.setTransform(32.4,20.9,1.098,1.098,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B2AEAF").s().p("AlHB2IhcgIIABAAIADAAIAFgDQALgFAOgJQAqgaAkgxIgDAAIACgDQBZAMCHgJIgFAGIAAAAIgSAXQgTAUgZASQgQANgPAIIgGAEIgPAHIAXAAQA1ADBEgIQAxgFAagEIARgCIAJgGQAQgKAQgPQApgkAJgjIABgDIABgBQBlgQBYgWQgRAfgdAiQgYAdgWAUQAmgJAxgNIAdgHIgLADQhgAeiQAVIglAFQhyAOh1AGIgrABQguAAg6gEgAqbBMIgIgCIAGgGIALADIA4APIhBgKgAovg3QgUAbgdAeQgXAagVAVgAIQhTIADgOIAAgCIA4gLIA8gHQAKgDAJgBQARgCgKALQgOAPhzA3IgjARQALgZAIghg");
	this.shape_12.setTransform(32.4,21);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#016BA9").s().p("AhtBrIgQgBQAAgCAJgEIAFgEIAUgKQAUgKAdgfIAGgIIASgXIABAAIBXgIQAlgEAxgJIApgJIAAABIgBAEQgJAjgpAkQgRAPgPAKIgJAGIgSACQgbAEgxAFQgxAGgrAAIgcgBgAlcBkIgggDQgogDgogFQghgEglgJIg4gPIgMgDIAAAAIgDgBIABgBIAOgLIAZgXQAYgWAWgbIASgXQAHAHASAIQAjAQA3AKQA2AJA0AFIAmADIACAAQgjAxgqAaQgPAJgLAFIgIADIgBAAgAFUARQAMgNATgbIAQgZIBIgTQAbgGA9gSIA3gQIgDAOQgGAZgRAjIgDAFIAAAAIgBABIgjAPIgCABQgoAQgeALIgdAJIgaAHIgcAHIhMAPQANgPAVgWg");
	this.shape_13.setTransform(25.3,22);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhTGUQgjgBgNgPQgKgLgJgmQgHgdAXgkQAPgWAVgUQAKgIA3gOQAzgMAQAAQAIAAAUgjQAbguAcgcQBIhIArgEQAEAAAGgHIhFAQIgegdQgqgcg2AOQhhAXAAAuQAAATANAaIgBAAIAMANQAfAdAjAEIgNAeIhIAIQhRATgjA2QgjA2gLAqQgGAUACAKIgoAFQgtgDgWghQgkg2BDhJQANgPAwgTQAmgOAhgJQAUgFgCgDQgHgVAAgNIgxAEQg5AIgjAcIg6ArQgRAGgQgpQgchFBLhXQAcgfAygfQA/gmBCgRQBCgQBBgKQA4gIAGACIg1gSQg/gggfg5Qgig+Amg5QAQgXAVgKQAUgLAPAIQAPAGAOAKQAaASAWAiQASAcA4AeQBHAlAoAkQA8A0APAdQALAXgFAnQgCAKgGAJIAHADQAdAQALAjQANAqgxBNQgwBKhNBAQhFA5hmApQhWAigrAAIgEAAg");
	this.shape_14.setTransform(-62.2,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5090C6").s().p("AiHEDIAPgHQgIAEgBACIARABIgXAAgAleD8IAIgDIgFADgAhTDjQAZgSATgUIgHAIQgdAfgUAKIgTAKQAPgIAQgNgAFRCkQAdgjARgfQALgUAGgSQAUg5gLg4QgLg+grgxQglgqgbgVQgOgLgGgCIAvgSQCYAJAWgCIADgBQAIADAdAiQAmArAPApQAfBTgRBaIAAACIg4AQQg8ASgcAGIhIATIgPAZQgTAcgNANQgVAWgMAPIBLgPQgxANgmAJQAWgUAYgdgApIC/QAVgVAXgaQAdgfAUgbQAbgnAKggIAHgZIACgOQAHgqgFgqQgHg3gXghIgbgoIADABIBNAKQBtAOAcACQARANATAWQAmAsALAwQAOA8gIA8QgJBCghAtIgGAIIgCADIgmgDQgzgGg3gJQg2gKgkgQQgSgIgHgHIgRAXQgWAcgYAWIgaAXIgOALIAUgRgAgQCgQAIgNAHgPQAehAgHhNQgHhPgrgvQgkgogVgRQgKgJgEAAQCfABApgIQANAHARANQAiAbATAhQAXAtAIAgQAKAngEAxQgDAxgYAyIgBABIgBADIABgEIAAgBIgoAJQgxAKgmAEIhXAIIAFgGgAI6B7IACgFQARgjAHgZQgIAhgLAZIgDAFIgBAAIgEACg");
	this.shape_15.setTransform(25.6,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E1DCE3").s().p("Ar/GlQgTgNgIgOIguALQg2AIgpgYQgogWAEg7IANg2IgLgFQgQgJgVgYQgZgfAMg5QAPhAA4hIQAxg/CHgsIB+gfIg3g0QhGhDAuhoQARgmAqgTQAmgRAXAJQARAHArArIAnAqQAXARB0A9QBJAmAqA0IADAFIgDgBIAcAoQAXAhAHA3QAEAqgGApQgIAggRAiIgDAFQASgfAHgaIgHAaQgJAggcAnIhdBpIgTARIgBABIADABQg0AzhmAxQhjAwhJAMQgQADgOAAQgmAAgcgSgAmFABQgrAEhIBIQgcAcgbAuQgUAjgIAAQgQAAg0AMQg3AOgKAIQgVAUgPAWQgXAkAHAdQAJAmAKALQANAPAjABQArACBbgkQBmgpBFg5QBNhAAwhKQAxhNgNgqQgLgjgdgQIgHgDQAGgJACgKQAFgngLgXQgPgdg8g0QgogkhHglQg4gegSgcQgWgigagSQgOgKgQgGQgPgIgUALQgVAKgQAXQgmA5AiA+QAfA5BAAgIA1ASQgGgCg4AIQhCAKhCAQQhCARg/AmQgyAfgcAgQhLBWAcBFQAQApARgGIA6grQAjgcA5gIIAxgEQAAANAHAVQACADgUAFQghAJgmAOQgwATgNAPQhDBJAkA2QAWAhAtADIAogFQgCgKAGgUQALgqAjg2QAjg2BRgTIBJgIIANgeQgjgEgggdIgMgNIABAAQgNgaAAgTQAAgtBigYQA2gOAqAcIAeAdIBFgPQgGAGgEAAgAhaFAQhrgJhEgMIhNgPIBBAKQAlAJAhAEQAoAFAoADIAgADIBdAIQgpgCgvgEgAGcEwQCQgVBggeIALgDIAagHQg7AUg0ANQhSATh5AOIAlgFgAAQDfIAGgIQAhgtAIhCQAJg9gPg7QgLgwgmgsQgSgWgRgNQgbgChugOQCpAOA9ADQBAAEBkgCQBwgCAsgIQAjgHBLgRQBBgQAGgBQgIAAgmgJIBCADICCAIQArACA2gLIAAACIg4AKIAbAAIAIABIAAgBQgCgDAXgEIAAARIBfAAIAABzIBzAAIAADeQhKAEhAACIg3AUIAAAHIgBgBIAAgGIABAAIACgFIAkgRQBzg3AOgPQAJgLgRACQgIABgKADIg9AHIg3ALQAQhbgehSQgPgpgmgrQgdgigIgDIgDABQgWACiZgJIgvASQAGACAOALQAbAVAlAqQAsAxALA9QAKA5gTA5QgGASgLAUQhZAWhkAQQAXgyAEgxQAEgygKgnQgIgfgYgtQgSghgigbQgRgNgNgHQgpAIiggBQADAAALAJQAUARAlAoQArAvAHBOQAHBOgeBAQgHAPgJANQg6AEgxAAQhCAAgygHgAC6jYIAAAAIAJAAIAVAGIgegGg");
	this.shape_16.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catHand1, new cjs.Rectangle(-103.3,-45.1,205.7,90), null);


(lib.catBody1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#131413").ss(2,1,0,4).p("Ai3BPIAYg1QAhg5AsghQAtghAvgKQAYgFAPABIBvB4QgagKgmgHQhMgOg8AWQg9AWgnAvIgaAr");
	this.shape.setTransform(-33.7,-219.9,1.098,1.098,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#131413").ss(2,1,0,4).p("Ah9CWQgGgdAAgpQgBhSAdg5QAcg6AtghQAXgRAQgFIBmA0QgaAEghAQQg/AhggA9QgfA7gEBCQgCAiAEAV");
	this.shape_1.setTransform(-18.2,-233.3,1.098,1.098,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#131413").ss(2,1,0,4).p("AAAB2QgRgQgRgdQgig4ABg8QACg9ANgcQAHgOAGgCIBagCQgWAYgJAyQgTBjBDCB");
	this.shape_2.setTransform(8.4,-233.2,1.098,1.098,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#131413").ss(1,1,0,4).p("ACaAQQgkgQg4gIQhxgShnAg");
	this.shape_3.setTransform(123.7,-194.3,1.098,1.098,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#131413").ss(1,1,0,4).p("ACGA4QgagWgvgZQhcgxhmgP");
	this.shape_4.setTransform(122,-205.7,1.098,1.098,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#131413").ss(1,1,0,4).p("ACLBrQgcgwgwgzQhhhlhpgN");
	this.shape_5.setTransform(118,-216.4,1.098,1.098,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#131413").ss(1,1,0,4).p("AC7gRQgbAJgpAGQhTAKhIgQQhJgSgsgnQgagYgFgRQgEgJAGAdQAFAbAMAcQAlBZBSAz");
	this.shape_6.setTransform(-35.2,-148.7,1.098,1.098,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#131413").ss(1,1,0,4).p("Anfh1IBlgGQB+gDB7ANQGJAsDYDB");
	this.shape_7.setTransform(14.2,-171.3,1.098,1.098,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#131413").ss(1,1,0,4).p("AmJi5IA2AGQBIANBVAdQEPBeExDl");
	this.shape_8.setTransform(27.2,-158.4,1.098,1.098,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#131413").ss(1,1,0,4).p("AkqjlIAzAOQBBAXBGAoQDgCBC7D9");
	this.shape_9.setTransform(38.7,-149.7,1.098,1.098,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131413").s().p("AAvBlQgUgCgYgoQgUgigYgLQgegOgNgNQgWgXALgcIAPgXQAWgSAmAIQAnAIAfAgQAfAiAOAzQAOA0gWAJQghAMgGAAIgBAAg");
	this.shape_10.setTransform(-7.4,-206.2,1.098,1.098,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#131413").s().p("Ag+AuIgTgLQgbgrAxgcQAxgcA4AUQAvARgBAhQAAARgKANQABACgIACQgRAFguAGQgQACgPAAQgZAAgSgHg");
	this.shape_11.setTransform(45.7,-232.2,1.098,1.098,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAeQgIgGAEgOQADgNANgNQAMgMANgEQANgEAHAHQAIAHgEAOQgDAMgMANQgNANgMADIgJACQgIAAgEgFg");
	this.shape_12.setTransform(72.1,-214.9,1.098,1.098,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#131413").s().p("Ag5AyQgMgOAIgZQAIgYAYgVQAYgUAZgFQAZgEANAOQAMAOgIAZQgIAXgYAVQgYAVgZAEIgMACQgRAAgJgLg");
	this.shape_13.setTransform(75.4,-214.9,1.098,1.098,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiAkQgJgIAEgRQAEgPAPgPQAPgPAPgFQAQgFAJAJQAIAIgDARQgFAPgOAPQgPAPgPAFQgGACgFAAQgJAAgFgGg");
	this.shape_14.setTransform(39.9,-193.1,1.098,1.098,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#131413").s().p("Ag/BCQgPgQAHgdQAIgdAagcQAagbAdgJQAegIAPAPQAQAPgHAeQgIAdgaAcQgaAbgdAIQgLAEgJAAQgQAAgKgKg");
	this.shape_15.setTransform(43.6,-192,1.098,1.098,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#131413").ss(2,1,0,4).p("ADogjIAaAPQAeAPAZACQAkADhCAPQhDAQhCgDQhugFjEALQhDAEg6gKIgsgL");
	this.shape_16.setTransform(-2.5,-94.4,1.098,1.098,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#131413").ss(2,1,0,4).p("AqPm6IAagdQAjgiAvgaQCUhVDJAaQDgAdCKBvQByBcBDCgQBrEADLA6QgEASgSAWQgjAshDARQhDARgiAGIgVACIgGBPQgDBWAVAmQAVAnAYAQQAMAIAHAAQhHAGgOgHIgOgIIAdAZQAiAbAYAEIAmAIQgMALgVAJQgoASgmgG");
	this.shape_17.setTransform(14.9,-163.3,1.098,1.098,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#131413").ss(1.6,1,0,4).p("Ag/BrIAxgVQA0ghAUg/QAhhmiKAG");
	this.shape_18.setTransform(61.2,-213.7,1.098,1.098,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#131413").ss(1.6,1,0,4).p("Ai+AoQADgJAGgPQANgbAUgaQBBhTBygbQBDgPAuAiQArAgADA5QAEA6gsAzQgzA6hiAZ");
	this.shape_19.setTransform(31.2,-191.9,1.098,1.098,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#131413").ss(1.6,1,0,4).p("AhJgoIAGAPQAJASAOANQAsAsBKgM");
	this.shape_20.setTransform(88.1,-124.2,1.098,1.098,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#131413").ss(1.6,1,0,4).p("AhmA7QABgMAFgQQAKgfASgVQA4hFBzA/");
	this.shape_21.setTransform(76.9,-140,1.098,1.098,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#131413").ss(1.6,1,0,4).p("Ai4AaIgCAJQADAQAaAkQAgAtAxAQQAzARAugXQAqgVAZg2QAOggANg7QAJglAWgnQAUgjAVgU");
	this.shape_22.setTransform(75.7,-146.8,1.098,1.098,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#131413").ss(1.6,1,0,4).p("AgTiTIASAnQASA1ADBFQADBFgOAoQgGAUgHAF");
	this.shape_23.setTransform(95.7,-158.5,1.098,1.098,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#131413").ss(1.6,1,0,4).p("AhDgpIAGARQAJAUANAOQApAwBCgW");
	this.shape_24.setTransform(99.3,-179.7,1.098,1.098,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#131413").ss(1,1,0,4).p("AhshSIAbAFQAhAJAeAPQBgAuAfBa");
	this.shape_25.setTransform(59.4,-164.8,1.098,1.098,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#131413").ss(1.6,1,0,4).p("AisibIgGBMQADBWAsA3QA5BIBUASQBeATBLg+");
	this.shape_26.setTransform(73.5,-177,1.098,1.098,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAhQgYgJgNgQQgNgQAGgOQAFgOAVgDQAUgDAXAJQAYAKANAQQANAQgGANQgFAOgVADIgLABQgQAAgQgHg");
	this.shape_27.setTransform(87.3,-205.4,1.098,1.098,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#131413").s().p("AAEBeIg4gGQgXgCgJAJQgLgPgLgXQgVguACgmQACgtAggQQAegPAyANQA2AOArAnQAxArgLAsQgKAogmAGIgJABQgRAAgugDg");
	this.shape_28.setTransform(84.2,-201.8,1.098,1.098,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#131413").ss(1.6,1,0,4).p("ACSCNQgPgfgYgoQgxhPgygoQg3gtgegSQgZgOgrgO");
	this.shape_29.setTransform(60.4,-189.6,1.098,1.098,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#131413").ss(1.6,1,0,4).p("AmEk0IAAA6QADBHAKBFQAiDZBjBqQBmBtBogJQA6gFAzgpQATgPBBhVQAigsAvg+IAbgiIAOgCQAQgDAQgIQAxgZAUg+QAWhEgchAQgWg2gsgdQgegUgTgEIgMAA");
	this.shape_30.setTransform(72.7,-141.8,1.098,1.098,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#131413").ss(1.6,1,0,4).p("AArh0QgRAGgTAPQglAdgKAqQgKAqAgAyQAWAjAWAO");
	this.shape_31.setTransform(116.2,-187.2,1.098,1.098,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#131413").ss(1.6,1,0,4).p("ABGg6QgigDgjANQhEAbgCBR");
	this.shape_32.setTransform(104.4,-200.9,1.098,1.098,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#131413").ss(2,1,0,4).p("Aq0l2QgFAGgHAHQgZAegLAXQgLAYgDAWQgCALABAGIA3gmQgIALgIAPQgRAegBAXQgBAXATgQQAJgIAKgMIAMBiQAWB2AvBcQBFCLA9BIQBXBpB7AuQB+AwBrAJQBRAGB7gOQA0gGB1gXQBWgRBJgBQCCgCAyAJQgUgSgVgSQgrgkgEgBQgRgDA7ACQA1ACAcALQAcALALAIQAFADABACQgCgMgIgRQgRgjgigZQgjgagXgOIgQgJIAegDQAigCAUAGIAgALQgHgGgQgUQgigpgxhGQhIhwgig0Qg9hchAg3QhLhBhDgYQg+gXhFAIAnzn/QgXABgcAHQg4ANgxAlQgwAlgZAlIgPAdIAzgYIACgBIAJgKQgFAFgGAG");
	this.shape_33.setTransform(54.2,-147.2,1.098,1.098,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#131413").ss(2,1,0,4).p("AiRgiIATAUQAaAVAeANQBiApB1hH");
	this.shape_34.setTransform(95.4,241.4,1.098,1.098,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#131413").ss(2,1,0,4).p("AhdhNIgCAZQABAeAMAXQAmBOCMgC");
	this.shape_35.setTransform(120.2,231.9,1.098,1.098,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#131413").ss(2,1,0,4).p("AB5iWQgQgLgdgEQg6gHhCAiQgnAUgTAwQgTAuAHAzQAHA1AfAmQAjApA3AI");
	this.shape_36.setTransform(128.8,217.6,1.098,1.098,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#131413").ss(2,1,0,4).p("AhvgaIAXgHQAegGAcAAQBbADAzBM");
	this.shape_37.setTransform(88.2,206.5,1.098,1.098,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#131413").ss(2,1,0,4).p("AhfAIIAOgHQATgHAVgDQBCgLBGAh");
	this.shape_38.setTransform(111.1,202.6,1.098,1.098,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#131413").ss(2,1,0,4).p("AhdqnIAEBrQAKB4AaBCQAsBvAcBlQAtCcAWCkQAsFGi9DR");
	this.shape_39.setTransform(19.2,22.5,1.098,1.098,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#131413").ss(2,1,0,4).p("ACvVaQACgGgbjtQgdj8gThtQgRhnghiIIgdh0Qg0g2g4hgQhwi/gTjNQgYkJAxj3QA3kUCEivQB0iZBEhLQAiglALgG");
	this.shape_40.setTransform(141.9,47.7,1.098,1.098,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#131413").ss(2,1,0,4).p("AhLpGIgHAxQgFA8AIBEQAJBSAdCeQAfCiAZBgQASBCAjBtQAYBbgKBPQgKBPgbApQgOAUgMAF");
	this.shape_41.setTransform(80.9,175.8,1.098,1.098,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#131413").ss(2,1,0,4).p("AhHiaIgiAmQghAzABBAQACBBAYAnQAQAYAcAPQAXANBAAAQBJABAtgW");
	this.shape_42.setTransform(-8.6,235.4,1.098,1.098,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#131413").ss(2,1,0,4).p("AlsrAIB/C0QCMDDBGBNQBtB7BUB1QB0CfAiBrQAyCagBBLQAAB0hcBEQhfBFhxg6");
	this.shape_43.setTransform(-13.2,173.7,1.098,1.098,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#131413").ss(2,1,0,4).p("AhAARIAggWQAqgUA3AP");
	this.shape_44.setTransform(-37.6,204.4,1.098,1.098,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#131413").ss(2,1,0,4).p("AhzAUIAggVQAsgVA3AEQA4ADAcAOQAOAGACAG");
	this.shape_45.setTransform(-19.3,207.5,1.098,1.098,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#131413").ss(2,1,0,4).p("ACEimQghgSgsAAQhYgBg6BWQg7BXAbBMQAJAdAnAtQAKAMAzASQAxARAVAA");
	this.shape_46.setTransform(8.6,228.5,1.098,1.098,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#131413").ss(2,1,0,4).p("Akkm0IB3BsQCHCCBSBzQAhAuA9BQQAxBFAcAxQBJCBAGCS");
	this.shape_47.setTransform(43.4,161.7,1.098,1.098,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#131413").ss(2,1,0,4).p("Aidh0IANAYQASAdAdAeQBcBdCjA5");
	this.shape_48.setTransform(68.5,125.4,1.098,1.098,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#131413").ss(2,1,0,4).p("AjrgsIAgAVQAqAXAyAQQCgA0C6gs");
	this.shape_49.setTransform(80.6,108.6,1.098,1.098,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#131413").ss(2,1,0,4).p("AtLB1IAugBQA2gEAsgRQA/gaAvgeQBBgpBHhFQBgheBKg1QBnhLBygoQCOgyB+gPQCcgSCbAgQCeAgBcBlQBSBagCBlQgCBdg8BKQg+BMhOgCQg3gChLglQhWgqhFgMQhvgTiUAkQieAniKBYQiBBTh1AqQhQAdhrAT");
	this.shape_50.setTransform(-74,93.4,1.098,1.098,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#131413").ss(0.7,1,0,4).p("AiDjkIAcAHQAjAJAhATQBnA6AsB3QAtB3g4BLQgRAXgZAQIgWAL");
	this.shape_51.setTransform(-96.4,77,1.098,1.098,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#131413").ss(0.7,1,0,4).p("AipioIAWgDQAcgDAeACQBdAGBFA0QBNA6AQBaQAOBRgmA7");
	this.shape_52.setTransform(-63,86.9,1.098,1.098,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#131413").ss(0.7,1,0,4).p("AidiHIBOgEQBZAEA/AsQBEAvAOBNQALBCgbAp");
	this.shape_53.setTransform(-43.8,99.1,1.098,1.098,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#131413").ss(0.7,1,0,4).p("AhtiTIATgCQAYgBAXAEQBKANApA9QAsBAgGBJQgFA5gaAc");
	this.shape_54.setTransform(-22.6,113.3,1.098,1.098,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ag0iPIAjAWQAlAhAVA3QAUA1gQBEQgIAhgMAX");
	this.shape_55.setTransform(-0.3,120.7,1.098,1.098,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#131413").ss(0.7,1,0,4).p("AjVBDIA8ALQBQAFBdgbQBrgfAyglQAsghgJgh");
	this.shape_56.setTransform(43.8,113.1,1.098,1.098,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#131413").ss(0.7,1,0,4).p("AjEAxIAHAGQAKAIARAEQA1AOBhgTQBrgWA5gpQAwgkgDgj");
	this.shape_57.setTransform(23.3,138.5,1.098,1.098,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ai+A6IALAJQAPAJAUAHQA+ATBSgXQCAgkA0hMQAHgKACgZIACgW");
	this.shape_58.setTransform(1.5,168,1.098,1.098,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ai/g0IAtApQA/ArBbAPQBdAOA3gXQAbgLAJgP");
	this.shape_59.setTransform(102.4,177.4,1.098,1.098,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ai7hFIAKAPQANASAUARQA+A1BfAWQBhAWAwgMQAZgGAFgL");
	this.shape_60.setTransform(108.8,141.4,1.098,1.098,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#131413").ss(0.7,1,0,4).p("AjLhLIA+A2QBQA5BbAXQBbAXAzgJQAZgEAHgJ");
	this.shape_61.setTransform(113.1,113.3,1.098,1.098,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#131413").ss(0.7,1,0,4).p("AqXhsIAoAdQA1AjA+AfQDGBhDdATQDdAUC8gvQBsgaAygfQArgWAmgXQBLgtAegf");
	this.shape_62.setTransform(83.6,76.1,1.098,1.098,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#131413").ss(0.7,1,0,4).p("Aq/h8IAkAaQAvAfA3AdQCvBdC3AmQDMArCrgQQCJgOCXg4QBvgqBOgxQA5glACgK");
	this.shape_63.setTransform(87.6,45.6,1.098,1.098,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#131413").ss(0.7,1,0,4).p("AqxhnIAmAaQAzAfBCAdQDTBZEZAZQEYAZD+hGQB/gjBHgn");
	this.shape_64.setTransform(90.7,17.2,1.098,1.098,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ap9hQIATAPQAaATAsASQCNA6EBAeQEFAgEQgPQDBgLA+gS");
	this.shape_65.setTransform(92.6,-14.1,1.098,1.098,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#131413").ss(0.7,1,0,4).p("Ao9hhIAZATQAjAYAzAWQCjBHD/AfQD+AfDQgDQBngCA1gI");
	this.shape_66.setTransform(91.6,-41.9,1.098,1.098,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#131413").ss(0.7,1,0,4).p("AndhhIAdARQAmAUAwAUQCYA9C9AdQC9AeCuAMQBXAGAxAA");
	this.shape_67.setTransform(86,-65.4,1.098,1.098,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#016BA9").s().p("AhzAAQAHgTAAgNIgCgJQBNgQBeABQAvAAAgAEQgHAOgUAXQgOAOgUAMIgTAKQgdAHhCAJQgpAGgjAIIgcAHQAOgaAKggg");
	this.shape_68.setTransform(-93.7,100.1,1.098,1.098,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#016BA9").s().p("AhtBLQAFgVABgTIAAgNQBRhHA1gjQA3gkAwgOIADAXQADAagEAUQgGAegPAeQg9AjgxAfQggAVg4AcQgyAZgEAAQAUgaAIgig");
	this.shape_69.setTransform(-46.1,115.7,1.098,1.098,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#016BA9").s().p("Ag1gyIAXAEQAbAEASgBQAfgBAIgCIgDAXQgEAagGAPQgJAZgFAIg");
	this.shape_70.setTransform(0.1,131.3,1.098,1.098,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5090C6").s().p("Ah0iCQAKABAkgEQBBgHAPgEIAcAOQAgAWASAkQAVArAGAeQAFAdgGAiQgHAsgTAlg");
	this.shape_71.setTransform(6.9,121,1.098,1.098,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5090C6").s().p("AgVCuQATgvgFgrQgGgwgdgsQgagogggVQgbgQgtgGQglgEgWAFQAwgfAjggQAjggAVgVIA2gFQA9gDArANQBlAhApBDQATAfAEAmQADAegGAbQgGAdgJAOQhCAvhFAkIh4A+QALgPAKgYg");
	this.shape_72.setTransform(-35.6,107.2,1.098,1.098,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5090C6").s().p("AAcCoQAVhmhKhPQhLhPhOgPQgYgEgbACIgcAAQgNgDgOACIgMADIAyggQA7gjAzgVQBRgiA9gOIAkgJIBGAaQBMAjAjAyQArA9ATA+QATBAgMAvQgKAqgnAnQgdAegNAEIgqACQgtAEgoAMQgpAMgZAJIgQAGQAZgjALgyg");
	this.shape_73.setTransform(-78.2,79.9,1.098,1.098,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B2AEAF").s().p("AoKBdIBIABQBYgCBSgTQBNgSBOg4ICbhvQBSgzCogYQB+gSBDAFIAyADQgwA+gXAJQgGAChPAQQhTAQg1ATQg5AVh4A8Ii4BhQiMBJhlAPIg/AKg");
	this.shape_74.setTransform(-51.9,115.9,1.098,1.098,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#016BA9").s().p("AgdB8IhDgpQAEhTAGg9QADgnAIguIAHglIAOALQARANATAMQAdATBJAWIgCAiQgDAtABAuQABBLAQBaQgygQhMgsg");
	this.shape_75.setTransform(155.6,-3.1,1.098,1.098,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#016BA9").s().p("ACWDYQgugPg2gWQg4gYgpgWQgigTg6gkIg0gfQgdhFgUhMQgNgwgHg2IgFgtQACgDAjAYQA1AjAWANQA2AgBgApIASAvQAaA6AkA3QAkA2BQBKQAoAkAhAaQg6gNg6gSg");
	this.shape_76.setTransform(136.9,58.8,1.098,1.098,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#016BA9").s().p("ABWB0QgZgEgPgFIgLgFQixi9gjgeIAKAEQARAEAdACQAwADAigEIASAWQAZAeAkAiQA7A3BPBQQgfAFgaAAQgTAAgQgCg");
	this.shape_77.setTransform(47.9,133.6,1.098,1.098,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5090C6").s().p("AgbC2IgrgHIgUgEQgmgygtg1QhahogjgRIAoAHQAxAGAhgDQAqgEA4gOQA6gPApgSQAqgSAUgOQAVgOAJgPIAOgVIAGgGIAvA+QA0BEAUAfIAvBJIgPAdQgcAig5AYQhAAZhKAMQgtAHgZAAIgSgBg");
	this.shape_78.setTransform(34.5,126.5,1.098,1.098,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#016BA9").s().p("AgUB8QgPgEgGABIgEACIgbkIIARAQQAUATAWAPQAiAWAyAVIACAzQgBA4gKAaQgPAqgHALIgZAEQgLgMgYgGg");
	this.shape_79.setTransform(117.4,186,1.098,1.098,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#016BA9").s().p("AANCFQgWgVgQgSIgLgPQgvjvgMgYIARARQAWAUAYAQIAzAiIAlCDIAoCXQgtgTgmghg");
	this.shape_80.setTransform(125.9,124.9,1.098,1.098,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#016BA9").s().p("AgHB2QgDg1gMgvQgMgvgjhGIggg9IAEAFIAVAKQAbAMAdAAQAuABAmgKIAQAkQAQAwAFA3QAFA3gRAzQgJAZgKAOIgQAAQgTACgPAHQgPAGgHACIgFABQABgQgBgag");
	this.shape_81.setTransform(10.6,192.9,1.098,1.098,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5090C6").s().p("AjkDAQgEg7gSgxQgSgxgcg9IgZg0IArAQQAxAPAdgEQApgGA1gRQA/gVAbgWIAngiQAMgLAIgVQAHgTAEgWIACgRIAiApQAqA0AmAxQAoA2AlBAQAdAzASArQAUAsAIAqQgFgGgMgGQgZgNghAAQgjgBgaAKQgSAHgIAJQgHAHgCAFQgTgHgZgFQgzgJggAIQgfAIgiASQgQAKgKAHQgJgGgPgFQgdgKgdAEQgdAEgbAHIgWAHQACgUgDgeg");
	this.shape_82.setTransform(-13.6,183.9,1.098,1.098,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5090C6").s().p("AC7CXQglghglgGQglgFgvAHIgoAIQgGgFgMgFQgXgLgcgEQgdgEgUACIgPACQgNgKgVgEIgUgFIgEgCIgGgDIgbkAIAyAoQA4AqAmALQAxAPAiAFQAkAFAigDQAkgDARgFQARgFAOgKIAVgSIAJA0QANA5ASAjQAcA5ABBAQgBAJgTATQgLgQgSgRg");
	this.shape_83.setTransform(99.5,190.7,1.098,1.098,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5090C6").s().p("ABVDFQibgkg/hCQgagbgKgSIgFgNIgwjwIBEA1QBLA4AnANQApAPA3ALQAyAKAZAAQAWAAAUgGQASgGADgHQACgEADAsQACA4ACAXQAHAuANBKQgJALgVAJQgXAJgdAAQgaAAgegHg");
	this.shape_84.setTransform(111.9,127,1.098,1.098,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5090C6").s().p("AlJDGQhOgVh+hIIhuhEQgbhGgWhVQgNg1gGgvIgDgmQAJAJBjA4QBwBAA7AYQBUAjBwAaQCNAhB9AEQCDAEB2gZQBkgVB3gxQBbglBDgwQAigXAQgRIAEAdQAFAjACAmQAEA9gQBiQgVASgkAZQhHAzhIAlQiWBMkGAJIgcABQikAAjjg7g");
	this.shape_85.setTransform(87.2,59.8,1.098,1.098,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5090C6").s().p("ABIDqQiogBi0gkQingiiMhGQgsgWgkgXIgbgSQADgzAGg7QAMh1ALglIBEAoQBXArBaARQCAAZBdANQB7AQBxAEQCnAFA0AAQBoAABPgJQB2gOBBgPIANAeQAPAmALAnQARA+AGAvQgrAWhBAYQiBAxhqANQiRAUh3AAIgMgBg");
	this.shape_86.setTransform(90.3,2.8,1.098,1.098,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#016BA9").s().p("AhOBqIgsggQAUgpAagwQA2hhAmgjIASANQAVAOAVAJIAuAVQgKAMgNAUQgcAngQAhQgbA4gaBOQgxgUgfgWg");
	this.shape_87.setTransform(140.8,-60.5,1.098,1.098,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5090C6").s().p("ADqDPQiFgJiCgQQifgThugYQhkgVhgg1IhOgxQgEgBA6hkQA7hpAWgTIBrA2QB+A7BlATQEEA0CcAKQBvAIBaACIAyARIAJC6QgvAFhCADQhEAEg6AAQg2AAgugDg");
	this.shape_88.setTransform(91.3,-54.1,1.098,1.098,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#812D2C").s().p("AidCHQgJgQgCgKIABgHQAIgRAGgdQAMg6gJg5QgJg6gOgqIgMgfIAFADQAIACAPgDQAYgGAEgCIAjA0QAsA4AoAOQBkAjAxgRIAvgSIgDAHQgIAHgKANQgTAbgIAdQgMAwgPAuQgQgHgVgJQgqgPgYACQgbADgYAPQgWANgKAWQgIARgJAdIgIAZQgqgngPgYg");
	this.shape_89.setTransform(77.3,-154.1,1.098,1.098,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF9FAC").s().p("AhtCnQgtgmgKgXQgDgKACgJIADgHQAGgVAFgfQAJg9gKgwQgKgxgLgpIgJggIAHADQAJACANgEIAZgHIAiAvQApAyAiAQQAnATAlAIQAkAHAbgFQAigHAdgOIgDAKIgWAwQgaA3gJAkQgmCHhYANIgMABQgrAAgzgrg");
	this.shape_90.setTransform(77.4,-152.4,1.098,1.098,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#FFB2B5","#D6828C"],[0,1],0.4,2.7,0,0.4,2.7,15.3).s().p("AheBBQgsgmgQgeQgPgfgJgjIgGgbIAuAjQA1AkAxAGQBDAHAZACQAlABAcgHQAqgJAHgCIAPAAIAAAJQgCAMgLAPQgUAfgmAOQgnAPhFAPIg9ANQgSgMgVgUg");
	this.shape_91.setTransform(-36,-147.4,1.098,1.098,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#8AC827","#83C325","#73B725","#57A22C","#368A39","#117043","#036B43"],[0.208,0.329,0.478,0.635,0.8,0.973,1],-0.3,-0.7,0,-0.3,-0.7,8.2).s().p("AhmA+QgPgYAVgjQAUgiAqgaQAqgaAogBQApgBAOAYQAPAYgUAjQgVAigqAaQgqAagoABIgFAAQglAAgNgXg");
	this.shape_92.setTransform(74.5,-213.8,1.098,1.098,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#8AC827","#83C325","#73B725","#57A22C","#368A39","#117043","#036B43"],[0.208,0.329,0.478,0.635,0.8,0.973,1],-0.6,-0.8,0,-0.6,-0.8,12).s().p("AhnBWQgagfAMgvQAMgvArgjQArglAwgDQAxgCAaAeQAaAggMAwQgNAugrAjQgrAkgvAEIgIAAQgrAAgYgdg");
	this.shape_93.setTransform(38.5,-191.4,1.098,1.098,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AhHCWIgTAAIgkgNQgCABg+hjQgFgFAlgzQAog7ApgXQA+gjApgMQA+gQApAYQAuAbAMA1QAMAzgaAsQgWAmg5AkQgoAZgaAJIgWAIQhCgEgLABg");
	this.shape_94.setTransform(31.3,-191.7,1.098,1.098,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgBBiQgRgLgNgDQgMgCghgUQgkgXgOgFQgTgHgEgIIAAgGQACgGAvglQA2gtAhgNQAwgTAlAAQAzABATAmQAdA5hMBLQgMANgdAPQgbAOgJABIgBABQgFAAgNgKg");
	this.shape_95.setTransform(70.1,-213.7,1.098,1.098,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5090C6").s().p("AhxJtIgogKIATgDIBqgTQBYgQAsgEQAvgEBVADIBLADIhMhDIAYgCQAegBAaAGQArAJAhANQgCgHgFgLQgLgYgTgYQgUgYghgVIgdgRIAhgEQAagDAkAKQgZgtglgoQgWgXg7hgQhMh6gLgQQgggvg7gwQg0grg9giQgugbg8gCIgzADIgtgSQgNgXgXggQguhAgxgtQgwgsg5ghIiXhLIA8gzQBEg2ArgRQA3gVBWgKQBdgLBGALQChAZCEBLQBAAlBHBWQBBBPAeBFQAsBlBWB1QAbAjBRAtQApAXAkAPQgBAQgGAJQgKAOgLAJQgWATgpAUQgnAUg7AKIgzAGIgIBWQgEAnAJAkQADAPAOAjQALAbApAeIhFAFIAMAMIAYAXQARAOAvgBQgGANgaALQgRAGgaAGIgWAEIAMAGQAMAHApANQgRALhHAOQgrAJgogCQgxgFgmgCQgugChRAFIh2AIIgKAAQglAAgtgJgAihJjIADgBIAFABIgHAAIgBAAgAiZJjg");
	this.shape_96.setTransform(15.6,-159.6,1.098,1.098,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AhmC5Qg2gagRg4QgPgzAjhFIAng9IgWAKQgbATgRAhQgRAigCAnQgBAXAGAlQAEAagOAHQgQAHgigQQgigPgUhBQgThAAQgsQAOglAlgkIAkgdQA0geA7ALQAdAGATAMQAMgKAUgKQAmgUAlgEQAlgDAyAQQAZAIARAJQAFgIAHgJQAOgQANgCQAagCAWAHQAiAMAMAkQAQAwAAA4QgBBCgaA8QgZA8gxAaQgpAVgugGQgcgDgbgVQgVgPgJAEQgNAGgBANQAAALADABQADABgNAEQgQAGgbAGQgMACgLAAQgeAAgggPg");
	this.shape_97.setTransform(-13.3,227,1.098,1.098,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AByDBQgxgBgmgiQgfgdgIghIgIgpQgDgNgJAGQgJAHgDAZQgCAUADARQADAQgHAKQgJAMgYgBQgagBgfgSQgegSgMgVQgKgRgEgfIgCgcIgGgCQgHADgFAaQgGAZAJAdQAEAOAFAJQgHgBgNgIQgagRgZglQgggtAMhGQAOhJA1glQAughA/AFQAfACAZAJIAIAIIATAAQAZABAcADQAeADASAIQAJAEADADIASgHQAXgIAWABQAeABAVAIQAaAKAbAZQAfAdAMA8QAOA/gTA4QgSA3gyAcQgrAXg3AAIgFAAg");
	this.shape_98.setTransform(109.5,220.8,1.098,1.098,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("ACyDoQg0gJhWgdQhNgZgjgEIhFgIQAJgbABgnQAEhOgig5QgshKgognQgvgtg6gPICZgRQCygIB6ArQCIAvBDBkQA3BSgLBOQgKBFgqAhQghAagwAAQgSAAgVgEg");
	this.shape_99.setTransform(-124.9,76.8,1.098,1.098,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AjBGmQgoggAYgVQAQgNAhgGQAVgDAKgQQAKgQgeAJQggAJgygbQgygagRglQgQghAFghQAFggAKAKIAWAdQATAZAOAOQAVAVAnAHQAtAJAugRQBVgeAeiRQAKguAUgkQAJgTAIgJIAPgMQAPgLAEgBQADgBAUAgIATAgIACAFQACAGAEAAQAFAAACgJQACgNgFgaQgFgYgWgXQgQgRgIgCQgDgBgrgFQgFACgUAQQgTAPg+gIQhKgKg3gmQg0gjgPhZIgGhRQCJAFAXgzQALgagQgbIAlASQAtAYAkAeQAlAdA4BOQAbAnAVAhIAJACQANAEAQAGQAUAIAZAaQAYAaAOAbQARAiACAoQADAwgXAsQgUAngsAWIgoANQgGACgLAPIhJBiQhEBbgTAUQggAhg6ATQgfALgZAAQgiAAgXgSg");
	this.shape_100.setTransform(63.9,-155.3,1.098,1.098,0,0,180);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAEB3QgYgJgWgdQgVgbgGgeQgGgcAFggQAGghANgOQAMgNAmgPQAkgOgCAFQgMAUAaA4QAMAdAPAbIgDBgQgIAGgNAEQgNAEgNAAQgKAAgKgDg");
	this.shape_101.setTransform(101,-193.7,1.098,1.098,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#AFB4BA").s().p("ADsHiQhTgag1gZQhtg2iLjjQgxhQgfiUIgUiFQgVAXgOAFQgJADAOgrIAPgsIgsAcQABghAOgfQAKgUARgWIAQgRQgoANgDgBQgCgBAEgGIAPgYQAJgPAdgZQAbgXAhgWQAbgTA0gKQAagGAUgBIgRAhQgJgBgWAOQgVAOgMAQQgQAWgHAjQgFAfAaAuQANAXAPARIADBpQABA7AQBNQARBMAdBSQAYBEBGBEQAkAiAeAUIAGANQALATAdAlQAeAlA7AiQAfARAXAKQgegJgqgNg");
	this.shape_102.setTransform(103.3,-148.1,1.098,1.098,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B2AEAF").s().p("AJ/VVQgQhhgagvQgnhGghg1QgwhLg8hPQg4hJgogsIgdgeQiiicgZgbQgPgSgHgNIgDgKQhsgLhKgWQhGgWhCgbQhXgkgugkQgagTgIAEQgIAFAFAeQADARA3DJQA1DAAYB0QAgCegDBeIgGCKIgHAKIgtAFIgZgNQgagMgFABQgEACgdjsQgjkegIg1QgOhYgkibQggiHgGgPQg4hHg4hjQhwjFgNixQgQjKAkjtQAgjYA1h3QAshhBkiJQBKhlA8hDQA0g6Aeg1IBuAAIB6BKQBhA1BCAPQgvgEg3AEQiuAKh8BVQidBthND9QhTETA7E8QA4EvCWCnQByB+DTBUQCUA7CXALQBMAFAugHIh0BLQgdAUASAqQAQAlAxAsQBgBUByB9QCoC3AfBbQAeBagJBTQgEAqgKAYQgbgCggAMIgoAPQgDgngIgwg");
	this.shape_103.setTransform(82.4,51.2,1.098,1.098,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E1DCE3").s().p("ACxJ1Qg1gIgfgHIgUgFIkzACQiZgsgwgUQhYglg7hAQhEhKhEh+QhGiEgOhXQgMhJgEgoIgCgZQgcAngHgLQgFgHAHgcQAHgbAHgMQAJgOg1AnQAHgYAKgbQAVg3AUgPIgnADIAog0QAxg5AvgRQAvgSAfgGQAPgDAFAAIAIgIQAOgKAhgIQAhgIATABQAKAAADACIBRgiIAlgxQA1g2BRgZQBWgbBZgHQBCgEA+AGQA8AHBmAgQB2AmAtAlQA3AtA7BIQBABOAOAuQAOAwAvBMQAvBLAtAxQAlAoBGAkQAjATAbAKIgHAZQgPAQgZARQgyAkg1ALIhUASIgKA5QgJA+AHAdQAIAiAOAdQAPAdAOAIIARALIggAHQgeAHgCAAIAcATQAhAVAMACIAaAFQgGAHgKAIQgUAPgUACIglACIgOAAIBGAcIgPAQQgXAFgjADQhGAIg+gGQg+gFgwAIQgnAJgIAAQgcAFgdADQgYACgXAAQgfAAgegEg");
	this.shape_104.setTransform(40.5,-159.1,1.098,1.098,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E1DCE3").s().p("ApwGUQhpgDhHiPQgWgtgQg2IgMgsIBSgEQBcgLAwgjQAlgaB1hkQB1hkAwgiQBdhDBVgpQB/g+CIgXQCagZCWAQQCVAPBIAwQBhBBAyBFQBHBjgkBiQgnBphAAvQg9AshGgRQglgJhdgqQhQgkgvgEQhWgIh9AVQigAbhsBBQjoCKgMAHQiIBFhqAAIgHAAg");
	this.shape_105.setTransform(-73.5,93.7,1.098,1.098,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E1DCE3").s().p("ACdK2IgigTQgJAAgRgDQghgGgmgQQgtgUgZgzQgYgzAJg7QAIgwAxg2IAvgsQAAgKgIhEQgGgzgfhHQgehJgwhJQgpg+hkh9IhbhwQgcgQhngkQhBgWhFhTIg4hPQBeAWDlhVQBygrBggvIAVAiQAfAvCRDCQCpDhA7A9QA8A/BKBxQA3BUAsBSQAgA6AWBkQAVBfgDA4QgDA3gjA0QgkA1gxAUQgqASg7gEIgygIQgMAGgVAGQgqALgqABIgGABQgnAAgngSg");
	this.shape_106.setTransform(16.2,174.2,1.098,1.098,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E1DCE3").s().p("AAjK3Ig7gcQgOAEgngCQgZgBgpgUIgkgTIg0gMQgogKgbg/QgdhCAPhFQANg9BOgnIBLgbIgJg/IgajqQgWjWgNhYQgNhggoiTIgliAQgfgvB6AxQBuAtBVA2QA5AlBEAZQAiANAXAFIgFATQgFAagCAkQgDAkAJBHIAXCiQAMBWAxDHQAoCmAVBDQAQA0ABAoQACAzgTBEQgSBCgqAfQgcAVhBASQgPAEgRAAQgjAAgugRg");
	this.shape_107.setTransform(106.6,167.2,1.098,1.098,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E1DCE3").s().p("AgUPbQiVgwhsgeQiLgnhqh9Qg6hDgzhmQglhJgXhzQgiijAHi8QAIjZA7i6QA+jBB4iqQBliPBihTQAxgpAcgMIBFACQB2BYEwAmQA2AHCKANQBQAHgDAGQgEAMgPCmQgOClgBADQgCAHAKBoQAMBtAJAsQAIAlAmByIA+C6QAtCQAFCgQAIDzhnCHQhmCHiKAwQgxAShBAKIhnANQgWADgYAAQg/AAhPgWg");
	this.shape_108.setTransform(87.8,3,1.098,1.098,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#565853").s().p("AieBvIgLgdQARgrAVgfQAagmApgiQAkgfAygNQAagGASgBIBoB5IgdgIQgXgHgdgEQgkgFgbAFQgdAEgiAOQghAOgXASQgTAPgWAiIgRAeg");
	this.shape_109.setTransform(-31.8,-219.8,1.098,1.098,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#565853").s().p("AhwCdQgEgVgDgcQgFg5AKgnQAWhbAuguQAegeAjgTIBmA2QgUAEgaANQg2AYghAoQgjAqgOBJQgKA3AFAnIABAFg");
	this.shape_110.setTransform(-17,-233.2,1.098,1.098,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#565853").s().p("AgDBxQgSgWgSgfQgkg/AHgyQAGgxALgdQAFgPADgEIBcgFQgJANgJAWQgSArABArQACAtAVA+QAPAwASAjg");
	this.shape_111.setTransform(8.3,-232.7,1.098,1.098,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catBody1, new cjs.Rectangle(-167.6,-253.4,335.2,507.3), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggnAIhQgMgLAAgUIAAgsIjiAAIAAAsQAAAUgLALQgLALgSAAQgSAAgLgLQgMgLAAgUIAAhJQABgUALgLQAMgLARAAQAMAAANhCQANhAAAg2IAAhUQAAgUALgLQALgLASAAIC0AAQASAAALALQAMALAAAUIAAEMIAIAAQARAAALALQALALAAAUIAABJQAAAUgLALQgKALgSAAQgSAAgLgLgEgjHADSQAAAwgJA4QgJA5gNAcICEAAIAAjvIhlAAgAjCGjQgzg4gBhUQAAhUA0g4QA0g4BRAAQAoAAAfAMQAqAQAAAfQAAAPgJALQgJAKgPAAQgIAAgXgJQgYgJgZAAQgwAAgcAkQgZAhAAA0QAAAyAZAhQAcAjAwAAQAZAAAZgLQAZgLAIAAQARAAAKANQAJALAAAMQgBAigsARQghAMgpAAQhRAAg0g5gA8oHPQgxgRAAghQAAgQAKgLQAKgLAQAAQAKAAAaAOQAbANAbAAQAVAAAPgOQAOgOAAgWQAAgagRgLQgKgHgagEQgVgDgJgFQgNgIAAgSQAAgUAQgJQAEgCAdgIQAPgEAHgIQAKgJAAgSQAAgPgKgKQgLgLgRAAQgVAAgYAMQgYALgJAAQgQAAgKgMQgKgLAAgRQAAgcAsgQQAigMApAAQA3AAAeAcQAcAaAAArQABAbgMAVQgMAYgYAKQAfAIAUAcQASAbAAAhQAAAxgkAiQgnAjg7AAQgtAAgjgNgATOHOQgLgLAAgUIAAkPIhqAAIAAB3QAAAygOAqQgQAwgeAaQggAcggAAQgRAAgLgMQgIgKAAgPQAAgOAHgIQAGgIARgIQAVgJANgYQAPgcAAgqIAAikQABgUAMgLQAKgLASAAIC5AAQASAAALALQAMALAAAUIAAEsQAAAUgLALQgLALgTAAQgRAAgLgLgANWHOQgMgLAAgUIAAkwQAAgTAMgLQALgLASAAQARAAALALQALALAAATIAAEwQAAAUgLALQgLALgRAAQgSAAgLgLgAEcHOQgMgLAAgUIAAh0IgBAAIh3CQQgLAOgTAAQgRAAgMgNQgLgMAAgQQgBgNALgLIBbhhQgrgHgbgZQgdgbAAgqQAAh5CFAAIBeAAQAUAAAKALQALALAAAUIAAEsQAAAUgMALQgKALgSAAQgSAAgKgLgAC1CvQgOAMAAAXQAAAWAOANQANAMAXAAIA3AAIAAheIg3AAQgXAAgNAMgAlbHOQgMgLABgUIAAjHIgCAAIitDfQgHAIgKAFQgIAFgJAAQgRAAgLgLQgMgLAAgUIAAkwQAAgTAMgLQALgLARAAQASAAALALQAMALAAATIAADLIAAAAICtjjQAIgIAJgFQAJgEAIAAQASAAALALQAMALgBATIAAEwQABAUgMALQgLALgSAAQgRAAgLgLgAsTHOQgMgLAAgUIAAkMIg7AAQgSAAgJgMQgJgKAAgPQAAgPAKgKQAKgMAQAAIDFAAQARAAAKAMQAJAKAAAPQAAAPgIAKQgKAMgSAAIg6AAIAAEMQAAAUgMALQgLALgRAAQgSAAgKgLgAvFG9IgQgyIiUAAIgQAxQgKAdgcAAQgRAAgLgLQgMgLAAgQQAAgLAEgGIBrkjQAIgUAOgLQAQgNATAAQAVAAAPAMQAOAMAIAUIBoEjQAFALAAAIQAAAQgMAKQgKAKgPAAQgeAAgKgcgAvsFBIgyibIgBAAIgzCbIBmAAgA0lHOQgLgLAAgUIAAh0IioAAIAAB0QAAAUgLALQgLALgSAAQgSAAgLgLQgMgLAAgUIAAkwQAAgTAMgLQALgLASAAQASAAALALQALALAAATIAAByICoAAIAAhyQAAgTALgLQALgLASAAQASAAAKALQAMALAAATIAAEwQAAAUgMALQgKALgSAAQgSAAgLgLgA+8HOQgMgLAAgUIAAkwQAAgTAMgLQALgLASAAQARAAALALQALALAAATIAAEwQAAAUgLALQgLALgRAAQgSAAgLgLgEAi2AHWQgSAAgLgLQgLgMAAgSIAAklQgBgVALgNQAKgNAVAAICEAAQASAAALAMQAJAKAAAPQAAAPgJAKQgLAMgSAAIhdAAIAABOIBXAAQATAAALALQAJAKAAAQQAAAOgKALQgLAMgSAAIhXAAIAABRIBjAAQASAAAKALQAKAKAAAQQAAAOgKALQgLAMgRAAgAaUHWQgRAAgMgLQgLgMAAgTIAAktQAAgTALgLQAMgLARAAQASAAALALQALALAAATIAAEQICDAAIAAkQQgBgTAMgLQALgLASAAQARAAALALQAMALAAATIAAEQICCAAIAAkQQAAgTALgLQAMgLARAAQASAAALALQAMALAAATIAAEtQAAATgMAMQgLALgSAAgAVuHWQgTAAgMgLQgMgLAAgTIAAkuQAAgTALgLQAMgLARAAQARAAAMALQALALAAATIAABrIA3AAQA9AAAjAdQAlAeAAA6QABA4gjAgQghAfg4AAgAWTGPIA3AAQAWAAAOgNQAPgOAAgWQAAgUgPgMQgPgNgcAAIgwAAgAJDHWQgUAAgMgLQgMgLABgTIAAksQgBgTAMgKQAMgLATAAICfAAQASAAALAMQAJAKAAAPQAAAPgJAKQgLAMgSAAIh5AAIAABNIA/AAQA+AAAiAbQAmAdAAA6QAAA3gjAfQghAeg5AAgAJoGPIA/AAQAWAAAOgMQAOgNAAgWQAAgTgOgLQgPgMgcAAIg4AAgAQNALQgMgLAAgTIAAgtImyAAQgSAAgLgLQgLgLAAgUIAAksQAAgUALgLQALgLASAAQASAAAKALQAMALAAAUIAAEPICCAAIAAkPQAAgUAMgLQALgLASAAQARAAAMALQALALAAAUIAAEPICCAAIAAkPQAAgUAMgLQALgLARAAQASAAALALQAMALgBAUIAAEPIAOAAQARAAALALQAMAMAAATIAABKQAAATgMALQgLALgRAAQgSAAgLgLgAD2gDQgLgKAAgPQAAgIAGgNIAthQQAFgJAKgFQAJgEAHAAQAOAAAMAKQALALAAAOQAAAIgHANIgtBQQgFAJgKAEQgIAFgHAAQgPAAgLgKgASHhzQgzg3AAhUQAAhUAzg4QA0g5BRAAQBPAAA1A6QAzA4AABTQAABUgyA3Qg0A5hRAAQhQAAg1g5gATBlUQgZAiAAA0QAAA0AZAiQAbAlAwAAQAwAAAbglQAZgiAAg0QABg0gagiQgcglgvAAQgwAAgbAlgA7EhGQgwgRAAgiQAAgQAKgKQAJgMARAAQAJAAAbAOQAbAOAbAAQAUAAAQgPQAOgOAAgVQAAgbgRgLQgKgGgbgEQgUgDgJgGQgOgIAAgSQAAgUAQgIQAFgDAcgHQAPgFAIgHQAKgKAAgRQAAgQgKgKQgLgKgSAAQgUAAgZALQgYALgIAAQgRAAgJgMQgKgLAAgQQAAgcArgQQAjgNApAAQA3AAAeAdQAcAaAAArQAAAbgLAVQgNAXgXALQAfAHATAdQATAbAAAgQAAAyglAhQgmAjg8AAQgsAAgkgMgACUhIQgLgLAAgTIAAjIIgCAAIisDgQgHAIgKAFQgIAEgIAAQgSAAgLgLQgMgLAAgTIAAkwQAAgUAMgLQALgLASAAQARAAALALQALALAAAUIAADKIABAAICsjiQAIgJAJgEQAJgFAIAAQASAAALALQAMALAAAUIAAEwQAAATgMALQgLALgSAAQgRAAgLgLgAjThZIgRgyIiUAAIgQAyQgJAcgeAAQgQAAgMgKQgLgLgBgQQAAgIAFgKIBrkjQAHgTAPgMQAPgNAUAAQAVAAAPANQAOALAHAUIBpEjQAEAMAAAIQAAAPgLAKQgLAKgPAAQgdAAgJgcgAj8jVIgxibIgBAAIg0CbIBmAAgAp0hIQgMgLAAgTIAAkNIg6AAQgSAAgKgLQgIgKAAgQQAAgOAJgLQAKgLARAAIDFAAQAQAAALALQAJALAAAOQAAAQgIAKQgLALgRAAIg7AAIAAENQAAATgLALQgLALgSAAQgSAAgKgLgAs1hIQgLgLAAgTIAAkwQAAgUALgLQAMgLARAAQARAAAMALQALALAAAUIAAEwQAAATgLALQgMALgRAAQgRAAgMgLgAzYhZIgQgyIiVAAIgPAyQgKAcgdAAQgQAAgMgKQgMgLAAgQQAAgIAEgKIBrkjQAIgTAPgMQAPgNAUAAQAUAAAQANQAOALAHAUIBpEjQAEANAAAHQAAAPgLAKQgLAKgPAAQgdAAgKgcgA0AjVIgyibIgBAAIgyCbIBlAAgAYQhAQgTAAgMgLQgMgLAAgTIAAkrQAAgTAMgLQALgKATAAICgAAQARAAALALQAKAKAAAPQAAAPgKALQgLALgRAAIh6AAIAABNIA/AAQA+AAAiAbQAmAdAAA6QAAA3gjAfQghAeg5AAgAY1iHIA/AAQAWAAAOgMQAPgMAAgWQAAgTgPgMQgPgLgcAAIg4AAgAxIhAQgTAAgMgLQgMgLAAgTIAAkrQAAgTAMgLQALgKATAAIBnAAQArAAAcAZQAeAbgBAqQAAA3gxAXIAAABQAiAFAXAaQAYAaAAAiQAAA3giAfQghAeg5AAgAwjiHIA/AAQAXAAANgMQAOgMAAgWQAAgTgOgMQgPgLgbAAIg5AAgAwjkmIAqAAQATAAANgLQALgLAAgUQAAgSgMgKQgNgKgSAAIgqAAgAgEngQgegPAAgcQgBgNAGgJQAGgKANAAQARAAAMASQALASAXAAQAYAAAOgSQANgSATAAQAKAAAHALQAHAKAAALQAAAbgeAPQgbAOglAAQghAAgYgNg");
	this.shape.setTransform(10.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0056B8").s().p("EgtKALnQi7AAiDiFQiEiDAAi6IAApJQAAi6CEiDQCDiFC7AAMBaVAAAQC7AACDCFQCECDAAC6IAAJJQAAC6iECDQiDCFi7AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-334.1,-74.2,668.3,148.5), null);


(lib.boxes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.boxes2_1();
	this.instance.parent = this;
	this.instance.setTransform(-294,-268,3.147,3.147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes2, new cjs.Rectangle(-294,-268,588.5,535), null);


(lib.billet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#555555").ss(4,1,1).p("Eg7EgLXUAHagNZA14ABJQTSAbLbBOQLIBOF7COQFXCCCgDdQB0CgBWFRQBNEujQD2QjjEMogCwUgTuAGXgqYgCWQqigloNhXQhIgMlVFyQiqC5icC8QAxjTAljXQBKmtg+gRQiDgmhygqQpUjZi9lNQgEgIgFgIQh3j6BQj7QAqiGBFhcg");
	this.shape.setTransform(67.2,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgsJAREQBKmtg+gRQiDgmhygqQpUjZi9lNIgJgQQh3j6BQj7QAqiGBFhcUAHagNZA14ABJQTSAbLbBOQLIBOF7COQFXCCCgDdQB0CgBWFRQBNEujQD2QjjEMogCwUgTuAGXgqYgCWQqigloNhXQhIgMlVFyQiqC5icC8QAxjTAljXg");
	this.shape_1.setTransform(67.2,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.billet2, new cjs.Rectangle(-327.2,-125.4,788.8,307.5), null);


(lib.billet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#555555").ss(4,1,1).p("ACnv9QJwAWEdBiQChA3BtBaQBsBaBGCIQBYCrgDDiQgEEoi7DRQhbBmjQBHQgrAOguDrQgYB1gOByQhChhhNhgQiZi/g3AHQj3AilpAXQtSA0nAj4QiMhOhThiQgagfgRgdIgMgXQgkhUgTh+Qglj6BZjNQB8kfFliaQG+jAMSAbg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ANRNAQiZi/g3AHQj3AilpAXQtSA0nAj4QiMhOhThiQgagfgRgdIgMgXQgkhUgTh+Qglj6BZjNQB8kfFliaQG+jAMSAbQJwAWEdBiQChA3BtBaQBsBaBGCIQBYCrgDDiQgEEoi7DRQhbBmjQBHQgrAOguDrQgYB1gOByQhChhhNhgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.billet1, new cjs.Rectangle(-162.9,-104.5,325.9,209.1), null);


(lib.bgImg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-480,-960,3.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1, new cjs.Rectangle(-480,-960,960,1920), null);


(lib.uzelok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.uzelokMc();
	this.instance.parent = this;
	this.instance.setTransform(-97.1,57.5,1,1,0,0,0,4.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.uzelok, new cjs.Rectangle(-203.5,-111.5,186.8,338), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2Mc
	this.instance = new lib.t2Mc();
	this.instance.parent = this;
	this.instance.setTransform(73.4,-12.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},10).wait(1));

	// billet2
	this.instance_1 = new lib.billet2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-221.1,177,0.02,0.02,0,0,0,-220.1,177.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-221.2,regY:177,scaleX:1,scaleY:1,x:-221.2},10,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.3,171,15.8,6.2);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1Mc
	this.instance = new lib.t1Mc();
	this.instance.parent = this;
	this.instance.setTransform(-1.2,-16.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},10).wait(1));

	// billet1
	this.instance_1 = new lib.billet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.7,104,0.02,0.02,0,0,0,102.5,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:102.7,regY:104,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.4,99.8,6.5,4.2);


(lib.gal4onok1 = function(mode,startPosition,loop) {
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

	// Слой_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");
	var mask_graphics_1 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");
	var mask_graphics_2 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");
	var mask_graphics_3 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");
	var mask_graphics_4 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");
	var mask_graphics_5 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");
	var mask_graphics_6 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");
	var mask_graphics_7 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");
	var mask_graphics_8 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");
	var mask_graphics_9 = new cjs.Graphics().p("EgHVAkPQjngxixgxMgJ2gyyQABAFFNq1QFMq0ABAEQABAEFpBeQFpBeABAEQABAJCUCkQAQAJAEAGQAFAHAFACQAKAEAUAAQARgBBlADIBzADQAhgBBIgHQBdgKAxgNQA1gPA/ggQAzgbAlgbQA/gvAjgsQAVgcEtBpIE2JsQACAChrHUQhqHUABACQACACh9LnQh9LoAAAEIAIBAQAIBPADBWQAKESgtDmQg+FCiiC/QjKDulcARIg+ABQj9AAmdhXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-96.9,y:117.6}).wait(1).to({graphics:mask_graphics_1,x:-96.9,y:115.6}).wait(1).to({graphics:mask_graphics_2,x:-96.9,y:113.6}).wait(1).to({graphics:mask_graphics_3,x:-96.9,y:111.6}).wait(1).to({graphics:mask_graphics_4,x:-96.9,y:109.6}).wait(1).to({graphics:mask_graphics_5,x:-96.9,y:107.6}).wait(1).to({graphics:mask_graphics_6,x:-96.9,y:109.6}).wait(1).to({graphics:mask_graphics_7,x:-96.9,y:111.6}).wait(1).to({graphics:mask_graphics_8,x:-96.9,y:113.6}).wait(1).to({graphics:mask_graphics_9,x:-96.9,y:115.6}).wait(1));

	// Слой_2
	this.instance = new lib.uzelokMc();
	this.instance.parent = this;
	this.instance.setTransform(-97.1,57.5,1,1,0,0,0,4.4,1.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:47.5},5).to({y:55.5},4).wait(1));

	// wing1
	this.instance_1 = new lib.wing1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.4,-76.6,1,1,0,0,0,-39.9,51.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-39.8,skewX:180,x:47.5,y:-86.5},5).to({scaleY:1,skewX:35.9,x:47.4,y:-78.6},4).wait(1));

	// Слой_7
	this.instance_2 = new lib.gal40nokBody();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.9,-92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-102.2},5).to({y:-94.2},4).wait(1));

	// wing2
	this.instance_3 = new lib.wing2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26.1,-76.9,1,1,0,0,0,-11.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:180,y:-87},5).to({scaleY:1,skewX:35.9,y:-78.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.5,-220.8,379.6,447.3);


(lib.dog2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dogHand2
	this.instance = new lib.dogHand2();
	this.instance.parent = this;
	this.instance.setTransform(71.7,-95.3,1,1,0,0,0,88.8,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dogBody
	this.instance_1 = new lib.dogBody2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dogHand1
	this.instance_2 = new lib.dogHand1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.3,-99.7,1,1,0,0,0,84,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.dog2, new cjs.Rectangle(-175,-308.3,350,580.9), null);


(lib.catHand7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(1.4,1,1).p("AAPg/QgcgLgjgBQhFgBgaAyQgaAzBBAiQBBAhBBgeQA2gZAdgdQAfgeALgr");
	this.shape.setTransform(56.8,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoA7QhBgiAagzQAagyBFABQAjABAcALICIgCQgLArgfAeQgdAdg2AZQgeAOgfAAQgjAAgigRg");
	this.shape_1.setTransform(56.8,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1C").ss(1.4,1,1).p("AAXgSQgJAFgLAHQgTANgGAM");
	this.shape_2.setTransform(56.8,-11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADgGIAUgMIgsAlQAFgMATgNg");
	this.shape_3.setTransform(56.8,-11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1C").ss(1.4,1,1).p("AALAhQgHgIgEgMQgMgXACgW");
	this.shape_4.setTransform(45.6,-15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAANQgMgXACgWIAVBBQgHgIgEgMg");
	this.shape_5.setTransform(45.6,-15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1D1C").ss(1.4,1,1).p("AB3AAQgoAcgxAPQhgAfgrhGQgEgGgDgKQgFgVAHgS");
	this.shape_6.setTransform(58.8,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhtAEQgEgGgDgKQgFgVAHgSIDpAzQgoAcgxAPQgeAJgXAAQg5AAgdgwg");
	this.shape_7.setTransform(58.8,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1D1C").ss(1.4,1,1).p("AAtBJQgWgIgWgSQgrgjgCguQAAgFAEgIQAIgPAXgK");
	this.shape_8.setTransform(49.3,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABAvQgrgjgCguQAAgFAEgIQAIgPAXgKIA2CRQgWgIgWgSg");
	this.shape_9.setTransform(49.3,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D1D1C").ss(2,1,1).p("AAmFMQglAMgrACQhXAEgmgxQgGgLgHgRQgMgggCgYQgRgTgRggQgghAAJhAQAEgeAOgeQARgfAHgPQAWg4gjhbQgmhlBJgXQAbgJAjAGQAhAFASAOQAfAXAPAmQASAtgSAuIgaBCQAygYA4gLQBygWAlBEIAJAaQAJAggBAgIAKALQALAPAGARQAUA3giAzQgOATgLAKIADARQADAUgCATQgGA8g1AWQg2AXgkABg");
	this.shape_10.setTransform(50,-8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AinEtQgGgLgHgRQgMgggCgYQgRgTgRggQgghAAJhAQAEgeAOgeQARgfAHgPQAWg4gjhbQgmhlBJgXQAbgJAjAGQAhAFASAOQAfAXAPAmQASAtgSAuIgaBCQAygYA4gLQBygWAlBEIAJAaQAJAggBAgIAKALQALAPAGARQAUA3giAzQgOATgLAKIADARQADAUgCATQgGA8g1AWQg2AXgkABIgZgEQglAMgrACIgNAAQhNAAgjgtg");
	this.shape_11.setTransform(50,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(-22.1,9.2,1,1,0,0,0,68.9,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.catHand7, new cjs.Rectangle(-91,-44.8,167.5,107.9), null);


(lib.catHand5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AgBBTQgigNgZgkQgbgkAFgjQAEgkAhgKQAegKAgARIADACQAcAMASAcQAVAfgEAjQgDAegbARQgPAJgQAAQgMAAgLgFgAg6gzQgNAVANAfQAKAWAQARQASATATAIQAfALASgXQAQgWgHgfQgNgugqgPQgDgCgCgCQgPgIgNAAQgUAAgNAUg");
	this.shape.setTransform(-23.1,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3BED6").s().p("AACBMQgagMgWgbQgWgcgFgcQgDgRAIgQQAIgQAQgHQAagLAfASIgCABQAdAIASAcQAQAZABAeQABAdgYARQgOAKgQAAQgKAAgKgEg");
	this.shape_1.setTransform(-23.2,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("AAvCEQghgggQgVQgagfgNgfQgLgcgFgqIgEhJQAAgIAJAAQAIAAABAIIADBCQADAmAKAaQALAfAZAgQAPATAjAiQAGAGgGAGQgDADgDAAQgDAAgDgDg");
	this.shape_2.setTransform(-33.9,29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AAqBuQgogLgQgOQgYgRgKgkQgKgkAMgmQAMgmAdgaQAFgGAGAGQAGAHgGAFQgYAXgLAhQgLAiAJAgQAIAeAVAPQAOALAiAJQAJACgDAJQgBAGgFAAIgEAAg");
	this.shape_3.setTransform(-27,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1C").ss(2,2,2).p("ADViQQgBgDgXg4QgPglgEgYQgCgVgBgLQgDgSgHgLQgKgQgVgFQgUgFgTAHQghALgZAnQglA9ANA2QACAKARAPQgeAJg+gBQg+gBgfAIQgPAEgWAIQgaALgIAHQgYAVAKArQAKAtAnANQASAGApgDQAWgCAngEQgiAMgnAUQgtAYgKAPQgVAgADAmQAFA0A0AXQAYAKBGgsQA3gigEAGQgBACggAiQgiAmgLAVQgWApAkAbQAgAYApgCQA1gDA6ghQA4gfAkgsQAsg1AMhVQAPhugxiGg");
	this.shape_4.setTransform(-31.9,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhVFHQgkgbAWgpQALgVAigmIAhgkQAEgGg3AiQhGAsgYgKQg0gXgFg0QgDgmAVggQAKgPAtgYQAngUAigMIg9AGQgpADgSgGQgngNgKgtQgKgrAYgVQAIgHAagLQAWgIAPgEQAfgIA+ABQA+ABAegJQgRgPgCgKQgNg2Alg9QAZgnAhgLQATgHAUAFQAVAFAKAQQAHALADASIADAgQAEAYAPAlIAYA7QAxCGgPBuQgMBVgsA1QgkAsg4AfQg6Ahg1ADIgIAAQgkAAgdgWg");
	this.shape_5.setTransform(-31.9,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AgBBTQgigNgZgkQgbgkAFgjQAEgkAhgKQAegKAgARIADACQAcAMASAcQAVAfgEAjQgDAegbARQgPAJgQAAQgMAAgLgFgAg6gzQgNAVANAfQAKAWAQARQASATATAIQAfALASgXQAQgWgHgfQgNgugqgPQgDgCgCgCQgPgIgNAAQgUAAgNAUg");
	this.shape_6.setTransform(-23.1,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3BED6").s().p("AACBMQgagMgWgbQgWgcgFgcQgDgRAIgQQAIgQAQgHQAagLAfASIgCABQAdAIASAcQAQAZABAeQABAdgYARQgOAKgQAAQgKAAgKgEg");
	this.shape_7.setTransform(-23.2,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AAvCEQghgggQgVQgagfgNgfQgLgcgFgqIgEhJQAAgIAJAAQAIAAABAIIADBCQADAmAKAaQALAfAZAgQAPATAjAiQAGAGgGAGQgDADgDAAQgDAAgDgDg");
	this.shape_8.setTransform(-33.9,29.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("AAqBuQgogLgQgOQgYgRgKgkQgKgkAMgmQAMgmAdgaQAFgGAGAGQAGAHgGAFQgYAXgLAhQgLAiAJAgQAIAeAVAPQAOALAiAJQAJACgDAJQgBAGgFAAIgEAAg");
	this.shape_9.setTransform(-27,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D1D1C").ss(2,2,2).p("ADViQQgBgDgXg4QgPglgEgYQgCgVgBgLQgDgSgHgLQgKgQgVgFQgUgFgTAHQghALgZAnQglA9ANA2QACAKARAPQgeAJg+gBQg+gBgfAIQgPAEgWAIQgaALgIAHQgYAVAKArQAKAtAnANQASAGApgDQAWgCAngEQgiAMgnAUQgtAYgKAPQgVAgADAmQAFA0A0AXQAYAKBGgsQA3gigEAGQgBACggAiQgiAmgLAVQgWApAkAbQAgAYApgCQA1gDA6ghQA4gfAkgsQAsg1AMhVQAPhugxiGg");
	this.shape_10.setTransform(-31.9,20.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhVFHQgkgbAWgpQALgVAigmIAhgkQAEgGg3AiQhGAsgYgKQg0gXgFg0QgDgmAVggQAKgPAtgYQAngUAigMIg9AGQgpADgSgGQgngNgKgtQgKgrAYgVQAIgHAagLQAWgIAPgEQAfgIA+ABQA+ABAegJQgRgPgCgKQgNg2Alg9QAZgnAhgLQATgHAUAFQAVAFAKAQQAHALADASIADAgQAEAYAPAlIAYA7QAxCGgPBuQgMBVgsA1QgkAsg4AfQg6Ahg1ADIgIAAQgkAAgdgWg");
	this.shape_11.setTransform(-31.9,20.7);

	this.instance = new lib.ClipGroup_2_1();
	this.instance.parent = this;
	this.instance.setTransform(26.7,-0.3,1,1,0,0,0,58.5,69.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catHand5, new cjs.Rectangle(-57.9,-69.6,143.1,138.4), null);


(lib.catHand4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AhZFBQg+gPgTgWQgHgIgNgKQgUgQgMgUQgQgbgVg7QgehaALg5QAHgjAigyQARgZAGgMQANgWAHgYQAEgQgFgjQgGgnAFgTQAIghApgPQAQgHARAAQAmAAAeAfQAbAcALAoQAIAZgFAVQgDAMgKAPQgGAJABAEQABAFALANQATAWApAAQAYAAAdgJIAQgGQAwgRAYAAQAnAAAbAeQARAUAGAXQAGAXgGAXQgIAcgaAYQgaAWgnANIgYAIIAJAAQA8AAAKA5QAKA/ggAmQgZAegwALQADAGgCAJQgNAyhlAAQg5AAg7gPgAiMk2QgrARAEAuQABANAFAbQADAZgFARQgRA7g0BDQgiBAAmBxQAaBKAUAYQANANAaAXQAOAQA5AOQA5AOA2AAQBWAAAIgjQABgEgKAAQgVAAgTgCQgYgEgPgNIgKgNIAWAGQAZAHAPAAIABAAQA9gBAjgZQAtgggMhEQgEgXgOgJQgLgIgVAAQgKAAgaADQgZADgOAAQgNAAgLgCIgWgGQgOgGAdgDQAPgBAmgNIA+gWQBAgVATgrQARgqghgmQgVgXgeAAQgRAAgYAIIgpAOQgdAKgeAAQgxAAgageQgZgcAOgXQATgdgJgeQgJgjgWgXQgZgbgfAAQgNAAgNAFg");
	this.shape.setTransform(227.7,-41.4,4.703,4.703,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLE6Qh1gKgcghQgagWgNgOQgUgXgahLQgmhwAihAQA0hEARg6QAFgRgDgZQgFgcgBgNQgEguArgQQAogPAhAcQAcAZAMApQAJAegTAeQgOAXAZAcQAWAaAoAEQAiADAmgNQA5gUAMgBQAogGAYAcQAhAlgRArQgTArhAAVIg+AVQgmANgPACQgdADAOAGIAWAGQAgAGA+gKQAwgCAHAqQAMBEgtAgQgjAZg9AAQgPAAgagGIgWgGIAKAMQAPAOAYADQATADAVAAQAKAAgBADQgIAkhRAAQgTAAgXgCg");
	this.shape_1.setTransform(228,-41.4,4.703,4.703,-10);

	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(-98.2,29.7,4.703,4.703,-10,0,0,65,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catHand4, new cjs.Rectangle(-445,-230,800.1,535.8), null);


(lib.catHand3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("ABSAbQgggdgxgHQg2gHgcAbQgGAGgGgGQgHgGAGgFQAjgiA8AHQA4AHAmAiQAGAGgGAGQgDADgEAAQgDAAgDgCg");
	this.shape.setTransform(208.7,-0.4,4.703,4.703,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("Ag6BaQgEgHAHgFQApgeAZgrQAagpAHgzQABgIAIACQAJACgBAJQgIA2gcAsQgbAtgsAgQgDACgDAAQgDAAgDgFg");
	this.shape_1.setTransform(265.8,-13,4.703,4.703,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("AA0AwQgEgIAHgFQAVgOgLgVQgJgRgTgJQgRgJgVABQgfABgTAPQgXASAJAcQADAJgJACQgIACgDgIQgNgsAlgYQAhgWAsAHQAnAHAUAiQAWAjglAZIgEACQgEAAgDgFg");
	this.shape_2.setTransform(208,-24.2,4.703,4.703,-10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3BED6").s().p("AhIAfQgHgRAEgPQAEgQAOgIQAcgSAgABQAkAAAVAUQAPAPACARQABAKgEAKQgFAJgJAEg");
	this.shape_3.setTransform(207.6,-24.2,4.703,4.703,-10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("ABPA9QgIgCABgJQAEgbgNgXQgNgYgYgMQgrgUg7AnQgHAFgEgIQgFgIAHgEQBHgwA2AgQAcAQANAcQAMAbgEAgQgBAHgFAAIgEgBg");
	this.shape_4.setTransform(298.6,24.8,4.703,4.703,-10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("ABFAhQgOgTgpgVQgUgLgXAAQgNAAghAHQgIABgCgIQgCgIAIgCQAmgHALgBQAbgBATALQAxAaAUAYQAFAGgIAFQgDACgDAAQgEAAgDgEg");
	this.shape_5.setTransform(318.7,-29.7,4.703,4.703,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AjyD8Qgig5gKhPQgMhUAagvQAQgcAugvQAZgaAKgMQARgUAGgRQAFgMAFgXIAMgmQATg1ApgPQANgEANAAQAYAAAVANQAWAMANAWQANAWACAdQACAdgIAdQgIAagUAhQBNAAAxARQBHAXAxA+QAKAMADAXQAFAWgEARIgCAJQAbAmgSA3QgGAWgXAQQgUAPgZAHQgbArgbAKQgWAIgcAAQgiAAhAgSIgBAAQgOgEgUAAQgvAAhCAZQgLAEgMAAQgrAAgkg7gAg/kfQggAMgRAsIgKAkIgLAlQgLAdgvAvQgyA0gOAZQghA9AiB1QAjB2A4AAQAIAAAIgDQBGgaAyAAQAWAAASAFQA+ARAfAAQAYAAATgHQAXgIAZgrQAXgFASgMQAWgOAGgSQAPg0gggjQAMgFgDgcQgBgagJgLQgvg6hAgVQgwgQhNAAIgfAAQAjg0AJghQARg1gYgoQgKgQgQgLQgRgKgTAAQgIAAgLADg");
	this.shape_6.setTransform(227.7,-43.4,4.703,4.703,-10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjOEMQgagdgSg2QgRg0gCg0QgCg4ARgeQANgZAzg0QAugvALgdIALglIAKgkQARgsAggMQAWgIAYALQAXAKAMAVQAYAogRA1QgJAhgjA0QBfgBAuAMQBLAUAzBAQAJALACAaQACAcgLAFQAfAjgPA0QgGASgWAOQgSAMgXAFQgZArgXAIQgdALgngFQgYgEgsgMQg9gRhjAmQgIADgIAAQgVAAgWgXg");
	this.shape_7.setTransform(227.7,-43.4,4.703,4.703,-10);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-116.5,29.1,4.703,4.703,-10,0,0,66.3,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catHand3, new cjs.Rectangle(-469.2,-234,844.3,541.2), null);


(lib.catBody3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AhDAMQAAgJAIgBQA4gEA8gQQAIgDACAJQACAIgIACQg7AQg9AGIgBAAQgHAAAAgIg");
	this.shape.setTransform(77.1,102.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AAUgVQhRg2hggWIADgSQBfAZBUA9QBUA8AxBVQg0hRhWg4g");
	this.shape_1.setTransform(108.6,-106.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("AANghQiAghh9ALIgCgSQB+gHCDAlQCEAoBgBOQhhhLiFghg");
	this.shape_2.setTransform(113.1,-117);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AjwANQB0grB+ABQB9ACByAtQhzgph8AEQh8ADhvAug");
	this.shape_3.setTransform(107.9,-130.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AgjgUQBXhxBxhhIALAPQhwBahcBvQhsCCgnBzQAkh2BoiFg");
	this.shape_4.setTransform(29.8,-85.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AjIAwQBDhBBVgzQBOgvBggjQBhgkBagOIACATQjCAcikBdQhVAwhFBAQhHBEgvBRQAthSBGhHg");
	this.shape_5.setTransform(14.8,-93.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AgNgxQCRgaCZARIgDASQiUgViRAVQinAZhqBRQBohVCngeg");
	this.shape_6.setTransform(21.4,-114.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAmQgEgKAGgBQAZgDAQgUQARgUgCgZQgBgJAIAGQAHAGABAGQACAdgSAXQgSAXgcAEIgCAAQgFAAgEgJg");
	this.shape_7.setTransform(63.3,-81.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3BED6").s().p("AgEA9Qg5gZgdguIgSgpQAXgOAagBQAUAAALADQALACAIAIIAKAMQAFAFAIAPIAMAWQABgEgBgKQgEgTgNgUQAVgLAcACQAdABAOAVQAHALABAKQgCASgRAbQgJAPgUANQgTAMgUAAQgNAAgNgGg");
	this.shape_8.setTransform(59,-82.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAZQgFgBgCgDQgFgGAIgLQAOgSAWgCIALgFQAGgDAQgBQANgBAGAFQAIAIgHAJIgKAHQgVANgQAFQgQAFgMAAQgGAAgEgBg");
	this.shape_9.setTransform(62.7,-130.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AAGBgIgGgJQgFgPghgDIgwgGQgRgGgMgNQgagcAMglQAUg8BRgNQBJgNA2AfIABABIACACQAsAlgRAkQgLAYgtAZQgvAagMAWQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgCAAgDgDgAgchHQglAKgTANQgeAWADAfQACAiAnAJQAXAGAeABQAOADAJAPQAIgJATgOIAvgjQA3grghgeQgkgUgqAAQgYAAgcAHg");
	this.shape_10.setTransform(67.1,-127);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("AgCBDQgGgIgNAAQgjACgagFQgSgDgMgOQgNgOgBgRQAAgMAHgRQAIgRAKgKQALgLAcgMQAsgRAoAAQAvAAAgAWQAXAQACATQADASgPAQQgMAOgUALQhBAkgKAZQgGgRgDgFg");
	this.shape_11.setTransform(67.1,-127);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AjkCkQhOgYgBhbQgChPBgg9QBEgrBkgYQBpgaBkAaQAwAMATAJQAkAPATAaQApA5gXBDQgYBHhJAGQhLAGhWguQgPgHgBABIgLAOQgLARgGAJQgcAggtAVIAAAAIgBABQg0ATgtAAQgdAAgagIgAAWiVQhJAIhHAdQhNAggyAvQgrAoAAA8QAABCA+ARQA6AQBVggQBOgkAUhEQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAIAEADQA8A4BYgBQBggBAbhQQAghchzgpQhCgYhGAAQgZAAgYADg");
	this.shape_12.setTransform(67.2,-117.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjLCjQgfgBgZgRQgbgRgIgcQgShAAZgqQAZgoA6gjQBeg4BdgRQBmgUBeAeIAxAPQAZAJAQASQATAWAJAhQAKAigKAYQgPAjgbAYQgfAagigBQg5gCgmgLQgwgOgegfQgIAhgdAfQgcAbgiAPQgzAUg9AAIgJAAg");
	this.shape_13.setTransform(67.3,-117.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1C").s().p("AgHAaQgUgDgXgPQgRgKgLgMQgDgDgCgFIgCgEQATASAgAIQA8ASA8gUQgFAKgVAHQggAMgYAAIgLgBg");
	this.shape_14.setTransform(56.7,-68.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("AgmC9QhQgag3iIQgMgdgQgyQgSg6gCgYIAsAcQA0AaApgKQA3gOAdgQQAlgVAaglQAIgLADgCQAGgGAHADQARAHACADQARASAXAIQAYAHA0AJQADAAgXAPIgbATQgeAfgWB1QgUBugnAZQgfAVghAAQgTAAgTgHg");
	this.shape_15.setTransform(60.4,-93.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1C").s().p("AiWGIQhIgMg4gcQgwgdgZgLQgsgTgkALQgEABgFgHQgEgHABgDQAFgSAPgXIANgTQg0ACgiAIQg6AOgmAkQgEAEgFgIQgFgHABgEQACgNADhFQABggAHgYQgUAHgWANQgMAIgrAfQgFAEgFgJQgFgIACgEQAWhFAdhHQAnhUBBg8QBEg9BXgcQAlgMA/gIQBNgKAYgFQAwgLA7gaQAigQBDgiQBrgyBpgTQBzgUBrATQBvAVA2AqQATAOAYAfQAgApAIAJQAJARgJgDQgMgDgWABQgLABgIAAQAfAtAJA1QAKBAgaA9QgBAEgGgFQgEgEgCgCIgNgjQgDAmgPAvQgTA5gfAyQgDAFgGgGQgEgGgCgFQgDgagLgYQhWB6hhA9QhVA2iDAkQhuAfhiAAQguAAgsgGgAmCEbQAWAFAeAQIBCAjQAmASAhAIQCIAhCpgqQCLgiBohDQBthHBOhyQAEgGAJAOQANAXAHAYQAZgrAPguQAVg9gDgzQgBgHAHADQAFAEACAEIAUAyQARgxgHgyQgIg5gmguQgCgDgCgGQgCgIAGACQAMAEAWgCIATAAIgdgkQgbghgWgNQhWg0iGgGQjDgKjaB3QhSAshTAPIhaAMQg2AHgjALQhYAbhEA9QhCA8gmBUIgBABQgXA5gRAvIAggWQAhgUAfgGQAEgBAFAIQAEAHgCAEQgOAdgCAxIgCAyQAigaAwgLQArgKBDgBQAFAAAFAHQAEAGgCAFIgZAkIgLATIAJgBQANAAAMADg");
	this.shape_16.setTransform(55.8,-94.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkCFhQg7ghgegOQg0gaglAOQADgQASgZQAVgdADgGQhCAAgtALQg9AOgjAkQAGgWgCg8QgBgtASggQgZAFgUALQgVALg0AmQAGgVANghQANghAGgVIAOgfQArhkBUhBQBThABtgTIBUgLQA2gHAcgJIA5gTQAdgKAbgPQCdhZCYgUQBTgLBRALQBVALBJAkQAhAQAQAVQAoAzAVAWQgLgHgWAFQgXAFgLgHQApAtAKBAQAJA/gaA4IgbhGQAFAmgYBKQgYBHgYAkQgDgkgVgiQhNByhYA+QhFAvhzAoQhyAohtAHIgmABQhrAAhWgkg");
	this.shape_17.setTransform(55.8,-94.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAiQgKgBgGgKQgHgKACgNQABgNAKgKQAKgLAKABQAKABAFALQAFALgBAMQgCANgJAKQgIAJgIAAIgCAAg");
	this.shape_18.setTransform(72.8,-140.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAjQgLAAgGgLQgHgLACgNQABgOAKgLQALgLAJABQALABAFALQAFALgBAOQgBAOgJAKQgIAKgJAAIgCgBg");
	this.shape_19.setTransform(28.7,-128.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1C").s().p("AgjAwQgQgRgCgYQgCgXASgWQASgWAVgBQAWgBAOASQAOARACAZQABAXgPAUQgQAUgWABIgCAAQgUAAgPgOg");
	this.shape_20.setTransform(76.3,-136.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1C").s().p("AgjAvQgQgQgCgYQgBgWASgWQARgWAVgCQAWgBAOASQAOARACAZQABAXgPATQgQAUgWACIgCAAQgUAAgPgPg");
	this.shape_21.setTransform(32.3,-126);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1C").s().p("AABCAQhAgSgfhoIAAAAIgBgCQgKgwAbgtQAeg0A0AQQApAMAdAyQAaAugCAsQgBApgbAiQgXAcgcAAQgJAAgJgCgAhMhKQgUArAJAnQAdBjA7AMQAaAFAYgTQAVgQALgbQAVgzgdg8QgfhAg1gGIgIAAQglAAgWAtg");
	this.shape_22.setTransform(34.4,-124.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#36AB69").s().p("AASB9QgdgCgbgXQgjgggRg+QgOg0AfgpQAXgeAcgGQAegHAcAaQApAnANAsQALAmgKAnQgGAXgYAYQgXAWgSAAIgCAAg");
	this.shape_23.setTransform(34.3,-124.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1C").s().p("AgiBjQgfgSgMgeQgKgZAEgmIAAgBQAIgwAYgaQAdgiArASQAjAOASAqQAQAngIAmQgKAsggAWQgTAOgUAAQgQAAgTgLgAgYheQgnANgMBLIAAAAQgDAbADARQAEAXARAPQAbAaAbgCQAbgBAUgWQASgTAIgeQANgwgdgsQgXgighAAQgLAAgOAEg");
	this.shape_24.setTransform(77.6,-137.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#36AB69").s().p("AgZBjQgjgTgLgVQgNgYAFgtQAEgaALgZQANgcAOgHQAlgQAeARQAcAPAPAlQAQAogNAoQgLAkgYARQgOAMgUACIgIABQgOAAgKgGg");
	this.shape_25.setTransform(77.6,-137.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1C").s().p("AgaC5QgngagegvQgegwgLg1QgZh+Bgg1QBog7A5CVQAdBNARCTQAAAJgHgGQgIgGAAgGQgQiLgYhCQgwiFhcAzQhWAwARBwQAQBqBOAzQAFAEACAJQACAGgDAAIgEgBg");
	this.shape_26.setTransform(34.7,-131.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AheBnQgghFgFgjQgNhdBKg8QAWgSAhgBQAhgBAUARQAXATARAfQALAUALAiQAIAXAMBIQAKA9AEAlIihAiQgwgdgTgqg");
	this.shape_27.setTransform(34.7,-131.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1C").s().p("AgOAzQARgdADgPQAFgVgCgUIgDgQIAEAGQADAJABAKQADAwgJAQQgHAMgLAAIgEAAg");
	this.shape_28.setTransform(89.5,-138.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1C").s().p("AgXADQgJgMgIgWIgGgTIAIAPIAQAXQAGAJARAQQARAQADACIAaAOIgcAGQgXgSgTgeg");
	this.shape_29.setTransform(25.2,-119.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1C").s().p("AgTAKQgJgVAHgYQACgFADgFIAEgFQgEANABAUQABATAFALQAKAWAYAQQgegKgOgfg");
	this.shape_30.setTransform(9,-125.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1C").s().p("AAFBDQgcgjgEgbQgEgSAHgbQAFgUAIgNQABgEAEgEIAEgDQgLAXACAhQADA+AmAzQgLgBgOgRg");
	this.shape_31.setTransform(13,-129.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1C").s().p("AgQAhQgZgGgNgTQgGgJgBgMQgBgMAGgKIARABQAbAKAbAFQAYADAIAFQAIAFAEAGQAEAIgCAIQgFAPgaADIgXACQgNAAgKgDg");
	this.shape_32.setTransform(72.8,-166.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1C").s().p("AgrA3QgLgEgEgMQgEgMAFgKIAKgIQANgGAPgQIAXgcQAOgOAKgBQARgBAKAUQAHAOgCALQgBALgOANQgVAXgcAOQgPAIgMAAQgGAAgGgCg");
	this.shape_33.setTransform(24.2,-162.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1C").s().p("AAtB/IhagHQAjgpAWgtQAQghABgVQACgigWgTQgOgLgVAAQgUABgRAKQgYAOgfApIgKAGQAphIAtgcQAegSAhgCQAkgCAbARQAbATAMAlQAKAhgGAkQgGAegSAjQgKAVgZAoQgHgGgQgBg");
	this.shape_34.setTransform(47,-174.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1C").s().p("AiXAAQAlguA5ghQApgXAggFQArgHA0ARQAiAMA4AdQgpAsggAsQgCgJgMgJQg4gqg2gKQgegGgeAGQgfAHgXATQgTAPgZAmIgrBBIgDAEQAIg6Apg0g");
	this.shape_35.setTransform(50.2,-186.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1C").s().p("AhJB6QgXgXgKgOQgPgXgBgWQgEg0AighQAngkAkgYQAlgZAvgTQAogPAQALQhkAxgrBCQghAwADA2QABAZASBDIgEADg");
	this.shape_36.setTransform(33.2,-191.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1C").s().p("AhOCNQgHAAgEgIQghg8ANhYQAOhgA+gXQBSgfArB3QAQAtAEA1QAEAygJAeQgCAFgHgIQgHgIACgFQALgkgJg0QgGgjgRgyQgZhIg4AKQgkAGgWAhQgaAmgDBCQgDBEAWAoQAFAJgGAAIAAAAg");
	this.shape_37.setTransform(78,-144.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhiBVQgGgrACgoQAIhzBOgQQA4gMAdBAQAPAiAMA8QAOBLgMAgIi3AIQgHgKgGglg");
	this.shape_38.setTransform(78.2,-144.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1C").s().p("Ah3KSQhygShZg2QgegTglgjIg+g8IgFgIQgDgGgCgBQgDgCgSAMQgQAKgIAHQgPAOgSAaIgdAqQgDAFgGgHQgFgGAAgEQgNhBgEgiQgGgrAFgiQgWALgOATQgLAPgQArQgCAFgGgHQgGgHAAgDQgFhoAGhQQAGhiAXhTQAQg9AlhMIA7h3QgsgPgfgQQgwgYgegiQgYgagbgtIgshMQgDgFABgFQABgFAGAFQATAPAgANQASAIAlAMQA/AWAgAFQA+AJA/glQAlgWBGg4QCHhhC2gUQCMgPDGAgQA9gHA0gdQA3gfAog1QAEgFAGAIQAGAHgBAFQgLBGgiA3QghA1g0AkIAOAIQAXAMAFAEQATANAbAWQArAlArAyQBEBPBaCVQACACABAFQABADgCACQAcArAUAvQADALgFgBIgXgBQgQACgBAMQgBAFAaAjQACACABAEQACAFgDABQgbAKgJAYIAAACQgyDUi8CLQisCBjlAcQg0AHgyAAQg6AAg2gJgAnFHAQBdCUDPAnQCtAgC8gyQC8gxCHh5QCOh+ArisIABgEIAAAAQAEgSAJgLQAIgKAOgGIgNgUQgNgTgEgNQgCgFADgDQAEgEATgCQASgCADgFQAEgJgWghIgdgoQgCgCgBgFQAAgEACgBQgohBgcgpQgrhAgqgvQgzg7g5grIglgXQgYgNgKgMQgDgCgCgFQgCgFADgCQBfg8AfhwQghAjgpAXQg5AghDAHQgEAAgDgEQhvgShSgDQhxgFhcATQhQAQhRAuQg8AhhTA/QgzAngtANQg0AOg5gQQhAgRgcgLQglgOgagQIAzBTQAeAuAyAeQAnAYA/AUQAFACADAGQAEAGgCAEQgVAsgsBWQgkBLgRA7QgWBSgHBiQgDA+ABBMQAJgTAIgKQATgbAkgKQAEgBAFAHQAEAGgBAEQgLAoAHA5QADAZAJAtQAZglAPgRQAfgkAmgFIABAAQAEAAAFAHg");
	this.shape_39.setTransform(42.6,-121.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#186FAE").s().p("AipJ/QiogohtiCIgLgSQgkABgfAlQghAvgRAWQgMg/gEgkQgIhAALghQggAGgcAjQgJALgEAPQgGAWgDAHQgKi/AeiFQAdiFBSiLIARgiQiJgqgshGIhMh6QAQAPBNAdQBDAYAfAHQBUARBQg5QAXgRA0gpQAzglAxgYQBYgrBGgNQAjgHAwgCIBSgDQA2gCBDAIQAoAEBPANIgIABQBBgEA6ghQA6ggAmg1QgKBEgiA4QgkA7g4AhIACADQBmA4BbBtQA/BNBTCIIgGABQAjAwATAzQgXgFgYAKQAAAAgBABQgBAAAAABQAAAAgBABQAAAAAAAAIABADIAiA3QgQAEgLAMQgLANgCARIADgIQgVBdg2BWQg1BShMBBQiQB4jPAuQheAUhXAAQhTAAhNgSg");
	this.shape_40.setTransform(42.6,-121.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1C").s().p("AgXCkQgHgIACgGQAhhuAHgrQAOhigqgzQgFgGACgGQACgHAHAIQAxA8gMBmQgGAygjB1QAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgDAAgEgEg");
	this.shape_41.setTransform(96.7,-171.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1D1D1C").s().p("ABVDFQhTgwgsh9QgehQgRiIQgBgIAHAGQAIAFABAGQAQCBAaBIQAnB2BMAsQAFADACAJQABAGgDAAIgDgBg");
	this.shape_42.setTransform(-26.6,-141.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3BED6").s().p("AhiBKIAWgJQAbgOAXgWQBJhEAIh1QBBBHgeCAQgPBAgdAzg");
	this.shape_43.setTransform(89.3,-171.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3BED6").s().p("AgWB4QhOhngVjHQBKBdBbBGQAvAhAfARIhHCYQgjgMgmgzg");
	this.shape_44.setTransform(-21.9,-141);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag4CuQg/AAgxgTQhEgbgwg9Qg7hKAjhDQApgnB2geQB0gdBvgCQhUAJhcAlQgoARgXAVQgLAKgDAIIA1ggQBHgiBVgMQBYgMBLgCQA1AMAgAYQAnAfABAuQAAAjgIATQgIAUgSAIQgJgvgtglQgPgNgNgFQgLgFgUgDQAZAKARANQAaAWAPAZQAQAbgDAaQgEAkgXAXQgSATgtAXQgSAKgiAAQgcABgbgEQAggygbhFQgghNhVgBQAHADASAEQARAFASANQAhAUANA1QAOA5ghAhQgfAghHAAIgDgBg");
	this.shape_45.setTransform(102.3,181.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAMCvQh0gFgegiQgfgiAQg5QAPgzAigTQATgMASgFIAYgGQhWgCgmBFQgiA+AeAxQgZAEgmgfQgogigDgkQgDgqACgWQAFgoAWgQQASgOAYgIQgTACgMAEQgMAFgQAMQgWARgHAtQgGAqAOAZQgtgWAFhRQADguAtgeQAlgZA3gKIA7ADQAoACAqAHQBOAOBJAZIAVAHIgUgJQhagphUgMQBvAGBzAiQB0AjAnApQAhBDg+BIQgzA8hEAXQgnANhHAAIgtgBg");
	this.shape_46.setTransform(-3,187.8);

	this.instance = new lib.ClipGroup_0_1();
	this.instance.parent = this;
	this.instance.setTransform(55.1,63.2,1,1,0,0,0,108.7,159.9);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58.5,65,1,1,0,0,0,100.8,86.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catBody3, new cjs.Rectangle(-159.3,-207,323,430.2), null);


(lib.catBody2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(1.1,0,0,60).p("AAAAAIAAAA");
	this.shape.setTransform(63.6,-512.7,4.703,4.703,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D1D1C").ss(1.1).p("ACHAZIgIgBQgkABgfgXQgcgTgUgkQgNgagGgHQgMgSgQgGQgMgFgQACQgWACgTAPQgSAOgLAUQgTAlAFAyQAEAyAbAYQAPAOAWACQAXABAOgOQAEgEAIgKQAHgJAHgBQAIgCAIAFQAFACAKAHQAYANAtgGQAdgEAPgKQALgHAFgKQAHgLgCgLQgCgOgKgEQgBAAgBgBQgCgBAAgC");
	this.shape_1.setTransform(-0.8,-513.3,4.703,4.703,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3BED6").s().p("AhPBzQgWgCgPgOQgbgYgEgyQgFgyATglQALgUASgOQATgPAWgCQAQgCAMAFQAQAGAMASQAGAHANAaQAUAkAcATQAfAXAkgBIAIABIAAAAIACABQAKAEACAOQACALgHALQgFAKgLAHQgPAKgdAEQgtAGgYgNIgPgJQgIgFgIACQgHABgHAJQgIAKgEAEQgNANgVAAIgDAAg");
	this.shape_2.setTransform(-0.8,-513.3,4.703,4.703,-10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AAYAqIhFgeQgRgIgEgFQgIgKADgNQADgNALgHQAIgGAOABIAZACIA0AbIgOAIQAPAAANAKQAMAKAEAOQACAKgDAGQgFAMgRAAQgJgBgQgHg");
	this.shape_3.setTransform(132.7,-840.3,4.703,4.703,-10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AhAAvQgHgGgBgKQgCgKAEgJQAGgMATgPQAlghA9gEIAHARQAIgCAEAJQAEAIgFAHQgDAGgIAEIgPAFQgaAKgYATQgUAPgHADQgIAEgHAAQgJAAgIgGg");
	this.shape_4.setTransform(-140,-784.8,4.703,4.703,-10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AAYgTQhLhAhggiIAGgSQBcAlBPBIQBOBGAoBcQgshZhQhCg");
	this.shape_5.setTransform(291.3,-530.6,4.703,4.703,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AARggQh9gwiAgEIAAgTQCDAJB9A1QCBA1BYBcQhdhah/gug");
	this.shape_6.setTransform(310.2,-581.9,4.703,4.703,-10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("AAGgZQh9gLh2AjIgFgSQB6gfB/AQQB/AQBuA7Qhwg3h+gLg");
	this.shape_7.setTransform(281.4,-641.1,4.703,4.703,-10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AgagcQB3hXCHg9IAIARQiIA5h5BSQiNBghJBlQBFhoCMhlg");
	this.shape_8.setTransform(-149.4,-439.3,4.703,4.703,-10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("AjQgFQBUguBigZQBbgYBmgHQBpgHBcALIgDATQjDgbi+AsQhhAWhVAsQhaAthEBDQBDhEBZgwg");
	this.shape_9.setTransform(-216.7,-488.2,4.703,4.703,-10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AAAgiQirgXh8AzQB9g3CsASQCWAQCQA7IgIARQiLg+iVgVg");
	this.shape_10.setTransform(-174.5,-587,4.703,4.703,-10);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtAPQgEgDgCgCQgCgIAKgIQASgOAWACIAMgCQAFgBASACQANADAFAGQACAEAAAFQgBAEgEADIgMAGQgUAGgVADIgKAAQgSAAgLgGg");
	this.shape_11.setTransform(85.5,-646.1,4.703,4.703,-10);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AgRBgQgFgHAAgDQgCgUgngNQgugPgKgLQgOgSgCgTQgCgUAMgUQAhg3BVAGQBLAFAtArIAFAFQAtA7g/AgQhWAegWAZIgDABQgCAAgEgFgAgThMQgsACgVANQgfATgBAdQAAAeAnASQAVAKAcAIQALAGAGAPQAVgOA/gZQBEghgdglQgsgqhHAAIgQABg");
	this.shape_12.setTransform(100.9,-632.1,4.703,4.703,-10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AgUBCQgEgKgNgDQgjgGgYgLQgRgIgKgQQgJgQADgRQADgMALgQQALgOANgJQAOgIAegFQAvgHAoAKQAvAKAbAeQATAWgCATQgEAgg3AQQhIATgPAXQgCgRgDgGg");
	this.shape_13.setTransform(101.6,-631.7,4.703,4.703,-10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1C").s().p("AiuCSQg1gUgjgrQgjgrgIg3QgCgJAIAGIACABQAAgcAPgVQAJgOAegaQAbgXAygNQAdgHA3gGQBagKBYAVQBfAYBBA4QAVASAOAcQAPAcABAbQABAhgcAdQgXAXgkAQQhAAbgzgeQgQgJgMgWIgNgbQgtA0g7AUQggAKgfAAQgkAAgkgNgAjsBeQAtAnA+AGQA2AGAygYQAtgWAkgtQADgDAEADQADACACAEQAHAMALAXQALATARAIQAvAXA8ggQBggygmhNQgbg3hwgrQhvgqiIAYQguAIgRAFQgkAKgVAQQg4AsABApQABAHgIgEIgBgBQAJA6AtAog");
	this.shape_14.setTransform(75.3,-584.3,4.703,4.703,-10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AicCPQg5gPgmgpQgpgqgGg4IAJAAQgBgaADgHIAYgZIAegfQAOgMAXgHQBrgiBfAFQBrAFBWAzIAtAbQAXAPALAVQAQAeAEAWQAFAdgPAVQgXAfgsAVQgvAXgigJQgpgLgJgNQgKgZgQgbQgsA5g9AUQggAKgfAAQgaAAgagHg");
	this.shape_15.setTransform(75.3,-584.3,4.703,4.703,-10);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1C").s().p("AgWAvQAXgYAHgOQAPghgDgYIACAHQACAJgCAKQgIAxgMANQgGAJgKAAg");
	this.shape_16.setTransform(215.2,-684.2,4.703,4.703,-10);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1C").s().p("AAFB+IhWgeQAsgfAignQAXgaAHgXQALghgSgYQgLgPgUgFQgUgEgUAFQgbAIgoAhIgMACQA6g7A1gRQAhgKAiAGQAkAHAVAZQAXAaACAmQACAkgQAhQgNAdgaAeQgRATgiAgQgFgIgQgFg");
	this.shape_17.setTransform(-4.7,-846.9,4.703,4.703,-10);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1C").s().p("AgGAfQgbgGgjgeQgQgOAAgMQAwApBAAGQAiADAXgKQgFAGgGADQgOAHgUAEQgQADgNAAQgKAAgHgBg");
	this.shape_18.setTransform(112.4,-401,4.703,4.703,-10);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D1D1C").ss(1.1).p("ABqAbQgCAUARAYQAQAWgCAFQgPA9hSADQhYADhjhJQgjgZgUgrQgKgWgRg8QAEAAAJAEQAJAEAEADQAtAdAkgKQAYgHA9giQALgEAxgqQAygoAMgFQAPgFA2AZQAmASAcARQgZgBgbAQQg1AfgHBWg");
	this.shape_19.setTransform(86.9,-503.5,4.703,4.703,-10);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1C").s().p("AiOBcQgjgZgUgrQgKgWgRg8QAEAAAJAEIANAHQAtAdAkgKQAYgHA9giQALgEAxgqQAygoAMgFQAPgFA2AZQAmASAcARQgZgBgbAQQg1AfgHBWQgCAUARAYQAQAWgCAFQgPA9hSADIgHAAQhVAAhfhGg");
	this.shape_20.setTransform(83.7,-502.9,4.703,4.703,-10);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1C").s().p("AkDE9Qg6gZgpgjQgoglgWgQQgngbglADQgFAAgEgHQgFgHACgEQAJgRAUgSIATgSQgzgJgkABQg8ACguAbQgFADgFgIQgFgIACgEQAGgOAQhCQAIggAMgVQgUACgWAIQgOAFgyAVQgFACgFgHQgFgIACgEQAkg/AthAIAAAAIAAAAQBQhxAugqQBShMBfgCQBMgCBXAaQAgAJAiARQAdAPAHACQATAGAUgHIAdgNQASgJAKgEQB7gqB+gEQCHgEBzAqQBwAnA8A9QATATATAnIAfA9QADAFgBAFQAAAFgGgDQgKgGgWgDQgNgCgIgCQAYA0gDA5QgDBAgmA2QgEAFgFgHQgFgGgBgFIgFgeQgLAmgYAoQgeA0gqAsQgEAEgFgIQgFgIAAgEQABgagFgZQhlBdh8AvQh7AtiXADIgOAAQiWAAh0gzgAm7BeQAFABAEAGQAEAHgDAEIggAfIgRASQAoAGAsAkIAvAoQAcAYATALQB7BFCzABQCOAAB3gjQCCgnB/h4QAEgDAFAGIAFAIQAHAYACAZQAgglAZgqQAig6AIgzQABgHAHAHQAGAHABAEIAIAvQAagsAEgyQAEg8gdg3QgCgEABgDQABgEAFACQAKAGAXADIAUAFIgYgwQgUgngWgTQhUhIiEgfQh7geiPAUQg1AHg5APQgVAGgoARQgoARgVAFQgbAHgmgUQg5gdgGgCQhZgbhNABQhdAChRBLQgtAphPBwQghAxgdAwIAhgOQAlgNAfAAQAFAAAFAHQAFAHgDAEQgUAagMAwIgNAyQAmgRAwgCIAGAAQAsAAA/ANg");
	this.shape_21.setTransform(17.4,-467.9,4.703,4.703,-10);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhxFeQiDgUhchAQg0gtgbgVQgugkgoAGQAGgPAXgWQAdgZADgFQhDgNguABQhBACgpAcQAKgWAMg7QAIgsAYgcQgagBgWAHQgXAHg8AaQALgTATgeQAVgeAKgTIAUgdQBXh6AvgqQBRhHBlAEQA0ACA+AOQBRARAfAbQAXAUAigMQAVgIAqgUQCxg4CbAMQBWAHBPAcQBSAeBBAyQAdAYAMAYQAcA6ARAbQgJgJgXAAQgYAAgKgJQAgA2gEBBQgEBAglAyIgNhLQgEAmgoBGQgmBBgfAgQADglgMgmQhlBhhmAqQhNAhh8AQQg7AHg5AAQg7AAg5gIg");
	this.shape_22.setTransform(17.6,-467.8,4.703,4.703,-10);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAiQgLgBgGgKQgGgLABgMQABgNALgLQAKgKAKAAQAKABAFAMQAFAKgBANQgBAOgKAKQgIAJgIAAIgCgBg");
	this.shape_23.setTransform(164.7,-711.8,4.703,4.703,-10);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLAiQgKgDgEgMQgEgMAEgNQAEgNANgJQALgJALAEQAKADADAMQADAMgFANQgEAOgLAIQgIAGgGAAIgHgBg");
	this.shape_24.setTransform(-58.4,-660.2,4.703,4.703,-10);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1C").s().p("AgkAwQgRgQgBgZQgCgYATgWQASgXAWgBQAVgBAPASQAOASACAaQABAXgQAVQgQAUgWACIgCAAQgUAAgQgQg");
	this.shape_25.setTransform(145.9,-684,4.703,4.703,-10);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1C").s().p("AgFBKQgXgBgPgWQgPgVACgdQACgcAWgYQAVgYAXACQAWABANAYQAMAWgCAdQgCAdgTAWQgSAUgUAAIgDAAg");
	this.shape_26.setTransform(-72.4,-632.3,4.703,4.703,-10);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1C").s().p("AAMCAQhGgRgdhvIgBgBQgKg5AigpQAkgrA4ASQAlAMAPArQAKAcABAxQABA2gNAgQgPAkgjAAQgIAAgJgCgAAEh2QgvAAgYAnQgVAiAHAtIABABQAdBuBCAJQBAAIAEhnQAGiPhUAAIgBAAg");
	this.shape_27.setTransform(-76.1,-639.2,4.703,4.703,-10);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#36AB69").s().p("AAWB8QgegDgagZQgighgPg/QgOg2AigpQAWgbAngCQAkgCAYAWQAXAUAFBDQAFA9gMAnQgNAqglAAIgHgBg");
	this.shape_28.setTransform(-76.3,-638.8,4.703,4.703,-10);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1C").s().p("AgjBlQgggTgLgeQgKgaAEgnIAAAAQAIgxAYgbQAeghAsARQAkAPARArQARAngJAnQgKAtghAXQgTANgUAAQgRAAgTgLgAgYhgQgoAOgNBLIAAAAQgDAcADARQAEAYARAQQAcAaAcgCQAbgBAVgWQASgUAIgeQANgxgdgsQgXgkgiAAQgLAAgOAEg");
	this.shape_29.setTransform(151.3,-692.3,4.703,4.703,-10);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#36AB69").s().p("AgaBlQgjgTgMgWQgNgZAGgtQADgbAMgaQANgcAPgGQAlgRAfARQAcAQAPAmQARAogOAqQgMAkgYARQgPAMgTACIgIABQgPAAgKgGg");
	this.shape_30.setTransform(151.3,-692.1,4.703,4.703,-10);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1C").s().p("AgdC8QgngbgegxQgegxgJg2QgXiABjg1QBrg6A2CZQAcBNAPCYQAAAJgHgGQgIgGgBgGQgMiOgXhEQguiJhfAyQhYAvAOBzQAOBtBOA1QAFAEACAJQABAGgCAAIgEgBg");
	this.shape_31.setTransform(-75.5,-655.1,4.703,4.703,-10);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhhBoQgfhHgEgkQgLhfBNg8QAWgSAiAAQAhAAAVASQAXAUAQAfQALAVALAiQAHAYALBKQAIBAADAkIikAfQgwgfgTgqg");
	this.shape_32.setTransform(-75.1,-654.2,4.703,4.703,-10);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1C").s().p("ABRCQQgHgJADgFQASggADg0QACgigGg1QgEgogLgSQgRgcgnAAQgegBgbAYQgkAfgTBFQgSBEAOAvQADAJgIgDQgHgEgCgHQgUhBAehUQAhhbBAgMQBcgQAUB+QAIAxgHA2QgGAzgQAdQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgDAAgEgFg");
	this.shape_33.setTransform(146.8,-713.7,4.703,4.703,-10);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhkBsQgFgMACglQACgtAMgnQAghxBRABQA6AAAQBFQAIAlgBA/QgCBNgTAdg");
	this.shape_34.setTransform(146.8,-713.6,4.703,4.703,-10);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1C").s().p("AgTASQgQgRgBgZQAAgFACgHIABgFQABANAHATQAIASAJAJQARASAcAGIgDAAQgfAAgWgYg");
	this.shape_35.setTransform(-160.2,-613.9,4.703,4.703,-10);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1C").s().p("AALBFQgigegKgaQgHgRABgdQACgVAEgOQABgEAEgFIADgEQgHAZAIAhQARA+AvAqIgCABQgMAAgPgNg");
	this.shape_36.setTransform(-141.4,-632.6,4.703,4.703,-10);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1C").s().p("AANJ2Qi6gEiYhOQiqhWg9iXQgiAAgiAaQgWAQgoAnQgEAEgFgIQgEgHAAgEQABhEADgiQADgrAMghQgWAGgRAPQgOANgZAnQgEAFgGgIQgGgIABgEQARhmAWhNQAahdAmhMQAeg7A1hGQAegmA7hKQgqgZgcgXQgrgkgXgoQgSgggRgyIgchUQgDgHAFAAQAEgBAEAEQAPATAdAUQAQALAiAUIAtAbQAbAPAWAHQA4ATBDgWIB0g0QBRglBUgPQBYgPBTAKQCdATC+BKQA+AGA6gSQA+gUAzgsQAEgEAFAJQAFAIgBAEQgaBDgtAwQgtAvg8AYIAIAHIATAQQAaAbAZAhQAfAoAgA5QAgA6AeBJQAWA2AdBRQABADgBADQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAVA1AJA0QAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQglgMgBAVQAAAJAOAlQACAHgFAAQgcAFgOAWIgBACQhYC6jFBlQisBXjOAAIgXAAgAotEjQAIABADALQA/CqDLBRQCrBEDIgOQDCgNCbhcQChhfBPifIABgCIAAAAQAIgRAHgHIAYgNQAGgLgIgTQgLgbAAgFQAAgEABgBQAGgDAQACQAQABACgCQALgMgMglIgUgwQgBgDAAgDQAAgEAFAAQgCAAgPgrQgNgjgSgsQgchEgagwQgqhNgvg3QgGgIgbgZQgWgTgJgPQgGgLAEgBQBAgYAvgxQAdgfAVgnQgmAagsANQg6AThAgGIgCAAIgHgBQgEAAgDgFQhwgrhPgVQh1gehiACQhRABhcAfQg4AShsAxQg1AYgtACQgyACgxgYQg7gdgfgTQgkgXgYgWIAfBUQAVA5AqAqQAkAkA8AiQAEACADAGQADAGgCADIhcBzQg0BDgdA4QgoBNgcBgQgRA9gOBLQALgOAIgIQAZgXAlgCQAFgBAFAIQAFAHgDAEQgTAlgFA7QgDAagBAsQAfgdASgOQAkgaAiAAIAIAAg");
	this.shape_37.setTransform(-5.9,-592.3,4.703,4.703,-10);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#186FAE").s().p("AkxImQifhLhRiZIgIgUQgjgHgnAeQgWASgrApQAChBADglQAGhCASgeQghgBgkAdQgLAJgHAOQgKAUgFAHQAfjAA5h9QA6h+Bvh7IAYgeQh/hHgehPIgxiKQANATBGAsQA+AoAeANQBPAjBcgoQAbgMA8geQA7gbA1gNQBfgYBKACQAlAAAvAIIBUAPQA2AKBBAVQAoAOBLAdIgJgBQBCAKBBgUQBBgVAxgsQgYBCguAwQgwAzhAAWIACADQBZBNBECAQAvBaA2CYIgGgBQAXA2AJA6QgWgKgZAFQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABAAAAABIAXA9QgRAAgOALQgOAKgFAQIAEgHQgpBZhIBKQhGBHhaAwQioBZjYACIgFAAQi8AAiThHg");
	this.shape_38.setTransform(-6,-592.4,4.703,4.703,-10);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1C").s().p("AgwChQgHgIADgFQA6hpAQgrQAiheghg/QgFgJAHABQAHAAAEAIQAkBEgiBhQgQAxg8BrQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgDAAgEgFg");
	this.shape_39.setTransform(247,-845.2,4.703,4.703,-10);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1C").s().p("AAtDVQhIhCgSiFQgNhWAMiLQAAgHAIAIQAHAHAAAGQgLCEAKBNQAPB/BAA7QAFAEABAJQAAAEgDAAQgBAAgEgCg");
	this.shape_40.setTransform(-336.7,-726.4,4.703,4.703,-10);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3BED6").s().p("AhwAqIAZgEQAdgIAcgRQBXgzAgh1QAzBVg6B5QgdA9gnAsg");
	this.shape_41.setTransform(221.6,-843.2,4.703,4.703,-10);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3BED6").s().p("Ag8B6Qg4h3AVjKQA2BsBMBZQAnArAcAXIhmCIQgggTgcg7g");
	this.shape_42.setTransform(-309.5,-733.1,4.703,4.703,-10);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1D1D1C").s().p("Ah9AbQAQgwAjgqQAYgdAagPQAfgSAugCQAegBA1AHQgSAtgOAuQgDgGgNgEQg5gSgsAJQgaAEgWAOQgXAPgMAUQgKASgIAmIgQBEQgMgwARg1g");
	this.shape_43.setTransform(-24.2,-896.8,4.703,4.703,-10);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1D1C").s().p("AgQB8QgXgNgMgKQgSgPgGgSQgOgqAUghQAXgmAYgcQAZgdAigZQAdgWAQAGQhIA+gTA/QgQAvAOArQAHAUAcAyIgCAEg");
	this.shape_44.setTransform(-103.1,-918.4,4.703,4.703,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_3
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1C").s().p("AhDAMQAAgJAIgBQA8gEA4gQQAIgDACAJQACAIgIADQg8AQg8AFIgBAAQgHAAAAgIg");
	this.shape_45.setTransform(324.4,419,4.703,4.703,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(1));

	// Слой_4
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag4CuQg/AAgygTQhDgagwg+Qg7hKAjhDQApgnB2geQB0gdBvgCQhUAJhcAmQgoAQgXAVQgLAKgEAHIA2gfQBHgiBUgMQBYgMBMgCQA1ALAgAaQAnAeABAuQAAAjgJATQgIATgRAKQgJgwgtglQgPgNgNgFQgLgFgUgDQAZAKARAOQAaAVAOAZQARAbgDAZQgEAlgXAXQgSATgtAXQgSAKgiABQgdAAgagFQAggxgbhFQgghNhVgBQAHADARAEQARAFATAOQAhATANA0QAOA6ghAhQgfAghIAAIgCgBg");
	this.shape_46.setTransform(501.8,757.1,4.703,4.703,-10);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAMCvQh0gFgegiQgfgiAQg5QAPgzAhgTQAUgMASgEIAYgGQhWgDgmBFQghA+AdAyQgaADglgfQgpgigCgkQgEgoADgYQAFgoAWgQQASgNAYgJQgTACgMAFQgNAEgPAMQgXARgGAtQgGArAOAYQgtgWAFhRQADgtAtgfQAlgZA3gJQATABAoABQAoACAqAHQBPAPBIAYIAVAHIgUgJQhZgohVgNQBwAGByAiQB0AjAnApQAhBDg+BIQgzA8hEAXQgnANhHAAIgtgBg");
	this.shape_47.setTransform(20.1,874.7,4.703,4.703,-10);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(184.8,248.3,4.703,4.703,-10,0,0,108.4,159.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_47},{t:this.shape_46}]}).wait(1));

	// <Clip Group>_0
	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-230.5,27.1,4.707,4.707,-10,0,0,79.5,101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.catBody2, new cjs.Rectangle(-695.3,-992,1491.9,2071.8), null);


(lib.cat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));

	// Слой_5
	this.instance = new lib.catHand1();
	this.instance.parent = this;
	this.instance.setTransform(-24.6,-79.9,1,1,-65,0,0,97.2,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:-24.5,y:-79.8},10).wait(1));

	// Слой_2
	this.instance_1 = new lib.catBody1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-68.1,0.1,1,1,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// Слой_4
	this.instance_2 = new lib.catHand2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29,-98.6,1,1,70,0,0,-81.2,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-81.1,regY:39.3,rotation:0,x:49.6,y:-98.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.6,-253.4,423.2,507.3);


(lib.car3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// catHand5
	this.instance = new lib.catHand5();
	this.instance.parent = this;
	this.instance.setTransform(-36.6,-39.6,1,1,-15,0,0,54.5,-47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

	// catBody3
	this.instance_1 = new lib.catBody3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.9,8.1,1,1,0,0,0,2.1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// catHand6
	this.instance_2 = new lib.catHand7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.7,-53.8,1,1,26.2,0,0,-75.4,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-75.5,rotation:0,x:40.6,y:-53.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.3,-207,402.9,430.2);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.c1.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(221));

	// js
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(254).to({_off:false},0).to({alpha:1},10).wait(1));

	// bgImg1
	this.instance_1 = new lib.bgImg1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.1,1.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(206).to({_off:false},0).to({alpha:0},10).to({_off:true},1).wait(48));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-564.8,1.2,1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206).to({_off:false},0).wait(59));

	// cat3
	this.instance_3 = new lib.car3("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-240.2,495.2,1.349,1.349,0,0,0,-11,8.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(206).to({_off:false},0).wait(13).to({mode:"synched",loop:false},0).wait(46));

	// dog
	this.instance_4 = new lib.dog2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(244.6,474.2,1.1,1.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(206).to({_off:false},0).wait(59));

	// cow
	this.instance_5 = new lib.cow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-4,155.1,0.445,0.445,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(206).to({_off:false},0).wait(59));

	// dom2
	this.instance_6 = new lib.dom2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-221.7,83.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(206).to({_off:false},0).wait(59));

	// dom1
	this.instance_7 = new lib.dom1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(212.3,85.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(206).to({_off:false},0).wait(59));

	// bgImg1
	this.instance_8 = new lib.bgImg1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,1.1,1.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(196).to({_off:false},0).to({alpha:1},10).wait(59));

	// t2
	this.instance_9 = new lib.t2("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-81.6,-695.9,1,1,0,0,0,-0.1,-0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(114).to({_off:false},0).to({_off:true},92).wait(59));

	// catHand4
	this.instance_10 = new lib.catHand4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1276.5,75.8,1,1,55.5,0,0,-337.7,-128.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).to({x:-892.5},10,cjs.Ease.get(1)).to({regX:-337.8,regY:-128.4,rotation:0,y:75.7},10,cjs.Ease.get(1)).to({_off:true},92).wait(59));

	// boxes2
	this.instance_11 = new lib.boxes2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-115,-1235.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(104).to({_off:false},0).to({y:100},10,cjs.Ease.get(-1)).to({_off:true},92).wait(59));

	// catBody2
	this.instance_12 = new lib.catBody2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-1126.6,347.7,1,1,0,0,0,62.6,43.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).to({x:-742.6},10,cjs.Ease.get(1)).to({_off:true},102).wait(59));

	// catHand3
	this.instance_13 = new lib.catHand3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-947.6,-97.9,1,1,50.5,0,0,-365.5,-135.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(94).to({_off:false},0).to({x:-563.6},10,cjs.Ease.get(1)).to({regY:-136,rotation:0},10,cjs.Ease.get(1)).to({_off:true},92).wait(59));

	// cow
	this.instance_14 = new lib.cow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(266.5,323.5,0.636,0.636,0,0,0,0.1,0);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(84).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,x:279.8,y:339.7,alpha:1},10).to({regX:0,scaleX:0.7,scaleY:0.7,x:293.1,y:355.8},10).to({_off:true},102).wait(59));

	// bgImg1
	this.instance_15 = new lib.bgImg1();
	this.instance_15.parent = this;
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(84).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},10).to({scaleX:1.1,scaleY:1.1},10).to({_off:true},102).wait(59));

	// t1
	this.instance_16 = new lib.t1("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-204.4,-100.1,1.56,1.56,0,0,0,-0.1,-0.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(44).to({_off:false},0).wait(40).to({mode:"single",startPosition:20},0).to({startPosition:20},10).to({_off:true},1).wait(170));

	// cat1
	this.c1 = new lib.cat1();
	this.c1.name = "c1";
	this.c1.parent = this;
	this.c1.setTransform(-837.8,1092.6,2.08,2.08,0,0,0,0.1,0.2);
	this.c1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(29).to({_off:false},0).to({x:-163.9,y:572.6},15,cjs.Ease.get(1)).wait(50).to({_off:true},1).wait(170));

	// uzelok
	this.instance_17 = new lib.uzelok("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(178.9,-549.1,1.3,1.3,0,0,0,-0.8,2.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(84).to({_off:false},0).to({y:-344.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// gal4onok
	this.instance_18 = new lib.gal4onok();
	this.instance_18.parent = this;
	this.instance_18.setTransform(834.1,-564.3,1.3,1.3,0,0,0,-0.8,2.9);

	this.instance_19 = new lib.gal4onok1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(173.7,-564.3,1.3,1.3,0,0,0,-0.8,2.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:173.7},29).to({_off:true},55).wait(181));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(84).to({_off:false},0).wait(10).to({_off:true},1).wait(170));

	// bgImg1
	this.instance_20 = new lib.bgImg1();
	this.instance_20.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(84).to({scaleX:1.1,scaleY:1.1},20).to({_off:true},102).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-960,1544,1920);


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
	this.instance.setTransform(150,300,0.312,0.312,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,483.5,602);
// library properties:
lib.properties = {
	id: '55854E076BCE417DB5D385D478B8C71E',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/boxes1.png", id:"boxes1"},
		{src:"images/boxes2_1.png", id:"boxes2_1"},
		{src:"images/dom1.png", id:"dom1"},
		{src:"images/dom2.png", id:"dom2"}
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
an.compositions['55854E076BCE417DB5D385D478B8C71E'] = {
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