import{S as H,i as z,s as K,k as y,q as L,a as A,l as E,m as w,r as M,h as d,c as B,n as h,b as j,C as _,u as te,D as V,E as P,F as U,G as q,H as de,I as Y,J as re,K as Ne,e as le,g as R,v as oe,d as F,f as se,y as G,z as J,A as Q,L as Ie,B as W,M as je,N as he,O as Ce,P as Se,Q as Ve,R as Ae,T as Be,U as Le,o as Me}from"../chunks/index.4da1f6d7.js";import{X as Re,x as ae,$ as Fe,r as Oe}from"../chunks/runtime.esm.78844eab.js";import{l as pe,s as Pe}from"../chunks/i18n.dfdda015.js";import{n as Ue,r as qe}from"../chunks/store.b55d0d1a.js";function He(r){let e,l,t,n,a,f,o=r[1]("currentTime")+"",s,p,u;return{c(){e=y("div"),l=y("div"),t=y("span"),n=L("© 2023 nostr.hk"),a=A(),f=y("span"),s=L(o),p=A(),u=L(r[0]),this.h()},l(c){e=E(c,"DIV",{class:!0});var g=w(e);l=E(g,"DIV",{class:!0});var C=w(l);t=E(C,"SPAN",{});var m=w(t);n=M(m,"© 2023 nostr.hk"),m.forEach(d),a=B(C),f=E(C,"SPAN",{});var S=w(f);s=M(S,o),p=B(S),u=M(S,r[0]),S.forEach(d),C.forEach(d),g.forEach(d),this.h()},h(){h(l,"class","border-t border-black mt-8 p-8 text-center flex flex-col items-center"),h(e,"class","proseContainer")},m(c,g){j(c,e,g),_(e,l),_(l,t),_(t,n),_(l,a),_(l,f),_(f,s),_(f,p),_(f,u)},p(c,[g]){g&2&&o!==(o=c[1]("currentTime")+"")&&te(s,o),g&1&&te(u,c[0])},i:V,o:V,d(c){c&&d(e)}}}function ze(r,e,l){let t;P(r,Re,a=>l(1,t=a));let{blockTime:n}=e;return r.$$set=a=>{"blockTime"in a&&l(0,n=a.blockTime)},[n,t]}class Ke extends H{constructor(e){super(),z(this,e,ze,He,K,{blockTime:0})}}function Ge(r){let e,l;return{c(){e=U("svg"),l=U("path"),this.h()},l(t){e=q(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var n=w(e);l=q(n,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),w(l).forEach(d),n.forEach(d),this.h()},h(){h(l,"stroke-linecap","round"),h(l,"stroke-linejoin","round"),h(l,"d","M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"fill","none"),h(e,"viewBox","0 0 24 24"),h(e,"stroke-width","1.5"),h(e,"stroke","currentColor"),h(e,"class","w-6 h-6")},m(t,n){j(t,e,n),_(e,l)},p:V,i:V,o:V,d(t){t&&d(e)}}}class Je extends H{constructor(e){super(),z(this,e,null,Ge,K,{})}}function Qe(r){let e,l;return{c(){e=U("svg"),l=U("path"),this.h()},l(t){e=q(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var n=w(e);l=q(n,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),w(l).forEach(d),n.forEach(d),this.h()},h(){h(l,"stroke-linecap","round"),h(l,"stroke-linejoin","round"),h(l,"d","M6 18L18 6M6 6l12 12"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"fill","none"),h(e,"viewBox","0 0 24 24"),h(e,"stroke-width","1.5"),h(e,"stroke","currentColor"),h(e,"class","w-6 h-6")},m(t,n){j(t,e,n),_(e,l)},p:V,i:V,o:V,d(t){t&&d(e)}}}class We extends H{constructor(e){super(),z(this,e,null,Qe,K,{})}}function Xe(r){const e=r-1;return e*e*e+1}function me(r,{delay:e=0,duration:l=400,easing:t=Xe,axis:n="y"}={}){const a=getComputedStyle(r),f=+a.opacity,o=n==="y"?"height":"width",s=parseFloat(a[o]),p=n==="y"?["top","bottom"]:["left","right"],u=p.map(N=>`${N[0].toUpperCase()}${N.slice(1)}`),c=parseFloat(a[`padding${u[0]}`]),g=parseFloat(a[`padding${u[1]}`]),C=parseFloat(a[`margin${u[0]}`]),m=parseFloat(a[`margin${u[1]}`]),S=parseFloat(a[`border${u[0]}Width`]),I=parseFloat(a[`border${u[1]}Width`]);return{delay:e,duration:l,easing:t,css:N=>`overflow: hidden;opacity: ${Math.min(N*20,1)*f};${o}: ${N*s}px;padding-${p[0]}: ${N*c}px;padding-${p[1]}: ${N*g}px;margin-${p[0]}: ${N*C}px;margin-${p[1]}: ${N*m}px;border-${p[0]}-width: ${N*S}px;border-${p[1]}-width: ${N*I}px;`}}function _e(r,e,l){const t=r.slice();return t[4]=e[l],t}function ve(r){let e,l=r[4].name+"",t,n,a;return{c(){e=y("option"),t=L(l),n=A(),this.h()},l(f){e=E(f,"OPTION",{});var o=w(e);t=M(o,l),n=B(o),o.forEach(d),this.h()},h(){e.__value=r[4].alpha2Code,e.value=e.__value,e.selected=a=r[4].alpha2Code===r[1]},m(f,o){j(f,e,o),_(e,t),_(e,n)},p(f,o){o&2&&a!==(a=f[4].alpha2Code===f[1])&&(e.selected=a)},d(f){f&&d(e)}}}function Ye(r){let e,l,t,n,a,f=pe,o=[];for(let s=0;s<f.length;s+=1)o[s]=ve(_e(r,f,s));return{c(){e=y("div"),l=y("div"),t=y("select");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var p=w(e);l=E(p,"DIV",{class:!0});var u=w(l);t=E(u,"SELECT",{class:!0});var c=w(t);for(let g=0;g<o.length;g+=1)o[g].l(c);c.forEach(d),u.forEach(d),p.forEach(d),this.h()},h(){h(t,"class","transition-all rounded-md shadow-sm p-1 text-lg bg-orange-400/30 hover:bg-orange-400/40 text-orange-500 hover:text-orange-300 border-orange-500/50"),h(l,"class","select"),h(e,"class","locale-selector")},m(s,p){j(s,e,p),_(e,l),_(l,t);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(t,null);de(t,r[0]),n||(a=Y(t,"change",r[2]),n=!0)},p(s,[p]){if(p&2){f=pe;let u;for(u=0;u<f.length;u+=1){const c=_e(s,f,u);o[u]?o[u].p(c,p):(o[u]=ve(c),o[u].c(),o[u].m(t,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=f.length}p&1&&de(t,s[0])},i:V,o:V,d(s){s&&d(e),re(o,s),n=!1,a()}}}function Ze(r,e,l){let t;P(r,ae,o=>l(1,t=o));let{value:n}=e;const a=Ne();function f(o){o.preventDefault(),a("locale-changed",o.target.value)}return r.$$set=o=>{"value"in o&&l(0,n=o.value)},[n,t,f]}class De extends H{constructor(e){super(),z(this,e,Ze,Ye,K,{value:0})}}function ge(r,e,l){const t=r.slice();return t[8]=e[l],t}function be(r,e,l){const t=r.slice();return t[8]=e[l],t}function ke(r){let e,l,t,n,a,f,o,s,p,u,c,g,C=r[3],m=[];for(let v=0;v<C.length;v+=1)m[v]=we(be(r,C,v));t=new De({props:{value:r[2]}}),t.$on("locale-changed",r[6]);const S=[tt,et],I=[];function N(v,x){return v[0]?0:1}o=N(r),s=I[o]=S[o](r);let T=r[0]&&$e(r);return{c(){e=y("nav");for(let v=0;v<m.length;v+=1)m[v].c();l=A(),G(t.$$.fragment),n=A(),a=y("nav"),f=y("button"),s.c(),p=A(),T&&T.c(),this.h()},l(v){e=E(v,"NAV",{class:!0});var x=w(e);for(let i=0;i<m.length;i+=1)m[i].l(x);l=B(x),J(t.$$.fragment,x),x.forEach(d),n=B(v),a=E(v,"NAV",{class:!0});var $=w(a);f=E($,"BUTTON",{class:!0});var b=w(f);s.l(b),b.forEach(d),p=B($),T&&T.l($),$.forEach(d),this.h()},h(){h(e,"class","z-30 hidden md:flex flex-row gap-6 sticky top-0 items-center justify-center p-8 bg-black/80 text-xl"),h(f,"class","text-orange-500"),h(a,"class","z-30 flex md:hidden flex-col sticky w-full top-0 items-center justify-center p-4 bg-black/90")},m(v,x){j(v,e,x);for(let $=0;$<m.length;$+=1)m[$]&&m[$].m(e,null);_(e,l),Q(t,e,null),j(v,n,x),j(v,a,x),_(a,f),I[o].m(f,null),_(a,p),T&&T.m(a,null),u=!0,c||(g=Y(f,"click",Ie(r[4])),c=!0)},p(v,x){if(x&8){C=v[3];let i;for(i=0;i<C.length;i+=1){const k=be(v,C,i);m[i]?m[i].p(k,x):(m[i]=we(k),m[i].c(),m[i].m(e,l))}for(;i<m.length;i+=1)m[i].d(1);m.length=C.length}const $={};x&4&&($.value=v[2]),t.$set($);let b=o;o=N(v),o!==b&&(oe(),F(I[b],1,1,()=>{I[b]=null}),se(),s=I[o],s||(s=I[o]=S[o](v),s.c()),R(s,1),s.m(f,null)),v[0]?T?(T.p(v,x),x&1&&R(T,1)):(T=$e(v),T.c(),R(T,1),T.m(a,null)):T&&(oe(),F(T,1,1,()=>{T=null}),se())},i(v){u||(R(t.$$.fragment,v),R(s),R(T),u=!0)},o(v){F(t.$$.fragment,v),F(s),F(T),u=!1},d(v){v&&d(e),re(m,v),W(t),v&&d(n),v&&d(a),I[o].d(),T&&T.d(),c=!1,g()}}}function we(r){let e,l=r[8].text+"",t;return{c(){e=y("a"),t=L(l),this.h()},l(n){e=E(n,"A",{href:!0,class:!0});var a=w(e);t=M(a,l),a.forEach(d),this.h()},h(){h(e,"href",r[8].url),h(e,"class","text-xl font-medium text-orange-500 border-orange-500")},m(n,a){j(n,e,a),_(e,t)},p:V,d(n){n&&d(e)}}}function et(r){let e,l;return e=new Je({}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){Q(e,t,n),l=!0},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function tt(r){let e,l;return e=new We({}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){Q(e,t,n),l=!0},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function $e(r){let e,l,t,n,a,f=r[3],o=[];for(let s=0;s<f.length;s+=1)o[s]=xe(ge(r,f,s));return t=new De({props:{value:r[2]}}),t.$on("locale-changed",r[7]),{c(){e=y("div");for(let s=0;s<o.length;s+=1)o[s].c();l=A(),G(t.$$.fragment),this.h()},l(s){e=E(s,"DIV",{class:!0});var p=w(e);for(let u=0;u<o.length;u+=1)o[u].l(p);l=B(p),J(t.$$.fragment,p),p.forEach(d),this.h()},h(){h(e,"class","flex flex-col gap-6 my-6 items-center text-center")},m(s,p){j(s,e,p);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null);_(e,l),Q(t,e,null),a=!0},p(s,p){if(p&24){f=s[3];let c;for(c=0;c<f.length;c+=1){const g=ge(s,f,c);o[c]?o[c].p(g,p):(o[c]=xe(g),o[c].c(),o[c].m(e,l))}for(;c<o.length;c+=1)o[c].d(1);o.length=f.length}const u={};p&4&&(u.value=s[2]),t.$set(u)},i(s){a||(R(t.$$.fragment,s),je(()=>{a&&(n||(n=he(e,me,{duration:200},!0)),n.run(1))}),a=!0)},o(s){F(t.$$.fragment,s),n||(n=he(e,me,{duration:200},!1)),n.run(0),a=!1},d(s){s&&d(e),re(o,s),W(t),s&&n&&n.end()}}}function xe(r){let e,l=r[8].text+"",t,n,a;return{c(){e=y("a"),t=L(l),this.h()},l(f){e=E(f,"A",{href:!0,class:!0});var o=w(e);t=M(o,l),o.forEach(d),this.h()},h(){h(e,"href",r[8].url),h(e,"class","text-xl font-medium text-orange-500 border-orange-500")},m(f,o){j(f,e,o),_(e,t),n||(a=Y(e,"click",r[4]),n=!0)},p:V,d(f){f&&d(e),n=!1,a()}}}function lt(r){let e,l,t=!r[1]&&ke(r);return{c(){t&&t.c(),e=le()},l(n){t&&t.l(n),e=le()},m(n,a){t&&t.m(n,a),j(n,e,a),l=!0},p(n,[a]){n[1]?t&&(oe(),F(t,1,1,()=>{t=null}),se()):t?(t.p(n,a),a&2&&R(t,1)):(t=ke(n),t.c(),R(t,1),t.m(e.parentNode,e))},i(n){l||(R(t),l=!0)},o(n){F(t),l=!1},d(n){t&&t.d(n),n&&d(e)}}}function rt(r,e,l){let t,n;P(r,Fe,c=>l(1,t=c)),P(r,ae,c=>l(2,n=c));let a=!1;const f=[{text:"Home",url:"/"},{text:"Join",url:"/join"},{text:"Meet Up",url:"/meetup"},{text:"Github",url:"https://github.com/nostrocket/nostr.hk"},{text:"Nostr Thread",url:"https://snort.social/e/note134slxdr2np6ml5f459me8cfmzg6cgw46c2agv55mtq55mtdtcgaqu4af4l"},{text:"Telegram",url:"https://t.me/nostrhk"},{text:"Hackathon",url:"https://dorahacks.io/hackathon/hack-nostr-on"}];function o(){a?l(0,a=!1):l(0,a=!0)}function s(c){console.log(c),Pe({locale:c})}return[a,t,n,f,o,s,c=>s(c.detail),c=>s(c.detail)]}class nt extends H{constructor(e){super(),z(this,e,rt,lt,K,{})}}var ot="@vercel/analytics",st="0.1.11",at=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function it(){return typeof window<"u"}function ct(){try{const r="production";return r==="development"||r==="test"}catch{return!1}}function ut(r="auto"){return r==="auto"?ct()?"development":"production":r}var ft=(r={debug:!0})=>{var e;if(!it())return;const l=ut(r.mode);at(),r.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",r.beforeSend));const t=l==="development"?"https://cdn.vercel-insights.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${t}"]`))return;const n=document.createElement("script");n.src=t,n.defer=!0,n.setAttribute("data-sdkn",ot),n.setAttribute("data-sdkv",st),l==="development"&&r.debug===!1&&n.setAttribute("data-debug","false"),document.head.appendChild(n)};function ye(r,e,l){const t=r.slice();return t[11]=e[l],t}function dt(r){let e,l;return{c(){e=y("div"),l=L("Something went wrong... 🙈"),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=w(e);l=M(n,"Something went wrong... 🙈"),n.forEach(d),this.h()},h(){h(e,"class","proseContainer")},m(t,n){j(t,e,n),_(e,l)},p:V,i:V,o:V,d(t){t&&d(e)}}}function ht(r){let e,l;return e=new Ke({props:{blockTime:r[14]}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){Q(e,t,n),l=!0},p:V,i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function pt(r){let e,l;return{c(){e=y("div"),l=L("Loading..."),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=w(e);l=M(n,"Loading..."),n.forEach(d),this.h()},h(){h(e,"class","proseContainer")},m(t,n){j(t,e,n),_(e,l)},p:V,i:V,o:V,d(t){t&&d(e)}}}function Ee(r){let e,l,t,n,a,f,o,s,p,u,c,g,C,m,S,I,N,T,v,x,$=r[2],b=[];for(let i=0;i<$.length;i+=1)b[i]=Te(ye(r,$,i));return{c(){e=y("div"),l=y("div"),t=L("Relays"),n=A(),a=y("ul");for(let i=0;i<b.length;i+=1)b[i].c();f=A(),o=y("li"),s=y("form"),p=y("div"),u=y("div"),c=U("svg"),g=U("path"),C=A(),m=y("input"),S=A(),I=y("button"),N=y("span"),T=L("Add"),this.h()},l(i){e=E(i,"DIV",{class:!0});var k=w(e);l=E(k,"DIV",{class:!0});var D=w(l);t=M(D,"Relays"),D.forEach(d),n=B(k),a=E(k,"UL",{class:!0});var O=w(a);for(let ne=0;ne<b.length;ne+=1)b[ne].l(O);f=B(O),o=E(O,"LI",{});var X=w(o);s=E(X,"FORM",{class:!0});var Z=w(s);p=E(Z,"DIV",{class:!0});var ee=w(p);u=E(ee,"DIV",{class:!0});var ie=w(u);c=q(ie,"svg",{class:!0,xmlns:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"aria-hidden":!0});var ce=w(c);g=q(ce,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),w(g).forEach(d),ce.forEach(d),ie.forEach(d),C=B(ee),m=E(ee,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),ee.forEach(d),S=B(Z),I=E(Z,"BUTTON",{type:!0,class:!0});var ue=w(I);N=E(ue,"SPAN",{});var fe=w(N);T=M(fe,"Add"),fe.forEach(d),ue.forEach(d),Z.forEach(d),X.forEach(d),O.forEach(d),k.forEach(d),this.h()},h(){h(l,"class","font-bold text-lg mb-3"),h(g,"stroke-linecap","round"),h(g,"stroke-linejoin","round"),h(g,"d","M12 4.5v15m7.5-7.5h-15"),h(c,"class","h-5 w-5 text-gray-400"),h(c,"xmlns","http://www.w3.org/2000/svg"),h(c,"viewBox","0 0 24 24"),h(c,"stroke-width","1.5"),h(c,"stroke","currentColor"),h(c,"fill","none"),h(c,"aria-hidden","true"),h(u,"class","pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"),h(m,"type","newRelay"),h(m,"name","newRelay"),h(m,"id","newRelay"),h(m,"class","block w-full rounded-none rounded-l-md border-gray-300 pl-10 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"),h(m,"placeholder","wss://..."),h(p,"class","relative flex flex-grow items-stretch focus-within:z-10"),h(I,"type","submit"),h(I,"class","relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-purple-700 bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),h(s,"class","mt-3 flex rounded-md shadow-sm"),h(a,"class","list-none"),h(e,"class","fixed bottom-12 left-0 hidden md:block p-5 m-2 rounded-lg shadow-lg bg-purple-900 text-white")},m(i,k){j(i,e,k),_(e,l),_(l,t),_(e,n),_(e,a);for(let D=0;D<b.length;D+=1)b[D]&&b[D].m(a,null);_(a,f),_(a,o),_(o,s),_(s,p),_(p,u),_(u,c),_(c,g),_(p,C),_(p,m),_(s,S),_(s,I),_(I,N),_(N,T),v||(x=Y(s,"submit",Ie(r[4])),v=!0)},p(i,k){if(k&5){$=i[2];let D;for(D=0;D<$.length;D+=1){const O=ye(i,$,D);b[D]?b[D].p(O,k):(b[D]=Te(O),b[D].c(),b[D].m(a,f))}for(;D<b.length;D+=1)b[D].d(1);b.length=$.length}},d(i){i&&d(e),re(b,i),v=!1,x()}}}function Te(r){let e,l,t=r[11]+"",n,a,f,o=r[0][r[11]]+"",s,p;return{c(){e=y("li"),l=y("b"),n=L(t),a=L(":"),f=A(),s=L(o),p=L(" events")},l(u){e=E(u,"LI",{});var c=w(e);l=E(c,"B",{});var g=w(l);n=M(g,t),a=M(g,":"),g.forEach(d),f=B(c),s=M(c,o),p=M(c," events"),c.forEach(d)},m(u,c){j(u,e,c),_(e,l),_(l,n),_(l,a),_(e,f),_(e,s),_(e,p)},p(u,c){c&4&&t!==(t=u[11]+"")&&te(n,t),c&5&&o!==(o=u[0][u[11]]+"")&&te(s,o)},d(u){u&&d(e)}}}function mt(r){let e,l,t,n,a,f,o,s,p,u,c,g,C,m,S,I,N,T;s=new nt({});const v=r[7].default,x=Ce(v,r,r[6],null);let $={ctx:r,current:null,token:null,hasCatch:!0,pending:pt,then:ht,catch:dt,value:14,error:15,blocks:[,,,]};Se(r[3],$);let b=r[1]&&Ee(r);return{c(){e=y("div"),l=y("div"),t=L("香港"),n=A(),a=y("h1"),f=L(">NOSTR_HK"),o=A(),G(s.$$.fragment),p=A(),x&&x.c(),u=A(),$.block.c(),c=A(),g=y("div"),C=L("⚙️"),m=A(),b&&b.c(),S=le(),this.h()},l(i){e=E(i,"DIV",{class:!0});var k=w(e);l=E(k,"DIV",{class:!0});var D=w(l);t=M(D,"香港"),D.forEach(d),n=B(k),a=E(k,"H1",{class:!0});var O=w(a);f=M(O,">NOSTR_HK"),O.forEach(d),k.forEach(d),o=B(i),J(s.$$.fragment,i),p=B(i),x&&x.l(i),u=B(i),$.block.l(i),c=B(i),g=E(i,"DIV",{class:!0});var X=w(g);C=M(X,"⚙️"),X.forEach(d),m=B(i),b&&b.l(i),S=le(),this.h()},h(){h(l,"class","absolute w-full text-center mx-auto break-keep top-0 md:-top-5 left-1/2 -translate-x-1/2 font-black text-black/60 text-[150px] md:text-[360px]"),h(a,"class","text-5xl md:text-8xl lg:text-9xl italic text-center mx-auto md:mb-20 text-purple-200 drop-shadow-[6px_6px_0px_rgba(255,64,255,1)] font-black spacing-tight absolute top-20 md:top-48 left-1/2 -translate-x-1/2"),h(e,"class","header top-0 bg-no-repeat bg-cover bg-center bg-hero-bg min-h-[220px] md:min-h-[500px]"),h(g,"class","fixed bottom-0 left-0 text-4xl opacity-90 m-2 hidden md:block cursor-pointer hover:opacity-100")},m(i,k){j(i,e,k),_(e,l),_(l,t),_(e,n),_(e,a),_(a,f),j(i,o,k),Q(s,i,k),j(i,p,k),x&&x.m(i,k),j(i,u,k),$.block.m(i,$.anchor=k),$.mount=()=>c.parentNode,$.anchor=c,j(i,c,k),j(i,g,k),_(g,C),j(i,m,k),b&&b.m(i,k),j(i,S,k),I=!0,N||(T=Y(g,"click",r[8]),N=!0)},p(i,[k]){r=i,x&&x.p&&(!I||k&64)&&Ve(x,v,r,r[6],I?Be(v,r[6],k,null):Ae(r[6]),null),Le($,r,k),r[1]?b?b.p(r,k):(b=Ee(r),b.c(),b.m(S.parentNode,S)):b&&(b.d(1),b=null)},i(i){I||(R(s.$$.fragment,i),R(x,i),R($.block),I=!0)},o(i){F(s.$$.fragment,i),F(x,i);for(let k=0;k<3;k+=1){const D=$.blocks[k];F(D)}I=!1},d(i){i&&d(e),i&&d(o),W(s,i),i&&d(p),x&&x.d(i),i&&d(u),$.block.d(i),$.token=null,$=null,i&&d(c),i&&d(g),i&&d(m),b&&b.d(i),i&&d(S),N=!1,T()}}}function _t(r,e,l){let t,n,a;P(r,Ue,m=>l(9,t=m)),P(r,qe,m=>l(0,n=m)),P(r,ae,m=>l(10,a=m));let{$$slots:f={},$$scope:o}=e;ft({mode:"production"});async function s(){return Oe(a)}const p=fetch("https://chain.api.btc.com/v3/block/latest").then(async m=>(await m.json()).data.height);Me(async()=>{await t.add("wss://relay.damus.io"),await t.add("wss://relay.snort.social"),await t.add("wss://nostr-pub.wellorder.net")});let u=!1,c;async function g(m){const S=new FormData(m.target);t.add(S.get("newRelay")),m.target.reset()}const C=()=>{l(1,u=!u)};return r.$$set=m=>{"$$scope"in m&&l(6,o=m.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&l(2,c=Object.keys(n).filter(m=>m.match(/\/\//)))},[n,u,c,p,g,s,o,f,C]}class wt extends H{constructor(e){super(),z(this,e,_t,mt,K,{preload:5})}get preload(){return this.$$.ctx[5]}}export{wt as default};