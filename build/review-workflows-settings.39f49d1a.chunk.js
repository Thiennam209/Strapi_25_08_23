"use strict";(self.webpackChunkstrapi_0623=self.webpackChunkstrapi_0623||[]).push([[8155],{97259:(qe,z,a)=>{a.r(z),a.d(z,{default:()=>Ge});var t=a(67294),R=a(14916),L=a(86896),I=a(86706),te=a(88767),p=a(87631),ae=a(17034),oe=a(185),re=a(53979),ne=a(29728),se=a(49066),le=a(77197),ie=a(85018),de=a(45697),u=a.n(de),M=a(1565),y=a(41580),v=a(11047),d=a(53616);function ce({status:e,data:o}){return{type:d.QM,payload:{status:e,workflows:o}}}function ue(e){return{type:d.x4,payload:{stageId:e}}}function ge(e={}){return{type:d.Ot,payload:e}}function G(e,o){return{type:d.Nj,payload:{stageId:e,...o}}}function me(e,o){return{type:d.$k,payload:{newIndex:o,oldIndex:e}}}var Z=a(75515),fe=a(99782);const O=(0,M.ZP)(fe.Z)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,pe=(0,M.ZP)(y.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${Z.Z} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${O} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${Z.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${O} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`;function V({children:e,...o}){return t.createElement(pe,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...o},t.createElement(v.k,{gap:2},t.createElement(O,{"aria-hidden":!0}),t.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},e)))}V.propTypes={children:u().node.isRequired};var ve=a(63237),he=a(48734),we=a(74756),H=a(12028),Se=a(63081),ye=a(11276),K=a(74571),ke=a(16364),Q=a(70642),Ee=a(20022),We=a(12814),Ce=a(61080),B=a(13037),De=a(75642),Re=a(13920);const Ie=(0,B.s)();function Me(){return t.createElement(y.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function X({id:e,index:o,canDelete:r,canReorder:g,isOpen:i=!1,stagesCount:l}){const n=s=>`${s+1} of ${l}`,c=s=>{E(m({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:f.value,position:n(s)}))},S=s=>{E(m({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:f.value,position:n(s)}))},F=()=>{E(m({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:f.value}))},k=(s,A)=>{E(m({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:f.value,position:n(s)})),W(me(A,s))},[P,E]=t.useState(null),{formatMessage:m}=(0,L.Z)(),{trackUsage:$}=(0,p.rS)(),W=(0,I.I0)(),[C,U]=t.useState(i),[f,j]=(0,R.U$)(`stages.${o}.name`),[w,T]=(0,R.U$)(`stages.${o}.color`),[{handlerId:h,isDragging:x,handleKeyDown:D},Ve,He,Ke,_]=(0,De.Y9)(g,{index:o,item:{name:f.value},onGrabItem:c,onDropItem:S,onMoveItem:k,onCancel:F,type:d.uL.STAGE}),Qe=(0,Re.FE)(Ve,He),Xe=Ie.map(({hex:s,name:A})=>({value:s,label:m({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:A}),color:s}));t.useEffect(()=>{_((0,Ce.rX)(),{captureDraggingState:!1})},[_,o]);const{themeColorName:Ye}=w.value?(0,B.k)(w.value):{};return t.createElement(y.x,{ref:Qe},P&&t.createElement(ve.T,{"aria-live":"assertive"},P),x?t.createElement(Me,null):t.createElement(he.U,{size:"S",variant:"primary",onToggle:()=>{U(!C),C||$("willEditStage")},expanded:C,shadow:"tableShadow"},t.createElement(we.B,{title:f.value,togglePosition:"left",action:t.createElement(v.k,null,r&&t.createElement(H.h,{background:"transparent",icon:t.createElement(Ee.Z,null),label:m({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>W(ue(e))}),t.createElement(H.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":h,ref:Ke,label:m({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:s=>s.stopPropagation(),onKeyDown:D},t.createElement(We.Z,null)))}),t.createElement(Se.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(ye.r,{gap:4},t.createElement(K.P,{col:6},t.createElement(ke.o,{...f,id:f.name,label:m({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:j.error??!1,onChange:s=>{f.onChange(s),W(G(e,{name:s.target.value}))},required:!0})),t.createElement(K.P,{col:6},t.createElement(Q.q4,{error:T?.error??!1,id:w.name,required:!0,label:m({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:s=>{w.onChange({target:{value:s}}),W(G(e,{color:s}))},value:w.value.toUpperCase(),startIcon:t.createElement(v.k,{as:"span",height:2,background:w.value,borderColor:Ye==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},Xe.map(({value:s,label:A,color:ee})=>{const{themeColorName:Je}=(0,B.k)(ee);return t.createElement(Q.ag,{value:s,key:s,startIcon:t.createElement(v.k,{as:"span",height:2,background:ee,borderColor:Je==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},A)})))))))}X.propTypes=u().shape({id:u().number.isRequired,color:u().string.isRequired,canDelete:u().bool.isRequired,canReorder:u().bool.isRequired,stagesCount:u().number.isRequired}).isRequired;const be=(0,M.ZP)(y.x)`
  position: relative;
`,$e=(0,M.ZP)(y.x)`
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
`;function N({stages:e}){const{formatMessage:o}=(0,L.Z)(),r=(0,I.I0)(),{trackUsage:g}=(0,p.rS)();return t.createElement(v.k,{direction:"column",gap:6,width:"100%"},t.createElement(be,{spacing:4,width:"100%"},t.createElement($e,{background:"neutral200",height:"100%",width:2,zIndex:1}),t.createElement(v.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},e.map((i,l)=>{const n=i?.id??i.__temp_key__;return t.createElement(y.x,{key:`stage-${n}`,as:"li"},t.createElement(X,{id:n,index:l,canDelete:e.length>1,isOpen:!i.id,canReorder:e.length>1,stagesCount:e.length}))}))),t.createElement(v.k,{direction:"column",gap:6},t.createElement(V,{type:"button",onClick:()=>{r(ge({name:""})),g("willCreateStage")}},o({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"}))))}N.defaultProps={stages:[]},N.propTypes={stages:u().arrayOf(u().shape({id:u().number,__temp_key__:u().number,name:u().string.isRequired}))};var Y=a(18172),Te=a(18446),xe=a.n(Te);const J={status:"loading",serverState:{currentWorkflow:null,workflows:[]},clientState:{currentWorkflow:{data:null,isDirty:!1,hasDeletedServerStages:!1}}};function Ae(e=J,o){return(0,Y.Uy)(e,r=>{const{payload:g}=o;switch(o.type){case d.QM:{const{status:i,workflows:l}=g;if(r.status=i,l?.length>0){let n=l[0];n={...n,stages:n.stages.map(c=>({...c,color:c?.color??d.FT}))},r.serverState.workflows=l,r.serverState.currentWorkflow=n,r.clientState.currentWorkflow.data=n,r.clientState.currentWorkflow.hasDeletedServerStages=!1}break}case d.x4:{const{stageId:i}=g,{currentWorkflow:l}=e.clientState;r.clientState.currentWorkflow.data.stages=l.data.stages.filter(n=>(n?.id??n.__temp_key__)!==i),l.hasDeletedServerStages||(r.clientState.currentWorkflow.hasDeletedServerStages=!!e.serverState.currentWorkflow.stages.find(n=>n.id===i));break}case d.Ot:{const{currentWorkflow:i}=e.clientState;i.data||(r.clientState.currentWorkflow.data={stages:[]});const l=Ze(r.clientState.currentWorkflow.data.stages);r.clientState.currentWorkflow.data.stages.push({...g,color:g?.color??d.FT,__temp_key__:l});break}case d.Nj:{const{currentWorkflow:i}=e.clientState,{stageId:l,...n}=g;r.clientState.currentWorkflow.data.stages=i.data.stages.map(c=>(c.id??c.__temp_key__)===l?{...c,...n}:c);break}case d.$k:{const{currentWorkflow:{data:{stages:i}}}=e.clientState,{newIndex:l,oldIndex:n}=g;if(l>=0&&l<i.length){const c=i[n];let S=[...i];S.splice(n,1),S.splice(l,0,c),r.clientState.currentWorkflow.data.stages=S}break}default:break}e.clientState.currentWorkflow.data&&(r.clientState.currentWorkflow.isDirty=!xe()((0,Y.Vk)(r.clientState.currentWorkflow).data,r.serverState.currentWorkflow))})}const Ze=(e=[])=>{const o=e.map(r=>r.id??r.__temp_key__);return Math.max(...o,-1)+1};function Pe(e,o){const r=(0,I.oR)();(0,t.useEffect)(()=>{r.injectReducer(e,o)},[r,e,o])}var Le=a(53752),b=a(87561);function Oe({formatMessage:e}){return b.Ry({stages:b.IX().of(b.Ry().shape({name:b.Z_().required(e({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,e({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})),color:b.Z_().required(e({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)}))})}var Be=a(87751),Ne=a(12645);const Fe=(0,M.ZP)(v.k)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`;function q({name:e}){return t.createElement(v.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,p.Q1)(300)},t.createElement(Fe,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(Ne.Z,{width:`${8/16}rem`})),t.createElement(Z.Z,{fontWeight:"bold"},e))}q.propTypes={name:u().string.isRequired};var Ue=a(27887);function je({type:e,item:o}){switch(e){case d.uL.STAGE:return t.createElement(q,{...o});default:return null}}function ze(){const{trackUsage:e}=(0,p.rS)(),{formatMessage:o}=(0,L.Z)(),r=(0,I.I0)(),{put:g}=(0,p.kY)(),{formatAPIError:i}=(0,p.So)(),l=(0,p.lm)(),{workflows:n,status:c,refetch:S}=(0,Le.n)(),{status:F,clientState:{currentWorkflow:{data:k,isDirty:P,hasDeletedServerStages:E}}}=(0,I.v9)(h=>h?.[d.sN]??J),[m,$]=(0,t.useState)(!1),{mutateAsync:W,isLoading:C}=(0,te.useMutation)(async({workflowId:h,stages:x})=>{const{data:{data:D}}=await g(`/admin/review-workflows/workflows/${h}/stages`,{data:x});return D},{onSuccess(){l({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),U=async(h,x)=>{try{return await W({workflowId:h,stages:x})}catch(D){return l({type:"warning",message:i(D)}),null}},f=async()=>{await U(k.id,k.stages),await S(),$(!1)},j=async()=>{await f()},w=()=>{$(h=>!h)},T=(0,R.TA)({enableReinitialize:!0,initialValues:k,async onSubmit(){E?$(!0):f()},validationSchema:Oe({formatMessage:o}),validateOnChange:!1});return Pe(d.sN,Ae),(0,t.useEffect)(()=>{r(ce({status:c,data:n}))},[c,n,r]),(0,t.useEffect)(()=>{e("didViewWorkflow")},[]),t.createElement(p.O4,{permissions:Be.Z.settings["review-workflows"].main},t.createElement(ae.A,null,t.createElement(p.SL,{name:o({id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"})}),t.createElement(oe.o,{tabIndex:-1},t.createElement(Ue.r,{renderItem:je}),t.createElement(R.Hy,{value:T},t.createElement(R.l0,{onSubmit:T.handleSubmit},t.createElement(re.T,{primaryAction:t.createElement(ne.z,{startIcon:t.createElement(ie.Z,null),type:"submit",size:"M",disabled:!P,loading:!m&&C},o({id:"global.save",defaultMessage:"Save"})),title:o({id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"}),subtitle:o({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:k?.stages?.length??0})}),t.createElement(se.D,null,F==="loading"&&t.createElement(le.a,null,o({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})),t.createElement(N,{stages:T.values?.stages})))),t.createElement(p.QH,{bodyText:{id:"Settings.review-workflows.page.delete.confirm.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage. Are you sure you want to save?"},isConfirmButtonLoading:C,isOpen:m,onToggleDialog:w,onConfirm:j}))))}const Ge=ze}}]);
