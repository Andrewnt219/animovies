(this.webpackJsonpanimovies=this.webpackJsonpanimovies||[]).push([[12],{133:function(e,t,n){"use strict";n.r(t);var i=n(18),r=n(16),a=n(1),o=n.n(a),c=n(45),l=n(12),u=n(26),d=n(92),s=n(27),m=n(122),v=o.a.createContext({pauseSlideShow:function(){},resumeSlideShow:function(){}});var p=function(e){var t=e.item,n=Object(a.useState)(!1),r=Object(i.a)(n,2),c=r[0],l=r[1],u=Object(a.useContext)(v);return o.a.createElement(f,{src:t.backdrop_path},!c&&o.a.createElement(w,{onClick:function(){l(!0),u.pauseSlideShow()()}}),o.a.createElement(s.a,null,c&&o.a.createElement(h,{item:t,handleClick:function(){l(!1),u.resumeSlideShow()},initial:{opacity:0,y:"-50%",x:"-50%",scale:0},animate:{opacity:1,y:"-50%",x:"-50%",scale:1},exit:{opacity:0,y:"-50%",x:"-50%",scale:0},transition:{duration:.2}},t.overview.slice(0,200)+"...")))},f=r.d.div.withConfig({displayName:"NowPlayingSlide__StyledSlide",componentId:"sc-15pi60-0"})(["position:relative;color:",";font-size:1.5rem;background-image:url(",");background-size:cover;background-repeat:no-repeat;background-position:center;width:100vw;height:100vmin;"],(function(e){return e.theme.white}),(function(e){return e.src})),h=Object(r.d)(m.a).withConfig({displayName:"NowPlayingSlide__PopupContainer",componentId:"sc-15pi60-1"})(["top:50%;left:50%;font-size:min(4vw,2rem);& > *:last-child{margin-bottom:5%;}& > *:first-child{margin-top:10%;}@media (min-width:","){width:50%;height:50%;border-top:2px solid ",";box-shadow:0 2px 2px #000;font-size:inherit;& > *:last-child{margin-bottom:0;}& > *:first-child{margin-top:0;}}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.white})),w=Object(r.d)(d.c).withConfig({displayName:"NowPlayingSlide__InfoButton",componentId:"sc-15pi60-2"})(["color:inherit;opacity:0.5;cursor:pointer;height:20vw;width:20vw;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:all 200ms ease;&:hover{opacity:1;border-radius:4px;background:",";}"],(function(e){return Object(u.c)(e.theme.primary,.5)})),b=r.d.div.withConfig({displayName:"NowPlayingSlideContent__StyledSlideContent",componentId:"sc-1ifsstf-0"})(["display:flex;width:","px;transform:translateX(-","px);transition:transform 300ms ease;"],(function(e){return e.width}),(function(e){return e.translateX}));var y=function(e){var t=e.movies,n=e.translateX,i=window.innerWidth*t.length;return o.a.createElement(b,{width:i,translateX:n},function(e){return e.map((function(e){return o.a.createElement(p,{key:e.id,item:e})}))}(t))},E=n(37),g=n(129);function O(){var e=Object(E.a)(["\n          right: 0;\n        "]);return O=function(){return e},e}function j(){var e=Object(E.a)(["\n          left: 0;\n        "]);return j=function(){return e},e}var x=r.d.div.withConfig({displayName:"Arrow__StyledArrowContainer",componentId:"sc-1yharqg-0"})(["",";position:absolute;top:0;height:100%;padding:1rem;background:",";transition:all 200ms ease;display:flex;justify-content:center;align-items:center;cursor:pointer;opacity:0.1;&:hover{opacity:0.5;}"],(function(e){return e.isLeftArrow?Object(r.c)(j()):Object(r.c)(O())}),(function(e){return Object(u.c)(e.theme.white,.1)}));var S=Object(r.e)((function(e){var t=e.isLeftArrow,n=e.theme,i=e.handleClick,r={size:"clamp(3rem, 5vw, 5rem)",color:n.white};return o.a.createElement(x,{isLeftArrow:t,onClick:i},t?o.a.createElement(g.a,r):o.a.createElement(g.b,r))})),I=n(97);function C(){var e=Object(E.a)(["clamp(0.25rem, 1vw, 0.5rem)"]);return C=function(){return e},e}function _(){var e=Object(E.a)(["clamp(0.5rem, 2vw, 1rem)"]);return _=function(){return e},e}var N=Object(r.d)(I.a).withConfig({displayName:"DotIndicator__DotsContainer",componentId:"sc-24333l-0"})(["position:absolute;top:2rem;left:50%;transform:translate(-50%,-0.5rem);width:100%;overflow:auto;"]),k=r.d.div.withConfig({displayName:"DotIndicator__Dot",componentId:"sc-24333l-1"})(["padding:",";background:",";margin:clamp(0.1rem,0.5vw,0.5rem);border-radius:100%;transition:background 150ms ease-out;content:'';cursor:pointer;&:hover{background:",";}"],(function(e){return e.isActive?Object(r.c)(_()):Object(r.c)(C())}),(function(e){return e.isActive?e.theme.white:Object(u.c)(e.theme.white,.5)}),(function(e){return e.theme.white}));var P=function(e){var t=e.movies,n=e.activeIdx,i=e.handleDotClick;return o.a.createElement(N,null,t.map((function(e,t){return o.a.createElement(k,{key:e.id,isActive:t===n,onClick:function(){return i(t)},title:e.title})})))},D=r.d.div.withConfig({displayName:"NowPlayingSlider__StyledSlider",componentId:"sc-1ps5ddp-0"})(["position:relative;overflow-x:hidden;"]);function M(e){return{index:0,transitionValue:0,lastMovieIndex:e.length-1}}var A=function(e,t){var n=t.type,i=t.payload;switch(n){case"NEXT_SLIDE":return window.clearInterval(null===i||void 0===i?void 0:i.autoPlayTimer),e.index===e.lastMovieIndex?Object(l.a)({},e,{index:0,transitionValue:0}):Object(l.a)({},e,{index:e.index+1,transitionValue:T(e.index+1)});case"PREV_SLIDE":return window.clearInterval(null===i||void 0===i?void 0:i.autoPlayTimer),0===e.index?Object(l.a)({},e,{index:e.lastMovieIndex,transitionValue:T(e.lastMovieIndex)}):Object(l.a)({},e,{index:e.index-1,transitionValue:T(e.index-1)});case"DOT_CLICKED":return window.clearInterval(i.autoPlayTimer),Object(l.a)({},e,{index:i.index,transitionValue:T(i.index)});case"RESUME":return Object(l.a)({},e);default:throw new Error("UNKNOWN SLIDE ACTION")}};function T(e){return e*window.innerWidth}var L=function(e){var t=e.movies,n=e.autoPlayInMs,r=void 0===n?3e3:n,c=Object(a.useReducer)(A,t,M),l=Object(i.a)(c,2),u=l[0],d=l[1],s=Object(a.useRef)();return Object(a.useEffect)((function(){return r&&(s.current=setInterval((function(){console.log("SLIDER_INTERVAL"),d({type:"NEXT_SLIDE"})}),r)),function(){window.clearInterval(s.current)}})),o.a.createElement(v.Provider,{value:{pauseSlideShow:function(){return function(){return window.clearInterval(s.current)}},resumeSlideShow:function(){d({type:"RESUME"})}}},o.a.createElement(D,null,o.a.createElement(y,{movies:t,activeSlide:u.index,translateX:u.transitionValue}),o.a.createElement(S,{isLeftArrow:!0,handleClick:function(){return d({type:"PREV_SLIDE",payload:{autoPlayTimer:s.current}})}}),o.a.createElement(S,{handleClick:function(){return d({type:"NEXT_SLIDE",payload:{autoPlayTimer:s.current}})}}),o.a.createElement(P,{movies:t,activeIdx:u.index,handleDotClick:function(e){return d({type:"DOT_CLICKED",payload:{index:e,autoPlayTimer:s.current}})}})))},V=n(102),R=n(103),X=o.a.createContext("movie"),z=n(38),K=n(39),U=n(96),W=n(101);var J=Object(r.d)(s.b.div).withConfig({displayName:"MoviePage__MoviePageContainer",componentId:"sc-1ginsv4-0"})(["display:grid;row-gap:2rem;"]);function q(e){return Object.keys(e).sort()}t.default=function(){var e=function(e,t,n){var i=Object(z.b)(),r=Object(z.c)(t),o=Object(z.c)(n);return Object(a.useEffect)((function(){i(e())}),[i,e]),[r,o]}(c.e,c.c,c.b),t=Object(i.a)(e,2),n=t[0],r=n.movies,l=n.tvSeries,u=t[1],d=q(r),s=q(l),m=Object(a.useState)("popular"),v=Object(i.a)(m,2),p=v[0],f=v[1],h=Object(a.useState)("onTheAir"),w=Object(i.a)(h,2),b=w[0],y=w[1];Object(U.a)("All movies");var E=Object(z.c)(c.a);return E?o.a.createElement(W.a,null,E):u?o.a.createElement(K.a,null):o.a.createElement(V.a,null,o.a.createElement(J,null,o.a.createElement(L,{movies:r.nowPlaying}),o.a.createElement(X.Provider,{value:"movie"},o.a.createElement(R.a,{header:{sectionName:"Movies",subMenuNames:d.slice(1),activeMenu:p,setActiveMenu:f},collection:r[p]})),o.a.createElement(X.Provider,{value:"tv"},o.a.createElement(R.a,{header:{sectionName:"TV Series",subMenuNames:s,activeMenu:b,setActiveMenu:y},collection:l[b]}))))}}}]);
//# sourceMappingURL=12.7d3fb8c2.chunk.js.map