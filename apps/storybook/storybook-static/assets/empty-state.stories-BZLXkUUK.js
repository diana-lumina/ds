import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{U as i,k as a,l as o,n as s}from"./icons-QF8wPxMP.js";import{n as c,t as l}from"./utils-D8qMR3V9.js";import{t as u}from"./button-Pbm51Wt4.js";import{t as d}from"./button-CVm1xnLo.js";var f,p,m,h,g,_,v,y=e((()=>{f=`_root_thewl_1`,p=`_visual_thewl_25`,m=`_copy_thewl_55`,h=`_title_thewl_69`,g=`_message_thewl_93`,_=`_action_thewl_117`,v={root:f,visual:p,copy:m,title:h,message:g,action:_}}));function b({type:e=`empty`,icon:t,title:n,message:r,action:i,className:a,...o}){let s=x.useId(),c=x.useId();return(0,S.jsxs)(`div`,{"data-slot":`empty-state`,"data-type":e,role:e===`error`?`alert`:e===`success`?`status`:void 0,"aria-labelledby":s,"aria-describedby":c,className:l(v.root,a),...o,children:[t?(0,S.jsx)(`span`,{className:v.visual,"aria-hidden":`true`,children:t}):null,(0,S.jsxs)(`div`,{className:v.copy,children:[(0,S.jsx)(`p`,{id:s,className:v.title,children:n}),(0,S.jsx)(`p`,{id:c,className:v.message,children:r})]}),i?(0,S.jsx)(`div`,{className:v.action,children:i}):null]})}var x,S,C=e((()=>{x=t(r(),1),c(),y(),S=n(),b.__docgenInfo={description:``,methods:[],displayName:`EmptyState`,props:{type:{required:!1,tsType:{name:`union`,raw:`'empty' | 'error' | 'success'`,elements:[{name:`literal`,value:`'empty'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'success'`}]},description:`empty · error · success`,defaultValue:{value:`'empty'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Visual de 32px (instance swap).`},title:{required:!0,tsType:{name:`string`},description:`Título (Semantic/Label/Medium/Strong).`},message:{required:!0,tsType:{name:`string`},description:`Supporting message (Semantic/Label/Medium).`},action:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Acción primaria opcional (Button hierarchy="primary").`}},composes:[`Omit`]}})),w,T,E,D,O,k,A,j,M,N;e((()=>{s(),d(),C(),w=n(),T={title:`Components/Feedback/EmptyState`,component:b,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Estado vacío, de error o de éxito: visual, título, supporting message y acción primaria opcional.`}}},argTypes:{type:{control:`radio`,options:[`empty`,`error`,`success`],description:`empty · error · success`,table:{defaultValue:{summary:`empty`}}},title:{control:`text`},message:{control:`text`},icon:{control:!1},action:{control:!1},className:{control:!1,table:{disable:!0}}}},E={docs:{canvas:{sourceState:`none`}}},D={args:{type:`empty`,title:`Sin resultados`,message:`Intenta con otra búsqueda o limpia los filtros.`},render:e=>(0,w.jsx)(b,{...e,icon:(0,w.jsx)(a,{})})},O={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<EmptyState
  type="empty"
  title="Sin resultados"
  message="Intenta con otra búsqueda o limpia los filtros."
  icon={<FolderSimpleIcon />}
/>`}}},render:()=>(0,w.jsx)(b,{type:`empty`,title:`Sin resultados`,message:`Intenta con otra búsqueda o limpia los filtros.`,icon:(0,w.jsx)(a,{})})},k={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<EmptyState
  type="error"
  title="No se pudo cargar"
  message="Ocurrió un problema al obtener la información. Inténtalo de nuevo."
  icon={<WarningCircleIcon />}
/>`}}},render:()=>(0,w.jsx)(b,{type:`error`,title:`No se pudo cargar`,message:`Ocurrió un problema al obtener la información. Inténtalo de nuevo.`,icon:(0,w.jsx)(o,{})})},A={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<EmptyState
  type="success"
  title="Solicitud enviada"
  message="Recibirás una confirmación cuando el proceso termine."
  icon={<CheckCircleIcon />}
/>`}}},render:()=>(0,w.jsx)(b,{type:`success`,title:`Solicitud enviada`,message:`Recibirás una confirmación cuando el proceso termine.`,icon:(0,w.jsx)(i,{})})},j={name:`With action`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<EmptyState
  type="empty"
  title="Sin resultados"
  message="Intenta con otra búsqueda o limpia los filtros."
  icon={<FolderSimpleIcon />}
  action={<Button hierarchy="primary" label="Nueva búsqueda" />}
/>`}}},render:()=>(0,w.jsx)(b,{type:`empty`,title:`Sin resultados`,message:`Intenta con otra búsqueda o limpia los filtros.`,icon:(0,w.jsx)(a,{}),action:(0,w.jsx)(u,{hierarchy:`primary`,size:`md`,label:`Nueva búsqueda`})})},M={name:`Types`,parameters:E,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={verticalAlign:`top`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`};return(0,w.jsx)(`div`,{style:{padding:8},children:(0,w.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{style:{...e,paddingLeft:0},children:`Type`}),(0,w.jsx)(`th`,{style:e,children:`EmptyState`})]})}),(0,w.jsxs)(`tbody`,{children:[(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{style:t,children:`empty`}),(0,w.jsx)(`td`,{style:n,children:(0,w.jsx)(b,{type:`empty`,title:`Sin resultados`,message:`Intenta con otra búsqueda o limpia los filtros.`,icon:(0,w.jsx)(a,{})})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{style:t,children:`error`}),(0,w.jsx)(`td`,{style:n,children:(0,w.jsx)(b,{type:`error`,title:`No se pudo cargar`,message:`Ocurrió un problema al obtener la información. Inténtalo de nuevo.`,icon:(0,w.jsx)(o,{})})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{style:t,children:`success`}),(0,w.jsx)(`td`,{style:n,children:(0,w.jsx)(b,{type:`success`,title:`Solicitud enviada`,message:`Recibirás una confirmación cuando el proceso termine.`,icon:(0,w.jsx)(i,{})})})]})]})]})})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'empty',
    title: 'Sin resultados',
    message: 'Intenta con otra búsqueda o limpia los filtros.'
  },
  render: args => <EmptyState {...args} icon={<FolderSimpleIcon />} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<EmptyState
  type="empty"
  title="Sin resultados"
  message="Intenta con otra búsqueda o limpia los filtros."
  icon={<FolderSimpleIcon />}
/>\`
      }
    }
  },
  render: () => <EmptyState type="empty" title="Sin resultados" message="Intenta con otra búsqueda o limpia los filtros." icon={<FolderSimpleIcon />} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<EmptyState
  type="error"
  title="No se pudo cargar"
  message="Ocurrió un problema al obtener la información. Inténtalo de nuevo."
  icon={<WarningCircleIcon />}
/>\`
      }
    }
  },
  render: () => <EmptyState type="error" title="No se pudo cargar" message="Ocurrió un problema al obtener la información. Inténtalo de nuevo." icon={<WarningCircleIcon />} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<EmptyState
  type="success"
  title="Solicitud enviada"
  message="Recibirás una confirmación cuando el proceso termine."
  icon={<CheckCircleIcon />}
/>\`
      }
    }
  },
  render: () => <EmptyState type="success" title="Solicitud enviada" message="Recibirás una confirmación cuando el proceso termine." icon={<CheckCircleIcon />} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With action',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<EmptyState
  type="empty"
  title="Sin resultados"
  message="Intenta con otra búsqueda o limpia los filtros."
  icon={<FolderSimpleIcon />}
  action={<Button hierarchy="primary" label="Nueva búsqueda" />}
/>\`
      }
    }
  },
  render: () => <EmptyState type="empty" title="Sin resultados" message="Intenta con otra búsqueda o limpia los filtros." icon={<FolderSimpleIcon />} action={<Button hierarchy="primary" size="md" label="Nueva búsqueda" />} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Types',
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
            }}>Type</th>\r
              <th style={th}>EmptyState</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>empty</td>\r
              <td style={td}>\r
                <EmptyState type="empty" title="Sin resultados" message="Intenta con otra búsqueda o limpia los filtros." icon={<FolderSimpleIcon />} />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>error</td>\r
              <td style={td}>\r
                <EmptyState type="error" title="No se pudo cargar" message="Ocurrió un problema al obtener la información. Inténtalo de nuevo." icon={<WarningCircleIcon />} />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>success</td>\r
              <td style={td}>\r
                <EmptyState type="success" title="Solicitud enviada" message="Recibirás una confirmación cuando el proceso termine." icon={<CheckCircleIcon />} />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N=[`Playground`,`Empty`,`Error`,`Success`,`WithAction`,`AllTypes`]}))();export{M as AllTypes,O as Empty,k as Error,D as Playground,A as Success,j as WithAction,N as __namedExportsOrder,T as default};