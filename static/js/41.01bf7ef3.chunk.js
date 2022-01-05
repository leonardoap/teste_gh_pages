(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[41],{2e3:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(22),i=t(1269),c=t(1307),u=t(1243),m=t(1767),s=t.n(m),o=t(1467),d=t.n(o),E=t(2012),v=Object(i.a)({root:{width:200}});function b(){var e=v(),a=r.a.useState(30),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"continuous-slider",gutterBottom:!0},"Volume"),r.a.createElement(c.a,{container:!0,spacing:2},r.a.createElement(c.a,{item:!0},r.a.createElement(s.a,null)),r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(E.a,{value:l,onChange:function(e,a){i(a)},"aria-labelledby":"continuous-slider"})),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,null))),r.a.createElement(E.a,{disabled:!0,defaultValue:30,"aria-labelledby":"continuous-slider"}))}var g=Object(i.a)((function(e){return{root:{width:300},margin:{height:e.spacing(3)}}})),p=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function f(e){return"".concat(e,"\xb0C")}function y(e){return p.findIndex((function(a){return a.value===e}))+1}function V(){var e=g();return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"discrete-slider",gutterBottom:!0},"Temperature"),r.a.createElement(E.a,{defaultValue:20,getAriaValueText:f,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-custom",gutterBottom:!0},"Custom marks"),r.a.createElement(E.a,{defaultValue:20,getAriaValueText:f,"aria-labelledby":"discrete-slider-custom",step:10,valueLabelDisplay:"auto",marks:p}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-restrict",gutterBottom:!0},"Restricted values"),r.a.createElement(E.a,{defaultValue:20,valueLabelFormat:y,getAriaValueText:f,"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:p}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-always",gutterBottom:!0},"Always visible"),r.a.createElement(E.a,{defaultValue:80,getAriaValueText:f,"aria-labelledby":"discrete-slider-always",step:10,marks:p,valueLabelDisplay:"on"}))}var h=Object(i.a)({root:{width:300}});function C(e){return"".concat(e,"\xb0C")}function N(){var e=h(),a=r.a.useState([20,37]),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"range-slider",gutterBottom:!0},"Temperature range"),r.a.createElement(E.a,{value:l,onChange:function(e,a){i(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:C}))}var x=t(1246),w=Object(i.a)({root:{width:250},input:{width:42}});function T(){var e=w(),a=r.a.useState(30),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"input-slider",gutterBottom:!0},"Volume"),r.a.createElement(c.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,null)),r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(E.a,{value:"number"===typeof l?l:0,onChange:function(e,a){i(a)},"aria-labelledby":"input-slider"})),r.a.createElement(c.a,{item:!0},r.a.createElement(x.a,{className:e.input,value:l,margin:"dense",onChange:function(e){i(""===e.target.value?"":Number(e.target.value))},onBlur:function(){l<0?i(0):l>100&&i(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}}))))}var S=Object(i.a)({root:{height:300}});function A(e){return"".concat(e,"\xb0C")}var B=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function j(){var e=S();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"vertical-slider",gutterBottom:!0},"Temperature"),r.a.createElement("div",{className:e.root},r.a.createElement(E.a,{orientation:"vertical",getAriaValueText:A,defaultValue:30,"aria-labelledby":"vertical-slider"}),r.a.createElement(E.a,{disabled:!0,orientation:"vertical",getAriaValueText:A,defaultValue:30,"aria-labelledby":"vertical-slider"}),r.a.createElement(E.a,{orientation:"vertical",defaultValue:[20,37],"aria-labelledby":"vertical-slider",getAriaValueText:A,marks:B})))}var k=t(101);a.default=function(){return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(k.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Slider"}]})),r.a.createElement(k.q,{title:"Continuous Slider"},r.a.createElement(b,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(k.q,{title:"Discrete Slider"},r.a.createElement(V,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(k.q,{title:"Range Slider"},r.a.createElement(N,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(k.q,{title:"Slider with Input"},r.a.createElement(T,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(k.q,{title:"Vertical Slider"},r.a.createElement(j,null)))}}}]);
//# sourceMappingURL=41.01bf7ef3.chunk.js.map