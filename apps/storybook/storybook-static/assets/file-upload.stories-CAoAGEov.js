import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,t as a}from"./utils-D8qMR3V9.js";import{t as o}from"./button-Pbm51Wt4.js";import{t as s}from"./button-CVm1xnLo.js";import{n as c,t as l}from"./file-upload-drop-zone-CmOvfHBg.js";import{n as u,t as d}from"./file-upload-item-B_js234Y.js";var f=e((()=>{c()})),p=e((()=>{u()})),m,h,g,_,v,y,b,x,S,C,w=e((()=>{m=`_root_1if0f_9`,h=`_dropZone_1if0f_39`,g=`_trigger_1if0f_47`,_=`_input_1if0f_65`,v=`_primary_1if0f_5`,y=`_secondary_1if0f_91`,b=`_supporting_1if0f_93`,x=`_list_1if0f_197`,S=`_item_1if0f_219`,C={root:m,dropZone:h,trigger:g,input:_,primary:v,secondary:y,supporting:b,list:x,item:S}}));function T(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function E(e,t,n){return{id:t,primaryText:e.name,secondaryText:T(e.size),status:`selected`,actionLabel:n}}function D({type:e=`button`,tone:t=`standard`,disabled:n=!1,primaryText:r,secondaryText:i,actionLabel:s,dropZonePrimaryText:c=`Arrastra el archivo aquí`,dropZoneSecondaryText:u=`PDF, DOCX o JPG · máximo 10 MB`,supportingText:f,accept:p,multiple:m=!0,items:h,itemActionLabel:g=`Eliminar`,onFilesChange:_,onItemAction:v,className:y,...b}){let x=O.useRef(null),S=O.useId(),w=O.useId(),T=O.useId(),D=t===`inverse`,A=t,j=h!=null,[M,N]=O.useState([]),P=j?h:M.map(({id:e,file:t})=>E(t,e,g));function F(e){if(n)return;let t=Array.from(e);if(t.length!==0){if(!j){let e=t[0],n=m?[...M,...t.map((e,t)=>({id:`${e.name}-${e.size}-${e.lastModified}-${M.length+t}`,file:e}))]:e?[{id:`${e.name}-${e.size}-${e.lastModified}`,file:e}]:M;N(n),_?.(n.map(e=>e.file));return}_?.(t)}}function I(e){if(!j){let t=M.filter(t=>t.id!==e);N(t),_?.(t.map(e=>e.file))}v?.(e)}return(0,k.jsxs)(`div`,{"data-slot":`file-upload`,"data-type":e,"data-tone":t,"data-disabled":n||void 0,"aria-disabled":n||void 0,"aria-labelledby":S,"aria-describedby":[w,f?T:null].filter(Boolean).join(` `)||void 0,className:a(C.root,y),...b,children:[(0,k.jsx)(`p`,{id:S,className:C.primary,children:r}),(0,k.jsx)(`p`,{id:w,className:C.secondary,children:i}),e===`drag-zone`?(0,k.jsx)(l,{className:C.dropZone,tone:A,disabled:n,primaryText:c,secondaryText:u,actionLabel:s,accept:p,multiple:m,onFilesChange:F}):(0,k.jsxs)(`div`,{className:C.trigger,children:[(0,k.jsx)(`input`,{ref:x,className:C.input,type:`file`,tabIndex:-1,accept:p,multiple:m,disabled:n,onChange:e=>{F(e.target.files??[]),e.target.value=``}}),(0,k.jsx)(o,{type:`button`,size:`sm`,hierarchy:`secondary`,tone:D?`inverse`:`standard`,label:s,disabled:n,onClick:()=>{n||x.current?.click()}})]}),f?(0,k.jsx)(`p`,{id:T,className:C.supporting,"data-tone":t,children:f}):null,P.length>0?(0,k.jsx)(`ul`,{className:C.list,children:P.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsx)(d,{className:C.item,status:e.status,tone:t,primaryText:e.primaryText,secondaryText:e.secondaryText,actionLabel:e.actionLabel??g,progress:e.progress,onAction:()=>I(e.id)})},e.id))}):null]})}var O,k,A=e((()=>{O=t(r(),1),i(),s(),f(),p(),w(),k=n(),D.__docgenInfo={description:`File Upload: type button | drag-zone × tone standard | inverse.\r
button: primary, secondary, Button secondary, supporting.\r
drag-zone: primary, secondary, FileUploadDropZone, supporting; FileUploadItem debajo al elegir.`,methods:[],displayName:`FileUpload`,props:{type:{required:!1,tsType:{name:`union`,raw:`'button' | 'drag-zone'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'drag-zone'`}]},description:``,defaultValue:{value:`'button'`,computed:!1}},tone:{required:!1,tsType:{name:`union`,raw:`'standard' | 'inverse'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'inverse'`}]},description:``,defaultValue:{value:`'standard'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},primaryText:{required:!0,tsType:{name:`string`},description:``},secondaryText:{required:!0,tsType:{name:`string`},description:``},actionLabel:{required:!0,tsType:{name:`string`},description:``},dropZonePrimaryText:{required:!1,tsType:{name:`string`},description:"Copy interno de FileUploadDropZone. Solo aplica en `drag-zone`.",defaultValue:{value:`'Arrastra el archivo aquí'`,computed:!1}},dropZoneSecondaryText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'PDF, DOCX o JPG · máximo 10 MB'`,computed:!1}},supportingText:{required:!1,tsType:{name:`string`},description:``},accept:{required:!1,tsType:{name:`string`},description:``},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},items:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  id: string\r
  primaryText: string\r
  secondaryText: string\r
  status?: FileUploadItemStatus\r
  actionLabel?: string\r
  progress?: number\r
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`primaryText`,value:{name:`string`,required:!0}},{key:`secondaryText`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`'selected' | 'uploading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'selected'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}],required:!1}},{key:`actionLabel`,value:{name:`string`,required:!1}},{key:`progress`,value:{name:`number`,required:!1}}]}}],raw:`FileUploadEntry[]`},description:`Ítems controlados. Si no se pasa, se generan al elegir archivos.`},itemActionLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Eliminar'`,computed:!1}},onFilesChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:``},onItemAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}}));function j(e){return(0,N.jsx)(D,{type:e.type,tone:e.tone,disabled:e.disabled,primaryText:e.primaryText??`Sube tu comprobante`,secondaryText:e.secondaryText??`PDF o JPG · máximo 10 MB`,actionLabel:e.actionLabel??`Seleccionar archivo`,supportingText:e.supportingText??`Puedes adjuntar más de un archivo`,items:e.items})}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{M=t(r(),1),A(),N=n(),P={title:`Components/Inputs/FileUpload`,component:D,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Carga de archivos: type `button` | `drag-zone` × tone standard | inverse. Button: primary, secondary, Button secondary y supporting. Drag-zone: primary, secondary y FileUploadDropZone."}}},argTypes:{type:{control:`radio`,options:[`button`,`drag-zone`],table:{defaultValue:{summary:`button`}}},tone:{control:`radio`,options:[`standard`,`inverse`],table:{defaultValue:{summary:`standard`}}},disabled:{control:`boolean`,table:{defaultValue:{summary:`false`}}},primaryText:{control:`text`},secondaryText:{control:`text`},actionLabel:{control:`text`},supportingText:{control:`text`}}},F={docs:{canvas:{sourceState:`shown`}}},I={docs:{canvas:{sourceState:`none`}}},L=[e=>(0,N.jsx)(`div`,{style:{background:`var(--color-surface-brand-strong, #231f20)`,padding:24,borderRadius:8,display:`inline-block`},children:(0,N.jsx)(e,{})})],R=[{id:`1`,primaryText:`syllabus.pdf`,secondaryText:`1.2 MB`,status:`selected`}],z={args:{type:`button`,tone:`standard`,disabled:!1,primaryText:`Sube tu comprobante`,secondaryText:`PDF o JPG · máximo 10 MB`,actionLabel:`Seleccionar archivo`,supportingText:`Puedes adjuntar más de un archivo`},render:e=>(0,N.jsx)(j,{...e})},B={name:`Type: button`,parameters:{...F,docs:{...F.docs,source:{code:`<FileUpload
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
  supportingText="Puedes adjuntar más de un archivo"
/>`}}},render:()=>(0,N.jsx)(j,{type:`button`})},V={name:`Type: drag-zone`,parameters:{...F,docs:{...F.docs,source:{code:`<FileUpload
  type="drag-zone"
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>`}}},render:()=>(0,N.jsx)(j,{type:`drag-zone`,items:R})},H={parameters:{...F,docs:{...F.docs,source:{code:`<FileUpload
  tone="inverse"
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
  supportingText="Puedes adjuntar más de un archivo"
/>`}},backgrounds:{default:`dark`}},decorators:L,render:()=>(0,N.jsx)(j,{tone:`inverse`})},U={name:`Con FileUploadItem`,parameters:{...F,docs:{...F.docs,source:{code:`<FileUpload
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
  supportingText="Puedes adjuntar más de un archivo"
  items={[{ id: '1', primaryText: 'syllabus.pdf', secondaryText: '1.2 MB' }]}
/>`}}},render:()=>(0,N.jsx)(j,{items:R})},W={name:`Types & tones`,parameters:I,render:()=>{let e={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,padding:`0 16px 12px`,borderBottom:`1px solid #eee`},t={fontFamily:`monospace`,fontSize:11,color:`#888`,fontWeight:600,textAlign:`left`,verticalAlign:`top`,padding:`16px 24px 16px 0`,borderBottom:`1px solid #f0f0f0`,whiteSpace:`nowrap`},n={textAlign:`left`,verticalAlign:`top`,padding:`16px`,borderBottom:`1px solid #f0f0f0`},r={...n,background:`var(--color-surface-brand-strong, #231f20)`};return(0,N.jsx)(`div`,{style:{padding:8},children:(0,N.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{style:{...e,paddingLeft:0},children:`Type`}),(0,N.jsx)(`th`,{style:e,children:`Standard`}),(0,N.jsx)(`th`,{style:e,children:`Inverse`})]})}),(0,N.jsxs)(`tbody`,{children:[(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{style:t,children:`button`}),(0,N.jsx)(`td`,{style:n,children:(0,N.jsx)(j,{type:`button`,items:R})}),(0,N.jsx)(`td`,{style:r,children:(0,N.jsx)(j,{type:`button`,tone:`inverse`,items:R})})]}),(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{style:{...t,borderBottom:`none`},children:`drag-zone`}),(0,N.jsx)(`td`,{style:{...n,borderBottom:`none`},children:(0,N.jsx)(j,{type:`drag-zone`,items:R})}),(0,N.jsx)(`td`,{style:{...r,borderBottom:`none`},children:(0,N.jsx)(j,{type:`drag-zone`,tone:`inverse`,items:R})})]})]})]})})}},G={name:`Ejemplo de uso`,parameters:{docs:{canvas:{sourceState:`none`},description:{story:`Elige un archivo para ver FileUploadItem debajo. Eliminar lo quita de la lista.`}}},render:function(){let[e,t]=(0,M.useState)(0);return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,N.jsx)(D,{primaryText:`Sube tu comprobante`,secondaryText:`PDF o JPG · máximo 10 MB`,actionLabel:`Seleccionar archivo`,supportingText:`Puedes adjuntar más de un archivo`,onFilesChange:e=>t(e.length)}),(0,N.jsxs)(`p`,{style:{margin:0,fontFamily:`monospace`,fontSize:12,color:`#888`},children:[`Archivos: `,e]})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'button',
    tone: 'standard',
    disabled: false,
    primaryText: 'Sube tu comprobante',
    secondaryText: 'PDF o JPG · máximo 10 MB',
    actionLabel: 'Seleccionar archivo',
    supportingText: 'Puedes adjuntar más de un archivo'
  },
  render: args => <Specimen {...args} />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Type: button',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUpload
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
  supportingText="Puedes adjuntar más de un archivo"
/>\`
      }
    }
  },
  render: () => <Specimen type="button" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Type: drag-zone',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUpload
  type="drag-zone"
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>\`
      }
    }
  },
  render: () => <Specimen type="drag-zone" items={specimenItems} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUpload
  tone="inverse"
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
  supportingText="Puedes adjuntar más de un archivo"
/>\`
      }
    },
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Con FileUploadItem',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: \`<FileUpload
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
  supportingText="Puedes adjuntar más de un archivo"
  items={[{ id: '1', primaryText: 'syllabus.pdf', secondaryText: '1.2 MB' }]}
/>\`
      }
    }
  },
  render: () => <Specimen items={specimenItems} />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Types & tones',
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
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'top',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap'
    };
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'top',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0'
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
              <th style={{
              ...th,
              paddingLeft: 0
            }}>Type</th>\r
              <th style={th}>Standard</th>\r
              <th style={th}>Inverse</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={rowLabel}>button</td>\r
              <td style={td}>\r
                <Specimen type="button" items={specimenItems} />\r
              </td>\r
              <td style={tdInverse}>\r
                <Specimen type="button" tone="inverse" items={specimenItems} />\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{
              ...rowLabel,
              borderBottom: 'none'
            }}>drag-zone</td>\r
              <td style={{
              ...td,
              borderBottom: 'none'
            }}>\r
                <Specimen type="drag-zone" items={specimenItems} />\r
              </td>\r
              <td style={{
              ...tdInverse,
              borderBottom: 'none'
            }}>\r
                <Specimen type="drag-zone" tone="inverse" items={specimenItems} />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      description: {
        story: 'Elige un archivo para ver FileUploadItem debajo. Eliminar lo quita de la lista.'
      }
    }
  },
  render: function InContextStory() {
    const [count, setCount] = useState(0);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>\r
        <FileUpload primaryText="Sube tu comprobante" secondaryText="PDF o JPG · máximo 10 MB" actionLabel="Seleccionar archivo" supportingText="Puedes adjuntar más de un archivo" onFilesChange={next => setCount(next.length)} />\r
        <p style={{
        margin: 0,
        fontFamily: 'monospace',
        fontSize: 12,
        color: '#888'
      }}>\r
          Archivos: {count}\r
        </p>\r
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K=[`Playground`,`Button`,`DragZone`,`Inverse`,`WithItems`,`AllTypes`,`InContext`]}))();export{W as AllTypes,B as Button,V as DragZone,G as InContext,H as Inverse,z as Playground,U as WithItems,K as __namedExportsOrder,P as default};