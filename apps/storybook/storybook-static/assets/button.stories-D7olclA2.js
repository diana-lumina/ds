import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n}from"./iframe-DutUqOlQ.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{i,n as a,t as o}from"./icons-CfyEYSxz.js";import{i as s,n as c,r as l,t as u}from"./utils-D8qMR3V9.js";import{n as d,t as f}from"./dist-BWQXtvFs.js";var p,m,h,g=e((()=>{s(),p=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,m=l,h=(e,t)=>n=>{if(t?.variants==null)return m(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=p(t)||p(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return m(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)}})),_,v,y=e((()=>{_=`_root_n93qi_1`,v={root:_,"button-spin":`_button-spin_n93qi_1`}}));function b({maskId:e}){return(0,C.jsxs)(`svg`,{"data-slot":`loading-icon`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,C.jsx)(`mask`,{id:e,fill:`white`,children:(0,C.jsx)(`path`,{d:`M20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8079C6.10929 19.422 4.32746 18.4696 2.92893 17.0711C1.53041 15.6725 0.577999 13.8907 0.192147 11.9509C-0.193705 10.0111 0.00432836 8.00043 0.761205 6.17317C1.51808 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.58649 8.02219 -2.35852e-08 10 0V2.2C8.45731 2.2 6.94926 2.65746 5.66655 3.51454C4.38385 4.37161 3.3841 5.58981 2.79374 7.01507C2.20338 8.44033 2.04891 10.0087 2.34987 11.5217C2.65084 13.0348 3.39372 14.4246 4.48457 15.5154C5.57542 16.6063 6.96524 17.3492 8.4783 17.6501C9.99135 17.9511 11.5597 17.7966 12.9849 17.2063C14.4102 16.6159 15.6284 15.6162 16.4855 14.3334C17.3425 13.0507 17.8 11.5427 17.8 10H20Z`})}),(0,C.jsx)(`path`,{d:`M20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8079C6.10929 19.422 4.32746 18.4696 2.92893 17.0711C1.53041 15.6725 0.577999 13.8907 0.192147 11.9509C-0.193705 10.0111 0.00432836 8.00043 0.761205 6.17317C1.51808 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.58649 8.02219 -2.35852e-08 10 0V2.2C8.45731 2.2 6.94926 2.65746 5.66655 3.51454C4.38385 4.37161 3.3841 5.58981 2.79374 7.01507C2.20338 8.44033 2.04891 10.0087 2.34987 11.5217C2.65084 13.0348 3.39372 14.4246 4.48457 15.5154C5.57542 16.6063 6.96524 17.3492 8.4783 17.6501C9.99135 17.9511 11.5597 17.7966 12.9849 17.2063C14.4102 16.6159 15.6284 15.6162 16.4855 14.3334C17.3425 13.0507 17.8 11.5427 17.8 10H20Z`,stroke:`currentColor`,strokeWidth:`4`,mask:`url(#${e})`})]})}function x({className:e,variant:t=`default`,size:n=`default`,tone:r=`standard`,asChild:i=!1,leftIcon:a,rightIcon:o,loading:s=!1,children:c,...l}){let d=i?f:`button`,p=S.useId(),m=s?(0,C.jsx)(b,{maskId:p}):a,h=o??(s?(0,C.jsx)(`span`,{style:{visibility:`hidden`},children:m}):void 0);return(0,C.jsx)(d,{"data-slot":`button`,"data-variant":t,"data-size":n,"data-tone":r,"data-icon":s||m&&o?`both`:m?`inline-start`:o?`inline-end`:void 0,"data-loading":s||void 0,"aria-busy":s||void 0,className:u(v.root,w({variant:t,size:n,className:e})),...l,children:i?c:(0,C.jsxs)(C.Fragment,{children:[m&&(0,C.jsx)(`span`,{className:`flex shrink-0 items-center justify-center`,children:m}),c&&(0,C.jsx)(`span`,{children:c}),h&&(0,C.jsx)(`span`,{className:`flex shrink-0 items-center justify-center`,children:h})]})})}var S,C,w,T=e((()=>{S=t(n(),1),g(),d(),c(),y(),C=r(),w=h(`group/button inline-flex shrink-0 items-center justify-center gap-2 border border-transparent whitespace-nowrap transition-all outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:``,outline:`border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,secondary:``,ghost:``,destructive:``,link:`text-primary underline-offset-4 hover:underline`},size:{default:`has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,sm:`has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5`,lg:`has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,icon:`size-8`,"icon-xs":`size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg`,"icon-lg":`size-9`}},defaultVariants:{variant:`default`,size:`default`}}),x.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`"standard" | "inverse"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"inverse"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},leftIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},variant:{defaultValue:{value:`"default"`,computed:!1},required:!1},size:{defaultValue:{value:`"default"`,computed:!1},required:!1}},composes:[`VariantProps`]}}));function E(){return{fontFamily:`monospace`,fontSize:11,color:`#888`,marginBottom:6}}function D(){return{fontFamily:`monospace`,fontSize:10,color:`#aaa`,marginTop:6}}function O({variant:e,title:t}){return(0,k.jsxs)(`div`,{style:{marginBottom:40,paddingBottom:28,borderBottom:`1px solid #eee`},children:[(0,k.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:t}),(0,k.jsx)(`div`,{style:{display:`flex`,gap:32,alignItems:`flex-start`,flexWrap:`wrap`},children:M.map(({value:t,label:n})=>(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`div`,{style:E(),children:n}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`flex-start`},children:[(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:e,size:t,children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Default`})]}),(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:e,size:t,disabled:!0,children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Disabled`})]}),(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:e,size:t,leftIcon:(0,k.jsx)(o,{}),rightIcon:(0,k.jsx)(a,{}),children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Con íconos`})]}),(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:e,size:t,leftIcon:(0,k.jsx)(o,{}),rightIcon:(0,k.jsx)(a,{}),disabled:!0,children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Íconos + disabled`})]})]})]},t))})]})}var k,A,j,M,N,P,F;e((()=>{T(),i(),k=r(),A={title:`Components/Button`,component:x,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{variant:{control:`select`,options:[`default`,`secondary`,`ghost`,`destructive`]},tone:{control:`select`,options:[`standard`,`inverse`]},size:{control:`select`,options:[`default`,`sm`,`lg`,`icon`,`icon-xs`,`icon-sm`,`icon-lg`]},disabled:{control:`boolean`},loading:{control:`boolean`},children:{control:`text`}},args:{variant:`default`,tone:`standard`,size:`default`,disabled:!1,loading:!1,children:`Button`}},j={},M=[{value:`sm`,label:`Small`},{value:`default`,label:`Medium`},{value:`lg`,label:`Large`}],N={render:()=>(0,k.jsxs)(`div`,{style:{padding:8},children:[(0,k.jsx)(`p`,{style:{fontFamily:`sans-serif`,color:`#666`,marginBottom:32},children:`Usa el selector "Marca" en la toolbar para comparar TEC 360 vs. TEC Educación Continua. Pasa el mouse, haz clic sostenido o usa Tab sobre cualquier botón para ver hover/pressed/focus-visible.`}),(0,k.jsx)(O,{variant:`default`,title:`Primary`}),(0,k.jsxs)(`div`,{style:{marginBottom:40,paddingBottom:28,borderBottom:`1px solid #eee`},children:[(0,k.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Primary — Tone Inverse`}),(0,k.jsx)(`div`,{style:{background:`var(--color-neutral-50)`,padding:24,borderRadius:8,display:`flex`,gap:32,alignItems:`flex-start`,flexWrap:`wrap`},children:M.map(({value:e,label:t})=>(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`div`,{style:{...E(),color:`#666`},children:t}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`flex-start`},children:[(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:`default`,tone:`inverse`,size:e,children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Default`})]}),(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:`default`,tone:`inverse`,size:e,disabled:!0,children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Disabled`})]}),(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:`default`,tone:`inverse`,size:e,leftIcon:(0,k.jsx)(o,{}),rightIcon:(0,k.jsx)(a,{}),children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Con íconos`})]}),(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:`default`,tone:`inverse`,size:e,leftIcon:(0,k.jsx)(o,{}),rightIcon:(0,k.jsx)(a,{}),disabled:!0,children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Íconos + disabled`})]})]})]},e))})]}),(0,k.jsx)(O,{variant:`secondary`,title:`Secondary`}),(0,k.jsxs)(`div`,{style:{marginBottom:40,paddingBottom:28,borderBottom:`1px solid #eee`},children:[(0,k.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Secondary — Tone Inverse`}),(0,k.jsx)(`div`,{style:{background:`#EDC6BB`,padding:24,borderRadius:8,display:`flex`,gap:32,alignItems:`flex-start`,flexWrap:`wrap`},children:M.map(({value:e,label:t})=>(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`div`,{style:{...E(),color:`#666`},children:t}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`flex-start`},children:[(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:`secondary`,tone:`inverse`,size:e,children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Default`})]}),(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:`secondary`,tone:`inverse`,size:e,disabled:!0,children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Disabled`})]}),(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:`secondary`,tone:`inverse`,size:e,leftIcon:(0,k.jsx)(o,{}),rightIcon:(0,k.jsx)(a,{}),children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Con íconos`})]}),(0,k.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,k.jsx)(x,{variant:`secondary`,tone:`inverse`,size:e,leftIcon:(0,k.jsx)(o,{}),rightIcon:(0,k.jsx)(a,{}),disabled:!0,children:`Button`}),(0,k.jsx)(`div`,{style:D(),children:`Íconos + disabled`})]})]})]},e))})]}),(0,k.jsx)(O,{variant:`ghost`,title:`Tertiary`}),(0,k.jsx)(O,{variant:`destructive`,title:`Destructive`}),(0,k.jsxs)(`div`,{style:{marginBottom:40},children:[(0,k.jsx)(`h2`,{style:{fontFamily:`sans-serif`,marginBottom:4},children:`Loading`}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,k.jsx)(x,{variant:`default`,loading:!0,children:`Button`}),(0,k.jsx)(x,{variant:`secondary`,loading:!0,children:`Button`}),(0,k.jsx)(x,{variant:`ghost`,loading:!0,children:`Button`}),(0,k.jsx)(x,{variant:`destructive`,loading:!0,children:`Button`})]})]})]})},P={render:()=>(0,k.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,k.jsx)(x,{leftIcon:(0,k.jsx)(o,{}),children:`Left icon`}),(0,k.jsx)(x,{rightIcon:(0,k.jsx)(a,{}),children:`Right icon`}),(0,k.jsx)(x,{leftIcon:(0,k.jsx)(o,{}),rightIcon:(0,k.jsx)(a,{}),children:`Both`})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 8
  }}>\r
      <p style={{
      fontFamily: 'sans-serif',
      color: '#666',
      marginBottom: 32
    }}>\r
        Usa el selector "Marca" en la toolbar para comparar TEC 360 vs. TEC\r
        Educación Continua. Pasa el mouse, haz clic sostenido o usa Tab\r
        sobre cualquier botón para ver hover/pressed/focus-visible.\r
      </p>\r
      <VariantSection variant="default" title="Primary" />\r
