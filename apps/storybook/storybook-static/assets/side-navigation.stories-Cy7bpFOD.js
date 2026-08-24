import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CFNdY8gy.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";import{t as o}from"./navigation-item-DQCXfvi1.js";import{t as s}from"./navigation-item-CxqBtxsK.js";var c,l,u,d,f=e((()=>{c=`_root_1mtyz_1`,l=`_heading_1mtyz_19`,u=`_list_1mtyz_41`,d={root:c,heading:l,list:u}}));function p(e){return h.Children.map(e,e=>h.isValidElement(e)?h.cloneElement(e,{context:`side-navigation`}):e)}function m({heading:e,children:t,className:n,"aria-label":r,...i}){let o=h.useId();return(0,g.jsxs)(`nav`,{"data-slot":`side-navigation`,"aria-label":e?void 0:r??`Navegación`,"aria-labelledby":e?o:void 0,className:a(d.root,n),...i,children:[e?(0,g.jsx)(`h2`,{id:o,className:d.heading,children:e}):null,(0,g.jsx)(`div`,{className:d.list,children:p(t)})]})}var h,g,_=e((()=>{h=t(r(),1),i(),f(),g=n(),m.__docgenInfo={description:`Navegación lateral. Compone heading opcional y SLOT de NavigationItem\r
(context=side-navigation). La exclusividad de current la garantiza el consumidor.`,methods:[],displayName:`SideNavigation`,props:{heading:{required:!1,tsType:{name:`string`},description:`Heading opcional de la sección.`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`SLOT nativo: instancias reales de NavigationItem. Current lo aporta cada ítem.`}},composes:[`Omit`]}})),v,y,b,x,S,C,w,T,E;e((()=>{v=t(r(),1),s(),_(),y=n(),b={title:`Components/Navigation/SideNavigation`,component:m,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Navegación lateral`}}},argTypes:{heading:{control:`text`,description:`Heading opcional de la sección`},children:{control:!1,description:`SLOT nativo: instancias reales de NavigationItem`,table:{type:{summary:`ReactNode`}}},className:{control:!1,table:{disable:!0}}}},x={docs:{canvas:{sourceState:`none`}}},S={args:{heading:`Cursos`},render:e=>(0,y.jsxs)(m,{...e,children:[(0,y.jsx)(o,{label:`Inicio`,current:!0}),(0,y.jsx)(o,{label:`Temario`}),(0,y.jsx)(o,{label:`Recursos`})]})},C={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<SideNavigation heading="Cursos">
  <NavigationItem label="Inicio" current />
  <NavigationItem label="Temario" />
  <NavigationItem label="Recursos" />
</SideNavigation>`}}},render:()=>(0,y.jsxs)(m,{heading:`Cursos`,children:[(0,y.jsx)(o,{label:`Inicio`,current:!0}),(0,y.jsx)(o,{label:`Temario`}),(0,y.jsx)(o,{label:`Recursos`})]})},w={name:`Sin heading`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<SideNavigation>
  <NavigationItem label="Inicio" current />
  <NavigationItem label="Temario" />
  <NavigationItem label="Recursos" />
</SideNavigation>`}}},render:()=>(0,y.jsxs)(m,{children:[(0,y.jsx)(o,{label:`Inicio`,current:!0}),(0,y.jsx)(o,{label:`Temario`}),(0,y.jsx)(o,{label:`Recursos`})]})},T={name:`Ejemplo de uso`,parameters:x,render:()=>{let[e,t]=(0,v.useState)(`inicio`);return(0,y.jsx)(m,{heading:`Cursos`,children:[{id:`inicio`,label:`Inicio`},{id:`temario`,label:`Temario`},{id:`recursos`,label:`Recursos`}].map(n=>(0,y.jsx)(o,{label:n.label,current:e===n.id,onClick:()=>t(n.id)},n.id))})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Cursos'
  },
  render: args => <SideNavigation {...args}>\r
      <NavigationItem label="Inicio" current />\r
      <NavigationItem label="Temario" />\r
      <NavigationItem label="Recursos" />\r
    </SideNavigation>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<SideNavigation heading="Cursos">
  <NavigationItem label="Inicio" current />
  <NavigationItem label="Temario" />
  <NavigationItem label="Recursos" />
</SideNavigation>\`
      }
    }
  },
  render: () => <SideNavigation heading="Cursos">\r
      <NavigationItem label="Inicio" current />\r
      <NavigationItem label="Temario" />\r
      <NavigationItem label="Recursos" />\r
    </SideNavigation>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Sin heading',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<SideNavigation>
  <NavigationItem label="Inicio" current />
  <NavigationItem label="Temario" />
  <NavigationItem label="Recursos" />
</SideNavigation>\`
      }
    }
  },
  render: () => <SideNavigation>\r
      <NavigationItem label="Inicio" current />\r
      <NavigationItem label="Temario" />\r
      <NavigationItem label="Recursos" />\r
    </SideNavigation>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [section, setSection] = useState('inicio');
    const items = [{
      id: 'inicio',
      label: 'Inicio'
    }, {
      id: 'temario',
      label: 'Temario'
    }, {
      id: 'recursos',
      label: 'Recursos'
    }] as const;
    return <SideNavigation heading="Cursos">\r
        {items.map(item => <NavigationItem key={item.id} label={item.label} current={section === item.id} onClick={() => setSection(item.id)} />)}\r
      </SideNavigation>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`Default`,`WithoutHeading`,`InContext`]}))();export{C as Default,T as InContext,S as Playground,w as WithoutHeading,E as __namedExportsOrder,b as default};