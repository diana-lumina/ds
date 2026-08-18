import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-BPJdu4Wu.js";import{n as i,t as a}from"./phone-input-CnjBHpQP.js";function o({appearance:e=`outlined`,error:t=!1,disabled:n=!1}){let[r,i]=(0,s.useState)(`mx`),[o,l]=(0,s.useState)(``);return(0,c.jsx)(`div`,{style:d,children:(0,c.jsx)(a,{appearance:e,error:t,disabled:n,country:r,onCountryChange:i,value:o,onChange:e=>l(e.target.value),"aria-label":`Teléfono`})})}var s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{s=t(r(),1),i(),c=n(),l={title:`Components/Form Controls/PhoneInput`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Campo telefónico compuesto: Select de código de país + TextInput del número. Appearances outlined y underline; estados default, error y disabled.`}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],table:{defaultValue:{summary:`outlined`}}},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}}}},u={docs:{canvas:{sourceState:`none`}}},d={maxWidth:360},f={args:{appearance:`outlined`,error:!1,disabled:!1},render:e=>(0,c.jsx)(o,{...e})},p={render:()=>(0,c.jsx)(o,{appearance:`outlined`,error:!1,disabled:!1})},m={render:()=>(0,c.jsx)(o,{appearance:`underline`,error:!1,disabled:!1})},h={render:()=>(0,c.jsx)(o,{appearance:`outlined`,error:!0,disabled:!1})},g={render:()=>(0,c.jsx)(o,{appearance:`outlined`,error:!1,disabled:!0})},_={name:`States`,parameters:u,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280};return(0,c.jsx)(`div`,{style:{padding:8},children:(0,c.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,c.jsx)(`th`,{style:e,children:`Outlined`}),(0,c.jsx)(`th`,{style:e,children:`Underline`})]})}),(0,c.jsx)(`tbody`,{children:[[`Default`,{error:!1,disabled:!1}],[`Error`,{error:!0,disabled:!1}],[`Disabled`,{error:!1,disabled:!0}]].map(([e,r])=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{style:t,children:e}),(0,c.jsx)(`td`,{style:n,children:(0,c.jsx)(o,{appearance:`outlined`,...r})}),(0,c.jsx)(`td`,{style:n,children:(0,c.jsx)(o,{appearance:`underline`,...r})})]},e))})]})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    error: false,
    disabled: false
  },
  render: args => <Specimen {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="outlined" error={false} disabled={false} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="underline" error={false} disabled={false} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="outlined" error disabled={false} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="outlined" error={false} disabled />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
              <th style={th}>Outlined</th>\r
              <th style={th}>Underline</th>\r
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
                  <Specimen appearance="outlined" {...state} />\r
                </td>\r
                <td style={td}>\r
                  <Specimen appearance="underline" {...state} />\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Default`,`Underline`,`Error`,`Disabled`,`AllStates`]}))();export{_ as AllStates,p as Default,g as Disabled,h as Error,f as Playground,m as Underline,v as __namedExportsOrder,l as default};