import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-DutUqOlQ.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{i as r,t as i}from"./icons-CfyEYSxz.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";var s,c,l,u=e((()=>{s=`_root_3mmmj_1`,c=`_iconWrapper_3mmmj_23`,l={root:s,iconWrapper:c}}));function d({size:e=`sm`,tone:t=`neutral`,icon:n,children:r,className:i,...a}){return(0,f.jsxs)(`span`,{"data-slot":`tag`,"data-size":e,"data-tone":t,className:o(l.root,i),...a,children:[n&&(0,f.jsx)(`span`,{className:l.iconWrapper,"aria-hidden":`true`,children:n}),r]})}var f,p=e((()=>{t(),a(),u(),f=n(),d.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`'neutral' | 'brand'`,elements:[{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'brand'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function m(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var h,g,_,v,y;e((()=>{p(),r(),h=n(),g={title:`Components/Tag`,component:d,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},tone:{control:`select`,options:[`neutral`,`brand`]}}},_={args:{size:`sm`,tone:`neutral`,children:`Nuevo`}},v={render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Small`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{size:`sm`,tone:`neutral`,children:`Neutral`}),(0,h.jsx)(`div`,{style:m(),children:`Neutral`})]}),(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{size:`sm`,tone:`brand`,children:`Brand`}),(0,h.jsx)(`div`,{style:m(),children:`Brand`})]}),(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{size:`sm`,tone:`brand`,icon:(0,h.jsx)(i,{}),children:`Con ícono`}),(0,h.jsx)(`div`,{style:m(),children:`Con ícono`})]})]})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Medium`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,h.jsx)(d,{size:`md`,tone:`neutral`,children:`Neutral`}),(0,h.jsx)(d,{size:`md`,tone:`brand`,children:`Brand`})]})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    tone: 'neutral',
    children: 'Nuevo'
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
      }}>Small</h2>\r
       \r
        <div style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Tag size="sm" tone="neutral">\r
              Neutral\r
            </Tag>\r
            <div style={captionStyle()}>Neutral</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Tag size="sm" tone="brand">\r
              Brand\r
            </Tag>\r
            <div style={captionStyle()}>Brand</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Tag size="sm" tone="brand" icon={<BagIcon />}>\r
              Con ícono\r
            </Tag>\r
            <div style={captionStyle()}>Con ícono</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Medium</h2>\r
       \r
        <div style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }}>\r
          <Tag size="md" tone="neutral">\r
            Neutral\r
          </Tag>\r
          <Tag size="md" tone="brand">\r
            Brand\r
          </Tag>\r
        </div>\r
      </div>\r
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`AllVariants`]}))();export{v as AllVariants,_ as Playground,y as __namedExportsOrder,g as default};