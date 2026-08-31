import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";import{n as a,t as o}from"./avatar-CUPznbR7.js";var s,c,l,u,d=e((()=>{s=`_root_1hfhp_9`,c=`_avatar_1hfhp_5`,l=`_body_1hfhp_51`,u={root:s,avatar:c,body:l}}));function f({children:e,role:t=`assistant`,avatarSrc:n,avatarInitials:r,avatarAlt:a=``,className:s,...c}){return(0,p.jsxs)(`div`,{"data-slot":`chat-message`,"data-role":t,className:i(u.root,s),...c,children:[(0,p.jsx)(`span`,{"data-slot":`chat-message-avatar`,className:u.avatar,"aria-hidden":a?void 0:!0,children:(0,p.jsx)(o,{size:`sm`,src:n,initials:r,alt:a})}),(0,p.jsx)(`div`,{"data-slot":`chat-message-body`,className:u.body,children:typeof e==`string`||typeof e==`number`?(0,p.jsx)(`p`,{children:e}):e})]})}var p,m=e((()=>{n(),r(),a(),d(),p=t(),f.__docgenInfo={description:`Chat Message: Avatar + message body. Assistant avatar izq.; user avatar der.`,methods:[],displayName:`ChatMessage`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Contenido del message body (Semantic/Body/Small).`},role:{required:!1,tsType:{name:`union`,raw:`'assistant' | 'user'`,elements:[{name:`literal`,value:`'assistant'`},{name:`literal`,value:`'user'`}]},description:`assistant: avatar a la izquierda. user: avatar a la derecha.`,defaultValue:{value:`'assistant'`,computed:!1}},avatarSrc:{required:!1,tsType:{name:`string`},description:``},avatarInitials:{required:!1,tsType:{name:`string`},description:``},avatarAlt:{required:!1,tsType:{name:`string`},description:`alt de la imagen. Vacío si el nombre ya es visible en el hilo.`,defaultValue:{value:`''`,computed:!1}}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{m(),h=t(),g={title:`Components/AI - Conversational/ChatMessage`,component:f,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Mensaje de chat: Avatar y message body (Body Small). role assistant: avatar a la izquierda; role user: avatar a la derecha.`}}},argTypes:{role:{control:`radio`,options:[`assistant`,`user`],table:{defaultValue:{summary:`assistant`}}},children:{control:`text`},avatarSrc:{control:`text`},avatarInitials:{control:`text`},avatarAlt:{control:`text`,table:{defaultValue:{summary:`""`}}},className:{control:!1,table:{disable:!0}}}},_={docs:{canvas:{sourceState:`none`}}},v=`https://i.pravatar.cc/96?img=5`,y=`Puedo orientarte sobre cupo, fechas y modalidad. Si prefieres, deja tus datos en el formulario de contacto.`,b=`Quiero inscribirme en Diseño de interfaces, campus Monterrey.`,x={args:{role:`assistant`,children:y,avatarInitials:`EC`,avatarAlt:``}},S={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ChatMessage role="assistant" avatarInitials="EC">
  ${y}
</ChatMessage>`}}},render:()=>(0,h.jsx)(f,{role:`assistant`,avatarInitials:`EC`,children:y})},C={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ChatMessage role="user" avatarSrc="${v}" avatarAlt="Ana Beltrán">
  ${b}
</ChatMessage>`}}},render:()=>(0,h.jsx)(f,{role:`user`,avatarSrc:v,avatarAlt:`Ana Beltrán`,children:b})},w={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ChatMessage role="assistant">${y}</ChatMessage>`}}},render:()=>(0,h.jsx)(f,{role:`assistant`,children:y})},T={name:`Roles`,parameters:_,render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:8},children:[(0,h.jsx)(f,{role:`assistant`,avatarInitials:`EC`,children:`Hola, soy el asistente de Educación Continua. ¿En qué programa te gustaría inscribirte?`}),(0,h.jsx)(f,{role:`user`,avatarSrc:v,avatarAlt:`Ana Beltrán`,children:b}),(0,h.jsx)(f,{role:`assistant`,avatarInitials:`EC`,children:y})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    children: ASSISTANT_BODY,
    avatarInitials: 'EC',
    avatarAlt: ''
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ChatMessage role="assistant" avatarInitials="EC">
  \${ASSISTANT_BODY}
</ChatMessage>\`
      }
    }
  },
  render: () => <ChatMessage role="assistant" avatarInitials="EC">\r
      {ASSISTANT_BODY}\r
    </ChatMessage>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ChatMessage role="user" avatarSrc="\${DEMO_SRC}" avatarAlt="Ana Beltrán">
  \${USER_BODY}
</ChatMessage>\`
      }
    }
  },
  render: () => <ChatMessage role="user" avatarSrc={DEMO_SRC} avatarAlt="Ana Beltrán">\r
      {USER_BODY}\r
    </ChatMessage>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ChatMessage role="assistant">\${ASSISTANT_BODY}</ChatMessage>\`
      }
    }
  },
  render: () => <ChatMessage role="assistant">{ASSISTANT_BODY}</ChatMessage>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Roles',
  parameters: hideCode,
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 8
  }}>\r
      <ChatMessage role="assistant" avatarInitials="EC">\r
        Hola, soy el asistente de Educación Continua. ¿En qué programa te gustaría inscribirte?\r
      </ChatMessage>\r
      <ChatMessage role="user" avatarSrc={DEMO_SRC} avatarAlt="Ana Beltrán">\r
        {USER_BODY}\r
      </ChatMessage>\r
      <ChatMessage role="assistant" avatarInitials="EC">\r
        {ASSISTANT_BODY}\r
      </ChatMessage>\r
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`Assistant`,`User`,`Fallback`,`Thread`]}))();export{S as Assistant,w as Fallback,x as Playground,T as Thread,C as User,E as __namedExportsOrder,g as default};