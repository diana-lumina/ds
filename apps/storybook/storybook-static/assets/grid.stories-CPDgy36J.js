import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-BPJdu4Wu.js";import{n,r,t as i}from"./getDesignTokens-DN_V1VFA.js";var a,o,s,c;e((()=>{n(),a=t(),o={title:`Foundations/Grid`,parameters:{layout:`fullscreen`}},s={render:()=>{let e=i(`grid`),t=Object.entries(e);return(0,a.jsxs)(`div`,{style:{padding:32,fontFamily:`sans-serif`},children:[(0,a.jsx)(`h1`,{children:`Grid`}),(0,a.jsx)(`p`,{style:{color:`#b45309`,marginTop:8,marginBottom:24,fontSize:14,maxWidth:600},children:`Redimensiona la ventana del navegador (o usa el selector de viewport de Storybook)`}),(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:t.map(([e,t])=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,a.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:13,width:240,color:`#444`},children:r(e)}),(0,a.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:13,color:`#1a73e8`,fontWeight:600},children:t})]},e))}),(0,a.jsxs)(`div`,{style:{marginTop:32},children:[(0,a.jsx)(`h3`,{style:{fontFamily:`sans-serif`,fontSize:14,marginBottom:12},children:`Columnas visualizadas (modo activo)`}),(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(var(--grid-columns), 1fr)`,gap:`var(--grid-gutter)`,padding:`var(--grid-margin)`,background:`#f5f5f5`,borderRadius:8},children:Array.from({length:12}).map((e,t)=>(0,a.jsx)(`div`,{style:{height:40,background:`#1a73e8`,opacity:.3,borderRadius:4}},t))})]})]})}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tokens = getDesignTokens('grid');
    const entries = Object.entries(tokens);
    return <div style={{
      padding: 32,
      fontFamily: 'sans-serif'
    }}>\r
        <h1>Grid</h1>\r
        <p style={{
        color: '#b45309',
        marginTop: 8,
        marginBottom: 24,
        fontSize: 14,
        maxWidth: 600
      }}>\r
           Redimensiona la ventana del navegador (o usa el\r
          selector de viewport de Storybook) \r
        </p>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>\r
          {entries.map(([varName, value]) => <div key={varName} style={{
          display: 'flex',
          gap: 16
        }}>\r
              <div style={{
            fontFamily: 'monospace',
            fontSize: 13,
            width: 240,
            color: '#444'
          }}>\r
                {tokenLabel(varName)}\r
              </div>\r
              <div style={{
            fontFamily: 'monospace',
            fontSize: 13,
            color: '#1a73e8',
            fontWeight: 600
          }}>\r
                {value}\r
              </div>\r
            </div>)}\r
        </div>\r
\r
        <div style={{
        marginTop: 32
      }}>\r
          <h3 style={{
          fontFamily: 'sans-serif',
          fontSize: 14,
          marginBottom: 12
        }}>\r
            Columnas visualizadas (modo activo)\r
          </h3>\r
          <div style={{
          display: 'grid',
          gridTemplateColumns: \`repeat(var(--grid-columns), 1fr)\`,
          gap: 'var(--grid-gutter)',
          padding: 'var(--grid-margin)',
          background: '#f5f5f5',
          borderRadius: 8
        }}>\r
            {Array.from({
            length: 12
          }).map((_, i) => <div key={i} style={{
            height: 40,
            background: '#1a73e8',
            opacity: 0.3,
            borderRadius: 4
          }} />)}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}},c=[`CurrentGrid`]}))();export{s as CurrentGrid,c as __namedExportsOrder,o as default};