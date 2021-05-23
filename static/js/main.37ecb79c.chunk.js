(this["webpackJsonpreact-shop-manager"]=this["webpackJsonpreact-shop-manager"]||[]).push([[0],{40:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c,r,a,i,s,o,l,d=n(1),j=n.n(d),u=n(11),b=n.n(u),h=(n(40),n(35)),x=n(7),p=n.n(x),m=n(9),O=n(2),f=n(3),v=n(0),g=function(e){var t=e.item,n=e.onDelete,c=Object(d.useState)(!1),r=Object(O.a)(c,2),a=r[0],i=r[1];return Object(v.jsxs)("div",{className:"item",children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("h3",{children:["Name: ",t.name," "]}),Object(v.jsxs)("p",{children:["Quantity: ",t.quantity]}),Object(v.jsxs)("p",{children:["Price: ",t.price,"$"]}),Object(v.jsxs)("div",{className:"item-btn-container",children:[Object(v.jsx)("div",{className:"deleteBtn",onClick:function(){return i(!a)},children:a?"Hide":"Show more"}),Object(v.jsx)("div",{className:"deleteBtn",onClick:function(){return n(t.id)},children:"Delete item"})]}),a&&Object(v.jsx)("div",{className:"description",children:t.description})]}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{className:"itemImg",src:t.imgSrc,alt:"image"})})]})},w=n(4),S=n(6),y=n.n(S),N=n(30),k=n.n(N),A=w.a.div(c||(c=Object(f.a)(["\n    min-width: 400px;\n    border: 2px solid black;\n    display: ",";\n    flex-wrap: wrap;\n    bacground-color: white;\n    margin: 2px;\n"])),(function(e){return e.showFindItem?"none":"flex"})),I=function(e){for(var t=e.items,n=e.onDelete,c=e.setShowFindItem,r=e.showFindItem,a=(e.drag,e.setDrag,Object(d.useState)("")),i=Object(O.a)(a,2),s=i[0],o=i[1],l=[],j=Object(d.useState)(""),u=Object(O.a)(j,2),b=u[0],h=u[1],x=Object(d.useState)(!1),p=Object(O.a)(x,2),m=p[0],f=p[1],w=0;w<t.length;w++)l.push(t[w].id);return Object(v.jsx)(y.a,{bounds:"parent",children:Object(v.jsx)(A,{children:Object(v.jsxs)("div",{className:"find-item-container",children:[Object(v.jsxs)("div",{className:"label-container",children:[Object(v.jsx)("div",{className:"label",children:"Find item"}),Object(v.jsx)("div",{className:"label-close",onClick:function(){c(!r)},children:"X"})]}),Object(v.jsx)("form",{className:"find-item-form",onSubmit:function(e){var t;if(e.preventDefault(),t=s,k.a.get("http://localhost:3000/items/".concat(t)).then((function(e){return h(e.data)})).catch((function(e){return alert("Item has not been found!")})),!s)return alert("Please type an ID");l.includes(b.id)&&f(!0)},children:Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Type an item ID"}),Object(v.jsx)("input",{type:"text",placeholder:s,onChange:function(e){return o(e.target.value)}}),Object(v.jsx)("input",{className:"btn",type:"submit",value:"Search"})]})}),Object(v.jsx)("div",{id:"foundItem",children:m&&Object(v.jsx)(g,{item:b,onDelete:n})})]})})})},C=w.a.div(r||(r=Object(f.a)(["\n    min-width: 400px;\n    height: 600px;\n    border: 2px solid black;\n    background: white;\n    margin: 2px;\n    display: ",";\n"])),(function(e){return e.showAddItem?"none":"block"})),D=function(e){var t=e.onAdd,c=e.showAddItem,r=e.setShowAddItem,a=(e.drag,e.setDrag,Object(d.useState)("")),i=Object(O.a)(a,2),s=i[0],o=i[1],l=Object(d.useState)(""),j=Object(O.a)(l,2),u=j[0],b=j[1],h=Object(d.useState)(""),x=Object(O.a)(h,2),p=x[0],m=x[1],f=Object(d.useState)(""),g=Object(O.a)(f,2),w=g[0],S=g[1],N=Object(d.useState)(""),k=Object(O.a)(N,2),A=k[0],I=k[1],D=Object(d.useState)(""),F=Object(O.a)(D,2),E=F[0],P=F[1],z=n(67);return Object(v.jsx)(y.a,{bounds:"parent",children:Object(v.jsxs)(C,{children:[Object(v.jsxs)("div",{className:"label-container",children:[Object(v.jsx)("div",{className:"label",children:"Add item"}),Object(v.jsx)("div",{className:"label-close",onClick:function(){r(!c)},children:"X"})]}),Object(v.jsxs)("form",{className:"find-item-container",onSubmit:function(e){e.preventDefault();var n=z.uniqueId();P(n),s?(console.log(E),t({name:s,quantity:u,price:p,description:w,imgSrc:A,id:E}),o(""),b(""),m(""),S(""),I(""),P(""),alert("Item has been added successfully!")):alert("Please add an item name")},children:[Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Name"}),Object(v.jsx)("input",{type:"text",placeholder:"Add item name",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Quantity"}),Object(v.jsx)("input",{type:"text",placeholder:"Add quantity",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Price"}),Object(v.jsx)("input",{type:"text",placeholder:"Add price",value:p,onChange:function(e){return m(e.target.value)}})]}),Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Image link"}),Object(v.jsx)("input",{type:"text",placeholder:"Add image address",value:A,onChange:function(e){return I(e.target.value)}})]}),Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Description"}),Object(v.jsx)("textarea",{type:"text",value:w,placeholder:"Item description",onChange:function(e){return S(e.target.value)},style:{resize:"none"}})]}),Object(v.jsx)("input",{type:"submit",value:"Save an item",className:"btn"})]})]})})},F=w.a.div(a||(a=Object(f.a)(["\n    width: 400px;\n    border: 2px solid black;\n    display: ",";\n    flex-wrap: wrap;\n    background-color: white;\n    margin: 2px;\n"])),(function(e){return e.showAll?"none":"flex"})),E=function(e){var t=e.items,n=e.onDelete,c=e.showAll,r=e.setShowAll;return Object(v.jsx)(y.a,{bounds:"parent",children:Object(v.jsxs)(F,{children:[Object(v.jsxs)("div",{className:"label-container",children:[Object(v.jsx)("div",{className:"label",children:"All items"}),Object(v.jsx)("div",{className:"label-close",onClick:function(){r(!c)},children:"X"})]}),Object(v.jsx)("div",{className:"all-items-container",children:t.map((function(e,t){return Object(v.jsx)(g,{item:e,onDelete:n},t)}))})]})})},P=w.a.div(i||(i=Object(f.a)(["\nwidth: 20px;\nheight: 20px;\nleft: 15px;\ntop: 15px;\nposition: fixed;\ndisplay: flex;\njustify-content: space-around;\nflex-flow: column nowrap;\nz-index: 20;\ncursor: pointer;\n\n  div {\n      width: 20px;\n      height: 3px;\n      background-color: black;\n      border-radius: 10px;\n      transform-origin: 1px;\n      transition: all 0.3s;\n\n      &:nth-child(1) {\n          transform: ",";\n      }\n\n      &:nth-child(2) {\n        transform: ",";\n        opacity: ",";\n      }\n\n      &:nth-child(3) {\n        transform: ",";\n    }\n  }\n  "])),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),z=function(e){var t=e.open,n=e.setOpen;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(P,{open:t,onClick:function(){return n(!t)},children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]})})},L=n(34),R=w.a.div(s||(s=Object(f.a)(["\n    width: 150px;\n    padding: 10px;\n    height: 30px;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid rgb(102, 89, 89);\n    margin: 2px 2px;\n    color: black;\n  \n  &:hover {\n    background-color: black;\n    color: white;\n    cursor:pointer;\n  }"]))),T=function(e){var t=e.onClick,n=e.text,c=e.color;return Object(v.jsxs)(R,{onClick:t,children:[n,Object(v.jsx)(L.a,{color:c})]})},X=w.a.ul(o||(o=Object(f.a)(["\n    flex-flow: row nowrap;\n    position: fixed;\n    display: ",";\n    height: 100px;\n    left: 10px;\n    top: 60px;\n    width: 500px;\n    transition: transform 0.3s ease-in-out;\n    margin-bottom: 10px;\n    z-index: 20;\n  }\n"])),(function(e){return e.open?"flex":"none"})),q=function(e){var t=e.open,n=e.setShowAddItem,c=e.showAddItem,r=e.setShowAll,a=e.showAll,i=e.setShowFindItem,s=e.showFindItem;return Object(v.jsxs)(X,{open:t,children:[Object(v.jsx)("li",{children:Object(v.jsx)(T,{text:"Find item",onClick:function(){return i(!s)},color:s?"Red":"transparent"})}),Object(v.jsx)("li",{children:Object(v.jsx)(T,{text:"Add item",onClick:function(){return n(!c)},color:c?"Red":"transparent"})}),Object(v.jsx)("li",{children:Object(v.jsx)(T,{text:"Show all",onClick:function(){return r(!a)},color:a?"Red":"transparent"})})]})},B=w.a.div(l||(l=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 20px;\n    margin-top: 10px;\n"]))),J=function(e){var t=e.title;return Object(v.jsx)(B,{children:t})};J.defaultProps={title:"SHOP MANAGER"};var H,M=J,Q=w.a.div(H||(H=Object(f.a)(["\n    width: 100%;\n    height: 40px;\n    background-color: white;\n    border: 2px groovy black;\n    z-index: 2;\n"]))),G=function(){return Object(v.jsx)(Q,{children:Object(v.jsx)(M,{})})},$=function(){var e,t,n=Object(d.useState)(!1),c=Object(O.a)(n,2),r=c[0],a=c[1],i=Object(d.useState)(!1),s=Object(O.a)(i,2),o=s[0],l=s[1],j=Object(d.useState)(!0),u=Object(O.a)(j,2),b=u[0],x=u[1],f=Object(d.useState)([]),g=Object(O.a)(f,2),w=g[0],S=g[1],N=Object(d.useState)(!1),k=Object(O.a)(N,2),A=k[0],C=k[1],F=Object(d.useState)(""),P=Object(O.a)(F,2),L=P[0],R=P[1],T=Object(d.useRef)();e=T,t=function(){return C(!1)},Object(d.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t]),Object(d.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:t=e.sent,S(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var X=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/items/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/items",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,S([].concat(Object(h.a)(w),[c]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/items/".concat(t),{method:"DELETE"});case 2:S(w.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(G,{}),Object(v.jsxs)("div",{className:"app-container",children:[Object(v.jsxs)("div",{ref:T,children:[Object(v.jsx)(z,{open:A,setOpen:C}),Object(v.jsx)(q,{open:A,setShowAddItem:a,showAddItem:r,setShowAll:l,showAll:o,setShowFindItem:x,showFindItem:b})]}),b&&Object(v.jsx)(y.a,{bounds:"parent",children:Object(v.jsx)("div",{children:Object(v.jsx)(I,{onDelete:J,items:w,setShowFindItem:x,showFindItem:b,drag:L,setDrag:R})})}),r&&Object(v.jsx)(y.a,{bounds:"parent",children:Object(v.jsx)("div",{children:Object(v.jsx)(D,{onAdd:B,showAddItem:r,setShowAddItem:a})})}),o&&Object(v.jsx)(y.a,{bounds:"parent",children:w.length>0?Object(v.jsx)("div",{children:Object(v.jsx)(E,{items:w,onDelete:J,setShowAll:l,showAll:o})}):"No items to show!"})]})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};b.a.render(Object(v.jsx)(j.a.StrictMode,{children:Object(v.jsx)($,{})}),document.getElementById("root")),K()}},[[70,1,2]]]);
//# sourceMappingURL=main.37ecb79c.chunk.js.map