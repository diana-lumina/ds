import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";var o,s,c,l=e((()=>{o=`_root_r1u59_7`,s=`_input_r1u59_37`,c={root:o,input:s}})),u,d,f,p=e((()=>{u=t(r(),1),i(),l(),d=n(),f=u.forwardRef(function({error:e=!1,disabled:t,className:n,value:r,defaultValue:i,onChange:o,placeholder:s=`Escribe un mensaje`,id:l,...f},p){let m=u.useId(),h=l??m,g=r!==void 0,[_,v]=u.useState(()=>i==null?``:String(i)),y=g?String(r??``):_,b=e&&!t;function x(e){g||v(e.target.value),o?.(e)}return(0,d.jsx)(`div`,{"data-slot":`chat-input`,"data-error":b?`true`:void 0,"data-disabled":t||void 0,"data-empty":y.length===0?`true`:void 0,className:a(c.root,n),children:(0,d.jsx)(`input`,{ref:p,id:h,type:`text`,"data-slot":`chat-input-field`,className:c.input,disabled:t,placeholder:s,"aria-invalid":b?!0:void 0,...f,value:y,onChange:x})})}),f.__docgenInfo={description:``,methods:[],displayName:`ChatInput`,props:{error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},placeholder:{defaultValue:{value:`'Escribe un mensaje'`,computed:!1},required:!1}},composes:[`Omit`]}})),m,h,g,_,v,y,b,x,S,C;e((()=>{p(),m=n(),h={title:`Components/AI - Conversational/ChatInput`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:``}}},argTypes:{placeholder:{control:`text`},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},className:{control:!1,table:{disable:!0}}}},g={docs:{canvas:{sourceState:`none`}}},_={args:{placeholder:`Escribe un mensaje`,error:!1,disabled:!1}},v={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ChatInput aria-label="Mensaje" placeholder="Escribe un mensaje" />`}}},render:()=>(0,m.jsx)(f,{"aria-label":`Mensaje`,placeholder:`Escribe un mensaje`})},y={name:`Con valor`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ChatInput aria-label="Mensaje" defaultValue="Quiero inscribirme en Diseño de interfaces." />`}}},render:()=>(0,m.jsx)(f,{"aria-label":`Mensaje`,defaultValue:`Quiero inscribirme en Diseño de interfaces.`})},b={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ChatInput aria-label="Mensaje" disabled />`}}},render:()=>(0,m.jsx)(f,{"aria-label":`Mensaje`,disabled:!0})},x={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ChatInput aria-label="Mensaje" error />`}}},render:()=>(0,m.jsx)(f,{"aria-label":`Mensaje`,error:!0})},S={name:`States`,parameters:g,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px`,borderBottom:`1px solid #f0f0f0`};return(0,m.jsx)(`div`,{style:{padding:8},children:(0,m.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0}}),(0,m.jsx)(`th`,{style:e,children:`Empty`}),(0,m.jsx)(`th`,{style:e,children:`Value`})]})}),(0,m.jsxs)(`tbody`,{children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:t,children:`Default`}),(0,m.jsx)(`td`,{style:n,children:(0,m.jsx)(f,{"aria-label":`Mensaje`,placeholder:`Escribe un mensaje`})}),(0,m.jsx)(`td`,{style:n,children:(0,m.jsx)(f,{"aria-label":`Mensaje`,defaultValue:`Quiero inscribirme en Diseño de interfaces.`})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:t,children:`Disabled`}),(0,m.jsx)(`td`,{style:n,children:(0,m.jsx)(f,{"aria-label":`Mensaje`,disabled:!0,placeholder:`Escribe un mensaje`})}),(0,m.jsx)(`td`,{style:n,children:(0,m.jsx)(f,{"aria-label":`Mensaje`,disabled:!0,defaultValue:`Quiero inscribirme en Diseño de interfaces.`})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:t,children:`Error`}),(0,m.jsx)(`td`,{style:n,children:(0,m.jsx)(f,{"aria-label":`Mensaje`,error:!0,placeholder:`Escribe un mensaje`})}),(0,m.jsx)(`td`,{style:n,children:(0,m.jsx)(f,{"aria-label":`Mensaje`,error:!0,defaultValue:`Quiero inscribirme en Diseño de interfaces.`})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{...t,borderBottom:`none`},children:`Focus-visible`}),(0,m.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,m.jsx)(f,{"aria-label":`Mensaje en foco`,placeholder:`Escribe un mensaje`,autoFocus:!0})}),(0,m.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,m.jsx)(f,{"aria-label":`Mensaje con valor en foco`,defaultValue:`Quiero inscribirme en Diseño de interfaces.`})})]})]})]})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Escribe un mensaje',
    error: false,
    disabled: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ChatInput aria-label="Mensaje" placeholder="Escribe un mensaje" />\`
      }
    }
  },
  render: () => <ChatInput aria-label="Mensaje" placeholder="Escribe un mensaje" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Con valor',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ChatInput aria-label="Mensaje" defaultValue="Quiero inscribirme en Diseño de interfaces." />\`
      }
    }
  },
  render: () => <ChatInput aria-label="Mensaje" defaultValue="Quiero inscribirme en Diseño de interfaces." />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ChatInput aria-label="Mensaje" disabled />\`
      }
    }
  },
  render: () => <ChatInput aria-label="Mensaje" disabled />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ChatInput aria-label="Mensaje" error />\`
      }
    }
  },
  render: () => <ChatInput aria-label="Mensaje" error />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'States',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 16px 12px',
      borderBottom: '1px solid #eee'
    };
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap'
    };
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0'
    };
    return <div style={{
      padding: 8
    }}>\r
       \r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }} />\r
              <th style={th}>Empty</th>\r
              <th style={th}>Value</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Default</td>\r
              <td style={td}>\r
                <ChatInput aria-label="Mensaje" placeholder="Escribe un mensaje" />\r
              </td>\r
              <td style={td}>\r
                <ChatInput aria-label="Mensaje" defaultValue="Quiero inscribirme en Diseño de interfaces." />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Disabled</td>\r
              <td style={td}>\r
                <ChatInput aria-label="Mensaje" disabled placeholder="Escribe un mensaje" />\r
              </td>\r
              <td style={td}>\r
                <ChatInput aria-label="Mensaje" disabled defaultValue="Quiero inscribirme en Diseño de interfaces." />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Error</td>\r
              <td style={td}>\r
                <ChatInput aria-label="Mensaje" error placeholder="Escribe un mensaje" />\r
              </td>\r
              <td style={td}>\r
                <ChatInput aria-label="Mensaje" error defaultValue="Quiero inscribirme en Diseño de interfaces." />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...rowLabel,
              borderBottom: 'none'
            }}>Focus-visible</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <ChatInput aria-label="Mensaje en foco" placeholder="Escribe un mensaje" autoFocus />\r
              </td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <ChatInput aria-label="Mensaje con valor en foco" defaultValue="Quiero inscribirme en Diseño de interfaces." />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Default`,`WithValue`,`Disabled`,`Error`,`AllStates`]}))();export{S as AllStates,v as Default,b as Disabled,x as Error,_ as Playground,y as WithValue,C as __namedExportsOrder,h as default};