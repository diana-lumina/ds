import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n}from"./iframe-DutUqOlQ.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{i,t as a}from"./icons-CfyEYSxz.js";import{n as o,t as s}from"./utils-D8qMR3V9.js";var c,l,u,d=e((()=>{c=`_root_1grkl_1`,l=`_iconWrapper_1grkl_47`,u={root:c,iconWrapper:l}}));function f({size:e=`sm`,selected:t=!1,onSelectedChange:n,icon:r,children:i,className:a,disabled:o,...c}){return(0,p.jsxs)(`button`,{type:`button`,"data-slot":`filter-chip`,"data-size":e,"data-selected":t,"aria-pressed":t,disabled:o,onClick:()=>n?.(!t),className:s(u.root,a),...c,children:[r&&(0,p.jsx)(`span`,{className:u.iconWrapper,"aria-hidden":`true`,children:r}),i]})}var p,m=e((()=>{n(),o(),d(),p=r(),f.__docgenInfo={description:``,methods:[],displayName:`FilterChip`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onSelectedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`selected`}],return:{name:`void`}}},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`Omit`]}}));function h(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var g,_,v,y,b,x;e((()=>{g=t(n(),1),m(),i(),_=r(),v={title:`Components/FilterChip`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},selected:{control:`boolean`},disabled:{control:`boolean`}}},y={render:e=>{let[t,n]=(0,g.useState)(e.selected??!1);return(0,_.jsx)(f,{...e,selected:t,onSelectedChange:n})},args:{size:`sm`,selected:!1,children:`Categoría`}},b={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Small`}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`,flexWrap:`wrap`},children:[(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`sm`,selected:!1,children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Unselected`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`sm`,selected:!0,children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Selected`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`sm`,disabled:!0,children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Disabled (unselected)`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`sm`,selected:!0,disabled:!0,children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Disabled (selected)`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`sm`,selected:!0,icon:(0,_.jsx)(a,{}),children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Con ícono`})]})]})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Medium`}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`md`,selected:!1,children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Unselected`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`md`,selected:!0,children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Selected`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`md`,disabled:!0,children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Disabled (unselected)`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`md`,selected:!0,disabled:!0,children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Disabled (selected)`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:`md`,selected:!0,icon:(0,_.jsx)(a,{}),children:`Categoría`}),(0,_.jsx)(`div`,{style:h(),children:`Con ícono`})]})]})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selected ?? false);
    return <FilterChip {...args} selected={selected} onSelectedChange={setSelected} />;
  },
  args: {
    size: 'sm',
    selected: false,
    children: 'Categoría'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        alignItems: 'center'
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
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`AllStates`]}))();export{b as AllStates,y as Playground,x as __namedExportsOrder,v as default};