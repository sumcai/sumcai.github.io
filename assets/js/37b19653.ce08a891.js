"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[2347],{2788:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(4848),s=r(8453);const i={title:"vkEnumerateInstanceLayerProperties",description:"vkEnumerateInstanceLayerProperties"},a="vkEnumerateInstanceLayerProperties",c={id:"api/vkEnumerateInstanceLayerProperties",title:"vkEnumerateInstanceLayerProperties",description:"vkEnumerateInstanceLayerProperties",source:"@site/docs/api/vkEnumerateInstanceLayerProperties.md",sourceDirName:"api",slug:"/api/vkEnumerateInstanceLayerProperties",permalink:"/api/vkEnumerateInstanceLayerProperties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"vkEnumerateInstanceLayerProperties",description:"vkEnumerateInstanceLayerProperties"},sidebar:"VulkanApi",previous:{title:"vkEnumerateInstanceExtensionProperties",permalink:"/api/vkEnumerateInstanceExtensionProperties"},next:{title:"vkEnumeratePhysicalDevices",permalink:"/api/vkEnumeratePhysicalDevices"}},o={},l=[{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"vkenumerateinstancelayerproperties",children:"vkEnumerateInstanceLayerProperties"})}),"\n",(0,t.jsx)(n.h2,{id:"\u51fd\u6570\u539f\u578b",children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"VkResult vkEnumerateInstanceLayerProperties(\n    uint32_t*                                   pPropertyCount,\n    VkLayerProperties*                          pProperties);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u8be2\u53ef\u7528\u7684instance\u7ea7layer\u5c5e\u6027\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pPropertyCount"})," : \u53ef\u7528\u5b9e\u4f8blayer\u6570\u91cf\u7684\u6574\u6570\u7684\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pProperties"})," : NULL\u6216\u8005 ",(0,t.jsx)(n.code,{children:"VkLayerProperties"})," \u7ed3\u6784\u4f53\u6570\u7ec4\u6307\u9488\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5f53 ",(0,t.jsx)(n.code,{children:"pProperties"})," \u4e3aNULL\u65f6\uff0c",(0,t.jsx)(n.code,{children:"pPropertyCount"})," \u8fd4\u56de\u53ef\u7528\u7684layer\u6570\u91cf\uff1b"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5f53 ",(0,t.jsx)(n.code,{children:"pProperties"})," \u4e0d\u4e3aNULL\u65f6\uff0c\u5199\u5165 ",(0,t.jsx)(n.code,{children:"pPropertyCount"})," \u4e2alayer\u4fe1\u606f\u5230 ",(0,t.jsx)(n.code,{children:"pProperties"}),"\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"VK_SUCCESS"})," : \u67e5\u8be2\u6210\u529f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"VK_INCOMPLETE"})," : ",(0,t.jsx)(n.code,{children:"pPropertyCount"})," \u5c0f\u4e8e\u9a71\u52a8\u6709\u6548\u7684layer\u6570\u91cf\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5176\u4ed6 : \u67e5\u8be2\u5931\u8d25\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"uint32_t instance_layer_count;\nVkLayerProperties *vk_props = NULL;\nVkResult res;\n\ndo {\n\tres = vkEnumerateInstanceLayerProperties(&instance_layer_count, NULL);\n\tif (res) return res;\n\n\tif (instance_layer_count == 0) {\n\t\treturn VK_SUCCESS;\n\t}\n\n\tvk_props = (VkLayerProperties *)realloc(vk_props, instance_layer_count * sizeof(VkLayerProperties));\n\n\tres = vkEnumerateInstanceLayerProperties(&instance_layer_count, vk_props);\n} while (res == VK_INCOMPLETE);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);