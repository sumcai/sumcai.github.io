"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[6319],{5100:(e,i,c)=>{c.r(i),c.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>t,toc:()=>u});var r=c(4848),s=c(8453);const n={title:"vkGetPhysicalDeviceQueueFamilyProperties",description:"vkGetPhysicalDeviceQueueFamilyProperties"},l="vkGetPhysicalDeviceQueueFamilyProperties",t={id:"api/vkGetPhysicalDeviceQueueFamilyProperties",title:"vkGetPhysicalDeviceQueueFamilyProperties",description:"vkGetPhysicalDeviceQueueFamilyProperties",source:"@site/docs/api/vkGetPhysicalDeviceQueueFamilyProperties.md",sourceDirName:"api",slug:"/api/vkGetPhysicalDeviceQueueFamilyProperties",permalink:"/api/vkGetPhysicalDeviceQueueFamilyProperties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"vkGetPhysicalDeviceQueueFamilyProperties",description:"vkGetPhysicalDeviceQueueFamilyProperties"},sidebar:"VulkanApi",previous:{title:"vkGetPhysicalDeviceProperties",permalink:"/api/vkGetPhysicalDeviceProperties"},next:{title:"vkGetPhysicalDeviceSurfaceCapabilitiesKHR",permalink:"/api/vkGetPhysicalDeviceSurfaceCapabilitiesKHR"}},a={},u=[{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8865\u5145",id:"\u8865\u5145",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}];function o(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"vkgetphysicaldevicequeuefamilyproperties",children:"vkGetPhysicalDeviceQueueFamilyProperties"})}),"\n",(0,r.jsx)(i.h2,{id:"\u51fd\u6570\u539f\u578b",children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"void vkGetPhysicalDeviceQueueFamilyProperties(\n    VkPhysicalDevice                            physicalDevice,\n    uint32_t*                                   pQueueFamilyPropertyCount,\n    VkQueueFamilyProperties*                    pQueueFamilyProperties);\n"})}),"\n",(0,r.jsx)(i.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsx)(i.p,{children:"\u67e5\u8be2\u7269\u7406\u8bbe\u5907\u7684\u961f\u5217\u5c5e\u6027\u3002"}),"\n",(0,r.jsx)(i.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"physicalDevice"})," : \u67e5\u8be2\u7684\u7269\u7406\u8bbe\u5907\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"pQueueFamilyPropertyCount"})," : \u7269\u7406\u8bbe\u5907\u7684\u961f\u5217\u65cf\u6570\u91cf\u7684\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"pQueueFamilyProperties"})," : NULL\u6216\u8005 ",(0,r.jsx)(i.code,{children:"VkQueueFamilyProperties"})," \u7ed3\u6784\u4f53\u6570\u7ec4\u6307\u9488\u3002"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\u5f53 ",(0,r.jsx)(i.code,{children:"pQueueFamilyProperties"})," \u4e3aNULL\u65f6\uff0c",(0,r.jsx)(i.code,{children:"pQueueFamilyPropertyCount"})," \u8fd4\u56de\u53ef\u7528\u961f\u5217\u65cf\u6570\u91cf\uff1b"]}),"\n",(0,r.jsxs)(i.li,{children:["\u5f53 ",(0,r.jsx)(i.code,{children:"pQueueFamilyProperties"})," \u4e0d\u4e3aNULL\u65f6\uff0c\u5199\u5165 ",(0,r.jsx)(i.code,{children:"pQueueFamilyPropertyCount"})," \u4e2a\u961f\u5217\u65cf\u5c5e\u6027\u4fe1\u606f\u5230 ",(0,r.jsx)(i.code,{children:"pPhysicalDevices"}),"\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"\u8865\u5145",children:"\u8865\u5145"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"VkPhysicalDeviceProperties"})," \u7ed3\u6784\u4f53\u5b9a\u4e49\uff1a"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"typedef struct VkPhysicalDeviceProperties {\n    uint32_t                            apiVersion;\n    uint32_t                            driverVersion;\n    uint32_t                            vendorID;\n    uint32_t                            deviceID;\n    VkPhysicalDeviceType                deviceType;\n    char                                deviceName[VK_MAX_PHYSICAL_DEVICE_NAME_SIZE];\n    uint8_t                             pipelineCacheUUID[VK_UUID_SIZE];\n    VkPhysicalDeviceLimits              limits;\n    VkPhysicalDeviceSparseProperties    sparseProperties;\n} VkPhysicalDeviceProperties;\n"})}),"\n",(0,r.jsx)(i.h2,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,r.jsx)(i.p,{children:"\u65e0"}),"\n",(0,r.jsx)(i.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"// get queue family properties from device 0 \nuint32_t queue_family_count = 0;\nVkPhysicalDevice physicalDevice = GetPhysicalDevices(0);\nvkGetPhysicalDeviceQueueFamilyProperties(physicalDevice, &queue_family_count, NULL);\n\nstd::vector<VkQueueFamilyProperties> queue_props;\nqueue_props.resize(queue_family_count);\nvkGetPhysicalDeviceQueueFamilyProperties(physicalDevice, &queue_family_count, queue_props.data());\n"})})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,i,c)=>{c.d(i,{R:()=>l,x:()=>t});var r=c(6540);const s={},n=r.createContext(s);function l(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);