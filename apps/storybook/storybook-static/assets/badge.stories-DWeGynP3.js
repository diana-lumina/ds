import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-DutUqOlQ.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1vnqn_1`,o={root:a}}));function c({size:e=`sm`,tone:t=`neutral`,children:n,className:r,...a}){return(0,l.jsx)(`span`,{"data-slot":`badge`,"data-size":e,"data-tone":t,className:i(o.root,r),...a,children:n})}var l,u=e((()=>{t(),r(),s(),l=n(),c.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},tone:{required:!1,tsType:{name:`literal`,value:`'neutral'`},description:``,defaultValue:{value:`'neutral'`,computed:!1}}}}}));function d(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var f,p,m,h,g,_;e((()=>{u(),f=n(),p={title:`Components/Badge`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]}}},m={args:{size:`sm`,children:`12`}},h={render:()=>(0,f.jsx)(`div`,{children:(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`sm`,children:`12`}),(0,f.jsx)(`div`,{style:d(),children:`Small`})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`md`,children:`12`}),(0,f.jsx)(`div`,{style:d(),children:`Medium`})]})]})})},g={name:`En contexto (ejemplo real)`,render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontFamily:`sans-serif`,fontSize:14},children:[(0,f.jsx)(`span`,{children:`Notificaciones`}),(0,f.jsx)(c,{size:`sm`,children:`3`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: '12'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div>\r
    \r
      <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>\r
        <div style={{
        textAlign: 'center'
      }}>\r
          <Badge size="sm">12</Badge>\r
          <div style={captionStyle()}>Small</div>\r
        </div>\r
        <div style={{
        textAlign: 'center'
      }}>\r
          <Badge size="md">12</Badge>\r
          <div style={captionStyle()}>Medium</div>\r
        </div>\r
      </div>\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'En contexto (ejemplo real)',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'sans-serif',
    fontSize: 14
  }}>\r
      <span>Notificaciones</span>\r
      <Badge size="sm">3</Badge>\r
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`AllSizes`,`InContext`]}))();export{h as AllSizes,g as InContext,m as Playground,_ as __namedExportsOrder,p as default};