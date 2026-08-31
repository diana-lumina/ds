import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,t as r}from"./file-upload-item-B_js234Y.js";function i(e){return(0,a.jsx)(r,{status:e.status,tone:e.tone,primaryText:e.primaryText??`syllabus.pdf`,secondaryText:e.secondaryText??`240 KB`,actionLabel:e.actionLabel??`Eliminar`,progress:e.progress})}var a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{n(),a=t(),o={title:`Components/Internal Building Blocks/FileUploadItem`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Ítem de archivo: selected | uploading | success | error × standard | inverse. `}}},argTypes:{status:{control:`select`,options:[`selected`,`uploading`,`success`,`error`],table:{defaultValue:{summary:`selected`}}},tone:{control:`radio`,options:[`standard`,`inverse`],table:{defaultValue:{summary:`standard`}}},primaryText:{control:`text`},secondaryText:{control:`text`},actionLabel:{control:`text`},progress:{control:{type:`range`,min:0,max:100,step:1},description:`Solo aplica en uploading`}}},s={docs:{canvas:{sourceState:`shown`}}},c={docs:{canvas:{sourceState:`none`}}},l=[e=>(0,a.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`},children:(0,a.jsx)(e,{})})],u={args:{status:`selected`,tone:`standard`,primaryText:`syllabus.pdf`,secondaryText:`240 KB`,actionLabel:`Eliminar`,progress:50},render:e=>(0,a.jsx)(i,{...e})},d={parameters:{...s,docs:{...s.docs,source:{code:`<FileUploadItem
  primaryText="syllabus.pdf"
  secondaryText="240 KB"
  actionLabel="Eliminar"
/>`}}},render:()=>(0,a.jsx)(i,{})},f={parameters:{...s,docs:{...s.docs,source:{code:`<FileUploadItem
  tone="inverse"
  primaryText="syllabus.pdf"
  secondaryText="240 KB"
  actionLabel="Eliminar"
/>`}},backgrounds:{default:`dark`}},decorators:l,render:()=>(0,a.jsx)(i,{tone:`inverse`})},p={parameters:{...s,docs:{...s.docs,source:{code:`<FileUploadItem
  status="uploading"
  progress={50}
  primaryText="syllabus.pdf"
  secondaryText="Subiendo · 50%"
  actionLabel="Cancelar"
/>`}}},render:()=>(0,a.jsx)(i,{status:`uploading`,progress:50,secondaryText:`Subiendo · 50%`,actionLabel:`Cancelar`})},m={parameters:{...s,docs:{...s.docs,source:{code:`<FileUploadItem
  status="success"
  primaryText="syllabus.pdf"
  secondaryText="Carga completa"
  actionLabel="Eliminar"
/>`}}},render:()=>(0,a.jsx)(i,{status:`success`,secondaryText:`Carga completa`,actionLabel:`Eliminar`})},h={parameters:{...s,docs:{...s.docs,source:{code:`<FileUploadItem
  status="error"
  primaryText="syllabus.pdf"
  secondaryText="No se pudo cargar"
  actionLabel="Reintentar"
/>`}}},render:()=>(0,a.jsx)(i,{status:`error`,secondaryText:`No se pudo cargar`,actionLabel:`Reintentar`})},g={name:`States & tones`,parameters:c,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px`,borderBottom:`1px solid #f0f0f0`},i={...n,background:`var(--color-surface-brand-strong, #231f20)`},o=[{label:`Selected`,status:`selected`,secondaryText:`240 KB`,actionLabel:`Eliminar`},{label:`Uploading`,status:`uploading`,secondaryText:`Subiendo · 50%`,actionLabel:`Cancelar`},{label:`Success`,status:`success`,secondaryText:`Carga completa`,actionLabel:`Eliminar`},{label:`Error`,status:`error`,secondaryText:`No se pudo cargar`,actionLabel:`Reintentar`}];return(0,a.jsx)(`div`,{style:{padding:8},children:(0,a.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,a.jsx)(`th`,{style:e,children:`Standard`}),(0,a.jsx)(`th`,{style:e,children:`Inverse`})]})}),(0,a.jsx)(`tbody`,{children:o.map(e=>(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{style:t,children:e.label}),(0,a.jsx)(`td`,{style:n,children:(0,a.jsx)(r,{status:e.status,primaryText:`syllabus.pdf`,secondaryText:e.secondaryText,actionLabel:e.actionLabel,progress:e.status===`uploading`?50:void 0})}),(0,a.jsx)(`td`,{style:i,children:(0,a.jsx)(r,{status:e.status,tone:`inverse`,primaryText:`syllabus.pdf`,secondaryText:e.secondaryText,actionLabel:e.actionLabel,progress:e.status===`uploading`?50:void 0})})]},e.status))})]})})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'selected',
    tone: 'standard',
    primaryText: 'syllabus.pdf',
    secondaryText: '240 KB',
    actionLabel: 'Eliminar',
    progress: 50
  },
  render: args => <Specimen {...args} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUploadItem
  primaryText="syllabus.pdf"
  secondaryText="240 KB"
  actionLabel="Eliminar"
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
        code: \`<FileUploadItem
  tone="inverse"
  primaryText="syllabus.pdf"
  secondaryText="240 KB"
  actionLabel="Eliminar"
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
        code: \`<FileUploadItem
  status="uploading"
  progress={50}
  primaryText="syllabus.pdf"
  secondaryText="Subiendo · 50%"
  actionLabel="Cancelar"
/>\`
      }
    }
  },
  render: () => <Specimen status="uploading" progress={50} secondaryText="Subiendo · 50%" actionLabel="Cancelar" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUploadItem
  status="success"
  primaryText="syllabus.pdf"
  secondaryText="Carga completa"
  actionLabel="Eliminar"
/>\`
      }
    }
  },
  render: () => <Specimen status="success" secondaryText="Carga completa" actionLabel="Eliminar" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUploadItem
  status="error"
  primaryText="syllabus.pdf"
  secondaryText="No se pudo cargar"
  actionLabel="Reintentar"
/>\`
      }
    }
  },
  render: () => <Specimen status="error" secondaryText="No se pudo cargar" actionLabel="Reintentar" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    const rows: Array<{
      label: string;
      status: FileUploadItemStatus;
      secondaryText: string;
      actionLabel: string;
    }> = [{
      label: 'Selected',
      status: 'selected',
      secondaryText: '240 KB',
      actionLabel: 'Eliminar'
    }, {
      label: 'Uploading',
      status: 'uploading',
      secondaryText: 'Subiendo · 50%',
      actionLabel: 'Cancelar'
    }, {
      label: 'Success',
      status: 'success',
      secondaryText: 'Carga completa',
      actionLabel: 'Eliminar'
    }, {
      label: 'Error',
      status: 'error',
      secondaryText: 'No se pudo cargar',
      actionLabel: 'Reintentar'
    }];
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
            {rows.map(row => <tr key={row.status}>\r
                <td style={rowLabel}>{row.label}</td>\r
                <td style={td}>\r
                  <FileUploadItem status={row.status} primaryText="syllabus.pdf" secondaryText={row.secondaryText} actionLabel={row.actionLabel} progress={row.status === 'uploading' ? 50 : undefined} />\r
                </td>\r
                <td style={tdInverse}>\r
                  <FileUploadItem status={row.status} tone="inverse" primaryText="syllabus.pdf" secondaryText={row.secondaryText} actionLabel={row.actionLabel} progress={row.status === 'uploading' ? 50 : undefined} />\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Default`,`Inverse`,`Uploading`,`Success`,`Error`,`AllStates`]}))();export{g as AllStates,d as Default,h as Error,f as Inverse,u as Playground,m as Success,p as Uploading,_ as __namedExportsOrder,o as default};