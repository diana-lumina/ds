import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,r as n,t as r}from"./getDesignTokens-DN_V1VFA.js";import{t as i}from"./jsx-runtime-CaZkqeYb.js";function a(e){return[...e].sort(([,e],[,t])=>parseFloat(e)-parseFloat(t))}function o(e){return e.filter(([,e])=>Number.isFinite(parseFloat(e)))}var s,c,l,u;e((()=>{t(),s=i(),c={title:`Foundations/Breakpoints`,parameters:{layout:`fullscreen`}},l={render:()=>{let e=a(o(Object.entries(r(`breakpoint`)))),t=Math.max(...e.map(([,e])=>parseFloat(e)),1);return(0,s.jsxs)(`div`,{style:{padding:32,fontFamily:`sans-serif`},children:[(0,s.jsx)(`h1`,{children:`Breakpoints`}),(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:e.map(([e,r])=>{let i=Math.max(parseFloat(r)/t*100,4);return(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,s.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,width:220,color:`#444`},children:n(e)}),(0,s.jsx)(`div`,{style:{flex:1,background:`#eee`,borderRadius:4,height:20},children:(0,s.jsx)(`div`,{style:{width:`${i}%`,background:`#1a73e8`,height:`100%`,borderRadius:4}})}),(0,s.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,color:`#666`,width:60},children:r})]},e)})})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const entries = sortByPxValue(keepValid(Object.entries(getDesignTokens('breakpoint'))));
    const maxValue = Math.max(...entries.map(([, v]) => parseFloat(v)), 1);
    return <div style={{
      padding: 32,
      fontFamily: 'sans-serif'
    }}>\r
        <h1>Breakpoints</h1>\r
      \r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>\r
          {entries.map(([varName, value]) => {
          const px = parseFloat(value);
          const widthPercent = Math.max(px / maxValue * 100, 4);
          return <div key={varName} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16
          }}>\r
                <div style={{
              fontFamily: 'monospace',
              fontSize: 12,
              width: 220,
              color: '#444'
            }}>\r
                  {tokenLabel(varName)}\r
                </div>\r
                <div style={{
              flex: 1,
              background: '#eee',
              borderRadius: 4,
              height: 20
            }}>\r
                  <div style={{
                width: \`\${widthPercent}%\`,
                background: '#1a73e8',
                height: '100%',
                borderRadius: 4
              }} />\r
                </div>\r
                <div style={{
              fontFamily: 'monospace',
              fontSize: 12,
              color: '#666',
              width: 60
            }}>\r
                  {value}\r
                </div>\r
              </div>;
        })}\r
        </div>\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u=[`AllBreakpoints`]}))();export{l as AllBreakpoints,u as __namedExportsOrder,c as default};