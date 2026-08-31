import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,t as r}from"./text-area-Du65qJkm.js";function i({appearance:e=`outlined`,tone:t=`standard`,error:n=!1,disabled:i=!1,placeholder:o=`Escribe un comentario`}){return(0,a.jsx)(`div`,{style:l,children:(0,a.jsx)(r,{appearance:e,tone:t,error:n,disabled:i,placeholder:o,"aria-label":`Comentario`})})}var a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{n(),a=t(),o={title:`Components/Internal Building Blocks/TextArea`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Control de área de texto interno: outlined | underline × standard | inverse × default | error | disabled.`}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],description:`outlined (caja) o underline`,table:{defaultValue:{summary:`outlined`}}},tone:{control:`radio`,options:[`standard`,`inverse`],description:`standard sobre superficies claras · inverse sobre oscuras / brand.`,table:{defaultValue:{summary:`standard`}}},error:{control:`boolean`,description:`Error: borde danger. Disabled gana sobre error.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled: valor muted; no recibe interacción.`,table:{defaultValue:{summary:`false`}}},placeholder:{control:`text`}}},s={docs:{canvas:{sourceState:`shown`}}},c={docs:{canvas:{sourceState:`none`}}},l={maxWidth:360},u=[e=>(0,a.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`,minWidth:360},children:(0,a.jsx)(e,{})})],d={args:{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1,placeholder:`Escribe un comentario`},render:e=>(0,a.jsx)(i,{...e})},f={parameters:{...s,docs:{...s.docs,source:{code:`<TextArea aria-label="Comentario" placeholder="Escribe un comentario" />`}}},render:()=>(0,a.jsx)(i,{})},p={parameters:{...s,docs:{...s.docs,source:{code:`<TextArea
  tone="inverse"
  aria-label="Comentario"
  placeholder="Escribe un comentario"
/>`}},backgrounds:{default:`dark`}},decorators:u,render:()=>(0,a.jsx)(i,{tone:`inverse`})},m={parameters:{...s,docs:{...s.docs,source:{code:`<TextArea
  appearance="underline"
  aria-label="Comentario"
  placeholder="Escribe un comentario"
/>`}}},render:()=>(0,a.jsx)(i,{appearance:`underline`})},h={parameters:{...s,docs:{...s.docs,source:{code:`<TextArea error aria-label="Comentario" placeholder="Escribe un comentario" />`}}},render:()=>(0,a.jsx)(i,{error:!0})},g={parameters:{...s,docs:{...s.docs,source:{code:`<TextArea disabled aria-label="Comentario" placeholder="Escribe un comentario" />`}}},render:()=>(0,a.jsx)(i,{disabled:!0})},_={name:`States`,parameters:c,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:240},r={...n,background:`var(--color-surface-brand-strong, #231f20)`},o=[[`Default`,{error:!1,disabled:!1}],[`Error`,{error:!0,disabled:!1}],[`Disabled`,{error:!1,disabled:!0}]];return(0,a.jsx)(`div`,{style:{padding:8},children:(0,a.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,a.jsx)(`th`,{style:e,children:`Outlined standard`}),(0,a.jsx)(`th`,{style:e,children:`Outlined inverse`}),(0,a.jsx)(`th`,{style:e,children:`Underline standard`}),(0,a.jsx)(`th`,{style:e,children:`Underline inverse`})]})}),(0,a.jsx)(`tbody`,{children:o.map(([e,o])=>(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{style:t,children:e}),(0,a.jsx)(`td`,{style:n,children:(0,a.jsx)(i,{appearance:`outlined`,tone:`standard`,...o})}),(0,a.jsx)(`td`,{style:r,children:(0,a.jsx)(i,{appearance:`outlined`,tone:`inverse`,...o})}),(0,a.jsx)(`td`,{style:n,children:(0,a.jsx)(i,{appearance:`underline`,tone:`standard`,...o})}),(0,a.jsx)(`td`,{style:r,children:(0,a.jsx)(i,{appearance:`underline`,tone:`inverse`,...o})})]},e))})]})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    placeholder: 'Escribe un comentario'
  },
  render: args => <Specimen {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TextArea aria-label="Comentario" placeholder="Escribe un comentario" />\`
      }
    }
  },
  render: () => <Specimen />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TextArea
  tone="inverse"
  aria-label="Comentario"
  placeholder="Escribe un comentario"
/>\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TextArea
  appearance="underline"
  aria-label="Comentario"
  placeholder="Escribe un comentario"
/>\`
      }
    }
  },
  render: () => <Specimen appearance="underline" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TextArea error aria-label="Comentario" placeholder="Escribe un comentario" />\`
      }
    }
  },
  render: () => <Specimen error />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TextArea disabled aria-label="Comentario" placeholder="Escribe un comentario" />\`
      }
    }
  },
  render: () => <Specimen disabled />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'States',
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
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 240
    };
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)'
    };
    const states = [['Default', {
      error: false,
      disabled: false
    }], ['Error', {
      error: true,
      disabled: false
    }], ['Disabled', {
      error: false,
      disabled: true
    }]] as const;
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
            }}>State</th>\r
              <th style={th}>Outlined standard</th>\r
              <th style={th}>Outlined inverse</th>\r
              <th style={th}>Underline standard</th>\r
              <th style={th}>Underline inverse</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {states.map(([label, state]) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                <td style={td}>\r
                  <Specimen appearance="outlined" tone="standard" {...state} />\r
                </td>\r
                <td style={tdInverse}>\r
                  <Specimen appearance="outlined" tone="inverse" {...state} />\r
                </td>\r
                <td style={td}>\r
                  <Specimen appearance="underline" tone="standard" {...state} />\r
                </td>\r
                <td style={tdInverse}>\r
                  <Specimen appearance="underline" tone="inverse" {...state} />\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Default`,`Inverse`,`Underline`,`Error`,`Disabled`,`AllStates`]}))();export{_ as AllStates,f as Default,g as Disabled,h as Error,p as Inverse,d as Playground,m as Underline,v as __namedExportsOrder,o as default};