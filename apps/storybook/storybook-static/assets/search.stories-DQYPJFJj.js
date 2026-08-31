import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{n as r,t as i}from"./search-CMXgE1eu.js";function a({appearance:e=`outlined`,tone:t=`standard`,error:n=!1,disabled:r=!1,placeholder:a=`Buscar`,defaultValue:s}){return(0,o.jsx)(`div`,{style:u,children:(0,o.jsx)(i,{appearance:e,tone:t,error:n,disabled:r,placeholder:a,defaultValue:s,"aria-label":`Buscar`})})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),r(),o=t(),s={title:`Components/Inputs/Search`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Campo de búsqueda compuesto sobre TextInput. Appearances outlined y underline; tones standard e inverse. Lupa leading fija; clear trailing cuando hay valor.`}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],description:`outlined (caja) o underline`,table:{defaultValue:{summary:`outlined`}}},tone:{control:`radio`,options:[`standard`,`inverse`],description:`standard sobre superficies claras · inverse sobre oscuras / brand`,table:{defaultValue:{summary:`standard`}}},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},placeholder:{control:`text`}}},c={docs:{canvas:{sourceState:`shown`}}},l={docs:{canvas:{sourceState:`none`}}},u={maxWidth:360},d=[e=>(0,o.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`,minWidth:360},children:(0,o.jsx)(e,{})})],f={args:{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1,placeholder:`Buscar`},render:e=>(0,o.jsx)(a,{...e})},p={parameters:{...c,docs:{...c.docs,source:{code:`<Search aria-label="Buscar" placeholder="Buscar" />`}}},render:()=>(0,o.jsx)(a,{})},m={parameters:{...c,docs:{...c.docs,source:{code:`<Search tone="inverse" aria-label="Buscar" placeholder="Buscar" />`}},backgrounds:{default:`dark`}},decorators:d,render:()=>(0,o.jsx)(a,{tone:`inverse`})},h={parameters:{...c,docs:{...c.docs,source:{code:`<Search appearance="underline" aria-label="Buscar" placeholder="Buscar" />`}}},render:()=>(0,o.jsx)(a,{appearance:`underline`})},g={name:`Con valor (clear)`,parameters:{...c,docs:{...c.docs,source:{code:`<Search aria-label="Buscar" defaultValue="campus" />`}}},render:()=>(0,o.jsx)(a,{defaultValue:`campus`})},_={parameters:{...c,docs:{...c.docs,source:{code:`<Search aria-label="Buscar" disabled />`}}},render:()=>(0,o.jsx)(a,{disabled:!0})},v={name:`Appearances & tones`,parameters:l,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={textAlign:`left`,verticalAlign:`middle`,padding:`16px`,borderBottom:`1px solid #f0f0f0`,minWidth:260},n={...t,background:`var(--color-surface-brand-strong, #231f20)`};return(0,o.jsx)(`div`,{style:{padding:8},children:(0,o.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{style:e,children:` `}),(0,o.jsx)(`th`,{style:e,children:`Standard`}),(0,o.jsx)(`th`,{style:e,children:`Inverse`})]})}),(0,o.jsxs)(`tbody`,{children:[(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{style:{...e,paddingTop:16},children:`Outlined`}),(0,o.jsx)(`td`,{style:t,children:(0,o.jsx)(a,{appearance:`outlined`,defaultValue:`campus`})}),(0,o.jsx)(`td`,{style:n,children:(0,o.jsx)(a,{appearance:`outlined`,tone:`inverse`,defaultValue:`campus`})})]}),(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{style:e,children:`Outlined disabled`}),(0,o.jsx)(`td`,{style:t,children:(0,o.jsx)(a,{appearance:`outlined`,defaultValue:`campus`,disabled:!0})}),(0,o.jsx)(`td`,{style:n,children:(0,o.jsx)(a,{appearance:`outlined`,tone:`inverse`,defaultValue:`campus`,disabled:!0})})]}),(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{style:e,children:`Underline`}),(0,o.jsx)(`td`,{style:t,children:(0,o.jsx)(a,{appearance:`underline`,defaultValue:`campus`})}),(0,o.jsx)(`td`,{style:n,children:(0,o.jsx)(a,{appearance:`underline`,tone:`inverse`,defaultValue:`campus`})})]}),(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{style:{...e,borderBottom:`none`},children:`Underline disabled`}),(0,o.jsx)(`td`,{style:{...t,borderBottom:`none`},children:(0,o.jsx)(a,{appearance:`underline`,defaultValue:`campus`,disabled:!0})}),(0,o.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,o.jsx)(a,{appearance:`underline`,tone:`inverse`,defaultValue:`campus`,disabled:!0})})]})]})]})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    placeholder: 'Buscar'
  },
  render: args => <Specimen {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search aria-label="Buscar" placeholder="Buscar" />\`
      }
    }
  },
  render: () => <Specimen />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search tone="inverse" aria-label="Buscar" placeholder="Buscar" />\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search appearance="underline" aria-label="Buscar" placeholder="Buscar" />\`
      }
    }
  },
  render: () => <Specimen appearance="underline" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Con valor (clear)',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search aria-label="Buscar" defaultValue="campus" />\`
      }
    }
  },
  render: () => <Specimen defaultValue="campus" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search aria-label="Buscar" disabled />\`
      }
    }
  },
  render: () => <Specimen disabled />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Appearances & tones',
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
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 260
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
              <th style={th}> </th>\r
              <th style={th}>Standard</th>\r
              <th style={th}>Inverse</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={{
              ...th,
              paddingTop: 16
            }}>Outlined</td>\r
              <td style={td}>\r
                <Specimen appearance="outlined" defaultValue="campus" />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen appearance="outlined" tone="inverse" defaultValue="campus" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={th}>Outlined disabled</td>\r
              <td style={td}>\r
                <Specimen appearance="outlined" defaultValue="campus" disabled />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen appearance="outlined" tone="inverse" defaultValue="campus" disabled />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={th}>Underline</td>\r
              <td style={td}>\r
                <Specimen appearance="underline" defaultValue="campus" />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen appearance="underline" tone="inverse" defaultValue="campus" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...th,
              borderBottom: 'none'
            }}>Underline disabled</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <Specimen appearance="underline" defaultValue="campus" disabled />\r
              </td>\r
              <td style={{
              ...tdInverse,
              borderBottom: 'none'
            }}>\r
                <Specimen appearance="underline" tone="inverse" defaultValue="campus" disabled />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Default`,`Inverse`,`Underline`,`WithValue`,`Disabled`,`AllAppearances`]}))();export{v as AllAppearances,p as Default,_ as Disabled,m as Inverse,f as Playground,h as Underline,g as WithValue,y as __namedExportsOrder,s as default};