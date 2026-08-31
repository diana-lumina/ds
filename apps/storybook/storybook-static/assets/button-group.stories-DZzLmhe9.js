import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,t as r}from"./button-Pbm51Wt4.js";import{n as i,t as a}from"./button-group-BT6PxLg7.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i(),o=t(),s={title:`Components/Actions/ButtonGroup`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Pattern compartido para componer acciones relacionadas mediante instancias reales de Button. No introduce una acción ni apariencia propias; organiza orientación, prioridad y respuesta al espacio disponible. Los botones se alinean a la izquierda del grupo. El wrapper no es focusable ni asume role=toolbar: Tab recorre cada Button en orden DOM; no hay navegación con flechas. Una acción primaria máxima por grupo.`}}},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`horizontal: acciones en una fila · vertical: acciones apiladas cuando el ancho no permite lectura clara`,table:{type:{summary:`string`},defaultValue:{summary:`horizontal`}}},children:{control:!1,description:`SLOT nativo compartido: instancias reales de Button. Cantidad, jerarquía y labels los aporta cada Button.`,table:{type:{summary:`ReactNode`}}},className:{control:!1,table:{disable:!0}}}},c={docs:{canvas:{sourceState:`none`}}},l={args:{orientation:`horizontal`},render:e=>(0,o.jsxs)(a,{...e,children:[(0,o.jsx)(r,{hierarchy:`secondary`,label:`Cancelar`}),(0,o.jsx)(r,{hierarchy:`primary`,label:`Guardar`})]})},u={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Acciones relacionadas en una fila, alineadas a la izquierda. Secondary acompaña sin competir con Primary.`},source:{code:`<ButtonGroup orientation="horizontal">
  <Button hierarchy="secondary" label="Cancelar" />
  <Button hierarchy="primary" label="Guardar" />
