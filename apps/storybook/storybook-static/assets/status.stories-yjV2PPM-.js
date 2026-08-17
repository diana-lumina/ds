import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-gd-_F7EU.js";import{d as r,n as i}from"./icons-Tz8N1d49.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";var s,c,l,u,d=e((()=>{s=`_root_2zg02_1`,c=`_iconWrapper_2zg02_27`,l=`_label_2zg02_41`,u={root:s,iconWrapper:c,label:l}}));function f({size:e=`sm`,intent:t=`neutral`,label:n,icon:r,className:i,...a}){return(0,p.jsxs)(`span`,{"data-slot":`status`,"data-size":e,"data-intent":t,className:o(u.root,i),...a,children:[r&&(0,p.jsx)(`span`,{className:u.iconWrapper,"aria-hidden":`true`,children:r}),(0,p.jsx)(`span`,{className:u.label,children:n})]})}var p,m=e((()=>{n(),a(),d(),p=t(),f.__docgenInfo={description:`Condición generada por el sistema. No interactivo: sin State, selected, dismiss, href ni onClick.`,methods:[],displayName:`Status`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},intent:{required:!1,tsType:{name:`union`,raw:`'neutral' | 'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Label breve y específico de la condición del sistema.`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Leading icon opcional (instance swap). Complementario; no única fuente de significado.`}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{m(),i(),h=t(),g={title:`Components/Labels & Status/Status`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Condición generada por el sistema. No interactivo; la identidad se resuelve con Semantic modes. No expresa selección, categorías ni navegación.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`],description:`Size: sm · md`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},intent:{control:`select`,options:[`neutral`,`info`,`success`,`warning`,`danger`],description:`neutral · info · success · warning · danger`,table:{type:{summary:`string`},defaultValue:{summary:`neutral`}}},label:{control:`text`,description:`Label breve y específico (ej. Pendiente, Completado)`},showIcon:{control:`boolean`,description:`Icon visible (opcional; instance swap vía prop icon)`,table:{defaultValue:{summary:`false`}}},className:{control:!1,table:{disable:!0}}}},_={docs:{canvas:{sourceState:`none`}}},v=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`}],y=[{value:`neutral`,label:`Pendiente`},{value:`info`,label:`En revisión`},{value:`success`,label:`Completado`},{value:`warning`,label:`Requiere atención`},{value:`danger`,label:`Error`}],b={args:{size:`sm`,intent:`neutral`,label:`Pendiente`,showIcon:!1},render:({showIcon:e,...t})=>(0,h.jsx)(f,{...t,icon:e?(0,h.jsx)(r,{}):void 0})},x={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Status intent="neutral" label="Pendiente" />`}}},render:()=>(0,h.jsx)(f,{intent:`neutral`,label:`Pendiente`})},S={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Status intent="info" label="En revisión" />`}}},render:()=>(0,h.jsx)(f,{intent:`info`,label:`En revisión`})},C={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Status intent="success" label="Completado" />`}}},render:()=>(0,h.jsx)(f,{intent:`success`,label:`Completado`})},w={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Status intent="warning" label="Requiere atención" />`}}},render:()=>(0,h.jsx)(f,{intent:`warning`,label:`Requiere atención`})},T={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Status intent="danger" label="Error" />`}}},render:()=>(0,h.jsx)(f,{intent:`danger`,label:`Error`})},E={name:`With icon`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Status intent="success" label="Completado" icon={<CheckCircleIcon />} />`}}},render:()=>(0,h.jsx)(f,{intent:`success`,label:`Completado`,icon:(0,h.jsx)(r,{})})},D={name:`Intent & size`,parameters:_,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`};return(0,h.jsx)(`div`,{style:{padding:8},children:(0,h.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Intent`}),v.map(({value:t,sizeLabel:n})=>(0,h.jsx)(`th`,{style:e,children:n},t)),(0,h.jsx)(`th`,{style:e,children:`With icon`})]})}),(0,h.jsx)(`tbody`,{children:y.map(({value:e,label:i})=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{style:t,children:e}),v.map(({value:t})=>(0,h.jsx)(`td`,{style:n,children:(0,h.jsx)(f,{size:t,intent:e,label:i})},t)),(0,h.jsx)(`td`,{style:n,children:(0,h.jsx)(f,{size:`sm`,intent:e,label:i,icon:(0,h.jsx)(r,{})})})]},e))})]})})}},O={name:`Ejemplo de uso`,parameters:_,render:()=>(0,h.jsx)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:400,display:`flex`,flexDirection:`column`,gap:12},children:[{title:`Inscripción enviada`,intent:`info`,label:`En revisión`},{title:`Pago confirmado`,intent:`success`,label:`Completado`},{title:`Documentos pendientes`,intent:`warning`,label:`Requiere atención`},{title:`Solicitud rechazada`,intent:`danger`,label:`Error`},{title:`Borrador guardado`,intent:`neutral`,label:`Pendiente`}].map(({title:e,intent:t,label:n})=>(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12,padding:`12px 0`,borderBottom:`1px solid #eee`},children:[(0,h.jsx)(`span`,{style:{fontSize:14},children:e}),(0,h.jsx)(f,{size:`sm`,intent:t,label:n})]},e))})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    intent: 'neutral',
    label: 'Pendiente',
    showIcon: false
  },
  render: ({
    showIcon,
    ...args
  }) => <Status {...args} icon={showIcon ? <CheckCircleIcon /> : undefined} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Status intent="neutral" label="Pendiente" />\`
      }
    }
  },
  render: () => <Status intent="neutral" label="Pendiente" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Status intent="info" label="En revisión" />\`
      }
    }
  },
  render: () => <Status intent="info" label="En revisión" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Status intent="success" label="Completado" />\`
      }
    }
  },
  render: () => <Status intent="success" label="Completado" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Status intent="warning" label="Requiere atención" />\`
      }
    }
  },
  render: () => <Status intent="warning" label="Requiere atención" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Status intent="danger" label="Error" />\`
      }
    }
  },
  render: () => <Status intent="danger" label="Error" />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With icon',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Status intent="success" label="Completado" icon={<CheckCircleIcon />} />\`
      }
    }
  },
  render: () => <Status intent="success" label="Completado" icon={<CheckCircleIcon />} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Intent & size',
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
            }}>Intent</th>\r
              {SIZES.map(({
              value,
              sizeLabel
            }) => <th key={value} style={th}>\r
                  {sizeLabel}\r
                </th>)}\r
              <th style={th}>With icon</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {INTENTS.map(({
            value,
            label
          }) => <tr key={value}>\r
                <td style={rowLabel}>{value}</td>\r
                {SIZES.map(({
              value: size
            }) => <td key={size} style={td}>\r
                    <Status size={size} intent={value} label={label} />\r
                  </td>)}\r
                <td style={td}>\r
                  <Status size="sm" intent={value} label={label} icon={<CheckCircleIcon />} />\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      {[{
      title: 'Inscripción enviada',
      intent: 'info' as const,
      label: 'En revisión'
    }, {
      title: 'Pago confirmado',
      intent: 'success' as const,
      label: 'Completado'
    }, {
      title: 'Documentos pendientes',
      intent: 'warning' as const,
      label: 'Requiere atención'
    }, {
      title: 'Solicitud rechazada',
      intent: 'danger' as const,
      label: 'Error'
    }, {
      title: 'Borrador guardado',
      intent: 'neutral' as const,
      label: 'Pendiente'
    }].map(({
      title,
      intent,
      label
    }) => <div key={title} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 0',
      borderBottom: '1px solid #eee'
    }}>\r
          <span style={{
        fontSize: 14
      }}>{title}</span>\r
          <Status size="sm" intent={intent} label={label} />\r
        </div>)}\r
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`Neutral`,`Info`,`Success`,`Warning`,`Danger`,`WithIcon`,`AllIntents`,`InContext`]}))();export{D as AllIntents,T as Danger,O as InContext,S as Info,x as Neutral,b as Playground,C as Success,w as Warning,E as WithIcon,k as __namedExportsOrder,g as default};