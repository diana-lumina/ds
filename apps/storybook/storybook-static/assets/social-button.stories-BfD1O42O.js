import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{F as r,lt as i,n as a}from"./icons-QF8wPxMP.js";import{n as o,t as s}from"./utils-D8qMR3V9.js";var c,l,u,d=e((()=>{c=`_root_1rbhz_1`,l=`_icon_1rbhz_95`,u={root:c,icon:l,"social-button-spin":`_social-button-spin_1rbhz_1`}}));function f({label:e,icon:t,size:n=`md`,loading:r=!1,className:a,disabled:o,type:c=`button`,...l}){let d=r?(0,p.jsx)(i,{}):t;return(0,p.jsxs)(`button`,{type:c,"data-slot":`social-button`,"data-size":n,"data-loading":r||void 0,"aria-busy":r||void 0,disabled:o||r,className:s(u.root,a),...l,children:[(0,p.jsx)(`span`,{"aria-hidden":`true`,className:u.icon,children:d}),(0,p.jsx)(`span`,{children:e})]})}var p,m=e((()=>{n(),o(),a(),d(),p=t(),f.__docgenInfo={description:``,methods:[],displayName:`SocialButton`,props:{label:{required:!0,tsType:{name:`string`},description:`Label visible.`},icon:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Ícono leading (marca social). Obligatorio.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w;e((()=>{n(),a(),m(),h=t(),g={title:`Components/Actions/SocialButton`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Botón de autenticación social. El ícono leading es obligatorio.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`],description:`sm · md · lg`,table:{defaultValue:{summary:`md`}}},label:{control:`text`,description:`Label visible`},loading:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},icon:{control:!1,table:{disable:!0}}}},_=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`},{value:`lg`,sizeLabel:`Large`}],v={docs:{canvas:{sourceState:`none`}}},y={args:{size:`md`,label:`Continuar con Facebook`,icon:(0,h.jsx)(r,{}),disabled:!1,loading:!1}},b={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<SocialButton
  label="Continuar con Facebook"
  icon={<FacebookIcon />}
/>`}}},render:()=>(0,h.jsx)(f,{label:`Continuar con Facebook`,icon:(0,h.jsx)(r,{})})},x={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<SocialButton
  label="Continuar con Facebook"
  icon={<FacebookIcon />}
  disabled
/>`}}},render:()=>(0,h.jsx)(f,{label:`Continuar con Facebook`,icon:(0,h.jsx)(r,{}),disabled:!0})},S={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<SocialButton
  label="Continuar con Facebook"
  icon={<FacebookIcon />}
  loading
/>`}}},render:()=>(0,h.jsx)(f,{label:`Continuar con Facebook`,icon:(0,h.jsx)(r,{}),loading:!0})},C={name:`Sizes`,parameters:v,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`};return(0,h.jsx)(`div`,{style:{padding:8},children:(0,h.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,h.jsx)(`thead`,{children:(0,h.jsx)(`tr`,{children:_.map(({value:t,sizeLabel:n})=>(0,h.jsx)(`th`,{style:e,children:n},t))})}),(0,h.jsx)(`tbody`,{children:(0,h.jsx)(`tr`,{children:_.map(({value:e})=>(0,h.jsx)(`td`,{style:t,children:(0,h.jsx)(f,{size:e,label:`Continuar con Facebook`,icon:(0,h.jsx)(r,{})})},e))})})]})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Continuar con Facebook',
    icon: <FacebookIcon />,
    disabled: false,
    loading: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<SocialButton
  label="Continuar con Facebook"
  icon={<FacebookIcon />}
/>\`
      }
    }
  },
  render: () => <SocialButton label="Continuar con Facebook" icon={<FacebookIcon />} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<SocialButton
  label="Continuar con Facebook"
  icon={<FacebookIcon />}
  disabled
/>\`
      }
    }
  },
  render: () => <SocialButton label="Continuar con Facebook" icon={<FacebookIcon />} disabled />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<SocialButton
  label="Continuar con Facebook"
  icon={<FacebookIcon />}
  loading
/>\`
      }
    }
  },
  render: () => <SocialButton label="Continuar con Facebook" icon={<FacebookIcon />} loading />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
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
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 20px'
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              {SIZES.map(({
              value,
              sizeLabel
            }) => <th key={value} style={th}>\r
                  {sizeLabel}\r
                </th>)}\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                  <SocialButton size={value} label="Continuar con Facebook" icon={<FacebookIcon />} />\r
                </td>)}\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Default`,`Disabled`,`Loading`,`Sizes`]}))();export{b as Default,x as Disabled,S as Loading,y as Playground,C as Sizes,w as __namedExportsOrder,g as default};