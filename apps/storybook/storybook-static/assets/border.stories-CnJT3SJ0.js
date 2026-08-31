import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,r,t as i}from"./getDesignTokens-DN_V1VFA.js";function a(e){return[...e].sort(([,e],[,t])=>parseFloat(e)-parseFloat(t))}var o,s,c,l;e((()=>{n(),o=t(),s={title:`Foundations/Border`,parameters:{layout:`fullscreen`}},c={render:()=>{let e=a(Object.entries(i(`border-width`)));return(0,o.jsxs)(`div`,{style:{padding:32,fontFamily:`sans-serif`},children:[(0,o.jsx)(`h1`,{children:`Border Width`}),(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(160px, 1fr))`,gap:24,marginTop:24},children:e.map(([e,t])=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{height:60,width:120,borderRadius:8,border:`var(${e}) solid #1a73e8`}}),(0,o.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,marginTop:10},children:r(e)}),(0,o.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:`#666`},children:t})]},e))})]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const entries = sortByPxValue(Object.entries(getDesignTokens('border-width')));
    return <div style={{
      padding: 32,
      fontFamily: 'sans-serif'
    }}>\r
        <h1>Border Width</h1>\r
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: 24,
        marginTop: 24
      }}>\r
          {entries.map(([varName, value]) => <div key={varName}>\r
              <div style={{
            height: 60,
            width: 120,
            borderRadius: 8,
            border: \`var(\${varName}) solid #1a73e8\`
          }} />\r
              <div style={{
            fontFamily: 'monospace',
            fontSize: 12,
            marginTop: 10
          }}>\r
                {tokenLabel(varName)}\r
              </div>\r
              <div style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#666'
          }}>\r
                {value}\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>;
  }
}`,...c.parameters?.docs?.source}}},l=[`AllBorderWidths`]}))();export{c as AllBorderWidths,l as __namedExportsOrder,s as default};