(self.webpackChunkstrapi_0623=self.webpackChunkstrapi_0623||[]).push([[3783],{51584:(E,v,t)=>{var n=t(44239),l=t(37005),s="[object Boolean]";function x(m){return m===!0||m===!1||l(m)&&n(m)==s}E.exports=x},7654:(E,v,t)=>{var n=t(81763);function l(s){return n(s)&&s!=+s}E.exports=l},81763:(E,v,t)=>{var n=t(44239),l=t(37005),s="[object Number]";function x(m){return typeof m=="number"||l(m)&&n(m)==s}E.exports=x},7334:(E,v,t)=>{var n=t(79833);function l(s){return n(s).toLowerCase()}E.exports=l},20573:(E,v,t)=>{"use strict";t.d(v,{P1:()=>j});var n="NOT_FOUND";function l(u){var a;return{get:function(r){return a&&u(a.key,r)?a.value:n},put:function(r,o){a={key:r,value:o}},getEntries:function(){return a?[a]:[]},clear:function(){a=void 0}}}function s(u,a){var e=[];function r(p){var h=e.findIndex(function(g){return a(p,g.key)});if(h>-1){var f=e[h];return h>0&&(e.splice(h,1),e.unshift(f)),f.value}return n}function o(p,h){r(p)===n&&(e.unshift({key:p,value:h}),e.length>u&&e.pop())}function i(){return e}function c(){e=[]}return{get:r,put:o,getEntries:i,clear:c}}var x=function(a,e){return a===e};function m(u){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var o=e.length,i=0;i<o;i++)if(!u(e[i],r[i]))return!1;return!0}}function M(u,a){var e=typeof a=="object"?a:{equalityCheck:a},r=e.equalityCheck,o=r===void 0?x:r,i=e.maxSize,c=i===void 0?1:i,p=e.resultEqualityCheck,h=m(o),f=c===1?l(h):s(c,h);function g(){var d=f.get(arguments);if(d===n){if(d=u.apply(null,arguments),p){var _=f.getEntries(),y=_.find(function(O){return p(O.value,d)});y&&(d=y.value)}f.put(arguments,d)}return d}return g.clearCache=function(){return f.clear()},g}function P(u){var a=Array.isArray(u[0])?u[0]:u;if(!a.every(function(r){return typeof r=="function"})){var e=a.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return a}function b(u){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var o=function(){for(var c=arguments.length,p=new Array(c),h=0;h<c;h++)p[h]=arguments[h];var f=0,g,d={memoizeOptions:void 0},_=p.pop();if(typeof _=="object"&&(d=_,_=p.pop()),typeof _!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof _+"]");var y=d,O=y.memoizeOptions,C=O===void 0?e:O,Z=Array.isArray(C)?C:[C],D=P(p),R=u.apply(void 0,[function(){return f++,_.apply(null,arguments)}].concat(Z)),A=u(function(){for(var B=[],S=D.length,T=0;T<S;T++)B.push(D[T].apply(null,arguments));return g=R.apply(null,B),g});return Object.assign(A,{resultFunc:_,memoizedResultFunc:R,dependencies:D,lastResult:function(){return g},recomputations:function(){return f},resetRecomputations:function(){return f=0}}),A};return o}var j=b(M),w=function(a,e){if(e===void 0&&(e=j),typeof a!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof a));var r=Object.keys(a),o=e(r.map(function(i){return a[i]}),function(){for(var i=arguments.length,c=new Array(i),p=0;p<i;p++)c[p]=arguments[p];return c.reduce(function(h,f,g){return h[r[g]]=f,h},{})});return o}},48734:(E,v,t)=>{"use strict";t.d(v,{U:()=>a,y:()=>w});var n=t(85893),l=t(67294),s=t(1565),x=t(13819),m=t(2504),M=t(75515),P=t(11047),b=t(41580);const j=({theme:e,expanded:r,variant:o,disabled:i,error:c})=>c?`1px solid ${e.colors.danger600} !important`:i?`1px solid ${e.colors.neutral150}`:r?`1px solid ${e.colors.primary600}`:o==="primary"?`1px solid ${e.colors.neutral0}`:`1px solid ${e.colors.neutral100}`,w=(0,s.ZP)(M.Z)``,u=(0,s.ZP)(b.x)`
  border: ${j};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    ${w} {
      color: ${({theme:e,expanded:r})=>r?void 0:e.colors.primary700};
    }

    ${M.Z} {
      color: ${({theme:e,expanded:r})=>r?void 0:e.colors.primary600};
    }

    & > ${P.k} {
      background: ${({theme:e})=>e.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:e})=>e.colors.primary200};
    }
  }
`,a=({children:e,disabled:r=!1,error:o,expanded:i=!1,hasErrorMessage:c=!0,id:p,onToggle:h,toggle:f,size:g="M",variant:d="primary",shadow:_})=>{const y=(0,m.M)(p),O=l.useMemo(()=>({expanded:i,onToggle:h,toggle:f,id:y,size:g,variant:d,disabled:r}),[r,i,y,h,g,f,d]);return(0,n.jsxs)(x.S.Provider,{value:O,children:[(0,n.jsx)(u,{"data-strapi-expanded":i,disabled:r,"aria-disabled":r,expanded:i,hasRadius:!0,variant:d,error:o,shadow:_,children:e}),o&&c&&(0,n.jsx)(b.x,{paddingTop:1,children:(0,n.jsx)(M.Z,{variant:"pi",textColor:"danger600",children:o})})]})}},63081:(E,v,t)=>{"use strict";t.d(v,{v:()=>x});var n=t(85893),l=t(13819),s=t(41580);const x=({children:m,...M})=>{const{expanded:P,id:b}=(0,l.A)();if(!P)return null;const j=`accordion-content-${b}`,w=`accordion-label-${b}`,u=`accordion-desc-${b}`;return(0,n.jsx)(s.x,{role:"region",id:j,"aria-labelledby":w,"aria-describedby":u,...M,children:m})}},13819:(E,v,t)=>{"use strict";t.d(v,{A:()=>s,S:()=>l});var n=t(67294);const l=(0,n.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),s=()=>(0,n.useContext)(l)},74756:(E,v,t)=>{"use strict";t.d(v,{B:()=>e});var n=t(85893),l=t(12645),s=t(1565),x=t(48734),m=t(13819);const M=({expanded:r,disabled:o,variant:i})=>{let c="neutral100";return r?c="primary100":o?c="neutral150":i==="primary"&&(c="neutral0"),c};var P=t(39785),b=t(52624),j=t(11047),w=t(75515);const u=(0,s.ZP)(P.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:r,expanded:o})=>o?r.colors.primary600:r.colors.neutral500};
    }
  }
