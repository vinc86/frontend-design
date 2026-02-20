import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{c as w}from"./utils-CiB0LXSo.js";import{c as N}from"./index-89GOPsfQ.js";import{S as I}from"./index-ViAQND10.js";import"./index-JhL3uwfD.js";const L=N("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-4xl border border-transparent px-2 py-0.5 font-medium text-xs transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",{variants:{variant:{default:"bg-primary text-primary-foreground [a]:hover:bg-primary/80",secondary:"bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",destructive:"bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",outline:"border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",ghost:"hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",link:"text-primary underline-offset-4 hover:underline"}},defaultVariants:{variant:"default"}});function k({className:e,variant:r="default",asChild:n=!1,...i}){const S=n?I:"span";return y.jsx(S,{className:w(L({variant:r}),e),"data-slot":"badge","data-variant":r,...i})}k.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const B={completed:"bg-green-500/15 text-green-500 border-green-500/20","in-progress":"bg-yellow-500/15 text-orange-500 border-primary/20",locked:"bg-muted text-muted-foreground border-muted",new:"bg-primary/15 text-primary border-primary/20"};function C({status:e,className:r,children:n,...i}){return y.jsx(k,{className:w(e?B[e]:r),...i,children:n})}C.__docgenInfo={description:"EPICODE branded badge with LMS status variants.",methods:[],displayName:"DsBadge",props:{status:{required:!1,tsType:{name:"union",raw:"keyof typeof statusVariants",elements:[{name:"literal",value:"completed"},{name:"literal",value:'"in-progress"'},{name:"literal",value:"locked"},{name:"literal",value:"new"}]},description:"LMS status variant."}},composes:["ComponentProps"]};const E={title:"Components/DsBadge",component:C,tags:["autodocs"],argTypes:{status:{control:"select",options:["completed","in-progress","locked","new"],description:"LMS status variant"},variant:{control:"select",options:["default","secondary","destructive","outline"],description:"Base badge variant (ignored when status is set)"}}},t={args:{status:"completed",children:"Completed"}},s={args:{status:"in-progress",children:"In Progress"}},a={args:{status:"locked",children:"Locked"}},o={args:{status:"new",children:"New"}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: "completed",
    children: "Completed"
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "in-progress",
    children: "In Progress"
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,v,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: "locked",
    children: "Locked"
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,h,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: "new",
    children: "New"
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const q=["Completed","InProgress","Locked","New"];export{t as Completed,s as InProgress,a as Locked,o as New,q as __namedExportsOrder,E as default};
