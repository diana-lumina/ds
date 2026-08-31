import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n,U as r}from"./iframe-CPmBFJEF.js";import{n as i,t as a}from"./calendar-CcWcdUlt.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{o=t(r(),1),i(),s=n(),c=new Date(2026,7,12),l={title:`Components/Internal Building Blocks/Calendar`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Calendario mensual. Compone IconButton tertiary md (mes anterior/siguiente) y CalendarDay.`}}},argTypes:{locale:{control:`text`,table:{defaultValue:{summary:`es-MX`}}},previousLabel:{control:`text`},nextLabel:{control:`text`}}},u={docs:{canvas:{sourceState:`none`}}},d={render:function(){let[e,t]=(0,o.useState)(c);return(0,s.jsx)(a,{defaultMonth:c,value:e,onValueChange:t})}},f={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Calendar defaultMonth={new Date(2026, 7, 1)} />`}}},render:()=>(0,s.jsx)(a,{defaultMonth:c})},p={parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Calendar
  defaultMonth={new Date(2026, 7, 1)}
  value={new Date(2026, 7, 12)}
/>`}}},render:()=>(0,s.jsx)(a,{defaultMonth:c,value:c})},m={name:`minDate / maxDate`,parameters:{docs:{canvas:{sourceState:`shown`},source:{code:`<Calendar
  defaultMonth={new Date(2026, 7, 1)}
  minDate={new Date(2026, 7, 10)}
  maxDate={new Date(2026, 7, 20)}
/>`}}},render:()=>(0,s.jsx)(a,{defaultMonth:c,minDate:new Date(2026,7,10),maxDate:new Date(2026,7,20)})},h={name:`Ejemplo de uso`,parameters:u,render:function(){let[e,t]=(0,o.useState)(c);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,s.jsx)(a,{defaultMonth:c,value:e,onValueChange:t}),(0,s.jsx)(`p`,{style:{margin:0,fontFamily:`monospace`,fontSize:12,color:`#58585B`},children:e?e.toLocaleDateString(`es-MX`,{dateStyle:`long`}):`Sin fecha`})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function PlaygroundStory() {
    const [value, setValue] = useState<Date | undefined>(august);
    return <Calendar defaultMonth={august} value={value} onValueChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Calendar defaultMonth={new Date(2026, 7, 1)} />\`
      }
    }
  },
  render: () => <Calendar defaultMonth={august} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Calendar
  defaultMonth={new Date(2026, 7, 1)}
  value={new Date(2026, 7, 12)}
/>\`
      }
    }
  },
  render: () => <Calendar defaultMonth={august} value={august} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'minDate / maxDate',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<Calendar
  defaultMonth={new Date(2026, 7, 1)}
  minDate={new Date(2026, 7, 10)}
  maxDate={new Date(2026, 7, 20)}
/>\`
      }
    }
  },
  render: () => <Calendar defaultMonth={august} minDate={new Date(2026, 7, 10)} maxDate={new Date(2026, 7, 20)} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: function InContextStory() {
    const [value, setValue] = useState<Date | undefined>(august);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>\r
        <Calendar defaultMonth={august} value={value} onValueChange={setValue} />\r
        <p style={{
        margin: 0,
        fontFamily: 'monospace',
        fontSize: 12,
        color: '#58585B'
      }}>\r
          {value ? value.toLocaleDateString('es-MX', {
          dateStyle: 'long'
        }) : 'Sin fecha'}\r
        </p>\r
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Default`,`Selected`,`WithLimits`,`InContext`]}))();export{f as Default,h as InContext,d as Playground,p as Selected,m as WithLimits,g as __namedExportsOrder,l as default};