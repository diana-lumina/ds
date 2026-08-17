import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-BjWpqfAg.js";import{n as r,t as i}from"./utils-D8qMR3V9.js";var a,o,s=e((()=>{a=`_root_1co1a_1`,o={root:a}}));function c({size:e=`sm`,emphasis:t=`neutral`,value:n,className:r,...a}){return(0,l.jsx)(`span`,{"data-slot":`counter-badge`,"data-size":e,"data-emphasis":t,className:i(o.root,r),...a,children:n})}var l,u=e((()=>{n(),r(),s(),l=t(),c.__docgenInfo={description:``,methods:[],displayName:`CounterBadge`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},emphasis:{required:!1,tsType:{name:`union`,raw:`'neutral' | 'attention' | 'inverse'`,elements:[{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'attention'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},value:{required:!0,tsType:{name:`string`},description:`Texto breve ya resuelto por el consumidor: "1", "9", "24", "99+".`}},composes:[`Omit`]}}));function d(){return(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":!0,children:(0,f.jsx)(`path`,{d:`M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-5V11a7 7 0 1 0-14 0v6l-2 2v1h18v-1l-2-2Z`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinejoin:`round`})})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{u(),f=t(),p={title:`Components/Labels & Status/CounterBadge`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Indicador numérico compacto y no interactivo asociado a otro elemento. Comunica cantidad; no sustituye Status, Badge textual ni un control.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`],description:`Size: sm · md`,table:{type:{summary:`string`},defaultValue:{summary:`sm`}}},emphasis:{control:`select`,options:[`neutral`,`attention`,`inverse`],description:`neutral informa · attention destaca novedad/pendiente · inverse solo contraste contextual`,table:{type:{summary:`string`},defaultValue:{summary:`neutral`}}},value:{control:`text`,description:`Texto breve ya resuelto por el consumidor ("1", "9", "24", "99+").`,table:{type:{summary:`string`}}}}},m=[{value:`sm`,sizeLabel:`Small`},{value:`md`,sizeLabel:`Medium`}],h={docs:{canvas:{sourceState:`shown`}}},g={docs:{canvas:{sourceState:`none`}}},_=[e=>(0,f.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`},children:(0,f.jsx)(e,{})})],v={args:{size:`sm`,emphasis:`neutral`,value:`3`}},y={parameters:h,args:{size:`sm`,emphasis:`neutral`,value:`3`}},b={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Attention destaca elementos nuevos o no revisados, no severidad ni prioridad de marca.`}}},args:{size:`sm`,emphasis:`attention`,value:`3`}},x={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`Inverse solo resuelve contraste contextual, no prioridad.`}}},decorators:_,args:{size:`sm`,emphasis:`inverse`,value:`3`}},S={name:`Size md`,parameters:h,args:{size:`md`,emphasis:`neutral`,value:`24`}},C={name:`Valor máximo`,parameters:{docs:{canvas:{sourceState:`shown`},description:{story:`El consumidor define el tope (99, 9, 999…). CounterBadge no conoce max: solo pinta el string resuelto.`},source:{code:`// Ejemplo de implementación en el consumidor 
  function formatCounterValue(count: number, max: number): string {
  return count > max ? \`\${max}+\` : String(count)
}

const count = 120
const max = 99 // ejemplo; puede ser 9, 99, 999, etc.

<CounterBadge
  size="sm"
  emphasis="attention"
  value={formatCounterValue(count, max)}
/>`}}},render:()=>{function e(e,t){return e>t?`${t}+`:String(e)}return(0,f.jsx)(c,{size:`sm`,emphasis:`attention`,value:e(120,99)})}},w={name:`Emphasis & size`,parameters:g,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 20px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`center`,verticalAlign:`middle`,padding:`16px 20px`,borderBottom:`1px solid #f0f0f0`};return(0,f.jsx)(`div`,{style:{padding:8},children:(0,f.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Emphasis`}),m.map(({value:t,sizeLabel:n})=>(0,f.jsx)(`th`,{style:e,children:n},t))]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{style:t,children:`Neutral`}),m.map(({value:e})=>(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(c,{size:e,emphasis:`neutral`,value:`3`})},e))]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{style:t,children:`Attention`}),m.map(({value:e})=>(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(c,{size:e,emphasis:`attention`,value:`3`})},e))]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{style:t,children:`Inverse`}),m.map(({value:e})=>(0,f.jsx)(`td`,{style:n,children:(0,f.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:12,borderRadius:8,display:`inline-flex`},children:(0,f.jsx)(c,{size:e,emphasis:`inverse`,value:`3`})})},e))]})]})]})})}},T={name:`Numeric content`,parameters:g,render:()=>(0,f.jsx)(`div`,{style:{padding:8},children:(0,f.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-end`,flexWrap:`wrap`},children:[{value:`1`,caption:`1`},{value:`9`,caption:`9`},{value:`24`,caption:`24`},{value:`99+`,caption:`99+ (consumidor)`}].map(({value:e,caption:t})=>(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(c,{size:`sm`,emphasis:`neutral`,value:e}),(0,f.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6},children:t})]},t))})})},E={name:`Ejemplo de uso`,parameters:g,render:()=>(0,f.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:16,fontFamily:`sans-serif`,padding:`12px 20px`,borderBottom:`1px solid #e5e5e5`,background:`#fff`,maxWidth:720},children:[(0,f.jsx)(`span`,{style:{fontSize:15,fontWeight:700,letterSpacing:`-0.02em`},children:`Tec DS`}),(0,f.jsxs)(`nav`,{style:{display:`flex`,alignItems:`center`,gap:20,fontSize:14,color:`#444`},children:[(0,f.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Inicio`}),(0,f.jsx)(`a`,{href:`#`,style:{color:`inherit`,textDecoration:`none`},children:`Cursos`})]}),(0,f.jsxs)(`button`,{type:`button`,"aria-label":`Notificaciones, 7 sin leer`,style:{position:`relative`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:36,height:36,padding:0,border:`none`,borderRadius:8,background:`transparent`,color:`#333`,cursor:`pointer`},children:[(0,f.jsx)(d,{}),(0,f.jsx)(`span`,{style:{position:`absolute`,top:2,right:2},children:(0,f.jsx)(c,{size:`sm`,emphasis:`attention`,value:`7`})})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    emphasis: 'neutral',
    value: '3'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: showCode,
  args: {
    size: 'sm',
    emphasis: 'neutral',
    value: '3'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Attention destaca elementos nuevos o no revisados, no severidad ni prioridad de marca.'
      }
    }
  },
  args: {
    size: 'sm',
    emphasis: 'attention',
    value: '3'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'Inverse solo resuelve contraste contextual, no prioridad.'
      }
    }
  },
  decorators: inverseDecorator,
  args: {
    size: 'sm',
    emphasis: 'inverse',
    value: '3'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Size md',
  parameters: showCode,
  args: {
    size: 'md',
    emphasis: 'neutral',
    value: '24'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Valor máximo',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'El consumidor define el tope (99, 9, 999…). CounterBadge no conoce max: solo pinta el string resuelto.'
      },
      source: {
        code: \`// Ejemplo de implementación en el consumidor 
  function formatCounterValue(count: number, max: number): string {
  return count > max ? \\\`\\\${max}+\\\` : String(count)
}

const count = 120
const max = 99 // ejemplo; puede ser 9, 99, 999, etc.

<CounterBadge
  size="sm"
  emphasis="attention"
  value={formatCounterValue(count, max)}
/>\`
      }
    }
  },
  render: () => {
    function formatCounterValue(count: number, max: number): string {
      return count > max ? \`\${max}+\` : String(count);
    }
    const count = 120;
    const max = 99;
    return <CounterBadge size="sm" emphasis="attention" value={formatCounterValue(count, max)} />;
  }
}`,...C.parameters?.docs?.source},description:{story:`Limitar el máximo es del patrón consumidor. CounterBadge solo recibe el value resuelto.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Emphasis & size',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 20px 12px',
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
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 20px',
      borderBottom: '1px solid #f0f0f0'
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={{
              ...th,
              textAlign: 'left',
              paddingLeft: 0
            }}>Emphasis</th>\r
              {SIZES.map(({
              value,
              sizeLabel
            }) => <th key={value} style={th}>\r
                  {sizeLabel}\r
                </th>)}\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>Neutral</td>\r
              {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                  <CounterBadge size={value} emphasis="neutral" value="3" />\r
                </td>)}\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Attention</td>\r
              {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                  <CounterBadge size={value} emphasis="attention" value="3" />\r
                </td>)}\r
            </tr>\r
            <tr>\r
              <td style={rowLabel}>Inverse</td>\r
              {SIZES.map(({
              value
            }) => <td key={value} style={td}>\r
                  <div style={{
                background: 'var(--color-surface-brand-strong, #231f20)',
                padding: 12,
                borderRadius: 8,
                display: 'inline-flex'
              }}>\r
                    <CounterBadge size={value} emphasis="inverse" value="3" />\r
                  </div>\r
                </td>)}\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Numeric content',
  parameters: hideCode,
  render: () => {
    const unread = 120;
    const samples = [{
      value: '1',
      caption: '1'
    }, {
      value: '9',
      caption: '9'
    }, {
      value: '24',
      caption: '24'
    },
    // consumidor: unread > 99 ? '99+' : String(unread)
    {
      value: unread > 99 ? '99+' : String(unread),
      caption: '99+ (consumidor)'
    }] as const;
    return <div style={{
      padding: 8
    }}>\r
  \r
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'flex-end',
        flexWrap: 'wrap'
      }}>\r
          {samples.map(({
          value,
          caption
        }) => <div key={caption} style={{
          textAlign: 'center'
        }}>\r
              <CounterBadge size="sm" emphasis="neutral" value={value} />\r
              <div style={{
            fontFamily: 'monospace',
            fontSize: 10,
            color: '#aaa',
            marginTop: 6
          }}>\r
                {caption}\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const unread = 7;
    return <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      fontFamily: 'sans-serif',
      padding: '12px 20px',
      borderBottom: '1px solid #e5e5e5',
      background: '#fff',
      maxWidth: 720
    }}>\r
        <span style={{
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: '-0.02em'
      }}>Tec DS</span>\r
        <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        fontSize: 14,
        color: '#444'
      }}>\r
          <a href="#" style={{
          color: 'inherit',
          textDecoration: 'none'
        }}>\r
            Inicio\r
          </a>\r
          <a href="#" style={{
          color: 'inherit',
          textDecoration: 'none'
        }}>\r
            Cursos\r
          </a>\r
        </nav>\r
        <button type="button" aria-label={\`Notificaciones, \${unread} sin leer\`} style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        padding: 0,
        border: 'none',
        borderRadius: 8,
        background: 'transparent',
        color: '#333',
        cursor: 'pointer'
      }}>\r
          <BellIcon />\r
          {unread > 0 && <span style={{
          position: 'absolute',
          top: 2,
          right: 2
        }}>\r
              <CounterBadge size="sm" emphasis="attention" value={String(unread)} />\r
            </span>}\r
        </button>\r
      </header>;
  }
}`,...E.parameters?.docs?.source},description:{story:`Uso mínimo: cantidad asociada a un control; accessible name en el consumidor.`,...E.parameters?.docs?.description}}},D=[`Playground`,`Neutral`,`Attention`,`Inverse`,`SizeMd`,`MaxOverflow`,`AllVariants`,`NumericContent`,`InContext`]}))();export{w as AllVariants,b as Attention,E as InContext,x as Inverse,C as MaxOverflow,y as Neutral,T as NumericContent,v as Playground,S as SizeMd,D as __namedExportsOrder,p as default};