(this.webpackJsonpsw=this.webpackJsonpsw||[]).push([[13],{102:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return o}));var r=function(t){return t.vehicles.items},a=function(t){return t.vehicles.loading},c=function(t){return t.vehicles.paginationVehicles.results},i=function(t){return t.vehicles.paginationVehicles.previous},o=function(t){return t.vehicles.paginationVehicles.next}},105:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return r}))},109:function(t,e,n){"use strict";var r=n(0),a=n.n(r),c=n(110),i=n.n(c);e.a=function(t){var e=t.handleButtonClick,n=t.next,r=t.prev;return a.a.createElement("div",{className:i.a.container},a.a.createElement("div",{className:i.a.buttonWrapper},a.a.createElement("button",{className:i.a.button,onClick:function(t){return e(t)},disabled:!r},"prev"),a.a.createElement("button",{className:i.a.button,onClick:function(t){return e(t)},disabled:!n},"next")))}},110:function(t,e,n){t.exports={container:"PaginationBar_container__2jgUk",buttonWrapper:"PaginationBar_buttonWrapper__3oh5r",button:"PaginationBar_button__8Nb_h"}},112:function(t,e,n){"use strict";var r=n(95),a=n(25),c=n.n(a),i=n(1);n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u}));var o=function(t){return function(e){var n="https://swapi.co/api/vehicles/".concat(t);e({type:i.a.FETCH_VEHICLES_BY_ID_REQUEST}),c.a.get(n).then((function(n){var a;e((a=Object(r.a)({},n.data,{id:t}),{type:i.a.FETCH_VEHICLES_BY_ID_SUCCESS,payload:{vehicles:a}}))})).catch((function(t){console.log(t.message),e(function(t){return{type:i.a.FETCH_VEHICLES_BY_ID_ERROR,payload:{error:t}}}(t))}))}},u=function(t){return function(e){e({type:i.a.FETCH_PAGINATION_VEHICLES_REQUEST,payload:[]});var n="https://swapi.co/api/vehicles/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:i.a.FETCH_PAGINATION_VEHICLES_SUCCESS,payload:n}));var n})).catch((function(t){console.log(t.message)}))}}},128:function(t,e,n){t.exports={container:"Vehicles_container__1ZEz7",list:"Vehicles_list__LjUS7",item:"Vehicles_item__GIACf"}},135:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(105),i=n(109),o=n(14),u=n(17),l=n(26),s=n(102),f=n(112),p=n(1),b=n(128),h=n.n(b),v={fetchPaginationVehicles:f.a,modalOnOpen:function(){return{type:p.a.HANDLE_MODAL_OPEN,payload:!0}}},E=Object(o.i)(Object(u.b)((function(t){return{vehicles:s.c(t),prev:s.e(t),next:s.d(t)}}),v)((function(t){var e=t.fetchPaginationVehicles,n=t.vehicles,o=t.prev,u=t.next,s=t.history,f=Object(r.useState)(1),p=Object(c.a)(f,2),b=p[0],v=p[1];Object(r.useEffect)((function(){e(b)}),[b]);return a.a.createElement("div",{className:h.a.container},!n&&a.a.createElement(l.a,null),n&&a.a.createElement("ul",{className:h.a.list},n.map((function(t,e){return a.a.createElement("li",{key:e,className:h.a.item,onClick:function(){return function(t){var e=t.url.split("/")[5];s.push("".concat(e,"/"))}(t)}},a.a.createElement("p",null,t.name))}))),a.a.createElement(i.a,{handleButtonClick:function(t){"next"===t.target.innerText&&v(b+1),"prev"===t.target.innerText&&v(b-1)},next:u,prev:o}))})));n.d(e,"VehiclesPage",(function(){return d}));var d=function(){return a.a.createElement(E,null)};e.default=d},95:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return c}))}}]);
//# sourceMappingURL=13.07c800cf.chunk.js.map