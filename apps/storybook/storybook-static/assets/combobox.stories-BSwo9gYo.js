import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{V as i,n as a}from"./icons-QF8wPxMP.js";import{F as o,I as s,L as c,P as l,t as u}from"./dist-C_I-8cI4.js";import{n as d,t as f}from"./utils-D8qMR3V9.js";import{t as p}from"./text-input-BV9h3jt_.js";import{t as m}from"./text-input-4jRxLs4t.js";import{n as h,t as g}from"./select.module-DsDFuNZ9.js";var _,v,y,b,x,S,C,w,T,E=e((()=>{_=`_root_jk2y1_7`,v=`_label_jk2y1_23`,y=`_supporting_jk2y1_43`,b=`_control_jk2y1_119`,x=`_input_jk2y1_189`,S=`_list_jk2y1_203`,C=`_options_jk2y1_217`,w=`_empty_jk2y1_231`,T={root:_,label:v,supporting:y,control:b,input:x,list:S,options:C,empty:w}}));function D(e,t){return t?e.find(e=>e.value===t)?.label??``:``}function O(e,t){let n=t.trim().toLocaleLowerCase(`es-MX`);return n?e.label.toLocaleLowerCase(`es-MX`).includes(n):!0}function k({label:e,supportingText:t,appearance:n=`outlined`,tone:r=`standard`,error:a=!1,disabled:u,placeholder:d,options:m,value:g,defaultValue:_,onValueChange:v,emptyText:y=`Sin resultados`,name:b,id:x,className:S,...C}){let w=A.useId(),E=A.useId(),k=x??E,M=t?`${k}-supporting`:void 0,N=a&&!u,P=A.useRef(null),F=g!==void 0,[I,L]=A.useState(_),R=F?g:I,[z,B]=A.useState(()=>D(m,R)),[V,H]=A.useState(!1),[U,W]=A.useState(0),G=A.useMemo(()=>m.filter(e=>O(e,z)),[m,z]);A.useEffect(()=>{B(D(m,R))},[m,R]),A.useEffect(()=>{W(0)},[z,V]);function K(e){F||L(e),v?.(e),B(D(m,e)),H(!1)}function q(e){G.length!==0&&W(t=>(t+e+G.length)%G.length)}function J(){let e=G[U];!e||e.disabled||K(e.value)}return(0,j.jsx)(`div`,{"data-slot":`combobox`,"data-appearance":n,"data-tone":r,"data-error":N?`true`:void 0,"data-disabled":u||void 0,className:f(T.root,S),...C,children:(0,j.jsxs)(c,{open:V,onOpenChange:H,children:[(0,j.jsx)(`label`,{htmlFor:k,className:T.label,children:e}),(0,j.jsx)(l,{asChild:!0,children:(0,j.jsx)(`div`,{ref:P,className:T.control,children:(0,j.jsx)(p,{id:k,embedded:!0,appearance:n,tone:r,error:a,disabled:u,placeholder:d,name:b,role:`combobox`,"aria-expanded":V,"aria-controls":w,"aria-autocomplete":`list`,"aria-activedescendant":V&&G[U]?`${w}-${G[U].value}`:void 0,"aria-describedby":M,autoComplete:`off`,value:z,className:T.input,onFocus:()=>{u||H(!0)},onChange:e=>{B(e.target.value),u||H(!0)},onKeyDown:e=>{e.key===`ArrowDown`?(e.preventDefault(),V?q(1):H(!0)):e.key===`ArrowUp`?(e.preventDefault(),V?q(-1):H(!0)):e.key===`Enter`?V&&G[U]&&(e.preventDefault(),J()):e.key===`Escape`&&H(!1)}})})}),t?(0,j.jsx)(`span`,{id:M,className:T.supporting,children:t}):null,(0,j.jsx)(s,{children:(0,j.jsx)(o,{"data-slot":`combobox-content`,className:f(h.content,T.list),side:`bottom`,align:`start`,sideOffset:4,onOpenAutoFocus:e=>e.preventDefault(),onCloseAutoFocus:e=>e.preventDefault(),onInteractOutside:e=>{P.current?.contains(e.target)&&e.preventDefault()},children:(0,j.jsx)(`ul`,{id:w,role:`listbox`,className:f(h.viewport,T.options),children:G.length===0?(0,j.jsx)(`li`,{className:T.empty,role:`presentation`,children:y}):G.map((e,t)=>{let n=e.value===R,r=t===U;return(0,j.jsxs)(`li`,{id:`${w}-${e.value}`,role:`option`,"aria-selected":n,"aria-disabled":e.disabled||void 0,"data-highlighted":r?``:void 0,"data-state":n?`checked`:void 0,"data-disabled":e.disabled||void 0,className:h.item,onMouseEnter:()=>{e.disabled||W(t)},onMouseDown:e=>e.preventDefault(),onClick:()=>{e.disabled||K(e.value)},children:[(0,j.jsx)(`span`,{"data-slot":`select-item-text`,children:e.label}),n?(0,j.jsx)(`span`,{className:h.itemIndicator,children:(0,j.jsx)(i,{})}):null]},e.value)})})})})]})})}var A,j,M=e((()=>{A=t(r(),1),u(),a(),d(),m(),g(),E(),j=n(),k.__docgenInfo={description:`Combobox: FormField (label + TextInput + supporting) y lista de opciones\r
con los mismos estilos del Select. Filtra al escribir.`,methods:[],displayName:`Combobox`,props:{label:{required:!0,tsType:{name:`string`},description:``},supportingText:{required:!1,tsType:{name:`string`},description:``},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'underline'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'underline'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`'standard' | 'inverse'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'standard'`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  value: string\r
  label: string\r
  disabled?: boolean\r
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`ComboboxOption[]`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},emptyText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Sin resultados'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},id:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}}));function N(e){return(0,F.jsx)(`div`,{style:B,children:(0,F.jsx)(k,{appearance:e.appearance,tone:e.tone,error:e.error,disabled:e.disabled,label:e.label??`Campus`,supportingText:e.supportingText??`Escribe para buscar`,placeholder:e.placeholder??`Buscar campus`,options:I})})}var P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{P=t(r(),1),M(),F=n(),I=[{value:`mty`,label:`Monterrey`},{value:`cdmx`,label:`Ciudad de México`},{value:`gdl`,label:`Guadalajara`},{value:`qro`,label:`Querétaro`},{value:`pue`,label:`Puebla`}],L={title:`Components/Inputs/Combobox`,component:k,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Campo de autocompletado: FormField (label, TextInput, supporting) y lista de opciones con los mismos estilos del Select. Filtra al escribir. Appearances outlined y underline; tones standard e inverse.`}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],table:{defaultValue:{summary:`outlined`}}},tone:{control:`radio`,options:[`standard`,`inverse`],table:{defaultValue:{summary:`standard`}}},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},label:{control:`text`},supportingText:{control:`text`},placeholder:{control:`text`}}},R={docs:{canvas:{sourceState:`shown`}}},z={docs:{canvas:{sourceState:`none`}}},B={maxWidth:360,minHeight:280},V=[e=>(0,F.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`,minWidth:360,minHeight:280},children:(0,F.jsx)(e,{})})],H={args:{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1,label:`Campus`,supportingText:`Escribe para buscar`,placeholder:`Buscar campus`},render:e=>(0,F.jsx)(N,{...e})},U={parameters:{...R,docs:{...R.docs,source:{code:`<Combobox
  label="Campus"
  supportingText="Escribe para buscar"
  placeholder="Buscar campus"
  options={campusOptions}
/>`}}},render:()=>(0,F.jsx)(N,{})},W={parameters:{...R,docs:{...R.docs,source:{code:`<Combobox
  appearance="underline"
  label="Campus"
  options={campusOptions}
/>`}}},render:()=>(0,F.jsx)(N,{appearance:`underline`})},G={parameters:{...R,docs:{...R.docs,source:{code:`<Combobox
  tone="inverse"
  label="Campus"
  options={campusOptions}
/>`}},backgrounds:{default:`dark`}},decorators:V,render:()=>(0,F.jsx)(N,{tone:`inverse`})},K={name:`Ejemplo de uso`,parameters:z,render:function(){let[e,t]=(0,P.useState)(`mty`);return(0,F.jsx)(`div`,{style:{maxWidth:360,minHeight:280},children:(0,F.jsx)(k,{label:`Campus`,supportingText:`Escribe para buscar`,placeholder:`Buscar campus`,options:I,value:e,onValueChange:t})})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    label: 'Campus',
    supportingText: 'Escribe para buscar',
    placeholder: 'Buscar campus'
  },
  render: args => <Specimen {...args} />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Combobox
  label="Campus"
  supportingText="Escribe para buscar"
  placeholder="Buscar campus"
  options={campusOptions}
/>\`
      }
    }
  },
  render: () => <Specimen />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Combobox
  appearance="underline"
  label="Campus"
  options={campusOptions}
/>\`
      }
    }
  },
  render: () => <Specimen appearance="underline" />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Combobox
  tone="inverse"
  label="Campus"
  options={campusOptions}
/>\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: function InContextStory() {
    const [value, setValue] = useState('mty');
    return <div style={{
      maxWidth: 360,
      minHeight: 280
    }}>\r
        <Combobox label="Campus" supportingText="Escribe para buscar" placeholder="Buscar campus" options={campusOptions} value={value} onValueChange={setValue} />\r
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q=[`Playground`,`Default`,`Underline`,`Inverse`,`InContext`]}))();export{U as Default,K as InContext,G as Inverse,H as Playground,W as Underline,q as __namedExportsOrder,L as default};