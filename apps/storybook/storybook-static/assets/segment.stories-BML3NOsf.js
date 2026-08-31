import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{N as i,n as a}from"./icons-QF8wPxMP.js";import{n as o,t as s}from"./utils-D8qMR3V9.js";var c,l,u,d=e((()=>{c=`_root_1h12k_1`,l=`_iconWrapper_1h12k_43`,u={root:c,iconWrapper:l}}));function f({size:e=`sm`,selected:t=!1,onSelectedChange:n,icon:r,label:i,className:a,disabled:o,...c}){return(0,p.jsxs)(`button`,{type:`button`,"data-slot":`segment`,"data-size":e,"data-selected":t,"data-content":r&&i?`both`:r?`icon`:`label`,"aria-pressed":t,disabled:o,onClick:()=>n?.(!t),className:s(u.root,a),...c,children:[r?(0,p.jsx)(`span`,{className:u.iconWrapper,"aria-hidden":`true`,children:r}):null,i]})}var p,m=e((()=>{r(),o(),d(),p=n(),f.__docgenInfo={description:`Subcomponente interno de Segmented Button.\r
Contenido: icon, label o ambos (icon a la izquierda).\r
No administra exclusividad del grupo ni debe consumirse como acción independiente.`,methods:[],displayName:`Segment`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:`Selected=true identifica la opción activa; la exclusividad la garantiza el grupo.`,defaultValue:{value:`false`,computed:!1}},onSelectedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`selected`}],return:{name:`void`}}},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Leading icon (instance swap). A la izquierda si hay label.`},label:{required:!1,tsType:{name:`string`},description:`Label (string editable). Opcional si hay icon (icon-only requiere aria-label).`}},composes:[`Omit`]}}));function h({showIcon:e,selected:t=!1,...n}){let[r,a]=(0,g.useState)(t);return(0,g.useEffect)(()=>{a(t)},[t]),(0,_.jsx)(f,{...n,icon:e?(0,_.jsx)(i,{}):void 0,selected:r,onSelectedChange:a})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{g=t(r(),1),a(),m(),_=n(),v={title:`Components/Actions/Segment`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Subcomponente interno de Segmented Button: opción individual y su estado visual. Contenido: icon, label o ambos (icon a la izquierda del label). No administra la exclusividad del grupo.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Size: sm · md · lg (Semantic/Action por size)`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},selected:{control:`boolean`,description:`true = opción activa; el grupo garantiza exclusividad`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}},label:{control:`text`,description:`Label (string editable). Vacío + icon = solo ícono (usar aria-label).`,table:{type:{summary:`string`}}},showIcon:{control:`boolean`,description:`Leading icon visible (opcional; instance swap vía prop icon)`,table:{defaultValue:{summary:`false`}}},icon:{control:!1,table:{disable:!0}}}},y={docs:{canvas:{sourceState:`none`}}},b=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`},{value:`lg`,sizeLabel:`Large`}],x={args:{size:`sm`,selected:!1,disabled:!1,label:`Opción`,showIcon:!1},render:e=>(0,_.jsx)(h,{...e})},S={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Segment size="sm" selected={false} label="Opción" />`}}},render:()=>(0,_.jsx)(f,{size:`sm`,selected:!1,label:`Opción`})},C={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Segment size="sm" selected label="Opción" />`}}},render:()=>(0,_.jsx)(f,{size:`sm`,selected:!0,label:`Opción`})},w={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Segment size="sm" selected disabled label="Opción" />`}}},render:()=>(0,_.jsx)(f,{size:`sm`,selected:!0,disabled:!0,label:`Opción`})},T={name:`Icon + label`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Segment size="sm" icon={<FavoriteIcon />} label="Opción" />`}}},render:()=>(0,_.jsx)(f,{size:`sm`,icon:(0,_.jsx)(i,{}),label:`Opción`})},E={name:`Icon only`,parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Sin label: el ícono va solo. El nombre accesible se aporta con aria-label.`},source:{code:`<Segment size="sm" icon={<FavoriteIcon />} aria-label="Opción" />`}}},render:()=>(0,_.jsx)(f,{size:`sm`,icon:(0,_.jsx)(i,{}),"aria-label":`Opción`})},D={name:`Selected & size`,parameters:y,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`},r=[{label:`Unselected`,render:e=>(0,_.jsx)(f,{size:e,selected:!1,label:`Opción`})},{label:`Selected`,render:e=>(0,_.jsx)(f,{size:e,selected:!0,label:`Opción`})},{label:`Disabled`,render:e=>(0,_.jsx)(f,{size:e,selected:!1,disabled:!0,label:`Opción`})},{label:`Selected + disabled`,render:e=>(0,_.jsx)(f,{size:e,selected:!0,disabled:!0,label:`Opción`})}];return(0,_.jsx)(`div`,{style:{padding:8},children:(0,_.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Selected / state`}),b.map(({value:t,sizeLabel:n})=>(0,_.jsx)(`th`,{style:e,children:n},t))]})}),(0,_.jsx)(`tbody`,{children:r.map(({label:e,render:r})=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{style:t,children:e}),b.map(({value:e})=>(0,_.jsx)(`td`,{style:n,children:r(e)},e))]},e))})]})})}},O={name:`Ejemplo de uso`,parameters:{docs:{canvas:{sourceState:`none`},description:{story:`Solo como dependencia de un grupo. Selected y State son independientes; la exclusividad la administra el contenedor (futuro Segmented Button).`}}},render:()=>{let[e,t]=(0,g.useState)(`lista`);return(0,_.jsxs)(`div`,{style:{fontFamily:`sans-serif`,display:`flex`,flexDirection:`column`,gap:16,maxWidth:420},children:[(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,_.jsx)(`span`,{style:{fontSize:14,fontWeight:600},children:`Mis cursos`}),(0,_.jsxs)(`div`,{role:`group`,"aria-label":`Vista`,style:{display:`flex`,gap:4},children:[(0,_.jsx)(f,{size:`sm`,selected:e===`lista`,onSelectedChange:e=>e&&t(`lista`),icon:(0,_.jsx)(i,{}),label:`Lista`}),(0,_.jsx)(f,{size:`sm`,selected:e===`cuadricula`,onSelectedChange:e=>e&&t(`cuadricula`),label:`Cuadrícula`})]})]}),(0,_.jsxs)(`div`,{style:{fontSize:13,color:`#666`},children:[`Vista actual: `,e===`lista`?`Lista`:`Cuadrícula`]})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    selected: false,
    disabled: false,
    label: 'Opción',
    showIcon: false
  },
  render: args => <PlaygroundSegment {...args} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Segment size="sm" selected={false} label="Opción" />\`
      }
    }
  },
  render: () => <Segment size="sm" selected={false} label="Opción" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Segment size="sm" selected label="Opción" />\`
      }
    }
  },
  render: () => <Segment size="sm" selected label="Opción" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Segment size="sm" selected disabled label="Opción" />\`
      }
    }
  },
  render: () => <Segment size="sm" selected disabled label="Opción" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Icon + label',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Segment size="sm" icon={<FavoriteIcon />} label="Opción" />\`
      }
    }
  },
  render: () => <Segment size="sm" icon={<FavoriteIcon />} label="Opción" />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Icon only',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Sin label: el ícono va solo. El nombre accesible se aporta con aria-label.'
      },
      source: {
        code: \`<Segment size="sm" icon={<FavoriteIcon />} aria-label="Opción" />\`
      }
    }
  },
  render: () => <Segment size="sm" icon={<FavoriteIcon />} aria-label="Opción" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Selected & size',
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
    const rows = [{
      label: 'Unselected',
      render: (size: 'sm' | 'md' | 'lg') => <Segment size={size} selected={false} label="Opción" />
    }, {
      label: 'Selected',
      render: (size: 'sm' | 'md' | 'lg') => <Segment size={size} selected label="Opción" />
    }, {
      label: 'Disabled',
      render: (size: 'sm' | 'md' | 'lg') => <Segment size={size} selected={false} disabled label="Opción" />
    }, {
      label: 'Selected + disabled',
      render: (size: 'sm' | 'md' | 'lg') => <Segment size={size} selected disabled label="Opción" />
    }] as const;
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
            }}>Selected / state</th>\r
              {SIZES.map(({
              value,
              sizeLabel
            }) => <th key={value} style={th}>\r
                  {sizeLabel}\r
                </th>)}\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {rows.map(({
            label,
            render
          }) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                    {render(value)}\r
                  </td>)}\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      description: {
        story: 'Solo como dependencia de un grupo. Selected y State son independientes; la exclusividad la administra el contenedor (futuro Segmented Button).'
      }
    }
  },
  render: () => {
    const [view, setView] = useState<'lista' | 'cuadricula'>('lista');
    return <div style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 420
    }}>\r
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>\r
          <span style={{
          fontSize: 14,
          fontWeight: 600
        }}>Mis cursos</span>\r
          <div role="group" aria-label="Vista" style={{
          display: 'flex',
          gap: 4
        }}>\r
            <Segment size="sm" selected={view === 'lista'} onSelectedChange={selected => selected && setView('lista')} icon={<FavoriteIcon />} label="Lista" />\r
            <Segment size="sm" selected={view === 'cuadricula'} onSelectedChange={selected => selected && setView('cuadricula')} label="Cuadrícula" />\r
          </div>\r
        </div>\r
        <div style={{
        fontSize: 13,
        color: '#666'
      }}>\r
          Vista actual: {view === 'lista' ? 'Lista' : 'Cuadrícula'}\r
        </div>\r
      </div>;
  }
}`,...O.parameters?.docs?.source},description:{story:`Composición provisional de grupo (exclusividad en el consumidor).\r
Cuando exista Segmented Button, este patrón debe vivir ahí.`,...O.parameters?.docs?.description}}},k=[`Playground`,`Unselected`,`Selected`,`Disabled`,`WithIcon`,`IconOnly`,`AllStates`,`InContext`]}))();export{D as AllStates,w as Disabled,E as IconOnly,O as InContext,x as Playground,C as Selected,S as Unselected,T as WithIcon,k as __namedExportsOrder,v as default};