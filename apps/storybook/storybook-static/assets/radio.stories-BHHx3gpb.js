import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n}from"./iframe-D2oEYGbO.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{i,n as a,r as o,t as s}from"./dist-cADYtRMK.js";import{n as c,t as l}from"./utils-D8qMR3V9.js";var u,d,f,p,m,h,g,_=e((()=>{u=`_group_5ri8d_1`,d=`_root_5ri8d_11`,f=`_indicator_5ri8d_157`,p=`_dot_5ri8d_173`,m=`_field_5ri8d_197`,h=`_label_5ri8d_221`,g={group:u,root:d,indicator:f,dot:p,field:m,label:h}}));function v({className:e,...t}){return(0,b.jsx)(i,{"data-slot":`radio-group`,className:l(g.group,e),...t})}function y({className:e,...t}){return(0,b.jsx)(o,{"data-slot":`radio`,className:l(g.root,e),...t,children:(0,b.jsx)(a,{"data-slot":`radio-indicator`,className:g.indicator,children:(0,b.jsx)(`span`,{className:g.dot})})})}var b,x=e((()=>{n(),s(),c(),_(),b=r(),v.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`},y.__docgenInfo={description:``,methods:[],displayName:`Radio`}}));function S(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}function C({disabled:e=!1}){let[t,n]=(0,w.useState)(`a`);return(0,T.jsxs)(v,{value:t,onValueChange:n,"aria-label":`Opciones`,children:[(0,T.jsxs)(`label`,{className:g.field,children:[(0,T.jsx)(y,{value:`a`,id:`radio-a`,disabled:e}),(0,T.jsx)(`span`,{className:g.label,children:`Opción A`})]}),(0,T.jsxs)(`label`,{className:g.field,children:[(0,T.jsx)(y,{value:`b`,id:`radio-b`,disabled:e}),(0,T.jsx)(`span`,{className:g.label,children:`Opción B`})]}),(0,T.jsxs)(`label`,{className:g.field,children:[(0,T.jsx)(y,{value:`c`,id:`radio-c`,disabled:e}),(0,T.jsx)(`span`,{className:g.label,children:`Opción C`})]})]})}var w,T,E,D,O,k,A;e((()=>{w=t(n(),1),x(),_(),T=r(),E={title:`Components/Radio`,component:y,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{disabled:{control:`boolean`}}},D={args:{disabled:!1},render:({disabled:e})=>(0,T.jsx)(C,{disabled:e})},O={render:()=>(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:12},children:`Unselected`}),(0,T.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(v,{"aria-label":`Unselected default`,children:(0,T.jsx)(y,{value:`u1`})}),(0,T.jsx)(`div`,{style:S(),children:`default`})]}),(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(v,{"aria-label":`Unselected disabled`,children:(0,T.jsx)(y,{value:`u2`,disabled:!0})}),(0,T.jsx)(`div`,{style:S(),children:`disabled`})]})]})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:12},children:`Selected`}),(0,T.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(v,{value:`s1`,"aria-label":`Selected default`,children:(0,T.jsx)(y,{value:`s1`})}),(0,T.jsx)(`div`,{style:S(),children:`default`})]}),(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(v,{value:`s2`,"aria-label":`Selected disabled`,children:(0,T.jsx)(y,{value:`s2`,disabled:!0})}),(0,T.jsx)(`div`,{style:S(),children:`disabled`})]})]})]})]})},k={name:`Ejemplo de uso`,render:()=>{let[e,t]=(0,w.useState)(`email`);return(0,T.jsxs)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:360,display:`flex`,flexDirection:`column`,gap:16},children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h3`,{style:{margin:`0 0 4px`,fontSize:16,fontWeight:600},children:`Canal de contacto`}),(0,T.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#666`},children:`¿Cómo prefieres que te contactemos?`})]}),(0,T.jsxs)(v,{value:e,onValueChange:t,"aria-label":`Canal de contacto`,children:[(0,T.jsxs)(`label`,{className:g.field,children:[(0,T.jsx)(y,{value:`email`,id:`contact-email`}),(0,T.jsx)(`span`,{className:g.label,children:`Correo electrónico`})]}),(0,T.jsxs)(`label`,{className:g.field,children:[(0,T.jsx)(y,{value:`phone`,id:`contact-phone`}),(0,T.jsx)(`span`,{className:g.label,children:`Teléfono`})]}),(0,T.jsxs)(`label`,{className:g.field,children:[(0,T.jsx)(y,{value:`none`,id:`contact-none`,disabled:!0}),(0,T.jsx)(`span`,{className:g.label,children:`No contactar`})]})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: ({
    disabled
  }) => <PlaygroundRadios disabled={disabled} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 12
      }}>Unselected</h2>\r
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <RadioGroup aria-label="Unselected default">\r
              <Radio value="u1" />\r
            </RadioGroup>\r
            <div style={captionStyle()}>default</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <RadioGroup aria-label="Unselected disabled">\r
              <Radio value="u2" disabled />\r
            </RadioGroup>\r
            <div style={captionStyle()}>disabled</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 12
      }}>Selected</h2>\r
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <RadioGroup value="s1" aria-label="Selected default">\r
              <Radio value="s1" />\r
            </RadioGroup>\r
            <div style={captionStyle()}>default</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <RadioGroup value="s2" aria-label="Selected disabled">\r
              <Radio value="s2" disabled />\r
            </RadioGroup>\r
            <div style={captionStyle()}>disabled</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
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
            ¿Cómo prefieres que te contactemos?\r
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
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`AllStates`,`InContext`]}))();export{O as AllStates,k as InContext,D as Playground,A as __namedExportsOrder,E as default};