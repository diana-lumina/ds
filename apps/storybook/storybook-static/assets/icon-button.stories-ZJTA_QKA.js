import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{i as n,n as r,t as i}from"./icons-CfyEYSxz.js";import{n as a,t as o}from"./icon-button-CG8jT85H.js";function s(){return{fontFamily:`monospace`,fontSize:11,color:`#888`,marginBottom:6}}function c(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var l,u,d,f,p,m,h,g;e((()=>{a(),n(),l=t(),u={title:`Components/IconButton`,component:o,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},variant:{control:`select`,options:[`default`,`inverse`]},disabled:{control:`boolean`},icon:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},asChild:{control:!1,table:{disable:!0}}}},d=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`}],f={args:{size:`md`,variant:`default`,disabled:!1,"aria-label":`Favorito`,icon:(0,l.jsx)(i,{})}},p={render:()=>(0,l.jsxs)(`div`,{style:{marginBottom:40,paddingBottom:28,borderBottom:`1px solid #eee`},children:[(0,l.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Default`}),(0,l.jsx)(`div`,{style:{display:`flex`,gap:32,alignItems:`flex-start`,flexWrap:`wrap`},children:d.map(({value:e,label:t})=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:s(),children:t}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`flex-start`},children:[(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(o,{size:e,variant:`default`,icon:(0,l.jsx)(i,{}),"aria-label":`Favorito`}),(0,l.jsx)(`div`,{style:c(),children:`Default`})]}),(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(o,{size:e,variant:`default`,icon:(0,l.jsx)(i,{}),"aria-label":`Favorito`,disabled:!0}),(0,l.jsx)(`div`,{style:c(),children:`Disabled`})]})]})]},e))})]})},m={render:()=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Inverse`}),(0,l.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #333)`,padding:24,borderRadius:8,display:`flex`,gap:32,alignItems:`flex-start`,flexWrap:`wrap`},children:d.map(({value:e,label:t})=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{...s(),color:`rgba(255,255,255,0.7)`},children:t}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`flex-start`},children:[(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(o,{size:e,variant:`inverse`,icon:(0,l.jsx)(i,{}),"aria-label":`Favorito`}),(0,l.jsx)(`div`,{style:{...c(),color:`rgba(255,255,255,0.6)`},children:`Default`})]}),(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(o,{size:e,variant:`inverse`,icon:(0,l.jsx)(i,{}),"aria-label":`Favorito`,disabled:!0}),(0,l.jsx)(`div`,{style:{...c(),color:`rgba(255,255,255,0.6)`},children:`Disabled`})]})]})]},e))})]})},h={name:`Ejemplo de uso`,render:()=>(0,l.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:16,fontFamily:`sans-serif`,padding:`10px 20px`,borderBottom:`1px solid #e5e5e5`,background:`#fff`,maxWidth:720},children:[(0,l.jsx)(`span`,{style:{fontSize:15,fontWeight:700,letterSpacing:`-0.02em`},children:`Tec DS`}),(0,l.jsxs)(`nav`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,l.jsx)(`a`,{href:`#`,style:{fontSize:14,color:`#444`,textDecoration:`none`,marginRight:8},children:`Catálogo`}),(0,l.jsx)(o,{size:`sm`,icon:(0,l.jsx)(i,{}),"aria-label":`Carrito`}),(0,l.jsx)(o,{size:`sm`,icon:(0,l.jsx)(r,{}),"aria-label":`Abrir menú`})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    disabled: false,
    'aria-label': 'Favorito',
    icon: <BagIcon />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  render: () => <header style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    fontFamily: 'sans-serif',
    padding: '10px 20px',
    borderBottom: '1px solid #e5e5e5',
    background: '#fff',
    maxWidth: 720
  }}>\r
      <span style={{
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }}>Tec DS</span>\r
      <nav style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>\r
        <a href="#" style={{
        fontSize: 14,
        color: '#444',
        textDecoration: 'none',
        marginRight: 8
      }}>\r
          Catálogo\r
        </a>\r
        <IconButton size="sm" icon={<BagIcon />} aria-label="Carrito" />\r
        <IconButton size="sm" icon={<ChevronIcon />} aria-label="Abrir menú" />\r
      </nav>\r
    </header>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`AllSizes`,`Inverse`,`InContext`]}))();export{p as AllSizes,h as InContext,m as Inverse,f as Playground,g as __namedExportsOrder,u as default};