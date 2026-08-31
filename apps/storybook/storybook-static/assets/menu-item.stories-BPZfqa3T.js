import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1d028_9`,o={root:a}}));function c({label:e,className:t,disabled:n,type:r=`button`,...a}){return(0,l.jsx)(`button`,{type:r,"data-slot":`menu-item`,disabled:n,className:i(o.root,t),...a,children:e})}var l,u=e((()=>{n(),r(),s(),l=t(),c.__docgenInfo={description:`Ítem de menú. Default, hover, pressed, focus-visible y disabled son CSS nativos.`,methods:[],displayName:`MenuItem`,props:{label:{required:!0,tsType:{name:`string`},description:`Label (string editable).`},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}},composes:[`Omit`]}})),d,f,p,m,h,g,_,v;e((()=>{n(),u(),d=t(),f={title:`Components/Navigation/MenuItem`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Ítem de menú.`}}},argTypes:{label:{control:`text`,description:`Label (string editable)`},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}}}},p={docs:{canvas:{sourceState:`none`}}},m={args:{label:`Editar`,disabled:!1}},h={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<MenuItem label="Editar" />`}}},render:()=>(0,d.jsx)(c,{label:`Editar`})},g={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<MenuItem label="Editar" disabled />`}}},render:()=>(0,d.jsx)(c,{label:`Editar`,disabled:!0})},_={name:`States`,parameters:p,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={textAlign:`center`,verticalAlign:`middle`,padding:`16px 16px`};return(0,d.jsx)(`div`,{style:{padding:8},children:(0,d.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{style:e,children:`Default`}),(0,d.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,d.jsx)(`tbody`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{style:t,children:(0,d.jsx)(c,{label:`Editar`})}),(0,d.jsx)(`td`,{style:t,children:(0,d.jsx)(c,{label:`Editar`,disabled:!0})})]})})]})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Editar',
    disabled: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<MenuItem label="Editar" />\`
      }
    }
  },
  render: () => <MenuItem label="Editar" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<MenuItem label="Editar" disabled />\`
      }
    }
  },
  render: () => <MenuItem label="Editar" disabled />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'States',
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
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 16px'
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={th}>Default</th>\r
              <th style={th}>Disabled</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={td}>\r
                <MenuItem label="Editar" />\r
              </td>\r
              <td style={td}>\r
                <MenuItem label="Editar" disabled />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Default`,`Disabled`,`AllStates`]}))();export{_ as AllStates,h as Default,g as Disabled,m as Playground,v as __namedExportsOrder,f as default};