(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(181),o=n(187),c=n(191);t.default=Object(c.a)(function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.a,{to:"/"},"Go back to the homepage"))})},146:function(e,t,n){"use strict";n(33);var a=n(0),r=n.n(a),i=n(144),o=n(152),c=n.n(o),u=n(148),l=n(151),s=n(153),f=Object(i.default)(c.a).withConfig({displayName:"Box",componentId:"qttl6r-0"})([""," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",""],u.space,u.width,u.display,u.height,u.color,u.fontSize,u.position,u.zIndex,u.textAlign,u.top,u.left,u.right,u.bottom,u.fontWeight,u.border,u.borderRight,u.borderLeft,u.borderBottom,u.borderTop,u.borderColor,u.flex,u.minWidth,u.maxWidth,u.borderRadius,u.lineHeight,u.opacity,Object(s.a)("whiteSpace"),Object(s.a)("display"),Object(s.a)("overflow"),Object(s.a)("overflowX"),Object(s.a)("verticalAlign"),Object(s.a)("transform"),Object(s.a)("transition"),function(e){return e.onClick&&"cursor: pointer;"});f.defaultProps={blacklist:l.a},f.inline=function(e){return r.a.createElement(f,Object.assign({is:"span",display:"inline-block",verticalAlign:"middle"},e))},t.a=f},149:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return d});n(33),n(49),n(48);var a=n(160),r=n.n(a),i=n(168),o=n.n(i),c=n(212),u=n.n(c),l=n(213),s=function(e){return 16*e+"px"},f=[36,48,62,105,120].map(s),d=[36,46,58,58,90].map(s),p=function(e,t,n){return o()(10,100,10).reduce(function(a,i){var o;return r()(a,((o={})[i]="rgba("+[e,t,n,i/100].join()+")",o))},{})},m=u()(l,function(e){return e[5]});t.c={colors:Object.assign({},m,{white:"#fff",black:"#000",coffee:"#534741",lightWhite:"#FFFAF7",blue:"rgb(100, 146, 209)",text:"#000",primary:m.blue,secondary:m.green,variations:l,fade:{white:p(255,255,255),black:p(0,0,0)}}),breakpoints:f,containerWidth:d,font:'Helvatica, Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif',duration:250}},151:function(e,t,n){"use strict";n(75),n(50),n(204),n(48),n(76),n(49);var a=n(148),r=Object.keys(a.styles).map(function(e){return a.styles[e]}).filter(function(e){return"function"==typeof e}).reduce(function(e,t){return e.concat(Object.keys(t.propTypes||{}))},["theme"]);t.a=r.concat(["transform","transition","overflow","opacity","alpha","hoverColor","hoverBg","hoverBorder","dispatch"])},153:function(e,t,n){"use strict";var a=n(160),r=n.n(a),i=n(148);t.a=function(e,t){return Object(i.style)(function(e,t){return r()({prop:e,cssProperty:e},t)}(e,t))}},154:function(e,t,n){var a;e.exports=(a=n(169))&&a.default||a},162:function(e,t,n){"use strict";n.d(t,"a",function(){return f});n(48),n(33);var a=n(209),r=n(166),i=n(210),o=n.n(i),c=n(211),u=n.n(c),l=n(149),s=["xs","sm","md","lg","xl"];function f(e){return Object(a.combineReducers)(Object.assign({browser:Object(r.a)(o()(u()(s,l.a.map(function(e){return parseInt(e,10)}))))},e))}},163:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return function(t){var n=t[e];return t.theme.colors[n]||n}}},164:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(147),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(154),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var f=n(35);n.d(t,"parsePath",function(){return f.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},169:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},170:function(e){e.exports={data:{site:{siteMetadata:{title:"四個情境題，看看你的『發票觀』跟不跟得上時代",description:"統一發票發行至今超過了一甲子，我們都習慣它，也對它又愛又恨！不過，時代在進步，你的發票觀跟得上時代嗎？"}}}}},171:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-medium-502c8f1f669774ebee7cc3c2ad719b54.woff"},172:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-medium-65a58aacd385f57fb22dd9bdb6af04df.ttf"},173:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-regular-db0e81b74e63d8aad38920b8b50aae7e.woff"},174:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-regular-7089fe85087efe9b0c2a9c70dc8baa21.ttf"},175:function(e,t,n){"use strict";var a=n(170),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(218),l=n.n(u),s=n(164),f=n(182),d=n(167),p=n(177),m=n(166),b=n(162);n(33);var h=n(144),g=(n(219),n(165)),v=n.n(g),y=n(149);function j(){var e=v()(["\n  html, body {\n    width: 100%;\n    height: 100%;\n  }\n\n  body {\n    font-family: ",";\n    background-color: ","\n  }\n\n  #___gatsby {\n    height: 100%;\n  }\n"]);return j=function(){return e},e}Object(h.injectGlobal)(j(),y.c.font,y.c.colors.lightWhite);var k=n(171),w=n.n(k),x=n(172),O=n.n(x),E=n(173),C=n.n(E),T=n(174),q=n.n(T);function L(){var e=v()(['\n  @font-face {\n    font-family: JinXuan-Fresh;\n    src: local("jf-jinxuan-fresh2.2"),\n      url(',"),\n      url(",');\n    font-weight: 400;\n  }\n\n  @font-face {\n    font-family: JinXuan-Fresh;\n    src: local("jf-jinxuan-fresh2.2"),\n      url(',"),\n      url(",");\n    font-weight: 500;\n  }\n"]);return L=function(){return e},e}Object(h.injectGlobal)(L(),C.a,q.a,w.a,O.a);var P=n(146),S=function(e){return i.a.createElement(h.ThemeProvider,{theme:y.c},i.a.createElement(P.a,Object.assign({height:"100%",fontSize:[14,null,16]},e)))},W=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"2363664672",render:function(e){var n=e.site.siteMetadata,a=n.title,r=n.description;return i.a.createElement(f.a,{store:function(e){void 0===e&&(e={});var t=[m.b],n=d.b,a=Object(d.c)(Object(b.a)(),Object(p.fromJS)(e),n.apply(void 0,t));return a.injectedReducers={},a}()},i.a.createElement(S,null,i.a.createElement("div",null,i.a.createElement(l.a,{title:a,meta:[{name:"description",content:r}]},i.a.createElement("html",{lang:"zh-Hant-TW"}),i.a.createElement("meta",{property:"og:url",content:"https://e-invoice.relab.cc"}),i.a.createElement("meta",{property:"og:image",content:"https://e-invoice.relab.cc/fbCover.png"}),i.a.createElement("meta",{property:"og:title",content:a}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),i.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),i.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),i.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),i.a.createElement("meta",{name:"theme-color",content:"#ffffff"})),t)))},data:a})};W.propTypes={children:c.a.node.isRequired};t.a=W},181:function(e,t,n){"use strict";var a=n(148),r=n(144),i=n(146),o=n(149),c=Object(r.default)(i.a).withConfig({displayName:"Container",componentId:"fuc9tj-0"})(["",""],a.maxWidth);c.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:o.b},t.a=c},187:function(e,t,n){"use strict";n(33);var a=n(150),r=n.n(a),i=n(0),o=n.n(i),c=n(144),u=n(148),l=n(152),s=n.n(l),f=n(147),d=n.n(f),p=n(197),m=n(151),b=n(163),h=Object(c.css)([""," "," "," "," "," "," "," text-decoration:none;"," cursor:pointer;&:hover{color:",";}"],u.fontSize,u.space,u.color,u.fontWeight,u.lineHeight,u.letterSpacing,u.display,function(e){return e.disabled&&"\n    pointer-events: none;\n  "},Object(b.a)("hoverColor")),g=Object(c.default)(s.a).withConfig({displayName:"Link__NomalLink",componentId:"sc-53k5wg-0"})(["",""],h),v=Object(c.default)(d.a).withConfig({displayName:"Link__GatsbyStyledLink",componentId:"sc-53k5wg-1"})(["",""],h),y=function(e){var t=e.to,n=(e.button,e.blacklist),a=r()(e,["to","button","blacklist"]);return t?o.a.createElement(v,Object.assign({to:t},a)):o.a.createElement(g,Object.assign({is:p.OutboundLink,target:"_blank",blacklist:n},a))};y.defaultProps={blacklist:m.a,fontWeight:"bold"},t.a=y},191:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(175);t.a=function(e){return function(t){return r.a.createElement(i.a,null,r.a.createElement(e,t))}}},197:function(e,t,n){"use strict";var a=n(36);t.__esModule=!0,t.OutboundLink=c;var r=a(n(237)),i=a(n(0)),o=a(n(4));function c(e){return i.default.createElement("a",(0,r.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var n=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(n=!1),e.target&&"_self"!==e.target.toLowerCase()&&(n=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:n?"beacon":"",hitCallback:function(){n&&(document.location=e.href)}}):n&&(document.location=e.href),!1}}))}c.propTypes={href:o.default.string,target:o.default.string,onClick:o.default.func}}}]);
//# sourceMappingURL=component---src-pages-about-js-103bb86a0805fed546f1.js.map