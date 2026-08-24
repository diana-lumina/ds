import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CFNdY8gy.js";import{n,t as r}from"./text-input-oAcDOiCx.js";function i({appearance:e=`outlined`,tone:t=`standard`,error:n=!1,disabled:i=!1,embedded:o=!1,placeholder:s=`nombre@tec.mx`}){return(0,a.jsx)(`div`,{style:l,children:(0,a.jsx)(r,{appearance:e,tone:t,error:n,disabled:i,embedded:o,placeholder:s,"aria-label":`Correo`})})}var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),a=t(),o={title:`Components/Internal Building Blocks/TextInput`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Control de texto interno: outlined | underline × standard | inverse × default | error | disabled. `embedded` es la misma receta (outlined o underline, standard o inverse) sin background ni borde."}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],description:`outlined (caja) o underline`,table:{defaultValue:{summary:`outlined`}}},tone:{control:`radio`,options:[`standard`,`inverse`],description:`standard sobre superficies claras · inverse sobre oscuras / brand.`,table:{defaultValue:{summary:`standard`}}},error:{control:`boolean`,description:`Error: borde danger. Disabled gana sobre error.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled: valor muted; no recibe interacción.`,table:{defaultValue:{summary:`false`}}},embedded:{control:`boolean`,description:`Sin cromo propio; el contenedor compuesto pinta el borde.`,table:{defaultValue:{summary:`false`}}},placeholder:{control:`text`}}},s={docs:{canvas:{sourceState:`shown`}}},c={docs:{canvas:{sourceState:`none`}}},l={maxWidth:360},u=[e=>(0,a.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`,minWidth:360},children:(0,a.jsx)(e,{})})],d={args:{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1,embedded:!1,placeholder:`nombre@tec.mx`},render:e=>(0,a.jsx)(i,{...e})},f={parameters:{...s,docs:{...s.docs,source:{code:`<TextInput aria-label="Correo" placeholder="nombre@tec.mx" />`}}},render:()=>(0,a.jsx)(i,{})},p={parameters:{...s,docs:{...s.docs,source:{code:`<TextInput
  appearance="outlined"
  tone="inverse"
  aria-label="Correo"
  placeholder="nombre@tec.mx"
/>`}},backgrounds:{default:`dark`}},decorators:u,render:()=>(0,a.jsx)(i,{tone:`inverse`})},m={parameters:{...s,docs:{...s.docs,source:{code:`<TextInput
  appearance="underline"
  aria-label="Correo"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,a.jsx)(i,{appearance:`underline`})},h={parameters:{...s,docs:{...s.docs,source:{code:`<TextInput error aria-label="Correo" placeholder="nombre@tec.mx" />`}}},render:()=>(0,a.jsx)(i,{error:!0})},g={parameters:{...s,docs:{...s.docs,source:{code:`<TextInput disabled aria-label="Correo" placeholder="nombre@tec.mx" />`}}},render:()=>(0,a.jsx)(i,{disabled:!0})},_={parameters:{...s,docs:{...s.docs,description:{story:`Composition embedded: misma receta que outlined-default-standard, sin background ni borde. El contenedor compuesto pinta el cromo.`},source:{code:`<TextInput embedded aria-label="Correo" placeholder="nombre@tec.mx" />`}}},render:()=>(0,a.jsx)(i,{embedded:!0})},v={name:`Embedded inverse`,parameters:{...s,docs:{...s.docs,description:{story:`Composition embedded inverse: misma receta que outlined-default-inverse, sin background ni borde. Conserva color de value y placeholder inverse.`},source:{code:`<TextInput
  embedded
  tone="inverse"
  aria-label="Correo"
  placeholder="nombre@tec.mx"
/>`}},backgrounds:{default:`dark`}},decorators:u,render:()=>(0,a.jsx)(i,{embedded:!0,tone:`inverse`})},y={name:`Embedded disabled`,parameters:{...s,docs:{...s.docs,description:{story:`Composition embedded disabled: sin background ni borde (el contenedor compuesto pinta el cromo). Conserva el color de value disabled.`},source:{code:`<TextInput
  embedded
  disabled
  aria-label="Correo"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,a.jsx)(i,{embedded:!0,disabled:!0})},b={name:`States`,parameters:c,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:240},r={...n,background:`var(--color-surface-brand-strong, #231f20)`},o={fontFamily:`monospace`,fontSize:12,color:`#111`,fontWeight:700,textAlign:`left`,padding:`24px 0 8px`,borderBottom:`1px solid #ddd`},s=[[`Default`,{error:!1,disabled:!1}],[`Error`,{error:!0,disabled:!1}],[`Disabled`,{error:!1,disabled:!0}]],c=e=>(0,a.jsx)(`tr`,{children:(0,a.jsx)(`td`,{colSpan:5,style:o,children:e})}),l=e=>s.map(([o,s])=>(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{style:t,children:o}),(0,a.jsx)(`td`,{style:n,children:(0,a.jsx)(i,{appearance:`outlined`,tone:`standard`,embedded:e,...s})}),(0,a.jsx)(`td`,{style:r,children:(0,a.jsx)(i,{appearance:`outlined`,tone:`inverse`,embedded:e,...s})}),(0,a.jsx)(`td`,{style:n,children:(0,a.jsx)(i,{appearance:`underline`,tone:`standard`,embedded:e,...s})}),(0,a.jsx)(`td`,{style:r,children:(0,a.jsx)(i,{appearance:`underline`,tone:`inverse`,embedded:e,...s})})]},`${e?`embedded`:`chrome`}-${o}`));return(0,a.jsx)(`div`,{style:{padding:8},children:(0,a.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,a.jsx)(`th`,{style:e,children:`Outlined standard`}),(0,a.jsx)(`th`,{style:e,children:`Outlined inverse`}),(0,a.jsx)(`th`,{style:e,children:`Underline standard`}),(0,a.jsx)(`th`,{style:e,children:`Underline inverse`})]})}),(0,a.jsxs)(`tbody`,{children:[c(`Default`),l(!1),c(`Embedded`),l(!0)]})]})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    embedded: false,
    placeholder: 'nombre@tec.mx'
  },
  render: args => <Specimen {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TextInput aria-label="Correo" placeholder="nombre@tec.mx" />\`
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
        code: \`<TextInput
  appearance="outlined"
  tone="inverse"
  aria-label="Correo"
  placeholder="nombre@tec.mx"
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
        code: \`<TextInput
  appearance="underline"
  aria-label="Correo"
  placeholder="nombre@tec.mx"
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
        code: \`<TextInput error aria-label="Correo" placeholder="nombre@tec.mx" />\`
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
        code: \`<TextInput disabled aria-label="Correo" placeholder="nombre@tec.mx" />\`
      }
    }
  },
  render: () => <Specimen disabled />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      description: {
        story: 'Composition embedded: misma receta que outlined-default-standard, sin background ni borde. El contenedor compuesto pinta el cromo.'
      },
      source: {
        code: \`<TextInput embedded aria-label="Correo" placeholder="nombre@tec.mx" />\`
      }
    }
  },
  render: () => <Specimen embedded />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Embedded inverse',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      description: {
        story: 'Composition embedded inverse: misma receta que outlined-default-inverse, sin background ni borde. Conserva color de value y placeholder inverse.'
      },
      source: {
        code: \`<TextInput
  embedded
  tone="inverse"
  aria-label="Correo"
  placeholder="nombre@tec.mx"
/>\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen embedded tone="inverse" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Embedded disabled',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      description: {
        story: 'Composition embedded disabled: sin background ni borde (el contenedor compuesto pinta el cromo). Conserva el color de value disabled.'
      },
      source: {
        code: \`<TextInput
  embedded
  disabled
  aria-label="Correo"
  placeholder="nombre@tec.mx"
/>\`
      }
    }
  },
  render: () => <Specimen embedded disabled />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    const section: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 12,
      color: '#111',
      fontWeight: 700,
      textAlign: 'left',
      padding: '24px 0 8px',
      borderBottom: '1px solid #ddd'
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
    const heading = (title: string) => <tr>\r
        <td colSpan={5} style={section}>\r
          {title}\r
        </td>\r
      </tr>;
    const rows = (embedded: boolean) => states.map(([label, state]) => <tr key={\`\${embedded ? 'embedded' : 'chrome'}-\${label}\`}>\r
          <td style={rowLabel}>{label}</td>\r
          <td style={td}>\r
            <Specimen appearance="outlined" tone="standard" embedded={embedded} {...state} />\r
          </td>\r
          <td style={tdInverse}>\r
            <Specimen appearance="outlined" tone="inverse" embedded={embedded} {...state} />\r
          </td>\r
          <td style={td}>\r
            <Specimen appearance="underline" tone="standard" embedded={embedded} {...state} />\r
          </td>\r
          <td style={tdInverse}>\r
            <Specimen appearance="underline" tone="inverse" embedded={embedded} {...state} />\r
          </td>\r
        </tr>);
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
            {heading('Default')}\r
            {rows(false)}\r
            {heading('Embedded')}\r
            {rows(true)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Default`,`Inverse`,`Underline`,`Error`,`Disabled`,`Embedded`,`EmbeddedInverse`,`EmbeddedDisabled`,`AllStates`]}))();export{b as AllStates,f as Default,g as Disabled,_ as Embedded,y as EmbeddedDisabled,v as EmbeddedInverse,h as Error,p as Inverse,d as Playground,m as Underline,x as __namedExportsOrder,o as default};