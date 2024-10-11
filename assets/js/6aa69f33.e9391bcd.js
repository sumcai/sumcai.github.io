"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[9078],{3893:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=l(4848),i=l(8453);const t={title:"\u4ec0\u4e48\u662fvulkan",description:"Vulkan \u7684\u57fa\u672c\u6982\u5ff5",icon:"material/head-question-outline"},s="\u5f00\u59cb\u65c5\u7a0b",o={id:"concept/what_is_vulkan",title:"\u4ec0\u4e48\u662fvulkan",description:"Vulkan \u7684\u57fa\u672c\u6982\u5ff5",source:"@site/docs/concept/1-what_is_vulkan.md",sourceDirName:"concept",slug:"/concept/what_is_vulkan",permalink:"/concept/what_is_vulkan",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4ec0\u4e48\u662fvulkan",description:"Vulkan \u7684\u57fa\u672c\u6982\u5ff5",icon:"material/head-question-outline"},sidebar:"VulkanDoc",previous:{title:"\ud83d\udcc1 Vulkan\u57fa\u7840\u6982\u5ff5",permalink:"/concept"},next:{title:"vulkan\u80fd\u505a\u4ec0\u4e48",permalink:"/concept/what_can_vulkan_do"}},r={},c=[{value:"\u4ec0\u4e48\u662fAPI\uff1f",id:"\u4ec0\u4e48\u662fapi",level:2},{value:"\u4ec0\u4e48\u662fVulkan\uff1f",id:"\u4ec0\u4e48\u662fvulkan",level:2},{value:"Vulkan \u662f\u5982\u4f55\u8bde\u751f\u7684\uff1f",id:"vulkan-\u662f\u5982\u4f55\u8bde\u751f\u7684",level:2},{value:"Vulkan \u548c OpenGL",id:"vulkan-\u548c-opengl",level:2}];function u(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"\u5f00\u59cb\u65c5\u7a0b",children:"\u5f00\u59cb\u65c5\u7a0b"})}),"\n",(0,a.jsx)(e.p,{children:"Vulkan\u662f\u7528\u6765\u6784\u5efa\u6e38\u620f\u7684\u56fe\u5f62API\uff0c\u6211\u4eec\u5c06\u9010\u6b65\u8fdb\u5165Vulkan API\u7684\u590d\u6742\u4e16\u754c\u6765\u89e3\u91ca\u5b83\u4eec\u662f\u4ec0\u4e48\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u4e8b\u4e0d\u5b9c\u8fdf\uff0c\u8bf7\u8ddf\u968f\u6211\u7684\u811a\u6b65\u6765\u5b66\u4e60Vulkan\u5427\uff01"}),"\n",(0,a.jsx)(e.h2,{id:"\u4ec0\u4e48\u662fapi",children:"\u4ec0\u4e48\u662fAPI\uff1f"}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u8ba8\u8bbavulkan\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u4e86\u89e3\u4e00\u4e0b API\u3002API \u4ee3\u8868\u5e94\u7528\u7a0b\u5e8f\u63a5\u53e3\uff0c\u662f\u4e00\u7ec4\u80fd\u4f7f\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u8fdb\u884c\u4e92\u901a\u7684\u7a0b\u5e8f\u4ee3\u7801\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u672c\u8d28\u4e0a\uff0c\u8c03\u7528 API \u4ee3\u8868\u8f6f\u4ef6\u53d1\u9001\u8bf7\u6c42\u3002\u4f8b\u5982\uff0c\u5929\u6c14\u9884\u62a5\u7cfb\u7edf\u5305\u542b\u6bcf\u5929\u7684\u5929\u6c14\u6570\u636e\u4fe1\u606f\uff0c\u60a8\u624b\u673a\u4e0a\u7684\u5929\u6c14\u9884\u62a5\u7a0b\u5e8f\u901a\u8fc7 API \u4e0e\u8be5\u7cfb\u7edf\u201c\u5bf9\u8bdd\u201d\uff0c\u5e76\u5728\u60a8\u7684\u624b\u673a\u4e0a\u663e\u793a\u6700\u65b0\u7684\u5929\u6c14\u4fe1\u606f\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u4ec0\u4e48\u662fvulkan",children:"\u4ec0\u4e48\u662fVulkan\uff1f"}),"\n",(0,a.jsx)(e.admonition,{title:"Vulkan \u7b80\u4ecb",type:"info",children:(0,a.jsx)(e.p,{children:"\u5b83\u662f\u4e00\u4e2a\u4f4e\u5f00\u9500\u3001\u63a5\u8fd1\u5e95\u5c42\u786c\u4ef6\u7684 API\uff0c\u9002\u7528\u4e8e 3D \u56fe\u5f62\u548c\u8ba1\u7b97\u5e94\u7528\u7a0b\u5e8f\u3002Vulkan \u57fa\u672c\u4e0a\u662f OpenGL \u7684\u540e\u7eed\u7248\u672c\uff0c\u5b83\u6700\u521d\u88ab\u79f0\u4e3a\u201c\u4e0b\u4e00\u4ee3 OpenGL \u8ba1\u5212\u201d\u3002Vulkan \u7406\u8bba\u4e0a\u6bd4\u5176\u4ed6 GPU API \u66f4\u5177\u4f18\u52bf\uff0c\u5177\u5907\u8de8\u5e73\u53f0\u652f\u6301\u3001\u66f4\u597d\u7684\u652f\u6301\u591a\u7ebf\u7a0b\u5904\u7406\u5668\u3001\u66f4\u4f4e\u7684 CPU \u8d1f\u8f7d\u4ee5\u53ca\u4e00\u5b9a\u7a0b\u5ea6\u7684\u64cd\u4f5c\u7cfb\u7edf\u65e0\u611f\u77e5\u80fd\u529b\u3002\u5b83\u8fd8\u5e94\u8be5\u4f7f\u9a71\u52a8\u7a0b\u5e8f\u5f00\u53d1\u66f4\u5bb9\u6613\uff0c\u5e76\u5141\u8bb8\u9884\u7f16\u8bd1\u9a71\u52a8\u7a0b\u5e8f\uff0c\u5305\u62ec\u4f7f\u7528\u4ee5\u5404\u79cd\u8bed\u8a00\u7f16\u5199\u7684\u7740\u8272\u5668\u3002'"})}),"\n",(0,a.jsx)(e.p,{children:"Vulkan \u662f\u4e00\u79cd\u4e13\u4e3a\u5b9e\u65f6 3D \u56fe\u5f62\u5e94\u7528\u7a0b\u5e8f\uff08\u4f8b\u5982\u6e38\u620f\uff09\u800c\u8bbe\u8ba1\u7684 API\u3002\u5b83\u80fd\u591f\u4e0e\u8ba1\u7b97\u673a\u7684 GPU \u8fdb\u884c\u4e92\u901a\uff0c\u5e76\u544a\u8bc9 GPU \u9700\u8981\u6e32\u67d3\u4ec0\u4e48\u6837\u7684\u6e38\u620f\u753b\u9762\u3002\u5b9e\u9645\u7684\u4ea4\u4e92\u8fc7\u7a0b\u6bd4\u8fd9\u590d\u6742\u7684\u591a\uff0c\u4f46\u8fd9\u5c31\u662f\u57fa\u672c\u7684\u4ea4\u4e92\u8fc7\u7a0b\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u6e38\u620f\u5728\u4e0d\u540c\u7684\u5e73\u53f0\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u56fe\u5f62 API\uff0c\u5982Windows\u7684DirectX, MacOS\u7684Metal\u3002\u800c Vulkan \u6700\u6709\u4f18\u52bf\u7684\u4e00\u9762\u662f\u5b83\u662f\u5f00\u6e90\u548c\u8de8\u5e73\u53f0\u7684\uff0c\u7406\u8bba\u4e0a\u5e94\u8be5\u53ef\u4ee5\u8de8\u591a\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u5de5\u4f5c\uff0c\u5305\u62ec Android\u3001SteamOS\u3001MacOS\u3001Linux \u548c Windows 7 \u5230Windows 11\u3002\u9ad8\u6548\u7684\u56fe\u5f62 API \u53ef\u4ee5\u5e26\u6765\u5353\u8d8a\u7684\u6027\u80fd, Vulkan \u521b\u5efa\u7684\u51fa\u53d1\u70b9\u5c31\u662f\u8981\u786e\u4fdd\u5176\u8f83\u4f4e\u7684 CPU \u5360\u7528\u7387\uff0c\u4e3a\u5176\u4ed6\u5de5\u4f5c\u8d1f\u8f7d\u7559\u51fa\u66f4\u591a\u7a7a\u95f4\u3002"}),"\n",(0,a.jsx)(e.p,{children:"Vulkan \u8de8\u5e73\u53f0\u7684\u7279\u70b9\u4f7f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u521b\u5efa\u8de8\u5e73\u53f0\u8bbf\u95ee\u7684\u6e38\u620f\uff0c\u4f7f\u5f97\u6211\u4eec\u7684\u6e38\u620f\u73a9\u5bb6\u53ef\u4ee5\u5728\u66f4\u591a\u7684\u5730\u65b9\u73a9\u6e38\u620f\uff0c\u8fd9\u5bf9\u4e8e\u5404\u65b9\u6765\u8bf4\u90fd\u662f\u7406\u60f3\u7684\u9009\u62e9\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"vulkan-\u662f\u5982\u4f55\u8bde\u751f\u7684",children:"Vulkan \u662f\u5982\u4f55\u8bde\u751f\u7684\uff1f"}),"\n",(0,a.jsx)(e.p,{children:"Vulkan \u6700\u521d\u7531 Khronos Group \u4e8e 2015 \u5e74 3 \u6708\u5ba3\u5e03\uff0c\u6682\u5b9a\u53d1\u5e03\u65e5\u671f\u4e3a 2015 \u5e74\u5e95\u3002Khronos \u662f\u4e00\u4e2a\u975e\u76c8\u5229\u884c\u4e1a\u8054\u76df\uff0c\u7531\u56fe\u5f62\u884c\u4e1a\u7684\u77e5\u540d\u5382\u5546\u5728 15 \u5e74\u524d\u521b\u7acb\uff0c\u5305\u62ec ATI\uff08\u5df2\u88ab AMD \u6536\u8d2d\uff09\u3001Nvidia\u3001Intel\u3001Silicon Graphics\u3001Discrete \u548c Sun Microsystems\u3002\u5373\u4f7f\u60a8\u6ca1\u6709\u542c\u8bf4\u8fc7 Khronos\uff0c\u60a8\u4e5f\u53ef\u80fd\u542c\u8bf4\u8fc7\u4ed6\u4eec\u7684\u4e00\u4e9b\u6807\u51c6\uff0c\u4f8b\u5982\uff1aOpenGL\u3001OpenGL ES\u3001WebGL\u3001OpenCL\u3001SPIR\u3001SYCL\u3001WebCL\u3001OpenVX\u3001EGL\u3001OpenMAX\u3001OpenVG\u3001OpenSL ES\u3001 StreamInput\u3001COLLADA \u548c glTF\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u4e0e opengl \u4e0d\u540c\u7684\u662f\uff0cVulkan \u662f\u4ece\u5934\u5f00\u59cb\u8bbe\u8ba1\u7684\uff0c\u5b83\u53ef\u4ee5\u5728\u591a\u79cd\u5e73\u53f0\u4e0a\u8fd0\u884c\uff0c\u4ece\u624b\u673a\u3001\u5e73\u677f\u7535\u8111\u5230\u6e38\u620f\u673a\u3001\u9ad8\u7aef\u53f0\u5f0f\u673a\u3002API \u7684\u5e95\u5c42\u8bbe\u8ba1\u662f\u5206\u5c42\u7684\uff0c\u6216\u8005\u8bf4\u662f\u6a21\u5757\u5316\u7684\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u4e3a\u4ee3\u7801\u6821\u9a8c\u3001\u8c03\u8bd5\u548c\u5206\u6790\u521b\u5efa\u901a\u7528\u4e14\u53ef\u6269\u5c55\u7684\u67b6\u6784\uff0c\u800c\u4e0d\u4f1a\u5f71\u54cd\u6027\u80fd\u3002Krhonos \u58f0\u79f0\u5206\u5c42\u65b9\u6cd5\u5c06\u5177\u5907\u66f4\u5927\u7684\u7075\u6d3b\u6027\uff0c\u4fc3\u8fdb\u8de8\u4f9b\u5e94\u5546\u7684 GPU \u5de5\u5177\u521b\u65b0\uff0c\u5e76\u4e3a\u590d\u6742\u7684\u6e38\u620f\u5f15\u64ce\u63d0\u4f9b\u66f4\u76f4\u63a5\u7684 GPU \u63a7\u5236\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u7406\u8bba\u4e0a\uff0cVulkan \u53ef\u7528\u4e8e\u5e76\u884c\u8ba1\u7b97\u786c\u4ef6\u3001\u63a7\u5236\u6570\u6210\u5343\u4e0a\u4e07\u4e2a GPU \u6838\u5fc3\u3001\u5fae\u578b\u53ef\u7a7f\u6234\u8bbe\u5907\u548c\u73a9\u5177\u65e0\u4eba\u673a\u30013D \u6253\u5370\u673a\u3001\u6c7d\u8f66\u3001VR \u5957\u4ef6\u4ee5\u53ca\u51e0\u4e4e\u4efb\u4f55\u5176\u4ed6\u5185\u90e8\u5177\u6709 GPU \u7684\u8bbe\u5907\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u5efa\u8bae\u60a8\u67e5\u770b",(0,a.jsx)(e.a,{href:"https://www.khronos.org/assets/uploads/developers/library/overview/vulkan-overview.pdf",children:"\u5b98\u65b9 Vulkan \u6982\u8ff0"}),"\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"vulkan-\u548c-opengl",children:"Vulkan \u548c OpenGL"}),"\n",(0,a.jsx)(e.p,{children:"\u4e00\u4e9b\u4eba\u53ef\u80fd\u77e5\u9053 OpenGL\uff0c\u5b83\u4e5f\u662f\u4e00\u4e2a 3D \u56fe\u5f62 API\u3002Vulkan \u5e76\u4e0d\u662f OpenGL \u7684\u76f4\u63a5\u66ff\u4ee3\u54c1\uff0c\u800c\u662f\u4e00\u4e2a\u5141\u8bb8\u5bf9 GPU \u8fdb\u884c\u66f4\u7ec6\u5316\u63a7\u5236\u7684\u663e\u793a API\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u6211\u4eec\u5bf9\u6bd4\u4e00\u4e0b Vulkan \u548c OpenGL \u4e4b\u95f4\u7684\u533a\u522b\u3002Khronos \u7ed9\u51fa\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u5bf9\u6bd4\u56fe\u8bf4\u660e\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"vulkan vs opengl",src:l(6005).A+"",width:"1080",height:"564"})}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528 Vulkan \u9700\u8981\u6295\u5165\u4e86\u66f4\u591a\u7684\u7cbe\u529b\u5904\u7406\u7ec6\u8282, \u53ef\u80fd\u5e76\u975e\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u90fd\u613f\u610f\u8fd9\u6837\u505a\uff0c\u4f46\u5982\u679c\u5f00\u53d1\u4eba\u5458\u6b63\u786e\u505a\u4e86\u8fd9\u4e9b\u5de5\u4f5c\uff0c\u5c06\u4f1a\u53d1\u73b0\u6709\u5f88\u591a\u529f\u80fd\u548c\u6027\u80fd\u7684\u63d0\u5347\u3002"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"use vulkan",src:l(9582).A+"",width:"1029",height:"345"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},9582:(n,e,l)=>{l.d(e,{A:()=>a});const a=l.p+"assets/images/use_vulkan-894d86365b495d4d704314dbc10cb67d.png"},6005:(n,e,l)=>{l.d(e,{A:()=>a});const a=l.p+"assets/images/vk_vs_ogl-e0aa93448884985508ae75b3f76977d7.png"},8453:(n,e,l)=>{l.d(e,{R:()=>s,x:()=>o});var a=l(6540);const i={},t=a.createContext(i);function s(n){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);