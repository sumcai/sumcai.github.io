"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[3150],{4203:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var n=a(4848),l=a(8453);const s={title:"Layer",description:"vulkan layer\u4ecb\u7ecd",date:new Date("2024-10-01T00:00:00.000Z")},i="Layer",t={id:"usage/layer",title:"Layer",description:"vulkan layer\u4ecb\u7ecd",source:"@site/docs/usage/2-layer.md",sourceDirName:"usage",slug:"/usage/layer",permalink:"/usage/layer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Layer",description:"vulkan layer\u4ecb\u7ecd",date:"2024-10-01T00:00:00.000Z"},sidebar:"VulkanDoc",previous:{title:"Loader",permalink:"/usage/loader"},next:{title:"\u67e5\u8be2\u5c5e\u6027\u3001\u6269\u5c55\u3001\u7279\u6027\u3001\u9650\u5236\u548c\u683c\u5f0f",permalink:"/usage/various_querys"}},d={},o=[{value:"\u4f7f\u7528Layer",id:"\u4f7f\u7528layer",level:2},{value:"Vulkan \u914d\u7f6e\u5668",id:"vulkan-\u914d\u7f6e\u5668",level:2},{value:"\u8bbe\u5907\u7ea7Layer\u5df2\u5f03\u7528",id:"\u8bbe\u5907\u7ea7layer\u5df2\u5f03\u7528",level:2},{value:"\u521b\u5efaLayer",id:"\u521b\u5efalayer",level:2},{value:"\u5404\u5e73\u53f0\u4f7f\u7528\u8bf4\u660e",id:"\u5404\u5e73\u53f0\u4f7f\u7528\u8bf4\u660e",level:2},{value:"Android",id:"android",level:3},{value:"Linux",id:"linux",level:3},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3}];function c(e){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"layer",children:"Layer"})}),"\n",(0,n.jsxs)(r.p,{children:["Layer\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u62e6\u622a\u3001\u8bc4\u4f30\u548c\u4fee\u6539\u73b0\u6709\u7684 Vulkan \u529f\u80fd \u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(r.a,{href:"https://registry.khronos.org/vulkan/specs/1.3/html/vkspec.html#vkEnumerateInstanceLayerProperties",children:"vkEnumerateInstanceLayerProperties"})," \u4ece\u5e94\u7528\u7a0b\u5e8f\u67e5\u8be2Layer\u5c5e\u6027\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u4f7f\u7528layer",children:"\u4f7f\u7528Layer"}),"\n",(0,n.jsxs)(r.p,{children:["Layer\u88ab\u6253\u5305\u6210\u5171\u4eab\u5e93\uff0c\u8fd9\u4e9b\u5e93\u7531vulkan loader\t\u52a8\u6001\u52a0\u8f7d\u5e76\u63d2\u5165\u5230\u5b83\u548c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u3002\u4f7f\u7528 layers \u7684\u4e24\u4e2a\u6761\u4ef6\u662f\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u4f4d\u7f6e\u548c\u8981\u542f\u7528\u7684 layers\u3002\u542f\u7528\u7684layer\u53ef\u4ee5\u7531\u5e94\u7528\u7a0b\u5e8f\u663e\u5f0f\u6307\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u544a\u8bc9loader\u6765\u9690\u5f0f\u542f\u7528\u3002\u5173\u4e8e\u9690\u5f0flayer\u548c\u663e\u5f0flayer\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ",(0,n.jsx)(r.a,{href:"https://github.com/KhronosGroup/Vulkan-Loader/blob/main/loader/LoaderAndLayerInterface.md#implicit-vs-explicit-layers",children:"Loader \u548c Layer Interface"}),"\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://vulkan.lunarg.com/sdk/home",children:"Vulkan SDK"})," \u5305\u542b\u4e00\u4e2a",(0,n.jsx)(r.a,{href:"https://vulkan.lunarg.com/doc/sdk/latest/windows/layer_configuration.html",children:"layer\u914d\u7f6e\u6587\u6863"}),"\uff0c\u8be5\u6587\u6863\u975e\u5e38\u5177\u4f53\u5730\u8bf4\u660e\u4e86\u5982\u4f55\u5728\u5404\u4e2a\u5e73\u53f0\u4e0a\u67e5\u627e\u548c\u914d\u7f6elayer\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"vulkan-\u914d\u7f6e\u5668",children:"Vulkan \u914d\u7f6e\u5668"}),"\n",(0,n.jsxs)(r.p,{children:["Windows\u3001Linux \u548c macOS \u4e0a\u7684\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528 Vulkan \u914d\u7f6e\u5668\uff08vkconfig\uff09\u7684\u56fe\u5f62\u754c\u9762\u542f\u7528\u663e\u5f0flayer\u548c\u7981\u7528\u9690\u5f0flayer\uff0c\u4ee5\u53ca\u66f4\u6539layer\u8bbe\u7f6e\u3002 \u5173\u4e8e\u5982\u4f55\u4f7f\u7528 Vulkan Configurator \u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Vulkan SDK \u4e2d\u7684 ",(0,n.jsx)(r.a,{href:"https://vulkan.lunarg.com/doc/sdk/latest/windows/vkconfig.html",children:"Vulkan \u914d\u7f6e\u5668\u6587\u6863"}),"\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u8bbe\u5907\u7ea7layer\u5df2\u5f03\u7528",children:"\u8bbe\u5907\u7ea7Layer\u5df2\u5f03\u7528"}),"\n",(0,n.jsxs)(r.p,{children:["\u8fc7\u53bb\u65e2\u6709\u5b9e\u4f8b\u7ea7layer\u53c8\u6709\u8bbe\u5907\u7ea7layer\uff0c\u4f46\u8bbe\u5907\u7ea7layer\u5728 Vulkan \u65e9\u671f\u5c31\u88ab",(0,n.jsx)(r.a,{href:"https://registry.khronos.org/vulkan/specs/1.3/html/vkspec.html#extendingvulkan-layers-devicelayerdeprecation",children:"\u5e9f\u5f03"}),"\u4e86\uff0c\u5e94\u5f53\u907f\u514d\u4f7f\u7528\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u521b\u5efalayer",children:"\u521b\u5efaLayer"}),"\n",(0,n.jsxs)(r.p,{children:["\u53ea\u8981\u9075\u5faa ",(0,n.jsx)(r.a,{href:"https://github.com/KhronosGroup/Vulkan-Loader/blob/main/loader/LoaderAndLayerInterface.md#loader-and-layer-interface",children:"loader \u4e0e layer \u63a5\u53e3"}),"\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u521b\u5efalayer\uff0c\u8be5\u63a5\u53e3\u5c31\u662f loader \u548c layers \u4e4b\u95f4\u76f8\u4e92\u901a\u4fe1\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5404\u5e73\u53f0\u4f7f\u7528\u8bf4\u660e",children:"\u5404\u5e73\u53f0\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,n.jsx)(r.p,{children:"\u9690\u5f0flayer\u7684\u52a0\u8f7d\u65b9\u5f0f\u56e0 loader \u548c\u5e73\u53f0\u800c\u5f02\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"android",children:"Android"}),"\n",(0,n.jsxs)(r.p,{children:["\u4ece Android P\uff08Android 9/API \u7ea7\u522b 28\uff09\u5f00\u59cb\uff0c\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u662fdebug\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(r.a,{href:"https://developer.android.com/ndk/guides/graphics/validation-layer#vl-adb",children:"ADB \u63a8\u9001"}),"\u9690\u5f0flayer\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"linux",children:"Linux"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://vulkan.lunarg.com/doc/sdk/latest/linux/layer_configuration.html",children:"Vulkan SDK"})," \u4ecb\u7ecd\u4e86\u5982\u4f55\u5728 Linux \u4e0a\u4f7f\u7528\u9690\u5f0flayer\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"macos",children:"macOS"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://vulkan.lunarg.com/doc/sdk/latest/mac/layer_configuration.html",children:"Vulkan SDK"})," \u4ecb\u7ecd\u4e86\u5982\u4f55\u5728 MacOS \u4e0a\u4f7f\u7528\u9690\u5f0flayer\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"windows",children:"Windows"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://vulkan.lunarg.com/doc/sdk/latest/windows/layer_configuration.html",children:"Vulkan SDK"})," \u4ecb\u7ecd\u4e86\u5982\u4f55\u5728 Windows \u4e0a\u4f7f\u7528\u9690\u5f0flayer\u3002"]})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>t});var n=a(6540);const l={},s=n.createContext(l);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);