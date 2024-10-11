"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[2189],{8099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>_,metadata:()=>s,toc:()=>d});var i=t(4848),r=t(8453);const _={title:"vkCreateImageView",description:"vkCreateImageView"},a="vkCreateImageView",s={id:"api/vkCreateImageView",title:"vkCreateImageView",description:"vkCreateImageView",source:"@site/docs/api/vkCreateImageView.md",sourceDirName:"api",slug:"/api/vkCreateImageView",permalink:"/api/vkCreateImageView",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"vkCreateImageView",description:"vkCreateImageView"},sidebar:"VulkanApi",previous:{title:"vkCreateImage",permalink:"/api/vkCreateImage"},next:{title:"vkCreateInstance",permalink:"/api/vkCreateInstance"}},c={},d=[{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8865\u5145",id:"\u8865\u5145",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"vkcreateimageview",children:"vkCreateImageView"})}),"\n",(0,i.jsx)(n.h2,{id:"\u51fd\u6570\u539f\u578b",children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"VkResult vkCreateImageView(\n    VkDevice                                    device,\n    const VkImageViewCreateInfo*                pCreateInfo,\n    const VkAllocationCallbacks*                pAllocator,\n    VkImageView*                                pView);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2aimageview\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"device"})," : \u7528\u4e8e\u521b\u5efaimageview\u7684\u903b\u8f91\u8bbe\u5907\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pCreateInfo"})," : ",(0,i.jsx)(n.code,{children:"VkImageViewCreateInfo"})," \u7ed3\u6784\u4f53\u6307\u9488\uff0c\u5305\u542b\u521b\u5efaimageview\u7684\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pAllocator"})," : ",(0,i.jsx)(n.code,{children:"host memory"})," \u5206\u914d\u5668\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pView"})," : \u521b\u5efa\u8fd4\u56de\u7684imageview\u53e5\u67c4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8865\u5145",children:"\u8865\u5145"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VkImageViewCreateInfo"})," \u7ed3\u6784\u4f53\u5b9a\u4e49\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"typedef struct VkImageViewCreateInfo {\n    VkStructureType            sType;\n    const void*                pNext;\n    VkImageViewCreateFlags     flags;\t\t\t\t\t//\u63cf\u8ff0imageview\u7684\u989d\u5916\u6807\u8bb0\n    VkImage                    image;\t\t\t\t\t//\u7528\u4e8e\u521b\u5efaimageview\u7684image\n    VkImageViewType            viewType;\t\t\t\t//\u6307\u5b9aimageview\u7684\u7c7b\u578b\n    VkFormat                   format;\t\t\t\t\t//\u63cf\u8ff0image\u4e2d\u7eb9\u7d20\u7684\u683c\u5f0f\u548c\u7c7b\u578b\n    VkComponentMapping         components;\t\t\t\t//\u63cf\u8ff0\u989c\u8272\u5206\u91cf\u7684\u91cd\u65b0\u6620\u5c04\uff08\u6216\u6df1\u5ea6\u6a21\u677f\u5206\u91cf\u5728\u8f6c\u6362\u4e3a\u989c\u8272\u5206\u91cf\u540e\uff09\n    VkImageSubresourceRange    subresourceRange;\t\t//mipmap\u7ea7\u522b\u4ee5\u53caimageview\u53ef\u8bbf\u95ee\u7684layers\n} VkImageViewCreateInfo;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VkImageViewCreateFlags"}),"\u679a\u4e3e\u5b9a\u4e49\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"typedef enum VkImageViewCreateFlagBits {\n  // Provided by VK_EXT_fragment_density_map\n    VK_IMAGE_VIEW_CREATE_FRAGMENT_DENSITY_MAP_DYNAMIC_BIT_EXT = 0x00000001,\n  // Provided by VK_EXT_fragment_density_map2\n    VK_IMAGE_VIEW_CREATE_FRAGMENT_DENSITY_MAP_DEFERRED_BIT_EXT = 0x00000002,\n} VkImageViewCreateFlagBits;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VkImageViewType"}),"\u679a\u4e3e\u5b9a\u4e49\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"typedef enum VkImageViewType {\n    VK_IMAGE_VIEW_TYPE_1D = 0,\n    VK_IMAGE_VIEW_TYPE_2D = 1,\n    VK_IMAGE_VIEW_TYPE_3D = 2,\n    VK_IMAGE_VIEW_TYPE_CUBE = 3,\n    VK_IMAGE_VIEW_TYPE_1D_ARRAY = 4,\n    VK_IMAGE_VIEW_TYPE_2D_ARRAY = 5,\n    VK_IMAGE_VIEW_TYPE_CUBE_ARRAY = 6,\n} VkImageViewType;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VkComponentMapping"}),"\u7ed3\u6784\u4f53\u5b9a\u4e49\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"typedef struct VkComponentMapping {\n    VkComponentSwizzle    r;\n    VkComponentSwizzle    g;\n    VkComponentSwizzle    b;\n    VkComponentSwizzle    a;\n} VkComponentMapping;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VkComponentSwizzle"}),"\u679a\u4e3e\u5b9a\u4e49\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"typedef enum VkComponentSwizzle {\n    VK_COMPONENT_SWIZZLE_IDENTITY = 0,\n    VK_COMPONENT_SWIZZLE_ZERO = 1,\n    VK_COMPONENT_SWIZZLE_ONE = 2,\n    VK_COMPONENT_SWIZZLE_R = 3,\n    VK_COMPONENT_SWIZZLE_G = 4,\n    VK_COMPONENT_SWIZZLE_B = 5,\n    VK_COMPONENT_SWIZZLE_A = 6,\n} VkComponentSwizzle;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8bbe\u7f6e\u4e3a",(0,i.jsx)(n.code,{children:"VK_COMPONENT_SWIZZLE_IDENTITY"}),"\u7b49\u540c\u4e8e\u8bbe\u7f6e\u4e0b\u9762\u7684\u6620\u5c04\u5173\u7cfb"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Component"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Identity Mapping"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"components.r"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"VK_COMPONENT_SWIZZLE_R"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"components.g"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"VK_COMPONENT_SWIZZLE_G"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"components.b"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"VK_COMPONENT_SWIZZLE_B"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"components.a"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"VK_COMPONENT_SWIZZLE_A"})})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VkImageSubresourceRange"}),"\u7ed3\u6784\u4f53\u5b9a\u4e49\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"typedef struct VkImageSubresourceRange {\n    VkImageAspectFlags    aspectMask;\t\t//\u6307\u5b9aimage\u7684\u54ea\u4e9b\u5c42\u9762\u5305\u542b\u5728imageview\u4e2d\n    uint32_t              baseMipLevel;\t\t//imageview\u53ef\u8bbf\u95ee\u7684\u7b2c\u4e00\u4e2amipmap level\n    uint32_t              levelCount;\t\t//imageview\u53ef\u8bbf\u95ee\u7684mipmap level\u6570\u91cf\n    uint32_t              baseArrayLayer;\t//imageview\u53ef\u8bbf\u95ee\u7684\u7b2c\u4e00\u4e2alayer\n    uint32_t              layerCount;\t\t//imageview\u53ef\u8bbf\u95ee\u7684layer\u6570\u91cf\n} VkImageSubresourceRange;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VkImageAspectFlagBits"}),"\u679a\u4e3e\u5b9a\u4e49\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"typedef enum VkImageAspectFlagBits {\n    VK_IMAGE_ASPECT_COLOR_BIT = 0x00000001,\n    VK_IMAGE_ASPECT_DEPTH_BIT = 0x00000002,\n    VK_IMAGE_ASPECT_STENCIL_BIT = 0x00000004,\n    VK_IMAGE_ASPECT_METADATA_BIT = 0x00000008,\n  // Provided by VK_VERSION_1_1\n    VK_IMAGE_ASPECT_PLANE_0_BIT = 0x00000010,\n  // Provided by VK_VERSION_1_1\n    VK_IMAGE_ASPECT_PLANE_1_BIT = 0x00000020,\n  // Provided by VK_VERSION_1_1\n    VK_IMAGE_ASPECT_PLANE_2_BIT = 0x00000040,\n  // Provided by VK_VERSION_1_3\n    VK_IMAGE_ASPECT_NONE = 0,\n  // Provided by VK_EXT_image_drm_format_modifier\n    VK_IMAGE_ASPECT_MEMORY_PLANE_0_BIT_EXT = 0x00000080,\n  // Provided by VK_EXT_image_drm_format_modifier\n    VK_IMAGE_ASPECT_MEMORY_PLANE_1_BIT_EXT = 0x00000100,\n  // Provided by VK_EXT_image_drm_format_modifier\n    VK_IMAGE_ASPECT_MEMORY_PLANE_2_BIT_EXT = 0x00000200,\n  // Provided by VK_EXT_image_drm_format_modifier\n    VK_IMAGE_ASPECT_MEMORY_PLANE_3_BIT_EXT = 0x00000400,\n  // Provided by VK_KHR_sampler_ycbcr_conversion\n    VK_IMAGE_ASPECT_PLANE_0_BIT_KHR = VK_IMAGE_ASPECT_PLANE_0_BIT,\n  // Provided by VK_KHR_sampler_ycbcr_conversion\n    VK_IMAGE_ASPECT_PLANE_1_BIT_KHR = VK_IMAGE_ASPECT_PLANE_1_BIT,\n  // Provided by VK_KHR_sampler_ycbcr_conversion\n    VK_IMAGE_ASPECT_PLANE_2_BIT_KHR = VK_IMAGE_ASPECT_PLANE_2_BIT,\n  // Provided by VK_KHR_maintenance4\n    VK_IMAGE_ASPECT_NONE_KHR = VK_IMAGE_ASPECT_NONE,\n} VkImageAspectFlagBits;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VK_SUCCESS"})," : \u6210\u529f\u521b\u5efaimageview\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u5176\u4ed6 : \u521b\u5efa\u5931\u8d25\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'vector<VkImageView> swapChainImageViews;\nswapChainImageViews.resize(swapChainImages.size());\n\n// \u904d\u5386\u521b\u5efaImageView---\u56fe\u50cf\u89c6\u56fe\uff0c\u8be5\u56fe\u50cf\u53ef\u4ee5\u4f5c\u4e3a\u7eb9\u7406\u4f7f\u7528\uff0c\u4f46\u662f\u4f5c\u4e3a\u6e32\u67d3\u76ee\u6807\uff0c\u8fd8\u9700\u8981\u5e27\u7f13\u51b2\u5bf9\u8c61\nfor (size_t i = 0; i < swapChainImages.size(); i++) {\n\tVkImageViewCreateInfo createInfo{};\n\tcreateInfo.sType = VK_STRUCTURE_TYPE_IMAGE_VIEW_CREATE_INFO;\n\tcreateInfo.image = swapChainImages[i];\n\tcreateInfo.viewType = VK_IMAGE_VIEW_TYPE_2D; // viewType\u548cfromat\u6210\u5458\u53d8\u91cf\u7528\u4e8e\u6307\u5b9a\u56fe\u50cf\u6570\u636e\u7684\u89e3\u91ca\u65b9\u5f0f\n\tcreateInfo.format = swapChainImageFormat;    // \u4e00\u7ef4\u7eb9\u7406\u3001\u4e8c\u7ef4\u7eb9\u7406\u3001\u4e09\u7ef4\u7eb9\u7406\u6216\u8005\u7acb\u65b9\u4f53\u8d34\u56fe\n\tcreateInfo.components.r = VK_COMPONENT_SWIZZLE_IDENTITY; // \u7528\u4e8e\u56fe\u50cf\u989c\u8272\u901a\u9053\u6620\u5c04\uff0c\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\n\tcreateInfo.components.g = VK_COMPONENT_SWIZZLE_IDENTITY;\n\tcreateInfo.components.b = VK_COMPONENT_SWIZZLE_IDENTITY;\n\tcreateInfo.components.a = VK_COMPONENT_SWIZZLE_IDENTITY;\n\tcreateInfo.subresourceRange.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT; // \u7528\u4e8e\u6307\u5b9a\u56fe\u50cf\u7684\u7528\u9014\u548c\u56fe\u50cf\u54ea\u4e00\u90e8\u5206\u53ef\u4ee5\u88ab\u8bbf\u95ee\n\tcreateInfo.subresourceRange.baseMipLevel = 0;\t\t\t\t\t\t// \u6b64\u5904\u56fe\u50cf\u7528\u4f5c\u6e32\u67d3\uff0c\u6ca1\u6709\u7ec6\u5206\u7ea7\u522b\uff0c\u53ea\u5b58\u5728\u4e00\u4e2a\u56fe\u5c42\n\tcreateInfo.subresourceRange.levelCount = 1;\t\t\t\t\t   // \u4e0d\u662fVR\u5e94\u7528\uff0c\u53ef\u4ee5\u4fdd\u6301\u9ed8\u8ba4\n\tcreateInfo.subresourceRange.baseArrayLayer = 0;\n\tcreateInfo.subresourceRange.layerCount = 1;\n\n\tif (vkCreateImageView(device, &createInfo, nullptr, &swapChainImageViews[i]) != VK_SUCCESS) {\n\t\tthrow std::runtime_error("failed to create image views!");\n\t}\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const r={},_=i.createContext(r);function a(e){const n=i.useContext(_);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(_.Provider,{value:n},e.children)}}}]);