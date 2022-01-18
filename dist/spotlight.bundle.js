/**
 * Spotlight.js v0.7.8 (Bundle)(Custom)
 * Copyright 2019-2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */
(function(){'use strict';var aa=document.createElement("style");aa.innerHTML="@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight{position:fixed;top:-1px;bottom:-1px;width:100%;z-index:99999;color:#fff;background-color:#000;opacity:0;overflow:hidden;-webkit-user-select:none;user-select:none;transition:opacity .2s ease-out;font-family:Arial,sans-serif;font-size:16px;font-weight:400;contain:strict;touch-action:none;pointer-events:none}#spotlight.show{opacity:1;transition:none;pointer-events:auto}#spotlight.white{color:#212529;background-color:#fff}#spotlight.white .spl-next,#spotlight.white .spl-page~*,#spotlight.white .spl-prev,#spotlight.white .spl-spinner{filter:invert(1)}#spotlight.white .spl-progress{background-color:rgba(0,0,0,.35)}#spotlight.white .spl-footer,#spotlight.white .spl-header{background-color:rgba(255,255,255,.65)}#spotlight.white .spl-button{background:#212529;color:#fff}.spl-footer,.spl-header{background-color:rgba(0,0,0,.45)}#spotlight .contain,#spotlight .cover{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}#spotlight .contain{-o-object-fit:contain;object-fit:contain}#spotlight .autofit{-o-object-fit:none;object-fit:none;width:auto;height:auto;max-height:none;max-width:none;transition:none}.spl-scene,.spl-spinner,.spl-track{width:100%;height:100%;position:absolute}.spl-track{contain:strict}.spl-spinner{background-position:center;background-repeat:no-repeat;background-size:42px;opacity:0}.spl-spinner.spin{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgc3Ryb2tlPSIjZmZmIiBmaWxsPSJub25lIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgc3Ryb2tlLW9wYWNpdHk9Ii4xNSIgY3g9IjE4IiBjeT0iMTgiIHI9IjE4Ii8+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4IiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCAxOCAxOCIgdG89IjM2MCAxOCAxOCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9nPjwvc3ZnPgo=);transition:opacity .2s linear .25s;opacity:1}.spl-spinner.error{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHdpZHRoPSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LDFBMTUsMTUsMCwxLDAsMzEsMTYsMTUsMTUsMCwwLDAsMTYsMVptMCwyYTEzLDEzLDAsMCwxLDguNDUsMy4xNEw2LjE0LDI0LjQ1QTEzLDEzLDAsMCwxLDE2LDNabTAsMjZhMTMsMTMsMCwwLDEtOC40NS0zLjE0TDI1Ljg2LDcuNTVBMTMsMTMsMCwwLDEsMTYsMjlaIi8+PC9zdmc+Cg==);background-size:128px;transition:none;opacity:.5}.spl-scene{transition:transform .65s cubic-bezier(.1,1,.1,1);contain:layout size;will-change:transform}.spl-pane>*{position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1);transition:transform .65s cubic-bezier(.3,1,.3,1),opacity .65s ease;contain:layout style;will-change:transform,opacity;visibility:hidden}.spl-header,.spl-pane,.spl-progress{position:absolute;top:0}.spl-pane{width:100%;height:100%;transition:transform .65s cubic-bezier(.3,1,.3,1);contain:layout size;will-change:transform,contents}.spl-header{width:100%;height:50px;text-align:right;transform:translateY(-100px);transition:transform .35s ease;overflow:hidden;will-change:transform}#spotlight.menu .spl-footer,#spotlight.menu .spl-header,.spl-footer:hover,.spl-header:hover{transform:translateY(0)}.spl-header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:50px;height:50px;opacity:.5}.spl-progress{width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform linear}.spl-footer,.spl-next,.spl-prev{position:absolute;transition:transform .35s ease;will-change:transform}.spl-footer{left:0;right:0;bottom:0;line-height:20px;padding:20px 20px 0;padding-bottom:env(safe-area-inset-bottom,0);text-align:left;font-size:15px;font-weight:400;transform:translateY(100%)}.spl-title{font-size:22px}.spl-button,.spl-description,.spl-title{margin-bottom:20px}.spl-button{display:inline-block;background:#fff;color:#000;border-radius:5px;padding:10px 20px;cursor:pointer}.spl-next,.spl-page~*,.spl-prev{background-position:center;background-repeat:no-repeat}.spl-page{float:left;width:auto;line-height:50px}.spl-page~*{background-size:21px;float:right}.spl-fullscreen{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iLTEgLTEgMjYgMjYiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+Cg==)}.spl-fullscreen.on{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOCAzdjNhMiAyIDAgMCAxLTIgMkgzbTE4IDBoLTNhMiAyIDAgMCAxLTItMlYzbTAgMTh2LTNhMiAyIDAgMCAxIDItMmgzTTMgMTZoM2EyIDIgMCAwIDEgMiAydjMiLz48L3N2Zz4K)}.spl-autofit{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iOTYiIHdpZHRoPSI5NiIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMEExMiAxMiAwIDAgMSAyNCA4aDQwYzUuMjMgMCA5LjY3IDMuMzQgMTEuMzExIDhIMjRhNCA0IDAgMCAwLTQgNHY1MS4zMTF6TTkyIDc2VjM2YTEyIDEyIDAgMCAwLTEyLTEySDQwYTEyIDEyIDAgMCAwLTEyIDEydjQwYTEyIDEyIDAgMCAwIDEyIDEyaDQwYTEyIDEyIDAgMCAwIDEyLTEyem0tNTIgNGE0IDQgMCAwIDEtNC00VjM2YTQgNCAwIDAgMSA0LTRoNDBhNCA0IDAgMCAxIDQgNHY0MGE0IDQgMCAwIDEtNCA0SDQweiIvPjwvc3ZnPgo=)}.spl-zoom-in,.spl-zoom-out{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHdpZHRoPSIyNCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Ik0yMSAyMWwtNC4zNS00LjM1TTggMTFoNiIvPjwvc3ZnPgo=);background-size:22px}.spl-zoom-in{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHdpZHRoPSIyNCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Ik0yMSAyMWwtNC4zNS00LjM1TTExIDh2NiIvPjxwYXRoIGQ9Ik04IDExaDYiLz48L3N2Zz4K)}.spl-download{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQxLjczMiIgd2lkdGg9IjE0MS43MzIiPjxwYXRoIGQ9Ik0xMjAuNjc0IDEyNS4xMzhIMjAuNzkzdjE2LjU5NGg5OS44ODF2LTE2LjU5NHptLTEuNjU1LTY2LjM2MmE2LjU2IDYuNTYgMCAwIDAtOS4yNzUgMEw3Ny4yMSA5MS4zMTJWNi41NjJDNzcuMjEgMi45MzYgNzQuMjY5IDAgNzAuNjQ4IDBhNi41NiA2LjU2IDAgMCAwLTYuNTYgNi41NjN2ODQuNzVMMzEuOTkyIDU5LjIxOGMtMi41NjItMi41NjQtNi43MTUtMi41NjQtOS4yNzcgMGE2LjU2IDYuNTYgMCAwIDAgMCA5LjI3OWw0My4yOTQgNDMuMjkzYy4xNS4xNTQuMzE0LjI5OS40ODEuNDM4bC4yMzQuMTc2LjI3OS4yMDYuMjg2LjE3NC4yNjUuMTUzYy4xLjA1Ni4xOTkuMS4yOTguMTQ3bC4yODMuMTMyLjI5NS4xMDUuMzEyLjEwOS4yOTcuMDc3LjMyNC4wNzguMzQ2LjA1NC4yODkuMDQyYTYuNjcgNi42NyAwIDAgMCAxLjI5NSAwbC4yODktLjA0Mi4zNDQtLjA1NC4zMjQtLjA3OC4yOTktLjA3Ny4zMTItLjEwOWEyLjUzIDIuNTMgMCAwIDAgLjI5NS0uMTA1bC4yODMtLjEzMi4yOTctLjE0Ny4yNjQtLjE1My4yODctLjE3NC4yODEtLjIwNi4yMzMtLjE3NmMuMjQ5LS4yMDQuNDc5LS40MzcuNjk0LS42N2wuMjI5LS4yMDMgNDMuMjk0LTQzLjI5NmMyLjU2My0yLjU2OCAyLjU2My02LjcyMi4wMDEtOS4yODMiIGZpbGw9IiNmZmYiLz48L3N2Zz4K);background-size:20px}.spl-theme{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjIgMiAyMCAyMCIgd2lkdGg9IjI0IiBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIgNGE4IDggMCAxIDAgMCAxNiA4IDggMCAxIDAgMC0xNnptMCAxNGE2IDYgMCAxIDEgMC0xMiA2IDYgMCAxIDEgMCAxMnptMC0xMXYxMGMyLjc1NyAwIDUtMi4yNDMgNS01cy0yLjI0My01LTUtNXoiLz48L3N2Zz4K)}.spl-play{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdCb3g9Ii0wLjUgLTAuNSAyNSAyNSIgd2lkdGg9IjI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMCA4bDYgNC02IDRWOHoiLz48L3N2Zz4K)}.spl-play.on{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdCb3g9Ii0wLjUgLTAuNSAyNSAyNSIgd2lkdGg9IjI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMCAxNVY5bTQgNlY5Ii8+PC9zdmc+Cg==);animation:pulsate 1s ease infinite}.spl-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdCb3g9IjIgMiAyMCAyMCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTggNkw2IDE4Ii8+PHBhdGggZD0iTTYgNmwxMiAxMiIvPjwvc3ZnPgo=)}.spl-info{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjkuNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuOTIiLz48cGF0aCBkPSJNMTQuMDI0IDYuMTZhMS43NSAxLjc1IDAgMCAxLS41NCAxLjNjLS4zNC4zNC0uNzYuNS0xLjI2LjUtLjQ4IDAtLjkyLS4xOC0xLjI2LS41Mi0uMzYtLjM2LS41NC0uNzgtLjU0LTEuMjhzLjE4LS45Mi41NC0xLjI2Yy4zNC0uMzYuNzgtLjU0IDEuMjYtLjU0LjUgMCAuOTIuMTggMS4yNi41NC4zNi4zNC41NC43Ni41NCAxLjI2em0xLjMyIDEwLjgydjIuMzZoLTYuMzR2LTIuMzZoMS41NnYtNS41aC0xLjU2di0yLjRoNC44MnY3LjloMS41MnoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPgo=)}.spl-next,.spl-prev{top:50%;width:50px;height:50px;opacity:.65;background-color:rgba(0,0,0,.45);border-radius:100%;cursor:pointer;margin-top:-25px;transform:translateX(-100px);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTE1IDE4bC02LTYgNi02Ii8+PC9zdmc+Cg==);background-size:30px}.spl-prev{left:20px}.spl-next{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#spotlight.menu .spl-prev{transform:translateX(0)}#spotlight.menu .spl-next{transform:translateX(0) scaleX(-1)}@media (hover:hover){.spl-page~div{cursor:pointer;transition:opacity .2s ease}.spl-next:hover,.spl-page~div:hover,.spl-prev:hover{opacity:1}}@media (max-width:500px){.spl-header div{width:44px}.spl-footer .spl-title{font-size:20px}.spl-footer{font-size:14px}.spl-next,.spl-prev{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}.spl-spinner{background-size:30px 30px}}.hide-scrollbars{overflow:hidden!important}";
var ba=document.getElementsByTagName("head")[0];ba.firstChild?ba.insertBefore(aa,ba.firstChild):ba.appendChild(aa);Object.assign||(Object.assign=function(a,b){for(var c=Object.keys(b),e=0,f;e<c.length;e++)f=c[e],a[f]=b[f];return a});Element.prototype.closest||(Element.prototype.closest=function(a){a=a.substring(1);for(var b=this;b&&1===b.nodeType;){if(b.classList.contains(a))return b;b=b.parentElement}return null});function d(a,b,c){a.classList[c?"add":"remove"](b)}function g(a,b,c){c=""+c;a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)}var ca=0;function da(a,b){b&&(g(a,"transition","none"),b());ca||(ca=a.clientTop&&0);b&&g(a,"transition","")}function h(a,b,c,e){ea(!0,a,b,c,e)}function ea(a,b,c,e,f){b[(a?"add":"remove")+"EventListener"](c,e,f||!1===f?f:!0)}function fa(a,b){a.stopPropagation();b&&a.preventDefault()}function k(a,b){g(a,"display",b?"":"none")}
function l(a,b){g(a,"visibility",b?"":"hidden")}function m(a,b){g(a,"transition",b?"":"none")};var n="info theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "),ha={info:1,page:1,close:1,autofit:1,"zoom-in":1,"zoom-out":1,prev:1,next:1,fullscreen:1};var p=document.createElement("div");p.id="spotlight";p.innerHTML="<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>";var ia={},ja=document.createElement("video");function ka(a,b,c,e){if("node"!==e)for(var f=Object.keys(c),A=0,w;A<f.length;A++)if(w=f[A],3<w.length&&0===w.indexOf("src"))if("video"===e){var F=ia[w];if(F){if(0<F){var Ga=c[w];break}}else if(ja.canPlayType("video/"+w.substring(3).replace("-","").toLowerCase())){ia[w]=1;Ga=c[w];break}else ia[w]=-1}else if(F=parseInt(w.substring(4),10))if(F=Math.abs(b-F),!lb||F<lb){var lb=F;Ga=c[w]}return Ga||c.src||c.href||a.src||a.href};var q={},la=navigator.connection,ma=window.devicePixelRatio||1,r,t,na,oa,u,pa,qa,ra,v,sa,ta,ua,x,y,z,B,C,D,va,E,G,wa,xa,ya,za,Aa,Ba,H,Ca,Da,Ea,Fa,I,Ha,Ia,Ja,Ka,J,K,L,La,M,Ma=document.createElement("img"),Na,Oa,N,Pa=0,Qa,Ra,Sa,Ta,Ua,Va,Wa,Xa,O,Ya,P,Q,R,S,Za,T,$a;h(document,"click",ab);
function bb(){function a(c){return q[c]=(p||document).getElementsByClassName("spl-"+c)[0]}if(!K){K=document.body;Na=a("scene");Oa=a("header");N=a("footer");Qa=a("title");Ra=a("description");Sa=a("button");Ta=a("prev");Ua=a("next");Wa=a("page");O=a("progress");Ya=a("spinner");La=[a("pane")];U("close",cb);K[T="requestFullscreen"]||K[T="msRequestFullscreen"]||K[T="webkitRequestFullscreen"]||K[T="mozRequestFullscreen"]||(T="");T?($a=T.replace("request","exit").replace("mozRequest","mozCancel").replace("Request",
"Exit"),Va=U("fullscreen",db)):n.pop();U("info",eb);U("autofit",V);U("zoom-in",fb);U("zoom-out",gb);U("theme",hb);Xa=U("play",W);U("download",ib);h(Ta,"click",jb);h(Ua,"click",kb);var b=a("track");h(b,"mousedown",mb);h(b,"mousemove",nb);h(b,"mouseleave",ob);h(b,"mouseup",ob);h(b,"touchstart",mb,{passive:!1});h(b,"touchmove",nb,{passive:!0});h(b,"touchend",ob);h(Sa,"click",function(){Fa?Fa(z,D):Ea&&(location.href=Ea)})}}
function U(a,b){var c=document.createElement("div");c.className="spl-"+a;h(c,"click",b);Oa.appendChild(c);return q[a]=c}function ab(a){var b=a.target.closest(".spotlight");if(b){fa(a,!0);a=b.closest(".spotlight-group");C=(a||document).getElementsByClassName("spotlight");for(var c=0;c<C.length;c++)if(C[c]===b){E=a&&a.dataset;pb(c+1);break}}}
function pb(a){if(B=C.length){K||bb();xa&&xa(a);for(var b=La[0],c=b.parentNode,e=La.length;e<B;e++){var f=b.cloneNode(!1);g(f,"left",100*e+"%");c.appendChild(f);La[e]=f}L||(K.appendChild(p),qb());z=a||1;m(Na);rb(!0);T&&sb();m(p,!0);d(K,"hide-scrollbars",!0);d(p,"show",!0);tb(!0);qb();X();H&&W(!0,!0)}}function Y(a,b){a=D[a];return"undefined"!==typeof a?(a=""+a,"false"!==a&&(a||b)):b}function ub(a){a?da(M,ub):(m(Na,Ka),g(M,"opacity",Ja?0:1),vb(Ia&&.8),J&&d(M,J,!0))}
function wb(a){L=La[a-1];M=L.firstChild;z=a;if(M)x&&V(),Aa&&d(M,Aa,!0),ub(!0),J&&d(M,J),Ja&&g(M,"opacity",1),Ia&&g(M,"transform",""),g(M,"visibility","visible"),Q&&(Ma.src=Q),H&&xb(R);else{var b=P.media,c=Y("spinner",!0);if("video"===b)yb(c,!0),M=document.createElement("video"),M.onloadedmetadata=function(){M===this&&(M.onerror=null,M.width=M.videoWidth,M.height=M.videoHeight,zb(),yb(c),wb(a))},M.poster=D.poster,M.preload=Da?"auto":"metadata",M.controls=Y("controls",!0),M.autoplay=D.autoplay,M.h=
Y("inline"),M.muted=Y("muted"),M.src=P.src,L.appendChild(M);else{if("node"===b){M=P.src;"string"===typeof M&&(M=document.querySelector(M));M&&(M.g||(M.g=M.parentNode),zb(),L.appendChild(M),wb(a));return}yb(c,!0);M=document.createElement("img");M.onload=function(){M===this&&(M.onerror=null,yb(c),wb(a),zb())};M.src=P.src;L.appendChild(M)}M&&(c||g(M,"visibility","visible"),M.onerror=function(){M===this&&(Ab(M),d(Ya,"error",!0),yb(c))})}}function yb(a,b){a&&d(Ya,"spin",b)}
function Bb(){return document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}function Cb(){qb();M&&zb();if(T){var a=Bb();d(Va,"on",a);a||sb()}}function sb(){!1!==Y("fullscreen",ha.fullscreen)&&k(Va,0<screen.availHeight-window.innerHeight)}function qb(){u=p.clientWidth;pa=p.clientHeight}function zb(){qa=M.clientWidth;ra=M.clientHeight}function vb(a){g(M,"transform","translate(-50%, -50%) scale("+(a||v)+")")}
function Z(a,b){g(L,"transform",a||b?"translate("+a+"px, "+b+"px)":"")}function Db(a,b,c){b?da(Na,function(){Db(a,!1,c)}):g(Na,"transform","translateX("+(100*-a+(c||0))+"%)")}function tb(a){ea(a,window,"keydown",Eb);ea(a,window,"wheel",Fb);ea(a,window,"resize",Cb)}
function Eb(a){if(L){var b=!1!==D["zoom-in"];switch(a.keyCode){case 8:b&&V();break;case 27:cb();break;case 32:H&&W();break;case 37:jb();break;case 39:kb();break;case 38:case 107:case 187:b&&fb();break;case 40:case 109:case 189:b&&gb();break;case 73:eb()}}}function Fb(a){L&&!1!==D["zoom-in"]&&(a=a.deltaY,0>.5*(0>a?1:a?-1:0)?gb():fb())}function W(a,b){("boolean"===typeof a?a:!R)===!R&&(R=R?clearTimeout(R):1,d(Xa,"on",R),b||xb(R))}
function xb(a){wa&&(da(O,function(){g(O,"transition-duration","");g(O,"transform","")}),a&&(g(O,"transition-duration",Ha+"s"),g(O,"transform","translateX(0)")));a&&(R=setTimeout(kb,1E3*Ha))}function X(){Ba&&(Za=Date.now()+2950,S||(d(p,"menu",!0),Gb(3E3)))}function Gb(a){S=setTimeout(function(){var b=Date.now();b>=Za?(d(p,"menu"),S=0):Gb(Za-b)},a)}function Hb(a){"boolean"===typeof a&&(S=a?S:0);S?(S=clearTimeout(S),d(p,"menu")):X()}
function mb(a){fa(a,!0);sa=!0;ta=!1;var b=a.touches;b&&(b=b[0])&&(a=b);ua=qa*v<=u;na=a.pageX;oa=a.pageY;m(L)}function ob(a){fa(a);if(sa){if(ta){if(ua&&ta){var b=(a=r<-(u/7)&&(z<B||G))||r>u/7&&(1<z||G);if(a||b)Db(z-1,!0,r/u*100),a&&kb()||b&&jb();r=0;Z()}m(L,!0)}else Hb();sa=!1}}function nb(a){fa(a);if(sa){var b=a.touches;b&&(b=b[0])&&(a=b);b=(qa*v-u)/2;r-=na-(na=a.pageX);ua||(r>b?r=b:r<-b&&(r=-b),ra*v>pa&&(b=(ra*v-pa)/2,t-=oa-(oa=a.pageY),t>b?t=b:t<-b&&(t=-b)));ta=!0;Z(r,t)}else X()}
function db(a){var b=Bb();if("boolean"!==typeof a||a!==!!b)if(b)document[$a]();else p[T]()}function hb(a){"string"!==typeof a&&(a=y?"":Ca||"white");y!==a&&(y&&d(p,y),a&&d(p,a,!0),y=a)}function V(a){"boolean"===typeof a&&(x=!a);x=1===v&&!x;d(M,"autofit",x);g(M,"transform","");v=1;t=r=0;zb();m(L);Z()}function fb(){var a=v/.65;50>=a&&(x&&V(),r/=.65,t/=.65,Z(r,t),Ib(a))}function gb(){var a=.65*v;x&&V();1<=a&&(1===a?r=t=0:(r*=.65,t*=.65),Z(r,t),Ib(a))}function Ib(a){v=a||1;vb()}
function eb(){Pa=!Pa;l(N,Pa)}function ib(){var a=K,b=document.createElement("a"),c=M.src;b.href=c;b.download=c.substring(c.lastIndexOf("/")+1);a.appendChild(b);b.click();a.removeChild(b)}function cb(){L&&(setTimeout(function(){K.removeChild(p);L=M=P=D=E=C=xa=ya=za=Fa=null},200),d(K,"hide-scrollbars"),d(p,"show"),db(!1),tb(),Q&&(Ma.src=""),R&&W(),M&&Ab(M),S&&(S=clearTimeout(S)),y&&hb(),I&&d(p,I),za&&za())}
function Ab(a){if(a.g)a.g.appendChild(a),a.g=null;else{var b=a.parentNode;b&&b.removeChild(a);a.src=a.onerror=""}}function jb(a){a&&X();if(1<B){if(1<z)return Jb(z-1);if(G)return Db(B,!0),Jb(B)}}function kb(a){a&&X();if(1<B){if(z<B)return Jb(z+1);if(G)return Db(-1,!0),Jb(1);R&&W()}}function Jb(a){if(a!==z){R?(clearTimeout(R),xb()):X();var b=a>z;z=a;rb(b);return!0}}
function Kb(a){var b=C[z-1],c=b;D={};E&&Object.assign(D,E);Object.assign(D,c.dataset||c);va=D.media;Fa=D.onclick;Ca=D.theme;I=D["class"];Ba=Y("autohide",!0);G=Y("infinite");wa=Y("progress",!0);H=Y("autoslide");Da=Y("preload",!0);Ea=D.buttonHref;Ha=H&&parseFloat(H)||7;y||Ca&&hb(Ca);I&&d(p,I,!0);I&&da(p);if(c=D.control){c="string"===typeof c?c.split(","):c;for(var e=0;e<n.length;e++)D[n[e]]=!1;for(e=0;e<c.length;e++){var f=c[e].trim();"zoom"===f?D["zoom-in"]=D["zoom-out"]=!0:D[f]=!0}}c=D.animation;
Ia=Ja=Ka=!c;J=!1;if(c)for(c="string"===typeof c?c.split(","):c,e=0;e<c.length;e++)f=c[e].trim(),"scale"===f?Ia=!0:"fade"===f?Ja=!0:"slide"===f?Ka=!0:f&&(J=f);Aa=D.fit;e=la&&la.downlink;c=Math.max(pa,u)*ma;e&&1200*e<c&&(c=1200*e);var A;P={media:va,src:ka(b,c,D,va),title:Y("title",b.alt||b.title||(A=b.firstElementChild)&&(A.alt||A.title))};Q&&(Ma.src=Q="");Da&&a&&(b=C[z])&&(a=b.dataset||b,(A=a.media)&&"image"!==A||(Q=ka(b,c,a,A)));for(b=0;b<n.length;b++)a=n[b],k(q[a],Y(a,ha[a]))}
function rb(a){t=r=0;v=1;if(M)if(M.onerror)Ab(M);else{var b=M;setTimeout(function(){b&&M!==b&&(Ab(b),b=null)},650);ub();Z()}N&&l(N,0);Kb(a);Db(z-1);d(Ya,"error");wb(z);m(L);Z();a=P.title;var c=Y("description"),e=Y("button"),f=a||c||e;f&&(a&&(Qa.firstChild.nodeValue=a),c&&(Ra.firstChild.nodeValue=c),e&&(Sa.firstChild.nodeValue=e),k(Qa,a),k(Ra,c),k(Sa,e),g(N,"transform","all"===Ba?"":"none"));Ba||d(p,"menu",!0);l(N,Pa&&f);l(Ta,G||1<z);l(Ua,G||z<B);Wa.firstChild.nodeValue=1<B?z+" / "+B:"";ya&&ya(z,D)}
;window.Spotlight={init:bb,theme:hb,fullscreen:db,download:ib,autofit:V,next:kb,prev:jb,goto:Jb,close:cb,zoom:Ib,menu:Hb,show:function(a,b,c){C=a;b&&(E=b,xa=b.onshow,ya=b.onchange,za=b.onclose,c=c||b.index);pb(c)},play:W,addControl:U,removeControl:function(a){var b=q[a];b&&(Oa.removeChild(b),q[a]=null)}};}).call(this);
