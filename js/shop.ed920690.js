(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"0fa5":function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("b-container",{staticClass:"mt-5 pl-5"},[c("table",{staticClass:"ml-5"},[c("thead",[c("tr",[c("th",[c("input",{staticClass:"checkAll",attrs:{id:"checkAll",type:"checkbox"},on:{click:function(e){return t.checkAllOrNot(e)}}})]),c("th",[t._v("序號")]),c("th",[t._v("商品")]),c("th",[t._v("單價")]),c("th",[t._v("數量")]),c("th",[t._v("操作")])])]),c("tbody",t._l(t.list,(function(e,n){return c("tr",{key:n},[c("td",[c("input",{staticClass:"checkItem",attrs:{type:"checkbox"},on:{click:function(e){return t.checkItem(e,n)}}})]),c("td",[t._v(t._s(n+1))]),c("td",[t._v(t._s(e.name))]),c("td",[t._v(t._s(e.price))]),c("td",[c("button",{attrs:{disabled:1===e.count},on:{click:function(e){return t.reduceCount(n)}}},[t._v("-")]),t._v(" "+t._s(e.count)+" "),c("button",{on:{click:function(e){return t.addCount(n)}}},[t._v("+")])]),c("td",[c("button",{on:{click:function(e){return t.remove(n)}}},[t._v("刪除")])])])})),0)]),c("div",[t._v("總價：NT:"+t._s(t.totalPrice)+"元")])])],1)},r=[],o=(c("99af"),c("a434"),{name:"Shop",data:function(){return{list:[{id:1,name:"統一獅球員卡",price:450,count:1},{id:2,name:"統一獅實戰球衣",price:3e3,count:1},{id:3,name:"啦啦隊實戰球衣",price:15e4,count:1},{id:4,name:"雞腿便當",price:150,count:1}],checkList:[]}},mounted:function(){this.checkAll(),this.checkAllElement(document.querySelector(".checkAll"))},computed:{totalPrice:function(){for(var t=0,e=0;e<this.checkList.length;e++){var c=this.checkList[e];t+=c.price*c.count}return t.toLocaleString()}},methods:{reduceCount:function(t){1!==this.list[t].count&&this.list[t].count--},addCount:function(t){this.list[t].count++},remove:function(t){console.log("remove-index:"+t),this.list.splice(t,1);for(var e=t+1,c=this.checkList,n=0;n<c.length;n++){var r=c[n];r.id===e&&c.splice(n,1)}},checkAllOrNot:function(t){t.target.checked?(this.checkAll(),console.log("checkList："+this.checkList)):(console.log("全不選"),this.checkInItems("noCheckAll"),this.checkList.splice(0))},checkAll:function(){console.log("全選"),this.checkInItems("checkAll"),this.checkList=this.list.concat()},checkInItems:function(t){for(var e=document.querySelectorAll(".checkItem"),c=0;c<e.length;c++){var n=e[c];n.checked="checkAll"===t}},checkItem:function(t,e){console.log("checkItem");var c=t.target,n=document.querySelector(".checkAll");c.checked?(this.checkList.push(this.list[e]),this.checkAllElement(n)):(this.checkList.splice(e,1),n.checked=!1)},checkAllElement:function(t){this.checkList.length===this.list.length&&(t.checked=!0)}}}),i=o,l=(c("ace4"),c("2877")),s=Object(l["a"])(i,n,r,!1,null,null,null);e["default"]=s.exports},"1dde":function(t,e,c){var n=c("d039"),r=c("b622"),o=c("2d00"),i=r("species");t.exports=function(t){return o>=51||!n((function(){var e=[],c=e.constructor={};return c[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,c){var n=c("861d"),r=c("e8b5"),o=c("b622"),i=o("species");t.exports=function(t,e){var c;return r(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!r(c.prototype)?n(c)&&(c=c[i],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},"70ac":function(t,e,c){},8418:function(t,e,c){"use strict";var n=c("c04e"),r=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var i=n(e);i in t?r.f(t,i,o(0,c)):t[i]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),r=c("d039"),o=c("e8b5"),i=c("861d"),l=c("7b0b"),s=c("50c4"),u=c("8418"),a=c("65f0"),h=c("1dde"),f=c("b622"),d=c("2d00"),k=f("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",m=d>=51||!r((function(){var t=[];return t[k]=!1,t.concat()[0]!==t})),b=h("concat"),A=function(t){if(!i(t))return!1;var e=t[k];return void 0!==e?!!e:o(t)},g=!m||!b;n({target:"Array",proto:!0,forced:g},{concat:function(t){var e,c,n,r,o,i=l(this),h=a(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],A(o)){if(r=s(o.length),f+r>v)throw TypeError(p);for(c=0;c<r;c++,f++)c in o&&u(h,f,o[c])}else{if(f>=v)throw TypeError(p);u(h,f++,o)}return h.length=f,h}})},a434:function(t,e,c){"use strict";var n=c("23e7"),r=c("23cb"),o=c("a691"),i=c("50c4"),l=c("7b0b"),s=c("65f0"),u=c("8418"),a=c("1dde"),h=c("ae40"),f=a("splice"),d=h("splice",{ACCESSORS:!0,0:0,1:2}),k=Math.max,v=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!d},{splice:function(t,e){var c,n,a,h,f,d,b=l(this),A=i(b.length),g=r(t,A),_=arguments.length;if(0===_?c=n=0:1===_?(c=0,n=A-g):(c=_-2,n=v(k(o(e),0),A-g)),A+c-n>p)throw TypeError(m);for(a=s(b,n),h=0;h<n;h++)f=g+h,f in b&&u(a,h,b[f]);if(a.length=n,c<n){for(h=g;h<A-n;h++)f=h+n,d=h+c,f in b?b[d]=b[f]:delete b[d];for(h=A;h>A-n+c;h--)delete b[h-1]}else if(c>n)for(h=A-n;h>g;h--)f=h+n-1,d=h+c-1,f in b?b[d]=b[f]:delete b[d];for(h=0;h<c;h++)b[h+g]=arguments[h+2];return b.length=A-n+c,a}})},ace4:function(t,e,c){"use strict";c("70ac")},ae40:function(t,e,c){var n=c("83ab"),r=c("d039"),o=c("5135"),i=Object.defineProperty,l={},s=function(t){throw t};t.exports=function(t,e){if(o(l,t))return l[t];e||(e={});var c=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,a=o(e,0)?e[0]:s,h=o(e,1)?e[1]:void 0;return l[t]=!!c&&!r((function(){if(u&&!n)return!0;var t={length:-1};u?i(t,1,{enumerable:!0,get:s}):t[1]=1,c.call(t,a,h)}))}},e8b5:function(t,e,c){var n=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=shop.ed920690.js.map