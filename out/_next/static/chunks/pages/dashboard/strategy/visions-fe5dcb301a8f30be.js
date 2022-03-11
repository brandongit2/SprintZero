(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{54359:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(67294),i=r(87379),o=r(97183),s=r(42101),a=r(58492),c=r(68863),l=r(55934),d=r(99189),u=r(86871),h=r(80116),f=r(87454),p=r(85893),m=o.Z.Header,x=d.Z.Title,g=c.Z.Search,b=i.ZP.div.withConfig({displayName:"Header__HeaderMenu",componentId:"sc-1rkwsco-0"})(["color:",";cursor:pointer;border-bottom-width:4px;border-bottom-style:solid;border-bottom-color:",";&:hover{color:var(--kelly);border-bottom:4px solid var(--kelly);}"],(function(e){return e.active?"#73c92d":"#fff"}),(function(e){return e.active?"#73c92d":"transparent"})),j=function(e){var t=e.onChangeProduct,r=(0,f.a)().user,i=(0,n.useState)(h[0]),o=i[0],s=i[1];return(0,p.jsxs)(m,{className:"header",children:[(0,p.jsxs)("div",{className:"flex items-center",children:[(0,p.jsx)(x,{level:2,className:"dashboard-logo m-0",children:"Sprint Zero"}),(0,p.jsx)("div",{className:"flex items-center ml-11",children:h.map((function(e,r){return(0,p.jsx)(b,{className:"mr-10",active:o===e,onClick:function(){return s(r=e),void(t&&t(r));var r},children:e},r)}))})]}),(0,p.jsxs)("div",{className:"flex items-center",children:[(0,p.jsx)(g,{placeholder:"Search",allowClear:!0,className:"mr-6 border-none focus:outline-none outline-none",style:{width:200}}),(0,p.jsx)(u.C,{src:null===r||void 0===r?void 0:r.photoURL,style:{border:"2px solid #73c92d"}})]})]})},v=o.Z.Content,y=o.Z.Sider,Z=i.ZP.ul.withConfig({displayName:"AppLayout__Versions",componentId:"sc-107tzou-0"})(["list-style:none;color:#262626;font-size:16px;"]),w=i.ZP.li.withConfig({displayName:"AppLayout__Version",componentId:"sc-107tzou-1"})(["border-left-width:4px;border-left-style:solid;border-left-color:",";cursor:pointer;padding-bottom:28px;font-style:normal;font-weight:400;font-size:16px;line-height:24px;"],(function(e){return e.active?"#315613":"#3156131a"})),O=(0,i.ZP)(s.Z).withConfig({displayName:"AppLayout__AddNew",componentId:"sc-107tzou-2"})(["align-items:center;display:flex;margin-left:10px;background:#fff;"]),S=(0,i.ZP)(s.Z).withConfig({displayName:"AppLayout__AddSide",componentId:"sc-107tzou-3"})(["background:transparent !important;border:none;color:#262626 !important;box-shadow:none;font-size:16px;line-height:24px;margin:0;padding:0;text-align:center;"]),C=function(e){return"".concat(e[0].toUpperCase()).concat(e.substring(1).toLowerCase())},N=function(e){var t=e.rightNavItems,r=void 0===t?[]:t,i=e.activeRightItem,s=void 0===i?"test":i,d=e.breadCrumbItems,u=void 0===d?[]:d,h=e.setActiveRightNav,m=e.onChangeProduct,x=e.onMainAdd,g=e.hasMainAdd,b=e.defaultText,N=e.onSideAdd,P=e.hasSideAdd,A=void 0===P||P,k=e.hideSideBar,I=void 0!==k&&k,_=e.ignoreLast,E=e.type,D=e.addNewText,$=void 0===D?"Add New":D,T=e.capitalizeText,R=void 0===T||T,F=e.versionClass,B=e.topExtra,M=void 0===B?(0,p.jsx)(p.Fragment,{}):B,z=e.useGrid,L=e.children,q=((0,f.a)().user,(0,n.useState)(!1)),H=q[0],U=q[1],V=(0,n.useState)(""),G=V[0],J=V[1],K=function(){U((function(e){return!e}))};return(0,p.jsxs)(o.Z,{style:{minHeight:"100vh"},children:[(0,p.jsx)(j,{onChangeProduct:m}),(0,p.jsxs)(o.Z,{children:[(0,p.jsx)(y,{width:200,className:"site-layout-background",breakpoint:"sm",children:(0,p.jsx)(l.Z,{})}),(0,p.jsx)(o.Z,{children:(0,p.jsxs)("div",{style:z?{display:"grid","grid-template-columns":"minmax(0,1fr) auto"}:{},className:z?null:"flex justify-between",children:[(0,p.jsxs)("div",{className:"flex-1 py-[24px] pl-[42px] pr-[33px]",children:[(0,p.jsxs)("div",{className:"flex justify-between items-center",children:[(0,p.jsxs)(a.Z,{children:[u.map((function(e,t){return(0,p.jsx)(a.Z.Item,{children:C(e)},t)})),_?null:(0,p.jsx)(a.Z.Item,{className:"text-green-800 ",children:R?C(b||s):b||s})]}),(0,p.jsxs)("div",{className:"flex justify-between items-center",children:[(0,p.jsx)("div",{children:M}),g?(0,p.jsx)(O,{onClick:x,children:$}):null]})]}),(0,p.jsx)(v,{className:"px-0 pt-[12px] pb-[16px] m-0 ",children:L})]}),I?null:(0,p.jsx)("div",{style:{minWidth:0},children:(0,p.jsx)("div",{children:(0,p.jsxs)(Z,{className:"",children:[r.map((function(e,t){return(0,p.jsx)(w,{className:"py-[16px] px-[24px] ".concat(F),active:s===(e.value||e),onClick:function(){return h(e.value?e.value:e)},children:e.render?e.render():e},t)})),A&&H?(0,p.jsx)(w,{className:"py-[16px] px-[24px] ".concat(F),children:(0,p.jsx)(c.Z,{className:"mx-0 my-0 ",type:E||"number",maxLength:20,autoFocus:!0,value:G,onChange:function(e){J(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&G.trim()&&(N(G.trim()),K(),J(""))},style:{width:"100%"}})}):null,A?(0,p.jsx)(w,{className:"flex items-center justify-center",children:(0,p.jsx)(S,{onClick:K,children:H?"Close":"Add"})}):null]})})})]})})]})]})}},7761:function(e,t,r){"use strict";var n=r(59499),i=r(4730),o=(r(67294),r(87379)),s=r(42101),a=r(85893),c=["children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=(0,o.ZP)(s.Z).withConfig({displayName:"CardHeaderButton__More",componentId:"sc-vb4ak2-0"})(["color:#4A801D;background:transparent;box-shadow:none;border:none;"]);t.Z=function(e){var t=e.children,r=(0,i.Z)(e,c);return(0,a.jsx)(u,d(d({},r),{},{children:t}))}},41897:function(e,t,r){"use strict";r.d(t,{l:function(){return n}});var n=r(87379).ZP.h2.withConfig({displayName:"CardTitle",componentId:"sc-1uxhz1k-0"})(["font-family:'SF Pro Text';font-style:normal;font-weight:600;font-size:14px;line-height:22px;color:#262626;"])},55934:function(e,t,r){"use strict";r(67294);var n=r(64141),i=r(41664),o=r(11163),s=r(73403),a=r(13179),c=r(13190),l=r(89344),d=r(87547),u=r(87379),h=r(85893),f=n.Z.SubMenu,p=function(e,t){return e.toLowerCase().includes(t.toLowerCase())},m=(0,u.ZP)(f).withConfig({displayName:"SideBar__StyledSubMenu",componentId:"sc-1a9kgl-0"})(["span,.ant-menu-submenu-arrow{color:#000 !important;}"]),x=(0,u.ZP)(n.Z.Item).withConfig({displayName:"SideBar__MenuItem",componentId:"sc-1a9kgl-1"})(["background-color:"," !important;color:",";box-shadow:",";.ant-menu-item-icon{color:",";}&:hover{a{color:#000 !important;}}"],(function(e){return e.$highlight?"#EBF8E0":"tranparent"}),(function(e){return e.$highlight?"#315613":"#000"}),(function(e){return e.$highlight?"inset -3px 0px 0px #73C92D":"none"}),(function(e){return e.$highlight?"#315613":"#000"}));t.Z=function(){var e=(0,o.useRouter)().pathname;return(0,h.jsxs)(n.Z,{mode:"inline",style:{height:"100%",borderRight:0},children:[(0,h.jsx)(x,{$highlight:"/dashboard"===e,icon:(0,h.jsx)(s.Z,{color:""}),children:(0,h.jsx)(i.default,{href:"/dashboard",children:(0,h.jsx)("a",{children:"Home"})})},"1"),(0,h.jsxs)(m,{icon:(0,h.jsx)(a.Z,{}),title:"Strategy",children:[(0,h.jsx)(n.Z.Item,{$highlight:p(e,"/strategy/accessibility"),children:(0,h.jsx)(i.default,{href:"/dashboard/strategy/accessibility",children:(0,h.jsx)("a",{children:"Accessibility"})})},"2"),(0,h.jsx)(n.Z.Item,{$highlight:p(e,"/strategy/ethics"),children:(0,h.jsx)(i.default,{href:"/dashboard/strategy/ethics",children:(0,h.jsx)("a",{children:"Ethics"})})},"3"),(0,h.jsx)(x,{$highlight:p(e,"/strategy/objectives"),children:(0,h.jsx)(i.default,{href:"/dashboard/strategy/objectives",children:(0,h.jsx)("a",{children:"Objectives"})})},"4"),(0,h.jsx)(x,{$highlight:p(e,"/strategy/visions"),children:(0,h.jsx)(i.default,{href:"/dashboard/strategy/visions",children:(0,h.jsx)("a",{children:"Visions"})})},"5")]},"sub1"),(0,h.jsxs)(m,{icon:(0,h.jsx)(c.Z,{}),title:"Tactics",children:[(0,h.jsx)(x,{$highlight:p(e,"/tactics/priorities"),children:(0,h.jsx)(i.default,{href:"/dashboard/tactics/priorities",children:(0,h.jsx)("a",{children:"Priorities"})})},"6"),(0,h.jsx)(x,{$highlight:p(e,"/tactics/retrospective"),children:(0,h.jsx)(i.default,{href:"/dashboard/tactics/retrospective",children:(0,h.jsx)("a",{children:"Retrospective"})})},"7"),(0,h.jsx)(x,{$highlight:p(e,"/tactics/release"),children:(0,h.jsx)(i.default,{href:"/dashboard/tactics/release",children:(0,h.jsx)("a",{children:"Release"})})},"8"),(0,h.jsx)(x,{$highlight:p(e,"/tactics/tasks"),children:(0,h.jsx)(i.default,{href:"/dashboard/tactics/tasks",children:(0,h.jsx)("a",{children:"Tasks"})})},"9")]},"sub2"),(0,h.jsxs)(m,{icon:(0,h.jsx)(l.Z,{}),title:"Operations",children:[(0,h.jsx)(n.Z.Item,{$highlight:p(e,"/operations/huddle"),children:(0,h.jsx)(i.default,{href:"/dashboard/operations/calendar",children:"Calendar"})},"11"),(0,h.jsx)(x,{$highlight:p(e,"/operations/huddle"),children:(0,h.jsx)(i.default,{href:"/dashboard/operations/huddle",children:(0,h.jsx)("a",{children:"Huddle"})})},"12"),(0,h.jsx)(n.Z.Item,{children:"Performance"},"13"),(0,h.jsx)(x,{$highlight:p(e,"/operations/sprint"),children:(0,h.jsx)(i.default,{href:"/dashboard/operations/sprint",children:(0,h.jsx)("a",{children:"Sprint"})})},"14")]},"sub3"),(0,h.jsxs)(m,{icon:(0,h.jsx)(d.Z,{}),title:"Userbase",children:[(0,h.jsx)(x,{$highlight:p(e,"/userbase/learnings"),children:(0,h.jsx)(i.default,{href:"/dashboard/userbase/learnings",children:(0,h.jsx)("a",{children:"Learnings"})})},"15"),(0,h.jsx)(x,{$highlight:p(e,"/userbase/dialogue"),children:(0,h.jsx)(i.default,{href:"/dashboard/userbase/dialogue",children:(0,h.jsx)("a",{children:"Dialogue"})})},"16"),(0,h.jsx)(x,{$highlight:p(e,"/userbase/personas"),children:(0,h.jsx)(i.default,{href:"/dashboard/userbase/personas",children:(0,h.jsx)("a",{children:"Personas"})})},"17"),(0,h.jsx)(n.Z.Item,{children:"Journeys"},"18")]},"sub4")]})}},25251:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var n=r(27812),i=r(59499),o=r(67294),s=r(9008),a=r(11163),c=r(54359),l=r(50029),d=r(16835),u=r(87794),h=r.n(u),f=r(87379),p=r(3302),m=r(45756),x=r(68863),g=r(7761),b=function(e){return!(!e||0!==Object.keys(e).length||Object.getPrototypeOf(e)!==Object.prototype)},j=function(e){return!(!e||!Array.isArray(e)||0!==e.length)},v=r(85893);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=(0,f.ZP)(p.Z.Item).withConfig({displayName:"StatementForm__FormItem",componentId:"sc-1uwjrea-0"})(["margin-bottom:24px;"]),O=function(){return alert("lol")},S={labelCol:{span:4}},C={targetCustomer:"",need:"",keyBenefits:"",competitors:"",differentiators:""},N=function(e){var t=e.handleSubmit,r=void 0===t?O:t,n=e.info,i=p.Z.useForm(),o=(0,d.Z)(i,1)[0],s=b(n)?C:n,a=function(e){r(e)},c=function(){var e=(0,l.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.validateFields();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)(m.Z,{bordered:!1,extra:(0,v.jsx)(g.Z,{onClick:c,children:"Done"}),title:"Guiding Statement",children:(0,v.jsxs)(p.Z,Z(Z({},S),{},{labelAlign:"left",form:o,initialValues:s,onFinish:a,children:[(0,v.jsx)(w,{label:"Target Customer",name:"targetCustomer",tooltip:"Identify the target of this product",rules:[{required:!0,message:"Please input the target customer"}],children:(0,v.jsx)(x.Z,{placeholder:"Reviewer, Recorder, etc"})}),(0,v.jsx)(w,{label:"Need",name:"need",tooltip:"Identify the need of this product",rules:[{required:!0,message:"Please input the product need"}],children:(0,v.jsx)(x.Z,{placeholder:"eg File taxes"})}),(0,v.jsx)(w,{label:"Key Benefits",name:"keyBenefits",tooltip:"Identify the key benefits of this product",rules:[{required:!0,message:"Please input the key benefits"}],children:(0,v.jsx)(x.Z,{placeholder:"Fast, Cheap"})}),(0,v.jsx)(w,{label:"Competitors",name:"competitors",tooltip:"Identify the competitors for this product",rules:[{required:!0,message:"Please input at least one competitor"}],children:(0,v.jsx)(x.Z,{placeholder:"Turbotax"})}),(0,v.jsx)(w,{label:"Differentiators",name:"differentiators",tooltip:"What makes your the product different?",rules:[{required:!0,message:"Please input the at least one difference"}],children:(0,v.jsx)(x.Z,{placeholder:"Faster, Cheaper"})})]}))})},P=r(64979),A=r(49978),k=r(80116),I=JSON.parse('{"Insight Meeting":[{"createdAt":"2022-02-09T20:29:33.733Z","info":{"targetCustomer":"Customer a","need":"customer_a need","keyBenefits":"customer_a benefit","competitors":"customer_a competitor","differentiators":"doloremque ,laboriosam"}},{"createdAt":"2022-02-07T20:29:33.733Z","info":{"targetCustomer":"Customer a","need":"customer_a need","keyBenefits":"customer_a benefit","competitors":"customer_a competitor","differentiators":"dolor, distinctio"}},{"createdAt":"2022-02-02T20:29:33.733Z","info":{"targetCustomer":"Customer a","need":"customer_a need","keyBenefits":"customer_a benefit","competitors":"customer_a competitor","differentiators":"lorem,ipsum"}}],"Alpha Sheet":[]}'),_=r(42101),E=r(41897),D=(0,f.ZP)(m.Z).withConfig({displayName:"Card__StyledCard",componentId:"sc-1f4ltoz-0"})(["transform:",";margin-bottom:135px;font-size:30px;line-height:38px;box-shadow:",";border-radius:2px;"],(function(e){return e.invert}),(function(e){return e.$active?"0px 4px 4px rgba(0, 0, 0, 0.25), 1px -1px 4px rgba(0, 0, 0, 0.1)":""})),$=function(e){var t=e.index,r=e.onEditClick,n=e.info,i=e.product,s=e.isActive,a=(0,o.useRef)(),c=(0,o.useRef)(),l=(0,o.useRef)(),d=(0,o.useState)(""),u=d[0],h=d[1];return(0,o.useEffect)((function(){if(l&&l.current){var e=l.current.getBoundingClientRect().top,t=+a.current-e;return a.current=e,h("translateY(".concat(t,"px)")),c.current=requestAnimationFrame((function(){h("")})),function(){return cancelAnimationFrame(c.current)}}}),[t]),(0,v.jsxs)(D,{ref:l,invert:u,className:u?"":"deck-animate",$active:s,extra:(0,v.jsx)(_.Z,{className:"text-[#262626] text-[14px] leading[22px]",onClick:function(){return r(n)},children:"Edit"}),title:(0,v.jsx)(E.l,{className:"text-[16px] leading[24px]",children:"Guiding Statement"}),children:[(0,v.jsxs)("p",{children:["  ","For ".concat(n.targetCustomer,", who ").concat(n.need,", the ").concat(i," is a [product category or description] that ").concat(n.keyBenefits,".")]}),(0,v.jsx)("br",{}),(0,v.jsx)("p",{children:"Unlike ".concat(n.competitors,", our product ").concat(n.differentiators,".")})]})},T=function(e){var t=e.setInfo,r=e.activeIndex,i=void 0===r?0:r,s=e.list,a=void 0===s?[]:s,c=e.product,l=(0,o.useState)([]),d=l[0],u=l[1];return(0,o.useEffect)((function(){u((0,n.Z)(a).slice(0,i+1).reverse())}),[i,a]),(0,v.jsx)("div",{className:"pt-[18px]",children:d.map((function(e,r){return(0,v.jsx)($,{info:e.info,onEditClick:t,index:r,product:c,isActive:0===r},e.createdAt)}))})};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(){var e,t=(0,o.useState)(I),r=t[0],l=t[1],d=(0,o.useState)(k[0]),u=d[0],h=d[1],f=(0,o.useState)(j(r[u])?"Now":r[u][0].createdAt),p=f[0],m=f[1],x=(0,o.useState)({}),g=x[0],y=x[1],Z=(0,o.useState)(!1),w=Z[0],O=Z[1],S=(0,o.useState)(0),C=S[0],_=S[1],E=(0,a.useRouter)().pathname;return(0,v.jsxs)("div",{className:"mb-8",children:[(0,v.jsxs)(s.default,{children:[(0,v.jsx)("title",{children:"Dashboard | Sprint Zero"}),(0,v.jsx)("meta",{name:"description",content:"Sprint Zero strategy objectives"}),(0,v.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,v.jsxs)(c.Z,{rightNavItems:(e=r[u],null!==e&&void 0!==e&&e.length?e.map((function(e){return{render:function(){return(0,P.pi)(e.createdAt)},value:e.createdAt}})):["Now"]),activeRightItem:p,setActiveRightNav:function(e){var t=r[u],n=t.findIndex((function(t){return t.createdAt===e}));if(n>-1){var i=t[n];m(i.createdAt),_(n),y({}),O(!1)}},hasSideAdd:!1,defaultText:(0,P.pi)(p),onChangeProduct:function(e){h(e);var t=j(r[e])?"Now":r[e][0].createdAt;m(t)},breadCrumbItems:(0,A.N)(E),children:[b(g)?(0,v.jsx)(T,{product:u,setInfo:function(e){O(!0),y(e)},list:r[u],activeIndex:C}):null,w||!r[u].length?(0,v.jsx)(N,{info:g,handleSubmit:function(e){var t={createdAt:(new Date).toISOString(),info:e},o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);o[u]=[t].concat((0,n.Z)(o[u])),l(o),m(o[u][0].createdAt),O(!1),y({}),_(0)}}):null]})]})}},64979:function(e,t,r){"use strict";r.d(t,{pi:function(){return o},p6:function(){return s}});var n=r(11510),i=r(67926),o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return"N/A";var r=new Date,n=null!==e&&void 0!==e&&e.toString().includes("Now")?r:e,o=(0,i.Z)(new Date(n),r,{addSuffix:t});return o.includes("sec")?"Now":o.replace("about ","")},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EEEE, MMM do";return e?(0,n.Z)(new Date(e),t):"N/A"}},49978:function(e,t,r){"use strict";r.d(t,{N:function(){return n}});var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/dashboard/";return e.replace(t,"").split("/")}},22882:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/strategy/visions",function(){return r(25251)}])},52587:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},50029:function(e,t,r){"use strict";function n(e,t,r,n,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var s=e.apply(t,r);function a(e){n(s,i,o,a,c,"next",e)}function c(e){n(s,i,o,a,c,"throw",e)}a(void 0)}))}}r.d(t,{Z:function(){return i}})},4730:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,{Z:function(){return n}})},16835:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2937);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27812:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(52587);var i=r(2937);function o(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(52587);function i(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},80116:function(e){"use strict";e.exports=JSON.parse('["Insight Meeting","Alpha Sheet"]')}},function(e){e.O(0,[569,116,137,310,756,302,348,774,888,179],(function(){return t=22882,e(e.s=t);var t}));var t=e.O();_N_E=t}]);