\r
      <div style={{
      marginBottom: 40,
      paddingBottom: 28,
      borderBottom: '1px solid #eee'
    }}>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Primary — Tone Inverse</h2>\r
       \r
        <div style={{
        background: 'var(--color-neutral-50)',
        padding: 24,
        borderRadius: 8,
        display: 'flex',
        gap: 32,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>\r
          {SIZES.map(({
          value,
          label
        }) => <div key={value}>\r
              <div style={{
            ...labelStyle(),
            color: '#666'
          }}>{label}</div>\r
              <div style={{
            display: 'flex',
            gap: 20,
            alignItems: 'flex-start'
          }}>\r
                <div style={{
              textAlign: 'center'
            }}>\r
                  <Button variant="default" tone="inverse" size={value}>\r
                    Button\r
                  </Button>\r
                  <div style={captionStyle()}>Default</div>\r
                </div>\r
                <div style={{
              textAlign: 'center'
            }}>\r
                  <Button variant="default" tone="inverse" size={value} disabled>\r
                    Button\r
                  </Button>\r
                  <div style={captionStyle()}>Disabled</div>\r
                </div>\r
                <div style={{
              textAlign: 'center'
            }}>\r
                  <Button variant="default" tone="inverse" size={value} leftIcon={<BagIcon />} rightIcon={<ChevronIcon />}>\r
                    Button\r
                  </Button>\r
                  <div style={captionStyle()}>Con íconos</div>\r
                </div>\r
                <div style={{
              textAlign: 'center'
            }}>\r
                  <Button variant="default" tone="inverse" size={value} leftIcon={<BagIcon />} rightIcon={<ChevronIcon />} disabled>\r
                    Button\r
                  </Button>\r
                  <div style={captionStyle()}>Íconos + disabled</div>\r
                </div>\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>\r
\r
      <VariantSection variant="secondary" title="Secondary" />\r
\r
        <div style={{
      marginBottom: 40,
      paddingBottom: 28,
      borderBottom: '1px solid #eee'
    }}>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Secondary — Tone Inverse</h2>\r
       \r
        <div style={{
        background: '#EDC6BB',
        padding: 24,
        borderRadius: 8,
        display: 'flex',
        gap: 32,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>\r
          {SIZES.map(({
          value,
          label
        }) => <div key={value}>\r
              <div style={{
            ...labelStyle(),
            color: '#666'
          }}>{label}</div>\r
              <div style={{
            display: 'flex',
            gap: 20,
            alignItems: 'flex-start'
          }}>\r
                <div style={{
              textAlign: 'center'
            }}>\r
                  <Button variant="secondary" tone="inverse" size={value}>\r
                    Button\r
                  </Button>\r
                  <div style={captionStyle()}>Default</div>\r
                </div>\r
                <div style={{
              textAlign: 'center'
            }}>\r
                  <Button variant="secondary" tone="inverse" size={value} disabled>\r
                    Button\r
                  </Button>\r
                  <div style={captionStyle()}>Disabled</div>\r
                </div>\r
                <div style={{
              textAlign: 'center'
            }}>\r
                  <Button variant="secondary" tone="inverse" size={value} leftIcon={<BagIcon />} rightIcon={<ChevronIcon />}>\r
                    Button\r
                  </Button>\r
                  <div style={captionStyle()}>Con íconos</div>\r
                </div>\r
                <div style={{
              textAlign: 'center'
            }}>\r
                  <Button variant="secondary" tone="inverse" size={value} leftIcon={<BagIcon />} rightIcon={<ChevronIcon />} disabled>\r
                    Button\r
                  </Button>\r
                  <div style={captionStyle()}>Íconos + disabled</div>\r
                </div>\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>\r
      <VariantSection variant="ghost" title="Tertiary" />\r
      <VariantSection variant="destructive" title="Destructive" />\r
\r
   \r
      <div style={{
      marginBottom: 40
    }}>\r
        <h2 style={{
        fontFamily: 'sans-serif',
        marginBottom: 4
      }}>Loading</h2>\r
       \r
        <div style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>\r
          <Button variant="default" loading>Button</Button>\r
          <Button variant="secondary" loading>Button</Button>\r
          <Button variant="ghost" loading>Button</Button>\r
          <Button variant="destructive" loading>Button</Button>\r
        </div>\r
      </div>\r
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Button leftIcon={<BagIcon />}>Left icon</Button>\r
      <Button rightIcon={<ChevronIcon />}>Right icon</Button>\r
      <Button leftIcon={<BagIcon />} rightIcon={<ChevronIcon />}>\r
        Both\r
      </Button>\r
    </div>
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`AllVariants`,`WithIcons`]}))();export{N as AllVariants,j as Playground,P as WithIcons,F as __namedExportsOrder,A as default};