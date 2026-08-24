import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CFNdY8gy.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";import{n as a,t as o}from"./button-BsM9MHNw.js";var s,c,l=e((()=>{s=`_root_1ojm7_1`,c={root:s}}));function u({orientation:e=`horizontal`,className:t,children:n,...r}){return(0,d.jsx)(`div`,{"data-slot":`button-group`,"data-orientation":e,className:i(c.root,t),...r,children:n})}var d,f=e((()=>{n(),r(),l(),d=t(),u.__docgenInfo={description:`Pattern compartido para componer acciones relacionadas mediante instancias reales de Button.\r
No introduce una acción ni apariencia propias; organiza orientación y respuesta al espacio.`,methods:[],displayName:`ButtonGroup`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}}}}})),p,m,h,g,_,v,y,b,x,S;e((()=>{a(),f(),p=t(),m={title:`Components/Actions/ButtonGroup`,component:u,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Pattern compartido para componer acciones relacionadas mediante instancias reales de Button. No introduce una acción ni apariencia propias; organiza orientación, prioridad y respuesta al espacio disponible. Alignment es responsabilidad del contenedor padre. El wrapper no es focusable ni asume role=toolbar: Tab recorre cada Button en orden DOM; no hay navegación con flechas. Una acción primaria máxima por grupo.`}}},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`horizontal: acciones en una fila · vertical: acciones apiladas cuando el ancho no permite lectura clara`,table:{type:{summary:`string`},defaultValue:{summary:`horizontal`}}},children:{control:!1,description:`SLOT nativo compartido: instancias reales de Button. Cantidad, jerarquía y labels los aporta cada Button.`,table:{type:{summary:`ReactNode`}}},className:{control:!1,table:{disable:!0}}}},h={docs:{canvas:{sourceState:`none`}}},g={args:{orientation:`horizontal`},render:e=>(0,p.jsxs)(u,{...e,children:[(0,p.jsx)(o,{hierarchy:`secondary`,label:`Cancelar`}),(0,p.jsx)(o,{hierarchy:`primary`,label:`Guardar`})]})},_={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Acciones relacionadas en una fila. Secondary acompaña sin competir con Primary. Hug contents: sin Alignment interno.`},source:{code:`<ButtonGroup orientation="horizontal">
  <Button hierarchy="secondary" label="Cancelar" />
  <Button hierarchy="primary" label="Guardar" />
</ButtonGroup>`}}},args:{orientation:`horizontal`},render:e=>(0,p.jsxs)(u,{...e,children:[(0,p.jsx)(o,{hierarchy:`secondary`,label:`Cancelar`}),(0,p.jsx)(o,{hierarchy:`primary`,label:`Guardar`})]})},v={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Acciones apiladas para espacio estrecho. El orden de lectura y de foco es el mismo que en horizontal (orden DOM). Tab recorre cada Button; no se usan flechas.`},source:{code:`<ButtonGroup orientation="vertical">
  <Button hierarchy="secondary" label="Cancelar" />
  <Button hierarchy="primary" label="Guardar" />
</ButtonGroup>`}}},args:{orientation:`vertical`},render:e=>(0,p.jsxs)(u,{...e,children:[(0,p.jsx)(o,{hierarchy:`secondary`,label:`Cancelar`}),(0,p.jsx)(o,{hierarchy:`primary`,label:`Guardar`})]})},y={name:`Orientation`,parameters:{...h,docs:{...h.docs,description:{story:`Únicas variantes: horizontal y vertical. No existen variantes por cantidad. Jerarquía y labels viven en cada Button.`}}},render:()=>(0,p.jsxs)(`div`,{style:{padding:8},children:[(0,p.jsx)(`p`,{style:{fontFamily:`sans-serif`,color:`#666`,marginBottom:24},children:`Tab recorre cada Button en orden DOM. El wrapper no recibe focus ni role=toolbar.`}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:48,alignItems:`flex-start`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600},children:`Horizontal`}),(0,p.jsxs)(u,{orientation:`horizontal`,children:[(0,p.jsx)(o,{hierarchy:`secondary`,label:`Cancelar`}),(0,p.jsx)(o,{hierarchy:`primary`,label:`Guardar`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600},children:`Vertical`}),(0,p.jsxs)(u,{orientation:`vertical`,children:[(0,p.jsx)(o,{hierarchy:`secondary`,label:`Cancelar`}),(0,p.jsx)(o,{hierarchy:`primary`,label:`Guardar`})]})]})]})]})},b={name:`Composición`,parameters:{...h,docs:{...h.docs,description:{story:`Una acción primaria máxima por grupo. Secondary acompaña sin competir. Destructive se separa visualmente o requiere confirmación según riesgo. No duplicar estados ni tokens de Button.`}}},render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,padding:8,fontFamily:`sans-serif`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600},children:`Primary + Secondary`}),(0,p.jsxs)(u,{children:[(0,p.jsx)(o,{hierarchy:`secondary`,label:`Cancelar`}),(0,p.jsx)(o,{hierarchy:`primary`,label:`Guardar`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600},children:`Destructive separado`}),(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},children:[(0,p.jsx)(u,{children:(0,p.jsx)(o,{hierarchy:`destructive`,label:`Eliminar`})}),(0,p.jsxs)(u,{children:[(0,p.jsx)(o,{hierarchy:`secondary`,label:`Cancelar`}),(0,p.jsx)(o,{hierarchy:`primary`,label:`Guardar`})]})]})]})]})},x={name:`Ejemplo de uso`,parameters:{...h,docs:{...h.docs,description:{story:`La alineación se resuelve desde el padre. Cambiar a vertical cuando el ancho no permita lectura clara.`}}},render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,fontFamily:`sans-serif`,maxWidth:480},children:[(0,p.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,padding:16,border:`1px solid #eee`,borderRadius:8},children:(0,p.jsxs)(u,{children:[(0,p.jsx)(o,{hierarchy:`secondary`,label:`Cancelar`}),(0,p.jsx)(o,{hierarchy:`primary`,label:`Publicar`})]})}),(0,p.jsx)(`div`,{style:{width:160,padding:16,border:`1px solid #eee`,borderRadius:8},children:(0,p.jsxs)(u,{orientation:`vertical`,children:[(0,p.jsx)(o,{hierarchy:`secondary`,label:`Cancelar`}),(0,p.jsx)(o,{hierarchy:`primary`,label:`Publicar`})]})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <ButtonGroup {...args}>\r
      <Button hierarchy="secondary" label="Cancelar" />\r
      <Button hierarchy="primary" label="Guardar" />\r
    </ButtonGroup>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Acciones relacionadas en una fila. Secondary acompaña sin competir con Primary. Hug contents: sin Alignment interno.'
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story: 'La alineación se resuelve desde el padre. Cambiar a vertical cuando el ancho no permita lectura clara.'
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
      justifyContent: 'flex-end',
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
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Horizontal`,`Vertical`,`AllOrientations`,`Composition`,`InContext`]}))();export{y as AllOrientations,b as Composition,_ as Horizontal,x as InContext,g as Playground,v as Vertical,S as __namedExportsOrder,m as default};