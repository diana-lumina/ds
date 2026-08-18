import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-BPJdu4Wu.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-item-cZYf1sY4.js";var o,s,c,l,u,d,f;e((()=>{r(),n(),o=t(),s={title:`Components/Navigation/Breadcrumb`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Recorrido de navegación compuesto por instancias reales de BreadcrumbItem. No introduce una acción ni apariencia propias; organiza el trail, el gap y el ícono separador. Current, jerarquía visual y labels los aporta cada BreadcrumbItem. El wrapper es un landmark `nav`; el separador es decorativo (aria-hidden). Tab recorre cada ítem en orden DOM."}}},argTypes:{children:{control:!1,description:`SLOT nativo compartido: instancias reales de BreadcrumbItem. Cantidad y current los aporta la composición.`,table:{type:{summary:`ReactNode`}}},className:{control:!1,table:{disable:!0}}}},c={docs:{canvas:{sourceState:`none`}}},l={render:e=>(0,o.jsxs)(i,{...e,children:[(0,o.jsx)(a,{href:`/`,label:`Inicio`}),(0,o.jsx)(a,{href:`/cursos`,label:`Cursos`}),(0,o.jsx)(a,{href:`/cursos/ux-research`,label:`UX Research`,current:!0})]})},u={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:"El último ítem marca la página actual (`current`). El separador no recibe focus."},source:{code:`<Breadcrumb>
  <BreadcrumbItem href="/" label="Inicio" />
  <BreadcrumbItem href="/cursos" label="Cursos" />
  <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
</Breadcrumb>`}}},render:()=>(0,o.jsxs)(i,{children:[(0,o.jsx)(a,{href:`/`,label:`Inicio`}),(0,o.jsx)(a,{href:`/cursos`,label:`Cursos`}),(0,o.jsx)(a,{href:`/cursos/ux-research`,label:`UX Research`,current:!0})]})},d={name:`Ejemplo de uso`,parameters:{...c,docs:{...c.docs,description:{story:`La alineación del trail respecto a la página la resuelve el padre. El grupo no centra su contenido.`}}},render:()=>(0,o.jsx)(`header`,{style:{padding:`16px 24px`,borderBottom:`1px solid #eee`,fontFamily:`sans-serif`},children:(0,o.jsxs)(i,{children:[(0,o.jsx)(a,{href:`/`,label:`Inicio`}),(0,o.jsx)(a,{href:`/cursos`,label:`Cursos`}),(0,o.jsx)(a,{href:`/cursos/ux-research`,label:`UX Research`,current:!0})]})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>\r
      <BreadcrumbItem href="/" label="Inicio" />\r
      <BreadcrumbItem href="/cursos" label="Cursos" />\r
      <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />\r
    </Breadcrumb>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'El último ítem marca la página actual (\`current\`). El separador no recibe focus.'
      },
      source: {
        code: \`<Breadcrumb>
  <BreadcrumbItem href="/" label="Inicio" />
  <BreadcrumbItem href="/cursos" label="Cursos" />
  <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
</Breadcrumb>\`
      }
    }
  },
  render: () => <Breadcrumb>\r
      <BreadcrumbItem href="/" label="Inicio" />\r
      <BreadcrumbItem href="/cursos" label="Cursos" />\r
      <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />\r
    </Breadcrumb>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story: 'La alineación del trail respecto a la página la resuelve el padre. El grupo no centra su contenido.'
      }
    }
  },
  render: () => <header style={{
    padding: '16px 24px',
    borderBottom: '1px solid #eee',
    fontFamily: 'sans-serif'
  }}>\r
      <Breadcrumb>\r
        <BreadcrumbItem href="/" label="Inicio" />\r
        <BreadcrumbItem href="/cursos" label="Cursos" />\r
        <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />\r
      </Breadcrumb>\r
    </header>
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`Default`,`InContext`]}))();export{u as Default,d as InContext,l as Playground,f as __namedExportsOrder,s as default};