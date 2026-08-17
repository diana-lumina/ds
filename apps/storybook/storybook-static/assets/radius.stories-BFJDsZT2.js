import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-gd-_F7EU.js";import{n,r,t as i}from"./getDesignTokens-DN_V1VFA.js";function a(e){return[...e].sort(([,e],[,t])=>parseFloat(e)-parseFloat(t))}function o({varName:e}){return(0,s.jsx)(`div`,{style:{height:40,width:120,background:`#1a73e8`,borderRadius:`var(${e})`}})}var s,c,l,u;e((()=>{n(),s=t(),c={title:`Foundations/Radius`,parameters:{layout:`fullscreen`}},l={render:()=>{let e=i(`radius`),t=a(Object.entries(e).filter(([e])=>/^--radius-(\d+|full)$/.test(e)));return(0,s.jsxs)(`div`,{style:{padding:32,fontFamily:`sans-serif`},children:[(0,s.jsx)(`h1`,{children:`Radius`}),(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(160px, 1fr))`,gap:24,marginTop:24},children:t.map(([e,t])=>(0,s.jsxs)(`div`,{children:[(0,s.jsx)(o,{varName:e}),(0,s.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,marginTop:10},children:r(e)}),(0,s.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:`#666`},children:t})]},e))})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tokens = getDesignTokens('radius');
    const entries = sortByPxValue(Object.entries(tokens).filter(([varName]) => /^--radius-(\\d+|full)$/.test(varName)));
    return <div style={{
      padding: 32,
      fontFamily: 'sans-serif'
    }}>\r
        <h1>Radius</h1>\r
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: 24,
        marginTop: 24
      }}>\r
          {entries.map(([varName, value]) => <div key={varName}>\r
              <RadiusChip varName={varName} />\r
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
}`,...l.parameters?.docs?.source}}},u=[`AllRadius`]}))();export{l as AllRadius,u as __namedExportsOrder,c as default};