import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-D2oEYGbO.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{i as r,t as i}from"./icons-CfyEYSxz.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";import{n as s,t as c}from"./button-BoSL7KwJ.js";import{n as l,t as u}from"./icon-button-CG8jT85H.js";var d=e((()=>{s()})),f=e((()=>{l()})),p,m,h=e((()=>{p=`_root_17s1m_1`,m={root:p}}));function g(e){let{type:t=`standard`,icon:n,floating:r=!0,className:i,disabled:a,...s}=e,l=o(m.root,i);if(t===`extended`){let{children:e,"aria-label":t,...i}=s;return(0,_.jsx)(c,{"data-slot":`floating-action-button`,"data-type":`extended`,"data-floating":r,type:`button`,variant:`default`,tone:`standard`,size:`lg`,leftIcon:n,disabled:a,"aria-label":t,className:l,...i,children:e})}let{"aria-label":d,...f}=s;return(0,_.jsx)(u,{"data-slot":`floating-action-button`,"data-type":`standard`,"data-floating":r,type:`button`,size:`lg`,variant:`default`,icon:n,disabled:a,"aria-label":d,className:l,...f})}var _,v=e((()=>{t(),a(),d(),f(),h(),_=n(),g.__docgenInfo={description:``,methods:[],displayName:`FloatingActionButton`}}));function y(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var b,x,S,C,w,T,E;e((()=>{v(),r(),b=n(),x={title:`Components/FloatingActionButton`,component:g,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{type:{control:`select`,options:[`standard`,`extended`]},floating:{control:`boolean`},disabled:{control:`boolean`},label:{control:`text`},icon:{control:!1,table:{disable:!0}}}},S={args:{type:`extended`,floating:!1,disabled:!1,label:`Agregar`,icon:(0,b.jsx)(i,{})},render:({type:e,floating:t,disabled:n,label:r,icon:i})=>e===`extended`?(0,b.jsx)(g,{type:`extended`,floating:t,disabled:n,icon:i,children:r}):(0,b.jsx)(g,{type:`standard`,floating:t,disabled:n,icon:i,"aria-label":r})},C={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`,flexWrap:`wrap`},children:[(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(g,{type:`standard`,floating:!1,icon:(0,b.jsx)(i,{}),"aria-label":`Agregar`}),(0,b.jsx)(`div`,{style:y(),children:`standard`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(g,{type:`extended`,floating:!1,icon:(0,b.jsx)(i,{}),children:`Agregar`}),(0,b.jsx)(`div`,{style:y(),children:`extended`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(g,{type:`standard`,floating:!1,icon:(0,b.jsx)(i,{}),"aria-label":`Agregar`,disabled:!0}),(0,b.jsx)(`div`,{style:y(),children:`standard disabled`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(g,{type:`extended`,floating:!1,icon:(0,b.jsx)(i,{}),disabled:!0,children:`Agregar`}),(0,b.jsx)(`div`,{style:y(),children:`extended disabled`})]})]})},w={parameters:{layout:`fullscreen`},render:()=>(0,b.jsxs)(`div`,{style:{position:`relative`,minHeight:320,background:`#f5f5f5`},children:[(0,b.jsx)(`p`,{style:{fontFamily:`sans-serif`,padding:24,color:`#666`},children:`Vista con posición flotante: standard y extended apilados en la esquina inferior derecha.`}),(0,b.jsx)(g,{type:`standard`,floating:!0,icon:(0,b.jsx)(i,{}),"aria-label":`Agregar`,style:{bottom:96}}),(0,b.jsx)(g,{type:`extended`,floating:!0,icon:(0,b.jsx)(i,{}),children:`Agregar`})]})},T={name:`Ejemplo de uso`,parameters:{layout:`fullscreen`},render:()=>(0,b.jsxs)(`div`,{style:{position:`relative`,minHeight:360,background:`#f8f8f8`,fontFamily:`sans-serif`},children:[(0,b.jsxs)(`div`,{style:{padding:24,maxWidth:480},children:[(0,b.jsx)(`h3`,{style:{margin:`0 0 16px`,fontSize:18,fontWeight:600},children:`Mis borradores`}),[`Guía de onboarding`,`Syllabus Q3`,`Checklist de accesibilidad`].map(e=>(0,b.jsx)(`div`,{style:{padding:`12px 0`,borderBottom:`1px solid #e5e5e5`,fontSize:14,color:`#333`},children:e},e))]}),(0,b.jsx)(g,{type:`extended`,floating:!0,icon:(0,b.jsx)(i,{}),children:`Nuevo borrador`})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'extended',
    floating: false,
    disabled: false,
    label: 'Agregar',
    icon: <BagIcon />
  },
  render: ({
    type,
    floating,
    disabled,
    label,
    icon
  }) => {
    if (type === 'extended') {
      return <FloatingActionButton type="extended" floating={floating} disabled={disabled} icon={icon}>\r
          {label}\r
        </FloatingActionButton>;
    }
    return <FloatingActionButton type="standard" floating={floating} disabled={disabled} icon={icon} aria-label={label} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <FloatingActionButton type="standard" floating={false} icon={<BagIcon />} aria-label="Agregar" />\r
        <div style={captionStyle()}>standard</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <FloatingActionButton type="extended" floating={false} icon={<BagIcon />}>\r
          Agregar\r
        </FloatingActionButton>\r
        <div style={captionStyle()}>extended</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <FloatingActionButton type="standard" floating={false} icon={<BagIcon />} aria-label="Agregar" disabled />\r
        <div style={captionStyle()}>standard disabled</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <FloatingActionButton type="extended" floating={false} icon={<BagIcon />} disabled>\r
          Agregar\r
        </FloatingActionButton>\r
        <div style={captionStyle()}>extended disabled</div>\r
      </div>\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    position: 'relative',
    minHeight: 320,
    background: '#f5f5f5'
  }}>\r
      <p style={{
      fontFamily: 'sans-serif',
      padding: 24,
      color: '#666'
    }}>\r
        Vista con posición flotante: standard y extended apilados en la esquina\r
        inferior derecha.\r
      </p>\r
      <FloatingActionButton type="standard" floating icon={<BagIcon />} aria-label="Agregar" style={{
      bottom: 96
    }} />\r
      <FloatingActionButton type="extended" floating icon={<BagIcon />}>\r
        Agregar\r
      </FloatingActionButton>\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    position: 'relative',
    minHeight: 360,
    background: '#f8f8f8',
    fontFamily: 'sans-serif'
  }}>\r
      <div style={{
      padding: 24,
      maxWidth: 480
    }}>\r
        <h3 style={{
        margin: '0 0 16px',
        fontSize: 18,
        fontWeight: 600
      }}>Mis borradores</h3>\r
        {['Guía de onboarding', 'Syllabus Q3', 'Checklist de accesibilidad'].map(item => <div key={item} style={{
        padding: '12px 0',
        borderBottom: '1px solid #e5e5e5',
        fontSize: 14,
        color: '#333'
      }}>\r
            {item}\r
          </div>)}\r
      </div>\r
      <FloatingActionButton type="extended" floating icon={<BagIcon />}>\r
        Nuevo borrador\r
      </FloatingActionButton>\r
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`Types`,`Floating`,`InContext`]}))();export{w as Floating,T as InContext,S as Playground,C as Types,E as __namedExportsOrder,x as default};