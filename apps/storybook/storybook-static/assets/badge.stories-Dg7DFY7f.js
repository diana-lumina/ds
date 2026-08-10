import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-D2oEYGbO.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1vnqn_1`,o={root:a}}));function c({size:e=`sm`,tone:t=`neutral`,children:n,className:r,...a}){return(0,l.jsx)(`span`,{"data-slot":`badge`,"data-size":e,"data-tone":t,className:i(o.root,r),...a,children:n})}var l,u=e((()=>{t(),r(),s(),l=n(),c.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},tone:{required:!1,tsType:{name:`literal`,value:`'neutral'`},description:``,defaultValue:{value:`'neutral'`,computed:!1}}}}}));function d(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var f,p,m,h,g,_;e((()=>{u(),f=n(),p={title:`Components/Badge`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Etiqueta de texto corta. Solo acepta texto.
Para contadores de notificaciones usa CounterBadge.
        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},children:{control:`text`,description:`Texto visible del badge`},tone:{control:`select`,options:[`neutral`]}}},m={args:{size:`sm`,tone:`neutral`,children:`Nuevo`}},h={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`sm`,children:`Nuevo`}),(0,f.jsx)(`div`,{style:d(),children:`Small`})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`md`,children:`Nuevo`}),(0,f.jsx)(`div`,{style:d(),children:`Medium`})]})]})},g={name:`Ejemplo de uso`,render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,fontFamily:`sans-serif`,maxWidth:360},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(`h3`,{style:{margin:0,fontSize:16,fontWeight:600},children:`Curso de UX Research`}),(0,f.jsx)(c,{size:`sm`,children:`Nuevo`})]}),(0,f.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#666`,lineHeight:1.4},children:`Aprende métodos de investigación para validar hipótesis de producto.`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  name: 'Ejemplo de uso',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontFamily: 'sans-serif',
    maxWidth: 360
  }}>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>\r
        <h3 style={{
        margin: 0,
        fontSize: 16,
        fontWeight: 600
      }}>Curso de UX Research</h3>\r
        <Badge size="sm">Nuevo</Badge>\r
      </div>\r
      <p style={{
      margin: 0,
      fontSize: 13,
      color: '#666',
      lineHeight: 1.4
    }}>\r
        Aprende métodos de investigación para validar hipótesis de producto.\r
      </p>\r
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`AllSizes`,`InContext`]}))();export{h as AllSizes,g as InContext,m as Playground,_ as __namedExportsOrder,p as default};