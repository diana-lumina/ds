import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CFNdY8gy.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";import{C as o,S as s,t as c,x as l}from"./dist-CJdV0_Mo.js";var u,d,f,p,m,h,g,_=e((()=>{u=`_group_109w6_1`,d=`_root_109w6_11`,f=`_indicator_109w6_159`,p=`_dot_109w6_175`,m=`_field_109w6_199`,h=`_label_109w6_221`,g={group:u,root:d,indicator:f,dot:p,field:m,label:h}}));function v({className:e,...t}){return(0,b.jsx)(o,{"data-slot":`radio-group`,className:a(g.group,e),...t})}function y({className:e,...t}){return(0,b.jsx)(s,{"data-slot":`radio`,className:a(g.root,e),...t,children:(0,b.jsx)(l,{"data-slot":`radio-indicator`,className:g.indicator,children:(0,b.jsx)(`span`,{className:g.dot})})})}var b,x=e((()=>{r(),c(),i(),_(),b=n(),v.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`},y.__docgenInfo={description:`Control de selección exclusiva (20×20). Label y grupo = patrón consumidor / RadioGroup.`,methods:[],displayName:`Radio`}}));function S({selected:e=!1,disabled:t=!1}){return(0,w.jsx)(v,{value:e?`opt`:void 0,"aria-label":`Opción`,children:(0,w.jsx)(y,{value:`opt`,"aria-label":`Opción`,disabled:t})})}var C,w,T,E,D,O,k,A,j,M,N;e((()=>{C=t(r(),1),x(),_(),w=n(),T={title:`Components/Form Controls/Radio`,component:y,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Selección exclusiva de una opción dentro de un conjunto. Expone estados visuales; el label y la estructura del grupo pertenecen al patrón consumidor. Tamaño visual único: 20px. Usar siempre dentro de RadioGroup.`}}},argTypes:{selected:{control:`boolean`,description:`Selected: false · true (controlado por el value del grupo)`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}}}},E={docs:{canvas:{sourceState:`none`}}},D={args:{selected:!1,disabled:!1},render:e=>(0,w.jsx)(S,{...e})},O={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<RadioGroup aria-label="Opción">
  <Radio value="opt" aria-label="Opción" />
