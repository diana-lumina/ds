import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-BPJdu4Wu.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-item-cZYf1sY4.js";var o,s,c,l,u,d,f,p,m;e((()=>{n(),r(),o=t(),s={title:`Components/Navigation/BreadcrumbItem`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Ítem de un recorrido de navegación. Reutiliza Link (standalone / standard). Default, hover, pressed y focus-visible los aporta Link; current marca la página actual con color de texto default y no cambia con la interacción.`}}},argTypes:{current:{control:`boolean`,description:'Página actual del recorrido (`aria-current="page"`)',table:{defaultValue:{summary:`false`}}},label:{control:`text`,description:`Label (string editable). Debe describir el destino.`},href:{control:`text`}}},c={docs:{canvas:{sourceState:`none`}}},l={args:{href:`/cursos`,label:`Cursos`,current:!1}},u={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<BreadcrumbItem href="/cursos" label="Cursos" />`}}},render:()=>(0,o.jsx)(a,{href:`/cursos`,label:`Cursos`})},d={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:'Current usa `aria-current="page"` y color de texto default. No cambia en hover, pressed ni visited; el anillo de focus-visible se conserva.'},source:{code:`<BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />`}}},render:()=>(0,o.jsx)(a,{href:`/cursos/ux-research`,label:`UX Research`,current:!0})},f={name:`States`,parameters:c,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,o.jsx)(`div`,{style:{padding:8},children:(0,o.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{style:e,children:`Default`}),(0,o.jsx)(`th`,{style:e,children:`Current`})]})}),(0,o.jsx)(`tbody`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{style:t,children:(0,o.jsx)(a,{href:`/cursos`,label:`Cursos`})}),(0,o.jsx)(`td`,{style:t,children:(0,o.jsx)(a,{href:`/cursos/ux-research`,label:`UX Research`,current:!0})})]})})]})})}},p={name:`Ejemplo de uso`,parameters:c,render:()=>(0,o.jsxs)(i,{children:[(0,o.jsx)(a,{href:`/`,label:`Inicio`}),(0,o.jsx)(a,{href:`/cursos`,label:`Cursos`}),(0,o.jsx)(a,{href:`/cursos/ux-research`,label:`UX Research`,current:!0})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    href: '/cursos',
    label: 'Cursos',
    current: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<BreadcrumbItem href="/cursos" label="Cursos" />\`
      }
    }
  },
  render: () => <BreadcrumbItem href="/cursos" label="Cursos" />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Current usa \`aria-current="page"\` y color de texto default. No cambia en hover, pressed ni visited; el anillo de focus-visible se conserva.'
      },
      source: {
        code: \`<BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />\`
      }
    }
  },
  render: () => <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'States',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 20px 12px',
      borderBottom: '1px solid #eee'
    };
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 20px',
      borderBottom: '1px solid #f0f0f0'
    };
    return <div style={{
      padding: 8
    }}>\r
\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={th}>Default</th>\r
              <th style={th}>Current</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={td}>\r
                <BreadcrumbItem href="/cursos" label="Cursos" />\r
              </td>\r
              <td style={td}>\r
                <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => <Breadcrumb>\r
      <BreadcrumbItem href="/" label="Inicio" />\r
      <BreadcrumbItem href="/cursos" label="Cursos" />\r
      <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />\r
    </Breadcrumb>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Default`,`Current`,`AllStates`,`InContext`]}))();export{f as AllStates,d as Current,u as Default,p as InContext,l as Playground,m as __namedExportsOrder,s as default};