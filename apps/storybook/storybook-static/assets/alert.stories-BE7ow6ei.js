import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-BPJdu4Wu.js";import{C as i,a,n as o,p as s,r as c,z as l}from"./icons-BZJDXWBE.js";import{n as u,t as d}from"./utils-D8qMR3V9.js";import{t as f}from"./link-DDB-9UZa.js";import{t as p}from"./link-5FBYBaaT.js";import{t as m}from"./icon-button-CTJJNoN6.js";import{t as h}from"./icon-button-JnYd8Xz1.js";var g,_,v,y,b,x,S,C=e((()=>{g=`_root_c3tp9_1`,_=`_icon_c3tp9_29`,v=`_copy_c3tp9_57`,y=`_title_c3tp9_73`,b=`_message_c3tp9_95`,x=`_link_c3tp9_119`,S={root:g,icon:_,copy:v,title:y,message:b,link:x}}));function w({intent:e=`info`,icon:t,title:n,message:r,link:i,onDismiss:a,dismissLabel:o=`Cerrar`,className:s,...c}){let u=T.useId(),f=T.useId();return(0,E.jsxs)(`div`,{"data-slot":`alert`,"data-intent":e,role:e===`danger`||e===`warning`?`alert`:`status`,"aria-labelledby":u,"aria-describedby":f,className:d(S.root,s),...c,children:[t?(0,E.jsx)(`span`,{className:S.icon,"aria-hidden":`true`,children:t}):null,(0,E.jsxs)(`div`,{className:S.copy,children:[(0,E.jsx)(`p`,{id:u,className:S.title,children:n}),(0,E.jsx)(`p`,{id:f,className:S.message,children:r}),i?(0,E.jsx)(`div`,{className:S.link,children:i}):null]}),a?(0,E.jsx)(m,{hierarchy:`tertiary`,size:`sm`,icon:(0,E.jsx)(l,{}),"aria-label":o,onClick:a}):null]})}var T,E,D=e((()=>{T=t(r(),1),o(),u(),h(),C(),E=n(),w.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{intent:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},title:{required:!0,tsType:{name:`string`},description:``},message:{required:!0,tsType:{name:`string`},description:``},link:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Link opcional (instancia de Link).`},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Muestra IconButton tertiary sm a la derecha.`},dismissLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Cerrar'`,computed:!1}}},composes:[`Omit`]}})),O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{o(),p(),D(),O=n(),k={title:`Components/Feedback/Alert`,component:w,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Mensaje contextual con intent info, success, warning o danger. Link y dismiss (IconButton tertiary sm) son opcionales.`}}},argTypes:{intent:{control:`radio`,options:[`info`,`success`,`warning`,`danger`],description:`info · success · warning · danger`,table:{defaultValue:{summary:`info`}}},title:{control:`text`},message:{control:`text`},icon:{control:!1},link:{control:!1},onDismiss:{control:!1},className:{control:!1,table:{disable:!0}}}},A={docs:{canvas:{sourceState:`none`}}},j={args:{intent:`info`,title:`Información importante`,message:`Revisa los datos de tu expediente antes de continuar.`},render:e=>(0,O.jsx)(w,{...e,icon:(0,O.jsx)(s,{})})},M={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Alert
  intent="info"
  title="Información importante"
  message="Revisa los datos de tu expediente antes de continuar."
  icon={<InfoIcon />}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`info`,title:`Información importante`,message:`Revisa los datos de tu expediente antes de continuar.`,icon:(0,O.jsx)(s,{})})},N={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Alert
  intent="success"
  title="Cambios guardados"
  message="Tu información se actualizó correctamente."
  icon={<CheckCircleIcon />}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`success`,title:`Cambios guardados`,message:`Tu información se actualizó correctamente.`,icon:(0,O.jsx)(i,{})})},P={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Alert
  intent="warning"
  title="Acción requerida"
  message="Hay documentos pendientes por cargar en tu solicitud."
  icon={<WarningIcon />}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`warning`,title:`Acción requerida`,message:`Hay documentos pendientes por cargar en tu solicitud.`,icon:(0,O.jsx)(a,{})})},F={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Alert
  intent="danger"
  title="No se pudo completar"
  message="Ocurrió un error al enviar la solicitud. Inténtalo de nuevo."
  icon={<XCircleIcon />}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`danger`,title:`No se pudo completar`,message:`Ocurrió un error al enviar la solicitud. Inténtalo de nuevo.`,icon:(0,O.jsx)(c,{})})},I={name:`With link`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Alert
  intent="info"
  title="Información importante"
  message="Revisa los datos de tu expediente antes de continuar."
  icon={<InfoIcon />}
  link={<Link href="/expediente" label="Ver expediente" />}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`info`,title:`Información importante`,message:`Revisa los datos de tu expediente antes de continuar.`,icon:(0,O.jsx)(s,{}),link:(0,O.jsx)(f,{href:`/expediente`,label:`Ver expediente`})})},L={name:`With dismiss`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Alert
  intent="info"
  title="Información importante"
  message="Revisa los datos de tu expediente antes de continuar."
  icon={<InfoIcon />}
  onDismiss={() => {}}
/>`}}},render:()=>(0,O.jsx)(w,{intent:`info`,title:`Información importante`,message:`Revisa los datos de tu expediente antes de continuar.`,icon:(0,O.jsx)(s,{}),onDismiss:()=>{}})},R={name:`Intents`,parameters:A,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={verticalAlign:`top`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`};return(0,O.jsx)(`div`,{style:{padding:8},children:(0,O.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,O.jsx)(`thead`,{children:(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`th`,{style:{...e,paddingLeft:0},children:`Intent`}),(0,O.jsx)(`th`,{style:e,children:`Alert`})]})}),(0,O.jsxs)(`tbody`,{children:[(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{style:t,children:`info`}),(0,O.jsx)(`td`,{style:n,children:(0,O.jsx)(w,{intent:`info`,title:`Información importante`,message:`Revisa los datos de tu expediente antes de continuar.`,icon:(0,O.jsx)(s,{})})})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{style:t,children:`success`}),(0,O.jsx)(`td`,{style:n,children:(0,O.jsx)(w,{intent:`success`,title:`Cambios guardados`,message:`Tu información se actualizó correctamente.`,icon:(0,O.jsx)(i,{})})})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{style:t,children:`warning`}),(0,O.jsx)(`td`,{style:n,children:(0,O.jsx)(w,{intent:`warning`,title:`Acción requerida`,message:`Hay documentos pendientes por cargar en tu solicitud.`,icon:(0,O.jsx)(a,{})})})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{style:t,children:`danger`}),(0,O.jsx)(`td`,{style:n,children:(0,O.jsx)(w,{intent:`danger`,title:`No se pudo completar`,message:`Ocurrió un error al enviar la solicitud. Inténtalo de nuevo.`,icon:(0,O.jsx)(c,{})})})]})]})]})})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    intent: 'info',
    title: 'Información importante',
    message: 'Revisa los datos de tu expediente antes de continuar.'
  },
  render: args => <Alert {...args} icon={<InfoIcon />} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Alert
  intent="info"
  title="Información importante"
  message="Revisa los datos de tu expediente antes de continuar."
  icon={<InfoIcon />}
