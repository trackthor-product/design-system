import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{At as n,Ci as r,Lt as i,Mr as a,Ua as o,Wt as s,Zt as c,ai as l,at as u,c as d,en as f,gr as p,l as m,m as h,o as g,s as _}from"./iframe-BSRkYts9.js";import{n as v,t as y}from"./CloseIcon-DWZFMMlK.js";import{n as b,t as x}from"./useMenu-C-tsDXv3.js";import{n as S,t as C}from"./ChevronIcon-D4nkol5u.js";import{n as w,t as T}from"./useTranslation-DelaFFnu.js";function E({label:e,value:t,onChange:o,checked:h,onCheckedChange:_,options:v,variant:x,disabled:S,labelMenu:T,labelOnlyAfterSelection:E,applyOnSelect:O,separatorBetweenLabelAndOptionSelected:k=`:`,multiple:A=!1,size:j=`medium`}){let M=h!==void 0,[N,P]=(0,D.useState)(()=>M?h:A?t||[]:t),F=M?h:A?t?.length>0:t!=null,{anchorMenu:I,openMenu:L,isMenuOpen:R,closeMenu:z}=b(),{t:B}=w(),V=Array.isArray(v),H=v!==void 0,U=e=>{M?_?.(e):o?.(e)},W=()=>{U(N),z()},G=()=>{if(M)P(!1),_?.(!1);else if(A){let e=[];P(e),o?.(e)}else P(void 0),o?.(void 0);z()},K=e=>{if(M&&!H){_?.(!h);return}if(H&&V){L(e);return}if(H&&!V)if(M)_?.(!h);else{let e=t==null?v?.value:void 0;A?o?.(e===void 0?[]:[e]):o?.(e)}},q=e=>{let t;if(M)t=!0,P(t);else if(A){let n=N||[];t=n.includes(e)?n.filter(t=>t!==e):[...n,e],P(t)}else t=e,P(t);O&&(U(t),A||M||z())},J=e=>M?h:A?N?.includes(e):N===e,Y=e=>V?`${T?`${T} ${k} `:``}${v.find(t=>t.value===e)?.label||``}`:v?.label;return(0,D.useEffect)(()=>{P(M?h:A?t||[]:t)},[M,A,h,t]),m(g,{children:[d(l,{disabled:S,size:j,label:(()=>{if(M)return e;if(E&&F){let n=t||[],r=Array.isArray(n)?n.length:1;return`${e||T}${A&&r>1?` (${r})`:``}`}if(A&&F){let n=t||[],r=n.length;if(r===1)return Y(n[0])||e;if(r>1){let e=Y(n[0]),t=r-1;return`${e||String(n[0])}... (+${t})`}}return!(A||M)&&t!=null&&V&&Y(t)||e})(),variant:x,deleteIcon:H&&V?d(C,{fontSize:`small`,sx:{marginLeft:-.5,marginRight:.5,transform:R?`rotate(180deg)`:`rotate(0deg)`}}):void 0,onClick:K,onDelete:H&&V?()=>{}:void 0,color:F?`active`:`default`}),H&&V&&m(s,{anchorEl:I,open:R,onClose:z,slotProps:{paper:{sx:{minWidth:350}}},children:[m(u,{component:`li`,direction:`row`,paddingLeft:2,marginBottom:1,children:[d(c,{children:T}),d(r,{onClick:z,children:d(y,{fontSize:`small`})})]}),v.map((e,t)=>{let r=`${e.id||e.value}-${t}`,a=J(e.value);return m(i,{onClick:()=>q(e.value),children:[d(f,{children:d(A||M?p:n,{disableRipple:!0,checked:a,sx:{padding:0}})}),d(c,{sx:{color:`text.secondary`},children:e.label})]},r)}),!O&&m(u,{component:`li`,direction:`row`,justifyContent:`flex-end`,spacing:1,marginTop:1,children:[d(a,{size:`small`,onClick:G,children:B(`reset`)}),d(a,{variant:`contained`,size:`small`,onClick:W,children:B(`apply`)})]})]})]})}var D,O=e((()=>{h(),D=t(o(),1),S(),v(),x(),T(),_();try{E.displayName=`ChipFilter`,E.__docgenInfo={description:`ChipFilter component that can function as a toggle, single selection, or multiple selection filter.`,displayName:`ChipFilter`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,methods:[],props:{checked:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`The checked state of the toggle. When provided, the component acts as a toggle.`,name:`checked`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`boolean`}},onCheckedChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Callback function triggered when the checked state changes.`,name:`onCheckedChange`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{param:`checked`},type:{name:`((checked: boolean) => void)`}},multiple:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Exclude these props for toggle mode`,name:`multiple`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`undefined`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Exclude these props for toggle mode`,name:`value`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Exclude these props for toggle mode`,name:`onChange`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`undefined`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The label of the chip filter.`,name:`label`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`ReactNode`}},labelMenu:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The label displayed in the menu for the chip filter, only with multiple options.`,name:`labelMenu`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`medium`},declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The size of the chip filter.`,name:`size`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"small" | "medium", ChipPropsSizeOverrides>`,value:[{value:`"small"`},{value:`"medium"`},{value:`"xSmall"`}]}},variant:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The variant of the chip filter.`,name:`variant`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"outlined" | "filled", ChipPropsVariantOverrides>`,value:[{value:`"outlined"`},{value:`"filled"`},{value:`"outlined-rounded"`},{value:`"rounded"`}]}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Indicates if the chip filter is disabled.`,name:`disabled`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`boolean`}},options:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The options available for selection in the chip filter.
If "options" is not provided, it acts as a simple toggle.`,name:`options`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`Option<boolean> | Option<boolean>[]`}},separatorBetweenLabelAndOptionSelected:{defaultValue:{value:`:`},declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Indicates if there should be a separator between the label menu and the options selected in the menu.
Defaults to ":"`,name:`separatorBetweenLabelAndOptionSelected`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`string`}},labelOnlyAfterSelection:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Indicates if the label should only be displayed after a selection is made.`,name:`labelOnlyAfterSelection`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`boolean`}},applyOnSelect:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`When true, changes are applied immediately without needing to click "Apply".
When false (default), changes require clicking "Apply" to be applied.`,name:`applyOnSelect`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{param:`label
value
onChange
checked
onCheckedChange
options
variant
disabled
labelMenu
labelOnlyAfterSelection
separatorBetweenLabelAndOptionSelected
multiple
size
applyOnSelect`,constructor:`function Object() { [native code] }
`}}}catch{}})),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{h(),k=t(o(),1),O(),_(),A=[{id:`1`,label:`Filter 1`,value:`filter-1`},{id:`2`,label:`Filter 2`,value:`filter-2`},{id:`3`,label:`Filter 3`,value:`filter-3`},{id:`4`,label:`Filter 4`,value:`filter-4`}],j=e=>{let[t,n]=(0,k.useState)(),[r,i]=(0,k.useState)();return m(u,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[d(E,{size:`small`,label:`Small`,onChange:e=>{n(e)},value:t,options:A,labelMenu:`Make your choice`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected,applyOnSelect:e?.applyOnSelect}),d(E,{size:`medium`,label:`Medium`,onChange:e=>{i(e)},value:r,options:A,labelMenu:`Make your choice`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected,applyOnSelect:e?.applyOnSelect})]})},M=e=>{let[t,n]=(0,k.useState)([]),[r,i]=(0,k.useState)([]);return m(u,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[d(E,{multiple:!0,size:`small`,label:`Small Multiple`,onChange:e=>{n(e)},value:t,options:A,labelMenu:`Select multiple options`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected}),d(E,{multiple:!0,size:`medium`,label:`Medium Multiple`,onChange:e=>{i(e)},value:r,options:A,labelMenu:`Select multiple options`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected})]})},N=()=>{let[e,t]=(0,k.useState)(!1),[n,r]=(0,k.useState)(!1);return m(u,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[d(E,{size:`small`,label:`Small`,onCheckedChange:e=>{t(e)},checked:e}),d(E,{size:`medium`,label:`Medium`,onCheckedChange:e=>{r(e)},checked:n})]})},P=j.bind({}),P.args={},F=j.bind({}),F.args={disabled:!0},I=M.bind({}),I.args={},L=M.bind({}),L.args={disabled:!0},R=N.bind({}),R.args={},z=j.bind({}),z.args={labelOnlyAfterSelection:!0},B=M.bind({}),B.args={labelOnlyAfterSelection:!0},V=j.bind({}),V.args={separatorBetweenLabelAndOptionSelected:`/`},H=j.bind({}),H.args={applyOnSelect:!0},U={component:E,title:`Components/Inputs/ChipFilter`},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);
  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };
  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple size="small" label="Small Multiple" onChange={handleChangeSmallMultiple} value={valueSmallMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
      <ChipFilter multiple size="medium" label="Medium Multiple" onChange={handleChangeMediumMultiple} value={valueMediumMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
    </Stack>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);
  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };
  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple size="small" label="Small Multiple" onChange={handleChangeSmallMultiple} value={valueSmallMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
      <ChipFilter multiple size="medium" label="Medium Multiple" onChange={handleChangeMediumMultiple} value={valueMediumMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
    </Stack>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [valueSmallToggle, setValueSmallToggle] = useState<boolean>(false);
  const [valueMediumToggle, setValueMediumToggle] = useState<boolean>(false);
  const handleChangeSmallToggle = (newValue: boolean) => {
    setValueSmallToggle(newValue);
  };
  const handleChangeMediumToggle = (newValue: boolean) => {
    setValueMediumToggle(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onCheckedChange={handleChangeSmallToggle} checked={valueSmallToggle} />
      <ChipFilter size="medium" label="Medium" onCheckedChange={handleChangeMediumToggle} checked={valueMediumToggle} />
    </Stack>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);
  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };
  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple size="small" label="Small Multiple" onChange={handleChangeSmallMultiple} value={valueSmallMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
      <ChipFilter multiple size="medium" label="Medium Multiple" onChange={handleChangeMediumMultiple} value={valueMediumMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
    </Stack>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...H.parameters?.docs?.source}}},W=[`Basic`,`Disabled`,`Multiple`,`MultipleDisabled`,`Toggle`,`LabelOnlyAfterSelection`,`MultipleLabelOnlyAfterSelection`,`CustomSeparator`,`ApplyOnSelect`]}))();export{H as ApplyOnSelect,P as Basic,V as CustomSeparator,F as Disabled,z as LabelOnlyAfterSelection,I as Multiple,L as MultipleDisabled,B as MultipleLabelOnlyAfterSelection,R as Toggle,W as __namedExportsOrder,U as default};