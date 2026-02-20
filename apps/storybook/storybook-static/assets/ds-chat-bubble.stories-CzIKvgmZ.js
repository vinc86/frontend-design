import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as A}from"./ds-avatar-C0oaRLIU.js";import{c}from"./utils-CiB0LXSo.js";import{c as C}from"./createLucideIcon-CctB0W3q.js";import"./index-JhL3uwfD.js";import"./index-D_bGFijp.js";import"./index-BPftEo5x.js";import"./index-hLVmTiZX.js";import"./index-ViAQND10.js";import"./index-D7HlyTOZ.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],N=C("bot",R);function s({children:i,sender:w="assistant",avatarSrc:M,avatarFallback:j,timestamp:l}){const a=w==="user";return e.jsxs("div",{className:c("flex max-w-[85%] flex-col gap-3",a&&"m-auto"),children:[e.jsx("div",{className:"mt-1",children:a?e.jsx(A,{className:"ml-auto",fallback:j??"U",src:M}):e.jsx("div",{className:"flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground",children:e.jsx(N,{className:"size-4"})})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:c("w-fit rounded-2xl px-4 py-2.5 text-sm leading-relaxed",a?"ml-auto rounded-tr-none bg-primary text-primary-foreground":"rounded-tl-none bg-muted text-foreground"),children:i}),l&&e.jsx("span",{className:c("text-muted-foreground text-xs",a&&"text-right"),children:l})]})]})}s.__docgenInfo={description:`Chat message bubble with user/assistant variants.
User messages align right with primary background.
Assistant messages align left with muted background.`,methods:[],displayName:"DsChatBubble",props:{avatarFallback:{required:!1,tsType:{name:"string"},description:'Avatar fallback initials (default: "U" for user, bot icon for assistant)'},avatarSrc:{required:!1,tsType:{name:"string"},description:"Avatar src for user messages"},children:{required:!0,tsType:{name:"ReactNode"},description:"Message content — text or rich content"},sender:{required:!1,tsType:{name:"union",raw:'"user" | "assistant"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'}]},description:"Who sent the message",defaultValue:{value:'"assistant"',computed:!1}},timestamp:{required:!1,tsType:{name:"string"},description:"Optional timestamp string"}}};const _={title:"Components/DsChatBubble",tags:["autodocs"],component:s,argTypes:{sender:{control:"select",options:["user","assistant"],description:"Message sender"},timestamp:{control:"text",description:"Optional timestamp string"},avatarFallback:{control:"text",description:"Avatar fallback initials"}},decorators:[i=>e.jsx("div",{className:"mx-auto max-w-md space-y-4 p-4",children:e.jsx(i,{})})]},t={args:{sender:"assistant",children:"Hi! How can I help you with your course today?",timestamp:"10:30 AM"}},r={args:{sender:"user",children:"Can you explain React hooks to me?",avatarFallback:"VM",timestamp:"10:31 AM"}},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{sender:"assistant",timestamp:"10:30 AM",children:"Hi! How can I help you with your course today?"}),e.jsx(s,{avatarFallback:"VM",sender:"user",timestamp:"10:31 AM",children:"Can you explain React hooks to me?"}),e.jsxs(s,{sender:"assistant",timestamp:"10:31 AM",children:["Of course! React hooks are functions that let you use state and other React features in functional components. The most common ones are",e.jsx("strong",{children:" useState"})," and ",e.jsx("strong",{children:"useEffect"}),"."]}),e.jsx(s,{avatarFallback:"VM",sender:"user",timestamp:"10:32 AM",children:"Thanks, that makes sense!"})]})},o={args:{sender:"assistant",children:"React hooks were introduced in React 16.8. They allow you to use state and other React features without writing a class. Hooks are backward-compatible, meaning they don't contain any breaking changes and they don't replace your knowledge of React concepts."}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    sender: "assistant",
    children: "Hi! How can I help you with your course today?",
    timestamp: "10:30 AM"
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,h,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sender: "user",
    children: "Can you explain React hooks to me?",
    avatarFallback: "VM",
    timestamp: "10:31 AM"
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,x,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <DsChatBubble sender="assistant" timestamp="10:30 AM">
        Hi! How can I help you with your course today?
      </DsChatBubble>
      <DsChatBubble avatarFallback="VM" sender="user" timestamp="10:31 AM">
        Can you explain React hooks to me?
      </DsChatBubble>
      <DsChatBubble sender="assistant" timestamp="10:31 AM">
        Of course! React hooks are functions that let you use state and other
        React features in functional components. The most common ones are
        <strong> useState</strong> and <strong>useEffect</strong>.
      </DsChatBubble>
      <DsChatBubble avatarFallback="VM" sender="user" timestamp="10:32 AM">
        Thanks, that makes sense!
      </DsChatBubble>
    </div>
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,k,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sender: "assistant",
    children: "React hooks were introduced in React 16.8. They allow you to use state and other React features without writing a class. Hooks are backward-compatible, meaning they don't contain any breaking changes and they don't replace your knowledge of React concepts."
  }
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const O=["Assistant","User","Conversation","LongMessage"];export{t as Assistant,n as Conversation,o as LongMessage,r as User,O as __namedExportsOrder,_ as default};
