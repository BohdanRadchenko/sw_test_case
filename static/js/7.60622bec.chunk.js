(this.webpackJsonpsw=this.webpackJsonpsw||[]).push([[7],{100:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return u}));var a=function(t){return t.starships.items},r=function(t){return t.starships.loading},c=function(t){return t.starships.paginationStarships.results},i=function(t){return t.starships.paginationStarships.previous},u=function(t){return t.starships.paginationStarships.next}},102:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),i=n(1);n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return o}));var u=function(t){return function(e){var n="https://swapi.co/api/people/".concat(t);e({type:i.a.FETCH_PEOPLE_BY_ID_REQUEST,payload:{}}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:i.a.FETCH_PEOPLE_BY_ID_SUCCESS,payload:{people:r}}))})).catch((function(t){e(function(t){return{type:i.a.FETCH_PEOPLE_BY_ID_ERROR,payload:{error:t}}}(t))}))}},o=function(t){return function(e){e({type:i.a.FETCH_PAGINATION_PEOPLE_REQUEST,payload:{}});var n="https://swapi.co/api/people/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:i.a.FETCH_PAGINATION_PEOPLE_SUCCESS,payload:n}));var n}))}}},103:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),i=n(1);n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return o}));var u=function(t){return function(e){var n="https://swapi.co/api/planets/".concat(t);e({type:i.a.FETCH_PLANETS_BY_ID_REQUEST,payload:{}}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:i.a.FETCH_PLANETS_BY_ID_SUCCESS,payload:{planets:r}}))})).catch((function(t){e(function(t){return{type:i.a.FETCH_PLANETS_BY_ID_ERROR,payload:{error:t}}}(t))}))}},o=function(t){return function(e){e({type:i.a.FETCH_PAGINATION_PLANETS_REQUEST,payload:[]});var n="https://swapi.co/api/planets/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:i.a.FETCH_PAGINATION_PLANETS_SUCCESS,payload:n}));var n}))}}},105:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),i=n(1);n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return o}));var u=function(t){return function(e){var n="https://swapi.co/api/species/".concat(t);e({type:i.a.FETCH_SPECIES_BY_ID_REQUEST}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:i.a.FETCH_SPECIES_BY_ID_SUCCESS,payload:{species:r}}))})).catch((function(t){e(function(t){return{type:i.a.FETCH_SPECIES_BY_ID_ERROR,payload:{error:t}}}(t))}))}},o=function(t){return function(e){e({type:i.a.FETCH_PAGINATION_SPECIES_REQUEST,payload:[]});var n="https://swapi.co/api/species/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:i.a.FETCH_PAGINATION_SPECIES_SUCCESS,payload:n}));var n}))}}},106:function(t,e,n){"use strict";var a=n(0),r=n.n(a),c=n(7),i=n(17),u=n(97),o=n(26),p={position:"relative",display:"block"};e.a=Object(i.b)((function(t){return{loading:u.a(t)}}))((function(t){var e=t.people,n=t.loading;return r.a.createElement("div",{style:p},n&&r.a.createElement(o.a,null),!n&&r.a.createElement(r.a.Fragment,null,!!e.length&&r.a.createElement("ul",null,e.map((function(t,e){return r.a.createElement("li",{key:9*e},r.a.createElement(c.c,{to:"/people/".concat(t.id)},t.name))})))))}))},107:function(t,e,n){"use strict";var a=n(0),r=n.n(a),c=n(7),i=n(17),u=n(96),o=n(26),p={position:"relative",display:"block"};e.a=Object(i.b)((function(t){return{loading:u.b(t)}}))((function(t){var e=t.film,n=t.loading;return r.a.createElement("div",{style:p},n&&r.a.createElement(o.a,null),!n&&r.a.createElement(r.a.Fragment,null,!!e.length&&r.a.createElement("ul",null,e.map((function(t,e){return r.a.createElement("li",{key:t.episode_id},r.a.createElement(c.c,{to:"/films/".concat(t.episode_id)},t.title))})))))}))},109:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),i=n(1);n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return o}));var u=function(t){return function(e){var n="https://swapi.co/api/vehicles/".concat(t);e({type:i.a.FETCH_VEHICLES_BY_ID_REQUEST}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:i.a.FETCH_VEHICLES_BY_ID_SUCCESS,payload:{vehicles:r}}))})).catch((function(t){e(function(t){return{type:i.a.FETCH_VEHICLES_BY_ID_ERROR,payload:{error:t}}}(t))}))}},o=function(t){return function(e){e({type:i.a.FETCH_PAGINATION_VEHICLES_REQUEST,payload:[]});var n="https://swapi.co/api/vehicles/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:i.a.FETCH_PAGINATION_VEHICLES_SUCCESS,payload:n}));var n}))}}},110:function(t,e,n){"use strict";var a=n(95),r=n(25),c=n.n(r),i=n(1);n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return o}));var u=function(t){return function(e){var n="https://swapi.co/api/starships/".concat(t);e({type:i.a.FETCH_STARSHIPS_BY_ID_REQUEST,payload:{}}),c.a.get(n).then((function(n){var r;e((r=Object(a.a)({},n.data,{id:t}),{type:i.a.FETCH_STARSHIPS_BY_ID_SUCCESS,payload:{planets:r}}))})).catch((function(t){e(function(t){return{type:i.a.FETCH_STARSHIPS_BY_ID_ERROR,payload:{error:t}}}(t))}))}},o=function(t){return function(e){e({type:i.a.FETCH_PAGINATION_STARSHIPS_REQUEST,payload:[]});var n="https://swapi.co/api/starships/?page=".concat(t);c.a.get(n).then((function(t){return e((n=t.data,{type:i.a.FETCH_PAGINATION_STARSHIPS_SUCCESS,payload:n}));var n}))}}},130:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(17),i=n(14),u=n(97),o=n(96),p=n(106),l=n(107),s=Object(c.b)((function(t){return{allFilms:o.a(t),allPeople:u.b(t)}}))((function(t){var e=t.name,n=t.model,a=t.manufacturer,c=t.cost_in_credits,u=t.length,o=t.max_atmosphering_speed,s=t.crew,f=t.passengers,E=t.cargo_capacity,d=t.consumables,_=t.hyperdrive_rating,S=t.MGLT,m=t.starship_class,y=(t.pilots,t.films),h=t.allPeople,v=t.allFilms,b=Object(i.g)(),g=y.map((function(t){return Number(t.split("/")[5])})),I=v.filter((function(t){return g.includes(t.episode_id)}));return r.a.createElement("div",null,r.a.createElement("p",null,"Name : ",e),r.a.createElement("p",null,"model : ",n),r.a.createElement("p",null,"manufacturer : ",a),r.a.createElement("p",null,"cost_in_credits : ",c),r.a.createElement("p",null,"length : ",u),r.a.createElement("p",null,"max_atmosphering_speed : ",o),r.a.createElement("p",null,"crew : ",s),r.a.createElement("p",null,"passengers : ",f),r.a.createElement("p",null,"cargo_capacity : ",E),r.a.createElement("p",null,"consumables : ",d),r.a.createElement("p",null,"hyperdrive_rating : ",_),r.a.createElement("p",null,"MGLT : ",S),r.a.createElement("p",null,"starship_class : ",m),!!h.length&&r.a.createElement("div",null,r.a.createElement("h2",null,"pilots"),r.a.createElement(p.a,{people:h})),!!v.length&&r.a.createElement("div",null,r.a.createElement("h2",null,"films"),r.a.createElement(l.a,{film:I})),r.a.createElement("button",{className:"btn darken-4 right",onClick:function(){b.goBack()}},"Back"))})),f=(n(99),n(100)),E=n(102),d=n(103),_=n(110),S=n(109),m=n(105),y={fetchPeopleById:E.b,fetchPlanetsById:d.b,fetchStarshipsById:_.b,fetchVehiclesById:S.b,fetchSpeciesById:m.b};e.default=Object(c.b)((function(t){return{starships:f.b(t)}}),y)((function(t){var e=t.starships,n=t.fetchStarshipsById,c=t.fetchPeopleById,u=Number(Object(i.h)().id);return Object(a.useEffect)((function(){n(u)}),[]),e[0]&&e[0].pilots.map((function(t){var e=Number(t.split("/")[5]);return c(e)})),r.a.createElement("div",null,e[0]&&r.a.createElement(s,e[0]))}))},95:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return c}))},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a=function(t){return t.films.items},r=function(t){return t.films.loading}},97:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return u}));var a=function(t){return t.people.items.sort((function(t,e){return t.name>e.name}))},r=function(t){return t.people.loading},c=function(t){return t.people.paginationPeople.results},i=function(t){return t.people.paginationPeople.previous},u=function(t){return t.people.paginationPeople.next}},99:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return u}));var a=function(t){return t.species.items},r=function(t){return t.species.loading},c=function(t){return t.species.paginationSpecies.results},i=function(t){return t.species.paginationSpecies.previous},u=function(t){return t.species.paginationSpecies.next}}}]);
//# sourceMappingURL=7.60622bec.chunk.js.map