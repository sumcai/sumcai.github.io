"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[6056],{1784:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>r});var l=i(4848),t=i(8453);const c={title:"vulkan\u80fd\u505a\u4ec0\u4e48",description:"vulkan \u7528\u9014",icon:"material/head-question-outline"},a="Vulkan\u80fd\u505a\u4ec0\u4e48\uff1f",d={id:"concept/what_can_vulkan_do",title:"vulkan\u80fd\u505a\u4ec0\u4e48",description:"vulkan \u7528\u9014",source:"@site/docs/concept/2-what_can_vulkan_do.md",sourceDirName:"concept",slug:"/concept/what_can_vulkan_do",permalink:"/concept/what_can_vulkan_do",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"vulkan\u80fd\u505a\u4ec0\u4e48",description:"vulkan \u7528\u9014",icon:"material/head-question-outline"},sidebar:"VulkanDoc",previous:{title:"\u4ec0\u4e48\u662fvulkan",permalink:"/concept/what_is_vulkan"},next:{title:"vulkan\u89c4\u8303",permalink:"/concept/vulkan_spec"}},o={},r=[{value:"\u56fe\u5f62",id:"\u56fe\u5f62",level:2},{value:"\u8ba1\u7b97",id:"\u8ba1\u7b97",level:2},{value:"\u5149\u7ebf\u8ffd\u8e2a",id:"\u5149\u7ebf\u8ffd\u8e2a",level:2},{value:"\u89c6\u9891",id:"\u89c6\u9891",level:2},{value:"\u673a\u5668\u5b66\u4e60",id:"\u673a\u5668\u5b66\u4e60",level:2},{value:"\u5173\u952e\u5b89\u5168",id:"\u5173\u952e\u5b89\u5168",level:2}];function s(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"vulkan\u80fd\u505a\u4ec0\u4e48",children:"Vulkan\u80fd\u505a\u4ec0\u4e48\uff1f"})}),"\n",(0,l.jsx)(e.p,{children:"Vulkan \u53ef\u7528\u4e8e\u5f00\u53d1\u8bb8\u591a\u5e94\u7528\u9886\u57df\u7684\u7a0b\u5e8f\uff0c\u4e0b\u9762\u5217\u4e3e\u4e86Vulkan\u529f\u80fd\u5b50\u96c6\uff0cVulkan\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u8005\u53ef\u81ea\u7531\u9009\u62e9\u4f7f\u7528\u8fd9\u4e9b\u529f\u80fd\u5b50\u96c6\u3002"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u9700\u8981\u7406\u89e3\u7684\u662f\uff0cVulkan\u53ea\u662f\u4e00\u4e2aAPI\u5de5\u5177\u7bb1\uff0c\u540c\u4e00\u4e2a\u4efb\u52a1\u4e5f\u53ef\u80fd\u4f7f\u7528\u5176\u4ed6\u529e\u6cd5\u6765\u5b9e\u73b0\u3002"})}),"\n",(0,l.jsx)(e.h2,{id:"\u56fe\u5f62",children:"\u56fe\u5f62"}),"\n",(0,l.jsx)(e.p,{children:"2D \u548c 3D \u56fe\u5f62\u662f Vulkan API \u7684\u4e3b\u8981\u8bbe\u8ba1\u76ee\u7684\u3002Vulkan \u65e8\u5728\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u521b\u5efa\u786c\u4ef6\u52a0\u901f\u7684\u56fe\u5f62\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u9664\u4e86WSI\u7cfb\u7edf\uff0c\u6240\u6709\u7684 Vulkan \u5b9e\u73b0\u90fd\u9700\u8981\u652f\u6301\u56fe\u5f62\u3002"})}),"\n",(0,l.jsx)(e.h2,{id:"\u8ba1\u7b97",children:"\u8ba1\u7b97"}),"\n",(0,l.jsx)(e.p,{children:"\u7531\u4e8e GPU \u5177\u5907\u9ad8\u5e76\u53d1\u7684\u7279\u6027\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e00\u79cd\u79f0\u4e3aGPGPU\u7684\u65b0\u578b\u7f16\u7a0b\u65b9\u5f0f\uff0c\u8c03\u7528 GPU \u6765\u6267\u884c\u5e76\u53d1\u8ba1\u7b97\u4efb\u52a1\u3002Vulkan \u652f\u6301 VkQueue\u3001VkPipelines \u7b49\u7684\u8ba1\u7b97\u53d8\u4f53\uff0c\u5141\u8bb8 Vulkan \u7528\u4e8e\u4e00\u822c\u8ba1\u7b97\u3002"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u6240\u6709\u7684 Vulkan \u5b9e\u73b0\u90fd\u9700\u8981\u652f\u6301\u8ba1\u7b97\u3002"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5149\u7ebf\u8ffd\u8e2a",children:"\u5149\u7ebf\u8ffd\u8e2a"}),"\n",(0,l.jsx)(e.p,{children:"\u5149\u7ebf\u8ffd\u8e2a\u662f\u53e6\u4e00\u79cd\u6e32\u67d3\u6280\u672f\uff0c\u5b83\u7684\u57fa\u672c\u6982\u5ff5\u662f\u8ba1\u7b97\u6a21\u62df\u7269\u7406\u5149\u7ebf\u884c\u4e3a\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["Vulkan \u5728spec 1.2.162\u4e2d\u6dfb\u52a0\u4e86\u4e00\u7ec4 KHR \u6269\u5c55\u4ee5\u5b9e\u73b0\u4e0d\u540c\u5382\u5546\u5bf9\u5149\u7ebf\u8ffd\u8e2a\u7684\u652f\u6301\u3002\u8fd9\u4e9b\u6269\u5c55\u5305\u62ec\uff1a",(0,l.jsx)(e.code,{children:"VK_KHR_ray_tracing_pipeline"}),"\u3001",(0,l.jsx)(e.code,{children:"VK_KHR_ray_query"}),"\u3001 \u548c",(0,l.jsx)(e.code,{children:"VK_KHR_acceleration_structure"}),"\u3002"]}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u8fd8\u6709\u4e00\u4e2a\u8f83\u65e7\u7684NVIDIA\u6269\u5c55\u5b9e\u73b0\u4e86 Vulkan \u5149\u7ebf\u8ffd\u8e2a\u529f\u80fd\uff0c\u8be5\u6269\u5c55\u53d1\u5e03\u6bd4\u8f83\u65e9\u3002\u5bf9\u4e8e\u65b0\u5f00\u53d1\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5efa\u8bae\u4f18\u5148\u9009\u62e9\u66f4\u65b0\u7684 KHR \u6269\u5c55\u3002"})}),"\n",(0,l.jsx)(e.h2,{id:"\u89c6\u9891",children:"\u89c6\u9891"}),"\n",(0,l.jsxs)(e.p,{children:["\u501f\u52a9 Vulkan \u89c6\u9891\u6269\u5c55\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9e\u65f6\u4f7f\u7528\u786c\u4ef6\u52a0\u901f\u7684\u89c6\u9891\u89e3\u7801\u529f\u80fd\u3002\u8be5\u529f\u80fd\u901a\u8fc7",(0,l.jsx)(e.code,{children:"VK_KHR_video_queue"}),"\u3001",(0,l.jsx)(e.code,{children:"VK_KHR_video_decode_queue"}),"\u3001",(0,l.jsx)(e.code,{children:"VK_KHR_video_decode_h264"}),"\u548c",(0,l.jsx)(e.code,{children:"VK_KHR_video_decode_h265"}),"\u6269\u5c55\u516c\u5f00\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"Vulkan Video \u79c9\u627f Vulkan \u7406\u5ff5\uff0c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u5bf9\u89c6\u9891\u5904\u7406\u8c03\u5ea6\u3001\u540c\u6b65\u548c\u5185\u5b58\u5229\u7528\u7684\u7075\u6d3b\u3001\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u3002"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u89c6\u9891\u7f16\u7801\u6269\u5c55\u7684\u5b9e\u73b0\u6b63\u5728\u8fdb\u884c\u4e2d\u3002"})}),"\n",(0,l.jsx)(e.h2,{id:"\u673a\u5668\u5b66\u4e60",children:"\u673a\u5668\u5b66\u4e60"}),"\n",(0,l.jsx)(e.p,{children:"\u76ee\u524d Vulkan \u5de5\u4f5c\u7ec4\u6b63\u5728\u7814\u7a76\u5982\u4f55\u4f7f Vulkan \u6210\u4e3a\u4e00\u6d41\u7684 API\uff0c\u4ee5\u5c55\u73b0\u73b0\u4ee3 GPU \u7684 ML \u8ba1\u7b97\u80fd\u529b\u3002\u66f4\u591a\u4fe1\u606f\u5df2\u5728Siggraph 2019\u4e0a\u516c\u5e03\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5173\u952e\u5b89\u5168",children:"\u5173\u952e\u5b89\u5168"}),"\n",(0,l.jsxs)(e.p,{children:["Vulkan SC\uff08\u201cSafety Critical\u201d\uff09\u65e8\u5728\u5c06\u73b0\u4ee3 GPU \u7684\u56fe\u5f62\u548c\u8ba1\u7b97\u80fd\u529b\u5f15\u5165\u6c7d\u8f66\u3001\u822a\u7a7a\u7535\u5b50\u3001\u5de5\u4e1a\u548c\u533b\u7597\u9886\u57df\u7684\u5b89\u5168\u5173\u952e\u7cfb\u7edf\u3002\u5b83\u4e8e2022 \u5e74 3 \u6708 1 \u65e5\u516c\u5f00\u53d1\u5e03\uff0c",(0,l.jsx)(e.a,{href:"https://www.khronos.org/vulkansc/",children:"\u89c4\u8303\u94fe\u63a5"}),"\u3002"]})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(s,{...n})}):s(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>d});var l=i(6540);const t={},c=l.createContext(t);function a(n){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);