(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{37:function(e,t,n){e.exports=n(66)},42:function(e,t,n){},43:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),u=(n(42),n(43),n(8)),i=n.n(u),s=n(11),l=n(16),m=n(90),p=n(19),f=n.n(p),h="https://covid19.mathdro.id/api",v=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,r,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h,t&&(n="".concat(h,"/countries/").concat(t)),"global"===t&&(n=h),e.prev=3,e.next=6,f.a.get(n);case 6:return a=e.sent,r=a.data,c=r.confirmed,o=r.deaths,u=r.recovered,e.abrupt("return",{confirmed:c,deaths:o,recovered:u});case 14:e.prev=14,e.t0=e.catch(3);case 16:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://covid19.mathdro.id/api/countries/");case 3:return t=e.sent,n=t.data.countries,e.abrupt("return",n.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=n(91),b=n(93),g=n(92);function w(e){var t=e.hdlChange,n=Object(a.useState)([]),c=Object(l.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,d();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(b.a,null,r.a.createElement(g.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))}var x=n(88),O=n(67),j=n(89);function k(e){var t=e.data,n=t.confirmed,a=t.deaths,c=t.recovered;return r.a.createElement(x.a,{container:!0,spacing:3},r.a.createElement(x.a,{item:!0,xs:12,sm:4},r.a.createElement(O.a,null,r.a.createElement(j.a,{variant:"h5"},"konfirmasi: ",n.value))),r.a.createElement(x.a,{item:!0,xs:12,sm:4},r.a.createElement(O.a,null,r.a.createElement(j.a,{variant:"h5"},"Meninggal: ",a.value))),r.a.createElement(x.a,{item:!0,xs:12,sm:4},r.a.createElement(O.a,null,r.a.createElement(j.a,{variant:"h5"},"Sembuh: ",c.value))))}function y(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),p=u[0],f=u[1];function h(){return(h=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,v(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1),f(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,v();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.confirmed?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{position:"static"},r.a.createElement("h2",null,p.toLocaleUpperCase()||"GLOBAL")),r.a.createElement(E.a,{maxWidth:"lg"},r.a.createElement(k,{data:n}),r.a.createElement(w,{hdlChange:function(e){return h.apply(this,arguments)}}))):"Loading"}var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.98ac4f1d.chunk.js.map