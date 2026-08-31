import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{C as i,U as a,a as o,n as s,pt as c,s as l}from"./icons-QF8wPxMP.js";import{n as u,t as d}from"./utils-D8qMR3V9.js";import{t as f}from"./icon-button-Bh3oQobN.js";import{t as p}from"./icon-button-BHD88BXq.js";import{t as m}from"./link-FGzsKBcD.js";import{t as h}from"./link-DEbw8tAa.js";var g,_,v,y,b,x,S,C=e((()=>{g=`_root_1ekuf_1`,_=`_icon_1ekuf_27`,v=`_copy_1ekuf_55`,y=`_title_1ekuf_71`,b=`_message_1ekuf_93`,x=`_link_1ekuf_117`,S={root:g,icon:_,copy:v,title:y,message:b,link:x}}));function w({intent:e=`info`,icon:t,title:n,message:r,link:i,onDismiss:a,dismissLabel:o=`Cerrar`,className:s,...l}){let u=T.useId(),p=T.useId();return(0,E.jsxs)(`div`,{"data-slot":`banner`,"data-intent":e,role:e===`danger`||e===`warning`?`alert`:`status`,"aria-labelledby":u,"aria-describedby":p,className:d(S.root,s),...l,children:[t?(0,E.jsx)(`span`,{className:S.icon,"aria-hidden":`true`,children:t}):null,(0,E.jsxs)(`div`,{className:S.copy,children:[(0,E.jsx)(`p`,{id:u,className:S.title,children:n}),(0,E.jsx)(`p`,{id:p,className:S.message,children:r}),i?(0,E.jsx)(`div`,{className:S.link,children:i}):null]}),a?(0,E.jsx)(f,{hierarchy:`tertiary`,size:`sm`,icon:(0,E.jsx)(c,{}),"aria-label":o,onClick:a}):null]})}var T,E,D=e((()=>{T=t(r(),1),s(),u(),p(),C(),E=n(),w.__docgenInfo={description:``,methods:[],displayName:`Banner`,props:{intent:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},title:{required:!0,tsType:{name:`string`},description:``},message:{required:!0,tsType:{name:`string`},description:``},link:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Link opcional (instancia de Link).`},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Muestra IconButton tertiary sm a la derecha.`},dismissLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Cerrar'`,computed:!1}}},composes:[`Omit`]}})),O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{s(),h(),D(),O=n(),k={title:`Components/Feedback/Banner`,component:w,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Banner de página con intents de Alert. Puede incluir Link y un IconButton tertiary sm para cerrar.`}}},argTypes:{intent:{control:`radio`,options:[`info`,`success`,`warning`,`danger`],table:{defaultValue:{summary:`info`}}},title:{control:`text`},message:{control:`text`},icon:{control:!1},link:{control:!1},onDismiss:{control:!1},className:{control:!1,table:{disable:!0}}}},A={docs:{canvas:{sourceState:`none`}}},j={args:{intent:`info`,title:`Mantenimiento programado`,message:`El servicio se reanudará el martes a las 18:00.`},render:e=>(0,O.jsx)(w,{...e,icon:(0,O.jsx)(i,{})})},M={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Banner
  intent="info"
  title="Mantenimiento programado"
  message="El servicio se reanudará el martes a las 18:00."
  icon={<InfoIcon />}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`info`,title:`Mantenimiento programado`,message:`El servicio se reanudará el martes a las 18:00.`,icon:(0,O.jsx)(i,{})})},N={render:()=>(0,O.jsx)(w,{intent:`success`,title:`Cambios publicados`,message:`Tu información ya está visible en el portal.`,icon:(0,O.jsx)(a,{})})},P={render:()=>(0,O.jsx)(w,{intent:`warning`,title:`Acción requerida`,message:`Hay documentos pendientes por cargar en tu solicitud.`,icon:(0,O.jsx)(l,{})})},F={render:()=>(0,O.jsx)(w,{intent:`danger`,title:`Servicio interrumpido`,message:`No pudimos completar la operación. Inténtalo más tarde.`,icon:(0,O.jsx)(o,{})})},I={name:`With link`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Banner
  intent="info"
  title="Mantenimiento programado"
  message="El servicio se reanudará el martes a las 18:00."
  icon={<InfoIcon />}
  link={<Link href="/estatus" label="Ver estatus" />}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`info`,title:`Mantenimiento programado`,message:`El servicio se reanudará el martes a las 18:00.`,icon:(0,O.jsx)(i,{}),link:(0,O.jsx)(m,{href:`/estatus`,label:`Ver estatus`})})},L={name:`With dismiss`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Banner
  intent="info"
  title="Mantenimiento programado"
  message="El servicio se reanudará el martes a las 18:00."
  icon={<InfoIcon />}
  onDismiss={() => {}}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`info`,title:`Mantenimiento programado`,message:`El servicio se reanudará el martes a las 18:00.`,icon:(0,O.jsx)(i,{}),onDismiss:()=>{}})},R={name:`Intents`,parameters:A,render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,O.jsx)(w,{intent:`info`,title:`Mantenimiento programado`,message:`El servicio se reanudará el martes a las 18:00.`,icon:(0,O.jsx)(i,{})}),(0,O.jsx)(w,{intent:`success`,title:`Cambios publicados`,message:`Tu información ya está visible en el portal.`,icon:(0,O.jsx)(a,{})}),(0,O.jsx)(w,{intent:`warning`,title:`Acción requerida`,message:`Hay documentos pendientes por cargar en tu solicitud.`,icon:(0,O.jsx)(l,{})}),(0,O.jsx)(w,{intent:`danger`,title:`Servicio interrumpido`,message:`No pudimos completar la operación. Inténtalo más tarde.`,icon:(0,O.jsx)(o,{})})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    intent: 'info',
    title: 'Mantenimiento programado',
    message: 'El servicio se reanudará el martes a las 18:00.'
  },
  render: args => <Banner {...args} icon={<InfoIcon />} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Banner
  intent="info"
  title="Mantenimiento programado"
  message="El servicio se reanudará el martes a las 18:00."
  icon={<InfoIcon />}
