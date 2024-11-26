"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[8499],{4110:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=r(4848),t=r(8453);const a={title:"\u7a97\u53e3\u7cfb\u7edf",description:"vulkan\u7a97\u53e3\u7cfb\u7edf",date:new Date("2024-10-02T00:00:00.000Z")},i="\u7a97\u53e3\u7cfb\u7edf\uff08WSI\uff09",c={id:"guide/usage/wsi",title:"\u7a97\u53e3\u7cfb\u7edf",description:"vulkan\u7a97\u53e3\u7cfb\u7edf",source:"@site/docs/guide/usage/8-wsi.md",sourceDirName:"guide/usage",slug:"/guide/usage/wsi",permalink:"/guide/usage/wsi",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u7a97\u53e3\u7cfb\u7edf",description:"vulkan\u7a97\u53e3\u7cfb\u7edf",date:"2024-10-02T00:00:00.000Z"},sidebar:"VulkanGuide",previous:{title:"\u961f\u5217",permalink:"/guide/usage/queues"},next:{title:"pNext\u548csType\u7528\u6cd5",permalink:"/guide/usage/pNext_sType"}},l={},h=[{value:"Surface",id:"surface",level:2},{value:"\u4ea4\u6362\u94fe",id:"\u4ea4\u6362\u94fe",level:2},{value:"\u9884\u65cb\u8f6c",id:"\u9884\u65cb\u8f6c",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"\u7a97\u53e3\u7cfb\u7edfwsi",children:"\u7a97\u53e3\u7cfb\u7edf\uff08WSI\uff09"})}),"\n",(0,n.jsxs)(s.p,{children:["\u7531\u4e8e\u53ef\u4ee5\u5728\u6ca1\u6709\u663e\u793a\u5185\u5bb9\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 Vulkan API\uff0c\u56e0\u6b64 WSI \u662f\u901a\u8fc7",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#wsi",children:"Vulkan \u6269\u5c55"}),"\u7684\u5f62\u5f0f\u6765\u63d0\u4f9b\u7684\u3002\u5927\u591a\u6570\u8bbe\u5907\u5382\u5546\u652f\u6301 WSI\u3002WSI \u7684\u8bbe\u8ba1\u521d\u8877\u662f\u4e3a\u4e86\u4eceVulkan\u6838\u5fc3API \u4e2d\u62bd\u8c61\u51fa\u5404\u5e73\u53f0\u7684\u7a97\u53e3\u673a\u5236\u3002"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"wsi_setup",src:r(7945).A+"",width:"1015",height:"647"})}),"\n",(0,n.jsx)(s.h2,{id:"surface",children:"Surface"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"VkSurfaceKHR"}),"\u5bf9\u8c61\u662f\u5e73\u53f0\u4e0d\u76f8\u5173\u7684\uff0c\u8fd9\u79cd\u8bbe\u8ba1\u4f7f Vulkan API \u53ef\u4ee5\u5c06\u5176\u7528\u4e8e\u6240\u6709\u7684 WSI \u64cd\u4f5c\uff0c\u5b83\u901a\u8fc7",(0,n.jsx)(s.code,{children:"VK_KHR_surface"}),"\u6269\u5c55\u6765\u542f\u7528\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u652f\u6301 Vulkan Surface \u7684\u5404\u5e73\u53f0\u90fd\u6709\u7279\u5b9a\u7684 API \u6765\u521b\u5efa",(0,n.jsx)(s.code,{children:"VkSurfaceKHR"}),"\u3002"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Android - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateAndroidSurfaceKHR",children:"vkCreateAndroidSurfaceKHR"})]}),"\n",(0,n.jsxs)(s.li,{children:["DirectFB - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateDirectFBSurfaceEXT",children:"vkCreateDirectFBSurfaceEXT"})]}),"\n",(0,n.jsxs)(s.li,{children:["Fuchsia  - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateImagePipeSurfaceFUCHSIA",children:"vkCreateImagePipeSurfaceFUCHSIA"})]}),"\n",(0,n.jsxs)(s.li,{children:["iOS - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateIOSSurfaceMVK",children:"vkCreateIOSSurfaceMVK"})]}),"\n",(0,n.jsxs)(s.li,{children:["macOS - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateMacOSSurfaceMVK",children:"vkCreateMacOSSurfaceMVK"})]}),"\n",(0,n.jsxs)(s.li,{children:["Metal - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateMetalSurfaceEXT",children:"vkCreateMetalSurfaceEXT"})]}),"\n",(0,n.jsxs)(s.li,{children:["VI - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateViSurfaceNN",children:"vkCreateViSurfaceNN"})]}),"\n",(0,n.jsxs)(s.li,{children:["Wayland - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkWaylandSurfaceCreateInfoKHR",children:"vkWaylandSurfaceCreateInfoKHR"})]}),"\n",(0,n.jsxs)(s.li,{children:["QNX - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/vkCreateScreenSurfaceQNX.html",children:"vkCreateScreenSurfaceQNX"})]}),"\n",(0,n.jsxs)(s.li,{children:["Windows - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateWin32SurfaceKHR",children:"vkCreateWin32SurfaceKHR"})]}),"\n",(0,n.jsxs)(s.li,{children:["XCB - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateXcbSurfaceKHR",children:"vkCreateXcbSurfaceKHR"})]}),"\n",(0,n.jsxs)(s.li,{children:["Xlib - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateXlibSurfaceKHR",children:"vkCreateXlibSurfaceKHR"})]}),"\n",(0,n.jsxs)(s.li,{children:["Direct-to-Display - ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkCreateDisplayPlaneSurfaceKHR",children:"vkCreateDisplayPlaneSurfaceKHR"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"VkSurfaceKHR"}),"\u521b\u5efa\u540e\uff0c\u53ef\u4ee5\u67e5\u8be2\u5b83\u7684",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkGetPhysicalDeviceSurfaceCapabilitiesKHR",children:"\u529f\u80fd"}),"\u3001",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkGetPhysicalDeviceSurfaceFormatsKHR",children:"\u683c\u5f0f"}),"\u548c",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#vkGetPhysicalDeviceSurfacePresentModesKHR",children:"\u5448\u73b0\u6a21\u5f0f"}),"\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u4ea4\u6362\u94fe",children:"\u4ea4\u6362\u94fe"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"VkSwapchainKHR"}),"\u4f7f\u7528",(0,n.jsx)(s.code,{children:"VkImage"}),"\u6570\u7ec4\u5c06\u6e32\u67d3\u7ed3\u679c\u5448\u73b0\u5230surface\u3002\u4ea4\u6362\u94fe\u7684\u5404\u79cd",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#VkPresentModeKHR",children:"\u5448\u73b0\u6a21\u5f0f"}),"\u51b3\u5b9a\u4e86\u5982\u4f55\u5448\u73b0\u6e32\u67d3\u7ed3\u679c\u3002"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"wsi_engine",src:r(3618).A+"",width:"1080",height:"380"})}),"\n",(0,n.jsxs)(s.p,{children:["Khronos\u7684",(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/Vulkan-Samples/tree/main/samples/performance/swapchain_images",children:"\u793a\u4f8b\u6559\u7a0b"}),"\u9610\u8ff0\u4e86\u5728\u521b\u5efa\u4ea4\u6362\u94fe\u548c\u9009\u62e9\u5448\u73b0\u6a21\u5f0f\u65f6\u7684\u5404\u6ce8\u610f\u4e8b\u9879\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u9884\u65cb\u8f6c",children:"\u9884\u65cb\u8f6c"}),"\n",(0,n.jsxs)(s.p,{children:["\u79fb\u52a8\u8bbe\u5907\u662f\u53ef\u4ee5\u65cb\u8f6c\u7684\uff0c\u56e0\u6b64\u5e94\u7528\u7a0b\u5e8f\u7a97\u53e3\u7684\u65b9\u5411\u548c\u5c4f\u5e55\u65b9\u5411\u53ef\u80fd\u4e0d\u5339\u914d\u3002\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u652f\u6301\u4e24\u79cd\u6a21\u5f0f\uff1a",(0,n.jsx)(s.code,{children:"portrait"}),"(\u7ad6\u5411)\u548c",(0,n.jsx)(s.code,{children:"landscape"}),"(\u6a2a\u5411)\uff0c\u8fd9\u4e24\u79cd\u6a21\u5f0f\u7684\u5dee\u5f02\u53ef\u4ee5\u7b80\u5316\u4e3a\u5206\u8fa8\u7387\u7684\u53d8\u5316\u3002\u7136\u800c\u67d0\u4e9b\u663e\u793a\u7cfb\u7edf\u4f7f\u7528\u5c4f\u5e55\u7684\u7269\u7406\u65b9\u5411\uff0c\u8bbe\u5907\u65cb\u8f6c\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u7684\u8f93\u51fa\u4e5f\u5fc5\u987b\u65cb\u8f6c\u624d\u80fd\u663e\u793a\u6b63\u786e\u7684\u753b\u9762\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e3a\u4e86\u8ba9\u5e94\u7528\u7a0b\u5e8f\u5728\u79fb\u52a8\u5e73\u53f0\uff08\u5982 Android\uff09\u4e0a\u5145\u5206\u5229\u7528 Vulkan\uff0c\u5fc5\u987b\u5b9e\u73b0\u9884\u65cb\u8f6c\u3002Google \u6709\u4e00\u7bc7",(0,n.jsx)(s.a,{href:"https://android-developers.googleblog.com/2020/02/handling-device-orientation-efficiently.html?m=1",children:"\u535a\u5ba2\u6587\u7ae0"}),"\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4ea4\u6362\u94fe\u521b\u5efa\u65f6\u6307\u5b9a\u65b9\u5411\u6765\u5904\u7406surface\u65cb\u8f6c\uff0c\u4ee5\u53ca\u5bf9\u5e94",(0,n.jsx)(s.a,{href:"https://github.com/google/vulkan-pre-rotation-demo",children:"\u793a\u4f8b"}),"\u3002",(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/Vulkan-Samples",children:"Vulkan-Samples"}),"\u4e2d\u7684\u4e00\u4e2a",(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/Vulkan-Samples/tree/main/samples/performance/surface_rotation",children:"\u793a\u4f8b"}),"\u4e5f\u8be6\u7ec6\u8bf4\u660e\u4e86",(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/Vulkan-Samples/tree/main/samples/performance/surface_rotation",children:"\u4e3a\u4ec0\u4e48\u9884\u65cb\u8f6c"}),"\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u7740\u8272\u5668\u4e2d\u89e3\u51b3\u8be5\u95ee\u9898\u7684\u65b9\u6cd5\u3002\u5982\u679c\u4f7f\u7528 Adreno GPU \u9a71\u52a8\u7684\u8bbe\u5907\uff0cQualcomm \u5efa\u8bae\u4f7f\u7528 ",(0,n.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_QCOM_render_pass_transform.html",children:"VK_QCOM_render_pass_transform"})," \u6269\u5c55\u6765\u5b9e\u73b0\u9884\u65cb\u8f6c\u3002"]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},3618:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/wsi_engine-b38ad0c3d3c46a88ffdaa83baa38a086.png"},7945:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/wsi_setup-0529da2aeea2cbc221a67e148c10e294.png"},8453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var n=r(6540);const t={},a=n.createContext(t);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);