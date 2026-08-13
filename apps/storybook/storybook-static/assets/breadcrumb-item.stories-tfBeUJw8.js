import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CsUaBcwt.js";import{n as r,o as i}from"./icons-D-XQZ3Io.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";import{n as s,t as c}from"./link-CVPFhhC7.js";var l=e((()=>{s()})),u,d,f=e((()=>{u=`_root_odj4q_5`,d={root:u}}));function p({current:e=!1,className:t,...n}){return(0,m.jsx)(c,{"data-slot":`breadcrumb-item`,"data-current":e||void 0,"aria-current":e?`page`:void 0,context:`standalone`,tone:`standard`,className:o(d.root,t),...n})}var m,h=e((()=>{n(),a(),l(),f(),m=t(),p.__docgenInfo={description:`Ítem de un recorrido de navegación. Reutiliza Link (standalone / standard);\r
current expresa la ubicación actual y no cambia con hover, pressed ni visited.`,methods:[],displayName:`BreadcrumbItem`,props:{current:{required:!1,tsType:{name:`boolean`},description:'Página actual del recorrido. Aplica estilos current y `aria-current="page"`.',defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),g,_,v,y,b,x,S,C,w;e((()=>{h(),i(),g=t(),_={title:`Components/BreadcrumbItem`,component:p,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Ítem de un recorrido de navegación. Reutiliza Link (standalone / standard). Default, hover, pressed y focus-visible los aporta Link; current marca la página actual con color de texto default y no cambia con la interacción.`}}},argTypes:{current:{control:`boolean`,description:'Página actual del recorrido (`aria-current="page"`)',table:{defaultValue:{summary:`false`}}},label:{control:`text`,description:`Label (string editable). Debe describir el destino.`},href:{control:`text`}}},v={docs:{canvas:{sourceState:`none`}}},y={args:{href:`/cursos`,label:`Cursos`,current:!1}},b={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<BreadcrumbItem href="/cursos" label="Cursos" />`}}},render:()=>(0,g.jsx)(p,{href:`/cursos`,label:`Cursos`})},x={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:'Current usa `aria-current="page"` y color de texto default. No cambia en hover, pressed ni visited; el anillo de focus-visible se conserva.'},source:{code:`<BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />`}}},render:()=>(0,g.jsx)(p,{href:`/cursos/ux-research`,label:`UX Research`,current:!0})},S={name:`States`,parameters:v,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,g.jsx)(`div`,{style:{padding:8},children:(0,g.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{style:e,children:`Default`}),(0,g.jsx)(`th`,{style:e,children:`Current`})]})}),(0,g.jsx)(`tbody`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{style:t,children:(0,g.jsx)(p,{href:`/cursos`,label:`Cursos`})}),(0,g.jsx)(`td`,{style:t,children:(0,g.jsx)(p,{href:`/cursos/ux-research`,label:`UX Research`,current:!0})})]})})]})})}},C={name:`Ejemplo de uso`,parameters:v,render:()=>(0,g.jsx)(`nav`,{"aria-label":`Breadcrumb`,children:(0,g.jsxs)(`ol`,{style:{display:`flex`,alignItems:`center`,gap:8,listStyle:`none`,margin:0,padding:0},children:[(0,g.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,g.jsx)(p,{href:`/`,label:`Inicio`}),(0,g.jsx)(`span`,{"aria-hidden":`true`,style:{color:`#888`,display:`inline-flex`},children:(0,g.jsx)(r,{size:`16`})})]}),(0,g.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,g.jsx)(p,{href:`/cursos`,label:`Cursos`}),(0,g.jsx)(`span`,{"aria-hidden":`true`,style:{color:`#888`,display:`inline-flex`},children:(0,g.jsx)(r,{size:`16`})})]}),(0,g.jsx)(`li`,{children:(0,g.jsx)(p,{href:`/cursos/ux-research`,label:`UX Research`,current:!0})})]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    href: '/cursos',
    label: 'Cursos',
    current: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => <nav aria-label="Breadcrumb">\r
      <ol style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }}>\r
        <li style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>\r
          <BreadcrumbItem href="/" label="Inicio" />\r
          <span aria-hidden="true" style={{
          color: '#888',
          display: 'inline-flex'
        }}>\r
            <ChevronIcon size="16" />\r
          </span>\r
        </li>\r
        <li style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>\r
          <BreadcrumbItem href="/cursos" label="Cursos" />\r
          <span aria-hidden="true" style={{
          color: '#888',
          display: 'inline-flex'
        }}>\r
            <ChevronIcon size="16" />\r
          </span>\r
        </li>\r
        <li>\r
          <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />\r
        </li>\r
      </ol>\r
    </nav>
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Default`,`Current`,`AllStates`,`InContext`]}))();export{S as AllStates,x as Current,b as Default,C as InContext,y as Playground,w as __namedExportsOrder,_ as default};