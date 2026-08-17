import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-BjWpqfAg.js";import{n,r,t as i}from"./getDesignTokens-DN_V1VFA.js";var a,o,s,c;e((()=>{n(),a=t(),o={title:`Foundations/Spacing`,parameters:{layout:`fullscreen`}},s={render:()=>{let e=i(`spacing`),t=Object.entries(e).sort(([,e],[,t])=>parseFloat(e)-parseFloat(t));return(0,a.jsxs)(`div`,{style:{padding:32,fontFamily:`sans-serif`},children:[(0,a.jsx)(`h1`,{children:`Spacing`}),(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,marginTop:24},children:t.map(([e,t])=>(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,a.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,width:260,color:`#444`},children:r(e)}),(0,a.jsx)(`div`,{style:{height:16,width:`var(${e})`,minWidth:2,background:`#1a73e8`,borderRadius:2,flexShrink:0}}),(0,a.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,color:`#666`},children:t})]},e))})]})}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tokens = getDesignTokens('spacing');
    const entries = Object.entries(tokens).sort(([, a], [, b]) => parseFloat(a) - parseFloat(b));
    return <div style={{
      padding: 32,
      fontFamily: 'sans-serif'
    }}>\r
        <h1>Spacing</h1>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 24
      }}>\r
          {entries.map(([varName, value]) => <div key={varName} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>\r
              <div style={{
            fontFamily: 'monospace',
            fontSize: 12,
            width: 260,
            color: '#444'
          }}>\r
                {tokenLabel(varName)}\r
              </div>\r
              <div style={{
            height: 16,
            width: \`var(\${varName})\`,
            minWidth: 2,
            background: '#1a73e8',
            borderRadius: 2,
            flexShrink: 0
          }} />\r
              <div style={{
            fontFamily: 'monospace',
            fontSize: 12,
            color: '#666'
          }}>\r
                {value}\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}},c=[`AllSpacing`]}))();export{s as AllSpacing,c as __namedExportsOrder,o as default};