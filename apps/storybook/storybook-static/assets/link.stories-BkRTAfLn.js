import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-DutUqOlQ.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{i as r,n as i}from"./icons-CfyEYSxz.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";var s,c,l,u=e((()=>{s=`_root_ao8lb_1`,c=`_iconWrapper_ao8lb_57`,l={root:s,iconWrapper:c}}));function d({tone:e=`standard`,href:t,children:n,disabled:r=!1,external:i=!1,icon:a,iconPosition:s=`right`,onClick:c,className:u,...d}){return(0,f.jsxs)(`a`,{"data-slot":`link`,"data-tone":e,href:r?void 0:t,onClick:r?void 0:c,"aria-disabled":r?`true`:void 0,target:i?`_blank`:void 0,rel:i?`noopener noreferrer`:void 0,className:o(l.root,u),...d,children:[a&&s===`left`&&(0,f.jsx)(`span`,{className:l.iconWrapper,"aria-hidden":`true`,children:a}),n,a&&s===`right`&&(0,f.jsx)(`span`,{className:l.iconWrapper,"aria-hidden":`true`,children:a})]})}var f,p=e((()=>{t(),a(),u(),f=n(),d.__docgenInfo={description:``,methods:[],displayName:`Link`,props:{tone:{required:!1,tsType:{name:`union`,raw:`'standard' | 'inverse'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'standard'`,computed:!1}},external:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},iconPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'right'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}}));function m(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var h,g,_,v,y;e((()=>{p(),r(),h=n(),g={title:`Components/Link`,component:d,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{tone:{control:`select`,options:[`standard`,`inverse`]},external:{control:`boolean`},disabled:{control:`boolean`}}},_={args:{tone:`standard`,href:`#`,children:`Ver más`}},v={render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Standard`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`},children:[(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{href:`#`,tone:`standard`,children:`Ver más`}),(0,h.jsx)(`div`,{style:m(),children:`Default`})]}),(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{href:`#`,tone:`standard`,icon:(0,h.jsx)(i,{}),children:`Ver más`}),(0,h.jsx)(`div`,{style:m(),children:`Con ícono`})]})]})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Inverse`}),(0,h.jsxs)(`div`,{style:{background:`var(--color-surface-brand-strong, #333)`,padding:24,borderRadius:8,display:`flex`,gap:24,alignItems:`flex-start`},children:[(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{href:`#`,tone:`inverse`,children:`Ver más`}),(0,h.jsx)(`div`,{style:{...m(),color:`rgba(255,255,255,0.6)`},children:`Default`})]}),(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{href:`#`,tone:`inverse`,icon:(0,h.jsx)(i,{}),children:`Ver más`}),(0,h.jsx)(`div`,{style:{...m(),color:`rgba(255,255,255,0.6)`},children:`Con ícono`})]})]})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        alignItems: 'flex-start'
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
         \r
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
        alignItems: 'flex-start'
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`AllStates`]}))();export{v as AllStates,_ as Playground,y as __namedExportsOrder,g as default};