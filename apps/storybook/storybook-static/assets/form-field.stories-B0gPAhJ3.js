import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-BPJdu4Wu.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";import{a as o,i as s,n as c,r as l,t as u}from"./select-CDwMicz1.js";import{i as d,n as f,o as p,r as m,t as h}from"./phone-input-CnjBHpQP.js";var g=e((()=>{f()})),_,v,y=e((()=>{_=`_root_k9n09_3`,v={root:_}}));function b({appearance:e=`outlined`,error:t=!1,disabled:n,className:r,...i}){let o=t&&!n;return(0,x.jsx)(`textarea`,{"data-slot":`text-area`,"data-appearance":e,"data-error":o?`true`:void 0,className:a(v.root,r),disabled:n,"aria-invalid":o?!0:void 0,...i})}var x,S=e((()=>{r(),i(),y(),x=n(),b.__docgenInfo={description:`Control de área de texto interno (outlined | underline × default | error | disabled).\r
No forma parte de la API pública de \`@workspace/ui\`; se usa para componer\r
campos (FormField y siguientes).`,methods:[],displayName:`TextArea`,props:{appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'underline'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'underline'`}]},description:"`outlined` (caja) o `underline`.",defaultValue:{value:`'outlined'`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:`Error: borde danger. Disabled gana sobre error.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled: valor muted; no recibe interacción.`}},composes:[`Omit`]}})),C=e((()=>{S()})),w,T,E,D,O=e((()=>{w=`_root_1j1uv_3`,T=`_label_1j1uv_19`,E=`_supporting_1j1uv_39`,D={root:w,label:T,supporting:E}}));function k({label:e,supportingText:t,appearance:n=`outlined`,control:r,multiline:i=!1,rows:f,options:p,value:m,defaultValue:g,onValueChange:_,country:v,defaultCountry:y,onCountryChange:x,countries:S,error:C=!1,id:w,className:T,disabled:E,type:O,placeholder:k,...M}){let N=A.useId(),P=w??N,F=t?`${P}-supporting`:void 0,I=r??(i?`textarea`:`input`),L={id:P,appearance:n,error:C,disabled:E,"aria-describedby":F};return(0,j.jsxs)(`div`,{"data-slot":`form-field`,"data-error":C&&!E?`true`:`false`,"data-disabled":E||void 0,className:a(D.root,T),children:[(0,j.jsx)(`label`,{htmlFor:P,className:D.label,children:e}),I===`phone`?(0,j.jsx)(h,{...L,country:v,defaultCountry:y,onCountryChange:x,countries:S,placeholder:k,value:m,defaultValue:g,...M}):I===`select`?(0,j.jsxs)(u,{value:m,defaultValue:g,onValueChange:_,disabled:E,children:[(0,j.jsx)(s,{...L,children:(0,j.jsx)(o,{placeholder:k})}),(0,j.jsx)(c,{children:p?.map(e=>(0,j.jsx)(l,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]}):I===`textarea`?(0,j.jsx)(b,{rows:f,placeholder:k,value:m,defaultValue:g,...L,...M}):(0,j.jsx)(d,{type:O,placeholder:k,value:m,defaultValue:g,...L,...M}),t?(0,j.jsx)(`span`,{id:F,className:D.supporting,children:t}):null]})}var A,j,M=e((()=>{A=t(r(),1),i(),g(),p(),C(),m(),O(),j=n(),k.__docgenInfo={description:`Campo de formulario: label, TextInput / TextArea / Select / PhoneInput y supporting text.\r
Appearances: outlined, underline. Estados: default, error, disabled.`,methods:[],displayName:`FormField`,props:{label:{required:!0,tsType:{name:`string`},description:`Label visible (Semantic/Label/Medium/Strong).`},supportingText:{required:!1,tsType:{name:`string`},description:`Texto de ayuda o error (Semantic/Label/Small).`},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'underline'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'underline'`}]},description:`Apariencia del control interno.`,defaultValue:{value:`'outlined'`,computed:!1}},control:{required:!1,tsType:{name:`union`,raw:`'input' | 'textarea' | 'select' | 'phone'`,elements:[{name:`literal`,value:`'input'`},{name:`literal`,value:`'textarea'`},{name:`literal`,value:`'select'`},{name:`literal`,value:`'phone'`}]},description:"Control interno. `multiline` equivale a `textarea`."},multiline:{required:!1,tsType:{name:`boolean`},description:`Usa TextArea en lugar de TextInput.`,defaultValue:{value:`false`,computed:!1}},rows:{required:!1,tsType:{name:`number`},description:`Filas iniciales del TextArea.`},options:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  value: string\r
  label: React.ReactNode\r
  disabled?: boolean\r
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`FormFieldOption[]`},description:'Opciones cuando `control="select"`.'},value:{required:!1,tsType:{name:`string`},description:`Valor del Select (controlado).`},defaultValue:{required:!1,tsType:{name:`string`},description:`Valor inicial del Select (no controlado).`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Cambio de valor del Select.`},country:{required:!1,tsType:{name:`string`},description:'País seleccionado cuando `control="phone"`.'},defaultCountry:{required:!1,tsType:{name:`string`},description:``},onCountryChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(country: string) => void`,signature:{arguments:[{type:{name:`string`},name:`country`}],return:{name:`void`}}},description:``},countries:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  value: string\r
  dialCode: string\r
  label: string\r
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`dialCode`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`PhoneCountry[]`},description:``},error:{required:!1,tsType:{name:`boolean`},description:`Error: supporting text + control en estado error.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled: el input no recibe interacción; el supporting text usa color disabled.`}},composes:[`Omit`]}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{M(),N=n(),P={title:`Components/Form Controls/FormField`,component:k,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Campo de formulario: label, TextInput / TextArea / Select / PhoneInput y supporting text. Appearances outlined y underline; estados default, error y disabled.`}}},argTypes:{label:{control:`text`,description:`Label visible`},supportingText:{control:`text`,description:`Texto de ayuda o error`},placeholder:{control:`text`},appearance:{control:`radio`,options:[`outlined`,`underline`],description:`Apariencia del control: outlined o underline`,table:{defaultValue:{summary:`outlined`}}},control:{control:`radio`,options:[`input`,`textarea`,`select`,`phone`],description:`Control interno: input, textarea, select o phone`,table:{defaultValue:{summary:`input`}}},multiline:{control:`boolean`,description:`Usa TextArea en lugar de TextInput`,table:{defaultValue:{summary:`false`}}},error:{control:`boolean`,description:`Error: supporting text + control en estado error`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}}}},F={docs:{canvas:{sourceState:`none`}}},I={maxWidth:360},L=[{value:`mty`,label:`Monterrey`},{value:`cdmx`,label:`Ciudad de México`},{value:`gdl`,label:`Guadalajara`}],R={args:{label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`,appearance:`outlined`,control:`input`,multiline:!1,error:!1,disabled:!1},render:e=>(0,N.jsx)(`div`,{style:I,children:(0,N.jsx)(k,{...e})})},z={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  label="Correo"
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,N.jsx)(`div`,{style:I,children:(0,N.jsx)(k,{label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})},B={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  label="Correo"
  error
  supportingText="Formato inválido"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,N.jsx)(`div`,{style:I,children:(0,N.jsx)(k,{label:`Correo`,error:!0,supportingText:`Formato inválido`,placeholder:`nombre@tec.mx`})})},V={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  appearance="underline"
  label="Correo"
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,N.jsx)(`div`,{style:I,children:(0,N.jsx)(k,{appearance:`underline`,label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})},H={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  label="Correo"
  disabled
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,N.jsx)(`div`,{style:I,children:(0,N.jsx)(k,{label:`Correo`,disabled:!0,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})},U={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  multiline
  label="Comentario"
  supportingText="Máximo 500 caracteres"
  placeholder="Escribe tu comentario"
/>`}}},render:()=>(0,N.jsx)(`div`,{style:I,children:(0,N.jsx)(k,{multiline:!0,label:`Comentario`,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`})})},W={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  control="select"
  label="Campus"
  supportingText="Lo define tu expediente"
  placeholder="Elige un campus"
  options={[
    { value: 'mty', label: 'Monterrey' },
    { value: 'cdmx', label: 'Ciudad de México' },
  ]}
/>`}}},render:()=>(0,N.jsx)(`div`,{style:I,children:(0,N.jsx)(k,{control:`select`,label:`Campus`,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:L})})},G={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  control="phone"
  label="Teléfono"
  supportingText="Incluye lada"
  placeholder="Número telefónico"
/>`}}},render:()=>(0,N.jsx)(`div`,{style:I,children:(0,N.jsx)(k,{control:`phone`,label:`Teléfono`,supportingText:`Incluye lada`,placeholder:`Número telefónico`})})},K={name:`States`,parameters:F,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280},r={fontFamily:`monospace`,fontSize:12,color:`#111`,fontWeight:700,textAlign:`left`,padding:`24px 0 8px`,borderBottom:`1px solid #ddd`},i=(e,r,i)=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{style:t,children:e}),(0,N.jsx)(`td`,{style:n,children:r}),(0,N.jsx)(`td`,{style:n,children:i})]}),a=e=>(0,N.jsx)(`tr`,{children:(0,N.jsx)(`td`,{colSpan:3,style:r,children:e})});return(0,N.jsx)(`div`,{style:{padding:8},children:(0,N.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,N.jsx)(`th`,{style:e,children:`Outlined`}),(0,N.jsx)(`th`,{style:e,children:`Underline`})]})}),(0,N.jsxs)(`tbody`,{children:[a(`Text Input`),i(`Default`,(0,N.jsx)(k,{label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`}),(0,N.jsx)(k,{appearance:`underline`,label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})),i(`Error`,(0,N.jsx)(k,{label:`Correo`,error:!0,supportingText:`Formato inválido`,placeholder:`nombre@tec.mx`}),(0,N.jsx)(k,{appearance:`underline`,label:`Correo`,error:!0,supportingText:`Formato inválido`,placeholder:`nombre@tec.mx`})),i(`Disabled`,(0,N.jsx)(k,{label:`Correo`,disabled:!0,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`}),(0,N.jsx)(k,{appearance:`underline`,label:`Correo`,disabled:!0,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})),a(`Phone Input`),i(`Default`,(0,N.jsx)(k,{control:`phone`,label:`Teléfono`,supportingText:`Incluye lada`,placeholder:`Número telefónico`}),(0,N.jsx)(k,{control:`phone`,appearance:`underline`,label:`Teléfono`,supportingText:`Incluye lada`,placeholder:`Número telefónico`})),i(`Error`,(0,N.jsx)(k,{control:`phone`,label:`Teléfono`,error:!0,supportingText:`Ingresa un número válido`,placeholder:`Número telefónico`}),(0,N.jsx)(k,{control:`phone`,appearance:`underline`,label:`Teléfono`,error:!0,supportingText:`Ingresa un número válido`,placeholder:`Número telefónico`})),i(`Disabled`,(0,N.jsx)(k,{control:`phone`,label:`Teléfono`,disabled:!0,supportingText:`Incluye lada`,placeholder:`Número telefónico`}),(0,N.jsx)(k,{control:`phone`,appearance:`underline`,label:`Teléfono`,disabled:!0,supportingText:`Incluye lada`,placeholder:`Número telefónico`})),a(`Text Area`),i(`Default`,(0,N.jsx)(k,{multiline:!0,label:`Comentario`,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`}),(0,N.jsx)(k,{multiline:!0,appearance:`underline`,label:`Comentario`,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`})),i(`Error`,(0,N.jsx)(k,{multiline:!0,label:`Comentario`,error:!0,supportingText:`El comentario es obligatorio`,placeholder:`Escribe tu comentario`}),(0,N.jsx)(k,{multiline:!0,appearance:`underline`,label:`Comentario`,error:!0,supportingText:`El comentario es obligatorio`,placeholder:`Escribe tu comentario`})),i(`Disabled`,(0,N.jsx)(k,{multiline:!0,label:`Comentario`,disabled:!0,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`}),(0,N.jsx)(k,{multiline:!0,appearance:`underline`,label:`Comentario`,disabled:!0,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`})),a(`Select`),i(`Default`,(0,N.jsx)(k,{control:`select`,label:`Campus`,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:L}),(0,N.jsx)(k,{control:`select`,appearance:`underline`,label:`Campus`,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:L})),i(`Error`,(0,N.jsx)(k,{control:`select`,label:`Campus`,error:!0,supportingText:`Selecciona un campus`,placeholder:`Elige un campus`,options:L}),(0,N.jsx)(k,{control:`select`,appearance:`underline`,label:`Campus`,error:!0,supportingText:`Selecciona un campus`,placeholder:`Elige un campus`,options:L})),i(`Disabled`,(0,N.jsx)(k,{control:`select`,label:`Campus`,disabled:!0,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:L}),(0,N.jsx)(k,{control:`select`,appearance:`underline`,label:`Campus`,disabled:!0,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:L}))]})]})})}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Correo',
    supportingText: 'Usa tu correo institucional',
    placeholder: 'nombre@tec.mx',
    appearance: 'outlined',
    control: 'input',
    multiline: false,
    error: false,
    disabled: false
  },
  render: args => <div style={fieldFrame}>\r
      <FormField {...args} />\r
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FormField
  appearance="underline"
  label="Correo"
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>\`
      }
    }
  },
  render: () => <div style={fieldFrame}>\r
      <FormField appearance="underline" label="Correo" supportingText="Usa tu correo institucional" placeholder="nombre@tec.mx" />\r
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FormField
  multiline
  label="Comentario"
  supportingText="Máximo 500 caracteres"
  placeholder="Escribe tu comentario"
/>\`
      }
    }
  },
  render: () => <div style={fieldFrame}>\r
      <FormField multiline label="Comentario" supportingText="Máximo 500 caracteres" placeholder="Escribe tu comentario" />\r
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FormField
  control="select"
  label="Campus"
  supportingText="Lo define tu expediente"
  placeholder="Elige un campus"
  options={[
    { value: 'mty', label: 'Monterrey' },
    { value: 'cdmx', label: 'Ciudad de México' },
  ]}
/>\`
      }
    }
  },
  render: () => <div style={fieldFrame}>\r
      <FormField control="select" label="Campus" supportingText="Lo define tu expediente" placeholder="Elige un campus" options={campusOptions} />\r
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FormField
  control="phone"
  label="Teléfono"
  supportingText="Incluye lada"
  placeholder="Número telefónico"
/>\`
      }
    }
  },
  render: () => <div style={fieldFrame}>\r
      <FormField control="phone" label="Teléfono" supportingText="Incluye lada" placeholder="Número telefónico" />\r
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    const section: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 12,
      color: '#111',
      fontWeight: 700,
      textAlign: 'left',
      padding: '24px 0 8px',
      borderBottom: '1px solid #ddd'
    };
    const pair = (label: string, outlined: React.ReactNode, underline: React.ReactNode) => <tr>\r
        <td style={rowLabel}>{label}</td>\r
        <td style={td}>{outlined}</td>\r
        <td style={td}>{underline}</td>\r
      </tr>;
    const heading = (title: string) => <tr>\r
        <td colSpan={3} style={section}>\r
          {title}\r
        </td>\r
      </tr>;
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
              <th style={th}>Outlined</th>\r
              <th style={th}>Underline</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {heading('Text Input')}\r
            {pair('Default', <FormField label="Correo" supportingText="Usa tu correo institucional" placeholder="nombre@tec.mx" />, <FormField appearance="underline" label="Correo" supportingText="Usa tu correo institucional" placeholder="nombre@tec.mx" />)}\r
            {pair('Error', <FormField label="Correo" error supportingText="Formato inválido" placeholder="nombre@tec.mx" />, <FormField appearance="underline" label="Correo" error supportingText="Formato inválido" placeholder="nombre@tec.mx" />)}\r
            {pair('Disabled', <FormField label="Correo" disabled supportingText="Usa tu correo institucional" placeholder="nombre@tec.mx" />, <FormField appearance="underline" label="Correo" disabled supportingText="Usa tu correo institucional" placeholder="nombre@tec.mx" />)}\r
\r
            {heading('Phone Input')}\r
            {pair('Default', <FormField control="phone" label="Teléfono" supportingText="Incluye lada" placeholder="Número telefónico" />, <FormField control="phone" appearance="underline" label="Teléfono" supportingText="Incluye lada" placeholder="Número telefónico" />)}\r
            {pair('Error', <FormField control="phone" label="Teléfono" error supportingText="Ingresa un número válido" placeholder="Número telefónico" />, <FormField control="phone" appearance="underline" label="Teléfono" error supportingText="Ingresa un número válido" placeholder="Número telefónico" />)}\r
            {pair('Disabled', <FormField control="phone" label="Teléfono" disabled supportingText="Incluye lada" placeholder="Número telefónico" />, <FormField control="phone" appearance="underline" label="Teléfono" disabled supportingText="Incluye lada" placeholder="Número telefónico" />)}\r
\r
            {heading('Text Area')}\r
            {pair('Default', <FormField multiline label="Comentario" supportingText="Máximo 500 caracteres" placeholder="Escribe tu comentario" />, <FormField multiline appearance="underline" label="Comentario" supportingText="Máximo 500 caracteres" placeholder="Escribe tu comentario" />)}\r
            {pair('Error', <FormField multiline label="Comentario" error supportingText="El comentario es obligatorio" placeholder="Escribe tu comentario" />, <FormField multiline appearance="underline" label="Comentario" error supportingText="El comentario es obligatorio" placeholder="Escribe tu comentario" />)}\r
            {pair('Disabled', <FormField multiline label="Comentario" disabled supportingText="Máximo 500 caracteres" placeholder="Escribe tu comentario" />, <FormField multiline appearance="underline" label="Comentario" disabled supportingText="Máximo 500 caracteres" placeholder="Escribe tu comentario" />)}\r
\r
            {heading('Select')}\r
            {pair('Default', <FormField control="select" label="Campus" supportingText="Lo define tu expediente" placeholder="Elige un campus" options={campusOptions} />, <FormField control="select" appearance="underline" label="Campus" supportingText="Lo define tu expediente" placeholder="Elige un campus" options={campusOptions} />)}\r
            {pair('Error', <FormField control="select" label="Campus" error supportingText="Selecciona un campus" placeholder="Elige un campus" options={campusOptions} />, <FormField control="select" appearance="underline" label="Campus" error supportingText="Selecciona un campus" placeholder="Elige un campus" options={campusOptions} />)}\r
            {pair('Disabled', <FormField control="select" label="Campus" disabled supportingText="Lo define tu expediente" placeholder="Elige un campus" options={campusOptions} />, <FormField control="select" appearance="underline" label="Campus" disabled supportingText="Lo define tu expediente" placeholder="Elige un campus" options={campusOptions} />)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q=[`Playground`,`Default`,`Error`,`Underline`,`Disabled`,`TextArea`,`Select`,`Phone`,`AllStates`]}))();export{K as AllStates,z as Default,H as Disabled,B as Error,G as Phone,R as Playground,W as Select,U as TextArea,V as Underline,q as __namedExportsOrder,P as default};