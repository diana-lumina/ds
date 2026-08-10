import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe--pDot38P.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{i as r,t as i}from"./icons-CfyEYSxz.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";var s,c,l,u=e((()=>{s=`_root_1bhaz_1`,c=`_iconWrapper_1bhaz_27`,l={root:s,iconWrapper:c}}));function d({size:e=`sm`,intent:t=`neutral`,icon:n,children:r,className:i,...a}){return(0,f.jsxs)(`span`,{"data-slot":`status`,"data-size":e,"data-intent":t,className:o(l.root,i),...a,children:[n&&(0,f.jsx)(`span`,{className:l.iconWrapper,"aria-hidden":`true`,children:n}),r]})}var f,p=e((()=>{t(),a(),u(),f=n(),d.__docgenInfo={description:``,methods:[],displayName:`Status`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},intent:{required:!1,tsType:{name:`union`,raw:`'neutral' | 'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function m(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var h,g,_,v,y,b;e((()=>{p(),r(),h=n(),g={title:`Components/Status`,component:d,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
        `}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},intent:{control:`select`,options:[`neutral`,`info`,`success`,`warning`,`danger`]},showIcon:{control:`boolean`,description:`Muestra el ícono a la izquierda`},children:{control:`text`},className:{control:!1,table:{disable:!0}}}},_={args:{size:`sm`,intent:`neutral`,children:`Activo`,showIcon:!1},render:({showIcon:e,...t})=>(0,h.jsx)(d,{...t,icon:e?(0,h.jsx)(i,{}):void 0})},v=[{value:`neutral`,label:`Neutral`},{value:`info`,label:`Info`},{value:`success`,label:`Success`},{value:`warning`,label:`Warning`},{value:`danger`,label:`Danger`}],y={render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,h.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:v.map(({value:e,label:t})=>(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{intent:e,children:t}),(0,h.jsx)(`div`,{style:m(),children:e})]},e))}),(0,h.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:v.map(({value:e,label:t})=>(0,h.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,h.jsx)(d,{intent:e,icon:(0,h.jsx)(i,{}),children:t}),(0,h.jsxs)(`div`,{style:m(),children:[e,` + ícono`]})]},e))})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    intent: 'neutral',
    children: 'Activo',
    showIcon: false
  },
  render: ({
    showIcon,
    ...args
  }) => <Status {...args} icon={showIcon ? <BagIcon /> : undefined} />
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>\r
        {INTENTS.map(({
        value,
        label
      }) => <div key={value} style={{
        textAlign: 'center'
      }}>\r
            <Status intent={value}>{label}</Status>\r
            <div style={captionStyle()}>{value}</div>\r
          </div>)}\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>\r
        {INTENTS.map(({
        value,
        label
      }) => <div key={value} style={{
        textAlign: 'center'
      }}>\r
            <Status intent={value} icon={<BagIcon />}>\r
              {label}\r
            </Status>\r
            <div style={captionStyle()}>{value} + ícono</div>\r
          </div>)}\r
      </div>\r
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`AllIntents`]}))();export{y as AllIntents,_ as Playground,b as __namedExportsOrder,g as default};