(this["webpackJsonpcandy-crush"]=this["webpackJsonpcandy-crush"]||[]).push([[0],{20:function(n,r,t){},26:function(n,r,t){"use strict";t.r(r);var e,o,i,a,c,l=t(12),s=t.n(l),u=(t(20),t(5)),d=t(0),f=t(2),h=t.n(f),p=function(n){return n[0].map((function(r,t){return n.map((function(n){return n[t]}))}))},b=function(n,r){for(var t=function(n){return Array(n).fill(null).map((function(){return Array(n).fill(0).map((function(){return h.a.sample(r)}))}))},e=t(n);!h.a.isEqual(e,m(e));)e=t(n);return e},g=function(n,r){for(var t=h.a.cloneDeep(n),e=t.length,o=[],i=0;i<e;i++){for(var a=t[i],c=[a[0]],l=1;l<e+1;l++)if(a[l]===c[0])c.push(a[l]);else{if(c.length>=3){for(var s=1;s<=c.length;s++)a[l-s]=0;r&&r(c[0],c.length)}c=[a[l]]}o.push(a)}return o},j=function(n){for(var r=h.a.cloneDeep(n),t=1;t<n.length;t++)for(var e=0;e<n[t].length;e++)0===r[t][e]&&(r[t][e]=r[t-1][e],r[t-1][e]=0);return r},m=function(n,r){var t=h.a.cloneDeep(n);return t=g(t,r),t=p(g(p(t),r))},x=function(n,r,t){var e=h.a.cloneDeep(n),o=r.x,i=r.y,a=[e[i][o+t],e[i][o]];return e[i][o]=a[0],e[i][o+t]=a[1],e},y={hotizontal:function(n,r,t){return x(n,r,t)},vertical:function(n,r,t){return p(x(p(n),{y:(e=r).x,x:e.y},t));var e}},v=t(6),C=t(7),F=C.a.div(e||(e=Object(v.a)(["\n    min-width: 600px;\n    min-height: 600px;\n    display: grid;\n    grid-template: repeat(",", 1fr) /  repeat(",", 1fr);\n    position: relative;\n    background-color: rgba(238, 210, 222, 0.8);\n    box-sizing: content-box;\n    padding: 6px;\n    backdrop-filter: blur(2px);\n    border-radius: 15px;\n"])),(function(n){return n.size}),(function(n){return n.size})),O=t(1),E=function(n){var r=n.colors,t=n.size;return Object(O.jsx)("svg",{id:"Capa_1",enableBackground:"new 0 0 512.018 512.018",height:t||"50",viewBox:"0 0 512.018 512.018",width:t||"50",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsxs)("g",{children:[Object(O.jsx)("path",{d:"m5.186 340.827c-4.919 4.258-6.532 11.202-3.994 17.193s8.653 9.676 15.13 9.089c16.049-1.417 25.967 2.008 36.596 12.636 14.294 14.294 21.651 29.8 20.184 42.54-1.105 9.59 7.027 17.725 16.617 16.617 12.603-1.454 28.012 5.896 42.274 20.158 10.691 10.692 12.506 23.097 12.847 38.277.295 13.143 16.266 19.607 25.603 10.27 47.469-47.468 52.936-124.424 5.657-171.703-45.531-45.534-122.987-36.566-170.914 4.923z",fill:r.thirdColorLight}),Object(O.jsx)("path",{d:"m176.1 335.905-98.703 98.703c3.237 3.236 7.774 4.82 12.322 4.294 12.603-1.454 28.012 5.896 42.274 20.158 10.691 10.692 12.506 23.097 12.847 38.277.296 13.183 16.322 19.552 25.603 10.27 47.469-47.468 52.936-124.422 5.657-171.702z",fill:r.thirdColor}),Object(O.jsx)("path",{d:"m497.339 144.838c-15.152-.34-27.529-1.997-38.327-12.795-14.237-14.236-21.565-29.664-20.107-42.326 1.108-9.62-7.058-17.727-16.617-16.617-12.804 1.464-28.324-5.865-42.592-20.133-10.597-10.597-14.007-20.529-12.584-36.646.572-6.48-3.099-12.592-9.09-15.131-5.991-2.538-12.935-.926-17.193 3.994-41.494 47.934-50.466 125.372-4.922 170.914 47.275 47.276 124.228 41.818 171.703-5.657 9.304-9.305 2.919-25.309-10.271-25.603z",fill:r.thirdColorLight}),Object(O.jsx)("path",{d:"m507.61 170.44c9.304-9.304 2.919-25.309-10.271-25.603-15.152-.34-27.529-1.997-38.327-12.795-14.237-14.236-21.565-29.664-20.107-42.326.524-4.548-1.057-9.084-4.294-12.322l-98.703 98.704c46.988 46.99 123.911 42.133 171.702-5.658z",fill:r.thirdColor}),Object(O.jsx)("path",{d:"m370.893 293.111-21.21 21.21 23.49 23.5c-9.187 13.4-21.194 25.634-35.35 35.36l-23.5-23.5-21.21 21.21 17.04 17.04c-16.84 6.68-35.15 10.17-54.15 10.17-80.131 0-142.1-61.85-142.1-142.1 0-19 3.49-37.31 10.17-54.15l18.58 18.58c9.77-3.86 19.04-8.8 27.67-14.75l-31.5-31.5c9.237-13.446 21.25-25.676 35.36-35.35l25.32 25.32c5.96-8.61 10.89-17.88 14.76-27.65l-12.42-12.43c16.85-6.67 35.16-10.17 54.16-10.17 80.131 0 142.1 61.85 142.1 142.1 0 19-3.5 37.31-10.17 54.16z",fill:r.primaryColorLight}),Object(O.jsx)("path",{d:"m370.893 293.111-21.21 21.21 23.49 23.5c-9.187 13.4-21.194 25.634-35.35 35.36l-23.5-23.5-21.21 21.21 17.04 17.04c-50.505 20.033-113.396 11.048-155.27-30.81l202.24-202.24c41.71 41.726 50.879 104.581 30.81 155.28z",fill:r.primaryColor}),Object(O.jsx)("path",{d:"m337.823 373.181c-8.63 5.95-17.9 10.89-27.67 14.75l-186.08-186.08c3.86-9.77 8.8-19.04 14.75-27.67z",fill:r.secondaryColorLight}),Object(O.jsx)("path",{d:"m310.153 387.931c9.77-3.86 19.04-8.8 27.67-14.75l-99.5-99.5-21.21 21.21z",fill:r.secondaryColorLight}),Object(O.jsx)("path",{d:"m387.933 310.161c-3.87 9.77-8.8 19.04-14.76 27.66l-198.99-198.99c8.62-5.96 17.89-10.89 27.66-14.76z",fill:r.secondaryColorLight}),Object(O.jsx)("path",{d:"m373.173 337.821c5.96-8.62 10.89-17.89 14.76-27.66l-93.045-93.045-21.21 21.21z",fill:r.secondaryColorLight})]})})},L=[{tileId:0,primaryColor:"#FE0000",primaryColorLight:"#F83232",secondaryColor:"#7FFE00",secondaryColorLight:"#A3F94E",thirdColor:"#00FEFE",thirdColorLight:"#56FCFC"},{tileId:1,primaryColor:"#FFEB00",primaryColorLight:"#FDF273",secondaryColor:"#00FF55",secondaryColorLight:"#5DF991",thirdColor:"#2B00FF",thirdColorLight:"#4E2AFF"},{tileId:2,primaryColor:"#00A8FF",primaryColorLight:"#54B5E5",secondaryColor:"#5900FF",secondaryColorLight:"#FDEE41",thirdColor:"#FF00A6",thirdColorLight:"#FF53C3"},{tileId:3,primaryColor:"#AE00FF",primaryColorLight:"#BF36FF",secondaryColor:"#D0FF00",secondaryColorLight:"#FEF77D",thirdColor:"#FF9500",thirdColorLight:"#FFA62A"},{tileId:4,primaryColor:"#FE6A00",primaryColorLight:"#FF832A",secondaryColor:"#00FEA9",secondaryColorLight:"#50FDC3",thirdColor:"#5500FE",thirdColorLight:"#7F3FFF"},{tileId:5,primaryColor:"#15A715",primaryColorLight:"#2ACE2A",secondaryColor:"#AA00A1",secondaryColorLight:"#EB40E2",thirdColor:"#4F900D",thirdColorLight:"#7CCE2A"},{tileId:6,primaryColor:"#FE0000",primaryColorLight:"#F83232",secondaryColor:"#7FFE00",secondaryColorLight:"#A3F94E",thirdColor:"#00FEFE",thirdColorLight:"#56FCFC"}],A=C.a.div(o||(o=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    border: 1px solid rgba(74, 114, 161, 1);\n    padding: 5px;\n    cursor: ",";\n"])),(function(n){return n.playable?"grab":"default"})),z=function(n){var r=n.dragStart,t=n.dragOver,e=n.dragEnd,o=n.tile,i=n.id,a=n.isPlayable;return Object(O.jsx)(A,{draggable:a,onDragStart:r,onDragOver:t,onDragEnd:e,id:i,playable:a,children:o?Object(O.jsx)(E,{colors:L[o]}):""})},w=function(n){var r=n.move,t=n.subsTilesToGo,e=n.isPlayable,o=n.setIsPlayable,i=n.board,a=n.setBoard,c=n.numbers,l=Object(d.useState)(null),s=Object(u.a)(l,2),f=s[0],p=s[1];Object(d.useEffect)((function(){var n=setTimeout((function(){if(function(n){return n.some((function(n){return n.some((function(n){return 0===n}))}))}(i))return a((function(n){return function(n,r){var t=h.a.cloneDeep(n);return t[0]=t[0].map((function(n){return 0===n?h.a.sample(r):n})),t}(j(n),c)})),o(!0),function(){return clearInterval(n)};if(e||h.a.isEqual(i,m(i)))a(j);else{var r=m(i,t);a(r)}}),300);return h.a.isEqual(i,j(i))&&h.a.isEqual(i,m(i))||o(!1),function(){return clearInterval(n)}}),[i,e,c,a,o,t]);var b=function(n){e&&p({x:n.screenX,y:n.screenY})},g=function(n){n.preventDefault(),n.dataTransfer.effectAllowed="copyMove"},x=function(n,t){if(e&&f){var c=function(n,r){var t=Math.abs(n)>Math.abs(r);return Math.abs(n)<20&&Math.abs(r)<20?null:{x:0+(t?n>0?1:-1:0),y:0+(t?0:r>0?1:-1)}}(n.screenX-f.x,n.screenY-f.y);if(c){var l=function(n,r){return{x:n.x+r.x,y:n.y+r.y}}(t,c);if(s=l,u=i.length,Object.values(s).every((function(n){return n>=0&&n<=u-1}))){var s,u,d=h.a.cloneDeep(i),b=function(n,r,t){var e=0!==t.x,o=e?t.x:t.y;return y[e?"hotizontal":"vertical"](n,r,o)}(i,t,c);a(b),h.a.isEqual(b,m(b))?(o(!1),setTimeout((function(){a(d),o(!0)}),600)):r(),p(null)}}}};return Object(O.jsx)("div",{children:Object(O.jsx)(F,{size:i.length,children:i.map((function(n,r){return n.map((function(n,t){return Object(O.jsx)(z,{id:"".concat(r).concat(t),dragStart:b,dragOver:g,dragEnd:function(n){return x(n,{y:r,x:t})},tile:n,isPlayable:e},"".concat(r).concat(t))}))}))})})},D=C.a.div(i||(i=Object(v.a)(["\n    width: 100%;\n    display: flex;\n    color: #fe4010;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    background-color: rgba(238, 210, 222, 0.5);\n    border-radius: 10px;\n    padding: 5px 20px;\n\n    p {\n        margin: 0;\n        font-size: 1.4rem;\n        text-transform: uppercase;\n        font-family: 'Annie Use Your Telescope', cursive !important;\n        color: #069725;\n        font-weight: 700;\n\n        .lover{\n            text-transform: lowercase;\n            margin-left: -5px;\n\n        }\n\n        svg {\n            transform: translateY(7px) ;\n            margin-right: 5px;\n        }\n    }\n"]))),I=function(n){return n.toString().padStart(2,"0")},k=function(n){if((n=Number(n))<0)return"00:00";var r=Math.floor(n/60),t=n%60;return"".concat(I(r),":").concat(I(t))},S=function(n){var r=n.moves,t=n.tilesToGo,e=n.tileToSearch,o=Object(d.useState)(0),i=Object(u.a)(o,2),c=i[0],l=i[1];return Object(d.useEffect)((function(){return a=setInterval((function(){l((function(n){return Number(n)+1}))}),1e3),function(){return clearInterval(a)}}),[]),Object(O.jsxs)(D,{children:[Object(O.jsxs)("p",{children:["moves: ",r]}),Object(O.jsxs)("p",{children:["time: ",k(c)]}),(null===e||void 0===e?void 0:e.tileId)&&Object(O.jsxs)("p",{children:["to go: ",Object(O.jsx)(E,{colors:e,size:"30"}),Object(O.jsx)("span",{className:"lover",children:"x"})," ",t]})]})},T=t(28),B=Object(C.a)(T.a.div)(c||(c=Object(v.a)(["\n  position: fixed;\n  overflow: hidden;\n\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(244, 244, 244, 0.6);\n    width: 30%;\n    height: 30%;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.5rem;\n\n\n    h2 {\n        font-size: 2.5rem;\n         font-family: 'Annie Use Your Telescope', cursive !important;\n        color: #c92200;\n        margin: 0;\n        margin-bottom: 40px;\n        text-transform: uppercase;\n\n    }\n\n\n    button {\n      box-shadow: inset 0px 1px 0px 0px #f9eca0;\n      background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);\n      background-color: #f0c911;\n      border-radius: 6px;\n      border: 1px solid #e65f44;\n      display: inline-block;\n      cursor: pointer;\n      color: #c92200;\n       font-family: 'Annie Use Your Telescope', cursive !important;\n      font-size: 20px;\n      font-weight: bold;\n      padding: 6px 24px;\n      text-decoration: none;\n      text-shadow: 0px 1px 0px #ded17c;\n\n      &:hover {\n        background: linear-gradient(to bottom, #f2ab1e 5%, #f0c911 100%);\n        background-color: #f2ab1e;\n      }\n      &:active {\n        position: relative;\n        top: 1px;\n      }\n    }\n  }\n"]))),G=function(n){var r=n.isWin,t=n.newGame;return Object(O.jsx)(B,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:[" ",r?"Congratulations!":"Game Over"," "]}),Object(O.jsx)("button",{onClick:t,children:r?"Play Again":"Try Again"})]})})},M=[1,2,3,4,5,6],P=function(){var n=b(10,M),r=Object(d.useState)(n),t=Object(u.a)(r,2),e=t[0],o=t[1],i=Object(d.useState)(!0),a=Object(u.a)(i,2),c=a[0],l=a[1],s=Object(d.useState)(15),f=Object(u.a)(s,2),p=f[0],g=f[1],j=Object(d.useState)(31),m=Object(u.a)(j,2),x=m[0],y=m[1],v=Object(d.useState)(null),C=Object(u.a)(v,2),F=C[0],E=C[1];Object(d.useEffect)((function(){var n=h.a.random(1,5);E(L[n])}),[]);var A=Object(d.useCallback)((function(){return g((function(n){return n-1}))}),[]),z=c&&(0===p||0===x);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{style:{textAlign:"center",fontSize:"3rem",margin:"0",color:"#f70707"},children:"Candy Crush Clone"}),Object(O.jsx)(S,{moves:p,tilesToGo:x,tileToSearch:F}),(null===F||void 0===F?void 0:F.tileId)?Object(O.jsx)(w,{move:A,subsTilesToGo:function(n,r){n===(null===F||void 0===F?void 0:F.tileId)&&y((function(n){return Math.max(n-r,0)}))},isPlayable:c,setIsPlayable:l,board:e,setBoard:o,numbers:M}):"loading",z&&Object(O.jsx)(G,{isWin:0===x,newGame:function(){g(15),y(35);var n=h.a.random(1,5);E(L[n]),o(b(10,M))}})]})};s.a.render(Object(O.jsx)(P,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.84be948b.chunk.js.map