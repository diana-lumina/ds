import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-D2oEYGbO.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{i as r,n as i}from"./icons-CfyEYSxz.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";var s,c,l,u=e((()=>{s=`_root_ilohp_1`,c=`_iconWrapper_ilohp_47`,l={root:s,iconWrapper:c}}));function d({tone:e=`standard`,href:t,children:n,external:r=!1,icon:i,iconPosition:a=`right`,className:s,...c}){return(0,f.jsxs)(`a`,{"data-slot":`link`,"data-tone":e,href:t,target:r?`_blank`:void 0,rel:r?`noopener noreferrer`:void 0,className:o(l.root,s),...c,children:[i&&a===`left`&&(0,f.jsx)(`span`,{className:l.iconWrapper,"aria-hidden":`true`,children:i}),n,i&&a===`right`&&(0,f.jsx)(`span`,{className:l.iconWrapper,"aria-hidden":`true`,children:i})]})}var f,p=e((()=>{t(),a(),u(),f=n(),d.__docgenInfo={description:``,methods:[],displayName:`Link`,props:{tone:{required:!1,tsType:{name:`union`,raw:`'standard' | 'inverse'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'standard'`,computed:!1}},external:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},iconPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'right'`,computed:!1}}}}}));function m(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var h,g,_,v,y,b;e((()=>{p(),r(),h=n(),g={title:`Components/Link`,component:d,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{tone:{control:`select`,options:[`standard`,`inverse`]},external:{control:`boolean`},icon:{control:!1,table:{disable:!0}}}},_={args:{tone:`standard`,href:`#`,children:`Ver más`}},v={render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Standard`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`,flexWrap:`wrap`},children:[(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{href:`#`,tone:`standard`,children:`Ver más`}),(0,h.jsx)(`div`,{style:m(),children:`Default`})]}),(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{href:`#`,tone:`standard`,icon:(0,h.jsx)(i,{}),children:`Ver más`}),(0,h.jsx)(`div`,{style:m(),children:`Con ícono`})]})]})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Inverse`}),(0,h.jsxs)(`div`,{style:{background:`var(--color-surface-brand-strong, #333)`,padding:24,borderRadius:8,display:`flex`,gap:24,alignItems:`flex-start`,flexWrap:`wrap`},children:[(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{href:`#`,tone:`inverse`,children:`Ver más`}),(0,h.jsx)(`div`,{style:{...m(),color:`rgba(255,255,255,0.6)`},children:`Default`})]}),(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{href:`#`,tone:`inverse`,icon:(0,h.jsx)(i,{}),children:`Ver más`}),(0,h.jsx)(`div`,{style:{...m(),color:`rgba(255,255,255,0.6)`},children:`Con ícono`})]})]})]})]})},y={name:`Ejemplo de uso`,render:()=>(0,h.jsxs)(`p`,{style:{fontFamily:`sans-serif`,fontSize:14,lineHeight:1.6,color:`#333`,maxWidth:420,margin:0},children:[`Consulta el calendario académico o`,` `,(0,h.jsx)(d,{href:`#`,tone:`standard`,icon:(0,h.jsx)(i,{}),children:`descarga el programa`}),` `,`del curso antes de inscribirte.`]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'standard',
    href: '#',
    children: 'Ver más'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Standard</h2>\r
\r
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Link href="#" tone="standard">\r
              Ver más\r
            </Link>\r
            <div style={captionStyle()}>Default</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Link href="#" tone="standard" icon={<ChevronIcon />}>\r
              Ver más\r
            </Link>\r
            <div style={captionStyle()}>Con ícono</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Inverse</h2>\r
\r
        <div style={{
        background: 'var(--color-surface-brand-strong, #333)',
        padding: 24,
        borderRadius: 8,
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Link href="#" tone="inverse">\r
              Ver más\r
            </Link>\r
            <div style={{
            ...captionStyle(),
            color: 'rgba(255,255,255,0.6)'
          }}>Default</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Link href="#" tone="inverse" icon={<ChevronIcon />}>\r
              Ver más\r
            </Link>\r
            <div style={{
            ...captionStyle(),
            color: 'rgba(255,255,255,0.6)'
          }}>Con ícono</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  render: () => <p style={{
    fontFamily: 'sans-serif',
    fontSize: 14,
    lineHeight: 1.6,
    color: '#333',
    maxWidth: 420,
    margin: 0
  }}>\r
      Consulta el calendario académico o{' '}\r
      <Link href="#" tone="standard" icon={<ChevronIcon />}>\r
        descarga el programa\r
      </Link>{' '}\r
      del curso antes de inscribirte.\r
    </p>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`AllStates`,`InContext`]}))();export{v as AllStates,y as InContext,_ as Playground,b as __namedExportsOrder,g as default};