(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(170);t.default=function(){return a.a.createElement(i.a,null,a.a.createElement("h1",null,"NOT FOUND"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(e,t,n){"use strict";n(33);var r=n(0),a=n.n(r),i=n(143),o=n(150),c=n.n(o),u=n(146),s=n(149),f=n(151),l=Object(i.c)(c.a).withConfig({displayName:"Box",componentId:"qttl6r-0"})([""," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",""],u.space,u.width,u.display,u.height,u.color,u.fontSize,u.position,u.zIndex,u.textAlign,u.top,u.left,u.right,u.bottom,u.fontWeight,u.border,u.borderRight,u.borderLeft,u.borderBottom,u.borderTop,u.borderColor,u.flex,u.minWidth,u.maxWidth,u.borderRadius,u.lineHeight,u.opacity,Object(f.a)("whiteSpace"),Object(f.a)("display"),Object(f.a)("overflow"),Object(f.a)("overflowX"),Object(f.a)("verticalAlign"),Object(f.a)("transform"),Object(f.a)("transition"),function(e){return e.onClick&&"cursor: pointer;"});l.defaultProps={blacklist:s.a},l.inline=function(e){return a.a.createElement(l,Object.assign({is:"span",display:"inline-block",verticalAlign:"middle"},e))},t.a=l},147:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return d});n(33),n(49),n(48);var r=n(158),a=n.n(r),i=n(173),o=n.n(i),c=n(192),u=n.n(c),s=n(193),f=function(e){return 16*e+"px"},l=[36,48,62,90,120].map(f),d=[36,46,58].map(f),p=function(e,t,n){return o()(10,100,10).reduce(function(r,i){var o;return a()(r,((o={})[i]="rgba("+[e,t,n,i/100].join()+")",o))},{})},h=u()(s,function(e){return e[5]});t.c={colors:Object.assign({},h,{white:"#fff",black:"#000",coffee:"#534741",lightWhite:"#FFFAF7",text:"#000",primary:h.blue,secondary:h.green,variations:s,fade:{white:p(255,255,255),black:p(0,0,0)}}),breakpoints:l,containerWidth:d,font:'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif',duration:250}},149:function(e,t,n){"use strict";n(75),n(50),n(183),n(48),n(76),n(49);var r=n(146),a=Object.keys(r.styles).map(function(e){return r.styles[e]}).filter(function(e){return"function"==typeof e}).reduce(function(e,t){return e.concat(Object.keys(t.propTypes||{}))},["theme"]);t.a=a.concat(["transform","transition","overflow","opacity","alpha","hoverColor","hoverBg","hoverBorder","dispatch"])},151:function(e,t,n){"use strict";var r=n(158),a=n.n(r),i=n(146);t.a=function(e,t){return Object(i.style)(function(e,t){return a()({prop:e,cssProperty:e},t)}(e,t))}},152:function(e,t,n){var r;e.exports=(r=n(164))&&r.default||r},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(145),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(152),f=n.n(s);n.d(t,"PageRenderer",function(){return f.a});var l=n(34);n.d(t,"parsePath",function(){return l.a});var d=a.a.createContext({}),p=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(48),n(33);var r=n(189),a=n(162),i=n(190),o=n.n(i),c=n(191),u=n.n(c),s=n(147),f=["xs","sm","md","lg","xl"];function l(e){return Object(r.combineReducers)(Object.assign({browser:Object(a.a)(o()(u()(f,s.a.map(function(e){return parseInt(e,10)}))))},e))}},164:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(51),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},165:function(e){e.exports={data:{site:{siteMetadata:{title:"四個情境題，看看你的『發票觀』跟不跟得上時代"}}}}},166:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-medium-502c8f1f669774ebee7cc3c2ad719b54.woff"},167:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-medium-65a58aacd385f57fb22dd9bdb6af04df.ttf"},168:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-regular-db0e81b74e63d8aad38920b8b50aae7e.woff"},169:function(e,t,n){e.exports=n.p+"static/jf-jinxuan-fresh2.2-regular-7089fe85087efe9b0c2a9c70dc8baa21.ttf"},170:function(e,t,n){"use strict";var r=n(165),a=n(0),i=n.n(a),o=n(4),c=n.n(o),u=n(198),s=n.n(u),f=n(155),l=n(179),d=n(163),p=n(172),h=n(162),b=n(160);n(33);var m=n(143),g=(n(199),n(161)),y=n.n(g),j=n(147);function v(){var e=y()(["\n  html, body {\n    width: 100%;\n    height: 100%;\n  }\n\n  body {\n    font-family: ",";\n    background-color: ","\n  }\n\n  #___gatsby {\n    height: 100%;\n  }\n"]);return v=function(){return e},e}Object(m.d)(v(),j.c.font,j.c.colors.lightWhite);var w=n(166),x=n.n(w),O=n(167),E=n.n(O),k=n(168),q=n.n(k),T=n(169),R=n.n(T);function C(){var e=y()(['\n  @font-face {\n    font-family: JinXuan-Fresh;\n    src: local("jf-jinxuan-fresh2.2"),\n      url(',"),\n      url(",');\n    font-weight: 400;\n  }\n\n  @font-face {\n    font-family: JinXuan-Fresh;\n    src: local("jf-jinxuan-fresh2.2"),\n      url(',"),\n      url(",");\n    font-weight: 500;\n  }\n"]);return C=function(){return e},e}Object(m.d)(C(),q.a,R.a,x.a,E.a);var F=n(144),S=function(e){return i.a.createElement(m.a,{theme:j.c},i.a.createElement(F.a,Object.assign({height:"100%",fontSize:[14,null,16]},e)))},P=function(e){var t=e.children;return i.a.createElement(f.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(l.a,{store:function(e){void 0===e&&(e={});var t=[h.b],n=d.b,r=Object(d.c)(Object(b.a)(),Object(p.fromJS)(e),n.apply(void 0,t));return r.injectedReducers={},r}()},i.a.createElement(S,null,i.a.createElement("div",null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"統一發票發行至今超過了一甲子，我們都習慣它，也對它又愛又恨！不過，時代在進步，你的發票觀跟得上時代嗎？"}]},i.a.createElement("html",{lang:"zh-Hant-TW"})),t)))},data:r})};P.propTypes={children:c.a.node.isRequired};t.a=P}}]);
//# sourceMappingURL=component---src-pages-404-js-618c75e97babb4d55c6d.js.map