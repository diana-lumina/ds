import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,t as a}from"./calendar-day-BiBnrQR0.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{o=t(r(),1),i(),s=n(),c={title:`Components/Internal Building Blocks/CalendarDay`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Día de calendario. `selected` marca el día elegido. "}}},argTypes:{selected:{control:`boolean`,description:"Día seleccionado (`aria-pressed`)",table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}},children:{control:`text`,description:`Número o contenido visible`}}},l={docs:{canvas:{sourceState:`none`}}},u={args:{selected:!1,disabled:!1,children:`12`}},d={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<CalendarDay>12</CalendarDay>`}}},render:()=>(0,s.jsx)(a,{children:`12`})},f={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<CalendarDay selected>12</CalendarDay>`}}},render:()=>(0,s.jsx)(a,{selected:!0,children:`12`})},p={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<CalendarDay disabled>12</CalendarDay>`}}},render:()=>(0,s.jsx)(a,{disabled:!0,children:`12`})},m={name:`Selected & states`,parameters:l,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px`,borderBottom:`1px solid #f0f0f0`};return(0,s.jsxs)(`div`,{style:{padding:8},children:[(0,s.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Selected`}),(0,s.jsx)(`th`,{style:e,children:`Default`}),(0,s.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,s.jsxs)(`tbody`,{children:[(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{style:t,children:`false`}),(0,s.jsx)(`td`,{style:n,children:(0,s.jsx)(a,{children:`12`})}),(0,s.jsx)(`td`,{style:n,children:(0,s.jsx)(a,{disabled:!0,children:`12`})})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{style:{...t,borderBottom:`none`},children:`true`}),(0,s.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,s.jsx)(a,{selected:!0,children:`12`})}),(0,s.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,s.jsx)(a,{selected:!0,disabled:!0,children:`12`})})]})]})]}),(0,s.jsx)(`p`,{style:{margin:`16px 0 0`,fontFamily:`monospace`,fontSize:11,color:`#888`},children:`Hover: pasa el cursor sobre Default. El selected no cambia de fondo al hover.`})]})}},h={name:`Ejemplo de uso`,parameters:{docs:{canvas:{sourceState:`none`},description:{story:`Solo como dependencia de un calendario. Selected y disabled son independientes; la exclusividad la administra el contenedor.`}}},render:()=>{let[e,t]=(0,o.useState)(12);return(0,s.jsx)(`div`,{style:{display:`flex`,gap:4},children:[10,11,12,13,14].map(n=>(0,s.jsx)(a,{selected:e===n,disabled:n===14,onClick:()=>t(n),children:n},n))})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    children: '12'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<CalendarDay>12</CalendarDay>\`
      }
    }
  },
  render: () => <CalendarDay>12</CalendarDay>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<CalendarDay selected>12</CalendarDay>\`
      }
    }
  },
  render: () => <CalendarDay selected>12</CalendarDay>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<CalendarDay disabled>12</CalendarDay>\`
      }
    }
  },
  render: () => <CalendarDay disabled>12</CalendarDay>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      padding: '16px',
      borderBottom: '1px solid #f0f0f0'
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
              textAlign: 'left',
              paddingLeft: 0
            }}>Selected</th>\r
              <th style={th}>Default</th>\r
              <th style={th}>Disabled</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>false</td>\r
              <td style={td}>\r
                <CalendarDay>12</CalendarDay>\r
              </td>\r
              <td style={td}>\r
                <CalendarDay disabled>12</CalendarDay>\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...rowLabel,
              borderBottom: 'none'
            }}>true</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <CalendarDay selected>12</CalendarDay>\r
              </td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <CalendarDay selected disabled>\r
                  12\r
                </CalendarDay>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
        <p style={{
        margin: '16px 0 0',
        fontFamily: 'monospace',
        fontSize: 11,
        color: '#888'
      }}>\r
          Hover: pasa el cursor sobre Default. El selected no cambia de fondo al hover.\r
        </p>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      description: {
        story: 'Solo como dependencia de un calendario. Selected y disabled son independientes; la exclusividad la administra el contenedor.'
      }
    }
  },
  render: () => {
    const [selected, setSelected] = useState(12);
    const days = [10, 11, 12, 13, 14];
    return <div style={{
      display: 'flex',
      gap: 4
    }}>\r
        {days.map(value => <CalendarDay key={value} selected={selected === value} disabled={value === 14} onClick={() => setSelected(value)}>\r
            {value}\r
          </CalendarDay>)}\r
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Default`,`Selected`,`Disabled`,`AllStates`,`InContext`]}))();export{m as AllStates,d as Default,p as Disabled,h as InContext,u as Playground,f as Selected,g as __namedExportsOrder,c as default};