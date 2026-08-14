import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-DZgM_VOp.js";import{o as i,t as a}from"./icons-Dn-Lbxoc.js";import{n as o,t as s}from"./filter-chip-C53S8Ukq.js";function c({showLeadingIcon:e,selected:t=!1,...n}){let[r,i]=(0,l.useState)(t);return(0,l.useEffect)(()=>{i(t)},[t]),(0,u.jsx)(s,{...n,icon:e?(0,u.jsx)(a,{}):void 0,selected:r,onSelectedChange:i})}var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{l=t(r(),1),o(),i(),u=n(),d={title:`Components/Labels & Status/FilterChip`,component:s,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Control compartido y seleccionable para aplicar o retirar filtros en TEC 360 y TEC Educación Continua. Selected expresa el valor del filtro; State expresa la interacción actual. No representa información pasiva ni valores removibles.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`],description:`Size: sm · md`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},selected:{control:`boolean`,description:`true = filtro aplicado`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción ni puede cambiar Selected`,table:{defaultValue:{summary:`false`}}},label:{control:`text`,description:`Label (string editable)`},showLeadingIcon:{control:`boolean`,description:`Leading icon visible (opcional; instance swap vía prop icon)`,table:{defaultValue:{summary:`false`}}},icon:{control:!1,table:{disable:!0}}}},f=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`}],p={docs:{canvas:{sourceState:`none`}}},m={args:{size:`sm`,selected:!1,disabled:!1,label:`Categoría`,showLeadingIcon:!1},render:e=>(0,u.jsx)(c,{...e})},h={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FilterChip size="sm" selected={false} label="Categoría" />`}}},render:()=>(0,u.jsx)(s,{size:`sm`,selected:!1,label:`Categoría`})},g={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Selected=true significa que el filtro está aplicado.`},source:{code:`<FilterChip size="sm" selected label="Categoría" />`}}},render:()=>(0,u.jsx)(s,{size:`sm`,selected:!0,label:`Categoría`})},_={name:`Leading icon`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FilterChip
  size="sm"
  selected
  label="Categoría"
  icon={<BagIcon />}
/>`}}},render:()=>(0,u.jsx)(s,{size:`sm`,selected:!0,label:`Categoría`,icon:(0,u.jsx)(a,{})})},v={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<FilterChip size="sm" selected disabled label="Categoría" />`}}},render:()=>(0,u.jsx)(s,{size:`sm`,selected:!0,disabled:!0,label:`Categoría`})},y={name:`Selected & states`,parameters:p,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`},r=[{label:`Unselected`,render:e=>(0,u.jsx)(s,{size:e,selected:!1,label:`Categoría`})},{label:`Selected`,render:e=>(0,u.jsx)(s,{size:e,selected:!0,label:`Categoría`})},{label:`Disabled`,render:e=>(0,u.jsx)(s,{size:e,selected:!1,disabled:!0,label:`Categoría`})},{label:`Selected + disabled`,render:e=>(0,u.jsx)(s,{size:e,selected:!0,disabled:!0,label:`Categoría`})},{label:`Leading icon`,render:e=>(0,u.jsx)(s,{size:e,selected:!0,label:`Categoría`,icon:(0,u.jsx)(a,{})})}];return(0,u.jsx)(`div`,{style:{padding:8},children:(0,u.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Selected / state`}),f.map(({value:t,sizeLabel:n})=>(0,u.jsx)(`th`,{style:e,children:n},t))]})}),(0,u.jsx)(`tbody`,{children:r.map(({label:e,render:r})=>(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{style:t,children:e}),f.map(({value:e})=>(0,u.jsx)(`td`,{style:n,children:r(e)},e))]},e))})]})})}},b={name:`Ejemplo de uso`,parameters:p,render:()=>{let[e,t]=(0,l.useState)(`online`),[n,r]=(0,l.useState)(`intermedio`);return(0,u.jsxs)(`div`,{style:{fontFamily:`sans-serif`,display:`flex`,flexDirection:`column`,gap:12,maxWidth:480},children:[(0,u.jsx)(`span`,{style:{fontSize:13,color:`#666`},children:`Filtrar cursos`}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,u.jsx)(s,{size:`sm`,selected:e===`online`,onSelectedChange:e=>t(e?`online`:``),label:`En línea`}),(0,u.jsx)(s,{size:`sm`,selected:e===`presencial`,onSelectedChange:e=>t(e?`presencial`:``),label:`Presencial`}),(0,u.jsx)(s,{size:`sm`,selected:n===`intermedio`,onSelectedChange:e=>r(e?`intermedio`:null),label:`Intermedio`}),(0,u.jsx)(s,{size:`sm`,selected:!1,disabled:!0,label:`Certificación`})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    selected: false,
    disabled: false,
    label: 'Categoría',
    showLeadingIcon: false
  },
  render: args => <PlaygroundChip {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FilterChip size="sm" selected={false} label="Categoría" />\`
      }
    }
  },
  render: () => <FilterChip size="sm" selected={false} label="Categoría" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Selected=true significa que el filtro está aplicado.'
      },
      source: {
        code: \`<FilterChip size="sm" selected label="Categoría" />\`
      }
    }
  },
  render: () => <FilterChip size="sm" selected label="Categoría" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Leading icon',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FilterChip
  size="sm"
  selected
  label="Categoría"
  icon={<BagIcon />}
/>\`
      }
    }
  },
  render: () => <FilterChip size="sm" selected label="Categoría" icon={<BagIcon />} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<FilterChip size="sm" selected disabled label="Categoría" />\`
      }
    }
  },
  render: () => <FilterChip size="sm" selected disabled label="Categoría" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Selected & states',
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
      label: 'Unselected',
      render: (size: 'sm' | 'md') => <FilterChip size={size} selected={false} label="Categoría" />
    }, {
      label: 'Selected',
      render: (size: 'sm' | 'md') => <FilterChip size={size} selected label="Categoría" />
    }, {
      label: 'Disabled',
      render: (size: 'sm' | 'md') => <FilterChip size={size} selected={false} disabled label="Categoría" />
    }, {
      label: 'Selected + disabled',
      render: (size: 'sm' | 'md') => <FilterChip size={size} selected disabled label="Categoría" />
    }, {
      label: 'Leading icon',
      render: (size: 'sm' | 'md') => <FilterChip size={size} selected label="Categoría" icon={<BagIcon />} />
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
            }}>Selected / state</th>\r
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [modality, setModality] = useState('online');
    const [level, setLevel] = useState<string | null>('intermedio');
    return <div style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 480
    }}>\r
        <span style={{
        fontSize: 13,
        color: '#666'
      }}>Filtrar cursos</span>\r
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>\r
          <FilterChip size="sm" selected={modality === 'online'} onSelectedChange={selected => setModality(selected ? 'online' : '')} label="En línea" />\r
          <FilterChip size="sm" selected={modality === 'presencial'} onSelectedChange={selected => setModality(selected ? 'presencial' : '')} label="Presencial" />\r
          <FilterChip size="sm" selected={level === 'intermedio'} onSelectedChange={selected => setLevel(selected ? 'intermedio' : null)} label="Intermedio" />\r
          <FilterChip size="sm" selected={false} disabled label="Certificación" />\r
        </div>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Unselected`,`Selected`,`WithLeadingIcon`,`Disabled`,`AllStates`,`InContext`]}))();export{y as AllStates,v as Disabled,b as InContext,m as Playground,g as Selected,h as Unselected,_ as WithLeadingIcon,x as __namedExportsOrder,d as default};