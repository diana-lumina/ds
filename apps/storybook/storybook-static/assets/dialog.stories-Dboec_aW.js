import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{n as r,pt as i}from"./icons-QF8wPxMP.js";import{$ as a,J as o,K as s,Q as c,X as l,Y as u,Z as d,q as f,t as p}from"./dist-C_I-8cI4.js";import{n as m,t as h}from"./utils-D8qMR3V9.js";import{t as g}from"./icon-button-Bh3oQobN.js";import{t as _}from"./icon-button-BHD88BXq.js";import{t as v}from"./button-Pbm51Wt4.js";import{t as y}from"./button-group-BT6PxLg7.js";import{t as b}from"./button-CVm1xnLo.js";import{t as x}from"./button-group-CAKCEb0v.js";var S,C,w,T,E,D,O,k=e((()=>{S=`_overlay_lamod_9`,C=`_content_lamod_23`,w=`_header_lamod_111`,T=`_title_lamod_127`,E=`_body_lamod_153`,D=`_actions_lamod_177`,O={overlay:S,content:C,header:w,title:T,body:E,actions:D}}));function A({size:e=`md`,title:t,children:n,primaryAction:r,secondaryAction:p,trigger:m,open:_,defaultOpen:v,onOpenChange:b,dismissLabel:x=`Cerrar`,className:S}){let C=!!(r||p);return(0,j.jsxs)(d,{open:_,defaultOpen:v,onOpenChange:b,children:[m?(0,j.jsx)(a,{asChild:!0,children:m}):null,(0,j.jsxs)(l,{children:[(0,j.jsx)(u,{"data-slot":`dialog-overlay`,className:O.overlay}),(0,j.jsxs)(f,{"data-slot":`dialog`,"data-size":e,className:h(O.content,S),children:[(0,j.jsxs)(`div`,{className:O.header,children:[(0,j.jsx)(c,{className:O.title,children:t}),(0,j.jsx)(s,{asChild:!0,children:(0,j.jsx)(g,{hierarchy:`tertiary`,size:`sm`,icon:(0,j.jsx)(i,{}),"aria-label":x})})]}),(0,j.jsx)(o,{asChild:!0,children:(0,j.jsx)(`div`,{className:O.body,children:n})}),C?(0,j.jsx)(`div`,{className:O.actions,children:(0,j.jsxs)(y,{children:[p,r]})}):null]})]})]})}var j,M=e((()=>{n(),p(),r(),m(),x(),_(),k(),j=t(),A.__docgenInfo={description:`Dialog (overlay). Sizes sm 480 · md 640 · lg 800.\r
Cierre: IconButton tertiary sm. Acciones: Button secondary + primary, size md.`,methods:[],displayName:`Dialog`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},title:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},primaryAction:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},secondaryAction:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},trigger:{required:!1,tsType:{name:`ReactReactElement`,raw:`React.ReactElement`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},dismissLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Cerrar'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));function N(){return{secondaryAction:(0,F.jsx)(v,{hierarchy:`secondary`,size:`md`,label:`Cancelar`}),primaryAction:(0,F.jsx)(v,{hierarchy:`primary`,size:`md`,label:`Confirmar`})}}function P(e,t){return(0,F.jsx)(A,{size:e,title:`Confirmar solicitud`,trigger:(0,F.jsx)(v,{hierarchy:`secondary`,size:`sm`,label:t}),...N(),children:R})}var F,I,L,R,z,B,V,H,U,W;e((()=>{b(),M(),F=t(),I={title:`Components/Overlays/Dialog`,component:A,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Overlay modal. Sizes sm (480), md (640) y lg (800). Cierre con IconButton tertiary sm. Acciones: Button secondary + primary, size md.`}}},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`],table:{defaultValue:{summary:`md`}}},title:{control:`text`},children:{control:`text`},trigger:{control:!1,table:{disable:!0}},primaryAction:{control:!1,table:{disable:!0}},secondaryAction:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}}},L={docs:{canvas:{sourceState:`none`}}},R=`Al confirmar, se enviará la solicitud a coordinación. Puedes cancelar en cualquier momento antes de enviar.`,z={args:{size:`md`,title:`Confirmar solicitud`,children:R},render:e=>(0,F.jsx)(A,{...e,...N(),trigger:(0,F.jsx)(v,{hierarchy:`secondary`,size:`sm`,label:`Abrir dialog`})})},B={name:`Size sm`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Dialog
  size="sm"
  title="Confirmar solicitud"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${R}
</Dialog>`}}},render:()=>P(`sm`,`Abrir sm`)},V={name:`Size md`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Dialog
  size="md"
  title="Confirmar solicitud"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${R}
</Dialog>`}}},render:()=>P(`md`,`Abrir md`)},H={name:`Size lg`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Dialog
  size="lg"
  title="Confirmar solicitud"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${R}
</Dialog>`}}},render:()=>P(`lg`,`Abrir lg`)},U={name:`Sizes`,parameters:L,render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,F.jsx)(A,{size:`sm`,title:`Small`,trigger:(0,F.jsx)(v,{hierarchy:`secondary`,size:`sm`,label:`Abrir sm`}),...N(),children:R}),(0,F.jsx)(A,{size:`md`,title:`Medium`,trigger:(0,F.jsx)(v,{hierarchy:`secondary`,size:`sm`,label:`Abrir md`}),...N(),children:R}),(0,F.jsx)(A,{size:`lg`,title:`Large`,trigger:(0,F.jsx)(v,{hierarchy:`secondary`,size:`sm`,label:`Abrir lg`}),...N(),children:R})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    title: 'Confirmar solicitud',
    children: body
  },
  render: args => <Dialog {...args} {...actions()} trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />} />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Size sm',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Dialog
  size="sm"
  title="Confirmar solicitud"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  \${body}
</Dialog>\`
      }
    }
  },
  render: () => specimen('sm', 'Abrir sm')
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Size md',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Dialog
  size="md"
  title="Confirmar solicitud"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  \${body}
</Dialog>\`
      }
    }
  },
  render: () => specimen('md', 'Abrir md')
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Size lg',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Dialog
  size="lg"
  title="Confirmar solicitud"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  \${body}
</Dialog>\`
      }
    }
  },
  render: () => specimen('lg', 'Abrir lg')
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  parameters: hideCode,
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>\r
      <Dialog size="sm" title="Small" trigger={<Button hierarchy="secondary" size="sm" label="Abrir sm" />} {...actions()}>\r
        {body}\r
      </Dialog>\r
      <Dialog size="md" title="Medium" trigger={<Button hierarchy="secondary" size="sm" label="Abrir md" />} {...actions()}>\r
        {body}\r
      </Dialog>\r
      <Dialog size="lg" title="Large" trigger={<Button hierarchy="secondary" size="sm" label="Abrir lg" />} {...actions()}>\r
        {body}\r
      </Dialog>\r
    </div>
}`,...U.parameters?.docs?.source}}},W=[`Playground`,`Small`,`Medium`,`Large`,`AllSizes`]}))();export{U as AllSizes,H as Large,V as Medium,z as Playground,B as Small,W as __namedExportsOrder,I as default};