(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/search.9d3b8c4d.png"},32:function(e,t,a){e.exports=a.p+"static/media/blackHeart.77162ab8.png"},33:function(e,t,a){e.exports=a.p+"static/media/redHeart.c182f8d9.png"},34:function(e,t,a){e.exports=a.p+"static/media/autumn.2c7f5dcb.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/spring.324c7dad.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/summer.47135622.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/winter.31dd2e1e.jpg"},39:function(e,t,a){e.exports=a(69)},44:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),s=a.n(c),u=(a(44),a(11)),i=a(3),o=a(30),l=Object(o.a)(),p=a(6),m=a(10),f={weather:[],degreesunits:"",name:""};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_WEATHEROFTHEWEEK":return Object(m.a)(Object(m.a)({},e),{},{weather:t.forecast});case"SET_UNITS":return Object(m.a)(Object(m.a)({},e),{},{degreesunits:t.unit});case"SET_NAME":return Object(m.a)(Object(m.a)({},e),{},{name:t.name});default:return e}}var d=Object(n.createContext)(),v=function(e){var t=Object(n.useReducer)(h,{weather:[],name:"tel aviv",degreesunits:"C"}),a=Object(p.a)(t,2),c=a[0],s=c.weather,u=c.name,i=c.degreesunits,o=a[1];return r.a.createElement(d.Provider,{value:{weather:s,name:u,degreesunits:i,dispatch:o}},e.children)},b=a(2),y=a.n(b),E=a(4),g=a(31),x=a.n(g),w=a(12),O=a.n(w),k={query:j,get:function(e,t){return N.apply(this,arguments)},post:function(e,t){return T.apply(this,arguments)},put:function(e,t){return j(e).then((function(a){var n=a.findIndex((function(e){return e.name===t.name}));return a.splice(n,1,t),S(e,a),t}))},remove:function(e,t){return M.apply(this,arguments)},_save:S};function j(e){return W.apply(this,arguments)}function W(){return(W=Object(E.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem(t));case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:return a=e.t0,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(E.a)(y.a.mark((function e(t,a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return(n=e.sent).push(a),S(t,n),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(E.a)(y.a.mark((function e(t,a){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return n=e.sent,r=n.find((function(e){return e.name===a})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(E.a)(y.a.mark((function e(t,a){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,a),e.next=3,j(t);case 3:n=e.sent,r=n.findIndex((function(e){return e.name===a})),console.log(r),n.splice(r,1),S(t,n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){localStorage.setItem(e,JSON.stringify(t))}var D={getWeatherOfTheWeek:function(e){return C.apply(this,arguments)},getWeatherOfTheDay:function(e){return F.apply(this,arguments)},getAutoComplete:function(e){return I.apply(this,arguments)}};function C(){return(C=Object(E.a)(y.a.mark((function e(t){var a,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://dataservice.accuweather.com/locations/v1/cities/search?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii&q=".concat(t));case 2:return a=e.sent,n=a.data,e.next=6,O.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(n[0].Key,"?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii"));case 6:return r=e.sent,console.log("weather.data.DailyForecasts",r.data.DailyForecasts),k.post("".concat(t,"WeatherOfTheWeek"),r.data.DailyForecasts),e.abrupt("return",r.data.DailyForecasts||[]);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(E.a)(y.a.mark((function e(t){var a,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://dataservice.accuweather.com/locations/v1/cities/search?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii&q=".concat(t));case 2:return a=e.sent,n=a.data,e.next=6,O.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/1day/".concat(n[0].Key,"?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii"));case 6:return r=e.sent,k.post("".concat(t,"WeatherOfTheDay"),r.data.DailyForecasts),e.abrupt("return",r.data.DailyForecasts||[]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(E.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii&q=".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=a(32),V=a.n(_),A=a(33),K=a.n(A),H=a(34),J=a.n(H),P=a(35),B=a.n(P),q=a(36),L=a.n(q),G=a(37),R=a.n(G);function z(e){var t=e.curWeather,a=e.goSearch,c=Object(n.useState)(!1),s=Object(p.a)(c,2),u=s[0],i=s[1],o=Object(n.useState)(""),l=Object(p.a)(o,2),m=l[0],f=l[1],h=Object(n.useState)(!1),v=Object(p.a)(h,2),b=v[0],g=v[1],w=Object(n.useState)([]),O=Object(p.a)(w,2),j=O[0],W=O[1],T=Object(n.useState)(""),N=Object(p.a)(T,2),M=N[0],S=N[1],C=Object(n.useContext)(d),F=C.name,I=C.degreesunits,_=C.dispatch,A=t[0].Temperature.Minimum.Value,H=t[0].Temperature.Maximum.Value;function P(){return(P=Object(E.a)(y.a.mark((function e(t){var a,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=/^[A-Za-z0-9]*$/,n=t.target.value,!a.test(n)){e.next=9;break}if(f(n.toLowerCase()),!(n.length>2)){e.next=9;break}return e.next=7,D.getAutoComplete(n);case 7:r=e.sent,W(r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(E.a)(y.a.mark((function e(){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!b),a={name:m,data:t},e.next=4,k.get("favorites",m);case 4:e.sent?k.remove("favorites",m):k.post("favorites",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(E.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("favorites",m);case 2:t=e.sent,g(!!t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){G.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){a(F.toLowerCase())}),[F]),Object(n.useEffect)((function(){!function(){var e;switch(!0){case t[0].Temperature.Minimum.Value<=50:e=R.a;break;case t[0].Temperature.Minimum.Value>50&&t[0].Temperature.Minimum.Value<=59:e=B.a;break;case t[0].Temperature.Minimum.Value>59&&t[0].Temperature.Minimum.Value<=77:e=J.a;break;case t[0].Temperature.Minimum.Value>77:e=L.a}S(e)}()}),[t]),r.a.createElement("div",{className:"header flex column align-center justify-center",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(".concat(M,")")}},r.a.createElement("button",{className:"heart",onClick:function(){return q.apply(this,arguments)}},r.a.createElement("img",{src:b?K.a:V.a})),r.a.createElement("form",{className:"search-form"},r.a.createElement("div",{className:"search-line"},r.a.createElement("img",{onClick:function(){return i(!u)},src:x.a}),r.a.createElement("input",{className:"",value:m,type:"text",placeholder:"Search location...",onChange:function(e){return P.apply(this,arguments)}})),r.a.createElement("div",{className:"autoCompleteList flex column "},j.length>0?j.map((function(e){return r.a.createElement("p",{key:e.Key,onClick:function(){return function(e){f(e),_({type:"SET_NAME",name:e}),W([])}(e.LocalizedName)}},e.LocalizedName)})):"")),r.a.createElement("img",{className:"weather-icon",src:"https://developer.accuweather.com/sites/default/files/".concat(t[0].Day.Icon<10?"0"+t[0].Day.Icon:t[0].Day.Icon,"-s.png")}),r.a.createElement("p",{className:"city"},F),r.a.createElement("p",{className:"weather"},"F"===I?A:Math.round(5*(A-32)/9),"\xb0 - ","F"===I?H:Math.round(5*(H-32)/9),"\xb0"))}function U(e){var t=e.curWeatherPerDay,a=Object(n.useState)(),c=Object(p.a)(a,2),s=c[0],u=c[1],i=t.Temperature.Minimum.Value,o=t.Temperature.Maximum.Value,l=Object(n.useContext)(d),m=l.degreesunits;l.dispatch;return Object(n.useEffect)((function(){!function(e){switch(e){case 0:u("Sunday");break;case 1:u("Monday");break;case 2:u("Tuesday");break;case 3:u("Wednesday");break;case 4:u("Thursday");break;case 5:u("Friday");break;case 6:u("Saturday")}}(new Date(Date.parse(t.Date)).getDay())}),[]),r.a.createElement("div",{className:"weather-preview flex column align-center space-between"},r.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(t.Day.Icon<10?"0"+t.Day.Icon:t.Day.Icon,"-s.png")}),r.a.createElement("p",null,s),r.a.createElement("p",{className:"weather"},"F"===m?i:Math.round(5*(i-32)/9),"\xb0 - ","F"===m?o:Math.round(5*(o-32)/9),"\xb0"))}function $(e){var t=e.curWeather;return r.a.createElement("div",{className:"weather-list flex align-center justify-center"},t.slice(1).map((function(e){return r.a.createElement(U,{key:e.EpochDate,curWeatherPerDay:e})})))}function Z(){var e=Object(n.useContext)(d),t=e.weather,a=e.name,c=e.dispatch;function s(e){return u.apply(this,arguments)}function u(){return(u=Object(E.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.query("".concat(t,"WeatherOfTheWeek"));case 2:if(!((n=e.sent).length>0)){e.next=7;break}a=n[0],e.next=10;break;case 7:return e.next=9,D.getWeatherOfTheWeek(t);case 9:a=e.sent;case 10:c({type:"SET_WEATHEROFTHEWEEK",forecast:a});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s(a)}),[]),r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement("div",{className:"home flex column flex1"},r.a.createElement(z,{curWeather:t,goSearch:s}),r.a.createElement($,{curWeather:t})):"")}function Q(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(d),u=(s.weather,s.dispatch),o=Object(i.f)();function l(){return(l=Object(E.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.query("favorites");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,a.length>0?a.map((function(e){return r.a.createElement("div",{key:e.name,className:"favorites weather-preview flex column align-center space-between",onClick:function(){return function(e){var t=e.data,a=e.name;o.push("/"),u({type:"SET_WEATHEROFTHEWEEK",forecast:t}),u({type:"SET_NAME",name:a})}(e)}},r.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(e.data[0].Day.Icon<10?"0"+e.data[0].Day.Icon:e.data[0].Day.Icon,"-s.png")}),r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.data[0].Temperature.Minimum.Value,"\xb0-",e.data[0].Temperature.Maximum.Value,"\xb0"))})):"NO RESULTES")}function X(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(d),i=s.degreesunits,o=s.dispatch;return Object(n.useEffect)((function(){!function(){var e="dark"===document.documentElement.getAttribute("data-theme");c(e)}()}),[]),r.a.createElement("div",{className:"nav-bar flex align-center "},r.a.createElement("div",{className:"link-wrapper flex align-center space-between"},r.a.createElement("div",null,r.a.createElement(u.b,{activeClassName:"selected",to:"/",exact:!0},"Home"),r.a.createElement(u.b,{activeClassName:"selected",to:"/favorites",exact:!0}," Favorites")),r.a.createElement("div",null,r.a.createElement("label",{id:"theme-switch",className:"theme-switch",htmlFor:"checkbox_theme"},r.a.createElement("input",{onChange:function(){c(!a),document.documentElement.setAttribute("data-theme",a?"light":"dark"),k._save("theme",a?"light":"dark")},type:"checkbox",id:"checkbox_theme",checked:a})),r.a.createElement("label",{id:"degrees-switch",className:"degrees-switch",htmlFor:"checkbox_degrees"},r.a.createElement("input",{onChange:function(){o({type:"SET_UNITS",unit:"F"===i?"C":"F"})},type:"checkbox",id:"checkbox_degrees"})))))}a(68);var Y=function(){return r.a.createElement(u.a,{history:l},r.a.createElement(v,null,r.a.createElement(X,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/favorites",component:Q,exact:!0}),r.a.createElement(i.a,{path:"/",component:Z,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.ae1c1015.chunk.js.map