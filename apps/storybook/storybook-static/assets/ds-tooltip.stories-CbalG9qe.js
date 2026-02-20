import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as o}from"./ds-button-KWiVzpRf.js";import{T as h,a as T,b as g,c as x}from"./tooltip-DkTUjrOK.js";import"./button-DtudzLjv.js";import"./utils-CiB0LXSo.js";import"./index-89GOPsfQ.js";import"./index-ViAQND10.js";import"./index-JhL3uwfD.js";import"./createLucideIcon-CctB0W3q.js";import"./index-DCSTw6i-.js";import"./index-D7HlyTOZ.js";import"./index-D_bGFijp.js";import"./index-BPftEo5x.js";import"./index-hLVmTiZX.js";function e({children:c,content:m,side:u="top",sideOffset:f=4}){return t.jsx(h,{children:t.jsxs(T,{children:[t.jsx(g,{asChild:!0,children:c}),t.jsx(x,{side:u,sideOffset:f,children:m})]})})}e.__docgenInfo={description:"EPICODE branded tooltip.\nWrap any element and pass a `content` string.",methods:[],displayName:"DsTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"The element that receives the tooltip on hover"},content:{required:!0,tsType:{name:"string"},description:"Tooltip text content"},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:'Placement side (default: "top")',defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"Offset in px from the trigger (default: 4)",defaultValue:{value:"4",computed:!1}}}};const P={title:"Components/DsTooltip",tags:["autodocs"],component:e,argTypes:{content:{control:"text",description:"Tooltip text content"},side:{control:"select",options:["top","right","bottom","left"],description:"Placement side"},sideOffset:{control:{type:"number",min:0,max:20},description:"Offset in px from the trigger"}}},i={args:{content:"This is a tooltip",children:t.jsx(o,{variant:"outline",children:"Hover me"})}},n={render:()=>t.jsxs("div",{className:"flex items-center gap-4 p-16",children:[t.jsx(e,{content:"Top tooltip",side:"top",children:t.jsx(o,{variant:"outline",children:"Top"})}),t.jsx(e,{content:"Right tooltip",side:"right",children:t.jsx(o,{variant:"outline",children:"Right"})}),t.jsx(e,{content:"Bottom tooltip",side:"bottom",children:t.jsx(o,{variant:"outline",children:"Bottom"})}),t.jsx(e,{content:"Left tooltip",side:"left",children:t.jsx(o,{variant:"outline",children:"Left"})})]})};var r,s,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    content: "This is a tooltip",
    children: <DsButton variant="outline">Hover me</DsButton>
  }
}`,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 p-16">
      <DsTooltip content="Top tooltip" side="top">
        <DsButton variant="outline">Top</DsButton>
      </DsTooltip>
      <DsTooltip content="Right tooltip" side="right">
        <DsButton variant="outline">Right</DsButton>
      </DsTooltip>
      <DsTooltip content="Bottom tooltip" side="bottom">
        <DsButton variant="outline">Bottom</DsButton>
      </DsTooltip>
      <DsTooltip content="Left tooltip" side="left">
        <DsButton variant="outline">Left</DsButton>
      </DsTooltip>
    </div>
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["Default","Sides"];export{i as Default,n as Sides,S as __namedExportsOrder,P as default};
