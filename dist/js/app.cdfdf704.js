(function(){var t={788:function(t,e,n){"use strict";var o=n(963),i=n(252);function s(t,e,n,o,s,a){const l=(0,i.up)("the-header"),r=(0,i.up)("the-message"),c=(0,i.up)("the-about"),u=(0,i.up)("the-work"),d=(0,i.up)("the-contact");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l,{onName:a.show},null,8,["onName"]),"ak"===s.showed?((0,i.wg)(),(0,i.j4)(r,{key:0})):(0,i.kq)("",!0),"about"===s.showed?((0,i.wg)(),(0,i.j4)(c,{key:1})):(0,i.kq)("",!0),"work"===s.showed?((0,i.wg)(),(0,i.j4)(u,{key:2})):(0,i.kq)("",!0),"contact"===s.showed?((0,i.wg)(),(0,i.j4)(d,{key:3})):(0,i.kq)("",!0)],64)}var a=n(577);const l={class:"header"},r={class:"icon"},c={class:"right"},u=(0,i._)("span",{class:"number"},"01",-1),d=(0,i._)("span",{class:"number"},"02",-1),p=(0,i._)("span",{class:"number"},"03",-1),g=(0,i._)("button",{class:"button resume"},"Resume/CV",-1);function h(t,e,n,o,s,h){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",r,[(0,i._)("p",{onClick:e[0]||(e[0]=t=>h.show("ak")),class:"stroke-shadow"},"AK")]),(0,i._)("div",c,[(0,i._)("ul",null,[(0,i._)("li",{onClick:e[1]||(e[1]=t=>h.show("about"))},[u,(0,i._)("span",{class:(0,a.C_)(s.textClass)},"About",2)]),(0,i._)("li",{onClick:e[2]||(e[2]=t=>h.show("work"))},[d,(0,i._)("span",{class:(0,a.C_)(s.textClass)},"Work",2)]),(0,i._)("li",{onClick:e[3]||(e[3]=t=>h.show("contact"))},[p,(0,i._)("span",{class:(0,a.C_)(s.textClass)},"Contact",2)])]),g])])}var A={data(){return{textClass:"text-none"}},methods:{show(t){this.$emit("name",t)}},mounted(){}},k=n(744);const m=(0,k.Z)(A,[["render",h]]);var w=m,v=n(776),b=n(858);const x=(0,i.uE)('<div class="welcome-message"></div><div class="message"><div class="icons"><ul><li><img src="'+v+'" width="20px"></li><li><img src="'+b+'" width="20px"></li></ul></div><div class="message-body"><div class="message-name">Anastasiya Kononova</div><div class="message-desc">front-end developer interested in Vue.js</div></div><div class="contact-body"><ul><li><strong>Email: </strong> nastyakono@gmail.com</li><li><strong>Phone: </strong> +420 732191295 </li><li><strong>Github: </strong> www.github.com/wknsko</li></ul></div></div>',2);function f(t,e,n,o,i,s){return x}var y={};const T=(0,k.Z)(y,[["render",f]]);var D=T,I=n(451);const j={class:"about"},O=(0,i._)("h2",null,"About Me",-1),J=(0,i._)("div",{class:"about-body"},[(0,i._)("div",{class:"about-img"},[(0,i._)("img",{src:I})]),(0,i._)("div",{class:"about-text"},"Born and raised in Mariupol, Ukraine, but based in Prague for over a decade. Got interested in front-end development by making designs for 'hobby' websites on free hosting(narod.ru, tut.su) as student and also spend a lot of time making customised themes on tumblr. Still then it wasn't career choice, but one of hobbies. Finished Secondary School of Fashion, got into Faculty of Informatics, spend some time there and another university, but chose to take a job making HTML/CSS templates for websites. After few years and small break working as sales assistant was creating landing pages for businesses. Last two years dedicated to QA, but decided to get back to development with learning Vue.js. Working mostly remote. Fluent in Czech, English, Russian.")],-1),R={class:"about-tags"},P=(0,i._)("div",{class:"tag-text"},"in the process of learning",-1);function S(t,e,n,o,s,l){return(0,i.wg)(),(0,i.iD)("div",j,[O,J,(0,i._)("div",R,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.tags,(t=>((0,i.wg)(),(0,i.iD)("ul",{key:t},[(0,i._)("li",null,(0,a.zw)(t),1)])))),128)),P,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.learnTags,(t=>((0,i.wg)(),(0,i.iD)("ul",{key:t},[(0,i._)("li",null,(0,a.zw)(t),1)])))),128))])])}var M={data(){return{tags:["JS(ES6+)","VUE.JS","NODE.JS","GIT","AXIOS","HTML","CSS"],learnTags:["TYPESCRIPT","ANGULAR","MONGODB","EXPRESS"]}}};const C=(0,k.Z)(M,[["render",S]]);var B=C;const E={class:"container"},U=(0,i._)("h2",null,"Work",-1),W={class:"work"},H=(0,i._)("h4",null,"Experience",-1),Q={class:"ex-body"},L=(0,i._)("div",{class:"line"},null,-1),N={class:"line-point"},Z={key:0,class:"hide-text"},V={key:2,class:"else-pad"},F={class:"projects"},Y=(0,i._)("h4",null,"projects",-1),G={class:"projects-list"};function K(t,e,n,o,s,l){const r=(0,i.up)("app-work-point"),c=(0,i.up)("app-work-project");return(0,i.wg)(),(0,i.iD)("div",E,[U,(0,i._)("div",W,[H,(0,i._)("div",Q,[L,(0,i._)("div",N,[(0,i._)("div",{onMouseenter:e[0]||(e[0]=t=>(s.hideText=!s.hideText)&&(s.textIdx=0)),onMouseleave:e[1]||(e[1]=t=>s.hideText=!s.hideText&&(s.textIdx=100)),class:"dot",onClick:e[2]||(e[2]=t=>l.open(0))},null,32),(0,i._)("div",{onMouseenter:e[3]||(e[3]=t=>(s.hideText=!s.hideText)&&(s.textIdx=1)),onMouseleave:e[4]||(e[4]=t=>s.hideText=!s.hideText&&(s.textIdx=100)),class:"dot",onClick:e[5]||(e[5]=t=>l.open(1)),style:{"margin-left":"35vw !important","margin-top":"-21px  !important"}},null,32),(0,i._)("div",{onMouseenter:e[6]||(e[6]=t=>(s.hideText=!s.hideText)&&(s.textIdx=2)),onMouseleave:e[7]||(e[7]=t=>s.hideText=!s.hideText&&(s.textIdx=100)),class:"dot",onClick:e[8]||(e[8]=t=>l.open(2)),style:{"margin-left":"50vw !important","margin-top":"-21px  !important"}},null,32),(0,i._)("div",{onMouseenter:e[9]||(e[9]=t=>(s.hideText=!s.hideText)&&(s.textIdx=3)),onMouseleave:e[10]||(e[10]=t=>s.hideText=!s.hideText&&(s.textIdx=100)),class:"dot",onClick:e[11]||(e[11]=t=>l.open(3)),style:{"margin-left":"63vw !important","margin-top":"-21px  !important"}},null,32),(0,i._)("div",{onMouseenter:e[12]||(e[12]=t=>(s.hideText=!s.hideText)&&(s.textIdx=4)),onMouseleave:e[13]||(e[13]=t=>s.hideText=!s.hideText&&(s.textIdx=100)),class:"dot",onClick:e[14]||(e[14]=t=>l.open(4)),style:{"margin-left":"76vw !important","margin-top":"-21px  !important"}},null,32),s.hideText&&!s.isOpen?((0,i.wg)(),(0,i.iD)("div",Z,(0,a.zw)(s.pointTitle[s.textIdx]),1)):(0,i.kq)("",!0),s.isOpen?((0,i.wg)(),(0,i.j4)(r,{key:1,class:(0,a.C_)(s.classO),openPoint:s.currentPoint},null,8,["class","openPoint"])):((0,i.wg)(),(0,i.iD)("div",V))])])]),(0,i._)("div",F,[Y,(0,i._)("div",G,[(0,i._)("div",null,[(0,i.Wm)(c)])])])])}const q={class:"point"},z={key:0,class:"point-date"},X={class:"point-text"};function _(t,e,n,o,s,l){return(0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("h5",null,(0,a.zw)(s.points[n.openPoint].title),1),s.points[n.openPoint].date?((0,i.wg)(),(0,i.iD)("div",z,(0,a.zw)(s.points[n.openPoint].date),1)):(0,i.kq)("",!0),(0,i._)("div",X,(0,a.zw)(s.points[n.openPoint].desc),1)])}var $={props:["openPoint"],data(){return{points:[{title:"Education",desc:"Studied fashion design at Secondary School of Fashion in Prague, then spend one year at Faculty of IT, CVUT and two years at Faculty of Informatics and Statistics, VSE"},{title:"Freelance",date:2016,desc:"Worked remotely as part-time website templates' developer in HTML and CSS "},{title:"Front-end Developer",date:"2018-2020",desc:"Creating one page landing websites for businesses, using mostly HTML, CSS and basic JS, making graphic content for  business websites and social media using Figma"},{title:"QA",date:"2020-2022",desc:"Remotely worked on optimizing QA as part of a outsourcing team. "},{title:"Courses",desc:"Took cources for basic Javascript few years back, but improving my skills with online courses(such as Odin, Udemy, Microsoft) and recently finished Vue Course."}]}},watch:{},mounted(){}};const tt=(0,k.Z)($,[["render",_]]);var et=tt;const nt={class:"projects-list"},ot={class:"info"},it={class:"project-tags"},st={class:"project-body"},at={class:"img-container"},lt={class:"top"},rt=(0,i._)("span",{class:"img-dot"},null,-1),ct=(0,i._)("span",{class:"img-dot"},null,-1),ut=(0,i._)("span",{class:"img-dot"},null,-1),dt={class:"img-content"},pt=["src"];function gt(t,e,n,o,s,l){return(0,i.wg)(),(0,i.iD)("div",nt,[(0,i._)("div",{onClick:e[0]||(e[0]=t=>l.page("minus")),class:"material-symbols-outlined"}," chevron_left "),(0,i._)("div",{class:(0,a.C_)(["project-item",s.grid])},[(0,i._)("div",ot,[(0,i._)("h5",null,(0,a.zw)(l.projects[s.index].title),1),(0,i._)("div",it,[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.projects[s.index].tags,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{key:e},(0,a.zw)(t),1)))),128))])]),(0,i._)("div",st,(0,a.zw)(l.projects[s.index].text),1),(0,i._)("button",{class:"git-link",onClick:e[1]||(e[1]=t=>l.openLink(l.projects[s.index].gitlink))},"Open git repository")]),(0,i._)("div",null,[(0,i._)("div",at,[(0,i._)("div",lt,[rt,ct,ut,(0,i._)("span",{onClick:e[2]||(e[2]=t=>l.openLink(l.projects[s.index].link)),class:"open-btn"},"open")]),(0,i._)("div",dt,[(0,i._)("img",{src:l.getImg(l.projects[s.index].imgsrc)},null,8,pt)])])])],2),(0,i._)("div",{onClick:e[3]||(e[3]=t=>l.page("plus")),class:"material-symbols-outlined"}," chevron_right ")])}var ht={inject:["projects"],data(){return{index:0,project:{},grid:""}},methods:{openLink(t){window.open(t,"_blank")},getImg(t){return n(173)("./"+t)},page(t){0===this.index&&"minus"===t?this.index=this.projects.length-1:"plus"===t&&this.index===this.projects.length-1?this.index=0:"minus"===t?this.index--:"plus"===t&&this.index++}},computed:{},mounted(){window.innerWidth<=550&&(this.grid="project-grid")}};const At=(0,k.Z)(ht,[["render",gt]]);var kt=At,mt={data(){return{currentPoint:9,isOpen:!1,classO:"",hideText:!1,textIdx:100,pointTitle:["Education","Freelance","Front-end Developer","QA","Courses"]}},methods:{open(t){this.currentPoint===t?(this.currentPoint=t,this.classO="opacity-a",setTimeout((()=>{this.isOpen=!1,this.currentPoint=9}),2e3)):(this.currentPoint=t,this.isOpen=!0,this.classO="")}},mounted(){},components:{AppWorkPoint:et,AppWorkProject:kt}};const wt=(0,k.Z)(mt,[["render",K]]);var vt=wt;const bt={class:"contact"},xt=(0,i._)("div",{class:"contact-body"},[(0,i._)("h1",null,"Get in touch with me"),(0,i._)("div",{class:"contact-text"},"If you'd like to know more, feel free to send me an email"),(0,i._)("div",{class:"contact-email"},"nastyakono@gmail.com"),(0,i._)("button",null,"Contact Me")],-1),ft=[xt];function yt(t,e,n,o,s,a){return(0,i.wg)(),(0,i.iD)("div",bt,ft)}var Tt={};const Dt=(0,k.Z)(Tt,[["render",yt]]);var It=Dt,jt={data(){return{showed:"ak"}},methods:{show(t){this.showed=t},open(t){this.currentPoint===t?(this.isOpen=!1,this.currentPoint=9):(this.currentPoint=t,this.isOpen=!0)}},created(){},components:{TheHeader:w,TheMessage:D,TheAbout:B,TheWork:vt,TheContact:It}};const Ot=(0,k.Z)(jt,[["render",s]]);var Jt=Ot;const Rt=[{title:"Color Palette",tags:["HTML","Vue.js","CSS"],text:"Generates 6 random colors with example and you have the ability to copy HEX and RGB of the selected color ",imgsrc:"palette.png",link:"https://wknsko.github.io/vue-palette/",gitlink:"https://github.com/wknsko/vue-palette"},{title:"To-Do List",tags:["HTML","Vue.js","Bootstrap"],text:"Small Vue.js project that lets you add your tasks and change type of them",imgsrc:"todo.png",link:"https://wknsko.github.io/vue-to-do/",gitlink:"https://github.com/wknsko/vue-to-do"},{title:"Blog",tags:["HTML","Vue.js","CSS"],text:"Frontend of simple blog that lets you add diffent type of input",imgsrc:"blog.png",link:"https://wknsko.github.io/vue-blog/",gitlink:"https://github.com/wknsko/vue-blog"},{title:"Calculator",tags:["HTML","Vanilla JS","CSS"],text:"Simple calculator made just using Vanilla JS",imgsrc:"calculator.png",link:"https://wknsko.github.io/calculator/",gitlink:"https://github.com/wknsko/calculator"},{title:"News Aggregator",tags:["HTML","Vue.js","REST API"],text:"App that works with News Rest Api",imgsrc:"news.png",link:"https://wknsko.github.io/vue-news/",gitlink:"https://github.com/wknsko/vue-news"}];(0,o.ri)(Jt).provide("projects",Rt).mount("#app")},173:function(t,e,n){var o={"./blog.png":966,"./calculator.png":199,"./github.png":776,"./linkedin.webp":858,"./me.jpg":451,"./news.png":463,"./palette.png":426,"./todo.png":942};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id=173},966:function(t,e,n){"use strict";t.exports=n.p+"img/blog.43869c97.png"},199:function(t,e,n){"use strict";t.exports=n.p+"img/calculator.27848d0a.png"},776:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},858:function(t){"use strict";t.exports="data:image/webp;base64,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"},451:function(t,e,n){"use strict";t.exports=n.p+"img/me.e6f8505f.jpg"},463:function(t,e,n){"use strict";t.exports=n.p+"img/news.298ed10d.png"},426:function(t,e,n){"use strict";t.exports=n.p+"img/palette.80f91666.png"},942:function(t,e,n){"use strict";t.exports=n.p+"img/todo.20a22827.png"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,s){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],s=t[u][2];for(var l=!0,r=0;r<o.length;r++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(l=!1,s<a&&(a=s));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,i,s]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,s,a=o[0],l=o[1],r=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(r)var u=r(n)}for(e&&e(o);c<a.length;c++)s=a[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},o=self["webpackChunkmy_site"]=self["webpackChunkmy_site"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(788)}));o=n.O(o)})();
//# sourceMappingURL=app.cdfdf704.js.map