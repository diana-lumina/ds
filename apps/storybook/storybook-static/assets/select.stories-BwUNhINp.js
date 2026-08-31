import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./select-BFBL9yo-.js";function u({appearance:e=`outlined`,tone:t=`standard`,error:n=!1,disabled:r=!1,placeholder:s=`Elige un campus`}){let[u,p]=(0,d.useState)();return(0,f.jsx)(`div`,{style:g,children:(0,f.jsxs)(l,{value:u,onValueChange:p,disabled:r,children:[(0,f.jsx)(a,{appearance:e,tone:t,error:n,"aria-label":`Campus`,children:(0,f.jsx)(i,{placeholder:s})}),(0,f.jsxs)(o,{children:[(0,f.jsx)(c,{value:`mty`,children:`Monterrey`}),(0,f.jsx)(c,{value:`cdmx`,children:`Ciudad de México`}),(0,f.jsx)(c,{value:`gdl`,children:`Guadalajara`})]})]})})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{d=t(r(),1),s(),f=n(),p={title:`Components/Inputs/Select`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:``}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],table:{defaultValue:{summary:`outlined`}}},tone:{control:`radio`,options:[`standard`,`inverse`],description:`standard sobre superficies claras · inverse sobre oscuras / brand.`,table:{defaultValue:{summary:`standard`}}},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},placeholder:{control:`text`}}},m={docs:{canvas:{sourceState:`none`}}},h={docs:{canvas:{sourceState:`shown`}}},g={maxWidth:360},_=[e=>(0,f.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`,minWidth:360},children:(0,f.jsx)(e,{})})],v={args:{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1,placeholder:`Elige un campus`},render:e=>(0,f.jsx)(u,{...e})},y={parameters:{...h,docs:{...h.docs,source:{code:`<Select>
  <SelectTrigger aria-label="Campus">
    <SelectValue placeholder="Elige un campus" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="mty">Monterrey</SelectItem>
  </SelectContent>
</Select>`}}},render:()=>(0,f.jsx)(u,{})},b={parameters:{...h,docs:{...h.docs,source:{code:`<SelectTrigger tone="inverse" aria-label="Campus">
  <SelectValue placeholder="Elige un campus" />
</SelectTrigger>`}},backgrounds:{default:`dark`}},decorators:_,render:()=>(0,f.jsx)(u,{tone:`inverse`})},x={parameters:{...h,docs:{...h.docs,source:{code:`<SelectTrigger appearance="underline" aria-label="Campus">
  <SelectValue placeholder="Elige un campus" />
</SelectTrigger>`}}},render:()=>(0,f.jsx)(u,{appearance:`underline`})},S={render:()=>(0,f.jsx)(u,{error:!0})},C={render:()=>(0,f.jsx)(u,{disabled:!0})},w={name:`States`,parameters:m,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:240},r={...n,background:`var(--color-surface-brand-strong, #231f20)`},i=[[`Default`,{error:!1,disabled:!1}],[`Error`,{error:!0,disabled:!1}],[`Disabled`,{error:!1,disabled:!0}]];return(0,f.jsx)(`div`,{style:{padding:8},children:(0,f.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,f.jsx)(`th`,{style:e,children:`Outlined standard`}),(0,f.jsx)(`th`,{style:e,children:`Outlined inverse`}),(0,f.jsx)(`th`,{style:e,children:`Underline standard`}),(0,f.jsx)(`th`,{style:e,children:`Underline inverse`})]})}),(0,f.jsx)(`tbody`,{children:i.map(([e,i])=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{style:t,children:e}),(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(u,{appearance:`outlined`,tone:`standard`,placeholder:`Elige un campus`,...i})}),(0,f.jsx)(`td`,{style:r,children:(0,f.jsx)(u,{appearance:`outlined`,tone:`inverse`,placeholder:`Elige un campus`,...i})}),(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(u,{appearance:`underline`,tone:`standard`,placeholder:`Elige un campus`,...i})}),(0,f.jsx)(`td`,{style:r,children:(0,f.jsx)(u,{appearance:`underline`,tone:`inverse`,placeholder:`Elige un campus`,...i})})]},e))})]})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    placeholder: 'Elige un campus'
  },
  render: args => <Specimen {...args} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Select>
  <SelectTrigger aria-label="Campus">
    <SelectValue placeholder="Elige un campus" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="mty">Monterrey</SelectItem>
  </SelectContent>
</Select>\`
      }
    }
  },
  render: () => <Specimen />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<SelectTrigger tone="inverse" aria-label="Campus">
  <SelectValue placeholder="Elige un campus" />
</SelectTrigger>\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<SelectTrigger appearance="underline" aria-label="Campus">
  <SelectValue placeholder="Elige un campus" />
</SelectTrigger>\`
      }
    }
  },
  render: () => <Specimen appearance="underline" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen error />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen disabled />
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
      minWidth: 240
    };
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)'
    };
    const states = [['Default', {
      error: false,
      disabled: false
    }], ['Error', {
      error: true,
      disabled: false
    }], ['Disabled', {
      error: false,
      disabled: true
    }]] as const;
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
              <th style={th}>Outlined standard</th>\r
              <th style={th}>Outlined inverse</th>\r
              <th style={th}>Underline standard</th>\r
              <th style={th}>Underline inverse</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {states.map(([label, state]) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                <td style={td}>\r
                  <Specimen appearance="outlined" tone="standard" placeholder="Elige un campus" {...state} />\r
                </td>\r
                <td style={tdInverse}>\r
                  <Specimen appearance="outlined" tone="inverse" placeholder="Elige un campus" {...state} />\r
                </td>\r
                <td style={td}>\r
                  <Specimen appearance="underline" tone="standard" placeholder="Elige un campus" {...state} />\r
                </td>\r
                <td style={tdInverse}>\r
                  <Specimen appearance="underline" tone="inverse" placeholder="Elige un campus" {...state} />\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`Default`,`Inverse`,`Underline`,`Error`,`Disabled`,`AllStates`]}))();export{w as AllStates,y as Default,C as Disabled,S as Error,b as Inverse,v as Playground,x as Underline,T as __namedExportsOrder,p as default};