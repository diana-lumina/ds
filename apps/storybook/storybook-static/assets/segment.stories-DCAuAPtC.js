import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n}from"./iframe-D2oEYGbO.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";var o,s,c=e((()=>{o=`_root_3b5kw_1`,s={root:o}}));function l({size:e=`sm`,selected:t=!1,onSelectedChange:n,children:r,className:i,disabled:o,...c}){return(0,u.jsx)(`button`,{type:`button`,"data-slot":`segment`,"data-size":e,"data-selected":t,"aria-pressed":t,disabled:o,onClick:()=>n?.(!t),className:a(s.root,i),...c,children:r})}var u,d=e((()=>{n(),i(),c(),u=r(),l.__docgenInfo={description:``,methods:[],displayName:`Segment`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onSelectedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`selected`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}}));function f(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}function p(e){let{selected:t=!1,...n}=e,[r,i]=(0,m.useState)(t);return(0,m.useEffect)(()=>{i(t)},[t]),(0,h.jsx)(l,{...n,selected:r,onSelectedChange:i})}var m,h,g,_,v,y,b;e((()=>{m=t(n(),1),d(),h=r(),g={title:`Components/Segment`,component:l,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},selected:{control:`boolean`},disabled:{control:`boolean`}}},_={render:e=>(0,h.jsx)(p,{...e}),args:{size:`sm`,selected:!1,children:`Opción`}},v={render:()=>(0,h.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[`sm`,`md`,`lg`].map(e=>(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:e===`sm`?`Small`:e===`md`?`Medium`:`Large`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`,flexWrap:`wrap`},children:[(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(l,{size:e,selected:!1,children:`Opción`}),(0,h.jsx)(`div`,{style:f(),children:`Unselected`})]}),(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(l,{size:e,selected:!0,children:`Opción`}),(0,h.jsx)(`div`,{style:f(),children:`Selected`})]}),(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(l,{size:e,disabled:!0,children:`Opción`}),(0,h.jsx)(`div`,{style:f(),children:`Disabled (unselected)`})]}),(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(l,{size:e,selected:!0,disabled:!0,children:`Opción`}),(0,h.jsx)(`div`,{style:f(),children:`Disabled (selected)`})]})]})]},e))})},y={name:`Ejemplo de uso`,render:()=>{let[e,t]=(0,m.useState)(`lista`);return(0,h.jsxs)(`div`,{style:{fontFamily:`sans-serif`,display:`flex`,flexDirection:`column`,gap:16,maxWidth:420},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,h.jsx)(`span`,{style:{fontSize:14,fontWeight:600},children:`Mis cursos`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,h.jsx)(l,{size:`sm`,selected:e===`lista`,onSelectedChange:e=>e&&t(`lista`),children:`Lista`}),(0,h.jsx)(l,{size:`sm`,selected:e===`cuadricula`,onSelectedChange:e=>e&&t(`cuadricula`),children:`Cuadrícula`})]})]}),(0,h.jsxs)(`div`,{style:{fontSize:13,color:`#666`},children:[`Vista actual: `,e===`lista`?`Lista`:`Cuadrícula`]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <PlaygroundSegment {...args} />,
  args: {
    size: 'sm',
    selected: false,
    children: 'Opción'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>\r
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size}>\r
          <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>\r
            {size === 'sm' ? 'Small' : size === 'md' ? 'Medium' : 'Large'}\r
          </h2>\r
\r
          <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>\r
            <div style={{
          textAlign: 'center'
        }}>\r
              <Segment size={size} selected={false}>\r
                Opción\r
              </Segment>\r
              <div style={captionStyle()}>Unselected</div>\r
            </div>\r
            <div style={{
          textAlign: 'center'
        }}>\r
              <Segment size={size} selected>\r
                Opción\r
              </Segment>\r
              <div style={captionStyle()}>Selected</div>\r
            </div>\r
            <div style={{
          textAlign: 'center'
        }}>\r
              <Segment size={size} disabled>\r
                Opción\r
              </Segment>\r
              <div style={captionStyle()}>Disabled (unselected)</div>\r
            </div>\r
            <div style={{
          textAlign: 'center'
        }}>\r
              <Segment size={size} selected disabled>\r
                Opción\r
              </Segment>\r
              <div style={captionStyle()}>Disabled (selected)</div>\r
            </div>\r
          </div>\r
        </div>)}\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
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
          <div style={{
          display: 'flex',
          gap: 4
        }}>\r
            <Segment size="sm" selected={view === 'lista'} onSelectedChange={selected => selected && setView('lista')}>\r
              Lista\r
            </Segment>\r
            <Segment size="sm" selected={view === 'cuadricula'} onSelectedChange={selected => selected && setView('cuadricula')}>\r
              Cuadrícula\r
            </Segment>\r
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
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`AllStates`,`InContext`]}))();export{v as AllStates,y as InContext,_ as Playground,b as __namedExportsOrder,g as default};