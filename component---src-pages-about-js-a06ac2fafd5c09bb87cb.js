(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(174),i=n(178),c=n(179);t.default=Object(c.a)(function(){return a.a.createElement(o.a,null,a.a.createElement("h1",null,"Hi from the second page"),a.a.createElement("p",null,"Welcome to page 2"),a.a.createElement(i.a,{to:"/"},"Go back to the homepage"))})},144:function(e,t,n){"use strict";n(33);var r=n(0),a=n.n(r),o=n(143),i=n(150),c=n.n(i),u=n(146),l=n(149),s=n(151),f=Object(o.c)(c.a).withConfig({displayName:"Box",componentId:"qttl6r-0"})([""," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",""],u.space,u.width,u.display,u.height,u.color,u.fontSize,u.position,u.zIndex,u.textAlign,u.top,u.left,u.right,u.bottom,u.fontWeight,u.border,u.borderRight,u.borderLeft,u.borderBottom,u.borderTop,u.borderColor,u.flex,u.minWidth,u.maxWidth,u.borderRadius,u.lineHeight,u.opacity,Object(s.a)("whiteSpace"),Object(s.a)("display"),Object(s.a)("overflow"),Object(s.a)("overflowX"),Object(s.a)("verticalAlign"),Object(s.a)("transform"),Object(s.a)("transition"),function(e){return e.onClick&&"cursor: pointer;"});f.defaultProps={blacklist:l.a},f.inline=function(e){return a.a.createElement(f,Object.assign({is:"span",display:"inline-block",verticalAlign:"middle"},e))},t.a=f},147:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return d});n(33),n(49),n(48);var r=n(158),a=n.n(r),o=n(173),i=n.n(o),c=n(193),u=n.n(c),l=n(194),s=function(e){return 16*e+"px"},f=[36,48,62,90,120].map(s),d=[36,46,58].map(s),p=function(e,t,n){return i()(10,100,10).reduce(function(r,o){var i;return a()(r,((i={})[o]="rgba("+[e,t,n,o/100].join()+")",i))},{})},b=u()(l,function(e){return e[5]});t.c={colors:Object.assign({},b,{white:"#fff",black:"#000",coffee:"#534741",lightWhite:"#FFFAF7",text:"#000",primary:b.blue,secondary:b.green,variations:l,fade:{white:p(255,255,255),black:p(0,0,0)}}),breakpoints:f,containerWidth:d,font:'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif',duration:250}},149:function(e,t,n){"use strict";n(75),n(50),n(184),n(48),n(76),n(49);var r=n(146),a=Object.keys(r.styles).map(function(e){return r.styles[e]}).filter(function(e){return"function"==typeof e}).reduce(function(e,t){return e.concat(Object.keys(t.propTypes||{}))},["theme"]);t.a=a.concat(["transform","transition","overflow","opacity","alpha","hoverColor","hoverBg","hoverBorder","dispatch"])},151:function(e,t,n){"use strict";var r=n(158),a=n.n(r),o=n(146);t.a=function(e,t){return Object(o.style)(function(e,t){return a()({prop:e,cssProperty:e},t)}(e,t))}},152:function(e,t,n){var r;e.exports=(r=n(164))&&r.default||r},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return b}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(145),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(152),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var f=n(34);n.d(t,"parsePath",function(){return f.a});var d=a.a.createContext({}),p=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,n){"use strict";var r=n(148),a=n.n(r),o=(n(33),n(0)),i=n.n(o),c=n(143),u=n(146),l=n(150),s=n.n(l),f=n(144),d=n(157),p=n(149),b=n(151),h=Object(c.b)(["color:",";background-color:",";border-color:",";"],Object(d.a)("hoverColor"),Object(d.a)("hoverBg"),Object(d.a)("hoverBorder")),m=Object(c.b)(["padding:0;border:none;font-family:inherit;line-height:1;text-decoration:none;"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," appearance:none;transition:all ","ms;cursor:pointer;&:hover,&:focus{"," outline:none;}"," ",""],u.display,u.fontSize,u.position,u.space,u.color,u.width,u.height,u.borders,u.borderColor,u.borderRadius,u.fontWeight,u.lineHeight,u.minHeight,u.letterSpacing,Object(b.a)("whiteSpace"),Object(u.themeGet)("duration",250),function(e){return!e.disabled&&h},function(e){return e.active&&!e.disabled&&h},function(e){return e.disabled&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "}),g=Object(c.c)(s.a).withConfig({displayName:"Button__ButtonBase",componentId:"onvwh0-0"})(["",""],m),v=function(e){return i.a.createElement(f.a,Object.assign({is:"span"},e))},y=function(e){var t=e.leftIcon,n=e.rightIcon,r=e.iconSpacing,o=e.children,c=e.verticalAlign,u=a()(e,["leftIcon","rightIcon","iconSpacing","children","verticalAlign"]);return i.a.createElement(g,u,t?i.a.createElement(v,{mr:r},t()):null,i.a.createElement(v,{verticalAlign:c},o),n?i.a.createElement(v,{ml:r},n()):null)};y.defaultProps={blacklist:p.a,is:"button",fontSize:"1em",border:"1px solid",borderColor:"coffee",bg:"lightWhite",color:"coffee",hoverColor:"white",hoverBg:"coffee",px:"2.5em",py:"1.25em",fontWeight:"bold",iconSpacing:"0.25em",borderRadius:"3em",display:"inline-block",verticalAlign:"text-top"},y.secondary=function(e){return i.a.createElement(y,Object.assign({bg:"secondary",borderColor:"secondary",hoverColor:"secondary"},e))},y.transparent=function(e){return i.a.createElement(y,Object.assign({border:"1px solid transparent",bg:"transparent",color:"text",hoverBorder:"primary"},e))},t.a=y},157:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return function(t){var n=t[e];return t.theme.colors[n]||n}}},160:function(e,t,n){"use strict";n.d(t,"a",function(){return f});n(48),n(33);var r=n(190),a=n(162),o=n(191),i=n.n(o),c=n(192),u=n.n(c),l=n(147),s=["xs","sm","md","lg","xl"];function f(e){return Object(r.combineReducers)(Object.assign({browser:Object(a.a)(i()(u()(s,l.a.map(function(e){return parseInt(e,10)}))))},e))}},164:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(51),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},165:function(e){e.exports={data:{site:{siteMetadata:{title:"四個情境題，看看你的『發票觀』跟不跟得上時代",description:"統一發票發行至今超過了一甲子，我們都習慣它，也對它又愛又恨！不過，時代在進步，你的發票觀跟得上時代嗎？"}}}}},166:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-medium-502c8f1f669774ebee7cc3c2ad719b54.woff"},167:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-medium-65a58aacd385f57fb22dd9bdb6af04df.ttf"},168:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-regular-db0e81b74e63d8aad38920b8b50aae7e.woff"},169:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-regular-7089fe85087efe9b0c2a9c70dc8baa21.ttf"},170:function(e,t,n){"use strict";var r=n(165),a=n(0),o=n.n(a),i=n(4),c=n.n(i),u=n(197),l=n.n(u),s=n(155),f=n(180),d=n(163),p=n(172),b=n(162),h=n(160);n(33);var m=n(143),g=(n(198),n(161)),v=n.n(g),y=n(147);function j(){var e=v()(["\n  html, body {\n    width: 100%;\n    height: 100%;\n  }\n\n  body {\n    font-family: ",";\n    background-color: ","\n  }\n\n  #___gatsby {\n    height: 100%;\n  }\n"]);return j=function(){return e},e}Object(m.d)(j(),y.c.font,y.c.colors.lightWhite);var O=n(166),w=n.n(O),x=n(167),E=n.n(x),k=n(168),C=n.n(k),S=n(169),W=n.n(S);function q(){var e=v()(['\n  @font-face {\n    font-family: JinXuan-Fresh;\n    src: local("jf-jinxuan-fresh2.2"),\n      url(',"),\n      url(",');\n    font-weight: 400;\n  }\n\n  @font-face {\n    font-family: JinXuan-Fresh;\n    src: local("jf-jinxuan-fresh2.2"),\n      url(',"),\n      url(",");\n    font-weight: 500;\n  }\n"]);return q=function(){return e},e}Object(m.d)(q(),C.a,W.a,w.a,E.a);var R=n(144),I=function(e){return o.a.createElement(m.a,{theme:y.c},o.a.createElement(R.a,Object.assign({height:"100%",fontSize:[14,null,16]},e)))},B=function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"2363664672",render:function(e){var n=e.site.siteMetadata,r=n.title,a=n.description;return o.a.createElement(f.a,{store:function(e){void 0===e&&(e={});var t=[b.b],n=d.b,r=Object(d.c)(Object(h.a)(),Object(p.fromJS)(e),n.apply(void 0,t));return r.injectedReducers={},r}()},o.a.createElement(I,null,o.a.createElement("div",null,o.a.createElement(l.a,{title:r,meta:[{name:"description",content:a}]},o.a.createElement("html",{lang:"zh-Hant-TW"}),o.a.createElement("meta",{property:"og:url",content:"https://e-invoice.relab.cc"}),o.a.createElement("meta",{property:"og:image",content:"https://e-invoice.relab.cc/fb.png"}),o.a.createElement("meta",{property:"og:title",content:r}),o.a.createElement("meta",{property:"og:description",content:a})),t)))},data:r})};B.propTypes={children:c.a.node.isRequired};t.a=B},174:function(e,t,n){"use strict";var r=n(146),a=n(143),o=n(144),i=n(147),c=Object(a.c)(o.a).withConfig({displayName:"Container",componentId:"fuc9tj-0"})(["",""],r.maxWidth);c.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:i.b},t.a=c},178:function(e,t,n){"use strict";n(33);var r=n(148),a=n.n(r),o=n(0),i=n.n(o),c=n(143),u=n(146),l=n(150),s=n.n(l),f=n(145),d=n.n(f),p=(n(144),n(156),n(149)),b=n(157),h=Object(c.b)([""," "," "," "," "," "," "," text-decoration:none;"," &:hover{color:",";}"],u.fontSize,u.space,u.color,u.fontWeight,u.lineHeight,u.letterSpacing,u.display,function(e){return e.disabled&&"\n    pointer-events: none;\n  "},Object(b.a)("hoverColor")),m=Object(c.c)(s.a).withConfig({displayName:"Link__NomalLink",componentId:"sc-53k5wg-0"})(["",""],h),g=Object(c.c)(d.a).withConfig({displayName:"Link__GatsbyStyledLink",componentId:"sc-53k5wg-1"})(["",""],h),v=function(e){var t=e.to,n=(e.button,e.blacklist),r=a()(e,["to","button","blacklist"]);return t?i.a.createElement(g,Object.assign({to:t},r)):i.a.createElement(m,Object.assign({is:"a",target:"_blank",blacklist:n},r))};v.defaultProps={blacklist:p.a,fontWeight:"bold"},t.a=v},179:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(170);t.a=function(e){return function(t){return a.a.createElement(o.a,null,a.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-about-js-a06ac2fafd5c09bb87cb.js.map