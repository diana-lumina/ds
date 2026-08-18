import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-BPJdu4Wu.js";import{a as i,n as a,x as o}from"./icons-BZJDXWBE.js";import{n as s,t as c}from"./utils-D8qMR3V9.js";var l,u,d,f,p=e((()=>{l=`_root_754jn_1`,u=`_marker_754jn_17`,d=`_label_754jn_61`,f={root:l,marker:u,label:d}}));function m({state:e=`upcoming`,label:t,icon:n,className:r,...i}){return(0,h.jsxs)(`div`,{"data-slot":`progress-step`,"data-state":e,"aria-current":e===`current`?`step`:void 0,"aria-disabled":e===`disabled`?!0:void 0,className:c(f.root,r),...i,children:[(0,h.jsx)(`span`,{className:f.marker,"aria-hidden":`true`,children:n}),(0,h.jsx)(`span`,{className:f.label,children:t})]})}var h,g=e((()=>{r(),s(),p(),h=n(),m.__docgenInfo={description:``,methods:[],displayName:`ProgressStep`,props:{state:{required:!1,tsType:{name:`union`,raw:`| 'completed'\r
| 'current'\r
| 'upcoming'\r
| 'error'\r
| 'disabled'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'current'`},{name:`literal`,value:`'upcoming'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:`Estado visual del paso.`,defaultValue:{value:`'upcoming'`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Texto debajo del marker.`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Contenido del marker: ícono o número.`}},composes:[`Omit`]}})),_=e((()=>{g()})),v,y,b,x,S,C=e((()=>{v=`_list_ecy37_1`,y=`_item_ecy37_17`,b=`_connector_ecy37_35`,x=`_line_ecy37_55`,S={list:v,item:y,connector:b,line:x}}));function w(e){return D.isValidElement(e)?e.props.state??`upcoming`:`upcoming`}function T(e){return e===`completed`?`completed`:`upcoming`}function E({className:e,children:t,"aria-label":n=`Progreso`,...r}){let i=D.Children.toArray(t).filter(Boolean);return(0,O.jsx)(`nav`,{"data-slot":`progress-indicator`,"aria-label":n,className:c(e),...r,children:(0,O.jsx)(`ol`,{className:S.list,children:i.map((e,t)=>(0,O.jsxs)(`li`,{className:S.item,children:[e,t<i.length-1?(0,O.jsx)(`span`,{"data-slot":`progress-indicator-connector`,className:S.connector,"data-state":T(w(e)),"aria-hidden":`true`,children:(0,O.jsx)(`span`,{className:S.line})}):null]},t))})})}var D,O,k=e((()=>{D=t(r(),1),s(),C(),O=n(),E.__docgenInfo={description:``,methods:[],displayName:`ProgressIndicator`,props:{"aria-label":{defaultValue:{value:`'Progreso'`,computed:!1},required:!1}}}})),A,j,M,N,P,F,I,L,R;e((()=>{a(),_(),k(),A=n(),j={title:`Components/Feedback/ProgressIndicator`,component:E,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Secuencia de ProgressStep con conector de 72px entre cada paso. El conector es completed si el paso anterior está completed; si no, upcoming.`}}},argTypes:{children:{control:!1},className:{control:!1,table:{disable:!0}}}},M={docs:{canvas:{sourceState:`none`}}},N={render:()=>(0,A.jsxs)(E,{children:[(0,A.jsx)(m,{state:`completed`,label:`Datos personales`,icon:(0,A.jsx)(o,{})}),(0,A.jsx)(m,{state:`current`,label:`Pago`,icon:2}),(0,A.jsx)(m,{state:`upcoming`,label:`Confirmación`,icon:3})]})},P={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ProgressIndicator>
  <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
  <ProgressStep state="current" label="Pago" icon={2} />
  <ProgressStep state="upcoming" label="Confirmación" icon={3} />
</ProgressIndicator>`}}},render:()=>(0,A.jsxs)(E,{children:[(0,A.jsx)(m,{state:`completed`,label:`Datos personales`,icon:(0,A.jsx)(o,{})}),(0,A.jsx)(m,{state:`current`,label:`Pago`,icon:2}),(0,A.jsx)(m,{state:`upcoming`,label:`Confirmación`,icon:3})]})},F={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ProgressIndicator>
  <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
  <ProgressStep state="error" label="Pago" icon={<WarningIcon />} />
  <ProgressStep state="upcoming" label="Confirmación" icon={3} />
</ProgressIndicator>`}}},render:()=>(0,A.jsxs)(E,{children:[(0,A.jsx)(m,{state:`completed`,label:`Datos personales`,icon:(0,A.jsx)(o,{})}),(0,A.jsx)(m,{state:`error`,label:`Pago`,icon:(0,A.jsx)(i,{})}),(0,A.jsx)(m,{state:`upcoming`,label:`Confirmación`,icon:3})]})},I={name:`All completed`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ProgressIndicator>
  <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
  <ProgressStep state="completed" label="Pago" icon={<CheckIcon />} />
  <ProgressStep state="completed" label="Confirmación" icon={<CheckIcon />} />
</ProgressIndicator>`}}},render:()=>(0,A.jsxs)(E,{children:[(0,A.jsx)(m,{state:`completed`,label:`Datos personales`,icon:(0,A.jsx)(o,{})}),(0,A.jsx)(m,{state:`completed`,label:`Pago`,icon:(0,A.jsx)(o,{})}),(0,A.jsx)(m,{state:`completed`,label:`Confirmación`,icon:(0,A.jsx)(o,{})})]})},L={name:`With disabled`,parameters:M,render:()=>(0,A.jsxs)(E,{children:[(0,A.jsx)(m,{state:`completed`,label:`Datos personales`,icon:(0,A.jsx)(o,{})}),(0,A.jsx)(m,{state:`current`,label:`Pago`,icon:2}),(0,A.jsx)(m,{state:`disabled`,label:`Envío`,icon:3})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ProgressIndicator>\r
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />\r
      <ProgressStep state="current" label="Pago" icon={2} />\r
      <ProgressStep state="upcoming" label="Confirmación" icon={3} />\r
    </ProgressIndicator>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ProgressIndicator>
  <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
  <ProgressStep state="current" label="Pago" icon={2} />
  <ProgressStep state="upcoming" label="Confirmación" icon={3} />
</ProgressIndicator>\`
      }
    }
  },
  render: () => <ProgressIndicator>\r
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />\r
      <ProgressStep state="current" label="Pago" icon={2} />\r
      <ProgressStep state="upcoming" label="Confirmación" icon={3} />\r
    </ProgressIndicator>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ProgressIndicator>
  <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
  <ProgressStep state="error" label="Pago" icon={<WarningIcon />} />
  <ProgressStep state="upcoming" label="Confirmación" icon={3} />
</ProgressIndicator>\`
      }
    }
  },
  render: () => <ProgressIndicator>\r
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />\r
      <ProgressStep state="error" label="Pago" icon={<WarningIcon />} />\r
      <ProgressStep state="upcoming" label="Confirmación" icon={3} />\r
    </ProgressIndicator>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'All completed',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ProgressIndicator>
  <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
  <ProgressStep state="completed" label="Pago" icon={<CheckIcon />} />
  <ProgressStep state="completed" label="Confirmación" icon={<CheckIcon />} />
</ProgressIndicator>\`
      }
    }
  },
  render: () => <ProgressIndicator>\r
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />\r
      <ProgressStep state="completed" label="Pago" icon={<CheckIcon />} />\r
      <ProgressStep state="completed" label="Confirmación" icon={<CheckIcon />} />\r
    </ProgressIndicator>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'With disabled',
  parameters: hideCode,
  render: () => <ProgressIndicator>\r
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />\r
      <ProgressStep state="current" label="Pago" icon={2} />\r
      <ProgressStep state="disabled" label="Envío" icon={3} />\r
    </ProgressIndicator>
}`,...L.parameters?.docs?.source}}},R=[`Playground`,`Default`,`Error`,`AllCompleted`,`WithDisabled`]}))();export{I as AllCompleted,P as Default,F as Error,N as Playground,L as WithDisabled,R as __namedExportsOrder,j as default};