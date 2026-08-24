import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CFNdY8gy.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";import{t as o}from"./text-input-oAcDOiCx.js";import{t as s}from"./text-input-DbWVQkwA.js";import{a as c,i as l,n as u,r as d,t as f}from"./select-Dp7O8lQr.js";import{n as p,r as m,t as h}from"./phone-input-BvqUogyo.js";import{n as g,t as _}from"./text-area-BtQuVjaC.js";var v=e((()=>{p()})),y=e((()=>{g()})),b,x,S,C,w=e((()=>{b=`_root_1rx1c_3`,x=`_label_1rx1c_19`,S=`_supporting_1rx1c_39`,C={root:b,label:x,supporting:S}}));function T({label:e,supportingText:t,appearance:n=`outlined`,tone:r=`standard`,control:i,multiline:s=!1,rows:p,options:m,value:g,defaultValue:v,onValueChange:y,country:b,defaultCountry:x,onCountryChange:S,countries:w,error:T=!1,id:O,className:k,disabled:A,type:j,placeholder:M,...N}){let P=E.useId(),F=O??P,I=t?`${F}-supporting`:void 0,L=i??(s?`textarea`:`input`),R={id:F,appearance:n,tone:r,error:T,disabled:A,"aria-describedby":I};return(0,D.jsxs)(`div`,{"data-slot":`form-field`,"data-tone":r,"data-error":T&&!A?`true`:`false`,"data-disabled":A||void 0,className:a(C.root,k),children:[(0,D.jsx)(`label`,{htmlFor:F,className:C.label,children:e}),L===`phone`?(0,D.jsx)(h,{...R,country:b,defaultCountry:x,onCountryChange:S,countries:w,placeholder:M,value:g,defaultValue:v,...N}):L===`select`?(0,D.jsxs)(f,{value:g,defaultValue:v,onValueChange:y,disabled:A,children:[(0,D.jsx)(l,{...R,children:(0,D.jsx)(c,{placeholder:M})}),(0,D.jsx)(u,{children:m?.map(e=>(0,D.jsx)(d,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]}):L===`textarea`?(0,D.jsx)(_,{rows:p,placeholder:M,value:g,defaultValue:v,...R,...N}):(0,D.jsx)(o,{type:j,placeholder:M,value:g,defaultValue:v,...R,...N}),t?(0,D.jsx)(`span`,{id:I,className:C.supporting,children:t}):null]})}var E,D,O=e((()=>{E=t(r(),1),i(),v(),m(),y(),s(),w(),D=n(),T.__docgenInfo={description:`Campo de formulario: label, TextInput / TextArea / Select / PhoneInput y supporting text.\r
Appearances: outlined, underline. Tones: standard, inverse. Estados: default, error, disabled.`,methods:[],displayName:`FormField`,props:{label:{required:!0,tsType:{name:`string`},description:`Label visible (Semantic/Label/Medium/Strong).`},supportingText:{required:!1,tsType:{name:`string`},description:`Texto de ayuda o error (Semantic/Label/Small).`},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'underline'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'underline'`}]},description:`Apariencia del control interno.`,defaultValue:{value:`'outlined'`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`'standard' | 'inverse'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'inverse'`}]},description:"`standard` sobre superficies claras · `inverse` sobre oscuras / brand.",defaultValue:{value:`'standard'`,computed:!1}},control:{required:!1,tsType:{name:`union`,raw:`'input' | 'textarea' | 'select' | 'phone'`,elements:[{name:`literal`,value:`'input'`},{name:`literal`,value:`'textarea'`},{name:`literal`,value:`'select'`},{name:`literal`,value:`'phone'`}]},description:"Control interno. `multiline` equivale a `textarea`."},multiline:{required:!1,tsType:{name:`boolean`},description:`Usa TextArea en lugar de TextInput.`,defaultValue:{value:`false`,computed:!1}},rows:{required:!1,tsType:{name:`number`},description:`Filas iniciales del TextArea.`},options:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  value: string\r
  label: React.ReactNode\r
  disabled?: boolean\r
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`FormFieldOption[]`},description:'Opciones cuando `control="select"`.'},value:{required:!1,tsType:{name:`string`},description:`Valor del Select (controlado).`},defaultValue:{required:!1,tsType:{name:`string`},description:`Valor inicial del Select (no controlado).`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Cambio de valor del Select.`},country:{required:!1,tsType:{name:`string`},description:'País seleccionado cuando `control="phone"`.'},defaultCountry:{required:!1,tsType:{name:`string`},description:``},onCountryChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(country: string) => void`,signature:{arguments:[{type:{name:`string`},name:`country`}],return:{name:`void`}}},description:``},countries:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  value: string\r
  dialCode: string\r
  label: string\r
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`dialCode`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`PhoneCountry[]`},description:``},error:{required:!1,tsType:{name:`boolean`},description:`Error: supporting text + control en estado error.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled: el input no recibe interacción; el supporting text usa color disabled.`}},composes:[`Omit`]}})),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{O(),k=n(),A={title:`Components/Form Controls/FormField`,component:T,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Campo de formulario: label, TextInput / TextArea / Select / PhoneInput y supporting text. Appearances outlined y underline; estados default, error y disabled.`}}},argTypes:{label:{control:`text`,description:`Label visible`},supportingText:{control:`text`,description:`Texto de ayuda o error`},placeholder:{control:`text`},appearance:{control:`radio`,options:[`outlined`,`underline`],description:`Apariencia del control: outlined o underline`,table:{defaultValue:{summary:`outlined`}}},control:{control:`radio`,options:[`input`,`textarea`,`select`,`phone`],description:`Control interno: input, textarea, select o phone`,table:{defaultValue:{summary:`input`}}},multiline:{control:`boolean`,description:`Usa TextArea en lugar de TextInput`,table:{defaultValue:{summary:`false`}}},error:{control:`boolean`,description:`Error: supporting text + control en estado error`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}}}},j={docs:{canvas:{sourceState:`none`}}},M={maxWidth:360},N=[{value:`mty`,label:`Monterrey`},{value:`cdmx`,label:`Ciudad de México`},{value:`gdl`,label:`Guadalajara`}],P={args:{label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`,appearance:`outlined`,control:`input`,multiline:!1,error:!1,disabled:!1},render:e=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{...e})})},F={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  label="Correo"
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})},I={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  label="Correo"
  error
  supportingText="Formato inválido"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{label:`Correo`,error:!0,supportingText:`Formato inválido`,placeholder:`nombre@tec.mx`})})},L={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  appearance="underline"
  label="Correo"
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{appearance:`underline`,label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})},R={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  label="Correo"
  disabled
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`}}},render:()=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{label:`Correo`,disabled:!0,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})})},z={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  multiline
  label="Comentario"
  supportingText="Máximo 500 caracteres"
  placeholder="Escribe tu comentario"
/>`}}},render:()=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{multiline:!0,label:`Comentario`,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`})})},B={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  control="select"
  label="Campus"
  supportingText="Lo define tu expediente"
  placeholder="Elige un campus"
  options={[
    { value: 'mty', label: 'Monterrey' },
    { value: 'cdmx', label: 'Ciudad de México' },
  ]}
/>`}}},render:()=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{control:`select`,label:`Campus`,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:N})})},V={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FormField
  control="phone"
  label="Teléfono"
  supportingText="Incluye lada"
  placeholder="Número telefónico"
/>`}}},render:()=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{control:`phone`,label:`Teléfono`,supportingText:`Incluye lada`,placeholder:`Número telefónico`})})},H={name:`States`,parameters:j,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280},r={fontFamily:`monospace`,fontSize:12,color:`#111`,fontWeight:700,textAlign:`left`,padding:`24px 0 8px`,borderBottom:`1px solid #ddd`},i=(e,r,i)=>(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{style:t,children:e}),(0,k.jsx)(`td`,{style:n,children:r}),(0,k.jsx)(`td`,{style:n,children:i})]}),a=e=>(0,k.jsx)(`tr`,{children:(0,k.jsx)(`td`,{colSpan:3,style:r,children:e})});return(0,k.jsx)(`div`,{style:{padding:8},children:(0,k.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,k.jsx)(`thead`,{children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,k.jsx)(`th`,{style:e,children:`Outlined`}),(0,k.jsx)(`th`,{style:e,children:`Underline`})]})}),(0,k.jsxs)(`tbody`,{children:[a(`Text Input`),i(`Default`,(0,k.jsx)(T,{label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`}),(0,k.jsx)(T,{appearance:`underline`,label:`Correo`,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})),i(`Error`,(0,k.jsx)(T,{label:`Correo`,error:!0,supportingText:`Formato inválido`,placeholder:`nombre@tec.mx`}),(0,k.jsx)(T,{appearance:`underline`,label:`Correo`,error:!0,supportingText:`Formato inválido`,placeholder:`nombre@tec.mx`})),i(`Disabled`,(0,k.jsx)(T,{label:`Correo`,disabled:!0,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`}),(0,k.jsx)(T,{appearance:`underline`,label:`Correo`,disabled:!0,supportingText:`Usa tu correo institucional`,placeholder:`nombre@tec.mx`})),a(`Phone Input`),i(`Default`,(0,k.jsx)(T,{control:`phone`,label:`Teléfono`,supportingText:`Incluye lada`,placeholder:`Número telefónico`}),(0,k.jsx)(T,{control:`phone`,appearance:`underline`,label:`Teléfono`,supportingText:`Incluye lada`,placeholder:`Número telefónico`})),i(`Error`,(0,k.jsx)(T,{control:`phone`,label:`Teléfono`,error:!0,supportingText:`Ingresa un número válido`,placeholder:`Número telefónico`}),(0,k.jsx)(T,{control:`phone`,appearance:`underline`,label:`Teléfono`,error:!0,supportingText:`Ingresa un número válido`,placeholder:`Número telefónico`})),i(`Disabled`,(0,k.jsx)(T,{control:`phone`,label:`Teléfono`,disabled:!0,supportingText:`Incluye lada`,placeholder:`Número telefónico`}),(0,k.jsx)(T,{control:`phone`,appearance:`underline`,label:`Teléfono`,disabled:!0,supportingText:`Incluye lada`,placeholder:`Número telefónico`})),a(`Text Area`),i(`Default`,(0,k.jsx)(T,{multiline:!0,label:`Comentario`,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`}),(0,k.jsx)(T,{multiline:!0,appearance:`underline`,label:`Comentario`,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`})),i(`Error`,(0,k.jsx)(T,{multiline:!0,label:`Comentario`,error:!0,supportingText:`El comentario es obligatorio`,placeholder:`Escribe tu comentario`}),(0,k.jsx)(T,{multiline:!0,appearance:`underline`,label:`Comentario`,error:!0,supportingText:`El comentario es obligatorio`,placeholder:`Escribe tu comentario`})),i(`Disabled`,(0,k.jsx)(T,{multiline:!0,label:`Comentario`,disabled:!0,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`}),(0,k.jsx)(T,{multiline:!0,appearance:`underline`,label:`Comentario`,disabled:!0,supportingText:`Máximo 500 caracteres`,placeholder:`Escribe tu comentario`})),a(`Select`),i(`Default`,(0,k.jsx)(T,{control:`select`,label:`Campus`,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:N}),(0,k.jsx)(T,{control:`select`,appearance:`underline`,label:`Campus`,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:N})),i(`Error`,(0,k.jsx)(T,{control:`select`,label:`Campus`,error:!0,supportingText:`Selecciona un campus`,placeholder:`Elige un campus`,options:N}),(0,k.jsx)(T,{control:`select`,appearance:`underline`,label:`Campus`,error:!0,supportingText:`Selecciona un campus`,placeholder:`Elige un campus`,options:N})),i(`Disabled`,(0,k.jsx)(T,{control:`select`,label:`Campus`,disabled:!0,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:N}),(0,k.jsx)(T,{control:`select`,appearance:`underline`,label:`Campus`,disabled:!0,supportingText:`Lo define tu expediente`,placeholder:`Elige un campus`,options:N}))]})]})})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Playground`,`Default`,`Error`,`Underline`,`Disabled`,`TextArea`,`Select`,`Phone`,`AllStates`]}))();export{H as AllStates,F as Default,R as Disabled,I as Error,V as Phone,P as Playground,B as Select,z as TextArea,L as Underline,U as __namedExportsOrder,A as default};