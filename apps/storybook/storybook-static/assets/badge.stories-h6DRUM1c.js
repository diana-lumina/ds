import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CFNdY8gy.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1vnqn_1`,o={root:a}}));function c({size:e=`sm`,tone:t=`neutral`,label:n,className:r,...a}){return(0,l.jsx)(`span`,{"data-slot":`badge`,"data-size":e,"data-tone":t,className:i(o.root,r),...a,children:n})}var l,u=e((()=>{n(),r(),s(),l=t(),c.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},tone:{required:!1,tsType:{name:`literal`,value:`'neutral'`},description:``,defaultValue:{value:`'neutral'`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{u(),d=t(),f={title:`Components/Labels & Status/Badge`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Metadata compacta, neutral y no interactiva, siempre adjunta a otro elemento. Badge no comunica estado, severidad, selección ni identidad de marca.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`],description:`Size scale: sm · md.`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},label:{control:`text`,description:`Label (texto editable). Metadata breve: New, Beta u otra cualidad aprobada.`,table:{type:{summary:`string`}}},tone:{control:!1,table:{disable:!0}}}},p=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`}],m={docs:{canvas:{sourceState:`shown`}}},h={docs:{canvas:{sourceState:`none`}}},g={args:{size:`sm`,label:`New`}},_={name:`Size sm`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Badge size="sm" label="New" />`}}},args:{size:`sm`,label:`New`}},v={name:`Size md`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Badge size="md" label="New" />`}}},args:{size:`md`,label:`New`}},y={name:`Label Beta`,parameters:m,args:{size:`sm`,label:`Beta`}},b={name:`Size`,parameters:h,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,d.jsx)(`div`,{style:{padding:8},children:(0,d.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0}}),p.map(({value:t,sizeLabel:n})=>(0,d.jsx)(`th`,{style:e,children:n},t))]})}),(0,d.jsx)(`tbody`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{style:t,children:`Neutral`}),p.map(({value:e})=>(0,d.jsx)(`td`,{style:n,children:(0,d.jsx)(c,{size:e,label:`New`})},e))]})})]})})}},x={name:`Ejemplo de uso`,parameters:h,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,fontFamily:`sans-serif`,maxWidth:360},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,d.jsx)(`h3`,{style:{margin:0,fontSize:16,fontWeight:600},children:`Curso de UX Research`}),(0,d.jsx)(c,{size:`sm`,label:`New`})]}),(0,d.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#666`,lineHeight:1.4},children:`Aprende métodos de investigación para validar hipótesis de producto.`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'New'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Size sm',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Badge size="sm" label="New" />\`
      }
    }
  },
  args: {
    size: 'sm',
    label: 'New'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Size md',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Badge size="md" label="New" />\`
      }
    }
  },
  args: {
    size: 'md',
    label: 'New'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Label Beta',
  parameters: showCode,
  args: {
    size: 'sm',
    label: 'Beta'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Size',
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
            }} />\r
              {SIZES.map(({
              value,
              sizeLabel
            }) => <th key={value} style={th}>\r
                  {sizeLabel}\r
                </th>)}\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Neutral</td>\r
              {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                  <Badge size={value} label="New" />\r
                </td>)}\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontFamily: 'sans-serif',
    maxWidth: 360
  }}>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>\r
        <h3 style={{
        margin: 0,
        fontSize: 16,
        fontWeight: 600
      }}>Curso de UX Research</h3>\r
        <Badge size="sm" label="New" />\r
      </div>\r
      <p style={{
      margin: 0,
      fontSize: 13,
      color: '#666',
      lineHeight: 1.4
    }}>\r
        Aprende métodos de investigación para validar hipótesis de producto.\r
      </p>\r
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Uso mínimo: metadata breve adjunta a otro elemento.`,...x.parameters?.docs?.description}}},S=[`Playground`,`SizeSm`,`SizeMd`,`LabelBeta`,`AllSizes`,`InContext`]}))();export{b as AllSizes,x as InContext,y as LabelBeta,g as Playground,v as SizeMd,_ as SizeSm,S as __namedExportsOrder,f as default};