"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[4193],{4187:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>u});var r=i(4848),l=i(8453);const t={title:"\u6982\u8ff0",description:"vulkan\u6559\u7a0b\u603b\u4f53\u4ecb\u7ecd"},s=void 0,o={id:"tutorial/overview",title:"\u6982\u8ff0",description:"vulkan\u6559\u7a0b\u603b\u4f53\u4ecb\u7ecd",source:"@site/docs/tutorial/1-overview.md",sourceDirName:"tutorial",slug:"/tutorial/overview",permalink:"/tutorial/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6982\u8ff0",description:"vulkan\u6559\u7a0b\u603b\u4f53\u4ecb\u7ecd"},sidebar:"VulkanTutorial"},a={},u=[{value:"\u5173\u4e8e\u672c\u6559\u7a0b",id:"\u5173\u4e8e\u672c\u6559\u7a0b",level:2},{value:"\u6559\u7a0b\u7ed3\u6784",id:"\u6559\u7a0b\u7ed3\u6784",level:2}];function c(n){const e={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["\u672c\u6559\u7a0b\u7ffb\u8bd1\u81ea",(0,r.jsx)(e.a,{href:"https://docs.vulkan.org/tutorial/latest/00_Introduction.html",children:"Khronos Vulkan Tutorial"}),"\uff0c\u66f4\u51c6\u786e\u7684\u5185\u5bb9\u8bf7\u9605\u8bfb\u539f\u6587\u3002"]})}),"\n",(0,r.jsx)(e.h2,{id:"\u5173\u4e8e\u672c\u6559\u7a0b",children:"\u5173\u4e8e\u672c\u6559\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u6559\u7a0b\u4e3b\u8981\u4ecb\u7ecd\u4e86Vulkan\u56fe\u5f62\u548c\u8ba1\u7b97 API\u7684\u57fa\u7840\u77e5\u8bc6\u3002Vulkan\u662fKhronos\u7ec4\u7ec7(\u8be5\u7ec4\u7ec7\u4ee5OpenGL\u95fb\u540d)\u53d1\u5e03\u7684\u65b0\u4e00\u4ee3\u56fe\u5f62API\uff0c\u5b83\u63d0\u4f9b\u4e86\u5bf9\u73b0\u4ee3\u663e\u5361\u66f4\u597d\u7684\u62bd\u8c61\uff0c\u76f8\u6bd4\u4e8eOpenGL\u548cDirect3D\uff0cVulkan\u53ef\u4ee5\u62e5\u6709\u66f4\u597d\u7684\u6027\u80fd\uff0c\u66f4\u8f7b\u4fbf\u7684\u9a71\u52a8\u7a0b\u5e8f\u884c\u4e3a\u3002Vulkan\u5728\u8bbe\u8ba1\u7406\u5ff5\u4e0a\u7c7b\u4f3c\u4e8eDirect3D 12\u548cMetal\uff0c\u4f46\u4e0e\u540e\u4e24\u8005\u76f8\u6bd4\uff0cVulkan\u662f\u8de8\u5e73\u53f0\u7684\uff0c\u53ef\u4ee5\u5728Windows\uff0cLinux\u548cAndroid\u5e73\u53f0\u4e0a\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7136\u800c\uff0cVulkan\u7684\u8fd9\u4e9b\u597d\u5904\u662f\u6709\u4ee3\u4ef7\u7684\uff0cVulkan API\u66f4\u52a0\u5197\u957f\uff0c\u56fe\u5f62 API \u76f8\u5173\u7684\u6bcf\u4e2a\u7ec6\u8282\u9700\u8981\u5e94\u7528\u7a0b\u5e8f\u7cbe\u51c6\u8bbe\u7f6e\u3002\u9700\u8981\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u8005\u505a\u66f4\u591a\u7684\u5de5\u4f5c\u4ee5\u786e\u4fdd\u6b63\u786e\u7684\u884c\u4e3a\uff0c\u5305\u62ec\u521b\u5efa\u521d\u59cb\u5316\u4f7f\u7528\u7684\u5e27\u7f13\u51b2\u533a\uff0c\u4ee5\u53ca\u5bf9\u7f13\u51b2\u533a\u548c\u7eb9\u7406\u5bf9\u50cf\u7684\u5185\u5b58\u7ba1\u7406\u3002"}),"\n",(0,r.jsx)(e.p,{children:"Vulkan\u5e76\u975e\u9002\u5408\u6240\u6709\u4eba\uff0c\u5b83\u662f\u4e3a\u8ffd\u6c42\u9ad8\u6027\u80fd\u8ba1\u7b97\u673a\u56fe\u5f62\u6027\u80fd\u7684\u7a0b\u5e8f\u5458\u8bbe\u8ba1\u7684\u3002\u5982\u679c\u4f60\u5bf9\u6e38\u620f\u5f00\u53d1\u66f4\u611f\u5174\u8da3\uff0c\u6216\u8bb8OpenGL\u548cDirect3D\u66f4\u9002\u5408\uff0c\u5b83\u4eec\u5728\u77ed\u671f\u5185\u4ecd\u7136\u4f1a\u662f\u4e3b\u6d41\u3002\u53e6\u5916\u4e5f\u53ef\u4ee5\u4f7f\u7528Unreal Engine\u6216Unity\u8fd9\u4e9b\u5f15\u64ce\uff0c\u5b83\u4eec\u7684\u5e95\u5c42\u5df2\u7ecf\u5c01\u88c5\u597d\u4e86Vulkan\uff0c\u4f60\u53ef\u4ee5\u5b8c\u5168\u65e0\u611f\u77e5\u5730\u4f7f\u7528\u5f15\u64ce\u63a5\u53e3\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u5b66\u4e60\u672c\u6559\u7a0b\u7684\u4e00\u4e9b\u524d\u63d0\u6761\u4ef6\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u652f\u6301Vulkan\u7684\u663e\u5361\u4ee5\u53ca\u9a71\u52a8\u7a0b\u5e8f(NVIDIA\uff0cAMD\uff0cIntel)"}),"\n",(0,r.jsx)(e.li,{children:"\u5177\u5907C++\u7f16\u7a0b\u7ecf\u9a8c(\u719f\u6089RAII\uff0c\u521d\u59cb\u5316\u5217\u8868)"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301C++\u7684\u7f16\u8bd1\u5668(Visual Studio 2017+\uff0cGCC 7+)"}),"\n",(0,r.jsx)(e.li,{children:"\u5177\u59073D\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u57fa\u7840(OpenGL \u6216 Direct3D)"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u6559\u7a0b\u4e0d\u8981\u6c42\u8bfb\u8005\u4e86\u89e3OpenGL\u6216Direct3D\uff0c\u4f46\u9700\u8981\u4e86\u89e33D\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u7684\u57fa\u672c\u77e5\u8bc6\u3002\u4f8b\u5982\uff0c\u900f\u89c6\u6295\u5f71\u80cc\u540e\u7684\u6570\u5b66\u539f\u7406\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6709\u51733D\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u8bf7\u9605\u8bfb\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://paroj.github.io/gltut/",children:"Learning Modern 3D Graphics Programming"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/RayTracing/raytracing.github.io",children:"Ray tracing in one weekend"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.pbr-book.org/",children:"Physically Based Rendering book"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8bfb\u8005\u53ef\u4ee5\u4f7f\u7528C\u6765\u66ff\u6362C++\uff0c\u4f46\u8fd9\u6837\u505a\u9700\u8981\u5bf9\u793a\u4f8b\u4ee3\u7801\u8fdb\u884c\u5f88\u591a\u4fee\u6539\u3002\u793a\u4f8b\u4ee3\u7801\u4f7f\u7528\u4e86\u7c7b\uff0cRAII\u7b49C++\u7279\u6027\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6559\u7a0b\u7ed3\u6784",children:"\u6559\u7a0b\u7ed3\u6784"}),"\n",(0,r.jsxs)(e.p,{children:["\u6211\u4eec\u9996\u5148\u4ecb\u7ecdVulkan\u7684\u5de5\u4f5c\u539f\u7406\uff0c\u7136\u540e\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Vulkan\u7ed8\u5236\u4e00\u4e2a\u4e09\u89d2\u5f62\u663e\u5f0f\u5728\u5c4f\u5e55\u4e0a\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Vulkan SDK\u3001\u914d\u7f6e\u5f00\u53d1\u73af\u5883\uff0c\u6211\u4eec\u5f15\u5165\u4e86",(0,r.jsx)(e.a,{href:"https://glm.g-truc.net/",children:"GLM\u6570\u5b66\u5e93"}),"\u7528\u4e8e\u7ebf\u6027\u4ee3\u6570\u8fd0\u7b97\uff0c",(0,r.jsx)(e.a,{href:"https://www.glfw.org/",children:"GLFW\u5e93"}),"\u7528\u4e8e\u7a97\u53e3\u7684\u521b\u5efa\u3002\u6559\u7a0b\u8fd8\u4ecb\u7ecd\u4e86Windows\u4e0aVisual Studio\u7684\u914d\u7f6e\u65b9\u6cd5\uff0c\u4ee5\u53caUbuntu\u4e0a\u4f7f\u7528GCC\u7684\u914d\u7f6e\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e4b\u540e\uff0c\u6211\u4eec\u8bb2\u89e3\u4f7f\u7528Vulkan\u7f16\u5199\u5e94\u7528\u7a0b\u5e8f\u6765\u7ed8\u5236\u4e00\u4e2a\u4e09\u89d2\u5f62\u7684\u6240\u6709\u57fa\u672c\u7ec4\u4ef6\u3002\u6bcf\u4e00\u7ae0\u8282\u5927\u81f4\u9075\u5faa\u4e0b\u9762\u7684\u7ed3\u6784\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4ecb\u7ecd\u65b0\u6982\u5ff5\u548c\u5b83\u7684\u7528\u9014"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06\u4e0e\u4e4b\u76f8\u5173\u7684API\u8c03\u7528\u96c6\u6210\u5230\u6211\u4eec\u7684\u7a0b\u5e8f\u4e2d"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06\u76f8\u5173\u4ee3\u7801\u5c01\u88c5\u6210\u8f85\u52a9\u51fd\u6570"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u867d\u7136\u7ae0\u8282\u7684\u7ec4\u7ec7\u6709\u4e00\u5b9a\u987a\u5e8f\uff0c\u4f46\u4e00\u4e9b\u7ae0\u8282\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u4ecb\u7ecdVulkan\u7279\u6027\u529f\u80fd\u7684\u6587\u7ae0\u6765\u72ec\u7acb\u9605\u8bfb\u3002\u56e0\u6b64\uff0c\u672c\u6559\u7a0b\u4e5f\u53ef\u4ee5\u4f5c\u4e3aVulkan\u7684\u4e00\u4e2a\u53c2\u8003\u624b\u518c\u6765\u67e5\u8be2\u3002\u6559\u7a0b\u4e2d\u6240\u6709\u7684Vulkan\u51fd\u6570\u548c\u7c7b\u578b\u90fd\u94fe\u63a5\u5230\u4e86Vulkan\u89c4\u8303\uff0c\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u9f20\u6807\u83b7\u53d6\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\u3002\u7531\u4e8eVulkan\u662f\u4e00\u4e2a\u975e\u5e38\u65b0\u7684API\uff0c\u56e0\u6b64\u89c4\u8303\u6587\u6863\u53ef\u80fd\u5b58\u5728\u4e0d\u8db3\uff0c\u8bfb\u8005\u53ef\u4ee5\u7ed9",(0,r.jsx)(e.a,{href:"https://github.com/KhronosGroup/Vulkan-Docs",children:"Khronos\u7684Github\u4ed3\u5e93"}),"\u63d0\u4ea4\u53cd\u9988\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e4b\u524d\u63d0\u5230\uff0c\u4e3a\u4e86\u66f4\u7cbe\u51c6\u5730\u63a7\u5236\u786c\u4ef6\uff0c\u4f7f\u7528Vulkan\u9700\u8981\u5904\u7406\u5927\u91cf\u7ec6\u8282\u3002\u8fd9\u5bfc\u81f4\u5f88\u591a\u57fa\u7840\u64cd\u4f5c(\u5982\u521b\u5efa\u7eb9\u7406)\u4e5f\u9700\u8981\u7f16\u5199\u5f88\u591a\u4ee3\u7801\u624d\u80fd\u5b9e\u73b0\uff0c\u6211\u4eec\u4f1a\u5c01\u88c5\u4e00\u4e9b\u51fd\u6570\u6765\u907f\u514d\u91cd\u590d\u8fd9\u7c7b\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6bcf\u4e00\u7ae0\u8282\u7684\u7ed3\u5c3e\u4f1a\u9644\u4e0a\u5b8c\u6574\u7684\u4ee3\u7801\u94fe\u63a5\uff0c\u8bfb\u8005\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u6709\u7591\u60d1\u65f6\u53ef\u4ee5\u53c2\u8003\u8fd9\u4e9b\u4ee3\u7801\u3002\u8fd9\u4e9b\u4ee3\u7801\u5df2\u7ecf\u8fc7\u591a\u4e2a\u4e0d\u540c\u5382\u5546\u7684\u663e\u5361\u6d4b\u8bd5\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u6709\u5173Vulkan\u7684\u6700\u4f73\u5b9e\u8df5\u5c1a\u672a\u5efa\u7acb\uff0c\u5982\u679c\u60a8\u5bf9\u672c\u6559\u7a0b\u6709\u4efb\u4f55\u7591\u60d1\u548c\u53cd\u9988\uff0c\u53ef\u4ee5\u63d0\u4ea4\u53cd\u9988\u5230GitHub\u4ed3\u5e93",(0,r.jsx)(e.a,{href:"https://github.com/KhronosGroup/Vulkan-Tutorial",children:"KhronosGroup/Vulkan-Tutorial"}),"\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u8bfb\u8005\u5b9e\u73b0\u4f7f\u7528Vulkan\u7ed8\u5236\u7b2c\u4e00\u4e2a\u4e09\u89d2\u5f62\u7684\u7a0b\u5e8f\u540e\uff0c\u6211\u4eec\u5c06\u5f00\u59cb\u6269\u5c55\u8be5\u7a0b\u5e8f\uff0c\u5f15\u5165\u7ebf\u6027\u53d8\u6362\uff0c\u7eb9\u7406\u548c3D\u6a21\u578b\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u8bfb\u8005\u4e4b\u524d\u4f7f\u7528\u8fc7\u56fe\u5f62API\uff0c\u5e94\u8be5\u77e5\u9053\u5728\u51e0\u4f55\u4f53\u663e\u793a\u5230\u5c4f\u5e55\u4e4b\u524d\uff0c\u9700\u8981\u7ecf\u8fc7\u5f88\u591a\u6b65\u9aa4\u3002\u4f7f\u7528Vulkan\u540c\u6837\u5982\u6b64\uff0c\u8fd9\u4e9b\u6b65\u9aa4\u5f88\u5bb9\u6613\u7406\u89e3\uff0c\u6bcf\u4e00\u6b65\u90fd\u4e0d\u591a\u4f59\u3002\u800c\u4e14\u7ed8\u52363D\u6a21\u578b\u7684\u6b65\u9aa4\u5e76\u4e0d\u6bd4\u7ed8\u5236\u4e09\u89d2\u5f62\u591a\u592a\u591a\u989d\u5916\u7684\u5de5\u4f5c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u51c6\u5907\u597d\u4f53\u9a8c\u9ad8\u6027\u80fd\u6b21\u4e16\u4ee3\u56fe\u5f62API\u4e86\u5417\uff1f\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\uff01"})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var r=i(6540);const l={},t=r.createContext(l);function s(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);