import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,tt as r}from"./icons-QF8wPxMP.js";import{t as i}from"./table-cell-f5mRE3ml.js";import{t as a}from"./table-header-cell-BneuTea9.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./table-row-DT8lMRok.js";var f=e((()=>{c()}));function p(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{label:`Nombre`,icon:(0,m.jsx)(r,{})}),(0,m.jsx)(a,{label:`Programa`}),(0,m.jsx)(a,{label:`Campus`,icon:(0,m.jsx)(r,{})})]})}var m,h,g,_,v,y,b;e((()=>{n(),l(),o(),f(),s(),m=t(),{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,g=[{id:`ana`,name:`Ana Beltrán`,program:`Diseño de interfaces`,campus:`Campus Monterrey`},{id:`luis`,name:`Luis Mora`,program:`UX Research aplicado`,campus:`Campus Ciudad de México`},{id:`marina`,name:`Marina Solís`,program:`Accesibilidad web`,campus:`En línea`}],_={title:`Components/Data Display/Table`,component:u,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Wrapper de TableHeaderCell y TableRow. Border radius 16px y borde 1px #D4D4D4.`}}},args:{selectedRow:`ana`},argTypes:{selectedRow:{name:`row selected`,control:`select`,options:[`none`,...g.map(e=>e.id)],labels:{none:`Ninguna`,ana:`Ana Beltrán`,luis:`Luis Mora`,marina:`Marina Solís`},description:`Fila seleccionada`,table:{defaultValue:{summary:`ana`}}},header:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}}},v={render:function(e){let[,t]=h();return(0,m.jsx)(u,{header:p(),children:g.map(n=>(0,m.jsxs)(d,{selected:e.selectedRow===n.id,onClick:()=>t({selectedRow:n.id}),children:[(0,m.jsx)(i,{children:n.name}),(0,m.jsx)(i,{children:n.program}),(0,m.jsx)(i,{children:n.campus})]},n.id))})}},y={argTypes:{selectedRow:{control:!1,table:{disable:!0}}},parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Table
  header={
    <>
      <TableHeaderCell label="Nombre" />
      <TableHeaderCell label="Programa" />
      <TableHeaderCell label="Campus" />
    </>
  }
>
  <TableRow>
    <TableCell>Ana Beltrán</TableCell>
    <TableCell>Diseño de interfaces</TableCell>
    <TableCell>Campus Monterrey</TableCell>
  </TableRow>
</Table>`}}},render:()=>(0,m.jsxs)(u,{header:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{label:`Nombre`}),(0,m.jsx)(a,{label:`Programa`}),(0,m.jsx)(a,{label:`Campus`})]}),children:[(0,m.jsxs)(d,{children:[(0,m.jsx)(i,{children:`Ana Beltrán`}),(0,m.jsx)(i,{children:`Diseño de interfaces`}),(0,m.jsx)(i,{children:`Campus Monterrey`})]}),(0,m.jsxs)(d,{children:[(0,m.jsx)(i,{children:`Luis Mora`}),(0,m.jsx)(i,{children:`UX Research aplicado`}),(0,m.jsx)(i,{children:`Campus Ciudad de México`})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function PlaygroundRender(args) {
    const [, updateArgs] = useArgs<TableStoryArgs>();
    return <Table header={header()}>\r
        {ROWS.map(row => <TableRow key={row.id} selected={args.selectedRow === row.id} onClick={() => updateArgs({
        selectedRow: row.id
      })}>\r
            <TableCell>{row.name}</TableCell>\r
            <TableCell>{row.program}</TableCell>\r
            <TableCell>{row.campus}</TableCell>\r
          </TableRow>)}\r
      </Table>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  argTypes: {
    selectedRow: {
      control: false,
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Table
  header={
    <>
      <TableHeaderCell label="Nombre" />
      <TableHeaderCell label="Programa" />
      <TableHeaderCell label="Campus" />
    </>
  }
>
  <TableRow>
    <TableCell>Ana Beltrán</TableCell>
    <TableCell>Diseño de interfaces</TableCell>
    <TableCell>Campus Monterrey</TableCell>
  </TableRow>
</Table>\`
      }
    }
  },
  render: () => <Table header={<>\r
          <TableHeaderCell label="Nombre" />\r
          <TableHeaderCell label="Programa" />\r
          <TableHeaderCell label="Campus" />\r
        </>}>\r
      <TableRow>\r
        <TableCell>Ana Beltrán</TableCell>\r
        <TableCell>Diseño de interfaces</TableCell>\r
        <TableCell>Campus Monterrey</TableCell>\r
      </TableRow>\r
      <TableRow>\r
        <TableCell>Luis Mora</TableCell>\r
        <TableCell>UX Research aplicado</TableCell>\r
        <TableCell>Campus Ciudad de México</TableCell>\r
      </TableRow>\r
    </Table>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Default`]}))();export{y as Default,v as Playground,b as __namedExportsOrder,_ as default};