import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-BPJdu4Wu.js";import{l as i,n as a}from"./icons-BZJDXWBE.js";import{n as o,t as s}from"./input-chip-HUaBV0Ax.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{c=t(r(),1),o(),a(),l=n(),u={title:`Components/Labels & Status/InputChip`,component:s,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Valor introducido o aplicado que puede eliminarse. Close estructural y siempre visible; Leading icon opcional. No expresa selección, clasificación ni condición del sistema.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`],description:`Size: sm · md`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},label:{control:`text`,description:`Label (string editable)`},showLeadingIcon:{control:`boolean`,description:`Leading icon visible (opcional; instance swap vía prop icon)`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled: no interacción ni remoción; close sigue visible`,table:{defaultValue:{summary:`false`}}},closeLabel:{control:`text`,description:`aria-label del close (default: Eliminar {label})`},className:{control:!1,table:{disable:!0}}}},d=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`}],f={docs:{canvas:{sourceState:`none`}}},p={args:{size:`sm`,label:`Valor aplicado`,disabled:!1,showLeadingIcon:!1},render:({showLeadingIcon:e,...t})=>(0,l.jsx)(s,{...t,icon:e?(0,l.jsx)(i,{}):void 0,onClose:()=>{}})},m={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<InputChip label="Valor aplicado" onClose={() => {}} />`}}},render:()=>(0,l.jsx)(s,{label:`Valor aplicado`,onClose:()=>{}})},h={name:`Leading icon`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<InputChip
  label="Valor aplicado"
  icon={<ShoppingBagIcon />}
  onClose={() => {}}
/>`}}},render:()=>(0,l.jsx)(s,{label:`Valor aplicado`,icon:(0,l.jsx)(i,{}),onClose:()=>{}})},g={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<InputChip label="Valor aplicado" onClose={() => {}} disabled />`}}},render:()=>(0,l.jsx)(s,{label:`Valor aplicado`,onClose:()=>{},disabled:!0})},_={name:`Size & states`,parameters:f,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`},r=[{label:`Default`,render:e=>(0,l.jsx)(s,{size:e,label:`Valor aplicado`,onClose:()=>{}})},{label:`Leading icon`,render:e=>(0,l.jsx)(s,{size:e,label:`Valor aplicado`,icon:(0,l.jsx)(i,{}),onClose:()=>{}})},{label:`Disabled`,render:e=>(0,l.jsx)(s,{size:e,label:`Valor aplicado`,onClose:()=>{},disabled:!0})},{label:`Icon + disabled`,render:e=>(0,l.jsx)(s,{size:e,label:`Valor aplicado`,icon:(0,l.jsx)(i,{}),onClose:()=>{},disabled:!0})}];return(0,l.jsx)(`div`,{style:{padding:8},children:(0,l.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`State`}),d.map(({value:t,sizeLabel:n})=>(0,l.jsx)(`th`,{style:e,children:n},t))]})}),(0,l.jsx)(`tbody`,{children:r.map(({label:e,render:r})=>(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:t,children:e}),d.map(({value:e})=>(0,l.jsx)(`td`,{style:n,children:r(e)},e))]},e))})]})})}},v={name:`Ejemplo de uso`,parameters:f,render:()=>{let[e,t]=c.useState([`UX Research`,`Producto`,`Figma`]);return(0,l.jsxs)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:420,display:`flex`,flexDirection:`column`,gap:8},children:[(0,l.jsx)(`label`,{style:{fontSize:13,color:`#666`},children:`Valores aplicados`}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,padding:12,border:`1px solid #e5e5e5`,borderRadius:8,minHeight:48,alignItems:`center`},children:[e.map(e=>(0,l.jsx)(s,{size:`sm`,label:e,onClose:()=>t(t=>t.filter(t=>t!==e))},e)),e.length===0&&(0,l.jsx)(`span`,{style:{fontSize:13,color:`#999`},children:`Sin valores`})]})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Valor aplicado',
    disabled: false,
    showLeadingIcon: false
  },
  render: ({
    showLeadingIcon,
    ...args
  }) => <InputChip {...args} icon={showLeadingIcon ? <ShoppingBagIcon /> : undefined} onClose={() => {}} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<InputChip label="Valor aplicado" onClose={() => {}} />\`
      }
    }
  },
  render: () => <InputChip label="Valor aplicado" onClose={() => {}} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Leading icon',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<InputChip
  label="Valor aplicado"
  icon={<ShoppingBagIcon />}
  onClose={() => {}}
/>\`
      }
    }
  },
  render: () => <InputChip label="Valor aplicado" icon={<ShoppingBagIcon />} onClose={() => {}} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<InputChip label="Valor aplicado" onClose={() => {}} disabled />\`
      }
    }
  },
  render: () => <InputChip label="Valor aplicado" onClose={() => {}} disabled />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Size & states',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 16px 12px',
      borderBottom: '1px solid #eee'
    };
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap'
    };
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0'
    };
    const rows = [{
      label: 'Default',
      render: (size: 'sm' | 'md') => <InputChip size={size} label="Valor aplicado" onClose={() => {}} />
    }, {
      label: 'Leading icon',
      render: (size: 'sm' | 'md') => <InputChip size={size} label="Valor aplicado" icon={<ShoppingBagIcon />} onClose={() => {}} />
    }, {
      label: 'Disabled',
      render: (size: 'sm' | 'md') => <InputChip size={size} label="Valor aplicado" onClose={() => {}} disabled />
    }, {
      label: 'Icon + disabled',
      render: (size: 'sm' | 'md') => <InputChip size={size} label="Valor aplicado" icon={<ShoppingBagIcon />} onClose={() => {}} disabled />
    }] as const;
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
              textAlign: 'left',
              paddingLeft: 0
            }}>State</th>\r
              {SIZES.map(({
              value,
              sizeLabel
            }) => <th key={value} style={th}>\r
                  {sizeLabel}\r
                </th>)}\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {rows.map(({
            label,
            render
          }) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                    {render(value)}\r
                  </td>)}\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [values, setValues] = React.useState(['UX Research', 'Producto', 'Figma']);
    return <div style={{
      fontFamily: 'sans-serif',
      maxWidth: 420,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>\r
        <label style={{
        fontSize: 13,
        color: '#666'
      }}>Valores aplicados</label>\r
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        padding: 12,
        border: '1px solid #e5e5e5',
        borderRadius: 8,
        minHeight: 48,
        alignItems: 'center'
      }}>\r
          {values.map(value => <InputChip key={value} size="sm" label={value} onClose={() => setValues(prev => prev.filter(v => v !== value))} />)}\r
          {values.length === 0 && <span style={{
          fontSize: 13,
          color: '#999'
        }}>Sin valores</span>}\r
        </div>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Default`,`WithLeadingIcon`,`Disabled`,`AllStates`,`InContext`]}))();export{_ as AllStates,m as Default,g as Disabled,v as InContext,p as Playground,h as WithLeadingIcon,y as __namedExportsOrder,u as default};