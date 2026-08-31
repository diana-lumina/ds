import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,t as a}from"./pagination-item-Df31IGXR.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{o=t(r(),1),i(),s=n(),c={title:`Components/Navigation/PaginationItem`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'Ítem de paginación. `current` marca la página activa (`aria-current="page"`). Hover, pressed, focus-visible y disabled son estados CSS nativos. La exclusividad de current la administra el contenedor (Pagination).'}}},argTypes:{current:{control:`boolean`,description:'Página actual (`aria-current="page"`)',table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}},children:{control:`text`,description:`Número o contenido visible`}}},l={docs:{canvas:{sourceState:`none`}}},u={args:{current:!1,disabled:!1,children:`1`}},d={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<PaginationItem>1</PaginationItem>`}}},render:()=>(0,s.jsx)(a,{children:`1`})},f={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<PaginationItem current>2</PaginationItem>`}}},render:()=>(0,s.jsx)(a,{current:!0,children:`2`})},p={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<PaginationItem disabled>1</PaginationItem>`}}},render:()=>(0,s.jsx)(a,{disabled:!0,children:`1`})},m={name:`Current & states`,parameters:l,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`};return(0,s.jsx)(`div`,{style:{padding:8},children:(0,s.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Current`}),(0,s.jsx)(`th`,{style:e,children:`Default`}),(0,s.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,s.jsxs)(`tbody`,{children:[(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{style:t,children:`false`}),(0,s.jsx)(`td`,{style:n,children:(0,s.jsx)(a,{children:`1`})}),(0,s.jsx)(`td`,{style:n,children:(0,s.jsx)(a,{disabled:!0,children:`1`})})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{style:{...t,borderBottom:`none`},children:`true`}),(0,s.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,s.jsx)(a,{current:!0,children:`1`})}),(0,s.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,s.jsx)(a,{current:!0,disabled:!0,children:`1`})})]})]})]})})}},h={name:`Ejemplo de uso`,parameters:{docs:{canvas:{sourceState:`none`},description:{story:`Solo como dependencia de un grupo. Current y State son independientes; la exclusividad la administra el contenedor (Pagination).`}}},render:()=>{let[e,t]=(0,o.useState)(2);return(0,s.jsx)(`nav`,{"aria-label":`Paginación`,style:{display:`flex`,gap:4},children:[1,2,3,4,5].map(n=>(0,s.jsx)(a,{current:e===n,onClick:()=>t(n),children:n},n))})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    current: false,
    disabled: false,
    children: '1'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<PaginationItem>1</PaginationItem>\`
      }
    }
  },
  render: () => <PaginationItem>1</PaginationItem>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<PaginationItem current>2</PaginationItem>\`
      }
    }
  },
  render: () => <PaginationItem current>2</PaginationItem>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<PaginationItem disabled>1</PaginationItem>\`
      }
    }
  },
  render: () => <PaginationItem disabled>1</PaginationItem>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Current & states',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 16px 12px',
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
      padding: '16px 16px',
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
            }}>Current</th>\r
              <th style={th}>Default</th>\r
              <th style={th}>Disabled</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>false</td>\r
              <td style={td}>\r
                <PaginationItem>1</PaginationItem>\r
              </td>\r
              <td style={td}>\r
                <PaginationItem disabled>1</PaginationItem>\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...rowLabel,
              borderBottom: 'none'
            }}>true</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <PaginationItem current>1</PaginationItem>\r
              </td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <PaginationItem current disabled>\r
                  1\r
                </PaginationItem>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      description: {
        story: 'Solo como dependencia de un grupo. Current y State son independientes; la exclusividad la administra el contenedor (Pagination).'
      }
    }
  },
  render: () => {
    const [page, setPage] = useState(2);
    const pages = [1, 2, 3, 4, 5];
    return <nav aria-label="Paginación" style={{
      display: 'flex',
      gap: 4
    }}>\r
        {pages.map(value => <PaginationItem key={value} current={page === value} onClick={() => setPage(value)}>\r
            {value}\r
          </PaginationItem>)}\r
      </nav>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Default`,`Current`,`Disabled`,`AllStates`,`InContext`]}))();export{m as AllStates,f as Current,d as Default,p as Disabled,h as InContext,u as Playground,g as __namedExportsOrder,c as default};