import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-BjWpqfAg.js";import{l as i,t as a,u as o}from"./dist-kE1pIaRY.js";import{n as s,t as c}from"./utils-D8qMR3V9.js";var l,u,d,f,p,m,h,g=e((()=>{l=`_root_m227b_1`,u=`_indicator_m227b_165`,d=`_checkIcon_m227b_183`,f=`_mixedIcon_m227b_185`,p=`_field_m227b_215`,m=`_label_m227b_237`,h={root:l,indicator:u,checkIcon:d,mixedIcon:f,field:p,label:m}}));function _(){return(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`9`,viewBox:`0 0 12 9`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,b.jsx)(`path`,{d:`M1 4.5L4.5 8L11 1`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function v(){return(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`10`,height:`2`,viewBox:`0 0 10 2`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,b.jsx)(`path`,{d:`M1 1H9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function y({className:e,...t}){return(0,b.jsx)(i,{"data-slot":`checkbox`,className:c(h.root,e),...t,children:(0,b.jsxs)(o,{"data-slot":`checkbox-indicator`,className:h.indicator,children:[(0,b.jsx)(`span`,{className:h.checkIcon,children:(0,b.jsx)(_,{})}),(0,b.jsx)(`span`,{className:h.mixedIcon,children:(0,b.jsx)(v,{})})]})})}var b,x=e((()=>{r(),a(),s(),g(),b=n(),y.__docgenInfo={description:``,methods:[],displayName:`Checkbox`}})),S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{S=t(r(),1),x(),g(),C=n(),w={title:`Components/Form Controls/Checkbox`,component:y,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Control de selección binaria o tri-state (indeterminate) para opciones independientes entre sí. Expone únicamente los estados visuales del checkbox; el label y el texto de ayuda pertenecen al patrón consumidor, no al componente. Tamaño visual único: 20px`}}},argTypes:{checked:{control:`select`,options:[!1,!0,`indeterminate`],description:`Value: unchecked (false) · checked (true) · mixed (indeterminate). Mixed solo para grupo parcialmente seleccionado.`,table:{type:{summary:`boolean | "indeterminate"`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}},"aria-label":{control:`text`,description:`Nombre accesible cuando el label visible está en el patrón consumidor`}}},T={docs:{canvas:{sourceState:`shown`}}},E={docs:{canvas:{sourceState:`none`}}},D={args:{checked:!1,"aria-label":`Opción`}},O={parameters:T,args:{checked:!1,"aria-label":`Opción`}},k={parameters:T,args:{checked:!0,"aria-label":`Opción`}},A={name:`Mixed`,parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Usar mixed solo cuando representa un grupo parcialmente seleccionado. Se expone como aria-checked="mixed" (checked="indeterminate").`}}},args:{checked:`indeterminate`,"aria-label":`Seleccionar todo`}},j={parameters:T,args:{checked:!0,disabled:!0,"aria-label":`Opción`}},M={name:`Value & states`,parameters:E,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`},r=[{label:`Unchecked`,value:!1},{label:`Checked`,value:!0},{label:`Mixed`,value:`indeterminate`}];return(0,C.jsx)(`div`,{style:{padding:8},children:(0,C.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,C.jsx)(`thead`,{children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Value`}),(0,C.jsx)(`th`,{style:e,children:`Default`}),(0,C.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,C.jsx)(`tbody`,{children:r.map(({label:e,value:r})=>(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{style:t,children:e}),(0,C.jsx)(`td`,{style:n,children:(0,C.jsx)(y,{"aria-label":e,checked:r})}),(0,C.jsx)(`td`,{style:n,children:(0,C.jsx)(y,{"aria-label":`${e} disabled`,checked:r,disabled:!0})})]},e))})]})})}},N={name:`Ejemplo de uso`,parameters:E,render:()=>{let[e,t]=(0,S.useState)(!0),[n,r]=(0,S.useState)(!1),i=e&&n?!0:!e&&!n?!1:`indeterminate`;return(0,C.jsxs)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:360,display:`flex`,flexDirection:`column`,gap:16},children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h3`,{style:{margin:`0 0 4px`,fontSize:16,fontWeight:600},children:`Preferencias de correo`}),(0,C.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#666`},children:`Opciones independientes. “Seleccionar todo” usa mixed cuando el grupo está parcial.`})]}),(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,C.jsxs)(`label`,{className:h.field,children:[(0,C.jsx)(y,{id:`cb-all`,checked:i,onCheckedChange:e=>{let n=e===!0;t(n),r(n)}}),(0,C.jsx)(`span`,{className:h.label,children:`Seleccionar todo`})]}),(0,C.jsxs)(`label`,{className:h.field,style:{paddingLeft:8},children:[(0,C.jsx)(y,{id:`cb-notifications`,checked:e,onCheckedChange:e=>t(e===!0)}),(0,C.jsx)(`span`,{className:h.label,children:`Notificaciones del curso`})]}),(0,C.jsxs)(`label`,{className:h.field,style:{paddingLeft:8},children:[(0,C.jsx)(y,{id:`cb-marketing`,checked:n,onCheckedChange:e=>r(e===!0)}),(0,C.jsx)(`span`,{className:h.label,children:`Novedades y marketing`})]})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    'aria-label': 'Opción'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    checked: false,
    'aria-label': 'Opción'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    checked: true,
    'aria-label': 'Opción'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Mixed',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Usar mixed solo cuando representa un grupo parcialmente seleccionado. Se expone como aria-checked="mixed" (checked="indeterminate").'
      }
    }
  },
  args: {
    checked: 'indeterminate',
    'aria-label': 'Seleccionar todo'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    checked: true,
    disabled: true,
    'aria-label': 'Opción'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Value & states',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 20px 12px',
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
      padding: '16px 20px',
      borderBottom: '1px solid #f0f0f0'
    };
    const rows = [{
      label: 'Unchecked',
      value: false as const
    }, {
      label: 'Checked',
      value: true as const
    }, {
      label: 'Mixed',
      value: 'indeterminate' as const
    }];
    return <div style={{
      padding: 8
    }}>\r
     \r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }}>Value</th>\r
              <th style={th}>Default</th>\r
              <th style={th}>Disabled</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {rows.map(({
            label,
            value
          }) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                <td style={td}>\r
                  <Checkbox aria-label={label} checked={value} />\r
                </td>\r
                <td style={td}>\r
                  <Checkbox aria-label={\`\${label} disabled\`} checked={value} disabled />\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [marketing, setMarketing] = useState(false);
    const allChecked = notifications && marketing ? true : !notifications && !marketing ? false : 'indeterminate';
    return <div style={{
      fontFamily: 'sans-serif',
      maxWidth: 360,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>\r
        <div>\r
          <h3 style={{
          margin: '0 0 4px',
          fontSize: 16,
          fontWeight: 600
        }}>Preferencias de correo</h3>\r
          <p style={{
          margin: 0,
          fontSize: 13,
          color: '#666'
        }}>\r
            Opciones independientes. “Seleccionar todo” usa mixed cuando el grupo está parcial.\r
          </p>\r
        </div>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>\r
          <label className={styles.field}>\r
            <Checkbox id="cb-all" checked={allChecked} onCheckedChange={value => {
            const next = value === true;
            setNotifications(next);
            setMarketing(next);
          }} />\r
            <span className={styles.label}>Seleccionar todo</span>\r
          </label>\r
          <label className={styles.field} style={{
          paddingLeft: 8
        }}>\r
            <Checkbox id="cb-notifications" checked={notifications} onCheckedChange={value => setNotifications(value === true)} />\r
            <span className={styles.label}>Notificaciones del curso</span>\r
          </label>\r
          <label className={styles.field} style={{
          paddingLeft: 8
        }}>\r
            <Checkbox id="cb-marketing" checked={marketing} onCheckedChange={value => setMarketing(value === true)} />\r
            <span className={styles.label}>Novedades y marketing</span>\r
          </label>\r
        </div>\r
      </div>;
  }
}`,...N.parameters?.docs?.source},description:{story:`Uso mínimo: opciones independientes + mixed en grupo parcialmente seleccionado.\r
Label pertenece al patrón consumidor.`,...N.parameters?.docs?.description}}},P=[`Playground`,`Unchecked`,`Checked`,`Mixed`,`Disabled`,`AllStates`,`InContext`]}))();export{M as AllStates,k as Checked,j as Disabled,N as InContext,A as Mixed,D as Playground,O as Unchecked,P as __namedExportsOrder,w as default};