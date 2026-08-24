import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CFNdY8gy.js";import{h as i,n as a,r as o}from"./icons-ZEAiTreS.js";import{n as s,t as c}from"./utils-D8qMR3V9.js";import{t as l}from"./text-input-oAcDOiCx.js";import{t as u}from"./text-input-DbWVQkwA.js";var d,f,p,m,h,g=e((()=>{d=`_root_dio4z_1`,f=`_input_dio4z_41`,p=`_leading_dio4z_71`,m=`_clear_dio4z_73`,h={root:d,input:f,leading:p,clear:m}}));function _({appearance:e=`outlined`,tone:t=`standard`,error:n=!1,disabled:r,className:a,value:s,defaultValue:u,onChange:d,onClear:f,clearLabel:p=`Borrar búsqueda`,placeholder:m=`Buscar`,id:g,..._}){let b=v.useRef(null),x=v.useId(),S=g??x,C=s!==void 0,[w,T]=v.useState(()=>u==null?``:String(u)),E=C?String(s??``):w,D=n&&!r,O=E.length>0&&!r;function k(e){C||T(e.target.value),d?.(e)}function A(){C||T(``),f?.(),d?.({target:{value:``},currentTarget:{value:``}}),b.current?.focus()}return(0,y.jsxs)(`div`,{"data-slot":`search`,"data-appearance":e,"data-tone":t,"data-error":D?`true`:void 0,"data-disabled":r||void 0,className:c(h.root,a),children:[(0,y.jsx)(`span`,{"aria-hidden":`true`,className:h.leading,children:(0,y.jsx)(i,{})}),(0,y.jsx)(l,{ref:b,id:S,type:`search`,embedded:!0,appearance:e,tone:t,error:n,disabled:r,placeholder:m,..._,value:E,className:c(h.input),onChange:k}),O?(0,y.jsx)(`button`,{type:`button`,className:h.clear,"aria-label":p,onClick:A,children:(0,y.jsx)(o,{})}):null]})}var v,y,b=e((()=>{v=t(r(),1),a(),s(),u(),g(),y=n(),_.__docgenInfo={description:``,methods:[],displayName:`Search`,props:{appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'underline'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'underline'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`'standard' | 'inverse'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'standard'`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},clearLabel:{required:!1,tsType:{name:`string`},description:`Label accesible del botón clear.`,defaultValue:{value:`'Borrar búsqueda'`,computed:!1}},onClear:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},placeholder:{defaultValue:{value:`'Buscar'`,computed:!1},required:!1}},composes:[`Omit`]}}));function x({appearance:e=`outlined`,tone:t=`standard`,error:n=!1,disabled:r=!1,placeholder:i=`Buscar`,defaultValue:a}){return(0,S.jsx)(`div`,{style:E,children:(0,S.jsx)(_,{appearance:e,tone:t,error:n,disabled:r,placeholder:i,defaultValue:a,"aria-label":`Buscar`})})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{r(),b(),S=n(),C={title:`Components/Inputs/Search`,component:_,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Campo de búsqueda compuesto sobre TextInput. Appearances outlined y underline; tones standard e inverse. Lupa leading fija; clear trailing cuando hay valor.`}}},argTypes:{appearance:{control:`radio`,options:[`outlined`,`underline`],description:`outlined (caja) o underline`,table:{defaultValue:{summary:`outlined`}}},tone:{control:`radio`,options:[`standard`,`inverse`],description:`standard sobre superficies claras · inverse sobre oscuras / brand`,table:{defaultValue:{summary:`standard`}}},error:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},placeholder:{control:`text`}}},w={docs:{canvas:{sourceState:`shown`}}},T={docs:{canvas:{sourceState:`none`}}},E={maxWidth:360},D=[e=>(0,S.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`,minWidth:360},children:(0,S.jsx)(e,{})})],O={args:{appearance:`outlined`,tone:`standard`,error:!1,disabled:!1,placeholder:`Buscar`},render:e=>(0,S.jsx)(x,{...e})},k={parameters:{...w,docs:{...w.docs,source:{code:`<Search aria-label="Buscar" placeholder="Buscar" />`}}},render:()=>(0,S.jsx)(x,{})},A={parameters:{...w,docs:{...w.docs,source:{code:`<Search tone="inverse" aria-label="Buscar" placeholder="Buscar" />`}},backgrounds:{default:`dark`}},decorators:D,render:()=>(0,S.jsx)(x,{tone:`inverse`})},j={parameters:{...w,docs:{...w.docs,source:{code:`<Search appearance="underline" aria-label="Buscar" placeholder="Buscar" />`}}},render:()=>(0,S.jsx)(x,{appearance:`underline`})},M={name:`Con valor (clear)`,parameters:{...w,docs:{...w.docs,source:{code:`<Search aria-label="Buscar" defaultValue="campus" />`}}},render:()=>(0,S.jsx)(x,{defaultValue:`campus`})},N={parameters:{...w,docs:{...w.docs,source:{code:`<Search aria-label="Buscar" disabled />`}}},render:()=>(0,S.jsx)(x,{disabled:!0})},P={name:`Appearances & tones`,parameters:T,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={textAlign:`left`,verticalAlign:`middle`,padding:`16px`,borderBottom:`1px solid #f0f0f0`,minWidth:260},n={...t,background:`var(--color-surface-brand-strong, #231f20)`};return(0,S.jsx)(`div`,{style:{padding:8},children:(0,S.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{style:e,children:` `}),(0,S.jsx)(`th`,{style:e,children:`Standard`}),(0,S.jsx)(`th`,{style:e,children:`Inverse`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{style:{...e,paddingTop:16},children:`Outlined`}),(0,S.jsx)(`td`,{style:t,children:(0,S.jsx)(x,{appearance:`outlined`,defaultValue:`campus`})}),(0,S.jsx)(`td`,{style:n,children:(0,S.jsx)(x,{appearance:`outlined`,tone:`inverse`,defaultValue:`campus`})})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{style:e,children:`Outlined disabled`}),(0,S.jsx)(`td`,{style:t,children:(0,S.jsx)(x,{appearance:`outlined`,defaultValue:`campus`,disabled:!0})}),(0,S.jsx)(`td`,{style:n,children:(0,S.jsx)(x,{appearance:`outlined`,tone:`inverse`,defaultValue:`campus`,disabled:!0})})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{style:e,children:`Underline`}),(0,S.jsx)(`td`,{style:t,children:(0,S.jsx)(x,{appearance:`underline`,defaultValue:`campus`})}),(0,S.jsx)(`td`,{style:n,children:(0,S.jsx)(x,{appearance:`underline`,tone:`inverse`,defaultValue:`campus`})})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{style:{...e,borderBottom:`none`},children:`Underline disabled`}),(0,S.jsx)(`td`,{style:{...t,borderBottom:`none`},children:(0,S.jsx)(x,{appearance:`underline`,defaultValue:`campus`,disabled:!0})}),(0,S.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,S.jsx)(x,{appearance:`underline`,tone:`inverse`,defaultValue:`campus`,disabled:!0})})]})]})]})})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    placeholder: 'Buscar'
  },
  render: args => <Specimen {...args} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search aria-label="Buscar" placeholder="Buscar" />\`
      }
    }
  },
  render: () => <Specimen />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search tone="inverse" aria-label="Buscar" placeholder="Buscar" />\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search appearance="underline" aria-label="Buscar" placeholder="Buscar" />\`
      }
    }
  },
  render: () => <Specimen appearance="underline" />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Con valor (clear)',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search aria-label="Buscar" defaultValue="campus" />\`
      }
    }
  },
  render: () => <Specimen defaultValue="campus" />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<Search aria-label="Buscar" disabled />\`
      }
    }
  },
  render: () => <Specimen disabled />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Appearances & tones',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      padding: '0 16px 12px',
      borderBottom: '1px solid #eee'
    };
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 260
    };
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)'
    };
    return <div style={{
      padding: 8
    }}>\r
        <table style={{
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr>\r
              <th style={th}> </th>\r
              <th style={th}>Standard</th>\r
              <th style={th}>Inverse</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={{
              ...th,
              paddingTop: 16
            }}>Outlined</td>\r
              <td style={td}>\r
                <Specimen appearance="outlined" defaultValue="campus" />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen appearance="outlined" tone="inverse" defaultValue="campus" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={th}>Outlined disabled</td>\r
              <td style={td}>\r
                <Specimen appearance="outlined" defaultValue="campus" disabled />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen appearance="outlined" tone="inverse" defaultValue="campus" disabled />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={th}>Underline</td>\r
              <td style={td}>\r
                <Specimen appearance="underline" defaultValue="campus" />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen appearance="underline" tone="inverse" defaultValue="campus" />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...th,
              borderBottom: 'none'
            }}>Underline disabled</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <Specimen appearance="underline" defaultValue="campus" disabled />\r
              </td>\r
              <td style={{
              ...tdInverse,
              borderBottom: 'none'
            }}>\r
                <Specimen appearance="underline" tone="inverse" defaultValue="campus" disabled />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`Default`,`Inverse`,`Underline`,`WithValue`,`Disabled`,`AllAppearances`]}))();export{P as AllAppearances,k as Default,N as Disabled,A as Inverse,O as Playground,j as Underline,M as WithValue,F as __namedExportsOrder,C as default};