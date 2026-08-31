import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,t as r}from"./filter-chip-0vBN8EEE.js";import{n as i,t as a}from"./input-chip-DKwSjYVJ.js";import{n as o,t as s}from"./chip-group-B6JA9JdP.js";var c,l,u,d,f,p,m,h,g;e((()=>{n(),i(),o(),c=t(),l={title:`Components/Labels & Status/ChipGroup`,component:s,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Pattern compartido para componer chips relacionados mediante instancias reales de FilterChip o InputChip. No introduce una acción ni apariencia propias; organiza wrap y gap. La cantidad, size, selected y labels los aporta cada chip. Alignment es responsabilidad del contenedor padre. El wrapper no es focusable ni asume role=toolbar: Tab recorre cada chip en orden DOM.`}}},argTypes:{children:{control:!1,description:`SLOT nativo compartido: instancias reales de FilterChip o InputChip. Cantidad y API las aporta cada chip.`,table:{type:{summary:`ReactNode`}}},className:{control:!1,table:{disable:!0}}}},u={docs:{canvas:{sourceState:`none`}}},d={render:e=>(0,c.jsxs)(s,{...e,children:[(0,c.jsx)(r,{label:`Virtual`,selected:!0}),(0,c.jsx)(r,{label:`Presencial`}),(0,c.jsx)(r,{label:`Híbrido`})]})},f={name:`Filter Chip`,parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Grupo de FilterChip. Selected y State viven en cada instancia. El grupo solo envuelve y hace wrap.`},source:{code:`<ChipGroup>
  <FilterChip label="Virtual" selected />
  <FilterChip label="Presencial" />
  <FilterChip label="Híbrido" />
</ChipGroup>`}}},render:()=>(0,c.jsxs)(s,{children:[(0,c.jsx)(r,{label:`Virtual`,selected:!0}),(0,c.jsx)(r,{label:`Presencial`}),(0,c.jsx)(r,{label:`Híbrido`})]})},p={name:`Input Chip`,parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Grupo de InputChip. La remoción (onClose) la resuelve cada instancia; el grupo no duplica estados ni tokens.`},source:{code:`<ChipGroup>
  <InputChip label="UX Research" onClose={() => {}} />
  <InputChip label="Posgrado" onClose={() => {}} />
  <InputChip label="Campus Monterrey" onClose={() => {}} />
</ChipGroup>`}}},render:()=>(0,c.jsxs)(s,{children:[(0,c.jsx)(a,{label:`UX Research`,onClose:()=>{}}),(0,c.jsx)(a,{label:`Posgrado`,onClose:()=>{}}),(0,c.jsx)(a,{label:`Campus Monterrey`,onClose:()=>{}})]})},m={name:`Wrap`,parameters:{...u,docs:{...u.docs,description:{story:`flex-wrap: wrap. No hay variantes por cantidad. Cuando el ancho no alcanza, los chips bajan de línea. Alignment interno Hug: align-items y align-content flex-start.`}}},render:()=>(0,c.jsx)(`div`,{style:{width:220,padding:8,border:`1px solid #eee`,borderRadius:8},children:(0,c.jsxs)(s,{children:[(0,c.jsx)(r,{label:`Virtual`,selected:!0}),(0,c.jsx)(r,{label:`Presencial`}),(0,c.jsx)(r,{label:`Híbrido`}),(0,c.jsx)(r,{label:`Sincrónico`}),(0,c.jsx)(r,{label:`Asincrónico`})]})})},h={name:`Ejemplo de uso`,parameters:{...u,docs:{...u.docs,description:{story:`La alineación se resuelve desde el padre. FilterChip e InputChip no se mezclan en el mismo grupo de uso: cada uno cubre un patrón distinto (filtrar vs valor aplicado).`}}},render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,fontFamily:`sans-serif`,maxWidth:480},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{style:{fontSize:13,color:`#666`,margin:`0 0 8px`},children:`Modalidad`}),(0,c.jsxs)(s,{children:[(0,c.jsx)(r,{label:`Virtual`,selected:!0}),(0,c.jsx)(r,{label:`Presencial`}),(0,c.jsx)(r,{label:`Híbrido`})]})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{style:{fontSize:13,color:`#666`,margin:`0 0 8px`},children:`Filtros aplicados`}),(0,c.jsxs)(s,{children:[(0,c.jsx)(a,{label:`UX Research`,onClose:()=>{}}),(0,c.jsx)(a,{label:`Campus Monterrey`,onClose:()=>{}})]})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ChipGroup {...args}>\r
      <FilterChip label="Virtual" selected />\r
      <FilterChip label="Presencial" />\r
      <FilterChip label="Híbrido" />\r
    </ChipGroup>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`FilterChips`,`InputChips`,`Wrap`,`InContext`]}))();export{f as FilterChips,h as InContext,p as InputChips,d as Playground,m as Wrap,g as __namedExportsOrder,l as default};