import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,tt as r}from"./icons-QF8wPxMP.js";import{n as i,t as a}from"./table-header-cell-BneuTea9.js";function o({children:e}){return(0,s.jsx)(`table`,{style:{borderCollapse:`collapse`},children:(0,s.jsx)(`thead`,{children:(0,s.jsx)(`tr`,{children:e})})})}var s,c,l,u,d,f,p;e((()=>{n(),i(),s=t(),c={title:`Components/Data Display/TableHeaderCell`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Encabezado de columna (Semantic/Label/Medium/Strong). Ícono trailing opcional. Estados: default, hover y focus-visible (CSS).`}}},argTypes:{label:{control:`text`},icon:{control:!1},className:{control:!1,table:{disable:!0}}}},l={args:{label:`Nombre`},render:e=>(0,s.jsx)(o,{children:(0,s.jsx)(a,{...e,icon:(0,s.jsx)(r,{})})})},u={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<TableHeaderCell label="Nombre" />`}}},render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(a,{label:`Nombre`})})},d={name:`With icon`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<TableHeaderCell label="Nombre" icon={<CaretDownIcon />} />`}}},render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(a,{label:`Nombre`,icon:(0,s.jsx)(r,{})})})},f={name:`In a row`,parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,s.jsxs)(o,{children:[(0,s.jsx)(a,{label:`Nombre`,icon:(0,s.jsx)(r,{})}),(0,s.jsx)(a,{label:`Programa`}),(0,s.jsx)(a,{label:`Campus`,icon:(0,s.jsx)(r,{})})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nombre'
  },
  render: args => <TableFrame>\r
      <TableHeaderCell {...args} icon={<CaretDownIcon />} />\r
    </TableFrame>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<TableHeaderCell label="Nombre" />\`
      }
    }
  },
  render: () => <TableFrame>\r
      <TableHeaderCell label="Nombre" />\r
    </TableFrame>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With icon',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<TableHeaderCell label="Nombre" icon={<CaretDownIcon />} />\`
      }
    }
  },
  render: () => <TableFrame>\r
      <TableHeaderCell label="Nombre" icon={<CaretDownIcon />} />\r
    </TableFrame>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'In a row',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none' as const
      }
    }
  },
  render: () => <TableFrame>\r
      <TableHeaderCell label="Nombre" icon={<CaretDownIcon />} />\r
      <TableHeaderCell label="Programa" />\r
      <TableHeaderCell label="Campus" icon={<CaretDownIcon />} />\r
    </TableFrame>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Default`,`WithIcon`,`InRow`]}))();export{u as Default,f as InRow,l as Playground,d as WithIcon,p as __namedExportsOrder,c as default};