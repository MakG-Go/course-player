(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Au(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const lt={},As=[],qn=()=>{},Hg=()=>!1,Gg=/^on[^a-z]/,fl=n=>Gg.test(n),wu=n=>n.startsWith("onUpdate:"),Rt=Object.assign,Ru=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Vg=Object.prototype.hasOwnProperty,Je=(n,e)=>Vg.call(n,e),Oe=Array.isArray,ws=n=>hl(n)==="[object Map]",Sp=n=>hl(n)==="[object Set]",Ge=n=>typeof n=="function",St=n=>typeof n=="string",Cu=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",bp=n=>ct(n)&&Ge(n.then)&&Ge(n.catch),yp=Object.prototype.toString,hl=n=>yp.call(n),Wg=n=>hl(n).slice(8,-1),Ep=n=>hl(n)==="[object Object]",Pu=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fa=Au(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},qg=/-(\w)/g,ai=dl(n=>n.replace(qg,(e,t)=>t?t.toUpperCase():"")),Xg=/\B([A-Z])/g,Ks=dl(n=>n.replace(Xg,"-$1").toLowerCase()),pl=dl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bl=dl(n=>n?`on${pl(n)}`:""),Io=(n,e)=>!Object.is(n,e),kl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Wa=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Yg=n=>{const e=parseFloat(n);return isNaN(e)?n:e},jg=n=>{const e=St(n)?Number(n):NaN;return isNaN(e)?n:e};let Cf;const Bc=()=>Cf||(Cf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ml(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?Jg(i):ml(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(St(n))return n;if(ct(n))return n}}const $g=/;(?![^(]*\))/g,Kg=/:([^]+)/,Zg=/\/\*[^]*?\*\//g;function Jg(n){const e={};return n.replace(Zg,"").split($g).forEach(t=>{if(t){const i=t.split(Kg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jt(n){let e="";if(St(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=Jt(n[t]);i&&(e+=i+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ev=Au(Qg);function Tp(n){return!!n||n===""}const ht=n=>St(n)?n:n==null?"":Oe(n)||ct(n)&&(n.toString===yp||!Ge(n.toString))?JSON.stringify(n,Ap,2):String(n),Ap=(n,e)=>e&&e.__v_isRef?Ap(n,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Sp(e)?{[`Set(${e.size})`]:[...e.values()]}:ct(e)&&!Oe(e)&&!Ep(e)?String(e):e;let Bn;class wp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bn,!e&&Bn&&(this.index=(Bn.scopes||(Bn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Bn;try{return Bn=this,e()}finally{Bn=t}}}on(){Bn=this}off(){Bn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function tv(n){return new wp(n)}function nv(n,e=Bn){e&&e.active&&e.effects.push(n)}function iv(){return Bn}const Lu=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Rp=n=>(n.w&ir)>0,Cp=n=>(n.n&ir)>0,rv=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ir},sv=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Rp(r)&&!Cp(r)?r.delete(n):e[t++]=r,r.w&=~ir,r.n&=~ir}e.length=t}},kc=new WeakMap;let _o=0,ir=1;const zc=30;let zn;const Cr=Symbol(""),Hc=Symbol("");class Du{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,nv(this,i)}run(){if(!this.active)return this.fn();let e=zn,t=Ki;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zn,zn=this,Ki=!0,ir=1<<++_o,_o<=zc?rv(this):Pf(this),this.fn()}finally{_o<=zc&&sv(this),ir=1<<--_o,zn=this.parent,Ki=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zn===this?this.deferStop=!0:this.active&&(Pf(this),this.onStop&&this.onStop(),this.active=!1)}}function Pf(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Ki=!0;const Pp=[];function Zs(){Pp.push(Ki),Ki=!1}function Js(){const n=Pp.pop();Ki=n===void 0?!0:n}function on(n,e,t){if(Ki&&zn){let i=kc.get(n);i||kc.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Lu()),Lp(r)}}function Lp(n,e){let t=!1;_o<=zc?Cp(n)||(n.n|=ir,t=!Rp(n)):t=!n.has(zn),t&&(n.add(zn),zn.deps.push(n))}function wi(n,e,t,i,r,s){const o=kc.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Oe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Oe(n)?Pu(t)&&a.push(o.get("length")):(a.push(o.get(Cr)),ws(n)&&a.push(o.get(Hc)));break;case"delete":Oe(n)||(a.push(o.get(Cr)),ws(n)&&a.push(o.get(Hc)));break;case"set":ws(n)&&a.push(o.get(Cr));break}if(a.length===1)a[0]&&Gc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Gc(Lu(l))}}function Gc(n,e){const t=Oe(n)?n:[...n];for(const i of t)i.computed&&Lf(i);for(const i of t)i.computed||Lf(i)}function Lf(n,e){(n!==zn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ov=Au("__proto__,__v_isRef,__isVue"),Dp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cu)),av=Iu(),lv=Iu(!1,!0),cv=Iu(!0),Df=uv();function uv(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Qe(this);for(let s=0,o=this.length;s<o;s++)on(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Zs();const i=Qe(this)[e].apply(this,t);return Js(),i}}),n}function fv(n){const e=Qe(this);return on(e,"has",n),e.hasOwnProperty(n)}function Iu(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?wv:Fp:e?Np:Up).get(i))return i;const o=Oe(i);if(!n){if(o&&Je(Df,r))return Reflect.get(Df,r,s);if(r==="hasOwnProperty")return fv}const a=Reflect.get(i,r,s);return(Cu(r)?Dp.has(r):ov(r))||(n||on(i,"get",r),e)?a:Ht(a)?o&&Pu(r)?a:a.value:ct(a)?n?kp(a):Ko(a):a}}const hv=Ip(),dv=Ip(!0);function Ip(n=!1){return function(t,i,r,s){let o=t[i];if(Fs(o)&&Ht(o)&&!Ht(r))return!1;if(!n&&(!qa(r)&&!Fs(r)&&(o=Qe(o),r=Qe(r)),!Oe(t)&&Ht(o)&&!Ht(r)))return o.value=r,!0;const a=Oe(t)&&Pu(i)?Number(i)<t.length:Je(t,i),l=Reflect.set(t,i,r,s);return t===Qe(s)&&(a?Io(r,o)&&wi(t,"set",i,r):wi(t,"add",i,r)),l}}function pv(n,e){const t=Je(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&wi(n,"delete",e,void 0),i}function mv(n,e){const t=Reflect.has(n,e);return(!Cu(e)||!Dp.has(e))&&on(n,"has",e),t}function _v(n){return on(n,"iterate",Oe(n)?"length":Cr),Reflect.ownKeys(n)}const Op={get:av,set:hv,deleteProperty:pv,has:mv,ownKeys:_v},gv={get:cv,set(n,e){return!0},deleteProperty(n,e){return!0}},vv=Rt({},Op,{get:lv,set:dv}),Ou=n=>n,_l=n=>Reflect.getPrototypeOf(n);function sa(n,e,t=!1,i=!1){n=n.__v_raw;const r=Qe(n),s=Qe(e);t||(e!==s&&on(r,"get",e),on(r,"get",s));const{has:o}=_l(r),a=i?Ou:t?Fu:Oo;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function oa(n,e=!1){const t=this.__v_raw,i=Qe(t),r=Qe(n);return e||(n!==r&&on(i,"has",n),on(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function aa(n,e=!1){return n=n.__v_raw,!e&&on(Qe(n),"iterate",Cr),Reflect.get(n,"size",n)}function If(n){n=Qe(n);const e=Qe(this);return _l(e).has.call(e,n)||(e.add(n),wi(e,"add",n,n)),this}function Of(n,e){e=Qe(e);const t=Qe(this),{has:i,get:r}=_l(t);let s=i.call(t,n);s||(n=Qe(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Io(e,o)&&wi(t,"set",n,e):wi(t,"add",n,e),this}function Uf(n){const e=Qe(this),{has:t,get:i}=_l(e);let r=t.call(e,n);r||(n=Qe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&wi(e,"delete",n,void 0),s}function Nf(){const n=Qe(this),e=n.size!==0,t=n.clear();return e&&wi(n,"clear",void 0,void 0),t}function la(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Qe(o),l=e?Ou:n?Fu:Oo;return!n&&on(a,"iterate",Cr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ca(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),o=ws(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ou:e?Fu:Oo;return!e&&on(s,"iterate",l?Hc:Cr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ii(n){return function(...e){return n==="delete"?!1:this}}function xv(){const n={get(s){return sa(this,s)},get size(){return aa(this)},has:oa,add:If,set:Of,delete:Uf,clear:Nf,forEach:la(!1,!1)},e={get(s){return sa(this,s,!1,!0)},get size(){return aa(this)},has:oa,add:If,set:Of,delete:Uf,clear:Nf,forEach:la(!1,!0)},t={get(s){return sa(this,s,!0)},get size(){return aa(this,!0)},has(s){return oa.call(this,s,!0)},add:Ii("add"),set:Ii("set"),delete:Ii("delete"),clear:Ii("clear"),forEach:la(!0,!1)},i={get(s){return sa(this,s,!0,!0)},get size(){return aa(this,!0)},has(s){return oa.call(this,s,!0)},add:Ii("add"),set:Ii("set"),delete:Ii("delete"),clear:Ii("clear"),forEach:la(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ca(s,!1,!1),t[s]=ca(s,!0,!1),e[s]=ca(s,!1,!0),i[s]=ca(s,!0,!0)}),[n,t,e,i]}const[Mv,Sv,bv,yv]=xv();function Uu(n,e){const t=e?n?yv:bv:n?Sv:Mv;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const Ev={get:Uu(!1,!1)},Tv={get:Uu(!1,!0)},Av={get:Uu(!0,!1)},Up=new WeakMap,Np=new WeakMap,Fp=new WeakMap,wv=new WeakMap;function Rv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cv(n){return n.__v_skip||!Object.isExtensible(n)?0:Rv(Wg(n))}function Ko(n){return Fs(n)?n:Nu(n,!1,Op,Ev,Up)}function Bp(n){return Nu(n,!1,vv,Tv,Np)}function kp(n){return Nu(n,!0,gv,Av,Fp)}function Nu(n,e,t,i,r){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Cv(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Rs(n){return Fs(n)?Rs(n.__v_raw):!!(n&&n.__v_isReactive)}function Fs(n){return!!(n&&n.__v_isReadonly)}function qa(n){return!!(n&&n.__v_isShallow)}function zp(n){return Rs(n)||Fs(n)}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function Hp(n){return Wa(n,"__v_skip",!0),n}const Oo=n=>ct(n)?Ko(n):n,Fu=n=>ct(n)?kp(n):n;function Gp(n){Ki&&zn&&(n=Qe(n),Lp(n.dep||(n.dep=Lu())))}function Vp(n,e){n=Qe(n);const t=n.dep;t&&Gc(t)}function Ht(n){return!!(n&&n.__v_isRef===!0)}function Pv(n){return Wp(n,!1)}function go(n){return Wp(n,!0)}function Wp(n,e){return Ht(n)?n:new Lv(n,e)}class Lv{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Qe(e),this._value=t?e:Oo(e)}get value(){return Gp(this),this._value}set value(e){const t=this.__v_isShallow||qa(e)||Fs(e);e=t?e:Qe(e),Io(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Oo(e),Vp(this))}}function Cs(n){return Ht(n)?n.value:n}const Dv={get:(n,e,t)=>Cs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ht(r)&&!Ht(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function qp(n){return Rs(n)?n:new Proxy(n,Dv)}class Iv{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Du(e,()=>{this._dirty||(this._dirty=!0,Vp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Qe(this);return Gp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ov(n,e,t=!1){let i,r;const s=Ge(n);return s?(i=n,r=qn):(i=n.get,r=n.set),new Iv(i,r,s||!r,t)}function Zi(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){gl(s,e,t)}return r}function Ln(n,e,t,i){if(Ge(n)){const s=Zi(n,e,t,i);return s&&bp(s)&&s.catch(o=>{gl(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Ln(n[s],e,t,i));return r}function gl(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Zi(l,null,10,[n,o,a]);return}}Uv(n,t,r,i)}function Uv(n,e,t,i=!0){console.error(n)}let Uo=!1,Vc=!1;const kt=[];let ei=0;const Ps=[];let Mi=null,yr=0;const Xp=Promise.resolve();let Bu=null;function Yp(n){const e=Bu||Xp;return n?e.then(this?n.bind(this):n):e}function Nv(n){let e=ei+1,t=kt.length;for(;e<t;){const i=e+t>>>1;No(kt[i])<n?e=i+1:t=i}return e}function ku(n){(!kt.length||!kt.includes(n,Uo&&n.allowRecurse?ei+1:ei))&&(n.id==null?kt.push(n):kt.splice(Nv(n.id),0,n),jp())}function jp(){!Uo&&!Vc&&(Vc=!0,Bu=Xp.then(Kp))}function Fv(n){const e=kt.indexOf(n);e>ei&&kt.splice(e,1)}function Bv(n){Oe(n)?Ps.push(...n):(!Mi||!Mi.includes(n,n.allowRecurse?yr+1:yr))&&Ps.push(n),jp()}function Ff(n,e=Uo?ei+1:0){for(;e<kt.length;e++){const t=kt[e];t&&t.pre&&(kt.splice(e,1),e--,t())}}function $p(n){if(Ps.length){const e=[...new Set(Ps)];if(Ps.length=0,Mi){Mi.push(...e);return}for(Mi=e,Mi.sort((t,i)=>No(t)-No(i)),yr=0;yr<Mi.length;yr++)Mi[yr]();Mi=null,yr=0}}const No=n=>n.id==null?1/0:n.id,kv=(n,e)=>{const t=No(n)-No(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Kp(n){Vc=!1,Uo=!0,kt.sort(kv);const e=qn;try{for(ei=0;ei<kt.length;ei++){const t=kt[ei];t&&t.active!==!1&&Zi(t,null,14)}}finally{ei=0,kt.length=0,$p(),Uo=!1,Bu=null,(kt.length||Ps.length)&&Kp()}}function zv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||lt;h&&(r=t.map(d=>St(d)?d.trim():d)),f&&(r=t.map(Yg))}let a,l=i[a=Bl(e)]||i[a=Bl(ai(e))];!l&&s&&(l=i[a=Bl(Ks(e))]),l&&Ln(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,r)}}function Zp(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=Zp(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ct(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>o[l]=null):Rt(o,s),ct(n)&&i.set(n,o),o)}function vl(n,e){return!n||!fl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,Ks(e))||Je(n,e))}let Ut=null,Jp=null;function Xa(n){const e=Ut;return Ut=n,Jp=n&&n.type.__scopeId||null,e}function mn(n,e=Ut,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&$f(-1);const s=Xa(e);let o;try{o=n(...r)}finally{Xa(s),i._d&&$f(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zl(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n;let m,p;const x=Xa(n);try{if(t.shapeFlag&4){const y=r||i;m=Jn(u.call(y,y,f,s,d,h,g)),p=l}else{const y=e;m=Jn(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),p=e.props?l:Hv(l)}}catch(y){Eo.length=0,gl(y,n,1),m=nt(Dn)}let v=m;if(p&&_!==!1){const y=Object.keys(p),{shapeFlag:E}=v;y.length&&E&7&&(o&&y.some(wu)&&(p=Gv(p,o)),v=rr(v,p))}return t.dirs&&(v=rr(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,Xa(x),m}const Hv=n=>{let e;for(const t in n)(t==="class"||t==="style"||fl(t))&&((e||(e={}))[t]=n[t]);return e},Gv=(n,e)=>{const t={};for(const i in n)(!wu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Vv(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Bf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!vl(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bf(i,o,c):!0:!!o;return!1}function Bf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!vl(t,s))return!0}return!1}function Wv({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const qv=n=>n.__isSuspense;function Xv(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):Bv(n)}const ua={};function Ls(n,e,t){return Qp(n,e,t)}function Qp(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=lt){var a;const l=iv()===((a=Dt)==null?void 0:a.scope)?Dt:null;let c,u=!1,f=!1;if(Ht(n)?(c=()=>n.value,u=qa(n)):Rs(n)?(c=()=>n,i=!0):Oe(n)?(f=!0,u=n.some(y=>Rs(y)||qa(y)),c=()=>n.map(y=>{if(Ht(y))return y.value;if(Rs(y))return wr(y);if(Ge(y))return Zi(y,l,2)})):Ge(n)?e?c=()=>Zi(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ln(n,l,3,[d])}:c=qn,e&&i){const y=c;c=()=>wr(y())}let h,d=y=>{h=x.onStop=()=>{Zi(y,l,4)}},g;if(Bo)if(d=qn,e?t&&Ln(e,l,3,[c(),f?[]:void 0,d]):c(),r==="sync"){const y=z0();g=y.__watcherHandles||(y.__watcherHandles=[])}else return qn;let _=f?new Array(n.length).fill(ua):ua;const m=()=>{if(x.active)if(e){const y=x.run();(i||u||(f?y.some((E,C)=>Io(E,_[C])):Io(y,_)))&&(h&&h(),Ln(e,l,3,[y,_===ua?void 0:f&&_[0]===ua?[]:_,d]),_=y)}else x.run()};m.allowRecurse=!!e;let p;r==="sync"?p=m:r==="post"?p=()=>Kt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>ku(m));const x=new Du(c,p);e?t?m():_=x.run():r==="post"?Kt(x.run.bind(x),l&&l.suspense):x.run();const v=()=>{x.stop(),l&&l.scope&&Ru(l.scope.effects,x)};return g&&g.push(v),v}function Yv(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?em(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=Dt;Bs(this);const a=Qp(r,s.bind(i),t);return o?Bs(o):Pr(),a}function em(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function wr(n,e){if(!ct(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ht(n))wr(n.value,e);else if(Oe(n))for(let t=0;t<n.length;t++)wr(n[t],e);else if(Sp(n)||ws(n))n.forEach(t=>{wr(t,e)});else if(Ep(n))for(const t in n)wr(n[t],e);return n}function jv(n,e){const t=Ut;if(t===null)return n;const i=yl(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=lt]=e[s];o&&(Ge(o)&&(o={mounted:o,updated:o}),o.deep&&wr(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function fr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Zs(),Ln(l,t,8,[n.el,a,n,e]),Js())}}function $v(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return om(()=>{n.isMounted=!0}),am(()=>{n.isUnmounting=!0}),n}const Sn=[Function,Array],tm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},Kv={name:"BaseTransition",props:tm,setup(n,{slots:e}){const t=D0(),i=$v();let r;return()=>{const s=e.default&&im(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const _ of s)if(_.type!==Dn){o=_;break}}const a=Qe(n),{mode:l}=a;if(i.isLeaving)return Hl(o);const c=kf(o);if(!c)return Hl(o);const u=Wc(c,a,i,t);qc(c,u);const f=t.subTree,h=f&&kf(f);let d=!1;const{getTransitionKey:g}=c.type;if(g){const _=g();r===void 0?r=_:_!==r&&(r=_,d=!0)}if(h&&h.type!==Dn&&(!Er(c,h)||d)){const _=Wc(h,a,i,t);if(qc(h,_),l==="out-in")return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},Hl(o);l==="in-out"&&c.type!==Dn&&(_.delayLeave=(m,p,x)=>{const v=nm(i,h);v[String(h.key)]=h,m._leaveCb=()=>{p(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},Zv=Kv;function nm(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Wc(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:_,onAppear:m,onAfterAppear:p,onAppearCancelled:x}=e,v=String(n.key),y=nm(t,n),E=(L,M)=>{L&&Ln(L,i,9,M)},C=(L,M)=>{const w=M[1];E(L,M),Oe(L)?L.every(Y=>Y.length<=1)&&w():L.length<=1&&w()},A={mode:s,persisted:o,beforeEnter(L){let M=a;if(!t.isMounted)if(r)M=_||a;else return;L._leaveCb&&L._leaveCb(!0);const w=y[v];w&&Er(n,w)&&w.el._leaveCb&&w.el._leaveCb(),E(M,[L])},enter(L){let M=l,w=c,Y=u;if(!t.isMounted)if(r)M=m||l,w=p||c,Y=x||u;else return;let z=!1;const N=L._enterCb=G=>{z||(z=!0,G?E(Y,[L]):E(w,[L]),A.delayedLeave&&A.delayedLeave(),L._enterCb=void 0)};M?C(M,[L,N]):N()},leave(L,M){const w=String(n.key);if(L._enterCb&&L._enterCb(!0),t.isUnmounting)return M();E(f,[L]);let Y=!1;const z=L._leaveCb=N=>{Y||(Y=!0,M(),N?E(g,[L]):E(d,[L]),L._leaveCb=void 0,y[w]===n&&delete y[w])};y[w]=n,h?C(h,[L,z]):z()},clone(L){return Wc(L,e,t,i)}};return A}function Hl(n){if(xl(n))return n=rr(n),n.children=null,n}function kf(n){return xl(n)?n.children?n.children[0]:void 0:n}function qc(n,e){n.shapeFlag&6&&n.component?qc(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function im(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Mt?(o.patchFlag&128&&r++,i=i.concat(im(o.children,e,a))):(e||o.type!==Dn)&&i.push(a!=null?rr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function rm(n,e){return Ge(n)?(()=>Rt({name:n.name},e,{setup:n}))():n}const bo=n=>!!n.type.__asyncLoader,xl=n=>n.type.__isKeepAlive;function Jv(n,e){sm(n,"a",e)}function Qv(n,e){sm(n,"da",e)}function sm(n,e,t=Dt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ml(e,i,t),t){let r=t.parent;for(;r&&r.parent;)xl(r.parent.vnode)&&e0(i,e,t,r),r=r.parent}}function e0(n,e,t,i){const r=Ml(e,n,i,!0);lm(()=>{Ru(i[e],r)},t)}function Ml(n,e,t=Dt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Zs(),Bs(t);const a=Ln(e,t,n,o);return Pr(),Js(),a});return i?r.unshift(s):r.push(s),s}}const Li=n=>(e,t=Dt)=>(!Bo||n==="sp")&&Ml(n,(...i)=>e(...i),t),t0=Li("bm"),om=Li("m"),n0=Li("bu"),i0=Li("u"),am=Li("bum"),lm=Li("um"),r0=Li("sp"),s0=Li("rtg"),o0=Li("rtc");function a0(n,e=Dt){Ml("ec",n,e)}const zu="components";function Hn(n,e){return fm(zu,n,!0,e)||n}const cm=Symbol.for("v-ndc");function um(n){return St(n)?fm(zu,n,!1)||n:n||cm}function fm(n,e,t=!0,i=!1){const r=Ut||Dt;if(r){const s=r.type;if(n===zu){const a=F0(s,!1);if(a&&(a===e||a===ai(e)||a===pl(ai(e))))return s}const o=zf(r[n]||s[n],e)||zf(r.appContext[n],e);return!o&&i?s:o}}function zf(n,e){return n&&(n[e]||n[ai(e)]||n[pl(ai(e))])}function Ti(n,e,t,i){let r;const s=t&&t[i];if(Oe(n)||St(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(ct(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function hm(n,e,t={},i,r){if(Ut.isCE||Ut.parent&&bo(Ut.parent)&&Ut.parent.isCE)return e!=="default"&&(t.name=e),nt("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),Fe();const o=s&&dm(s(t)),a=Zo(Mt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function dm(n){return n.some(e=>$a(e)?!(e.type===Dn||e.type===Mt&&!dm(e.children)):!0)?n:null}const Xc=n=>n?Em(n)?yl(n)||n.proxy:Xc(n.parent):null,yo=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Xc(n.parent),$root:n=>Xc(n.root),$emit:n=>n.emit,$options:n=>Hu(n),$forceUpdate:n=>n.f||(n.f=()=>ku(n.update)),$nextTick:n=>n.n||(n.n=Yp.bind(n.proxy)),$watch:n=>Yv.bind(n)}),Gl=(n,e)=>n!==lt&&!n.__isScriptSetup&&Je(n,e),l0={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Gl(i,e))return o[e]=1,i[e];if(r!==lt&&Je(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Je(c,e))return o[e]=3,s[e];if(t!==lt&&Je(t,e))return o[e]=4,t[e];Yc&&(o[e]=0)}}const u=yo[e];let f,h;if(u)return e==="$attrs"&&on(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==lt&&Je(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Je(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Gl(r,e)?(r[e]=t,!0):i!==lt&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==lt&&Je(n,o)||Gl(e,o)||(a=s[0])&&Je(a,o)||Je(i,o)||Je(yo,o)||Je(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hf(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Yc=!0;function c0(n){const e=Hu(n),t=n.proxy,i=n.ctx;Yc=!1,e.beforeCreate&&Gf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:v,unmounted:y,render:E,renderTracked:C,renderTriggered:A,errorCaptured:L,serverPrefetch:M,expose:w,inheritAttrs:Y,components:z,directives:N,filters:G}=e;if(c&&u0(c,i,null),o)for(const B in o){const q=o[B];Ge(q)&&(i[B]=q.bind(t))}if(r){const B=r.call(t,t);ct(B)&&(n.data=Ko(B))}if(Yc=!0,s)for(const B in s){const q=s[B],oe=Ge(q)?q.bind(t,t):Ge(q.get)?q.get.bind(t,t):qn,ce=!Ge(q)&&Ge(q.set)?q.set.bind(t):qn,V=wn({get:oe,set:ce});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>V.value,set:J=>V.value=J})}if(a)for(const B in a)pm(a[B],i,t,B);if(l){const B=Ge(l)?l.call(t):l;Reflect.ownKeys(B).forEach(q=>{Ba(q,B[q])})}u&&Gf(u,n,"c");function Q(B,q){Oe(q)?q.forEach(oe=>B(oe.bind(t))):q&&B(q.bind(t))}if(Q(t0,f),Q(om,h),Q(n0,d),Q(i0,g),Q(Jv,_),Q(Qv,m),Q(a0,L),Q(o0,C),Q(s0,A),Q(am,x),Q(lm,y),Q(r0,M),Oe(w))if(w.length){const B=n.exposed||(n.exposed={});w.forEach(q=>{Object.defineProperty(B,q,{get:()=>t[q],set:oe=>t[q]=oe})})}else n.exposed||(n.exposed={});E&&n.render===qn&&(n.render=E),Y!=null&&(n.inheritAttrs=Y),z&&(n.components=z),N&&(n.directives=N)}function u0(n,e,t=qn){Oe(n)&&(n=jc(n));for(const i in n){const r=n[i];let s;ct(r)?"default"in r?s=Ai(r.from||i,r.default,!0):s=Ai(r.from||i):s=Ai(r),Ht(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Gf(n,e,t){Ln(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function pm(n,e,t,i){const r=i.includes(".")?em(t,i):()=>t[i];if(St(n)){const s=e[n];Ge(s)&&Ls(r,s)}else if(Ge(n))Ls(r,n.bind(t));else if(ct(n))if(Oe(n))n.forEach(s=>pm(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&Ls(r,s,n)}}function Hu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ya(l,c,o,!0)),Ya(l,e,o)),ct(e)&&s.set(e,l),l}function Ya(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ya(n,s,t,!0),r&&r.forEach(o=>Ya(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=f0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const f0={data:Vf,props:Wf,emits:Wf,methods:vo,computed:vo,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:vo,directives:vo,watch:d0,provide:Vf,inject:h0};function Vf(n,e){return e?n?function(){return Rt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function h0(n,e){return vo(jc(n),jc(e))}function jc(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function vo(n,e){return n?Rt(Object.create(null),n,e):e}function Wf(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:Rt(Object.create(null),Hf(n),Hf(e??{})):e}function d0(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function mm(){return{app:null,config:{isNativeTag:Hg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p0=0;function m0(n,e){return function(i,r=null){Ge(i)||(i=Rt({},i)),r!=null&&!ct(r)&&(r=null);const s=mm(),o=new Set;let a=!1;const l=s.app={_uid:p0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:H0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ge(c.install)?(o.add(c),c.install(l,...u)):Ge(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=nt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,yl(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ja=l;try{return c()}finally{ja=null}}};return l}}let ja=null;function Ba(n,e){if(Dt){let t=Dt.provides;const i=Dt.parent&&Dt.parent.provides;i===t&&(t=Dt.provides=Object.create(i)),t[n]=e}}function Ai(n,e,t=!1){const i=Dt||Ut;if(i||ja){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ja._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}function _0(n,e,t,i=!1){const r={},s={};Wa(s,bl,1),n.propsDefaults=Object.create(null),_m(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Bp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function g0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(vl(n.emitsOptions,h))continue;const d=e[h];if(l)if(Je(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=ai(h);r[g]=$c(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{_m(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Je(e,f)&&((u=Ks(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=$c(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Je(e,f))&&(delete s[f],c=!0)}c&&wi(n,"set","$attrs")}function _m(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fa(l))continue;const c=e[l];let u;r&&Je(r,u=ai(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:vl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qe(t),c=a||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=$c(r,l,f,c[f],n,!Je(c,f))}}return o}function $c(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Bs(r),i=c[t]=l.call(null,e),Pr())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ks(t))&&(i=!0))}return i}function gm(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[h,d]=gm(f,e,!0);Rt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ct(n)&&i.set(n,As),As;if(Oe(s))for(let u=0;u<s.length;u++){const f=ai(s[u]);qf(f)&&(o[f]=lt)}else if(s)for(const u in s){const f=ai(u);if(qf(f)){const h=s[u],d=o[f]=Oe(h)||Ge(h)?{type:h}:Rt({},h);if(d){const g=jf(Boolean,d.type),_=jf(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||Je(d,"default"))&&a.push(f)}}}const c=[o,a];return ct(n)&&i.set(n,c),c}function qf(n){return n[0]!=="$"}function Xf(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Yf(n,e){return Xf(n)===Xf(e)}function jf(n,e){return Oe(e)?e.findIndex(t=>Yf(t,n)):Ge(e)&&Yf(e,n)?0:-1}const vm=n=>n[0]==="_"||n==="$stable",Gu=n=>Oe(n)?n.map(Jn):[Jn(n)],v0=(n,e,t)=>{if(e._n)return e;const i=mn((...r)=>Gu(e(...r)),t);return i._c=!1,i},xm=(n,e,t)=>{const i=n._ctx;for(const r in n){if(vm(r))continue;const s=n[r];if(Ge(s))e[r]=v0(r,s,i);else if(s!=null){const o=Gu(s);e[r]=()=>o}}},Mm=(n,e)=>{const t=Gu(e);n.slots.default=()=>t},x0=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Qe(e),Wa(e,"_",t)):xm(e,n.slots={})}else n.slots={},e&&Mm(n,e);Wa(n.slots,bl,1)},M0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Rt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,xm(e,r)),o=e}else e&&(Mm(n,e),o={default:1});if(s)for(const a in r)!vm(a)&&!(a in o)&&delete r[a]};function Kc(n,e,t,i,r=!1){if(Oe(n)){n.forEach((h,d)=>Kc(h,e&&(Oe(e)?e[d]:e),t,i,r));return}if(bo(i)&&!r)return;const s=i.shapeFlag&4?yl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(St(c)?(u[c]=null,Je(f,c)&&(f[c]=null)):Ht(c)&&(c.value=null)),Ge(l))Zi(l,a,12,[o,u]);else{const h=St(l),d=Ht(l);if(h||d){const g=()=>{if(n.f){const _=h?Je(f,l)?f[l]:u[l]:l.value;r?Oe(_)&&Ru(_,s):Oe(_)?_.includes(s)||_.push(s):h?(u[l]=[s],Je(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Je(f,l)&&(f[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Kt(g,t)):g()}}}const Kt=Xv;function S0(n){return b0(n)}function b0(n,e){const t=Bc();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=qn,insertStaticContent:g}=n,_=(S,P,I,k=null,j=null,ie=null,pe=!1,ee=null,he=!!P.dynamicChildren)=>{if(S===P)return;S&&!Er(S,P)&&(k=X(S),J(S,j,ie,!0),S=null),P.patchFlag===-2&&(he=!1,P.dynamicChildren=null);const{type:ue,ref:Re,shapeFlag:T}=P;switch(ue){case Sl:m(S,P,I,k);break;case Dn:p(S,P,I,k);break;case Vl:S==null&&x(P,I,k,pe);break;case Mt:z(S,P,I,k,j,ie,pe,ee,he);break;default:T&1?E(S,P,I,k,j,ie,pe,ee,he):T&6?N(S,P,I,k,j,ie,pe,ee,he):(T&64||T&128)&&ue.process(S,P,I,k,j,ie,pe,ee,he,de)}Re!=null&&j&&Kc(Re,S&&S.ref,ie,P||S,!P)},m=(S,P,I,k)=>{if(S==null)i(P.el=a(P.children),I,k);else{const j=P.el=S.el;P.children!==S.children&&c(j,P.children)}},p=(S,P,I,k)=>{S==null?i(P.el=l(P.children||""),I,k):P.el=S.el},x=(S,P,I,k)=>{[S.el,S.anchor]=g(S.children,P,I,k,S.el,S.anchor)},v=({el:S,anchor:P},I,k)=>{let j;for(;S&&S!==P;)j=h(S),i(S,I,k),S=j;i(P,I,k)},y=({el:S,anchor:P})=>{let I;for(;S&&S!==P;)I=h(S),r(S),S=I;r(P)},E=(S,P,I,k,j,ie,pe,ee,he)=>{pe=pe||P.type==="svg",S==null?C(P,I,k,j,ie,pe,ee,he):M(S,P,j,ie,pe,ee,he)},C=(S,P,I,k,j,ie,pe,ee)=>{let he,ue;const{type:Re,props:T,shapeFlag:b,transition:U,dirs:re}=S;if(he=S.el=o(S.type,ie,T&&T.is,T),b&8?u(he,S.children):b&16&&L(S.children,he,null,k,j,ie&&Re!=="foreignObject",pe,ee),re&&fr(S,null,k,"created"),A(he,S,S.scopeId,pe,k),T){for(const le in T)le!=="value"&&!Fa(le)&&s(he,le,null,T[le],ie,S.children,k,j,Pe);"value"in T&&s(he,"value",null,T.value),(ue=T.onVnodeBeforeMount)&&Kn(ue,k,S)}re&&fr(S,null,k,"beforeMount");const se=(!j||j&&!j.pendingBranch)&&U&&!U.persisted;se&&U.beforeEnter(he),i(he,P,I),((ue=T&&T.onVnodeMounted)||se||re)&&Kt(()=>{ue&&Kn(ue,k,S),se&&U.enter(he),re&&fr(S,null,k,"mounted")},j)},A=(S,P,I,k,j)=>{if(I&&d(S,I),k)for(let ie=0;ie<k.length;ie++)d(S,k[ie]);if(j){let ie=j.subTree;if(P===ie){const pe=j.vnode;A(S,pe,pe.scopeId,pe.slotScopeIds,j.parent)}}},L=(S,P,I,k,j,ie,pe,ee,he=0)=>{for(let ue=he;ue<S.length;ue++){const Re=S[ue]=ee?Hi(S[ue]):Jn(S[ue]);_(null,Re,P,I,k,j,ie,pe,ee)}},M=(S,P,I,k,j,ie,pe)=>{const ee=P.el=S.el;let{patchFlag:he,dynamicChildren:ue,dirs:Re}=P;he|=S.patchFlag&16;const T=S.props||lt,b=P.props||lt;let U;I&&hr(I,!1),(U=b.onVnodeBeforeUpdate)&&Kn(U,I,P,S),Re&&fr(P,S,I,"beforeUpdate"),I&&hr(I,!0);const re=j&&P.type!=="foreignObject";if(ue?w(S.dynamicChildren,ue,ee,I,k,re,ie):pe||q(S,P,ee,null,I,k,re,ie,!1),he>0){if(he&16)Y(ee,P,T,b,I,k,j);else if(he&2&&T.class!==b.class&&s(ee,"class",null,b.class,j),he&4&&s(ee,"style",T.style,b.style,j),he&8){const se=P.dynamicProps;for(let le=0;le<se.length;le++){const be=se[le],me=T[be],K=b[be];(K!==me||be==="value")&&s(ee,be,me,K,j,S.children,I,k,Pe)}}he&1&&S.children!==P.children&&u(ee,P.children)}else!pe&&ue==null&&Y(ee,P,T,b,I,k,j);((U=b.onVnodeUpdated)||Re)&&Kt(()=>{U&&Kn(U,I,P,S),Re&&fr(P,S,I,"updated")},k)},w=(S,P,I,k,j,ie,pe)=>{for(let ee=0;ee<P.length;ee++){const he=S[ee],ue=P[ee],Re=he.el&&(he.type===Mt||!Er(he,ue)||he.shapeFlag&70)?f(he.el):I;_(he,ue,Re,null,k,j,ie,pe,!0)}},Y=(S,P,I,k,j,ie,pe)=>{if(I!==k){if(I!==lt)for(const ee in I)!Fa(ee)&&!(ee in k)&&s(S,ee,I[ee],null,pe,P.children,j,ie,Pe);for(const ee in k){if(Fa(ee))continue;const he=k[ee],ue=I[ee];he!==ue&&ee!=="value"&&s(S,ee,ue,he,pe,P.children,j,ie,Pe)}"value"in k&&s(S,"value",I.value,k.value)}},z=(S,P,I,k,j,ie,pe,ee,he)=>{const ue=P.el=S?S.el:a(""),Re=P.anchor=S?S.anchor:a("");let{patchFlag:T,dynamicChildren:b,slotScopeIds:U}=P;U&&(ee=ee?ee.concat(U):U),S==null?(i(ue,I,k),i(Re,I,k),L(P.children,I,Re,j,ie,pe,ee,he)):T>0&&T&64&&b&&S.dynamicChildren?(w(S.dynamicChildren,b,I,j,ie,pe,ee),(P.key!=null||j&&P===j.subTree)&&Sm(S,P,!0)):q(S,P,I,Re,j,ie,pe,ee,he)},N=(S,P,I,k,j,ie,pe,ee,he)=>{P.slotScopeIds=ee,S==null?P.shapeFlag&512?j.ctx.activate(P,I,k,pe,he):G(P,I,k,j,ie,pe,he):H(S,P,he)},G=(S,P,I,k,j,ie,pe)=>{const ee=S.component=L0(S,k,j);if(xl(S)&&(ee.ctx.renderer=de),I0(ee),ee.asyncDep){if(j&&j.registerDep(ee,Q),!S.el){const he=ee.subTree=nt(Dn);p(null,he,P,I)}return}Q(ee,S,P,I,j,ie,pe)},H=(S,P,I)=>{const k=P.component=S.component;if(Vv(S,P,I))if(k.asyncDep&&!k.asyncResolved){B(k,P,I);return}else k.next=P,Fv(k.update),k.update();else P.el=S.el,k.vnode=P},Q=(S,P,I,k,j,ie,pe)=>{const ee=()=>{if(S.isMounted){let{next:Re,bu:T,u:b,parent:U,vnode:re}=S,se=Re,le;hr(S,!1),Re?(Re.el=re.el,B(S,Re,pe)):Re=re,T&&kl(T),(le=Re.props&&Re.props.onVnodeBeforeUpdate)&&Kn(le,U,Re,re),hr(S,!0);const be=zl(S),me=S.subTree;S.subTree=be,_(me,be,f(me.el),X(me),S,j,ie),Re.el=be.el,se===null&&Wv(S,be.el),b&&Kt(b,j),(le=Re.props&&Re.props.onVnodeUpdated)&&Kt(()=>Kn(le,U,Re,re),j)}else{let Re;const{el:T,props:b}=P,{bm:U,m:re,parent:se}=S,le=bo(P);if(hr(S,!1),U&&kl(U),!le&&(Re=b&&b.onVnodeBeforeMount)&&Kn(Re,se,P),hr(S,!0),T&&Ce){const be=()=>{S.subTree=zl(S),Ce(T,S.subTree,S,j,null)};le?P.type.__asyncLoader().then(()=>!S.isUnmounted&&be()):be()}else{const be=S.subTree=zl(S);_(null,be,I,k,S,j,ie),P.el=be.el}if(re&&Kt(re,j),!le&&(Re=b&&b.onVnodeMounted)){const be=P;Kt(()=>Kn(Re,se,be),j)}(P.shapeFlag&256||se&&bo(se.vnode)&&se.vnode.shapeFlag&256)&&S.a&&Kt(S.a,j),S.isMounted=!0,P=I=k=null}},he=S.effect=new Du(ee,()=>ku(ue),S.scope),ue=S.update=()=>he.run();ue.id=S.uid,hr(S,!0),ue()},B=(S,P,I)=>{P.component=S;const k=S.vnode.props;S.vnode=P,S.next=null,g0(S,P.props,k,I),M0(S,P.children,I),Zs(),Ff(),Js()},q=(S,P,I,k,j,ie,pe,ee,he=!1)=>{const ue=S&&S.children,Re=S?S.shapeFlag:0,T=P.children,{patchFlag:b,shapeFlag:U}=P;if(b>0){if(b&128){ce(ue,T,I,k,j,ie,pe,ee,he);return}else if(b&256){oe(ue,T,I,k,j,ie,pe,ee,he);return}}U&8?(Re&16&&Pe(ue,j,ie),T!==ue&&u(I,T)):Re&16?U&16?ce(ue,T,I,k,j,ie,pe,ee,he):Pe(ue,j,ie,!0):(Re&8&&u(I,""),U&16&&L(T,I,k,j,ie,pe,ee,he))},oe=(S,P,I,k,j,ie,pe,ee,he)=>{S=S||As,P=P||As;const ue=S.length,Re=P.length,T=Math.min(ue,Re);let b;for(b=0;b<T;b++){const U=P[b]=he?Hi(P[b]):Jn(P[b]);_(S[b],U,I,null,j,ie,pe,ee,he)}ue>Re?Pe(S,j,ie,!0,!1,T):L(P,I,k,j,ie,pe,ee,he,T)},ce=(S,P,I,k,j,ie,pe,ee,he)=>{let ue=0;const Re=P.length;let T=S.length-1,b=Re-1;for(;ue<=T&&ue<=b;){const U=S[ue],re=P[ue]=he?Hi(P[ue]):Jn(P[ue]);if(Er(U,re))_(U,re,I,null,j,ie,pe,ee,he);else break;ue++}for(;ue<=T&&ue<=b;){const U=S[T],re=P[b]=he?Hi(P[b]):Jn(P[b]);if(Er(U,re))_(U,re,I,null,j,ie,pe,ee,he);else break;T--,b--}if(ue>T){if(ue<=b){const U=b+1,re=U<Re?P[U].el:k;for(;ue<=b;)_(null,P[ue]=he?Hi(P[ue]):Jn(P[ue]),I,re,j,ie,pe,ee,he),ue++}}else if(ue>b)for(;ue<=T;)J(S[ue],j,ie,!0),ue++;else{const U=ue,re=ue,se=new Map;for(ue=re;ue<=b;ue++){const _e=P[ue]=he?Hi(P[ue]):Jn(P[ue]);_e.key!=null&&se.set(_e.key,ue)}let le,be=0;const me=b-re+1;let K=!1,D=0;const fe=new Array(me);for(ue=0;ue<me;ue++)fe[ue]=0;for(ue=U;ue<=T;ue++){const _e=S[ue];if(be>=me){J(_e,j,ie,!0);continue}let xe;if(_e.key!=null)xe=se.get(_e.key);else for(le=re;le<=b;le++)if(fe[le-re]===0&&Er(_e,P[le])){xe=le;break}xe===void 0?J(_e,j,ie,!0):(fe[xe-re]=ue+1,xe>=D?D=xe:K=!0,_(_e,P[xe],I,null,j,ie,pe,ee,he),be++)}const Ee=K?y0(fe):As;for(le=Ee.length-1,ue=me-1;ue>=0;ue--){const _e=re+ue,xe=P[_e],Ue=_e+1<Re?P[_e+1].el:k;fe[ue]===0?_(null,xe,I,Ue,j,ie,pe,ee,he):K&&(le<0||ue!==Ee[le]?V(xe,I,Ue,2):le--)}}},V=(S,P,I,k,j=null)=>{const{el:ie,type:pe,transition:ee,children:he,shapeFlag:ue}=S;if(ue&6){V(S.component.subTree,P,I,k);return}if(ue&128){S.suspense.move(P,I,k);return}if(ue&64){pe.move(S,P,I,de);return}if(pe===Mt){i(ie,P,I);for(let T=0;T<he.length;T++)V(he[T],P,I,k);i(S.anchor,P,I);return}if(pe===Vl){v(S,P,I);return}if(k!==2&&ue&1&&ee)if(k===0)ee.beforeEnter(ie),i(ie,P,I),Kt(()=>ee.enter(ie),j);else{const{leave:T,delayLeave:b,afterLeave:U}=ee,re=()=>i(ie,P,I),se=()=>{T(ie,()=>{re(),U&&U()})};b?b(ie,re,se):se()}else i(ie,P,I)},J=(S,P,I,k=!1,j=!1)=>{const{type:ie,props:pe,ref:ee,children:he,dynamicChildren:ue,shapeFlag:Re,patchFlag:T,dirs:b}=S;if(ee!=null&&Kc(ee,null,I,S,!0),Re&256){P.ctx.deactivate(S);return}const U=Re&1&&b,re=!bo(S);let se;if(re&&(se=pe&&pe.onVnodeBeforeUnmount)&&Kn(se,P,S),Re&6)Se(S.component,I,k);else{if(Re&128){S.suspense.unmount(I,k);return}U&&fr(S,null,P,"beforeUnmount"),Re&64?S.type.remove(S,P,I,j,de,k):ue&&(ie!==Mt||T>0&&T&64)?Pe(ue,P,I,!1,!0):(ie===Mt&&T&384||!j&&Re&16)&&Pe(he,P,I),k&&Me(S)}(re&&(se=pe&&pe.onVnodeUnmounted)||U)&&Kt(()=>{se&&Kn(se,P,S),U&&fr(S,null,P,"unmounted")},I)},Me=S=>{const{type:P,el:I,anchor:k,transition:j}=S;if(P===Mt){ve(I,k);return}if(P===Vl){y(S);return}const ie=()=>{r(I),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(S.shapeFlag&1&&j&&!j.persisted){const{leave:pe,delayLeave:ee}=j,he=()=>pe(I,ie);ee?ee(S.el,ie,he):he()}else ie()},ve=(S,P)=>{let I;for(;S!==P;)I=h(S),r(S),S=I;r(P)},Se=(S,P,I)=>{const{bum:k,scope:j,update:ie,subTree:pe,um:ee}=S;k&&kl(k),j.stop(),ie&&(ie.active=!1,J(pe,S,P,I)),ee&&Kt(ee,P),Kt(()=>{S.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Pe=(S,P,I,k=!1,j=!1,ie=0)=>{for(let pe=ie;pe<S.length;pe++)J(S[pe],P,I,k,j)},X=S=>S.shapeFlag&6?X(S.component.subTree):S.shapeFlag&128?S.suspense.next():h(S.anchor||S.el),ae=(S,P,I)=>{S==null?P._vnode&&J(P._vnode,null,null,!0):_(P._vnode||null,S,P,null,null,null,I),Ff(),$p(),P._vnode=S},de={p:_,um:J,m:V,r:Me,mt:G,mc:L,pc:q,pbc:w,n:X,o:n};let we,Ce;return e&&([we,Ce]=e(de)),{render:ae,hydrate:we,createApp:m0(ae,we)}}function hr({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Sm(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Hi(r[s]),a.el=o.el),t||Sm(o,a)),a.type===Sl&&(a.el=o.el)}}function y0(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const E0=n=>n.__isTeleport,Mt=Symbol.for("v-fgt"),Sl=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),Vl=Symbol.for("v-stc"),Eo=[];let Wn=null;function Fe(n=!1){Eo.push(Wn=n?null:[])}function T0(){Eo.pop(),Wn=Eo[Eo.length-1]||null}let Fo=1;function $f(n){Fo+=n}function bm(n){return n.dynamicChildren=Fo>0?Wn||As:null,T0(),Fo>0&&Wn&&Wn.push(n),n}function He(n,e,t,i,r,s){return bm(Le(n,e,t,i,r,s,!0))}function Zo(n,e,t,i,r){return bm(nt(n,e,t,i,r,!0))}function $a(n){return n?n.__v_isVNode===!0:!1}function Er(n,e){return n.type===e.type&&n.key===e.key}const bl="__vInternal",ym=({key:n})=>n??null,ka=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Ht(n)||Ge(n)?{i:Ut,r:n,k:e,f:!!t}:n:null);function Le(n,e=null,t=null,i=0,r=null,s=n===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ym(e),ref:e&&ka(e),scopeId:Jp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ut};return a?(Vu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),Fo>0&&!o&&Wn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Wn.push(l),l}const nt=A0;function A0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===cm)&&(n=Dn),$a(n)){const a=rr(n,e,!0);return t&&Vu(a,t),Fo>0&&!s&&Wn&&(a.shapeFlag&6?Wn[Wn.indexOf(n)]=a:Wn.push(a)),a.patchFlag|=-2,a}if(B0(n)&&(n=n.__vccOpts),e){e=w0(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=Jt(a)),ct(l)&&(zp(l)&&!Oe(l)&&(l=Rt({},l)),e.style=ml(l))}const o=St(n)?1:qv(n)?128:E0(n)?64:ct(n)?4:Ge(n)?2:0;return Le(n,e,t,i,r,o,s,!0)}function w0(n){return n?zp(n)||bl in n?Rt({},n):n:null}function rr(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?R0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&ym(a),ref:e&&e.ref?t&&r?Oe(r)?r.concat(ka(e)):[r,ka(e)]:ka(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rr(n.ssContent),ssFallback:n.ssFallback&&rr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ka(n=" ",e=0){return nt(Sl,null,n,e)}function En(n="",e=!1){return e?(Fe(),Zo(Dn,null,n)):nt(Dn,null,n)}function Jn(n){return n==null||typeof n=="boolean"?nt(Dn):Oe(n)?nt(Mt,null,n.slice()):typeof n=="object"?Hi(n):nt(Sl,null,String(n))}function Hi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rr(n)}function Vu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Vu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(bl in e)?e._ctx=Ut:r===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:Ut},t=32):(e=String(e),i&64?(t=16,e=[Ka(e)]):t=8);n.children=e,n.shapeFlag|=t}function R0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Jt([e.class,i.class]));else if(r==="style")e.style=ml([e.style,i.style]);else if(fl(r)){const s=e[r],o=i[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Kn(n,e,t,i=null){Ln(n,e,7,[t,i])}const C0=mm();let P0=0;function L0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||C0,s={uid:P0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gm(i,r),emitsOptions:Zp(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zv.bind(null,s),n.ce&&n.ce(s),s}let Dt=null;const D0=()=>Dt||Ut;let Wu,$r,Kf="__VUE_INSTANCE_SETTERS__";($r=Bc()[Kf])||($r=Bc()[Kf]=[]),$r.push(n=>Dt=n),Wu=n=>{$r.length>1?$r.forEach(e=>e(n)):$r[0](n)};const Bs=n=>{Wu(n),n.scope.on()},Pr=()=>{Dt&&Dt.scope.off(),Wu(null)};function Em(n){return n.vnode.shapeFlag&4}let Bo=!1;function I0(n,e=!1){Bo=e;const{props:t,children:i}=n.vnode,r=Em(n);_0(n,t,r,e),x0(n,i);const s=r?O0(n,e):void 0;return Bo=!1,s}function O0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Hp(new Proxy(n.ctx,l0));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?N0(n):null;Bs(n),Zs();const s=Zi(i,n,0,[n.props,r]);if(Js(),Pr(),bp(s)){if(s.then(Pr,Pr),e)return s.then(o=>{Zf(n,o,e)}).catch(o=>{gl(o,n,0)});n.asyncDep=s}else Zf(n,s,e)}else Tm(n,e)}function Zf(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=qp(e)),Tm(n,t)}let Jf;function Tm(n,e,t){const i=n.type;if(!n.render){if(!e&&Jf&&!i.render){const r=i.template||Hu(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Rt(Rt({isCustomElement:s,delimiters:a},o),l);i.render=Jf(r,c)}}n.render=i.render||qn}Bs(n),Zs(),c0(n),Js(),Pr()}function U0(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return on(n,"get","$attrs"),e[t]}}))}function N0(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return U0(n)},slots:n.slots,emit:n.emit,expose:e}}function yl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(qp(Hp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in yo)return yo[t](n)},has(e,t){return t in e||t in yo}}))}function F0(n,e=!0){return Ge(n)?n.displayName||n.name:n.name||e&&n.__name}function B0(n){return Ge(n)&&"__vccOpts"in n}const wn=(n,e)=>Ov(n,e,Bo);function El(n,e,t){const i=arguments.length;return i===2?ct(e)&&!Oe(e)?$a(e)?nt(n,null,[e]):nt(n,e):nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&$a(t)&&(t=[t]),nt(n,e,t))}const k0=Symbol.for("v-scx"),z0=()=>Ai(k0),H0="3.3.4",G0="http://www.w3.org/2000/svg",Tr=typeof document<"u"?document:null,Qf=Tr&&Tr.createElement("template"),V0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Tr.createElementNS(G0,n):Tr.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Tr.createTextNode(n),createComment:n=>Tr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Tr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Qf.innerHTML=i?`<svg>${n}</svg>`:n;const a=Qf.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function W0(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function q0(n,e,t){const i=n.style,r=St(t);if(t&&!r){if(e&&!St(e))for(const s in e)t[s]==null&&Zc(i,s,"");for(const s in t)Zc(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const eh=/\s*!important$/;function Zc(n,e,t){if(Oe(t))t.forEach(i=>Zc(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=X0(n,e);eh.test(t)?n.setProperty(Ks(i),t.replace(eh,""),"important"):n[i]=t}}const th=["Webkit","Moz","ms"],Wl={};function X0(n,e){const t=Wl[e];if(t)return t;let i=ai(e);if(i!=="filter"&&i in n)return Wl[e]=i;i=pl(i);for(let r=0;r<th.length;r++){const s=th[r]+i;if(s in n)return Wl[e]=s}return e}const nh="http://www.w3.org/1999/xlink";function Y0(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(nh,e.slice(6,e.length)):n.setAttributeNS(nh,e,t);else{const s=ev(e);t==null||s&&!Tp(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function j0(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Tp(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function $0(n,e,t,i){n.addEventListener(e,t,i)}function K0(n,e,t,i){n.removeEventListener(e,t,i)}function Z0(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=J0(e);if(i){const c=s[e]=tx(i,r);$0(n,a,c,l)}else o&&(K0(n,a,o,l),s[e]=void 0)}}const ih=/(?:Once|Passive|Capture)$/;function J0(n){let e;if(ih.test(n)){e={};let i;for(;i=n.match(ih);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ks(n.slice(2)),e]}let ql=0;const Q0=Promise.resolve(),ex=()=>ql||(Q0.then(()=>ql=0),ql=Date.now());function tx(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(nx(i,t.value),e,5,[i])};return t.value=n,t.attached=ex(),t}function nx(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rh=/^on[a-z]/,ix=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?W0(n,i,r):e==="style"?q0(n,t,i):fl(e)?wu(e)||Z0(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rx(n,e,i,r))?j0(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Y0(n,e,i,r))};function rx(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&rh.test(e)&&Ge(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||rh.test(e)&&St(t)?!1:e in n}const Oi="transition",so="animation",Tl=(n,{slots:e})=>El(Zv,sx(n),e);Tl.displayName="Transition";const Am={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Tl.props=Rt({},tm,Am);const dr=(n,e=[])=>{Oe(n)?n.forEach(t=>t(...e)):n&&n(...e)},sh=n=>n?Oe(n)?n.some(e=>e.length>1):n.length>1:!1;function sx(n){const e={};for(const z in n)z in Am||(e[z]=n[z]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=ox(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:x,onEnterCancelled:v,onLeave:y,onLeaveCancelled:E,onBeforeAppear:C=p,onAppear:A=x,onAppearCancelled:L=v}=e,M=(z,N,G)=>{pr(z,N?u:a),pr(z,N?c:o),G&&G()},w=(z,N)=>{z._isLeaving=!1,pr(z,f),pr(z,d),pr(z,h),N&&N()},Y=z=>(N,G)=>{const H=z?A:x,Q=()=>M(N,z,G);dr(H,[N,Q]),oh(()=>{pr(N,z?l:s),Ui(N,z?u:a),sh(H)||ah(N,i,_,Q)})};return Rt(e,{onBeforeEnter(z){dr(p,[z]),Ui(z,s),Ui(z,o)},onBeforeAppear(z){dr(C,[z]),Ui(z,l),Ui(z,c)},onEnter:Y(!1),onAppear:Y(!0),onLeave(z,N){z._isLeaving=!0;const G=()=>w(z,N);Ui(z,f),cx(),Ui(z,h),oh(()=>{z._isLeaving&&(pr(z,f),Ui(z,d),sh(y)||ah(z,i,m,G))}),dr(y,[z,G])},onEnterCancelled(z){M(z,!1),dr(v,[z])},onAppearCancelled(z){M(z,!0),dr(L,[z])},onLeaveCancelled(z){w(z),dr(E,[z])}})}function ox(n){if(n==null)return null;if(ct(n))return[Xl(n.enter),Xl(n.leave)];{const e=Xl(n);return[e,e]}}function Xl(n){return jg(n)}function Ui(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function pr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function oh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ax=0;function ah(n,e,t,i){const r=n._endId=++ax,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=lx(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function lx(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${Oi}Delay`),s=i(`${Oi}Duration`),o=lh(r,s),a=i(`${so}Delay`),l=i(`${so}Duration`),c=lh(a,l);let u=null,f=0,h=0;e===Oi?o>0&&(u=Oi,f=o,h=s.length):e===so?c>0&&(u=so,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Oi:so:null,h=u?u===Oi?s.length:l.length:0);const d=u===Oi&&/\b(transform|all)(,|$)/.test(i(`${Oi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function lh(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ch(t)+ch(n[i])))}function ch(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function cx(){return document.body.offsetHeight}const ux={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):oo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),oo(n,!0),i.enter(n)):i.leave(n,()=>{oo(n,!1)}):oo(n,e))},beforeUnmount(n,{value:e}){oo(n,e)}};function oo(n,e){n.style.display=e?n._vod:"none"}const fx=Rt({patchProp:ix},V0);let uh;function hx(){return uh||(uh=S0(fx))}const dx=(...n)=>{const e=hx().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=px(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function px(n){return St(n)?document.querySelector(n):n}function mx(){return wm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function wm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const _x=typeof Proxy=="function",gx="devtools-plugin:setup",vx="plugin:settings:set";let Kr,Jc;function xx(){var n;return Kr!==void 0||(typeof window<"u"&&window.performance?(Kr=!0,Jc=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(Kr=!0,Jc=global.perf_hooks.performance):Kr=!1),Kr}function Mx(){return xx()?Jc.now():Date.now()}class Sx{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o},now(){return Mx()}},t&&t.on(vx,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function bx(n,e){const t=n,i=wm(),r=mx(),s=_x&&t.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(gx,n,e);else{const o=s?new Sx(t,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vs=typeof window<"u";function yx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const tt=Object.assign;function Yl(n,e){const t={};for(const i in e){const r=e[i];t[i]=Yn(r)?r.map(n):n(r)}return t}const To=()=>{},Yn=Array.isArray,Ex=/\/$/,Tx=n=>n.replace(Ex,"");function jl(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Cx(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Ax(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function fh(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function wx(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ks(e.matched[i],t.matched[r])&&Rm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ks(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Rm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Rx(n[t],e[t]))return!1;return!0}function Rx(n,e){return Yn(n)?hh(n,e):Yn(e)?hh(e,n):n===e}function hh(n,e){return Yn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Cx(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var ko;(function(n){n.pop="pop",n.push="push"})(ko||(ko={}));var Ao;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ao||(Ao={}));function Px(n){if(!n)if(vs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Tx(n)}const Lx=/^[^#]+#/;function Dx(n,e){return n.replace(Lx,"#")+e}function Ix(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Al=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ox(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Ix(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function dh(n,e){return(history.state?history.state.position-e:-1)+n}const Qc=new Map;function Ux(n,e){Qc.set(n,e)}function Nx(n){const e=Qc.get(n);return Qc.delete(n),e}let Fx=()=>location.protocol+"//"+location.host;function Cm(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),fh(l,"")}return fh(t,n)+i+r}function Bx(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=Cm(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);r.forEach(p=>{p(t.value,g,{delta:m,type:ko.pop,direction:m?m>0?Ao.forward:Ao.back:Ao.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(tt({},h.state,{scroll:Al()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function ph(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Al():null}}function kx(n){const{history:e,location:t}=window,i={value:Cm(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Fx()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=tt({},e.state,ph(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=tt({},r.value,e.state,{forward:l,scroll:Al()});s(u.current,u,!0);const f=tt({},ph(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function zx(n){n=Px(n);const e=kx(n),t=Bx(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=tt({location:"",base:n,go:i,createHref:Dx.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Hx(n){return typeof n=="string"||n&&typeof n=="object"}function Pm(n){return typeof n=="string"||typeof n=="symbol"}const Ni={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lm=Symbol("");var mh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(mh||(mh={}));function zs(n,e){return tt(new Error,{type:n,[Lm]:!0},e)}function hi(n,e){return n instanceof Error&&Lm in n&&(e==null||!!(n.type&e))}const _h="[^/]+?",Gx={sensitive:!1,strict:!1,start:!0,end:!0},Vx=/[.+*?^${}()[\]/\\]/g;function Wx(n,e){const t=tt({},Gx,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Vx,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const x=p||_h;if(x!==_h){d+=10;try{new RegExp(`(${x})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+y.message)}}let v=_?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,d+=20,m&&(d+=-8),_&&(d+=-20),x===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Yn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=Yn(p)?p.join("/"):p;if(!x)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function qx(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Xx(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=qx(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(gh(i))return 1;if(gh(r))return-1}return r.length-i.length}function gh(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Yx={type:0,value:""},jx=/[a-zA-Z0-9_]/;function $x(n){if(!n)return[[]];if(n==="/")return[[Yx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:jx.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Kx(n,e,t){const i=Wx($x(n.path),t),r=tt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Zx(n,e){const t=[],i=new Map;e=Mh({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const d=!h,g=Jx(u);g.aliasOf=h&&h.record;const _=Mh(e,u),m=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of v)m.push(tt({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let p,x;for(const v of m){const{path:y}=v;if(f&&y[0]!=="/"){const E=f.record.path,C=E[E.length-1]==="/"?"":"/";v.path=f.record.path+(y&&C+y)}if(p=Kx(v,f,_),h?h.alias.push(p):(x=x||p,x!==p&&x.alias.push(p),d&&u.name&&!xh(p)&&o(u.name)),g.children){const E=g.children;for(let C=0;C<E.length;C++)s(E[C],p,h&&h.children[C])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return x?()=>{o(x)}:To}function o(u){if(Pm(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&Xx(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Dm(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!xh(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},g,_;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw zs(1,{location:u});_=h.record.name,d=tt(vh(f.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&vh(u.params,h.keys.map(x=>x.name))),g=h.stringify(d)}else if("path"in u)g=u.path,h=t.find(x=>x.re.test(g)),h&&(d=h.parse(g),_=h.record.name);else{if(h=f.name?i.get(f.name):t.find(x=>x.re.test(f.path)),!h)throw zs(1,{location:u,currentLocation:f});_=h.record.name,d=tt({},f.params,u.params),g=h.stringify(d)}const m=[];let p=h;for(;p;)m.unshift(p.record),p=p.parent;return{name:_,path:g,params:d,matched:m,meta:eM(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function vh(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Jx(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Qx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Qx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function xh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function eM(n){return n.reduce((e,t)=>tt(e,t.meta),{})}function Mh(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Dm(n,e){return e.children.some(t=>t===n||Dm(n,t))}const Im=/#/g,tM=/&/g,nM=/\//g,iM=/=/g,rM=/\?/g,Om=/\+/g,sM=/%5B/g,oM=/%5D/g,Um=/%5E/g,aM=/%60/g,Nm=/%7B/g,lM=/%7C/g,Fm=/%7D/g,cM=/%20/g;function qu(n){return encodeURI(""+n).replace(lM,"|").replace(sM,"[").replace(oM,"]")}function uM(n){return qu(n).replace(Nm,"{").replace(Fm,"}").replace(Um,"^")}function eu(n){return qu(n).replace(Om,"%2B").replace(cM,"+").replace(Im,"%23").replace(tM,"%26").replace(aM,"`").replace(Nm,"{").replace(Fm,"}").replace(Um,"^")}function fM(n){return eu(n).replace(iM,"%3D")}function hM(n){return qu(n).replace(Im,"%23").replace(rM,"%3F")}function dM(n){return n==null?"":hM(n).replace(nM,"%2F")}function Za(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function pM(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Om," "),o=s.indexOf("="),a=Za(o<0?s:s.slice(0,o)),l=o<0?null:Za(s.slice(o+1));if(a in e){let c=e[a];Yn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Sh(n){let e="";for(let t in n){const i=n[t];if(t=fM(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Yn(i)?i.map(s=>s&&eu(s)):[i&&eu(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function mM(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Yn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const _M=Symbol(""),bh=Symbol(""),Xu=Symbol(""),Bm=Symbol(""),tu=Symbol("");function ao(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Gi(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(zs(4,{from:t,to:e})):f instanceof Error?a(f):Hx(f)?a(zs(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function $l(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(gM(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Gi(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=yx(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Gi(h,t,i,s,o)()}))}}return r}function gM(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function yh(n){const e=Ai(Xu),t=Ai(Bm),i=wn(()=>e.resolve(Cs(n.to))),r=wn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ks.bind(null,u));if(h>-1)return h;const d=Eh(l[c-2]);return c>1&&Eh(u)===d&&f[f.length-1].path!==d?f.findIndex(ks.bind(null,l[c-2])):h}),s=wn(()=>r.value>-1&&SM(t.params,i.value.params)),o=wn(()=>r.value>-1&&r.value===t.matched.length-1&&Rm(t.params,i.value.params));function a(l={}){return MM(l)?e[Cs(n.replace)?"replace":"push"](Cs(n.to)).catch(To):Promise.resolve()}return{route:i,href:wn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const vM=rm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yh,setup(n,{slots:e}){const t=Ko(yh(n)),{options:i}=Ai(Xu),r=wn(()=>({[Th(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Th(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:El("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),xM=vM;function MM(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function SM(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Yn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Eh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Th=(n,e,t)=>n??e??t,bM=rm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Ai(tu),r=wn(()=>n.route||i.value),s=Ai(bh,0),o=wn(()=>{let c=Cs(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=wn(()=>r.value.matched[o.value]);Ba(bh,wn(()=>o.value+1)),Ba(_M,a),Ba(tu,r);const l=Pv();return Ls(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ks(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Ah(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=El(h,tt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Ah(t.default,{Component:m,route:c})||m}}});function Ah(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const yM=bM;function EM(n){const e=Zx(n.routes,n),t=n.parseQuery||pM,i=n.stringifyQuery||Sh,r=n.history,s=ao(),o=ao(),a=ao(),l=go(Ni);let c=Ni;vs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yl.bind(null,X=>""+X),f=Yl.bind(null,dM),h=Yl.bind(null,Za);function d(X,ae){let de,we;return Pm(X)?(de=e.getRecordMatcher(X),we=ae):we=X,e.addRoute(we,de)}function g(X){const ae=e.getRecordMatcher(X);ae&&e.removeRoute(ae)}function _(){return e.getRoutes().map(X=>X.record)}function m(X){return!!e.getRecordMatcher(X)}function p(X,ae){if(ae=tt({},ae||l.value),typeof X=="string"){const I=jl(t,X,ae.path),k=e.resolve({path:I.path},ae),j=r.createHref(I.fullPath);return tt(I,k,{params:h(k.params),hash:Za(I.hash),redirectedFrom:void 0,href:j})}let de;if("path"in X)de=tt({},X,{path:jl(t,X.path,ae.path).path});else{const I=tt({},X.params);for(const k in I)I[k]==null&&delete I[k];de=tt({},X,{params:f(I)}),ae.params=f(ae.params)}const we=e.resolve(de,ae),Ce=X.hash||"";we.params=u(h(we.params));const S=Ax(i,tt({},X,{hash:uM(Ce),path:we.path})),P=r.createHref(S);return tt({fullPath:S,hash:Ce,query:i===Sh?mM(X.query):X.query||{}},we,{redirectedFrom:void 0,href:P})}function x(X){return typeof X=="string"?jl(t,X,l.value.path):tt({},X)}function v(X,ae){if(c!==X)return zs(8,{from:ae,to:X})}function y(X){return A(X)}function E(X){return y(tt(x(X),{replace:!0}))}function C(X){const ae=X.matched[X.matched.length-1];if(ae&&ae.redirect){const{redirect:de}=ae;let we=typeof de=="function"?de(X):de;return typeof we=="string"&&(we=we.includes("?")||we.includes("#")?we=x(we):{path:we},we.params={}),tt({query:X.query,hash:X.hash,params:"path"in we?{}:X.params},we)}}function A(X,ae){const de=c=p(X),we=l.value,Ce=X.state,S=X.force,P=X.replace===!0,I=C(de);if(I)return A(tt(x(I),{state:typeof I=="object"?tt({},Ce,I.state):Ce,force:S,replace:P}),ae||de);const k=de;k.redirectedFrom=ae;let j;return!S&&wx(i,we,de)&&(j=zs(16,{to:k,from:we}),V(we,we,!0,!1)),(j?Promise.resolve(j):w(k,we)).catch(ie=>hi(ie)?hi(ie,2)?ie:ce(ie):q(ie,k,we)).then(ie=>{if(ie){if(hi(ie,2))return A(tt({replace:P},x(ie.to),{state:typeof ie.to=="object"?tt({},Ce,ie.to.state):Ce,force:S}),ae||k)}else ie=z(k,we,!0,P,Ce);return Y(k,we,ie),ie})}function L(X,ae){const de=v(X,ae);return de?Promise.reject(de):Promise.resolve()}function M(X){const ae=ve.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(X):X()}function w(X,ae){let de;const[we,Ce,S]=TM(X,ae);de=$l(we.reverse(),"beforeRouteLeave",X,ae);for(const I of we)I.leaveGuards.forEach(k=>{de.push(Gi(k,X,ae))});const P=L.bind(null,X,ae);return de.push(P),Pe(de).then(()=>{de=[];for(const I of s.list())de.push(Gi(I,X,ae));return de.push(P),Pe(de)}).then(()=>{de=$l(Ce,"beforeRouteUpdate",X,ae);for(const I of Ce)I.updateGuards.forEach(k=>{de.push(Gi(k,X,ae))});return de.push(P),Pe(de)}).then(()=>{de=[];for(const I of S)if(I.beforeEnter)if(Yn(I.beforeEnter))for(const k of I.beforeEnter)de.push(Gi(k,X,ae));else de.push(Gi(I.beforeEnter,X,ae));return de.push(P),Pe(de)}).then(()=>(X.matched.forEach(I=>I.enterCallbacks={}),de=$l(S,"beforeRouteEnter",X,ae),de.push(P),Pe(de))).then(()=>{de=[];for(const I of o.list())de.push(Gi(I,X,ae));return de.push(P),Pe(de)}).catch(I=>hi(I,8)?I:Promise.reject(I))}function Y(X,ae,de){a.list().forEach(we=>M(()=>we(X,ae,de)))}function z(X,ae,de,we,Ce){const S=v(X,ae);if(S)return S;const P=ae===Ni,I=vs?history.state:{};de&&(we||P?r.replace(X.fullPath,tt({scroll:P&&I&&I.scroll},Ce)):r.push(X.fullPath,Ce)),l.value=X,V(X,ae,de,P),ce()}let N;function G(){N||(N=r.listen((X,ae,de)=>{if(!Se.listening)return;const we=p(X),Ce=C(we);if(Ce){A(tt(Ce,{replace:!0}),we).catch(To);return}c=we;const S=l.value;vs&&Ux(dh(S.fullPath,de.delta),Al()),w(we,S).catch(P=>hi(P,12)?P:hi(P,2)?(A(P.to,we).then(I=>{hi(I,20)&&!de.delta&&de.type===ko.pop&&r.go(-1,!1)}).catch(To),Promise.reject()):(de.delta&&r.go(-de.delta,!1),q(P,we,S))).then(P=>{P=P||z(we,S,!1),P&&(de.delta&&!hi(P,8)?r.go(-de.delta,!1):de.type===ko.pop&&hi(P,20)&&r.go(-1,!1)),Y(we,S,P)}).catch(To)}))}let H=ao(),Q=ao(),B;function q(X,ae,de){ce(X);const we=Q.list();return we.length?we.forEach(Ce=>Ce(X,ae,de)):console.error(X),Promise.reject(X)}function oe(){return B&&l.value!==Ni?Promise.resolve():new Promise((X,ae)=>{H.add([X,ae])})}function ce(X){return B||(B=!X,G(),H.list().forEach(([ae,de])=>X?de(X):ae()),H.reset()),X}function V(X,ae,de,we){const{scrollBehavior:Ce}=n;if(!vs||!Ce)return Promise.resolve();const S=!de&&Nx(dh(X.fullPath,0))||(we||!de)&&history.state&&history.state.scroll||null;return Yp().then(()=>Ce(X,ae,S)).then(P=>P&&Ox(P)).catch(P=>q(P,X,ae))}const J=X=>r.go(X);let Me;const ve=new Set,Se={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:_,resolve:p,options:n,push:y,replace:E,go:J,back:()=>J(-1),forward:()=>J(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:oe,install(X){const ae=this;X.component("RouterLink",xM),X.component("RouterView",yM),X.config.globalProperties.$router=ae,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>Cs(l)}),vs&&!Me&&l.value===Ni&&(Me=!0,y(r.location).catch(Ce=>{}));const de={};for(const Ce in Ni)Object.defineProperty(de,Ce,{get:()=>l.value[Ce],enumerable:!0});X.provide(Xu,ae),X.provide(Bm,Bp(de)),X.provide(tu,l);const we=X.unmount;ve.add(X),X.unmount=function(){ve.delete(X),ve.size<1&&(c=Ni,N&&N(),N=null,l.value=Ni,Me=!1,B=!1),we()}}};function Pe(X){return X.reduce((ae,de)=>ae.then(()=>M(de)),Promise.resolve())}return Se}function TM(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>ks(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ks(c,l))||r.push(l))}return[t,i,r]}const AM=""+new URL("image/Studio.png",import.meta.url).href,xn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},wM={},RM=Le("h1",null,"Tutorial",-1),CM=Le("img",{src:AM,alt:""},null,-1),PM=[RM,CM];function LM(n,e,t,i,r,s){return Fe(),He("div",null,PM)}const DM=xn(wM,[["render",LM]]);/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var IM="store";function Qs(n,e){Object.keys(n).forEach(function(t){return e(n[t],t)})}function km(n){return n!==null&&typeof n=="object"}function OM(n){return n&&typeof n.then=="function"}function UM(n,e){return function(){return n(e)}}function zm(n,e,t){return e.indexOf(n)<0&&(t&&t.prepend?e.unshift(n):e.push(n)),function(){var i=e.indexOf(n);i>-1&&e.splice(i,1)}}function Hm(n,e){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var t=n.state;wl(n,t,[],n._modules.root,!0),Yu(n,t,e)}function Yu(n,e,t){var i=n._state,r=n._scope;n.getters={},n._makeLocalGettersCache=Object.create(null);var s=n._wrappedGetters,o={},a={},l=tv(!0);l.run(function(){Qs(s,function(c,u){o[u]=UM(c,n),a[u]=wn(function(){return o[u]()}),Object.defineProperty(n.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),n._state=Ko({data:e}),n._scope=l,n.strict&&zM(n),i&&t&&n._withCommit(function(){i.data=null}),r&&r.stop()}function wl(n,e,t,i,r){var s=!t.length,o=n._modules.getNamespace(t);if(i.namespaced&&(n._modulesNamespaceMap[o],n._modulesNamespaceMap[o]=i),!s&&!r){var a=ju(e,t.slice(0,-1)),l=t[t.length-1];n._withCommit(function(){a[l]=i.state})}var c=i.context=NM(n,o,t);i.forEachMutation(function(u,f){var h=o+f;FM(n,h,u,c)}),i.forEachAction(function(u,f){var h=u.root?f:o+f,d=u.handler||u;BM(n,h,d,c)}),i.forEachGetter(function(u,f){var h=o+f;kM(n,h,u,c)}),i.forEachChild(function(u,f){wl(n,e,t.concat(f),u,r)})}function NM(n,e,t){var i=e==="",r={dispatch:i?n.dispatch:function(s,o,a){var l=Ja(s,o,a),c=l.payload,u=l.options,f=l.type;return(!u||!u.root)&&(f=e+f),n.dispatch(f,c)},commit:i?n.commit:function(s,o,a){var l=Ja(s,o,a),c=l.payload,u=l.options,f=l.type;(!u||!u.root)&&(f=e+f),n.commit(f,c,u)}};return Object.defineProperties(r,{getters:{get:i?function(){return n.getters}:function(){return Gm(n,e)}},state:{get:function(){return ju(n.state,t)}}}),r}function Gm(n,e){if(!n._makeLocalGettersCache[e]){var t={},i=e.length;Object.keys(n.getters).forEach(function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(t,s,{get:function(){return n.getters[r]},enumerable:!0})}}),n._makeLocalGettersCache[e]=t}return n._makeLocalGettersCache[e]}function FM(n,e,t,i){var r=n._mutations[e]||(n._mutations[e]=[]);r.push(function(o){t.call(n,i.state,o)})}function BM(n,e,t,i){var r=n._actions[e]||(n._actions[e]=[]);r.push(function(o){var a=t.call(n,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:n.getters,rootState:n.state},o);return OM(a)||(a=Promise.resolve(a)),n._devtoolHook?a.catch(function(l){throw n._devtoolHook.emit("vuex:error",l),l}):a})}function kM(n,e,t,i){n._wrappedGetters[e]||(n._wrappedGetters[e]=function(s){return t(i.state,i.getters,s.state,s.getters)})}function zM(n){Ls(function(){return n._state.data},function(){},{deep:!0,flush:"sync"})}function ju(n,e){return e.reduce(function(t,i){return t[i]},n)}function Ja(n,e,t){return km(n)&&n.type&&(t=e,e=n,n=n.type),{type:n,payload:e,options:t}}var HM="vuex bindings",wh="vuex:mutations",Kl="vuex:actions",Zr="vuex",GM=0;function VM(n,e){bx({id:"org.vuejs.vuex",app:n,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[HM]},function(t){t.addTimelineLayer({id:wh,label:"Vuex Mutations",color:Rh}),t.addTimelineLayer({id:Kl,label:"Vuex Actions",color:Rh}),t.addInspector({id:Zr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(i){if(i.app===n&&i.inspectorId===Zr)if(i.filter){var r=[];Xm(r,e._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[qm(e._modules.root,"")]}),t.on.getInspectorState(function(i){if(i.app===n&&i.inspectorId===Zr){var r=i.nodeId;Gm(e,r),i.state=XM(jM(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),t.on.editInspectorState(function(i){if(i.app===n&&i.inspectorId===Zr){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit(function(){i.set(e._state.data,s,i.state.value)})}}),e.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,t.notifyComponentUpdate(),t.sendInspectorTree(Zr),t.sendInspectorState(Zr),t.addTimelineEvent({layerId:wh,event:{time:Date.now(),title:i.type,data:s}})}),e.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=GM++,i._time=Date.now(),s.state=r,t.addTimelineEvent({layerId:Kl,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,t.addTimelineEvent({layerId:Kl,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var Rh=8702998,WM=6710886,qM=16777215,Vm={label:"namespaced",textColor:qM,backgroundColor:WM};function Wm(n){return n&&n!=="root"?n.split("/").slice(-2,-1)[0]:"Root"}function qm(n,e){return{id:e||"root",label:Wm(e),tags:n.namespaced?[Vm]:[],children:Object.keys(n._children).map(function(t){return qm(n._children[t],e+t+"/")})}}function Xm(n,e,t,i){i.includes(t)&&n.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[Vm]:[]}),Object.keys(e._children).forEach(function(r){Xm(n,e._children[r],t,i+r+"/")})}function XM(n,e,t){e=t==="root"?e:e[t];var i=Object.keys(e),r={state:Object.keys(n.state).map(function(o){return{key:o,editable:!0,value:n.state[o]}})};if(i.length){var s=YM(e);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Wm(o):o,editable:!1,value:nu(function(){return s[o]})}})}return r}function YM(n){var e={};return Object.keys(n).forEach(function(t){var i=t.split("/");if(i.length>1){var r=e,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=nu(function(){return n[t]})}else e[t]=nu(function(){return n[t]})}),e}function jM(n,e){var t=e.split("/").filter(function(i){return i});return t.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===t.length-1?o:o._children},e==="root"?n:n.root._children)}function nu(n){try{return n()}catch(e){return e}}var jn=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},Ym={namespaced:{configurable:!0}};Ym.namespaced.get=function(){return!!this._rawModule.namespaced};jn.prototype.addChild=function(e,t){this._children[e]=t};jn.prototype.removeChild=function(e){delete this._children[e]};jn.prototype.getChild=function(e){return this._children[e]};jn.prototype.hasChild=function(e){return e in this._children};jn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};jn.prototype.forEachChild=function(e){Qs(this._children,e)};jn.prototype.forEachGetter=function(e){this._rawModule.getters&&Qs(this._rawModule.getters,e)};jn.prototype.forEachAction=function(e){this._rawModule.actions&&Qs(this._rawModule.actions,e)};jn.prototype.forEachMutation=function(e){this._rawModule.mutations&&Qs(this._rawModule.mutations,e)};Object.defineProperties(jn.prototype,Ym);var Wr=function(e){this.register([],e,!1)};Wr.prototype.get=function(e){return e.reduce(function(t,i){return t.getChild(i)},this.root)};Wr.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(i,r){return t=t.getChild(r),i+(t.namespaced?r+"/":"")},"")};Wr.prototype.update=function(e){jm([],this.root,e)};Wr.prototype.register=function(e,t,i){var r=this;i===void 0&&(i=!0);var s=new jn(t,i);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}t.modules&&Qs(t.modules,function(a,l){r.register(e.concat(l),a,i)})};Wr.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1],r=t.getChild(i);r&&r.runtime&&t.removeChild(i)};Wr.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1];return t?t.hasChild(i):!1};function jm(n,e,t){if(e.update(t),t.modules)for(var i in t.modules){if(!e.getChild(i))return;jm(n.concat(i),e.getChild(i),t.modules[i])}}function $M(n){return new ln(n)}var ln=function(e){var t=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var r=e.strict;r===void 0&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Wr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,d){return l.call(o,h,d)},this.commit=function(h,d,g){return c.call(o,h,d,g)},this.strict=r;var u=this._modules.root.state;wl(this,u,[],this._modules.root),Yu(this,u),i.forEach(function(f){return f(t)})},$u={state:{configurable:!0}};ln.prototype.install=function(e,t){e.provide(t||IM,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&VM(e,this)};$u.state.get=function(){return this._state.data};$u.state.set=function(n){};ln.prototype.commit=function(e,t,i){var r=this,s=Ja(e,t,i),o=s.type,a=s.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};ln.prototype.dispatch=function(e,t){var i=this,r=Ja(e,t),s=r.type,o=r.payload,a={type:s,payload:o},l=this._actions[s];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,f){c.then(function(h){try{i._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,i.state)})}catch{}u(h)},function(h){try{i._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,i.state,h)})}catch{}f(h)})})}};ln.prototype.subscribe=function(e,t){return zm(e,this._subscribers,t)};ln.prototype.subscribeAction=function(e,t){var i=typeof e=="function"?{before:e}:e;return zm(i,this._actionSubscribers,t)};ln.prototype.watch=function(e,t,i){var r=this;return Ls(function(){return e(r.state,r.getters)},t,Object.assign({},i))};ln.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};ln.prototype.registerModule=function(e,t,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),wl(this,this.state,e,this._modules.get(e),i.preserveState),Yu(this,this.state)};ln.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=ju(t.state,e.slice(0,-1));delete i[e[e.length-1]]}),Hm(this)};ln.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ln.prototype.hotUpdate=function(e){this._modules.update(e),Hm(this,!0)};ln.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(ln.prototype,$u);var li=Km(function(n,e){var t={};return $m(e).forEach(function(i){var r=i.key,s=i.val;s=n+s,t[r]=function(){if(!(n&&!Zm(this.$store,"mapGetters",n)))return this.$store.getters[s]},t[r].vuex=!0}),t}),qr=Km(function(n,e){var t={};return $m(e).forEach(function(i){var r=i.key,s=i.val;t[r]=function(){for(var a=[],l=arguments.length;l--;)a[l]=arguments[l];var c=this.$store.dispatch;if(n){var u=Zm(this.$store,"mapActions",n);if(!u)return;c=u.context.dispatch}return typeof s=="function"?s.apply(this,[c].concat(a)):c.apply(this.$store,[s].concat(a))}}),t});function $m(n){return KM(n)?Array.isArray(n)?n.map(function(e){return{key:e,val:e}}):Object.keys(n).map(function(e){return{key:e,val:n[e]}}):[]}function KM(n){return Array.isArray(n)||km(n)}function Km(n){return function(e,t){return typeof e!="string"?(t=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),n(e,t)}}function Zm(n,e,t){var i=n._modulesNamespaceMap[t];return i}const ZM={computed:{...li("status",["visitTotal","visit"]),getTotalWhatch(){return Math.floor(this.visit.length*100/this.visitTotal)}},methods:{...qr("status",["getExit"]),closeCource(){this.getExit(),window.close()}}},JM=Le("h1",null,"Final",-1);function QM(n,e,t,i,r,s){return Fe(),He("div",null,[JM,Le("h2",null,"You watch "+ht(s.getTotalWhatch)+"% of pages",1),Le("div",null,[Le("button",{onClick:e[0]||(e[0]=(...o)=>s.closeCource&&s.closeCource(...o)),class:"btn"},"Close")])])}const eS=xn(ZM,[["render",QM]]);function tS(){return[{type:"keybord",qTitle:"",qText:"Шла саша по шоссе и сосала...",word:"Сушку",feed:{correct:{title:"Верно!",text:"Правильный ответ!"},incorrect:{title:"Ошибка!",text:"Попробуйте еще раз"}}}]}const nS={props:{questionData:{type:Array,default(){return[{type:"keybord",qTitle:"",qText:"Для клиентов мы расшифровываем все аббревиатуры, например, вместо УС употребляем слово… .",word:"пин-код",feed:{correct:{title:"Верно!",text:"Экспонат № 2 на месте!"},incorrect:{title:"Ошибка!",text:"Попробуйте еще раз"}}}]}},backGround:{type:String,default:""},btnText:{type:Object,default(){return{acept:"Принять",restart:"Повторить попытку",moveOn:"Продолжить"}}},badge:{type:String,default:"Вопрос"},clue:{type:String,default:"Введите ответ на вопрос, нажимая мышкой на кнопки на клавиатуре."},joinPracticeCount:{type:Number,default:void 0}},data(){return{questionCounter:0,check:!1,moveButton:!1,correctAnswer:!1,keyboard:["й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","-","я","ч","с","м","и","т","ь","б","ю","_","удалить"],choyceStorge:[]}},methods:{...qr("status",["getScore","setVariations"]),choyceLitter(n){let e=this.questionData[this.questionCounter].word.length;this.choyceStorge.length<e&&n+1!==this.keyboard.length&&this.choyceStorge.push(this.keyboard[n].toUpperCase()),n+1===this.keyboard.length&&this.choyceStorge.pop()},checkAnswer(){let n=this.choyceStorge.join(""),e=this.questionData[this.questionCounter].word.toUpperCase();n===e?(this.check=!0,this.moveButton=!0,this.correctAnswer=!0):(this.check=!0,this.moveButton=!1,this.correctAnswer=!1)},restart(){this.choyceStorge=[],this.check=!1,this.moveButton=!1},nextGame(){this.questionCounter++,this.choyceStorge=[],this.check=!1,this.moveButton=!1,this.$emit("next-question",this.questionCounter)}},created(){this.joinPracticeCount!==void 0&&(this.questionCounter=this.$parent.questionCounter)},computed:{showAceptBtn(){return this.choyceStorge.length>0},needQuestionTitle(){return this.questionData[this.questionCounter].qTitle!=""},getQuestionTitle(){return this.questionData[this.questionCounter].qTitle},getQuestionText(){return this.questionData[this.questionCounter].qText},prepareKeyboard(){let n=[];return this.keyboard.forEach(e=>{n.push(e.toUpperCase())}),n},getBackspace(){return n=>{if(n===34)return"keybord__item_backspace"}},getGreed(){return n=>{if(n===34)return{width:"auto","background-color":"#0056ff"}}},getFeedTitle(){if(this.correctAnswer)return this.questionData[this.questionCounter].feed.correct.title;if(!this.correctAnswer)return this.questionData[this.questionCounter].feed.incorrect.title},getFeedText(){if(this.correctAnswer)return this.questionData[this.questionCounter].feed.correct.text;if(!this.correctAnswer)return this.questionData[this.questionCounter].feed.incorrect.text},getAswerPlace(){return this.questionData[this.questionCounter].word.split("")},addFeedClass(){return{correct:this.check&&this.correctAnswer,incorrect:this.check&&!this.correctAnswer}},addDisabledClass(){return{disabled:this.check}},checkJoinPractices(){this.joinPracticeCount!==void 0&&(this.questionCounter,this.joinPracticeCount)},showFeedback(){return this.questionCounter+1>this.questionData.length&&this.getScore({id:"Total",score:100})&&this.setVariations({name:"something",value:2500}),this.questionCounter+1>this.questionData.length}}},iS=["src"],rS={key:0,class:"container-center"},sS={class:"flex"},oS={class:"keybord keybord__small"},aS=["innerHTML"],lS=["innerHTML"],cS=["innerHTML"],uS=Le("div",{class:"keybord__line mb-25"},null,-1),fS={class:"keybord keybord__large"},hS={class:"text-m pt-5 pb-5 pr-25 pl-25 bg-blue-light br-40 w-fit mb-20"},dS=["innerHTML"],pS=["innerHTML"],mS={class:"flex jf-center mb-15"},_S={class:"keybord__answer_liter"},gS=Le("div",{class:"keybord__line mb-45"},null,-1),vS={class:"keybord__greed"},xS=["onClick"],MS={key:0},SS=Le("h1",null,"Пара Пара Пам",-1),bS=[SS];function yS(n,e,t,i,r,s){return Fe(),He("div",null,[Le("img",{class:"picture-100 ispitanie_img",src:t.backGround,alt:""},null,8,iS),(Fe(!0),He(Mt,null,Ti(t.questionData,(o,a)=>(Fe(),He("div",{key:o.qText},[r.questionCounter===a&&!s.showFeedback?(Fe(),He("div",rS,[Le("div",sS,[Le("div",oS,[r.check?En("",!0):(Fe(),He("p",{key:0,class:"text-20 text-medium mb-10",innerHTML:t.clue},null,8,aS)),r.check?(Fe(),He("p",{key:1,class:Jt([s.addFeedClass,"keybord__feed_title text-24 mb-15"]),innerHTML:s.getFeedTitle},null,10,lS)):En("",!0),r.check?(Fe(),He("p",{key:2,class:"text-20 mb-10",innerHTML:s.getFeedText},null,8,cS)):En("",!0),uS,s.showAceptBtn&&!r.check?(Fe(),He("button",{key:3,class:"btn btn_blue",onClick:e[0]||(e[0]=(...l)=>s.checkAnswer&&s.checkAnswer(...l))},[Le("span",null,ht(t.btnText.acept),1)])):En("",!0),!r.moveButton&&r.check?(Fe(),He("button",{key:4,class:"btn btn_blue",onClick:e[1]||(e[1]=(...l)=>s.restart&&s.restart(...l))},[Le("span",null,ht(t.btnText.restart),1)])):En("",!0),r.moveButton&&r.check?(Fe(),He("button",{key:5,class:"btn btn_blue",onClick:e[2]||(e[2]=(...l)=>s.nextGame&&s.nextGame(...l))},[Le("span",null,ht(t.btnText.moveOn),1)])):En("",!0)]),Le("div",fS,[Le("div",hS,ht(t.badge)+": "+ht(r.questionCounter+1)+" / "+ht(t.questionData.length),1),s.needQuestionTitle?(Fe(),He("p",{key:0,class:"text-l text-gray-light2 mb-10",innerHTML:s.getQuestionTitle},null,8,dS)):En("",!0),Le("p",{class:"text-20 text-medium mb-25",innerHTML:s.getQuestionText},null,8,pS),Le("div",mS,[(Fe(!0),He(Mt,null,Ti(s.getAswerPlace,(l,c)=>(Fe(),He("div",{key:l+c,class:Jt(["keybord__answer",s.addFeedClass])},[Le("span",_S,ht(r.choyceStorge[c]),1)],2))),128))]),gS,Le("div",vS,[(Fe(!0),He(Mt,null,Ti(s.prepareKeyboard,(l,c)=>(Fe(),He("button",{key:l+c,onClick:u=>s.choyceLitter(c),class:Jt(["keybord__item keybord__item_darck",[s.addDisabledClass,s.getBackspace(c)]])},ht(l),11,xS))),128))])])])])):En("",!0)]))),128)),s.showFeedback?(Fe(),He("div",MS,bS)):En("",!0)])}const ES=xn(nS,[["render",yS]]),TS={components:{KeybordPracticeVue:ES},computed:{keybord_1(){return tS()}}},AS=Le("h1",null,"Components Example",-1);function wS(n,e,t,i,r,s){const o=Hn("KeybordPracticeVue");return Fe(),He("div",null,[AS,Le("p",null,ht(n.$route.params.id),1),nt(o,{"question-data":s.keybord_1},null,8,["question-data"])])}const RS=xn(TS,[["render",wS]]),CS={computed:{...li("status",["variations"])},methods:{...qr("status",["setVariations"])}},PS=Le("h1",null,"Page 1",-1),LS=Le("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem obcaecati, praesentium amet voluptatum odio voluptas error quaerat voluptates dicta quisquam minima ratione, veritatis alias totam maxime accusantium nulla nostrum odit tempora, harum in! Expedita, corrupti mollitia maiores velit quidem eveniet labore deserunt. Quas nihil sed vel neque, ipsum nostrum fugiat aliquid optio autem, eum blanditiis. Nam saepe quod veniam repudiandae provident perspiciatis rem enim ipsa, soluta culpa delectus quibusdam odit, aperiam quae nostrum! Eos, minima doloremque dolorem, optio autem voluptatum quam vel tempore iste ad laborum? Odio laborum velit corrupti ut, non saepe est dolorem cupiditate expedita reiciendis ex assumenda nihil laudantium corporis quibusdam dolores quasi tempora id mollitia cumque suscipit perspiciatis at. Exercitationem, cupiditate ipsa! Veniam at illum neque, cumque perspiciatis quaerat ab assumenda sint ea deleniti recusandae modi qui est amet facere maxime minima nisi suscipit aut adipisci natus possimus! Ipsam maiores consequuntur ducimus unde. Hic eos, voluptatum sed fugit ipsum autem aperiam distinctio ea reprehenderit error culpa nesciunt similique dignissimos ullam nam voluptatem placeat quod possimus officiis cumque? Fugit nihil saepe ipsam maxime, blanditiis dolores non veniam beatae sequi, cum tempore aliquam minus. Dolores at laborum beatae, voluptatum quos dolor tempore. Eaque ipsa quasi earum deleniti at est exercitationem officia, sit corporis sequi fugit mollitia eos commodi blanditiis incidunt expedita dolore. Ea vitae obcaecati, accusantium incidunt laborum ipsam distinctio exercitationem sint eveniet autem cumque neque quis impedit consectetur dolorem dolorum recusandae mollitia sequi error illum. Sequi nam rem illum repellendus assumenda sit magni laudantium doloremque numquam, architecto totam recusandae a unde amet expedita voluptates molestiae ab, similique necessitatibus. Nemo, ipsum ducimus velit odio id, neque eveniet quaerat voluptatem quod quisquam adipisci veniam minima quia ea? Sunt, repudiandae hic. Deleniti, excepturi, expedita illum porro nam voluptates cupiditate consectetur nemo, sed eum quia commodi dignissimos facere ipsam quam? Fugit error dolores, aliquam, vero corrupti id dolorem, hic quasi sunt suscipit sint nam aut doloribus temporibus asperiores possimus molestias odit. Dolor nam dolorum eveniet, delectus dolorem alias laboriosam aliquid molestias distinctio iusto exercitationem nisi, ratione modi illo magni tempore? Repellendus ad tenetur dignissimos itaque exercitationem minus soluta impedit molestiae accusamus sequi cum, consequuntur rem nemo enim repudiandae vitae dolore officiis voluptate. Deserunt, similique. Neque tenetur doloribus odio quod amet quos consequuntur maiores voluptatum reiciendis tempora porro reprehenderit labore totam, saepe explicabo rem vitae quia quaerat provident architecto laudantium similique vel mollitia. Dolores ab laboriosam atque ducimus rem recusandae eius tenetur cum, inventore voluptatem porro consequatur ex labore adipisci harum impedit libero officia quia, aliquam autem sit quo in! Ad non cumque perspiciatis vero quas, officia adipisci, ullam quia sunt quisquam nam, ratione aliquam nemo odit fugit qui? In nobis eligendi dolor accusantium ea voluptas, molestias optio? Mollitia obcaecati totam, rem, qui sint modi animi officia eos doloribus unde repellat deleniti, ipsa aperiam laudantium maiores cum molestiae dignissimos ea vero numquam at itaque. Quaerat odit libero ratione minima sit deserunt, atque, dolores, quisquam dolorum hic et quam a sed in porro aliquid veritatis voluptatum cupiditate magni deleniti. Dolorum dolores repellat magnam facere illum nemo sequi omnis aut. Harum aliquid saepe dolorem ratione, iure beatae porro est nam! Porro error modi incidunt animi obcaecati earum odio ullam corrupti facilis praesentium, mollitia voluptatibus libero sequi cupiditate adipisci magni placeat officiis omnis enim quia eos totam provident veritatis quos. Aliquam, porro ut excepturi, laudantium incidunt sit voluptates mollitia illum quasi necessitatibus saepe. Tempora laboriosam repudiandae optio obcaecati voluptas odit in animi alias aspernatur, beatae nam eaque perspiciatis molestiae minus culpa nesciunt error accusamus asperiores omnis aliquam quasi ea doloremque repellat debitis. Ut repudiandae sunt temporibus at assumenda consequatur eveniet reiciendis, porro maxime error quos ratione cupiditate quo. Facere, officiis, molestias numquam voluptate explicabo architecto labore alias ex magni ea non sit modi! Eligendi repellendus delectus, officiis aliquam perferendis inventore non. Labore non culpa modi ab cumque numquam, officia, molestias nobis dolorem natus voluptatem harum similique accusantium maiores eaque, quasi ratione? Eligendi doloremque quae voluptas porro, impedit sed, deleniti earum qui iure possimus reprehenderit consectetur error nemo optio tenetur, repudiandae expedita eum. Cum quisquam dolorum et eum exercitationem, adipisci ipsum officia. Quo maxime sit deserunt, saepe voluptas tenetur quibusdam blanditiis illo dolorem veritatis quaerat quidem, tempore vel harum odio laboriosam in. Voluptatibus temporibus cupiditate quidem nesciunt molestiae excepturi, delectus, exercitationem sit consectetur veritatis laudantium illum obcaecati veniam? Suscipit ullam laudantium itaque, aperiam iste ad dignissimos dolorum sint aliquid qui quae odio voluptates sit a, commodi eius consequuntur maiores quod! Provident odit consequuntur, at repudiandae sapiente quae ipsam dolorum voluptate iste rem. Cumque qui repudiandae quis quo laborum velit architecto suscipit odio delectus alias nam a cum eaque minus non, eveniet debitis placeat. Dolor labore minus accusantium consequuntur, et aliquam quas totam porro impedit natus beatae aperiam nobis explicabo repellat, incidunt, quia deserunt asperiores mollitia atque iste. Vitae ipsam illum earum, sit modi hic velit explicabo. Eius temporibus dolorem provident aspernatur adipisci sed dolorum ratione accusamus quasi eaque ab commodi dolore animi voluptate, exercitationem quia, expedita, nesciunt officia aperiam aliquam non vero labore reprehenderit. Ea sed quo doloremque, ipsam facilis modi nobis incidunt facere neque excepturi tempora sunt ad molestiae laborum dolore veniam vel. Placeat libero omnis aspernatur earum quod ea nisi saepe magni consequatur, nihil atque quae optio odit voluptatum error hic consequuntur minus facere nam accusamus autem a. Adipisci provident inventore omnis commodi et aspernatur, debitis illum dolorum tempore eum qui nemo, odit tenetur quos delectus accusamus quae error, soluta facere natus vero? Beatae possimus asperiores aperiam quisquam enim deleniti quo consequuntur maiores? Optio officia fuga dicta exercitationem tempora, voluptas vero id, necessitatibus numquam accusamus eos neque nulla magnam, et suscipit alias quibusdam iste eum in perferendis eius omnis excepturi? Repudiandae perspiciatis iure officia deleniti repellat doloribus sint qui cumque ex inventore? Dolores ullam neque non eveniet earum, quia quod rerum officia voluptas vero cum quaerat, distinctio eos ratione quos. Quidem nisi doloribus dicta reiciendis porro quod vel corporis perferendis unde mollitia officiis praesentium tempora voluptates error eius enim sequi dignissimos, iure tempore qui facere consequatur maxime ullam. Laborum, magnam maiores? Voluptatibus, suscipit? ",-1);function DS(n,e,t,i,r,s){return Fe(),He("div",null,[PS,Le("h2",null,ht(n.variations.something),1),Le("h2",null,ht(n.variations.nova),1),Le("div",null,[Le("button",{onClick:e[0]||(e[0]=o=>n.setVariations({name:"nova",value:6e3})),class:"btn"}," New Variations ")]),LS])}const IS=xn(CS,[["render",DS]]),OS={},US=Le("h1",null,"Page 2",-1),NS=Le("h2",null,"Scroll to element from menu",-1),FS=Le("p",null," Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком, не снова. Текстов коварных запятых но свой? Коварный единственное страна великий правилами имени на берегу безопасную буквоград обеспечивает власти речью последний что ты языкового точках грамматики, букв маленькая. Приставка, первую. Назад семантика парадигматическая подзаголовок от всех имеет, предупредила ведущими продолжил жаренные текстами дороге города буквоград заглавных реторический на берегу инициал скатился свою свой текстов ты. Предупредила наш дороге силуэт снова предупреждал которой что? Решила дорогу вопрос великий проектах о, lorem жаренные силуэт путь снова за, реторический использовало ведущими это повстречался переписали дороге раз? Агентство буквоград, грустный переписывается большого не сбить рыбными. Всемогущая пор подзаголовок реторический жизни, предложения маленькая, выйти коварный парадигматическая безопасную языкового которое, снова вскоре страна обеспечивает. Мир злых эта lorem если строчка вопроса переулка оксмокс приставка подзаголовок. Необходимыми lorem там рукопись снова рыбными осталось скатился маленький грамматики, первую заманивший пунктуация переулка что сбить подпоясал запятой эта, коварный строчка обеспечивает ему языкового текст толку последний! Единственное даже, текст над злых буквоград она вопроса ты что! Большой агентство буквоград ведущими от всех снова. Силуэт, вопрос жаренные ведущими они большой о? Рыбными имени, то собрал точках там ведущими путь знаках залетают? Великий, свой. Дал родного несколько, над его знаках предложения переулка безорфографичный, власти маленькая свою правилами. Первую взгляд дорогу наш парадигматическая там переулка образ семь необходимыми своих свой точках ему которое рот, вопроса встретил составитель продолжил. Парадигматическая домах по всей языкового жаренные которое проектах речью щеке заголовок заглавных букв. Страна там рыбного океана страну строчка всемогущая единственное заманивший осталось вскоре? Безопасную, мир. Меня по всей свою вопрос ведущими? Пор не то, однажды грустный парадигматическая семь? Единственное семь коварный, рукопись это составитель заголовок всемогущая дороге меня домах своего обеспечивает пустился, свое алфавит все текста рыбного океана ведущими рот своих. Lorem заглавных, домах бросил подзаголовок напоивший точках знаках дал если приставка. Вершину дороге все, переписывается lorem великий текста парадигматическая составитель лучше собрал языком, семантика осталось текстами? Точках живет текстами однажды встретил взобравшись страна осталось если, свою даль подзаголовок скатился пояс переписали снова имени на берегу образ большого назад. Если обеспечивает встретил о жаренные. Даже вопроса ipsum повстречался? Заголовок переписывается на берегу переписали оксмокс, единственное все даль! Даже переписывается эта на берегу коварных семантика власти они о парадигматическая маленький дороге маленькая вопроса ведущими, мир, не одна своего оксмокс всеми диких толку, необходимыми снова инициал обеспечивает. За о прямо реторический города если себя коварных то но великий, маленький, переписали сих одна? Запятых своих встретил знаках маленькая текста даже, грамматики обеспечивает раз языкового текстами. Пояс необходимыми lorem заманивший до имеет, если что парадигматическая языкового проектах журчит, ты прямо грустный коварный щеке наш, назад повстречался. Единственное одна имеет реторический, семь встретил это ipsum однажды, не послушавшись оксмокс буквенных предупредила, агентство взгляд злых страна моей большой собрал заманивший? Толку одна, не безопасную первую города все щеке ведущими буквенных подзаголовок курсивных переписывается сих предложения однажды страна пояс моей последний взобравшись безорфографичный всемогущая над. Наш жизни языкового путь но, о продолжил первую ручеек своих океана, речью однажды до страна. Первую всемогущая однажды мир рекламных ручеек города эта, коварных даль текст. Сих грамматики что проектах однажды возвращайся скатился безорфографичный он, диких одна? Взгляд выйти правилами страна даль что заглавных алфавит мир свою, встретил, свой языкового взобравшись дорогу текстами всемогущая своих знаках точках продолжил! Повстречался напоивший но свой оксмокс даль, вскоре страну, своих от всех ты коварный безопасную пояс всемогущая. Рот залетают вдали, города буквоград осталось запятых имеет, бросил снова повстречался подпоясал сих ее переписывается даль строчка lorem большого ipsum живет он приставка использовало ручеек рыбными, однажды рукописи своих! Пояс бросил великий запятых запятой возвращайся, снова собрал его себя. Ее вдали собрал буквенных власти заманивший страна текстов переписывается повстречался точках которой мир языком, продолжил пор его! Сбить, точках себя. Назад, безопасную там. Толку последний назад вдали рыбного за переписывается лучше, проектах свой, большого языком пустился грамматики текста приставка подзаголовок дорогу точках ты раз все его от всех ручеек! Грустный от всех курсивных взобравшись точках толку? Семь ручеек возвращайся великий журчит большой он алфавит, лучше обеспечивает они взобравшись вскоре, парадигматическая снова не вершину курсивных злых это решила? Дороге курсивных единственное, сих страну толку осталось семь ручеек вершину послушавшись свой даже от всех коварный, необходимыми текстами но великий пустился текста дал точках там своих, которое дорогу первую. Сих дорогу предупредила собрал путь безопасную, которой строчка агентство правилами безорфографичный продолжил рыбными всеми его снова, образ имени последний запятой вопроса маленькая свой переулка лучше вершину. Моей одна напоивший скатился власти, парадигматическая текста запятой лучше пор дал диких все прямо. Скатился своего рекламных эта первую, за собрал приставка текстами власти вдали, вершину которой свой над, снова он предупредила рыбного всеми жаренные! Текстов ты переписали проектах эта безорфографичный речью, океана заманивший правилами lorem рекламных? Диких своего сбить, щеке, его однажды правилами что взобравшись над строчка рукописи запятых языкового силуэт коварных заголовок бросил путь пунктуация которой, даже текста реторический ты текст? До, рекламных над. Ты ручеек однажды использовало запятой семантика грустный, своих щеке, все образ свою свое вдали! Пунктуация своего ее, маленькая грамматики страна дал однажды моей. Вдали парадигматическая инициал буквоград которое однажды обеспечивает деревни, дал себя ты они возвращайся строчка назад предупредила буквенных безопасную мир страну пор свое своих. Родного языкового жизни он буквоград ты страну от всех ручеек до, курсивных, скатился свое вскоре парадигматическая рукопись инициал не образ живет приставка переписали снова рыбными? Своих подзаголовок раз мир запятой инициал однажды заголовок. Возвращайся текстов залетают парадигматическая переписали подпоясал? Точках себя текстами агентство что выйти гор о языкового запятой, однажды родного, возвращайся над снова коварный языком ты за алфавит меня злых переулка жизни взобравшись дороге. Решила своих домах ее повстречался грамматики снова рукописи выйти рот безорфографичный своего о агентство послушавшись несколько на берегу толку подпоясал меня которое оксмокс запятой моей, вдали все его ты это! О последний послушавшись правилами жаренные знаках моей над до вопроса возвращайся вершину обеспечивает необходимыми большого, ручеек своих, щеке букв! Маленький путь собрал языком. Напоивший, великий рекламных. Назад запятой лучше которое собрал подпоясал, сих агентство пунктуация рукописи власти всеми залетают приставка свою встретил мир его это, текстами, продолжил страну. Текст, агентство речью, буквенных вопроса скатился рекламных вскоре пояс повстречался проектах ipsum напоивший родного не о которое злых! Продолжил, не? Свой вопроса пунктуация единственное города, выйти повстречался решила проектах что? ",-1),BS=Le("h2",{id:"menu-Part_1"},"Part_1",-1),kS=Le("p",null," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, obcaecati incidunt! Voluptatum reiciendis ad vero quibusdam accusamus beatae consectetur vel aspernatur laborum ipsa culpa aut provident, tempora, molestiae eligendi? Hic distinctio quibusdam eius optio accusamus, aspernatur dolorum, iure aliquam, laborum soluta totam. Pariatur itaque nostrum quis corporis rerum. Maiores, asperiores, cupiditate, natus totam molestias dolor praesentium non minima numquam omnis sapiente illum sunt ad impedit autem. Corrupti voluptas illum hic. Repellendus minus labore reprehenderit molestias molestiae hic numquam, sit ab nesciunt. Ea excepturi tempora atque sapiente vero ducimus non sequi nemo quidem enim impedit, ex, inventore iure. Earum magnam dolorum similique maxime tenetur, temporibus quos perspiciatis voluptas unde culpa ex modi veritatis blanditiis dolores reprehenderit dignissimos natus corporis ad architecto voluptates ipsum praesentium quae? Facere asperiores odit eos optio sapiente? Labore architecto tempora nihil reprehenderit excepturi harum? Nemo officiis laborum at quo, beatae eaque, in, ullam unde quod veritatis laudantium. Nisi, veniam corporis nemo provident quo, nihil voluptate dolor corrupti quidem eius dolorum molestiae debitis soluta quia illum perspiciatis architecto. Hic aspernatur, magnam consectetur id eos ipsum molestias. Voluptatibus, repudiandae harum! Voluptatem accusamus fuga esse sunt eveniet tempora praesentium illum sit! Blanditiis, ratione consequatur neque voluptatibus libero vitae aliquid deleniti consequuntur! Eius officia sint iure suscipit. Dolorem repellendus inventore iusto deleniti itaque ratione minus explicabo necessitatibus dolore sed dolor, similique odit corrupti non, praesentium magnam iste rem ad quos autem magni delectus cupiditate quo. Accusantium fugit voluptatibus magni autem, illum numquam est saepe nihil dolorum ut, unde dignissimos praesentium itaque enim officia omnis error qui possimus voluptatum. Quis, iste voluptas. Ab aliquam est nostrum blanditiis facilis a, quos atque, itaque nesciunt culpa quia saepe dolorum. Enim, ipsam odio similique perferendis veritatis quidem at vitae ea, deserunt omnis eum. Ex, est quos blanditiis qui esse nulla distinctio atque consequatur quis iure. ",-1),zS=Le("h2",{id:"menu-Part_2"},"Part_2",-1),HS=Le("p",null," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto fugit odit ut porro quia consectetur sed, natus veritatis perspiciatis beatae! Fugiat repudiandae ad laborum excepturi perferendis ea cupiditate dicta quae! Soluta, nihil at voluptas corporis ipsum accusantium quaerat quod velit odit praesentium eaque quam suscipit, illum adipisci incidunt cumque. Quibusdam, officiis iste! Laborum quia explicabo blanditiis eaque, commodi necessitatibus excepturi voluptate, ullam distinctio at perferendis id tempora ipsum pariatur quo nisi? Neque, sit, quia magnam exercitationem ad quas illum a ab cupiditate corrupti officia aspernatur culpa sequi tenetur velit. Eaque quae non perferendis voluptatem corporis aut nemo recusandae ullam esse laborum repellat, ratione doloribus et mollitia! Sint eius voluptate, amet sed obcaecati animi, vero non perspiciatis dignissimos officia natus? Itaque sequi praesentium dicta placeat, expedita maxime repellat, optio cum omnis laborum velit quas doloremque ea! Omnis fugit cupiditate, perferendis, cum ipsa quis consequatur quas quae dolor ratione dolorem sit animi hic doloremque, veritatis obcaecati minus temporibus tenetur facilis nam molestias. Accusamus quas error vel totam doloribus voluptate nihil ex architecto voluptatem repellat sed quam, quod corporis ratione reiciendis? Nihil eos autem hic dolores aliquid voluptas dolorem, itaque placeat ipsam quo deserunt doloremque saepe nulla et blanditiis magni dolore? Sit suscipit quam obcaecati doloribus natus, vitae ea dignissimos adipisci architecto amet. Alias fugiat unde, veniam modi tempora aliquid deleniti natus sed magni inventore optio eligendi? Odio, voluptatibus illum, unde suscipit aliquid earum soluta consequuntur ab voluptatem dolorem obcaecati non laboriosam sunt odit ad possimus cupiditate. Et natus ab odit magnam sequi error quis molestias quas minima eum odio quos est animi inventore corporis non qui blanditiis, atque aliquid dignissimos temporibus saepe! Fuga dolores eaque, mollitia cumque quisquam error sunt enim nam iure ratione ad consequatur, sequi, at sint exercitationem quibusdam quos. Beatae in nemo facere atque earum cupiditate optio quod odit, aperiam voluptatibus? Ad dolorum est vero laboriosam accusantium maiores ratione, quas pariatur eaque officiis inventore dignissimos explicabo veritatis obcaecati dolor minus, sit nobis molestias consequatur facilis cupiditate ducimus. Labore praesentium eum perferendis velit hic iusto quos maxime nulla minima, provident ex, iste animi enim mollitia exercitationem reiciendis, magni minus. Assumenda maiores quasi repellat, minima saepe, reiciendis, deleniti eius dolor quo at vero culpa mollitia quisquam. Distinctio cupiditate quasi nobis alias enim, laborum error, tempore ducimus nemo repellat, corporis sit temporibus ab magnam eligendi eum quas quis nam dolor porro laboriosam eos obcaecati quam? Totam repellendus similique, expedita cupiditate voluptatibus iure corporis eaque at animi quas. Omnis voluptas exercitationem dignissimos, praesentium porro ipsam mollitia, dicta cumque expedita molestias modi neque consectetur facilis, optio voluptates? Repellat laudantium mollitia beatae eveniet unde. Cum perferendis distinctio dolores ad optio fugiat architecto sed? Sapiente quidem earum asperiores accusamus, et ex officia nostrum voluptatibus assumenda accusantium laudantium nulla deserunt dolore quo tenetur non aut ipsam temporibus, quia ratione! Eaque minima, recusandae natus doloremque omnis repellat excepturi ab eligendi fugit neque distinctio aspernatur! Dolore, doloribus, dolorem eum quidem est esse optio, rem nostrum a illum placeat. Repellat saepe reprehenderit sapiente velit qui aspernatur voluptatum inventore facilis et rerum quos similique dolor quo eveniet iure maiores dicta natus molestias enim neque, quasi ipsa! Possimus quo totam, id doloribus corporis quis ullam aliquid fuga animi nisi, asperiores dolorum, eligendi repudiandae architecto? Adipisci eaque error delectus fuga accusantium assumenda harum. Ratione assumenda, rerum iure incidunt totam quis eum libero quae impedit explicabo eaque vitae saepe doloribus quas modi, dolorum veniam nostrum facilis pariatur labore ducimus soluta, quam omnis! Officiis doloribus natus voluptas, ex odit alias recusandae suscipit accusamus! Maiores hic sequi amet consectetur quia non consequatur eius! Consequuntur illum fugit commodi natus iusto. Adipisci maiores ipsam quos nulla earum praesentium porro saepe nemo ea. Nulla, nihil qui rem eos blanditiis praesentium, molestiae ea eius vitae numquam a. Dolorum hic ipsa placeat aliquam. Quia, neque mollitia. Neque a eaque saepe? Consequatur rerum odit reiciendis vitae maxime animi aperiam expedita quae, delectus quibusdam vero obcaecati tempore temporibus corporis asperiores amet voluptatum voluptates dolor? Eum id itaque temporibus iusto deserunt rem eligendi laborum dolorem totam, voluptatibus quia, in aut saepe impedit velit natus animi est autem architecto ad cum aspernatur a dignissimos! Autem earum temporibus eum assumenda quo aliquid? Est ratione ipsa, ducimus facere magni in vero iusto explicabo aut sunt facilis fugit omnis quas odio asperiores quia, eum magnam architecto animi culpa consequatur! Doloribus atque deleniti expedita, nobis quis accusamus! Earum quasi pariatur neque recusandae quia quos, corrupti unde fugiat tenetur cumque saepe ipsam non et rerum facilis ab tempora molestias maiores corporis officiis ut, voluptatem incidunt! Ipsam, repellendus. Dolores, officiis assumenda animi eius quasi saepe dolor quo velit quisquam delectus soluta voluptates sint vero distinctio reiciendis nulla. Inventore, ab earum, voluptatum placeat maiores reiciendis unde ad quae, officia quod iste perspiciatis nemo exercitationem dolores totam nulla non. Veritatis nisi accusantium laudantium, omnis, hic reprehenderit quidem blanditiis quos sunt eligendi saepe unde animi et vitae laborum voluptatibus? Dolor repellendus blanditiis laboriosam, debitis consequatur ex voluptatem qui sit expedita porro itaque cumque enim esse, iste nihil quos at autem temporibus nulla vero. Corporis eos aut fugiat at quasi voluptate exercitationem ipsam eius, nesciunt officia. Maxime voluptates suscipit quaerat odit dolore excepturi quidem eaque tempora dolorum. Voluptatibus, reiciendis ratione? Fugit id nobis quis eaque quaerat iusto laboriosam reiciendis explicabo architecto doloribus temporibus quisquam officiis est magni omnis soluta, qui autem nisi veritatis ab saepe unde ipsam cum? Magni eius molestias quos, voluptates enim adipisci accusantium, ea sequi dolorem recusandae quibusdam laudantium, non possimus perferendis obcaecati et. Expedita quas maiores assumenda, nesciunt illo quae consequuntur ut, exercitationem perspiciatis id corporis laudantium praesentium quod sapiente unde iure. Ex rem nisi adipisci eligendi delectus error expedita praesentium aliquam. Aut, nostrum reiciendis. Sit laborum minus temporibus quidem incidunt rerum adipisci quam praesentium magni quae hic quod consequuntur, itaque natus facere consequatur atque tenetur vel numquam autem. Quia ea blanditiis porro, consectetur dicta numquam nesciunt perferendis tempora voluptates optio vel perspiciatis asperiores dolor nulla beatae deserunt. Ab rem voluptatum nostrum expedita quasi ea possimus consequatur eveniet vel voluptatibus at enim, eaque accusamus voluptas perferendis beatae delectus temporibus illo unde. ",-1),GS=[US,NS,FS,BS,kS,zS,HS];function VS(n,e,t,i,r,s){return Fe(),He("div",null,GS)}const WS=xn(OS,[["render",VS]]);function Si(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Jm(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hs={duration:.5,overwrite:!1,delay:0},Ku,Gt,_t,Rn=1e8,st=1/Rn,iu=Math.PI*2,qS=iu/4,XS=0,Qm=Math.sqrt,YS=Math.cos,jS=Math.sin,It=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},Zu=function(e){return typeof e>"u"},ci=function(e){return typeof e=="object"},en=function(e){return e!==!1},Ju=function(){return typeof window<"u"},fa=function(e){return gt(e)||It(e)},e_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,ru=/(?:-?\.?\d|\.)+/gi,t_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,n_=/[+-]=-?[.\d]+/,i_=/[^,'"\[\]\s]+/gi,$S=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,Tn,su,Qu,vn={},Qa={},r_,s_=function(e){return(Qa=zr(e,vn))&&an},ef=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},el=function(e,t){return!t&&console.warn(e)},o_=function(e,t){return e&&(vn[e]=t)&&Qa&&(Qa[e]=t)||vn},zo=function(){return 0},KS={suppressEvents:!0,isStart:!0,kill:!1},za={suppressEvents:!0,kill:!1},ZS={suppressEvents:!0},tf={},Ji=[],ou={},a_,hn={},Jl={},Ch=30,Ha=[],nf="",rf=function(e){var t=e[0],i,r;if(ci(t)||gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ha.length;r--&&!Ha[r].targetTest(t););i=Ha[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new L_(e[r],i)))||e.splice(r,1);return e},Lr=function(e){return e._gsap||rf(Cn(e))[0]._gsap},l_=function(e,t,i){return(i=e[t])&&gt(i)?e[t]():Zu(i)&&e.getAttribute&&e.getAttribute(t)||i},tn=function(e,t){return(e=e.split(",")).forEach(t)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ds=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},JS=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},tl=function(){var e=Ji.length,t=Ji.slice(0),i,r;for(ou={},Ji.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},c_=function(e,t,i,r){Ji.length&&!Gt&&tl(),e.render(t,i,r||Gt&&t<0&&(e._initted||e._startAt)),Ji.length&&!Gt&&tl()},u_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(i_).length<2?t:It(e)?e.trim():e},f_=function(e){return e},In=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},QS=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},zr=function(e,t){for(var i in t)e[i]=t[i];return e},Ph=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ci(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},nl=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},wo=function(e){var t=e.parent||dt,i=e.keyframes?QS(Vt(e.keyframes)):In;if(en(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},eb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},h_=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Rl=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Dr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},tb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},au=function(e,t,i,r){return e._startAt&&(Gt?e._startAt.revert(za):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},nb=function n(e){return!e||e._ts&&n(e.parent)},Lh=function(e){return e._repeat?Gs(e._tTime,e=e.duration()+e._rDelay)*e:0},Gs=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},il=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Cl=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},Pl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Cl(e),i._dirty||Dr(i,e)),e},d_=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=il(e.rawTime(),t),(!t._dur||Jo(0,t.totalDuration(),i)-t._tTime>st)&&t.render(i,!0)),Dr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-st}},ti=function(e,t,i,r){return t.parent&&sr(t),t._start=Ot((Ri(i)?i:i||e!==dt?yn(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),h_(e,t,"_first","_last",e._sort?"_start":0),lu(t)||(e._recent=t),r||d_(e,t),e._ts<0&&Pl(e,e._tTime),e},p_=function(e,t){return(vn.ScrollTrigger||ef("scrollTrigger",t))&&vn.ScrollTrigger.create(t,e)},m_=function(e,t,i,r,s){if(of(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&a_!==pn.frame)return Ji.push(e),e._lazy=[s,r],1},ib=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},lu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&ib(e)&&!(!e._initted&&lu(e))||(e._ts<0||e._dp._ts<0)&&!lu(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Jo(0,e._tDur,t),u=Gs(l,a),e._yoyo&&u&1&&(o=1-o),u!==Gs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Gt||r||e._zTime===st||!t&&e._zTime){if(!e._initted&&m_(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?st:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&au(e,t,i,!0),e._onUpdate&&!i&&Pn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&sr(e,1),!i&&!Gt&&(Pn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Vs=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Pl(e,e._tTime=e._tDur*a),e.parent&&Cl(e),i||Dr(e.parent,e),e},Dh=function(e){return e instanceof Qt?Dr(e):Vs(e,e._dur)},ob={_start:0,endTime:zo,totalDuration:zo},yn=function n(e,t,i){var r=e.labels,s=e._recent||ob,o=e.duration()>=Rn?s.endTime(!1):e._dur,a,l,c;return It(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Vt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ro=function(e,t,i){var r=Ri(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=en(l.vars.inherit)&&l.parent;o.immediateRender=en(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Tt(t[0],o,t[s+1])},lr=function(e,t){return e||e===0?t(e):t},Jo=function(e,t,i){return i<e?e:i>t?t:i},zt=function(e,t){return!It(e)||!(t=$S.exec(e))?"":t[1]},ab=function(e,t,i){return lr(i,function(r){return Jo(e,t,r)})},cu=[].slice,__=function(e,t){return e&&ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ci(e[0]))&&!e.nodeType&&e!==Tn},lb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return It(r)&&!t||__(r,1)?(s=i).push.apply(s,Cn(r)):i.push(r)})||i},Cn=function(e,t,i){return _t&&!t&&_t.selector?_t.selector(e):It(e)&&!i&&(su||!Ws())?cu.call((t||Qu).querySelectorAll(e),0):Vt(e)?lb(e,i):__(e)?cu.call(e,0):e?[e]:[]},uu=function(e){return e=Cn(e)[0]||el("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Cn(t,i.querySelectorAll?i:i===e?el("Invalid scope")||Qu.createElement("div"):e)}},g_=function(e){return e.sort(function(){return .5-Math.random()})},v_=function(e){if(gt(e))return e;var t=ci(e)?e:{each:e},i=Ir(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return It(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,x,v,y,E,C,A,L,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Rn])[1],!M){for(A=-Rn;A<(A=g[M++].getBoundingClientRect().left)&&M<_;);M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:r%M,x=M===Rn?0:l?_*f/M-.5:r/M|0,A=0,L=Rn,C=0;C<_;C++)v=C%M-p,y=x-(C/M|0),m[C]=E=c?Math.abs(c==="y"?y:v):Qm(v*v+y*y),E>A&&(A=E),E<L&&(L=E);r==="random"&&g_(m),m.max=A-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=zt(t.amount||t.each)||0,i=i&&_<0?R_(i):i}return _=(m[h]-m.min)/m.max||0,Ot(m.b+(i?i(_):_)*m.v)+m.u}},fu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ri(i)?0:zt(i))}},x_=function(e,t){var i=Vt(e),r,s;return!i&&ci(e)&&(r=i=e.radius||Rn,e.values?(e=Cn(e.values),(s=!Ri(e[0]))&&(r*=r)):e=fu(e.increment)),lr(t,i?gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Rn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Ri(o)?u:u+zt(o)}:fu(e))},M_=function(e,t,i,r){return lr(Vt(e)?!t:i===!0?!!(i=0):!r,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},cb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},ub=function(e,t){return function(i){return e(parseFloat(i))+(t||zt(i))}},fb=function(e,t,i){return b_(e,t,0,1,i)},S_=function(e,t,i){return lr(i,function(r){return e[~~t(r)]})},hb=function n(e,t,i){var r=t-e;return Vt(e)?S_(e,n(0,e.length),t):lr(i,function(s){return(r+(s-e)%r)%r+e})},db=function n(e,t,i){var r=t-e,s=r*2;return Vt(e)?S_(e,n(0,e.length-1),t):lr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ho=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?i_:ru),i+=e.substr(t,r-t)+M_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},b_=function(e,t,i,r,s){var o=t-e,a=r-i;return lr(s,function(l){return i+((l-e)/o*a||0)})},pb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=It(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=zr(Vt(e)?[]:{},e));if(!u){for(l in t)sf.call(a,e,l,"get",t[l]);s=function(g){return cf(g,a)||(o?e.p:e)}}}return lr(i,s)},Ih=function(e,t,i){var r=e.labels,s=Rn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Pn=function(e,t,i){var r=e.vars,s=r[t],o=_t,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ji.length&&tl(),a&&(_t=a),u=l?s.apply(c,l):s.call(c),_t=o,u},xo=function(e){return sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&Pn(e,"onInterrupt"),e},ys,y_=[],E_=function(e){if(Ju()&&e){e=!e.name&&e.default||e;var t=e.name,i=gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:zo,render:cf,add:sf,kill:Pb,modifier:Cb,rawVars:0},o={targetTest:0,get:0,getSetter:lf,aliases:{},register:0};if(Ws(),e!==r){if(hn[t])return;In(r,In(nl(e,s),o)),zr(r.prototype,zr(s,nl(e,o))),hn[r.prop=t]=r,e.targetTest&&(Ha.push(r),tf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}o_(t,r),e.register&&e.register(an,r,nn)}else e&&y_.push(e)},rt=255,Mo={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},Ql=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*rt+.5|0},T_=function(e,t,i){var r=e?Ri(e)?[e>>16,e>>8&rt,e&rt]:0:Mo.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Mo[e])r=Mo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&rt,r&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(ru),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ql(l+1/3,s,o),r[1]=Ql(l,s,o),r[2]=Ql(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(t_),i&&r.length<4&&(r[3]=1),r}else r=e.match(ru)||Mo.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/rt,o=r[1]/rt,a=r[2]/rt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},A_=function(e){var t=[],i=[],r=-1;return e.split(Qi).forEach(function(s){var o=s.match(bs)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Oh=function(e,t,i){var r="",s=(e+r).match(Qi),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=T_(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=A_(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Qi,"1").split(bs),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Qi),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Qi=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Mo)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),mb=/hsl[a]?\(/,w_=function(e){var t=e.join(" "),i;if(Qi.lastIndex=0,Qi.test(t))return i=mb.test(t),e[1]=Oh(e[1],i),e[0]=Oh(e[0],i,A_(e[1])),!0},Go,pn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,x=m===!0,v,y,E,C;if(p>e&&(i+=p-t),r+=p,E=r-i,v=E-o,(v>0||x)&&(C=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](E,h,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){r_&&(!su&&Ju()&&(Tn=su=window,Qu=Tn.document||{},vn.gsap=an,(Tn.gsapVersions||(Tn.gsapVersions=[])).push(an.version),s_(Qa||Tn.GreenSockGlobals||!Tn.gsap&&Tn||{}),u=Tn.requestAnimationFrame,y_.forEach(E_)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Go=1,g(2))},sleep:function(){(u?Tn.cancelAnimationFrame:clearTimeout)(l),Go=0,c=zo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,x){var v=p?function(y,E,C,A){m(y,E,C,A),f.remove(v)}:m;return f.remove(m),a[x?"unshift":"push"](v),Ws(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Ws=function(){return!Go&&pn.wake()},Ze={},_b=/^[\d.\-M][\d.\-,\s]/,gb=/["']/g,vb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(gb,"").trim():+c,r=l.substr(a+1).trim();return t},xb=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Mb=function(e){var t=(e+"").split("("),i=Ze[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[vb(t[1])]:xb(e).split(",").map(u_)):Ze._CE&&_b.test(e)?Ze._CE("",e):i},R_=function(e){return function(t){return 1-e(1-t)}},C_=function n(e,t){for(var i=e._first,r;i;)i instanceof Qt?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Ir=function(e,t){return e&&(gt(e)?e:Ze[e]||Mb(e))||t},Xr=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return tn(e,function(a){Ze[a]=vn[a]=s,Ze[o=a.toLowerCase()]=i;for(var l in s)Ze[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[a+"."+l]=s[l]}),s},P_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ec=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/iu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*jS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:P_(a);return s=iu/s,l.config=function(c,u){return n(e,c,u)},l},tc=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:P_(i);return r.config=function(s){return n(e,s)},r};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Xr(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;Xr("Elastic",ec("in"),ec("out"),ec());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Xr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Xr("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Xr("Circ",function(n){return-(Qm(1-n*n)-1)});Xr("Sine",function(n){return n===1?1:-YS(n*qS)+1});Xr("Back",tc("in"),tc("out"),tc());Ze.SteppedEase=Ze.steps=vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-st;return function(a){return((r*Jo(0,o,a)|0)+s)*i}}};Hs.ease=Ze["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return nf+=n+","+n+"Params,"});var L_=function(e,t){this.id=XS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:l_,this.set=t?t.getSetter:lf},Vo=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vs(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),Go||pn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Pl(this,i),!s._dp||s.parent||d_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===st||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),c_(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Lh(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Lh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Gs(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?il(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-st?0:this._rts,this.totalTime(Jo(-Math.abs(this._delay),this._tDur,r),!0),Cl(this),tb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ti(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(en(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?il(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=ZS);var r=Gt;return Gt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Dh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Dh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(yn(this,i),en(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,en(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-st)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=gt(i)?i:f_,a=function(){var c=r.then;r.then=null,gt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){xo(this)},n}();In(Vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Qt=function(n){Jm(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=en(i.sortChildren),dt&&ti(i.parent||dt,Si(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&p_(Si(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ro(0,arguments,this),this},t.from=function(r,s,o){return Ro(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ro(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(r,s,yn(this,o),1),this},t.call=function(r,s,o){return ti(this,Tt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Tt(r,o,yn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,wo(o).immediateRender=en(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,wo(a).immediateRender=en(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ot(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,x,v,y,E,C,A;if(this!==dt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,y=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Ot(u%m),u===l?(_=this._repeat,h=c):(_=~~(u/m),_&&_===u/m&&(h=c,_--),h>c&&(h=c)),E=Gs(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),C&&_&1&&(h=c-h,A=1),_!==E&&!this._lock){var L=C&&E&1,M=L===(C&&_&1);if(_<E&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ot(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;C_(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=sb(this,Ot(a),Ot(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(Pn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=-st);break}}d=g}else{d=this._last;for(var w=r<0?r:h;d;){if(g=d._prev,(d._act||w<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,s,o||Gt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=w?-st:st);break}}d=g}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-st)._zTime=h>=a?1:-1,this._ts))return this._start=y,Cl(this),this.render(r,s,o);this._onUpdate&&!s&&Pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&sr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Pn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ri(s)||(s=yn(this,s,r)),!(r instanceof Vo)){if(Vt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(It(r))return this.addLabel(r,s);if(gt(r))r=Tt.delayedCall(0,r);else return this}return this!==r?ti(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Rn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Tt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return It(r)?this.removeLabel(r):gt(r)?this.killTweensOf(r):(Rl(this,r),r===this._recent&&(this._recent=this._last),Dr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(pn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=yn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Tt.delayedCall(0,s||zo,o);return a.data="isPause",this._hasPause=1,ti(this,a,yn(this,r))},t.removePause=function(r){var s=this._first;for(r=yn(this,r);s;)s._start===r&&s.data==="isPause"&&sr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Wi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Cn(r),l=this._first,c=Ri(s),u;l;)l instanceof Tt?JS(l._targets,a)&&(c?(!Wi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=yn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Tt.to(o,In({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||st,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Vs(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,In({startAt:{time:yn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ih(this,yn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ih(this,yn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Dr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Dr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Rn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ti(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Vs(o,o===dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(dt._ts&&(c_(dt,il(r,dt)),a_=pn.frame),pn.frame>=Ch){Ch+=_n.autoSleep||120;var s=dt._first;if((!s||!s._ts)&&_n.autoSleep&&pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pn.sleep()}}},e}(Vo);In(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sb=function(e,t,i,r,s,o,a){var l=new nn(this._pt,e,t,0,1,F_,null,s),c=0,u=0,f,h,d,g,_,m,p,x;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Ho(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),h=i.match(Zl)||[];f=Zl.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ds(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Zl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(n_.test(r)||p)&&(l.e=0),this._pt=l,l},sf=function(e,t,i,r,s,o,a,l,c,u){gt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:gt(f)?c?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=gt(f)?c?Ab:U_:af,g;if(It(r)&&(~r.indexOf("random(")&&(r=Ho(r)),r.charAt(1)==="="&&(g=Ds(h,r)+(zt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||hu)return!isNaN(h*r)&&r!==""?(g=new nn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?Rb:N_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&ef(t,r),Sb.call(this,e,t,h,r,d,l||_n.stringFilter,c))},bb=function(e,t,i,r,s){if(gt(e)&&(e=Co(e,s,t,i,r)),!ci(e)||e.style&&e.nodeType||Vt(e)||e_(e))return It(e)?Co(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Co(e[a],s,t,i,r);return o},D_=function(e,t,i,r,s,o){var a,l,c,u;if(hn[e]&&(a=new hn[e]).init(s,a.rawVars?t[e]:bb(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new nn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ys))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Wi,hu,of=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,f=r.callbackScope,h=r.runBackwards,d=r.yoyoEase,g=r.keyframes,_=r.autoRevert,m=e._dur,p=e._startAt,x=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:x,E=e._overwrite==="auto"&&!Ku,C=e.timeline,A,L,M,w,Y,z,N,G,H,Q,B,q,oe;if(C&&(!g||!s)&&(s="none"),e._ease=Ir(s,Hs.ease),e._yEase=d?R_(Ir(d===!0?s:d,Hs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!C&&!!r.runBackwards,!C||g&&!r.stagger){if(G=x[0]?Lr(x[0]).harness:0,q=G&&r[G.prop],A=nl(r,tf),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!_?p.render(-1,!0):p.revert(h&&m?za:KS),p._lazy=0),o){if(sr(e._startAt=Tt.set(x,In({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&en(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!a&&!_)&&e._startAt.revert(za),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!p){if(t&&(a=!1),M=In({overwrite:!1,data:"isFromStart",lazy:a&&!p&&en(l),immediateRender:a,stagger:0,parent:v},A),q&&(M[G.prop]=q),sr(e._startAt=Tt.set(x,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(za):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&en(l)||l&&!m,L=0;L<x.length;L++){if(Y=x[L],N=Y._gsap||rf(x)[L]._gsap,e._ptLookup[L]=Q={},ou[N.id]&&Ji.length&&tl(),B=y===x?L:y.indexOf(Y),G&&(H=new G).init(Y,q||A,e,B,y)!==!1&&(e._pt=w=new nn(e._pt,Y,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ce){Q[ce]=w}),H.priority&&(z=1)),!G||q)for(M in A)hn[M]&&(H=D_(M,A,e,B,Y,y))?H.priority&&(z=1):Q[M]=w=sf.call(e,Y,M,"get",A[M],B,y,0,r.stringFilter);e._op&&e._op[L]&&e.kill(Y,e._op[L]),E&&e._pt&&(Wi=e,dt.killTweensOf(Y,Q,e.globalTime(t)),oe=!e.parent,Wi=0),e._pt&&l&&(ou[N.id]=1)}z&&B_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,g&&t<=0&&C.render(Rn,!0,!0)},yb=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return hu=1,e.vars[t]="+=0",of(e,a),hu=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,u.e&&(u.e=xt(i)+zt(u.e)),u.b&&(u.b=c.s+zt(u.b))},Eb=function(e,t){var i=e[0]?Lr(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=zr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Tb=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Vt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Co=function(e,t,i,r,s){return gt(e)?e.call(t,i,r,s):It(e)&&~e.indexOf("random(")?Ho(e):e},I_=nf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",O_={};tn(I_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return O_[n]=1});var Tt=function(n){Jm(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:wo(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,x=r.parent||dt,v=(Vt(i)||e_(i)?Ri(i[0]):"length"in r)?[i]:Cn(i),y,E,C,A,L,M,w,Y;if(a._targets=v.length?rf(v):el("GSAP target "+i+" not found. https://greensock.com",!_n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||fa(c)||fa(u)){if(r=a.vars,y=a.timeline=new Qt({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=Si(a),y._start=0,h||fa(c)||fa(u)){if(A=v.length,w=h&&v_(h),ci(h))for(L in h)~I_.indexOf(L)&&(Y||(Y={}),Y[L]=h[L]);for(E=0;E<A;E++)C=nl(r,O_),C.stagger=0,p&&(C.yoyoEase=p),Y&&zr(C,Y),M=v[E],C.duration=+Co(c,Si(a),E,M,v),C.delay=(+Co(u,Si(a),E,M,v)||0)-a._delay,!h&&A===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),y.to(M,C,w?w(E,M,v):0),y._ease=Ze.none;y.duration()?c=u=0:a.timeline=0}else if(g){wo(In(y.vars.defaults,{ease:"none"})),y._ease=Ir(g.ease||r.ease||"none");var z=0,N,G,H;if(Vt(g))g.forEach(function(Q){return y.to(v,Q,">")}),y.duration();else{C={};for(L in g)L==="ease"||L==="easeEach"||Tb(L,g[L],C,g.easeEach);for(L in C)for(N=C[L].sort(function(Q,B){return Q.t-B.t}),z=0,E=0;E<N.length;E++)G=N[E],H={ease:G.e,duration:(G.t-(E?N[E-1].t:0))/100*c},H[L]=G.v,y.to(v,H,z),z+=H.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Ku&&(Wi=Si(a),dt.killTweensOf(v),Wi=0),ti(x,Si(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ot(x._time)&&en(f)&&nb(Si(a))&&x.data!=="nested")&&(a._tTime=-st,a.render(Math.max(0,-u)||0)),m&&p_(Si(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-st&&!u?l:r<st?0:r,h,d,g,_,m,p,x,v,y;if(!c)rb(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=Ot(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===f/_&&(h=c,g--),h>c&&(h=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,h=c-h),m=Gs(this._tTime,_),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(v&&this._yEase&&C_(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Ot(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(m_(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/c),this._from&&(this.ratio=x=1-x),h&&!a&&!s&&!g&&(Pn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(r<0?r:!h&&p?-st:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&au(this,r,s,o),Pn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Pn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&au(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&sr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Pn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Go||pn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||of(this,l),c=this._ease(l/this._dur),yb(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(Pl(this,0),this.parent||h_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Wi&&Wi.vars.overwrite!==!0)._first||xo(this),this.parent&&o!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Cn(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&eb(a,l))return s==="all"&&(this._pt=0),xo(this);for(f=this._op=this._op||[],s!=="all"&&(It(s)&&(_={},tn(s,function(x){return _[x]=1}),s=_),s=Eb(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Rl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&xo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ro(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ro(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return dt.killTweensOf(r,s,o)},e}(Vo);In(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(n){Tt[n]=function(){var e=new Qt,t=cu.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var af=function(e,t,i){return e[t]=i},U_=function(e,t,i){return e[t](i)},Ab=function(e,t,i,r){return e[t](r.fp,i)},wb=function(e,t,i){return e.setAttribute(t,i)},lf=function(e,t){return gt(e[t])?U_:Zu(e[t])&&e.setAttribute?wb:af},N_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Rb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},F_=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},cf=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Cb=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Pb=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Rl(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Lb=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},B_=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},nn=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||N_,this.d=l||this,this.set=c||af,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Lb,this.m=i,this.mt=s,this.tween=r},n}();tn(nf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return tf[n]=1});vn.TweenMax=vn.TweenLite=Tt;vn.TimelineLite=vn.TimelineMax=Qt;dt=new Qt({sortChildren:!1,defaults:Hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=w_;var Or=[],Ga={},Db=[],Uh=0,Ib=0,nc=function(e){return(Ga[e]||Db).map(function(t){return t()})},du=function(){var e=Date.now(),t=[];e-Uh>2&&(nc("matchMediaInit"),Or.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Tn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),nc("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),Uh=e,nc("matchMedia"))},k_=function(){function n(t,i){this.selector=i&&uu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Ib++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){gt(i)&&(s=r,r=i,i=gt);var o=this,a=function(){var c=_t,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=uu(s)),_t=o,f=r.apply(o,arguments),gt(f)&&o._r.push(f),_t=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===gt?a(o):i?o[i]=a:a},e.ignore=function(i){var r=_t;_t=null,i(this),_t=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Tt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Tt)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=Or.length;a--;)Or[a].id===this.id&&Or.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),Ob=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){ci(i)||(i={matches:i});var o=new k_(0,s||this.scope),a=o.conditions={},l,c,u;_t&&!o.selector&&(o.selector=_t.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Tn.matchMedia(i[c]),l&&(Or.indexOf(o)<0&&Or.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(du):l.addEventListener("change",du)));return u&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),rl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return E_(r)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return dt.getTweensOf(e,t)},getProperty:function(e,t,i,r){It(e)&&(e=Cn(e)[0]);var s=Lr(e||{}).get,o=i?f_:u_;return i==="native"&&(i=""),e&&(t?o((hn[t]&&hn[t].get||s)(e,t,i,r)):function(a,l,c){return o((hn[a]&&hn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Cn(e),e.length>1){var r=e.map(function(u){return an.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=hn[t],a=Lr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ys._pt=0,f.init(e,i?u+i:u,ys,0,[e]),f.render(1,f),ys._pt&&cf(1,ys)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=an.to(e,zr((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ir(e.ease,Hs.ease)),Ph(Hs,e||{})},config:function(e){return Ph(_n,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!hn[a]&&!vn[a]&&el(t+" effect requires "+a+" plugin.")}),Jl[t]=function(a,l,c){return i(Cn(a),In(l||{},s),c)},o&&(Qt.prototype[t]=function(a,l,c){return this.add(Jl[t](a,ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=Ir(t)},parseEase:function(e,t){return arguments.length?Ir(e,t):Ze},getById:function(e){return dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Qt(e),r,s;for(i.smoothChildTiming=en(e.smoothChildTiming),dt.remove(i),i._dp=0,i._time=i._tTime=dt._time,r=dt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Tt&&r.vars.onComplete===r._targets[0]))&&ti(i,r,r._start-r._delay),r=s;return ti(dt,i,0),i},context:function(e,t){return e?new k_(e,t):_t},matchMedia:function(e){return new Ob(e)},matchMediaRefresh:function(){return Or.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||du()},addEventListener:function(e,t){var i=Ga[e]||(Ga[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ga[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:hb,wrapYoyo:db,distribute:v_,random:M_,snap:x_,normalize:fb,getUnit:zt,clamp:ab,splitColor:T_,toArray:Cn,selector:uu,mapRange:b_,pipe:cb,unitize:ub,interpolate:pb,shuffle:g_},install:s_,effects:Jl,ticker:pn,updateRoot:Qt.updateRoot,plugins:hn,globalTimeline:dt,core:{PropTween:nn,globals:o_,Tween:Tt,Timeline:Qt,Animation:Vo,getCache:Lr,_removeLinkedListItem:Rl,reverting:function(){return Gt},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return Ku=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return rl[n]=Tt[n]});pn.add(Qt.updateRoot);ys=rl.to({},{duration:0});var Ub=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Nb=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Ub(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},ic=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(It(s)&&(l={},tn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Nb(a,s)}}}},an=rl.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Gt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ic("roundProps",fu),ic("modifiers"),ic("snap",x_))||rl;Tt.version=Qt.version=an.version="3.12.2";r_=1;Ju()&&Ws();Ze.Power0;Ze.Power1;Ze.Power2;Ze.Power3;Ze.Power4;Ze.Linear;Ze.Quad;Ze.Cubic;Ze.Quart;Ze.Quint;Ze.Strong;Ze.Elastic;Ze.Back;Ze.SteppedEase;Ze.Bounce;Ze.Sine;Ze.Expo;Ze.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nh,qi,Is,uf,Rr,Fh,ff,Fb=function(){return typeof window<"u"},Ci={},Sr=180/Math.PI,Os=Math.PI/180,Jr=Math.atan2,Bh=1e8,hf=/([A-Z])/g,Bb=/(left|right|width|margin|padding|x)/i,kb=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gb=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},z_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},H_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vb=function(e,t,i){return e.style[t]=i},Wb=function(e,t,i){return e.style.setProperty(t,i)},qb=function(e,t,i){return e._gsap[t]=i},Xb=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Yb=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},jb=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},pt="transform",Xn=pt+"Origin",$b=function n(e,t){var i=this,r=this.target,s=r.style;if(e in Ci&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=bi(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:bi(r,e);else return ii.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(pt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=pt}(s||t)&&this.props.push(e,t,s[e])},G_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Kb=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(hf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ff(),(!s||!s.isStart)&&!i[pt]&&(G_(i),r.uncache=1)}},V_=function(e,t){var i={target:e,props:[],revert:Kb,save:$b};return e._gsap||an.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},W_,mu=function(e,t){var i=qi.createElementNS?qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qi.createElement(e);return i.style?i:qi.createElement(e)},si=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(hf,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,qs(t)||t,1)||""},kh="O,Moz,ms,Ms,Webkit".split(","),qs=function(e,t,i){var r=t||Rr,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(kh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?kh[o]:"")+e},_u=function(){Fb()&&window.document&&(Nh=window,qi=Nh.document,Is=qi.documentElement,Rr=mu("div")||{style:{}},mu("div"),pt=qs(pt),Xn=pt+"Origin",Rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",W_=!!qs("perspective"),ff=an.core.reverting,uf=1)},rc=function n(e){var t=mu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Is.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Is.removeChild(t),this.style.cssText=s,o},zh=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},q_=function(e){var t;try{t=e.getBBox()}catch{t=rc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===rc||(t=rc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+zh(e,["x","cx","x1"])||0,y:+zh(e,["y","cy","y1"])||0,width:0,height:0}:t},X_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&q_(e))},Wo=function(e,t){if(t){var i=e.style;t in Ci&&t!==Xn&&(t=pt),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(hf,"-$1").toLowerCase())):i.removeAttribute(t)}},Xi=function(e,t,i,r,s,o){var a=new nn(e._pt,t,i,0,1,o?H_:z_);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Hh={deg:1,rad:1,turn:1},Zb={grid:1,flex:1},or=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Rr.style,l=Bb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;return r===o||!s||Hh[r]||Hh[o]?s:(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&X_(e),(d||o==="%")&&(Ci[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],xt(d?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===qi||!_.appendChild)&&(_=qi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===pn.time&&!m.uncache?xt(s/m.width*f):((d||o==="%")&&!Zb[si(_,"display")]&&(a.position=si(e,"position")),_===e&&(a.position="static"),_.appendChild(Rr),g=Rr[u],_.removeChild(Rr),a.position="absolute",l&&d&&(m=Lr(_),m.time=pn.time,m.width=_[u]),xt(h?g*s/f:g&&s?f/g*s:0))))},bi=function(e,t,i,r){var s;return uf||_u(),t in ii&&t!=="transform"&&(t=ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ci[t]&&t!=="transform"?(s=Xo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ol(si(e,Xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=sl[t]&&sl[t](e,t,i)||si(e,t)||l_(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?or(e,t,s,i)+i:s},Jb=function(e,t,i,r){if(!i||i==="none"){var s=qs(t,e,1),o=s&&si(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=si(e,"borderTopColor"))}var a=new nn(this._pt,e.style,t,0,1,F_),l=0,c=0,u,f,h,d,g,_,m,p,x,v,y,E;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=si(e,t)||r,e.style[t]=i),u=[i,r],w_(u),i=u[0],r=u[1],h=i.match(bs)||[],E=r.match(bs)||[],E.length){for(;f=bs.exec(r);)m=f[0],x=r.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ds(d,m)+y),p=parseFloat(m),v=m.substr((p+"").length),l=bs.lastIndex-v.length,v||(v=v||_n.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(d=or(e,t,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?H_:z_;return n_.test(r)&&(a.e=0),this._pt=a,a},Gh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Gh[i]||i,t[1]=Gh[r]||r,t.join(" ")},ey=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ci[a]&&(l=1,a=a==="transformOrigin"?Xn:pt),Wo(i,a);l&&(Wo(i,pt),o&&(o.svg&&i.removeAttribute("transform"),Xo(i,1),o.uncache=1,G_(r)))}},sl={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new nn(e._pt,t,i,0,0,ey);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},qo=[1,0,0,1,0,0],Y_={},j_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vh=function(e){var t=si(e,pt);return j_(t)?qo:t.substr(7).match(t_).map(xt)},df=function(e,t){var i=e._gsap||Lr(e),r=e.style,s=Vh(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?qo:s):(s===qo&&!e.offsetParent&&e!==Is&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Is.appendChild(e)),s=Vh(e),l?r.display=l:Wo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gu=function(e,t,i,r,s,o){var a=e._gsap,l=s||df(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,E=parseFloat(v[1])||0,C,A,L,M;i?l!==qo&&(A=d*m-g*_)&&(L=y*(m/A)+E*(-_/A)+(_*x-m*p)/A,M=y*(-g/A)+E*(d/A)-(d*x-g*p)/A,y=L,E=M):(C=q_(e),y=C.x+(~v[0].indexOf("%")?y/100*C.width:y),E=C.y+(~(v[1]||v[0]).indexOf("%")?E/100*C.height:E)),r||r!==!1&&a.smooth?(p=y-c,x=E-u,a.xOffset=f+(p*d+x*_)-p,a.yOffset=h+(p*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Xn]="0px 0px",o&&(Xi(o,a,"xOrigin",c,y),Xi(o,a,"yOrigin",u,E),Xi(o,a,"xOffset",f,a.xOffset),Xi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Xo=function(e,t){var i=e._gsap||new L_(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=si(e,Xn)||"0",u,f,h,d,g,_,m,p,x,v,y,E,C,A,L,M,w,Y,z,N,G,H,Q,B,q,oe,ce,V,J,Me,ve,Se;return u=f=h=_=m=p=x=v=y=0,d=g=1,i.svg=!!(e.getCTM&&X_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pt]!=="none"?l[pt]:"")),r.scale=r.rotate=r.translate="none"),A=df(e,i.svg),i.svg&&(i.uncache?(q=e.getBBox(),c=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),gu(e,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,A)),E=i.xOrigin||0,C=i.yOrigin||0,A!==qo&&(Y=A[0],z=A[1],N=A[2],G=A[3],u=H=A[4],f=Q=A[5],A.length===6?(d=Math.sqrt(Y*Y+z*z),g=Math.sqrt(G*G+N*N),_=Y||z?Jr(z,Y)*Sr:0,x=N||G?Jr(N,G)*Sr+_:0,x&&(g*=Math.abs(Math.cos(x*Os))),i.svg&&(u-=E-(E*Y+C*N),f-=C-(E*z+C*G))):(Se=A[6],Me=A[7],ce=A[8],V=A[9],J=A[10],ve=A[11],u=A[12],f=A[13],h=A[14],L=Jr(Se,J),m=L*Sr,L&&(M=Math.cos(-L),w=Math.sin(-L),B=H*M+ce*w,q=Q*M+V*w,oe=Se*M+J*w,ce=H*-w+ce*M,V=Q*-w+V*M,J=Se*-w+J*M,ve=Me*-w+ve*M,H=B,Q=q,Se=oe),L=Jr(-N,J),p=L*Sr,L&&(M=Math.cos(-L),w=Math.sin(-L),B=Y*M-ce*w,q=z*M-V*w,oe=N*M-J*w,ve=G*w+ve*M,Y=B,z=q,N=oe),L=Jr(z,Y),_=L*Sr,L&&(M=Math.cos(L),w=Math.sin(L),B=Y*M+z*w,q=H*M+Q*w,z=z*M-Y*w,Q=Q*M-H*w,Y=B,H=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=xt(Math.sqrt(Y*Y+z*z+N*N)),g=xt(Math.sqrt(Q*Q+Se*Se)),L=Jr(H,Q),x=Math.abs(L)>2e-4?L*Sr:0,y=ve?1/(ve<0?-ve:ve):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!j_(si(e,pt)),B&&e.setAttribute("transform",B))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=xt(d),i.scaleY=xt(g),i.rotation=xt(_)+a,i.rotationX=xt(m)+a,i.rotationY=xt(p)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Xn]=ol(c)),i.xOffset=i.yOffset=0,i.force3D=_n.force3D,i.renderTransform=i.svg?ny:W_?$_:ty,i.uncache=0,i},ol=function(e){return(e=e.split(" "))[0]+" "+e[1]},sc=function(e,t,i){var r=zt(t);return xt(parseFloat(t)+parseFloat(or(e,"x",i+"px",r)))+r},ty=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$_(e,t)},mr="0deg",lo="0px",_r=") ",$_=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,x=i.target,v=i.zOrigin,y="",E=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==mr||u!==mr)){var C=parseFloat(u)*Os,A=Math.sin(C),L=Math.cos(C),M;C=parseFloat(f)*Os,M=Math.cos(C),o=sc(x,o,A*M*-v),a=sc(x,a,-Math.sin(C)*-v),l=sc(x,l,L*M*-v+v)}m!==lo&&(y+="perspective("+m+_r),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(E||o!==lo||a!==lo||l!==lo)&&(y+=l!==lo||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+_r),c!==mr&&(y+="rotate("+c+_r),u!==mr&&(y+="rotateY("+u+_r),f!==mr&&(y+="rotateX("+f+_r),(h!==mr||d!==mr)&&(y+="skew("+h+", "+d+_r),(g!==1||_!==1)&&(y+="scale("+g+", "+_+_r),x.style[pt]=y||"translate(0, 0)"},ny=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,x=i.forceCSS,v=parseFloat(o),y=parseFloat(a),E,C,A,L,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Os,c*=Os,E=Math.cos(l)*f,C=Math.sin(l)*f,A=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=Os,M=Math.tan(c-u),M=Math.sqrt(1+M*M),A*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,C*=M)),E=xt(E),C=xt(C),A=xt(A),L=xt(L)):(E=f,L=h,C=A=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=or(d,"x",o,"px"),y=or(d,"y",a,"px")),(g||_||m||p)&&(v=xt(v+g-(g*E+_*A)+m),y=xt(y+_-(g*C+_*L)+p)),(r||s)&&(M=d.getBBox(),v=xt(v+r/100*M.width),y=xt(y+s/100*M.height)),M="matrix("+E+","+C+","+A+","+L+","+v+","+y+")",d.setAttribute("transform",M),x&&(d.style[pt]=M)},iy=function(e,t,i,r,s){var o=360,a=It(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Sr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Bh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Bh)%o-~~(c/o)*o)),e._pt=h=new nn(e._pt,t,i,r,c,zb),h.e=u,h.u="deg",e._props.push(i),h},Wh=function(e,t){for(var i in t)e[i]=t[i];return e},ry=function(e,t,i){var r=Wh({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[pt]=t,a=Xo(i,1),Wo(i,pt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[pt],o[pt]=t,a=Xo(i,1),o[pt]=c);for(l in Ci)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=zt(c),g=zt(u),f=d!==g?or(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new nn(e._pt,a,l,f,h-f,pu),e._pt.u=g||0,e._props.push(l));Wh(a,r)};tn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});sl[e>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return bi(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var K_={name:"css",register:_u,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,x,v,y,E,C,A,L;uf||_u(),this.styles=this.styles||V_(e),L=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(hn[_]&&D_(_,t,i,r,e,s)))){if(d=typeof u,g=sl[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ho(u)),g)g(this,e,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Qi.lastIndex=0,Qi.test(c)||(m=zt(c),p=zt(u)),p?m!==p&&(c=or(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],It(c)&&~c.indexOf("random(")&&(c=Ho(c)),zt(c+"")||(c+=_n.units[_]||zt(bi(e,_))||""),(c+"").charAt(1)==="="&&(c=bi(e,_))):c=bi(e,_),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),_ in ii&&(_==="autoAlpha"&&(h===1&&bi(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,a.visibility),Xi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Ci,v){if(this.styles.save(_),y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Xo(e,t.parseTransform),C=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new nn(this._pt,a,pt,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new nn(this._pt,E,"scaleY",E.scaleY,(x?Ds(E.scaleY,x+f):f)-E.scaleY||0,pu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Xn,0,a[Xn]),u=Qb(u),E.svg?gu(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Xi(this,E,"zOrigin",E.zOrigin,p),Xi(this,a,_,ol(c),ol(u)));continue}else if(_==="svgOrigin"){gu(e,u,1,C,0,this);continue}else if(_ in Y_){iy(this,E,_,h,x?Ds(h,x+u):u);continue}else if(_==="smoothOrigin"){Xi(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){ry(this,u,e);continue}}else _ in a||(_=qs(_)||_);if(v||(f||f===0)&&(h||h===0)&&!kb.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=zt(u)||(_ in _n.units?_n.units[_]:m),m!==p&&(h=or(e,_,c,p)),this._pt=new nn(this._pt,v?E:a,_,h,(x?Ds(h,x+f):f)-h,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Gb:pu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Hb);else if(_ in a)Jb.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,r,s);else if(_!=="parseTransform"){ef(_,u);continue}v||(_ in a?L.push(_,0,a[_]):L.push(_,1,c||e[_])),o.push(_)}}A&&B_(this)},render:function(e,t){if(t.tween._time||!ff())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:bi,aliases:ii,getSetter:function(e,t,i){var r=ii[t];return r&&r.indexOf(",")<0&&(t=r),t in Ci&&t!==Xn&&(e._gsap.x||bi(e,"x"))?i&&Fh===i?t==="scale"?Xb:qb:(Fh=i||{})&&(t==="scale"?Yb:jb):e.style&&!Zu(e.style[t])?Vb:~t.indexOf("-")?Wb:lf(e,t)},core:{_removeProperty:Wo,_getMatrix:df}};an.utils.checkPrefix=qs;an.core.getStyleSaver=V_;(function(n,e,t,i){var r=tn(n+","+e+","+t,function(s){Ci[s]=1});tn(e,function(s){_n.units[s]="deg",Y_[s]=1}),ii[r[13]]=n+","+e,tn(i,function(s){var o=s.split(":");ii[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){_n.units[n]="px"});an.registerPlugin(K_);var pf=an.registerPlugin(K_)||an;pf.core.Tween;const sy=[{path:"/",name:"tutorial-page",component:DM,props:!0},{path:"/components_example",name:"components_example",component:RS,props:!0},{path:"/final",name:"final",component:eS,props:!0},{path:"/page_1",name:"page_1",component:IS,props:!0},{path:"/page_2",name:"page_2",component:WS,props:!0}],oy=EM({routes:sy,base:"/",history:zx(),scrollBehavior(n,e,t){let i=e.fullPath.split("#").slice(0,1).join(),r=n.path,s,o;i===r?s=0:s=1050,window.innerWidth>1024?o=100:o=75;let a=pf.timeline({defaults:{ease:"Sine.easeOut"}}),l=document.querySelector(".js-global-scroll");return n.hash?new Promise((c,u)=>{setTimeout(()=>{let f=document.getElementById(n.hash.substring(1));c(a.to(l,{scrollTop:f.offsetTop-o,duration:1}))},s)}):a.to(l,{scrollTop:0,duration:.1})}});function ay(){return{routs:[{pageRoute:"tutorial-page",name:"Tutorial"},{pageRoute:"page_1",name:"Page 1"},{pageRoute:"page_2",name:"Page 2",scrollPage:[{pageRoute:"/page_2",hash:"#menu-Part_1",name:"Part 1"},{pageRoute:"/page_2",hash:"#menu-Part_2",name:"Part 2"}]},{pageRoute:"components_example",name:"Components example"},{pageRoute:"final",name:"Final"}]}}function ly(){return{data:[{title:"Array",text:"A collection of elements of the same type stored in contiguous memory locations."},{title:"Table",text:"A data structure consisting of rows and columns, where each column contains data of the same type."},{title:"List",text:"A collection of elements of different types, stored in a non-contiguous memory location."},{title:"Dictionary",text:"A collection of key-value pairs, where each key is unique and maps to a value."},{title:"Set",text:"A collection of unique elements, where the order of elements is not guaranteed."},{title:"Stack",text:"A data structure that follows the Last-In-First-Out (LIFO) principle."},{title:"Queue",text:"A data structure that follows the First-In-First-Out (FIFO) principle."},{title:"Tree",text:"A hierarchical data structure consisting of nodes, where each node has a parent and zero or more children."},{title:"Graph",text:"A non-linear data structure consisting of nodes and edges, where each edge connects two nodes."},{title:"Hash Table",text:"A data structure that maps keys to values, using a hash function to compute an index into an array of buckets."}]}}const cy={namespaced:!0,state:{open:!1,menu:ay(),glossary:ly()},getters:{menu:n=>n.menu.routs,glossary:n=>n.glossary.data,menuState:n=>n.open,curentPage:n=>e=>n.menu.routs.findIndex(t=>t.pageRoute===e)},mutations:{toggleMenu(n){n.open=!n.open}},actions:{toggleMenu({commit:n}){n("toggleMenu")}}};function uy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Z_={};(function(n){(function(e,t){for(var i in t)e[i]=t[i]})(n,function(e){var t={};function i(r){if(t[r])return t[r].exports;var s=t[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}return i.m=e,i.c=t,i.oe=function(r){throw r},i.p="",i(i.s=1)}([function(e,t){var i={};i.UTILS={},i.debug={isActive:!0},i.SCORM={version:null,handleCompletionStatus:!0,handleExitMode:!0,API:{handle:null,isFound:!1},connection:{isActive:!1},data:{completionStatus:null,exitStatus:null},debug:{}},i.SCORM.isAvailable=function(){return!0},i.SCORM.API.find=function(r){for(var s=null,o=0,a=500,l="SCORM.API.find",c=i.UTILS.trace,u=i.SCORM;!r.API&&!r.API_1484_11&&r.parent&&r.parent!=r&&o<=a;)o++,r=r.parent;if(u.version)switch(u.version){case"2004":r.API_1484_11?s=r.API_1484_11:c(l+": SCORM version 2004 was specified by user, but API_1484_11 cannot be found.");break;case"1.2":r.API?s=r.API:c(l+": SCORM version 1.2 was specified by user, but API cannot be found.");break}else r.API_1484_11?(u.version="2004",s=r.API_1484_11):r.API&&(u.version="1.2",s=r.API);return s?(c(l+": API found. Version: "+u.version),c("API: "+s)):c(l+`: Error finding API. 
Find attempts: `+o+`. 
Find attempt limit: `+a),s},i.SCORM.API.get=function(){var r=null,s=window,o=i.SCORM,a=o.API.find,l=i.UTILS.trace;return r=a(s),!r&&s.parent&&s.parent!=s&&(r=a(s.parent)),!r&&s.top&&s.top.opener&&(r=a(s.top.opener)),!r&&s.top&&s.top.opener&&s.top.opener.document&&(r=a(s.top.opener.document)),r?o.API.isFound=!0:l("API.get failed: Can't find the API!"),r},i.SCORM.API.getHandle=function(){var r=i.SCORM.API;return!r.handle&&!r.isFound&&(r.handle=r.get()),r.handle},i.SCORM.connection.initialize=function(){var r=!1,s=i.SCORM,o=s.data.completionStatus,a=i.UTILS.trace,l=i.UTILS.StringToBoolean,c=s.debug,u="SCORM.connection.initialize ";if(a("connection.initialize called."),s.connection.isActive)a(u+"aborted: Connection already active.");else{var f=s.API.getHandle(),h=0;if(f){switch(s.version){case"1.2":r=l(f.LMSInitialize(""));break;case"2004":r=l(f.Initialize(""));break}if(r)if(h=c.getCode(),h!==null&&h===0){if(s.connection.isActive=!0,s.handleCompletionStatus&&(o=s.status("get"),o)){switch(o){case"not attempted":s.status("set","incomplete");break;case"unknown":s.status("set","incomplete");break}s.save()}}else r=!1,a(u+`failed. 
Error code: `+h+` 
Error info: `+c.getInfo(h));else h=c.getCode(),a(h!==null&&h!==0?u+`failed. 
Error code: `+h+` 
Error info: `+c.getInfo(h):u+"failed: No response from server.")}else a(u+"failed: API is null.")}return r},i.SCORM.connection.terminate=function(){var r=!1,s=i.SCORM,o=s.data.exitStatus,a=s.data.completionStatus,l=i.UTILS.trace,c=i.UTILS.StringToBoolean,u=s.debug,f="SCORM.connection.terminate ";if(s.connection.isActive){var h=s.API.getHandle(),d=0;if(h){if(s.handleExitMode&&!o)if(a!=="completed"&&a!=="passed")switch(s.version){case"1.2":r=s.set("cmi.core.exit","suspend");break;case"2004":r=s.set("cmi.exit","suspend");break}else switch(s.version){case"1.2":r=s.set("cmi.core.exit","logout");break;case"2004":r=s.set("cmi.exit","normal");break}if(r=s.save(),r){switch(s.version){case"1.2":r=c(h.LMSFinish(""));break;case"2004":r=c(h.Terminate(""));break}r?s.connection.isActive=!1:(d=u.getCode(),l(f+`failed. 
Error code: `+d+` 
Error info: `+u.getInfo(d)))}}else l(f+"failed: API is null.")}else l(f+"aborted: Connection already terminated.");return r},i.SCORM.data.get=function(r){var s=null,o=i.SCORM,a=i.UTILS.trace,l=o.debug,c="SCORM.data.get("+r+") ";if(o.connection.isActive){var u=o.API.getHandle(),f=0;if(u){switch(o.version){case"1.2":s=u.LMSGetValue(r);break;case"2004":s=u.GetValue(r);break}if(f=l.getCode(),s!==""||f===0)switch(r){case"cmi.core.lesson_status":case"cmi.completion_status":o.data.completionStatus=s;break;case"cmi.core.exit":case"cmi.exit":o.data.exitStatus=s;break}else a(c+`failed. 
Error code: `+f+`
Error info: `+l.getInfo(f))}else a(c+"failed: API is null.")}else a(c+"failed: API connection is inactive.");return a(c+" value: "+s),String(s)},i.SCORM.data.set=function(r,s){var o=!1,a=i.SCORM,l=i.UTILS.trace,c=i.UTILS.StringToBoolean,u=a.debug,f="SCORM.data.set("+r+") ";if(a.connection.isActive){var h=a.API.getHandle(),d=0;if(h){switch(a.version){case"1.2":o=c(h.LMSSetValue(r,s));break;case"2004":o=c(h.SetValue(r,s));break}o?(r==="cmi.core.lesson_status"||r==="cmi.completion_status")&&(a.data.completionStatus=s):(d=u.getCode(),l(f+`failed. 
Error code: `+d+`. 
Error info: `+u.getInfo(d)))}else l(f+"failed: API is null.")}else l(f+"failed: API connection is inactive.");return o},i.SCORM.data.save=function(){var r=!1,s=i.SCORM,o=i.UTILS.trace,a=i.UTILS.StringToBoolean,l="SCORM.data.save failed";if(s.connection.isActive){var c=s.API.getHandle();if(c)switch(s.version){case"1.2":r=a(c.LMSCommit(""));break;case"2004":r=a(c.Commit(""));break}else o(l+": API is null.")}else o(l+": API connection is inactive.");return r},i.SCORM.status=function(r,s){var o=!1,a=i.SCORM,l=i.UTILS.trace,c="SCORM.getStatus failed",u="";if(r!==null){switch(a.version){case"1.2":u="cmi.core.lesson_status";break;case"2004":u="cmi.completion_status";break}switch(r){case"get":o=a.data.get(u);break;case"set":s!==null?o=a.data.set(u,s):(o=!1,l(c+": status was not specified."));break;default:o=!1,l(c+": no valid action was specified.")}}else l(c+": action was not specified.");return o},i.SCORM.debug.getCode=function(){var r=i.SCORM,s=r.API.getHandle(),o=i.UTILS.trace,a=0;if(s)switch(r.version){case"1.2":a=parseInt(s.LMSGetLastError(),10);break;case"2004":a=parseInt(s.GetLastError(),10);break}else o("SCORM.debug.getCode failed: API is null.");return a},i.SCORM.debug.getInfo=function(r){var s=i.SCORM,o=s.API.getHandle(),a=i.UTILS.trace,l="";if(o)switch(s.version){case"1.2":l=o.LMSGetErrorString(r.toString());break;case"2004":l=o.GetErrorString(r.toString());break}else a("SCORM.debug.getInfo failed: API is null.");return String(l)},i.SCORM.debug.getDiagnosticInfo=function(r){var s=i.SCORM,o=s.API.getHandle(),a=i.UTILS.trace,l="";if(o)switch(s.version){case"1.2":l=o.LMSGetDiagnostic(r);break;case"2004":l=o.GetDiagnostic(r);break}else a("SCORM.debug.getDiagnosticInfo failed: API is null.");return String(l)},i.SCORM.init=i.SCORM.connection.initialize,i.SCORM.get=i.SCORM.data.get,i.SCORM.set=i.SCORM.data.set,i.SCORM.save=i.SCORM.data.save,i.SCORM.quit=i.SCORM.connection.terminate,i.UTILS.StringToBoolean=function(r){var s=typeof r;switch(s){case"object":case"string":return/(true|1)/i.test(r);case"number":return!!r;case"boolean":return r;case"undefined":return null;default:return!1}},i.UTILS.trace=function(r){i.debug.isActive&&window.console&&window.console.log&&window.console.log(r)},e.exports=i},function(e,t,i){e.exports=i(0)}]))})(Z_);const mf=uy(Z_),fy={"cmi.location":"","cmi.progress_measure":0},oc=()=>JSON.parse(localStorage.getItem("scorm-mock-data")),co={Initialize(){const n=oc();return localStorage.setItem("scorm-mock-data",JSON.stringify({...fy,...n||{}})),"true"},GetValue(n){const e=oc();return(e==null?void 0:e[n])||""},SetValue(n,e){const t=oc();t&&(t[n]=e,localStorage.setItem("scorm-mock-data",JSON.stringify(t)))}},hy=[{completion_status:"incomplete",success_status:"unknown",progress_measure:"0.0",scaled_passing_score:"0.8",min:"0",max:"100",raw:"0",scaled:"0",credit:"credit"}],Zn=[{id:"Total",score:{raw:"0",max:"100",min:"0",scaled:"0"},progress_measure:"0.0",success_status:"unknown",completion_status:"incomplete",description:"Genera objectiv"}];mf.debug.isActive=!1;mf.SCORM.version="2004";class dy{constructor(){this.SCORM=mf.SCORM}initialize(){this.SCORM.init(),this.SCORM.get("cmi.entry")==="resume"?console.log("The course has total objectives."):(this.creareTotalObjectives(hy),this.SCORM.set("cmi.score.raw",0)||console.error("Error setting total objective"),console.log("Now course have total objectives.")),this.SCORM.get("cmi.objectives._count")&&parseInt(this.SCORM.get("cmi.objectives._count"))>0?console.log("The course has objectives."):(this.creareObjectives(Zn),this.SCORM.set("cmi.score.raw",0)||console.error("Error setting objective"),console.log("Now course have objectives.")),this.SCORM.save(),co.Initialize()}terminate(){this.SCORM.quit(),console.log("terminate")}getLocation(){this.SCORM.get("cmi.location")!==""||console.log("Location not available."),console.log("getLocation")}setLocation(){const e=window.location.href,t=this.SCORM.get("cmi.location");t===""?this.SCORM.set("cmi.location",e):this.SCORM.get("cmi.location")!==e?this.SCORM.set("cmi.location",e):console.log("Location already exists: "+t),co.SetValue("cmi.location",this.SCORM.get("cmi.location")),console.log("setLocation")}getLastPage(){const e=this.SCORM.get("cmi.location"),t=e.split("/").slice(-1).join();return e==null||e=="null"||t==="index.html"||Number.isNaN(t)?(console.log("route empty"),"/"):"/"+t}creareTotalObjectives(e){console.log(e,"Цели"),e.forEach((t,i)=>{this.SCORM.set("cmi.completion_status",t.completion_status),this.SCORM.set("cmi.success_status",t.success_status),this.SCORM.set("cmi.progress_measure",t.progress_measure),this.SCORM.set("cmi.scaled_passing_score",t.scaled_passing_score),this.SCORM.set("cmi.score.min",t.min),this.SCORM.set("cmi.score.max",t.max),this.SCORM.set("cmi.score.raw",t.raw),this.SCORM.set("cmi.score.scaled",t.scaled),this.SCORM.set("cmi.location",window.location.toString()),this.SCORM.set("cmi.credit",t.credit)}),console.log(this.SCORM.get("cmi.completion_status")+" objective")}creareObjectives(e){console.log(e,"Цели"),e.forEach((t,i)=>{this.SCORM.set(`cmi.objectives.${i}.id`,t.id),this.SCORM.set(`cmi.objectives.${i}.score.raw`,t.score.raw),this.SCORM.set(`cmi.objectives.${i}.score.min`,t.score.min),this.SCORM.set(`cmi.objectives.${i}.score.max`,t.score.max),this.SCORM.set(`cmi.objectives.${i}.score.scaled`,t.score.scaled),this.SCORM.set(`cmi.objectives.${i}.success_status`,t.success_status),this.SCORM.set(`cmi.objectives.${i}.completion_status`,t.completion_status),this.SCORM.set(`cmi.objectives.${i}.description`,t.description),this.SCORM.set(`cmi.objectives.${i}.progress_measure`,t.progress_measure)}),console.log(this.SCORM.get("cmi.completion_status")+" objective")}saveData(e){console.log(e,"save");let t=JSON.stringify(e);t!==void 0&&typeof t=="string"&&t.length>0&&(this.SCORM.set("cmi.suspend_data",t),this.SCORM.save()),console.log(this.SCORM.get("cmi.suspend_data"),"--Scorm suspend")}getSaveData(){return console.log(this.SCORM.get("cmi.suspend_data"),"suspend_data on start"),this.SCORM.get("cmi.suspend_data")!==""&&this.SCORM.get("cmi.suspend_data")!=="null"?(console.log("get Scorm"),JSON.parse(this.SCORM.get("cmi.suspend_data"))):co.GetValue("cmi.suspend_data")!==""&&co.GetValue("cmi.suspend_data")!=="null"?(console.log("get ScormMock"),JSON.parse(co.GetValue("cmi.suspend_data"))):(console.log("get empty state"),{})}checkObjectivs(e){console.log(e,"checkData");let t=0,i=parseInt(this.SCORM.get("cmi.objectives._count")),r;i==null||Number.isNaN(i)?r=Zn.length:r=i;for(var s=0;s<r;s++)e.forEach(o=>{if(o.id===this.SCORM.get(`cmi.objectives.${s}.id`)){let a=parseInt(this.SCORM.get(`cmi.objectives.${s}.score.min`));if(console.log(this.SCORM.get(`cmi.objectives.${s}.score.min`),"--scorm min"),console.log(typeof this.SCORM.get(`cmi.objectives.${s}.score.min`),"--scorm min type"),console.log(a,"--min"),console.log(o.score,"--item.score"),o.score>=a){console.log("<< ACEPT >>");let l=o.score/Zn[s].score.max;this.SCORM.set(`cmi.objectives.${s}.score.min`,Zn[s].score.min.toString()),this.SCORM.set(`cmi.objectives.${s}.score.max`,Zn[s].score.max.toString()),this.SCORM.set(`cmi.objectives.${s}.score.raw`,o.score.toString()),this.SCORM.set(`cmi.objectives.${s}.score.scaled`,l.toString()),this.SCORM.set(`cmi.objectives.${s}.success_status`,"passed"),this.SCORM.set(`cmi.objectives.${s}.completion_status`,"completed"),this.SCORM.set(`cmi.objectives.${s}.progress_measure`,"1.0"),console.log(this.SCORM.get(`cmi.objectives.${s}.score.raw`),"-- raw acept")}else{console.log("<< DENIDED >>");let l=o.score/Zn[s].score.max;this.SCORM.set(`cmi.objectives.${s}.score.min`,Zn[s].score.min.toString()),this.SCORM.set(`cmi.objectives.${s}.score.max`,Zn[s].score.max.toString()),this.SCORM.set(`cmi.objectives.${s}.score.raw`,o.score.toString()),this.SCORM.set(`cmi.objectives.${s}.score.scaled`,l.toString()),this.SCORM.set(`cmi.objectives.${s}.success_status`,"failed"),this.SCORM.set(`cmi.objectives.${s}.completion_status`,"incomplete"),this.SCORM.set(`cmi.objectives.${s}.progress_measure`,"0.0"),console.log(this.SCORM.get(`cmi.objectives.${s}.score.raw`),"-- raw denied")}}else console.log("objective not found in provided data");console.log(o.score),t+=o.score,this.SCORM.save()}),console.log(this.SCORM.get("cmi.objectives.0.score.raw"));return this.SCORM.save(),console.log(t),t}setScore(e){const t=this.checkObjectivs(e);console.log(t,"--in API");const i=parseInt(this.SCORM.get("cmi.score.raw")),r=parseInt(this.SCORM.get("cmi.score.min"));t>i?(this.SCORM.set("cmi.score.raw",t.toString()),this.checkTotalObjectivs(t,r)):console.log("Текущее значение больше представленного"),this.SCORM.save()}checkTotalObjectivs(e,t){console.log("check score"),e>=t&&(this.SCORM.set("cmi.score.scaled","1"),this.SCORM.set("cmi.progress_measure","1.0"),this.SCORM.set("cmi.completion_status","completed"),this.SCORM.set("cmi.success_status","passed")),console.log("data checked")}getRestoreObjectivs(){console.log("Check restore Objectives");const e=this.getSaveData();console.log(e,"_RESTORE"),Object.values(e).length>0?e.courceData.objectivs.length>0?Zn.forEach((t,i)=>{if(Number.isNaN(parseInt(this.SCORM.get(`cmi.objectives.${i}.score.min`)))||this.SCORM.get(`cmi.objectives.${i}.score.min`)===""){let r=e.courceData.objectivs[i].score;return console.log("Start restore Objectives"),this.SCORM.set(`cmi.objectives.${i}.id`,t.id),this.SCORM.set(`cmi.objectives.${i}.score.raw`,t.score.raw),this.SCORM.set(`cmi.objectives.${i}.score.min`,t.score.min),this.SCORM.set(`cmi.objectives.${i}.score.max`,t.score.max),this.SCORM.set(`cmi.objectives.${i}.score.scaled`,t.score.scaled),this.SCORM.set(`cmi.objectives.${i}.success_status`,t.success_status),this.SCORM.set(`cmi.objectives.${i}.completion_status`,t.completion_status),this.SCORM.set(`cmi.objectives.${i}.description`,t.description),this.SCORM.set(`cmi.objectives.${i}.progress_measure`,t.progress_measure),r&&(this.checkObjectivs(e.courceData.objectivs),console.log(`Objective: ${i} - restore`)),this.SCORM.save(),!0}else return console.log("Objectives dont need to restore"),!1}):(Zn.forEach((t,i)=>{this.SCORM.set(`cmi.objectives.${i}.id`,t.id),this.SCORM.set(`cmi.objectives.${i}.score.raw`,t.score.raw),this.SCORM.set(`cmi.objectives.${i}.score.min`,t.score.min),this.SCORM.set(`cmi.objectives.${i}.score.max`,t.score.max),this.SCORM.set(`cmi.objectives.${i}.score.scaled`,t.score.scaled),this.SCORM.set(`cmi.objectives.${i}.success_status`,t.success_status),this.SCORM.set(`cmi.objectives.${i}.completion_status`,t.completion_status),this.SCORM.set(`cmi.objectives.${i}.description`,t.description),this.SCORM.set(`cmi.objectives.${i}.progress_measure`,t.progress_measure),console.log(`Objective: ${i} - restore without score`)}),this.SCORM.save(),console.log("Start restore Objectives without score")):console.log("First lanch")}}const py=new dy,my=n=>JSON.parse(JSON.stringify(n)),_y={namespaced:!0,state:{courceData:{pages:[],objectivs:[],variations:{}},start:!1,API:py},getters:{visit:n=>n.courceData.pages,visitTotal:(n,e,t,i)=>i["header/menu"].length,checkVisit:n=>e=>n.courceData.pages.find(t=>t.name===e),visitedAll:(n,e)=>n.courceData.pages.length===e.visitTotal,start:n=>n.start,lastPage:n=>n.API.getLastPage()||n.courceData.lastPage,objectivs:n=>n.courceData.objectivs,checkObjectivs(n){return e=>my(n.courceData.objectivs).some(t=>t.id===e.id)},restorAPIobjectivs:n=>n.API.getRestoreObjectivs(),variations:n=>n.courceData.variations,checkVariations:n=>e=>n.courceData.variations.some(t=>t.name===e.name)},mutations:{addVisitPage(n,e){n.courceData.pages.push({name:e})},getStart(n){if(n.start=!0,n.API.initialize(),Object.values(n.API.getSaveData()).length>0)return console.log("now"),n.courceData=n.API.getSaveData().courceData},getExit(n){n.API.saveData({courceData:n.courceData})},setLocation(n){n.courceData.lastPage=n.API.setLocation()},saveState(n){n.API.saveData({courceData:n.courceData})},getScore(n,e){n.courceData.objectivs.push({id:e.id,score:e.score}),n.API.setScore(n.courceData.objectivs),n.API.saveData({courceData:n.courceData})},setVariations(n,e){n.courceData.variations[e.name]=e.value}},actions:{addVisitPage({commit:n,getters:e},t){!e.checkVisit(t)&&t!=null&&n("addVisitPage",t)},getStart({commit:n}){n("getStart")},getExit({commit:n}){n("getExit")},checkCompleted({commit:n,getters:e}){e.visitedAll&&n("checkCompleted")},setLocation({commit:n}){n("setLocation")},saveState({commit:n}){n("saveState")},getScore({commit:n,getters:e},t){e.checkObjectivs(t)||n("getScore",t)},setVariations({commit:n},e){n("setVariations",e)}}},gy={modules:{header:cy,status:_y},strict:!1},vy=$M(gy),xy={install:n=>{n.config.globalProperties.$gsap=pf}},My={methods:{...qr("header",["toggleMenu"])},computed:{...li("header",["menu","menuState"]),getLinksAnimate(){return n=>{if(this.menuState)return{opacity:"1",transform:"translateY(0)","transition-delay":.15+Number(n*.1)+"s"}}},getActivTitleClass(){return n=>({active:this.menu[n].pageRoute===this.$route.name})},getActivSubtitleClass(){return(n,e)=>({active:this.menu[n].scrollPage[e].hash===this.$route.hash})}}},Sy={class:"menu__nav-content"},by={key:0},yy={class:"menu__nav-submenu"};function Ey(n,e,t,i,r,s){const o=Hn("router-link");return Fe(),He("div",null,[Le("ul",Sy,[(Fe(!0),He(Mt,null,Ti(n.menu,(a,l)=>(Fe(),He("li",{key:a.getRoutParams,class:Jt(["menu__nav-title",s.getActivTitleClass(l)]),style:ml(s.getLinksAnimate(l))},[nt(o,{onClick:n.toggleMenu,to:{name:a.pageRoute}},{default:mn(()=>[Le("h4",null,ht(a.name),1)]),_:2},1032,["onClick","to"]),a.scrollPage?(Fe(),He("div",by,[Le("ul",yy,[(Fe(!0),He(Mt,null,Ti(a.scrollPage,(c,u)=>(Fe(),He("li",{class:Jt(["menu__nav-subtitle",s.getActivSubtitleClass(l,u)]),key:c.name},[nt(o,{onClick:n.toggleMenu,to:{name:a.pageRoute,hash:c.hash}},{default:mn(()=>[Le("h3",null,ht(c.name),1)]),_:2},1032,["onClick","to"])],2))),128))])])):En("",!0)],6))),128))])])}const ha=xn(My,[["render",Ey]]);const Ty={data(){return{glossaryData:[]}},methods:{createSlice(){let n=[];n=this.glossary.map(e=>e.title.slice(0,1)),n=n.filter((e,t)=>n.indexOf(e)===t).sort(),n.forEach((e,t)=>{let i=new Object;i.liter=e,i.description=[],this.glossaryData.push(i),this.glossary.forEach((r,s)=>{r.title.slice(0,1)===e&&i.description.push(r)})})},scrollTo(n){let e=this.$refs.scroll.$el,t=this.$refs.liter[n];this.$gsap.timeline({defaults:{ease:"Sine.easeOut"}}).to(e,{scrollTop:t.offsetTop,duration:1})}},mounted(){this.createSlice()},computed:{...li("header",["glossary"])}},Ay={class:"glossary__link_container"},wy=["onClick"],Ry={class:"glossary__contant"},Cy={class:"glossary__title"},Py={class:"glossary__text"};function Ly(n,e,t,i,r,s){const o=Hn("perfect-scrollbar");return Fe(),He("div",null,[Le("div",Ay,[(Fe(!0),He(Mt,null,Ti(r.glossaryData,(a,l)=>(Fe(),He("div",{key:a.description,onClick:c=>s.scrollTo(l),class:"glossary__link"},[Le("span",null,ht(a.liter),1)],8,wy))),128))]),nt(o,{class:"glossary__scroll",ref:"scroll"},{default:mn(()=>[(Fe(!0),He(Mt,null,Ti(r.glossaryData,a=>(Fe(),He("div",{key:a.litter},[Le("h2",{class:"glossary__liter",ref_for:!0,ref:"liter"},ht(a.liter),513),Le("ul",Ry,[(Fe(!0),He(Mt,null,Ti(a.description,l=>(Fe(),He("li",{key:l.title},[Le("h3",Cy,ht(l.title),1),Le("p",Py,ht(l.text),1)]))),128))])]))),128))]),_:1},512)])}const qh=xn(Ty,[["render",Ly],["__scopeId","data-v-02396305"]]),Dy={components:{Menu:ha,Glossary:qh},data(){return{navButtons:[{name:"Навигация",active:!0,component:go(ha)},{name:"Глоссарий",active:!1,component:go(qh)}],activeComponent:go(ha)}},methods:{...qr("header",["toggleMenu"]),showNav(n,e){this.navButtons.forEach((t,i)=>{e===i?t.active=!0:t.active=!1}),this.activeComponent=n.component}},watch:{menuState(){this.menuState?this.navButtons.forEach((n,e)=>{e===0?n.active=!0:n.active=!1}):this.activeComponent=go(ha)}},computed:{...li("status",["visitTotal","visit","objectivs"]),...li("header",["menuState"]),getMenuClass(){return{"menu__nav-open":this.menuState}},getHeaderClass(){return{header__open:this.menuState}},getBurgerClass(){return{header__button_open:this.menuState}},gatMenuContant(){return{menu__contant_open:this.menuState}},addMenuButtonClass(){return n=>({"menu__nav-btn--open":this.navButtons[n].active})}}},Iy={class:"header__container"},Oy=Le("span",null,null,-1),Uy=Le("span",null,null,-1),Ny=Le("span",null,null,-1),Fy=Le("span",null,null,-1),By=[Oy,Uy,Ny,Fy],ky={style:{position:"relative","z-index":"99"}},zy={class:"menu__contant_buttons"},Hy=["onClick"],Gy=Le("hr",{class:"hr"},null,-1),Vy={class:"menu__container"};function Wy(n,e,t,i,r,s){return Fe(),He("div",null,[Le("div",{class:Jt(["header",s.getHeaderClass])},[Le("div",Iy,[Le("button",{onClick:e[0]||(e[0]=o=>n.toggleMenu(n.$route.name)),class:Jt(["header__button header__button_burger",s.getBurgerClass])},By,2),Le("p",ky,ht(n.objectivs)+" "+ht(n.visit.length),1)])],2),Le("div",{class:Jt(["menu__nav",s.getMenuClass])},[Le("div",{class:Jt(["menu__contant",s.gatMenuContant])},[Le("ul",zy,[(Fe(!0),He(Mt,null,Ti(r.navButtons,(o,a)=>(Fe(),He("li",{class:Jt(["menu__nav-btn",s.addMenuButtonClass(a)]),key:o.name,onClick:l=>s.showNav(o,a)},[Le("span",null,ht(o.name),1)],10,Hy))),128))]),Gy,Le("div",Vy,[nt(Tl,{mode:"out-in","enter-active-class":"animate__animated animate__faster animate__fadeIn","leave-active-class":"animate__animated animate__faster animate__fadeOutRight"},{default:mn(()=>[r.activeComponent?(Fe(),Zo(um(r.activeComponent),{key:0})):En("",!0)]),_:1})])],2)],2)])}const qy=xn(Dy,[["render",Wy]]);const Xy={computed:{...li("header",["menu"]),getRoute(){return this.$route.name!==void 0?this.menu.findIndex(n=>n.pageRoute===this.$route.name):1},goNext(){if(this.getRoute+1<this.menu.length)return this.menu[this.getRoute+1].pageRoute},goPrev(){if(this.getRoute-1>=0)return this.menu[this.getRoute-1].pageRoute}}},Yy={class:"navigation-buttons"};function jy(n,e,t,i,r,s){const o=Hn("router-link");return Fe(),He("div",Yy,[nt(o,{class:"btn",to:{name:s.goPrev}},{default:mn(()=>[Ka("Prev")]),_:1},8,["to"]),hm(n.$slots,"default"),nt(o,{class:"btn",to:{name:s.goNext}},{default:mn(()=>[Ka("Next")]),_:1},8,["to"])])}const $y=xn(Xy,[["render",jy]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _f="155",Qr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ky=0,Xh=1,Zy=2,J_=1,Jy=2,xi=3,ar=0,rn=1,ni=2,er=0,Us=1,Yh=2,jh=3,$h=4,Qy=5,xs=100,eE=101,tE=102,Kh=103,Zh=104,nE=200,iE=201,rE=202,sE=203,Q_=204,eg=205,oE=206,aE=207,lE=208,cE=209,uE=210,fE=0,hE=1,dE=2,vu=3,pE=4,mE=5,_E=6,gE=7,tg=0,vE=1,xE=2,tr=0,ME=1,SE=2,bE=3,yE=4,EE=5,ng=300,Xs=301,Ys=302,xu=303,Mu=304,Ll=306,Su=1e3,Gn=1001,bu=1002,$t=1003,Jh=1004,ac=1005,An=1006,TE=1007,Yo=1008,nr=1009,AE=1010,wE=1011,gf=1012,ig=1013,Yi=1014,ji=1015,jo=1016,rg=1017,sg=1018,Ur=1020,RE=1021,Vn=1023,CE=1024,PE=1025,Nr=1026,js=1027,LE=1028,og=1029,DE=1030,ag=1031,lg=1033,lc=33776,cc=33777,uc=33778,fc=33779,Qh=35840,ed=35841,td=35842,nd=35843,IE=36196,id=37492,rd=37496,sd=37808,od=37809,ad=37810,ld=37811,cd=37812,ud=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,_d=37819,gd=37820,vd=37821,hc=36492,OE=36283,xd=36284,Md=36285,Sd=36286,cg=3e3,Fr=3001,UE=3200,NE=3201,ug=0,FE=1,Br="",qe="srgb",ui="srgb-linear",fg="display-p3",dc=7680,BE=519,kE=512,zE=513,HE=514,GE=515,VE=516,WE=517,qE=518,XE=519,bd=35044,yd="300 es",yu=1035,yi=2e3,al=2001;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ed=1234567;const Po=Math.PI/180,$o=180/Math.PI;function eo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function vf(n,e){return(n%e+e)%e}function YE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function jE(n,e,t){return n!==e?(t-n)/(e-n):0}function Lo(n,e,t){return(1-t)*n+t*e}function $E(n,e,t,i){return Lo(n,e,1-Math.exp(-t*i))}function KE(n,e=1){return e-Math.abs(vf(n,e*2)-e)}function ZE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function JE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function QE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function eT(n,e){return n+Math.random()*(e-n)}function tT(n){return n*(.5-Math.random())}function nT(n){n!==void 0&&(Ed=n);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iT(n){return n*Po}function rT(n){return n*$o}function Eu(n){return(n&n-1)===0&&n!==0}function sT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ll(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oT(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ms(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const aT={DEG2RAD:Po,RAD2DEG:$o,generateUUID:eo,clamp:Bt,euclideanModulo:vf,mapLinear:YE,inverseLerp:jE,lerp:Lo,damp:$E,pingpong:KE,smoothstep:ZE,smootherstep:JE,randInt:QE,randFloat:eT,randFloatSpread:tT,seededRandom:nT,degToRad:iT,radToDeg:rT,isPowerOfTwo:Eu,ceilPowerOfTwo:sT,floorPowerOfTwo:ll,setQuaternionFromProperEuler:oT,normalize:Yt,denormalize:Ms};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],x=r[1],v=r[4],y=r[7],E=r[2],C=r[5],A=r[8];return s[0]=o*_+a*x+l*E,s[3]=o*m+a*v+l*C,s[6]=o*p+a*y+l*A,s[1]=c*_+u*x+f*E,s[4]=c*m+u*v+f*C,s[7]=c*p+u*y+f*A,s[2]=h*_+d*x+g*E,s[5]=h*m+d*v+g*C,s[8]=h*p+d*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new Ye;function hg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Td={};function Do(n){n in Td||(Td[n]=!0,console.warn(n))}function Ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const lT=new Ye().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cT=new Ye().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function uT(n){return n.convertSRGBToLinear().applyMatrix3(cT)}function fT(n){return n.applyMatrix3(lT).convertLinearToSRGB()}const hT={[ui]:n=>n,[qe]:n=>n.convertSRGBToLinear(),[fg]:uT},dT={[ui]:n=>n,[qe]:n=>n.convertLinearToSRGB(),[fg]:fT},On={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return ui},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=hT[e],r=dT[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let ts;class dg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=cl("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ns(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ns(t[i]/255)*255):t[i]=Ns(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pT=0;class pg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=eo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_c(r[o].image)):s.push(_c(r[o]))}else s=_c(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function _c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mT=0;class gn extends Yr{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,i=Gn,r=Gn,s=An,o=Yo,a=Vn,l=nr,c=gn.DEFAULT_ANISOTROPY,u=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=eo(),this.name="",this.source=new pg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fr?qe:Br),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Su:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case bu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Su:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case bu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Fr:cg}set encoding(e){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fr?qe:Br}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=ng;gn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,E=(p+1)/2,C=(u+h)/4,A=(f+_)/4,L=(g+m)/4;return v>y&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=A/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=L/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=L/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _T extends Yr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fr?qe:Br),this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:An,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends _T{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mg extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gT extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),C=Math.atan2(E,p*x);m=Math.sin(m*C)/E,a=Math.sin(a*C)/E}const y=a*x;if(l=l*m+h*y,c=c*m+d*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new F,Ad=new Gr;class Qo{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox),ns.applyMatrix4(e.matrixWorld),this.union(ns);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)pi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(pi)}else r.boundingBox===null&&r.computeBoundingBox(),ns.copy(r.boundingBox),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),da.subVectors(this.max,uo),is.subVectors(e.a,uo),rs.subVectors(e.b,uo),ss.subVectors(e.c,uo),Fi.subVectors(rs,is),Bi.subVectors(ss,rs),gr.subVectors(is,ss);let t=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-gr.z,gr.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,gr.z,0,-gr.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-gr.y,gr.x,0];return!vc(t,is,rs,ss,da)||(t=[1,0,0,0,1,0,0,0,1],!vc(t,is,rs,ss,da))?!1:(pa.crossVectors(Fi,Bi),t=[pa.x,pa.y,pa.z],vc(t,is,rs,ss,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new F,new F,new F,new F,new F,new F,new F,new F],pi=new F,ns=new Qo,is=new F,rs=new F,ss=new F,Fi=new F,Bi=new F,gr=new F,uo=new F,da=new F,pa=new F,vr=new F;function vc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vr.fromArray(n,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const vT=new Qo,fo=new F,xc=new F;class xf{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(xc)),this.expandByPoint(fo.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new F,Mc=new F,ma=new F,ki=new F,Sc=new F,_a=new F,bc=new F;class _g{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mc.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Mc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ma),a=ki.dot(this.direction),l=-ki.dot(ma),c=ki.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Mc).addScaledVector(ma,h),d}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,r,s){Sc.subVectors(t,e),_a.subVectors(i,e),bc.crossVectors(Sc,_a);let o=this.direction.dot(bc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(_a.crossVectors(ki,_a));if(l<0)return null;const c=a*this.direction.dot(Sc.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(bc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xT,e,MT)}lookAt(e,t,i){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),zi.crossVectors(i,un),zi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),zi.crossVectors(i,un)),zi.normalize(),ga.crossVectors(un,zi),r[0]=zi.x,r[4]=ga.x,r[8]=un.x,r[1]=zi.y,r[5]=ga.y,r[9]=un.y,r[2]=zi.z,r[6]=ga.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],v=i[7],y=i[11],E=i[15],C=r[0],A=r[4],L=r[8],M=r[12],w=r[1],Y=r[5],z=r[9],N=r[13],G=r[2],H=r[6],Q=r[10],B=r[14],q=r[3],oe=r[7],ce=r[11],V=r[15];return s[0]=o*C+a*w+l*G+c*q,s[4]=o*A+a*Y+l*H+c*oe,s[8]=o*L+a*z+l*Q+c*ce,s[12]=o*M+a*N+l*B+c*V,s[1]=u*C+f*w+h*G+d*q,s[5]=u*A+f*Y+h*H+d*oe,s[9]=u*L+f*z+h*Q+d*ce,s[13]=u*M+f*N+h*B+d*V,s[2]=g*C+_*w+m*G+p*q,s[6]=g*A+_*Y+m*H+p*oe,s[10]=g*L+_*z+m*Q+p*ce,s[14]=g*M+_*N+m*B+p*V,s[3]=x*C+v*w+y*G+E*q,s[7]=x*A+v*Y+y*H+E*oe,s[11]=x*L+v*z+y*Q+E*ce,s[15]=x*M+v*N+y*B+E*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,y=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,E=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,C=t*x+i*v+r*y+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=x*A,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*A,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*A,e[4]=v*A,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*A,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*A,e[8]=y*A,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*A,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*A,e[12]=E*A,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,x=l*c,v=l*u,y=l*f,E=i.x,C=i.y,A=i.z;return r[0]=(1-(_+p))*E,r[1]=(d+y)*E,r[2]=(g-v)*E,r[3]=0,r[4]=(d-y)*C,r[5]=(1-(h+p))*C,r[6]=(m+x)*C,r[7]=0,r[8]=(g+v)*A,r[9]=(m-x)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,u=1/o,f=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,t.setFromRotationMatrix(Un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=yi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===yi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===al)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=yi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===yi)g=(o+s)*f,_=-2*f;else if(a===al)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const os=new F,Un=new wt,xT=new F(0,0,0),MT=new F(1,1,1),zi=new F,ga=new F,un=new F,wd=new wt,Rd=new Gr;class Dl{constructor(e=0,t=0,i=0,r=Dl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dl.DEFAULT_ORDER="XYZ";class gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ST=0;const Cd=new F,as=new Gr,_i=new wt,va=new F,ho=new F,bT=new F,yT=new Gr,Pd=new F(1,0,0),Ld=new F(0,1,0),Dd=new F(0,0,1),ET={type:"added"},Id={type:"removed"};class sn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new F,t=new Dl,i=new Gr,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ye}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Pd,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Cd.copy(e).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pd,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?va.copy(e):va.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(ho,va,this.up):_i.lookAt(va,ho,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),as.setFromRotationMatrix(_i),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ET)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Id)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Id)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,bT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,yT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new F(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new F,gi=new F,yc=new F,vi=new F,ls=new F,cs=new F,Od=new F,Ec=new F,Tc=new F,Ac=new F;let xa=!1;class kn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Nn.subVectors(e,t),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Nn.subVectors(r,t),gi.subVectors(i,t),yc.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(gi),l=Nn.dot(yc),c=gi.dot(gi),u=gi.dot(yc),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vi),vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,i,r,s,o,a,l){return xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xa=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,vi),l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l}static isFrontFacing(e,t,i,r){return Nn.subVectors(i,t),gi.subVectors(e,t),Nn.cross(gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Nn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xa=!0),kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),Ec.subVectors(e,i);const l=ls.dot(Ec),c=cs.dot(Ec);if(l<=0&&c<=0)return t.copy(i);Tc.subVectors(e,r);const u=ls.dot(Tc),f=cs.dot(Tc);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ls,o);Ac.subVectors(e,s);const d=ls.dot(Ac),g=cs.dot(Ac);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(cs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Od.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Od,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let TT=0;class ea extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Us,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Q_,this.blendDst=eg,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=BE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dc,this.stencilZFail=dc,this.stencilZPass=dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function wc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,On.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=On.workingColorSpace){return this.r=e,this.g=t,this.b=i,On.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=On.workingColorSpace){if(e=vf(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=wc(o,s,e+1/3),this.g=wc(o,s,e),this.b=wc(o,s,e-1/3)}return On.toWorkingColorSpace(this,r),this}setStyle(e,t=qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){const i=vg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return On.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Bt(Ft.r*255,0,255))*65536+Math.round(Bt(Ft.g*255,0,255))*256+Math.round(Bt(Ft.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=On.workingColorSpace){On.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=On.workingColorSpace){return On.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=qe){On.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fn),Fn.h+=e,Fn.s+=t,Fn.l+=i,this.setHSL(Fn.h,Fn.s,Fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Ma);const i=Lo(Fn.h,Ma.h,t),r=Lo(Fn.s,Ma.s,t),s=Lo(Fn.l,Ma.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new it;it.NAMES=vg;class xg extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new F,Sa=new ze;class oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bd,this.updateRange={offset:0,count:-1},this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ms(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Mg extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sg extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kr extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let AT=0;const bn=new wt,Rc=new sn,us=new F,fn=new Qo,po=new Qo,Lt=new F;class jr extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hg(e)?Sg:Mg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];po.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(fn.min,po.min),fn.expandByPoint(Lt),Lt.addVectors(fn.max,po.max),fn.expandByPoint(Lt)):(fn.expandByPoint(po.min),fn.expandByPoint(po.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),Lt.add(us)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new F,u[w]=new F;const f=new F,h=new F,d=new F,g=new ze,_=new ze,m=new ze,p=new F,x=new F;function v(w,Y,z){f.fromArray(r,w*3),h.fromArray(r,Y*3),d.fromArray(r,z*3),g.fromArray(o,w*2),_.fromArray(o,Y*2),m.fromArray(o,z*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(N),x.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(N),c[w].add(p),c[Y].add(p),c[z].add(p),u[w].add(x),u[Y].add(x),u[z].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,Y=y.length;w<Y;++w){const z=y[w],N=z.start,G=z.count;for(let H=N,Q=N+G;H<Q;H+=3)v(i[H+0],i[H+1],i[H+2])}const E=new F,C=new F,A=new F,L=new F;function M(w){A.fromArray(s,w*3),L.copy(A);const Y=c[w];E.copy(Y),E.sub(A.multiplyScalar(A.dot(Y))).normalize(),C.crossVectors(L,Y);const N=C.dot(u[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=N}for(let w=0,Y=y.length;w<Y;++w){const z=y[w],N=z.start,G=z.count;for(let H=N,Q=N+G;H<Q;H+=3)M(i[H+0]),M(i[H+1]),M(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new oi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ud=new wt,xr=new _g,ba=new xf,Nd=new F,fs=new F,hs=new F,ds=new F,Cc=new F,ya=new F,Ea=new ze,Ta=new ze,Aa=new ze,Fd=new F,Bd=new F,kd=new F,wa=new F,Ra=new F;class Ei extends sn{constructor(e=new jr,t=new xg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Cc.fromBufferAttribute(f,e),o?ya.addScaledVector(Cc,u):ya.addScaledVector(Cc.sub(t),u))}t.add(ya)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(ba.containsPoint(xr.origin)===!1&&(xr.intersectSphere(ba,Nd)===null||xr.origin.distanceToSquared(Nd)>(e.far-e.near)**2))&&(Ud.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Ud),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,E=v;y<E;y+=3){const C=a.getX(y),A=a.getX(y+1),L=a.getX(y+2);r=Ca(this,p,e,i,c,u,f,C,A,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Ca(this,o,e,i,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,E=v;y<E;y+=3){const C=y,A=y+1,L=y+2;r=Ca(this,p,e,i,c,u,f,C,A,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,y=m+2;r=Ca(this,o,e,i,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wT(n,e,t,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ar,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ra);return c<t.near||c>t.far?null:{distance:c,point:Ra.clone(),object:n}}function Ca(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,fs),n.getVertexPosition(l,hs),n.getVertexPosition(c,ds);const u=wT(n,e,t,i,fs,hs,ds,wa);if(u){r&&(Ea.fromBufferAttribute(r,a),Ta.fromBufferAttribute(r,l),Aa.fromBufferAttribute(r,c),u.uv=kn.getInterpolation(wa,fs,hs,ds,Ea,Ta,Aa,new ze)),s&&(Ea.fromBufferAttribute(s,a),Ta.fromBufferAttribute(s,l),Aa.fromBufferAttribute(s,c),u.uv1=kn.getInterpolation(wa,fs,hs,ds,Ea,Ta,Aa,new ze),u.uv2=u.uv1),o&&(Fd.fromBufferAttribute(o,a),Bd.fromBufferAttribute(o,l),kd.fromBufferAttribute(o,c),u.normal=kn.getInterpolation(wa,fs,hs,ds,Fd,Bd,kd,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};kn.getNormal(fs,hs,ds,f.normal),u.face=f}return u}class to extends jr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kr(c,3)),this.setAttribute("normal",new kr(u,3)),this.setAttribute("uv",new kr(f,2));function g(_,m,p,x,v,y,E,C,A,L,M){const w=y/A,Y=E/L,z=y/2,N=E/2,G=C/2,H=A+1,Q=L+1;let B=0,q=0;const oe=new F;for(let ce=0;ce<Q;ce++){const V=ce*Y-N;for(let J=0;J<H;J++){const Me=J*w-z;oe[_]=Me*x,oe[m]=V*v,oe[p]=G,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=C>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(J/A),f.push(1-ce/L),B+=1}}for(let ce=0;ce<L;ce++)for(let V=0;V<A;V++){const J=h+V+H*ce,Me=h+V+H*(ce+1),ve=h+(V+1)+H*(ce+1),Se=h+(V+1)+H*ce;l.push(J,Me,Se),l.push(Me,ve,Se),q+=6}a.addGroup(d,q,M),d+=q,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=$s(n[t]);for(const r in i)e[r]=i[r]}return e}function RT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bg(n){return n.getRenderTarget()===null?n.outputColorSpace:ui}const CT={clone:$s,merge:jt};var PT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vr extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PT,this.fragmentShader=LT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=RT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends yg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class DT extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new dn(ps,ms,e,t);r.layers=this.layers,this.add(r);const s=new dn(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new dn(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new dn(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new dn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new dn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Eg extends gn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IT extends Hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fr?qe:Br),this.texture=new Eg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new to(5,5,5),s=new Vr({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:er});s.uniforms.tEquirect.value=t;const o=new Ei(r,s),a=t.minFilter;return t.minFilter===Yo&&(t.minFilter=An),new DT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Pc=new F,OT=new F,UT=new Ye;class Vi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Pc.subVectors(i,t).cross(OT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||UT.getNormalMatrix(e),r=this.coplanarPoint(Pc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new xf,Pa=new F;class Mf{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-d,y-p).normalize(),i[1].setComponents(l+s,h+c,m+d,y+p).normalize(),i[2].setComponents(l+o,h+u,m+g,y+x).normalize(),i[3].setComponents(l-o,h-u,m-g,y-x).normalize(),i[4].setComponents(l-a,h-f,m-_,y-v).normalize(),t===yi)i[5].setComponents(l+a,h+f,m+_,y+v).normalize();else if(t===al)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function NT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;n.bindBuffer(f,c),d.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Sf extends jr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*h-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,y=x+c*(p+1),E=x+1+c*(p+1),C=x+1+c*p;d.push(v,y,C),d.push(y,E,C)}this.setIndex(d),this.setAttribute("position",new kr(g,3)),this.setAttribute("normal",new kr(_,3)),this.setAttribute("uv",new kr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sf(e.width,e.height,e.widthSegments,e.heightSegments)}}var FT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,GT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$T=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oA=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fA="gl_FragColor = linearToOutputTexel( gl_FragColor );",hA=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,EA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,OA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UA=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,BA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GA=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,VA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$A=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,KA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ZA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,JA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,QA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ww=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,s1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:FT,alphahash_pars_fragment:BT,alphamap_fragment:kT,alphamap_pars_fragment:zT,alphatest_fragment:HT,alphatest_pars_fragment:GT,aomap_fragment:VT,aomap_pars_fragment:WT,begin_vertex:qT,beginnormal_vertex:XT,bsdfs:YT,iridescence_fragment:jT,bumpmap_pars_fragment:$T,clipping_planes_fragment:KT,clipping_planes_pars_fragment:ZT,clipping_planes_pars_vertex:JT,clipping_planes_vertex:QT,color_fragment:eA,color_pars_fragment:tA,color_pars_vertex:nA,color_vertex:iA,common:rA,cube_uv_reflection_fragment:sA,defaultnormal_vertex:oA,displacementmap_pars_vertex:aA,displacementmap_vertex:lA,emissivemap_fragment:cA,emissivemap_pars_fragment:uA,colorspace_fragment:fA,colorspace_pars_fragment:hA,envmap_fragment:dA,envmap_common_pars_fragment:pA,envmap_pars_fragment:mA,envmap_pars_vertex:_A,envmap_physical_pars_fragment:RA,envmap_vertex:gA,fog_vertex:vA,fog_pars_vertex:xA,fog_fragment:MA,fog_pars_fragment:SA,gradientmap_pars_fragment:bA,lightmap_fragment:yA,lightmap_pars_fragment:EA,lights_lambert_fragment:TA,lights_lambert_pars_fragment:AA,lights_pars_begin:wA,lights_toon_fragment:CA,lights_toon_pars_fragment:PA,lights_phong_fragment:LA,lights_phong_pars_fragment:DA,lights_physical_fragment:IA,lights_physical_pars_fragment:OA,lights_fragment_begin:UA,lights_fragment_maps:NA,lights_fragment_end:FA,logdepthbuf_fragment:BA,logdepthbuf_pars_fragment:kA,logdepthbuf_pars_vertex:zA,logdepthbuf_vertex:HA,map_fragment:GA,map_pars_fragment:VA,map_particle_fragment:WA,map_particle_pars_fragment:qA,metalnessmap_fragment:XA,metalnessmap_pars_fragment:YA,morphcolor_vertex:jA,morphnormal_vertex:$A,morphtarget_pars_vertex:KA,morphtarget_vertex:ZA,normal_fragment_begin:JA,normal_fragment_maps:QA,normal_pars_fragment:ew,normal_pars_vertex:tw,normal_vertex:nw,normalmap_pars_fragment:iw,clearcoat_normal_fragment_begin:rw,clearcoat_normal_fragment_maps:sw,clearcoat_pars_fragment:ow,iridescence_pars_fragment:aw,opaque_fragment:lw,packing:cw,premultiplied_alpha_fragment:uw,project_vertex:fw,dithering_fragment:hw,dithering_pars_fragment:dw,roughnessmap_fragment:pw,roughnessmap_pars_fragment:mw,shadowmap_pars_fragment:_w,shadowmap_pars_vertex:gw,shadowmap_vertex:vw,shadowmask_pars_fragment:xw,skinbase_vertex:Mw,skinning_pars_vertex:Sw,skinning_vertex:bw,skinnormal_vertex:yw,specularmap_fragment:Ew,specularmap_pars_fragment:Tw,tonemapping_fragment:Aw,tonemapping_pars_fragment:ww,transmission_fragment:Rw,transmission_pars_fragment:Cw,uv_pars_fragment:Pw,uv_pars_vertex:Lw,uv_vertex:Dw,worldpos_vertex:Iw,background_vert:Ow,background_frag:Uw,backgroundCube_vert:Nw,backgroundCube_frag:Fw,cube_vert:Bw,cube_frag:kw,depth_vert:zw,depth_frag:Hw,distanceRGBA_vert:Gw,distanceRGBA_frag:Vw,equirect_vert:Ww,equirect_frag:qw,linedashed_vert:Xw,linedashed_frag:Yw,meshbasic_vert:jw,meshbasic_frag:$w,meshlambert_vert:Kw,meshlambert_frag:Zw,meshmatcap_vert:Jw,meshmatcap_frag:Qw,meshnormal_vert:e1,meshnormal_frag:t1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:r1,meshphysical_frag:s1,meshtoon_vert:o1,meshtoon_frag:a1,points_vert:l1,points_frag:c1,shadow_vert:u1,shadow_frag:f1,sprite_vert:h1,sprite_frag:d1},ye={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Qn={basic:{uniforms:jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:jt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:jt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:jt([ye.points,ye.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:jt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:jt([ye.common,ye.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:jt([ye.sprite,ye.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:jt([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:jt([ye.lights,ye.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Qn.physical={uniforms:jt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const La={r:0,b:0,g:0};function p1(n,e,t,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0),n.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),x=!0;break}(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ll)?(u===void 0&&(u=new Ei(new to(1,1,1),new Vr({name:"BackgroundCubeMaterial",uniforms:$s(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==qe,(f!==v||h!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ei(new Sf(2,2),new Vr({name:"BackgroundMaterial",uniforms:$s(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(La,bg(n)),i.buffers.color.setClear(La.r,La.g,La.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function m1(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(G,H,Q,B,q){let oe=!1;if(o){const ce=_(B,Q,H);c!==ce&&(c=ce,d(c.object)),oe=p(G,B,Q,q),oe&&x(G,B,Q,q)}else{const ce=H.wireframe===!0;(c.geometry!==B.id||c.program!==Q.id||c.wireframe!==ce)&&(c.geometry=B.id,c.program=Q.id,c.wireframe=ce,oe=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,L(G,H,Q,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(G){return i.isWebGL2?n.bindVertexArray(G):s.bindVertexArrayOES(G)}function g(G){return i.isWebGL2?n.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function _(G,H,Q){const B=Q.wireframe===!0;let q=a[G.id];q===void 0&&(q={},a[G.id]=q);let oe=q[H.id];oe===void 0&&(oe={},q[H.id]=oe);let ce=oe[B];return ce===void 0&&(ce=m(h()),oe[B]=ce),ce}function m(G){const H=[],Q=[],B=[];for(let q=0;q<r;q++)H[q]=0,Q[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:B,object:G,attributes:{},index:null}}function p(G,H,Q,B){const q=c.attributes,oe=H.attributes;let ce=0;const V=Q.getAttributes();for(const J in V)if(V[J].location>=0){const ve=q[J];let Se=oe[J];if(Se===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor)),ve===void 0||ve.attribute!==Se||Se&&ve.data!==Se.data)return!0;ce++}return c.attributesNum!==ce||c.index!==B}function x(G,H,Q,B){const q={},oe=H.attributes;let ce=0;const V=Q.getAttributes();for(const J in V)if(V[J].location>=0){let ve=oe[J];ve===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(ve=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(ve=G.instanceColor));const Se={};Se.attribute=ve,ve&&ve.data&&(Se.data=ve.data),q[J]=Se,ce++}c.attributes=q,c.attributesNum=ce,c.index=B}function v(){const G=c.newAttributes;for(let H=0,Q=G.length;H<Q;H++)G[H]=0}function y(G){E(G,0)}function E(G,H){const Q=c.newAttributes,B=c.enabledAttributes,q=c.attributeDivisors;Q[G]=1,B[G]===0&&(n.enableVertexAttribArray(G),B[G]=1),q[G]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,H),q[G]=H)}function C(){const G=c.newAttributes,H=c.enabledAttributes;for(let Q=0,B=H.length;Q<B;Q++)H[Q]!==G[Q]&&(n.disableVertexAttribArray(Q),H[Q]=0)}function A(G,H,Q,B,q,oe,ce){ce===!0?n.vertexAttribIPointer(G,H,Q,q,oe):n.vertexAttribPointer(G,H,Q,B,q,oe)}function L(G,H,Q,B){if(i.isWebGL2===!1&&(G.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=B.attributes,oe=Q.getAttributes(),ce=H.defaultAttributeValues;for(const V in oe){const J=oe[V];if(J.location>=0){let Me=q[V];if(Me===void 0&&(V==="instanceMatrix"&&G.instanceMatrix&&(Me=G.instanceMatrix),V==="instanceColor"&&G.instanceColor&&(Me=G.instanceColor)),Me!==void 0){const ve=Me.normalized,Se=Me.itemSize,Pe=t.get(Me);if(Pe===void 0)continue;const X=Pe.buffer,ae=Pe.type,de=Pe.bytesPerElement,we=i.isWebGL2===!0&&(ae===n.INT||ae===n.UNSIGNED_INT||Me.gpuType===ig);if(Me.isInterleavedBufferAttribute){const Ce=Me.data,S=Ce.stride,P=Me.offset;if(Ce.isInstancedInterleavedBuffer){for(let I=0;I<J.locationSize;I++)E(J.location+I,Ce.meshPerAttribute);G.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let I=0;I<J.locationSize;I++)y(J.location+I);n.bindBuffer(n.ARRAY_BUFFER,X);for(let I=0;I<J.locationSize;I++)A(J.location+I,Se/J.locationSize,ae,ve,S*de,(P+Se/J.locationSize*I)*de,we)}else{if(Me.isInstancedBufferAttribute){for(let Ce=0;Ce<J.locationSize;Ce++)E(J.location+Ce,Me.meshPerAttribute);G.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ce=0;Ce<J.locationSize;Ce++)y(J.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,X);for(let Ce=0;Ce<J.locationSize;Ce++)A(J.location+Ce,Se/J.locationSize,ae,ve,Se*de,Se/J.locationSize*Ce*de,we)}}else if(ce!==void 0){const ve=ce[V];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(J.location,ve);break;case 3:n.vertexAttrib3fv(J.location,ve);break;case 4:n.vertexAttrib4fv(J.location,ve);break;default:n.vertexAttrib1fv(J.location,ve)}}}}C()}function M(){z();for(const G in a){const H=a[G];for(const Q in H){const B=H[Q];for(const q in B)g(B[q].object),delete B[q];delete H[Q]}delete a[G]}}function w(G){if(a[G.id]===void 0)return;const H=a[G.id];for(const Q in H){const B=H[Q];for(const q in B)g(B[q].object),delete B[q];delete H[Q]}delete a[G.id]}function Y(G){for(const H in a){const Q=a[H];if(Q[G.id]===void 0)continue;const B=Q[G.id];for(const q in B)g(B[q].object),delete B[q];delete Q[G.id]}}function z(){N(),u=!0,c!==l&&(c=l,d(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:y,disableUnusedAttributes:C}}function _1(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function g1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),E=v&&y,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:C}}function v1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Vi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,v=x*4;let y=p.clippingState||null;l.value=y,y=u(g,h,v,d);for(let E=0;E!==v;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function x1(n){let e=new WeakMap;function t(o,a){return a===xu?o.mapping=Xs:a===Mu&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xu||a===Mu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new IT(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class M1 extends yg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,zd=[.125,.215,.35,.446,.526,.582],Ar=20,Lc=new M1,Hd=new it;let Dc=null;const br=(1+Math.sqrt(5))/2,_s=1/br,Gd=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,br,_s),new F(0,br,-_s),new F(_s,0,br),new F(-_s,0,br),new F(br,_s,0),new F(-br,_s,0)];class Vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Dc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc),e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:jo,format:Vn,colorSpace:ui,depthBuffer:!1},r=Wd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S1(s)),this._blurMaterial=b1(s,e,t)}return r}_compileMaterial(e){const t=new Ei(this._lodPlanes[0],e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,i,r){const a=new dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Hd),u.toneMapping=tr,u.autoClear=!1;const d=new xg({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Ei(new to,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Hd),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Da(r,x*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xs||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ei(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Da(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gd[(r-1)%Gd.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ei(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ar-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ar;m>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const p=[];let x=0;for(let A=0;A<Ar;++A){const L=A/_,M=Math.exp(-L*L/2);p.push(M),A===0?x+=M:A<m&&(x+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const y=this._sizeLods[r],E=3*y*(r>v-Es?r-v+Es:0),C=4*(this._cubeSize-y);Da(t,E,C,3*y,2*y),l.setRenderTarget(t),l.render(f,Lc)}}function S1(n){const e=[],t=[],i=[];let r=n;const s=n-Es+1+zd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Es?l=zd[o-n+Es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let C=0;C<d;C++){const A=C%3*2/3-1,L=C>2?0:-1,M=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(M,_*g*C),v.set(h,m*g*C);const w=[C,C,C,C,C,C];y.set(w,p*g*C)}const E=new jr;E.setAttribute("position",new oi(x,_)),E.setAttribute("uv",new oi(v,m)),E.setAttribute("faceIndex",new oi(y,p)),e.push(E),r>Es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wd(n,e,t){const i=new Hr(n,e,t);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Da(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function b1(n,e,t){const i=new Float32Array(Ar),r=new F(0,1,0);return new Vr({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function qd(){return new Vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Xd(){return new Vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xu||l===Mu,u=l===Xs||l===Ys;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Vd(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Vd(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function E1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function T1(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const E=x[v+0],C=x[v+1],A=x[v+2];h.push(E,C,C,A,A,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const E=v+0,C=v+1,A=v+2;h.push(E,C,C,A,A,E)}}else return;const m=new(hg(h)?Sg:Mg)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function A1(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){n.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function w1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function R1(n,e){return n[0]-e[0]}function C1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function P1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let G=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",G)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let L=0;x===!0&&(L=1),v===!0&&(L=2),y===!0&&(L=3);let M=u.attributes.position.count*L,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const Y=new Float32Array(M*w*4*g),z=new mg(Y,M,w,g);z.type=ji,z.needsUpdate=!0;const N=L*4;for(let H=0;H<g;H++){const Q=E[H],B=C[H],q=A[H],oe=M*w*4*H;for(let ce=0;ce<Q.count;ce++){const V=ce*N;x===!0&&(o.fromBufferAttribute(Q,ce),Y[oe+V+0]=o.x,Y[oe+V+1]=o.y,Y[oe+V+2]=o.z,Y[oe+V+3]=0),v===!0&&(o.fromBufferAttribute(B,ce),Y[oe+V+4]=o.x,Y[oe+V+5]=o.y,Y[oe+V+6]=o.z,Y[oe+V+7]=0),y===!0&&(o.fromBufferAttribute(q,ce),Y[oe+V+8]=o.x,Y[oe+V+9]=o.y,Y[oe+V+10]=o.z,Y[oe+V+11]=q.itemSize===4?o.w:1)}}_={count:g,texture:z,size:new ze(M,w)},s.set(u,_),u.addEventListener("dispose",G)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",p),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const d=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<d;v++){const y=g[v];y[0]=v,y[1]=h[v]}g.sort(C1);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(R1);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const y=a[v],E=y[0],C=y[1];E!==Number.MAX_SAFE_INTEGER&&C?(_&&u.getAttribute("morphTarget"+v)!==_[E]&&u.setAttribute("morphTarget"+v,_[E]),m&&u.getAttribute("morphNormal"+v)!==m[E]&&u.setAttribute("morphNormal"+v,m[E]),r[v]=C,p+=C):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const x=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function L1(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ag=new gn,wg=new mg,Rg=new gT,Cg=new Eg,Yd=[],jd=[],$d=new Float32Array(16),Kd=new Float32Array(9),Zd=new Float32Array(4);function no(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yd[r];if(s===void 0&&(s=new Float32Array(r),Yd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Il(n,e){let t=jd[e];t===void 0&&(t=new Int32Array(e),jd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function D1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function I1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function O1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function U1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function N1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Zd.set(i),n.uniformMatrix2fv(this.addr,!1,Zd),Pt(t,i)}}function F1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Kd.set(i),n.uniformMatrix3fv(this.addr,!1,Kd),Pt(t,i)}}function B1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;$d.set(i),n.uniformMatrix4fv(this.addr,!1,$d),Pt(t,i)}}function k1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function H1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function G1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function V1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function W1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function X1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Y1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ag,r)}function j1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rg,r)}function $1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cg,r)}function K1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wg,r)}function Z1(n){switch(n){case 5126:return D1;case 35664:return I1;case 35665:return O1;case 35666:return U1;case 35674:return N1;case 35675:return F1;case 35676:return B1;case 5124:case 35670:return k1;case 35667:case 35671:return z1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return V1;case 36294:return W1;case 36295:return q1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return K1}}function J1(n,e){n.uniform1fv(this.addr,e)}function Q1(n,e){const t=no(e,this.size,2);n.uniform2fv(this.addr,t)}function eR(n,e){const t=no(e,this.size,3);n.uniform3fv(this.addr,t)}function tR(n,e){const t=no(e,this.size,4);n.uniform4fv(this.addr,t)}function nR(n,e){const t=no(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function iR(n,e){const t=no(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rR(n,e){const t=no(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sR(n,e){n.uniform1iv(this.addr,e)}function oR(n,e){n.uniform2iv(this.addr,e)}function aR(n,e){n.uniform3iv(this.addr,e)}function lR(n,e){n.uniform4iv(this.addr,e)}function cR(n,e){n.uniform1uiv(this.addr,e)}function uR(n,e){n.uniform2uiv(this.addr,e)}function fR(n,e){n.uniform3uiv(this.addr,e)}function hR(n,e){n.uniform4uiv(this.addr,e)}function dR(n,e,t){const i=this.cache,r=e.length,s=Il(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ag,s[o])}function pR(n,e,t){const i=this.cache,r=e.length,s=Il(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Rg,s[o])}function mR(n,e,t){const i=this.cache,r=e.length,s=Il(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Cg,s[o])}function _R(n,e,t){const i=this.cache,r=e.length,s=Il(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wg,s[o])}function gR(n){switch(n){case 5126:return J1;case 35664:return Q1;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return rR;case 5124:case 35670:return sR;case 35667:case 35671:return oR;case 35668:case 35672:return aR;case 35669:case 35673:return lR;case 5125:return cR;case 36294:return uR;case 36295:return fR;case 36296:return hR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return _R}}class vR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Z1(t.type)}}class xR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=gR(t.type)}}class MR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Jd(n,e){n.seq.push(e),n.map[e.id]=e}function SR(n,e,t){const i=n.name,r=i.length;for(Ic.lastIndex=0;;){const s=Ic.exec(i),o=Ic.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Jd(t,c===void 0?new vR(a,n,e):new xR(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new MR(a),Jd(t,f)),t=f}}}class Va{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);SR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Qd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let bR=0;function yR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ER(n){switch(n){case ui:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function ep(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yR(n.getShaderSource(e),o)}else return r}function TR(n,e){const t=ER(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function AR(n,e){let t;switch(e){case ME:t="Linear";break;case SE:t="Reinhard";break;case bE:t="OptimizedCineon";break;case yE:t="ACESFilmic";break;case EE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(So).join(`
`)}function RR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function So(n){return n!==""}function tp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function np(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(n){return n.replace(PR,DR)}const LR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function DR(n,e){let t=We[e];if(t===void 0){const i=LR.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tu(t)}const IR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ip(n){return n.replace(IR,OR)}function OR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function NR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function BR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tg:e="ENVMAP_BLENDING_MULTIPLY";break;case vE:e="ENVMAP_BLENDING_MIX";break;case xE:e="ENVMAP_BLENDING_ADD";break}return e}function kR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=UR(t),c=NR(t),u=FR(t),f=BR(t),h=kR(t),d=t.isWebGL2?"":wR(t),g=RR(s),_=r.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),p.length>0&&(p+=`
`)):(m=[rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),p=[d,rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?We.tonemapping_pars_fragment:"",t.toneMapping!==tr?AR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,TR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),o=Tu(o),o=tp(o,t),o=np(o,t),a=Tu(a),a=tp(a,t),a=np(a,t),o=ip(o),a=ip(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+o,y=x+p+a,E=Qd(r,r.VERTEX_SHADER,v),C=Qd(r,r.FRAGMENT_SHADER,y);if(r.attachShader(_,E),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(E).trim(),Y=r.getShaderInfoLog(C).trim();let z=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,C);else{const G=ep(r,E,"vertex"),H=ep(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+G+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||Y==="")&&(N=!1);N&&(this.diagnostics={runnable:z,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(E),r.deleteShader(C);let A;this.getUniforms=function(){return A===void 0&&(A=new Va(r,_)),A};let L;return this.getAttributes=function(){return L===void 0&&(L=CR(r,_)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=C,this}let HR=0;class GR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VR(e),t.set(e,i)),i}}class VR{constructor(e){this.id=HR++,this.code=e,this.usedTimes=0}}function WR(n,e,t,i,r,s,o){const a=new gg,l=new GR,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,Y,z,N){const G=z.fog,H=N.geometry,Q=M.isMeshStandardMaterial?z.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),q=B&&B.mapping===Ll?B.image.height:null,oe=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,V=ce!==void 0?ce.length:0;let J=0;H.morphAttributes.position!==void 0&&(J=1),H.morphAttributes.normal!==void 0&&(J=2),H.morphAttributes.color!==void 0&&(J=3);let Me,ve,Se,Pe;if(oe){const at=Qn[oe];Me=at.vertexShader,ve=at.fragmentShader}else Me=M.vertexShader,ve=M.fragmentShader,l.update(M),Se=l.getVertexShaderID(M),Pe=l.getFragmentShaderID(M);const X=n.getRenderTarget(),ae=N.isInstancedMesh===!0,de=!!M.map,we=!!M.matcap,Ce=!!B,S=!!M.aoMap,P=!!M.lightMap,I=!!M.bumpMap,k=!!M.normalMap,j=!!M.displacementMap,ie=!!M.emissiveMap,pe=!!M.metalnessMap,ee=!!M.roughnessMap,he=M.anisotropy>0,ue=M.clearcoat>0,Re=M.iridescence>0,T=M.sheen>0,b=M.transmission>0,U=he&&!!M.anisotropyMap,re=ue&&!!M.clearcoatMap,se=ue&&!!M.clearcoatNormalMap,le=ue&&!!M.clearcoatRoughnessMap,be=Re&&!!M.iridescenceMap,me=Re&&!!M.iridescenceThicknessMap,K=T&&!!M.sheenColorMap,D=T&&!!M.sheenRoughnessMap,fe=!!M.specularMap,Ee=!!M.specularColorMap,_e=!!M.specularIntensityMap,xe=b&&!!M.transmissionMap,Ue=b&&!!M.thicknessMap,Ke=!!M.gradientMap,O=!!M.alphaMap,Te=M.alphaTest>0,Z=!!M.alphaHash,ge=!!M.extensions,Ae=!!H.attributes.uv1,Xe=!!H.attributes.uv2,et=!!H.attributes.uv3;let ot=tr;return M.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ot=n.toneMapping),{isWebGL2:u,shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Me,fragmentShader:ve,defines:M.defines,customVertexShaderID:Se,customFragmentShaderID:Pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:ae,instancingColor:ae&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ui,map:de,matcap:we,envMap:Ce,envMapMode:Ce&&B.mapping,envMapCubeUVHeight:q,aoMap:S,lightMap:P,bumpMap:I,normalMap:k,displacementMap:h&&j,emissiveMap:ie,normalMapObjectSpace:k&&M.normalMapType===FE,normalMapTangentSpace:k&&M.normalMapType===ug,metalnessMap:pe,roughnessMap:ee,anisotropy:he,anisotropyMap:U,clearcoat:ue,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:le,iridescence:Re,iridescenceMap:be,iridescenceThicknessMap:me,sheen:T,sheenColorMap:K,sheenRoughnessMap:D,specularMap:fe,specularColorMap:Ee,specularIntensityMap:_e,transmission:b,transmissionMap:xe,thicknessMap:Ue,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Us,alphaMap:O,alphaTest:Te,alphaHash:Z,combine:M.combine,mapUv:de&&_(M.map.channel),aoMapUv:S&&_(M.aoMap.channel),lightMapUv:P&&_(M.lightMap.channel),bumpMapUv:I&&_(M.bumpMap.channel),normalMapUv:k&&_(M.normalMap.channel),displacementMapUv:j&&_(M.displacementMap.channel),emissiveMapUv:ie&&_(M.emissiveMap.channel),metalnessMapUv:pe&&_(M.metalnessMap.channel),roughnessMapUv:ee&&_(M.roughnessMap.channel),anisotropyMapUv:U&&_(M.anisotropyMap.channel),clearcoatMapUv:re&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:K&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:D&&_(M.sheenRoughnessMap.channel),specularMapUv:fe&&_(M.specularMap.channel),specularColorMapUv:Ee&&_(M.specularColorMap.channel),specularIntensityMapUv:_e&&_(M.specularIntensityMap.channel),transmissionMapUv:xe&&_(M.transmissionMap.channel),thicknessMapUv:Ue&&_(M.thicknessMap.channel),alphaMapUv:O&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(k||he),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Xe,vertexUv3s:et,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(de||O),fog:!!G,useFog:M.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,useLegacyLights:n._useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ni,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ge&&M.extensions.derivatives===!0,extensionFragDepth:ge&&M.extensions.fragDepth===!0,extensionDrawBuffers:ge&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)w.push(Y),w.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(x(w,M),v(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),M.push(a.mask)}function y(M){const w=g[M.type];let Y;if(w){const z=Qn[w];Y=CT.clone(z.uniforms)}else Y=M.uniforms;return Y}function E(M,w){let Y;for(let z=0,N=c.length;z<N;z++){const G=c[z];if(G.cacheKey===w){Y=G,++Y.usedTimes;break}}return Y===void 0&&(Y=new zR(n,w,M,s),c.push(Y)),Y}function C(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:L}}function qR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function XR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function sp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function op(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||XR),i.length>1&&i.sort(h||sp),r.length>1&&r.sort(h||sp)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function YR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new op,n.set(i,[o])):r>=s.length?(o=new op,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new it};break;case"SpotLight":t={position:new F,direction:new F,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function $R(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let KR=0;function ZR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JR(n,e){const t=new jR,i=$R(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new wt,a=new wt;function l(u,f){let h=0,d=0,g=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let _=0,m=0,p=0,x=0,v=0,y=0,E=0,C=0,A=0,L=0;u.sort(ZR);const M=f===!0?Math.PI:1;for(let Y=0,z=u.length;Y<z;Y++){const N=u[Y],G=N.color,H=N.intensity,Q=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=G.r*H*M,d+=G.g*H*M,g+=G.b*H*M;else if(N.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(N.sh.coefficients[q],H);else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const oe=N.shadow,ce=i.get(N);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,r.directionalShadow[_]=ce,r.directionalShadowMap[_]=B,r.directionalShadowMatrix[_]=N.shadow.matrix,y++}r.directional[_]=q,_++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(G).multiplyScalar(H*M),q.distance=Q,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,r.spot[p]=q;const oe=N.shadow;if(N.map&&(r.spotLightMap[A]=N.map,A++,oe.updateMatrices(N),N.castShadow&&L++),r.spotLightMatrix[p]=oe.matrix,N.castShadow){const ce=i.get(N);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,r.spotShadow[p]=ce,r.spotShadowMap[p]=B,C++}p++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(G).multiplyScalar(H),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=q,x++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*M),q.distance=N.distance,q.decay=N.decay,N.castShadow){const oe=N.shadow,ce=i.get(N);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,ce.shadowCameraNear=oe.camera.near,ce.shadowCameraFar=oe.camera.far,r.pointShadow[m]=ce,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=N.shadow.matrix,E++}r.point[m]=q,m++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(H*M),q.groundColor.copy(N.groundColor).multiplyScalar(H*M),r.hemi[v]=q,v++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==x||w.hemiLength!==v||w.numDirectionalShadows!==y||w.numPointShadows!==E||w.numSpotShadows!==C||w.numSpotMaps!==A)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=C+A-L,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=L,w.directionalLength=_,w.pointLength=m,w.spotLength=p,w.rectAreaLength=x,w.hemiLength=v,w.numDirectionalShadows=y,w.numPointShadows=E,w.numSpotShadows=C,w.numSpotMaps=A,r.version=KR++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(y.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function ap(n,e){const t=new JR(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function QR(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ap(n,e),t.set(s,[l])):o>=a.length?(l=new ap(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class eC extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tC extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rC(n,e,t){let i=new Mf;const r=new ze,s=new ze,o=new ut,a=new eC({depthPacking:NE}),l=new tC,c={},u=t.maxTextureSize,f={[ar]:rn,[rn]:ar,[ni]:ni},h=new Vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:nC,fragmentShader:iC}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new jr;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ei(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let p=this.type;this.render=function(E,C,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const L=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(er),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const z=p!==xi&&this.type===xi,N=p===xi&&this.type!==xi;for(let G=0,H=E.length;G<H;G++){const Q=E[G],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const q=B.getFrameExtents();if(r.multiply(q),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,B.mapSize.y=s.y)),B.map===null||z===!0||N===!0){const ce=this.type!==xi?{minFilter:$t,magFilter:$t}:{};B.map!==null&&B.map.dispose(),B.map=new Hr(r.x,r.y,ce),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const oe=B.getViewportCount();for(let ce=0;ce<oe;ce++){const V=B.getViewport(ce);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),Y.viewport(o),B.updateMatrices(Q,ce),i=B.getFrustum(),y(C,A,B.camera,Q,this.type)}B.isPointLightShadow!==!0&&this.type===xi&&x(B,A),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,M,w)};function x(E,C){const A=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Hr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,A,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,A,d,_,null)}function v(E,C,A,L){let M=null;const w=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=A.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Y=M.uuid,z=C.uuid;let N=c[Y];N===void 0&&(N={},c[Y]=N);let G=N[z];G===void 0&&(G=M.clone(),N[z]=G),M=G}if(M.visible=C.visible,M.wireframe=C.wireframe,L===xi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=n.properties.get(M);Y.light=A}return M}function y(E,C,A,L,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===xi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const z=e.update(E),N=E.material;if(Array.isArray(N)){const G=z.groups;for(let H=0,Q=G.length;H<Q;H++){const B=G[H],q=N[B.materialIndex];if(q&&q.visible){const oe=v(E,q,L,M);n.renderBufferDirect(A,null,z,oe,E,B)}}}else if(N.visible){const G=v(E,N,L,M);n.renderBufferDirect(A,null,z,G,E,null)}}const Y=E.children;for(let z=0,N=Y.length;z<N;z++)y(Y[z],C,A,L,M)}}function sC(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const Te=new ut;let Z=null;const ge=new ut(0,0,0,0);return{setMask:function(Ae){Z!==Ae&&!O&&(n.colorMask(Ae,Ae,Ae,Ae),Z=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,Xe,et,ot,Di){Di===!0&&(Ae*=ot,Xe*=ot,et*=ot),Te.set(Ae,Xe,et,ot),ge.equals(Te)===!1&&(n.clearColor(Ae,Xe,et,ot),ge.copy(Te))},reset:function(){O=!1,Z=null,ge.set(-1,0,0,0)}}}function s(){let O=!1,Te=null,Z=null,ge=null;return{setTest:function(Ae){Ae?X(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(Ae){Te!==Ae&&!O&&(n.depthMask(Ae),Te=Ae)},setFunc:function(Ae){if(Z!==Ae){switch(Ae){case fE:n.depthFunc(n.NEVER);break;case hE:n.depthFunc(n.ALWAYS);break;case dE:n.depthFunc(n.LESS);break;case vu:n.depthFunc(n.LEQUAL);break;case pE:n.depthFunc(n.EQUAL);break;case mE:n.depthFunc(n.GEQUAL);break;case _E:n.depthFunc(n.GREATER);break;case gE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=Ae}},setLocked:function(Ae){O=Ae},setClear:function(Ae){ge!==Ae&&(n.clearDepth(Ae),ge=Ae)},reset:function(){O=!1,Te=null,Z=null,ge=null}}}function o(){let O=!1,Te=null,Z=null,ge=null,Ae=null,Xe=null,et=null,ot=null,Di=null;return{setTest:function(at){O||(at?X(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(at){Te!==at&&!O&&(n.stencilMask(at),Te=at)},setFunc:function(at,$n,Wt){(Z!==at||ge!==$n||Ae!==Wt)&&(n.stencilFunc(at,$n,Wt),Z=at,ge=$n,Ae=Wt)},setOp:function(at,$n,Wt){(Xe!==at||et!==$n||ot!==Wt)&&(n.stencilOp(at,$n,Wt),Xe=at,et=$n,ot=Wt)},setLocked:function(at){O=at},setClear:function(at){Di!==at&&(n.clearStencil(at),Di=at)},reset:function(){O=!1,Te=null,Z=null,ge=null,Ae=null,Xe=null,et=null,ot=null,Di=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,y=null,E=null,C=null,A=null,L=null,M=!1,w=null,Y=null,z=null,N=null,G=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,B=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=B>=2);let oe=null,ce={};const V=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),Me=new ut().fromArray(V),ve=new ut().fromArray(J);function Se(O,Te,Z,ge){const Ae=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(O,Xe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<Z;et++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Te,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Te+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Xe}const Pe={};Pe[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),X(n.DEPTH_TEST),l.setFunc(vu),j(!1),ie(Xh),X(n.CULL_FACE),I(er);function X(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function ae(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function de(O,Te){return d[O]!==Te?(n.bindFramebuffer(O,Te),d[O]=Te,i&&(O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Te),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Te)),!0):!1}function we(O,Te){let Z=_,ge=!1;if(O)if(Z=g.get(Te),Z===void 0&&(Z=[],g.set(Te,Z)),O.isWebGLMultipleRenderTargets){const Ae=O.texture;if(Z.length!==Ae.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,et=Ae.length;Xe<et;Xe++)Z[Xe]=n.COLOR_ATTACHMENT0+Xe;Z.length=Ae.length,ge=!0}}else Z[0]!==n.COLOR_ATTACHMENT0&&(Z[0]=n.COLOR_ATTACHMENT0,ge=!0);else Z[0]!==n.BACK&&(Z[0]=n.BACK,ge=!0);ge&&(t.isWebGL2?n.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Ce(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const S={[xs]:n.FUNC_ADD,[eE]:n.FUNC_SUBTRACT,[tE]:n.FUNC_REVERSE_SUBTRACT};if(i)S[Kh]=n.MIN,S[Zh]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(S[Kh]=O.MIN_EXT,S[Zh]=O.MAX_EXT)}const P={[nE]:n.ZERO,[iE]:n.ONE,[rE]:n.SRC_COLOR,[Q_]:n.SRC_ALPHA,[uE]:n.SRC_ALPHA_SATURATE,[lE]:n.DST_COLOR,[oE]:n.DST_ALPHA,[sE]:n.ONE_MINUS_SRC_COLOR,[eg]:n.ONE_MINUS_SRC_ALPHA,[cE]:n.ONE_MINUS_DST_COLOR,[aE]:n.ONE_MINUS_DST_ALPHA};function I(O,Te,Z,ge,Ae,Xe,et,ot){if(O===er){p===!0&&(ae(n.BLEND),p=!1);return}if(p===!1&&(X(n.BLEND),p=!0),O!==Qy){if(O!==x||ot!==M){if((v!==xs||C!==xs)&&(n.blendEquation(n.FUNC_ADD),v=xs,C=xs),ot)switch(O){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yh:n.blendFunc(n.ONE,n.ONE);break;case jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $h:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $h:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,E=null,A=null,L=null,x=O,M=ot}return}Ae=Ae||Te,Xe=Xe||Z,et=et||ge,(Te!==v||Ae!==C)&&(n.blendEquationSeparate(S[Te],S[Ae]),v=Te,C=Ae),(Z!==y||ge!==E||Xe!==A||et!==L)&&(n.blendFuncSeparate(P[Z],P[ge],P[Xe],P[et]),y=Z,E=ge,A=Xe,L=et),x=O,M=!1}function k(O,Te){O.side===ni?ae(n.CULL_FACE):X(n.CULL_FACE);let Z=O.side===rn;Te&&(Z=!Z),j(Z),O.blending===Us&&O.transparent===!1?I(er):I(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const ge=O.stencilWrite;c.setTest(ge),ge&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(O){w!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),w=O)}function ie(O){O!==Ky?(X(n.CULL_FACE),O!==Y&&(O===Xh?n.cullFace(n.BACK):O===Zy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),Y=O}function pe(O){O!==z&&(Q&&n.lineWidth(O),z=O)}function ee(O,Te,Z){O?(X(n.POLYGON_OFFSET_FILL),(N!==Te||G!==Z)&&(n.polygonOffset(Te,Z),N=Te,G=Z)):ae(n.POLYGON_OFFSET_FILL)}function he(O){O?X(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function ue(O){O===void 0&&(O=n.TEXTURE0+H-1),oe!==O&&(n.activeTexture(O),oe=O)}function Re(O,Te,Z){Z===void 0&&(oe===null?Z=n.TEXTURE0+H-1:Z=oe);let ge=ce[Z];ge===void 0&&(ge={type:void 0,texture:void 0},ce[Z]=ge),(ge.type!==O||ge.texture!==Te)&&(oe!==Z&&(n.activeTexture(Z),oe=Z),n.bindTexture(O,Te||Pe[O]),ge.type=O,ge.texture=Te)}function T(){const O=ce[oe];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(O){Me.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Me.copy(O))}function _e(O){ve.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ve.copy(O))}function xe(O,Te){let Z=f.get(Te);Z===void 0&&(Z=new WeakMap,f.set(Te,Z));let ge=Z.get(O);ge===void 0&&(ge=n.getUniformBlockIndex(Te,O.name),Z.set(O,ge))}function Ue(O,Te){const ge=f.get(Te).get(O);u.get(Te)!==ge&&(n.uniformBlockBinding(Te,ge,O.__bindingPointIndex),u.set(Te,ge))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,ce={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,y=null,E=null,C=null,A=null,L=null,M=!1,w=null,Y=null,z=null,N=null,G=null,Me.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:X,disable:ae,bindFramebuffer:de,drawBuffers:we,useProgram:Ce,setBlending:I,setMaterial:k,setFlipSided:j,setCullFace:ie,setLineWidth:pe,setPolygonOffset:ee,setScissorTest:he,activeTexture:ue,bindTexture:Re,unbindTexture:T,compressedTexImage2D:b,compressedTexImage3D:U,texImage2D:D,texImage3D:fe,updateUBOMapping:xe,uniformBlockBinding:Ue,texStorage2D:me,texStorage3D:K,texSubImage2D:re,texSubImage3D:se,compressedTexSubImage2D:le,compressedTexSubImage3D:be,scissor:Ee,viewport:_e,reset:Ke}}function oC(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,b){return p?new OffscreenCanvas(T,b):cl("canvas")}function v(T,b,U,re){let se=1;if((T.width>re||T.height>re)&&(se=re/Math.max(T.width,T.height)),se<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const le=b?ll:Math.floor,be=le(se*T.width),me=le(se*T.height);_===void 0&&(_=x(be,me));const K=U?x(be,me):_;return K.width=be,K.height=me,K.getContext("2d").drawImage(T,0,0,be,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+me+")."),K}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Eu(T.width)&&Eu(T.height)}function E(T){return a?!1:T.wrapS!==Gn||T.wrapT!==Gn||T.minFilter!==$t&&T.minFilter!==An}function C(T,b){return T.generateMipmaps&&b&&T.minFilter!==$t&&T.minFilter!==An}function A(T){n.generateMipmap(T)}function L(T,b,U,re,se=!1){if(a===!1)return b;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let le=b;return b===n.RED&&(U===n.FLOAT&&(le=n.R32F),U===n.HALF_FLOAT&&(le=n.R16F),U===n.UNSIGNED_BYTE&&(le=n.R8)),b===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(le=n.R8UI),U===n.UNSIGNED_SHORT&&(le=n.R16UI),U===n.UNSIGNED_INT&&(le=n.R32UI),U===n.BYTE&&(le=n.R8I),U===n.SHORT&&(le=n.R16I),U===n.INT&&(le=n.R32I)),b===n.RG&&(U===n.FLOAT&&(le=n.RG32F),U===n.HALF_FLOAT&&(le=n.RG16F),U===n.UNSIGNED_BYTE&&(le=n.RG8)),b===n.RGBA&&(U===n.FLOAT&&(le=n.RGBA32F),U===n.HALF_FLOAT&&(le=n.RGBA16F),U===n.UNSIGNED_BYTE&&(le=re===qe&&se===!1?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)),(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function M(T,b,U){return C(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==$t&&T.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function w(T){return T===$t||T===Jh||T===ac?n.NEAREST:n.LINEAR}function Y(T){const b=T.target;b.removeEventListener("dispose",Y),N(b),b.isVideoTexture&&g.delete(b)}function z(T){const b=T.target;b.removeEventListener("dispose",z),H(b)}function N(T){const b=i.get(T);if(b.__webglInit===void 0)return;const U=T.source,re=m.get(U);if(re){const se=re[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&G(T),Object.keys(re).length===0&&m.delete(U)}i.remove(T)}function G(T){const b=i.get(T);n.deleteTexture(b.__webglTexture);const U=T.source,re=m.get(U);delete re[b.__cacheKey],o.memory.textures--}function H(T){const b=T.texture,U=i.get(T),re=i.get(b);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(U.__webglFramebuffer[se]))for(let le=0;le<U.__webglFramebuffer[se].length;le++)n.deleteFramebuffer(U.__webglFramebuffer[se][le]);else n.deleteFramebuffer(U.__webglFramebuffer[se]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[se])}else{if(Array.isArray(U.__webglFramebuffer))for(let se=0;se<U.__webglFramebuffer.length;se++)n.deleteFramebuffer(U.__webglFramebuffer[se]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let se=0;se<U.__webglColorRenderbuffer.length;se++)U.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[se]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,le=b.length;se<le;se++){const be=i.get(b[se]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(b[se])}i.remove(b),i.remove(T)}let Q=0;function B(){Q=0}function q(){const T=Q;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Q+=1,T}function oe(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function ce(T,b){const U=i.get(T);if(T.isVideoTexture&&ue(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const re=T.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(U,T,b);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+b)}function V(T,b){const U=i.get(T);if(T.version>0&&U.__version!==T.version){de(U,T,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+b)}function J(T,b){const U=i.get(T);if(T.version>0&&U.__version!==T.version){de(U,T,b);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+b)}function Me(T,b){const U=i.get(T);if(T.version>0&&U.__version!==T.version){we(U,T,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+b)}const ve={[Su]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[bu]:n.MIRRORED_REPEAT},Se={[$t]:n.NEAREST,[Jh]:n.NEAREST_MIPMAP_NEAREST,[ac]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[TE]:n.LINEAR_MIPMAP_NEAREST,[Yo]:n.LINEAR_MIPMAP_LINEAR},Pe={[kE]:n.NEVER,[XE]:n.ALWAYS,[zE]:n.LESS,[GE]:n.LEQUAL,[HE]:n.EQUAL,[qE]:n.GEQUAL,[VE]:n.GREATER,[WE]:n.NOTEQUAL};function X(T,b,U){if(U?(n.texParameteri(T,n.TEXTURE_WRAP_S,ve[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ve[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ve[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Se[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Se[b.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==Gn||b.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,w(b.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==$t&&b.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===$t||b.minFilter!==ac&&b.minFilter!==Yo||b.type===ji&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===jo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(T,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function ae(T,b){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",Y));const re=b.source;let se=m.get(re);se===void 0&&(se={},m.set(re,se));const le=oe(b);if(le!==T.__cacheKey){se[le]===void 0&&(se[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),se[le].usedTimes++;const be=se[T.__cacheKey];be!==void 0&&(se[T.__cacheKey].usedTimes--,be.usedTimes===0&&G(b)),T.__cacheKey=le,T.__webglTexture=se[le].texture}return U}function de(T,b,U){let re=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=n.TEXTURE_3D);const se=ae(T,b),le=b.source;t.bindTexture(re,T.__webglTexture,n.TEXTURE0+U);const be=i.get(le);if(le.version!==be.__version||se===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const me=E(b)&&y(b.image)===!1;let K=v(b.image,me,!1,u);K=Re(b,K);const D=y(K)||a,fe=s.convert(b.format,b.colorSpace);let Ee=s.convert(b.type),_e=L(b.internalFormat,fe,Ee,b.colorSpace);X(re,b,D);let xe;const Ue=b.mipmaps,Ke=a&&b.isVideoTexture!==!0,O=be.__version===void 0||se===!0,Te=M(b,K,D);if(b.isDepthTexture)_e=n.DEPTH_COMPONENT,a?b.type===ji?_e=n.DEPTH_COMPONENT32F:b.type===Yi?_e=n.DEPTH_COMPONENT24:b.type===Ur?_e=n.DEPTH24_STENCIL8:_e=n.DEPTH_COMPONENT16:b.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Nr&&_e===n.DEPTH_COMPONENT&&b.type!==gf&&b.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Yi,Ee=s.convert(b.type)),b.format===js&&_e===n.DEPTH_COMPONENT&&(_e=n.DEPTH_STENCIL,b.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ur,Ee=s.convert(b.type))),O&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,_e,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,fe,Ee,null));else if(b.isDataTexture)if(Ue.length>0&&D){Ke&&O&&t.texStorage2D(n.TEXTURE_2D,Te,_e,Ue[0].width,Ue[0].height);for(let Z=0,ge=Ue.length;Z<ge;Z++)xe=Ue[Z],Ke?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,xe.width,xe.height,fe,Ee,xe.data):t.texImage2D(n.TEXTURE_2D,Z,_e,xe.width,xe.height,0,fe,Ee,xe.data);b.generateMipmaps=!1}else Ke?(O&&t.texStorage2D(n.TEXTURE_2D,Te,_e,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,fe,Ee,K.data)):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,fe,Ee,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ke&&O&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,_e,Ue[0].width,Ue[0].height,K.depth);for(let Z=0,ge=Ue.length;Z<ge;Z++)xe=Ue[Z],b.format!==Vn?fe!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,xe.width,xe.height,K.depth,fe,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,_e,xe.width,xe.height,K.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,xe.width,xe.height,K.depth,fe,Ee,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,_e,xe.width,xe.height,K.depth,0,fe,Ee,xe.data)}else{Ke&&O&&t.texStorage2D(n.TEXTURE_2D,Te,_e,Ue[0].width,Ue[0].height);for(let Z=0,ge=Ue.length;Z<ge;Z++)xe=Ue[Z],b.format!==Vn?fe!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,xe.width,xe.height,fe,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,_e,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,xe.width,xe.height,fe,Ee,xe.data):t.texImage2D(n.TEXTURE_2D,Z,_e,xe.width,xe.height,0,fe,Ee,xe.data)}else if(b.isDataArrayTexture)Ke?(O&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,_e,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,fe,Ee,K.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,K.width,K.height,K.depth,0,fe,Ee,K.data);else if(b.isData3DTexture)Ke?(O&&t.texStorage3D(n.TEXTURE_3D,Te,_e,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,fe,Ee,K.data)):t.texImage3D(n.TEXTURE_3D,0,_e,K.width,K.height,K.depth,0,fe,Ee,K.data);else if(b.isFramebufferTexture){if(O)if(Ke)t.texStorage2D(n.TEXTURE_2D,Te,_e,K.width,K.height);else{let Z=K.width,ge=K.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,_e,Z,ge,0,fe,Ee,null),Z>>=1,ge>>=1}}else if(Ue.length>0&&D){Ke&&O&&t.texStorage2D(n.TEXTURE_2D,Te,_e,Ue[0].width,Ue[0].height);for(let Z=0,ge=Ue.length;Z<ge;Z++)xe=Ue[Z],Ke?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,fe,Ee,xe):t.texImage2D(n.TEXTURE_2D,Z,_e,fe,Ee,xe);b.generateMipmaps=!1}else Ke?(O&&t.texStorage2D(n.TEXTURE_2D,Te,_e,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ee,K)):t.texImage2D(n.TEXTURE_2D,0,_e,fe,Ee,K);C(b,D)&&A(re),be.__version=le.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function we(T,b,U){if(b.image.length!==6)return;const re=ae(T,b),se=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);const le=i.get(se);if(se.version!==le.__version||re===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,K=[];for(let Z=0;Z<6;Z++)!be&&!me?K[Z]=v(b.image[Z],!1,!0,c):K[Z]=me?b.image[Z].image:b.image[Z],K[Z]=Re(b,K[Z]);const D=K[0],fe=y(D)||a,Ee=s.convert(b.format,b.colorSpace),_e=s.convert(b.type),xe=L(b.internalFormat,Ee,_e,b.colorSpace),Ue=a&&b.isVideoTexture!==!0,Ke=le.__version===void 0||re===!0;let O=M(b,D,fe);X(n.TEXTURE_CUBE_MAP,b,fe);let Te;if(be){Ue&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,O,xe,D.width,D.height);for(let Z=0;Z<6;Z++){Te=K[Z].mipmaps;for(let ge=0;ge<Te.length;ge++){const Ae=Te[ge];b.format!==Vn?Ee!==null?Ue?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Ae.width,Ae.height,Ee,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,xe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Ae.width,Ae.height,Ee,_e,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,xe,Ae.width,Ae.height,0,Ee,_e,Ae.data)}}}else{Te=b.mipmaps,Ue&&Ke&&(Te.length>0&&O++,t.texStorage2D(n.TEXTURE_CUBE_MAP,O,xe,K[0].width,K[0].height));for(let Z=0;Z<6;Z++)if(me){Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,K[Z].width,K[Z].height,Ee,_e,K[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,xe,K[Z].width,K[Z].height,0,Ee,_e,K[Z].data);for(let ge=0;ge<Te.length;ge++){const Xe=Te[ge].image[Z].image;Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Xe.width,Xe.height,Ee,_e,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,xe,Xe.width,Xe.height,0,Ee,_e,Xe.data)}}else{Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,_e,K[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,xe,Ee,_e,K[Z]);for(let ge=0;ge<Te.length;ge++){const Ae=Te[ge];Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Ee,_e,Ae.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,xe,Ee,_e,Ae.image[Z])}}}C(b,fe)&&A(n.TEXTURE_CUBE_MAP),le.__version=se.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Ce(T,b,U,re,se,le){const be=s.convert(U.format,U.colorSpace),me=s.convert(U.type),K=L(U.internalFormat,be,me,U.colorSpace);if(!i.get(b).__hasExternalTextures){const fe=Math.max(1,b.width>>le),Ee=Math.max(1,b.height>>le);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,le,K,fe,Ee,b.depth,0,be,me,null):t.texImage2D(se,le,K,fe,Ee,0,be,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),he(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,se,i.get(U).__webglTexture,0,ee(b)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,se,i.get(U).__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function S(T,b,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let re=n.DEPTH_COMPONENT16;if(U||he(b)){const se=b.depthTexture;se&&se.isDepthTexture&&(se.type===ji?re=n.DEPTH_COMPONENT32F:se.type===Yi&&(re=n.DEPTH_COMPONENT24));const le=ee(b);he(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,re,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,re,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){const re=ee(b);U&&he(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,b.width,b.height):he(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const re=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0;se<re.length;se++){const le=re[se],be=s.convert(le.format,le.colorSpace),me=s.convert(le.type),K=L(le.internalFormat,be,me,le.colorSpace),D=ee(b);U&&he(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,D,K,b.width,b.height):he(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,K,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,K,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function P(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce(b.depthTexture,0);const re=i.get(b.depthTexture).__webglTexture,se=ee(b);if(b.depthTexture.format===Nr)he(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(b.depthTexture.format===js)he(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function I(T){const b=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");P(b.__webglFramebuffer,T)}else if(U){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]=n.createRenderbuffer(),S(b.__webglDepthbuffer[re],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),S(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(T,b,U){const re=i.get(T);b!==void 0&&Ce(re.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&I(T)}function j(T){const b=T.texture,U=i.get(T),re=i.get(b);T.addEventListener("dispose",z),T.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=b.version,o.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,le=T.isWebGLMultipleRenderTargets===!0,be=y(T)||a;if(se){U.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[me]=[];for(let K=0;K<b.mipmaps.length;K++)U.__webglFramebuffer[me][K]=n.createFramebuffer()}else U.__webglFramebuffer[me]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)U.__webglFramebuffer[me]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(le)if(r.drawBuffers){const me=T.texture;for(let K=0,D=me.length;K<D;K++){const fe=i.get(me[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&he(T)===!1){const me=le?b:[b];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<me.length;K++){const D=me[K];U.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[K]);const fe=s.convert(D.format,D.colorSpace),Ee=s.convert(D.type),_e=L(D.internalFormat,fe,Ee,D.colorSpace,T.isXRRenderTarget===!0),xe=ee(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,_e,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,U.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),S(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),X(n.TEXTURE_CUBE_MAP,b,be);for(let me=0;me<6;me++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)Ce(U.__webglFramebuffer[me][K],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,K);else Ce(U.__webglFramebuffer[me],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);C(b,be)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const me=T.texture;for(let K=0,D=me.length;K<D;K++){const fe=me[K],Ee=i.get(fe);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),X(n.TEXTURE_2D,fe,be),Ce(U.__webglFramebuffer,T,fe,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,0),C(fe,be)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?me=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,re.__webglTexture),X(me,b,be),a&&b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)Ce(U.__webglFramebuffer[K],T,b,n.COLOR_ATTACHMENT0,me,K);else Ce(U.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,me,0);C(b,be)&&A(me),t.unbindTexture()}T.depthBuffer&&I(T)}function ie(T){const b=y(T)||a,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0,se=U.length;re<se;re++){const le=U[re];if(C(le,b)){const be=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(le).__webglTexture;t.bindTexture(be,me),A(be),t.unbindTexture()}}}function pe(T){if(a&&T.samples>0&&he(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,re=T.height;let se=n.COLOR_BUFFER_BIT;const le=[],be=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(T),K=T.isWebGLMultipleRenderTargets===!0;if(K)for(let D=0;D<b.length;D++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let D=0;D<b.length;D++){le.push(n.COLOR_ATTACHMENT0+D),T.depthBuffer&&le.push(be);const fe=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(fe===!1&&(T.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),K&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[D]),fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[be])),K){const Ee=i.get(b[D]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,U,re,0,0,U,re,se,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let D=0;D<b.length;D++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,me.__webglColorRenderbuffer[D]);const fe=i.get(b[D]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function ee(T){return Math.min(f,T.samples)}function he(T){const b=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(T){const b=o.render.frame;g.get(T)!==b&&(g.set(T,b),T.update())}function Re(T,b){const U=T.colorSpace,re=T.format,se=T.type;return T.isCompressedTexture===!0||T.format===yu||U!==ui&&U!==Br&&(U===qe?a===!1?e.has("EXT_sRGB")===!0&&re===Vn?(T.format=yu,T.minFilter=An,T.generateMipmaps=!1):b=dg.sRGBToLinear(b):(re!==Vn||se!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.setTexture2D=ce,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=Me,this.rebindTextures=k,this.setupRenderTarget=j,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=he}function aC(n,e,t){const i=t.isWebGL2;function r(s,o=Br){let a;if(s===nr)return n.UNSIGNED_BYTE;if(s===rg)return n.UNSIGNED_SHORT_4_4_4_4;if(s===sg)return n.UNSIGNED_SHORT_5_5_5_1;if(s===AE)return n.BYTE;if(s===wE)return n.SHORT;if(s===gf)return n.UNSIGNED_SHORT;if(s===ig)return n.INT;if(s===Yi)return n.UNSIGNED_INT;if(s===ji)return n.FLOAT;if(s===jo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===RE)return n.ALPHA;if(s===Vn)return n.RGBA;if(s===CE)return n.LUMINANCE;if(s===PE)return n.LUMINANCE_ALPHA;if(s===Nr)return n.DEPTH_COMPONENT;if(s===js)return n.DEPTH_STENCIL;if(s===yu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===LE)return n.RED;if(s===og)return n.RED_INTEGER;if(s===DE)return n.RG;if(s===ag)return n.RG_INTEGER;if(s===lg)return n.RGBA_INTEGER;if(s===lc||s===cc||s===uc||s===fc)if(o===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===lc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===lc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qh||s===ed||s===td||s===nd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ed)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===td)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===IE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===id||s===rd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===id)return o===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sd||s===od||s===ad||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===_d||s===gd||s===vd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ld)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ud)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===md)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===hc)return o===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===OE||s===xd||s===Md||s===Sd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===hc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===xd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Md)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class lC extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ia extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cC={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class uC extends gn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Nr,u!==Nr&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Nr&&(i=Yi),i===void 0&&u===js&&(i=Ur),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fC extends Yr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const x=[],v=[],y=new dn;y.layers.enable(1),y.viewport=new ut;const E=new dn;E.layers.enable(2),E.viewport=new ut;const C=[y,E],A=new lC;A.layers.enable(1),A.layers.enable(2);let L=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=x[V];return J===void 0&&(J=new Oc,x[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=x[V];return J===void 0&&(J=new Oc,x[V]=J),J.getGripSpace()},this.getHand=function(V){let J=x[V];return J===void 0&&(J=new Oc,x[V]=J),J.getHandSpace()};function w(V){const J=v.indexOf(V.inputSource);if(J===-1)return;const Me=x[J];Me!==void 0&&(Me.update(V.inputSource,V.frame,c||o),Me.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",z);for(let V=0;V<x.length;V++){const J=v[V];J!==null&&(v[V]=null,x[V].disconnect(J))}L=null,M=null,e.setRenderTarget(m),d=null,h=null,f=null,r=null,p=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:d}),p=new Hr(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,Me=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?js:Nr,Me=_.stencil?Ur:Yi);const Se={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),p=new Hr(h.textureWidth,h.textureHeight,{format:Vn,type:nr,depthTexture:new uC(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(p);Pe.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(V){for(let J=0;J<V.removed.length;J++){const Me=V.removed[J],ve=v.indexOf(Me);ve>=0&&(v[ve]=null,x[ve].disconnect(Me))}for(let J=0;J<V.added.length;J++){const Me=V.added[J];let ve=v.indexOf(Me);if(ve===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=v.length){v.push(Me),ve=Pe;break}else if(v[Pe]===null){v[Pe]=Me,ve=Pe;break}if(ve===-1)break}const Se=x[ve];Se&&Se.connect(Me)}}const N=new F,G=new F;function H(V,J,Me){N.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(Me.matrixWorld);const ve=N.distanceTo(G),Se=J.projectionMatrix.elements,Pe=Me.projectionMatrix.elements,X=Se[14]/(Se[10]-1),ae=Se[14]/(Se[10]+1),de=(Se[9]+1)/Se[5],we=(Se[9]-1)/Se[5],Ce=(Se[8]-1)/Se[0],S=(Pe[8]+1)/Pe[0],P=X*Ce,I=X*S,k=ve/(-Ce+S),j=k*-Ce;J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(j),V.translateZ(k),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ie=X+k,pe=ae+k,ee=P-j,he=I+(ve-j),ue=de*ae/pe*ie,Re=we*ae/pe*ie;V.projectionMatrix.makePerspective(ee,he,ue,Re,ie,pe),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Q(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;A.near=E.near=y.near=V.near,A.far=E.far=y.far=V.far,(L!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,M=A.far);const J=V.parent,Me=A.cameras;Q(A,J);for(let ve=0;ve<Me.length;ve++)Q(Me[ve],J);Me.length===2?H(A,y,E):A.projectionMatrix.copy(y.projectionMatrix),B(V,A,J)};function B(V,J,Me){Me===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(Me.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const ve=V.children;for(let Se=0,Pe=ve.length;Se<Pe;Se++)ve[Se].updateMatrixWorld(!0);V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=$o*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let q=null;function oe(V,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ve=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Se=0;Se<Me.length;Se++){const Pe=Me[Se];let X=null;if(d!==null)X=d.getViewport(Pe);else{const de=f.getViewSubImage(h,Pe);X=de.viewport,Se===0&&(e.setRenderTargetTextures(p,de.colorTexture,h.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(p))}let ae=C[Se];ae===void 0&&(ae=new dn,ae.layers.enable(Se),ae.viewport=new ut,C[Se]=ae),ae.matrix.fromArray(Pe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Pe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(X.x,X.y,X.width,X.height),Se===0&&(A.matrix.copy(ae.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(ae)}}for(let Me=0;Me<x.length;Me++){const ve=v[Me],Se=x[Me];ve!==null&&Se!==void 0&&Se.update(ve,J,c||o)}q&&q(V,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const ce=new Tg;ce.setAnimationLoop(oe),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}}function hC(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dC(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const E=v.program;i.updateUBOMapping(x,E);const C=e.render.frame;s[x.id]!==C&&(h(x),s[x.id]=C)}function u(x){const v=f();x.__bindingPointIndex=v;const y=n.createBuffer(),E=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],y=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,A=y.length;C<A;C++){const L=y[C];if(d(L,C,E)===!0){const M=L.__offset,w=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let z=0;z<w.length;z++){const N=w[z],G=_(N);typeof N=="number"?(L.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,M+Y,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=N.elements[0],L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=N.elements[0],L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=N.elements[0]):(N.toArray(L.__data,Y),Y+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,v,y){const E=x.value;if(y[v]===void 0){if(typeof E=="number")y[v]=E;else{const C=Array.isArray(E)?E:[E],A=[];for(let L=0;L<C.length;L++)A.push(C[L].clone());y[v]=A}return!0}else if(typeof E=="number"){if(y[v]!==E)return y[v]=E,!0}else{const C=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(E)?E:[E];for(let L=0;L<C.length;L++){const M=C[L];if(M.equals(A[L])===!1)return M.copy(A[L]),!0}}return!1}function g(x){const v=x.uniforms;let y=0;const E=16;let C=0;for(let A=0,L=v.length;A<L;A++){const M=v[A],w={boundary:0,storage:0},Y=Array.isArray(M.value)?M.value:[M.value];for(let z=0,N=Y.length;z<N;z++){const G=Y[z],H=_(G);w.boundary+=H.boundary,w.storage+=H.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,A>0){C=y%E;const z=E-C;C!==0&&z-w.boundary<0&&(y+=E-C,M.__offset=y)}y+=w.storage}return C=y%E,C>0&&(y+=E-C),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}function pC(){const n=cl("canvas");return n.style.display="block",n}class Pg{constructor(e={}){const{canvas:t=pC(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let y=!1,E=0,C=0,A=null,L=-1,M=null;const w=new ut,Y=new ut;let z=null;const N=new it(0);let G=0,H=t.width,Q=t.height,B=1,q=null,oe=null;const ce=new ut(0,0,H,Q),V=new ut(0,0,H,Q);let J=!1;const Me=new Mf;let ve=!1,Se=!1,Pe=null;const X=new wt,ae=new ze,de=new F,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return A===null?B:1}let S=i;function P(R,$){for(let ne=0;ne<R.length;ne++){const W=R[ne],te=t.getContext(W,$);if(te!==null)return te}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_f}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ge,!1),S===null){const $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),S=P($,R),S===null)throw P($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let I,k,j,ie,pe,ee,he,ue,Re,T,b,U,re,se,le,be,me,K,D,fe,Ee,_e,xe,Ue;function Ke(){I=new E1(S),k=new g1(S,I,e),I.init(k),_e=new aC(S,I,k),j=new sC(S,I,k),ie=new w1(S),pe=new qR,ee=new oC(S,I,j,pe,k,_e,ie),he=new x1(v),ue=new y1(v),Re=new NT(S,k),xe=new m1(S,I,Re,k),T=new T1(S,Re,ie,xe),b=new L1(S,T,Re,ie),D=new P1(S,k,ee),be=new v1(pe),U=new WR(v,he,ue,I,k,xe,be),re=new hC(v,pe),se=new YR,le=new QR(I,k),K=new p1(v,he,ue,j,b,h,l),me=new rC(v,b,k),Ue=new dC(S,ie,k,j),fe=new _1(S,I,ie,k),Ee=new A1(S,I,ie,k),ie.programs=U.programs,v.capabilities=k,v.extensions=I,v.properties=pe,v.renderLists=se,v.shadowMap=me,v.state=j,v.info=ie}Ke();const O=new fC(v,S);this.xr=O,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const R=I.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=I.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(H,Q,!1))},this.getSize=function(R){return R.set(H,Q)},this.setSize=function(R,$,ne=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,Q=$,t.width=Math.floor(R*B),t.height=Math.floor($*B),ne===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(H*B,Q*B).floor()},this.setDrawingBufferSize=function(R,$,ne){H=R,Q=$,B=ne,t.width=Math.floor(R*ne),t.height=Math.floor($*ne),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(ce)},this.setViewport=function(R,$,ne,W){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,$,ne,W),j.viewport(w.copy(ce).multiplyScalar(B).floor())},this.getScissor=function(R){return R.copy(V)},this.setScissor=function(R,$,ne,W){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,$,ne,W),j.scissor(Y.copy(V).multiplyScalar(B).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(R){j.setScissorTest(J=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(R=!0,$=!0,ne=!0){let W=0;if(R){let te=!1;if(A!==null){const De=A.texture.format;te=De===lg||De===ag||De===og}if(te){const De=A.texture.type,Ie=De===nr||De===Yi||De===gf||De===Ur||De===rg||De===sg,Be=K.getClearColor(),ke=K.getClearAlpha(),je=Be.r,Ne=Be.g,Ve=Be.b;Ie?(d[0]=je,d[1]=Ne,d[2]=Ve,d[3]=ke,S.clearBufferuiv(S.COLOR,0,d)):(g[0]=je,g[1]=Ne,g[2]=Ve,g[3]=ke,S.clearBufferiv(S.COLOR,0,g))}else W|=S.COLOR_BUFFER_BIT}$&&(W|=S.DEPTH_BUFFER_BIT),ne&&(W|=S.STENCIL_BUFFER_BIT),S.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),se.dispose(),le.dispose(),pe.dispose(),he.dispose(),ue.dispose(),b.dispose(),xe.dispose(),Ue.dispose(),U.dispose(),O.dispose(),O.removeEventListener("sessionstart",at),O.removeEventListener("sessionend",$n),Pe&&(Pe.dispose(),Pe=null),Wt.stop()};function Te(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=ie.autoReset,$=me.enabled,ne=me.autoUpdate,W=me.needsUpdate,te=me.type;Ke(),ie.autoReset=R,me.enabled=$,me.autoUpdate=ne,me.needsUpdate=W,me.type=te}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ae(R){const $=R.target;$.removeEventListener("dispose",Ae),Xe($)}function Xe(R){et(R),pe.remove(R)}function et(R){const $=pe.get(R).programs;$!==void 0&&($.forEach(function(ne){U.releaseProgram(ne)}),R.isShaderMaterial&&U.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ne,W,te,De){$===null&&($=we);const Ie=te.isMesh&&te.matrixWorld.determinant()<0,Be=Fg(R,$,ne,W,te);j.setMaterial(W,Ie);let ke=ne.index,je=1;if(W.wireframe===!0){if(ke=T.getWireframeAttribute(ne),ke===void 0)return;je=2}const Ne=ne.drawRange,Ve=ne.attributes.position;let mt=Ne.start*je,vt=(Ne.start+Ne.count)*je;De!==null&&(mt=Math.max(mt,De.start*je),vt=Math.min(vt,(De.start+De.count)*je)),ke!==null?(mt=Math.max(mt,0),vt=Math.min(vt,ke.count)):Ve!=null&&(mt=Math.max(mt,0),vt=Math.min(vt,Ve.count));const Mn=vt-mt;if(Mn<0||Mn===1/0)return;xe.setup(te,W,Be,ne,ke);let fi,bt=fe;if(ke!==null&&(fi=Re.get(ke),bt=Ee,bt.setIndex(fi)),te.isMesh)W.wireframe===!0?(j.setLineWidth(W.wireframeLinewidth*Ce()),bt.setMode(S.LINES)):bt.setMode(S.TRIANGLES);else if(te.isLine){let $e=W.linewidth;$e===void 0&&($e=1),j.setLineWidth($e*Ce()),te.isLineSegments?bt.setMode(S.LINES):te.isLineLoop?bt.setMode(S.LINE_LOOP):bt.setMode(S.LINE_STRIP)}else te.isPoints?bt.setMode(S.POINTS):te.isSprite&&bt.setMode(S.TRIANGLES);if(te.isInstancedMesh)bt.renderInstances(mt,Mn,te.count);else if(ne.isInstancedBufferGeometry){const $e=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ol=Math.min(ne.instanceCount,$e);bt.renderInstances(mt,Mn,Ol)}else bt.render(mt,Mn)},this.compile=function(R,$){function ne(W,te,De){W.transparent===!0&&W.side===ni&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,ra(W,te,De),W.side=ar,W.needsUpdate=!0,ra(W,te,De),W.side=ni):ra(W,te,De)}m=le.get(R),m.init(),x.push(m),R.traverseVisible(function(W){W.isLight&&W.layers.test($.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(v._useLegacyLights),R.traverse(function(W){const te=W.material;if(te)if(Array.isArray(te))for(let De=0;De<te.length;De++){const Ie=te[De];ne(Ie,R,W)}else ne(te,R,W)}),x.pop(),m=null};let ot=null;function Di(R){ot&&ot(R)}function at(){Wt.stop()}function $n(){Wt.start()}const Wt=new Tg;Wt.setAnimationLoop(Di),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(R){ot=R,O.setAnimationLoop(R),R===null?Wt.stop():Wt.start()},O.addEventListener("sessionstart",at),O.addEventListener("sessionend",$n),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera($),$=O.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,$,A),m=le.get(R,x.length),m.init(),x.push(m),X.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Me.setFromProjectionMatrix(X),Se=this.localClippingEnabled,ve=be.init(this.clippingPlanes,Se),_=se.get(R,p.length),_.init(),p.push(_),yf(R,$,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,oe),this.info.render.frame++,ve===!0&&be.beginShadows();const ne=m.state.shadowsArray;if(me.render(ne,R,$),ve===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(_,R),m.setupLights(v._useLegacyLights),$.isArrayCamera){const W=$.cameras;for(let te=0,De=W.length;te<De;te++){const Ie=W[te];Ef(_,R,Ie,Ie.viewport)}}else Ef(_,R,$);A!==null&&(ee.updateMultisampleRenderTarget(A),ee.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,$),xe.resetDefaultState(),L=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function yf(R,$,ne,W){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Me.intersectsSprite(R)){W&&de.setFromMatrixPosition(R.matrixWorld).applyMatrix4(X);const Ie=b.update(R),Be=R.material;Be.visible&&_.push(R,Ie,Be,ne,de.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Me.intersectsObject(R))){const Ie=b.update(R),Be=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),de.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),de.copy(Ie.boundingSphere.center)),de.applyMatrix4(R.matrixWorld).applyMatrix4(X)),Array.isArray(Be)){const ke=Ie.groups;for(let je=0,Ne=ke.length;je<Ne;je++){const Ve=ke[je],mt=Be[Ve.materialIndex];mt&&mt.visible&&_.push(R,Ie,mt,ne,de.z,Ve)}}else Be.visible&&_.push(R,Ie,Be,ne,de.z,null)}}const De=R.children;for(let Ie=0,Be=De.length;Ie<Be;Ie++)yf(De[Ie],$,ne,W)}function Ef(R,$,ne,W){const te=R.opaque,De=R.transmissive,Ie=R.transparent;m.setupLightsView(ne),ve===!0&&be.setGlobalState(v.clippingPlanes,ne),De.length>0&&Ng(te,De,$,ne),W&&j.viewport(w.copy(W)),te.length>0&&ia(te,$,ne),De.length>0&&ia(De,$,ne),Ie.length>0&&ia(Ie,$,ne),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Ng(R,$,ne,W){const te=k.isWebGL2;Pe===null&&(Pe=new Hr(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?jo:nr,minFilter:Yo,samples:te?4:0})),v.getDrawingBufferSize(ae),te?Pe.setSize(ae.x,ae.y):Pe.setSize(ll(ae.x),ll(ae.y));const De=v.getRenderTarget();v.setRenderTarget(Pe),v.getClearColor(N),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear();const Ie=v.toneMapping;v.toneMapping=tr,ia(R,ne,W),ee.updateMultisampleRenderTarget(Pe),ee.updateRenderTargetMipmap(Pe);let Be=!1;for(let ke=0,je=$.length;ke<je;ke++){const Ne=$[ke],Ve=Ne.object,mt=Ne.geometry,vt=Ne.material,Mn=Ne.group;if(vt.side===ni&&Ve.layers.test(W.layers)){const fi=vt.side;vt.side=rn,vt.needsUpdate=!0,Tf(Ve,ne,W,mt,vt,Mn),vt.side=fi,vt.needsUpdate=!0,Be=!0}}Be===!0&&(ee.updateMultisampleRenderTarget(Pe),ee.updateRenderTargetMipmap(Pe)),v.setRenderTarget(De),v.setClearColor(N,G),v.toneMapping=Ie}function ia(R,$,ne){const W=$.isScene===!0?$.overrideMaterial:null;for(let te=0,De=R.length;te<De;te++){const Ie=R[te],Be=Ie.object,ke=Ie.geometry,je=W===null?Ie.material:W,Ne=Ie.group;Be.layers.test(ne.layers)&&Tf(Be,$,ne,ke,je,Ne)}}function Tf(R,$,ne,W,te,De){R.onBeforeRender(v,$,ne,W,te,De),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(v,$,ne,W,R,De),te.transparent===!0&&te.side===ni&&te.forceSinglePass===!1?(te.side=rn,te.needsUpdate=!0,v.renderBufferDirect(ne,$,W,te,R,De),te.side=ar,te.needsUpdate=!0,v.renderBufferDirect(ne,$,W,te,R,De),te.side=ni):v.renderBufferDirect(ne,$,W,te,R,De),R.onAfterRender(v,$,ne,W,te,De)}function ra(R,$,ne){$.isScene!==!0&&($=we);const W=pe.get(R),te=m.state.lights,De=m.state.shadowsArray,Ie=te.state.version,Be=U.getParameters(R,te.state,De,$,ne),ke=U.getProgramCacheKey(Be);let je=W.programs;W.environment=R.isMeshStandardMaterial?$.environment:null,W.fog=$.fog,W.envMap=(R.isMeshStandardMaterial?ue:he).get(R.envMap||W.environment),je===void 0&&(R.addEventListener("dispose",Ae),je=new Map,W.programs=je);let Ne=je.get(ke);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===Ie)return Af(R,Be),Ne}else Be.uniforms=U.getUniforms(R),R.onBuild(ne,Be,v),R.onBeforeCompile(Be,v),Ne=U.acquireProgram(Be,ke),je.set(ke,Ne),W.uniforms=Be.uniforms;const Ve=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=be.uniform),Af(R,Be),W.needsLights=kg(R),W.lightsStateVersion=Ie,W.needsLights&&(Ve.ambientLightColor.value=te.state.ambient,Ve.lightProbe.value=te.state.probe,Ve.directionalLights.value=te.state.directional,Ve.directionalLightShadows.value=te.state.directionalShadow,Ve.spotLights.value=te.state.spot,Ve.spotLightShadows.value=te.state.spotShadow,Ve.rectAreaLights.value=te.state.rectArea,Ve.ltc_1.value=te.state.rectAreaLTC1,Ve.ltc_2.value=te.state.rectAreaLTC2,Ve.pointLights.value=te.state.point,Ve.pointLightShadows.value=te.state.pointShadow,Ve.hemisphereLights.value=te.state.hemi,Ve.directionalShadowMap.value=te.state.directionalShadowMap,Ve.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ve.spotShadowMap.value=te.state.spotShadowMap,Ve.spotLightMatrix.value=te.state.spotLightMatrix,Ve.spotLightMap.value=te.state.spotLightMap,Ve.pointShadowMap.value=te.state.pointShadowMap,Ve.pointShadowMatrix.value=te.state.pointShadowMatrix);const mt=Ne.getUniforms(),vt=Va.seqWithValue(mt.seq,Ve);return W.currentProgram=Ne,W.uniformsList=vt,Ne}function Af(R,$){const ne=pe.get(R);ne.outputColorSpace=$.outputColorSpace,ne.instancing=$.instancing,ne.instancingColor=$.instancingColor,ne.skinning=$.skinning,ne.morphTargets=$.morphTargets,ne.morphNormals=$.morphNormals,ne.morphColors=$.morphColors,ne.morphTargetsCount=$.morphTargetsCount,ne.numClippingPlanes=$.numClippingPlanes,ne.numIntersection=$.numClipIntersection,ne.vertexAlphas=$.vertexAlphas,ne.vertexTangents=$.vertexTangents,ne.toneMapping=$.toneMapping}function Fg(R,$,ne,W,te){$.isScene!==!0&&($=we),ee.resetTextureUnits();const De=$.fog,Ie=W.isMeshStandardMaterial?$.environment:null,Be=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ui,ke=(W.isMeshStandardMaterial?ue:he).get(W.envMap||Ie),je=W.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ne=!!ne.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ve=!!ne.morphAttributes.position,mt=!!ne.morphAttributes.normal,vt=!!ne.morphAttributes.color;let Mn=tr;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mn=v.toneMapping);const fi=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,bt=fi!==void 0?fi.length:0,$e=pe.get(W),Ol=m.state.lights;if(ve===!0&&(Se===!0||R!==M)){const cn=R===M&&W.id===L;be.setState(W,R,cn)}let yt=!1;W.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ol.state.version||$e.outputColorSpace!==Be||te.isInstancedMesh&&$e.instancing===!1||!te.isInstancedMesh&&$e.instancing===!0||te.isSkinnedMesh&&$e.skinning===!1||!te.isSkinnedMesh&&$e.skinning===!0||te.isInstancedMesh&&$e.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&$e.instancingColor===!1&&te.instanceColor!==null||$e.envMap!==ke||W.fog===!0&&$e.fog!==De||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==be.numPlanes||$e.numIntersection!==be.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==Ne||$e.morphTargets!==Ve||$e.morphNormals!==mt||$e.morphColors!==vt||$e.toneMapping!==Mn||k.isWebGL2===!0&&$e.morphTargetsCount!==bt)&&(yt=!0):(yt=!0,$e.__version=W.version);let cr=$e.currentProgram;yt===!0&&(cr=ra(W,$,te));let wf=!1,ro=!1,Ul=!1;const qt=cr.getUniforms(),ur=$e.uniforms;if(j.useProgram(cr.program)&&(wf=!0,ro=!0,Ul=!0),W.id!==L&&(L=W.id,ro=!0),wf||M!==R){if(qt.setValue(S,"projectionMatrix",R.projectionMatrix),k.logarithmicDepthBuffer&&qt.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),M!==R&&(M=R,ro=!0,Ul=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const cn=qt.map.cameraPosition;cn!==void 0&&cn.setValue(S,de.setFromMatrixPosition(R.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&qt.setValue(S,"isOrthographic",R.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||te.isSkinnedMesh)&&qt.setValue(S,"viewMatrix",R.matrixWorldInverse)}if(te.isSkinnedMesh){qt.setOptional(S,te,"bindMatrix"),qt.setOptional(S,te,"bindMatrixInverse");const cn=te.skeleton;cn&&(k.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),qt.setValue(S,"boneTexture",cn.boneTexture,ee),qt.setValue(S,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nl=ne.morphAttributes;if((Nl.position!==void 0||Nl.normal!==void 0||Nl.color!==void 0&&k.isWebGL2===!0)&&D.update(te,ne,cr),(ro||$e.receiveShadow!==te.receiveShadow)&&($e.receiveShadow=te.receiveShadow,qt.setValue(S,"receiveShadow",te.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ur.envMap.value=ke,ur.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ro&&(qt.setValue(S,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&Bg(ur,Ul),De&&W.fog===!0&&re.refreshFogUniforms(ur,De),re.refreshMaterialUniforms(ur,W,B,Q,Pe),Va.upload(S,$e.uniformsList,ur,ee)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Va.upload(S,$e.uniformsList,ur,ee),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&qt.setValue(S,"center",te.center),qt.setValue(S,"modelViewMatrix",te.modelViewMatrix),qt.setValue(S,"normalMatrix",te.normalMatrix),qt.setValue(S,"modelMatrix",te.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const cn=W.uniformsGroups;for(let Fl=0,zg=cn.length;Fl<zg;Fl++)if(k.isWebGL2){const Rf=cn[Fl];Ue.update(Rf,cr),Ue.bind(Rf,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function Bg(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function kg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,$,ne){pe.get(R.texture).__webglTexture=$,pe.get(R.depthTexture).__webglTexture=ne;const W=pe.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=ne===void 0,W.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,$){const ne=pe.get(R);ne.__webglFramebuffer=$,ne.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,ne=0){A=R,E=$,C=ne;let W=!0,te=null,De=!1,Ie=!1;if(R){const ke=pe.get(R);ke.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(S.FRAMEBUFFER,null),W=!1):ke.__webglFramebuffer===void 0?ee.setupRenderTarget(R):ke.__hasExternalTextures&&ee.rebindTextures(R,pe.get(R.texture).__webglTexture,pe.get(R.depthTexture).__webglTexture);const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const Ne=pe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ne[$])?te=Ne[$][ne]:te=Ne[$],De=!0):k.isWebGL2&&R.samples>0&&ee.useMultisampledRTT(R)===!1?te=pe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?te=Ne[ne]:te=Ne,w.copy(R.viewport),Y.copy(R.scissor),z=R.scissorTest}else w.copy(ce).multiplyScalar(B).floor(),Y.copy(V).multiplyScalar(B).floor(),z=J;if(j.bindFramebuffer(S.FRAMEBUFFER,te)&&k.drawBuffers&&W&&j.drawBuffers(R,te),j.viewport(w),j.scissor(Y),j.setScissorTest(z),De){const ke=pe.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,ne)}else if(Ie){const ke=pe.get(R.texture),je=$||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,ke.__webglTexture,ne||0,je)}L=-1},this.readRenderTargetPixels=function(R,$,ne,W,te,De,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){j.bindFramebuffer(S.FRAMEBUFFER,Be);try{const ke=R.texture,je=ke.format,Ne=ke.type;if(je!==Vn&&_e.convert(je)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ne===jo&&(I.has("EXT_color_buffer_half_float")||k.isWebGL2&&I.has("EXT_color_buffer_float"));if(Ne!==nr&&_e.convert(Ne)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===ji&&(k.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-W&&ne>=0&&ne<=R.height-te&&S.readPixels($,ne,W,te,_e.convert(je),_e.convert(Ne),De)}finally{const ke=A!==null?pe.get(A).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,$,ne=0){const W=Math.pow(2,-ne),te=Math.floor($.image.width*W),De=Math.floor($.image.height*W);ee.setTexture2D($,0),S.copyTexSubImage2D(S.TEXTURE_2D,ne,0,0,R.x,R.y,te,De),j.unbindTexture()},this.copyTextureToTexture=function(R,$,ne,W=0){const te=$.image.width,De=$.image.height,Ie=_e.convert(ne.format),Be=_e.convert(ne.type);ee.setTexture2D(ne,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ne.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ne.unpackAlignment),$.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,W,R.x,R.y,te,De,Ie,Be,$.image.data):$.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,W,R.x,R.y,$.mipmaps[0].width,$.mipmaps[0].height,Ie,$.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,W,R.x,R.y,Ie,Be,$.image),W===0&&ne.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(R,$,ne,W,te=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=R.max.x-R.min.x+1,Ie=R.max.y-R.min.y+1,Be=R.max.z-R.min.z+1,ke=_e.convert(W.format),je=_e.convert(W.type);let Ne;if(W.isData3DTexture)ee.setTexture3D(W,0),Ne=S.TEXTURE_3D;else if(W.isDataArrayTexture)ee.setTexture2DArray(W,0),Ne=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,W.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,W.unpackAlignment);const Ve=S.getParameter(S.UNPACK_ROW_LENGTH),mt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),vt=S.getParameter(S.UNPACK_SKIP_PIXELS),Mn=S.getParameter(S.UNPACK_SKIP_ROWS),fi=S.getParameter(S.UNPACK_SKIP_IMAGES),bt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,bt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,bt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,R.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,R.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,R.min.z),ne.isDataTexture||ne.isData3DTexture?S.texSubImage3D(Ne,te,$.x,$.y,$.z,De,Ie,Be,ke,je,bt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),S.compressedTexSubImage3D(Ne,te,$.x,$.y,$.z,De,Ie,Be,ke,bt.data)):S.texSubImage3D(Ne,te,$.x,$.y,$.z,De,Ie,Be,ke,je,bt),S.pixelStorei(S.UNPACK_ROW_LENGTH,Ve),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,mt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,vt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Mn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,fi),te===0&&W.generateMipmaps&&S.generateMipmap(Ne),j.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ee.setTextureCube(R,0):R.isData3DTexture?ee.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ee.setTexture2DArray(R,0):ee.setTexture2D(R,0),j.unbindTexture()},this.resetState=function(){E=0,C=0,A=null,j.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Fr:cg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fr?qe:ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mC extends Pg{}mC.prototype.isWebGL1Renderer=!0;class _C extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class gC extends ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ug,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lg extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Uc=new wt,lp=new F,cp=new F;class vC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lp.setFromMatrixPosition(e.matrixWorld),t.position.copy(lp),cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cp),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const up=new wt,mo=new F,Nc=new F;class xC extends vC{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(mo),Nc.copy(i.position),Nc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nc),i.updateMatrixWorld(),r.makeTranslation(-mo.x,-mo.y,-mo.z),up.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(up)}}class MC extends Lg{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class SC extends Lg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fp(){return(typeof performance>"u"?Date:performance).now()}class hp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);const dp={type:"change"},Fc={type:"start"},pp={type:"end"},Oa=new _g,mp=new Vi,yC=Math.cos(70*aT.DEG2RAD);class EC extends Yr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qr.ROTATE,MIDDLE:Qr.DOLLY,RIGHT:Qr.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",b),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(dp),i.update(),s=r.NONE},this.update=function(){const D=new F,fe=new Gr().setFromUnitVectors(e.up,new F(0,1,0)),Ee=fe.clone().invert(),_e=new F,xe=new Gr,Ue=new F,Ke=2*Math.PI;return function(){const Te=i.object.position;D.copy(Te).sub(i.target),D.applyQuaternion(fe),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&Y(M()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Z=i.minAzimuthAngle,ge=i.maxAzimuthAngle;isFinite(Z)&&isFinite(ge)&&(Z<-Math.PI?Z+=Ke:Z>Math.PI&&(Z-=Ke),ge<-Math.PI?ge+=Ke:ge>Math.PI&&(ge-=Ke),Z<=ge?a.theta=Math.max(Z,Math.min(ge,a.theta)):a.theta=a.theta>(Z+ge)/2?Math.max(Z,a.theta):Math.min(ge,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=oe(a.radius):a.radius=oe(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(Ee),Te.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Ae=!1;if(i.zoomToCursor&&C){let Xe=null;if(i.object.isPerspectiveCamera){const et=D.length();Xe=oe(et*c);const ot=et-Xe;i.object.position.addScaledVector(y,ot),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const et=new F(E.x,E.y,0);et.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ae=!0;const ot=new F(E.x,E.y,0);ot.unproject(i.object),i.object.position.sub(ot).add(et),i.object.updateMatrixWorld(),Xe=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Xe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Xe).add(i.object.position):(Oa.origin.copy(i.object.position),Oa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Oa.direction))<yC?e.lookAt(i.target):(mp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Oa.intersectPlane(mp,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ae=!0);return c=1,C=!1,Ae||_e.distanceToSquared(i.object.position)>o||8*(1-xe.dot(i.object.quaternion))>o||Ue.distanceToSquared(i.target)>0?(i.dispatchEvent(dp),_e.copy(i.object.position),xe.copy(i.object.quaternion),Ue.copy(i.target),Ae=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",se),i.domElement.removeEventListener("pointerdown",pe),i.domElement.removeEventListener("pointercancel",he),i.domElement.removeEventListener("wheel",T),i.domElement.removeEventListener("pointermove",ee),i.domElement.removeEventListener("pointerup",he),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",b),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new hp,l=new hp;let c=1;const u=new F,f=new ze,h=new ze,d=new ze,g=new ze,_=new ze,m=new ze,p=new ze,x=new ze,v=new ze,y=new F,E=new ze;let C=!1;const A=[],L={};function M(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function Y(D){l.theta-=D}function z(D){l.phi-=D}const N=function(){const D=new F;return function(Ee,_e){D.setFromMatrixColumn(_e,0),D.multiplyScalar(-Ee),u.add(D)}}(),G=function(){const D=new F;return function(Ee,_e){i.screenSpacePanning===!0?D.setFromMatrixColumn(_e,1):(D.setFromMatrixColumn(_e,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(Ee),u.add(D)}}(),H=function(){const D=new F;return function(Ee,_e){const xe=i.domElement;if(i.object.isPerspectiveCamera){const Ue=i.object.position;D.copy(Ue).sub(i.target);let Ke=D.length();Ke*=Math.tan(i.object.fov/2*Math.PI/180),N(2*Ee*Ke/xe.clientHeight,i.object.matrix),G(2*_e*Ke/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(Ee*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),G(_e*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(D){if(!i.zoomToCursor)return;C=!0;const fe=i.domElement.getBoundingClientRect(),Ee=D.clientX-fe.left,_e=D.clientY-fe.top,xe=fe.width,Ue=fe.height;E.x=Ee/xe*2-1,E.y=-(_e/Ue)*2+1,y.set(E.x,E.y,1).unproject(e).sub(e.position).normalize()}function oe(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function ce(D){f.set(D.clientX,D.clientY)}function V(D){q(D),p.set(D.clientX,D.clientY)}function J(D){g.set(D.clientX,D.clientY)}function Me(D){h.set(D.clientX,D.clientY),d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const fe=i.domElement;Y(2*Math.PI*d.x/fe.clientHeight),z(2*Math.PI*d.y/fe.clientHeight),f.copy(h),i.update()}function ve(D){x.set(D.clientX,D.clientY),v.subVectors(x,p),v.y>0?Q(w()):v.y<0&&B(w()),p.copy(x),i.update()}function Se(D){_.set(D.clientX,D.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(_),i.update()}function Pe(D){q(D),D.deltaY<0?B(w()):D.deltaY>0&&Q(w()),i.update()}function X(D){let fe=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),fe=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),fe=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),fe=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),fe=!0;break}fe&&(D.preventDefault(),i.update())}function ae(){if(A.length===1)f.set(A[0].pageX,A[0].pageY);else{const D=.5*(A[0].pageX+A[1].pageX),fe=.5*(A[0].pageY+A[1].pageY);f.set(D,fe)}}function de(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const D=.5*(A[0].pageX+A[1].pageX),fe=.5*(A[0].pageY+A[1].pageY);g.set(D,fe)}}function we(){const D=A[0].pageX-A[1].pageX,fe=A[0].pageY-A[1].pageY,Ee=Math.sqrt(D*D+fe*fe);p.set(0,Ee)}function Ce(){i.enableZoom&&we(),i.enablePan&&de()}function S(){i.enableZoom&&we(),i.enableRotate&&ae()}function P(D){if(A.length==1)h.set(D.pageX,D.pageY);else{const Ee=K(D),_e=.5*(D.pageX+Ee.x),xe=.5*(D.pageY+Ee.y);h.set(_e,xe)}d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const fe=i.domElement;Y(2*Math.PI*d.x/fe.clientHeight),z(2*Math.PI*d.y/fe.clientHeight),f.copy(h)}function I(D){if(A.length===1)_.set(D.pageX,D.pageY);else{const fe=K(D),Ee=.5*(D.pageX+fe.x),_e=.5*(D.pageY+fe.y);_.set(Ee,_e)}m.subVectors(_,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(_)}function k(D){const fe=K(D),Ee=D.pageX-fe.x,_e=D.pageY-fe.y,xe=Math.sqrt(Ee*Ee+_e*_e);x.set(0,xe),v.set(0,Math.pow(x.y/p.y,i.zoomSpeed)),Q(v.y),p.copy(x)}function j(D){i.enableZoom&&k(D),i.enablePan&&I(D)}function ie(D){i.enableZoom&&k(D),i.enableRotate&&P(D)}function pe(D){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",ee),i.domElement.addEventListener("pointerup",he)),le(D),D.pointerType==="touch"?U(D):ue(D))}function ee(D){i.enabled!==!1&&(D.pointerType==="touch"?re(D):Re(D))}function he(D){be(D),A.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",ee),i.domElement.removeEventListener("pointerup",he)),i.dispatchEvent(pp),s=r.NONE}function ue(D){let fe;switch(D.button){case 0:fe=i.mouseButtons.LEFT;break;case 1:fe=i.mouseButtons.MIDDLE;break;case 2:fe=i.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case Qr.DOLLY:if(i.enableZoom===!1)return;V(D),s=r.DOLLY;break;case Qr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;J(D),s=r.PAN}else{if(i.enableRotate===!1)return;ce(D),s=r.ROTATE}break;case Qr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;ce(D),s=r.ROTATE}else{if(i.enablePan===!1)return;J(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Fc)}function Re(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Me(D);break;case r.DOLLY:if(i.enableZoom===!1)return;ve(D);break;case r.PAN:if(i.enablePan===!1)return;Se(D);break}}function T(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(Fc),Pe(D),i.dispatchEvent(pp))}function b(D){i.enabled===!1||i.enablePan===!1||X(D)}function U(D){switch(me(D),A.length){case 1:switch(i.touches.ONE){case es.ROTATE:if(i.enableRotate===!1)return;ae(),s=r.TOUCH_ROTATE;break;case es.PAN:if(i.enablePan===!1)return;de(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case es.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(),s=r.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Fc)}function re(D){switch(me(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;P(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;I(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ie(D),i.update();break;default:s=r.NONE}}function se(D){i.enabled!==!1&&D.preventDefault()}function le(D){A.push(D)}function be(D){delete L[D.pointerId];for(let fe=0;fe<A.length;fe++)if(A[fe].pointerId==D.pointerId){A.splice(fe,1);return}}function me(D){let fe=L[D.pointerId];fe===void 0&&(fe=new ze,L[D.pointerId]=fe),fe.set(D.pageX,D.pageY)}function K(D){const fe=D.pointerId===A[0].pointerId?A[1]:A[0];return L[fe.pointerId]}i.domElement.addEventListener("contextmenu",se),i.domElement.addEventListener("pointerdown",pe),i.domElement.addEventListener("pointercancel",he),i.domElement.addEventListener("wheel",T,{passive:!1}),this.update()}}const TC={data(){return{states:[],color:"#0083c4"}},mounted(){this.sizes=this.getSizes(),this.init(),this.resize(),this.tick()},methods:{init(){this.canvas=this.$refs.webGl,this.scene=new _C,this.camera=new dn(45,this.sizes.width/this.sizes.height,.01,10),this.camera.position.x=4,this.camera.position.y=2,this.camera.position.z=5,this.renderer=new Pg({antialias:!0}),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.canvas.appendChild(this.renderer.domElement),this.scene.add(this.camera),this.controls=new EC(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.minDistance=3,this.controls.maxDistance=6,this.planeMaterial=new gC({transparent:!0,opacity:1,side:ni,wireframe:!1}),this.planeMaterial.color.set(this.color),this.planeGeometry=new to(1,1,1),this.plane=new Ei(this.planeGeometry,this.planeMaterial),this.scene.add(this.plane),this.ambientLight=new SC(4210752,.8),this.scene.add(this.ambientLight),this.pointLight=new MC(4210752,10,100),this.pointLight.position.x=.8,this.pointLight.position.y=.8,this.pointLight.position.z=.8,this.sphereSize=1,this.scene.add(this.pointLight),this.clock=new bC},tick(){let e=this.clock.getElapsedTime()-this.prev;this.prev=e,this.planeMaterial.color.set(this.color),this.plane.rotation.y+=.01,this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.tick)},getSizes(){return{width:window.innerWidth,height:window.innerHeight}},resize(){window.addEventListener("resize",()=>{this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})},check(n,e){this.color=e}}},AC={ref:"webGl",class:"webGl"},wC={class:"webGl__btn_container"};function RC(n,e,t,i,r,s){return Fe(),He("div",null,[Le("div",AC,null,512),Le("div",wC,[hm(n.$slots,"default")])])}const CC=xn(TC,[["render",RC]]);const PC={components:{webGl:CC},computed:{...li("status",["start"])},methods:{...qr("status",["getStart"])}};function LC(n,e,t,i,r,s){const o=Hn("router-link"),a=Hn("webGl");return Fe(),He("div",null,[nt(a,null,{default:mn(()=>[n.start?En("",!0):(Fe(),Zo(o,{key:0,to:{name:"tutorial-page"},onClick:n.getStart,class:"btn"},{default:mn(()=>[Ka("Start")]),_:1},8,["onClick"]))]),_:1})])}const DC=xn(PC,[["render",LC]]);const IC={components:{Header:qy,NavigationButton:$y,Splash:DC},computed:{...li("header",["curentPage","menu","menuState"]),...li("status",["start","lastPage","objectivs","restorAPIobjectivs"]),checkRouteName(){return this.$route.name===void 0?1:this.curentPage(this.$route.name)}},methods:{...qr("status",["addVisitPage","setLocation","saveState"]),onGlobalScroll(n){if(this.menuState){let e=this.$refs.globalScroll;e.$el.scrollTop=e.ps.lastScrollTop}}},watch:{start(){this.start&&(this.addVisitPage(this.$route.name),this.lastPage!==void 0&&this.lastPage!==null&&this.$router.push({path:this.lastPage}),this.restorAPIobjectivs)},$route(){this.start&&(this.setLocation(),this.addVisitPage(this.$route.name),this.saveState())}}},OC={class:"wrapper"},UC={class:"container"},NC={class:"btn__counter"};function FC(n,e,t,i,r,s){const o=Hn("Splash"),a=Hn("Header"),l=Hn("router-view"),c=Hn("NavigationButton"),u=Hn("perfect-scrollbar");return Fe(),He("div",null,[nt(o,{class:Jt({disable:n.start})},null,8,["class"]),jv(nt(u,{ref:"globalScroll",onPsScrollY:s.onGlobalScroll,class:"js-global-scroll"},{default:mn(()=>[Le("div",OC,[Le("div",UC,[nt(a),nt(l,null,{default:mn(({Component:f})=>[nt(Tl,{appear:"",mode:"out-in","appear-active-class":"animate__animated animate__fadeIn","enter-active-class":"animate__animated animate__faster animate__fadeInLeft","leave-active-class":"animate__animated animate__faster animate__fadeOut"},{default:mn(()=>[(Fe(),Zo(um(f),{key:n.$route.path}))]),_:2},1024)]),_:1}),nt(c,null,{default:mn(()=>[Le("h2",NC,ht(s.checkRouteName+1)+"/"+ht(n.menu.length),1)]),_:1})])])]),_:1},8,["onPsScrollY"]),[[ux,n.start]])])}const BC=xn(IC,[["render",FC]]);/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function ri(n){return getComputedStyle(n)}function Zt(n,e){for(var t in e){var i=e[t];typeof i=="number"&&(i=i+"px"),n.style[t]=i}return n}function Ua(n){var e=document.createElement("div");return e.className=n,e}var _p=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function $i(n,e){if(!_p)throw new Error("No element matching method supported");return _p.call(n,e)}function Ts(n){n.remove?n.remove():n.parentNode&&n.parentNode.removeChild(n)}function gp(n,e){return Array.prototype.filter.call(n.children,function(t){return $i(t,e)})}var At={main:"ps",rtl:"ps__rtl",element:{thumb:function(n){return"ps__thumb-"+n},rail:function(n){return"ps__rail-"+n},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(n){return"ps--active-"+n},scrolling:function(n){return"ps--scrolling-"+n}}},Dg={x:null,y:null};function Ig(n,e){var t=n.element.classList,i=At.state.scrolling(e);t.contains(i)?clearTimeout(Dg[e]):t.add(i)}function Og(n,e){Dg[e]=setTimeout(function(){return n.isAlive&&n.element.classList.remove(At.state.scrolling(e))},n.settings.scrollingThreshold)}function kC(n,e){Ig(n,e),Og(n,e)}var ta=function(e){this.element=e,this.handlers={}},Ug={isEmpty:{configurable:!0}};ta.prototype.bind=function(e,t){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(t),this.element.addEventListener(e,t,!1)};ta.prototype.unbind=function(e,t){var i=this;this.handlers[e]=this.handlers[e].filter(function(r){return t&&r!==t?!0:(i.element.removeEventListener(e,r,!1),!1)})};ta.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};Ug.isEmpty.get=function(){var n=this;return Object.keys(this.handlers).every(function(e){return n.handlers[e].length===0})};Object.defineProperties(ta.prototype,Ug);var io=function(){this.eventElements=[]};io.prototype.eventElement=function(e){var t=this.eventElements.filter(function(i){return i.element===e})[0];return t||(t=new ta(e),this.eventElements.push(t)),t};io.prototype.bind=function(e,t,i){this.eventElement(e).bind(t,i)};io.prototype.unbind=function(e,t,i){var r=this.eventElement(e);r.unbind(t,i),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)};io.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};io.prototype.once=function(e,t,i){var r=this.eventElement(e),s=function(o){r.unbind(t,s),i(o)};r.bind(t,s)};function Na(n){if(typeof window.CustomEvent=="function")return new CustomEvent(n);var e=document.createEvent("CustomEvent");return e.initCustomEvent(n,!1,!1,void 0),e}function ul(n,e,t,i,r){i===void 0&&(i=!0),r===void 0&&(r=!1);var s;if(e==="top")s=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")s=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");zC(n,t,s,i,r)}function zC(n,e,t,i,r){var s=t[0],o=t[1],a=t[2],l=t[3],c=t[4],u=t[5];i===void 0&&(i=!0),r===void 0&&(r=!1);var f=n.element;n.reach[l]=null,f[a]<1&&(n.reach[l]="start"),f[a]>n[s]-n[o]-1&&(n.reach[l]="end"),e&&(f.dispatchEvent(Na("ps-scroll-"+l)),e<0?f.dispatchEvent(Na("ps-scroll-"+c)):e>0&&f.dispatchEvent(Na("ps-scroll-"+u)),i&&kC(n,l)),n.reach[l]&&(e||r)&&f.dispatchEvent(Na("ps-"+l+"-reach-"+n.reach[l]))}function ft(n){return parseInt(n,10)||0}function HC(n){return $i(n,"input,[contenteditable]")||$i(n,"select,[contenteditable]")||$i(n,"textarea,[contenteditable]")||$i(n,"button,[contenteditable]")}function GC(n){var e=ri(n);return ft(e.width)+ft(e.paddingLeft)+ft(e.paddingRight)+ft(e.borderLeftWidth)+ft(e.borderRightWidth)}var Ss={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function Pi(n){var e=n.element,t=Math.floor(e.scrollTop),i=e.getBoundingClientRect();n.containerWidth=Math.round(i.width),n.containerHeight=Math.round(i.height),n.contentWidth=e.scrollWidth,n.contentHeight=e.scrollHeight,e.contains(n.scrollbarXRail)||(gp(e,At.element.rail("x")).forEach(function(r){return Ts(r)}),e.appendChild(n.scrollbarXRail)),e.contains(n.scrollbarYRail)||(gp(e,At.element.rail("y")).forEach(function(r){return Ts(r)}),e.appendChild(n.scrollbarYRail)),!n.settings.suppressScrollX&&n.containerWidth+n.settings.scrollXMarginOffset<n.contentWidth?(n.scrollbarXActive=!0,n.railXWidth=n.containerWidth-n.railXMarginWidth,n.railXRatio=n.containerWidth/n.railXWidth,n.scrollbarXWidth=vp(n,ft(n.railXWidth*n.containerWidth/n.contentWidth)),n.scrollbarXLeft=ft((n.negativeScrollAdjustment+e.scrollLeft)*(n.railXWidth-n.scrollbarXWidth)/(n.contentWidth-n.containerWidth))):n.scrollbarXActive=!1,!n.settings.suppressScrollY&&n.containerHeight+n.settings.scrollYMarginOffset<n.contentHeight?(n.scrollbarYActive=!0,n.railYHeight=n.containerHeight-n.railYMarginHeight,n.railYRatio=n.containerHeight/n.railYHeight,n.scrollbarYHeight=vp(n,ft(n.railYHeight*n.containerHeight/n.contentHeight)),n.scrollbarYTop=ft(t*(n.railYHeight-n.scrollbarYHeight)/(n.contentHeight-n.containerHeight))):n.scrollbarYActive=!1,n.scrollbarXLeft>=n.railXWidth-n.scrollbarXWidth&&(n.scrollbarXLeft=n.railXWidth-n.scrollbarXWidth),n.scrollbarYTop>=n.railYHeight-n.scrollbarYHeight&&(n.scrollbarYTop=n.railYHeight-n.scrollbarYHeight),VC(e,n),n.scrollbarXActive?e.classList.add(At.state.active("x")):(e.classList.remove(At.state.active("x")),n.scrollbarXWidth=0,n.scrollbarXLeft=0,e.scrollLeft=n.isRtl===!0?n.contentWidth:0),n.scrollbarYActive?e.classList.add(At.state.active("y")):(e.classList.remove(At.state.active("y")),n.scrollbarYHeight=0,n.scrollbarYTop=0,e.scrollTop=0)}function vp(n,e){return n.settings.minScrollbarLength&&(e=Math.max(e,n.settings.minScrollbarLength)),n.settings.maxScrollbarLength&&(e=Math.min(e,n.settings.maxScrollbarLength)),e}function VC(n,e){var t={width:e.railXWidth},i=Math.floor(n.scrollTop);e.isRtl?t.left=e.negativeScrollAdjustment+n.scrollLeft+e.containerWidth-e.contentWidth:t.left=n.scrollLeft,e.isScrollbarXUsingBottom?t.bottom=e.scrollbarXBottom-i:t.top=e.scrollbarXTop+i,Zt(e.scrollbarXRail,t);var r={top:i,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+n.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:r.right=e.scrollbarYRight-n.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+n.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+n.scrollLeft,Zt(e.scrollbarYRail,r),Zt(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),Zt(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function WC(n){n.element,n.event.bind(n.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),n.event.bind(n.scrollbarYRail,"mousedown",function(e){var t=e.pageY-window.pageYOffset-n.scrollbarYRail.getBoundingClientRect().top,i=t>n.scrollbarYTop?1:-1;n.element.scrollTop+=i*n.containerHeight,Pi(n),e.stopPropagation()}),n.event.bind(n.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),n.event.bind(n.scrollbarXRail,"mousedown",function(e){var t=e.pageX-window.pageXOffset-n.scrollbarXRail.getBoundingClientRect().left,i=t>n.scrollbarXLeft?1:-1;n.element.scrollLeft+=i*n.containerWidth,Pi(n),e.stopPropagation()})}function qC(n){xp(n,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),xp(n,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function xp(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=n.element,h=null,d=null,g=null;function _(x){x.touches&&x.touches[0]&&(x[r]=x.touches[0].pageY),f[l]=h+g*(x[r]-d),Ig(n,c),Pi(n),x.stopPropagation(),x.type.startsWith("touch")&&x.changedTouches.length>1&&x.preventDefault()}function m(){Og(n,c),n[u].classList.remove(At.state.clicking),n.event.unbind(n.ownerDocument,"mousemove",_)}function p(x,v){h=f[l],v&&x.touches&&(x[r]=x.touches[0].pageY),d=x[r],g=(n[i]-n[t])/(n[s]-n[a]),v?n.event.bind(n.ownerDocument,"touchmove",_):(n.event.bind(n.ownerDocument,"mousemove",_),n.event.once(n.ownerDocument,"mouseup",m),x.preventDefault()),n[u].classList.add(At.state.clicking),x.stopPropagation()}n.event.bind(n[o],"mousedown",function(x){p(x)}),n.event.bind(n[o],"touchstart",function(x){p(x,!0)})}function XC(n){var e=n.element,t=function(){return $i(e,":hover")},i=function(){return $i(n.scrollbarX,":focus")||$i(n.scrollbarY,":focus")};function r(s,o){var a=Math.floor(e.scrollTop);if(s===0){if(!n.scrollbarYActive)return!1;if(a===0&&o>0||a>=n.contentHeight-n.containerHeight&&o<0)return!n.settings.wheelPropagation}var l=e.scrollLeft;if(o===0){if(!n.scrollbarXActive)return!1;if(l===0&&s<0||l>=n.contentWidth-n.containerWidth&&s>0)return!n.settings.wheelPropagation}return!0}n.event.bind(n.ownerDocument,"keydown",function(s){if(!(s.isDefaultPrevented&&s.isDefaultPrevented()||s.defaultPrevented)&&!(!t()&&!i())){var o=document.activeElement?document.activeElement:n.ownerDocument.activeElement;if(o){if(o.tagName==="IFRAME")o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(HC(o))return}var a=0,l=0;switch(s.which){case 37:s.metaKey?a=-n.contentWidth:s.altKey?a=-n.containerWidth:a=-30;break;case 38:s.metaKey?l=n.contentHeight:s.altKey?l=n.containerHeight:l=30;break;case 39:s.metaKey?a=n.contentWidth:s.altKey?a=n.containerWidth:a=30;break;case 40:s.metaKey?l=-n.contentHeight:s.altKey?l=-n.containerHeight:l=-30;break;case 32:s.shiftKey?l=n.containerHeight:l=-n.containerHeight;break;case 33:l=n.containerHeight;break;case 34:l=-n.containerHeight;break;case 36:l=n.contentHeight;break;case 35:l=-n.contentHeight;break;default:return}n.settings.suppressScrollX&&a!==0||n.settings.suppressScrollY&&l!==0||(e.scrollTop-=l,e.scrollLeft+=a,Pi(n),r(a,l)&&s.preventDefault())}})}function YC(n){var e=n.element;function t(o,a){var l=Math.floor(e.scrollTop),c=e.scrollTop===0,u=l+e.offsetHeight===e.scrollHeight,f=e.scrollLeft===0,h=e.scrollLeft+e.offsetWidth===e.scrollWidth,d;return Math.abs(a)>Math.abs(o)?d=c||u:d=f||h,d?!n.settings.wheelPropagation:!0}function i(o){var a=o.deltaX,l=-1*o.deltaY;return(typeof a>"u"||typeof l>"u")&&(a=-1*o.wheelDeltaX/6,l=o.wheelDeltaY/6),o.deltaMode&&o.deltaMode===1&&(a*=10,l*=10),a!==a&&l!==l&&(a=0,l=o.wheelDelta),o.shiftKey?[-l,-a]:[a,l]}function r(o,a,l){if(!Ss.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(o))return!1;for(var c=o;c&&c!==e;){if(c.classList.contains(At.element.consuming))return!0;var u=ri(c);if(l&&u.overflowY.match(/(scroll|auto)/)){var f=c.scrollHeight-c.clientHeight;if(f>0&&(c.scrollTop>0&&l<0||c.scrollTop<f&&l>0))return!0}if(a&&u.overflowX.match(/(scroll|auto)/)){var h=c.scrollWidth-c.clientWidth;if(h>0&&(c.scrollLeft>0&&a<0||c.scrollLeft<h&&a>0))return!0}c=c.parentNode}return!1}function s(o){var a=i(o),l=a[0],c=a[1];if(!r(o.target,l,c)){var u=!1;n.settings.useBothWheelAxes?n.scrollbarYActive&&!n.scrollbarXActive?(c?e.scrollTop-=c*n.settings.wheelSpeed:e.scrollTop+=l*n.settings.wheelSpeed,u=!0):n.scrollbarXActive&&!n.scrollbarYActive&&(l?e.scrollLeft+=l*n.settings.wheelSpeed:e.scrollLeft-=c*n.settings.wheelSpeed,u=!0):(e.scrollTop-=c*n.settings.wheelSpeed,e.scrollLeft+=l*n.settings.wheelSpeed),Pi(n),u=u||t(l,c),u&&!o.ctrlKey&&(o.stopPropagation(),o.preventDefault())}}typeof window.onwheel<"u"?n.event.bind(e,"wheel",s):typeof window.onmousewheel<"u"&&n.event.bind(e,"mousewheel",s)}function jC(n){if(!Ss.supportsTouch&&!Ss.supportsIePointer)return;var e=n.element;function t(g,_){var m=Math.floor(e.scrollTop),p=e.scrollLeft,x=Math.abs(g),v=Math.abs(_);if(v>x){if(_<0&&m===n.contentHeight-n.containerHeight||_>0&&m===0)return window.scrollY===0&&_>0&&Ss.isChrome}else if(x>v&&(g<0&&p===n.contentWidth-n.containerWidth||g>0&&p===0))return!0;return!0}function i(g,_){e.scrollTop-=_,e.scrollLeft-=g,Pi(n)}var r={},s=0,o={},a=null;function l(g){return g.targetTouches?g.targetTouches[0]:g}function c(g){return g.pointerType&&g.pointerType==="pen"&&g.buttons===0?!1:!!(g.targetTouches&&g.targetTouches.length===1||g.pointerType&&g.pointerType!=="mouse"&&g.pointerType!==g.MSPOINTER_TYPE_MOUSE)}function u(g){if(c(g)){var _=l(g);r.pageX=_.pageX,r.pageY=_.pageY,s=new Date().getTime(),a!==null&&clearInterval(a)}}function f(g,_,m){if(!e.contains(g))return!1;for(var p=g;p&&p!==e;){if(p.classList.contains(At.element.consuming))return!0;var x=ri(p);if(m&&x.overflowY.match(/(scroll|auto)/)){var v=p.scrollHeight-p.clientHeight;if(v>0&&(p.scrollTop>0&&m<0||p.scrollTop<v&&m>0))return!0}if(_&&x.overflowX.match(/(scroll|auto)/)){var y=p.scrollWidth-p.clientWidth;if(y>0&&(p.scrollLeft>0&&_<0||p.scrollLeft<y&&_>0))return!0}p=p.parentNode}return!1}function h(g){if(c(g)){var _=l(g),m={pageX:_.pageX,pageY:_.pageY},p=m.pageX-r.pageX,x=m.pageY-r.pageY;if(f(g.target,p,x))return;i(p,x),r=m;var v=new Date().getTime(),y=v-s;y>0&&(o.x=p/y,o.y=x/y,s=v),t(p,x)&&g.preventDefault()}}function d(){n.settings.swipeEasing&&(clearInterval(a),a=setInterval(function(){if(n.isInitialized){clearInterval(a);return}if(!o.x&&!o.y){clearInterval(a);return}if(Math.abs(o.x)<.01&&Math.abs(o.y)<.01){clearInterval(a);return}if(!n.element){clearInterval(a);return}i(o.x*30,o.y*30),o.x*=.8,o.y*=.8},10))}Ss.supportsTouch?(n.event.bind(e,"touchstart",u),n.event.bind(e,"touchmove",h),n.event.bind(e,"touchend",d)):Ss.supportsIePointer&&(window.PointerEvent?(n.event.bind(e,"pointerdown",u),n.event.bind(e,"pointermove",h),n.event.bind(e,"pointerup",d)):window.MSPointerEvent&&(n.event.bind(e,"MSPointerDown",u),n.event.bind(e,"MSPointerMove",h),n.event.bind(e,"MSPointerUp",d)))}var $C=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},KC={"click-rail":WC,"drag-thumb":qC,keyboard:XC,wheel:YC,touch:jC},na=function(e,t){var i=this;if(t===void 0&&(t={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(At.main),this.settings=$C();for(var r in t)this.settings[r]=t[r];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return e.classList.add(At.state.focus)},o=function(){return e.classList.remove(At.state.focus)};this.isRtl=ri(e).direction==="rtl",this.isRtl===!0&&e.classList.add(At.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,u=null;return e.scrollLeft=-1,u=e.scrollLeft<0,e.scrollLeft=c,u}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new io,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=Ua(At.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=Ua(At.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",o),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var a=ri(this.scrollbarXRail);this.scrollbarXBottom=parseInt(a.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=ft(a.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=ft(a.borderLeftWidth)+ft(a.borderRightWidth),Zt(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=ft(a.marginLeft)+ft(a.marginRight),Zt(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=Ua(At.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=Ua(At.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",o),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var l=ri(this.scrollbarYRail);this.scrollbarYRight=parseInt(l.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=ft(l.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?GC(this.scrollbarY):null,this.railBorderYWidth=ft(l.borderTopWidth)+ft(l.borderBottomWidth),Zt(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=ft(l.marginTop)+ft(l.marginBottom),Zt(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return KC[c](i)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return i.onScroll(c)}),Pi(this)};na.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,Zt(this.scrollbarXRail,{display:"block"}),Zt(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=ft(ri(this.scrollbarXRail).marginLeft)+ft(ri(this.scrollbarXRail).marginRight),this.railYMarginHeight=ft(ri(this.scrollbarYRail).marginTop)+ft(ri(this.scrollbarYRail).marginBottom),Zt(this.scrollbarXRail,{display:"none"}),Zt(this.scrollbarYRail,{display:"none"}),Pi(this),ul(this,"top",0,!1,!0),ul(this,"left",0,!1,!0),Zt(this.scrollbarXRail,{display:""}),Zt(this.scrollbarYRail,{display:""}))};na.prototype.onScroll=function(e){this.isAlive&&(Pi(this),ul(this,"top",this.element.scrollTop-this.lastScrollTop),ul(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};na.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),Ts(this.scrollbarX),Ts(this.scrollbarY),Ts(this.scrollbarXRail),Ts(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};na.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const Mp=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var gs={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:Mp,data(){return{ps:null}},watch:{watchOptions(n){!n&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new na(this.$el,this.options),Mp.forEach(n=>{this.ps.element.addEventListener(n,e=>this.$emit(n,e))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return El(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}},ZC={install:(n,e)=>{e&&(e.name&&typeof e.name=="string"&&(gs.name=e.name),e.options&&typeof e.options=="object"&&(gs.props.options.default=()=>e.options),e.tag&&typeof e.tag=="string"&&(gs.props.tag.default=e.tag),e.watchOptions&&typeof e.watchOptions=="boolean"&&(gs.props.watchOptions=e.watchOptions)),n.component(gs.name,gs)}};dx(BC).use(ZC,{watchOptions:!0,options:{suppressScrollX:!0}}).use(xy).use(oy).use(vy).mount("#app");