`,a=(0,s.ZP)(j.k)`
  min-height: ${({theme:r,size:o})=>r.sizes.accordions[o]};
  border-radius: ${({theme:r,expanded:o})=>o?`${r.borderRadius} ${r.borderRadius} 0 0`:r.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }
`,e=({title:r,description:o,as:i="span",togglePosition:c="right",action:p,...h})=>{const{onToggle:f,toggle:g,expanded:d,id:_,size:y,variant:O,disabled:C}=(0,m.A)(),Z=`accordion-content-${_}`,D=`accordion-label-${_}`,R=`accordion-desc-${_}`,A=y==="M"?6:4,$=y==="M"?A:A-2,B=M({expanded:d,disabled:C,variant:O}),S={as:i,fontWeight:y==="S"?"bold":void 0,id:D,textColor:d?"primary600":"neutral700",ellipsis:!0,variant:y==="M"?"delta":void 0},T=d?"primary600":"neutral600",W=d?"primary200":"neutral200",L=y==="M"?`${32/16}rem`:`${24/16}rem`,I=()=>{C||(g&&!f?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),g()):f&&f())},U=(0,n.jsx)(j.k,{justifyContent:"center",borderRadius:"50%",height:L,width:L,transform:d?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:W,cursor:C?"not-allowed":"pointer",onClick:I,shrink:0,children:(0,n.jsx)(b.J,{as:l.Z,width:y==="M"?`${11/16}rem`:`${8/16}rem`,color:d?"primary600":"neutral600"})});return(0,n.jsx)(a,{paddingBottom:$,paddingLeft:A,paddingRight:A,paddingTop:$,background:B,expanded:d,size:y,justifyContent:"space-between",cursor:C?"not-allowed":"",children:(0,n.jsxs)(j.k,{gap:3,flex:1,maxWidth:"100%",children:[c==="left"&&U,(0,n.jsx)(u,{onClick:I,"aria-disabled":C,"aria-expanded":d,"aria-controls":Z,"aria-labelledby":D,"data-strapi-accordion-toggle":!0,expanded:d,type:"button",flex:1,minWidth:0,...h,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.y,{...S,children:r}),o&&(0,n.jsx)(w.Z,{as:"p",id:R,textColor:T,children:o})]})}),c==="right"&&(0,n.jsxs)(j.k,{gap:3,children:[U,p]}),c==="left"&&p]})})}},12814:(E,v,t)=>{"use strict";t.d(v,{Z:()=>s});var n=t(85893);const l=x=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...x,children:[(0,n.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),s=l},99782:(E,v,t)=>{"use strict";t.d(v,{Z:()=>s});var n=t(85893);const l=x=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...x,children:[(0,n.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,n.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),s=l}}]);
