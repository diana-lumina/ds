import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-BPJdu4Wu.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./select-CDwMicz1.js";function u({appearance:e=`outlined`,error:t=!1,disabled:n=!1,placeholder:r=`Elige un campus`}){let[s,u]=(0,d.useState)();return(0,f.jsx)(`div`,{style:h,children:(0,f.jsxs)(l,{value:s,onValueChange:u,disabled:n,children:[(0,f.jsx)(a,{appearance:e,error:t,"aria-label":`Campus`,children:(0,f.jsx)(i,{placeholder:r})}),(0,f.jsxs)(o,{children:[(0,f.jsx)(c,{value:`mty`,children:`Monterrey`}),(0,f.jsx)(c,{value:`cdmx`,children:`Ciudad de México`}),(0,f.jsx)(c,{value:`gdl`,children:`Guadalajara`})]})]})})}var d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{d=t(r(),1),s(),f=n(),p={title:`Components/Form Controls/Select`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Select sobre Radix. Appearances outlined y underline; estados default, error y disabled. El trigger usa CaretDownIcon.`}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],table:{defaultValue:{summary:`outlined`}}},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},placeholder:{control:`text`}}},m={docs:{canvas:{sourceState:`none`}}},h={maxWidth:360},g={args:{appearance:`outlined`,error:!1,disabled:!1,placeholder:`Elige un campus`},render:e=>(0,f.jsx)(u,{...e})},_={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Select>
  <SelectTrigger aria-label="Campus">
    <SelectValue placeholder="Elige un campus" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="mty">Monterrey</SelectItem>
  </SelectContent>
</Select>`}}},render:()=>(0,f.jsx)(u,{appearance:`outlined`,error:!1,disabled:!1,placeholder:`Elige un campus`})},v={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<SelectTrigger appearance="underline" aria-label="Campus">
  <SelectValue placeholder="Elige un campus" />
</SelectTrigger>`}}},render:()=>(0,f.jsx)(u,{appearance:`underline`,error:!1,disabled:!1,placeholder:`Elige un campus`})},y={render:()=>(0,f.jsx)(u,{appearance:`outlined`,error:!0,disabled:!1,placeholder:`Elige un campus`})},b={render:()=>(0,f.jsx)(u,{appearance:`outlined`,error:!1,disabled:!0,placeholder:`Elige un campus`})},x={name:`States`,parameters:m,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280};return(0,f.jsx)(`div`,{style:{padding:8},children:(0,f.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{style:{...e,paddingLeft:0},children:`State`}),(0,f.jsx)(`th`,{style:e,children:`Outlined`}),(0,f.jsx)(`th`,{style:e,children:`Underline`})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{style:t,children:`Default`}),(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(u,{appearance:`outlined`,error:!1,disabled:!1,placeholder:`Elige un campus`})}),(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(u,{appearance:`underline`,error:!1,disabled:!1,placeholder:`Elige un campus`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{style:t,children:`Error`}),(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(u,{appearance:`outlined`,error:!0,disabled:!1,placeholder:`Elige un campus`})}),(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(u,{appearance:`underline`,error:!0,disabled:!1,placeholder:`Elige un campus`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{style:t,children:`Disabled`}),(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(u,{appearance:`outlined`,error:!1,disabled:!0,placeholder:`Elige un campus`})}),(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(u,{appearance:`underline`,error:!1,disabled:!0,placeholder:`Elige un campus`})})]})]})]})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    error: false,
    disabled: false,
    placeholder: 'Elige un campus'
  },
  render: args => <Specimen {...args} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
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
  render: () => <Specimen appearance="outlined" error={false} disabled={false} placeholder="Elige un campus" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<SelectTrigger appearance="underline" aria-label="Campus">
  <SelectValue placeholder="Elige un campus" />
</SelectTrigger>\`
      }
    }
  },
  render: () => <Specimen appearance="underline" error={false} disabled={false} placeholder="Elige un campus" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="outlined" error disabled={false} placeholder="Elige un campus" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen appearance="outlined" error={false} disabled placeholder="Elige un campus" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
            <tr>\r
              <td style={rowLabel}>Default</td>\r
              <td style={td}>\r
                <Specimen appearance="outlined" error={false} disabled={false} placeholder="Elige un campus" />\r
              </td>\r
              <td style={td}>\r
                <Specimen appearance="underline" error={false} disabled={false} placeholder="Elige un campus" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Error</td>\r
              <td style={td}>\r
                <Specimen appearance="outlined" error disabled={false} placeholder="Elige un campus" />\r
              </td>\r
              <td style={td}>\r
                <Specimen appearance="underline" error disabled={false} placeholder="Elige un campus" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Disabled</td>\r
              <td style={td}>\r
                <Specimen appearance="outlined" error={false} disabled placeholder="Elige un campus" />\r
              </td>\r
              <td style={td}>\r
                <Specimen appearance="underline" error={false} disabled placeholder="Elige un campus" />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Default`,`Underline`,`Error`,`Disabled`,`AllStates`]}))();export{x as AllStates,_ as Default,b as Disabled,y as Error,g as Playground,v as Underline,S as __namedExportsOrder,p as default};