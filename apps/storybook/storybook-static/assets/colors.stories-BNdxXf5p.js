import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,r as n,t as r}from"./getDesignTokens-DN_V1VFA.js";import{t as i}from"./jsx-runtime-CaZkqeYb.js";function a({label:e,prefix:t}){let i=r(t),a=Object.entries(i);return a.length===0?null:(0,o.jsxs)(`div`,{style:{marginBottom:32},children:[(0,o.jsxs)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:12},children:[e,` `,(0,o.jsxs)(`span`,{style:{fontWeight:400,color:`#888`,fontSize:14},children:[`(`,a.length,`)`]})]}),(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16},children:a.map(([e,t])=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{height:64,borderRadius:8,border:`1px solid rgba(0,0,0,0.1)`,background:`var(${e})`}}),(0,o.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,marginTop:6,wordBreak:`break-all`},children:n(e)}),(0,o.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:`#666`},children:t})]},e))})]})}var o,s,c,l,u;e((()=>{t(),o=i(),s={title:`Foundations/Colors`,parameters:{layout:`fullscreen`}},c=[{label:`Surface`,prefix:`color-surface`},{label:`Text`,prefix:`color-text`},{label:`Border`,prefix:`color-border`},{label:`Icon`,prefix:`color-icon`},{label:`Focus`,prefix:`color-focus`},{label:`Primitivos — Neutral (referencia)`,prefix:`color-neutral`},{label:`Primitivos — Blue (referencia)`,prefix:`color-blue`}],l={render:()=>(0,o.jsxs)(`div`,{style:{padding:32},children:[(0,o.jsx)(`h1`,{style:{fontFamily:`sans-serif`},children:`Colors`}),(0,o.jsx)(`p`,{style:{fontFamily:`sans-serif`,color:`#666`,marginBottom:32},children:`Usa el selector "Marca" en la toolbar de arriba para comparar TEC 360 vs. TEC Educación Continua. Semánticos primero (los que deben usarse en componentes), primitivos al final solo como referencia.`}),c.map(e=>(0,o.jsx)(a,{...e},e.prefix))]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32
  }}>\r
      <h1 style={{
      fontFamily: 'sans-serif'
    }}>Colors</h1>\r
      <p style={{
      fontFamily: 'sans-serif',
      color: '#666',
      marginBottom: 32
    }}>\r
        Usa el selector "Marca" en la toolbar de arriba para comparar TEC 360\r
        vs. TEC Educación Continua. Semánticos primero (los que deben usarse\r
        en componentes), primitivos al final solo como referencia.\r
      </p>\r
      {GROUPS.map(group => <ColorGroup key={group.prefix} {...group} />)}\r
    </div>
}`,...l.parameters?.docs?.source}}},u=[`AllColors`]}))();export{l as AllColors,u as __namedExportsOrder,s as default};