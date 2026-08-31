import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,rt as a}from"./icons-QF8wPxMP.js";import{F as o,I as s,L as c,P as l,t as u}from"./dist-C_I-8cI4.js";import{n as d,t as f}from"./utils-D8qMR3V9.js";import{n as p,t as m}from"./calendar-CcWcdUlt.js";import{t as h}from"./text-input-BV9h3jt_.js";import{t as g}from"./text-input-4jRxLs4t.js";var _=e((()=>{p()})),v,y,b,x,S,C,w,T=e((()=>{v=`_root_4hr34_7`,y=`_label_4hr34_23`,b=`_supporting_4hr34_43`,x=`_control_4hr34_119`,S=`_input_4hr34_189`,C=`_trailing_4hr34_215`,w={root:v,label:y,supporting:b,control:x,input:S,trailing:C}}));function E({label:e,supportingText:t,appearance:n=`outlined`,tone:r=`standard`,error:i=!1,disabled:o,calendarLabel:s=`Abrir calendario`,onCalendarClick:c,calendarExpanded:l,nativePicker:u=!0,className:d,id:p,onClick:m,...g}){let _=D.useRef(null),v=D.useId(),y=p??v,b=t?`${y}-supporting`:void 0,x=i&&!o;function S(e){if(o)return;if(c){c(e);return}let t=_.current;if(t)try{t.showPicker?.()}catch{t.focus()}}return(0,O.jsxs)(`div`,{"data-slot":`date-field`,"data-appearance":n,"data-tone":r,"data-error":x?`true`:void 0,"data-disabled":o||void 0,className:f(w.root,d),children:[(0,O.jsx)(`label`,{htmlFor:y,className:w.label,children:e}),(0,O.jsxs)(`div`,{className:w.control,children:[(0,O.jsx)(h,{ref:_,id:y,type:`date`,embedded:!0,appearance:n,tone:r,error:i,disabled:o,"aria-describedby":b,className:w.input,...g,onClick:e=>{m?.(e),u||e.preventDefault()}}),(0,O.jsx)(`button`,{type:`button`,className:w.trailing,"aria-label":s,"aria-haspopup":c?`dialog`:void 0,"aria-expanded":c?!!l:void 0,disabled:o,tabIndex:c?0:-1,onClick:S,children:(0,O.jsx)(a,{})})]}),t?(0,O.jsx)(`span`,{id:b,className:w.supporting,children:t}):null]})}var D,O,k=e((()=>{D=t(r(),1),i(),d(),g(),T(),O=n(),E.__docgenInfo={description:`Campo de fecha: FormField (label + supporting) y TextInput type="date"\r
outlined | underline × standard | inverse. CalendarIcon trailing.\r
Por defecto abre el picker nativo; DatePicker pasa onCalendarClick.`,methods:[],displayName:`DateField`,props:{label:{required:!0,tsType:{name:`string`},description:``},supportingText:{required:!1,tsType:{name:`string`},description:``},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'underline'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'underline'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`'standard' | 'inverse'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'standard'`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},calendarLabel:{required:!1,tsType:{name:`string`},description:`Label accesible del ícono de calendario.`,defaultValue:{value:`'Abrir calendario'`,computed:!1}},onCalendarClick:{required:!1,tsType:{name:`ReactMouseEventHandler`,raw:`React.MouseEventHandler<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},description:`Si se pasa, el ícono no abre el picker nativo.`},calendarExpanded:{required:!1,tsType:{name:`boolean`},description:"`aria-expanded` del ícono cuando un popup controla la apertura."},nativePicker:{required:!1,tsType:{name:`boolean`},description:"`false` evita el date picker nativo (lo usa DatePicker).",defaultValue:{value:`true`,computed:!1}}},composes:[`Omit`]}})),A=e((()=>{k()})),j,M,N,P,ee=e((()=>{j=`_root_1b8hz_1`,M=`_anchor_1b8hz_11`,N=`_content_1b8hz_19`,P={root:j,anchor:M,content:N}}));function F(e){return`${String(e.getFullYear())}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function te(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return;let[t,n,r]=e.split(`-`);if(!t||!n||!r)return;let i=Number(t),a=Number(n),o=Number(r),s=new Date(i,a-1,o);if(!(s.getFullYear()!==i||s.getMonth()!==a-1||s.getDate()!==o))return s}function I({label:e,supportingText:t,appearance:n=`outlined`,tone:r=`standard`,error:i=!1,disabled:a,value:u,defaultValue:d,onValueChange:p,minDate:h,maxDate:g,locale:_=`es-MX`,calendarLabel:v,name:y,id:b,className:x,...S}){let C=L.useRef(null),[w,T]=L.useState(!1),[D,O]=L.useState(d),k=u??D;function A(e){u??O(e),p?.(e)}function j(e){A(e.target.value?te(e.target.value):void 0)}return(0,R.jsx)(`div`,{"data-slot":`date-picker`,"data-appearance":n,"data-tone":r,className:f(P.root,x),...S,children:(0,R.jsxs)(c,{open:w,onOpenChange:e=>{a||T(e)},children:[(0,R.jsx)(l,{asChild:!0,children:(0,R.jsx)(`div`,{ref:C,className:P.anchor,children:(0,R.jsx)(E,{label:e,supportingText:t,appearance:n,tone:r,error:i,disabled:a,calendarLabel:v,nativePicker:!1,calendarExpanded:w,onCalendarClick:()=>{a||T(e=>!e)},value:k?F(k):``,onChange:j,min:h?F(h):void 0,max:g?F(g):void 0,name:y,id:b})})}),(0,R.jsx)(s,{children:(0,R.jsx)(o,{"data-slot":`date-picker-content`,className:P.content,side:`bottom`,align:`start`,sideOffset:8,onOpenAutoFocus:e=>e.preventDefault(),onInteractOutside:e=>{C.current?.contains(e.target)&&e.preventDefault()},children:(0,R.jsx)(m,{value:k??null,onValueChange:e=>{A(e),T(!1)},defaultMonth:k,minDate:h,maxDate:g,locale:_})})})]})})}var L,R,ne=e((()=>{L=t(r(),1),u(),d(),_(),A(),ee(),R=n(),I.__docgenInfo={description:`Date Picker: DateField + Calendar en Popover (Radix).\r
El ícono abre el calendario; elegir un día cierra y actualiza el campo.`,methods:[],displayName:`DatePicker`,props:{label:{required:!0,tsType:{name:`string`},description:``},supportingText:{required:!1,tsType:{name:`string`},description:``},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'underline'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'underline'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`'standard' | 'inverse'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'standard'`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},value:{required:!1,tsType:{name:`Date`},description:``},defaultValue:{required:!1,tsType:{name:`Date`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`Date | undefined`,elements:[{name:`Date`},{name:`undefined`}]},name:`date`}],return:{name:`void`}}},description:``},minDate:{required:!1,tsType:{name:`Date`},description:``},maxDate:{required:!1,tsType:{name:`Date`},description:``},locale:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'es-MX'`,computed:!1}},calendarLabel:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},id:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}}));function z(e){return(0,V.jsx)(`div`,{style:G,children:(0,V.jsx)(I,{appearance:e.appearance,tone:e.tone,error:e.error,disabled:e.disabled,label:e.label??`Fecha de inicio`,supportingText:e.supportingText??`Selecciona el día`,defaultValue:e.defaultValue})})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{B=t(r(),1),ne(),V=n(),H={title:`Components/Inputs/DatePicker`,component:I,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Selector de fecha: DateField + Calendar en un Popover de Radix. El ícono abre el calendario; al elegir un día se cierra y se actualiza el campo. Appearances outlined y underline; tones standard e inverse.`}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],table:{defaultValue:{summary:`outlined`}}},tone:{control:`radio`,options:[`standard`,`inverse`],table:{defaultValue:{summary:`standard`}}},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},label:{control:`text`},supportingText:{control:`text`}}},U={docs:{canvas:{sourceState:`shown`}}},W={docs:{canvas:{sourceState:`none`}}},G={maxWidth:360,minHeight:420},K=[e=>(0,V.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`,minWidth:360,minHeight:420},children:(0,V.jsx)(e,{})})],q={args:{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1,label:`Fecha de inicio`,supportingText:`Selecciona el día`},render:e=>(0,V.jsx)(z,{...e,defaultValue:new Date(2026,7,12)})},J={parameters:{...U,docs:{...U.docs,source:{code:`<DatePicker
  label="Fecha de inicio"
  supportingText="Selecciona el día"
/>`}}},render:()=>(0,V.jsx)(z,{defaultValue:new Date(2026,7,12)})},Y={parameters:{...U,docs:{...U.docs,source:{code:`<DatePicker
  appearance="underline"
  label="Fecha de inicio"
  supportingText="Selecciona el día"
/>`}}},render:()=>(0,V.jsx)(z,{appearance:`underline`,defaultValue:new Date(2026,7,12)})},X={parameters:{...U,docs:{...U.docs,source:{code:`<DatePicker
  tone="inverse"
  label="Fecha de inicio"
  supportingText="Selecciona el día"
/>`}},backgrounds:{default:`dark`}},decorators:K,render:()=>(0,V.jsx)(z,{tone:`inverse`,defaultValue:new Date(2026,7,12)})},Z={parameters:{...U,docs:{...U.docs,source:{code:`<DatePicker
  disabled
  label="Fecha de inicio"
  defaultValue={new Date(2026, 7, 12)}
/>`}}},render:()=>(0,V.jsx)(z,{disabled:!0,defaultValue:new Date(2026,7,12)})},Q={name:`Ejemplo de uso`,parameters:W,render:function(){let[e,t]=(0,B.useState)(new Date(2026,7,12));return(0,V.jsx)(`div`,{style:{maxWidth:360},children:(0,V.jsx)(I,{label:`Fecha de inicio`,supportingText:`Selecciona el día`,value:e,onValueChange:t})})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    label: 'Fecha de inicio',
    supportingText: 'Selecciona el día'
  },
  render: args => <Specimen {...args} defaultValue={new Date(2026, 7, 12)} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<DatePicker
  label="Fecha de inicio"
  supportingText="Selecciona el día"
/>\`
      }
    }
  },
  render: () => <Specimen defaultValue={new Date(2026, 7, 12)} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<DatePicker
  appearance="underline"
  label="Fecha de inicio"
  supportingText="Selecciona el día"
/>\`
      }
    }
  },
  render: () => <Specimen appearance="underline" defaultValue={new Date(2026, 7, 12)} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<DatePicker
  tone="inverse"
  label="Fecha de inicio"
  supportingText="Selecciona el día"
/>\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" defaultValue={new Date(2026, 7, 12)} />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<DatePicker
  disabled
  label="Fecha de inicio"
  defaultValue={new Date(2026, 7, 12)}
/>\`
      }
    }
  },
  render: () => <Specimen disabled defaultValue={new Date(2026, 7, 12)} />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: function InContextStory() {
    const [value, setValue] = useState<Date | undefined>(new Date(2026, 7, 12));
    return <div style={{
      maxWidth: 360
    }}>\r
        <DatePicker label="Fecha de inicio" supportingText="Selecciona el día" value={value} onValueChange={setValue} />\r
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`Default`,`Underline`,`Inverse`,`Disabled`,`InContext`]}))();export{J as Default,Z as Disabled,Q as InContext,X as Inverse,q as Playground,Y as Underline,$ as __namedExportsOrder,H as default};