import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{h as n,n as r,tt as i}from"./icons-QF8wPxMP.js";import{n as a,t as o}from"./icon-button-Bh3oQobN.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{a(),r(),s=t(),c={title:`Components/Actions/IconButton`,component:o,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Acción únicamente icónica. Hierarchy primary (receta filled) o tertiary (ghost). `aria-label` es obligatorio. tone inverse solo aplica a primary."}}},argTypes:{hierarchy:{control:`select`,options:[`primary`,`tertiary`],description:`primary · tertiary`,table:{type:{summary:`string`},defaultValue:{summary:`primary`}}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Size: sm · md · lg`,table:{type:{summary:`string`},defaultValue:{summary:`md`}}},tone:{control:`select`,options:[`standard`,`inverse`],description:`standard sobre superficies claras · inverse sobre oscuras / brand`,table:{type:{summary:`string`},defaultValue:{summary:`standard`}}},loading:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},"aria-label":{control:`text`,description:`Accessible label obligatorio`},icon:{control:!1,table:{disable:!0}}}},l=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`},{value:`lg`,sizeLabel:`Large`}],u={docs:{canvas:{sourceState:`shown`}}},d={docs:{canvas:{sourceState:`none`}}},f={args:{hierarchy:`primary`,tone:`standard`,icon:(0,s.jsx)(n,{}),"aria-label":`Favorito`}},p={parameters:{...u,docs:{...u.docs,source:{code:`<IconButton
  tone="standard"
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
/>`}}},args:{tone:`standard`,icon:(0,s.jsx)(n,{}),"aria-label":`Favorito`}},m={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<IconButton
  tone="inverse"
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
/>`}},backgrounds:{default:`dark`}},args:{tone:`inverse`,icon:(0,s.jsx)(n,{}),"aria-label":`Favorito`},decorators:[e=>(0,s.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-flex`},children:(0,s.jsx)(e,{})})]},h={parameters:{...u,docs:{...u.docs,source:{code:`<IconButton
  hierarchy="tertiary"
  size="sm"
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
/>`}}},args:{hierarchy:`tertiary`,size:`sm`,icon:(0,s.jsx)(n,{}),"aria-label":`Favorito`}},g={parameters:{...u,docs:{...u.docs,source:{code:`<IconButton
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
  disabled
/>`}}},args:{icon:(0,s.jsx)(n,{}),"aria-label":`Favorito`,disabled:!0}},_={parameters:{...u,docs:{...u.docs,source:{code:`<IconButton
  icon={<ShoppingBagIcon />}
  aria-label="Cargando"
  loading
/>`}}},args:{icon:(0,s.jsx)(n,{}),"aria-label":`Cargando`,loading:!0}},v={name:`Hierarchy & size`,parameters:d,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},r={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,s.jsx)(`div`,{style:{padding:8},children:(0,s.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Variant`}),l.map(({value:t,sizeLabel:n})=>(0,s.jsx)(`th`,{style:e,children:n},t))]})}),(0,s.jsxs)(`tbody`,{children:[(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{style:t,children:`Primary`}),l.map(({value:e})=>(0,s.jsx)(`td`,{style:r,children:(0,s.jsx)(o,{size:e,hierarchy:`primary`,icon:(0,s.jsx)(n,{}),"aria-label":`Favorito`})},e))]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{style:t,children:`Tertiary`}),l.map(({value:e})=>(0,s.jsx)(`td`,{style:r,children:(0,s.jsx)(o,{size:e,hierarchy:`tertiary`,icon:(0,s.jsx)(n,{}),"aria-label":`Favorito`})},e))]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{style:t,children:`Primary inverse`}),l.map(({value:e})=>(0,s.jsx)(`td`,{style:{...r,background:`var(--color-surface-brand-strong, #231f20)`},children:(0,s.jsx)(o,{size:e,hierarchy:`primary`,tone:`inverse`,icon:(0,s.jsx)(n,{}),"aria-label":`Favorito`})},e))]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{style:{...t,borderBottom:`none`},children:`Tertiary disabled`}),l.map(({value:e})=>(0,s.jsx)(`td`,{style:{...r,borderBottom:`none`},children:(0,s.jsx)(o,{size:e,hierarchy:`tertiary`,icon:(0,s.jsx)(n,{}),"aria-label":`Favorito`,disabled:!0})},e))]})]})]})})}},y={name:`Ejemplo de uso`,parameters:d,render:()=>(0,s.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:16,fontFamily:`sans-serif`,padding:`10px 20px`,borderBottom:`1px solid #e5e5e5`,background:`#fff`,maxWidth:720},children:[(0,s.jsx)(`span`,{style:{fontSize:15,fontWeight:700,letterSpacing:`-0.02em`},children:`Tec DS`}),(0,s.jsxs)(`nav`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,s.jsx)(`a`,{href:`#`,style:{fontSize:14,color:`#444`,textDecoration:`none`,marginRight:8},children:`Catálogo`}),(0,s.jsx)(o,{size:`sm`,icon:(0,s.jsx)(n,{}),"aria-label":`Carrito`}),(0,s.jsx)(o,{size:`sm`,icon:(0,s.jsx)(i,{}),"aria-label":`Abrir menú`})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: 'primary',
    tone: 'standard',
    icon: <ShoppingBagIcon />,
    'aria-label': 'Favorito'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<IconButton
  tone="standard"
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
/>\`
      }
    }
  },
  args: {
    tone: 'standard',
    icon: <ShoppingBagIcon />,
    'aria-label': 'Favorito'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<IconButton
  tone="inverse"
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
/>\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    tone: 'inverse',
    icon: <ShoppingBagIcon />,
    'aria-label': 'Favorito'
  },
  decorators: [Story => <div style={{
    background: 'var(--color-surface-brand-strong, #231f20)',
    padding: 24,
    borderRadius: 8,
    display: 'inline-flex'
  }}>\r
        <Story />\r
      </div>]
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<IconButton
  hierarchy="tertiary"
  size="sm"
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
/>\`
      }
    }
  },
  args: {
    hierarchy: 'tertiary',
    size: 'sm',
    icon: <ShoppingBagIcon />,
    'aria-label': 'Favorito'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<IconButton
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
  disabled
/>\`
      }
    }
  },
  args: {
    icon: <ShoppingBagIcon />,
    'aria-label': 'Favorito',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<IconButton
  icon={<ShoppingBagIcon />}
  aria-label="Cargando"
  loading
/>\`
      }
    }
  },
  args: {
    icon: <ShoppingBagIcon />,
    'aria-label': 'Cargando',
    loading: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Hierarchy & size',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 20px 12px',
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
      padding: '16px 20px',
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
            }}>Variant</th>\r
              {SIZES.map(({
              value,
              sizeLabel
            }) => <th key={value} style={th}>\r
                  {sizeLabel}\r
                </th>)}\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Primary</td>\r
              {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                  <IconButton size={value} hierarchy="primary" icon={<ShoppingBagIcon />} aria-label="Favorito" />\r
                </td>)}\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Tertiary</td>\r
              {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                  <IconButton size={value} hierarchy="tertiary" icon={<ShoppingBagIcon />} aria-label="Favorito" />\r
                </td>)}\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Primary inverse</td>\r
              {SIZES.map(({
              value
            }) => <td key={value} style={{
              ...td,
              background: 'var(--color-surface-brand-strong, #231f20)'
            }}>\r
                  <IconButton size={value} hierarchy="primary" tone="inverse" icon={<ShoppingBagIcon />} aria-label="Favorito" />\r
                </td>)}\r
            </tr>\r
            <tr>\r
              <td style={{
              ...rowLabel,
              borderBottom: 'none'
            }}>Tertiary disabled</td>\r
              {SIZES.map(({
              value
            }) => <td key={value} style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                  <IconButton size={value} hierarchy="tertiary" icon={<ShoppingBagIcon />} aria-label="Favorito" disabled />\r
                </td>)}\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
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
        <IconButton size="sm" icon={<ShoppingBagIcon />} aria-label="Carrito" />\r
        <IconButton size="sm" icon={<CaretDownIcon />} aria-label="Abrir menú" />\r
      </nav>\r
    </header>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Standard`,`Inverse`,`Tertiary`,`Disabled`,`Loading`,`HierarchyAndSize`,`InContext`]}))();export{g as Disabled,v as HierarchyAndSize,y as InContext,m as Inverse,_ as Loading,f as Playground,p as Standard,h as Tertiary,b as __namedExportsOrder,c as default};