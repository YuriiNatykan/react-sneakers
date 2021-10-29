(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{21:function(e,t,c){e.exports={overlay:"Drawer_overlay__1Hdh6",overlayVisible:"Drawer_overlayVisible__2zmQI",drawer:"Drawer_drawer__3rqQA",items:"Drawer_items__cDnqN"}},22:function(e,t,c){e.exports={card:"Card_card__glGLV",plus:"Card_plus__XyVtY",favorite:"Card_favorite__1871R"}},70:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(34),s=c.n(n),i=c(11),o=c(12),l=c(8),d=c.n(l),j=c(13),u=c(4),b=c(14),x=a.a.createContext({}),m=function(){var e=a.a.useContext(x),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},h=c(1);var f=function(e){var t=m().totalPrice;return Object(h.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(h.jsx)(b.b,{to:"/",children:Object(h.jsxs)("div",{className:"d-flex align-center\t",children:[Object(h.jsx)("img",{width:50,height:40,src:"img/logo.png",alt:"Logo"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(h.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(h.jsxs)("ul",{className:"d-flex",children:[Object(h.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(h.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(h.jsxs)("span",{children:[t," \u0433\u0440\u043d"]})]}),Object(h.jsx)(b.b,{to:"/favorites",children:Object(h.jsx)("li",{className:"mr-20 cu-p",children:Object(h.jsx)("img",{width:18,height:18,src:"img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(h.jsx)(b.b,{to:"/orders",children:Object(h.jsx)("li",{children:Object(h.jsx)("img",{width:18,height:18,src:"img/user.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})]})},p=c(5),O=c.n(p),v=function(e){var t=e.title,c=e.image,r=e.description,n=a.a.useContext(x).setCartOpened;return Object(h.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(h.jsx)("img",{className:"mb-20",width:"120px",src:c,alt:"Empty cart"}),Object(h.jsx)("h2",{children:t}),Object(h.jsx)("p",{className:"opacity-6",children:r}),Object(h.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(h.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},g=c(21),N=c.n(g),k=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var w=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=m(),o=i.cartItems,l=i.setCartItems,b=i.totalPrice,x=a.a.useState(null),f=Object(u.a)(x,2),p=f[0],g=f[1],w=a.a.useState(!1),C=Object(u.a)(w,2),y=C[0],I=C[1],_=a.a.useState(!1),S=Object(u.a)(_,2),A=S[0],T=S[1],F=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,O.a.post("https://617820779c328300175f5e2d.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,g(c.id),I(!0),l([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,O.a.delete("https://617820779c328300175f5e2d.mockapi.io/cart/"+a.id);case 14:return e.next=16,k(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 :(");case 24:T(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"".concat(N.a.overlay," ").concat(s?N.a.overlayVisible:""),children:Object(h.jsxs)("div",{className:N.a.drawer,children:[Object(h.jsxs)("h2",{className:" d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(h.jsx)("img",{onClick:t,className:"cu-p",src:"img/btn-remove.svg",alt:"Remove"})]}),n.length>0?Object(h.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(h.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(h.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(h.jsxs)("div",{className:"mr-20 flex",children:[Object(h.jsx)("p",{className:"mb-5",children:e.title}),Object(h.jsx)("b",{children:e.price})]}),Object(h.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(h.jsxs)("div",{className:"cartTotalBlock",children:[Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[b," \u0433\u0440\u043d"]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[.05*b," \u0433\u0440\u043d"]})]})]}),Object(h.jsxs)("button",{disabled:A,onClick:F,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(h.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(h.jsx)(v,{title:y?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:y?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(p," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:y?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},C=c(2),y=c(37),I=c(22),_=c.n(I);var S=function(e){var t=e.id,c=e.title,r=e.imageUrl,n=e.price,s=e.onFavorite,i=e.onPlus,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,b=a.a.useContext(x).isItemAdded,m=a.a.useState(l),f=Object(u.a)(m,2),p=f[0],O=f[1],v={id:t,parentId:t,title:c,imageUrl:r,price:n};return Object(h.jsx)("div",{className:_.a.card,children:j?Object(h.jsxs)(y.a,{speed:2,width:155,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(h.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(h.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(h.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(h.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(h.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(h.jsxs)(h.Fragment,{children:[s&&Object(h.jsx)("div",{className:_.a.favorite,onClick:function(){s(v),O(!p)},children:Object(h.jsx)("img",{src:p?"img/liked.svg":"img/unliked.svg",alt:"Unliked"})}),Object(h.jsx)("img",{width:"100%",height:125,src:r,alt:"Sneakers"}),Object(h.jsx)("h5",{children:c}),Object(h.jsxs)("div",{className:"d-flex justify-between alight-center",children:[Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(h.jsxs)("b",{children:[n," \u0433\u0440\u043d"]})]}),i&&Object(h.jsx)("img",{className:_.a.plus,onClick:function(){i(v)},src:b(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Btn"})]})]})})};var A=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,l=e.isLoading;return Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsxs)("div",{className:"d-flex align-center mb-40 justify-between",children:[Object(h.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(h.jsxs)("div",{className:"search-block d-flex",children:[Object(h.jsx)("img",{src:"img/search.svg",alt:"Search"}),c&&Object(h.jsx)("img",{onClick:function(){return r("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Clear"}),Object(h.jsx)("input",{onChange:a,value:c,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(h.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(l?Object(o.a)(Array(8)):e).map((function(e,t){return Object(h.jsx)(S,Object(i.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:l},e),t)}))}()})]})};var T=function(){var e=a.a.useContext(x),t=e.favorites,c=e.onAddToFavorite;return Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(h.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(h.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(h.jsx)(S,Object(i.a)({favorited:!0,onFavorite:c},e),t)}))})]})};var F=function(){var e=a.a.useContext(x),t=(e.onAddToFavorite,e.onAddToCart,a.a.useState([])),c=Object(u.a)(t,2),r=c[0],n=c[1],s=a.a.useState(!0),l=Object(u.a)(s,2),b=l[0],m=l[1];return a.a.useEffect((function(){Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://617820779c328300175f5e2d.mockapi.io/orders");case 3:t=e.sent,c=t.data,n(c.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),m(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(h.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(h.jsx)("div",{className:"d-flex flex-wrap",children:(b?Object(o.a)(Array(8)):r).map((function(e,t){return Object(h.jsx)(S,Object(i.a)({loading:b},e),t)}))})]})};var V=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(u.a)(n,2),l=s[0],b=s[1],m=a.a.useState(""),p=Object(u.a)(m,2),v=p[0],g=p[1],N=a.a.useState([]),k=Object(u.a)(N,2),y=k[0],I=k[1],_=a.a.useState(!1),S=Object(u.a)(_,2),V=S[0],P=S[1],B=a.a.useState(!0),L=Object(u.a)(B,2),R=L[0],D=L[1];a.a.useEffect((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,c,a,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([O.a.get("https://617820779c328300175f5e2d.mockapi.io/items"),O.a.get("https://617820779c328300175f5e2d.mockapi.io/cart"),O.a.get("https://617820779c328300175f5e2d.mockapi.io/favorites")]);case 3:t=e.sent,c=Object(u.a)(t,3),a=c[0],n=c[1],s=c[2],D(!1),b(n.data),I(s.data),r(a.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ;("),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=l.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return b((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,O.a.delete("https://617820779c328300175f5e2d.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return b((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,O.a.post("https://617820779c328300175f5e2d.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,b((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(i.a)(Object(i.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!y.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=5;break}O.a.delete("https://617820779c328300175f5e2d.mockapi.io/favorites/".concat(t.id)),e.next=10;break;case 5:return e.next=7,O.a.post("https://617820779c328300175f5e2d.mockapi.io/favorites",t);case 7:c=e.sent,r=c.data,I((function(e){return[].concat(Object(o.a)(e),[r])}));case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b"),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(x.Provider,{value:{items:c,cartItems:l,favorites:y,isItemAdded:function(e){return l.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:U,setCartOpened:P,setCartItems:b,onAddToCart:E},children:Object(h.jsxs)("div",{className:"wrapper clear",children:[Object(h.jsx)(w,{items:l,onClose:function(){return P(!1)},onRemove:function(e){try{O.a.delete("https://617820779c328300175f5e2d.mockapi.io/cart/".concat(e)),b((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b "),console.error(t)}},opened:V}),Object(h.jsx)(f,{onClickCart:function(){return P(!0)}}),Object(h.jsx)(C.a,{path:"",exact:!0,children:Object(h.jsx)(A,{items:c,cartItems:l,searchValue:v,setSearchValue:g,onChangeSearchInput:function(e){g(e.target.value)},onAddToFavorite:U,onAddToCart:E,isLoading:R})}),Object(h.jsx)(C.a,{path:"favorites",exact:!0,children:Object(h.jsx)(T,{})}),Object(h.jsx)(C.a,{path:"orders",exact:!0,children:Object(h.jsx)(F,{})})]})})};c(70),c(71);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(b.a,{children:Object(h.jsx)(V,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.4a4f54a7.chunk.js.map