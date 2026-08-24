import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CFNdY8gy.js";import{V as i,n as a,z as o}from"./icons-ZEAiTreS.js";import{n as s,t as c}from"./utils-D8qMR3V9.js";import{t as l}from"./icon-button-CSae1m_6.js";import{t as u}from"./icon-button-Bd3frvv_.js";import{n as d,t as f}from"./pagination-item-t5dz-Q7S.js";var p=e((()=>{d()})),m,h,g=e((()=>{m=`_root_z93or_1`,h={root:m}}));function _({children:e,onPrevious:t,onNext:n,previousDisabled:r=!1,nextDisabled:a=!1,previousLabel:s=`Página anterior`,nextLabel:u=`Página siguiente`,className:d,"aria-label":f=`Paginación`,...p}){return(0,v.jsxs)(`nav`,{"data-slot":`pagination`,"aria-label":f,className:c(h.root,d),...p,children:[(0,v.jsx)(l,{hierarchy:`tertiary`,size:`md`,icon:(0,v.jsx)(i,{}),"aria-label":s,disabled:r,onClick:t}),e,(0,v.jsx)(l,{hierarchy:`tertiary`,size:`md`,icon:(0,v.jsx)(o,{}),"aria-label":u,disabled:a,onClick:n})]})}var v,y=e((()=>{r(),a(),s(),u(),g(),v=n(),_.__docgenInfo={description:`Contenedor de paginación. Compone IconButton tertiary md (prev/next)\r
y un SLOT de PaginationItem. No define cantidad de páginas ni current.`,methods:[],displayName:`Pagination`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`SLOT nativo: instancias reales de PaginationItem. Cantidad y rango no son ejes de variante.`},onPrevious:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNext:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},previousDisabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},nextDisabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},previousLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Página anterior'`,computed:!1}},nextLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Página siguiente'`,computed:!1}},"aria-label":{defaultValue:{value:`'Paginación'`,computed:!1},required:!1}},composes:[`Omit`]}})),b,x,S,C,w,T,E,D,O,k;e((()=>{b=t(r(),1),p(),y(),x=n(),S={title:`Components/Navigation/Pagination`,component:_,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Paginación: IconButton tertiary md (prev/next) y SLOT nativo de PaginationItem. `}}},argTypes:{children:{control:!1,description:`SLOT nativo: instancias reales de PaginationItem. Cantidad y current los aporta la composición.`,table:{type:{summary:`ReactNode`}}},previousDisabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},nextDisabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},className:{control:!1,table:{disable:!0}}}},C={docs:{canvas:{sourceState:`none`}}},w={args:{previousDisabled:!1,nextDisabled:!1},render:e=>(0,x.jsxs)(_,{...e,children:[(0,x.jsx)(f,{children:`1`}),(0,x.jsx)(f,{children:`2`}),(0,x.jsx)(f,{current:!0,children:`3`}),(0,x.jsx)(f,{disabled:!0,children:`…`}),(0,x.jsx)(f,{children:`10`})]})},T={parameters:{docs:{canvas:{sourceState:`shown`},description:{story:``},source:{code:`<Pagination>
  <PaginationItem>1</PaginationItem>
  <PaginationItem>2</PaginationItem>
  <PaginationItem current>3</PaginationItem>
  <PaginationItem disabled>…</PaginationItem>
  <PaginationItem>10</PaginationItem>
