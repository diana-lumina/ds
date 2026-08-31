import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,t as a}from"./phone-input-DaJ3yHCO.js";function o({appearance:e=`outlined`,tone:t=`standard`,error:n=!1,disabled:r=!1}){let[i,o]=(0,s.useState)(`mx`),[l,u]=(0,s.useState)(``);return(0,c.jsx)(`div`,{style:d,children:(0,c.jsx)(a,{appearance:e,tone:t,error:n,disabled:r,country:i,onCountryChange:o,value:l,onChange:e=>u(e.target.value),"aria-label":`Teléfono`})})}var s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{s=t(r(),1),i(),c=n(),l={title:`Components/Internal Building Blocks/PhoneInput`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Campo telefónico compuesto: Select de código de país + TextInput del número. Appearances outlined y underline; tones standard e inverse; estados default, error y disabled.`}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],table:{defaultValue:{summary:`outlined`}}},tone:{control:`radio`,options:[`standard`,`inverse`],description:`standard sobre superficies claras · inverse sobre oscuras / brand`,table:{defaultValue:{summary:`standard`}}},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}}}},u={docs:{canvas:{sourceState:`none`}}},d={maxWidth:360},f=[e=>(0,c.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`,minWidth:360},children:(0,c.jsx)(e,{})})],p={args:{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1},render:e=>(0,c.jsx)(o,{...e})},m={render:()=>(0,c.jsx)(o,{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1})},h={parameters:{backgrounds:{default:`dark`}},decorators:f,render:()=>(0,c.jsx)(o,{appearance:`outlined`,tone:`inverse`,error:!1,disabled:!1})},g={render:()=>(0,c.jsx)(o,{appearance:`underline`,tone:`standard`,error:!1,disabled:!1})},_={render:()=>(0,c.jsx)(o,{appearance:`outlined`,tone:`standard`,error:!0,disabled:!1})},v={render:()=>(0,c.jsx)(o,{appearance:`outlined`,tone:`standard`,error:!1,disabled:!0})},y={name:`States`,parameters:u,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280},r={...n,background:`var(--color-surface-brand-strong, #231f20)`};return(0,c.jsx)(`div`,{style:{padding:8},children:(0,c.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,c.jsx)(`th`,{style:e,children:`Outlined`}),(0,c.jsx)(`th`,{style:e,children:`Underline`}),(0,c.jsx)(`th`,{style:e,children:`Outlined inverse`}),(0,c.jsx)(`th`,{style:e,children:`Underline inverse`})]})}),(0,c.jsx)(`tbody`,{children:[[`Default`,{error:!1,disabled:!1}],[`Error`,{error:!0,disabled:!1}],[`Disabled`,{error:!1,disabled:!0}]].map(([e,i])=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{style:t,children:e}),(0,c.jsx)(`td`,{style:n,children:(0,c.jsx)(o,{appearance:`outlined`,tone:`standard`,...i})}),(0,c.jsx)(`td`,{style:n,children:(0,c.jsx)(o,{appearance:`underline`,tone:`standard`,...i})}),(0,c.jsx)(`td`,{style:r,children:(0,c.jsx)(o,{appearance:`outlined`,tone:`inverse`,...i})}),(0,c.jsx)(`td`,{style:r,children:(0,c.jsx)(o,{appearance:`underline`,tone:`inverse`,...i})})]},e))})]})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false
  },
  render: args => <Specimen {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="outlined" tone="standard" error={false} disabled={false} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen appearance="outlined" tone="inverse" error={false} disabled={false} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="underline" tone="standard" error={false} disabled={false} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="outlined" tone="standard" error disabled={false} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="outlined" tone="standard" error={false} disabled />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
              <th style={{
              ...th,
              paddingLeft: 0
            }}>State</th>\r
              <th style={th}>Outlined</th>\r
              <th style={th}>Underline</th>\r
              <th style={th}>Outlined inverse</th>\r
              <th style={th}>Underline inverse</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {([['Default', {
            error: false,
            disabled: false
          }], ['Error', {
            error: true,
            disabled: false
          }], ['Disabled', {
            error: false,
            disabled: true
          }]] as const).map(([label, state]) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                <td style={td}>\r
                  <Specimen appearance="outlined" tone="standard" {...state} />\r
                </td>\r
                <td style={td}>\r
                  <Specimen appearance="underline" tone="standard" {...state} />\r
                </td>\r
                <td style={tdInverse}>\r
                  <Specimen appearance="outlined" tone="inverse" {...state} />\r
                </td>\r
                <td style={tdInverse}>\r
                  <Specimen appearance="underline" tone="inverse" {...state} />\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Default`,`Inverse`,`Underline`,`Error`,`Disabled`,`AllStates`]}))();export{y as AllStates,m as Default,v as Disabled,_ as Error,h as Inverse,p as Playground,g as Underline,b as __namedExportsOrder,l as default};