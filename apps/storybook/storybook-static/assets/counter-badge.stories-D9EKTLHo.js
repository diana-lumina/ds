import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-DutUqOlQ.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1co1a_1`,o={root:a}}));function c({size:e=`sm`,emphasis:t=`neutral`,count:n,max:r,className:a,...s}){let c=r!==void 0&&n>r?`${r}+`:String(n);return(0,l.jsx)(`span`,{"data-slot":`counter-badge`,"data-size":e,"data-emphasis":t,className:i(o.root,a),...s,children:c})}var l,u=e((()=>{t(),r(),s(),l=n(),c.__docgenInfo={description:``,methods:[],displayName:`CounterBadge`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},emphasis:{required:!1,tsType:{name:`union`,raw:`'neutral' | 'attention' | 'inverse'`,elements:[{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'attention'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},count:{required:!0,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``}},composes:[`Omit`]}}));function d(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var f,p,m,h,g,_;e((()=>{u(),f=n(),p={title:`Components/CounterBadge`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},emphasis:{control:`select`,options:[`neutral`,`attention`,`inverse`]},count:{control:`number`},max:{control:`number`}}},m={args:{size:`sm`,emphasis:`neutral`,count:3}},h={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Neutral`}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`sm`,count:3}),(0,f.jsx)(`div`,{style:d(),children:`sm`})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`md`,count:3}),(0,f.jsx)(`div`,{style:d(),children:`md`})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`sm`,count:150,max:99}),(0,f.jsx)(`div`,{style:d(),children:`con max (99+)`})]})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Attention`}),(0,f.jsx)(c,{size:`sm`,emphasis:`attention`,count:3})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Inverse`}),(0,f.jsx)(`div`,{style:{background:`#333`,padding:16,borderRadius:8,display:`inline-block`},children:(0,f.jsx)(c,{size:`sm`,emphasis:`inverse`,count:3})})]})]})},g={name:`En contexto (ejemplo real)`,render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontFamily:`sans-serif`,fontSize:14},children:[(0,f.jsx)(`span`,{children:`Bandeja de entrada`}),(0,f.jsx)(c,{size:`sm`,count:7})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    emphasis: 'neutral',
    count: 3
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Neutral</h2>\r
       \r
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <CounterBadge size="sm" count={3} />\r
            <div style={captionStyle()}>sm</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <CounterBadge size="md" count={3} />\r
            <div style={captionStyle()}>md</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <CounterBadge size="sm" count={150} max={99} />\r
            <div style={captionStyle()}>con max (99+)</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Attention</h2>\r
       \r
        <CounterBadge size="sm" emphasis="attention" count={3} />\r
      </div>\r
\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Inverse</h2>\r
       \r
        <div style={{
        background: '#333',
        padding: 16,
        borderRadius: 8,
        display: 'inline-block'
      }}>\r
          <CounterBadge size="sm" emphasis="inverse" count={3} />\r
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
      <span>Bandeja de entrada</span>\r
      <CounterBadge size="sm" count={7} />\r
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`AllVariants`,`InContext`]}))();export{h as AllVariants,g as InContext,m as Playground,_ as __namedExportsOrder,p as default};