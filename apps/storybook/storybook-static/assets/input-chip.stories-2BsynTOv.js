import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe--pDot38P.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{i as r,r as i,t as a}from"./icons-CfyEYSxz.js";import{n as o,t as s}from"./utils-D8qMR3V9.js";var c,l,u,d,f,p=e((()=>{c=`_root_1yw16_3`,l=`_label_1yw16_73`,u=`_iconWrapper_1yw16_81`,d=`_closeButton_1yw16_157`,f={root:c,label:l,iconWrapper:u,closeButton:d}}));function m({size:e=`sm`,icon:t,children:n,onClose:r,closeDisabled:a=!1,closeLabel:o=`Quitar`,className:c}){return(0,h.jsxs)(`span`,{"data-slot":`input-chip`,"data-size":e,"data-close-disabled":a,className:s(f.root,c),children:[t&&(0,h.jsx)(`span`,{className:f.iconWrapper,"aria-hidden":`true`,children:t}),(0,h.jsx)(`span`,{className:f.label,children:n}),(0,h.jsx)(`button`,{type:`button`,"data-slot":`input-chip-close`,className:f.closeButton,onClick:r,disabled:a,"aria-label":o,children:(0,h.jsx)(i,{})})]})}var h,g=e((()=>{t(),o(),p(),r(),h=n(),m.__docgenInfo={description:``,methods:[],displayName:`InputChip`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},closeDisabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},closeLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Quitar'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));function _(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var v,y,b,x,S;e((()=>{g(),r(),v=n(),y={title:`Components/InputChip`,component:m,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},closeDisabled:{control:`boolean`},showIcon:{control:`boolean`,description:`Muestra el ícono a la izquierda`},children:{control:`text`},className:{control:!1,table:{disable:!0}}}},b={args:{size:`sm`,children:`Etiqueta`,closeLabel:`Quitar etiqueta`,closeDisabled:!1,showIcon:!1},render:({showIcon:e,...t})=>(0,v.jsx)(m,{...t,icon:e?(0,v.jsx)(a,{}):void 0,onClose:()=>{}})},x={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Small`}),(0,v.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,v.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,v.jsx)(m,{size:`sm`,onClose:()=>{},closeLabel:`Quitar etiqueta`,children:`Etiqueta`}),(0,v.jsx)(`div`,{style:_(),children:`Default`})]}),(0,v.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,v.jsx)(m,{size:`sm`,icon:(0,v.jsx)(a,{}),onClose:()=>{},closeLabel:`Quitar etiqueta`,children:`Etiqueta`}),(0,v.jsx)(`div`,{style:_(),children:`Con ícono`})]}),(0,v.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,v.jsx)(m,{size:`sm`,onClose:()=>{},closeDisabled:!0,closeLabel:`Quitar etiqueta`,children:`Etiqueta`}),(0,v.jsx)(`div`,{style:_(),children:`Cerrar deshabilitado`})]})]})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Medium`}),(0,v.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,v.jsx)(m,{size:`md`,onClose:()=>{},closeLabel:`Quitar etiqueta`,children:`Etiqueta`}),(0,v.jsx)(m,{size:`md`,icon:(0,v.jsx)(a,{}),onClose:()=>{},closeLabel:`Quitar etiqueta`,children:`Etiqueta`})]})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Etiqueta',
    closeLabel: 'Quitar etiqueta',
    closeDisabled: false,
    showIcon: false
  },
  render: ({
    showIcon,
    ...args
  }) => <InputChip {...args} icon={showIcon ? <BagIcon /> : undefined} onClose={() => {}} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
            <InputChip size="sm" onClose={() => {}} closeLabel="Quitar etiqueta">\r
              Etiqueta\r
            </InputChip>\r
            <div style={captionStyle()}>Default</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <InputChip size="sm" icon={<BagIcon />} onClose={() => {}} closeLabel="Quitar etiqueta">\r
              Etiqueta\r
            </InputChip>\r
            <div style={captionStyle()}>Con ícono</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <InputChip size="sm" onClose={() => {}} closeDisabled closeLabel="Quitar etiqueta">\r
              Etiqueta\r
            </InputChip>\r
            <div style={captionStyle()}>Cerrar deshabilitado</div>\r
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
          <InputChip size="md" onClose={() => {}} closeLabel="Quitar etiqueta">\r
            Etiqueta\r
          </InputChip>\r
          <InputChip size="md" icon={<BagIcon />} onClose={() => {}} closeLabel="Quitar etiqueta">\r
            Etiqueta\r
          </InputChip>\r
        </div>\r
      </div>\r
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`AllStates`]}))();export{x as AllStates,b as Playground,S as __namedExportsOrder,y as default};