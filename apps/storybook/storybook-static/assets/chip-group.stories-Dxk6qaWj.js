import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-BjWpqfAg.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";import{n as a,t as o}from"./filter-chip-CS9GxJaz.js";import{n as s,t as c}from"./input-chip-DMAyj78V.js";var l,u,d=e((()=>{l=`_root_kjs86_1`,u={root:l}}));function f({className:e,children:t,...n}){return(0,p.jsx)(`div`,{"data-slot":`chip-group`,className:i(u.root,e),...n,children:t})}var p,m=e((()=>{n(),r(),d(),p=t(),f.__docgenInfo={description:`Pattern compartido para componer chips relacionados mediante instancias reales\r
de FilterChip o InputChip. No introduce una acción ni apariencia propias;\r
organiza wrap y gap. Alignment es responsabilidad del contenedor padre.`,methods:[],displayName:`ChipGroup`}})),h,g,_,v,y,b,x,S,C;e((()=>{a(),s(),m(),h=t(),g={title:`Components/Labels & Status/ChipGroup`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Pattern compartido para componer chips relacionados mediante instancias reales de FilterChip o InputChip. No introduce una acción ni apariencia propias; organiza wrap y gap. La cantidad, size, selected y labels los aporta cada chip. Alignment es responsabilidad del contenedor padre. El wrapper no es focusable ni asume role=toolbar: Tab recorre cada chip en orden DOM.`}}},argTypes:{children:{control:!1,description:`SLOT nativo compartido: instancias reales de FilterChip o InputChip. Cantidad y API las aporta cada chip.`,table:{type:{summary:`ReactNode`}}},className:{control:!1,table:{disable:!0}}}},_={docs:{canvas:{sourceState:`none`}}},v={render:e=>(0,h.jsxs)(f,{...e,children:[(0,h.jsx)(o,{label:`Virtual`,selected:!0}),(0,h.jsx)(o,{label:`Presencial`}),(0,h.jsx)(o,{label:`Híbrido`})]})},y={name:`Filter Chip`,parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Grupo de FilterChip. Selected y State viven en cada instancia. El grupo solo envuelve y hace wrap.`},source:{code:`<ChipGroup>
  <FilterChip label="Virtual" selected />
  <FilterChip label="Presencial" />
  <FilterChip label="Híbrido" />
</ChipGroup>`}}},render:()=>(0,h.jsxs)(f,{children:[(0,h.jsx)(o,{label:`Virtual`,selected:!0}),(0,h.jsx)(o,{label:`Presencial`}),(0,h.jsx)(o,{label:`Híbrido`})]})},b={name:`Input Chip`,parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Grupo de InputChip. La remoción (onClose) la resuelve cada instancia; el grupo no duplica estados ni tokens.`},source:{code:`<ChipGroup>
  <InputChip label="UX Research" onClose={() => {}} />
  <InputChip label="Posgrado" onClose={() => {}} />
  <InputChip label="Campus Monterrey" onClose={() => {}} />
</ChipGroup>`}}},render:()=>(0,h.jsxs)(f,{children:[(0,h.jsx)(c,{label:`UX Research`,onClose:()=>{}}),(0,h.jsx)(c,{label:`Posgrado`,onClose:()=>{}}),(0,h.jsx)(c,{label:`Campus Monterrey`,onClose:()=>{}})]})},x={name:`Wrap`,parameters:{..._,docs:{..._.docs,description:{story:`flex-wrap: wrap. No hay variantes por cantidad. Cuando el ancho no alcanza, los chips bajan de línea. Alignment interno Hug: align-items y align-content flex-start.`}}},render:()=>(0,h.jsx)(`div`,{style:{width:220,padding:8,border:`1px solid #eee`,borderRadius:8},children:(0,h.jsxs)(f,{children:[(0,h.jsx)(o,{label:`Virtual`,selected:!0}),(0,h.jsx)(o,{label:`Presencial`}),(0,h.jsx)(o,{label:`Híbrido`}),(0,h.jsx)(o,{label:`Sincrónico`}),(0,h.jsx)(o,{label:`Asincrónico`})]})})},S={name:`Ejemplo de uso`,parameters:{..._,docs:{..._.docs,description:{story:`La alineación se resuelve desde el padre. FilterChip e InputChip no se mezclan en el mismo grupo de uso: cada uno cubre un patrón distinto (filtrar vs valor aplicado).`}}},render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,fontFamily:`sans-serif`,maxWidth:480},children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{style:{fontSize:13,color:`#666`,margin:`0 0 8px`},children:`Modalidad`}),(0,h.jsxs)(f,{children:[(0,h.jsx)(o,{label:`Virtual`,selected:!0}),(0,h.jsx)(o,{label:`Presencial`}),(0,h.jsx)(o,{label:`Híbrido`})]})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{style:{fontSize:13,color:`#666`,margin:`0 0 8px`},children:`Filtros aplicados`}),(0,h.jsxs)(f,{children:[(0,h.jsx)(c,{label:`UX Research`,onClose:()=>{}}),(0,h.jsx)(c,{label:`Campus Monterrey`,onClose:()=>{}})]})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <ChipGroup {...args}>\r
      <FilterChip label="Virtual" selected />\r
      <FilterChip label="Presencial" />\r
      <FilterChip label="Híbrido" />\r
    </ChipGroup>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Filter Chip',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Grupo de FilterChip. Selected y State viven en cada instancia. El grupo solo envuelve y hace wrap.'
      },
      source: {
        code: \`<ChipGroup>
  <FilterChip label="Virtual" selected />
  <FilterChip label="Presencial" />
  <FilterChip label="Híbrido" />
</ChipGroup>\`
      }
    }
  },
  render: () => <ChipGroup>\r
      <FilterChip label="Virtual" selected />\r
      <FilterChip label="Presencial" />\r
      <FilterChip label="Híbrido" />\r
    </ChipGroup>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Input Chip',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Grupo de InputChip. La remoción (onClose) la resuelve cada instancia; el grupo no duplica estados ni tokens.'
      },
      source: {
        code: \`<ChipGroup>
  <InputChip label="UX Research" onClose={() => {}} />
  <InputChip label="Posgrado" onClose={() => {}} />
  <InputChip label="Campus Monterrey" onClose={() => {}} />
</ChipGroup>\`
      }
    }
  },
  render: () => <ChipGroup>\r
      <InputChip label="UX Research" onClose={() => {}} />\r
      <InputChip label="Posgrado" onClose={() => {}} />\r
      <InputChip label="Campus Monterrey" onClose={() => {}} />\r
    </ChipGroup>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Wrap',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story: 'flex-wrap: wrap. No hay variantes por cantidad. Cuando el ancho no alcanza, los chips bajan de línea. Alignment interno Hug: align-items y align-content flex-start.'
      }
    }
  },
  render: () => <div style={{
    width: 220,
    padding: 8,
    border: '1px solid #eee',
    borderRadius: 8
  }}>\r
      <ChipGroup>\r
        <FilterChip label="Virtual" selected />\r
        <FilterChip label="Presencial" />\r
        <FilterChip label="Híbrido" />\r
        <FilterChip label="Sincrónico" />\r
        <FilterChip label="Asincrónico" />\r
      </ChipGroup>\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story: 'La alineación se resuelve desde el padre. FilterChip e InputChip no se mezclan en el mismo grupo de uso: cada uno cubre un patrón distinto (filtrar vs valor aplicado).'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    fontFamily: 'sans-serif',
    maxWidth: 480
  }}>\r
      <div>\r
        <p style={{
        fontSize: 13,
        color: '#666',
        margin: '0 0 8px'
      }}>Modalidad</p>\r
        <ChipGroup>\r
          <FilterChip label="Virtual" selected />\r
          <FilterChip label="Presencial" />\r
          <FilterChip label="Híbrido" />\r
        </ChipGroup>\r
      </div>\r
      <div>\r
        <p style={{
        fontSize: 13,
        color: '#666',
        margin: '0 0 8px'
      }}>Filtros aplicados</p>\r
        <ChipGroup>\r
          <InputChip label="UX Research" onClose={() => {}} />\r
          <InputChip label="Campus Monterrey" onClose={() => {}} />\r
        </ChipGroup>\r
      </div>\r
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`FilterChips`,`InputChips`,`Wrap`,`InContext`]}))();export{y as FilterChips,S as InContext,b as InputChips,v as Playground,x as Wrap,C as __namedExportsOrder,g as default};