/>\`
      }
    }
  },
  render: () => <Alert intent="info" title="Información importante" message="Revisa los datos de tu expediente antes de continuar." icon={<InfoIcon />} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Alert
  intent="success"
  title="Cambios guardados"
  message="Tu información se actualizó correctamente."
  icon={<CheckCircleIcon />}
/>\`
      }
    }
  },
  render: () => <Alert intent="success" title="Cambios guardados" message="Tu información se actualizó correctamente." icon={<CheckCircleIcon />} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Alert
  intent="warning"
  title="Acción requerida"
  message="Hay documentos pendientes por cargar en tu solicitud."
  icon={<WarningIcon />}
/>\`
      }
    }
  },
  render: () => <Alert intent="warning" title="Acción requerida" message="Hay documentos pendientes por cargar en tu solicitud." icon={<WarningIcon />} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Alert
  intent="danger"
  title="No se pudo completar"
  message="Ocurrió un error al enviar la solicitud. Inténtalo de nuevo."
  icon={<XCircleIcon />}
/>\`
      }
    }
  },
  render: () => <Alert intent="danger" title="No se pudo completar" message="Ocurrió un error al enviar la solicitud. Inténtalo de nuevo." icon={<XCircleIcon />} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'With link',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Alert
  intent="info"
  title="Información importante"
  message="Revisa los datos de tu expediente antes de continuar."
  icon={<InfoIcon />}
  link={<Link href="/expediente" label="Ver expediente" />}
/>\`
      }
    }
  },
  render: () => <Alert intent="info" title="Información importante" message="Revisa los datos de tu expediente antes de continuar." icon={<InfoIcon />} link={<Link href="/expediente" label="Ver expediente" />} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'With dismiss',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Alert
  intent="info"
  title="Información importante"
  message="Revisa los datos de tu expediente antes de continuar."
  icon={<InfoIcon />}
  onDismiss={() => {}}
/>\`
      }
    }
  },
  render: () => <Alert intent="info" title="Información importante" message="Revisa los datos de tu expediente antes de continuar." icon={<InfoIcon />} onDismiss={() => {}} />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Intents',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      padding: '0 16px 12px',
      borderBottom: '1px solid #eee'
    };
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'top',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap'
    };
    const td: React.CSSProperties = {
      verticalAlign: 'top',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0'
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              paddingLeft: 0
            }}>Intent</th>\r
              <th style={th}>Alert</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>info</td>\r
              <td style={td}>\r
                <Alert intent="info" title="Información importante" message="Revisa los datos de tu expediente antes de continuar." icon={<InfoIcon />} />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>success</td>\r
              <td style={td}>\r
                <Alert intent="success" title="Cambios guardados" message="Tu información se actualizó correctamente." icon={<CheckCircleIcon />} />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>warning</td>\r
              <td style={td}>\r
                <Alert intent="warning" title="Acción requerida" message="Hay documentos pendientes por cargar en tu solicitud." icon={<WarningIcon />} />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>danger</td>\r
              <td style={td}>\r
                <Alert intent="danger" title="No se pudo completar" message="Ocurrió un error al enviar la solicitud. Inténtalo de nuevo." icon={<XCircleIcon />} />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...R.parameters?.docs?.source}}},z=[`Playground`,`Info`,`Success`,`Warning`,`Danger`,`WithLink`,`WithDismiss`,`AllIntents`]}))();export{R as AllIntents,F as Danger,M as Info,j as Playground,N as Success,P as Warning,L as WithDismiss,I as WithLink,z as __namedExportsOrder,k as default};