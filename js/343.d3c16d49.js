"use strict";(self["webpackChunkdelmooweb"]=self["webpackChunkdelmooweb"]||[]).push([[343],{7343:function(e,t,s){s.r(t),s.d(t,{scopeCss:function(){return Q}});s(7658);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from `webcomponents.js` to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
const r=e=>{const t=[];let s=0;e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const c=`__ph-${s}__`;return t.push(r),s++,c}));const r=e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,c)=>{const o=`__ph-${s}__`;return t.push(c),s++,r+o})),c={content:r,placeholders:t};return c},c=(e,t)=>t.replace(/__ph-(\d+)__/g,((t,s)=>e[+s])),o="-shadowcsshost",n="-shadowcssslotted",l="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",p=new RegExp("("+o+i,"gim"),a=new RegExp("("+l+i,"gim"),h=new RegExp("("+n+i,"gim"),u=o+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,d=[/::shadow/g,/::content/g],m="([>\\s~+[.,{:][\\s\\S]*)?$",$=/-shadowcsshost/gim,f=e=>new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${e}\\b)`,"gim"),x=f("::slotted"),w=f(":host"),_=f(":host-context"),b=/\/\*\s*[\s\S]*?\*\//g,S=e=>e.replace(b,""),W=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,k=e=>e.match(W)||[],O=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,E=/([{}])/g,R=/(^.*?[^\\])??((:+)(.*)|$)/,j="{",C="}",T="%BLOCK%",L=(e,t)=>{const s=B(e);let r=0;return s.escapedString.replace(O,((...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{"+T)&&(o=s.blocks[r++],n=n.substring(T.length+1),l="{");const i={selector:c,content:o},p=t(i);return`${e[1]}${p.selector}${e[3]}${l}${p.content}${n}`}))},B=e=>{const t=e.split(E),s=[],r=[];let c=0,o=[];for(let l=0;l<t.length;l++){const e=t[l];e===C&&c--,c>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(T),o=[]),s.push(e)),e===j&&c++}o.length>0&&(r.push(o.join("")),s.push(T));const n={escapedString:s.join(""),blocks:r};return n},I=e=>(e=e.replace(_,`$1${l}`).replace(w,`$1${o}`).replace(x,`$1${n}`),e),K=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(u,o,e[3]))}return r.join(",")}return u+e[3]})),M=(e,t,s)=>e+t.replace(o,"")+s,U=e=>K(e,p,M),q=(e,t,s)=>t.indexOf(o)>-1?M(e,t,s):e+t+s+", "+t+" "+e+s,v=(e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(h,((...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],o=s+t+c;let n="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;n=t+n}const l=n+o,i=`${n.trimRight()}${o.trim()}`;if(l.trim()!==i.trim()){const e=`${i}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return u+e[3]})),{selectors:r,cssText:e}},y=e=>K(e,a,q),z=e=>d.reduce(((e,t)=>e.replace(t," ")),e),A=e=>{const t=/\[/g,s=/\]/g;return e=e.replace(t,"\\[").replace(s,"\\]"),new RegExp("^("+e+")"+m,"m")},D=(e,t)=>{const s=A(t);return!s.test(e)},F=(e,t)=>e.replace(R,((e,s="",r,c="",o="")=>s+t+c+o)),G=(e,t,s)=>{if($.lastIndex=0,$.test(e)){const t=`.${s}`;return e.replace(g,((e,s)=>F(s,t))).replace($,t+" ")}return t+" "+e},H=(e,t,s)=>{const o=/\[is=([^\]]*)\]/g;t=t.replace(o,((e,...t)=>t[0]));const n="."+t,l=e=>{let r=e.trim();if(!r)return"";if(e.indexOf(u)>-1)r=G(e,t,s);else{const t=e.replace($,"");t.length>0&&(r=F(t,n))}return r},i=r(e);e=i.content;let p,a="",h=0;const g=/( |>|\+|~(?!=))\s*/g,d=e.indexOf(u)>-1;let m=!d;while(null!==(p=g.exec(e))){const t=p[1],s=e.slice(h,p.index).trim();m=m||s.indexOf(u)>-1;const r=m?l(s):s;a+=`${r} ${t} `,h=g.lastIndex}const f=e.substring(h);return m=m||f.indexOf(u)>-1,a+=m?l(f):f,c(i.placeholders,a)},J=(e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():D(e,t)?H(e,t,s).trim():e.trim())).join(", "),N=(e,t,s,r,c)=>L(e,(e=>{let c=e.selector,o=e.content;"@"!==e.selector[0]?c=J(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=N(e.content,t,s,r));const n={selector:c.replace(/\s{2,}/g," ").trim(),content:o};return n})),P=(e,t,s,r,c)=>{e=I(e),e=U(e),e=y(e);const o=v(e,r);return e=o.cssText,e=z(e),t&&(e=N(e,t,s,r)),e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`),e=e.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:e.trim(),slottedSelectors:o.selectors}},Q=(e,t,s)=>{const r=t+"-h",c=t+"-s",o=k(e);e=S(e);const n=[];if(s){const t=e=>{const t=`/*!@___${n.length}___*/`,s=`/*!@${e.selector}*/`;return n.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=L(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=L(e.content,t),e):e))}const l=P(e,t,r,c);return e=[l.cssText,...o].join("\n"),s&&n.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),l.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}}}]);
//# sourceMappingURL=343.d3c16d49.js.map