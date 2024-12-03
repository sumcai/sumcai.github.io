"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[8467],{1372:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>t});var r=c(4848),i=c(8453);const s={title:"\u7a97\u53e3\u8868\u9762",description:"\u4ecb\u7ecdvulkan window surface"},a=void 0,l={id:"tutorial/window_surface",title:"\u7a97\u53e3\u8868\u9762",description:"\u4ecb\u7ecdvulkan window surface",source:"@site/docs/tutorial/9-window_surface.md",sourceDirName:"tutorial",slug:"/tutorial/window_surface",permalink:"/tutorial/window_surface",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u7a97\u53e3\u8868\u9762",description:"\u4ecb\u7ecdvulkan window surface"},sidebar:"VulkanTutorial",previous:{title:"\u903b\u8f91\u8bbe\u5907\u548c\u961f\u5217",permalink:"/tutorial/logical_device_queue"}},d={},t=[{value:"\u521b\u5efa\u7a97\u53e3\u8868\u9762",id:"\u521b\u5efa\u7a97\u53e3\u8868\u9762",level:2},{value:"\u67e5\u8be2\u5448\u73b0\u652f\u6301",id:"\u67e5\u8be2\u5448\u73b0\u652f\u6301",level:2},{value:"\u521b\u5efa\u5448\u73b0\u961f\u5217",id:"\u521b\u5efa\u5448\u73b0\u961f\u5217",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Vulkan\u662f\u4e00\u4e2a\u5e73\u53f0\u65e0\u5173\u7684API\uff0c\u5b83\u4e0d\u80fd\u76f4\u63a5\u548c\u7a97\u53e3\u7cfb\u7edf\u4ea4\u4e92\u3002\u4e3a\u4e86\u5c06Vulkan\u6e32\u67d3\u7684\u56fe\u50cf\u663e\u793a\u5728\u7a97\u53e3\u4e0a\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528WSI(Window System Integration)\u6269\u5c55\u3002\u5728\u672c\u7ae0\u8282\uff0c\u6211\u4eec\u9996\u5148\u4ecb\u7ecd",(0,r.jsx)(n.code,{children:"VK_KHR_surface"}),"\u6269\u5c55\uff0c\u5b83\u901a\u8fc7",(0,r.jsx)(n.code,{children:"VkSurfaceKHR"}),"\u5bf9\u8c61\u62bd\u8c61\u51fa\u53ef\u4f9bVulkan\u6e32\u67d3\u7684\u8868\u9762\u3002\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528GLFW\u6765\u83b7\u53d6",(0,r.jsx)(n.code,{children:"VkSurfaceKHR"}),"\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VK_KHR_surface"}),"\u662f\u4e00\u4e2a\u5b9e\u4f8b\u7ea7\u522b\u7684\u6269\u5c55\uff0c\u5b83\u5305\u542b\u5728",(0,r.jsx)(n.code,{children:"glfwGetRequiredInstanceExtensions"}),"\u8fd4\u56de\u7684\u6269\u5c55\u5217\u8868\u4e2d\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u518d\u8bf7\u6c42\u8fd9\u4e00\u6269\u5c55\uff0c\u8be5\u6269\u5c55\u5217\u8868\u8fd8\u5305\u542b\u4e86\u63a5\u4e0b\u6765\u51e0\u7ae0\u4f7f\u7528\u7684\u5176\u4ed6WSI\u6269\u5c55\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u7a97\u53e3\u8868\u9762\u5bf9\u7269\u7406\u8bbe\u5907\u7684\u9009\u62e9\u6709\u4e00\u5b9a\u5f71\u54cd\uff0c\u5b83\u53ea\u80fd\u5728Vulkan\u5b9e\u4f8b\u521b\u5efa\u4e4b\u540e\u624d\u80fd\u8fdb\u884c\u521b\u5efa\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u521b\u5efa\u7a97\u53e3\u8868\u9762",children:"\u521b\u5efa\u7a97\u53e3\u8868\u9762"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"VkSurfaceKHR surface;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u867d\u7136",(0,r.jsx)(n.code,{children:"VkSurfaceKHR"}),"\u5bf9\u8c61\u662f\u5e73\u53f0\u65e0\u5173\u7684\uff0c\u4f46\u521b\u5efa\u5b83\u4f9d\u8d56\u7a97\u53e3\u7cfb\u7edf\u3002\u6bd4\u5982\uff0c\u5728Windows\u7cfb\u7edf\u4e0a\uff0c\u5b83\u7684\u521b\u5efa\u9700\u8981HWND\u548cHMODULE\u53e5\u67c4\u3002\u6709\u4e00\u4e2a\u540d\u4e3a",(0,r.jsx)(n.code,{children:"VK_KHR_win32_surface"}),"\u7684Windows\u5e73\u53f0\u6269\u5c55\uff0c\u7528\u4e8e\u5904\u7406\u4e0eWindows\u7cfb\u7edf\u7a97\u53e3\u4ea4\u4e92\u7684\u64cd\u4f5c\uff0c\u8fd9\u4e00\u6269\u5c55\u4e5f\u5305\u542b\u5728",(0,r.jsx)(n.code,{children:"glfwGetRequiredInstanceExtensions"}),"\u8fd4\u56de\u7684\u6269\u5c55\u5217\u8868\u4e2d\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u8fd9\u4e00Windows\u7cfb\u7edf\u7684\u6269\u5c55\u6765\u521b\u5efa\u8868\u9762\uff0c\u4f46\u4e4b\u540e\u7684\u7ae0\u8282\uff0c\u6211\u4eec\u4e0d\u4f1a\u4f7f\u7528\u8fd9\u4e00\u7279\u5b9a\u5e73\u53f0\u7684\u6269\u5c55\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528GLFW\u5e93\u6765\u5b8c\u6210\u76f8\u5173\u64cd\u4f5c\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528GLFW\u5e93\u7684",(0,r.jsx)(n.code,{children:"glfwCreateWindowSurface"}),"\u51fd\u6570\u6765\u5b8c\u6210\u8868\u9762\u7684\u521b\u5efa\u3002\u51fa\u4e8e\u5b66\u4e60\u76ee\u7684\uff0c\u8fd9\u91cc\u6f14\u793aGLFW\u5e93\u5728\u80cc\u540e\u7a76\u7adf\u505a\u4e86\u4ec0\u4e48\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u9700\u8981\u586b\u5199",(0,r.jsx)(n.code,{children:"VkWin32SurfaceCreateInfoKHR"}),"\u7ed3\u6784\u4f53\u6765\u5b8c\u6210",(0,r.jsx)(n.code,{children:"VkSurfaceKHR"}),"\u5bf9\u8c61\u7684\u521b\u5efa\u3002\u8fd9\u4e00\u7ed3\u6784\u4f53\u5305\u542b\u4e86\u4e24\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6210\u5458\uff1a",(0,r.jsx)(n.code,{children:"hwnd"}),"\u548c",(0,r.jsx)(n.code,{children:"hinstance"}),"\uff0c\u5206\u522b\u5bf9\u5e94\u7a97\u53e3\u53e5\u67c4\u548c\u8fdb\u7a0b\u5b9e\u4f8b\u53e5\u67c4\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"VkWin32SurfaceCreateInfoKHR createInfo = {};\ncreateInfo.sType = VK_STRUCTURE_TYPE_WIN32_SURFACE_CREATE_INFO_KHR;\ncreateInfo.hwnd = glfwGetWin32Window(window);\ncreateInfo.hinstance = GetModuleHandle(nullptr);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"glfwGetWin32Window"}),"\u4eceGLFW\u7a97\u53e3\u5bf9\u8c61\u83b7\u53d6\u7a97\u53e3\u53e5\u67c4",(0,r.jsx)(n.code,{children:"hwnd"}),"\uff0c",(0,r.jsx)(n.code,{children:"GetModuleHandle"}),"\u83b7\u53d6\u5f53\u524d\u8fdb\u7a0b\u7684\u5b9e\u4f8b\u53e5\u67c4",(0,r.jsx)(n.code,{children:"hinstance"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"vkCreateWin32SurfaceKHR"}),"\u51fd\u6570\u9700\u8981\u6211\u4eec\u81ea\u5df1\u52a0\u8f7d\uff0c\u52a0\u8f7d\u540e\u4f7f\u7528Vulkan\u5b9e\u4f8b\u3001\u8981\u521b\u5efa\u7684\u8868\u9762\u4fe1\u606f\u3001\u81ea\u5b9a\u4e49\u5185\u5b58\u5206\u914d\u5668\u548c\u5b58\u50a8\u8868\u9762\u5bf9\u8c61\u53e5\u67c4\u7684\u6307\u9488\u4f5c\u4e3a\u8c03\u7528\u53c2\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'auto CreateWin32SurfaceKHR = (PFN_vkCreateWin32SurfaceKHR) vkGetInstanceProcAddr(instance, "vkCreateWin32SurfaceKHR");\n\nif (!CreateWin32SurfaceKHR || CreateWin32SurfaceKHR(instance, &createInfo, nullptr, &surface) != VK_SUCCESS) {\n    throw std::runtime_error("failed to create window surface!");\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u5b83\u5e73\u53f0\u7684\u5904\u7406\u65b9\u5f0f\u4e0e\u4e4b\u7c7b\u4f3c\uff0c\u6bd4\u5982Linux\u5e73\u53f0\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.code,{children:"vkCreateXcbSurfaceKHR"}),"\u51fd\u6570\u521b\u5efa\u7a97\u53e3\u8868\u9762\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["GLFW\u5e93\u7684",(0,r.jsx)(n.code,{children:"glfwCreateWindowSurface"}),"\u51fd\u6570\u5728\u4e0d\u540c\u5e73\u53f0\u7684\u5b9e\u73b0\u662f\u4e0d\u540c\u7684\uff0c\u53ef\u4ee5\u8de8\u5e73\u53f0\u4f7f\u7528\u3002\u73b0\u5728\u5c06\u5b83\u96c6\u6210\u5230\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u6dfb\u52a0\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"createSurface"}),"\u51fd\u6570\uff0c\u7136\u540e\u5728",(0,r.jsx)(n.code,{children:"initVulkan"}),"\u51fd\u6570\u4e2d\u8c03\u7528\u5b83\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"void initVulkan() {\n    createInstance();\n    setupDebugCallback();\n    createSurface();\n    pickPhysicalDevice();\n    createLogicalDevice();\n}\n\nvoid createSurface() {\n\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"glfwCreateWindowSurface"}),"\u51fd\u6570\u7684\u53c2\u6570\u975e\u5e38\u76f4\u767d\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'void createSurface() {\n    if (glfwCreateWindowSurface(instance, window, nullptr, &surface) != VK_SUCCESS) {\n        throw std::runtime_error("failed to create window surface!");\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u53c2\u6570\u4f9d\u6b21\u662fVkInstance\u5bf9\u8c61\u3001GLFW\u7a97\u53e3\u6307\u9488\u3001\u81ea\u5b9a\u4e49\u5185\u5b58\u5206\u914d\u5668\u3001\u5b58\u50a8VkSurfaceKHR\u5bf9\u8c61\u53e5\u67c4\u7684\u6307\u9488\u3002\u521b\u5efa\u7684\u8868\u9762\u5728\u5e94\u7528\u7a0b\u5e8f\u9000\u51fa\u524d\u9700\u8981\u9500\u6bc1\uff0cGLFW\u5e76\u6ca1\u6709\u63d0\u4f9b\u9500\u6bc1\u8868\u9762\u7684\u51fd\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u8c03\u7528",(0,r.jsx)(n.code,{children:"vkDestroySurfaceKHR"}),"\u5b8c\u6210\u8fd9\u4e00\u5de5\u4f5c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"void cleanup() {\n        ...\n    vkDestroySurfaceKHR(instance, surface, nullptr);\n    vkDestroyInstance(instance, nullptr);\n        ...\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\uff0c\u9700\u8981\u5728Vulkan\u5b9e\u4f8b\u88ab\u9500\u6bc1\u524d\u5b8c\u6210\u8868\u9762\u5bf9\u8c61\u7684\u9500\u6bc1\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u5448\u73b0\u652f\u6301",children:"\u67e5\u8be2\u5448\u73b0\u652f\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c3d\u7ba1Vulkan\u5b9e\u73b0\u53ef\u80fd\u5bf9\u7279\u5b9a\u7684\u7a97\u53e3\u7cfb\u7edf\u8fdb\u884c\u4e86\u652f\u6301\uff0c\u4f46\u5e76\u4e0d\u610f\u5473\u7740\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u8bbe\u5907\u90fd\u652f\u6301\u5b83\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u9700\u8981\u6269\u5c55",(0,r.jsx)(n.code,{children:"isDeviceSuitable"}),"\u51fd\u6570\u6765\u786e\u4fdd\u8bbe\u5907\u53ef\u4ee5\u5728\u521b\u5efa\u7684\u8868\u9762\u4e0a\u663e\u793a\u56fe\u50cf\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5b9e\u9645\u4e0a\uff0c\u652f\u6301\u7ed8\u5236\u6307\u4ee4\u7684\u961f\u5217\u65cf\u548c\u652f\u6301\u5448\u73b0\u7684\u961f\u5217\u65cf\u5e76\u4e0d\u4e00\u5b9a\u662f\u540c\u4e00\u4e2a\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4fee\u6539",(0,r.jsx)(n.code,{children:"QueueFamilyIndices"}),"\u7ed3\u6784\u4f53\uff0c\u6dfb\u52a0\u6210\u5458\u53d8\u91cf\u5b58\u50a8\u5448\u73b0\u961f\u5217\u65cf\u7684\u7d22\u5f15\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"struct QueueFamilyIndices {\n    int graphicsFamily = -1;\n    int presentFamily = -1;\n\n    bool isComplete() {\n        return graphicsFamily >= 0 && presentFamily >= 0;\n    }\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u4fee\u6539",(0,r.jsx)(n.code,{children:"findQueueFamilies"}),"\u51fd\u6570\uff0c\u67e5\u627e\u5177\u6709\u5448\u73b0\u80fd\u529b\u7684\u961f\u5217\u65cf\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u68c0\u67e5\u961f\u5217\u65cf\u662f\u5426\u5177\u6709",(0,r.jsx)(n.code,{children:"VK_QUEUE_GRAPHICS_BIT"}),"\u7684\u540e\u9762\uff0c\u8c03\u7528",(0,r.jsx)(n.code,{children:"vkGetPhysicalDeviceSurfaceSupportKHR"}),"\u68c0\u67e5\u8bbe\u5907\u662f\u5426\u5177\u6709\u5448\u73b0\u80fd\u529b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"VkBool32 presentSupport = false;\nvkGetPhysicalDeviceSurfaceSupportKHR(device, i, surface, &presentSupport);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\uff0c\u6839\u636e\u961f\u5217\u65cf\u4e2d\u7684\u961f\u5217\u6570\u91cf\u548c\u662f\u5426\u652f\u6301\u5448\u73b0\uff0c\u786e\u5b9a\u5448\u73b0\u961f\u5217\u65cf\u7684\u7d22\u5f15\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"if (queueFamily.queueCount > 0 && presentSupport) {\n    indices.presentFamily = i;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8bfb\u8005\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c\u6700\u540e\u9009\u62e9\u7684\u7ed8\u5236\u961f\u5217\u65cf\u548c\u5448\u73b0\u961f\u5217\u65cf\u5f88\u6709\u53ef\u80fd\u662f\u540c\u4e00\u4e2a\u3002\u4f46\u4e3a\u4e86\u7edf\u4e00\u64cd\u4f5c\uff0c\u5373\u4f7f\u4e24\u8005\u662f\u540c\u4e00\u4e2a\uff0c\u6211\u4eec\u4e5f\u5c06\u5b83\u4eec\u5206\u5f00\u5bf9\u5f85\u3002\u5b9e\u9645\u4e0a\uff0c\u8bfb\u8005\u53ef\u4ee5\u9009\u62e9\u7ed8\u5236\u548c\u5448\u73b0\u961f\u5217\u65cf\u4e3a\u540c\u4e00\u4e2a\u7684\u8bbe\u5907\u6765\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u521b\u5efa\u5448\u73b0\u961f\u5217",children:"\u521b\u5efa\u5448\u73b0\u961f\u5217"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u53ef\u4ee5\u4fee\u6539\u903b\u8f91\u8bbe\u5907\u7684\u521b\u5efa\u8fc7\u7a0b\uff0c\u521b\u5efa\u5448\u73b0\u961f\u5217\uff0c\u5e76\u5c06\u961f\u5217\u53e5\u67c4\u4fdd\u5b58\u5728\u7c7b\u6210\u5458\u53d8\u91cf\u4e2d\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"VkQueue presentQueue;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u9700\u8981\u591a\u4e2a",(0,r.jsx)(n.code,{children:"VkDeviceQueueCreateInfo"}),"\u7ed3\u6784\u4f53\u6765\u521b\u5efa\u961f\u5217\u65cf\uff0c\u4e00\u4e2a\u4f18\u96c5\u7684\u5904\u7406\u65b9\u5f0f\u662f\u4f7f\u7528STL\u7684\u96c6\u5408\u521b\u5efa\u6bcf\u4e00\u4e2a\u4e0d\u540c\u7684\u961f\u5217\u65cf\uff0c\u8fd9\u6837\u5bf9\u4e8e\u540c\u4e00\u4e2a\u961f\u5217\u65cf\uff0c\u6211\u4eec\u53ea\u4f1a\u4f20\u9012\u5b83\u7684\u7d22\u5f15\u4e00\u6b21\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <set>\n\n        ...\n\n    QueueFamilyIndices indices = findQueueFamilies(physicalDevice);\n\n    std::vector<VkDeviceQueueCreateInfo> queueCreateInfos;\n    std::set<int> uniqueQueueFamilies = {indices.graphicsFamily, indices.presentFamily};\n\n    float queuePriority = 1.0f;\n    for (int queueFamily : uniqueQueueFamilies) {\n        VkDeviceQueueCreateInfo queueCreateInfo = {};\n        queueCreateInfo.sType = VK_STRUCTURE_TYPE_DEVICE_QUEUE_CREATE_INFO;\n        queueCreateInfo.queueFamilyIndex = queueFamily;\n        queueCreateInfo.queueCount = 1;\n        queueCreateInfo.pQueuePriorities = &queuePriority;\n        queueCreateInfos.push_back(queueCreateInfo);\n    }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539",(0,r.jsx)(n.code,{children:"VkDeviceCreateInfo"}),"\u7ed3\u6784\u4f53\u7684",(0,r.jsx)(n.code,{children:"pQueueCreateInfos"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"createInfo.queueCreateInfoCount = static_cast<uint32_t>(queueCreateInfos.size());\ncreateInfo.pQueueCreateInfos = queueCreateInfos.data();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u8c03\u7528",(0,r.jsx)(n.code,{children:"vkGetDeviceQueue"}),"\u51fd\u6570\u83b7\u53d6\u961f\u5217\u53e5\u67c4\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"vkGetDeviceQueue(device, indices.presentFamily, 0, &presentQueue);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u961f\u5217\u65cf\u76f8\u540c\u65f6\uff0c\u6211\u4eec\u83b7\u53d6\u7684\u961f\u5217\u53e5\u67c4\u4e5f\u662f\u76f8\u540c\u7684\u3002\u5728\u4e0b\u4e00\u7ae0\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4ea4\u6362\u94fe\uff0c\u4ee5\u53ca\u5982\u4f55\u5c06\u56fe\u50cf\u663e\u793a\u5230\u7a97\u53e3\u8868\u9762\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u7ae0\u8282\u4ee3\u7801\uff1a",(0,r.jsx)(n.a,{href:"https://vulkan-tutorial.com/code/05_window_surface.cpp",children:"C++\u4ee3\u7801"})]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>a,x:()=>l});var r=c(6540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);