</ButtonGroup>`}}},args:{orientation:`horizontal`},render:e=>(0,o.jsxs)(a,{...e,children:[(0,o.jsx)(r,{hierarchy:`secondary`,label:`Cancelar`}),(0,o.jsx)(r,{hierarchy:`primary`,label:`Guardar`})]})},d={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Acciones apiladas para espacio estrecho. El orden de lectura y de foco es el mismo que en horizontal (orden DOM). Tab recorre cada Button; no se usan flechas.`},source:{code:`<ButtonGroup orientation="vertical">
  <Button hierarchy="secondary" label="Cancelar" />
  <Button hierarchy="primary" label="Guardar" />
</ButtonGroup>`}}},args:{orientation:`vertical`},render:e=>(0,o.jsxs)(a,{...e,children:[(0,o.jsx)(r,{hierarchy:`secondary`,label:`Cancelar`}),(0,o.jsx)(r,{hierarchy:`primary`,label:`Guardar`})]})},f={name:`Orientation`,parameters:{...c,docs:{...c.docs,description:{story:`Únicas variantes: horizontal y vertical. No existen variantes por cantidad. Jerarquía y labels viven en cada Button.`}}},render:()=>(0,o.jsxs)(`div`,{style:{padding:8},children:[(0,o.jsx)(`p`,{style:{fontFamily:`sans-serif`,color:`#666`,marginBottom:24},children:`Tab recorre cada Button en orden DOM. El wrapper no recibe focus ni role=toolbar.`}),(0,o.jsxs)(`div`,{style:{display:`flex`,gap:48,alignItems:`flex-start`},children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{style:{fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600},children:`Horizontal`}),(0,o.jsxs)(a,{orientation:`horizontal`,children:[(0,o.jsx)(r,{hierarchy:`secondary`,label:`Cancelar`}),(0,o.jsx)(r,{hierarchy:`primary`,label:`Guardar`})]})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{style:{fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600},children:`Vertical`}),(0,o.jsxs)(a,{orientation:`vertical`,children:[(0,o.jsx)(r,{hierarchy:`secondary`,label:`Cancelar`}),(0,o.jsx)(r,{hierarchy:`primary`,label:`Guardar`})]})]})]})]})},p={name:`Composición`,parameters:{...c,docs:{...c.docs,description:{story:`Una acción primaria máxima por grupo. Secondary acompaña sin competir. Destructive se separa visualmente o requiere confirmación según riesgo. No duplicar estados ni tokens de Button.`}}},render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,padding:8,fontFamily:`sans-serif`},children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{style:{fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600},children:`Primary + Secondary`}),(0,o.jsxs)(a,{children:[(0,o.jsx)(r,{hierarchy:`secondary`,label:`Cancelar`}),(0,o.jsx)(r,{hierarchy:`primary`,label:`Guardar`})]})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{style:{fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600},children:`Destructive separado`}),(0,o.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},children:[(0,o.jsx)(a,{children:(0,o.jsx)(r,{hierarchy:`destructive`,label:`Eliminar`})}),(0,o.jsxs)(a,{children:[(0,o.jsx)(r,{hierarchy:`secondary`,label:`Cancelar`}),(0,o.jsx)(r,{hierarchy:`primary`,label:`Guardar`})]})]})]})]})},m={name:`Ejemplo de uso`,parameters:{...c,docs:{...c.docs,description:{story:`La alineación del grupo es a la izquierda. Cambiar a vertical cuando el ancho no permita lectura clara.`}}},render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,fontFamily:`sans-serif`,maxWidth:480},children:[(0,o.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-start`,padding:16,border:`1px solid #eee`,borderRadius:8},children:(0,o.jsxs)(a,{children:[(0,o.jsx)(r,{hierarchy:`secondary`,label:`Cancelar`}),(0,o.jsx)(r,{hierarchy:`primary`,label:`Publicar`})]})}),(0,o.jsx)(`div`,{style:{width:160,padding:16,border:`1px solid #eee`,borderRadius:8},children:(0,o.jsxs)(a,{orientation:`vertical`,children:[(0,o.jsx)(r,{hierarchy:`secondary`,label:`Cancelar`}),(0,o.jsx)(r,{hierarchy:`primary`,label:`Publicar`})]})})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <ButtonGroup {...args}>\r
      <Button hierarchy="secondary" label="Cancelar" />\r
      <Button hierarchy="primary" label="Guardar" />\r
    </ButtonGroup>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Acciones relacionadas en una fila, alineadas a la izquierda. Secondary acompaña sin competir con Primary.'
      },
      source: {
        code: \`<ButtonGroup orientation="horizontal">
  <Button hierarchy="secondary" label="Cancelar" />
  <Button hierarchy="primary" label="Guardar" />
</ButtonGroup>\`
      }
    }
  },
  args: {
    orientation: 'horizontal'
  },
  render: args => <ButtonGroup {...args}>\r
      <Button hierarchy="secondary" label="Cancelar" />\r
      <Button hierarchy="primary" label="Guardar" />\r
    </ButtonGroup>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Acciones apiladas para espacio estrecho. El orden de lectura y de foco es el mismo que en horizontal (orden DOM). Tab recorre cada Button; no se usan flechas.'
      },
      source: {
        code: \`<ButtonGroup orientation="vertical">
  <Button hierarchy="secondary" label="Cancelar" />
  <Button hierarchy="primary" label="Guardar" />
</ButtonGroup>\`
      }
    }
  },
  args: {
    orientation: 'vertical'
  },
  render: args => <ButtonGroup {...args}>\r
      <Button hierarchy="secondary" label="Cancelar" />\r
      <Button hierarchy="primary" label="Guardar" />\r
    </ButtonGroup>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Orientation',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story: 'Únicas variantes: horizontal y vertical. No existen variantes por cantidad. Jerarquía y labels viven en cada Button.'
      }
    }
  },
  render: () => <div style={{
    padding: 8
  }}>\r
      <p style={{
      fontFamily: 'sans-serif',
      color: '#666',
      marginBottom: 24
    }}>\r
        Tab recorre cada Button en orden DOM. El wrapper no recibe focus ni role=toolbar.\r
      </p>\r
      <div style={{
      display: 'flex',
      gap: 48,
      alignItems: 'flex-start'
    }}>\r
        <div>\r
          <p style={{
          fontFamily: 'monospace',
          fontSize: 11,
          color: '#888',
          fontWeight: 600
        }}>\r
            Horizontal\r
          </p>\r
          <ButtonGroup orientation="horizontal">\r
            <Button hierarchy="secondary" label="Cancelar" />\r
            <Button hierarchy="primary" label="Guardar" />\r
          </ButtonGroup>\r
        </div>\r
        <div>\r
          <p style={{
          fontFamily: 'monospace',
          fontSize: 11,
          color: '#888',
          fontWeight: 600
        }}>\r
            Vertical\r
          </p>\r
          <ButtonGroup orientation="vertical">\r
            <Button hierarchy="secondary" label="Cancelar" />\r
            <Button hierarchy="primary" label="Guardar" />\r
          </ButtonGroup>\r
        </div>\r
      </div>\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Composición',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story: 'Una acción primaria máxima por grupo. Secondary acompaña sin competir. Destructive se separa visualmente o requiere confirmación según riesgo. No duplicar estados ni tokens de Button.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: 8,
    fontFamily: 'sans-serif'
  }}>\r
      <div>\r
        <p style={{
        fontFamily: 'monospace',
        fontSize: 11,
        color: '#888',
        fontWeight: 600
      }}>\r
          Primary + Secondary\r
        </p>\r
        <ButtonGroup>\r
          <Button hierarchy="secondary" label="Cancelar" />\r
          <Button hierarchy="primary" label="Guardar" />\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <p style={{
        fontFamily: 'monospace',
        fontSize: 11,
        color: '#888',
        fontWeight: 600
      }}>\r
          Destructive separado\r
        </p>\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>\r
          <ButtonGroup>\r
            <Button hierarchy="destructive" label="Eliminar" />\r
          </ButtonGroup>\r
          <ButtonGroup>\r
            <Button hierarchy="secondary" label="Cancelar" />\r
            <Button hierarchy="primary" label="Guardar" />\r
          </ButtonGroup>\r
        </div>\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story: 'La alineación del grupo es a la izquierda. Cambiar a vertical cuando el ancho no permita lectura clara.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    fontFamily: 'sans-serif',
    maxWidth: 480
  }}>\r
      <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      padding: 16,
      border: '1px solid #eee',
      borderRadius: 8
    }}>\r
        <ButtonGroup>\r
          <Button hierarchy="secondary" label="Cancelar" />\r
          <Button hierarchy="primary" label="Publicar" />\r
        </ButtonGroup>\r
      </div>\r
      <div style={{
      width: 160,
      padding: 16,
      border: '1px solid #eee',
      borderRadius: 8
    }}>\r
        <ButtonGroup orientation="vertical">\r
          <Button hierarchy="secondary" label="Cancelar" />\r
          <Button hierarchy="primary" label="Publicar" />\r
        </ButtonGroup>\r
      </div>\r
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Horizontal`,`Vertical`,`AllOrientations`,`Composition`,`InContext`]}))();export{f as AllOrientations,p as Composition,u as Horizontal,m as InContext,l as Playground,d as Vertical,h as __namedExportsOrder,s as default};