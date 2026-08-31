import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";var o,s,c,l=e((()=>{o=`_root_1vgcn_9`,s=`_segment_1vgcn_49`,c={root:o,segment:s}}));function u(e){return e.replace(/\D/g,``).slice(0,6)}function d(e){return Array.from({length:6},(t,n)=>e[n]??``)}function f({value:e,defaultValue:t=``,onValueChange:n,name:r,autoComplete:i=`one-time-code`,autoFocus:o,className:s,id:l,"aria-label":f=`Código de verificación`,...h}){let g=p.useId(),_=l??g,v=e!==void 0,[y,b]=p.useState(()=>u(String(t))),x=u(v?String(e??``):y),S=d(x),C=p.useRef([]);function w(e){let t=u(e);v||b(t),n?.(t)}function T(e){let t=Math.max(0,Math.min(e,5));C.current[t]?.focus(),C.current[t]?.select()}function E(e,t){let n=u(t);if(!n)return;if(n.length>1){w(n),T(Math.min(n.length,6)-1);return}let r=Math.min(e,x.length),i=(x.slice(0,r)+n+x.slice(r+1)).slice(0,6);w(i),T(i.length>=6?5:r+1)}function D(e,t){if(t.key===`Backspace`||t.key===`Delete`){if(t.preventDefault(),x[e]){w(x.slice(0,e)+x.slice(e+1));return}e>0&&(w(x.slice(0,e-1)+x.slice(e)),T(e-1));return}if(t.key===`ArrowLeft`){t.preventDefault(),T(e-1);return}t.key===`ArrowRight`&&(t.preventDefault(),T(e+1))}function O(e){let t=u(e.clipboardData.getData(`text`));t&&(e.preventDefault(),w(t),T(Math.min(t.length,6)-1))}return(0,m.jsxs)(`div`,{id:_,role:`group`,"data-slot":`otp-input`,"aria-label":f,className:a(c.root,s),...h,children:[r?(0,m.jsx)(`input`,{type:`hidden`,name:r,value:x}):null,S.map((e,t)=>(0,m.jsx)(`input`,{ref:e=>{C.current[t]=e},id:t===0?`${_}-0`:void 0,className:c.segment,"data-slot":`otp-input-segment`,type:`text`,inputMode:`numeric`,autoComplete:t===0?i:`off`,autoFocus:o&&t===0,"aria-label":`Dígito ${t+1} de 6`,maxLength:6,value:e,onChange:e=>E(t,e.target.value),onKeyDown:e=>D(t,e),onPaste:O,onFocus:e=>e.currentTarget.select()},t))]})}var p,m,h=e((()=>{p=t(r(),1),i(),l(),m=n(),f.__docgenInfo={description:`Código de un solo uso: 6 segmentos. Default y focus-visible (el anillo rodea el grupo).`,methods:[],displayName:`OtpInput`,props:{value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},name:{required:!1,tsType:{name:`string`},description:``},autoComplete:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'one-time-code'`,computed:!1}},autoFocus:{required:!1,tsType:{name:`boolean`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Código de verificación'`,computed:!1}}},composes:[`Omit`]}}));function g({defaultValue:e,autoFocus:t}){let[n,r]=(0,_.useState)(e??``);return(0,v.jsx)(f,{value:n,onValueChange:r,autoFocus:t,"aria-label":`Código de verificación`})}var _,v,y,b,x,S,C,w,T,E;e((()=>{_=t(r(),1),h(),v=n(),y={title:`Components/Form Controls/OtpInput`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Código de un solo uso en 6 segmentos. Estados default y focus-visible: el anillo rodea el grupo, no cada celda.`}}},argTypes:{value:{control:!1},defaultValue:{control:`text`},"aria-label":{control:`text`},autoFocus:{control:`boolean`},className:{control:!1,table:{disable:!0}}}},b={docs:{canvas:{sourceState:`none`}}},x={args:{defaultValue:``,autoFocus:!1},render:e=>(0,v.jsx)(g,{defaultValue:e.defaultValue,autoFocus:e.autoFocus})},S={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<OtpInput aria-label="Código de verificación" />`}}},render:()=>(0,v.jsx)(g,{})},C={name:`Focus-visible`,parameters:{docs:{description:{story:`El anillo rodea los 6 segmentos. En el canvas, Tab entra al primer dígito.`},canvas:{sourceState:`shown`},source:{code:`<OtpInput aria-label="Código de verificación" autoFocus />`}}},render:()=>(0,v.jsx)(g,{autoFocus:!0})},w={name:`Con valor`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<OtpInput defaultValue="847291" aria-label="Código de verificación" />`}}},render:()=>(0,v.jsx)(g,{defaultValue:`847291`})},T={name:`States`,parameters:b,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 24px 12px 0`,borderBottom:`1px solid #eee`},t={padding:`16px 24px 16px 0`,verticalAlign:`middle`};return(0,v.jsx)(`div`,{style:{padding:8},children:(0,v.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{style:e,children:`State`}),(0,v.jsx)(`th`,{style:e,children:` `})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{style:{...e,borderBottom:`1px solid #f0f0f0`},children:`Default`}),(0,v.jsx)(`td`,{style:t,children:(0,v.jsx)(g,{defaultValue:`12`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{style:{...e,borderBottom:`none`},children:`Focus-visible`}),(0,v.jsx)(`td`,{style:{...t,borderBottom:`none`},children:(0,v.jsx)(g,{defaultValue:`12`,autoFocus:!0})})]})]})]})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    autoFocus: false
  },
  render: args => <Specimen defaultValue={args.defaultValue} autoFocus={args.autoFocus} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<OtpInput aria-label="Código de verificación" />\`
      }
    }
  },
  render: () => <Specimen />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Focus-visible',
  parameters: {
    docs: {
      description: {
        story: 'El anillo rodea los 6 segmentos. En el canvas, Tab entra al primer dígito.'
      },
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<OtpInput aria-label="Código de verificación" autoFocus />\`
      }
    }
  },
  render: () => <Specimen autoFocus />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Con valor',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<OtpInput defaultValue="847291" aria-label="Código de verificación" />\`
      }
    }
  },
  render: () => <Specimen defaultValue="847291" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'States',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      padding: '0 24px 12px 0',
      borderBottom: '1px solid #eee'
    };
    const td: React.CSSProperties = {
      padding: '16px 24px 16px 0',
      verticalAlign: 'middle'
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={th}>State</th>\r
              <th style={th}> </th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={{
              ...th,
              borderBottom: '1px solid #f0f0f0'
            }}>Default</td>\r
              <td style={td}>\r
                <Specimen defaultValue="12" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...th,
              borderBottom: 'none'
            }}>Focus-visible</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <Specimen defaultValue="12" autoFocus />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`Default`,`FocusVisible`,`WithValue`,`AllStates`]}))();export{T as AllStates,S as Default,C as FocusVisible,x as Playground,w as WithValue,E as __namedExportsOrder,y as default};