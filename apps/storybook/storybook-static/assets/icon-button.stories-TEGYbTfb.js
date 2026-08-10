import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{i as n,t as r}from"./icons-CfyEYSxz.js";import{n as i,t as a}from"./icon-button-CZh_Keib.js";function o(){return{fontFamily:`monospace`,fontSize:11,color:`#888`,marginBottom:6}}function s(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var c,l,u,d,f,p,m;e((()=>{i(),n(),c=t(),l={title:`Components/IconButton`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},variant:{control:`select`,options:[`default`,`inverse`]},disabled:{control:`boolean`},icon:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},asChild:{control:!1,table:{disable:!0}}}},u=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`}],d={args:{size:`md`,variant:`default`,disabled:!1,"aria-label":`Favorito`,icon:(0,c.jsx)(r,{})}},f={render:()=>(0,c.jsxs)(`div`,{style:{marginBottom:40,paddingBottom:28,borderBottom:`1px solid #eee`},children:[(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Default`}),(0,c.jsx)(`div`,{style:{display:`flex`,gap:32,alignItems:`flex-start`,flexWrap:`wrap`},children:u.map(({value:e,label:t})=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:o(),children:t}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`flex-start`},children:[(0,c.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,c.jsx)(a,{size:e,variant:`default`,icon:(0,c.jsx)(r,{}),"aria-label":`Favorito`}),(0,c.jsx)(`div`,{style:s(),children:`Default`})]}),(0,c.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,c.jsx)(a,{size:e,variant:`default`,icon:(0,c.jsx)(r,{}),"aria-label":`Favorito`,disabled:!0}),(0,c.jsx)(`div`,{style:s(),children:`Disabled`})]})]})]},e))})]})},p={render:()=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Inverse`}),(0,c.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #333)`,padding:24,borderRadius:8,display:`flex`,gap:32,alignItems:`flex-start`,flexWrap:`wrap`},children:u.map(({value:e,label:t})=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{...o(),color:`rgba(255,255,255,0.7)`},children:t}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`flex-start`},children:[(0,c.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,c.jsx)(a,{size:e,variant:`inverse`,icon:(0,c.jsx)(r,{}),"aria-label":`Favorito`}),(0,c.jsx)(`div`,{style:{...s(),color:`rgba(255,255,255,0.6)`},children:`Default`})]}),(0,c.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,c.jsx)(a,{size:e,variant:`inverse`,icon:(0,c.jsx)(r,{}),"aria-label":`Favorito`,disabled:!0}),(0,c.jsx)(`div`,{style:{...s(),color:`rgba(255,255,255,0.6)`},children:`Disabled`})]})]})]},e))})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    disabled: false,
    'aria-label': 'Favorito',
    icon: <BagIcon />
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`AllSizes`,`Inverse`]}))();export{f as AllSizes,p as Inverse,d as Playground,m as __namedExportsOrder,l as default};