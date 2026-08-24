import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CFNdY8gy.js";import{n,r,t as i}from"./getDesignTokens-DN_V1VFA.js";function a(e){return[...e].sort(([,e],[,t])=>parseFloat(e)-parseFloat(t))}function o(){let e=a(Object.entries(i(`motion-duration`)));return(0,c.jsxs)(`section`,{style:{marginBottom:40},children:[(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:16},children:`Duration`}),(0,c.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:e.map(([e,t])=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,c.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,width:220,color:`#444`},children:[r(e),` — `,t]}),(0,c.jsx)(`div`,{style:{position:`relative`,width:240,height:24,background:`#f0f0f0`,borderRadius:12},children:(0,c.jsx)(`div`,{style:{position:`absolute`,width:24,height:24,borderRadius:`50%`,background:`#1a73e8`,animationName:`moveAcross`,animationDuration:`var(${e})`,animationTimingFunction:`var(--motion-easing-standard)`,animationIterationCount:`infinite`,animationDirection:`alternate`}})})]},e))})]})}function s(){let e=Object.entries(i(`motion-easing`));return(0,c.jsxs)(`section`,{children:[(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:16},children:`Easing`}),(0,c.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:e.map(([e,t])=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,c.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,width:220,color:`#444`},children:r(e)}),(0,c.jsx)(`div`,{style:{position:`relative`,width:240,height:24,background:`#f0f0f0`,borderRadius:12},children:(0,c.jsx)(`div`,{style:{position:`absolute`,width:24,height:24,borderRadius:`50%`,background:`#8b5cf6`,animationName:`moveAcross`,animationDuration:`var(--motion-duration-moderate)`,animationTimingFunction:`var(${e})`,animationIterationCount:`infinite`,animationDirection:`alternate`}})}),(0,c.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:`#666`},children:t})]},e))})]})}var c,l,u,d,f;e((()=>{n(),c=t(),l={title:`Foundations/Motion`,parameters:{layout:`fullscreen`}},u=`
@keyframes moveAcross {
  from { transform: translateX(0); }
  to { transform: translateX(216px); }
}
`,d={render:()=>(0,c.jsxs)(`div`,{style:{padding:32},children:[(0,c.jsx)(`style`,{children:u}),(0,c.jsx)(`h1`,{style:{fontFamily:`sans-serif`},children:`Motion`}),(0,c.jsx)(o,{}),(0,c.jsx)(s,{})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32
  }}>\r
      <style>{KEYFRAMES}</style>\r
      <h1 style={{
      fontFamily: 'sans-serif'
    }}>Motion</h1>\r
      <DurationSection />\r
      <EasingSection />\r
    </div>
}`,...d.parameters?.docs?.source}}},f=[`AllMotion`]}))();export{d as AllMotion,f as __namedExportsOrder,l as default};