import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n}from"./iframe-D2oEYGbO.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{d as i,l as a,t as o,u as s}from"./dist-cADYtRMK.js";import{n as c,t as l}from"./utils-D8qMR3V9.js";var u,d,f,p,m,h,g,_=e((()=>{u=`_root_xcspk_1`,d=`_image_xcspk_81`,f=`_fallbackIcon_xcspk_109`,p=`_fallbackCircle_xcspk_121`,m=`_fallbackPerson_xcspk_133`,h=`_initials_xcspk_151`,g={root:u,image:d,fallbackIcon:f,fallbackCircle:p,fallbackPerson:m,initials:h}}));function v(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.length>=2?`${t[0][0]??``}${t[1][0]??``}`.toUpperCase():e.trim().slice(0,2).toUpperCase()}function y({className:e}){return(0,C.jsxs)(`svg`,{className:e,viewBox:`0 0 32 32`,xmlns:`http://www.w3.org/2000/svg`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,C.jsx)(`circle`,{className:g.fallbackCircle,cx:`16`,cy:`16`,r:`15.5`}),(0,C.jsx)(`circle`,{className:g.fallbackPerson,cx:`16`,cy:`10.88`,r:`4.48`}),(0,C.jsx)(`ellipse`,{className:g.fallbackPerson,cx:`16`,cy:`25.28`,rx:`9.28`,ry:`6.72`})]})}function b(e,t,n){return e&&t===`loaded`?`image`:n?`initials`:`fallback`}function x({size:e=`sm`,src:t,alt:n=``,initials:r,className:o,...c}){let u=r?v(r):void 0,[d,f]=S.useState(t?`loading`:`idle`);S.useEffect(()=>{f(t?`loading`:`idle`)},[t]);let p=b(t,d,!!u);return(0,C.jsxs)(i,{"data-slot":`avatar`,"data-size":e,"data-content":p,className:l(g.root,o),...c,children:[t?(0,C.jsx)(s,{"data-slot":`avatar-image`,src:t,alt:n,className:g.image,onLoadingStatusChange:f}):null,(0,C.jsx)(a,{"data-slot":`avatar-fallback`,delayMs:t?600:void 0,children:u?(0,C.jsx)(`span`,{className:g.initials,children:u}):(0,C.jsx)(y,{className:g.fallbackIcon})})]})}var S,C,w=e((()=>{S=t(n(),1),o(),c(),_(),C=r(),x.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},src:{required:!1,tsType:{name:`string`},description:``},alt:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},initials:{required:!1,tsType:{name:`string`},description:`Hasta 2 caracteres. Si se pasa un nombre completo, se derivan las iniciales.`}},composes:[`Omit`]}}));function T(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var E,D,O,k,A,j;e((()=>{w(),E=r(),D={title:`Components/Avatar`,component:x,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},src:{control:`text`},initials:{control:`text`},alt:{control:`text`}}},O={args:{size:`md`,initials:`JD`,alt:`Jane Doe`}},k={render:()=>(0,E.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[`sm`,`md`,`lg`].map(e=>(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:8},children:e===`sm`?`Small`:e===`md`?`Medium`:`Large`}),(0,E.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,E.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,E.jsx)(x,{size:e,src:`https://i.pravatar.cc/96?img=12`,alt:`Usuario de ejemplo`}),(0,E.jsx)(`div`,{style:T(),children:`Imagen`})]}),(0,E.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,E.jsx)(x,{size:e,initials:`AB`,alt:`Ana Beltrán`}),(0,E.jsx)(`div`,{style:T(),children:`Iniciales`})]}),(0,E.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,E.jsx)(x,{size:e,alt:`Usuario`}),(0,E.jsx)(`div`,{style:T(),children:`Fallback`})]})]})]},e))})},A={name:`Ejemplo de uso`,render:()=>(0,E.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:24,fontFamily:`sans-serif`,padding:`12px 20px`,borderBottom:`1px solid #e5e5e5`,background:`#fff`,maxWidth:720},children:[(0,E.jsx)(`span`,{style:{fontSize:15,fontWeight:700,letterSpacing:`-0.02em`},children:`Tec DS`}),(0,E.jsxs)(`nav`,{style:{display:`flex`,alignItems:`center`,gap:20,fontSize:14,color:`#444`},children:[(0,E.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Cursos`}),(0,E.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Recursos`})]}),(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,E.jsx)(x,{size:`sm`,src:`https://i.pravatar.cc/96?img=12`,alt:`Ana Beltrán`}),(0,E.jsx)(`span`,{style:{fontSize:13,fontWeight:600,color:`#111`},children:`Ana Beltrán`})]})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    initials: 'JD',
    alt: 'Jane Doe'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>\r
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size}>\r
          <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 8
      }}>\r
            {size === 'sm' ? 'Small' : size === 'md' ? 'Medium' : 'Large'}\r
          </h2>\r
          <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>\r
            <div style={{
          textAlign: 'center'
        }}>\r
              <Avatar size={size} src="https://i.pravatar.cc/96?img=12" alt="Usuario de ejemplo" />\r
              <div style={captionStyle()}>Imagen</div>\r
            </div>\r
            <div style={{
          textAlign: 'center'
        }}>\r
              <Avatar size={size} initials="AB" alt="Ana Beltrán" />\r
              <div style={captionStyle()}>Iniciales</div>\r
            </div>\r
            <div style={{
          textAlign: 'center'
        }}>\r
              <Avatar size={size} alt="Usuario" />\r
              <div style={captionStyle()}>Fallback</div>\r
            </div>\r
          </div>\r
        </div>)}\r
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  render: () => <header style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
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
          Cursos\r
        </a>\r
        <a href="#" style={{
        color: 'inherit',
        textDecoration: 'none'
      }}>\r
          Recursos\r
        </a>\r
      </nav>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }}>\r
        <Avatar size="sm" src="https://i.pravatar.cc/96?img=12" alt="Ana Beltrán" />\r
        <span style={{
        fontSize: 13,
        fontWeight: 600,
        color: '#111'
      }}>Ana Beltrán</span>\r
      </div>\r
    </header>
}`,...A.parameters?.docs?.source}}},j=[`Playground`,`AllStates`,`InContext`]}))();export{k as AllStates,A as InContext,O as Playground,j as __namedExportsOrder,D as default};