/>\`
      }
    }
  },
  render: () => <Banner intent="info" title="Mantenimiento programado" message="El servicio se reanudará el martes a las 18:00." icon={<InfoIcon />} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Banner intent="success" title="Cambios publicados" message="Tu información ya está visible en el portal." icon={<CheckCircleIcon />} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Banner intent="warning" title="Acción requerida" message="Hay documentos pendientes por cargar en tu solicitud." icon={<WarningIcon />} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Banner intent="danger" title="Servicio interrumpido" message="No pudimos completar la operación. Inténtalo más tarde." icon={<XCircleIcon />} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'With link',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Banner
  intent="info"
  title="Mantenimiento programado"
  message="El servicio se reanudará el martes a las 18:00."
  icon={<InfoIcon />}
  link={<Link href="/estatus" label="Ver estatus" />}
/>\`
      }
    }
  },
  render: () => <Banner intent="info" title="Mantenimiento programado" message="El servicio se reanudará el martes a las 18:00." icon={<InfoIcon />} link={<Link href="/estatus" label="Ver estatus" />} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'With dismiss',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Banner
  intent="info"
  title="Mantenimiento programado"
  message="El servicio se reanudará el martes a las 18:00."
  icon={<InfoIcon />}
  onDismiss={() => {}}
/>\`
      }
    }
  },
  render: () => <Banner intent="info" title="Mantenimiento programado" message="El servicio se reanudará el martes a las 18:00." icon={<InfoIcon />} onDismiss={() => {}} />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Intents',
  parameters: hideCode,
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <Banner intent="info" title="Mantenimiento programado" message="El servicio se reanudará el martes a las 18:00." icon={<InfoIcon />} />\r
      <Banner intent="success" title="Cambios publicados" message="Tu información ya está visible en el portal." icon={<CheckCircleIcon />} />\r
      <Banner intent="warning" title="Acción requerida" message="Hay documentos pendientes por cargar en tu solicitud." icon={<WarningIcon />} />\r
      <Banner intent="danger" title="Servicio interrumpido" message="No pudimos completar la operación. Inténtalo más tarde." icon={<XCircleIcon />} />\r
    </div>
}`,...R.parameters?.docs?.source}}},z=[`Playground`,`Info`,`Success`,`Warning`,`Danger`,`WithLink`,`WithDismiss`,`AllIntents`]}))();export{R as AllIntents,F as Danger,M as Info,j as Playground,N as Success,P as Warning,L as WithDismiss,I as WithLink,z as __namedExportsOrder,k as default};