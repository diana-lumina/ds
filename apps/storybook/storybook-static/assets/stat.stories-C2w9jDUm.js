import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{d as i,n as a,q as o}from"./icons-QF8wPxMP.js";import{n as s,t as c}from"./utils-D8qMR3V9.js";var l,u,d,f,p,m,h=e((()=>{l=`_root_15x1i_9`,u=`_copy_15x1i_33`,d=`_value_15x1i_5`,f=`_label_15x1i_5`,p=`_icon_15x1i_103`,m={root:l,copy:u,value:d,label:f,icon:p}}));function g({value:e,label:t,icon:n,className:r,...i}){let a=_.useId(),o=_.useId();return(0,v.jsxs)(`div`,{"data-slot":`stat`,"aria-labelledby":a,"aria-describedby":o,className:c(m.root,r),...i,children:[(0,v.jsx)(`span`,{"data-slot":`stat-icon`,className:m.icon,"aria-hidden":`true`,children:n}),(0,v.jsxs)(`div`,{className:m.copy,children:[(0,v.jsx)(`p`,{id:a,className:m.value,children:e}),(0,v.jsx)(`p`,{id:o,className:m.label,children:t})]})]})}var _,v,y=e((()=>{_=t(r(),1),s(),h(),v=n(),g.__docgenInfo={description:`Stat: ícono 32px a la izquierda; value + label a la derecha.`,methods:[],displayName:`Stat`,props:{value:{required:!0,tsType:{name:`string`},description:`Valor (Semantic/Heading/Medium).`},label:{required:!0,tsType:{name:`string`},description:`Label (Semantic/Body/Medium).`},icon:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Ícono 32px, columna izquierda (instance swap).`}},composes:[`Omit`]}})),b,x,S,C,w,T,E;e((()=>{a(),y(),b=n(),x={title:`Components/Data Display/Stat`,component:g,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Dato destacado: ícono 32px a la izquierda; value (Heading Medium) y label (Body Medium) a la derecha.`}}},argTypes:{value:{control:`text`},label:{control:`text`},icon:{control:!1},className:{control:!1,table:{disable:!0}}}},S={docs:{canvas:{sourceState:`none`}}},C={args:{value:`1,248`,label:`Inscripciones`},render:e=>(0,b.jsx)(g,{...e,icon:(0,b.jsx)(i,{})})},w={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Stat value="1,248" label="Inscripciones" icon={<UsersIcon />} />`}}},render:()=>(0,b.jsx)(g,{value:`1,248`,label:`Inscripciones`,icon:(0,b.jsx)(i,{})})},T={name:`Examples`,parameters:S,render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:32,padding:8},children:[(0,b.jsx)(g,{value:`1,248`,label:`Inscripciones`,icon:(0,b.jsx)(i,{})}),(0,b.jsx)(g,{value:`36`,label:`Programas activos`,icon:(0,b.jsx)(o,{})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: '1,248',
    label: 'Inscripciones'
  },
  render: args => <Stat {...args} icon={<UsersIcon />} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Stat value="1,248" label="Inscripciones" icon={<UsersIcon />} />\`
      }
    }
  },
  render: () => <Stat value="1,248" label="Inscripciones" icon={<UsersIcon />} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Examples',
  parameters: hideCode,
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 32,
    padding: 8
  }}>\r
      <Stat value="1,248" label="Inscripciones" icon={<UsersIcon />} />\r
      <Stat value="36" label="Programas activos" icon={<ChartBarIcon />} />\r
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`Default`,`Examples`]}))();export{w as Default,T as Examples,C as Playground,E as __namedExportsOrder,x as default};