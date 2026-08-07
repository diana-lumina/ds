import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-DutUqOlQ.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{i as r,t as i}from"./icons-CfyEYSxz.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";import{n as s,t as c}from"./dist-BWQXtvFs.js";var l,u,d=e((()=>{l=`_root_sz0g9_1`,u={root:l}}));function f({icon:e,size:t=`md`,variant:n=`default`,asChild:r=!1,className:i,children:a,...s}){return(0,p.jsx)(r?c:`button`,{"data-slot":`icon-button`,"data-size":t,"data-variant":n,className:o(u.root,i),...s,children:r?a:(0,p.jsx)(`span`,{"aria-hidden":`true`,className:u.iconWrapper,children:e})})}var p,m=e((()=>{t(),s(),a(),d(),p=n(),f.__docgenInfo={description:``,methods:[],displayName:`IconButton`,props:{icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'inverse'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!0,tsType:{name:`string`},description:``}}}}));function h(){return{fontFamily:`monospace`,fontSize:11,color:`#888`,marginBottom:6}}function g(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var _,v,y,b,x,S,C;e((()=>{m(),r(),_=n(),v={title:`Components/IconButton`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},variant:{control:`select`,options:[`default`,`inverse`]},disabled:{control:`boolean`}}},y=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`}],b={args:{size:`md`,variant:`default`,disabled:!1,"aria-label":`Favorito`,icon:(0,_.jsx)(i,{})}},x={render:()=>(0,_.jsxs)(`div`,{style:{marginBottom:40,paddingBottom:28,borderBottom:`1px solid #eee`},children:[(0,_.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Default`}),(0,_.jsx)(`div`,{style:{display:`flex`,gap:32,alignItems:`flex-start`,flexWrap:`wrap`},children:y.map(({value:e,label:t})=>(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{style:h(),children:t}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`flex-start`},children:[(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:e,variant:`default`,icon:(0,_.jsx)(i,{}),"aria-label":`Favorito`}),(0,_.jsx)(`div`,{style:g(),children:`Default`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:e,variant:`default`,icon:(0,_.jsx)(i,{}),"aria-label":`Favorito`,disabled:!0}),(0,_.jsx)(`div`,{style:g(),children:`Disabled`})]})]})]},e))})]})},S={render:()=>(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Inverse`}),(0,_.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #333)`,padding:24,borderRadius:8,display:`flex`,gap:32,alignItems:`flex-start`,flexWrap:`wrap`},children:y.map(({value:e,label:t})=>(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{style:{...h(),color:`rgba(255,255,255,0.7)`},children:t}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`flex-start`},children:[(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:e,variant:`inverse`,icon:(0,_.jsx)(i,{}),"aria-label":`Favorito`}),(0,_.jsx)(`div`,{style:{...g(),color:`rgba(255,255,255,0.6)`},children:`Default`})]}),(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(f,{size:e,variant:`inverse`,icon:(0,_.jsx)(i,{}),"aria-label":`Favorito`,disabled:!0}),(0,_.jsx)(`div`,{style:{...g(),color:`rgba(255,255,255,0.6)`},children:`Disabled`})]})]})]},e))})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    disabled: false,
    'aria-label': 'Favorito',
    icon: <BagIcon />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    marginBottom: 40,
    paddingBottom: 28,
    borderBottom: '1px solid #eee'
  }}>\r
      <h2 style={{
      fontFamily: 'sans-serif',
      marginBottom: 4
    }}>Default</h2>\r
     \r
      <div style={{
      display: 'flex',
      gap: 32,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }}>\r
        {SIZES.map(({
        value,
        label
      }) => <div key={value}>\r
            <div style={labelStyle()}>{label}</div>\r
            <div style={{
          display: 'flex',
          gap: 20,
          alignItems: 'flex-start'
        }}>\r
              <div style={{
            textAlign: 'center'
          }}>\r
                <IconButton size={value} variant="default" icon={<BagIcon />} aria-label="Favorito" />\r
                <div style={captionStyle()}>Default</div>\r
              </div>\r
              <div style={{
            textAlign: 'center'
          }}>\r
                <IconButton size={value} variant="default" icon={<BagIcon />} aria-label="Favorito" disabled />\r
                <div style={captionStyle()}>Disabled</div>\r
              </div>\r
            </div>\r
          </div>)}\r
      </div>\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div>\r
      <h2 style={{
      fontFamily: 'sans-serif',
      marginBottom: 4
    }}>Inverse</h2>\r
    \r
      <div style={{
      background: 'var(--color-surface-brand-strong, #333)',
      padding: 24,
      borderRadius: 8,
      display: 'flex',
      gap: 32,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }}>\r
        {SIZES.map(({
        value,
        label
      }) => <div key={value}>\r
            <div style={{
          ...labelStyle(),
          color: 'rgba(255,255,255,0.7)'
        }}>{label}</div>\r
            <div style={{
          display: 'flex',
          gap: 20,
          alignItems: 'flex-start'
        }}>\r
              <div style={{
            textAlign: 'center'
          }}>\r
                <IconButton size={value} variant="inverse" icon={<BagIcon />} aria-label="Favorito" />\r
                <div style={{
              ...captionStyle(),
              color: 'rgba(255,255,255,0.6)'
            }}>Default</div>\r
              </div>\r
              <div style={{
            textAlign: 'center'
          }}>\r
                <IconButton size={value} variant="inverse" icon={<BagIcon />} aria-label="Favorito" disabled />\r
                <div style={{
              ...captionStyle(),
              color: 'rgba(255,255,255,0.6)'
            }}>Disabled</div>\r
              </div>\r
            </div>\r
          </div>)}\r
      </div>\r
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`AllSizes`,`Inverse`]}))();export{x as AllSizes,S as Inverse,b as Playground,C as __namedExportsOrder,v as default};