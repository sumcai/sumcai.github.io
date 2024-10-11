"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[5568],{4496:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>r,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var c=a(4848),n=a(8453);const s={title:"vkGetPhysicalDeviceSurfaceCapabilitiesKHR",description:"vkGetPhysicalDeviceSurfaceCapabilitiesKHR"},t="vkGetPhysicalDeviceSurfaceCapabilitiesKHR",l={id:"api/vkGetPhysicalDeviceSurfaceCapabilitiesKHR",title:"vkGetPhysicalDeviceSurfaceCapabilitiesKHR",description:"vkGetPhysicalDeviceSurfaceCapabilitiesKHR",source:"@site/docs/api/vkGetPhysicalDeviceSurfaceCapabilitiesKHR.md",sourceDirName:"api",slug:"/api/vkGetPhysicalDeviceSurfaceCapabilitiesKHR",permalink:"/api/vkGetPhysicalDeviceSurfaceCapabilitiesKHR",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"vkGetPhysicalDeviceSurfaceCapabilitiesKHR",description:"vkGetPhysicalDeviceSurfaceCapabilitiesKHR"},sidebar:"VulkanApi",previous:{title:"vkGetPhysicalDeviceQueueFamilyProperties",permalink:"/api/vkGetPhysicalDeviceQueueFamilyProperties"},next:{title:"vkGetPhysicalDeviceSurfaceFormatsKHR",permalink:"/api/vkGetPhysicalDeviceSurfaceFormatsKHR"}},r={},u=[{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8865\u5145",id:"\u8865\u5145",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"vkgetphysicaldevicesurfacecapabilitieskhr",children:"vkGetPhysicalDeviceSurfaceCapabilitiesKHR"})}),"\n",(0,c.jsx)(i.h2,{id:"\u51fd\u6570\u539f\u578b",children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-c",children:"VkResult vkGetPhysicalDeviceSurfaceCapabilitiesKHR(\n    VkPhysicalDevice                            physicalDevice,\n    VkSurfaceKHR                                surface,\n    VkSurfaceCapabilitiesKHR*                   pSurfaceCapabilities);\n"})}),"\n",(0,c.jsx)(i.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,c.jsx)(i.p,{children:"\u67e5\u8be2surface\u652f\u6301\u7684\u57fa\u672c\u80fd\u529b\u3002"}),"\n",(0,c.jsx)(i.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"physicalDevice"})," : \u521b\u5efa\u4ea4\u6362\u94fe\u7684\u7269\u7406\u8bbe\u5907\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"surface"})," : \u4e0e\u4ea4\u6362\u94fe\u5173\u8054\u7684surface\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"VkSurfaceCapabilitiesKHR"})," : ",(0,c.jsx)(i.code,{children:"VkSurfaceCapabilitiesKHR"}),"\u7ed3\u6784\u4f53\u6307\u9488\uff0c\u8fd4\u56desurface\u57fa\u672c\u80fd\u529b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(i.h2,{id:"\u8865\u5145",children:"\u8865\u5145"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"VkSurfaceCapabilitiesKHR"})," \u7ed3\u6784\u4f53\u5b9a\u4e49\uff1a"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{children:"typedef struct VkSurfaceCapabilitiesKHR {\n    uint32_t                         minImageCount;\n    uint32_t                         maxImageCount;\n    VkExtent2D                       currentExtent;\n    VkExtent2D                       minImageExtent;\n    VkExtent2D                       maxImageExtent;\n    uint32_t                         maxImageArrayLayers;\n    VkSurfaceTransformFlagsKHR       supportedTransforms;\n    VkSurfaceTransformFlagBitsKHR    currentTransform;\n    VkCompositeAlphaFlagsKHR         supportedCompositeAlpha;\n    VkImageUsageFlags                supportedUsageFlags;\n} VkSurfaceCapabilitiesKHR;\n"})}),"\n",(0,c.jsx)(i.h2,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"VK_SUCCESS"})," : \u67e5\u8be2\u6210\u529f\u3002"]}),"\n",(0,c.jsx)(i.li,{children:"\u5176\u4ed6 : \u67e5\u8be2\u5931\u8d25\u3002"}),"\n"]}),"\n",(0,c.jsx)(i.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"// \u57fa\u7840\u8868\u9762\u7279\u6027\nVkSurfaceCapabilitiesKHR capabilities; \n// \u67e5\u8be2\u57fa\u7840\u8868\u9762\u7279\u6027\nvkGetPhysicalDeviceSurfaceCapabilitiesKHR(device, surface, &capabilities);\n"})})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,i,a)=>{a.d(i,{R:()=>t,x:()=>l});var c=a(6540);const n={},s=c.createContext(n);function t(e){const i=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),c.createElement(s.Provider,{value:i},e.children)}}}]);