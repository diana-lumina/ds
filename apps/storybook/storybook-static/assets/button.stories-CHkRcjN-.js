import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t}from"./iframe-BPJdu4Wu.js";import{N as n,l as r,n as i}from"./icons-BZJDXWBE.js";import{n as a,t as o}from"./button-bba4p4Ks.js";function s({hierarchy:e,tone:t=`standard`,inverse:i=!1}){let a=i?{...p,color:`rgba(255,255,255,0.7)`,borderBottomColor:`rgba(255,255,255,0.15)`}:p,s=i?{...m,color:`rgba(255,255,255,0.7)`,borderBottomColor:`rgba(255,255,255,0.1)`}:m,l=i?{...h,borderBottomColor:`rgba(255,255,255,0.1)`}:h,d=[{label:`Default`,render:n=>(0,c.jsx)(o,{hierarchy:e,tone:t,size:n,label:`Button`})},{label:`Disabled`,render:n=>(0,c.jsx)(o,{hierarchy:e,tone:t,size:n,label:`Button`,disabled:!0})},{label:`Loading`,render:n=>(0,c.jsx)(o,{hierarchy:e,tone:t,size:n,label:`Button`,loading:!0})},{label:`Icons`,render:i=>(0,c.jsx)(o,{hierarchy:e,tone:t,size:i,label:`Button`,leftIcon:(0,c.jsx)(r,{}),rightIcon:(0,c.jsx)(n,{})})}];return(0,c.jsxs)(`table`,{style:{borderCollapse:`collapse`,marginBottom:8},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{...a,textAlign:`left`,paddingLeft:0}}),u.map(({value:e,sizeLabel:t})=>(0,c.jsx)(`th`,{style:a,children:t},e))]})}),(0,c.jsx)(`tbody`,{children:d.map(({label:e,render:t})=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{style:s,children:e}),u.map(({value:e})=>(0,c.jsx)(`td`,{style:l,children:t(e)},e))]},e))})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{a(),i(),c=t(),l={title:`Components/Actions/Button`,component:o,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Componente de acción principal. `}}},argTypes:{hierarchy:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`destructive`],description:`Jerarquía por intención y prominencia: primary | secondary | tertiary | destructive`,table:{defaultValue:{summary:`primary`}}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Size scale coordinado (altura, tipografía, padding, gap, ícono)`,table:{defaultValue:{summary:`md`}}},tone:{control:`select`,options:[`standard`,`inverse`],description:`inverse solo con primary y secondary (superficies oscuras)`,table:{type:{summary:`string`},defaultValue:{summary:`standard`}}},label:{control:`text`,description:`Label del botón`,table:{type:{summary:`string`}}},leftIcon:{control:!1,description:`Ícono a la izquierda del label`},rightIcon:{control:!1,description:`Ícono a la derecha del label`},loading:{control:`boolean`,description:`Estado de carga; conserva el layout del botón`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}}},args:{hierarchy:`primary`,tone:`standard`,size:`md`,disabled:!1,loading:!1,label:`Button`}},u=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`},{value:`lg`,sizeLabel:`Large`}],d={docs:{canvas:{sourceState:`shown`}}},f={docs:{canvas:{sourceState:`none`}}},p={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},m={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},h={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`},g={},_={parameters:d,args:{hierarchy:`primary`,label:`Button`}},v={parameters:d,args:{hierarchy:`secondary`,label:`Button`}},y={parameters:d,args:{hierarchy:`tertiary`,label:`Button`}},b={parameters:d,args:{hierarchy:`destructive`,label:`Button`}},x={name:`Primary inverse`,parameters:d,args:{hierarchy:`primary`,tone:`inverse`,label:`Button`},decorators:[e=>(0,c.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`},children:(0,c.jsx)(e,{})})]},S={name:`Secondary inverse`,parameters:d,args:{hierarchy:`secondary`,tone:`inverse`,label:`Button`},decorators:[e=>(0,c.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`},children:(0,c.jsx)(e,{})})]},C={name:`Left icon`,parameters:d,args:{label:`Button`,leftIcon:(0,c.jsx)(r,{})}},w={name:`Right icon`,parameters:d,args:{label:`Button`,rightIcon:(0,c.jsx)(n,{})}},T={name:`Icons both`,parameters:d,args:{label:`Button`,leftIcon:(0,c.jsx)(r,{}),rightIcon:(0,c.jsx)(n,{})}},E={parameters:d,args:{label:`Button`,loading:!0}},D={parameters:d,args:{label:`Button`,disabled:!0}},O={name:`Hierarchy & states`,parameters:f,render:()=>(0,c.jsxs)(`div`,{style:{padding:8},children:[(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:12},children:`Primary`}),(0,c.jsx)(s,{hierarchy:`primary`}),(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,margin:`32px 0 12px`},children:`Primary — tone inverse`}),(0,c.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,marginBottom:8},children:(0,c.jsx)(s,{hierarchy:`primary`,tone:`inverse`,inverse:!0})}),(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,margin:`32px 0 12px`},children:`Secondary`}),(0,c.jsx)(s,{hierarchy:`secondary`}),(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,margin:`32px 0 12px`},children:`Secondary — tone inverse`}),(0,c.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,marginBottom:8},children:(0,c.jsx)(s,{hierarchy:`secondary`,tone:`inverse`,inverse:!0})}),(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,margin:`32px 0 12px`},children:`Tertiary`}),(0,c.jsx)(s,{hierarchy:`tertiary`}),(0,c.jsx)(`h2`,{style:{fontFamily:`sans-serif`,margin:`32px 0 12px`},children:`Destructive`}),(0,c.jsx)(s,{hierarchy:`destructive`})]})},k={name:`Ejemplo de uso`,parameters:f,render:()=>(0,c.jsxs)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:400,padding:24,border:`1px solid #e5e5e5`,borderRadius:8,display:`flex`,flexDirection:`column`,gap:16},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{style:{margin:`0 0 4px`,fontSize:16,fontWeight:600},children:`Publicar cambios`}),(0,c.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#666`,lineHeight:1.4},children:`Los cambios serán visibles para todos los usuarios del curso.`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,justifyContent:`flex-end`},children:[(0,c.jsx)(o,{hierarchy:`tertiary`,label:`Cancelar`}),(0,c.jsx)(o,{hierarchy:`primary`,label:`Publicar`})]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    hierarchy: 'primary',
    label: 'Button'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    hierarchy: 'secondary',
    label: 'Button'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    hierarchy: 'tertiary',
    label: 'Button'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    hierarchy: 'destructive',
    label: 'Button'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Primary inverse',
  parameters: showCode,
  args: {
    hierarchy: 'primary',
    tone: 'inverse',
    label: 'Button'
  },
  decorators: [Story => <div style={{
    background: 'var(--color-surface-brand-strong, #231f20)',
    padding: 24,
    borderRadius: 8,
    display: 'inline-block'
  }}>\r
        <Story />\r
      </div>]
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Secondary inverse',
  parameters: showCode,
  args: {
    hierarchy: 'secondary',
    tone: 'inverse',
    label: 'Button'
  },
  decorators: [Story => <div style={{
    background: 'var(--color-surface-brand-strong, #231f20)',
    padding: 24,
    borderRadius: 8,
    display: 'inline-block'
  }}>\r
        <Story />\r
      </div>]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Left icon',
  parameters: showCode,
  args: {
    label: 'Button',
    leftIcon: <ShoppingBagIcon />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Right icon',
  parameters: showCode,
  args: {
    label: 'Button',
    rightIcon: <ArrowRightIcon />
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Icons both',
  parameters: showCode,
  args: {
    label: 'Button',
    leftIcon: <ShoppingBagIcon />,
    rightIcon: <ArrowRightIcon />
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    label: 'Button',
    loading: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    label: 'Button',
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Hierarchy & states',
  parameters: hideCode,
  render: () => <div style={{
    padding: 8
  }}>\r
  \r
      <h2 style={{
      fontFamily: 'sans-serif',
      marginBottom: 12
    }}>Primary</h2>\r
      <HierarchyTable hierarchy="primary" />\r
\r
      <h2 style={{
      fontFamily: 'sans-serif',
      margin: '32px 0 12px'
    }}>Primary — tone inverse</h2>\r
      <div style={{
      background: 'var(--color-surface-brand-strong, #231f20)',
      padding: 24,
      borderRadius: 8,
      marginBottom: 8
    }}>\r
        <HierarchyTable hierarchy="primary" tone="inverse" inverse />\r
      </div>\r
\r
      <h2 style={{
      fontFamily: 'sans-serif',
      margin: '32px 0 12px'
    }}>Secondary</h2>\r
      <HierarchyTable hierarchy="secondary" />\r
\r
      <h2 style={{
      fontFamily: 'sans-serif',
      margin: '32px 0 12px'
    }}>Secondary — tone inverse</h2>\r
      <div style={{
      background: 'var(--color-surface-brand-strong, #231f20)',
      padding: 24,
      borderRadius: 8,
      marginBottom: 8
    }}>\r
        <HierarchyTable hierarchy="secondary" tone="inverse" inverse />\r
      </div>\r
\r
      <h2 style={{
      fontFamily: 'sans-serif',
      margin: '32px 0 12px'
    }}>Tertiary</h2>\r
      <HierarchyTable hierarchy="tertiary" />\r
\r
      <h2 style={{
      fontFamily: 'sans-serif',
      margin: '32px 0 12px'
    }}>Destructive</h2>\r
      <HierarchyTable hierarchy="destructive" />\r
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 400,
    padding: 24,
    border: '1px solid #e5e5e5',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <div>\r
        <h3 style={{
        margin: '0 0 4px',
        fontSize: 16,
        fontWeight: 600
      }}>Publicar cambios</h3>\r
        <p style={{
        margin: 0,
        fontSize: 13,
        color: '#666',
        lineHeight: 1.4
      }}>\r
          Los cambios serán visibles para todos los usuarios del curso.\r
        </p>\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }}>\r
        <Button hierarchy="tertiary" label="Cancelar" />\r
        <Button hierarchy="primary" label="Publicar" />\r
      </div>\r
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Uso mínimo: hierarchy por intención (tertiary de apoyo + primary principal).`,...k.parameters?.docs?.description}}},A=[`Playground`,`Primary`,`Secondary`,`Tertiary`,`Destructive`,`PrimaryInverse`,`SecondaryInverse`,`WithLeftIcon`,`WithRightIcon`,`WithIcons`,`Loading`,`Disabled`,`AllVariants`,`InContext`]}))();export{O as AllVariants,b as Destructive,D as Disabled,k as InContext,E as Loading,g as Playground,_ as Primary,x as PrimaryInverse,v as Secondary,S as SecondaryInverse,y as Tertiary,T as WithIcons,C as WithLeftIcon,w as WithRightIcon,A as __namedExportsOrder,l as default};