import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{_ as i,at as a,n as o,p as s}from"./icons-QF8wPxMP.js";import{n as c,t as l}from"./utils-D8qMR3V9.js";import{t as u}from"./icon-button-Bh3oQobN.js";import{t as d}from"./icon-button-BHD88BXq.js";var f,p,m,h,g=e((()=>{f=`_root_zg14v_7`,p=`_field_zg14v_37`,m=`_actions_zg14v_121`,h={root:f,field:p,actions:m}})),_,v,y,b=e((()=>{_=t(r(),1),o(),c(),d(),g(),v=n(),y=_.forwardRef(function({status:e=`default`,leadingAction:t,trailingAction:n,onLeadingActionClick:r,onTrailingActionClick:o,onSubmit:c,className:d,value:f,defaultValue:p,onChange:m,onKeyDown:g,placeholder:y=`Escribe un mensaje`,id:b,...x},S){let C=_.useId(),w=b??C,T=f!==void 0,[E,D]=_.useState(()=>p==null?``:String(p)),O=T?String(f??``):E,k=e===`disabled`,A=e===`submitting`||e===`generating`,j=k||A,M=O.length===0;function N(e){T||D(e.target.value),m?.(e)}function P(){j||M||c?.(O)}function F(e){g?.(e),!e.defaultPrevented&&e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),P())}function I(t){o?.(t),!t.defaultPrevented&&e!==`generating`&&P()}let L=(0,v.jsx)(u,{type:`button`,size:`sm`,hierarchy:`tertiary`,icon:(0,v.jsx)(i,{}),"aria-label":`Adjuntar`,disabled:j,onClick:r}),R=e===`submitting`,z=e===`generating`,B=(0,v.jsx)(u,{type:`button`,size:`sm`,hierarchy:`primary`,icon:z?(0,v.jsx)(s,{}):(0,v.jsx)(a,{}),"aria-label":z?`Detener`:`Enviar`,loading:R,disabled:k||!R&&!z&&M,onClick:I});return(0,v.jsxs)(`div`,{"data-slot":`ai-composer`,"data-status":e,"data-empty":M?`true`:void 0,"aria-busy":A||void 0,className:l(h.root,d),children:[(0,v.jsx)(`textarea`,{ref:S,id:w,"data-slot":`ai-composer-field`,className:h.field,disabled:k,readOnly:A,placeholder:y,"aria-invalid":e===`error`?!0:void 0,rows:2,...x,value:O,onChange:N,onKeyDown:F}),(0,v.jsxs)(`div`,{"data-slot":`ai-composer-actions`,className:h.actions,children:[t??L,n??B]})]})}),y.__docgenInfo={description:`Composer de mensaje de IA. Status: default, submitting, generating, error, disabled.\r
Content: empty (placeholder) o value. Acciones sm: tertiary izquierda, primary derecha.`,methods:[],displayName:`AiComposer`,props:{status:{required:!1,tsType:{name:`union`,raw:`| 'default'\r
| 'submitting'\r
| 'generating'\r
| 'error'\r
| 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'submitting'`},{name:`literal`,value:`'generating'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},leadingAction:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Acción izquierda (IconButton tertiary sm).`},trailingAction:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Acción derecha (IconButton primary sm).`},onLeadingActionClick:{required:!1,tsType:{name:`ReactMouseEventHandler`,raw:`React.MouseEventHandler<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},description:``},onTrailingActionClick:{required:!1,tsType:{name:`ReactMouseEventHandler`,raw:`React.MouseEventHandler<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},description:``},onSubmit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},placeholder:{defaultValue:{value:`'Escribe un mensaje'`,computed:!1},required:!1}},composes:[`Omit`]}})),x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{b(),x=n(),S={title:`Components/AI - Conversational/AiComposer`,component:y,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:``}}},argTypes:{status:{control:`select`,options:[`default`,`submitting`,`generating`,`error`,`disabled`],table:{defaultValue:{summary:`default`}}},placeholder:{control:`text`},className:{control:!1,table:{disable:!0}},leadingAction:{control:!1,table:{disable:!0}},trailingAction:{control:!1,table:{disable:!0}}}},C={docs:{canvas:{sourceState:`none`}}},w=`Quiero inscribirme en Diseño de interfaces.`,T={args:{status:`default`,placeholder:`Escribe un mensaje`}},E={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiComposer aria-label="Mensaje" placeholder="Escribe un mensaje" />`}}},render:()=>(0,x.jsx)(y,{"aria-label":`Mensaje`,placeholder:`Escribe un mensaje`})},D={name:`Con valor`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiComposer aria-label="Mensaje" defaultValue="${w}" />`}}},render:()=>(0,x.jsx)(y,{"aria-label":`Mensaje`,defaultValue:w})},O={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiComposer aria-label="Mensaje" status="submitting" defaultValue="${w}" />`}}},render:()=>(0,x.jsx)(y,{"aria-label":`Mensaje`,status:`submitting`,defaultValue:w})},k={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiComposer aria-label="Mensaje" status="generating" defaultValue="${w}" />`}}},render:()=>(0,x.jsx)(y,{"aria-label":`Mensaje`,status:`generating`,defaultValue:w})},A={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiComposer aria-label="Mensaje" status="error" defaultValue="${w}" />`}}},render:()=>(0,x.jsx)(y,{"aria-label":`Mensaje`,status:`error`,defaultValue:w})},j={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiComposer aria-label="Mensaje" status="disabled" />`}}},render:()=>(0,x.jsx)(y,{"aria-label":`Mensaje`,status:`disabled`})},M={name:`States`,parameters:C,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`top`,padding:`16px`,borderBottom:`1px solid #f0f0f0`},r=[`default`,`submitting`,`generating`,`error`,`disabled`];return(0,x.jsx)(`div`,{style:{padding:8},children:(0,x.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0}}),(0,x.jsx)(`th`,{style:e,children:`Empty`}),(0,x.jsx)(`th`,{style:e,children:`Value`})]})}),(0,x.jsx)(`tbody`,{children:r.map((e,i)=>{let a=i===r.length-1;return(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{style:{...t,borderBottom:a?`none`:void 0},children:e}),(0,x.jsx)(`td`,{style:{...n,borderBottom:a?`none`:void 0},children:(0,x.jsx)(y,{"aria-label":`Mensaje ${e} vacío`,status:e,placeholder:`Escribe un mensaje`})}),(0,x.jsx)(`td`,{style:{...n,borderBottom:a?`none`:void 0},children:(0,x.jsx)(y,{"aria-label":`Mensaje ${e} con valor`,status:e,defaultValue:w})})]},e)})})]})})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'default',
    placeholder: 'Escribe un mensaje'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiComposer aria-label="Mensaje" placeholder="Escribe un mensaje" />\`
      }
    }
  },
  render: () => <AiComposer aria-label="Mensaje" placeholder="Escribe un mensaje" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Con valor',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiComposer aria-label="Mensaje" defaultValue="\${sampleValue}" />\`
      }
    }
  },
  render: () => <AiComposer aria-label="Mensaje" defaultValue={sampleValue} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiComposer aria-label="Mensaje" status="submitting" defaultValue="\${sampleValue}" />\`
      }
    }
  },
  render: () => <AiComposer aria-label="Mensaje" status="submitting" defaultValue={sampleValue} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiComposer aria-label="Mensaje" status="generating" defaultValue="\${sampleValue}" />\`
      }
    }
  },
  render: () => <AiComposer aria-label="Mensaje" status="generating" defaultValue={sampleValue} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiComposer aria-label="Mensaje" status="error" defaultValue="\${sampleValue}" />\`
      }
    }
  },
  render: () => <AiComposer aria-label="Mensaje" status="error" defaultValue={sampleValue} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiComposer aria-label="Mensaje" status="disabled" />\`
      }
    }
  },
  render: () => <AiComposer aria-label="Mensaje" status="disabled" />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
      verticalAlign: 'top',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap'
    };
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'top',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0'
    };
    const statuses = ['default', 'submitting', 'generating', 'error', 'disabled'] as const;
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
            {statuses.map((status, index) => {
            const last = index === statuses.length - 1;
            return <tr key={status}>\r
                  <td style={{
                ...rowLabel,
                borderBottom: last ? 'none' : undefined
              }}>\r
                    {status}\r
                  </td>\r
                  <td style={{
                ...td,
                borderBottom: last ? 'none' : undefined
              }}>\r
                    <AiComposer aria-label={\`Mensaje \${status} vacío\`} status={status} placeholder="Escribe un mensaje" />\r
                  </td>\r
                  <td style={{
                ...td,
                borderBottom: last ? 'none' : undefined
              }}>\r
                    <AiComposer aria-label={\`Mensaje \${status} con valor\`} status={status} defaultValue={sampleValue} />\r
                  </td>\r
                </tr>;
          })}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N=[`Playground`,`Default`,`WithValue`,`Submitting`,`Generating`,`Error`,`Disabled`,`AllStates`]}))();export{M as AllStates,E as Default,j as Disabled,A as Error,k as Generating,T as Playground,O as Submitting,D as WithValue,N as __namedExportsOrder,S as default};