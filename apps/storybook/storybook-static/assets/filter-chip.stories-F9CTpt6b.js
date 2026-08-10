import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n}from"./iframe-D2oEYGbO.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{i,n as a,r as o,t as s}from"./icons-CfyEYSxz.js";import{n as c,t as l}from"./utils-D8qMR3V9.js";var u,d,f,p=e((()=>{u=`_root_1grkl_1`,d=`_iconWrapper_1grkl_47`,f={root:u,iconWrapper:d}}));function m({size:e=`sm`,selected:t=!1,onSelectedChange:n,icon:r,children:i,className:a,disabled:o,...s}){return(0,h.jsxs)(`button`,{type:`button`,"data-slot":`filter-chip`,"data-size":e,"data-selected":t,"aria-pressed":t,disabled:o,onClick:()=>n?.(!t),className:l(f.root,a),...s,children:[r&&(0,h.jsx)(`span`,{className:f.iconWrapper,"aria-hidden":`true`,children:r}),i]})}var h,g=e((()=>{n(),c(),p(),h=r(),m.__docgenInfo={description:``,methods:[],displayName:`FilterChip`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onSelectedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`selected`}],return:{name:`void`}}},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`Omit`]}}));function _(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}function v({icon:e,selected:t=!1,...n}){let[r,i]=(0,y.useState)(t);return(0,y.useEffect)(()=>{i(t)},[t]),(0,b.jsx)(m,{...n,icon:x[e],selected:r,onSelectedChange:i})}var y,b,x,S,C,w,T,E;e((()=>{y=t(n(),1),g(),i(),b=r(),x={none:void 0,bag:(0,b.jsx)(s,{}),chevron:(0,b.jsx)(a,{}),close:(0,b.jsx)(o,{})},S={title:`Components/FilterChip`,component:m,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},selected:{control:`boolean`},disabled:{control:`boolean`},icon:{control:`select`,options:Object.keys(x)},children:{control:`text`}}},C={args:{size:`sm`,selected:!1,disabled:!1,children:`Categoría`,icon:`bag`},render:e=>(0,b.jsx)(v,{...e})},w={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Small`}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`,flexWrap:`wrap`},children:[(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`sm`,selected:!1,children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Unselected`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`sm`,selected:!0,children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Selected`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`sm`,disabled:!0,children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Disabled (unselected)`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`sm`,selected:!0,disabled:!0,children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Disabled (selected)`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`sm`,selected:!0,icon:(0,b.jsx)(s,{}),children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Con ícono`})]})]})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Medium`}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`,flexWrap:`wrap`},children:[(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`md`,selected:!1,children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Unselected`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`md`,selected:!0,children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Selected`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`md`,disabled:!0,children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Disabled (unselected)`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`md`,selected:!0,disabled:!0,children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Disabled (selected)`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(m,{size:`md`,selected:!0,icon:(0,b.jsx)(s,{}),children:`Categoría`}),(0,b.jsx)(`div`,{style:_(),children:`Con ícono`})]})]})]})]})},T={name:`Ejemplo de uso`,render:()=>{let[e,t]=(0,y.useState)(`online`),[n,r]=(0,y.useState)(`intermedio`);return(0,b.jsxs)(`div`,{style:{fontFamily:`sans-serif`,display:`flex`,flexDirection:`column`,gap:12,maxWidth:480},children:[(0,b.jsx)(`span`,{style:{fontSize:13,color:`#666`},children:`Filtrar cursos`}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,b.jsx)(m,{size:`sm`,selected:e===`online`,onSelectedChange:e=>t(e?`online`:``),children:`En línea`}),(0,b.jsx)(m,{size:`sm`,selected:e===`presencial`,onSelectedChange:e=>t(e?`presencial`:``),children:`Presencial`}),(0,b.jsx)(m,{size:`sm`,selected:n===`intermedio`,onSelectedChange:e=>r(e?`intermedio`:null),children:`Intermedio`}),(0,b.jsx)(m,{size:`sm`,selected:!1,disabled:!0,children:`Certificación`})]})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    selected: false,
    disabled: false,
    children: 'Categoría',
    icon: 'bag'
  },
  render: args => <PlaygroundChip {...args} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Small</h2>\r
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
            <FilterChip size="sm" selected={false}>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Unselected</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <FilterChip size="sm" selected={true}>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Selected</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <FilterChip size="sm" disabled>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Disabled (unselected)</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <FilterChip size="sm" selected disabled>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Disabled (selected)</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <FilterChip size="sm" selected icon={<BagIcon />}>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Con ícono</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Medium</h2>\r
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
            <FilterChip size="md" selected={false}>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Unselected</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <FilterChip size="md" selected={true}>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Selected</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <FilterChip size="md" disabled>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Disabled (unselected)</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <FilterChip size="md" selected disabled>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Disabled (selected)</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <FilterChip size="md" selected icon={<BagIcon />}>\r
              Categoría\r
            </FilterChip>\r
            <div style={captionStyle()}>Con ícono</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  render: () => {
    const [modality, setModality] = useState('online');
    const [level, setLevel] = useState<string | null>('intermedio');
    return <div style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 480
    }}>\r
        <span style={{
        fontSize: 13,
        color: '#666'
      }}>Filtrar cursos</span>\r
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>\r
          <FilterChip size="sm" selected={modality === 'online'} onSelectedChange={selected => setModality(selected ? 'online' : '')}>\r
            En línea\r
          </FilterChip>\r
          <FilterChip size="sm" selected={modality === 'presencial'} onSelectedChange={selected => setModality(selected ? 'presencial' : '')}>\r
            Presencial\r
          </FilterChip>\r
          <FilterChip size="sm" selected={level === 'intermedio'} onSelectedChange={selected => setLevel(selected ? 'intermedio' : null)}>\r
            Intermedio\r
          </FilterChip>\r
          <FilterChip size="sm" selected={false} disabled>\r
            Certificación\r
          </FilterChip>\r
        </div>\r
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`AllStates`,`InContext`]}))();export{w as AllStates,T as InContext,C as Playground,E as __namedExportsOrder,S as default};