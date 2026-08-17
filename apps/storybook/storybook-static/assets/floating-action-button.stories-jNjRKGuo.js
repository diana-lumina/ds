import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-gd-_F7EU.js";import{n as r,p as i}from"./icons-Tz8N1d49.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";import{n as s,t as c}from"./button-CKFZBOo5.js";import{n as l,t as u}from"./icon-button-stpiAinV.js";var d=e((()=>{s()})),f=e((()=>{l()})),p,m,h=e((()=>{p=`_root_17s1m_1`,m={root:p}}));function g(e){let{type:t=`standard`,icon:n,floating:r=!0,className:i,disabled:a,...s}=e,l=o(m.root,i);if(t===`extended`){let{label:e,"aria-label":t,loading:i,...o}=s;return(0,_.jsx)(c,{"data-slot":`floating-action-button`,"data-type":`extended`,"data-floating":r,type:`button`,hierarchy:`primary`,tone:`standard`,size:`lg`,leftIcon:n,label:e,disabled:a,loading:i,"aria-label":t,className:l,...o})}let{"aria-label":d,...f}=s;return(0,_.jsx)(u,{"data-slot":`floating-action-button`,"data-type":`standard`,"data-floating":r,type:`button`,size:`lg`,tone:`standard`,icon:n,disabled:a,"aria-label":d,className:l,...f})}var _,v=e((()=>{n(),a(),d(),f(),h(),_=t(),g.__docgenInfo={description:``,methods:[],displayName:`FloatingActionButton`}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{v(),r(),y=t(),b={title:`Components/Actions/FloatingActionButton`,component:g,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Acción primaria flotante y persistente de alta prominencia. Standard reutiliza Icon Button lg; Extended reutiliza Button primary lg. Speed Dial es un Pattern separado y no forma parte de la API del FAB. Contrato fijo: Size=lg · Hierarchy=primary · Tone=standard.`}}},argTypes:{type:{control:`select`,options:[`standard`,`extended`],description:`standard: icon + accessible label · extended: leading icon + label visible`,table:{defaultValue:{summary:`standard`}}},floating:{control:`boolean`,description:`Fija el FAB a la esquina inferior derecha`,table:{defaultValue:{summary:`true`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`Solo extended (vía Button). Standard no expone loading en Icon Button.`,table:{defaultValue:{summary:`false`}}},label:{control:`text`,description:`Extended: label visible. Standard: se usa como aria-label`},icon:{control:!1,table:{disable:!0}}}},x={docs:{canvas:{sourceState:`none`}}},S={args:{type:`extended`,floating:!1,disabled:!1,loading:!1,label:`Agregar`,icon:(0,y.jsx)(i,{})},render:({type:e,floating:t,disabled:n,loading:r,label:i,icon:a})=>e===`extended`?(0,y.jsx)(g,{type:`extended`,floating:t,disabled:n,loading:r,icon:a,label:i}):(0,y.jsx)(g,{type:`standard`,floating:t,disabled:n,icon:a,"aria-label":i})},C={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Standard: Icon Button lg anidado. Requiere Accessible label (aria-label).`},source:{code:`<FloatingActionButton
  type="standard"
  floating={false}
  icon={<ChatCircleIcon />}
  aria-label="Agregar"
