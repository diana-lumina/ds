import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-gd-_F7EU.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1qvp8_1`,o={root:a}}));function c({orientation:e=`horizontal`,thickness:t=1,className:n,...r}){return(0,l.jsx)(`div`,{"data-slot":`divider`,"data-orientation":e,"data-thickness":t,role:`separator`,"aria-orientation":e,className:i(o.root,n),...r})}var l,u=e((()=>{n(),r(),s(),l=t(),c.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},thickness:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:``,defaultValue:{value:`1`,computed:!1}}}}}));function d({children:e}){return(0,p.jsx)(`div`,{style:{width:300},children:e})}function f({children:e}){return(0,p.jsx)(`div`,{style:{display:`flex`,alignItems:`stretch`,height:96,paddingInline:8},children:e})}var p,m,h,g,_,v,y,b,x,S,C;e((()=>{u(),p=t(),m={title:`Components/Primitives & Utilities/Divider`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Primitive visual compartida y no interactiva para separar contenido relacionado. Su uso no implica jerarquía, selección ni estado.`}}},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`horizontal: ancho del contenedor · vertical: altura del contenedor`,table:{type:{summary:`string`},defaultValue:{summary:`horizontal`}}},thickness:{control:`select`,options:[1,2],description:`Grosor contractual: 1 · 2`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},className:{control:!1,table:{disable:!0}}}},h={docs:{canvas:{sourceState:`none`}}},g={args:{orientation:`horizontal`,thickness:1},render:e=>e.orientation===`vertical`?(0,p.jsx)(f,{children:(0,p.jsx)(c,{...e})}):(0,p.jsx)(d,{children:(0,p.jsx)(c,{...e})})},_={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Divider orientation="horizontal" thickness={1} />`}}},args:{orientation:`horizontal`,thickness:1},render:e=>(0,p.jsx)(d,{children:(0,p.jsx)(c,{...e})})},v={name:`Horizontal thickness 2`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Divider orientation="horizontal" thickness={2} />`}}},args:{orientation:`horizontal`,thickness:2},render:e=>(0,p.jsx)(d,{children:(0,p.jsx)(c,{...e})})},y={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Divider orientation="vertical" thickness={1} />`}}},args:{orientation:`vertical`,thickness:1},render:e=>(0,p.jsx)(f,{children:(0,p.jsx)(c,{...e})})},b={name:`Vertical thickness 2`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Divider orientation="vertical" thickness={2} />`}}},args:{orientation:`vertical`,thickness:2},render:e=>(0,p.jsx)(f,{children:(0,p.jsx)(c,{...e})})},x={name:`Orientation & thickness`,parameters:h,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,p.jsx)(`div`,{style:{padding:8},children:(0,p.jsxs)(`table`,{style:{borderCollapse:`collapse`,width:`100%`,maxWidth:480},children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Orientation`}),(0,p.jsx)(`th`,{style:e,children:`Thickness 1`}),(0,p.jsx)(`th`,{style:e,children:`Thickness 2`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{style:t,children:`Horizontal`}),(0,p.jsx)(`td`,{style:n,children:(0,p.jsx)(d,{children:(0,p.jsx)(c,{orientation:`horizontal`,thickness:1})})}),(0,p.jsx)(`td`,{style:n,children:(0,p.jsx)(d,{children:(0,p.jsx)(c,{orientation:`horizontal`,thickness:2})})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{style:t,children:`Vertical`}),(0,p.jsx)(`td`,{style:n,children:(0,p.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,p.jsx)(f,{children:(0,p.jsx)(c,{orientation:`vertical`,thickness:1})})})}),(0,p.jsx)(`td`,{style:n,children:(0,p.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,p.jsx)(f,{children:(0,p.jsx)(c,{orientation:`vertical`,thickness:2})})})})]})]})]})})}},S={name:`Ejemplo de uso`,parameters:h,render:()=>(0,p.jsxs)(`div`,{style:{fontFamily:`sans-serif`,fontSize:14,maxWidth:480,display:`flex`,flexDirection:`column`,gap:0,border:`1px solid #e5e5e5`,borderRadius:8,overflow:`hidden`,background:`#fff`},children:[(0,p.jsx)(`div`,{style:{padding:`12px 16px`,fontWeight:600},children:`Cuenta`}),(0,p.jsx)(c,{orientation:`horizontal`,thickness:1}),(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`stretch`,minHeight:48,paddingInline:16},children:[(0,p.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,paddingBlock:12},children:`Perfil`}),(0,p.jsx)(`div`,{style:{display:`flex`,alignItems:`stretch`,paddingBlock:12,paddingInline:16},children:(0,p.jsx)(c,{orientation:`vertical`,thickness:1})}),(0,p.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,paddingBlock:12},children:`Configuración`}),(0,p.jsx)(`div`,{style:{display:`flex`,alignItems:`stretch`,paddingBlock:12,paddingInline:16},children:(0,p.jsx)(c,{orientation:`vertical`,thickness:1})}),(0,p.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,paddingBlock:12},children:`Ayuda`})]}),(0,p.jsx)(c,{orientation:`horizontal`,thickness:1}),(0,p.jsx)(`div`,{style:{padding:`12px 16px`,color:`#666`},children:`Cerrar sesión`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    thickness: 1
  },
  render: args => args.orientation === 'vertical' ? <VerticalFrame>\r
        <Divider {...args} />\r
      </VerticalFrame> : <HorizontalFrame>\r
        <Divider {...args} />\r
      </HorizontalFrame>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Uso mínimo: separar contenido relacionado.`,...S.parameters?.docs?.description}}},C=[`Playground`,`Horizontal`,`HorizontalThick`,`Vertical`,`VerticalThick`,`AllStates`,`InContext`]}))();export{x as AllStates,_ as Horizontal,v as HorizontalThick,S as InContext,g as Playground,y as Vertical,b as VerticalThick,C as __namedExportsOrder,m as default};