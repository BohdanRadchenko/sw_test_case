(this.webpackJsonpsw=this.webpackJsonpsw||[]).push([[5],{100:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u}));var a=function(e){return e.starships.items},r=function(e){return e.starships.loading},i=function(e){return e.starships.paginationStarships.results},c=function(e){return e.starships.paginationStarships.previous},u=function(e){return e.starships.paginationStarships.next}},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u}));var a=function(e){return e.vehicles.items},r=function(e){return e.vehicles.loading},i=function(e){return e.vehicles.paginationVehicles.results},c=function(e){return e.vehicles.paginationVehicles.previous},u=function(e){return e.vehicles.paginationVehicles.next}},102:function(e,t,n){"use strict";var a=n(95),r=n(25),i=n.n(r),c=n(1);n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var u=function(e){return function(t){var n="https://swapi.co/api/people/".concat(e);t({type:c.a.FETCH_PEOPLE_BY_ID_REQUEST,payload:{}}),i.a.get(n).then((function(n){var r;t((r=Object(a.a)({},n.data,{id:e}),{type:c.a.FETCH_PEOPLE_BY_ID_SUCCESS,payload:{people:r}}))})).catch((function(e){t(function(e){return{type:c.a.FETCH_PEOPLE_BY_ID_ERROR,payload:{error:e}}}(e))}))}},o=function(e){return function(t){t({type:c.a.FETCH_PAGINATION_PEOPLE_REQUEST,payload:{}});var n="https://swapi.co/api/people/?page=".concat(e);i.a.get(n).then((function(e){return t((n=e.data,{type:c.a.FETCH_PAGINATION_PEOPLE_SUCCESS,payload:n}));var n}))}}},103:function(e,t,n){"use strict";var a=n(95),r=n(25),i=n.n(r),c=n(1);n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var u=function(e){return function(t){var n="https://swapi.co/api/planets/".concat(e);t({type:c.a.FETCH_PLANETS_BY_ID_REQUEST,payload:{}}),i.a.get(n).then((function(n){var r;t((r=Object(a.a)({},n.data,{id:e}),{type:c.a.FETCH_PLANETS_BY_ID_SUCCESS,payload:{planets:r}}))})).catch((function(e){t(function(e){return{type:c.a.FETCH_PLANETS_BY_ID_ERROR,payload:{error:e}}}(e))}))}},o=function(e){return function(t){t({type:c.a.FETCH_PAGINATION_PLANETS_REQUEST,payload:[]});var n="https://swapi.co/api/planets/?page=".concat(e);i.a.get(n).then((function(e){return t((n=e.data,{type:c.a.FETCH_PAGINATION_PLANETS_SUCCESS,payload:n}));var n}))}}},105:function(e,t,n){"use strict";var a=n(95),r=n(25),i=n.n(r),c=n(1);n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var u=function(e){return function(t){var n="https://swapi.co/api/species/".concat(e);t({type:c.a.FETCH_SPECIES_BY_ID_REQUEST}),i.a.get(n).then((function(n){var r;t((r=Object(a.a)({},n.data,{id:e}),{type:c.a.FETCH_SPECIES_BY_ID_SUCCESS,payload:{species:r}}))})).catch((function(e){t(function(e){return{type:c.a.FETCH_SPECIES_BY_ID_ERROR,payload:{error:e}}}(e))}))}},o=function(e){return function(t){t({type:c.a.FETCH_PAGINATION_SPECIES_REQUEST,payload:[]});var n="https://swapi.co/api/species/?page=".concat(e);i.a.get(n).then((function(e){return t((n=e.data,{type:c.a.FETCH_PAGINATION_SPECIES_SUCCESS,payload:n}));var n}))}}},106:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(7),c=n(17),u=n(97),o=n(26),l={position:"relative",display:"block"};t.a=Object(c.b)((function(e){return{loading:u.a(e)}}))((function(e){var t=e.people,n=e.loading;return r.a.createElement("div",{style:l},n&&r.a.createElement(o.a,null),!n&&r.a.createElement(r.a.Fragment,null,!!t.length&&r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:9*t},r.a.createElement(i.c,{to:"/people/".concat(e.id)},e.name))})))))}))},109:function(e,t,n){"use strict";var a=n(95),r=n(25),i=n.n(r),c=n(1);n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var u=function(e){return function(t){var n="https://swapi.co/api/vehicles/".concat(e);t({type:c.a.FETCH_VEHICLES_BY_ID_REQUEST}),i.a.get(n).then((function(n){var r;t((r=Object(a.a)({},n.data,{id:e}),{type:c.a.FETCH_VEHICLES_BY_ID_SUCCESS,payload:{vehicles:r}}))})).catch((function(e){t(function(e){return{type:c.a.FETCH_VEHICLES_BY_ID_ERROR,payload:{error:e}}}(e))}))}},o=function(e){return function(t){t({type:c.a.FETCH_PAGINATION_VEHICLES_REQUEST,payload:[]});var n="https://swapi.co/api/vehicles/?page=".concat(e);i.a.get(n).then((function(e){return t((n=e.data,{type:c.a.FETCH_PAGINATION_VEHICLES_SUCCESS,payload:n}));var n}))}}},110:function(e,t,n){"use strict";var a=n(95),r=n(25),i=n.n(r),c=n(1);n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var u=function(e){return function(t){var n="https://swapi.co/api/starships/".concat(e);t({type:c.a.FETCH_STARSHIPS_BY_ID_REQUEST,payload:{}}),i.a.get(n).then((function(n){var r;t((r=Object(a.a)({},n.data,{id:e}),{type:c.a.FETCH_STARSHIPS_BY_ID_SUCCESS,payload:{planets:r}}))})).catch((function(e){t(function(e){return{type:c.a.FETCH_STARSHIPS_BY_ID_ERROR,payload:{error:e}}}(e))}))}},o=function(e){return function(t){t({type:c.a.FETCH_PAGINATION_STARSHIPS_REQUEST,payload:[]});var n="https://swapi.co/api/starships/?page=".concat(e);i.a.get(n).then((function(e){return t((n=e.data,{type:c.a.FETCH_PAGINATION_STARSHIPS_SUCCESS,payload:n}));var n}))}}},111:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(7),c=n(17),u=n(98),o=n(26),l={position:"relative",display:"block"};t.a=Object(c.b)((function(e){return{loading:u.a(e)}}))((function(e){var t=e.planets,n=e.loading;return r.a.createElement("div",{style:l},n&&r.a.createElement(o.a,null),!n&&r.a.createElement(r.a.Fragment,null,!!t.length&&r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:9*t},r.a.createElement(i.c,{to:"/planets/".concat(e.id)},e.name))})))))}))},112:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(7),c=n(17),u=n(99),o=n(26),l={position:"relative",display:"block"};t.a=Object(c.b)((function(e){return{loading:u.b(e)}}))((function(e){var t=e.species,n=e.loading;return r.a.createElement("div",{style:l},n&&r.a.createElement(o.a,null),!n&&r.a.createElement(r.a.Fragment,null,!!t.length&&r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:9*t},r.a.createElement(i.c,{to:"/species/".concat(e.id)},e.name))})))))}))},113:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(7),c=n(17),u=n(101),o=n(26),l={position:"relative",display:"block"};t.a=Object(c.b)((function(e){return{loading:u.b(e)}}))((function(e){var t=e.vehicles,n=e.loading;return r.a.createElement("div",{style:l},n&&r.a.createElement(o.a,null),!n&&r.a.createElement(r.a.Fragment,null,!!t.length&&r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:9*t},r.a.createElement(i.c,{to:"/vehicles/".concat(e.id)},e.name))})))))}))},114:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(7),c=n(17),u=n(100),o=n(26),l={position:"relative",display:"block"};t.a=Object(c.b)((function(e){return{loading:u.a(e)}}))((function(e){var t=e.starships,n=e.loading;return console.log(t),r.a.createElement("div",{style:l},n&&r.a.createElement(o.a,null),!n&&r.a.createElement(r.a.Fragment,null,!!t.length&&r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:9*t},r.a.createElement(i.c,{to:"/starships/".concat(e.id)},e.name))})))))}))},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),c=n(14),u=n(96),o=n(102),l=n(103),s=n(110),p=n(109),f=n(105),E=n(97),d=n(98),h=n(100),m=n(99),v=n(101),_=n(26),S=n(112),y=n(113),g=n(114),b=n(111),I=n(106),P=Object(i.b)((function(e){return{loading:u.b(e),people:E.b(e),allPlanets:d.b(e),allStarships:h.b(e),allVehicles:v.a(e),allSpecies:m.a(e)}}))((function(e){var t=e.people,n=e.allPlanets,a=e.allStarships,i=e.allVehicles,u=e.allSpecies,o=e.title,l=e.opening_crawl,s=e.director,p=e.producer,f=e.release_date,E=e.characters,d=e.planets,h=e.starships,m=e.vehicles,v=e.species,P=e.loading,C=Object(c.g)();return P?r.a.createElement(_.a,null):r.a.createElement("div",null,r.a.createElement("p",null,"Titile : ",o),r.a.createElement("p",null,"Decription: ",l),r.a.createElement("p",null,"Director: ",s),r.a.createElement("p",null,"Producer: ",p),r.a.createElement("p",null,"Release Date: ",f),!!E.length&&r.a.createElement("div",null,r.a.createElement("h2",null,"characters"),r.a.createElement(I.a,{people:t})),!!d.length&&r.a.createElement("div",null,r.a.createElement("h2",null,"planets"),r.a.createElement(b.a,{planets:n})),!!h.length&&r.a.createElement("div",null,r.a.createElement("h2",null,"starships"),r.a.createElement(g.a,{starships:a})),!!m.length&&r.a.createElement("div",null,r.a.createElement("h2",null,"vehicles"),r.a.createElement(y.a,{vehicles:i})),!!v.length&&r.a.createElement("div",null,r.a.createElement("h2",null,"species"),r.a.createElement(S.a,{species:u})),r.a.createElement("button",{onClick:function(){C.goBack()}},"Back"))}));n.d(t,"DetailFilmsPage",(function(){return C}));var C=function(e){var t=e.films,n=e.fetchPeopleById,a=e.fetchPlanetsById,i=e.fetchStarshipsById,u=e.fetchVehiclesById,o=e.fetchSpeciesById,l=Number(Object(c.h)().id),s=t.filter((function(e){return e.episode_id===l}))[0];return s&&(s.characters.map((function(e){var t=Number(e.split("/")[5]);return n(t)})),s.planets.map((function(e){var t=Number(e.split("/")[5]);return a(t)})),s.starships.map((function(e){var t=Number(e.split("/")[5]);return i(t)})),s.vehicles.map((function(e){var t=Number(e.split("/")[5]);return u(t)})),s.species.map((function(e){var t=Number(e.split("/")[5]);return o(t)}))),r.a.createElement("div",null,s&&r.a.createElement(P,s))},T={fetchPeopleById:o.b,fetchPlanetsById:l.b,fetchStarshipsById:s.b,fetchVehiclesById:p.b,fetchSpeciesById:f.b};t.default=Object(i.b)((function(e){return{films:u.a(e)}}),T)(C)},95:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return i}))},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(e){return e.films.items},r=function(e){return e.films.loading}},97:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u}));var a=function(e){return e.people.items.sort((function(e,t){return e.name>t.name}))},r=function(e){return e.people.loading},i=function(e){return e.people.paginationPeople.results},c=function(e){return e.people.paginationPeople.previous},u=function(e){return e.people.paginationPeople.next}},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u}));var a=function(e){return e.planets.items},r=function(e){return e.planets.loading},i=function(e){return e.planets.paginationPlanets.results},c=function(e){return e.planets.paginationPlanets.previous},u=function(e){return e.planets.paginationPlanets.next}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u}));var a=function(e){return e.species.items},r=function(e){return e.species.loading},i=function(e){return e.species.paginationSpecies.results},c=function(e){return e.species.paginationSpecies.previous},u=function(e){return e.species.paginationSpecies.next}}}]);
//# sourceMappingURL=5.43511c16.chunk.js.map