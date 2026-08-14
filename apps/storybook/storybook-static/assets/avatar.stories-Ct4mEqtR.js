import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-DZgM_VOp.js";import{f as i,m as a,p as o,t as s}from"./dist-RudE2i3P.js";import{n as c,t as l}from"./utils-D8qMR3V9.js";var u,d,f,p,m,h,g,_=e((()=>{u=`_root_xcspk_1`,d=`_image_xcspk_81`,f=`_fallbackIcon_xcspk_109`,p=`_fallbackCircle_xcspk_121`,m=`_fallbackPerson_xcspk_133`,h=`_initials_xcspk_151`,g={root:u,image:d,fallbackIcon:f,fallbackCircle:p,fallbackPerson:m,initials:h}}));function v(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.length>=2?`${t[0][0]??``}${t[1][0]??``}`.toUpperCase():e.trim().slice(0,2).toUpperCase()}function y({className:e}){return(0,C.jsxs)(`svg`,{className:e,viewBox:`0 0 32 32`,xmlns:`http://www.w3.org/2000/svg`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,C.jsx)(`circle`,{className:g.fallbackCircle,cx:`16`,cy:`16`,r:`15.5`}),(0,C.jsx)(`circle`,{className:g.fallbackPerson,cx:`16`,cy:`10.88`,r:`4.48`}),(0,C.jsx)(`ellipse`,{className:g.fallbackPerson,cx:`16`,cy:`25.28`,rx:`9.28`,ry:`6.72`})]})}function b(e,t,n){return e&&t===`loaded`?`image`:n?`initials`:`fallback`}function x({size:e=`sm`,src:t,alt:n=``,initials:r,className:s,...c}){let u=r?v(r):void 0,[d,f]=S.useState(t?`loading`:`idle`);S.useEffect(()=>{f(t?`loading`:`idle`)},[t]);let p=b(t,d,!!u);return(0,C.jsxs)(a,{"data-slot":`avatar`,"data-size":e,"data-content":p,className:l(g.root,s),...c,children:[t?(0,C.jsx)(o,{"data-slot":`avatar-image`,src:t,alt:n,className:g.image,onLoadingStatusChange:f}):null,(0,C.jsx)(i,{"data-slot":`avatar-fallback`,delayMs:t?600:void 0,children:u?(0,C.jsx)(`span`,{className:g.initials,children:u}):(0,C.jsx)(y,{className:g.fallbackIcon})})]})}var S,C,w=e((()=>{S=t(r(),1),s(),c(),_(),C=n(),x.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},src:{required:!1,tsType:{name:`string`},description:``},alt:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},initials:{required:!1,tsType:{name:`string`},description:`Hasta 2 caracteres. Si se pasa un nombre completo, se derivan las iniciales.`}},composes:[`Omit`]}}));function T(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{w(),E=n(),D={title:`Components/Primitives & Utilities/Avatar`,component:x,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Primitive visual compartida para representar una persona o cuenta mediante imagen, iniciales o fallback icon. Avatar no es un control interactivo ni recibe focus.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Size scale: sm · md · lg`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},src:{control:`text`,description:`URL de imagen. Si carga, content = image`},initials:{control:`text`,description:`Iniciales (hasta 2 caracteres) o nombre completo del que se derivan`},alt:{control:`text`,description:`alt de la imagen: significativo o vacío según contexto. Si el nombre ya es visible, preferir vacío`,table:{defaultValue:{summary:`""`}}}}},O=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`},{value:`lg`,sizeLabel:`Large`}],k=`https://i.pravatar.cc/96?img=12`,A={docs:{canvas:{sourceState:`shown`}}},j={docs:{canvas:{sourceState:`none`}}},M={args:{size:`md`,initials:`JD`,alt:``}},N={parameters:A,args:{src:k,alt:`Usuario de ejemplo`,size:`md`}},P={parameters:A,args:{initials:`AB`,size:`md`}},F={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Usar solo cuando no existe imagen ni iniciales válidas. El glyph es neutral y no comunica error.`}}},args:{size:`md`}},I={name:`Initials: cálculo desde nombre`,parameters:j,render:()=>(0,E.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,E.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,E.jsx)(x,{size:`md`,initials:`AB`}),(0,E.jsx)(`div`,{style:T(),children:`AB`})]}),(0,E.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,E.jsx)(x,{size:`md`,initials:`Ana Beltrán`}),(0,E.jsx)(`div`,{style:T(),children:`Ana Beltrán → AB`})]}),(0,E.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,E.jsx)(x,{size:`md`,initials:`JD`}),(0,E.jsx)(`div`,{style:T(),children:`JD`})]})]})},L={name:`Size & content`,parameters:j,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`},r=[{label:`Image`,render:e=>(0,E.jsx)(x,{size:e,src:k,alt:`Usuario de ejemplo`})},{label:`Initials`,render:e=>(0,E.jsx)(x,{size:e,initials:`AB`})},{label:`Fallback`,render:e=>(0,E.jsx)(x,{size:e})}];return(0,E.jsxs)(`div`,{style:{padding:8},children:[(0,E.jsx)(`p`,{style:{fontFamily:`sans-serif`,color:`#666`,marginBottom:24},children:`Contenedor circular fijo. Content: image, initials o fallback icon. Avatar no recibe focus.`}),(0,E.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,E.jsx)(`thead`,{children:(0,E.jsxs)(`tr`,{children:[(0,E.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0}}),O.map(({value:t,sizeLabel:n})=>(0,E.jsx)(`th`,{style:e,children:n},t))]})}),(0,E.jsx)(`tbody`,{children:r.map(({label:e,render:r})=>(0,E.jsxs)(`tr`,{children:[(0,E.jsx)(`td`,{style:t,children:e}),O.map(({value:e})=>(0,E.jsx)(`td`,{style:n,children:r(e)},e))]},e))})]})]})}},R={name:`Ejemplo de uso`,parameters:j,render:()=>(0,E.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:24,fontFamily:`sans-serif`,padding:`12px 20px`,borderBottom:`1px solid #e5e5e5`,background:`#fff`,maxWidth:720},children:[(0,E.jsx)(`span`,{style:{fontSize:15,fontWeight:700,letterSpacing:`-0.02em`},children:`Tec DS`}),(0,E.jsxs)(`nav`,{style:{display:`flex`,alignItems:`center`,gap:20,fontSize:14,color:`#444`},children:[(0,E.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Cursos`}),(0,E.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Recursos`})]}),(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,E.jsx)(x,{size:`sm`,src:k,alt:``}),(0,E.jsx)(`span`,{style:{fontSize:13,fontWeight:600,color:`#111`},children:`Ana Beltrán`})]})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    initials: 'JD',
    alt: ''
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    src: DEMO_SRC,
    alt: 'Usuario de ejemplo',
    size: 'md'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    initials: 'AB',
    size: 'md'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Usar solo cuando no existe imagen ni iniciales válidas. El glyph es neutral y no comunica error.'
      }
    }
  },
  args: {
    size: 'md'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Initials: cálculo desde nombre',
  parameters: hideCode,
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Avatar size="md" initials="AB" />\r
        <div style={captionStyle()}>AB</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Avatar size="md" initials="Ana Beltrán" />\r
        <div style={captionStyle()}>Ana Beltrán → AB</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Avatar size="md" initials="JD" />\r
        <div style={captionStyle()}>JD</div>\r
      </div>\r
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Comportamiento de cálculo de iniciales a partir de un nombre completo.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Size & content',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 20px 12px',
      borderBottom: '1px solid #eee'
    };
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap'
    };
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 20px',
      borderBottom: '1px solid #f0f0f0'
    };
    const rows = [{
      label: 'Image',
      render: (size: (typeof SIZES)[number]['value']) => <Avatar size={size} src={DEMO_SRC} alt="Usuario de ejemplo" />
    }, {
      label: 'Initials',
      render: (size: (typeof SIZES)[number]['value']) => <Avatar size={size} initials="AB" />
    }, {
      label: 'Fallback',
      render: (size: (typeof SIZES)[number]['value']) => <Avatar size={size} />
    }] as const;
    return <div style={{
      padding: 8
    }}>\r
        <p style={{
        fontFamily: 'sans-serif',
        color: '#666',
        marginBottom: 24
      }}>\r
          Contenedor circular fijo. Content: image, initials o fallback icon. Avatar no recibe focus.\r
        </p>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }} />\r
              {SIZES.map(({
              value,
              sizeLabel
            }) => <th key={value} style={th}>\r
                  {sizeLabel}\r
                </th>)}\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {rows.map(({
            label,
            render
          }) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                    {render(value)}\r
                  </td>)}\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
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
        <Avatar size="sm" src={DEMO_SRC} alt="" />\r
        <span style={{
        fontSize: 13,
        fontWeight: 600,
        color: '#111'
      }}>Ana Beltrán</span>\r
      </div>\r
    </header>
}`,...R.parameters?.docs?.source}}},z=[`Playground`,`WithImage`,`WithInitials`,`Fallback`,`Initials`,`AllStates`,`InContext`]}))();export{L as AllStates,F as Fallback,R as InContext,I as Initials,M as Playground,N as WithImage,P as WithInitials,z as __namedExportsOrder,D as default};