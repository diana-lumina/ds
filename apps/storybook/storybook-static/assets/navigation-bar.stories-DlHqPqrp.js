import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CFNdY8gy.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";import{t as o}from"./navigation-item-DQCXfvi1.js";import{t as s}from"./navigation-item-CxqBtxsK.js";var c,l,u=e((()=>{c=`_root_6s85c_1`,l={root:c}}));function d(e){return p.Children.map(e,e=>p.isValidElement(e)?p.cloneElement(e,{context:`navigation-bar`}):e)}function f({children:e,className:t,"aria-label":n=`Navegación`,...r}){return(0,m.jsx)(`nav`,{"data-slot":`navigation-bar`,"aria-label":n,className:a(l.root,t),...r,children:d(e)})}var p,m,h=e((()=>{p=t(r(),1),i(),u(),m=n(),f.__docgenInfo={description:`Barra de navegación horizontal. SLOT de NavigationItem (context=navigation-bar).\r
La exclusividad de current la garantiza el consumidor.`,methods:[],displayName:`NavigationBar`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`SLOT nativo: instancias reales de NavigationItem. Current lo aporta cada ítem.`},"aria-label":{defaultValue:{value:`'Navegación'`,computed:!1},required:!1}},composes:[`Omit`]}})),g,_,v,y,b,x,S,C;e((()=>{g=t(r(),1),s(),h(),_=n(),v={title:`Components/Navigation/NavigationBar`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Barra de navegación horizontal.`}}},argTypes:{children:{control:!1,description:`SLOT nativo: instancias reales de NavigationItem`,table:{type:{summary:`ReactNode`}}},className:{control:!1,table:{disable:!0}}}},y={docs:{canvas:{sourceState:`none`}}},b={render:e=>(0,_.jsxs)(f,{...e,children:[(0,_.jsx)(o,{label:`Inicio`,current:!0}),(0,_.jsx)(o,{label:`Cursos`}),(0,_.jsx)(o,{label:`Perfil`})]})},x={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<NavigationBar>
  <NavigationItem label="Inicio" current />
  <NavigationItem label="Cursos" />
  <NavigationItem label="Perfil" />
</NavigationBar>`}}},render:()=>(0,_.jsxs)(f,{children:[(0,_.jsx)(o,{label:`Inicio`,current:!0}),(0,_.jsx)(o,{label:`Cursos`}),(0,_.jsx)(o,{label:`Perfil`})]})},S={name:`Ejemplo de uso`,parameters:y,render:()=>{let[e,t]=(0,g.useState)(`inicio`);return(0,_.jsx)(f,{children:[{id:`inicio`,label:`Inicio`},{id:`cursos`,label:`Cursos`},{id:`perfil`,label:`Perfil`}].map(n=>(0,_.jsx)(o,{label:n.label,current:e===n.id,onClick:()=>t(n.id)},n.id))})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationBar {...args}>\r
      <NavigationItem label="Inicio" current />\r
      <NavigationItem label="Cursos" />\r
      <NavigationItem label="Perfil" />\r
    </NavigationBar>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<NavigationBar>
  <NavigationItem label="Inicio" current />
  <NavigationItem label="Cursos" />
  <NavigationItem label="Perfil" />
</NavigationBar>\`
      }
    }
  },
  render: () => <NavigationBar>\r
      <NavigationItem label="Inicio" current />\r
      <NavigationItem label="Cursos" />\r
      <NavigationItem label="Perfil" />\r
    </NavigationBar>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [section, setSection] = useState('inicio');
    const items = [{
      id: 'inicio',
      label: 'Inicio'
    }, {
      id: 'cursos',
      label: 'Cursos'
    }, {
      id: 'perfil',
      label: 'Perfil'
    }] as const;
    return <NavigationBar>\r
        {items.map(item => <NavigationItem key={item.id} label={item.label} current={section === item.id} onClick={() => setSection(item.id)} />)}\r
      </NavigationBar>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Default`,`InContext`]}))();export{x as Default,S as InContext,b as Playground,C as __namedExportsOrder,v as default};