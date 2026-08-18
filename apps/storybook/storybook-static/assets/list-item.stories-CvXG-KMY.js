import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-BPJdu4Wu.js";import{k as r,n as i}from"./icons-BZJDXWBE.js";import{n as a,t as o}from"./utils-D8qMR3V9.js";import{n as s,t as c}from"./avatar-CHKil-4u.js";var l,u,d,f,p,m,h,g,_=e((()=>{l=`_root_41ewb_1`,u=`_avatar_41ewb_99`,d=`_iconWrapper_41ewb_101`,f=`_text_41ewb_133`,p=`_primary_41ewb_151`,m=`_secondary_41ewb_153`,h=`_tertiary_41ewb_155`,g={root:l,avatar:u,iconWrapper:d,text:f,primary:p,secondary:m,tertiary:h}}));function v(e,t){return t?3:e?2:1}function y({primaryText:e,secondaryText:t,tertiaryText:n,avatarSrc:r,avatarInitials:i,avatarAlt:a=``,icon:s,className:l,disabled:u,type:d=`button`,...f}){return(0,b.jsxs)(`button`,{type:d,"data-slot":`list-item`,"data-lines":v(t,n),disabled:u,className:o(g.root,l),...f,children:[(0,b.jsx)(`span`,{className:g.avatar,"aria-hidden":a?void 0:!0,children:(0,b.jsx)(c,{size:`sm`,src:r,initials:i,alt:a})}),(0,b.jsxs)(`span`,{className:g.text,children:[(0,b.jsx)(`span`,{className:g.primary,children:e}),t?(0,b.jsx)(`span`,{className:g.secondary,children:t}):null,n?(0,b.jsx)(`span`,{className:g.tertiary,children:n}):null]}),(0,b.jsx)(`span`,{className:g.iconWrapper,"data-slot":`list-item-icon`,"aria-hidden":`true`,children:s})]})}var b,x=e((()=>{n(),a(),s(),_(),b=t(),y.__docgenInfo={description:`Fila de lista: Avatar — texto (primary obligatorio) — ícono trailing.\r
Estados: default, hover, pressed, focus-visible, disabled.`,methods:[],displayName:`ListItem`,props:{primaryText:{required:!0,tsType:{name:`string`},description:`Texto primario (obligatorio). Semantic/Label/Medium.`},secondaryText:{required:!1,tsType:{name:`string`},description:`Texto secundario (opcional).`},tertiaryText:{required:!1,tsType:{name:`string`},description:`Texto terciario (opcional).`},avatarSrc:{required:!1,tsType:{name:`string`},description:``},avatarInitials:{required:!1,tsType:{name:`string`},description:``},avatarAlt:{required:!1,tsType:{name:`string`},description:`alt de la imagen del Avatar. Vacío si el nombre ya está en primaryText.`,defaultValue:{value:`''`,computed:!1}},icon:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Ícono trailing (instance swap). A la derecha del texto.`},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}},composes:[`Omit`]}})),S,C,w,T,E,D,O,k,A,j,M;e((()=>{i(),x(),S=t(),C={title:`Components/Data Display/ListItem`,component:y,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Fila de lista: Avatar, texto (primary obligatorio; secondary y tertiary opcionales) — ícono trailing obligatorio. Estados: default, hover, pressed, focus-visible y disabled.`}}},argTypes:{primaryText:{control:`text`,description:`Texto primario (obligatorio).`},secondaryText:{control:`text`,description:`Texto secundario (opcional).`},tertiaryText:{control:`text`,description:`Texto terciario (opcional).`},disabled:{control:`boolean`,description:`Disabled no recibe interacción`,table:{defaultValue:{summary:`false`}}},avatarSrc:{control:`text`,description:`URL de imagen del Avatar`},avatarInitials:{control:`text`,description:`Iniciales del Avatar (hasta 2 caracteres o nombre completo)`},avatarAlt:{control:`text`,description:`alt de la imagen. Vacío si el nombre ya está en primaryText`,table:{defaultValue:{summary:`""`}}},icon:{control:!1,description:`Ícono trailing (obligatorio)`}}},w={docs:{canvas:{sourceState:`none`}}},T=`https://i.pravatar.cc/96?img=5`,E={args:{primaryText:`Ana Beltrán`,secondaryText:``,tertiaryText:``,disabled:!1,avatarInitials:`AB`,avatarAlt:``,icon:(0,S.jsx)(r,{})}},D={name:`One line`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} />`}}},render:()=>(0,S.jsx)(y,{primaryText:`Ana Beltrán`,avatarInitials:`AB`,icon:(0,S.jsx)(r,{})})},O={name:`Two lines`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ListItem
  primaryText="Ana Beltrán"
  secondaryText="Diseño de interfaces"
  avatarInitials="AB"
  icon={<CaretRightIcon />}
/>`}}},render:()=>(0,S.jsx)(y,{primaryText:`Ana Beltrán`,secondaryText:`Diseño de interfaces`,avatarInitials:`AB`,icon:(0,S.jsx)(r,{})})},k={name:`Three lines`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ListItem
  primaryText="Ana Beltrán"
  secondaryText="Diseño de interfaces"
  tertiaryText="TEC 360"
  avatarSrc="https://i.pravatar.cc/96?img=5"
  icon={<CaretRightIcon />}
/>`}}},render:()=>(0,S.jsx)(y,{primaryText:`Ana Beltrán`,secondaryText:`Diseño de interfaces`,tertiaryText:`TEC 360`,avatarSrc:T,icon:(0,S.jsx)(r,{})})},A={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} disabled />`}}},render:()=>(0,S.jsx)(y,{primaryText:`Ana Beltrán`,avatarInitials:`AB`,icon:(0,S.jsx)(r,{}),disabled:!0})},j={name:`Lines & states`,parameters:w,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px 16px`,borderBottom:`1px solid #f0f0f0`,minWidth:0},i=[{label:`One line`,render:e=>(0,S.jsx)(y,{primaryText:`Ana Beltrán`,avatarInitials:`AB`,icon:(0,S.jsx)(r,{}),disabled:e})},{label:`Two lines`,render:e=>(0,S.jsx)(y,{primaryText:`Ana Beltrán`,secondaryText:`Diseño de interfaces`,avatarInitials:`AB`,icon:(0,S.jsx)(r,{}),disabled:e})},{label:`Three lines`,render:e=>(0,S.jsx)(y,{primaryText:`Ana Beltrán`,secondaryText:`Diseño de interfaces`,tertiaryText:`TEC 360`,avatarSrc:T,icon:(0,S.jsx)(r,{}),disabled:e})}];return(0,S.jsx)(`div`,{style:{padding:8},children:(0,S.jsxs)(`table`,{style:{borderCollapse:`collapse`,width:`100%`},children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Content`}),(0,S.jsx)(`th`,{style:e,children:`Default`}),(0,S.jsx)(`th`,{style:e,children:`Disabled`})]})}),(0,S.jsx)(`tbody`,{children:i.map(({label:e,render:r})=>(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{style:t,children:e}),(0,S.jsx)(`td`,{style:n,children:r(!1)}),(0,S.jsx)(`td`,{style:n,children:r(!0)})]},e))})]})})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    primaryText: 'Ana Beltrán',
    secondaryText: '',
    tertiaryText: '',
    disabled: false,
    avatarInitials: 'AB',
    avatarAlt: '',
    icon: <CaretRightIcon />
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'One line',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} />\`
      }
    }
  },
  render: () => <ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Two lines',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ListItem
  primaryText="Ana Beltrán"
  secondaryText="Diseño de interfaces"
  avatarInitials="AB"
  icon={<CaretRightIcon />}
/>\`
      }
    }
  },
  render: () => <ListItem primaryText="Ana Beltrán" secondaryText="Diseño de interfaces" avatarInitials="AB" icon={<CaretRightIcon />} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Three lines',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ListItem
  primaryText="Ana Beltrán"
  secondaryText="Diseño de interfaces"
  tertiaryText="TEC 360"
  avatarSrc="https://i.pravatar.cc/96?img=5"
  icon={<CaretRightIcon />}
/>\`
      }
    }
  },
  render: () => <ListItem primaryText="Ana Beltrán" secondaryText="Diseño de interfaces" tertiaryText="TEC 360" avatarSrc={DEMO_SRC} icon={<CaretRightIcon />} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} disabled />\`
      }
    }
  },
  render: () => <ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} disabled />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Lines & states',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 16px 12px',
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
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 0
    };
    const rows = [{
      label: 'One line',
      render: (disabled: boolean) => <ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} disabled={disabled} />
    }, {
      label: 'Two lines',
      render: (disabled: boolean) => <ListItem primaryText="Ana Beltrán" secondaryText="Diseño de interfaces" avatarInitials="AB" icon={<CaretRightIcon />} disabled={disabled} />
    }, {
      label: 'Three lines',
      render: (disabled: boolean) => <ListItem primaryText="Ana Beltrán" secondaryText="Diseño de interfaces" tertiaryText="TEC 360" avatarSrc={DEMO_SRC} icon={<CaretRightIcon />} disabled={disabled} />
    }] as const;
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse',
        width: '100%'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }}>Content</th>\r
              <th style={th}>Default</th>\r
              <th style={th}>Disabled</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {rows.map(({
            label,
            render
          }) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                <td style={td}>{render(false)}</td>\r
                <td style={td}>{render(true)}</td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`OneLine`,`TwoLines`,`ThreeLines`,`Disabled`,`AllStates`]}))();export{j as AllStates,A as Disabled,D as OneLine,E as Playground,k as ThreeLines,O as TwoLines,M as __namedExportsOrder,C as default};