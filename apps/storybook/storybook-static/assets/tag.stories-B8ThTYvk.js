import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-DZgM_VOp.js";import{o as r,t as i}from"./icons-Dn-Lbxoc.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";var s,c,l,u,d=e((()=>{s=`_root_hweau_1`,c=`_iconWrapper_hweau_21`,l=`_label_hweau_35`,u={root:s,iconWrapper:c,label:l}}));function f({size:e=`sm`,tone:t=`neutral`,label:n,icon:r,className:i,...a}){return(0,p.jsxs)(`span`,{"data-slot":`tag`,"data-size":e,"data-tone":t,className:o(u.root,i),...a,children:[r&&(0,p.jsx)(`span`,{className:u.iconWrapper,"aria-hidden":`true`,children:r}),(0,p.jsx)(`span`,{className:u.label,children:n})]})}var p,m=e((()=>{n(),a(),d(),p=t(),f.__docgenInfo={description:`Clasificación o identificación de contenido. No interactivo: sin State, selected, dismiss, href ni onClick.`,methods:[],displayName:`Tag`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`'neutral' | 'brand'`,elements:[{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'brand'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Label breve y específico de la clasificación.`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Leading icon opcional (instance swap). Complementario; no única fuente de significado.`}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w,T;e((()=>{m(),r(),h=t(),g={title:`Components/Labels & Status/Tag`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Clasificación o identificación de contenido. No interactivo; la identidad se resuelve con Semantic modes. No comunica condiciones del sistema ni ejecuta acciones.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`],description:`Size: sm · md`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},tone:{control:`select`,options:[`neutral`,`brand`],description:`neutral: baja prominencia · brand: mayor énfasis de marca`,table:{type:{summary:`string`},defaultValue:{summary:`neutral`}}},label:{control:`text`,description:`Label breve (ej. Virtual, Posgrado, Campus Monterrey)`},showIcon:{control:`boolean`,description:`Icon visible (opcional; instance swap vía prop icon)`,table:{defaultValue:{summary:`false`}}},className:{control:!1,table:{disable:!0}}}},_={docs:{canvas:{sourceState:`none`}}},v=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`}],y={args:{size:`sm`,tone:`neutral`,label:`Virtual`,showIcon:!1},render:({showIcon:e,...t})=>(0,h.jsx)(f,{...t,icon:e?(0,h.jsx)(i,{}):void 0})},b={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Tag tone="neutral" label="Posgrado" />`}}},render:()=>(0,h.jsx)(f,{tone:`neutral`,label:`Posgrado`})},x={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Tag tone="brand" label="Ingeniería" />`}}},render:()=>(0,h.jsx)(f,{tone:`brand`,label:`Ingeniería`})},S={name:`With icon`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Tag tone="brand" label="Campus Monterrey" icon={<BagIcon />} />`}}},render:()=>(0,h.jsx)(f,{tone:`brand`,label:`Campus Monterrey`,icon:(0,h.jsx)(i,{})})},C={name:`Tone & size`,parameters:_,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`},r=[{label:`Neutral`,render:e=>(0,h.jsx)(f,{size:e,tone:`neutral`,label:`Virtual`})},{label:`Brand`,render:e=>(0,h.jsx)(f,{size:e,tone:`brand`,label:`Posgrado`})},{label:`Brand + icon`,render:e=>(0,h.jsx)(f,{size:e,tone:`brand`,label:`Ingeniería`,icon:(0,h.jsx)(i,{})})}];return(0,h.jsx)(`div`,{style:{padding:8},children:(0,h.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Tone`}),v.map(({value:t,sizeLabel:n})=>(0,h.jsx)(`th`,{style:e,children:n},t))]})}),(0,h.jsx)(`tbody`,{children:r.map(({label:e,render:r})=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{style:t,children:e}),v.map(({value:e})=>(0,h.jsx)(`td`,{style:n,children:r(e)},e))]},e))})]})})}},w={name:`Ejemplo de uso`,parameters:_,render:()=>(0,h.jsxs)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:360,padding:16,border:`1px solid #e5e5e5`,borderRadius:8,display:`flex`,flexDirection:`column`,gap:12},children:[(0,h.jsx)(`h3`,{style:{margin:0,fontSize:16,fontWeight:600},children:`Diseño de interfaces`}),(0,h.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#666`,lineHeight:1.4},children:`Fundamentos de UI para productos digitales educativos.`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,h.jsx)(f,{size:`sm`,tone:`brand`,label:`Virtual`}),(0,h.jsx)(f,{size:`sm`,tone:`neutral`,label:`Posgrado`}),(0,h.jsx)(f,{size:`sm`,tone:`neutral`,label:`Campus Monterrey`})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    tone: 'neutral',
    label: 'Virtual',
    showIcon: false
  },
  render: ({
    showIcon,
    ...args
  }) => <Tag {...args} icon={showIcon ? <BagIcon /> : undefined} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Tag tone="neutral" label="Posgrado" />\`
      }
    }
  },
  render: () => <Tag tone="neutral" label="Posgrado" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Tag tone="brand" label="Ingeniería" />\`
      }
    }
  },
  render: () => <Tag tone="brand" label="Ingeniería" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With icon',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Tag tone="brand" label="Campus Monterrey" icon={<BagIcon />} />\`
      }
    }
  },
  render: () => <Tag tone="brand" label="Campus Monterrey" icon={<BagIcon />} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Tone & size',
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
      label: 'Neutral',
      render: (size: 'sm' | 'md') => <Tag size={size} tone="neutral" label="Virtual" />
    }, {
      label: 'Brand',
      render: (size: 'sm' | 'md') => <Tag size={size} tone="brand" label="Posgrado" />
    }, {
      label: 'Brand + icon',
      render: (size: 'sm' | 'md') => <Tag size={size} tone="brand" label="Ingeniería" icon={<BagIcon />} />
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
            }}>Tone</th>\r
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 360,
    padding: 16,
    border: '1px solid #e5e5e5',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      <h3 style={{
      margin: 0,
      fontSize: 16,
      fontWeight: 600
    }}>Diseño de interfaces</h3>\r
      <p style={{
      margin: 0,
      fontSize: 13,
      color: '#666',
      lineHeight: 1.4
    }}>\r
        Fundamentos de UI para productos digitales educativos.\r
      </p>\r
      <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>\r
        <Tag size="sm" tone="brand" label="Virtual" />\r
        <Tag size="sm" tone="neutral" label="Posgrado" />\r
        <Tag size="sm" tone="neutral" label="Campus Monterrey" />\r
      </div>\r
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`Neutral`,`Brand`,`WithIcon`,`AllTones`,`InContext`]}))();export{C as AllTones,x as Brand,w as InContext,b as Neutral,y as Playground,S as WithIcon,T as __namedExportsOrder,g as default};