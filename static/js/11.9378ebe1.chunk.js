(this.webpackJsonpsw=this.webpackJsonpsw||[]).push([[11],{101:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),o=n(1);n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s}));var i=function(t){return function(e){var n="https://swapi.co/api/species/".concat(t);e({type:o.a.FETCH_SPECIES_BY_ID_REQUEST}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:o.a.FETCH_SPECIES_BY_ID_SUCCESS,payload:{species:r}}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.FETCH_SPECIES_BY_ID_ERROR,payload:{error:t}}}(t))}))}},u=function(t){return function(e){var n="https://swapi.co/api/species/?search=".concat(t);e({type:o.a.SEARCH_SPECIES_REQUEST,payload:{}}),c.a.get(n).then((function(t){var n;e((n=t.data.results,{type:o.a.SEARCH_SPECIES_SUCCESS,payload:n}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.SEARCH_SPECIES_ERROR,payload:{error:t}}}(t))}))}},s=function(t){return function(e){e({type:o.a.FETCH_PAGINATION_SPECIES_REQUEST,payload:[]});var n="https://swapi.co/api/species/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:o.a.FETCH_PAGINATION_SPECIES_SUCCESS,payload:n}));var n})).catch((function(t){console.log(t.message)}))}}},104:function(t,e,n){"use strict";function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(u){r=!0,c=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return a}))},105:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),o=n(1);n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s}));var i=function(t){return function(e){var n="https://swapi.co/api/vehicles/".concat(t);e({type:o.a.FETCH_VEHICLES_BY_ID_REQUEST}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:o.a.FETCH_VEHICLES_BY_ID_SUCCESS,payload:{vehicles:r}}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.FETCH_VEHICLES_BY_ID_ERROR,payload:{error:t}}}(t))}))}},u=function(t){return function(e){var n="https://swapi.co/api/vehicles/?search=".concat(t);e({type:o.a.SEARCH_VEHICLES_REQUEST,payload:{}}),c.a.get(n).then((function(t){var n;e((n=t.data.results,{type:o.a.SEARCH_VEHICLES_SUCCESS,payload:n}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.SEARCH_VEHICLES_ERROR,payload:{error:t}}}(t))}))}},s=function(t){return function(e){e({type:o.a.FETCH_PAGINATION_VEHICLES_REQUEST,payload:[]});var n="https://swapi.co/api/vehicles/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:o.a.FETCH_PAGINATION_VEHICLES_SUCCESS,payload:n}));var n})).catch((function(t){console.log(t.message)}))}}},106:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),o=n(1);n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s}));var i=function(t){return function(e){var n="https://swapi.co/api/starships/".concat(t);e({type:o.a.FETCH_STARSHIPS_BY_ID_REQUEST,payload:{}}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:o.a.FETCH_STARSHIPS_BY_ID_SUCCESS,payload:{planets:r}}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.FETCH_STARSHIPS_BY_ID_ERROR,payload:{error:t}}}(t))}))}},u=function(t){return function(e){var n="https://swapi.co/api/starships/?search=".concat(t);e({type:o.a.SEARCH_STARSHIPS_REQUEST,payload:{}}),c.a.get(n).then((function(t){var n;e((n=t.data.results,{type:o.a.SEARCH_STARSHIPS_SUCCESS,payload:n}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.SEARCH_STARSHIPS_ERROR,payload:{error:t}}}(t))}))}},s=function(t){return function(e){e({type:o.a.FETCH_PAGINATION_STARSHIPS_REQUEST,payload:[]});var n="https://swapi.co/api/starships/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:o.a.FETCH_PAGINATION_STARSHIPS_SUCCESS,payload:n}));var n})).catch((function(t){console.log(t.message)}))}}},109:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return u}));var a=function(t){return t.vehicles.items},r=function(t){return t.vehicles.loading},c=function(t){return t.vehicles.search},o=function(t){return t.vehicles.paginationVehicles.results},i=function(t){return t.vehicles.paginationVehicles.previous},u=function(t){return t.vehicles.paginationVehicles.next}},113:function(t,e,n){"use strict";var a=n(0),r=n.n(a),c=n(114),o=n.n(c);e.a=function(t){var e=t.handleButtonClick,n=t.next,a=t.prev;return r.a.createElement("div",{className:o.a.container},r.a.createElement("div",{className:o.a.buttonWrapper},r.a.createElement("button",{className:o.a.button,onClick:function(t){return e(t)},disabled:!a},"prev"),r.a.createElement("button",{className:o.a.button,onClick:function(t){return e(t)},disabled:!n},"next")))}},114:function(t,e,n){t.exports={container:"PaginationBar_container__2jgUk",buttonWrapper:"PaginationBar_buttonWrapper__3oh5r",button:"PaginationBar_button__8Nb_h"}},115:function(t,e,n){"use strict";var a=n(104),r=n(0),c=n.n(r),o=n(17),i=n(99),u=n(98),s=n(101),p=n(106),l=n(105),E=n(116),f=n.n(E),S={searchPeople:i.c,searchPlanets:u.c,searchSpecies:s.c,searchStarships:p.c,searchVehicles:l.c};e.a=Object(o.b)(null,S)((function(t){var e=t.component,n=t.searchPeople,o=t.searchPlanets,i=t.searchSpecies,u=t.searchStarships,s=t.searchVehicles,p=Object(r.useState)(""),l=Object(a.a)(p,2),E=l[0],S=l[1],_=function(t){t.preventDefault(),"people"===e&&n(E),"planets"===e&&o(E),"species"===e&&i(E),"starships"===e&&u(E),"vehicles"===e&&s(E)};return c.a.createElement("div",{className:f.a.container},c.a.createElement("form",{className:f.a.form,onSubmit:function(t){return _(t)}},c.a.createElement("input",{value:E,placeholder:"Search...",className:f.a.input,type:"text",onChange:function(t){return function(t){S(t.target.value),t.preventDefault(),"people"===e&&n(E),"planets"===e&&o(E),"species"===e&&i(E),"starships"===e&&u(E),"vehicles"===e&&s(E)}(t)}}),c.a.createElement("button",{className:f.a.button,type:"submit",onClick:function(t){return _(t)}},"search")))}))},116:function(t,e,n){t.exports={container:"SearchForm_container__1jo9s",form:"SearchForm_form__LqzlB",input:"SearchForm_input__2ux4l",button:"SearchForm_button__36yXT"}},130:function(t,e,n){t.exports={container:"Vehicles_container__1ZEz7",list:"Vehicles_list__LjUS7",item:"Vehicles_item__GIACf"}},140:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(104),o=n(113),i=n(14),u=n(17),s=n(26),p=n(109),l=n(105),E=n(115),f=n(130),S=n.n(f),_={fetchPaginationVehicles:l.a},h=Object(i.i)(Object(u.b)((function(t){return{vehicles:p.c(t),prev:p.e(t),next:p.d(t),vehiclesSearch:p.f(t)}}),_)((function(t){var e=t.fetchPaginationVehicles,n=t.vehicles,i=t.prev,u=t.next,p=t.history,l=t.vehiclesSearch,f=Object(a.useState)(1),_=Object(c.a)(f,2),h=_[0],d=_[1];Object(a.useEffect)((function(){e(h)}),[h]);var y=function(t){var e=t.url.split("/")[5];p.push("".concat(e,"/"))};return r.a.createElement("div",{className:S.a.container},r.a.createElement(E.a,{component:"vehicles"}),0!==l.length&&r.a.createElement("ul",{className:S.a.list},l.map((function(t,e){return r.a.createElement("li",{key:e,onClick:function(){return y(t)},className:S.a.item},r.a.createElement("p",null,t.name))}))),0===l.length&&r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement(s.a,null),n&&r.a.createElement("ul",{className:S.a.list},n.map((function(t,e){return r.a.createElement("li",{key:e,className:S.a.item,onClick:function(){return y(t)}},r.a.createElement("p",null,t.name))})))),r.a.createElement(o.a,{handleButtonClick:function(t){"next"===t.target.innerText&&d(h+1),"prev"===t.target.innerText&&d(h-1)},next:u,prev:i}))})));n.d(e,"VehiclesPage",(function(){return d}));var d=function(){return r.a.createElement(h,null)};e.default=d},95:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(97);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},97:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}))},98:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),o=n(1);n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s}));var i=function(t){return function(e){var n="https://swapi.co/api/planets/".concat(t);e({type:o.a.FETCH_PLANETS_BY_ID_REQUEST,payload:{}}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:o.a.FETCH_PLANETS_BY_ID_SUCCESS,payload:{planets:r}}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.FETCH_PLANETS_BY_ID_ERROR,payload:{error:t}}}(t))}))}},u=function(t){return function(e){var n="https://swapi.co/api/planets/?search=".concat(t);e({type:o.a.SEARCH_PLANETS_REQUEST,payload:{}}),c.a.get(n).then((function(t){var n;console.log(t.data),e((n=t.data.results,{type:o.a.SEARCH_PLANETS_SUCCESS,payload:n}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.SEARCH_PLANETS_ERROR,payload:{error:t}}}(t))}))}},s=function(t){return function(e){e({type:o.a.FETCH_PAGINATION_PLANETS_REQUEST,payload:[]});var n="https://swapi.co/api/planets/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:o.a.FETCH_PAGINATION_PLANETS_SUCCESS,payload:n}));var n})).catch((function(t){console.log(t.message)}))}}},99:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),o=n(1);n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s}));var i=function(t){return function(e){var n="https://swapi.co/api/people/".concat(t);e({type:o.a.FETCH_PEOPLE_BY_ID_REQUEST,payload:{}}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:o.a.FETCH_PEOPLE_BY_ID_SUCCESS,payload:{people:r}}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.FETCH_PEOPLE_BY_ID_ERROR,payload:{error:t}}}(t))}))}},u=function(t){return function(e){var n="https://swapi.co/api/people/?search=".concat(t);e({type:o.a.SEARCH_PEOPLE_REQUEST,payload:{}}),c.a.get(n).then((function(t){var n;e((n=t.data.results,{type:o.a.SEARCH_PEOPLE_SUCCESS,payload:n}))})).catch((function(t){console.log(t.message),e(function(t){return{type:o.a.SEARCH_PEOPLE_ERROR,payload:{error:t}}}(t))}))}},s=function(t){return function(e){e({type:o.a.FETCH_PAGINATION_PEOPLE_REQUEST,payload:{}});var n="https://swapi.co/api/people/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:o.a.FETCH_PAGINATION_PEOPLE_SUCCESS,payload:n}));var n})).catch((function(t){console.log(t.message)}))}}}}]);
//# sourceMappingURL=11.9378ebe1.chunk.js.map