/>`}}},render:()=>(0,y.jsx)(g,{type:`standard`,floating:!1,icon:(0,y.jsx)(i,{}),"aria-label":`Agregar`})},w={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Extended: Button primary lg anidado. El label visible es la fuente preferida del nombre accesible.`},source:{code:`<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
/>`}}},render:()=>(0,y.jsx)(g,{type:`extended`,floating:!1,icon:(0,y.jsx)(i,{}),label:`Agregar`})},T={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
  disabled
/>`}}},render:()=>(0,y.jsx)(g,{type:`extended`,floating:!1,icon:(0,y.jsx)(i,{}),label:`Agregar`,disabled:!0})},E={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Loading aplica al contrato extended (Button).`},source:{code:`<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
  loading
/>`}}},render:()=>(0,y.jsx)(g,{type:`extended`,floating:!1,icon:(0,y.jsx)(i,{}),label:`Agregar`,loading:!0})},D={name:`Type & states`,parameters:x,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,y.jsx)(`div`,{style:{padding:8},children:(0,y.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Type`}),(0,y.jsx)(`th`,{style:e,children:`Default`}),(0,y.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,y.jsxs)(`tbody`,{children:[(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{style:t,children:`Standard`}),(0,y.jsx)(`td`,{style:n,children:(0,y.jsx)(g,{type:`standard`,floating:!1,icon:(0,y.jsx)(i,{}),"aria-label":`Agregar`})}),(0,y.jsx)(`td`,{style:n,children:(0,y.jsx)(g,{type:`standard`,floating:!1,icon:(0,y.jsx)(i,{}),"aria-label":`Agregar`,disabled:!0})})]}),(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{style:t,children:`Extended`}),(0,y.jsx)(`td`,{style:n,children:(0,y.jsx)(g,{type:`extended`,floating:!1,icon:(0,y.jsx)(i,{}),label:`Agregar`})}),(0,y.jsx)(`td`,{style:n,children:(0,y.jsx)(g,{type:`extended`,floating:!1,icon:(0,y.jsx)(i,{}),label:`Agregar`,disabled:!0})})]})]})]})})}},O={name:`Ejemplo de uso`,parameters:{...x,layout:`fullscreen`},render:()=>(0,y.jsxs)(`div`,{style:{position:`relative`,minHeight:360,background:`#f8f8f8`,fontFamily:`sans-serif`},children:[(0,y.jsxs)(`div`,{style:{padding:24,maxWidth:480},children:[(0,y.jsx)(`h3`,{style:{margin:`0 0 16px`,fontSize:18,fontWeight:600},children:`Mis borradores`}),[`Guía de onboarding`,`Syllabus Q3`,`Checklist de accesibilidad`].map(e=>(0,y.jsx)(`div`,{style:{padding:`12px 0`,borderBottom:`1px solid #e5e5e5`,fontSize:14,color:`#333`},children:e},e))]}),(0,y.jsx)(g,{type:`extended`,floating:!0,icon:(0,y.jsx)(i,{}),label:`Nuevo borrador`})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'extended',
    floating: false,
    disabled: false,
    loading: false,
    label: 'Agregar',
    icon: <ChatCircleIcon />
  },
  render: ({
    type,
    floating,
    disabled,
    loading,
    label,
    icon
  }) => {
    if (type === 'extended') {
      return <FloatingActionButton type="extended" floating={floating} disabled={disabled} loading={loading} icon={icon} label={label} />;
    }
    return <FloatingActionButton type="standard" floating={floating} disabled={disabled} icon={icon} aria-label={label} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Standard: Icon Button lg anidado. Requiere Accessible label (aria-label).'
      },
      source: {
        code: \`<FloatingActionButton
  type="standard"
  floating={false}
  icon={<ChatCircleIcon />}
  aria-label="Agregar"
/>\`
      }
    }
  },
  render: () => <FloatingActionButton type="standard" floating={false} icon={<ChatCircleIcon />} aria-label="Agregar" />
}`,...C.parameters?.docs?.source},description:{story:`Casos individuales limpios — código visible para copiar.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Extended: Button primary lg anidado. El label visible es la fuente preferida del nombre accesible.'
      },
      source: {
        code: \`<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
/>\`
      }
    }
  },
  render: () => <FloatingActionButton type="extended" floating={false} icon={<ChatCircleIcon />} label="Agregar" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
  disabled
/>\`
      }
    }
  },
  render: () => <FloatingActionButton type="extended" floating={false} icon={<ChatCircleIcon />} label="Agregar" disabled />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Loading aplica al contrato extended (Button).'
      },
      source: {
        code: \`<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
  loading
/>\`
      }
    }
  },
  render: () => <FloatingActionButton type="extended" floating={false} icon={<ChatCircleIcon />} label="Agregar" loading />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Type & states',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 20px 12px',
      borderBottom: '1px solid #eee'
    };
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap'
    };
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 20px',
      borderBottom: '1px solid #f0f0f0'
    };
    return <div style={{
      padding: 8
    }}>\r
       \r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }}>Type</th>\r
              <th style={th}>Default</th>\r
              <th style={th}>Disabled</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Standard</td>\r
              <td style={td}>\r
                <FloatingActionButton type="standard" floating={false} icon={<ChatCircleIcon />} aria-label="Agregar" />\r
              </td>\r
              <td style={td}>\r
                <FloatingActionButton type="standard" floating={false} icon={<ChatCircleIcon />} aria-label="Agregar" disabled />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Extended</td>\r
              <td style={td}>\r
                <FloatingActionButton type="extended" floating={false} icon={<ChatCircleIcon />} label="Agregar" />\r
              </td>\r
              <td style={td}>\r
                <FloatingActionButton type="extended" floating={false} icon={<ChatCircleIcon />} label="Agregar" disabled />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    ...hideCode,
    layout: 'fullscreen'
  },
  render: () => <div style={{
    position: 'relative',
    minHeight: 360,
    background: '#f8f8f8',
    fontFamily: 'sans-serif'
  }}>\r
      <div style={{
      padding: 24,
      maxWidth: 480
    }}>\r
        <h3 style={{
        margin: '0 0 16px',
        fontSize: 18,
        fontWeight: 600
      }}>Mis borradores</h3>\r
        {['Guía de onboarding', 'Syllabus Q3', 'Checklist de accesibilidad'].map(item => <div key={item} style={{
        padding: '12px 0',
        borderBottom: '1px solid #e5e5e5',
        fontSize: 14,
        color: '#333'
      }}>\r
            {item}\r
          </div>)}\r
      </div>\r
      <FloatingActionButton type="extended" floating icon={<ChatCircleIcon />} label="Nuevo borrador" />\r
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`Standard`,`Extended`,`Disabled`,`Loading`,`AllStates`,`InContext`]}))();export{D as AllStates,T as Disabled,w as Extended,O as InContext,E as Loading,S as Playground,C as Standard,k as __namedExportsOrder,b as default};