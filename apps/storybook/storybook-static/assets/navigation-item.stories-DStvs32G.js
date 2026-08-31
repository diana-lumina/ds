import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{T as i,n as a}from"./icons-QF8wPxMP.js";import{n as o,t as s}from"./navigation-item-BbdfdU0i.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{c=t(r(),1),a(),o(),l=n(),u={title:`Components/Navigation/NavigationItem`,component:s,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'Ítem de navegación para `navigation-bar` o `side-navigation`. `current` marca la sección activa (`aria-current="page"`). '}}},argTypes:{context:{control:`radio`,options:[`navigation-bar`,`side-navigation`],description:`navigation-bar (sin superficie en current) · side-navigation (superficie current)`,table:{defaultValue:{summary:`navigation-bar`}}},current:{control:`boolean`,description:'Sección actual (`aria-current="page"`)',table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}},label:{control:`text`,description:`Label (string editable)`},icon:{control:!1,description:`Ícono leading opcional (16px)`}}},d={docs:{canvas:{sourceState:`none`}}},f={args:{context:`navigation-bar`,current:!1,disabled:!1,label:`Inicio`}},p={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<NavigationItem label="Inicio" />`}}},render:()=>(0,l.jsx)(s,{label:`Inicio`})},m={name:`Con ícono`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<NavigationItem label="Inicio" icon={<HouseIcon />} />`}}},render:()=>(0,l.jsx)(s,{label:`Inicio`,icon:(0,l.jsx)(i,{})})},h={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<NavigationItem label="Inicio" current />`}}},render:()=>(0,l.jsx)(s,{label:`Inicio`,current:!0})},g={name:`Side navigation current`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<NavigationItem context="side-navigation" label="Inicio" current />`}}},render:()=>(0,l.jsx)(s,{context:`side-navigation`,label:`Inicio`,current:!0})},_={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<NavigationItem label="Inicio" disabled />`}}},render:()=>(0,l.jsx)(s,{label:`Inicio`,disabled:!0})},v={name:`Current & states`,parameters:d,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`};return(0,l.jsx)(`div`,{style:{padding:8},children:(0,l.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Context · current`}),(0,l.jsx)(`th`,{style:e,children:`Default`}),(0,l.jsx)(`th`,{style:e,children:`Con ícono`}),(0,l.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:t,children:`Bar · false`}),(0,l.jsx)(`td`,{style:n,children:(0,l.jsx)(s,{label:`Inicio`})}),(0,l.jsx)(`td`,{style:n,children:(0,l.jsx)(s,{label:`Inicio`,icon:(0,l.jsx)(i,{})})}),(0,l.jsx)(`td`,{style:n,children:(0,l.jsx)(s,{label:`Inicio`,disabled:!0})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:t,children:`Bar · true`}),(0,l.jsx)(`td`,{style:n,children:(0,l.jsx)(s,{label:`Inicio`,current:!0})}),(0,l.jsx)(`td`,{style:n,children:(0,l.jsx)(s,{label:`Inicio`,current:!0,icon:(0,l.jsx)(i,{})})}),(0,l.jsx)(`td`,{style:n,children:(0,l.jsx)(s,{label:`Inicio`,current:!0,disabled:!0})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:t,children:`Side · false`}),(0,l.jsx)(`td`,{style:n,children:(0,l.jsx)(s,{context:`side-navigation`,label:`Inicio`})}),(0,l.jsx)(`td`,{style:n,children:(0,l.jsx)(s,{context:`side-navigation`,label:`Inicio`,icon:(0,l.jsx)(i,{})})}),(0,l.jsx)(`td`,{style:n,children:(0,l.jsx)(s,{context:`side-navigation`,label:`Inicio`,disabled:!0})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:{...t,borderBottom:`none`},children:`Side · true`}),(0,l.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,l.jsx)(s,{context:`side-navigation`,label:`Inicio`,current:!0})}),(0,l.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,l.jsx)(s,{context:`side-navigation`,label:`Inicio`,current:!0,icon:(0,l.jsx)(i,{})})}),(0,l.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,l.jsx)(s,{context:`side-navigation`,label:`Inicio`,current:!0,disabled:!0})})]})]})]})})}},y={name:`Ejemplo de uso`,parameters:d,render:()=>{let[e,t]=(0,c.useState)(`inicio`),n=[{id:`inicio`,label:`Inicio`},{id:`cursos`,label:`Cursos`},{id:`perfil`,label:`Perfil`}];return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,l.jsx)(`nav`,{"aria-label":`Barra`,style:{display:`flex`,gap:4},children:n.map(n=>(0,l.jsx)(s,{label:n.label,current:e===n.id,onClick:()=>t(n.id)},n.id))}),(0,l.jsx)(`nav`,{"aria-label":`Lateral`,style:{display:`flex`,flexDirection:`column`,gap:4,maxWidth:220},children:n.map(n=>(0,l.jsx)(s,{context:`side-navigation`,label:n.label,current:e===n.id,onClick:()=>t(n.id)},n.id))})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    context: 'navigation-bar',
    current: false,
    disabled: false,
    label: 'Inicio'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<NavigationItem label="Inicio" />\`
      }
    }
  },
  render: () => <NavigationItem label="Inicio" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Con ícono',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<NavigationItem label="Inicio" icon={<HouseIcon />} />\`
      }
    }
  },
  render: () => <NavigationItem label="Inicio" icon={<HouseIcon />} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<NavigationItem label="Inicio" current />\`
      }
    }
  },
  render: () => <NavigationItem label="Inicio" current />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Side navigation current',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<NavigationItem context="side-navigation" label="Inicio" current />\`
      }
    }
  },
  render: () => <NavigationItem context="side-navigation" label="Inicio" current />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<NavigationItem label="Inicio" disabled />\`
      }
    }
  },
  render: () => <NavigationItem label="Inicio" disabled />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Current & states',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 16px 12px',
      borderBottom: '1px solid #eee'
    };
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap'
    };
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0'
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }}>Context · current</th>\r
              <th style={th}>Default</th>\r
              <th style={th}>Con ícono</th>\r
              <th style={th}>Disabled</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Bar · false</td>\r
              <td style={td}>\r
                <NavigationItem label="Inicio" />\r
              </td>\r
              <td style={td}>\r
                <NavigationItem label="Inicio" icon={<HouseIcon />} />\r
              </td>\r
              <td style={td}>\r
                <NavigationItem label="Inicio" disabled />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Bar · true</td>\r
              <td style={td}>\r
                <NavigationItem label="Inicio" current />\r
              </td>\r
              <td style={td}>\r
                <NavigationItem label="Inicio" current icon={<HouseIcon />} />\r
              </td>\r
              <td style={td}>\r
                <NavigationItem label="Inicio" current disabled />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Side · false</td>\r
              <td style={td}>\r
                <NavigationItem context="side-navigation" label="Inicio" />\r
              </td>\r
              <td style={td}>\r
                <NavigationItem context="side-navigation" label="Inicio" icon={<HouseIcon />} />\r
              </td>\r
              <td style={td}>\r
                <NavigationItem context="side-navigation" label="Inicio" disabled />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...rowLabel,
              borderBottom: 'none'
            }}>Side · true</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <NavigationItem context="side-navigation" label="Inicio" current />\r
              </td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <NavigationItem context="side-navigation" label="Inicio" current icon={<HouseIcon />} />\r
              </td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <NavigationItem context="side-navigation" label="Inicio" current disabled />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [section, setSection] = useState('inicio');
    const items = [{
      id: 'inicio',
      label: 'Inicio'
    }, {
      id: 'cursos',
      label: 'Cursos'
    }, {
      id: 'perfil',
      label: 'Perfil'
    }] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>\r
        <nav aria-label="Barra" style={{
        display: 'flex',
        gap: 4
      }}>\r
          {items.map(item => <NavigationItem key={item.id} label={item.label} current={section === item.id} onClick={() => setSection(item.id)} />)}\r
        </nav>\r
        <nav aria-label="Lateral" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        maxWidth: 220
      }}>\r
          {items.map(item => <NavigationItem key={item.id} context="side-navigation" label={item.label} current={section === item.id} onClick={() => setSection(item.id)} />)}\r
        </nav>\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Default`,`WithIcon`,`Current`,`SideNavigationCurrent`,`Disabled`,`AllStates`,`InContext`]}))();export{v as AllStates,h as Current,p as Default,_ as Disabled,y as InContext,f as Playground,g as SideNavigationCurrent,m as WithIcon,b as __namedExportsOrder,u as default};