</RadioGroup>`}}},render:()=>(0,w.jsx)(v,{"aria-label":`Opción`,children:(0,w.jsx)(y,{value:`opt`,"aria-label":`Opción`})})},k={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<RadioGroup value="opt" aria-label="Opción">
  <Radio value="opt" aria-label="Opción" />
</RadioGroup>`}}},render:()=>(0,w.jsx)(v,{value:`opt`,"aria-label":`Opción`,children:(0,w.jsx)(y,{value:`opt`,"aria-label":`Opción`})})},A={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<RadioGroup value="opt" aria-label="Opción">
  <Radio value="opt" aria-label="Opción" disabled />
</RadioGroup>`}}},render:()=>(0,w.jsx)(v,{value:`opt`,"aria-label":`Opción`,children:(0,w.jsx)(y,{value:`opt`,"aria-label":`Opción`,disabled:!0})})},j={name:`Selected & states`,parameters:E,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`},r=[{label:`Unselected`,selected:!1},{label:`Selected`,selected:!0}];return(0,w.jsx)(`div`,{style:{padding:8},children:(0,w.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Selected`}),(0,w.jsx)(`th`,{style:e,children:`Default`}),(0,w.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,w.jsx)(`tbody`,{children:r.map(({label:e,selected:r})=>(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{style:t,children:e}),(0,w.jsx)(`td`,{style:n,children:(0,w.jsx)(S,{selected:r,disabled:!1})}),(0,w.jsx)(`td`,{style:n,children:(0,w.jsx)(S,{selected:r,disabled:!0})})]},e))})]})})}},M={name:`Ejemplo de uso`,parameters:E,render:()=>{let[e,t]=(0,C.useState)(`email`);return(0,w.jsxs)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:360,display:`flex`,flexDirection:`column`,gap:16},children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h3`,{style:{margin:`0 0 4px`,fontSize:16,fontWeight:600},children:`Canal de contacto`}),(0,w.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#666`},children:`Elige exactamente una opción. El label está fuera del control base.`})]}),(0,w.jsxs)(v,{value:e,onValueChange:t,"aria-label":`Canal de contacto`,children:[(0,w.jsxs)(`label`,{className:g.field,children:[(0,w.jsx)(y,{value:`email`,id:`contact-email`}),(0,w.jsx)(`span`,{className:g.label,children:`Correo electrónico`})]}),(0,w.jsxs)(`label`,{className:g.field,children:[(0,w.jsx)(y,{value:`phone`,id:`contact-phone`}),(0,w.jsx)(`span`,{className:g.label,children:`Teléfono`})]}),(0,w.jsxs)(`label`,{className:g.field,children:[(0,w.jsx)(y,{value:`none`,id:`contact-none`,disabled:!0}),(0,w.jsx)(`span`,{className:g.label,children:`No contactar`})]})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false
  },
  render: args => <Specimen {...args} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<RadioGroup aria-label="Opción">
  <Radio value="opt" aria-label="Opción" />
</RadioGroup>\`
      }
    }
  },
  render: () => <RadioGroup aria-label="Opción">\r
      <Radio value="opt" aria-label="Opción" />\r
    </RadioGroup>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<RadioGroup value="opt" aria-label="Opción">
  <Radio value="opt" aria-label="Opción" />
</RadioGroup>\`
      }
    }
  },
  render: () => <RadioGroup value="opt" aria-label="Opción">\r
      <Radio value="opt" aria-label="Opción" />\r
    </RadioGroup>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<RadioGroup value="opt" aria-label="Opción">
  <Radio value="opt" aria-label="Opción" disabled />
</RadioGroup>\`
      }
    }
  },
  render: () => <RadioGroup value="opt" aria-label="Opción">\r
      <Radio value="opt" aria-label="Opción" disabled />\r
    </RadioGroup>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Selected & states',
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
      label: 'Unselected',
      selected: false
    }, {
      label: 'Selected',
      selected: true
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
            }}>Selected</th>\r
              <th style={th}>Default</th>\r
              <th style={th}>Disabled</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {rows.map(({
            label,
            selected
          }) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                <td style={td}>\r
                  <Specimen selected={selected} disabled={false} />\r
                </td>\r
                <td style={td}>\r
                  <Specimen selected={selected} disabled />\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [value, setValue] = useState('email');
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
        }}>Canal de contacto</h3>\r
          <p style={{
          margin: 0,
          fontSize: 13,
          color: '#666'
        }}>\r
            Elige exactamente una opción. El label está fuera del control base.\r
          </p>\r
        </div>\r
        <RadioGroup value={value} onValueChange={setValue} aria-label="Canal de contacto">\r
          <label className={styles.field}>\r
            <Radio value="email" id="contact-email" />\r
            <span className={styles.label}>Correo electrónico</span>\r
          </label>\r
          <label className={styles.field}>\r
            <Radio value="phone" id="contact-phone" />\r
            <span className={styles.label}>Teléfono</span>\r
          </label>\r
          <label className={styles.field}>\r
            <Radio value="none" id="contact-none" disabled />\r
            <span className={styles.label}>No contactar</span>\r
          </label>\r
        </RadioGroup>\r
      </div>;
  }
}`,...M.parameters?.docs?.source},description:{story:`Uso mínimo: una opción exclusiva dentro de un grupo.\r
Label y estructura del grupo = patrón consumidor.`,...M.parameters?.docs?.description}}},N=[`Playground`,`Unselected`,`Selected`,`Disabled`,`AllStates`,`InContext`]}))();export{j as AllStates,A as Disabled,M as InContext,D as Playground,k as Selected,O as Unselected,N as __namedExportsOrder,T as default};