import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,t as r}from"./divider-C9p_2JqD.js";function i({children:e}){return(0,o.jsx)(`div`,{style:{width:300},children:e})}function a({children:e}){return(0,o.jsx)(`div`,{style:{display:`flex`,alignItems:`stretch`,height:96,paddingInline:8},children:e})}var o,s,c,l,u,d,f,p,m,h,g;e((()=>{n(),o=t(),s={title:`Components/Primitives & Utilities/Divider`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Primitive visual compartida y no interactiva para separar contenido relacionado. Su uso no implica jerarquía, selección ni estado.`}}},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`horizontal: ancho del contenedor · vertical: altura del contenedor`,table:{type:{summary:`string`},defaultValue:{summary:`horizontal`}}},thickness:{control:`select`,options:[1,2],description:`Grosor contractual: 1 · 2`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},className:{control:!1,table:{disable:!0}}}},c={docs:{canvas:{sourceState:`none`}}},l={args:{orientation:`horizontal`,thickness:1},render:e=>e.orientation===`vertical`?(0,o.jsx)(a,{children:(0,o.jsx)(r,{...e})}):(0,o.jsx)(i,{children:(0,o.jsx)(r,{...e})})},u={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Divider orientation="horizontal" thickness={1} />`}}},args:{orientation:`horizontal`,thickness:1},render:e=>(0,o.jsx)(i,{children:(0,o.jsx)(r,{...e})})},d={name:`Horizontal thickness 2`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Divider orientation="horizontal" thickness={2} />`}}},args:{orientation:`horizontal`,thickness:2},render:e=>(0,o.jsx)(i,{children:(0,o.jsx)(r,{...e})})},f={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Divider orientation="vertical" thickness={1} />`}}},args:{orientation:`vertical`,thickness:1},render:e=>(0,o.jsx)(a,{children:(0,o.jsx)(r,{...e})})},p={name:`Vertical thickness 2`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Divider orientation="vertical" thickness={2} />`}}},args:{orientation:`vertical`,thickness:2},render:e=>(0,o.jsx)(a,{children:(0,o.jsx)(r,{...e})})},m={name:`Orientation & thickness`,parameters:c,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,o.jsx)(`div`,{style:{padding:8},children:(0,o.jsxs)(`table`,{style:{borderCollapse:`collapse`,width:`100%`,maxWidth:480},children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Orientation`}),(0,o.jsx)(`th`,{style:e,children:`Thickness 1`}),(0,o.jsx)(`th`,{style:e,children:`Thickness 2`})]})}),(0,o.jsxs)(`tbody`,{children:[(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{style:t,children:`Horizontal`}),(0,o.jsx)(`td`,{style:n,children:(0,o.jsx)(i,{children:(0,o.jsx)(r,{orientation:`horizontal`,thickness:1})})}),(0,o.jsx)(`td`,{style:n,children:(0,o.jsx)(i,{children:(0,o.jsx)(r,{orientation:`horizontal`,thickness:2})})})]}),(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{style:t,children:`Vertical`}),(0,o.jsx)(`td`,{style:n,children:(0,o.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,o.jsx)(a,{children:(0,o.jsx)(r,{orientation:`vertical`,thickness:1})})})}),(0,o.jsx)(`td`,{style:n,children:(0,o.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,o.jsx)(a,{children:(0,o.jsx)(r,{orientation:`vertical`,thickness:2})})})})]})]})]})})}},h={name:`Ejemplo de uso`,parameters:c,render:()=>(0,o.jsxs)(`div`,{style:{fontFamily:`sans-serif`,fontSize:14,maxWidth:480,display:`flex`,flexDirection:`column`,gap:0,border:`1px solid #e5e5e5`,borderRadius:8,overflow:`hidden`,background:`#fff`},children:[(0,o.jsx)(`div`,{style:{padding:`12px 16px`,fontWeight:600},children:`Cuenta`}),(0,o.jsx)(r,{orientation:`horizontal`,thickness:1}),(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`stretch`,minHeight:48,paddingInline:16},children:[(0,o.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,paddingBlock:12},children:`Perfil`}),(0,o.jsx)(`div`,{style:{display:`flex`,alignItems:`stretch`,paddingBlock:12,paddingInline:16},children:(0,o.jsx)(r,{orientation:`vertical`,thickness:1})}),(0,o.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,paddingBlock:12},children:`Configuración`}),(0,o.jsx)(`div`,{style:{display:`flex`,alignItems:`stretch`,paddingBlock:12,paddingInline:16},children:(0,o.jsx)(r,{orientation:`vertical`,thickness:1})}),(0,o.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,paddingBlock:12},children:`Ayuda`})]}),(0,o.jsx)(r,{orientation:`horizontal`,thickness:1}),(0,o.jsx)(`div`,{style:{padding:`12px 16px`,color:`#666`},children:`Cerrar sesión`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    thickness: 1
  },
  render: args => args.orientation === 'vertical' ? <VerticalFrame>\r
        <Divider {...args} />\r
      </VerticalFrame> : <HorizontalFrame>\r
        <Divider {...args} />\r
      </HorizontalFrame>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Divider orientation="horizontal" thickness={1} />\`
      }
    }
  },
  args: {
    orientation: 'horizontal',
    thickness: 1
  },
  render: args => <HorizontalFrame>\r
      <Divider {...args} />\r
    </HorizontalFrame>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal thickness 2',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Divider orientation="horizontal" thickness={2} />\`
      }
    }
  },
  args: {
    orientation: 'horizontal',
    thickness: 2
  },
  render: args => <HorizontalFrame>\r
      <Divider {...args} />\r
    </HorizontalFrame>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Divider orientation="vertical" thickness={1} />\`
      }
    }
  },
  args: {
    orientation: 'vertical',
    thickness: 1
  },
  render: args => <VerticalFrame>\r
      <Divider {...args} />\r
    </VerticalFrame>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Vertical thickness 2',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Divider orientation="vertical" thickness={2} />\`
      }
    }
  },
  args: {
    orientation: 'vertical',
    thickness: 2
  },
  render: args => <VerticalFrame>\r
      <Divider {...args} />\r
    </VerticalFrame>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Orientation & thickness',
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
        borderCollapse: 'collapse',
        width: '100%',
        maxWidth: 480
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }}>Orientation</th>\r
              <th style={th}>Thickness 1</th>\r
              <th style={th}>Thickness 2</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Horizontal</td>\r
              <td style={td}>\r
                <HorizontalFrame>\r
                  <Divider orientation="horizontal" thickness={1} />\r
                </HorizontalFrame>\r
              </td>\r
              <td style={td}>\r
                <HorizontalFrame>\r
                  <Divider orientation="horizontal" thickness={2} />\r
                </HorizontalFrame>\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Vertical</td>\r
              <td style={td}>\r
                <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>\r
                  <VerticalFrame>\r
                    <Divider orientation="vertical" thickness={1} />\r
                  </VerticalFrame>\r
                </div>\r
              </td>\r
              <td style={td}>\r
                <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>\r
                  <VerticalFrame>\r
                    <Divider orientation="vertical" thickness={2} />\r
                  </VerticalFrame>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => <div style={{
    fontFamily: 'sans-serif',
    fontSize: 14,
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    border: '1px solid #e5e5e5',
    borderRadius: 8,
    overflow: 'hidden',
    background: '#fff'
  }}>\r
      <div style={{
      padding: '12px 16px',
      fontWeight: 600
    }}>Cuenta</div>\r
      <Divider orientation="horizontal" thickness={1} />\r
      <div style={{
      display: 'flex',
      alignItems: 'stretch',
      minHeight: 48,
      paddingInline: 16
    }}>\r
        <span style={{
        display: 'flex',
        alignItems: 'center',
        paddingBlock: 12
      }}>Perfil</span>\r
        <div style={{
        display: 'flex',
        alignItems: 'stretch',
        paddingBlock: 12,
        paddingInline: 16
      }}>\r
          <Divider orientation="vertical" thickness={1} />\r
        </div>\r
        <span style={{
        display: 'flex',
        alignItems: 'center',
        paddingBlock: 12
      }}>Configuración</span>\r
        <div style={{
        display: 'flex',
        alignItems: 'stretch',
        paddingBlock: 12,
        paddingInline: 16
      }}>\r
          <Divider orientation="vertical" thickness={1} />\r
        </div>\r
        <span style={{
        display: 'flex',
        alignItems: 'center',
        paddingBlock: 12
      }}>Ayuda</span>\r
      </div>\r
      <Divider orientation="horizontal" thickness={1} />\r
      <div style={{
      padding: '12px 16px',
      color: '#666'
    }}>Cerrar sesión</div>\r
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Uso mínimo: separar contenido relacionado.`,...h.parameters?.docs?.description}}},g=[`Playground`,`Horizontal`,`HorizontalThick`,`Vertical`,`VerticalThick`,`AllStates`,`InContext`]}))();export{m as AllStates,u as Horizontal,d as HorizontalThick,h as InContext,l as Playground,f as Vertical,p as VerticalThick,g as __namedExportsOrder,s as default};