import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CsUaBcwt.js";import{n,t as r}from"./link-CVPFhhC7.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`Components/Link`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Navegación a otra ubicación, recurso o documento. No ejecuta acciones de interfaz (usar Button). External icon solo para destinos externos. Nota abierta: el contrato Figma pide subrayado permanente; el diseño actual no lo incluye — pendiente de revisión con diseñador.`}}},argTypes:{context:{control:`select`,options:[`inline`,`standalone`],description:`inline en flujo de texto · standalone como enlace autónomo`,table:{type:{summary:`string`},defaultValue:{summary:`standalone`}}},tone:{control:`select`,options:[`standard`,`inverse`],description:`standard · inverse`,table:{type:{summary:`string`},defaultValue:{summary:`standard`}}},label:{control:`text`,description:`Label (string editable). Debe describir el destino.`},external:{control:`boolean`,description:`Muestra el glyph Sales y abre fuera del producto`,table:{defaultValue:{summary:`false`}}},href:{control:`text`,description:`URL del destino`}}},o={docs:{canvas:{sourceState:`none`}}},s={args:{href:`/programa`,label:`Ver programa`}},c={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Link href="/programa" label="Ver programa" />`}}},render:()=>(0,i.jsx)(r,{href:`/programa`,label:`Ver programa`})},l={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Link context="inline" href="/programa" label="descarga el programa" />`}}},render:()=>(0,i.jsxs)(`p`,{style:{fontFamily:`sans-serif`,fontSize:14,lineHeight:1.6,margin:0,maxWidth:420},children:[`Consulta el calendario o`,` `,(0,i.jsx)(r,{context:`inline`,href:`/programa`,label:`descarga el programa`}),` del curso.`]})},u={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`External muestra el glyph Sales. Si el texto ya comunica que abre fuera, el ícono no requiere anuncio adicional.`},source:{code:`<Link
  href="https://example.com"
  label="Sitio del Tec (abre en sitio externo)"
  external
/>`}}},render:()=>(0,i.jsx)(r,{href:`https://example.com`,label:`Sitio del Tec (abre en sitio externo)`,external:!0})},d={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Link href="/aviso" tone="inverse" label="Aviso de privacidad" />`}},backgrounds:{default:`dark`}},decorators:[e=>(0,i.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-flex`},children:(0,i.jsx)(e,{})})],render:()=>(0,i.jsx)(r,{href:`/aviso`,tone:`inverse`,label:`Aviso de privacidad`})},f={name:`Context & tone`,parameters:o,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,i.jsx)(`div`,{style:{padding:8},children:(0,i.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Tone`}),(0,i.jsx)(`th`,{style:e,children:`Standalone`}),(0,i.jsx)(`th`,{style:e,children:`Inline`}),(0,i.jsx)(`th`,{style:e,children:`External`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{style:t,children:`Standard`}),(0,i.jsx)(`td`,{style:n,children:(0,i.jsx)(r,{href:`/programa`,label:`Ver programa`})}),(0,i.jsxs)(`td`,{style:{...n,fontSize:14,fontFamily:`sans-serif`},children:[`Texto con `,(0,i.jsx)(r,{context:`inline`,href:`/programa`,label:`enlace`}),` aquí.`]}),(0,i.jsx)(`td`,{style:n,children:(0,i.jsx)(r,{href:`https://example.com`,label:`Externo`,external:!0})})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{style:{...t,borderBottom:`none`},children:`Inverse`}),(0,i.jsx)(`td`,{style:{...n,borderBottom:`none`,background:`var(--color-surface-brand-strong, #231f20)`},children:(0,i.jsx)(r,{href:`/aviso`,tone:`inverse`,label:`Aviso`})}),(0,i.jsxs)(`td`,{style:{...n,borderBottom:`none`,background:`var(--color-surface-brand-strong, #231f20)`,fontSize:14,fontFamily:`sans-serif`,color:`#fff`},children:[`Texto con`,` `,(0,i.jsx)(r,{context:`inline`,tone:`inverse`,href:`/aviso`,label:`enlace`}),` aquí.`]}),(0,i.jsx)(`td`,{style:{...n,borderBottom:`none`,background:`var(--color-surface-brand-strong, #231f20)`},children:(0,i.jsx)(r,{href:`https://example.com`,tone:`inverse`,label:`Externo`,external:!0})})]})]})]})})}},p={name:`Ejemplo de uso`,parameters:o,render:()=>(0,i.jsxs)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:480,display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsxs)(`p`,{style:{fontSize:14,lineHeight:1.6,color:`#333`,margin:0},children:[`Consulta el calendario académico o`,` `,(0,i.jsx)(r,{context:`inline`,href:`/programa`,label:`descarga el programa`}),` del curso antes de inscribirte.`]}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:[(0,i.jsx)(r,{href:`/catalogo`,label:`Ver catálogo`}),(0,i.jsx)(r,{href:`https://tec.mx`,label:`Sitio institucional (abre en sitio externo)`,external:!0})]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    href: '/programa',
    label: 'Ver programa'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Link href="/programa" label="Ver programa" />\`
      }
    }
  },
  render: () => <Link href="/programa" label="Ver programa" />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Link context="inline" href="/programa" label="descarga el programa" />\`
      }
    }
  },
  render: () => <p style={{
    fontFamily: 'sans-serif',
    fontSize: 14,
    lineHeight: 1.6,
    margin: 0,
    maxWidth: 420
  }}>\r
      Consulta el calendario o{' '}\r
      <Link context="inline" href="/programa" label="descarga el programa" /> del curso.\r
    </p>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'External muestra el glyph Sales. Si el texto ya comunica que abre fuera, el ícono no requiere anuncio adicional.'
      },
      source: {
        code: \`<Link
  href="https://example.com"
  label="Sitio del Tec (abre en sitio externo)"
  external
/>\`
      }
    }
  },
  render: () => <Link href="https://example.com" label="Sitio del Tec (abre en sitio externo)" external />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Link href="/aviso" tone="inverse" label="Aviso de privacidad" />\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div style={{
    background: 'var(--color-surface-brand-strong, #231f20)',
    padding: 24,
    borderRadius: 8,
    display: 'inline-flex'
  }}>\r
        <Story />\r
      </div>],
  render: () => <Link href="/aviso" tone="inverse" label="Aviso de privacidad" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Context & tone',
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
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }}>Tone</th>\r
              <th style={th}>Standalone</th>\r
              <th style={th}>Inline</th>\r
              <th style={th}>External</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Standard</td>\r
              <td style={td}>\r
                <Link href="/programa" label="Ver programa" />\r
              </td>\r
              <td style={{
              ...td,
              fontSize: 14,
              fontFamily: 'sans-serif'
            }}>\r
                Texto con <Link context="inline" href="/programa" label="enlace" /> aquí.\r
              </td>\r
              <td style={td}>\r
                <Link href="https://example.com" label="Externo" external />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...rowLabel,
              borderBottom: 'none'
            }}>Inverse</td>\r
              <td style={{
              ...td,
              borderBottom: 'none',
              background: 'var(--color-surface-brand-strong, #231f20)'
            }}>\r
                <Link href="/aviso" tone="inverse" label="Aviso" />\r
              </td>\r
              <td style={{
              ...td,
              borderBottom: 'none',
              background: 'var(--color-surface-brand-strong, #231f20)',
              fontSize: 14,
              fontFamily: 'sans-serif',
              color: '#fff'
            }}>\r
                Texto con{' '}\r
                <Link context="inline" tone="inverse" href="/aviso" label="enlace" /> aquí.\r
              </td>\r
              <td style={{
              ...td,
              borderBottom: 'none',
              background: 'var(--color-surface-brand-strong, #231f20)'
            }}>\r
                <Link href="https://example.com" tone="inverse" label="Externo" external />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <p style={{
      fontSize: 14,
      lineHeight: 1.6,
      color: '#333',
      margin: 0
    }}>\r
        Consulta el calendario académico o{' '}\r
        <Link context="inline" href="/programa" label="descarga el programa" /> del curso antes\r
        de inscribirte.\r
      </p>\r
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }}>\r
        <Link href="/catalogo" label="Ver catálogo" />\r
        <Link href="https://tec.mx" label="Sitio institucional (abre en sitio externo)" external />\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Standalone`,`Inline`,`External`,`Inverse`,`ContextAndTone`,`InContext`]}))();export{f as ContextAndTone,u as External,p as InContext,l as Inline,d as Inverse,s as Playground,c as Standalone,m as __namedExportsOrder,a as default};