"use strict";(self.webpackChunkstrapi_0623=self.webpackChunkstrapi_0623||[]).push([[9497],{81959:(k,T,a)=>{a.r(T),a.d(T,{default:()=>ce});var e=a(67294),s=a(87631),f=a(86896),z=a(14916),v=a(88767),O=a(64593),R=a(14087),U=a(185),Z=a(53979),P=a(49066),S=a(29728),u=a(41580),M=a(11047),q=a(85018),_=a(45697),t=a.n(_),x=a(75515),C=a(11276),c=a(74571);const j=({errors:n,onChange:d,values:m})=>{const{formatMessage:i}=(0,f.Z)();return e.createElement(u.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(M.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(x.Z,{variant:"delta",as:"h2"},i({id:"global.profile",defaultMessage:"Profile"})),e.createElement(C.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(s.jm,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:n.firstname,onChange:d,value:m.firstname,type:"text",name:"firstname",required:!0})),e.createElement(c.P,{s:12,col:6},e.createElement(s.jm,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:n.lastname,onChange:d,value:m.lastname,type:"text",name:"lastname"})),e.createElement(c.P,{s:12,col:6},e.createElement(s.jm,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:n.email,onChange:d,value:m.email,type:"email",name:"email",required:!0})),e.createElement(c.P,{s:12,col:6},e.createElement(s.jm,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:n.username,onChange:d,value:m.username,type:"text",name:"username"})))))};j.propTypes={errors:t().shape({firstname:t().string,lastname:t().string,username:t().string,email:t().string}),onChange:t().func,values:t().shape({firstname:t().string,lastname:t().string,username:t().string,email:t().string})},j.defaultProps={errors:{},onChange(){},values:{firstname:"",lastname:"",username:"",email:""}};const ee=j;var G=a(40619),W=a(82562),ae=a(11700),te=a.n(ae);const D=({onChange:n,values:d,localeNames:m,allApplicationThemes:i})=>{const{formatMessage:r}=(0,f.Z)(),L=Object.keys(i).filter(o=>i[o]);return e.createElement(u.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(M.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(M.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(x.Z,{variant:"delta",as:"h2"},r({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(x.Z,null,r({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(u.x,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},r({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"}))}))),e.createElement(C.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(G.P,{label:r({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:r({id:"global.select",defaultMessage:"Select"}),hint:r({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{n({target:{name:"preferedLanguage",value:null}})},clearLabel:r({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:d.preferedLanguage,onChange:o=>{n({target:{name:"preferedLanguage",value:o}})}},Object.entries(m).map(([o,I])=>e.createElement(W.W,{value:o,key:o},I)))),e.createElement(c.P,{s:12,col:6},e.createElement(G.P,{label:r({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:r({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:r({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:d.currentTheme,onChange:o=>{n({target:{name:"currentTheme",value:o}})}},L.map(o=>e.createElement(W.W,{value:o,key:o},r({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:r({id:o,defaultMessage:te()(o)})}))))))))};D.propTypes={allApplicationThemes:t().object,onChange:t().func,values:t().shape({preferedLanguage:t().string,currentTheme:t().string}),localeNames:t().object},D.defaultProps={allApplicationThemes:{},onChange(){},values:{preferedLanguage:null,currentTheme:""},localeNames:{}};const se=D;var Y=a(1565),$=a(16364),ne=a(25752),F=a(8934),H=a(94123);const X=(0,Y.ZP)($.o)`
  ::-ms-reveal {
    display: none;
  }
`,N=(0,Y.ZP)(ne.E)`
  svg {
    height: ${(0,s.Q1)(16)};
    width: ${(0,s.Q1)(16)};
    path {
      fill: ${({theme:n})=>n.colors.neutral600};
    }
  }
`,B=({errors:n,onChange:d,values:m})=>{const{formatMessage:i}=(0,f.Z)(),[r,L]=(0,e.useState)(!1),[o,I]=(0,e.useState)(!1),[A,Q]=(0,e.useState)(!1);return e.createElement(u.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(M.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(x.Z,{variant:"delta",as:"h2"},i({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(C.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement($.o,{error:n.currentPassword?i({id:n.currentPassword,defaultMessage:n.currentPassword}):"",onChange:d,value:m.currentPassword,label:i({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:r?"text":"password",endAction:e.createElement(N,{onClick:h=>{h.stopPropagation(),L(w=>!w)},label:i(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},r?e.createElement(F.Z,null):e.createElement(H.Z,null))}))),e.createElement(C.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(X,{error:n.password?i({id:n.password,defaultMessage:n.password}):"",onChange:d,value:m.password,label:i({id:"global.password",defaultMessage:"Password"}),name:"password",type:o?"text":"password",autoComplete:"new-password",endAction:e.createElement(N,{onClick:h=>{h.stopPropagation(),I(w=>!w)},label:i(o?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},o?e.createElement(F.Z,null):e.createElement(H.Z,null))})),e.createElement(c.P,{s:12,col:6},e.createElement(X,{error:n.confirmPassword?i({id:n.confirmPassword,defaultMessage:n.confirmPassword}):"",onChange:d,value:m.confirmPassword,label:i({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:A?"text":"password",autoComplete:"new-password",endAction:e.createElement(N,{onClick:h=>{h.stopPropagation(),Q(w=>!w)},label:i(A?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},A?e.createElement(F.Z,null):e.createElement(H.Z,null))})))))};B.propTypes={errors:t().shape({currentPassword:t().string,password:t().string,confirmPassword:t().string}),onChange:t().func,values:t().shape({currentPassword:t().string,password:t().string,confirmPassword:t().string})},B.defaultProps={errors:{},onChange(){},values:{currentPassword:"",password:"",confirmPassword:""}};const re=B;var oe=a(50592),le=a(95428),ie=a(87561),de=a(17405);const me=ie.Ry().shape(de.Rw);var J=a(19631);const ce=()=>{const{changeLocale:n,localeNames:d}=(0,oe.Z)(),{setUserDisplayName:m}=(0,s.L7)(),i=(0,v.useQueryClient)(),{formatMessage:r}=(0,f.Z)(),{trackUsage:L}=(0,s.rS)(),o=(0,s.lm)(),{lockApp:I,unlockApp:A}=(0,s.o1)(),{notifyStatus:Q}=(0,R.G)(),{currentTheme:h,themes:w,onChangeTheme:ue}=(0,le.M1)(),{get:V,put:ge}=(0,s.kY)();(0,s.go)();const{isLoading:pe,data:b}=(0,v.useQuery)("user",async()=>{const{data:l}=await V("/admin/users/me");return l.data},{onSuccess(){Q(r({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),{isLoading:fe,data:he}=(0,v.useQuery)(["providers","isSSOLocked"],async()=>{if(window.strapi.isEE){const{data:{data:l}}=await V("/admin/providers/isSSOLocked");return l}return{isSSOLocked:!1}},{onError(){o({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})}}),we=pe||fe,K=(0,v.useMutation)(async l=>{const{confirmPassword:g,currentTheme:p,...E}=l,{data:y}=await ge("/admin/users/me",E);return{...y.data,currentTheme:l.currentTheme}},{async onSuccess(l){await i.invalidateQueries("user");const{email:g,firstname:p,lastname:E,username:y,preferedLanguage:Te}=l;s.I8.setUserInfo({email:g,firstname:p,lastname:E,username:y,preferedLanguage:Te});const Ze=l.username||(0,J.Pp)(l.firstname,l.lastname);m(Ze),n(l.preferedLanguage),ue(l.currentTheme),L("didChangeMode",{newMode:l.currentTheme}),o({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},onSettled(){A()},refetchActive:!0}),{isLoading:Ee}=K,ve=async(l,{setErrors:g})=>{I();const p=l.username||null;K.mutate({...l,username:p},{onError(E){const y=E?.response?.data;return y?.data?g(y.data):o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};if(we)return e.createElement(U.o,{"aria-busy":"true"},e.createElement(O.q,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(Z.T,{title:r({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(P.D,null,e.createElement(s.dO,null)));const Pe=he?.isSSOLocked,{email:Se,firstname:ye,lastname:Me,username:Le,preferedLanguage:Ie}=b,Ae={email:Se,firstname:ye,lastname:Me,username:Le,preferedLanguage:Ie,currentTheme:h};return e.createElement(U.o,{"aria-busy":Ee},e.createElement(O.q,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(z.J9,{onSubmit:ve,initialValues:Ae,validateOnChange:!1,validationSchema:me,enableReinitialize:!0},({errors:l,values:g,handleChange:p,isSubmitting:E})=>e.createElement(s.l0,null,e.createElement(Z.T,{title:b.username||(0,J.Pp)(b.firstname,b.lastname),primaryAction:e.createElement(S.z,{startIcon:e.createElement(q.Z,null),loading:E,type:"submit"},r({id:"global.save",defaultMessage:"Save"}))}),e.createElement(u.x,{paddingBottom:10},e.createElement(P.D,null,e.createElement(M.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(ee,{errors:l,onChange:p,values:g}),!Pe&&e.createElement(re,{errors:l,onChange:p,values:g}),e.createElement(se,{allApplicationThemes:w,onChange:p,values:g,localeNames:d})))))))}},17405:(k,T,a)=>{a.d(T,{YM:()=>Z,Rw:()=>v});var e=a(87561),s=a(87631);const f={firstname:e.Z_().trim().required(s.I0.required),lastname:e.Z_(),email:e.Z_().email(s.I0.email).lowercase().required(s.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,s.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,s.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(P,S)=>P?S.required(s.I0.required):S)},v={...f,currentPassword:e.Z_().when(["password","confirmPassword"],(P,S,u)=>P||S?u.required(s.I0.required):u),preferedLanguage:e.Z_().nullable()},R={roles:e.IX().min(1,s.I0.required).required(s.I0.required)},Z=e.Ry().shape({...f,isActive:e.Xg(),...R})}}]);
