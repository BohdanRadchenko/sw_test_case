(this.webpackJsonpsw=this.webpackJsonpsw||[]).push([[14],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(e){return e.films.items},r=function(e){return e.films.loading}},104:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(o){r=!0,i=o}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},123:function(e,t,n){e.exports={container:"SearchBar_container__2-IvN",form:"SearchBar_form__g3-b4",input:"SearchBar_input__wJbQ4"}},124:function(e,t,n){e.exports={title:"DrewFilmsCard_title__aywZ3",description:"DrewFilmsCard_description__3kE2h",linkButton:"DrewFilmsCard_linkButton__10S1r"}},125:function(e,t,n){e.exports={container:"Films_container__25zzv",filmsList:"Films_filmsList__3QEZb",filmsItem:"Films_filmsItem__yodaz"}},136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(104),l=n(17),c=n(100),o=n(123),s=n.n(o),u=function(e){var t=e.handleSearchChange;return r.a.createElement("div",{className:s.a.container},r.a.createElement("form",{className:s.a.form},r.a.createElement("input",{placeholder:"Search...",className:s.a.input,type:"text",onChange:function(e){return t(e.target.value)}})))},m=n(6),f=n(124),_=n.n(f),d=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:_.a.title},e.title),r.a.createElement("p",{className:_.a.description},e.opening_crawl.slice(0,200)+" ..."),r.a.createElement(m.b,{className:_.a.linkButton,to:"/films/".concat(e.episode_id)},"show more"))},p=n(26),h=n(125),b=n.n(h),E=Object(l.b)((function(e){return{allFilms:c.a(e),loading:c.b(e)}}))((function(e){var t,n,l=e.allFilms,c=e.loading,o=Object(a.useState)(""),s=Object(i.a)(o,2),m=s[0],f=s[1],_=(n=m,(t=l).length?t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})):t);return r.a.createElement("div",{className:b.a.container},r.a.createElement(u,{handleSearchChange:function(e){f(e)}}),c&&r.a.createElement(p.a,null),!!l.length&&r.a.createElement("ul",{className:b.a.filmsList},!!_.length&&_.map((function(e){return r.a.createElement("li",{key:e.episode_id,className:b.a.filmsItem},r.a.createElement(d,e))}))))}));t.default=function(){return r.a.createElement(E,null)}}}]);
//# sourceMappingURL=14.8c72f458.chunk.js.map