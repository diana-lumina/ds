import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-BPJdu4Wu.js";import{C as i,a,n as o,p as s,r as c,z as l}from"./icons-BZJDXWBE.js";import{n as u,t as d}from"./utils-D8qMR3V9.js";import{t as f}from"./link-DDB-9UZa.js";import{t as p}from"./link-5FBYBaaT.js";import{t as m}from"./icon-button-CTJJNoN6.js";import{t as h}from"./icon-button-JnYd8Xz1.js";var g,_,v,y,b,x,S,C=e((()=>{g=`_root_x0g7y_1`,_=`_icon_x0g7y_31`,v=`_copy_x0g7y_59`,y=`_title_x0g7y_75`,b=`_message_x0g7y_97`,x=`_link_x0g7y_121`,S={root:g,icon:_,copy:v,title:y,message:b,link:x}}));function w({intent:e=`info`,icon:t,title:n,message:r,link:i,onDismiss:a,dismissLabel:o=`Cerrar`,className:s,...c}){let u=T.useId(),f=T.useId();return(0,E.jsxs)(`div`,{"data-slot":`toast`,"data-intent":e,role:e===`danger`||e===`warning`?`alert`:`status`,"aria-labelledby":u,"aria-describedby":f,className:d(S.root,s),...c,children:[t?(0,E.jsx)(`span`,{className:S.icon,"aria-hidden":`true`,children:t}):null,(0,E.jsxs)(`div`,{className:S.copy,children:[(0,E.jsx)(`p`,{id:u,className:S.title,children:n}),(0,E.jsx)(`p`,{id:f,className:S.message,children:r}),i?(0,E.jsx)(`div`,{className:S.link,children:i}):null]}),(0,E.jsx)(m,{hierarchy:`tertiary`,size:`sm`,icon:(0,E.jsx)(l,{}),"aria-label":o,onClick:a})]})}var T,E,D=e((()=>{T=t(r(),1),o(),u(),h(),C(),E=n(),w.__docgenInfo={description:``,methods:[],displayName:`Toast`,props:{intent:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},title:{required:!0,tsType:{name:`string`},description:``},message:{required:!0,tsType:{name:`string`},description:``},link:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Link opcional (instancia de Link).`},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},dismissLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Cerrar'`,computed:!1}}},composes:[`Omit`]}})),O,k,A,j,M,N,P,F,I,L,R;e((()=>{o(),p(),D(),O=n(),k={title:`Components/Feedback/Toast`,component:w,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Notificación flotante con tokens de Alert, elevation 2 y dismiss (IconButton tertiary sm). Link opcional.`}}},argTypes:{intent:{control:`radio`,options:[`info`,`success`,`warning`,`danger`],table:{defaultValue:{summary:`info`}}},title:{control:`text`},message:{control:`text`},icon:{control:!1},link:{control:!1},onDismiss:{control:!1},className:{control:!1,table:{disable:!0}}}},A={docs:{canvas:{sourceState:`none`}}},j={args:{intent:`success`,title:`Cambios guardados`,message:`Tu información se actualizó correctamente.`},render:e=>(0,O.jsx)(w,{...e,icon:(0,O.jsx)(i,{})})},M={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Toast
  intent="info"
  title="Nueva actualización"
  message="Hay una versión disponible del expediente."
  icon={<InfoIcon />}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`info`,title:`Nueva actualización`,message:`Hay una versión disponible del expediente.`,icon:(0,O.jsx)(s,{})})},N={render:()=>(0,O.jsx)(w,{intent:`success`,title:`Cambios guardados`,message:`Tu información se actualizó correctamente.`,icon:(0,O.jsx)(i,{})})},P={render:()=>(0,O.jsx)(w,{intent:`warning`,title:`Sesión por expirar`,message:`Guarda tu progreso para no perder los cambios.`,icon:(0,O.jsx)(a,{})})},F={render:()=>(0,O.jsx)(w,{intent:`danger`,title:`No se pudo enviar`,message:`Ocurrió un error al procesar la solicitud.`,icon:(0,O.jsx)(c,{})})},I={name:`With link`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Toast
  intent="success"
  title="Cambios guardados"
  message="Tu información se actualizó correctamente."
  icon={<CheckCircleIcon />}
  link={<Link href="/detalle" label="Ver detalle" />}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`success`,title:`Cambios guardados`,message:`Tu información se actualizó correctamente.`,icon:(0,O.jsx)(i,{}),link:(0,O.jsx)(f,{href:`/detalle`,label:`Ver detalle`})})},L={name:`Intents`,parameters:A,render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,O.jsx)(w,{intent:`info`,title:`Nueva actualización`,message:`Hay una versión disponible del expediente.`,icon:(0,O.jsx)(s,{})}),(0,O.jsx)(w,{intent:`success`,title:`Cambios guardados`,message:`Tu información se actualizó correctamente.`,icon:(0,O.jsx)(i,{})}),(0,O.jsx)(w,{intent:`warning`,title:`Sesión por expirar`,message:`Guarda tu progreso para no perder los cambios.`,icon:(0,O.jsx)(a,{})}),(0,O.jsx)(w,{intent:`danger`,title:`No se pudo enviar`,message:`Ocurrió un error al procesar la solicitud.`,icon:(0,O.jsx)(c,{})})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    intent: 'success',
    title: 'Cambios guardados',
    message: 'Tu información se actualizó correctamente.'
  },
  render: args => <Toast {...args} icon={<CheckCircleIcon />} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Toast
  intent="info"
  title="Nueva actualización"
  message="Hay una versión disponible del expediente."
  icon={<InfoIcon />}
/>\`
      }
    }
  },
  render: () => <Toast intent="info" title="Nueva actualización" message="Hay una versión disponible del expediente." icon={<InfoIcon />} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Toast intent="success" title="Cambios guardados" message="Tu información se actualizó correctamente." icon={<CheckCircleIcon />} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Toast intent="warning" title="Sesión por expirar" message="Guarda tu progreso para no perder los cambios." icon={<WarningIcon />} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Toast intent="danger" title="No se pudo enviar" message="Ocurrió un error al procesar la solicitud." icon={<XCircleIcon />} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'With link',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Toast
  intent="success"
  title="Cambios guardados"
  message="Tu información se actualizó correctamente."
  icon={<CheckCircleIcon />}
  link={<Link href="/detalle" label="Ver detalle" />}
/>\`
      }
    }
  },
  render: () => <Toast intent="success" title="Cambios guardados" message="Tu información se actualizó correctamente." icon={<CheckCircleIcon />} link={<Link href="/detalle" label="Ver detalle" />} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Intents',
  parameters: hideCode,
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <Toast intent="info" title="Nueva actualización" message="Hay una versión disponible del expediente." icon={<InfoIcon />} />\r
      <Toast intent="success" title="Cambios guardados" message="Tu información se actualizó correctamente." icon={<CheckCircleIcon />} />\r
      <Toast intent="warning" title="Sesión por expirar" message="Guarda tu progreso para no perder los cambios." icon={<WarningIcon />} />\r
      <Toast intent="danger" title="No se pudo enviar" message="Ocurrió un error al procesar la solicitud." icon={<XCircleIcon />} />\r
    </div>
}`,...L.parameters?.docs?.source}}},R=[`Playground`,`Info`,`Success`,`Warning`,`Danger`,`WithLink`,`AllIntents`]}))();export{L as AllIntents,F as Danger,M as Info,j as Playground,N as Success,P as Warning,I as WithLink,R as __namedExportsOrder,k as default};