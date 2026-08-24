import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CFNdY8gy.js";import{k as i,n as a}from"./icons-ZEAiTreS.js";import{n as o,t as s}from"./utils-D8qMR3V9.js";import{t as c}from"./text-input-oAcDOiCx.js";import{t as l}from"./text-input-DbWVQkwA.js";var u,d,f,p,m,h,g,_=e((()=>{u=`_root_9eqm3_7`,d=`_label_9eqm3_23`,f=`_supporting_9eqm3_43`,p=`_control_9eqm3_119`,m=`_input_9eqm3_189`,h=`_trailing_9eqm3_215`,g={root:u,label:d,supporting:f,control:p,input:m,trailing:h}}));function v({label:e,supportingText:t,appearance:n=`outlined`,tone:r=`standard`,error:a=!1,disabled:o,timeLabel:l=`Abrir selector de hora`,className:u,id:d,...f}){let p=y.useRef(null),m=y.useId(),h=d??m,_=t?`${h}-supporting`:void 0,v=a&&!o;function x(){if(o)return;let e=p.current;if(e)try{e.showPicker?.()}catch{e.focus()}}return(0,b.jsxs)(`div`,{"data-slot":`time-field`,"data-appearance":n,"data-tone":r,"data-error":v?`true`:void 0,"data-disabled":o||void 0,className:s(g.root,u),children:[(0,b.jsx)(`label`,{htmlFor:h,className:g.label,children:e}),(0,b.jsxs)(`div`,{className:g.control,children:[(0,b.jsx)(c,{ref:p,id:h,type:`time`,embedded:!0,appearance:n,tone:r,error:a,disabled:o,"aria-describedby":_,className:g.input,...f}),(0,b.jsx)(`button`,{type:`button`,className:g.trailing,"aria-label":l,disabled:o,tabIndex:-1,onClick:x,children:(0,b.jsx)(i,{})})]}),t?(0,b.jsx)(`span`,{id:_,className:g.supporting,children:t}):null]})}var y,b,x=e((()=>{y=t(r(),1),a(),o(),l(),_(),b=n(),v.__docgenInfo={description:`Campo de hora: FormField (label + supporting) y TextInput type="time"\r
outlined | underline × standard | inverse. ClockIcon trailing.`,methods:[],displayName:`TimeField`,props:{label:{required:!0,tsType:{name:`string`},description:``},supportingText:{required:!1,tsType:{name:`string`},description:``},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'underline'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'underline'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`'standard' | 'inverse'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'standard'`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},timeLabel:{required:!1,tsType:{name:`string`},description:`Label accesible del ícono de tiempo.`,defaultValue:{value:`'Abrir selector de hora'`,computed:!1}}},composes:[`Omit`]}}));function S(e){return(0,C.jsx)(`div`,{style:D,children:(0,C.jsx)(v,{appearance:e.appearance,tone:e.tone,error:e.error,disabled:e.disabled,label:e.label??`Hora de inicio`,supportingText:e.supportingText??`Selecciona la hora`,defaultValue:e.defaultValue})})}var C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{x(),C=n(),w={title:`Components/Inputs/TimeField`,component:v,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'Campo de hora compuesto como FormField: label, TextInput `type="time"` y supporting. Appearances outlined y underline; tones standard e inverse. ClockIcon trailing (abre el picker nativo).'}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],table:{defaultValue:{summary:`outlined`}}},tone:{control:`radio`,options:[`standard`,`inverse`],table:{defaultValue:{summary:`standard`}}},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},label:{control:`text`},supportingText:{control:`text`}}},T={docs:{canvas:{sourceState:`shown`}}},E={docs:{canvas:{sourceState:`none`}}},D={maxWidth:360},O=[e=>(0,C.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`,minWidth:360},children:(0,C.jsx)(e,{})})],k={args:{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1,label:`Hora de inicio`,supportingText:`Selecciona la hora`},render:e=>(0,C.jsx)(S,{...e})},A={parameters:{...T,docs:{...T.docs,source:{code:`<TimeField
  label="Hora de inicio"
  supportingText="Selecciona la hora"
/>`}}},render:()=>(0,C.jsx)(S,{})},j={parameters:{...T,docs:{...T.docs,source:{code:`<TimeField
  appearance="underline"
  label="Hora de inicio"
  supportingText="Selecciona la hora"
/>`}}},render:()=>(0,C.jsx)(S,{appearance:`underline`})},M={parameters:{...T,docs:{...T.docs,source:{code:`<TimeField
  tone="inverse"
  label="Hora de inicio"
  supportingText="Selecciona la hora"
/>`}},backgrounds:{default:`dark`}},decorators:O,render:()=>(0,C.jsx)(S,{tone:`inverse`})},N={parameters:{...T,docs:{...T.docs,source:{code:`<TimeField
  error
  label="Hora de inicio"
  supportingText="La hora es obligatoria"
/>`}}},render:()=>(0,C.jsx)(S,{error:!0,supportingText:`La hora es obligatoria`})},P={parameters:{...T,docs:{...T.docs,source:{code:`<TimeField
  disabled
  label="Hora de inicio"
  supportingText="Selecciona la hora"
  defaultValue="09:30"
/>`}}},render:()=>(0,C.jsx)(S,{disabled:!0,defaultValue:`09:30`})},F={name:`Appearances & tones`,parameters:E,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={textAlign:`left`,verticalAlign:`middle`,padding:`16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280},n={...t,background:`var(--color-surface-brand-strong, #231f20)`};return(0,C.jsx)(`div`,{style:{padding:8},children:(0,C.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,C.jsx)(`thead`,{children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{style:e,children:` `}),(0,C.jsx)(`th`,{style:e,children:`Standard`}),(0,C.jsx)(`th`,{style:e,children:`Inverse`})]})}),(0,C.jsxs)(`tbody`,{children:[(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{style:{...e,paddingTop:16},children:`Outlined`}),(0,C.jsx)(`td`,{style:t,children:(0,C.jsx)(S,{appearance:`outlined`,defaultValue:`09:30`})}),(0,C.jsx)(`td`,{style:n,children:(0,C.jsx)(S,{appearance:`outlined`,tone:`inverse`,defaultValue:`09:30`})})]}),(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{style:e,children:`Outlined disabled`}),(0,C.jsx)(`td`,{style:t,children:(0,C.jsx)(S,{appearance:`outlined`,defaultValue:`09:30`,disabled:!0})}),(0,C.jsx)(`td`,{style:n,children:(0,C.jsx)(S,{appearance:`outlined`,tone:`inverse`,defaultValue:`09:30`,disabled:!0})})]}),(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{style:e,children:`Underline`}),(0,C.jsx)(`td`,{style:t,children:(0,C.jsx)(S,{appearance:`underline`,defaultValue:`09:30`})}),(0,C.jsx)(`td`,{style:n,children:(0,C.jsx)(S,{appearance:`underline`,tone:`inverse`,defaultValue:`09:30`})})]}),(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{style:{...e,borderBottom:`none`},children:`Underline disabled`}),(0,C.jsx)(`td`,{style:{...t,borderBottom:`none`},children:(0,C.jsx)(S,{appearance:`underline`,defaultValue:`09:30`,disabled:!0})}),(0,C.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,C.jsx)(S,{appearance:`underline`,tone:`inverse`,defaultValue:`09:30`,disabled:!0})})]})]})]})})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    label: 'Hora de inicio',
    supportingText: 'Selecciona la hora'
  },
  render: args => <Specimen {...args} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TimeField
  label="Hora de inicio"
  supportingText="Selecciona la hora"
/>\`
      }
    }
  },
  render: () => <Specimen />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TimeField
  appearance="underline"
  label="Hora de inicio"
  supportingText="Selecciona la hora"
/>\`
      }
    }
  },
  render: () => <Specimen appearance="underline" />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TimeField
  tone="inverse"
  label="Hora de inicio"
  supportingText="Selecciona la hora"
/>\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TimeField
  error
  label="Hora de inicio"
  supportingText="La hora es obligatoria"
/>\`
      }
    }
  },
  render: () => <Specimen error supportingText="La hora es obligatoria" />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<TimeField
  disabled
  label="Hora de inicio"
  supportingText="Selecciona la hora"
  defaultValue="09:30"
/>\`
      }
    }
  },
  render: () => <Specimen disabled defaultValue="09:30" />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Appearances & tones',
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
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 280
    };
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)'
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={th}> </th>\r
              <th style={th}>Standard</th>\r
              <th style={th}>Inverse</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={{
              ...th,
              paddingTop: 16
            }}>Outlined</td>\r
              <td style={td}>\r
                <Specimen appearance="outlined" defaultValue="09:30" />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen appearance="outlined" tone="inverse" defaultValue="09:30" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={th}>Outlined disabled</td>\r
              <td style={td}>\r
                <Specimen appearance="outlined" defaultValue="09:30" disabled />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen appearance="outlined" tone="inverse" defaultValue="09:30" disabled />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={th}>Underline</td>\r
              <td style={td}>\r
                <Specimen appearance="underline" defaultValue="09:30" />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen appearance="underline" tone="inverse" defaultValue="09:30" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...th,
              borderBottom: 'none'
            }}>Underline disabled</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <Specimen appearance="underline" defaultValue="09:30" disabled />\r
              </td>\r
              <td style={{
              ...tdInverse,
              borderBottom: 'none'
            }}>\r
                <Specimen appearance="underline" tone="inverse" defaultValue="09:30" disabled />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...F.parameters?.docs?.source}}},I=[`Playground`,`Default`,`Underline`,`Inverse`,`Error`,`Disabled`,`AllAppearances`]}))();export{F as AllAppearances,A as Default,P as Disabled,N as Error,M as Inverse,k as Playground,j as Underline,I as __namedExportsOrder,w as default};