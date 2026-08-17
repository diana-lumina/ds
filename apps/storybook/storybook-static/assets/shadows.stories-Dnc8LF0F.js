import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-gd-_F7EU.js";import{n,r,t as i}from"./getDesignTokens-DN_V1VFA.js";var a,o,s,c;e((()=>{n(),a=t(),o={title:`Foundations/Shadows`,parameters:{layout:`fullscreen`}},s={render:()=>{let e=i(`elevation`),t=Object.entries(e).sort(([e],[t])=>e.localeCompare(t));return(0,a.jsxs)(`div`,{style:{padding:32,background:`#f5f5f5`,fontFamily:`sans-serif`},children:[(0,a.jsx)(`h1`,{children:`Shadows`}),(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:40,marginTop:40},children:t.map(([e,t])=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{style:{height:96,width:`100%`,background:`#fff`,borderRadius:8,boxShadow:`var(${e})`}}),(0,a.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,marginTop:12},children:r(e)}),(0,a.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:`#666`,wordBreak:`break-all`},children:t})]},e))})]})}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tokens = getDesignTokens('elevation');
    const entries = Object.entries(tokens).sort(([a], [b]) => a.localeCompare(b));
    return <div style={{
      padding: 32,
      background: '#f5f5f5',
      fontFamily: 'sans-serif'
    }}>\r
        <h1>Shadows</h1>\r
       \r
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: 40,
        marginTop: 40
      }}>\r
          {entries.map(([varName, value]) => <div key={varName}>\r
              <div style={{
            height: 96,
            width: '100%',
            background: '#fff',
            borderRadius: 8,
            boxShadow: \`var(\${varName})\`
          }} />\r
              <div style={{
            fontFamily: 'monospace',
            fontSize: 12,
            marginTop: 12
          }}>\r
                {tokenLabel(varName)}\r
              </div>\r
              <div style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#666',
            wordBreak: 'break-all'
          }}>\r
                {value}\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}},c=[`AllShadows`]}))();export{s as AllShadows,c as __namedExportsOrder,o as default};