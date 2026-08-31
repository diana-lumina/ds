import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{C as r,n as i}from"./icons-QF8wPxMP.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./dist-C_I-8cI4.js";import{n as d,t as f}from"./utils-D8qMR3V9.js";import{t as p}from"./icon-button-Bh3oQobN.js";import{t as m}from"./icon-button-BHD88BXq.js";import{t as h}from"./button-Pbm51Wt4.js";import{t as g}from"./button-CVm1xnLo.js";var _,v,y=e((()=>{_=`_root_2fokg_9`,v={root:_}}));function b({label:e,children:t,side:n=`top`,delayDuration:r=200,open:i,defaultOpen:u,onOpenChange:d,className:p}){return(0,x.jsx)(o,{delayDuration:r,children:(0,x.jsxs)(a,{open:i,defaultOpen:u,onOpenChange:d,delayDuration:r,children:[(0,x.jsx)(c,{asChild:!0,children:t}),(0,x.jsx)(l,{children:(0,x.jsx)(s,{"data-slot":`tooltip`,side:n,sideOffset:8,className:f(v.root,p),children:e})})]})})}var x,S=e((()=>{n(),u(),d(),y(),x=t(),b.__docgenInfo={description:`Tooltip. Sin variantes visuales. Hover y focus-visible abren el overlay (Radix).`,methods:[],displayName:`Tooltip`,props:{label:{required:!0,tsType:{name:`string`},description:`Texto visible del tooltip.`},children:{required:!0,tsType:{name:`ReactReactElement`,raw:`React.ReactElement`},description:`Trigger: un único elemento que acepte ref (Button, IconButton, etc.).`},side:{required:!1,tsType:{name:`union`,raw:`'top' | 'right' | 'bottom' | 'left'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`}]},description:`Posición relativa al trigger. No es variante visual.`,defaultValue:{value:`'top'`,computed:!1}},delayDuration:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),C,w,T,E,D,O;e((()=>{i(),g(),m(),S(),C=t(),w={title:`Components/Overlays/Tooltip`,component:b,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Texto breve de ayuda sobre un control. Sin variantes visuales. Se abre con hover o focus-visible.`}}},argTypes:{label:{control:`text`,description:`Texto visible del tooltip`},side:{control:`radio`,options:[`top`,`right`,`bottom`,`left`],table:{defaultValue:{summary:`top`}}},children:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}}},T={args:{label:`Descargar expediente`,side:`top`},render:e=>(0,C.jsx)(b,{...e,children:(0,C.jsx)(h,{hierarchy:`secondary`,size:`sm`,label:`Acciones`})})},E={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Tooltip label="Descargar expediente">
  <Button hierarchy="secondary" size="sm" label="Acciones" />
</Tooltip>`}}},render:()=>(0,C.jsx)(b,{label:`Descargar expediente`,defaultOpen:!0,children:(0,C.jsx)(h,{hierarchy:`secondary`,size:`sm`,label:`Acciones`})})},D={name:`Con IconButton`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Tooltip label="Más información">
  <IconButton hierarchy="tertiary" size="sm" icon={<InfoIcon />} aria-label="Más información" />
</Tooltip>`}}},render:()=>(0,C.jsx)(b,{label:`Más información`,defaultOpen:!0,children:(0,C.jsx)(p,{hierarchy:`tertiary`,size:`sm`,icon:(0,C.jsx)(r,{}),"aria-label":`Más información`})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descargar expediente',
    side: 'top'
  },
  render: args => <Tooltip {...args}>\r
      <Button hierarchy="secondary" size="sm" label="Acciones" />\r
    </Tooltip>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Tooltip label="Descargar expediente">
  <Button hierarchy="secondary" size="sm" label="Acciones" />
</Tooltip>\`
      }
    }
  },
  render: () => <Tooltip label="Descargar expediente" defaultOpen>\r
      <Button hierarchy="secondary" size="sm" label="Acciones" />\r
    </Tooltip>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Con IconButton',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Tooltip label="Más información">
  <IconButton hierarchy="tertiary" size="sm" icon={<InfoIcon />} aria-label="Más información" />
</Tooltip>\`
      }
    }
  },
  render: () => <Tooltip label="Más información" defaultOpen>\r
      <IconButton hierarchy="tertiary" size="sm" icon={<InfoIcon />} aria-label="Más información" />\r
    </Tooltip>
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`Default`,`IconTrigger`]}))();export{E as Default,D as IconTrigger,T as Playground,O as __namedExportsOrder,w as default};