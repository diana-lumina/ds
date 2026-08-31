import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{n as r,pt as i}from"./icons-QF8wPxMP.js";import{$ as a,J as o,K as s,Q as c,X as l,Y as u,Z as d,q as f,t as p}from"./dist-C_I-8cI4.js";import{n as m,t as h}from"./utils-D8qMR3V9.js";import{t as g}from"./icon-button-Bh3oQobN.js";import{t as _}from"./icon-button-BHD88BXq.js";import{t as v}from"./button-Pbm51Wt4.js";import{t as y}from"./button-group-BT6PxLg7.js";import{t as b}from"./button-CVm1xnLo.js";import{t as x}from"./button-group-CAKCEb0v.js";var S,C,w,T,E,D,O,k,A,j,M,N,P=e((()=>{S=`_overlay_1y9zq_9`,C=`_panel_1y9zq_43`,w=`_close_1y9zq_149`,T=`_header_1y9zq_169`,E=`_body_1y9zq_5`,D=`_footer_1y9zq_173`,O=`_footerActions_1y9zq_213`,k=`_title_1y9zq_5`,A=`_contentTitle_1y9zq_227`,j=`_text_1y9zq_5`,M=`_srOnly_1y9zq_271`,N={overlay:S,"drawer-overlay-in":`_drawer-overlay-in_1y9zq_1`,"drawer-overlay-out":`_drawer-overlay-out_1y9zq_1`,panel:C,"drawer-panel-in":`_drawer-panel-in_1y9zq_1`,"drawer-panel-out":`_drawer-panel-out_1y9zq_1`,close:w,header:T,body:E,footer:D,footerActions:O,title:k,contentTitle:A,text:j,srOnly:M}}));function F({size:e=`sm`,header:t,title:n,contentTitle:r,children:p,footer:m,primaryAction:_,secondaryAction:v,trigger:b,open:x,defaultOpen:S,onOpenChange:C,dismissLabel:w=`Cerrar`,className:T}){let E=e===`lg`?`lg`:`sm`,D=n??`Panel`,O=t!=null||n!=null&&n!==``,k=r!=null||p!=null,A=p!=null,j=_||v?(0,I.jsx)(`div`,{className:N.footerActions,children:(0,I.jsxs)(y,{children:[v,_]})}):null,M=m??j;return(0,I.jsxs)(d,{open:x,defaultOpen:S,onOpenChange:C,children:[b?(0,I.jsx)(a,{asChild:!0,children:b}):null,(0,I.jsxs)(l,{children:[(0,I.jsx)(u,{"data-slot":`drawer-overlay`,className:N.overlay}),(0,I.jsxs)(f,{"data-slot":`drawer`,"data-size":e,className:h(N.panel,T),...A?{}:{"aria-describedby":void 0},children:[(0,I.jsx)(`div`,{className:N.close,children:(0,I.jsx)(s,{asChild:!0,children:(0,I.jsx)(g,{hierarchy:`tertiary`,size:E,icon:(0,I.jsx)(i,{}),"aria-label":w})})}),O?(0,I.jsx)(`div`,{"data-slot":`drawer-header`,className:N.header,children:t?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(c,{className:N.srOnly,children:D}),t]}):(0,I.jsx)(c,{className:N.title,children:n})}):(0,I.jsx)(c,{className:N.srOnly,children:D}),k?(0,I.jsxs)(`div`,{"data-slot":`drawer-content`,className:N.body,children:[r?(0,I.jsx)(`p`,{className:N.contentTitle,children:r}):null,A?(0,I.jsx)(o,{asChild:!0,children:(0,I.jsx)(`div`,{className:N.text,children:p})}):null]}):null,M?(0,I.jsx)(`div`,{"data-slot":`drawer-footer`,className:N.footer,children:M}):null]})]})]})}var I,L=e((()=>{n(),p(),r(),m(),x(),_(),P(),I=t(),F.__docgenInfo={description:`Drawer: panel derecho anclado al bottom. Hug-content (máx. 100vh).\r
Sizes sm 400 · lg 640. Cierre: IconButton tertiary (sm o lg según size).`,methods:[],displayName:`Drawer`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},header:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:"SLOT header. Si no se pasa, se usa `title`."},title:{required:!1,tsType:{name:`string`},description:``},contentTitle:{required:!1,tsType:{name:`string`},description:`SLOT content: título de sección.`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`SLOT content.`},footer:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`SLOT footer. Si no se pasa, se usan las actions.`},primaryAction:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},secondaryAction:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},trigger:{required:!1,tsType:{name:`ReactReactElement`,raw:`React.ReactElement`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},dismissLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Cerrar'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));function R(){return{secondaryAction:(0,B.jsx)(v,{hierarchy:`secondary`,size:`md`,label:`Cancelar`}),primaryAction:(0,B.jsx)(v,{hierarchy:`primary`,size:`md`,label:`Confirmar`})}}function z(e,t){return(0,B.jsx)(F,{size:e,title:`Detalle de la solicitud`,contentTitle:`Resumen`,trigger:(0,B.jsx)(v,{hierarchy:`secondary`,size:`sm`,label:t}),...R(),children:U})}var B,V,H,U,W,G,K,q,J;e((()=>{b(),L(),B=t(),V={title:`Components/Overlays/Drawer`,component:F,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Panel derecho anclado al bottom, altura según contenido (máx. viewport). Sizes sm (400) y lg (640). Cierre: IconButton tertiary centrado a todo el ancho. Slots: header, content y footer (actions).`}}},argTypes:{size:{control:`radio`,options:[`sm`,`lg`],table:{defaultValue:{summary:`sm`}}},title:{control:`text`},contentTitle:{control:`text`},children:{control:`text`},header:{control:!1,table:{disable:!0}},footer:{control:!1,table:{disable:!0}},trigger:{control:!1,table:{disable:!0}},primaryAction:{control:!1,table:{disable:!0}},secondaryAction:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}}},H={docs:{canvas:{sourceState:`none`}}},U=`Revisa los datos de la solicitud antes de enviarla. Coordinación te contactará cuando el estatus cambie.`,W={args:{size:`sm`,title:`Detalle de la solicitud`,contentTitle:`Resumen`,children:U},render:e=>(0,B.jsx)(F,{...e,...R(),trigger:(0,B.jsx)(v,{hierarchy:`secondary`,size:`sm`,label:`Abrir drawer`})})},G={name:`Size sm`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Drawer
  size="sm"
  title="Detalle de la solicitud"
  contentTitle="Resumen"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir drawer" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${U}
</Drawer>`}}},render:()=>z(`sm`,`Abrir sm`)},K={name:`Size lg`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Drawer
  size="lg"
  title="Detalle de la solicitud"
  contentTitle="Resumen"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir drawer" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${U}
</Drawer>`}}},render:()=>z(`lg`,`Abrir lg`)},q={name:`Sizes`,parameters:H,render:()=>(0,B.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[z(`sm`,`Abrir sm`),z(`lg`,`Abrir lg`)]})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    title: 'Detalle de la solicitud',
    contentTitle: 'Resumen',
    children: body
  },
  render: args => <Drawer {...args} {...actions()} trigger={<Button hierarchy="secondary" size="sm" label="Abrir drawer" />} />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Size sm',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Drawer
  size="sm"
  title="Detalle de la solicitud"
  contentTitle="Resumen"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir drawer" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  \${body}
</Drawer>\`
      }
    }
  },
  render: () => specimen('sm', 'Abrir sm')
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Size lg',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Drawer
  size="lg"
  title="Detalle de la solicitud"
  contentTitle="Resumen"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir drawer" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  \${body}
</Drawer>\`
      }
    }
  },
  render: () => specimen('lg', 'Abrir lg')
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  parameters: hideCode,
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>\r
      {specimen('sm', 'Abrir sm')}\r
      {specimen('lg', 'Abrir lg')}\r
    </div>
}`,...q.parameters?.docs?.source}}},J=[`Playground`,`Small`,`Large`,`AllSizes`]}))();export{q as AllSizes,K as Large,W as Playground,G as Small,J as __namedExportsOrder,V as default};