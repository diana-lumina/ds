import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe--pDot38P.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1vnqn_1`,o={root:a}}));function c({size:e=`sm`,tone:t=`neutral`,children:n,className:r,...a}){return(0,l.jsx)(`span`,{"data-slot":`badge`,"data-size":e,"data-tone":t,className:i(o.root,r),...a,children:n})}var l,u=e((()=>{t(),r(),s(),l=n(),c.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},tone:{required:!1,tsType:{name:`literal`,value:`'neutral'`},description:``,defaultValue:{value:`'neutral'`,computed:!1}}}}}));function d(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var f,p,m,h,g,_;e((()=>{u(),f=n(),p={title:`Components/Badge`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Etiqueta de texto corta. Solo acepta texto.
Para contadores de notificaciones usa CounterBadge.
        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},children:{control:`text`,description:`Texto visible del badge`},tone:{control:`select`,options:[`neutral`]}}},m={args:{size:`sm`,tone:`neutral`,children:`Nuevo`}},h={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`sm`,children:`Nuevo`}),(0,f.jsx)(`div`,{style:d(),children:`Small`})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`md`,children:`Nuevo`}),(0,f.jsx)(`div`,{style:d(),children:`Medium`})]})]})},g={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,f.jsx)(c,{children:`Nuevo`}),(0,f.jsx)(c,{children:`Borrador`}),(0,f.jsx)(c,{size:`md`,children:`En revisión`}),(0,f.jsx)(c,{size:`md`,children:`Publicado`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    tone: 'neutral',
    children: 'Nuevo'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Badge size="sm">Nuevo</Badge>\r
        <div style={captionStyle()}>Small</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Badge size="md">Nuevo</Badge>\r
        <div style={captionStyle()}>Medium</div>\r
      </div>\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Badge>Nuevo</Badge>\r
      <Badge>Borrador</Badge>\r
      <Badge size="md">En revisión</Badge>\r
      <Badge size="md">Publicado</Badge>\r
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`AllSizes`,`Examples`]}))();export{h as AllSizes,g as Examples,m as Playground,_ as __namedExportsOrder,p as default};