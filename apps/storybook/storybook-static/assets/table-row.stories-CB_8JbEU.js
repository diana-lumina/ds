import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{t as n}from"./table-cell-f5mRE3ml.js";import{t as r}from"./table-header-cell-BneuTea9.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./table-row-DT8lMRok.js";var u=e((()=>{a()}));function d(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n,{children:`Ana Beltrán`}),(0,p.jsx)(n,{children:`Diseño de interfaces`}),(0,p.jsx)(n,{children:`Campus Monterrey`})]})}function f({children:e}){return(0,p.jsx)(`table`,{style:{borderCollapse:`collapse`,width:`100%`},children:(0,p.jsx)(`tbody`,{children:e})})}var p,m,h,g,_,v,y,b;e((()=>{s(),i(),u(),o(),p=t(),m={title:`Components/Data Display/TableRow`,component:l,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Fila de tabla. Se compone de TableCell. Divider thickness 1 en el bottom. Estados: default, hover, selected y selected-hover (CSS).`}}},argTypes:{selected:{control:`boolean`,table:{defaultValue:{summary:`false`}}},children:{control:!1},className:{control:!1,table:{disable:!0}}}},h={args:{selected:!1},render:e=>(0,p.jsx)(f,{children:(0,p.jsx)(l,{...e,children:d()})})},g={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<TableRow>
  <TableCell>Ana Beltrán</TableCell>
  <TableCell>Diseño de interfaces</TableCell>
  <TableCell>Campus Monterrey</TableCell>
</TableRow>`}}},render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(l,{children:d()})})},_={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<TableRow selected>
  <TableCell>Ana Beltrán</TableCell>
  …
</TableRow>`}}},render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(l,{selected:!0,children:d()})})},v={parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px 0`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,verticalAlign:`middle`,padding:`16px 24px 16px 0`,whiteSpace:`nowrap`};return(0,p.jsx)(`div`,{style:{padding:8},children:(0,p.jsxs)(`table`,{style:{borderCollapse:`collapse`,width:`100%`},children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{style:e,children:`State`}),(0,p.jsx)(`th`,{style:e,children:`TableRow`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{style:t,children:`default / hover`}),(0,p.jsx)(`td`,{children:(0,p.jsx)(f,{children:(0,p.jsx)(l,{children:d()})})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{style:t,children:`selected / selected-hover`}),(0,p.jsx)(`td`,{children:(0,p.jsx)(f,{children:(0,p.jsx)(l,{selected:!0,children:d()})})})]})]})]})})}},y={name:`In a table`,parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,p.jsxs)(c,{header:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{label:`Nombre`}),(0,p.jsx)(r,{label:`Programa`}),(0,p.jsx)(r,{label:`Campus`})]}),children:[(0,p.jsxs)(l,{selected:!0,children:[(0,p.jsx)(n,{children:`Ana Beltrán`}),(0,p.jsx)(n,{children:`Diseño de interfaces`}),(0,p.jsx)(n,{children:`Campus Monterrey`})]}),(0,p.jsxs)(l,{children:[(0,p.jsx)(n,{children:`Luis Mora`}),(0,p.jsx)(n,{children:`UX Research aplicado`}),(0,p.jsx)(n,{children:`Campus Ciudad de México`})]}),(0,p.jsxs)(l,{children:[(0,p.jsx)(n,{children:`Marina Solís`}),(0,p.jsx)(n,{children:`Accesibilidad web`}),(0,p.jsx)(n,{children:`En línea`})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false
  },
  render: args => <TableFrame>\r
      <TableRow {...args}>{cells()}</TableRow>\r
    </TableFrame>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<TableRow>
  <TableCell>Ana Beltrán</TableCell>
  <TableCell>Diseño de interfaces</TableCell>
  <TableCell>Campus Monterrey</TableCell>
</TableRow>\`
      }
    }
  },
  render: () => <TableFrame>\r
      <TableRow>{cells()}</TableRow>\r
    </TableFrame>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<TableRow selected>
  <TableCell>Ana Beltrán</TableCell>
  …
</TableRow>\`
      }
    }
  },
  render: () => <TableFrame>\r
      <TableRow selected>{cells()}</TableRow>\r
    </TableFrame>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none' as const
      }
    }
  },
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      padding: '0 16px 12px 0',
      borderBottom: '1px solid #eee'
    };
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      whiteSpace: 'nowrap'
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse',
        width: '100%'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={th}>State</th>\r
              <th style={th}>TableRow</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>default / hover</td>\r
              <td>\r
                <TableFrame>\r
                  <TableRow>{cells()}</TableRow>\r
                </TableFrame>\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>selected / selected-hover</td>\r
              <td>\r
                <TableFrame>\r
                  <TableRow selected>{cells()}</TableRow>\r
                </TableFrame>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'In a table',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none' as const
      }
    }
  },
  render: () => <Table header={<>\r
          <TableHeaderCell label="Nombre" />\r
          <TableHeaderCell label="Programa" />\r
          <TableHeaderCell label="Campus" />\r
        </>}>\r
      <TableRow selected>\r
        <TableCell>Ana Beltrán</TableCell>\r
        <TableCell>Diseño de interfaces</TableCell>\r
        <TableCell>Campus Monterrey</TableCell>\r
      </TableRow>\r
      <TableRow>\r
        <TableCell>Luis Mora</TableCell>\r
        <TableCell>UX Research aplicado</TableCell>\r
        <TableCell>Campus Ciudad de México</TableCell>\r
      </TableRow>\r
      <TableRow>\r
        <TableCell>Marina Solís</TableCell>\r
        <TableCell>Accesibilidad web</TableCell>\r
        <TableCell>En línea</TableCell>\r
      </TableRow>\r
    </Table>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Default`,`Selected`,`States`,`InTable`]}))();export{g as Default,y as InTable,h as Playground,_ as Selected,v as States,b as __namedExportsOrder,m as default};