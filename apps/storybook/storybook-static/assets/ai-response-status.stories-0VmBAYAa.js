import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s,c,l,u=e((()=>{a=`_root_1raki_1`,o=`_icon_1raki_23`,s=`_dot_1raki_41`,c=`_label_1raki_59`,l={root:a,icon:o,dot:s,label:c}}));function d({activity:e=`thinking`,label:t,className:n,...r}){let a=t??p[e];return(0,f.jsxs)(`div`,{"data-slot":`ai-response-status`,"data-activity":e,role:`status`,"aria-live":`polite`,className:i(l.root,n),...r,children:[(0,f.jsxs)(`span`,{"data-slot":`ai-response-status-icon`,className:l.icon,"aria-hidden":`true`,children:[(0,f.jsx)(`span`,{className:l.dot}),(0,f.jsx)(`span`,{className:l.dot}),(0,f.jsx)(`span`,{className:l.dot})]}),(0,f.jsx)(`p`,{className:l.label,children:a})]})}var f,p,m=e((()=>{n(),r(),u(),f=t(),p={"searching-sources":`Buscando fuentes`,generating:`Generando`,streaming:`Escribiendo`,thinking:`Pensando`},d.__docgenInfo={description:`Indicador de actividad de una respuesta de IA. Ellipsis + Body Small.`,methods:[],displayName:`AiResponseStatus`,props:{activity:{required:!1,tsType:{name:`union`,raw:`| 'searching-sources'\r
| 'generating'\r
| 'streaming'\r
| 'thinking'`,elements:[{name:`literal`,value:`'searching-sources'`},{name:`literal`,value:`'generating'`},{name:`literal`,value:`'streaming'`},{name:`literal`,value:`'thinking'`}]},description:``,defaultValue:{value:`'thinking'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Texto visible. Si no se pasa, se usa el copy de la activity.`}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w;e((()=>{m(),h=t(),g={title:`Components/AI - Conversational/AiResponseStatus`,component:d,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Indicador de actividad de una respuesta de IA.`}}},argTypes:{activity:{control:`radio`,options:[`searching-sources`,`generating`,`streaming`,`thinking`],table:{defaultValue:{summary:`thinking`}}},label:{control:`text`},className:{control:!1,table:{disable:!0}}}},_={docs:{canvas:{sourceState:`none`}}},v={args:{activity:`thinking`}},y={name:`Searching sources`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiResponseStatus activity="searching-sources" />`}}},render:()=>(0,h.jsx)(d,{activity:`searching-sources`})},b={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiResponseStatus activity="generating" />`}}},render:()=>(0,h.jsx)(d,{activity:`generating`})},x={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiResponseStatus activity="streaming" />`}}},render:()=>(0,h.jsx)(d,{activity:`streaming`})},S={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AiResponseStatus activity="thinking" />`}}},render:()=>(0,h.jsx)(d,{activity:`thinking`})},C={name:`Activities`,parameters:_,render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:8},children:[(0,h.jsx)(d,{activity:`searching-sources`}),(0,h.jsx)(d,{activity:`generating`}),(0,h.jsx)(d,{activity:`streaming`}),(0,h.jsx)(d,{activity:`thinking`})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    activity: 'thinking'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Searching sources',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiResponseStatus activity="searching-sources" />\`
      }
    }
  },
  render: () => <AiResponseStatus activity="searching-sources" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiResponseStatus activity="generating" />\`
      }
    }
  },
  render: () => <AiResponseStatus activity="generating" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiResponseStatus activity="streaming" />\`
      }
    }
  },
  render: () => <AiResponseStatus activity="streaming" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AiResponseStatus activity="thinking" />\`
      }
    }
  },
  render: () => <AiResponseStatus activity="thinking" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Activities',
  parameters: hideCode,
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 8
  }}>\r
      <AiResponseStatus activity="searching-sources" />\r
      <AiResponseStatus activity="generating" />\r
      <AiResponseStatus activity="streaming" />\r
      <AiResponseStatus activity="thinking" />\r
    </div>
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`SearchingSources`,`Generating`,`Streaming`,`Thinking`,`AllActivities`]}))();export{C as AllActivities,b as Generating,v as Playground,y as SearchingSources,x as Streaming,S as Thinking,w as __namedExportsOrder,g as default};