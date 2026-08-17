import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-BjWpqfAg.js";import{n,r,t as i}from"./icons-DIVuKPJQ.js";var a,o,s,c,l,u;e((()=>{n(),a=t(),o=Object.entries(i).filter(e=>{let[t,n]=e;return t.endsWith(`Icon`)&&t!==`LoadingIcon`&&typeof n==`function`}),s={title:`Foundations/Icons`,parameters:{layout:`padded`,docs:{description:{component:"Catálogo público de `@workspace/ui/icons`. Decorative (`aria-hidden`). Size via `size` or CSS on the parent."}}}},c={render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:20},children:o.map(([e,t])=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:10,padding:`16px 12px`,border:`1px solid var(--border-default)`,borderRadius:8,color:`var(--text-primary)`,minWidth:0},children:[(0,a.jsx)(t,{size:24}),(0,a.jsx)(`code`,{style:{fontSize:11,lineHeight:1.35,textAlign:`center`,overflowWrap:`anywhere`,wordBreak:`break-word`,maxWidth:`100%`},children:e})]},e))})},l={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24,color:`var(--text-primary)`},children:[(0,a.jsx)(r,{size:16}),(0,a.jsx)(r,{size:20}),(0,a.jsx)(r,{size:24}),(0,a.jsx)(r,{size:32})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: 20
  }}>\r
      {catalog.map(([name, Icon]) => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      padding: '16px 12px',
      border: '1px solid var(--border-default)',
      borderRadius: 8,
      color: 'var(--text-primary)',
      minWidth: 0
    }}>\r
          <Icon size={24} />\r
          <code style={{
        fontSize: 11,
        lineHeight: 1.35,
        textAlign: 'center',
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
        maxWidth: '100%'
      }}>\r
            {name}\r
          </code>\r
        </div>)}\r
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    color: 'var(--text-primary)'
  }}>\r
      <Icons.ShoppingBagIcon size={16} />\r
      <Icons.ShoppingBagIcon size={20} />\r
      <Icons.ShoppingBagIcon size={24} />\r
      <Icons.ShoppingBagIcon size={32} />\r
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Catalog`,`Sizes`]}))();export{c as Catalog,l as Sizes,u as __namedExportsOrder,s as default};