# Haversine

haversine.js is a JS class for quick calculations of great circle distances.

## Kitchen Sink

```js
var hav = new Haversine('metric');

hav.start([51.344365,0.733463]);
hav.end([53.909293,-1.596543]);

hav.on('error',function(err){
	console.log('Error:'+err);
});

hav.on('success',function(res){
	console.log('Your haversine is '+res);
});


hav.calculate();

```

## Chaining

```js

var hav = new Haversine('metric');

hav.start([51.344365,0.733463])
.end([53.909293,-1.596543])
.on('error',function(err){
	console.log('Error:'+err);
})
.on('success',function(res){
	console.log('Your haversine is '+res);
})
.hav.calculate();

```
