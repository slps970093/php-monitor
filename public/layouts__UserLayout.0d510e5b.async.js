(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2n1B":function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var n=l(a("CtXQ"));a("lUTK");var u=l(a("BvKs")),o=a("Y2fQ"),r=l(a("q1tI")),d=l(a("TSYQ")),s=l(a("6Wvd")),c=l(a("Kkfi")),f=function(e){var t=e.className,a=(0,o.getLocale)(),l=function(e){var t=e.key;return(0,o.setLocale)(t)},f=["zh-CN","zh-TW","en-US","pt-BR"],i={"zh-CN":"\u7b80\u4f53\u4e2d\u6587","zh-TW":"\u7e41\u4f53\u4e2d\u6587","en-US":"English","pt-BR":"Portugu\xeas"},m={"zh-CN":"\ud83c\udde8\ud83c\uddf3","zh-TW":"\ud83c\udded\ud83c\uddf0","en-US":"\ud83c\uddfa\ud83c\uddf8","pt-BR":"\ud83c\udde7\ud83c\uddf7"},p=r.default.createElement(u.default,{className:c.default.menu,selectedKeys:[a],onClick:l},f.map(function(e){return r.default.createElement(u.default.Item,{key:e},r.default.createElement("span",{role:"img","aria-label":i[e]},m[e])," ",i[e])}));return r.default.createElement(s.default,{overlay:p,placement:"bottomRight"},r.default.createElement("span",{className:(0,d.default)(c.default.dropDown,t)},r.default.createElement(n.default,{type:"global",title:(0,o.formatMessage)({id:"navBar.lang"})})))},i=f;t.default=i},"6Wvd":function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("qVdP");var n=l(a("jsC+")),u=l(a("jehZ")),o=l(a("Y/ft")),r=l(a("q1tI")),d=l(a("TSYQ")),s=l(a("QyDn")),c=function(e){var t=e.overlayClassName,a=(0,o.default)(e,["overlayClassName"]);return r.default.createElement(n.default,(0,u.default)({overlayClassName:(0,d.default)(s.default.container,t)},a))},f=c;t.default=f},BOD2:function(e,t,a){e.exports={container:"antd-pro-layouts-user-layout-container",lang:"antd-pro-layouts-user-layout-lang",content:"antd-pro-layouts-user-layout-content",top:"antd-pro-layouts-user-layout-top",header:"antd-pro-layouts-user-layout-header",logo:"antd-pro-layouts-user-layout-logo",title:"antd-pro-layouts-user-layout-title",desc:"antd-pro-layouts-user-layout-desc"}},Kkfi:function(e,t,a){e.exports={menu:"antd-pro-components-select-lang-index-menu",dropDown:"antd-pro-components-select-lang-index-dropDown"}},QyDn:function(e,t,a){e.exports={container:"antd-pro-components-header-dropdown-index-container"}},"nsf+":function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("p0pE")),u=a("Hx5s"),o=a("TJpk"),r=l(a("wY1l")),d=l(a("q1tI")),s=a("Hg0r"),c=a("Y2fQ"),f=l(a("2n1B")),i=l(a("BOD2")),m=function(e){var t=e.route,a=void 0===t?{routes:[]}:t,l=a.routes,s=void 0===l?[]:l,m=e.children,p=e.location,v=void 0===p?{pathname:""}:p,y=(0,u.getMenuData)(s),g=y.breadcrumb,E=(0,u.getPageTitle)((0,n.default)({pathname:v.pathname,breadcrumb:g,formatMessage:c.formatMessage},e));return d.default.createElement(d.default.Fragment,null,d.default.createElement(o.Helmet,null,d.default.createElement("title",null,E),d.default.createElement("meta",{name:"description",content:E})),d.default.createElement("div",{className:i.default.container},d.default.createElement("div",{className:i.default.lang},d.default.createElement(f.default,null)),d.default.createElement("div",{className:i.default.content},d.default.createElement("div",{className:i.default.top},d.default.createElement("div",{className:i.default.header},d.default.createElement(r.default,{to:"/"},d.default.createElement("span",{className:i.default.title},"PHP Monitor"))),d.default.createElement("div",{className:i.default.desc},"\u5929\u5e9c\u4e09\u8857\u6700\u51fa\u540d\u7684PHP\u975e\u4fb5\u5165\u5f0f\u76d1\u63a7\u5e73\u53f0")),m)))},p=(0,s.connect)(function(e){var t=e.settings;return(0,n.default)({},t)})(m);t.default=p}}]);