import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,t as r}from"./table-cell-f5mRE3ml.js";function i({children:e}){return(0,a.jsx)(`table`,{style:{borderCollapse:`collapse`},children:(0,a.jsx)(`tbody`,{children:(0,a.jsx)(`tr`,{children:e})})})}var a,o,s,c,l,u;e((()=>{n(),a=t(),o={title:`Components/Data Display/TableCell`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Celda de tabla (Semantic/Label/Medium). Se usa dentro de un <tr>. El contenido va en children.`}}},argTypes:{children:{control:`text`},className:{control:!1,table:{disable:!0}}}},s={args:{children:`Ana Beltrán`},render:e=>(0,a.jsx)(i,{children:(0,a.jsx)(r,{...e})})},c={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<TableCell>Ana Beltrán</TableCell>`}}},render:()=>(0,a.jsx)(i,{children:(0,a.jsx)(r,{children:`Ana Beltrán`})})},l={name:`In a row`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<tr>
  <TableCell>Ana Beltrán</TableCell>
  <TableCell>Diseño de interfaces</TableCell>
  <TableCell>Campus Monterrey</TableCell>
</tr>`}}},render:()=>(0,a.jsxs)(i,{children:[(0,a.jsx)(r,{children:`Ana Beltrán`}),(0,a.jsx)(r,{children:`Diseño de interfaces`}),(0,a.jsx)(r,{children:`Campus Monterrey`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ana Beltrán'
  },
  render: args => <TableFrame>\r
      <TableCell {...args} />\r
    </TableFrame>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<TableCell>Ana Beltrán</TableCell>\`
      }
    }
  },
  render: () => <TableFrame>\r
      <TableCell>Ana Beltrán</TableCell>\r
    </TableFrame>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'In a row',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<tr>
  <TableCell>Ana Beltrán</TableCell>
  <TableCell>Diseño de interfaces</TableCell>
  <TableCell>Campus Monterrey</TableCell>
</tr>\`
      }
    }
  },
  render: () => <TableFrame>\r
      <TableCell>Ana Beltrán</TableCell>\r
      <TableCell>Diseño de interfaces</TableCell>\r
      <TableCell>Campus Monterrey</TableCell>\r
    </TableFrame>
}`,...l.parameters?.docs?.source}}},u=[`Playground`,`Default`,`InRow`]}))();export{c as Default,l as InRow,s as Playground,u as __namedExportsOrder,o as default};