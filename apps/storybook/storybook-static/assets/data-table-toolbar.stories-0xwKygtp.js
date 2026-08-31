import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,U as n}from"./iframe-CPmBFJEF.js";import{D as r,L as i,n as a}from"./icons-QF8wPxMP.js";import{n as o,t as s}from"./utils-D8qMR3V9.js";import{t as c}from"./icon-button-Bh3oQobN.js";import{t as l}from"./icon-button-BHD88BXq.js";import{t as u}from"./button-Pbm51Wt4.js";import{n as d,t as f}from"./filter-chip-0vBN8EEE.js";import{n as p,t as m}from"./chip-group-B6JA9JdP.js";import{t as h}from"./button-CVm1xnLo.js";import{n as g,t as _}from"./search-CMXgE1eu.js";var v=e((()=>{p()})),y=e((()=>{d()})),b=e((()=>{g()})),x,S,C,w,T=e((()=>{x=`_root_1rbau_1`,S=`_search_1rbau_17`,C=`_slot_1rbau_27`,w={root:x,search:S,slot:C}}));function E({search:e,filters:t,actions:n,className:r,children:i,...a}){return(0,D.jsxs)(`div`,{"data-slot":`data-table-toolbar`,className:s(w.root,r),...a,children:[(0,D.jsx)(`div`,{"data-slot":`data-table-toolbar-search`,className:w.search,children:e}),t?(0,D.jsx)(`div`,{"data-slot":`data-table-toolbar-filters`,className:w.slot,children:t}):null,n?(0,D.jsx)(`div`,{"data-slot":`data-table-toolbar-actions`,className:w.slot,children:n}):null,i]})}var D,O=e((()=>{n(),o(),T(),D=t(),E.__docgenInfo={description:`Toolbar de Data Table: Search, y slots opcionales de FilterChip, Button e IconButton.`,methods:[],displayName:`DataTableToolbar`,props:{search:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Search del toolbar.`},filters:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`FilterChip (o ChipGroup).`},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Button e IconButton.`}}}})),k,A,j,M,N,P,F;e((()=>{a(),h(),v(),y(),l(),b(),O(),k=t(),A={title:`Components/Data Display/DataTableToolbar`,component:E,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Toolbar de Data Table. Search obligatorio; acepta FilterChip, Button e IconButton. Gap 24px.`}}},argTypes:{search:{control:!1},filters:{control:!1},actions:{control:!1},className:{control:!1,table:{disable:!0}}}},j={render:()=>(0,k.jsx)(E,{search:(0,k.jsx)(_,{placeholder:`Buscar programas`}),filters:(0,k.jsxs)(m,{children:[(0,k.jsx)(f,{label:`En línea`}),(0,k.jsx)(f,{label:`Presencial`})]}),actions:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u,{hierarchy:`secondary`,size:`sm`,label:`Exportar`}),(0,k.jsx)(c,{size:`sm`,icon:(0,k.jsx)(i,{}),"aria-label":`Descargar`})]})})},M={name:`Search only`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<DataTableToolbar search={<Search placeholder="Buscar programas" />} />`}}},render:()=>(0,k.jsx)(E,{search:(0,k.jsx)(_,{placeholder:`Buscar programas`})})},N={name:`With filters`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<DataTableToolbar
  search={<Search placeholder="Buscar programas" />}
  filters={
    <ChipGroup>
      <FilterChip label="En línea" />
      <FilterChip label="Presencial" icon={<FunnelSimpleIcon />} />
    </ChipGroup>
  }
/>`}}},render:()=>(0,k.jsx)(E,{search:(0,k.jsx)(_,{placeholder:`Buscar programas`}),filters:(0,k.jsxs)(m,{children:[(0,k.jsx)(f,{label:`En línea`}),(0,k.jsx)(f,{label:`Presencial`,icon:(0,k.jsx)(r,{})})]})})},P={name:`With actions`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<DataTableToolbar
  search={<Search placeholder="Buscar programas" />}
  actions={
    <>
      <Button hierarchy="secondary" size="sm" label="Exportar" />
      <IconButton size="sm" icon={<DownloadSimpleIcon />} aria-label="Descargar" />
    </>
  }
/>`}}},render:()=>(0,k.jsx)(E,{search:(0,k.jsx)(_,{placeholder:`Buscar programas`}),actions:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u,{hierarchy:`secondary`,size:`sm`,label:`Exportar`}),(0,k.jsx)(c,{size:`sm`,icon:(0,k.jsx)(i,{}),"aria-label":`Descargar`})]})})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <DataTableToolbar search={<Search placeholder="Buscar programas" />} filters={<ChipGroup>\r
          <FilterChip label="En línea" />\r
          <FilterChip label="Presencial" />\r
        </ChipGroup>} actions={<>\r
          <Button hierarchy="secondary" size="sm" label="Exportar" />\r
          <IconButton size="sm" icon={<DownloadSimpleIcon />} aria-label="Descargar" />\r
        </>} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Search only',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<DataTableToolbar search={<Search placeholder="Buscar programas" />} />\`
      }
    }
  },
  render: () => <DataTableToolbar search={<Search placeholder="Buscar programas" />} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'With filters',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<DataTableToolbar
  search={<Search placeholder="Buscar programas" />}
  filters={
    <ChipGroup>
      <FilterChip label="En línea" />
      <FilterChip label="Presencial" icon={<FunnelSimpleIcon />} />
    </ChipGroup>
  }
/>\`
      }
    }
  },
  render: () => <DataTableToolbar search={<Search placeholder="Buscar programas" />} filters={<ChipGroup>\r
          <FilterChip label="En línea" />\r
          <FilterChip label="Presencial" icon={<FunnelSimpleIcon />} />\r
        </ChipGroup>} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'With actions',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<DataTableToolbar
  search={<Search placeholder="Buscar programas" />}
  actions={
    <>
      <Button hierarchy="secondary" size="sm" label="Exportar" />
      <IconButton size="sm" icon={<DownloadSimpleIcon />} aria-label="Descargar" />
    </>
  }
/>\`
      }
    }
  },
  render: () => <DataTableToolbar search={<Search placeholder="Buscar programas" />} actions={<>\r
          <Button hierarchy="secondary" size="sm" label="Exportar" />\r
          <IconButton size="sm" icon={<DownloadSimpleIcon />} aria-label="Descargar" />\r
        </>} />
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`SearchOnly`,`WithFilters`,`WithActions`]}))();export{j as Playground,M as SearchOnly,P as WithActions,N as WithFilters,F as __namedExportsOrder,A as default};