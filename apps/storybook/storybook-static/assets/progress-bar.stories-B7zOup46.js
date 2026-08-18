import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-BPJdu4Wu.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";import{E as o,T as s,t as c}from"./dist-ZMEdU1YY.js";var l,u,d,f=e((()=>{l=`_root_1ye92_1`,u=`_indicator_1ye92_25`,d={root:l,indicator:u}}));function p({className:e,value:t=0,max:n=100,...r}){let i=n??100,c=i>0?Math.min(100,Math.max(0,(typeof t==`number`?t:0)/i*100)):0;return(0,m.jsx)(o,{"data-slot":`bar`,className:a(d.root,e),value:t,max:n,...r,children:(0,m.jsx)(s,{"data-slot":`bar-indicator`,className:d.indicator,style:{width:`${c}%`}})})}var m,h=e((()=>{r(),c(),i(),f(),m=n(),p.__docgenInfo={description:``,methods:[],displayName:`Bar`,props:{value:{defaultValue:{value:`0`,computed:!1},required:!1},max:{defaultValue:{value:`100`,computed:!1},required:!1}},composes:[`Omit`]}})),g=e((()=>{h()})),_,v,y,b,x,S,C=e((()=>{_=`_root_g0fua_1`,v=`_label_g0fua_17`,y=`_row_g0fua_43`,b=`_bar_g0fua_55`,x=`_value_g0fua_65`,S={root:_,label:v,row:y,bar:b,value:x}}));function w(e,t,n){return n===`fraction`?`${e} / ${t}`:`${t>0?Math.round(e/t*100):0}%`}function T({label:e,value:t=0,max:n=100,valueFormat:r=`percent`,className:i,...o}){let s=E.useId(),c=n>0?n:100,l=Math.min(c,Math.max(0,t)),u=w(l,c,r),d=r===`fraction`?`${l} de ${c}`:u;return(0,D.jsxs)(`div`,{"data-slot":`progress-bar`,"data-value-format":r,className:a(S.root,i),...o,children:[(0,D.jsx)(`span`,{id:s,className:S.label,children:e}),(0,D.jsxs)(`div`,{className:S.row,children:[(0,D.jsx)(p,{className:S.bar,value:l,max:c,"aria-labelledby":s,"aria-valuetext":d}),(0,D.jsx)(`span`,{className:S.value,"aria-hidden":`true`,children:u})]})]})}var E,D,O=e((()=>{E=t(r(),1),i(),g(),C(),D=n(),T.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{label:{required:!0,tsType:{name:`string`},description:`Label visible (Semantic/Label/Medium/Strong).`},value:{required:!1,tsType:{name:`number`},description:`Progreso actual.`,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:`Valor máximo.`,defaultValue:{value:`100`,computed:!1}},valueFormat:{required:!1,tsType:{name:`union`,raw:`'percent' | 'fraction'`,elements:[{name:`literal`,value:`'percent'`},{name:`literal`,value:`'fraction'`}]},description:`Cómo se muestra el dato: porcentaje o fracción.`,defaultValue:{value:`'percent'`,computed:!1}}},composes:[`Omit`]}})),k,A,j,M,N,P,F,I,L;e((()=>{O(),k=n(),A={title:`Components/Feedback/ProgressBar`,component:T,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Progreso con label y dato numérico (porcentaje o fracción).`}}},argTypes:{label:{control:`text`,description:`Label visible`},value:{control:{type:`range`,min:0,max:100,step:1},description:`Progreso actual`,table:{defaultValue:{summary:`0`}}},max:{control:`number`,description:`Valor máximo`,table:{defaultValue:{summary:`100`}}},valueFormat:{control:`radio`,options:[`percent`,`fraction`],description:`Formato del dato junto a la barra`,table:{defaultValue:{summary:`percent`}}},className:{control:!1,table:{disable:!0}}}},j={docs:{canvas:{sourceState:`none`}}},M={maxWidth:360},N={args:{label:`Carga de documentos`,value:40,max:100,valueFormat:`percent`},render:e=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{...e})})},P={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ProgressBar
  label="Carga de documentos"
  value={40}
/>`}}},render:()=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{label:`Carga de documentos`,value:40})})},F={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ProgressBar
  label="Carga de documentos"
  value={2}
  max={5}
  valueFormat="fraction"
/>`}}},render:()=>(0,k.jsx)(`div`,{style:M,children:(0,k.jsx)(T,{label:`Carga de documentos`,value:2,max:5,valueFormat:`fraction`})})},I={name:`Formats`,parameters:j,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280};return(0,k.jsx)(`div`,{style:{padding:8},children:(0,k.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,k.jsx)(`thead`,{children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{style:{...e,paddingLeft:0},children:`Format`}),(0,k.jsx)(`th`,{style:e,children:`ProgressBar`})]})}),(0,k.jsxs)(`tbody`,{children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{style:t,children:`Percent`}),(0,k.jsx)(`td`,{style:n,children:(0,k.jsx)(T,{label:`Carga de documentos`,value:40})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{style:t,children:`Fraction`}),(0,k.jsx)(`td`,{style:n,children:(0,k.jsx)(T,{label:`Carga de documentos`,value:2,max:5,valueFormat:`fraction`})})]})]})]})})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Carga de documentos',
    value: 40,
    max: 100,
    valueFormat: 'percent'
  },
  render: args => <div style={frame}>\r
      <ProgressBar {...args} />\r
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ProgressBar
  label="Carga de documentos"
  value={40}
/>\`
      }
    }
  },
  render: () => <div style={frame}>\r
      <ProgressBar label="Carga de documentos" value={40} />\r
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ProgressBar
  label="Carga de documentos"
  value={2}
  max={5}
  valueFormat="fraction"
/>\`
      }
    }
  },
  render: () => <div style={frame}>\r
      <ProgressBar label="Carga de documentos" value={2} max={5} valueFormat="fraction" />\r
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Formats',
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
            }}>Format</th>\r
              <th style={th}>ProgressBar</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Percent</td>\r
              <td style={td}>\r
                <ProgressBar label="Carga de documentos" value={40} />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Fraction</td>\r
              <td style={td}>\r
                <ProgressBar label="Carga de documentos" value={2} max={5} valueFormat="fraction" />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L=[`Playground`,`Percent`,`Fraction`,`AllFormats`]}))();export{I as AllFormats,F as Fraction,P as Percent,N as Playground,L as __namedExportsOrder,A as default};