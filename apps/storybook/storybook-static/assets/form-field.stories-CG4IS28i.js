import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-gd-_F7EU.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";var o,s,c,l,u,d=e((()=>{o=`_root_1gzs6_7`,s=`_label_1gzs6_23`,c=`_control_1gzs6_43`,l=`_supporting_1gzs6_123`,u={root:o,label:s,control:c,supporting:l}}));function f({label:e,supportingText:t,error:n=!1,id:r,className:i,disabled:o,...s}){let c=p.useId(),l=r??c,d=t?`${l}-supporting`:void 0;return(0,m.jsxs)(`div`,{"data-slot":`form-field`,"data-error":n&&!o?`true`:`false`,"data-disabled":o||void 0,className:a(u.root,i),children:[(0,m.jsx)(`label`,{htmlFor:l,className:u.label,children:e}),(0,m.jsx)(`input`,{id:l,"data-slot":`form-field-control`,className:u.control,disabled:o,"aria-invalid":n&&!o?!0:void 0,"aria-describedby":d,...s}),t?(0,m.jsx)(`span`,{id:d,className:u.supporting,children:t}):null]})}var p,m,h=e((()=>{p=t(r(),1),i(),d(),m=n(),f.__docgenInfo={description:`Campo de formulario: label, control y supporting text opcional.\r
Estados: default, error, disabled (error/disabled sólo afectan el supporting text).\r
\r
TODO: el control es un <input> nativo provisional. Aún no existen los\r
componentes individuales (Text Field / input) para componer FormField.`,methods:[],displayName:`FormField`,props:{label:{required:!0,tsType:{name:`string`},description:`Label visible (Semantic/Label/Medium/Strong).`},supportingText:{required:!1,tsType:{name:`string`},description:`Texto de ayuda o error (Semantic/Label/Small).`},error:{required:!1,tsType:{name:`boolean`},description:`Error: sólo cambia el color del supporting text.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled: el input no recibe interacción; el supporting text usa color disabled.`}},composes:[`Omit`]}})),g,_,v,y,b,x,S,C,w,T;e((()=>{h(),g=n(),_={title:`Components/Form Controls/FormField`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Campo de formulario: label, control y supporting text opcional. Estados default, error y disabled: error/disabled sólo cambian el color del supporting text. El control es un input nativo provisional (aún no hay Text Field / input como componente).`}}},argTypes:{label:{control:`text`,description:`Label visible`},supportingText:{control:`text`,description:`Texto de ayuda o error`},placeholder:{control:`text`},error:{control:`boolean`,description:`Error: sólo cambia el color del supporting text`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}}}},v={docs:{canvas:{sourceState:`none`}}},y={maxWidth:360},b={args:{label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`,error:!1,disabled:!1},render:e=>(0,g.jsx)(`div`,{style:y,children:(0,g.jsx)(f,{...e})})},x={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  label="Correo"
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,g.jsx)(`div`,{style:y,children:(0,g.jsx)(f,{label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})},S={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  label="Correo"
  error
  supportingText="Formato inválido"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,g.jsx)(`div`,{style:y,children:(0,g.jsx)(f,{label:`Correo`,error:!0,supportingText:`Formato inválido`,placeholder:`nombre@tec.mx`})})},C={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  label="Correo"
  disabled
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,g.jsx)(`div`,{style:y,children:(0,g.jsx)(f,{label:`Correo`,disabled:!0,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})},w={name:`States`,parameters:v,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280};return(0,g.jsx)(`div`,{style:{padding:8},children:(0,g.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,g.jsx)(`th`,{style:e,children:`FormField`})]})}),(0,g.jsxs)(`tbody`,{children:[(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{style:t,children:`Default`}),(0,g.jsx)(`td`,{style:n,children:(0,g.jsx)(f,{label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{style:t,children:`Error`}),(0,g.jsx)(`td`,{style:n,children:(0,g.jsx)(f,{label:`Correo`,error:!0,supportingText:`Formato inválido`,placeholder:`nombre@tec.mx`})})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{style:t,children:`Disabled`}),(0,g.jsx)(`td`,{style:n,children:(0,g.jsx)(f,{label:`Correo`,disabled:!0,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})]})]})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Correo',
    supportingText: 'Usa tu correo institucional',
    placeholder: 'nombre@tec.mx',
    error: false,
    disabled: false
  },
  render: args => <div style={fieldFrame}>\r
      <FormField {...args} />\r
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FormField
  label="Correo"
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>\`
      }
    }
  },
  render: () => <div style={fieldFrame}>\r
      <FormField label="Correo" supportingText="Usa tu correo institucional" placeholder="nombre@tec.mx" />\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FormField
  label="Correo"
  error
  supportingText="Formato inválido"
  placeholder="nombre@tec.mx"
/>\`
      }
    }
  },
  render: () => <div style={fieldFrame}>\r
      <FormField label="Correo" error supportingText="Formato inválido" placeholder="nombre@tec.mx" />\r
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FormField
  label="Correo"
  disabled
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>\`
      }
    }
  },
  render: () => <div style={fieldFrame}>\r
      <FormField label="Correo" disabled supportingText="Usa tu correo institucional" placeholder="nombre@tec.mx" />\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'States',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
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
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 280
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              paddingLeft: 0
            }}>State</th>\r
              <th style={th}>FormField</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Default</td>\r
              <td style={td}>\r
                <FormField label="Correo" supportingText="Usa tu correo institucional" placeholder="nombre@tec.mx" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Error</td>\r
              <td style={td}>\r
                <FormField label="Correo" error supportingText="Formato inválido" placeholder="nombre@tec.mx" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Disabled</td>\r
              <td style={td}>\r
                <FormField label="Correo" disabled supportingText="Usa tu correo institucional" placeholder="nombre@tec.mx" />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`Default`,`Error`,`Disabled`,`AllStates`]}))();export{w as AllStates,x as Default,C as Disabled,S as Error,b as Playground,T as __namedExportsOrder,_ as default};