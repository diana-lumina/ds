import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-BPJdu4Wu.js";import{T as r,n as i}from"./icons-BZJDXWBE.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";import{t as s}from"./icon-button-CTJJNoN6.js";import{t as c}from"./icon-button-JnYd8Xz1.js";import{t as l}from"./button-bba4p4Ks.js";import{t as u}from"./button-DgWycvAa.js";var d,f,p=e((()=>{d=`_root_17s1m_1`,f={root:d}}));function m(e){let{type:t=`standard`,icon:n,floating:r=!0,className:i,disabled:a,...c}=e,u=o(f.root,i);if(t===`extended`){let{label:e,"aria-label":t,loading:i,...o}=c;return(0,h.jsx)(l,{"data-slot":`floating-action-button`,"data-type":`extended`,"data-floating":r,type:`button`,hierarchy:`primary`,tone:`standard`,size:`lg`,leftIcon:n,label:e,disabled:a,loading:i,"aria-label":t,className:u,...o})}let{"aria-label":d,...p}=c;return(0,h.jsx)(s,{"data-slot":`floating-action-button`,"data-type":`standard`,"data-floating":r,type:`button`,size:`lg`,tone:`standard`,icon:n,disabled:a,"aria-label":d,className:u,...p})}var h,g=e((()=>{n(),a(),u(),c(),p(),h=t(),m.__docgenInfo={description:``,methods:[],displayName:`FloatingActionButton`}})),_,v,y,b,x,S,C,w,T,E,D;e((()=>{g(),i(),_=t(),v={title:`Components/Actions/FloatingActionButton`,component:m,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Acción primaria flotante y persistente de alta prominencia. Standard reutiliza Icon Button lg; Extended reutiliza Button primary lg. Speed Dial es un Pattern separado y no forma parte de la API del FAB. Contrato fijo: Size=lg · Hierarchy=primary · Tone=standard.`}}},argTypes:{type:{control:`select`,options:[`standard`,`extended`],description:`standard: icon + accessible label · extended: leading icon + label visible`,table:{defaultValue:{summary:`standard`}}},floating:{control:`boolean`,description:`Fija el FAB a la esquina inferior derecha`,table:{defaultValue:{summary:`true`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`Solo extended (vía Button). Standard no expone loading en Icon Button.`,table:{defaultValue:{summary:`false`}}},label:{control:`text`,description:`Extended: label visible. Standard: se usa como aria-label`},icon:{control:!1,table:{disable:!0}}}},y={docs:{canvas:{sourceState:`none`}}},b={args:{type:`extended`,floating:!1,disabled:!1,loading:!1,label:`Agregar`,icon:(0,_.jsx)(r,{})},render:({type:e,floating:t,disabled:n,loading:r,label:i,icon:a})=>e===`extended`?(0,_.jsx)(m,{type:`extended`,floating:t,disabled:n,loading:r,icon:a,label:i}):(0,_.jsx)(m,{type:`standard`,floating:t,disabled:n,icon:a,"aria-label":i})},x={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Standard: Icon Button lg anidado. Requiere Accessible label (aria-label).`},source:{code:`<FloatingActionButton
  type="standard"
  floating={false}
  icon={<ChatCircleIcon />}
  aria-label="Agregar"
/>`}}},render:()=>(0,_.jsx)(m,{type:`standard`,floating:!1,icon:(0,_.jsx)(r,{}),"aria-label":`Agregar`})},S={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Extended: Button primary lg anidado. El label visible es la fuente preferida del nombre accesible.`},source:{code:`<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
/>`}}},render:()=>(0,_.jsx)(m,{type:`extended`,floating:!1,icon:(0,_.jsx)(r,{}),label:`Agregar`})},C={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
  disabled
/>`}}},render:()=>(0,_.jsx)(m,{type:`extended`,floating:!1,icon:(0,_.jsx)(r,{}),label:`Agregar`,disabled:!0})},w={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Loading aplica al contrato extended (Button).`},source:{code:`<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
  loading
/>`}}},render:()=>(0,_.jsx)(m,{type:`extended`,floating:!1,icon:(0,_.jsx)(r,{}),label:`Agregar`,loading:!0})},T={name:`Type & states`,parameters:y,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,_.jsx)(`div`,{style:{padding:8},children:(0,_.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Type`}),(0,_.jsx)(`th`,{style:e,children:`Default`}),(0,_.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{style:t,children:`Standard`}),(0,_.jsx)(`td`,{style:n,children:(0,_.jsx)(m,{type:`standard`,floating:!1,icon:(0,_.jsx)(r,{}),"aria-label":`Agregar`})}),(0,_.jsx)(`td`,{style:n,children:(0,_.jsx)(m,{type:`standard`,floating:!1,icon:(0,_.jsx)(r,{}),"aria-label":`Agregar`,disabled:!0})})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{style:t,children:`Extended`}),(0,_.jsx)(`td`,{style:n,children:(0,_.jsx)(m,{type:`extended`,floating:!1,icon:(0,_.jsx)(r,{}),label:`Agregar`})}),(0,_.jsx)(`td`,{style:n,children:(0,_.jsx)(m,{type:`extended`,floating:!1,icon:(0,_.jsx)(r,{}),label:`Agregar`,disabled:!0})})]})]})]})})}},E={name:`Ejemplo de uso`,parameters:{...y,layout:`fullscreen`},render:()=>(0,_.jsxs)(`div`,{style:{position:`relative`,minHeight:360,background:`#f8f8f8`,fontFamily:`sans-serif`},children:[(0,_.jsxs)(`div`,{style:{padding:24,maxWidth:480},children:[(0,_.jsx)(`h3`,{style:{margin:`0 0 16px`,fontSize:18,fontWeight:600},children:`Mis borradores`}),[`Guía de onboarding`,`Syllabus Q3`,`Checklist de accesibilidad`].map(e=>(0,_.jsx)(`div`,{style:{padding:`12px 0`,borderBottom:`1px solid #e5e5e5`,fontSize:14,color:`#333`},children:e},e))]}),(0,_.jsx)(m,{type:`extended`,floating:!0,icon:(0,_.jsx)(r,{}),label:`Nuevo borrador`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Casos individuales limpios — código visible para copiar.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`Standard`,`Extended`,`Disabled`,`Loading`,`AllStates`,`InContext`]}))();export{T as AllStates,C as Disabled,S as Extended,E as InContext,w as Loading,b as Playground,x as Standard,D as __namedExportsOrder,v as default};