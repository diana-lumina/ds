import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";var o,s,c=e((()=>{o=`_root_mfpg6_1`,s={root:o}}));function l({selected:e=!1,onSelectedChange:t,label:n,className:r,disabled:i,...o}){return(0,u.jsx)(`button`,{type:`button`,role:`tab`,"data-slot":`tab-item`,"data-selected":e,"aria-selected":e,disabled:i,onClick:()=>t?.(!e),className:a(s.root,r),...o,children:n})}var u,d=e((()=>{r(),i(),c(),u=n(),l.__docgenInfo={description:`Ítem de un Tab. Selected / unselected son independientes de State\r
(default, hover, focus-visible, disabled). No administra exclusividad del grupo.`,methods:[],displayName:`TabItem`,props:{selected:{required:!1,tsType:{name:`boolean`},description:`Selected=true identifica el tab activo; la exclusividad la garantiza el grupo.`,defaultValue:{value:`false`,computed:!1}},onSelectedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`selected`}],return:{name:`void`}}},description:``},label:{required:!0,tsType:{name:`string`},description:`Label (string editable).`}},composes:[`Omit`]}}));function f({selected:e=!1,...t}){let[n,r]=(0,p.useState)(e);return(0,p.useEffect)(()=>{r(e)},[e]),(0,m.jsx)(l,{...t,selected:n,onSelectedChange:r})}var p,m,h,g,_,v,y,b,x,S,C;e((()=>{p=t(r(),1),d(),m=n(),h={title:`Components/Navigation/TabItem`,component:l,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Descripción pendiente.`}}},argTypes:{selected:{control:`boolean`,description:`true = pestaña activa; el grupo garantiza exclusividad`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}},label:{control:`text`,description:`Label (string editable)`}}},g={docs:{canvas:{sourceState:`none`}}},_={args:{selected:!1,disabled:!1,label:`Tab`},render:e=>(0,m.jsx)(f,{...e})},v={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<TabItem selected={false} label="Tab" />`}}},render:()=>(0,m.jsx)(l,{selected:!1,label:`Tab`})},y={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Indicador inferior a todo el ancho. Hover usa color de texto selected. Focus-visible conserva el indicador y el anillo a 2px del componente.`},source:{code:`<TabItem selected label="Tab" />`}}},render:()=>(0,m.jsx)(l,{selected:!0,label:`Tab`})},b={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<TabItem selected={false} disabled label="Tab" />`}}},render:()=>(0,m.jsx)(l,{selected:!1,disabled:!0,label:`Tab`})},x={name:`Selected & states`,parameters:g,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`};return(0,m.jsx)(`div`,{style:{padding:8},children:(0,m.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Selected`}),(0,m.jsx)(`th`,{style:e,children:`Default`}),(0,m.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,m.jsxs)(`tbody`,{children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:t,children:`Unselected`}),(0,m.jsx)(`td`,{style:n,children:(0,m.jsx)(l,{selected:!1,label:`Tab`})}),(0,m.jsx)(`td`,{style:n,children:(0,m.jsx)(l,{selected:!1,disabled:!0,label:`Tab`})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{...t,borderBottom:`none`},children:`Selected`}),(0,m.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,m.jsx)(l,{selected:!0,label:`Tab`})}),(0,m.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,m.jsx)(l,{selected:!0,disabled:!0,label:`Tab`})})]})]})]})})}},S={name:`Ejemplo de uso`,parameters:{docs:{canvas:{sourceState:`none`},description:{story:`Solo como dependencia de un grupo. Selected y State son independientes; la exclusividad la administra el contenedor (futuro Tab).`}}},render:()=>{let[e,t]=(0,p.useState)(`resumen`);return(0,m.jsxs)(`div`,{style:{fontFamily:`sans-serif`,display:`flex`,flexDirection:`column`,gap:16,maxWidth:480},children:[(0,m.jsxs)(`div`,{role:`tablist`,"aria-label":`Secciones del curso`,style:{display:`flex`},children:[(0,m.jsx)(l,{selected:e===`resumen`,onSelectedChange:e=>e&&t(`resumen`),label:`Resumen`}),(0,m.jsx)(l,{selected:e===`temario`,onSelectedChange:e=>e&&t(`temario`),label:`Temario`}),(0,m.jsx)(l,{selected:e===`recursos`,onSelectedChange:e=>e&&t(`recursos`),label:`Recursos`})]}),(0,m.jsxs)(`div`,{style:{fontSize:13,color:`#666`},children:[`Pestaña activa: `,e===`resumen`?`Resumen`:e===`temario`?`Temario`:`Recursos`]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    label: 'Tab'
  },
  render: args => <PlaygroundTabItem {...args} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<TabItem selected={false} label="Tab" />\`
      }
    }
  },
  render: () => <TabItem selected={false} label="Tab" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Indicador inferior a todo el ancho. Hover usa color de texto selected. Focus-visible conserva el indicador y el anillo a 2px del componente.'
      },
      source: {
        code: \`<TabItem selected label="Tab" />\`
      }
    }
  },
  render: () => <TabItem selected label="Tab" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<TabItem selected={false} disabled label="Tab" />\`
      }
    }
  },
  render: () => <TabItem selected={false} disabled label="Tab" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Selected & states',
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
       \r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }}>Selected</th>\r
              <th style={th}>Default</th>\r
              <th style={th}>Disabled</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Unselected</td>\r
              <td style={td}>\r
                <TabItem selected={false} label="Tab" />\r
              </td>\r
              <td style={td}>\r
                <TabItem selected={false} disabled label="Tab" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...rowLabel,
              borderBottom: 'none'
            }}>Selected</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <TabItem selected label="Tab" />\r
              </td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <TabItem selected disabled label="Tab" />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      description: {
        story: 'Solo como dependencia de un grupo. Selected y State son independientes; la exclusividad la administra el contenedor (futuro Tab).'
      }
    }
  },
  render: () => {
    const [tab, setTab] = useState<'resumen' | 'temario' | 'recursos'>('resumen');
    return <div style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 480
    }}>\r
        <div role="tablist" aria-label="Secciones del curso" style={{
        display: 'flex'
      }}>\r
          <TabItem selected={tab === 'resumen'} onSelectedChange={selected => selected && setTab('resumen')} label="Resumen" />\r
          <TabItem selected={tab === 'temario'} onSelectedChange={selected => selected && setTab('temario')} label="Temario" />\r
          <TabItem selected={tab === 'recursos'} onSelectedChange={selected => selected && setTab('recursos')} label="Recursos" />\r
        </div>\r
        <div style={{
        fontSize: 13,
        color: '#666'
      }}>\r
          Pestaña activa: {tab === 'resumen' ? 'Resumen' : tab === 'temario' ? 'Temario' : 'Recursos'}\r
        </div>\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Unselected`,`Selected`,`Disabled`,`AllStates`,`InContext`]}))();export{x as AllStates,b as Disabled,S as InContext,_ as Playground,y as Selected,v as Unselected,C as __namedExportsOrder,h as default};