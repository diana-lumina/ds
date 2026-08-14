import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-DZgM_VOp.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";var o,s,c=e((()=>{o=`_root_1uka4_1`,s={root:o}}));function l({size:e=`sm`,selected:t=!1,onSelectedChange:n,label:r,className:i,disabled:o,...c}){return(0,u.jsx)(`button`,{type:`button`,"data-slot":`segment`,"data-size":e,"data-selected":t,"aria-pressed":t,disabled:o,onClick:()=>n?.(!t),className:a(s.root,i),...c,children:r})}var u,d=e((()=>{r(),i(),c(),u=n(),l.__docgenInfo={description:`Subcomponente interno de Segmented Button.\r
No administra exclusividad del grupo ni debe consumirse como acción independiente.`,methods:[],displayName:`Segment`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:`Selected=true identifica la opción activa; la exclusividad la garantiza el grupo.`,defaultValue:{value:`false`,computed:!1}},onSelectedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`selected`}],return:{name:`void`}}},description:``},label:{required:!0,tsType:{name:`string`},description:`Label (string editable).`}},composes:[`Omit`]}}));function f({selected:e=!1,...t}){let[n,r]=(0,p.useState)(e);return(0,p.useEffect)(()=>{r(e)},[e]),(0,m.jsx)(l,{...t,selected:n,onSelectedChange:r})}var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{p=t(r(),1),d(),m=n(),h={title:`Components/Actions/Segment`,component:l,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Subcomponente interno de Segmented Button: opción individual y su estado visual. No administra la exclusividad del grupo. API pública interna — consumir mediante Segmented Button.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Size: sm · md · lg (Semantic/Action por size)`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},selected:{control:`boolean`,description:`true = opción activa; el grupo garantiza exclusividad`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}},label:{control:`text`,description:`Label (string editable)`}}},g={docs:{canvas:{sourceState:`none`}}},_=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`},{value:`lg`,sizeLabel:`Large`}],v={args:{size:`sm`,selected:!1,disabled:!1,label:`Opción`},render:e=>(0,m.jsx)(f,{...e})},y={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Segment size="sm" selected={false} label="Opción" />`}}},render:()=>(0,m.jsx)(l,{size:`sm`,selected:!1,label:`Opción`})},b={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Segment size="sm" selected label="Opción" />`}}},render:()=>(0,m.jsx)(l,{size:`sm`,selected:!0,label:`Opción`})},x={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Segment size="sm" selected disabled label="Opción" />`}}},render:()=>(0,m.jsx)(l,{size:`sm`,selected:!0,disabled:!0,label:`Opción`})},S={name:`Selected & size`,parameters:g,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`},r=[{label:`Unselected`,render:e=>(0,m.jsx)(l,{size:e,selected:!1,label:`Opción`})},{label:`Selected`,render:e=>(0,m.jsx)(l,{size:e,selected:!0,label:`Opción`})},{label:`Disabled`,render:e=>(0,m.jsx)(l,{size:e,selected:!1,disabled:!0,label:`Opción`})},{label:`Selected + disabled`,render:e=>(0,m.jsx)(l,{size:e,selected:!0,disabled:!0,label:`Opción`})}];return(0,m.jsx)(`div`,{style:{padding:8},children:(0,m.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Selected / state`}),_.map(({value:t,sizeLabel:n})=>(0,m.jsx)(`th`,{style:e,children:n},t))]})}),(0,m.jsx)(`tbody`,{children:r.map(({label:e,render:r})=>(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:t,children:e}),_.map(({value:e})=>(0,m.jsx)(`td`,{style:n,children:r(e)},e))]},e))})]})})}},C={name:`Ejemplo de uso`,parameters:{docs:{canvas:{sourceState:`none`},description:{story:`Solo como dependencia de un grupo. Selected y State son independientes; la exclusividad la administra el contenedor (futuro Segmented Button).`}}},render:()=>{let[e,t]=(0,p.useState)(`lista`);return(0,m.jsxs)(`div`,{style:{fontFamily:`sans-serif`,display:`flex`,flexDirection:`column`,gap:16,maxWidth:420},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,m.jsx)(`span`,{style:{fontSize:14,fontWeight:600},children:`Mis cursos`}),(0,m.jsxs)(`div`,{role:`group`,"aria-label":`Vista`,style:{display:`flex`,gap:4},children:[(0,m.jsx)(l,{size:`sm`,selected:e===`lista`,onSelectedChange:e=>e&&t(`lista`),label:`Lista`}),(0,m.jsx)(l,{size:`sm`,selected:e===`cuadricula`,onSelectedChange:e=>e&&t(`cuadricula`),label:`Cuadrícula`})]})]}),(0,m.jsxs)(`div`,{style:{fontSize:13,color:`#666`},children:[`Vista actual: `,e===`lista`?`Lista`:`Cuadrícula`]})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    selected: false,
    disabled: false,
    label: 'Opción'
  },
  render: args => <PlaygroundSegment {...args} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            <Segment size="sm" selected={view === 'lista'} onSelectedChange={selected => selected && setView('lista')} label="Lista" />\r
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
}`,...C.parameters?.docs?.source},description:{story:`Composición provisional de grupo (exclusividad en el consumidor).\r
Cuando exista Segmented Button, este patrón debe vivir ahí.`,...C.parameters?.docs?.description}}},w=[`Playground`,`Unselected`,`Selected`,`Disabled`,`AllStates`,`InContext`]}))();export{S as AllStates,x as Disabled,C as InContext,v as Playground,b as Selected,y as Unselected,w as __namedExportsOrder,h as default};