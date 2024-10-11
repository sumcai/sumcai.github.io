"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[8289],{1206:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>v,frontMatter:()=>t,metadata:()=>d,toc:()=>s});var u=i(4848),c=i(8453);const t={title:"vkGetDeviceQueue",description:"vkGetDeviceQueue"},r="vkGetDeviceQueue",d={id:"api/vkGetDeviceQueue",title:"vkGetDeviceQueue",description:"vkGetDeviceQueue",source:"@site/docs/api/vkGetDeviceQueue.md",sourceDirName:"api",slug:"/api/vkGetDeviceQueue",permalink:"/api/vkGetDeviceQueue",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"vkGetDeviceQueue",description:"vkGetDeviceQueue"},sidebar:"VulkanApi",previous:{title:"vkEnumeratePhysicalDevices",permalink:"/api/vkEnumeratePhysicalDevices"},next:{title:"vkGetImageMemoryRequirements",permalink:"/api/vkGetImageMemoryRequirements"}},l={},s=[{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.header,{children:(0,u.jsx)(n.h1,{id:"vkgetdevicequeue",children:"vkGetDeviceQueue"})}),"\n",(0,u.jsx)(n.h2,{id:"\u51fd\u6570\u539f\u578b",children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:"language-c",children:"void vkGetDeviceQueue(\n    VkDevice                                    device,\n    uint32_t                                    queueFamilyIndex,\n    uint32_t                                    queueIndex,\n    VkQueue*                                    pQueue);\n"})}),"\n",(0,u.jsx)(n.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,u.jsx)(n.p,{children:"\u4ece\u903b\u8f91\u8bbe\u5907\u83b7\u53d6\u961f\u5217\u3002"}),"\n",(0,u.jsx)(n.admonition,{type:"tip",children:(0,u.jsxs)(n.p,{children:[(0,u.jsx)(n.code,{children:"vkGetDeviceQueue"})," \u53ea\u80fd\u7528\u4e8e\u83b7\u53d6\u4f7f\u7528 ",(0,u.jsx)(n.code,{children:"VkDeviceQueueCreateInfo.flags = 0"})," \u53c2\u6570\u521b\u5efa\u7684\u961f\u5217\u3002\u83b7\u53d6\u4f7f\u7528\u975e\u96f6\u6807\u5fd7\u521b\u5efa\u7684\u961f\u5217\u9700\u4f7f\u7528 ",(0,u.jsx)(n.a,{href:"/VulkanApi/vkGetDeviceQueue2",children:"vkGetDeviceQueue2"})]})}),"\n",(0,u.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,u.jsxs)(n.ul,{children:["\n",(0,u.jsxs)(n.li,{children:[(0,u.jsx)(n.code,{children:"device"})," : \u5305\u542b\u961f\u5217\u7684\u903b\u8f91\u8bbe\u5907\u3002"]}),"\n",(0,u.jsxs)(n.li,{children:[(0,u.jsx)(n.code,{children:"queueFamilyIndex"})," : \u961f\u5217\u6240\u5c5e\u961f\u5217\u7c07\u7684\u7d22\u5f15\u3002"]}),"\n",(0,u.jsxs)(n.li,{children:[(0,u.jsx)(n.code,{children:"queueIndex"})," : \u8981\u83b7\u53d6\u7684\u961f\u5217\u5728\u8be5\u961f\u5217\u7c07\u4e2d\u7684\u7d22\u5f15\u3002"]}),"\n",(0,u.jsxs)(n.li,{children:[(0,u.jsx)(n.code,{children:"pQueue"})," : \u83b7\u53d6\u7684 ",(0,u.jsx)(n.code,{children:"VkQueue"})," \u961f\u5217\u5bf9\u8c61\u7684\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,u.jsx)(n.h2,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,u.jsx)(n.p,{children:"\u65e0"}),"\n",(0,u.jsx)(n.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:"language-cpp",children:"VkQueue GetDeviceQueue(uint32_t graphicsQueueIndex)\n{\n    VkQueue queue = VK_NULL_HANDLE;\n    VkDevice device = CreateDevice();\n    vkGetDeviceQueue(device, graphicsQueueIndex, 0, &queue);\n    return queue;\n}\n"})})]})}function v(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var u=i(6540);const c={},t=u.createContext(c);function r(e){const n=u.useContext(t);return u.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),u.createElement(t.Provider,{value:n},e.children)}}}]);