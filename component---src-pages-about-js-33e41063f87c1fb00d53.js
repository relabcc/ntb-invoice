(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(174),i=t(178),c=t(197);e.default=Object(c.a)(function(){return a.a.createElement(o.a,null,a.a.createElement("h1",null,"Hi from the second page"),a.a.createElement("p",null,"Welcome to page 2"),a.a.createElement(i.a,{to:"/"},"Go back to the homepage"))})},144:function(n,e,t){"use strict";t(33);var r=t(146),a=t.n(r),o=t(0),i=t.n(o),c=t(143),u=t(151),l=t.n(u),s=t(147),f=t(150),d=t(152);function b(){var n=a()(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return b=function(){return n},n}var p=Object(c.c)(l.a)(b(),s.space,s.width,s.display,s.height,s.color,s.fontSize,s.position,s.zIndex,s.textAlign,s.top,s.left,s.right,s.bottom,s.fontWeight,s.border,s.borderRight,s.borderLeft,s.borderBottom,s.borderTop,s.borderColor,s.flex,s.minWidth,s.maxWidth,s.borderRadius,s.lineHeight,s.opacity,Object(d.a)("whiteSpace"),Object(d.a)("display"),Object(d.a)("overflow"),Object(d.a)("overflowX"),Object(d.a)("verticalAlign"),Object(d.a)("transform"),Object(d.a)("transition"),function(n){return n.onClick&&"cursor: pointer;"});p.defaultProps={blacklist:f.a},p.inline=function(n){return i.a.createElement(p,Object.assign({is:"span",display:"inline-block",verticalAlign:"middle"},n))},e.a=p},148:function(n,e,t){"use strict";t.d(e,"a",function(){return f}),t.d(e,"b",function(){return d});t(33),t(49),t(48);var r=t(159),a=t.n(r),o=t(173),i=t.n(o),c=t(192),u=t.n(c),l=t(193),s=function(n){return 16*n+"px"},f=[36,48,62,90,120].map(s),d=[36,46,58].map(s),b=function(n,e,t){return i()(10,100,10).reduce(function(r,o){var i;return a()(r,((i={})[o]="rgba("+[n,e,t,o/100].join()+")",i))},{})},p=u()(l,function(n){return n[5]});e.c={colors:Object.assign({},p,{white:"#fff",black:"#000",coffee:"#534741",lightWhite:"#FFFAF7",text:"#000",primary:p.blue,secondary:p.green,variations:l,fade:{white:b(255,255,255),black:b(0,0,0)}}),breakpoints:f,containerWidth:d,font:'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif',duration:250}},150:function(n,e,t){"use strict";t(75),t(50),t(183),t(48),t(76),t(49);var r=t(147),a=Object.keys(r.styles).map(function(n){return r.styles[n]}).filter(function(n){return"function"==typeof n}).reduce(function(n,e){return n.concat(Object.keys(e.propTypes||{}))},["theme"]);e.a=a.concat(["transform","transition","overflow","opacity","alpha","hoverColor","hoverBg","hoverBorder","dispatch"])},152:function(n,e,t){"use strict";var r=t(159),a=t.n(r),o=t(147);e.a=function(n,e){return Object(o.style)(function(n,e){return a()({prop:n,cssProperty:n},e)}(n,e))}},153:function(n,e,t){var r;n.exports=(r=t(164))&&r.default||r},156:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return p}),t.d(e,"StaticQueryContext",function(){return d}),t.d(e,"StaticQuery",function(){return b});var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(145),u=t.n(c);t.d(e,"Link",function(){return u.a}),t.d(e,"withPrefix",function(){return c.withPrefix}),t.d(e,"navigate",function(){return c.navigate}),t.d(e,"push",function(){return c.push}),t.d(e,"replace",function(){return c.replace}),t.d(e,"navigateTo",function(){return c.navigateTo});var l=t(153),s=t.n(l);t.d(e,"PageRenderer",function(){return s.a});var f=t(34);t.d(e,"parsePath",function(){return f.a});var d=a.a.createContext({}),b=function(n){return a.a.createElement(d.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(n,e,t){"use strict";var r=t(149),a=t.n(r),o=(t(33),t(146)),i=t.n(o),c=t(0),u=t.n(c),l=t(143),s=t(147),f=t(151),d=t.n(f),b=t(144),p=t(158),h=t(150),m=t(152);function g(){var n=i()(["\n  ","\n"]);return g=function(){return n},n}function v(){var n=i()(["\n  padding: 0;\n  border: none;\n  font-family: inherit;\n  line-height: 1;\n  text-decoration: none;\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  appearance: none;\n  transition: all ","ms;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    ","\n    outline: none;\n  }\n  ","\n  ","\n"]);return v=function(){return n},n}function j(){var n=i()(["\n  color: ",";\n  background-color: ",";\n  border-color: ",";\n"]);return j=function(){return n},n}var y=Object(l.b)(j(),Object(p.a)("hoverColor"),Object(p.a)("hoverBg"),Object(p.a)("hoverBorder")),O=Object(l.b)(v(),s.display,s.fontSize,s.position,s.space,s.color,s.width,s.height,s.borders,s.borderColor,s.borderRadius,s.fontWeight,s.letterSpacing,Object(m.a)("whiteSpace"),Object(s.themeGet)("duration",250),function(n){return!n.disabled&&y},function(n){return n.active&&!n.disabled&&y},function(n){return n.disabled&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "}),x=Object(l.c)(d.a)(g(),O),w=function(n){return u.a.createElement(b.a,Object.assign({is:"span"},n))},E=function(n){var e=n.leftIcon,t=n.rightIcon,r=n.iconSpacing,o=n.children,i=n.verticalAlign,c=a()(n,["leftIcon","rightIcon","iconSpacing","children","verticalAlign"]);return u.a.createElement(x,c,e?u.a.createElement(w,{mr:r},e()):null,u.a.createElement(w,{verticalAlign:i},o),t?u.a.createElement(w,{ml:r},t()):null)};E.defaultProps={blacklist:h.a,is:"button",fontSize:"1em",border:"1px solid",borderColor:"coffee",bg:"white",color:"coffee",hoverColor:"white",hoverBg:"coffee",px:"2.5em",py:"1.25em",fontWeight:"bold",iconSpacing:"0.25em",borderRadius:"3em",display:"inline-block",verticalAlign:"text-top"},E.secondary=function(n){return u.a.createElement(E,Object.assign({bg:"secondary",borderColor:"secondary",hoverColor:"secondary"},n))},E.transparent=function(n){return u.a.createElement(E,Object.assign({border:"1px solid transparent",bg:"transparent",color:"text",hoverBorder:"primary"},n))},e.a=E},158:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var r=function(n){return function(e){var t=e[n];return e.theme.colors[t]||t}}},161:function(n,e,t){"use strict";t.d(e,"a",function(){return f});t(48),t(33);var r=t(189),a=t(162),o=t(190),i=t.n(o),c=t(191),u=t.n(c),l=t(148),s=["xs","sm","md","lg","xl"];function f(n){return Object(r.combineReducers)(Object.assign({browser:Object(a.a)(i()(u()(s,l.a.map(function(n){return parseInt(n,10)}))))},n))}},164:function(n,e,t){"use strict";t.r(e);t(33);var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(51),u=t(2),l=function(n){var e=n.location,t=u.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},165:function(n){n.exports={data:{site:{siteMetadata:{title:"四個情境題，看看你的『發票觀』跟不跟得上時代"}}}}},166:function(n,e,t){n.exports=t.p+"static/jf-jinxuan-fresh2.2-medium-502c8f1f669774ebee7cc3c2ad719b54.woff"},167:function(n,e,t){n.exports=t.p+"static/jf-jinxuan-fresh2.2-medium-65a58aacd385f57fb22dd9bdb6af04df.ttf"},168:function(n,e,t){n.exports=t.p+"static/jf-jinxuan-fresh2.2-regular-db0e81b74e63d8aad38920b8b50aae7e.woff"},169:function(n,e,t){n.exports=t.p+"static/jf-jinxuan-fresh2.2-regular-7089fe85087efe9b0c2a9c70dc8baa21.ttf"},170:function(n,e,t){"use strict";var r=t(165),a=t(0),o=t.n(a),i=t(4),c=t.n(i),u=t(198),l=t.n(u),s=t(156),f=t(179),d=t(163),b=t(172),p=t(162),h=t(161);t(33);var m=t(143),g=(t(199),t(146)),v=t.n(g),j=t(148);function y(){var n=v()(["\n  html, body {\n    width: 100%;\n    height: 100%;\n  }\n\n  body {\n    font-family: ",";\n    background-color: ","\n  }\n\n  #___gatsby {\n    height: 100%;\n  }\n"]);return y=function(){return n},n}Object(m.d)(y(),j.c.font,j.c.colors.lightWhite);var O=t(166),x=t.n(O),w=t(167),E=t.n(w),k=t(168),S=t.n(k),C=t(169),W=t.n(C);function R(){var n=v()(['\n  @font-face {\n    font-family: JinXuan-Fresh;\n    src: local("jf-jinxuan-fresh2.2"),\n      url(',"),\n      url(",');\n    font-weight: 400;\n  }\n\n  @font-face {\n    font-family: JinXuan-Fresh;\n    src: local("jf-jinxuan-fresh2.2"),\n      url(',"),\n      url(",");\n    font-weight: 500;\n  }\n"]);return R=function(){return n},n}Object(m.d)(R(),S.a,W.a,x.a,E.a);var q=t(144),P=function(n){return o.a.createElement(m.a,{theme:j.c},o.a.createElement(q.a,Object.assign({height:"100%",fontSize:[14,null,16]},n)))},T=function(n){var e=n.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(n){return o.a.createElement(f.a,{store:function(n){void 0===n&&(n={});var e=[p.b],t=d.b,r=Object(d.c)(Object(h.a)(),Object(b.fromJS)(n),t.apply(void 0,e));return r.injectedReducers={},r}()},o.a.createElement(P,null,o.a.createElement("div",null,o.a.createElement(l.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"統一發票發行至今超過了一甲子，我們都習慣它，也對它又愛又恨！不過，時代在進步，你的發票觀跟得上時代嗎？"}]},o.a.createElement("html",{lang:"zh-Hant-TW"})),e)))},data:r})};T.propTypes={children:c.a.node.isRequired};e.a=T},174:function(n,e,t){"use strict";var r=t(146),a=t.n(r),o=t(147),i=t(143),c=t(144),u=t(148);function l(){var n=a()(["\n  ","\n"]);return l=function(){return n},n}var s=Object(i.c)(c.a)(l(),o.maxWidth);s.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:u.b},e.a=s},178:function(n,e,t){"use strict";t(33);var r=t(149),a=t.n(r),o=t(146),i=t.n(o),c=t(0),u=t.n(c),l=t(143),s=t(147),f=t(151),d=t.n(f),b=t(145),p=t.n(b),h=(t(144),t(157),t(150)),m=t(158);function g(){var n=i()(["\n  ","\n"]);return g=function(){return n},n}function v(){var n=i()(["\n  ","\n"]);return v=function(){return n},n}function j(){var n=i()(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  text-decoration: none;\n  ","\n  &:hover {\n    color: ",";\n  }\n"]);return j=function(){return n},n}var y=Object(l.b)(j(),s.fontSize,s.space,s.color,s.fontWeight,s.lineHeight,s.letterSpacing,s.display,function(n){return n.disabled&&"\n    pointer-events: none;\n  "},Object(m.a)("hoverColor")),O=Object(l.c)(d.a)(v(),y),x=Object(l.c)(p.a)(g(),y),w=function(n){var e=n.to,t=(n.button,n.blacklist),r=a()(n,["to","button","blacklist"]);return e?u.a.createElement(x,Object.assign({to:e},r)):u.a.createElement(O,Object.assign({is:"a",target:"_blank",blacklist:t},r))};w.defaultProps={blacklist:h.a,fontWeight:"bold"},e.a=w},197:function(n,e,t){"use strict";var r=t(0),a=t.n(r),o=t(170);e.a=function(n){return function(e){return a.a.createElement(o.a,null,a.a.createElement(n,e))}}}}]);
//# sourceMappingURL=component---src-pages-about-js-33e41063f87c1fb00d53.js.map