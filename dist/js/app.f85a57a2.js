(function(t){function e(e){for(var i,a,r=e[0],u=e[1],l=e[2],p=0,d=[];p<r.length;p++)a=r[p],o[a]&&d.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/owl-login-form/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"106f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"canvas",on:{mousemove:t.updateXY}}),i("div",{staticClass:"content"},[i("div",{staticClass:"avatar"},[t.typingPassword?[i("img",{staticClass:"test",attrs:{src:n("8d5b")}})]:[i("img",{attrs:{src:n("abbf")}}),i("div",{staticClass:"eye",class:{focus:t.typingEmail},style:{marginLeft:t.eyeFocusedMarginLeft+"px"},attrs:{id:"js-eye"}})]],2),i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"js-email-input",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),i("span",{class:["title",{"has-content":""!==t.email}]},[t._v("Email")])]),i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"js-password-input",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),i("span",{class:["title",{"has-content":""!==t.password}]},[t._v("Password")])]),i("button",{class:{"has-content":t.email&&t.password},on:{click:t.confirm}},[t._v("Confirm")])])])},s=[],a={name:"app",data:function(){return{typingEmail:!1,typingPassword:!1,email:"",password:""}},computed:{eyeFocusedMarginLeft:function(){return this.email.length<25?.54*this.email.length+37:50}},mounted:function(){var t=this,e=document.getElementById("js-email-input"),n=document.getElementById("js-password-input");this.$nextTick(function(){e.addEventListener("focus",function(){t.typingEmail=!0,document.getElementById("js-eye").style.marginLeft=t.eyeFocusedMarginLeft+"px"}),e.addEventListener("blur",function(){t.typingEmail=!1}),n.addEventListener("focus",function(){t.typingPassword=!0}),n.addEventListener("blur",function(){t.typingPassword=!1})})},methods:{confirm:function(){alert("🎉Congratulations!")},updateXY:function(t){var e=document.getElementById("js-eye");e&&!this.typingEmail&&this.$nextTick(function(){e.style.marginLeft=t.offsetX/window.innerWidth*14+37+"px",e.style.marginTop=t.offsetY/window.innerHeight*10-32+"px"})}}},r=a,u=(n("5c0b"),n("2877")),l=Object(u["a"])(r,o,s,!1,null,null,null);l.options.__file="App.vue";var c=l.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("106f"),o=n.n(i);o.a},"8d5b":function(t,e,n){t.exports=n.p+"img/owl_see_no_evil.ca40c043.png"},abbf:function(t,e,n){t.exports=n.p+"img/owl_focus_on_mouse.39889712.png"}});
//# sourceMappingURL=app.f85a57a2.js.map