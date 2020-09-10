!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-sequence"]=t():e["react-sequence"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=3)}([function(e,t,n){"use strict";e.exports=n(5)},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){e.exports=n(8)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(4),u=(r=o)&&r.__esModule?r:{default:r};t.default=u.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=l(o),i=l(n(2)),a=l(n(11));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.values=Array(e.length).fill("").map((function(t,n){return e.initialValue.toString()[n]||""})),n.elements=[],n.currentIndex=0,n.onPaste=n.onPaste.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.focus&&this.props.length&&this.elements[0].focus()}},{key:"clear",value:function(){this.elements.forEach((function(e){return e.clear()})),this.values=this.values.map((function(){})),this.elements[0].focus()}},{key:"focus",value:function(){this.props.length&&this.elements[0].focus()}},{key:"onItemChange",value:function(e,t,n){var r=this.props,o=r.length,u=r.onComplete,i=r.onChange,a=n;this.values[n]=e,1===e.length&&n<o-1&&(a+=1,this.elements[a].focus());var l=this.values.join("");if(t||i(l,a),l.length===o){if(t&&n<o-1)return;u(l,a)}}},{key:"onBackspace",value:function(e){e>0&&this.elements[e-1].focus()}},{key:"onPaste",value:function(e){var t=this.props.length;e.length===t&&this.elements.forEach((function(t,n){return t.update(e[n],!0)}))}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{style:this.props.style,className:"pincode-input-container"},this.values.map((function(t,n){return u.default.createElement(a.default,{initialValue:t,ref:function(t){return e.elements[n]=t},key:n,disabled:e.props.disabled,onBackspace:function(){return e.onBackspace(n)},secret:e.props.secret||!1,onChange:function(t,r){return e.onItemChange(t,r,n)},type:e.props.type,inputMode:e.props.inputMode,validate:e.props.validate,inputStyle:e.props.inputStyle,inputFocusStyle:e.props.inputFocusStyle,autoSelect:e.props.autoSelect,onPaste:0===n?e.onPaste:null})})))}}]),t}(o.Component);s.propTypes={initialValue:i.default.oneOfType([i.default.string,i.default.number]),length:i.default.number.isRequired,type:i.default.string,onComplete:i.default.func,validate:i.default.func,secret:i.default.bool,disabled:i.default.bool,focus:i.default.bool,onChange:i.default.func,inputMode:i.default.string,style:i.default.object,inputStyle:i.default.object,inputFocusStyle:i.default.object,autoSelect:i.default.bool},s.defaultProps={initialValue:"",type:"numeric",secret:!1,validate:null,focus:!1,disabled:!1,onChange:function(){},onComplete:function(){},inputMode:void 0,style:{},inputStyle:{},inputFocusStyle:{},autoSelect:!0},t.default=s},function(e,t,n){"use strict";
/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6),o=n(7),u=n(1),i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.element"):60103,l=i?Symbol.for("react.call"):60104,s=i?Symbol.for("react.return"):60105,c=i?Symbol.for("react.portal"):60106,f=i?Symbol.for("react.fragment"):60107,p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function h(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||y}function v(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||y}function b(){}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&d("85"),this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var m=v.prototype=new b;function g(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||y}m.constructor=v,r(m,h.prototype),m.isPureReactComponent=!0;var O=g.prototype=new b;O.constructor=g,r(O,h.prototype),O.unstable_isAsyncReactComponent=!0,O.render=function(){return this.props.children};var _={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:u,ref:i,props:o,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var w=/\/+/g,x=[];function C(e,t,n,r){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function E(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case l:case s:case c:u=!0}}if(u)return n(r,e,""===t?"."+T(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=t+T(o=e[i],i);u+=E(o,f,n,r)}else if(null==e?f=null:f="function"==typeof(f=p&&e[p]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),i=0;!(o=e.next()).done;)u+=E(o=o.value,f=t+T(o,i++),n,r);else"object"===o&&d("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,u.thatReturnsArgument):null!=e&&(P(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(w,"$&/")+"/")+n,e={$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function F(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(w,"$&/")+"/"),t=C(t,u,r,o),null==e||E(e,"",A,t),R(t)}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=C(null,null,t,n),null==e||E(e,"",M,t),R(t)},count:function(e){return null==e?0:E(e,"",u.thatReturnsNull,null)},toArray:function(e){var t=[];return F(e,t,null,u.thatReturnsArgument),t},only:function(e){return P(e)||d("143"),e}},Component:h,PureComponent:v,unstable_AsyncComponent:g,Fragment:f,createElement:k,cloneElement:function(e,t,n){var o=r({},e.props),u=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=_.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)j.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:a,type:e.type,key:u,ref:i,props:o,_owner:l}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:_,assign:r}},I=Object.freeze({default:q}),$=I&&q||I;e.exports=$.default?$.default:$},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,l=i(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))o.call(n,c)&&(l[c]=n[c]);if(r){a=r(n);for(var f=0;f<a.length;f++)u.call(n,a[f])&&(l[a[f]]=n[a[f]])}}return l}},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";var r=n(1),o=n(9),u=n(10);e.exports=function(){function e(e,t,n,r,i,a){a!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,u,i,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,u,i,a],c=0;(l=new Error(t.replace(/%s/g,(function(){return s[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=a(o),i=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var l={padding:0,margin:"0 2px",textAlign:"center",border:"1px solid",background:"transparent",width:"50px",height:"50px"},s={outline:"none",boxShadow:"none"},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:e.initialValue,focus:!1},n.onChange=n.onChange.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.onFocus=n.onFocus.bind(n),n.onBlur=n.onBlur.bind(n),n.onPaste=n.onPaste.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"onKeyDown",value:function(e){8!==e.keyCode||this.state.value&&this.state.value.length||this.props.onBackspace()}},{key:"clear",value:function(){this.setState({value:""})}},{key:"update",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.validate(e);(this.state.value!==r||n)&&r.length<2&&(this.setState({value:r}),setTimeout((function(){t.props.onChange(r,n)}),0))}},{key:"onChange",value:function(e){this.update(e.target.value)}},{key:"focus",value:function(){this.input.focus()}},{key:"onFocus",value:function(e){this.props.autoSelect&&e.target.select(),this.setState({focus:!0})}},{key:"onBlur",value:function(){this.setState({focus:!1})}},{key:"onPaste",value:function(e){if(this.props.onPaste){var t=e.clipboardData.getData("text");this.props.onPaste(t)}}},{key:"validate",value:function(e){if(this.props.validate)return this.props.validate(e);if("numeric"===this.props.type){var t=e.charCodeAt(0);return t>="0".charCodeAt(0)&&t<="9".charCodeAt(0)?e:""}return e.toUpperCase()}},{key:"render",value:function(){var e=this,t=this.state,n=t.focus,r=t.value,o=this.props,i=o.type,a=o.inputMode,c=o.inputStyle,f=o.inputFocusStyle,p="numeric"===i?"tel":i||"text";return u.default.createElement("input",{disabled:this.props.disabled?"disabled":void 0,className:"pincode-input-text",onChange:this.onChange,onKeyDown:this.onKeyDown,placeholder:r,"aria-label":r,maxLength:"1",autoComplete:"off",type:this.props.secret?"password":p,inputMode:a||"text",pattern:"numeric"===this.props.type?"[0-9]*":"[A-Z0-9]*",ref:function(t){return e.input=t},onFocus:this.onFocus,onBlur:this.onBlur,onPaste:this.onPaste,style:Object.assign({},l,c,n?Object.assign({},s,f):{}),value:r})}}]),t}(o.Component);c.propTypes={initialValue:i.default.string,onChange:i.default.func.isRequired,onBackspace:i.default.func.isRequired,onPaste:i.default.func,secret:i.default.bool,disabled:i.default.bool,type:i.default.string,inputMode:i.default.string,validate:i.default.func,inputStyle:i.default.object.isRequired,inputFocusStyle:i.default.object.isRequired,autoSelect:i.default.bool},c.defaultProps={secret:!1,type:"numeric",inputMode:void 0,validate:void 0,autoSelect:!1,onPaste:void 0},t.default=c}])}));
//# sourceMappingURL=bundle.js.map