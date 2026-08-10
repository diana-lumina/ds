import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n}from"./iframe--pDot38P.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{o as i,s as a,t as o}from"./dist-BQUgenU2.js";import{n as s,t as c}from"./utils-D8qMR3V9.js";var l,u,d,f,p,m,h,g=e((()=>{l=`_root_1tnhn_1`,u=`_indicator_1tnhn_163`,d=`_checkIcon_1tnhn_181`,f=`_mixedIcon_1tnhn_183`,p=`_field_1tnhn_213`,m=`_label_1tnhn_235`,h={root:l,indicator:u,checkIcon:d,mixedIcon:f,field:p,label:m}}));function _(){return(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`9`,viewBox:`0 0 12 9`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,b.jsx)(`path`,{d:`M1 4.5L4.5 8L11 1`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function v(){return(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`10`,height:`2`,viewBox:`0 0 10 2`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,b.jsx)(`path`,{d:`M1 1H9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function y({className:e,...t}){return(0,b.jsx)(i,{"data-slot":`checkbox`,className:c(h.root,e),...t,children:(0,b.jsxs)(a,{"data-slot":`checkbox-indicator`,className:h.indicator,children:[(0,b.jsx)(`span`,{className:h.checkIcon,children:(0,b.jsx)(_,{})}),(0,b.jsx)(`span`,{className:h.mixedIcon,children:(0,b.jsx)(v,{})})]})})}var b,x=e((()=>{n(),o(),s(),g(),b=r(),y.__docgenInfo={description:``,methods:[],displayName:`Checkbox`}}));function S(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}var C,w,T,E,D,O,k;e((()=>{C=t(n(),1),x(),g(),w=r(),T={title:`Components/Checkbox`,component:y,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`

        `}}},argTypes:{checked:{control:`select`,options:[!1,!0,`indeterminate`]},disabled:{control:`boolean`}}},E={args:{checked:!0,disabled:!1,"aria-label":`Aceptar`}},D={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:12},children:`Unchecked`}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,w.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,w.jsx)(y,{"aria-label":`Unchecked`,checked:!1}),(0,w.jsx)(`div`,{style:S(),children:`default`})]}),(0,w.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,w.jsx)(y,{"aria-label":`Unchecked disabled`,checked:!1,disabled:!0}),(0,w.jsx)(`div`,{style:S(),children:`disabled`})]})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:12},children:`Checked`}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,w.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,w.jsx)(y,{"aria-label":`Checked`,checked:!0}),(0,w.jsx)(`div`,{style:S(),children:`default`})]}),(0,w.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,w.jsx)(y,{"aria-label":`Checked disabled`,checked:!0,disabled:!0}),(0,w.jsx)(`div`,{style:S(),children:`disabled`})]})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:12},children:`Mixed`}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,w.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,w.jsx)(y,{"aria-label":`Mixed`,checked:`indeterminate`}),(0,w.jsx)(`div`,{style:S(),children:`default`})]}),(0,w.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,w.jsx)(y,{"aria-label":`Mixed disabled`,checked:`indeterminate`,disabled:!0}),(0,w.jsx)(`div`,{style:S(),children:`disabled`})]})]})]})]})},O={render:()=>{let[e,t]=(0,C.useState)(!0),[n,r]=(0,C.useState)(!1),[i,a]=(0,C.useState)(`indeterminate`);return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,w.jsxs)(`label`,{className:h.field,children:[(0,w.jsx)(y,{id:`cb-notifications`,checked:e,onCheckedChange:e=>t(e===!0)}),(0,w.jsx)(`span`,{className:h.label,children:`Notificaciones`})]}),(0,w.jsxs)(`label`,{className:h.field,children:[(0,w.jsx)(y,{id:`cb-marketing`,checked:n,onCheckedChange:e=>r(e===!0)}),(0,w.jsx)(`span`,{className:h.label,children:`Marketing`})]}),(0,w.jsxs)(`label`,{className:h.field,children:[(0,w.jsx)(y,{id:`cb-terms`,checked:i,onCheckedChange:e=>a(e===`indeterminate`?`indeterminate`:e)}),(0,w.jsx)(`span`,{className:h.label,children:`Seleccionar todo (mixed)`})]})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    'aria-label': 'Aceptar'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 12
      }}>Unchecked</h2>\r
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Checkbox aria-label="Unchecked" checked={false} />\r
            <div style={captionStyle()}>default</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Checkbox aria-label="Unchecked disabled" checked={false} disabled />\r
            <div style={captionStyle()}>disabled</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 12
      }}>Checked</h2>\r
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Checkbox aria-label="Checked" checked />\r
            <div style={captionStyle()}>default</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Checkbox aria-label="Checked disabled" checked disabled />\r
            <div style={captionStyle()}>disabled</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 12
      }}>Mixed</h2>\r
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Checkbox aria-label="Mixed" checked="indeterminate" />\r
            <div style={captionStyle()}>default</div>\r
          </div>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <Checkbox aria-label="Mixed disabled" checked="indeterminate" disabled />\r
            <div style={captionStyle()}>disabled</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [marketing, setMarketing] = useState(false);
    const [terms, setTerms] = useState<boolean | 'indeterminate'>('indeterminate');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>\r
        <label className={styles.field}>\r
          <Checkbox id="cb-notifications" checked={notifications} onCheckedChange={value => setNotifications(value === true)} />\r
          <span className={styles.label}>Notificaciones</span>\r
        </label>\r
        <label className={styles.field}>\r
          <Checkbox id="cb-marketing" checked={marketing} onCheckedChange={value => setMarketing(value === true)} />\r
          <span className={styles.label}>Marketing</span>\r
        </label>\r
        <label className={styles.field}>\r
          <Checkbox id="cb-terms" checked={terms} onCheckedChange={value => setTerms(value === 'indeterminate' ? 'indeterminate' : value)} />\r
          <span className={styles.label}>Seleccionar todo (mixed)</span>\r
        </label>\r
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`AllStates`,`WithLabels`]}))();export{D as AllStates,E as Playground,O as WithLabels,k as __namedExportsOrder,T as default};