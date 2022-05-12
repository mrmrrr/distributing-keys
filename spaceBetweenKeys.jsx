//object.keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

//defineProperty
(function(self, undefined) {function ArrayCreate(r){if(1/r==-Infinity&&(r=0),r>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var n=[];return n.length=r,n}function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function Get(n,t){return n[t]}function HasOwnProperty(r,t){return Object.prototype.hasOwnProperty.call(r,t)}function HasProperty(n,r){return r in n}function IsArray(r){return"[object Array]"===Object.prototype.toString.call(r)}function IsCallable(n){return"function"==typeof n}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function GetPrototypeFromConstructor(t,o){var r=Get(t,"prototype");return"object"!==Type(r)&&(r=o),r}function IsConstructor(t){return"object"===Type(t)&&("function"==typeof t&&!!t.prototype)}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function ToInteger(n){if("symbol"===Type(n))throw new TypeError("Cannot convert a Symbol value to a number");var t=Number(n);return isNaN(t)?0:1/t===Infinity||1/t==-Infinity||t===Infinity||t===-Infinity?t:(t<0?-1:1)*Math.floor(Math.abs(t))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}function ToPropertyKey(r){var i=ToPrimitive(r,String);return"symbol"===Type(i)?i:ToString(i)}if (!("defineProperty"in Object&&function(){try{var e={}
return Object.defineProperty(e,"test",{value:42}),!0}catch(t){return!1}}()
)) {!function(e){var t=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),r="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function n(o,i,f){if(e&&(o===window||o===document||o===Element.prototype||o instanceof Element))return e(o,i,f);if(null===o||!(o instanceof Object||"object"==typeof o))throw new TypeError("Object.defineProperty called on non-object");if(!(f instanceof Object))throw new TypeError("Property description must be an object");var c=String(i),a="value"in f||"writable"in f,p="get"in f&&typeof f.get,s="set"in f&&typeof f.set;if(p){if(p===undefined)return o;if("function"!==p)throw new TypeError("Getter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(a)throw new TypeError(r);Object.__defineGetter__.call(o,c,f.get)}else o[c]=f.value;if(s){if(s===undefined)return o;if("function"!==s)throw new TypeError("Setter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(a)throw new TypeError(r);Object.__defineSetter__.call(o,c,f.set)}return"value"in f&&(o[c]=f.value),o}}(Object.defineProperty);}function CreateDataProperty(e,r,t){var a={value:t,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(e,r,a),!0}catch(n){return!1}}function CreateDataPropertyOrThrow(t,r,o){var e=CreateDataProperty(t,r,o);if(!e)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(o)+"` to property `"+Object.prototype.toString.call(r)+"` on object `"+Object.prototype.toString.call(t)+"`");return e}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}if (!("bind"in Function.prototype
)) {CreateMethodProperty(Function.prototype,"bind",function t(n){var r=Array,o=Object,e=r.prototype,l=function g(){},p=e.slice,a=e.concat,i=e.push,c=Math.max,u=this;if(!IsCallable(u))throw new TypeError("Function.prototype.bind called on incompatible "+u);for(var y,h=p.call(arguments,1),s=function(){if(this instanceof y){var t=u.apply(this,a.call(h,p.call(arguments)));return o(t)===t?t:this}return u.apply(n,a.call(h,p.call(arguments)))},f=c(0,u.length-h.length),b=[],d=0;d<f;d++)i.call(b,"$"+d);return y=Function("binder","return function ("+b.join(",")+"){ return binder.apply(this, arguments); }")(s),u.prototype&&(l.prototype=u.prototype,y.prototype=new l,l.prototype=null),y});}if (!("getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()
)) {!function(){var e=Object.getOwnPropertyDescriptor,t=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(e){return!1}},r={}.toString,n="".split;CreateMethodProperty(Object,"getOwnPropertyDescriptor",function c(o,i){var a=ToObject(o);a=("string"===Type(a)||a instanceof String)&&"[object String]"==r.call(o)?n.call(o,""):Object(o);var u=ToPropertyKey(i);if(t)try{return e(a,u)}catch(l){}if(HasOwnProperty(a,u))return{enumerable:!0,configurable:!0,writable:!0,value:a[u]}})}();}if (!("getPrototypeOf"in Object
)) {CreateMethodProperty(Object,"getPrototypeOf",function t(o){if(o!==Object(o))throw new TypeError("Object.getPrototypeOf called on non-object");var e=o.__proto__;return e||null===e?e:"function"==typeof o.constructor&&o instanceof o.constructor?o.constructor.prototype:o instanceof Object?Object.prototype:null});}if (!("keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()
)) {CreateMethodProperty(Object,"keys",function(){"use strict";function t(){var t;try{t=Object.create({})}catch(r){return!0}return o.call(t,"__proto__")}function r(t){var r=n.call(t),e="[object Arguments]"===r;return e||(e="[object Array]"!==r&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),e}var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=Object.prototype.propertyIsEnumerable,c=!o.call({toString:null},"toString"),l=o.call(function(){},"prototype"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(t){var r=t.constructor;return r&&r.prototype===t},a={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!a["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{u(window[t])}catch(r){return!0}}catch(r){return!0}return!1}(),p=function(t){if("undefined"==typeof window||!f)return u(t);try{return u(t)}catch(r){return!1}};return function s(o){var u="[object Function]"===n.call(o),a=r(o),f="[object String]"===n.call(o),s=[];if(o===undefined||null===o)throw new TypeError("Cannot convert undefined or null to object");var y=l&&u;if(f&&o.length>0&&!e.call(o,0))for(var h=0;h<o.length;++h)s.push(String(h));if(a&&o.length>0)for(var g=0;g<o.length;++g)s.push(String(g));else for(var w in o)t()&&"__proto__"===w||y&&"prototype"===w||!e.call(o,w)||s.push(String(w));if(c)for(var d=p(o),$=0;$<i.length;++$)d&&"constructor"===i[$]||!e.call(o,i[$])||s.push(i[$]);return s}}());}function EnumerableOwnProperties(e,r){for(var t=Object.keys(e),n=[],s=t.length,a=0;a<s;a++){var i=t[a];if("string"===Type(i)){var u=Object.getOwnPropertyDescriptor(e,i);if(u&&u.enumerable)if("key"===r)n.push(i);else{var p=Get(e,i);if("value"===r)n.push(p);else{var f=[i,p];n.push(f)}}}}return n}if (!("entries"in Object
)) {!function(){var e={}.toString,t="".split;CreateMethodProperty(Object,"entries",function r(n){var i=ToObject(n);return i=("string"===Type(i)||i instanceof String)&&"[object String]"==e.call(n)?t.call(n,""):Object(n),EnumerableOwnProperties(i,"key+value")})}();}if (!("defineProperties"in Object
)) {CreateMethodProperty(Object,"defineProperties",function e(r,t){if("object"!==Type(r))throw new TypeError("Object.defineProperties called on non-object");for(var o=ToObject(t),n=Object.keys(o),c=[],i=0;i<n.length;i++){var b=n[i],f=Object.getOwnPropertyDescriptor(o,b);if(f!==undefined&&f.enumerable){var p=Get(o,b),a=p;c.push([b,a])}}for(var j=0;j<c.length;j++){var d=c[j][0];a=c[j][1],Object.defineProperty(r,d,a)}return r});}if (!("create"in Object
)) {!function(){function e(){}if({__proto__:null}instanceof Object)t=function(){var e=document.createElement("iframe");e.style.display="none";var o=document.body||document.documentElement;o.appendChild(e),e.src="javascript:";var n=e.contentWindow.Object.prototype;o.removeChild(e),e=null,delete n.constructor,delete n.hasOwnProperty,delete n.propertyIsEnumerable,delete n.isPrototypeOf,delete n.toLocaleString,delete n.toString,delete n.valueOf;var r=function l(){};return r.prototype=n,t=function(){return new r},new r};else var t=function(){return{__proto__:null}};CreateMethodProperty(Object,"create",function o(n,r){if("object"!==Type(n)&&"null"!==Type(n))throw new TypeError("Object prototype may only be an Object or null");if("null"===Type(n))var l=t();else e.prototype=n,l=new e,l.__proto__=n,l.constructor.prototype=n,l.__proto__=n;return 1 in arguments?Object.defineProperties(l,r):l})}();}function OrdinaryCreateFromConstructor(r,e){var t=arguments[2]||{},o=GetPrototypeFromConstructor(r,e),a=Object.create(o);for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&Object.defineProperty(a,n,{configurable:!0,enumerable:!1,writable:!0,value:t[n]});return a}function Construct(r){var t=arguments.length>2?arguments[2]:r,o=arguments.length>1?arguments[1]:[];if(!IsConstructor(r))throw new TypeError("F must be a constructor.");if(!IsConstructor(t))throw new TypeError("newTarget must be a constructor.");if(t===r)return new(Function.prototype.bind.apply(r,[null].concat(o)));var n=OrdinaryCreateFromConstructor(t,Object.prototype);return Call(r,n,o)}function ArraySpeciesCreate(e,r){if(0===r&&1/r==-Infinity&&(r=0),!1===IsArray(e))return ArrayCreate(r);var n=Get(e,"constructor");if("object"===Type(n)&&null===(n="Symbol"in self&&"species"in self.Symbol?Get(n,self.Symbol.species):undefined)&&(n=undefined),n===undefined)return ArrayCreate(r);if(!IsConstructor(n))throw new TypeError("C must be a constructor");return Construct(n,[r])}if (!("map"in Array.prototype
)) {CreateMethodProperty(Array.prototype,"map",function r(e){var t=ToObject(this),a=ToLength(Get(t,"length"));if(!1===IsCallable(e))throw new TypeError(e+" is not a function");for(var o=arguments.length>1?arguments[1]:undefined,n=ArraySpeciesCreate(t,a),i=0;i<a;){var p=ToString(i);if(HasProperty(t,p)){var h=Get(t,p),l=Call(e,o,[h,i,t]);CreateDataPropertyOrThrow(n,p,l)}i+=1}return n});}if (!("values"in Object
)) {!function(){var t={}.toString,e="".split;CreateMethodProperty(Object,"values",function r(n){var c="[object String]"==t.call(n)?e.call(n,""):ToObject(n);return Object.keys(c).map(function(t){return c[t]})})}();}})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

app.beginUndoGroup("Distribute keys");
var comp = app.project.activeItem;
var layers = comp.selectedLayers;

var OBJ = {};
var layerName_for;
var propertyName_for;

var keyValue;

var KEY1_time;
var KEYlast_index;
var lenTime;
var step;
var lastIndex;
var timeToPush;

var SELECTED_PROP;
var VALUE_TO_PASTE;
var NEW_TIMES_PASTE;

//creates this object
// OBJ = { 
//     layerName : { 
//         propertyName : {
//                         values : [ ] - keyframe values
//                         times : [ ] - keyframe times
//         }
//      }
// }
for(i=0;i<layers.length;i++){

        layerName_for = layers[i].name;
        Object.defineProperty(OBJ, layerName_for,{ value:{} });
        
        for(k=0;k<layers[i].selectedProperties.length;k++){
                if(!layers[i].selectedProperties[k].selectedKeys){
                        continue;
                }
            
                propertyName_for = layers[i].selectedProperties[k].name;
                
                Object.defineProperty( OBJ[layerName_for], propertyName_for, {value:{}} );
                
                OBJ[layerName_for][propertyName_for].values = [];
                OBJ[layerName_for][propertyName_for].times = [];
                
                for(j=0;j<layers[i].selectedProperties[k].selectedKeys.length;j++){
                        keyValue = layers[i].selectedProperties[k].selectedKeys[j];
                        
                        OBJ[layerName_for][propertyName_for].values.push(layers[i].selectedProperties[k].keyValue(keyValue));
                        OBJ[layerName_for][propertyName_for].times.push(layers[i].selectedProperties[k].keyTime(keyValue));
                };
        };
}        
; 


// RECALCULATE TIMES
// adding new property with times
//         propertyName : {
//                         values : [ ] - keyframe values
//                         times : [ ] - keyframe times
//                         NEW_TIMES  :  [ ] - new keyframe times
//         }
for(i=0; i<layers.length;i++){
        
        layerName_for = layers[i].name;
        
        for(k=0; k<Object.keys(OBJ[layerName_for]).length;k++){

                propertyName_for = Object.keys(OBJ[layerName_for])[k];
                Object.defineProperty(OBJ[layerName_for][propertyName_for], 'NEW_TIMES', {value:[]} );
                
                lastIndex = OBJ[layerName_for][propertyName_for].times.length-1;
                KEY1_time = OBJ[layerName_for][propertyName_for].times[0];
                KEYlast_time = OBJ[layerName_for][propertyName_for].times[lastIndex];
                lenTime = KEYlast_time - KEY1_time;
                step = lenTime/lastIndex;
                
                for(j=0; j<OBJ[layerName_for][propertyName_for].times.length;j++){
                   
                        if(j==0){
                                OBJ[layerName_for][propertyName_for].NEW_TIMES.push(KEY1_time);
                                continue;
                        }
                        if(j==lastIndex){
                                OBJ[layerName_for][propertyName_for].NEW_TIMES.push( KEYlast_time);
                                continue;
                        }
                        
                        timeToPush = (j*step)+KEY1_time;
                        OBJ[layerName_for][propertyName_for].NEW_TIMES.push(timeToPush);
                };
        };
}        
; 

// REPLACES KEYS
for(i=0; i<Object.keys(OBJ).length;i++){
        
        layerName_for = layers[i].name;
        
        for(k=0; k<Object.keys(OBJ[layerName_for]).length;k++){
                    
                propertyName_for = Object.keys(OBJ[layerName_for])[k];
                SELECTED_PROP = comp.layer(layerName_for).property(propertyName_for);
                lastIndex = OBJ[layerName_for][propertyName_for].times.length-1;
                KEYlast_time = OBJ[layerName_for][propertyName_for].times[lastIndex];
                VALUE_TO_PASTE = OBJ[layerName_for][propertyName_for].values;
                NEW_TIMES_PASTE = OBJ[layerName_for][propertyName_for].NEW_TIMES;
                
                for(j=0; j<OBJ[layerName_for][propertyName_for].times.length;j++){
                        
                        if(j==lastIndex){
                                SELECTED_PROP.removeKey(j+1);
                                SELECTED_PROP.setValueAtTime(KEYlast_time, VALUE_TO_PASTE[lastIndex]);
                                continue;
                        }
                        SELECTED_PROP.removeKey(j+1);
                        SELECTED_PROP.setValueAtTime(NEW_TIMES_PASTE[j],VALUE_TO_PASTE[j]);
               };
        };
}        
; 
app.endUndoGroup();
