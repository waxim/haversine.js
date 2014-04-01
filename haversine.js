//Create the haversine object
(function(){
	hav = function(unit){

		this._start = "";
		this._end = "";
		this._callback = [];
		this._unit = (unit == 'imperial') ? unit : 'metric';
		
		this._result = "";
		
		this.start = function(start){
			if(typeof start == 'object' && start.length > 0){
				this._start = start;
			} else {
				this.trigger('error','something went wrong');
			}
			
			return this;
			
		}
		
		this.end = function(end){
			if(typeof end == 'object' && end.length > 0){
				this._end = end;
			} else {
				this.trigger('error','something went wrong');
			}
			
			return this;
			
		}
		
		this.on = function(fun, callback){
			if(typeof callback == 'function'){
				this._callback[fun] = callback;
			}
			
			return this;
			
		}
		
		this.trigger = function(fun,att){
			if(typeof this._callback[fun] == 'function'){
				this._callback[fun](att);
			}
			
			return this;
		}

		this.calculate = function(){
				//haversine math:
				var R = 6371; // Radius of the earth in km
				var dLat = (this._end[0] - this._start[0]) * Math.PI / 180;  // deg2rad below
				var dLon = (this._end[1] - this._start[1]) * Math.PI / 180;
				var a = 
					0.5 - Math.cos(dLat)/2 + 
					Math.cos(this._start[0] * Math.PI / 180) * Math.cos(this._end[0] * Math.PI / 180) * 
					(1 - Math.cos(dLon))/2;
				
				var res = R * 2 * Math.asin(Math.sqrt(a));
				
				if(this._unit == 'imperial'){
					res = res * .6214;
				}
				
				this._result = res;
				this.trigger('success',res);
				
				//return this;
				
		}
	}
	
	window.Haversine = hav;

})();
