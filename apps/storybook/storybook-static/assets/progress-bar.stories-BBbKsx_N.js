import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";import{n as o,t as s}from"./bar-fkKsW32i.js";var c,l,u,d,f,p,m=e((()=>{c=`_root_g0fua_1`,l=`_label_g0fua_17`,u=`_row_g0fua_43`,d=`_bar_g0fua_55`,f=`_value_g0fua_65`,p={root:c,label:l,row:u,bar:d,value:f}}));function h(e,t,n){return n===`fraction`?`${e} / ${t}`:`${t>0?Math.round(e/t*100):0}%`}function g({label:e,value:t=0,max:n=100,valueFormat:r=`percent`,className:i,...s}){let c=_.useId(),l=n>0?n:100,u=Math.min(l,Math.max(0,t)),d=h(u,l,r),f=r===`fraction`?`${u} de ${l}`:d;return(0,v.jsxs)(`div`,{"data-slot":`progress-bar`,"data-value-format":r,className:a(p.root,i),...s,children:[(0,v.jsx)(`span`,{id:c,className:p.label,children:e}),(0,v.jsxs)(`div`,{className:p.row,children:[(0,v.jsx)(o,{className:p.bar,value:u,max:l,"aria-labelledby":c,"aria-valuetext":f}),(0,v.jsx)(`span`,{className:p.value,"aria-hidden":`true`,children:d})]})]})}var _,v,y=e((()=>{_=t(r(),1),i(),s(),m(),v=n(),g.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{label:{required:!0,tsType:{name:`string`},description:`Label visible (Semantic/Label/Medium/Strong).`},value:{required:!1,tsType:{name:`number`},description:`Progreso actual.`,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:`Valor máximo.`,defaultValue:{value:`100`,computed:!1}},valueFormat:{required:!1,tsType:{name:`union`,raw:`'percent' | 'fraction'`,elements:[{name:`literal`,value:`'percent'`},{name:`literal`,value:`'fraction'`}]},description:`Cómo se muestra el dato: porcentaje o fracción.`,defaultValue:{value:`'percent'`,computed:!1}}},composes:[`Omit`]}})),b,x,S,C,w,T,E,D,O;e((()=>{y(),b=n(),x={title:`Components/Feedback/ProgressBar`,component:g,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Progreso con label y dato numérico (porcentaje o fracción).`}}},argTypes:{label:{control:`text`,description:`Label visible`},value:{control:{type:`range`,min:0,max:100,step:1},description:`Progreso actual`,table:{defaultValue:{summary:`0`}}},max:{control:`number`,description:`Valor máximo`,table:{defaultValue:{summary:`100`}}},valueFormat:{control:`radio`,options:[`percent`,`fraction`],description:`Formato del dato junto a la barra`,table:{defaultValue:{summary:`percent`}}},className:{control:!1,table:{disable:!0}}}},S={docs:{canvas:{sourceState:`none`}}},C={maxWidth:360},w={args:{label:`Carga de documentos`,value:40,max:100,valueFormat:`percent`},render:e=>(0,b.jsx)(`div`,{style:C,children:(0,b.jsx)(g,{...e})})},T={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ProgressBar
  label="Carga de documentos"
  value={40}
/>`}}},render:()=>(0,b.jsx)(`div`,{style:C,children:(0,b.jsx)(g,{label:`Carga de documentos`,value:40})})},E={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ProgressBar
  label="Carga de documentos"
  value={2}
  max={5}
  valueFormat="fraction"
/>`}}},render:()=>(0,b.jsx)(`div`,{style:C,children:(0,b.jsx)(g,{label:`Carga de documentos`,value:2,max:5,valueFormat:`fraction`})})},D={name:`Formats`,parameters:S,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280};return(0,b.jsx)(`div`,{style:{padding:8},children:(0,b.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{style:{...e,paddingLeft:0},children:`Format`}),(0,b.jsx)(`th`,{style:e,children:`ProgressBar`})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{style:t,children:`Percent`}),(0,b.jsx)(`td`,{style:n,children:(0,b.jsx)(g,{label:`Carga de documentos`,value:40})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{style:t,children:`Fraction`}),(0,b.jsx)(`td`,{style:n,children:(0,b.jsx)(g,{label:`Carga de documentos`,value:2,max:5,valueFormat:`fraction`})})]})]})]})})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Carga de documentos',
    value: 40,
    max: 100,
    valueFormat: 'percent'
  },
  render: args => <div style={frame}>\r
      <ProgressBar {...args} />\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`Percent`,`Fraction`,`AllFormats`]}))();export{D as AllFormats,E as Fraction,T as Percent,w as Playground,O as __namedExportsOrder,x as default};