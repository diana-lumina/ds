import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-D2oEYGbO.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1co1a_1`,o={root:a}}));function c({size:e=`sm`,emphasis:t=`neutral`,count:n,max:r,className:a,...s}){let c=r!==void 0&&n>r?`${r}+`:String(n);return(0,l.jsx)(`span`,{"data-slot":`counter-badge`,"data-size":e,"data-emphasis":t,className:i(o.root,a),...s,children:c})}var l,u=e((()=>{t(),r(),s(),l=n(),c.__docgenInfo={description:``,methods:[],displayName:`CounterBadge`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},emphasis:{required:!1,tsType:{name:`union`,raw:`'neutral' | 'attention' | 'inverse'`,elements:[{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'attention'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},count:{required:!0,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``}},composes:[`Omit`]}}));function d(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}function f(){return(0,p.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":!0,children:(0,p.jsx)(`path`,{d:`M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-5V11a7 7 0 1 0-14 0v6l-2 2v1h18v-1l-2-2Z`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinejoin:`round`})})}var p,m,h,g,_,v;e((()=>{u(),p=n(),m={title:`Components/CounterBadge`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},emphasis:{control:`select`,options:[`neutral`,`attention`,`inverse`]},count:{control:`number`},max:{control:`number`}}},h={args:{size:`sm`,emphasis:`neutral`,count:3}},g={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Neutral`}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsx)(c,{size:`sm`,count:3}),(0,p.jsx)(`div`,{style:d(),children:`sm`})]}),(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsx)(c,{size:`md`,count:3}),(0,p.jsx)(`div`,{style:d(),children:`md`})]})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Attention`}),(0,p.jsx)(c,{size:`sm`,emphasis:`attention`,count:3})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Inverse`}),(0,p.jsx)(`div`,{style:{background:`#333`,padding:16,borderRadius:8,display:`inline-block`},children:(0,p.jsx)(c,{size:`sm`,emphasis:`inverse`,count:3})})]})]})},_={name:`Ejemplo de uso`,render:()=>(0,p.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:16,fontFamily:`sans-serif`,padding:`12px 20px`,borderBottom:`1px solid #e5e5e5`,background:`#fff`,maxWidth:720},children:[(0,p.jsx)(`span`,{style:{fontSize:15,fontWeight:700,letterSpacing:`-0.02em`},children:`Tec DS`}),(0,p.jsxs)(`nav`,{style:{display:`flex`,alignItems:`center`,gap:20,fontSize:14,color:`#444`},children:[(0,p.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Inicio`}),(0,p.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Cursos`})]}),(0,p.jsxs)(`button`,{type:`button`,"aria-label":`Notificaciones, 7 sin leer`,style:{position:`relative`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:36,height:36,padding:0,border:`none`,borderRadius:8,background:`transparent`,color:`#333`,cursor:`pointer`},children:[(0,p.jsx)(f,{}),(0,p.jsx)(`span`,{style:{position:`absolute`,top:2,right:2},children:(0,p.jsx)(c,{size:`sm`,emphasis:`attention`,count:7})})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    emphasis: 'neutral',
    count: 3
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
        \r
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  render: () => <header style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    fontFamily: 'sans-serif',
    padding: '12px 20px',
    borderBottom: '1px solid #e5e5e5',
    background: '#fff',
    maxWidth: 720
  }}>\r
      <span style={{
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }}>Tec DS</span>\r
      <nav style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      fontSize: 14,
      color: '#444'
    }}>\r
        <a href="#" style={{
        color: 'inherit',
        textDecoration: 'none'
      }}>\r
          Inicio\r
        </a>\r
        <a href="#" style={{
        color: 'inherit',
        textDecoration: 'none'
      }}>\r
          Cursos\r
        </a>\r
      </nav>\r
      <button type="button" aria-label="Notificaciones, 7 sin leer" style={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      padding: 0,
      border: 'none',
      borderRadius: 8,
      background: 'transparent',
      color: '#333',
      cursor: 'pointer'
    }}>\r
        <BellIcon />\r
        <span style={{
        position: 'absolute',
        top: 2,
        right: 2
      }}>\r
          <CounterBadge size="sm" emphasis="attention" count={7} />\r
        </span>\r
      </button>\r
    </header>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`AllVariants`,`InContext`]}))();export{g as AllVariants,_ as InContext,h as Playground,v as __namedExportsOrder,m as default};