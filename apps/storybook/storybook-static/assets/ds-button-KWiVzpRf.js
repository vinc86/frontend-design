import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./button-DtudzLjv.js";import{c as r}from"./createLucideIcon-CctB0W3q.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],l=r("loader-circle",c);function p({isLoading:e=!1,leftIcon:s,rightIcon:i,children:o,asChild:d,...a}){return d?t.jsx(n,{asChild:!0,...a,children:o}):t.jsxs(n,{disabled:e,...a,children:[e?t.jsx(l,{className:"animate-spin"}):s,o,!e&&i]})}p.__docgenInfo={description:`EPICODE branded button with loading state and icon support.
Wraps shadcn Button with additional features.`,methods:[],displayName:"DsButton",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:"Shows button loading state",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon added on the left of the button"},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon added on the right of the button"}},composes:["ComponentProps"]};export{p as D};
