import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I}from"./input-BFfgO3Gn.js";import{c as S}from"./utils-CiB0LXSo.js";import{c as E}from"./createLucideIcon-CctB0W3q.js";import"./index-JhL3uwfD.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],D=E("search",T);function y({label:r,helperText:d,error:t,id:v,leftIcon:n,rightSlot:c,className:N,...j}){const i=v??(r==null?void 0:r.toLowerCase().replace(/\s+/g,"-"));return e.jsxs("div",{className:"flex flex-col gap-1.5",children:[r&&e.jsx("label",{className:"font-medium text-sm",htmlFor:i,children:r}),e.jsxs("div",{className:"relative flex items-center",children:[n&&e.jsx("span",{className:"pointer-events-none absolute left-2.5 text-muted-foreground",children:n}),e.jsx(I,{"aria-invalid":!!t,className:S("rounded-sm border border-accent-foreground/20 p-5","placeholder:text-accent-foreground/50",n&&"pl-9",c&&"pr-14",N),id:i,...j}),c&&e.jsx("div",{className:"absolute right-3",children:c})]}),t&&e.jsx("p",{className:"text-destructive text-xs",children:t}),!t&&d&&e.jsx("p",{className:"text-muted-foreground text-xs",children:d})]})}y.__docgenInfo={description:"EPICODE branded input with label, helper text and error state.",methods:[],displayName:"DsInput",props:{error:{required:!1,tsType:{name:"string"},description:"Error message displayed below the input."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the input."},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the input."},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon rendered on the left side of the input."},rightSlot:{required:!1,tsType:{name:"ReactNode"},description:"Slot rendered on the right side (e.g. keyboard shortcut badge)."}},composes:["ComponentProps"]};const C={title:"Components/DsInput",component:y,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label above the input"},placeholder:{control:"text",description:"Placeholder text"},helperText:{control:"text",description:"Helper text below the input"},error:{control:"text",description:"Error message (activates error state)"},disabled:{control:"boolean",description:"Disabled state"},type:{control:"select",options:["text","email","password","search","url"],description:"Input type"}}},o={args:{label:"Email",placeholder:"you@epicode.com",helperText:"We'll never share your email."}},s={args:{label:"Email",placeholder:"you@epicode.com",error:"Please enter a valid email address."}},a={args:{placeholder:"Search in course",type:"search",leftIcon:e.jsx(D,{className:"size-4"}),rightSlot:e.jsx("kbd",{className:"pointer-events-none inline-flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-muted-foreground text-xs",children:"⌘K"})}};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "you@epicode.com",
    helperText: "We'll never share your email."
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "you@epicode.com",
    error: "Please enter a valid email address."
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Search in course",
    type: "search",
    leftIcon: <SearchIcon className="size-4" />,
    rightSlot: <kbd className="pointer-events-none inline-flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-muted-foreground text-xs">
        ⌘K
      </kbd>
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const L=["Default","ErrorState","Search"];export{o as Default,s as ErrorState,a as Search,L as __namedExportsOrder,C as default};
