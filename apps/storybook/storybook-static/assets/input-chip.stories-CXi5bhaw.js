import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n}from"./iframe-D2oEYGbO.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{i,r as a,t as o}from"./icons-CfyEYSxz.js";import{n as s,t as c}from"./utils-D8qMR3V9.js";var l,u,d,f,p,m=e((()=>{l=`_root_1yw16_3`,u=`_label_1yw16_73`,d=`_iconWrapper_1yw16_81`,f=`_closeButton_1yw16_157`,p={root:l,label:u,iconWrapper:d,closeButton:f}}));function h({size:e=`sm`,icon:t,children:n,onClose:r,closeDisabled:i=!1,closeLabel:o=`Quitar`,className:s}){return(0,g.jsxs)(`span`,{"data-slot":`input-chip`,"data-size":e,"data-close-disabled":i,className:c(p.root,s),children:[t&&(0,g.jsx)(`span`,{className:p.iconWrapper,"aria-hidden":`true`,children:t}),(0,g.jsx)(`span`,{className:p.label,children:n}),(0,g.jsx)(`button`,{type:`button`,"data-slot":`input-chip-close`,className:p.closeButton,onClick:r,disabled:i,"aria-label":o,children:(0,g.jsx)(a,{})})]})}var g,_=e((()=>{n(),s(),m(),i(),g=r(),h.__docgenInfo={description:``,methods:[],displayName:`InputChip`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},closeDisabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},closeLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Quitar'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));function v(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var y,b,x,S,C,w,T;e((()=>{y=t(n(),1),_(),i(),b=r(),x={title:`Components/InputChip`,component:h,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},closeDisabled:{control:`boolean`},showIcon:{control:`boolean`,description:`Muestra el ícono a la izquierda`},children:{control:`text`},className:{control:!1,table:{disable:!0}}}},S={args:{size:`sm`,children:`Etiqueta`,closeLabel:`Quitar etiqueta`,closeDisabled:!1,showIcon:!1},render:({showIcon:e,...t})=>(0,b.jsx)(h,{...t,icon:e?(0,b.jsx)(o,{}):void 0,onClose:()=>{}})},C={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Small`}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(h,{size:`sm`,onClose:()=>{},closeLabel:`Quitar etiqueta`,children:`Etiqueta`}),(0,b.jsx)(`div`,{style:v(),children:`Default`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(h,{size:`sm`,icon:(0,b.jsx)(o,{}),onClose:()=>{},closeLabel:`Quitar etiqueta`,children:`Etiqueta`}),(0,b.jsx)(`div`,{style:v(),children:`Con ícono`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(h,{size:`sm`,onClose:()=>{},closeDisabled:!0,closeLabel:`Quitar etiqueta`,children:`Etiqueta`}),(0,b.jsx)(`div`,{style:v(),children:`Cerrar deshabilitado`})]})]})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Medium`}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,b.jsx)(h,{size:`md`,onClose:()=>{},closeLabel:`Quitar etiqueta`,children:`Etiqueta`}),(0,b.jsx)(h,{size:`md`,icon:(0,b.jsx)(o,{}),onClose:()=>{},closeLabel:`Quitar etiqueta`,children:`Etiqueta`})]})]})]})},w={name:`Ejemplo de uso`,render:()=>{let[e,t]=y.useState([`UX Research`,`Producto`,`Figma`]);return(0,b.jsxs)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:420,display:`flex`,flexDirection:`column`,gap:8},children:[(0,b.jsx)(`label`,{style:{fontSize:13,color:`#666`},children:`Etiquetas del curso`}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,padding:12,border:`1px solid #e5e5e5`,borderRadius:8,minHeight:48,alignItems:`center`},children:[e.map(e=>(0,b.jsx)(h,{size:`sm`,closeLabel:`Quitar ${e}`,onClose:()=>t(t=>t.filter(t=>t!==e)),children:e},e)),e.length===0&&(0,b.jsx)(`span`,{style:{fontSize:13,color:`#999`},children:`Sin etiquetas`})]})]})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  render: () => {
    const [tags, setTags] = React.useState(['UX Research', 'Producto', 'Figma']);
    return <div style={{
      fontFamily: 'sans-serif',
      maxWidth: 420,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>\r
        <label style={{
        fontSize: 13,
        color: '#666'
      }}>Etiquetas del curso</label>\r
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        padding: 12,
        border: '1px solid #e5e5e5',
        borderRadius: 8,
        minHeight: 48,
        alignItems: 'center'
      }}>\r
          {tags.map(tag => <InputChip key={tag} size="sm" closeLabel={\`Quitar \${tag}\`} onClose={() => setTags(prev => prev.filter(t => t !== tag))}>\r
              {tag}\r
            </InputChip>)}\r
          {tags.length === 0 && <span style={{
          fontSize: 13,
          color: '#999'
        }}>Sin etiquetas</span>}\r
        </div>\r
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`AllStates`,`InContext`]}))();export{C as AllStates,w as InContext,S as Playground,T as __namedExportsOrder,x as default};