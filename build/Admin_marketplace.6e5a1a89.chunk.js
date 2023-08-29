"use strict";(self.webpackChunkstrapi_0623=self.webpackChunkstrapi_0623||[]).push([[5516],{9226:(B,y,n)=>{n.d(y,{Z:()=>k});var e=n(67294);const k=(o,T)=>{const[D,R]=(0,e.useState)(o);return(0,e.useEffect)(()=>{const L=setTimeout(()=>{R(o)},T);return()=>{clearTimeout(L)}},[o,T]),D}},26761:(B,y,n)=>{n.r(y),n.d(y,{MarketPlacePage:()=>he,default:()=>kt});var e=n(67294),f=n(86896),k=n(64593),o=n(87631),T=n(17034),D=n(185),R=n(49066),L=n(82777),v=n(11047),V=n(77296),P=n(41580),Me=n(49123),z=n(42761),ye=n(45697),t=n.n(ye),ke=n(53979),_=n(80994),O=n(85893);const be=a=>(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...a,children:(0,O.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),Re=be,U=({isOnline:a,npmPackageType:s})=>{const{formatMessage:r}=(0,f.Z)(),{trackUsage:l}=(0,o.rS)(),i=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(ke.T,{title:r({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:r({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:a&&e.createElement(_.Q,{startIcon:e.createElement(Re,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>l(i),isExternal:!0},r({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},ee=U;U.defaultProps={npmPackageType:"plugin"},U.propTypes={isOnline:t().bool.isRequired,npmPackageType:t().string};var Ce=n(87751);const xe=()=>{const a=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,r]=(0,e.useState)(a),l=()=>r(!0),i=()=>r(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",l),window.addEventListener("offline",i),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",i)}),[]),s},Se=a=>(0,O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...a,children:[(0,O.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,O.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),Te=Se;var te=n(17772),Z=n(52624);const Ze=()=>{const{formatMessage:a}=(0,f.Z)(),{trackUsage:s}=(0,o.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(o.Y_,{title:a({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:a({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(Te,null),iconBackground:"alternative100",endAction:e.createElement(Z.J,{as:te.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var we=n(77197),De=n(11276),Ne=n(74571),w=n(1565),Le=n(23450),Oe=n.n(Le),C=n(75515),H=n(84495),Be=n(86783),je=n(61473),Ie=n(85018),Ae=n(36625),ae=n.n(Ae),Q=n(29728),ne=n(65186);const j=({description:a,installMessage:s,disabled:r,handleCopy:l,pluginName:i})=>e.createElement(H.u,{"data-testid":`tooltip-${i}`,description:a},e.createElement(P.x,null,e.createElement(Q.z,{size:"S",startIcon:e.createElement(ne.Z,null),variant:"secondary",disabled:r,onClick:l},s))),G=({strapiPeerDepVersion:a,strapiAppVersion:s,handleCopy:r,pluginName:l})=>{const{formatMessage:i}=(0,f.Z)(),g=ae().validRange(a),c=ae().satisfies(s,g),d=i({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!g)return e.createElement(j,{installMessage:d,pluginName:l,description:i({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:r});if(!c)return e.createElement(j,{installMessage:d,pluginName:l,description:i({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:g}),disabled:!0})}return e.createElement(Q.z,{size:"S",startIcon:e.createElement(ne.Z,null),variant:"secondary",onClick:r},d)};j.defaultProps={disabled:!1,handleCopy:null},j.propTypes={description:t().string.isRequired,installMessage:t().string.isRequired,disabled:t().bool,handleCopy:t().func,pluginName:t().string.isRequired},G.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},G.propTypes={strapiAppVersion:t().string,strapiPeerDepVersion:t().string,handleCopy:t().func.isRequired,pluginName:t().string.isRequired};const $e=G,W=({isInstalled:a,isInDevelopmentMode:s,commandToCopy:r,strapiAppVersion:l,strapiPeerDepVersion:i,pluginName:g})=>{const c=(0,o.lm)(),{formatMessage:d}=(0,f.Z)(),{trackUsage:u}=(0,o.rS)(),{copy:m}=(0,o.VP)(),h=async()=>{await m(r)&&(u("willInstallPlugin"),c({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return a?e.createElement(P.x,{paddingLeft:4},e.createElement(Z.J,{as:Ie.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(C.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},d({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement($e,{strapiAppVersion:l,strapiPeerDepVersion:i,handleCopy:h,pluginName:g}):null};W.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},W.propTypes={isInstalled:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,commandToCopy:t().string.isRequired,strapiAppVersion:t().string,strapiPeerDepVersion:t().string,pluginName:t().string.isRequired};const Fe=W;var Ve=n(70004),ze=n(57750),Ue=n(69353),He=n(7217);const Qe=(0,w.ZP)(Ve.i)`
  width: ${(0,o.Q1)(12)};
  transform: rotate(90deg);
`,K=({githubStars:a,npmDownloads:s,npmPackageType:r})=>{const{formatMessage:l}=(0,f.Z)();return e.createElement(v.k,{gap:1},!!a&&e.createElement(e.Fragment,null,e.createElement(Z.J,{as:ze.Z,height:(0,o.Q1)(12),width:(0,o.Q1)(12),"aria-hidden":!0}),e.createElement(Z.J,{as:Ue.Z,height:(0,o.Q1)(12),width:(0,o.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${r}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:a,package:r})},e.createElement(C.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},a)),e.createElement(Qe,{unsetMargin:!1,background:"neutral200"})),e.createElement(Z.J,{as:He.Z,height:(0,o.Q1)(12),width:(0,o.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${r}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:r})},e.createElement(C.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},s)))};K.defaultProps={githubStars:0,npmDownloads:0},K.propTypes={githubStars:t().number,npmDownloads:t().number,npmPackageType:t().string.isRequired};const Ge=K,We=(0,w.ZP)(C.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,J=({npmPackage:a,isInstalled:s,useYarn:r,isInDevelopmentMode:l,npmPackageType:i,strapiAppVersion:g})=>{const{attributes:c}=a,{formatMessage:d}=(0,f.Z)(),{trackUsage:u}=(0,o.rS)(),m=r?`yarn add ${c.npmPackageName}`:`npm install ${c.npmPackageName}`,h=d({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),E=`https://market.strapi.io/${Oe().plural(i)}/${c.slug}`;return e.createElement(v.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(P.x,null,e.createElement(v.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(P.x,{as:"img",src:c.logo.url,alt:`${c.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(Ge,{githubStars:c.githubStars,npmDownloads:c.npmDownloads,npmPackageType:i})),e.createElement(P.x,{paddingTop:4},e.createElement(C.Z,{as:"h3",variant:"delta"},e.createElement(v.k,{alignItems:"center"},c.name,c.validated&&!c.madeByStrapi&&e.createElement(H.u,{description:d({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(v.k,null,e.createElement(Z.J,{as:Be.Z,marginLeft:2,color:"success600"}))),c.madeByStrapi&&e.createElement(H.u,{description:h},e.createElement(v.k,null,e.createElement(P.x,{as:"img",src:je,alt:h,marginLeft:1,width:6,height:"auto"})))))),e.createElement(P.x,{paddingTop:2},e.createElement(We,{as:"p",variant:"omega",textColor:"neutral600"},c.description))),e.createElement(v.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(_.Q,{size:"S",href:E,isExternal:!0,endIcon:e.createElement(te.Z,null),"aria-label":d({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:c.name}),variant:"tertiary",onClick:()=>u("didPluginLearnMore")},d({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(Fe,{isInstalled:s,isInDevelopmentMode:l,commandToCopy:m,strapiAppVersion:g,strapiPeerDepVersion:c.strapiVersion,pluginName:c.name})))};J.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},J.propTypes={npmPackage:t().shape({id:t().string.isRequired,attributes:t().shape({name:t().string.isRequired,description:t().string.isRequired,slug:t().string.isRequired,npmPackageName:t().string.isRequired,npmPackageUrl:t().string.isRequired,repositoryUrl:t().string.isRequired,logo:t().object.isRequired,developerName:t().string.isRequired,validated:t().bool.isRequired,madeByStrapi:t().bool.isRequired,strapiCompatibility:t().oneOf(["v3","v4"]),strapiVersion:t().string,githubStars:t().number,npmDownloads:t().number}).isRequired}).isRequired,isInstalled:t().bool.isRequired,useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool,npmPackageType:t().string.isRequired,strapiAppVersion:t().string};const Ke=J;var Je=n(86031);const Ye=w.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:a})=>a.spaces[4]};
`,qe=(0,w.ZP)(P.x)`
  background: ${({theme:a})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${a.colors.neutral150} 100%)`};
  opacity: 0.33;
`,Xe=()=>e.createElement(Ye,null,Array(12).fill(null).map((a,s)=>e.createElement(qe,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),se=({content:a})=>e.createElement(P.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(Xe,null),e.createElement(P.x,{position:"absolute",top:11,width:"100%"},e.createElement(v.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(Z.J,{as:Je.Z,color:"",width:"160px",height:"88px"}),e.createElement(P.x,{paddingTop:6},e.createElement(C.Z,{variant:"delta",as:"p",textColor:"neutral600"},a)))));se.propTypes={content:t().string.isRequired};const _e=se,Y=({status:a,npmPackages:s,installedPackageNames:r,useYarn:l,isInDevelopmentMode:i,npmPackageType:g,strapiAppVersion:c,debouncedSearch:d})=>{const{formatMessage:u}=(0,f.Z)();if(a==="error")return e.createElement(v.k,{paddingTop:8},e.createElement(o.Hn,null));if(a==="loading")return e.createElement(v.k,{justifyContent:"center",paddingTop:8},e.createElement(we.a,null,"Loading content..."));const m=u({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:d});return s.length===0?e.createElement(_e,{content:m}):e.createElement(De.r,{gap:4,"data-testid":"marketplace-results"},s.map(h=>e.createElement(Ne.P,{col:4,s:6,xs:12,style:{height:"100%"},key:h.id},e.createElement(Ke,{npmPackage:h,isInstalled:r.includes(h.attributes.npmPackageName),useYarn:l,isInDevelopmentMode:i,npmPackageType:g,strapiAppVersion:c}))))};Y.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},Y.propTypes={status:t().string.isRequired,npmPackages:t().array,installedPackageNames:t().arrayOf(t().string),useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,npmPackageType:t().string.isRequired,strapiAppVersion:t().string,debouncedSearch:t().string};const re=Y;var ie=n(40619),le=n(82562);const et=(0,w.ZP)(P.x)`
  font-weight: ${({theme:a})=>a.fontWeights.semiBold};

  span {
    font-size: ${({theme:a})=>a.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,oe=({sortQuery:a,handleSelectChange:s})=>{const{formatMessage:r}=(0,f.Z)(),l={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(et,null,e.createElement(ie.P,{size:"S",id:"sort-by-select",value:a,customizeContent:()=>r(l[a].selected),onChange:i=>{s({sort:i})},label:r({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(l).map(([i,g])=>e.createElement(le.W,{key:i,value:i},r(g.option)))))};oe.propTypes={sortQuery:t().string.isRequired,handleSelectChange:t().func.isRequired};const tt=oe;var at=n(72775),nt=n(70968),st=n(89597),rt=n(37108);const ce=({message:a,value:s,onChange:r,possibleFilters:l,onClear:i,customizeContent:g})=>{const c=(d,u)=>`${d} (${u})`;return e.createElement(ie.P,{"data-testid":`${a}-button`,label:a,placeholder:a,size:"M",onChange:r,onClear:i,value:s,customizeContent:g,multi:!0},Object.entries(l).map(([d,u])=>e.createElement(le.W,{"data-testid":`${d}-${u}`,key:d,value:d},c(d,u))))};ce.propTypes={message:t().string.isRequired,value:t().array.isRequired,onChange:t().func.isRequired,possibleFilters:t().object.isRequired,onClear:t().func.isRequired,customizeContent:t().func.isRequired};const de=ce,ge=({source:a,onToggle:s,query:r,npmPackageType:l,possibleCategories:i,possibleCollections:g,handleSelectChange:c,handleSelectClear:d})=>{const{formatMessage:u}=(0,f.Z)();return e.createElement(rt.J2,{source:a,onDismiss:s,padding:3,spacing:4},e.createElement(lt,{direction:"column",alignItems:"stretch",gap:1},e.createElement(de,{message:u({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:r?.collections||[],onChange:m=>{c({collections:m})},onClear:()=>d("collections"),possibleFilters:g,customizeContent:m=>u({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:m.length})}),l==="plugin"&&e.createElement(de,{message:u({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:r?.categories||[],onChange:m=>{c({categories:m})},onClear:()=>d("categories"),possibleFilters:i,customizeContent:m=>u({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:m.length}),name:"categories"})))};ge.propTypes={onToggle:t().func.isRequired,source:t().shape({current:t().instanceOf(Element)}).isRequired,query:t().object.isRequired,npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const it=ge,lt=(0,w.ZP)(v.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,q=({name:a,handleRemove:s})=>e.createElement(P.x,{padding:1},e.createElement(at.V,{icon:e.createElement(nt.Z,null),onClick:s},a)),ot=(0,w.ZP)(Q.z)`
  height: ${({theme:a})=>a.sizes.input.S};
`,pe=({possibleCollections:a,possibleCategories:s,npmPackageType:r,query:l,handleSelectClear:i,handleSelectChange:g})=>{const[c,d]=(0,e.useState)(!1),u=(0,e.useRef)(),{formatMessage:m}=(0,f.Z)(),h=()=>d(p=>!p),E=(p,M)=>{const x={[M]:l[M].filter(N=>N!==p)};g(x)};return e.createElement(e.Fragment,null,e.createElement(P.x,{paddingTop:1,paddingBottom:1},e.createElement(ot,{variant:"tertiary",ref:u,"data-testid":"filters-button",startIcon:e.createElement(st.Z,null),onClick:h,size:"S"},m({id:"app.utils.filters",defaultMessage:"Filters"})),c&&e.createElement(it,{onToggle:h,source:u,query:l,handleSelectClear:i,handleSelectChange:g,possibleCollections:a,possibleCategories:s,npmPackageType:r})),l.collections?.map(p=>e.createElement(q,{name:p,key:p,handleRemove:()=>E(p,"collections")})),r==="plugin"&&l.categories?.map(p=>e.createElement(q,{name:p,key:p,handleRemove:()=>E(p,"categories")})))};q.propTypes={name:t().string.isRequired,handleRemove:t().func.isRequired},pe.propTypes={npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,query:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const ct=pe,ue=({pagination:a})=>e.createElement(P.x,{paddingTop:4},e.createElement(v.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(o.v4,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(o.tU,{pagination:a})));ue.propTypes={pagination:t().shape({page:t().number.isRequired,pageCount:t().number.isRequired,pageSize:t().number.isRequired,total:t().number.isRequired}).isRequired};const dt=ue;var gt=n(9226);const pt=n.p+"9d5d788027e86620c234.svg",ut=()=>{const{formatMessage:a}=(0,f.Z)();return e.createElement(T.A,null,e.createElement(D.o,null,e.createElement(ee,{isOnline:!1}),e.createElement(v.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,o.Q1)(120)},e.createElement(P.x,{paddingBottom:2},e.createElement(C.Z,{textColor:"neutral700",variant:"alpha"},a({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(P.x,{paddingBottom:6},e.createElement(C.Z,{textColor:"neutral700",variant:"epsilon"},a({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:pt,alt:"offline",style:{width:"88px",height:"88px"}}))))};var mt=n(14087),me=n(88767),ft=n(80129),I=n.n(ft);const fe="https://market-api.strapi.io",ht=async(a={})=>{try{const s=I().stringify(I().parse(a)),r=await fetch(`${fe}/plugins?${s}`);if(!r.ok)throw new Error("Failed to fetch marketplace plugins.");return await r.json()}catch(s){console.error(s)}return null},Pt=(a,s)=>{const r=(0,o.lm)();return(0,me.useQuery)(["list-marketplace-plugins",s],()=>ht(s),{onSuccess(){a&&a()},onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},vt=async(a={})=>{try{const s=I().stringify(I().parse(a)),r=await fetch(`${fe}/providers?${s}`);if(!r.ok)throw new Error("Failed to fetch marketplace providers.");return await r.json()}catch(s){console.error(s)}return null},Et=(a,s)=>{const r=(0,o.lm)();return(0,me.useQuery)(["list-marketplace-providers",s],()=>vt(s),{onSuccess(){a&&a()},onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Mt({npmPackageType:a,debouncedSearch:s,query:r,tabQuery:l}){const{notifyStatus:i}=(0,mt.G)(),{formatMessage:g}=(0,f.Z)(),c=g({id:"global.marketplace",defaultMessage:"Marketplace"}),d=()=>{i(g({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:c}))},u={page:r?.page||1,pageSize:r?.pageSize||24},{data:m,status:h}=Pt(d,{...l.plugin,pagination:u,search:s}),{data:E,status:p}=Et(d,{...l.provider,pagination:u,search:s}),M=a==="plugin"?m:E,x=a==="plugin"?h:p,[N,A]=(0,e.useState)({}),[$,F]=(0,e.useState)({});(0,e.useEffect)(()=>{x==="success"&&A(M.meta.collections),h==="success"&&F(m.meta.categories)},[m?.meta.categories,h,M?.meta.collections,x]);const{pagination:X}=x==="success"?M.meta:{};return{pluginsResponse:m,providersResponse:E,pluginsStatus:h,providersStatus:p,possibleCollections:N,possibleCategories:$,pagination:X}}const yt=Mt,he=()=>{const{formatMessage:a}=(0,f.Z)(),{trackUsage:s}=(0,o.rS)(),r=(0,e.useRef)(s),l=(0,o.lm)(),[{query:i},g]=(0,o.Kx)(),c=(0,gt.Z)(i?.search,500)||"",{autoReload:d,dependencies:u,useYarn:m,strapiVersion:h}=(0,o.L7)(),E=xe(),p=i?.npmPackageType||"plugin",[M,x]=(0,e.useState)({plugin:p==="plugin"?{...i}:{},provider:p==="provider"?{...i}:{}});(0,o.go)(),(0,e.useEffect)(()=>{r.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{d||l({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"},blockTransition:!0})},[l,d]);const{pluginsResponse:N,providersResponse:A,pluginsStatus:$,providersStatus:F,possibleCollections:X,possibleCategories:bt,pagination:Pe}=yt({npmPackageType:p,debouncedSearch:c,query:i,tabQuery:M});if(!E)return e.createElement(ut,null);const Rt=S=>{const b=S===0?"plugin":"provider",xt=M[b]&&Object.keys(M[b]).length;g(xt?{...M[b],search:i?.search||"",npmPackageType:b,page:1}:{npmPackageType:b,collections:[],categories:[],sort:"name:asc",page:1,search:i?.search||""})},ve=S=>{g({...S,page:1}),x(b=>({...b,[p]:{...b[p],...S}}))},Ct=S=>{g({[S]:[],page:null},"remove"),x(b=>({...b,[p]:{}}))},Ee=Object.keys(u);return e.createElement(T.A,null,e.createElement(D.o,null,e.createElement(k.q,{title:a({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(ee,{isOnline:E,npmPackageType:p}),e.createElement(R.D,null,e.createElement(L.v,{label:a({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(p),onTabChange:Rt},e.createElement(v.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(V.m,null,e.createElement(V.O,null,a({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",$==="success"?`(${N.meta.pagination.total})`:"..."),e.createElement(V.O,null,a({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",F==="success"?`(${A.meta.pagination.total})`:"...")),e.createElement(P.x,{width:"25%"},e.createElement(Me.w,{name:"searchbar",onClear:()=>g({search:"",page:1}),value:i?.search,onChange:S=>g({search:S.target.value,page:1}),clearLabel:a({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(v.k,{paddingBottom:4,gap:2},e.createElement(tt,{sortQuery:i?.sort||"name:asc",handleSelectChange:ve}),e.createElement(ct,{npmPackageType:p,possibleCollections:X,possibleCategories:bt,query:i||{},handleSelectChange:ve,handleSelectClear:Ct})),e.createElement(z.n,null,e.createElement(z.x,null,e.createElement(re,{npmPackages:N?.data,status:$,installedPackageNames:Ee,useYarn:m,isInDevelopmentMode:d,npmPackageType:"plugin",strapiAppVersion:h,debouncedSearch:c})),e.createElement(z.x,null,e.createElement(re,{npmPackages:A?.data,status:F,installedPackageNames:Ee,useYarn:m,isInDevelopmentMode:d,npmPackageType:"provider",debouncedSearch:c})))),Pe&&e.createElement(dt,{pagination:Pe}),e.createElement(P.x,{paddingTop:8},e.createElement(Ze,null)))))},kt=()=>e.createElement(o.O4,{permissions:Ce.Z.marketplace.main},e.createElement(he,null))},17034:(B,y,n)=>{n.d(y,{A:()=>D});var e=n(85893),f=n(1565),k=n(41580);const o=(0,f.ZP)(k.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:R})=>R?"auto 1fr":"1fr"};
`,T=(0,f.ZP)(k.x)`
  overflow-x: hidden;
`,D=({sideNav:R,children:L})=>(0,e.jsxs)(o,{hasSideNav:!!R,children:[R,(0,e.jsx)(T,{paddingBottom:10,children:L})]})},57750:(B,y,n)=>{n.d(y,{Z:()=>k});var e=n(85893);const f=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),k=f},69353:(B,y,n)=>{n.d(y,{Z:()=>k});var e=n(85893);const f=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",d:"m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z"})}),k=f}}]);
