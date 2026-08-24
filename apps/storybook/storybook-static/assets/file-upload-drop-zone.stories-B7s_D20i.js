import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CFNdY8gy.js";import{n,t as r}from"./file-upload-drop-zone-BqqEPfuz.js";function i(e){return(0,a.jsx)(r,{tone:e.tone,disabled:e.disabled,primaryText:e.primaryText??`Arrastra el archivo aquí`,secondaryText:e.secondaryText??`PDF, DOCX o JPG · máximo 10 MB`,actionLabel:e.actionLabel??`Seleccionar archivo`})}var a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),a=t(),o={title:`Components/Internal Building Blocks/FileUploadDropZone`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Drop zone de carga: default, focus (focus-visible / focus-within) y disabled × standard | inverse.`}}},argTypes:{tone:{control:`radio`,options:[`standard`,`inverse`],table:{defaultValue:{summary:`standard`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},primaryText:{control:`text`},secondaryText:{control:`text`},actionLabel:{control:`text`}}},s={docs:{canvas:{sourceState:`shown`}}},c={docs:{canvas:{sourceState:`none`}}},l=[e=>(0,a.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`},children:(0,a.jsx)(e,{})})],u={args:{tone:`standard`,disabled:!1,primaryText:`Arrastra el archivo aquí`,secondaryText:`PDF, DOCX o JPG · máximo 10 MB`,actionLabel:`Seleccionar archivo`},render:e=>(0,a.jsx)(i,{...e})},d={parameters:{...s,docs:{...s.docs,source:{code:`<FileUploadDropZone
  primaryText="Arrastra el archivo aquí"
  secondaryText="PDF, DOCX o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>`}}},render:()=>(0,a.jsx)(i,{})},f={parameters:{...s,docs:{...s.docs,source:{code:`<FileUploadDropZone
  tone="inverse"
  primaryText="Arrastra el archivo aquí"
  secondaryText="PDF, DOCX o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>`}},backgrounds:{default:`dark`}},decorators:l,render:()=>(0,a.jsx)(i,{tone:`inverse`})},p={parameters:{...s,docs:{...s.docs,source:{code:`<FileUploadDropZone
  disabled
  primaryText="Arrastra el archivo aquí"
  secondaryText="PDF, DOCX o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>`}}},render:()=>(0,a.jsx)(i,{disabled:!0})},m={name:`States & tones`,parameters:c,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px`,borderBottom:`1px solid #f0f0f0`},r={...n,background:`var(--color-surface-brand-strong, #231f20)`};return(0,a.jsxs)(`div`,{style:{padding:8},children:[(0,a.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,a.jsx)(`th`,{style:e,children:`Standard`}),(0,a.jsx)(`th`,{style:e,children:`Inverse`})]})}),(0,a.jsxs)(`tbody`,{children:[(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{style:t,children:`Default`}),(0,a.jsx)(`td`,{style:n,children:(0,a.jsx)(i,{})}),(0,a.jsx)(`td`,{style:r,children:(0,a.jsx)(i,{tone:`inverse`})})]}),(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{style:{...t,borderBottom:`none`},children:`Disabled`}),(0,a.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,a.jsx)(i,{disabled:!0})}),(0,a.jsx)(`td`,{style:{...r,borderBottom:`none`},children:(0,a.jsx)(i,{tone:`inverse`,disabled:!0})})]})]})]}),(0,a.jsx)(`p`,{style:{margin:`16px 0 0`,fontFamily:`monospace`,fontSize:11,color:`#888`},children:`Focus: Tab hasta el botón para ver borde dashed + focus ring.`})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'standard',
    disabled: false,
    primaryText: 'Arrastra el archivo aquí',
    secondaryText: 'PDF, DOCX o JPG · máximo 10 MB',
    actionLabel: 'Seleccionar archivo'
  },
  render: args => <Specimen {...args} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUploadDropZone
  primaryText="Arrastra el archivo aquí"
  secondaryText="PDF, DOCX o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>\`
      }
    }
  },
  render: () => <Specimen />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUploadDropZone
  tone="inverse"
  primaryText="Arrastra el archivo aquí"
  secondaryText="PDF, DOCX o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUploadDropZone
  disabled
  primaryText="Arrastra el archivo aquí"
  secondaryText="PDF, DOCX o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>\`
      }
    }
  },
  render: () => <Specimen disabled />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'States & tones',
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
      padding: '16px',
      borderBottom: '1px solid #f0f0f0'
    };
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)'
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
            }}>State</th>\r
              <th style={th}>Standard</th>\r
              <th style={th}>Inverse</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Default</td>\r
              <td style={td}>\r
                <Specimen />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen tone="inverse" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...rowLabel,
              borderBottom: 'none'
            }}>Disabled</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <Specimen disabled />\r
              </td>\r
              <td style={{
              ...tdInverse,
              borderBottom: 'none'
            }}>\r
                <Specimen tone="inverse" disabled />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
        <p style={{
        margin: '16px 0 0',
        fontFamily: 'monospace',
        fontSize: 11,
        color: '#888'
      }}>\r
          Focus: Tab hasta el botón para ver borde dashed + focus ring.\r
        </p>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Default`,`Inverse`,`Disabled`,`AllStates`]}))();export{m as AllStates,d as Default,p as Disabled,f as Inverse,u as Playground,h as __namedExportsOrder,o as default};