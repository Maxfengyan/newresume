import{d as t,c as e,a as n,b as o,n as l,e as i,o as s,p as a,f as c,r as p,g as r,h as u,i as d,t as m,j as y,F as x,k as v,l as g,_ as h,m as f,D as b,I as j,w,q as k,u as T,s as M,v as S,P as I,x as P}from"./vendor.27f5b58b.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const _=t({props:{name:{type:String,required:!0},color:{type:String,default:""}},setup:t=>({iconName:e((()=>`#icon-${t.name}`)),svgClass:e((()=>"svg-icon"))})}),E=["xlink:href"];_.render=function(t,e,a,c,p,r){return s(),n("svg",{class:l(t.svgClass),style:i({color:t.color})},[o("use",{"xlink:href":t.iconName},null,8,E)],6)};var A="./assets/avatar.711305d2.png";const C={setup(){const t=p(0);return{avatar:A,num:t,showEgg:()=>{t.value=t.value+1,5===t.value&&(document.querySelector(".EasterEgg").style.opacity="1",t.value=0)}}}};a("data-v-785db625");const L={class:"header"},O=["src"],N={class:"header-link"},D=o("a",{href:"https://github.com/Maxfengyan"},"https://github.com/Maxfengyan",-1),H={class:"gitee"},q=o("a",{href:"https://gitee.com/Maxfengyan"},"https://gitee.com/Maxfengyan",-1),J=d("18624443327@163.com"),z=d("mafengyanxx"),V={class:"header-name"},G=o("span",null,"马丰彦",-1),B=o("div",null,"前端工程师/NodeJs后端开发",-1);c(),C.render=function(t,e,l,i,a,c){const p=r("svg-icon");return s(),n("div",L,[o("img",{src:i.avatar,class:"header-avatar",onClick:e[0]||(e[0]=(...t)=>i.showEgg&&i.showEgg(...t))},null,8,O),o("div",N,[o("span",null,[u(p,{name:"GitHub"}),D]),o("span",H,[u(p,{name:"gitee"}),q]),o("span",null,[u(p,{name:"mail"}),J]),o("span",null,[u(p,{name:"wechat"}),z])]),o("div",V,[G,u(p,{name:"man"}),B])])},C.__scopeId="data-v-785db625";const R={props:{icon:{type:String,required:!0},name:{type:String,required:!0},englishName:{type:String,required:!0}}};a("data-v-5333e472");const U={class:"header-title"},K={class:"header-title-icon"},F={class:"header-title-name"};c(),R.render=function(t,e,l,i,a,c){const p=r("svg-icon");return s(),n("div",U,[o("div",K,[u(p,{name:l.icon},null,8,["name"])]),o("div",F,[o("span",null,m(l.name),1),o("span",null,m(l.englishName),1)])])},R.__scopeId="data-v-5333e472";const Q={props:{icon:{type:String,required:!0},title:{type:String,required:!0},append:{type:Object,default:{type:1,content:"",url:""}}}};a("data-v-01ed0d74");const W={class:"tab-title"},X={class:"tab-title-icon"},$={class:"tab-title-content"},Y={key:0},Z=["href"];c(),Q.render=function(t,e,l,i,a,c){const p=r("svg-icon");return s(),n("div",W,[o("div",X,[u(p,{name:l.icon},null,8,["name"])]),o("div",$,[o("span",null,m(l.title),1),1===l.append.type?(s(),n("div",Y,m(l.append.content),1)):y("",!0),0===l.append.type?(s(),n("a",{key:1,href:l.append.url},m(l.append.content),9,Z)):y("",!0)])])},Q.__scopeId="data-v-01ed0d74";const tt={components:{Headertitle:R,TabTitle:Q},setup:()=>({unImg:"./assets/un.c1ce28cb.jpg"})};a("data-v-213e0ee4");const et={class:"edu"},nt={class:"university"},ot=["src"],lt=o("span",{class:"university-name"},"沈阳师范大学",-1),it={class:"specialty"},st=o("span",null,"软件工程",-1),at=o("div",{class:"line"},null,-1),ct=o("div",{class:"round"},null,-1);c(),tt.render=function(t,e,l,i,a,c){const p=r("headertitle"),d=r("tabTitle"),m=r("svg-icon");return s(),n("div",et,[u(p,{icon:"book",name:"教育经历",englishName:"EDUCATION"}),u(d,{style:{"margin-top":"10px"},icon:"bookmark",title:"本科",append:{type:1,content:"2013 ~ 2017",url:""}}),o("div",nt,[o("img",{src:i.unImg},null,8,ot),lt,o("div",it,[u(m,{name:"edu"}),st])]),at,ct])},tt.__scopeId="data-v-213e0ee4";const pt={props:{name:{type:String,required:!0}}};a("data-v-79fc91bc");const rt={class:"title"};c(),pt.render=function(t,e,o,l,i,a){return s(),n("div",rt,m(o.name),1)},pt.__scopeId="data-v-79fc91bc";const ut={props:{icon:{type:String,required:!0},title:{type:String,required:!0},text:{type:String,required:!0},type:{type:Number,required:!0}}};a("data-v-252dafe2");const dt={key:0,class:"content"},mt={key:0,class:"content-text"},yt=["href"];c(),ut.render=function(t,e,l,a,c,p){const d=r("svg-icon");return 3!==l.type?(s(),n("div",dt,[u(d,{name:l.icon},null,8,["name"]),o("span",{class:"content-title",style:i({"font-size":parseInt(l.title)?"17px":"15px",color:parseInt(l.title)?"#0a7df4":"#409eff"})},m(l.title),5),0===l.type?(s(),n("span",mt,m(l.text),1)):y("",!0),1===l.type?(s(),n("a",{key:1,href:l.text},"点击查看",8,yt)):y("",!0)])):y("",!0)},ut.__scopeId="data-v-252dafe2";const xt=[{icon:"system",title:"1.IPTV融合运营支撑系统: ",type:0,text:" 服务于江苏/辽宁省台广电的融合用户平台，集IPTV用户管控系统、增值业务系统、账务系统、数据监控多系统于一体的后台管理系统。"},{icon:"about",title:"技术栈: ",type:0,text:" vue/vuex/vue-router/element-ui/excelJs/Echarts/easy-mock/"},{icon:"show",title:"演示地址: ",type:1,text:" https://maxfengyan.gitee.io/boss-login/#/"},{icon:"person",title:"本人负责: ",type:0,text:" 整个系统的前端架构以及代码开发。"}],vt=[{icon:"system",title:"2.epg智能管理系统: ",type:0,text:" 服务于江苏/辽宁/浙江省台广电的epg智能系统，具有智能可视化布局EPG页面、静态数据生成审核下发、栏目节目智能编排上下线等功能。"},{icon:"about",title:"技术栈: ",type:0,text:" vue3/vite/原生js/canvas"},{icon:"show",title:"专题制作模块演示地址: ",type:1,text:" https://maxfengyan.gitee.io/visual-drag/index.html"},{icon:"person",title:"本人负责: ",type:0,text:" 系统的前端架构以及代码开发。"}],gt=[{icon:"system",title:"3.epg活动营销系统: ",type:0,text:" 服务于山东海看广电的营销系统，负责配置EPG端营销活动：答题、抽奖、签到、大转盘等多种配置创建模式。"},{icon:"about",title:"技术栈: ",type:0,text:" jsp/原生js/canvas"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 系统的前端架构以及代码开发。"}],ht=[{icon:"system",title:"4.IPTV端epg页面: ",type:0,text:" 对接epg智能管理系统下发的静态数据，在IPTV盒子端呈现的智能瀑布流页面，具备高性能加载、灵活可扩展、功能齐全的瀑布流可视化页面。"},{icon:"about",title:"技术栈: ",type:0,text:" 原生js/canvas/gulp/polyfill/babel/koa"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 前端架构以及代码开发。"}],ft=[{icon:"system",title:"5.媒资管理系统: ",type:0,text:" 服务于浙江广电的媒资管理系统，负责点播/直播节目的编排、审核上下线、上下游节目透传以及工单处理等功能。"},{icon:"about",title:"技术栈: ",type:0,text:" vue/vue-router/vuex/webpack"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 前端代码开发。"}],bt=[{icon:"system",title:"6.用户校验系统: ",type:0,text:" 服务于辽宁电信IPTV用户EPG端观看、购买、收藏接口。"},{icon:"about",title:"技术栈: ",type:0,text:" nodejs/express/pm2/redis/mongodb/log4j"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 整个项目开发。"}],jt=[{icon:"system",title:"7.3A鉴权系统: ",type:0,text:" 服务于江苏广电的高并发接口系统，用于用户开机自采、鉴权、失效等信息处理。"},{icon:"about",title:"技术栈: ",type:0,text:" nodejs/fastify/pm2/mongodb/zookpeer/codis/winston"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 项目初始架构以及后续部分开发。"}],wt=[{icon:"system",title:"8.epg入口管理系统: ",type:0,text:" 服务于公司内部的管理系统，管理所有机顶盒入口地址，便于切换访问环境以及调试。"},{icon:"about",title:"技术栈: ",type:0,text:" nodejs/nestJs/mongodb/pm2/ts"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 整个项目的开发。"}],kt=[{icon:"system",title:"9.文件管理系统: ",type:0,text:" 服务于公司内部的系统，zip:产品经理通过系统上传原型，生成静态资源url便于访问。excel:上传excel文件后程序解析生成html页面便于预览查看。"},{icon:"about",title:"技术栈: ",type:0,text:" nodejs/nestJs/adm-zip"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 整个项目的开发。"}],Tt=[{icon:"system",title:"10.超级播控系统: ",type:0,text:" 服务于辽宁广电的大屏展示系统，主要展示实时用户开户数据、订购趋势、开机数量等数据。"},{icon:"about",title:"技术栈: ",type:0,text:" Echarts"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 部分前端代码开发。"}],Mt=[{icon:"system",title:"1.PC端项目: ",type:0,text:" 重庆电力研究所电力系统、大连海关内部系统、驾校管理系统、辽台都市惠商城系统等。"},{icon:"about",title:"技术栈: ",type:0,text:" jQuery/Angular/layui/mui/"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 前端代码开发。"}],St=[{icon:"system",title:"2.移动端项目: ",type:0,text:" 微信小程序开发(已上线：爱估回收、环卫士、RSLab等)，混合安卓端开发"},{icon:"about",title:"技术栈: ",type:0,text:" mui"},{icon:"show",title:"演示地址: ",type:3,text:" 略"},{icon:"person",title:"本人负责: ",type:0,text:" 前端代码开发。"}];const It={components:{Headertitle:R,TabTitle:Q,Titlecomponent:pt,Contentcomponent:ut},setup:()=>({boss:xt,epgms:vt,epg:ht,ma:ft,cams:gt,ugms:bt,AAA:jt,EPGmanage:wt,uploadfile:kt,superplayer:Tt,waibaoPc:Mt,waibaoMobile:St})};a("data-v-6ef50376");const Pt={class:"experience"},_t={class:"project",style:{"margin-top":"20px"}},Et={class:"project"},At={class:"project"},Ct={class:"project"},Lt={class:"project"},Ot={class:"project"},Nt={class:"project"},Dt={class:"project"},Ht={class:"project"},qt={class:"project"},Jt={class:"project",style:{"margin-top":"20px"}},zt={class:"project"},Vt=o("div",{class:"line"},null,-1),Gt=o("div",{class:"round"},null,-1);c(),It.render=function(t,e,l,i,a,c){const p=r("headertitle"),d=r("tabTitle"),m=r("titlecomponent"),y=r("contentcomponent");return s(),n("div",Pt,[u(p,{icon:"rocket",name:"项目与工作经验",englishName:"EXPERIENCE"}),u(d,{style:{"margin-top":"10px"},icon:"package",title:"北京百途互动股份有限公司",append:{type:1,content:"2018-09 ~ 至今",url:""}}),u(m,{name:"前端开发 && Node.js后台开发"}),o("div",_t,[(s(!0),n(x,null,v(i.boss,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",Et,[(s(!0),n(x,null,v(i.epgms,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",At,[(s(!0),n(x,null,v(i.cams,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",Ct,[(s(!0),n(x,null,v(i.epg,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",Lt,[(s(!0),n(x,null,v(i.ma,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",Ot,[(s(!0),n(x,null,v(i.ugms,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",Nt,[(s(!0),n(x,null,v(i.AAA,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",Dt,[(s(!0),n(x,null,v(i.EPGmanage,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",Ht,[(s(!0),n(x,null,v(i.uploadfile,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",qt,[(s(!0),n(x,null,v(i.superplayer,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),u(d,{style:{"margin-top":"10px"},icon:"package",title:"沈阳元格信息技术",append:{type:1,content:"2017-07 ~ 2018-08",url:""}}),u(m,{name:"前端开发"}),o("div",Jt,[(s(!0),n(x,null,v(i.waibaoPc,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),o("div",zt,[(s(!0),n(x,null,v(i.waibaoMobile,(t=>(s(),g(y,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),Vt,Gt])},It.__scopeId="data-v-6ef50376";const Bt=[{icon:"system",title:"vue3-element后台管理系统模板: ",type:0,text:" 自己搭建的vue3-vite后台管理系统，功能齐全、组件解耦清晰、权限灵活配置、即拿即用。"},{icon:"about",title:"技术栈: ",type:0,text:" vue3/vite/vuex/vue-touter/element-plus/js-cookie/axios/svg-icon/"},{icon:"show",title:"演示地址: ",type:1,text:"https://maxfengyan.gitee.io/vue3-admin-template-vite/#/login"},{icon:"xunzhang",title:"收获: ",type:0,text:" 依靠此模板框架承接公司所有后台管理系统，开发效率提高、使用体验增强。并且自己对于vue技术掌握更加纯熟。"}],Rt=[{icon:"system",title:"可视化编辑生成html: ",type:0,text:" 一款可视化编辑元素并生成html的vue操作组件，通过可视化拖拉拽页面小组件，实现编排生成html页面的功能"},{icon:"about",title:"技术栈: ",type:0,text:" vue3/canvas/element-plus"},{icon:"show",title:"演示地址: ",type:1,text:"https://maxfengyan.gitee.io/visual-drag/index.html"},{icon:"xunzhang",title:"收获: ",type:0,text:" 此组件是epgms项目编排瀑布流专题的核心组件。并且强化了HTML5 draggable的API学习，以及各种DOM事件的操作。"}],Ut=[{icon:"system",title:"机顶盒端调试输出: ",type:0,text:" 一个在机顶盒端输出调试信息的js脚本插件"},{icon:"about",title:"技术栈: ",type:0,text:" 原生js/webpack/es6"},{icon:"show",title:"演示地址: ",type:3,text:""},{icon:"xunzhang",title:"收获: ",type:0,text:" 广电IPTV屏蔽浏览器console，通过此组件输出调试信息提升开发效率，功能齐全方便开发。"}],Kt=[{icon:"system",title:"LemonTodo: ",type:0,text:" 一款桌面端 TODOllist，记录每天要干啥,使用方便简单，可随时记录，本地存储。"},{icon:"about",title:"技术栈: ",type:0,text:" electron/vue3/vite"},{icon:"show",title:"演示地址: ",type:3,text:""},{icon:"xunzhang",title:"收获: ",type:0,text:" 尝试electron与vue的结合开发应用。并且通过此应用让我工作效率直线上升。"}],Ft=[{icon:"system",title:"electronexcel: ",type:0,text:" 一款桌面端多excel文件比对数据汇总处理的应用。"},{icon:"about",title:"技术栈: ",type:0,text:" electron/vue/exceljs"},{icon:"show",title:"演示地址: ",type:3,text:""},{icon:"xunzhang",title:"收获: ",type:0,text:" 爱情"}],Qt=[{icon:"system",title:"video付费项目:",type:0,text:" 一款短视频播放的机顶盒端APK应用"},{icon:"about",title:"技术栈: ",type:0,text:" Hbuilder/webpack/js/xgplayer/polyfill"},{icon:"show",title:"演示地址: ",type:3,text:""},{icon:"xunzhang",title:"收获: ",type:0,text:" 对视频TS流文件处理以及html5 plus使用"}],Wt=[{icon:"system",title:"web端简历:",type:0,text:" 此款web端个人简历，具备响应式布局，pc端/移动端兼容以及pdf生成下载功能"},{icon:"about",title:"技术栈: ",type:0,text:" vue3/vite"},{icon:"show",title:"演示地址: ",type:4,text:""},{icon:"xunzhang",title:"收获: ",type:0,text:" 练习了页面布局以及多端响应式"}];const Xt={components:{Headertitle:R,TabTitle:Q,Titlecomponent:pt,Contentcomponent:ut},setup:()=>({vue3Template:Bt,visualDrag:Rt,aconsole:Ut,LemonTodo:Kt,electronexcel:Ft,video:Qt,resume:Wt})};a("data-v-87d7c08a");const $t={class:"person"},Yt={class:"project"},Zt={class:"project"},te={class:"project"},ee={class:"project"},ne={class:"project"},oe={class:"project"},le={class:"project"},ie=o("div",{class:"line"},null,-1),se=o("div",{class:"round"},null,-1);c(),Xt.render=function(t,e,l,i,a,c){const p=r("headertitle"),d=r("tabTitle"),m=r("contentcomponent");return s(),n("div",$t,[u(p,{icon:"person2",name:"个人项目",englishName:"Person"}),u(d,{style:{"margin-top":"10px"},icon:"project",title:"vue3-element-template-vite",append:{type:0,content:"</>源代码",url:"https://gitee.com/Maxfengyan/vue3-admin-template-vite"}},null,8,["append"]),o("div",Yt,[(s(!0),n(x,null,v(i.vue3Template,(t=>(s(),g(m,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),u(d,{style:{"margin-top":"10px"},icon:"project",title:"visual-drag",append:{type:0,content:"</>源代码",url:"https://gitee.com/Maxfengyan/visual-drag"}},null,8,["append"]),o("div",Zt,[(s(!0),n(x,null,v(i.visualDrag,(t=>(s(),g(m,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),u(d,{style:{"margin-top":"10px"},icon:"project",title:"aconsole",append:{type:0,content:"</>源代码",url:"https://gitee.com/Maxfengyan/m-console"}},null,8,["append"]),o("div",te,[(s(!0),n(x,null,v(i.aconsole,(t=>(s(),g(m,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),u(d,{style:{"margin-top":"10px"},icon:"project",title:"LemonTodo",append:{type:0,content:"</>源代码",url:"https://gitee.com/Maxfengyan/pc-todolist"}},null,8,["append"]),o("div",ee,[(s(!0),n(x,null,v(i.LemonTodo,(t=>(s(),g(m,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),u(d,{style:{"margin-top":"10px"},icon:"project",title:"electronexcel",append:{type:0,content:"</>源代码",url:"https://gitee.com/Maxfengyan/electronexcel"}},null,8,["append"]),o("div",ne,[(s(!0),n(x,null,v(i.electronexcel,(t=>(s(),g(m,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),u(d,{style:{"margin-top":"10px"},icon:"project",title:"video",append:{type:1,content:"略",url:"https://gitee.com/Maxfengyan/electronexcel"}},null,8,["append"]),o("div",oe,[(s(!0),n(x,null,v(i.video,(t=>(s(),g(m,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),u(d,{style:{"margin-top":"10px"},icon:"project",title:"resume",append:{type:0,content:"</>源代码",url:"https://gitee.com/Maxfengyan/electronexcel"}},null,8,["append"]),o("div",le,[(s(!0),n(x,null,v(i.resume,(t=>(s(),g(m,{icon:t.icon,title:t.title,text:t.text,type:t.type},null,8,["icon","title","text","type"])))),256))]),u(d,{style:{"margin-top":"10px"},icon:"more",title:"更多项目参见gitee",append:{type:0,content:"</>查看更多",url:"https://gitee.com/Maxfengyan"}},null,8,["append"]),u(m,{style:{"padding-left":"48px"},icon:"about",title:"gitee地址：",text:"https://gitee.com/Maxfengyan",type:1}),ie,se])},Xt.__scopeId="data-v-87d7c08a";const ae={components:{Educomponent:tt,Expcomponent:It,Personcomponent:Xt}};a("data-v-10fd283c");const ce={class:"left"};c(),ae.render=function(t,e,o,l,i,a){const c=r("educomponent"),p=r("expcomponent"),d=r("personcomponent");return s(),n("div",ce,[u(c),u(p),u(d)])},ae.__scopeId="data-v-10fd283c";const pe=["编写语义化规范化的HTMl标签和属性","使用html表单处理以及iframe等复杂处理","使用meta标签的应用场景以及html头部标签的使用","熟练使用HTML5:canvas/svg/websocket/draggable等"],re=["使用响应式布局开发多端页面","了解flex布局以及传统布局模式","熟悉盒模型概念以及触发bfc概念","使用css3实现复杂动画以及页面效果","掌握css选择器以及处理浏览器兼容情况","使用css预处理器stylus/sass敏捷开发css"],ue=["了解Ajax执行原理以及原生方法","掌握开发js插件的封装以及运作模式","了解ES6并在实际项目中进行开发使用","熟练使用nodejs环境进行前端工程开发","项目中使用typescript进行大型项目开发","了解js异步机制以及EVent Loop执行机制","熟练使用JavaScript进行开发，略微了解js编译执行机制","了解js中特有机制:闭包/词法作用域/函数作用域/块级作用域等","掌握js面向对象/原型链prototype/继承机制/创建伪类多种模式"],de=["掌握DOM元素节点以及属性API操作和选取","熟悉DOM事件/事件冒泡与捕捉/事件委托/模拟事件等","掌握DOM渲染机制以及重排/重绘概念，编写高性能dom操作"],me=["了解BOM中基本API并加以使用","了解window寄生环境方法以及属性","了解多种缓存存储机制以及indexDB存储","掌握location以及history以及浏览器Navigator"],ye=["跨域请求限制以及解决方案","表单请求处理流文件的接收与上传","了解TCP三次握手以及无状态请求模式","了解http请求异同以及长连接等新特性","了解http请求/响应报文格式以及请求头参数设置"],xe=["svg瀑布流雪碧图加载svg图标","canvas网页截图转换base64图片","使用canvas进行图片转换并进行编辑"],ve=["使用babel配置项目进行开发","了解服务端渲染以及部署使用","了解commonjs规范以及AMD/CMD","使用typescript进行项目开发迭代","使用eslint+prettier进行日常开发，保持代码整洁","熟练使用前端构建工具webpack/gulp/vite来搭建开发项目并部署"],ge=["使用jsx语法进行项目开发","学习了解过react，做个demo管理系统","使用vuex进行数据状态管理与缓存存储进行合理搭配","熟练使用vue-router，深度使用路由API并进行方法封装","使用vue2/3以及其生态插件，了解底层数据驱动响应原理","了解MVVM以及MVC模型，理解虚拟dom在框架中的应用优势"],he=["开发过微信小程序，以及公众号嵌入开发","掌握优化页面加载技能，开发高性能web页面","自己配置nginx文件，进行反向代理并部署前端项目","开发过混合App(Hbuilder)，了解移动端开发以及调用安卓API"],fe=["依靠nodesjs开发一些实用小工具","了解nodejs原生API以及基本开发使用","使用express/koa2/fastify等框架开发，提供高并发restful接口"],be=["使用electron开发pc端桌面应用","使用pm2进行nodejs项目线上部署及监控","使用mongodb/reids基本API存储方法进行项目开发"],je=["熟练使用Vscode/idea等IDE","使用nodeJs编写文件处理脚本","熟练使用git/svn版本管理工具管理项目","能够使用Photoshop完成基本的图片处理","具备基本的项目规划管理以及团队协作能力","开发过微信相关API，熟悉相关开发部署流程","开发过视频直播流播放相关项目，具有一定经验","使用mock语法，并搭建easy-mock项目配合前端开发","使用MarkDown语法编写文档，具备良好技术交流能力","了解基本JSP语法和标签，能够和java开发同事友好开发协作","基本的Linux命令，进行服务部署/文件编辑/查看内存/性能监控等"];const we={components:{Headertitle:R,TabTitle:Q,Titlecomponent:pt},setup:()=>({HTML:pe,css:re,ECMAScript:ue,DOM:de,BOM:me,http:ye,canvassvg:xe,engineered:ve,frame:ge,other:he,nodejs:fe,others:be,realOther:je})};a("data-v-4269dfa7");const ke={class:"skills"},Te={class:"commontext"},Me={class:"commontext"},Se={class:"commontext"},Ie={class:"commontext"},Pe={class:"commontext"},_e={class:"commontext"},Ee={class:"commontext"},Ae={class:"commontext"},Ce={class:"commontext"},Le={class:"commontext"},Oe={class:"commontext"},Ne={class:"commontext"},De={class:"commontext"},He=o("div",{class:"line"},null,-1),qe=o("div",{class:"round"},null,-1);c(),we.render=function(t,e,l,i,a,c){const p=r("headertitle"),d=r("tabTitle"),y=r("titlecomponent"),g=r("svg-icon");return s(),n("div",ke,[u(p,{icon:"book",name:"掌握技能",englishName:"SKILLS"}),u(d,{style:{"margin-top":"10px"},icon:"pintu",title:"Web前端",append:{type:1,content:"",url:""}}),u(y,{name:"HTML"}),(s(!0),n(x,null,v(i.HTML,(t=>(s(),n("div",Te,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"css"}),(s(!0),n(x,null,v(i.css,(t=>(s(),n("div",Me,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"ECMAScript"}),(s(!0),n(x,null,v(i.ECMAScript,(t=>(s(),n("div",Se,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"DOM"}),(s(!0),n(x,null,v(i.DOM,(t=>(s(),n("div",Ie,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"BOM"}),(s(!0),n(x,null,v(i.BOM,(t=>(s(),n("div",Pe,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"http"}),(s(!0),n(x,null,v(i.http,(t=>(s(),n("div",_e,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"canvas/svg"}),(s(!0),n(x,null,v(i.canvassvg,(t=>(s(),n("div",Ee,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"前端工程化"}),(s(!0),n(x,null,v(i.engineered,(t=>(s(),n("div",Ae,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"前端框架"}),(s(!0),n(x,null,v(i.frame,(t=>(s(),n("div",Ce,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"杂项"}),(s(!0),n(x,null,v(i.other,(t=>(s(),n("div",Le,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(d,{style:{"margin-top":"10px"},icon:"cloud",title:"后端",append:{type:1,content:"",url:""}}),u(y,{name:"nodejs"}),(s(!0),n(x,null,v(i.nodejs,(t=>(s(),n("div",Oe,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(y,{name:"其他"}),(s(!0),n(x,null,v(i.others,(t=>(s(),n("div",Ne,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),u(d,{style:{"margin-top":"10px"},icon:"chilun",title:"其他",append:{type:1,content:"",url:""}}),(s(!0),n(x,null,v(i.realOther,(t=>(s(),n("div",De,[u(g,{name:"star"}),o("span",null,m(t),1)])))),256)),He,qe])},we.__scopeId="data-v-4269dfa7";const Je=["阅读英文技术文档","更加语义化命名变量规则","浏览github、Stack Overflow等"],ze=["姓名：马丰彦","出生年份：1995","擅长：原生js/css/vue/nodejs开发","求职意向：web前端开发/nodejs后端开发","个人爱好：开源/看大神代码学习/看书/篮球爱好者","已看完纸质书籍：《JavaScript高级语言程序设计》《HTML5权威指南》《css权威指南》《你不知道的JavaScript》《ES6 入门》《高性能js》..."],Ve=["热爱技术，拥抱前端。","对代码富有激情以及责任心，轻微代码洁癖(eslint常伴吾身)","抗压能力强热爱交流，善于沟通解决问题。","对自己技术发展有一定规划能力"];const Ge={components:{Headertitle:R,TabTitle:Q,Titlecomponent:pt},setup:()=>({language:Je,info:ze,pingjia:Ve})},Be={class:"aboutus"},Re={class:"commontext"},Ue={class:"commontext"},Ke={class:"commontext"},Fe=o("div",{class:"line"},null,-1),Qe=o("div",{class:"round"},null,-1);Ge.render=function(t,e,l,i,a,c){const p=r("headertitle"),d=r("tabTitle"),y=r("svg-icon");return s(),n("div",Be,[u(p,{icon:"aboutus",name:"关于自己",englishName:"ABOUTUS"}),u(d,{style:{"margin-top":"10px","margin-bottom":"25px"},icon:"message",title:"英语能力",append:{type:1,content:"",url:""}}),(s(!0),n(x,null,v(i.language,(t=>(s(),n("div",Re,[u(y,{name:"star"}),o("span",null,m(t),1)])))),256)),u(d,{style:{"margin-top":"30px"},icon:"info",title:"基本信息",append:{type:1,content:"",url:""}}),(s(!0),n(x,null,v(i.info,(t=>(s(),n("div",Ue,[u(y,{name:"star"}),o("span",null,m(t),1)])))),256)),u(d,{style:{"margin-top":"20px"},icon:"pingjia",title:"自我评价",append:{type:1,content:"",url:""}}),(s(!0),n(x,null,v(i.pingjia,(t=>(s(),n("div",Ke,[u(y,{name:"star"}),o("span",null,m(t),1)])))),256)),Fe,Qe])};const We={components:{Skillcomponent:we,Languagecompinent:Ge}};a("data-v-5dd1e84b");const Xe={class:"right"};c(),We.render=function(t,e,o,l,i,a){const c=r("skillcomponent"),p=r("languagecompinent");return s(),n("div",Xe,[u(c),u(p)])},We.__scopeId="data-v-5dd1e84b";const $e={components:{Headercomponent:C,Leftcomponent:ae,Rightcomponent:We},setup:()=>({returnTop:()=>{h(0)}})};a("data-v-47f8b9b0");const Ye={class:"page"},Ze=o("div",{class:"EasterEgg"}," Any application that can be written in JavaScript, will eventually be written in JavaScript. ",-1);c(),$e.render=function(t,e,o,l,i,a){const c=r("headercomponent"),p=r("leftcomponent"),d=r("rightcomponent"),m=r("van-icon");return s(),n("div",Ye,[u(c,{class:"animated fadeInDown"}),u(p,{class:"animated fadeInLeft"}),u(d,{class:"animated fadeInRight"}),Ze,u(m,{name:"down",class:"returnTop",onClick:l.returnTop},null,8,["onClick"])])},$e.__scopeId="data-v-47f8b9b0";var tn="./assets/ava.70782c73.jpg";const en={setup(){const t=f({github:"https://github.com/Maxfengyan",mail:"18624443327@163.com",wechat:"18624443327"});return{avatar:tn,enter:e=>{1==e?window.location.href=t.github:2==e?b({message:t.mail}):j([A])}}}};a("data-v-012497a6");const nn={class:"header"},on=["src"],ln={class:"header-name"},sn=o("span",null,"马丰彦",-1),an=o("div",null,"前端工程师/NodeJs后端开发",-1),cn={class:"header-link"};c(),en.render=function(t,e,l,i,a,c){const p=r("svg-icon");return s(),n("div",nn,[o("img",{src:i.avatar,class:"header-avatar"},null,8,on),o("div",ln,[sn,u(p,{name:"man"}),an]),o("div",cn,[u(p,{name:"GitHub",onClick:e[0]||(e[0]=t=>i.enter(1))}),u(p,{name:"mail",onClick:e[1]||(e[1]=t=>i.enter(2))}),u(p,{name:"wechat",onClick:e[2]||(e[2]=t=>i.enter(3))})])])},en.__scopeId="data-v-012497a6";const pn={components:{Headercomponent:en,Rightcomponent:We,Leftcomponent:ae},setup(){const t=p();p();const e=f({drawer:!0,sortStyle:{background:"#fff",color:"#000",transform:"rotate(90deg)"}});w((()=>e.drawer),(t=>{t?(e.sortStyle.background="#fff",e.sortStyle.color="#000",e.sortStyle.transform="rotate(90deg)"):(e.sortStyle.background="#000",e.sortStyle.color="#fff",e.sortStyle.transform="rotate(270deg)")}));return{state:e,avatar:tn,toggle:()=>{e.drawer=!e.drawer},popup:t,returnTop:()=>{e.drawer?h(0,{elementToScroll:t.value.popupRef.value}):h(0)}}}};pn.render=function(t,e,o,l,a,c){const p=r("van-icon"),d=r("rightcomponent"),m=r("headercomponent"),y=r("leftcomponent"),v=r("van-popup");return s(),n(x,null,[u(p,{name:"sort",class:"sort",onClick:l.toggle,style:i(l.state.sortStyle)},null,8,["onClick","style"]),u(p,{name:"down",class:"returnTop",onClick:l.returnTop},null,8,["onClick"]),u(d),u(v,{show:l.state.drawer,"onUpdate:show":e[0]||(e[0]=t=>l.state.drawer=t),position:"left",duration:"0.5",ref:"popup",style:{height:"100%",width:"100%"}},{default:k((()=>[u(m),u(y)])),_:1},8,["show"])],64)},pn.__scopeId="data-v-ec852024";const rn={components:{Pccomponent:$e,Mobilecomponent:pn},setup(){const{width:t,height:e}=T(),n=p(!0);M((()=>{o(t.value)})),w([t,e],(()=>{o(t.value)}));const o=t=>{t<1140?(document.querySelector(".left").style.width="100%",document.querySelector(".right").style.width="100%",n.value=!1):n.value=!0};return{pc:n}}};rn.render=function(t,e,n,o,l,i){const a=r("pccomponent"),c=r("mobilecomponent");return o.pc?(s(),g(a,{key:0})):(s(),g(c,{key:1}))};const un=S(rn);un.component("svg-icon",_),un.use(I),un.use(P),un.mount("#app");
