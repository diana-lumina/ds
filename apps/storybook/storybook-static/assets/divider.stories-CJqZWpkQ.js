import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-D2oEYGbO.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1qvp8_1`,o={root:a}}));function c({orientation:e=`horizontal`,thickness:t=1,className:n,...r}){return(0,l.jsx)(`div`,{"data-slot":`divider`,"data-orientation":e,"data-thickness":t,role:`separator`,"aria-orientation":e,className:i(o.root,n),...r})}var l,u=e((()=>{t(),r(),s(),l=n(),c.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},thickness:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:``,defaultValue:{value:`1`,computed:!1}}}}}));function d(){return{fontFamily:`monospace`,fontSize:11,color:`#888`,marginBottom:8}}var f,p,m,h,g,_,v;e((()=>{u(),f=n(),p={title:`Components/Divider`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},thickness:{control:`select`,options:[1,2]},className:{control:!1,table:{disable:!0}}}},m={args:{orientation:`horizontal`,thickness:1},render:e=>e.orientation===`vertical`?(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`stretch`,height:96,paddingInline:24},children:(0,f.jsx)(c,{...e})}):(0,f.jsx)(`div`,{style:{width:300},children:(0,f.jsx)(c,{...e})})},h={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:300},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:d(),children:`Thickness 1`}),(0,f.jsx)(c,{orientation:`horizontal`,thickness:1})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:d(),children:`Thickness 2`}),(0,f.jsx)(c,{orientation:`horizontal`,thickness:2})]})]})},g={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:48,height:96},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,height:`100%`},children:[(0,f.jsx)(`div`,{style:d(),children:`Thickness 1`}),(0,f.jsx)(`div`,{style:{flex:1,display:`flex`},children:(0,f.jsx)(c,{orientation:`vertical`,thickness:1})})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,height:`100%`},children:[(0,f.jsx)(`div`,{style:d(),children:`Thickness 2`}),(0,f.jsx)(`div`,{style:{flex:1,display:`flex`},children:(0,f.jsx)(c,{orientation:`vertical`,thickness:2})})]})]})},_={name:`Ejemplo de uso`,render:()=>(0,f.jsxs)(`div`,{style:{fontFamily:`sans-serif`,fontSize:14,maxWidth:480,display:`flex`,flexDirection:`column`,gap:0,border:`1px solid #e5e5e5`,borderRadius:8,overflow:`hidden`,background:`#fff`},children:[(0,f.jsx)(`div`,{style:{padding:`12px 16px`,fontWeight:600},children:`Cuenta`}),(0,f.jsx)(c,{orientation:`horizontal`,thickness:1}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`stretch`,minHeight:48,paddingInline:16},children:[(0,f.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,paddingBlock:12},children:`Perfil`}),(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`stretch`,paddingBlock:12,paddingInline:16},children:(0,f.jsx)(c,{orientation:`vertical`,thickness:1})}),(0,f.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,paddingBlock:12},children:`Configuración`}),(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`stretch`,paddingBlock:12,paddingInline:16},children:(0,f.jsx)(c,{orientation:`vertical`,thickness:1})}),(0,f.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,paddingBlock:12},children:`Ayuda`})]}),(0,f.jsx)(c,{orientation:`horizontal`,thickness:1}),(0,f.jsx)(`div`,{style:{padding:`12px 16px`,color:`#666`},children:`Cerrar sesión`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    thickness: 1
  },
  render: args => args.orientation === 'vertical' ? <div style={{
    display: 'flex',
    alignItems: 'stretch',
    height: 96,
    paddingInline: 24
  }}>\r
        <Divider {...args} />\r
      </div> : <div style={{
    width: 300
  }}>\r
        <Divider {...args} />\r
      </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 300
  }}>\r
      <div>\r
        <div style={captionStyle()}>Thickness 1</div>\r
        <Divider orientation="horizontal" thickness={1} />\r
      </div>\r
      <div>\r
        <div style={captionStyle()}>Thickness 2</div>\r
        <Divider orientation="horizontal" thickness={2} />\r
      </div>\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 48,
    height: 96
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      height: '100%'
    }}>\r
        <div style={captionStyle()}>Thickness 1</div>\r
        <div style={{
        flex: 1,
        display: 'flex'
      }}>\r
          <Divider orientation="vertical" thickness={1} />\r
        </div>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      height: '100%'
    }}>\r
        <div style={captionStyle()}>Thickness 2</div>\r
        <div style={{
        flex: 1,
        display: 'flex'
      }}>\r
          <Divider orientation="vertical" thickness={2} />\r
        </div>\r
      </div>\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  render: () => <div style={{
    fontFamily: 'sans-serif',
    fontSize: 14,
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    border: '1px solid #e5e5e5',
    borderRadius: 8,
    overflow: 'hidden',
    background: '#fff'
  }}>\r
      <div style={{
      padding: '12px 16px',
      fontWeight: 600
    }}>Cuenta</div>\r
      <Divider orientation="horizontal" thickness={1} />\r
      <div style={{
      display: 'flex',
      alignItems: 'stretch',
      minHeight: 48,
      paddingInline: 16
    }}>\r
        <span style={{
        display: 'flex',
        alignItems: 'center',
        paddingBlock: 12
      }}>Perfil</span>\r
        <div style={{
        display: 'flex',
        alignItems: 'stretch',
        paddingBlock: 12,
        paddingInline: 16
      }}>\r
          <Divider orientation="vertical" thickness={1} />\r
        </div>\r
        <span style={{
        display: 'flex',
        alignItems: 'center',
        paddingBlock: 12
      }}>Configuración</span>\r
        <div style={{
        display: 'flex',
        alignItems: 'stretch',
        paddingBlock: 12,
        paddingInline: 16
      }}>\r
          <Divider orientation="vertical" thickness={1} />\r
        </div>\r
        <span style={{
        display: 'flex',
        alignItems: 'center',
        paddingBlock: 12
      }}>Ayuda</span>\r
      </div>\r
      <Divider orientation="horizontal" thickness={1} />\r
      <div style={{
      padding: '12px 16px',
      color: '#666'
    }}>Cerrar sesión</div>\r
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Horizontal`,`Vertical`,`InContext`]}))();export{h as Horizontal,_ as InContext,m as Playground,g as Vertical,v as __namedExportsOrder,p as default};