</Pagination>`}}},render:()=>(0,x.jsxs)(_,{children:[(0,x.jsx)(f,{children:`1`}),(0,x.jsx)(f,{children:`2`}),(0,x.jsx)(f,{current:!0,children:`3`}),(0,x.jsx)(f,{disabled:!0,children:`…`}),(0,x.jsx)(f,{children:`10`})]})},E={name:`Primera página`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Pagination previousDisabled>
  <PaginationItem current>1</PaginationItem>
  <PaginationItem>2</PaginationItem>
  <PaginationItem>3</PaginationItem>
</Pagination>`}}},render:()=>(0,x.jsxs)(_,{previousDisabled:!0,children:[(0,x.jsx)(f,{current:!0,children:`1`}),(0,x.jsx)(f,{children:`2`}),(0,x.jsx)(f,{children:`3`})]})},D={name:`Última página`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Pagination nextDisabled>
  <PaginationItem>8</PaginationItem>
  <PaginationItem>9</PaginationItem>
  <PaginationItem current>10</PaginationItem>
</Pagination>`}}},render:()=>(0,x.jsxs)(_,{nextDisabled:!0,children:[(0,x.jsx)(f,{children:`8`}),(0,x.jsx)(f,{children:`9`}),(0,x.jsx)(f,{current:!0,children:`10`})]})},O={name:`Ejemplo de uso`,parameters:C,render:()=>{let[e,t]=(0,b.useState)(3);return(0,x.jsx)(_,{previousDisabled:e===1,nextDisabled:e===10,onPrevious:()=>t(e=>Math.max(1,e-1)),onNext:()=>t(e=>Math.min(10,e+1)),children:[1,2,3,`…`,10].map(n=>n===`…`?(0,x.jsx)(f,{disabled:!0,children:`…`},`ellipsis`):(0,x.jsx)(f,{current:e===n,onClick:()=>t(n),children:n},n))})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    previousDisabled: false,
    nextDisabled: false
  },
  render: args => <Pagination {...args}>\r
      <PaginationItem>1</PaginationItem>\r
      <PaginationItem>2</PaginationItem>\r
      <PaginationItem current>3</PaginationItem>\r
      <PaginationItem disabled>…</PaginationItem>\r
      <PaginationItem>10</PaginationItem>\r
    </Pagination>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: ''
      },
      source: {
        code: \`<Pagination>
  <PaginationItem>1</PaginationItem>
  <PaginationItem>2</PaginationItem>
  <PaginationItem current>3</PaginationItem>
  <PaginationItem disabled>…</PaginationItem>
  <PaginationItem>10</PaginationItem>
</Pagination>\`
      }
    }
  },
  render: () => <Pagination>\r
      <PaginationItem>1</PaginationItem>\r
      <PaginationItem>2</PaginationItem>\r
      <PaginationItem current>3</PaginationItem>\r
      <PaginationItem disabled>…</PaginationItem>\r
      <PaginationItem>10</PaginationItem>\r
    </Pagination>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Primera página',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Pagination previousDisabled>
  <PaginationItem current>1</PaginationItem>
  <PaginationItem>2</PaginationItem>
  <PaginationItem>3</PaginationItem>
</Pagination>\`
      }
    }
  },
  render: () => <Pagination previousDisabled>\r
      <PaginationItem current>1</PaginationItem>\r
      <PaginationItem>2</PaginationItem>\r
      <PaginationItem>3</PaginationItem>\r
    </Pagination>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Última página',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Pagination nextDisabled>
  <PaginationItem>8</PaginationItem>
  <PaginationItem>9</PaginationItem>
  <PaginationItem current>10</PaginationItem>
</Pagination>\`
      }
    }
  },
  render: () => <Pagination nextDisabled>\r
      <PaginationItem>8</PaginationItem>\r
      <PaginationItem>9</PaginationItem>\r
      <PaginationItem current>10</PaginationItem>\r
    </Pagination>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const total = 10;
    const [page, setPage] = useState(3);
    const pages = [1, 2, 3, '…', 10] as const;
    return <Pagination previousDisabled={page === 1} nextDisabled={page === total} onPrevious={() => setPage(value => Math.max(1, value - 1))} onNext={() => setPage(value => Math.min(total, value + 1))}>\r
        {pages.map(value => value === '…' ? <PaginationItem key="ellipsis" disabled>\r
              …\r
            </PaginationItem> : <PaginationItem key={value} current={page === value} onClick={() => setPage(value)}>\r
              {value}\r
            </PaginationItem>)}\r
      </Pagination>;
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`Default`,`FirstPage`,`LastPage`,`InContext`]}))();export{T as Default,E as FirstPage,O as InContext,D as LastPage,w as Playground,k as __namedExportsOrder,S as default};