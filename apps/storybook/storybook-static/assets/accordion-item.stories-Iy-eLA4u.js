import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{j as r,n as i,tt as a}from"./icons-QF8wPxMP.js";import{at as o,it as s,nt as c,rt as l,t as u,tt as d}from"./dist-C_I-8cI4.js";import{n as f,t as p}from"./utils-D8qMR3V9.js";import{n as m,t as h}from"./divider-C9p_2JqD.js";var g=e((()=>{m()})),_,v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{_=`_scope_15wq2_9`,v=`_root_15wq2_17`,y=`_divider_15wq2_33`,b=`_header_15wq2_41`,x=`_trigger_15wq2_5`,S=`_leading_15wq2_231`,C=`_copy_15wq2_261`,w=`_title_15wq2_279`,T=`_supporting_15wq2_299`,E=`_caret_15wq2_319`,D=`_content_15wq2_363`,O=`_panel_15wq2_391`,k={scope:_,root:v,divider:y,header:b,trigger:x,leading:S,copy:C,title:w,supporting:T,caret:E,content:D,"accordion-item-down":`_accordion-item-down_15wq2_1`,"accordion-item-up":`_accordion-item-up_15wq2_1`,panel:O}}));function j({treatment:e=`plain`,title:t,supportingText:n,icon:r,children:i,open:u,defaultOpen:f=!1,onOpenChange:m,disabled:g,className:_}){let v=u!==void 0;return(0,M.jsx)(s,{type:`single`,collapsible:!0,disabled:g,value:v?u?N:``:void 0,defaultValue:f?N:void 0,onValueChange:e=>m?.(e===N),className:k.scope,children:(0,M.jsxs)(l,{value:N,"data-slot":`accordion-item`,"data-treatment":e,className:p(k.root,_),children:[(0,M.jsx)(c,{className:k.header,children:(0,M.jsxs)(o,{"data-slot":`accordion-item-trigger`,className:k.trigger,children:[r?(0,M.jsx)(`span`,{"data-slot":`accordion-item-icon`,className:k.leading,"aria-hidden":`true`,children:r}):null,(0,M.jsxs)(`span`,{className:k.copy,children:[(0,M.jsx)(`span`,{className:k.title,children:t}),n?(0,M.jsx)(`span`,{className:k.supporting,children:n}):null]}),(0,M.jsx)(`span`,{className:k.caret,"aria-hidden":`true`,children:(0,M.jsx)(a,{})})]})}),(0,M.jsx)(d,{"data-slot":`accordion-item-content`,className:k.content,children:(0,M.jsx)(`div`,{className:k.panel,children:i})}),e===`plain`?(0,M.jsx)(h,{thickness:1,className:k.divider}):null]})})}var M,N,P=e((()=>{n(),u(),i(),f(),g(),A(),M=t(),N=`accordion-item`,j.__docgenInfo={description:`Accordion Item. Treatments: plain · contained.\r
Estados (CSS): collapsed, hover, expanded, focus-visible.\r
Focus: plain = anillo en el trigger; contained = anillo rectangular inset al padding.`,methods:[],displayName:`AccordionItem`,props:{treatment:{required:!1,tsType:{name:`union`,raw:`'plain' | 'contained'`,elements:[{name:`literal`,value:`'plain'`},{name:`literal`,value:`'contained'`}]},description:``,defaultValue:{value:`'plain'`,computed:!1}},title:{required:!0,tsType:{name:`string`},description:`Título (Semantic/Label/Medium/Strong).`},supportingText:{required:!1,tsType:{name:`string`},description:`Texto de apoyo a la izquierda, junto al título.`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Ícono leading (24px). Ausente = off.`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Contenido al expandir.`},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),F,I,L,R,z,B,V,H,U,W,G;e((()=>{i(),P(),F=t(),I={title:`Components/Data Display/AccordionItem`,component:j,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Ítem de acordeón. Treatments: plain y contained. Estados: collapsed, hover, expanded y focus-visible (CSS). En plain el anillo rodea solo el trigger; en contained el anillo es rectangular, inset al padding interno (título, supporting e íconos), sin envolver el contenido desplegado.`}}},argTypes:{treatment:{control:`radio`,options:[`plain`,`contained`],table:{defaultValue:{summary:`plain`}}},title:{control:`text`},supportingText:{control:`text`},icon:{control:!1},children:{control:`text`},defaultOpen:{control:`boolean`},className:{control:!1,table:{disable:!0}}}},L={docs:{canvas:{sourceState:`none`}}},R=`La inscripción queda sujeta a disponibilidad de cupo. Coordinación te contactará si hay un cambio de estatus.`,z={args:{treatment:`plain`,title:`Datos del programa`,supportingText:`Opcional`,defaultOpen:!1,children:R},render:e=>(0,F.jsx)(j,{...e})},B={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AccordionItem
  treatment="plain"
  title="Datos del programa"
  supportingText="Opcional"
>
  …
</AccordionItem>`}}},render:()=>(0,F.jsx)(j,{treatment:`plain`,title:`Datos del programa`,supportingText:`Opcional`,children:R})},V={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AccordionItem
  treatment="contained"
  title="Datos del programa"
  supportingText="Opcional"
>
  …
</AccordionItem>`}}},render:()=>(0,F.jsx)(j,{treatment:`contained`,title:`Datos del programa`,supportingText:`Opcional`,children:R})},H={name:`Leading icon`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AccordionItem
  title="Datos del programa"
  supportingText="Opcional"
  icon={<FileTextIcon />}
>
  …
</AccordionItem>`}}},render:()=>(0,F.jsx)(j,{title:`Datos del programa`,supportingText:`Opcional`,icon:(0,F.jsx)(r,{}),children:R})},U={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<AccordionItem title="Datos del programa" defaultOpen>
  …
</AccordionItem>`}}},render:()=>(0,F.jsx)(j,{title:`Datos del programa`,supportingText:`Opcional`,defaultOpen:!0,children:R})},W={name:`Treatments & states`,parameters:L,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`center`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`middle`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`middle`,padding:`16px`,borderBottom:`1px solid #f0f0f0`,minWidth:280},i=[{label:`plain · icon off`,treatment:`plain`,icon:!1},{label:`plain · icon on`,treatment:`plain`,icon:!0},{label:`contained · icon off`,treatment:`contained`,icon:!1},{label:`contained · icon on`,treatment:`contained`,icon:!0}];return(0,F.jsx)(`div`,{style:{padding:8},children:(0,F.jsxs)(`table`,{style:{borderCollapse:`collapse`,width:`100%`},children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{style:{...e,textAlign:`left`,paddingLeft:0},children:`Variant`}),(0,F.jsx)(`th`,{style:e,children:`Collapsed`}),(0,F.jsx)(`th`,{style:e,children:`Expanded`})]})}),(0,F.jsx)(`tbody`,{children:i.map(({label:e,treatment:i,icon:a})=>(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{style:t,children:e}),(0,F.jsx)(`td`,{style:n,children:(0,F.jsx)(j,{treatment:i,title:`Datos del programa`,supportingText:`Opcional`,icon:a?(0,F.jsx)(r,{}):void 0,children:R})}),(0,F.jsx)(`td`,{style:n,children:(0,F.jsx)(j,{treatment:i,title:`Datos del programa`,supportingText:`Opcional`,icon:a?(0,F.jsx)(r,{}):void 0,defaultOpen:!0,children:R})})]},e))})]})})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    treatment: 'plain',
    title: 'Datos del programa',
    supportingText: 'Opcional',
    defaultOpen: false,
    children: body
  },
  render: args => <AccordionItem {...args} />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AccordionItem
  treatment="plain"
  title="Datos del programa"
  supportingText="Opcional"
>
  …
</AccordionItem>\`
      }
    }
  },
  render: () => <AccordionItem treatment="plain" title="Datos del programa" supportingText="Opcional">\r
      {body}\r
    </AccordionItem>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AccordionItem
  treatment="contained"
  title="Datos del programa"
  supportingText="Opcional"
>
  …
</AccordionItem>\`
      }
    }
  },
  render: () => <AccordionItem treatment="contained" title="Datos del programa" supportingText="Opcional">\r
      {body}\r
    </AccordionItem>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Leading icon',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AccordionItem
  title="Datos del programa"
  supportingText="Opcional"
  icon={<FileTextIcon />}
>
  …
</AccordionItem>\`
      }
    }
  },
  render: () => <AccordionItem title="Datos del programa" supportingText="Opcional" icon={<FileTextIcon />}>\r
      {body}\r
    </AccordionItem>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<AccordionItem title="Datos del programa" defaultOpen>
  …
</AccordionItem>\`
      }
    }
  },
  render: () => <AccordionItem title="Datos del programa" supportingText="Opcional" defaultOpen>\r
      {body}\r
    </AccordionItem>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Treatments & states',
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
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 280
    };
    const rows = [{
      label: 'plain · icon off',
      treatment: 'plain' as const,
      icon: false
    }, {
      label: 'plain · icon on',
      treatment: 'plain' as const,
      icon: true
    }, {
      label: 'contained · icon off',
      treatment: 'contained' as const,
      icon: false
    }, {
      label: 'contained · icon on',
      treatment: 'contained' as const,
      icon: true
    }];
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
            }}>Variant</th>\r
              <th style={th}>Collapsed</th>\r
              <th style={th}>Expanded</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {rows.map(({
            label,
            treatment,
            icon
          }) => <tr key={label}>\r
                <td style={rowLabel}>{label}</td>\r
                <td style={td}>\r
                  <AccordionItem treatment={treatment} title="Datos del programa" supportingText="Opcional" icon={icon ? <FileTextIcon /> : undefined}>\r
                    {body}\r
                  </AccordionItem>\r
                </td>\r
                <td style={td}>\r
                  <AccordionItem treatment={treatment} title="Datos del programa" supportingText="Opcional" icon={icon ? <FileTextIcon /> : undefined} defaultOpen>\r
                    {body}\r
                  </AccordionItem>\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G=[`Playground`,`Plain`,`Contained`,`WithLeadingIcon`,`Expanded`,`TreatmentsAndStates`]}))();export{V as Contained,U as Expanded,B as Plain,z as Playground,W as TreatmentsAndStates,H as WithLeadingIcon,G as __namedExportsOrder,I as default};