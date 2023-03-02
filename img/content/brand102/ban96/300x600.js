(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.boxes1 = function() {
	this.initialize(img.boxes1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,354);


(lib.boxes2 = function() {
	this.initialize(img.boxes2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,330);// helper functions:

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
	this.shape.graphics.f("#34303D").s().p("AsfCeIAAhIIAKAAIAAAHQACgEAFgDQAEgCAFAAQAGAAAGADQAFADADAGQADAGAAAIQAAAHgDAGQgDAGgFADQgGAEgGAAQgFAAgEgDQgFgDgCgDIAAAfgAsPBfQgDADgCADQgCADAAAGQAAAFACAEQACACADADQAEACAEABQAFgBADgCQAEgDABgCQACgEAAgFQAAgGgCgDQgBgDgEgDQgDgCgFAAQgEAAgEACgAEtCGIgDgCIAAgDIAAgEIADgCIADgBIADABIADACIABAEIgBADIgDACIgDACgAgsCHIABgIIADAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIACgEIABgjIAnAAIAAAwIgJAAIAAgoIgUAAIgBARIgCAOQAAAEgEAEQgEADgFAAgAhaCEQgFgDgEgGQgDgHAAgGQAAgGADgIQAEgGAFgDQAHgDAGAAQAGAAAHADQAGADADAHQAEAGAAAHQAAAGgEAHQgDAGgGADQgHAEgGAAQgGAAgHgEgAhVBfQgDACgCAEQgCADAAAGQAAAFACAEQACADADACIAIADIAIgDQADgCADgDQACgEAAgFQAAgGgCgDQgDgEgDgCQgEgCgEAAQgEAAgEACgAkECEQgFgDgEgGQgDgHAAgGQAAgGADgIQAEgGAFgDQAHgDAGAAQAGAAAHADQAGADADAHQAEAGAAAHQAAAGgEAHQgDAGgGADQgHAEgGAAQgGAAgHgEgAj/BfQgDACgCAEQgCADAAAGQAAAFACAEQACADADACIAIADIAIgDQADgCADgDQACgEAAgFQAAgGgCgDQgDgEgDgCQgEgCgEAAQgEAAgEACgAo6CEQgGgDgDgGQgDgGAAgHQAAgHADgHQADgGAGgDQAGgDAFAAQAFAAAFACQADACAEAFIAAgHIAJAAIAAAwIgJAAIAAgHQgEAEgDACQgFADgFAAQgFAAgGgEgAo1BfQgDACgCAEQgCADAAAGQAAAFACAEQACADADACQADACAFABQAEgBAEgCQADgCACgDQACgGAAgDQAAgEgCgFQgCgEgDgCQgEgCgEAAQgFAAgDACgAqeCEQgFgDgEgGQgDgGAAgHQAAgIADgFQADgFAGgFQAHgDAGAAQAGAAAGACQAGADADAFIgGAGQgCgEgEgBQgEgCgEAAQgEAAgFACQgEADgBADQgCADAAAGQAAAFACAEQABADAEACQAEACAFABQAEAAAEgCIAGgFIAGAGQgDAEgGADQgGADgGAAQgHAAgGgEgAtSCEQgFgDgEgGQgDgHAAgGQAAgGADgIQAEgGAFgDQAHgDAGAAQAGAAAHADQAGADADAHQAEAGAAAHQAAAGgEAHQgDAGgGADQgHAEgGAAQgGAAgHgEgAtNBfQgDACgCAEQgCADAAAGQAAAFACAEQACADADACIAIADIAIgDQADgCADgDQACgEAAgFQAAgGgCgDQgDgEgDgCQgEgCgEAAQgEAAgEACgAESCGIAAgkIgZAkIgJAAIAAgwIAJAAIAAAjIAagjIAIAAIAAAwgADZCGIAAgjIgQAWIgGAAIgQgWIAAAjIgJAAIAAgwIAJAAIATAZIATgZIAJAAIAAAwgACWCGIAAgwIAKAAIAAAwgAB8CGIAAgVIgYAAIAAAVIgKAAIAAgwIAKAAIAAASIAYAAIAAgSIAJAAIAAAwgAA1CGIAAgoIgRAAIAAgIIArAAIAAAIIgRAAIAAAogAAUCGIAAgwIAKAAIAAAwgAh9CGIAAgVIgYAAIAAAVIgKAAIAAgwIAKAAIAAASIAYAAIAAgSIAJAAIAAAwgAjRCGIAAgwIAWAAQAJAAAEADQAFADAAAGQAAAEgCADIgFAEQAFABACADQACAEAAAEQAAACgCAFIgGAEQgDACgGAAgAjIB/IANAAQAGAAACgCQADgBAAgEQAAgHgLAAIgNAAgAjIBqIALAAQAFAAADgCQACgBAAgDQAAgIgKABIgLAAgAknCGIAAgoIgYAAIAAAoIgKAAIAAgwIArAAIAAAwgAlxCGIAAgTIgLAAIgMATIgKAAIAMgUQgFgBgDgDQgDgEAAgFQAAgHAFgFQAGgDAIAAIAXAAIAAAwgAmFBfQgDABAAAFQAAADADACQADACAFABIAMAAIAAgQIgMAAQgGAAgCACgAmpCGIAAgVIgYAAIAAAVIgKAAIAAgwIAKAAIAAASIAYAAIAAgSIAJAAIAAAwgAnlCGIAAgVIgYAAIAAAVIgKAAIAAgwIAKAAIAAASIAYAAIAAgSIAJAAIAAAwgApoCGIAAgoIgRAAIAAgIIArAAIAAAIIgRAAIAAAogArBCGIAAgkIgZAkIgJAAIAAgwIAJAAIAAAjIAagjIAIAAIAAAwgAtsCGIgMgUIgCgBIgCAAIgHAAIAAAVIgKAAIAAgwIAKAAIAAASIAIAAIABAAIABgBIAOgRIAKAAIgRAXIASAZgAunCGIAAgkIgZAkIgJAAIAAgwIAJAAIAAAjIAagjIAIAAIAAAwgAv7CGIAAgwIAWAAQAJAAAEADQAFADAAAGQAAAEgCADIgFAEQAFABACADQACAEAAAEQAAACgCAFIgGAEQgDACgGAAgAvyB/IANAAQAGAAACgCQADgBAAgEQAAgHgLAAIgNAAgAvyBqIALAAQAFAAADgCQACgBAAgDQAAgIgKABIgLAAgACYBKIgDgDIAAgDIAAgDIADgCIADgBIADABIACACIABADIgBADIgCADIgDABgAAWBKIgDgDIAAgDIAAgDIADgCIADgBIADABIACACIABADIgBADIgCADIgDABgAqYAnIAGgIIADgHQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQACADAAAEQAAAGgDAFQgEAHgGADgAOIAlIAAgNIgoAAIAAANIgIAAIAAgVIAFAAQADgDAAgEIACggIAnAAIAAAnIAIAAIAAAVgANrgDIgBALQgBAFgCADIAYAAIAAgfIgUAAgAooAlIAAgNIhDAAIAAgvIAKAAIAAAnIATAAIAAgnIAKAAIAAAnIATAAIAAgnIAKAAIAAAnIAHAAIAAAVgAOTAZIABgJIADAAQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAIACgEIABgiIAoAAIAAAvIgKAAIAAgnIgUAAIgBAQIgCAOQAAAEgEAEQgEACgFAAgAMVAWQgFgCgEgHQgDgHAAgGQAAgFADgIQADgFAGgEQAFgDAHAAQAHAAAGADQAFADADAGQAEAGAAAGIgBAEIgmAAQABAFABACQADADADACIAIACQAFAAAEgCQAEgCADgCIAFAGQgEAEgFACQgHACgFAAQgHABgHgEgAMwgEQgBgGgEgDQgEgDgGAAQgGAAgDADQgEADgBAGIAdAAIAAAAgAIsAZIABgJIADAAQAEAAABgCQACgDABgFIACg0IAxAAIAABGIgKAAIAAg9IgeAAIgBAcQAAANgBAIQgCAHgEADQgDAEgHgBgAIJAYIgDgCIAAgDIAAgEIADgCIADAAIADAAIADACIABAEIgBADIgDACIgDABgAF7AWQgFgCgEgHQgDgFAAgIQAAgHADgFQADgGAGgEQAHgDAGAAQAGAAAGADQAGACADAFIgGAFQgCgDgEgBQgEgCgEAAQgEAAgFACQgEADgBADQgCAEAAAEQAAAFACADQABAEAEACQAEACAFAAQAEAAAEgBIAGgFIAGAGQgDAEgGADQgGACgGAAQgHABgGgEgACzAWQgFgCgEgHQgDgHAAgGQAAgFADgIQADgFAGgEQAFgDAHAAQAHAAAGADQAFADADAGQAEAGAAAGIgBAEIgmAAQABAFABACQADADADACIAIACQAFAAAEgCQAEgCADgCIAFAGQgEAEgFACQgHACgFAAQgHABgHgEgADOgEQgBgGgEgDQgEgDgGAAQgGAAgDADQgEADgBAGIAdAAIAAAAgABpAZIABgJIADAAQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAIACgEIABgiIAoAAIAAAvIgKAAIAAgnIgUAAIgBAQIgCAOQAAAEgEAEQgEACgFAAgAA7AWQgGgDgDgGQgDgGAAgHQAAgHADgGQADgFAGgEQAGgDAFAAQAFAAAFADQADABAEAFIAAgHIAJAAIAAAvIgJAAIAAgHIgHAGQgFACgFAAQgGABgFgEgABAgOQgDACgCAEQgCAEAAAEQAAAFACADQACAFADABQADACAFAAQAEAAAEgCQADgBACgFQACgFAAgDQAAgDgCgFQgCgEgDgCQgEgCgEAAQgFAAgDACgAAEAXQgEgCgDgEIAEgFQACACAFACQAEABAEAAQAHAAACgCQADgCAAgDQAAgHgKAAIgKAAIAAgGIAIAAQAFAAADgBQACgCAAgEQAAgDgCgCQgCgCgFAAQgJAAgGAGIgEgGQACgEAGgBQAGgDAFAAQAJAAAFAEQAFADAAAHQAAAEgCADQgCADgEABQAFAAACADQADAEAAAEQAAAEgDADQgDADgEACQgHACgFAAQgGAAgGgCgAg8AWQgFgCgEgHQgDgHAAgGQAAgHADgFQADgGAGgEQAGgDAIAAQAGAAAGADQAGACACAEIgFAGQgDgDgEgCQgFgCgDAAQgEAAgEACQgEACgCADIgCAHIAYAAIAAAGIgZAAQA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IADgGIACgGIgUgwIAKAAIAPAmIAPgmIAKAAIgcBCQgDADgDADQgEACgFAAgAFAg8IAAhJIAKAAIAAAGQACgDAFgCQAEgDAFAAQAGAAAGAEQAFACADAHQADAFAAAIQAAAHgDAGQgDAGgFADQgFADgHAAQgFABgEgDQgFgDgCgDIAAAggAFQh8QgDADgCADQgCADAAAGQAAAFACADQACADADAEQAEABAEAAQAFAAADgBQAEgEABgDQACgDAAgFQAAgGgCgDQgBgDgEgDQgDgCgFAAQgEAAgEACgAjHg8IAAhJIAKAAIAAAGQACgDAFgCQAEgDAFAAQAGAAAGAEQAFACADAHQADAFAAAIQAAAHgDAGQgDAGgFADQgFADgHAAQgFABgEgDQgFgDgCgDIAAAggAi3h8QgDADgCADQgCADAAAGQAAAFACADQACADADAEQAEABAEAAQAFAAADgBQAEgEABgDQACgDAAgFQAAgGgCgDQgBgDgEgDQgDgCgFAAQgEAAgEACgAMLhXQgFgCgEgHQgDgGAAgHQAAgIADgFQADgFAGgEQAHgEAGAAQAGAAAGADQAGACADAEIgGAGQgCgDgEgBQgEgCgEAAQgEAAgFACQgEADgBADQgCADAAAGQAAAFACADQABAEAEADQAEABAFAAQAEABAEgCIAGgFIAGAGQgDAEgGADQgGADgGgBQgHAAgGgDgAIhhUIABgJIADAAQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAIACgFIABgiIAoAAIAAAwIgKAAIAAgpIgUAAIgBARIgCAPQAAAEgEAEQgEADgFgBgAHzhXQgFgCgEgHQgDgHAAgGQAAgHADgGQAEgHAFgCQAHgEAGAAQAGAAAHAEQAGADADAGQAEAGAAAHQAAAGgEAHQgDAHgGACQgHADgGAAQgGAAgHgDgAH4h7QgDAAgCAFQgCADAAAGQAAAFACADQACAFADACIAIABIAIgBQADgCADgFQACgDAAgFQAAgGgCgDQgDgFgDAAQgEgDgEAAQgEAAgEADgAG8hWQgFgBgDgFIAFgFQACACAFACQAEACAEgBQAHAAACgCQADgCAAgDQAAgHgKAAIgKAAIAAgHIAIAAQAFAAADgBQACgCAAgEQAAgEgCgBQgCgCgFAAQgJAAgGAGIgFgGQADgEAGgBQAGgDAFAAQAJAAAFAEQAFAEAAAGQAAAEgCADQgCADgEABQAFACACACQADADAAAEQAAAFgDADQgDAEgEACQgHABgFAAQgGABgGgDgAGFhXQgFgCgEgHQgDgHAAgGQAAgHADgGQAEgHAFgCQAHgEAGAAQAGAAAHAEQAGADADAGQAEAGAAAHQAAAGgEAHQgDAHgGACQgHADgGAAQgGAAgHgDgAGKh7QgDAAgCAFQgCADAAAGQAAAFACADQACAFADACIAIABIAIgBQADgCADgFQACgDAAgFQAAgGgCgDQgDgFgDAAQgEgDgEAAQgEAAgEADgAENhXQgFgCgEgHQgDgHAAgGQAAgHADgGQADgHAGgCQAFgEAHAAQAHAAAGAEQAFADADAFQAEAGAAAGIgBAFIgmAAQABAFABACQADADADACIAIACQAFAAAEgCQAEgCADgCIAFAGQgEAEgFACQgHADgFgBQgHAAgHgDgAEohxQgBgHgEgDQgEgEgGAAQgGAAgDAEQgEACgBAIIAdAAIAAAAgACXhVIgDgCIAAgDIAAgEIADgCIADAAIADAAIADACIABAEIgBADIgDACIgDABgAhLhWQgFgBgDgFIAFgFQACACAFACQAEACAEgBQAHAAACgCQADgCAAgDQAAgHgKAAIgKAAIAAgHIAIAAQAFAAADgBQACgCAAgEQAAgEgCgBQgCgCgFAAQgJAAgGAGIgFgGQADgEAGgBQAGgDAFAAQAJAAAFAEQAFAEAAAGQAAAEgCADQgCADgEABQAFACACACQADADAAAEQAAAFgDADQgDAEgEACQgHABgFAAQgGABgGgDgAlKhXQgFgCgEgHQgDgGAAgHQAAgIADgFQADgFAGgEQAHgEAGAAQAGAAAGADQAGACADAEIgGAGQgCgDgEgBQgEgCgEAAQgEAAgFACQgEADgBADQgCADAAAGQAAAFACADQABAEAEADQAEABAFAAQAEABAEgCIAGgFIAGAGQgDAEgGADQgGADgGgBQgHAAgGgDgAnChXQgFgCgEgHQgDgHAAgHQAAgHADgFQADgFAGgEQAGgEAIAAQAGAAAGADQAGACACAEIgFAGQgDgEgEgBQgFgCgDAAQgEAAgEACQgEABgCAEIgCAHIAYAAIAAAHIgZAAQACAIAEADQAEADAHAAQAFAAADgCQAEgBADgDIAFAFQgCAEgGADQgGADgGgBQgHAAgHgDgAn+hXQgGgDgDgGQgDgGAAgHQAAgIADgFQADgHAGgCQAGgEAFAAQAFAAAFADQADACAEADIAAgGIAJAAIAAAwIgJAAIAAgHQgEAEgDACQgFADgFgBQgGAAgFgDgAn5h8QgDACgCAEQgCADAAAGQAAAFACADQACAFADACQADABAFAAQAEAAAEgBQADgCACgFQACgEAAgEQAAgEgCgFQgCgEgDgCQgEgCgEAAQgFAAgDACgArKhUIABgJIADAAQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAIACgFIABgiIAoAAIAAAwIgKAAIAAgpIgUAAIgBARIgCAPQAAAEgEAEQgEADgFgBgAushXQgFgCgEgHQgDgHAAgGQAAgHADgGQADgHAGgCQAFgEAHAAQAHAAAGAEQAFADADAFQAEAGAAAGIgBAFIgmAAQABAFABACQADADADACIAIACQAFAAAEgCQAEgCADgCIAFAGQgEAEgFACQgHADgFgBQgHAAgHgDgAuRhxQgBgHgEgDQgEgEgGAAQgGAAgDAEQgEACgBAIIAdAAIAAAAgAprhWQgFgDgEgFQgDgHgBgFIgHAAIAAAVIgKAAIAAgwIAKAAIAAATIAIAAQAAgGAEgFQAEgFAEgCQAGgDAGAAQAGAAAGAEQAFACAEAHQADAFAAAHQAAAJgDAFQgEAGgFADQgFADgHAAQgGAAgGgCgApnh8QgDACgCAEQgCAEAAAEQAAAGACADQACAFADABQADACAFAAQAFAAACgCQAEgBABgFQACgDAAgGQAAgEgCgEQgBgEgEgCQgEgCgDAAQgEAAgEACgAPUhVIAAgwIAKAAIAAARIAKAAQALAAAEAEQAFAEAAAHQAAAJgFADQgEAEgLAAgAPehdIAKAAQALABAAgJQAAgEgDgBQgCgDgGAAIgKAAgAOvhVIAAgpIgRAAIAAgHIArAAIAAAHIgRAAIAAApgAOIhVIAAgkIgZAkIgJAAIAAgwIAJAAIAAAjIAagjIAIAAIAAAwgANBhVIAAgpIgRAAIAAgHIArAAIAAAHIgRAAIAAApgALuhVIAAgwIAKAAIAAAwgALXhVIAAgjIgQAVIgGAAIgQgVIAAAjIgJAAIAAgwIAJAAIATAYIATgYIAJAAIAAAwgAJihVIAAgwIAKAAIAAARIAKAAQALAAAEAEQAFAEAAAHQAAAJgFADQgEAEgLAAgAJshdIAKAAQALABAAgJQAAgEgDgBQgCgDgGAAIgKAAgADuhVIgFgOIggAAIgFAOIgLAAIAchHIAIAAIAbBHgADmhsIgNghIgNAhIAaAAgABkhVIAAgwIAWAAQAJAAAEADQAFADAAAGQAAAFgCACIgFAEQAFACACACQACAEAAADQAAAEgCADIgGAGQgDABgGAAgABthcIANAAQAGAAACgCQADgCAAgDQAAgHgLAAIgNAAgABthxIALAAQAGAAACgBQACgCAAgEQAAgGgKgBIgLAAgABQhVIAAgwIAKAAIAAAwgAA/hVIgMgTIgCgBIgCgBIgHAAIAAAVIgKAAIAAgwIAKAAIAAATIAIAAIABgBIABgBIAOgRIAKAAIgRAWIASAagAAEhVIAAgkIgYAkIgJAAIAAgwIAJAAIAAAjIAZgjIAIAAIAAAwgAhphVIAAgkIgZAkIgJAAIAAgwIAJAAIAAAjIAagjIAIAAIAAAwgAjshVIgNgSIgOASIgLAAIATgZIgTgXIAMAAIANARIANgRIALAAIgSAXIATAZgAkhhVIAAgwIAKAAIAAAwgAobhVIAAgUQgGADgHAAQgHAAgDgCQgEgCgDgEQgCgEAAgGIAAgNIAJAAIAAAMQAAAGADACQACACAHAAQAHAAAEgCIAAgUIAJAAIAAAwgArWhVIgMgTIgCgBIgCgBIgHAAIAAAVIgKAAIAAgwIAKAAIAAATIAIAAIABgBIABgBIAOgRIAKAAIgRAWIASAagAsRhVIAAgkIgZAkIgJAAIAAgwIAJAAIAAAjIAagjIAIAAIAAAwgAtlhVIAAgwIAWAAQAJAAAEADQAFADAAAGQAAAFgCACIgFAEQAFACACACQACAEAAADQAAAEgCADIgGAGQgDABgGAAgAtchcIANAAQAGAAACgCQADgCAAgDQAAgHgLAAIgNAAgAtchxIALAAQAGAAACgBQACgCAAgEQAAgGgKgBIgLAAgAvKhVIAAggIglAAIAAAgIgKAAIAAhHIAKAAIAAAeIAlAAIAAgeIAJAAIAABHgALwiSIgDgCIAAgDIAAgDIADgCIADgBIADABIACACIABADIgBADIgCACIgDABgABSiSIgDgCIAAgDIAAgDIADgCIADgBIADABIACACIABADIgBADIgCACIgDABgAkfiSIgDgCIAAgDIAAgDIADgCIADgBIADABIACACIABADIgBADIgCACIgDABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-102,-15.8,204.1,31.6), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#03D6D6").s().p("AJhB4QgGgEgEgHQgEgHAAgHQAAgIAEgHQAEgGAGgEQAGgDAIAAQAJAAAGADQAGAEAEAGQAEAHAAAIQAAAHgEAHQgDAHgHAEQgHADgIAAQgIAAgGgDgAD9BwQgTgKgMgVQgLgSAAgYQAAgYALgSQAMgUATgKQAUgMAYAAQAZAAAUAMQATAKALAUQALAUAAAWQAAAWgLAUQgLAVgTAKQgUALgZAAQgYAAgUgLgAEVACQgKAGgEAJQgFAJAAANQAAAMAFAKQAEAJAKAGQAIAEAMAAQAMAAAJgEQAIgGAGgJQAFgLAAgLQAAgLgFgLQgFgKgJgFQgJgFgMAAQgMAAgIAFgApjBwQgTgLgLgUQgKgSAAgYQAAgYAKgSQALgUATgKQAUgMAaAAQAVAAAUAIQAUAIAJAOIgaAdQgJgIgLgFQgLgDgMgBQgNAAgJAFQgJAGgFAIQgFAKAAANQAAANAFAJQAFALAJAEQAJAFANAAQANAAAKgFQALgEAJgJIAaAfQgJAMgUAJQgSAIgXAAQgbAAgTgLgAIAB3IAAh6Ig6AAIAAB6IgtAAIAAifICVAAIAACfgABhB3IAAh6IgyAAIAAglICSAAIAAAlIgyAAIAAB6gAhiB3IAAhiIhABiIgqAAIAAifIAsAAIAABhIBAhhIAqAAIAACfgAkjB3IAAifIAuAAIAACfgAnSB3IAAifIBNAAQAdAAAQALQAPALAAAUQAAALgFAKQgGAJgKAEQAcAJAAAbQAAANgHALQgGAKgOAHQgNAFgTABgAmmBXIAdAAQAaAAAAgSQAAgJgGgDQgGgEgOAAIgdAAgAmmAXIAYAAQANAAAGgDQAHgFAAgJQAAgHgHgDQgGgFgNAAIgYAAgAJbApIgCiYIAtAAIgBCYgAiehJQgNgHgIgNQgIgMgBgRIAiAAQACAMAGAGQAHAGALAAQAMAAAHgGQAGgHACgLIAiAAQgBARgIAMQgHAMgOAIQgOAIgRgBQgQABgOgIgAkZhHQgGgDgEgGQgEgHAAgHQAAgIAEgFQADgHAHgDQAGgEAHAAQAHAAAHAEQAGADAEAHQADAFAAAIQAAAHgDAHQgEAGgGADQgGAEgIAAQgIAAgFgEg");
	this.shape.setTransform(-47,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#35303E").s().p("AGYCgIAAjrIAfAAIAAAXQAKgOANgHQANgGASgBQAVAAARALQARAKAKAUQAKASAAAYQAAAXgKATQgKATgRALQgRAKgVABQgQAAgPgIQgNgHgKgNIAABmgAHOgtQgMAIgGAMQgGALAAARQAAAQAGAMQAGAMAMAIQAKAGAPAAQAPAAAKgGQAMgIAGgMQAGgMAAgQQAAgRgGgLQgGgMgMgIQgKgGgPAAQgPAAgKAGgAJ8BLQgRgLgKgTQgKgSAAgYQAAgZAKgRQAKgUARgKQASgLAUAAQATABAMAGQAOAHAJAOIAAgXIAfAAIAACcIgfAAIAAgXQgKANgNAHQgOAIgRAAQgVgBgRgKgAKOgtQgLAIgGAMQgGALAAARQAAAQAGAMQAGAMALAIQALAGAPAAQAOAAALgGQAMgIAGgMQAGgMAAgQQAAgRgGgLQgGgMgMgIQgLgGgOAAQgPAAgLAGgAjWBLQgSgLgJgTQgKgTAAgXQAAgYAKgSQAKgUARgKQARgLAVAAQASABANAGQANAHAKAOIAAgXIAfAAIAACcIgfAAIAAgXQgKANgNAHQgOAIgRAAQgVgBgRgKgAjEgtQgLAIgGAMQgHALAAARQAAAQAHAMQAGAMALAIQAKAGAQAAQAOAAALgGQALgHAHgNQAGgMAAgQQAAgQgGgMQgHgNgLgHQgLgGgOAAQgQAAgKAGgAD8BLQgTgMgJgVQgLgWAAggQAAgwALgeQAKgeAXgOQAKgFAMgEIAegHIAzgJIAFAaIg4ALQgUADgNAHQgNAGgJAPQgIAPgCAcQAKgOAOgIQAPgHASAAQAVAAASALQASALAJASQAKATAAAWQAAAXgKASQgLATgSALQgSAKgZAAQgZAAgSgKgAENgrQgLAIgHALQgGALAAAQQAAAQAGAMQAGAMALAHQAMAHAPAAQAPAAALgHQALgGAHgMQAGgNAAgPQAAgOgGgNQgHgMgLgIQgLgGgPAAQgOAAgMAGgAA/BLQgTgLgLgTQgKgTAAgXQAAgXAKgTQALgSATgMQATgLAXAAQAYAAASALQATAMALASQAKAUAAAWQAAAXgKATQgLATgTALQgSAKgYAAQgXAAgTgKgABPgsQgMAIgGALQgHAMAAAQQAAAPAHANQAGAMAMAHQALAGAPAAQAPAAALgGQAMgIAGgLQAHgOAAgOQAAgPgHgNQgGgLgMgIQgMgGgOAAQgOAAgMAGgAstBLQgTgLgKgTQgLgTAAgXQAAgXALgTQAKgSATgMQATgLAYAAQAYAAASALQATALAKATQALAUAAAWQAAAXgLATQgLATgSALQgSAKgYAAQgYAAgTgKgAscgsQgMAIgHALQgGANAAAPQAAAOAGAOQAHAMAMAHQALAGAPAAQAOAAALgGQAMgHAHgMQAGgNAAgPQAAgQgGgMQgHgLgMgIQgLgGgOAAQgPAAgLAGgAQ7BRIAAhxIhTBxIgdAAIAAicIAeAAIAAByIBThyIAdAAIAACcgANSBRIAAiCIg3AAIAAgaICNAAIAAAaIg3AAIAACCgAlABRIAAhFIhPAAIAABFIgfAAIAAicIAfAAIAAA+IBPAAIAAg+IAfAAIAACcgAntBRIgog/IgEgEQgCgBgEAAIgMAAIAABEIgfAAIAAhEIgLAAQgEAAgDABIgEAEIgnA/IgkAAIA1hSIg0hKIAiAAIAoA4IAEAFIAFABIANAAIAAg+IAfAAIAAA+IAOAAIAFgBIAEgFIAng4IAjAAIg1BKIA2BSgAuYBRIAAivIhHBuIgUAAIhGhuIAACvIgfAAIAAjmIAeAAIBRCAIBRiAIAeAAIAADmg");
	this.shape_1.setTransform(0.9,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-112.2,-32.8,224.4,65.8), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34303D").s().p("ANPBxQgOgHgHgNQgGgNAAgSIAAhMIgmAAIAAgXIAPgCQAJAAAFgEQAFgDABgFQADgFAAgJIAAgeIAfAAIAAA2IBDAAIAAAbIhDAAIAABIQAAAQAHAJQAIAIAQAAQATAAAPgQIAPAVQgKAMgOAGQgNAGgSAAQgRAAgMgHgACxBwQgQgIgKgPQgKgPAAgTQAAgVAOgQQANgQAZgJQgMgMgIgOQgJgNABgRQAAgOAHgNQAIgNAOgIQAPgIATAAQASAAAPAHQAPAIAHAMQAIANAAAQQAAAUgOAQQgNAPgaAMIAzAzQAOgRAOgZIAZAPQgRAagQAVIAsAtIgmAAIgZgaQgPAOgUAIQgSAIgUAAQgXAAgRgIgAC3AbQgJAKAAAPQAAAMAFAIQAFAJALAFQAKAFAOAAQAaAAAZgUIg8g9QgSAIgJAJgADThXQgHAFgEAGQgEAGAAAJQAAALAGAKQAHAKALAMQAVgKAJgKQAKgLAAgNQAAgHgEgHQgEgHgGgEQgIgDgKAAQgKAAgHADgAhWBvQgWgHgOgPIARgXQALAMASAGQASAHATAAQAQAAAKgEQAMgFAFgJQAHgIAAgNQAAgMgHgJQgHgIgLgFIgfgLQgXgHgPgGQgOgHgKgMQgKgNAAgTQAAgUALgOQAJgOATgHQASgHAXAAQAWAAAVAHQAVAHANAOIgQAWQgMgKgOgFQgQgGgSAAQgXAAgMAIQgOAJAAAPQAAALAHAHQAIAHAJAEQALAFASAFQAYAHAOAIQAQAGAKAOQALANAAAXQAAAWgLAPQgKAPgSAIQgTAIgYAAQgZAAgWgJgALYB0IAAidIAfAAIAACdgAKMB0IAAidIAgAAIAACdgAHXB0IAAjmICLAAIAAAcIhsAAIAABQIBjAAIAAAbIhjAAIAABfgAj6B0IAAjKIhIAAIAAgcICxAAIAAAcIhJAAIAADKgAnsB0IAAjmICQAAIAAAcIhxAAIAABGIBoAAIAAAbIhoAAIAABMIB0AAIAAAdgAq0B0IAAjmICQAAIAAAcIhxAAIAABGIBnAAIAAAbIhnAAIAABMIB0AAIAAAdgAsLB0IAAhpIh3AAIAABpIghAAIAAjmIAhAAIAABhIB3AAIAAhhIAhAAIAADmgALdhQQgEgCgEgFQgCgFAAgFQAAgFACgFQADgEAFgDQAEgDAGAAQAFAAAFADQAFADADAEQACAFAAAFQAAAFgCAFQgDAFgFACQgFADgFAAQgGAAgEgDgAKShQQgEgCgDgFQgDgDAAgHQAAgGADgEQADgEAEgDQAFgDAFAAQAGAAAEADQAGADACAEQACAFAAAFQAAAGgCAEQgDAFgFACQgEADgGAAQgFAAgFgDg");
	this.shape.setTransform(1,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00D6D6").s().p("ACJBvQgTgKgJgUQgKgTAAgYQAAgYAKgTQAJgTATgLQARgLAVAAQAOAAAMAGQANAHAIAJIAAgRIAtAAIAACfIgtAAIAAgRQgJAKgMAGQgMAGgOgBQgWABgQgMgACkAAQgJAGgFAJQgEALAAAMQAAALAEALQAFALAJAEQAJAGAMAAQAMAAAIgGQAIgEAGgLQAFgKgBgMQABgNgFgKQgFgJgJgGQgJgEgLgBQgLABgKAEgAkRBvQgTgLgLgTQgLgUAAgXQAAgXALgTQALgTATgLQATgMAbAAQAXABASAHQATAIAKAOIgaAdQgIgIgLgEQgLgFgNAAQgMABgJAEQgKAFgFAKQgFAJAAAOQAAAMAFAJQAFAKAKAFQAJAGAMAAQALgBANgFQALgFAIgHIAaAeQgKANgSAIQgTAJgXgBQgZAAgVgLgAofByQgTgIgMgQQgLgQAAgTQAAgVAKgOQAKgQARgGQgOgIgIgNQgJgNAAgQQAAgUALgOQAKgPATgIQATgIAWABQAXgBARAIQATAIALAPQAKAOABAUQAAAQgJANQgIANgPAIQARAGAKAQQALAOAAAVQAAASgLARQgLAQgUAIQgVAIgYAAQgZAAgUgIgAoFAVQgKAEgGAHQgFAHAAAKQAAALAFAHQAHAIAJADQAIAEALAAQALAAAIgEQAJgDAGgIQAGgHgBgLQABgKgGgHQgGgHgJgEQgKgDgJAAQgJAAgKADgAoEhJQgIADgGAGQgEAIAAAIQAAAJAEAHQAFAFAIAEQAIAEALAAQALAAAHgEQAJgEAEgFQAFgHAAgJQAAgIgFgIQgFgGgIgDQgHgDgLgBQgLABgHADgAJIB2IAAifIBOAAQAeAAAPALQAPALAAAUQAAAMgGAJQgEAIgLAGQAcAIAAAcQAAAMgHALQgGAKgOAHQgNAGgTAAgAJ0BWIAeAAQAaAAAAgSQAAgHgGgFQgHgEgNAAIgeAAgAJ0AXIAZAAQANAAAGgEQAGgEABgJQgBgIgGgDQgHgEgMgBIgZAAgAHyB2IAAifIAtAAIAACfgAGjB2Ighg4QgCgFgCgBQgDgBgFAAIgTAAIAAA/IguAAIAAifIAuAAIAAA3IATAAQAFABACgCQACgBACgEIAigxIAzAAIgzBJIA1BWgAAVB2IAAhfIglA1IgfAAIglg2IAABgIgtAAIAAifIAtAAIA1BGIA0hGIAsAAIAACfgAqaB2IAAi5Ig+AcIAAgqIBGgfIAlAAIAADmgAH7hHQgHgEgDgGQgEgHAAgHQAAgGAEgHQADgGAHgEQAFgDAIgBQAIABAGADQAFAEAFAGQADAFAAAIQAAAJgDAFQgFAHgFADQgHADgHAAQgHAAgGgDg");
	this.shape_1.setTransform(-21.2,-20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-94.1,-32.8,188.3,65.7), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35303E").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.logo_iqos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirCpIgsgtIgFgDQgCgCgEAAIjJAAQg/AAgkgeQgigdAAgsIAAiqQAAgHAGgGQAGgGAHABIDnAAQA9AAAkAdQAjAdAAAtIAABPQAAAJgGAFQgGAFgGgBIgHAAQgIABgGgFQgEgFAAgJIAAhPQAAgLgFgKQgFgLgJgHQgLgLgUgGQgQgEgXAAIjJAAIgEABIgBAFIAACLQAAAMAEAKQAFALAJAHQALAKATAGQASAEAXABIDVAAQAGAAAGABIAJAHIA1A1QAFAFAAAIQAAAIgFAEIgFAGQgFAFgHgBQgJABgFgFgAGrB3QgVABgTgIQgUgJgPgNIgJgJQgFgGgBgHQAAgIAFgGIAFgEQAFgFAHgBQAIAAAGAGIAKAJQAJAIALAFQALAEANABICQAAQAVAAAPgEQAPgEAJgHQAFgFACgEQADgIAAgKQAAgKgDgGQgCgFgFgFQgJgHgPgCQgPgEgVgBIh6AAQg3ABgfgXQgagWAAgiIAAgKQAAgjAagVQAfgYA3ABICFAAQAUAAASAHQASAHAPANIAMALQAGAFABAHQAAAIgEAGIgFAEQgFAHgIgBQgHABgGgFIgMgLQgIgIgMgEQgMgEgLAAIiFAAQgTAAgQAEQgPADgKAHQgEAEgDAGQgDAGAAAKQAAALADAGQADAHAEADQAJAIAQADQAQAEATAAIB6AAQA5AAAdAWQAaAWAAAhIAAALQAAAigaAVQgdAXg5AAgAAaB3Qg+AAgkgeQghgdAAgsIAAhVQAAgtAhgdQAkgdA+AAIB1AAQA9AAAkAdQAiAdAAAtIAABVQAAAsgiAdQgkAeg9AAgAgOh9QgSAGgNALQgIAHgEALQgGAKAAALIAABVQAAAMAGAKQAEALAIAHQANAKASAGQARAEAXABIB1AAQAWgBASgEQASgGAMgKQAJgHAFgLQAFgKAAgMIAAhVQAAgMgFgJQgFgLgJgHQgMgLgSgGQgSgEgWAAIh1AAQgXAAgRAEgAqXB3QgIABgGgGQgFgFAAgIIAAj+QAAgJAFgFQAGgGAIABIAFAAQAIgBAFAGQAGAGAAAIIAAD+QAAAIgGAFQgFAGgIgBg");
	this.shape.setTransform(46.5,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AikFoQg9AAgygfQgwgdgcgxQgcgwgBg4QgCg7Afg1IClkeQAeg0A0gcQAxgcA3AAQA5AAAwAcQA0AcAeA0IClEeQAfA1gBA7QgBA4gdAwQgcAxgvAdQgzAfg9AAgAhujUQgyAWgnAnQgmAngWAzQgXA0ABA5QgBA6AXA0QAWAyAmApQAnAnAyAUQA2AXA4AAQA6AAA1gXQAxgUApgnQAmgpAVgyQAXg0AAg6QAAg5gXg0QgVgzgmgnQgpgngxgWQg1gVg6gBQg4ABg2AVg");
	this.shape_1.setTransform(-79.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_iqos, new cjs.Rectangle(-118,-36,232.9,72), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35303E").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjlBDIgGgCIACgLIAIABQAFAAACgBQACgBADgEIAHgQIgchCIAOAAIAVAzIAUgzIAOAAIgeBJQgFAMgDAEQgEAGgFACQgEADgIAAgAnZA1IAAgVIhIAAIAAAVIgNAAIAAghIALAAQADgDABgFIADgMIAChAIBBAAIAABUIANAAIAAAhgAoOgUQAAAQgCAIQgBAKgEAGIAvAAIAAhIIgnAAgAFJAdQgHgFgEgHQgEgIAAgJQAAgKAEgIQAEgIAHgFQAIgEAIAAQAHAAAGADQAGACAEAGIAAgJIANAAIAABBIgNAAIAAgKQgEAGgGADQgGADgHAAQgIAAgIgFgAFRgUQgEACgDAGQgDAEAAAIQAAAHADAEQADAGAEACQAFADAGAAQAGAAAEgDQAFgDADgFQACgGAAgFQAAgGgCgGQgDgFgFgDQgEgDgGAAQgGAAgFADgAEHAdQgIgEgEgIQgEgJAAgIQAAgJAEgJQAEgIAIgEQAIgFAKAAQAIAAAJADQAIAEADAGIgIAIQgEgFgFgCQgEgCgHAAQgGAAgFADQgFADgCAFQgDAFAAAHQAAAGADAFQACAFAFADQAFADAGAAQAIAAADgDQAGgCADgEIAIAIQgFAHgGACQgHAEgKAAQgKAAgIgFgACRAdQgHgEgEgIQgEgIAAgJQAAgJAEgJQAFgJAGgEQAIgEAIAAQAHAAAGADQAGADAEAFIAAgJIANAAIAABBIgNAAIAAgKQgDAFgHAEQgGADgHAAQgIAAgIgFgACZgUQgFADgCAFQgDAFAAAHQAAAGADAFQACAFAFADQAEADAHAAQAGAAAEgDQAFgDADgFQACgGAAgFQAAgGgCgGQgDgFgFgDQgEgDgGAAQgHAAgEADgAljAdQgIgEgEgIQgFgIAAgJQAAgJAFgJQADgIAJgEQAHgFALAAQAIAAAIADQAIAEAEAGIgIAIQgFgFgEgCQgEgCgHAAQgFAAgGADQgEACgEAGQgCAGAAAGQAAAFACAGQADAFAFADQAFADAGAAQAHAAAEgDQAFgCAEgEIAIAIQgEAGgIADQgGAEgKAAQgKAAgIgFgAm3AdQgHgEgFgIQgEgIAAgJQAAgKAEgIQAFgIAHgFQAJgEAJAAQAKAAAIAEQAHAEAFAJQAFAIAAAKQAAAJgFAIQgEAIgIAEQgIAFgKAAQgJAAgJgFgAmwgUQgEACgDAGQgDAGAAAGQAAAGADAFQADAFAEADQAGADAFAAQAGAAAFgDQAFgDADgFQACgGAAgFQAAgGgCgGQgEgGgEgCQgFgDgGAAQgFAAgGADgAIgAgIAAhBIANAAIAABBgAHuAgIAAg2IgXAAIAAgLIA7AAIAAALIgXAAIAAA2gAHAAgIAAgvIgjAvIgMAAIAAhBIANAAIAAAvIAigvIAMAAIAABBgABoAgIAAgdIghAAIAAAdIgNAAIAAhBIANAAIAAAaIAhAAIAAgaIANAAIAABBgAgHAgIAAhBIAMAAIAABBgAglAgIAAgdIghAAIAAAdIgNAAIAAhBIANAAIAAAaIAhAAIAAgaIANAAIAABBgAhwAgIAAg2IghAAIAAA2IgNAAIAAhBIA7AAIAABBgAkTAgIAAg2IgXAAIAAgLIA7AAIAAALIgXAAIAAA2gAGkgvQgFgDgDgEQgDgGgBgGIALAAQAAAFAEADQADADAFAAQAGAAADgDQADgDABgFIAKAAQAAAGgEAGQgDAEgFADQgGACgFAAQgFAAgGgCgAIigyQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIABgEIADgDIAEgBIAFABIADADIABAEIgBAEIgDADQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAgFgyIgDgDIgBgEIABgEIADgDIAEgBIADABIADADIACAEQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgDACIgEgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-55.8,-6.7,111.8,13.4), null);


(lib.btn_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35303E").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_round, new cjs.Rectangle(-20,-20,40,40), null);


(lib.btn_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34303D").s().p("Ap1DIQhTAAg6g6Qg7g7AAhTQAAhSA7g6QA6g7BTAAITrAAQBTAAA6A7QA7A6AABSQAABTg7A7Qg6A6hTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-83,-20,166,40), null);


(lib.box8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag7R3QgCgCoLkAQoLj/gCgDQgCgCGetyQGftzgCgCQVmIHAMABQgHAHmJM+QmONIgCgCQgCgCi3AvQitAtgLAAIAAAAgARWpuIAAAAIAAAAIAAAAg");
	mask.setTransform(132.6,55.3);

	// Слой_1
	this.instance = new lib.boxes2();
	this.instance.parent = this;
	this.instance.setTransform(-220,-165);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box8, new cjs.Rectangle(21.6,-59,198.4,224), null);


(lib.box7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgLSaQgCgDoTkVQoSkWgDgCQgCgDGst+QGrt/gCgDQUNIzALACQgGAGmDM1QmGM+gCgCQgCgDiXBGQiQBEgHAAIAAAAgAQ2pkIAAAAIAAAAIAAAAg");
	mask.setTransform(-5.7,-5.2);

	// Слой_1
	this.instance = new lib.boxes2();
	this.instance.parent = this;
	this.instance.setTransform(-220,-165);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box7, new cjs.Rectangle(-113.4,-123,215.6,235.6), null);


(lib.box6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmZPIQnvisgFgBQABgEhRmTQhSmZACACQAEAFNTxlQADACJ/EiQKAEjACACQADACl8MiQl8MjACACQADADhzAoQhzAoACACIAAAAQgEAAnvisgAuNMbIAAAAIAAAAIAAAAg");
	mask.setTransform(-143,-68);

	// Слой_1
	this.instance = new lib.boxes2();
	this.instance.parent = this;
	this.instance.setTransform(-220,-165);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box6, new cjs.Rectangle(-220,-165,184.1,211.1), null);


(lib.box5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmSO2QoAhugIAAQAFgFB/nMQCDnTACADILtvKQACACCPAKQCPAKACADIEOCxQEMCvACADQADACgUBfQgUBfACADQADACmEMCQmDMCACACIAAAAQgJAAn+hug");
	mask.setTransform(-161.2,-75.5);

	// boxes1.png
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-233,-177);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box5, new cjs.Rectangle(-233,-177,164.1,207.6), null);


(lib.box4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApGPZQjlhMgIgBQAEgEAwipQAzivACADQI6zEAFAFQACADBYioQBXinACACQACADAwgrQAwgqACACQAEAFB0AZQACADClBVQCmBVACACQAEAFDdFZQACADlWLSQlWLSACADQACACj0A6Qj0A5ACADIAAAAQgFAAjphOg");
	mask.setTransform(-70.4,-39.7);

	// boxes1.png
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-233,-177);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box4, new cjs.Rectangle(-152.4,-146,164,212.6), null);


(lib.box3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApBP6QjJhcgGgBQAGgFC9mcQDBmkACACQHzwPAFAFQACACBGhVQBHhVACADQAEAFG5EnQADACAoCKQAoCJACADQADACleLQQleLQACACQACADjnBfQjoBfACACIAAAAQgDAAjNhcg");
	mask.setTransform(5.6,-2);

	// boxes1.png
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-233,-177);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3, new cjs.Rectangle(-72.9,-113,157,222.1), null);


(lib.box2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAR+QgCgCjxgrQjwgqgCgDIkxkYQgCgCB/h2QB/h1gCgDQgCgCCslDQCtlBgDgDQgCgCDenoQDenogDgCQETg3gFgFQgCgDDPCHIDNCFQgFAEmLNOQmNNUgDgDQgCgCg5CqQg5CngDAAIAAAAgANXt0IAAAAIAAAAIAAAAg");
	mask.setTransform(73.2,39.8);

	// boxes1.png
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-233,-177);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2, new cjs.Rectangle(-12.2,-75.2,171,230.1), null);


(lib.box1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuNPyQAEAAgsi0Qgti4AFAEQAFAFHvvTQHuvUAFAFQAFAFHlBaQHmBaAEAFQAFAFiML4QiML4AFAEQAFAFoNGzQoMG0AFAEIAAAAQgJAApFkig");
	mask.setTransform(173.1,72.1);

	// boxes1.png
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-233,-177);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1, new cjs.Rectangle(74.1,-57.9,159,235), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAgxMAAAhBhMAu3AWHMAAAArag");
	this.shape.setTransform(0,90.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00D6D6").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.instance = new lib.btn_txt();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,8.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({y:1.2,alpha:1},8).wait(1));

	// r_part
	this.instance_1 = new lib.r_part();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.8,0,0.875,0.875);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:63.9},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.7,0,0.875,0.875);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-63.7},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой_5
	this.instance_3 = new lib.btn_bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.009,0.875);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:0.88},8,cjs.Ease.get(1)).wait(4));

	// Слой_1
	this.instance_4 = new lib.btn_round();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.012,0.012);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.2,scaleY:1.2},5,cjs.Ease.get(1)).to({scaleX:0.88,scaleY:0.88},4,cjs.Ease.quadInOut).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,0.5,0.5);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:30});

	// timeline functions:
	this.frame_230 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(230).call(this.frame_230).wait(1));

	// t2
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-28.8,116.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({x:-8.8,alpha:1},10,cjs.Ease.cubicOut).wait(70).to({x:11.2,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(35));

	// box
	this.instance_1 = new lib.box8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118,-2.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({_off:false},0).to({x:8,y:-57},10,cjs.Ease.cubicOut).wait(60).to({x:118,y:-2.4},10,cjs.Ease.cubicIn).to({_off:true},1).wait(40));

	// box
	this.instance_2 = new lib.box7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(248.5,57.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105).to({_off:false},0).to({x:8,y:-57},10,cjs.Ease.cubicOut).wait(70).to({x:248.5,y:57.6},10,cjs.Ease.cubicIn).to({_off:true},1).wait(35));

	// box
	this.instance_3 = new lib.box6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(380.1,117.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({x:8,y:-57},10,cjs.Ease.cubicOut).wait(80).to({x:380.1,y:117.1},10,cjs.Ease.cubicIn).to({_off:true},1).wait(30));

	// box
	this.instance_4 = new lib.box5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(163.1,-415);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(60).to({x:163.1,y:-415},10,cjs.Ease.cubicIn).to({_off:true},1).wait(119).to({_off:false},0).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(1));

	// box
	this.instance_5 = new lib.box4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(163.1,-415);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(60).to({x:163.1,y:-415},10,cjs.Ease.cubicIn).to({_off:true},1).wait(119).to({_off:false},0).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(6));

	// box
	this.instance_6 = new lib.box3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(163.1,-415);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(60).to({x:163.1,y:-415},10,cjs.Ease.cubicIn).to({_off:true},1).wait(119).to({_off:false},0).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(11));

	// box
	this.instance_7 = new lib.box2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(163.1,-415);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(60).to({x:163.1,y:-415},10,cjs.Ease.cubicIn).to({_off:true},1).wait(119).to({_off:false},0).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(16));

	// box
	this.instance_8 = new lib.box1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(163.1,-415);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(60).to({x:163.1,y:-415},10,cjs.Ease.cubicIn).to({_off:true},1).wait(119).to({_off:false},0).to({x:-5,y:-59},10,cjs.Ease.cubicOut).wait(21));

	// t1
	this.instance_9 = new lib.t1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-46.8,116.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({x:-26.8,alpha:1},10,cjs.Ease.cubicOut).wait(60).to({x:-6.8,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(119).to({_off:false,x:-46.8},0).to({x:-26.8,alpha:1},10,cjs.Ease.cubicOut).wait(11));

	// urText
	this.instance_10 = new lib.urText();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-19,265);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(231));

	// btn
	this.instance_11 = new lib.btn("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-50,197);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).wait(216));

	// logo
	this.instance_12 = new lib.logo_iqos();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0.8,-258,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(231));

	// bg
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(231));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-592,585.2,892.1);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,7.9,586.2,893.1);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/boxes1.png", id:"boxes1"},
		{src:"images/boxes2.png", id:"boxes2"}
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
an.compositions['0A6E3F5DF6B342F4AF907DBE848CDF8D'] = {
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