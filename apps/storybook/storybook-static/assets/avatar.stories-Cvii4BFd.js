import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-CPmBFJEF.js";import{n,t as r}from"./avatar-CUPznbR7.js";function i(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{n(),a=t(),o={title:`Components/Primitives & Utilities/Avatar`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Primitive visual compartida para representar una persona o cuenta mediante imagen, iniciales o fallback icon. Avatar no es un control interactivo ni recibe focus.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Size scale: sm · md · lg`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},src:{control:`text`,description:`URL de imagen. Si carga, content = image`},initials:{control:`text`,description:`Iniciales (hasta 2 caracteres) o nombre completo del que se derivan`},alt:{control:`text`,description:`alt de la imagen: significativo o vacío según contexto. Si el nombre ya es visible, preferir vacío`,table:{defaultValue:{summary:`""`}}}}},s=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`},{value:`lg`,sizeLabel:`Large`}],c=`https://i.pravatar.cc/96?img=12`,l={docs:{canvas:{sourceState:`shown`}}},u={docs:{canvas:{sourceState:`none`}}},d={args:{size:`md`,initials:`JD`,alt:``}},f={parameters:l,args:{src:c,alt:`Usuario de ejemplo`,size:`md`}},p={parameters:l,args:{initials:`AB`,size:`md`}},m={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Usar solo cuando no existe imagen ni iniciales válidas. El glyph es neutral y no comunica error.`}}},args:{size:`md`}},h={name:`Initials: cálculo desde nombre`,parameters:u,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,a.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,a.jsx)(r,{size:`md`,initials:`AB`}),(0,a.jsx)(`div`,{style:i(),children:`AB`})]}),(0,a.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,a.jsx)(r,{size:`md`,initials:`Ana Beltrán`}),(0,a.jsx)(`div`,{style:i(),children:`Ana Beltrán → AB`})]}),(0,a.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,a.jsx)(r,{size:`md`,initials:`JD`}),(0,a.jsx)(`div`,{style:i(),children:`JD`})]})]})},g={name:`Size & content`,parameters:u,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`},i=[{label:`Image`,render:e=>(0,a.jsx)(r,{size:e,src:c,alt:`Usuario de ejemplo`})},{label:`Initials`,render:e=>(0,a.jsx)(r,{size:e,initials:`AB`})},{label:`Fallback`,render:e=>(0,a.jsx)(r,{size:e})}];return(0,a.jsxs)(`div`,{style:{padding:8},children:[(0,a.jsx)(`p`,{style:{fontFamily:`sans-serif`,color:`#666`,marginBottom:24},children:`Contenedor circular fijo. Content: image, initials o fallback icon. Avatar no recibe focus.`}),(0,a.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0}}),s.map(({value:t,sizeLabel:n})=>(0,a.jsx)(`th`,{style:e,children:n},t))]})}),(0,a.jsx)(`tbody`,{children:i.map(({label:e,render:r})=>(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{style:t,children:e}),s.map(({value:e})=>(0,a.jsx)(`td`,{style:n,children:r(e)},e))]},e))})]})]})}},_={name:`Ejemplo de uso`,parameters:u,render:()=>(0,a.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:24,fontFamily:`sans-serif`,padding:`12px 20px`,borderBottom:`1px solid #e5e5e5`,background:`#fff`,maxWidth:720},children:[(0,a.jsx)(`span`,{style:{fontSize:15,fontWeight:700,letterSpacing:`-0.02em`},children:`Tec DS`}),(0,a.jsxs)(`nav`,{style:{display:`flex`,alignItems:`center`,gap:20,fontSize:14,color:`#444`},children:[(0,a.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Cursos`}),(0,a.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Recursos`})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,a.jsx)(r,{size:`sm`,src:c,alt:``}),(0,a.jsx)(`span`,{style:{fontSize:13,fontWeight:600,color:`#111`},children:`Ana Beltrán`})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    initials: 'JD',
    alt: ''
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    src: DEMO_SRC,
    alt: 'Usuario de ejemplo',
    size: 'md'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    initials: 'AB',
    size: 'md'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Comportamiento de cálculo de iniciales a partir de un nombre completo.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`WithImage`,`WithInitials`,`Fallback`,`Initials`,`AllStates`,`InContext`]}))();export{g as AllStates,m as Fallback,_ as InContext,h as Initials,d as Playground,f as WithImage,p as WithInitials,v as __namedExportsOrder,o as default};