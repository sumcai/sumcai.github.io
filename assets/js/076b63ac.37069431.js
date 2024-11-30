"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[9813],{7684:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>t});var i=l(4848),r=l(8453);const a={title:"\u6982\u8ff0",description:"vulkan\u6559\u7a0b\u603b\u4f53\u4ecb\u7ecd"},s=void 0,c={id:"tutorial/overview",title:"\u6982\u8ff0",description:"vulkan\u6559\u7a0b\u603b\u4f53\u4ecb\u7ecd",source:"@site/docs/tutorial/2-overview.md",sourceDirName:"tutorial",slug:"/tutorial/overview",permalink:"/tutorial/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u6982\u8ff0",description:"vulkan\u6559\u7a0b\u603b\u4f53\u4ecb\u7ecd"},sidebar:"VulkanTutorial",previous:{title:"\u524d\u8a00",permalink:"/tutorial/about"},next:{title:"\u914d\u7f6e\u5f00\u53d1\u73af\u5883",permalink:"/tutorial/dev_environment"}},d={},t=[{value:"Vulkan\u8d77\u6e90",id:"vulkan\u8d77\u6e90",level:2},{value:"\u753b\u4e09\u89d2\u5f62\u7684\u6b65\u9aa4",id:"\u753b\u4e09\u89d2\u5f62\u7684\u6b65\u9aa4",level:2},{value:"\u6b65\u9aa41\uff1a\u521b\u5efa\u5b9e\u4f8b\u548c\u9009\u62e9\u7269\u7406\u8bbe\u5907",id:"\u6b65\u9aa41\u521b\u5efa\u5b9e\u4f8b\u548c\u9009\u62e9\u7269\u7406\u8bbe\u5907",level:3},{value:"\u6b65\u9aa42\uff1a\u903b\u8f91\u8bbe\u5907\u548c\u961f\u5217\u65cf",id:"\u6b65\u9aa42\u903b\u8f91\u8bbe\u5907\u548c\u961f\u5217\u65cf",level:3},{value:"\u6b65\u9aa43\uff1a\u7a97\u53e3\u8868\u9762\u548c\u4ea4\u6362\u94fe",id:"\u6b65\u9aa43\u7a97\u53e3\u8868\u9762\u548c\u4ea4\u6362\u94fe",level:3},{value:"\u6b65\u9aa44\uff1a\u56fe\u50cf\u89c6\u56fe\u548c\u5e27\u7f13\u51b2",id:"\u6b65\u9aa44\u56fe\u50cf\u89c6\u56fe\u548c\u5e27\u7f13\u51b2",level:3},{value:"\u6b65\u9aa45\uff1a\u6e32\u67d3\u6d41\u7a0b",id:"\u6b65\u9aa45\u6e32\u67d3\u6d41\u7a0b",level:3},{value:"\u6b65\u9aa46\uff1a\u56fe\u5f62\u7ba1\u7ebf",id:"\u6b65\u9aa46\u56fe\u5f62\u7ba1\u7ebf",level:3},{value:"\u6b65\u9aa47\uff1a\u6307\u4ee4\u6c60\u548c\u6307\u4ee4\u7f13\u51b2",id:"\u6b65\u9aa47\u6307\u4ee4\u6c60\u548c\u6307\u4ee4\u7f13\u51b2",level:3},{value:"\u6b65\u9aa48\uff1a\u4e3b\u5faa\u73af",id:"\u6b65\u9aa48\u4e3b\u5faa\u73af",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"API\u4ecb\u7ecd",id:"api\u4ecb\u7ecd",level:2},{value:"\u4ee3\u7801\u98ce\u683c",id:"\u4ee3\u7801\u98ce\u683c",level:3},{value:"\u6821\u9a8c\u5c42",id:"\u6821\u9a8c\u5c42",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u5148\u7b80\u8981\u4ecb\u7ecdVulkan\u6982\u5ff5\uff0c\u4ee5\u53ca\u5b83\u6240\u89e3\u51b3\u7684\u95ee\u9898\u3002\u7136\u540e\uff0c\u6211\u4eec\u4ecb\u7ecd\u4f7f\u7528Vulkan\u6765\u7ed8\u5236\u4e00\u4e2a\u4e09\u89d2\u5f62\u7684\u6b65\u9aa4\u3002\u6700\u540e\uff0c\u6211\u4eec\u5c06\u4f1a\u4ecb\u7ecdVulkan API\u7684\u57fa\u672c\u7ed3\u6784\u548c\u4f7f\u7528\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"vulkan\u8d77\u6e90",children:"Vulkan\u8d77\u6e90"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u5f80\u5927\u591a\u6570\u56fe\u5f62API\u8bbe\u8ba1\u4e3a\u91c7\u7528\u56fa\u5b9a\u529f\u80fd\u7684\u6e32\u67d3\u7ba1\u7ebf\uff0c\u5e94\u7528\u7a0b\u5e8f\u9700\u6309\u7167\u4e00\u5b9a\u683c\u5f0f\u63d0\u4ea4\u9876\u70b9\u6570\u636e\uff0c\u914d\u7f6e\u5149\u7167\u548c\u7740\u8272\u9009\u9879\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u968f\u7740\u663e\u5361\u67b6\u6784\u9010\u6e10\u6210\u719f\uff0c\u56fe\u5f62\u786c\u4ef6\u5f00\u59cb\u63d0\u4f9b\u8d8a\u6765\u8d8a\u591a\u7684\u53ef\u7f16\u7a0b\u529f\u80fd\uff0c\u8fd9\u4e9b\u65b0\u529f\u80fd\u90fd\u5fc5\u987b\u4ee5\u67d0\u79cd\u65b9\u5f0f\u4e0e\u73b0\u6709\u7684 API \u96c6\u6210\u3002\u8fd9\u4e48\u505a\u5bfc\u81f4\u9a71\u52a8\u7a0b\u5e8f\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u8005\u8981\u5904\u7406\u7684\u517c\u5bb9\u6027\u95ee\u9898\u4e5f\u8d8a\u6765\u8d8a\u591a\u3002\u968f\u7740\u79fb\u52a8\u6d6a\u6f6e\u7684\u5230\u6765\uff0c\u4eba\u4eec\u5bf9\u79fb\u52a8GPU\u7684\u8981\u6c42\u4e5f\u8d8a\u6765\u8d8a\u9ad8\uff0c\u4f46\u4ee5\u5f80\u7684\u56fe\u5f62API\u4e0d\u80fd\u591f\u5bf9\u56fe\u5f62\u786c\u4ef6\u8fdb\u884c\u7cbe\u51c6\u5730\u63a7\u5236\u6765\u63d0\u5347\u6548\u7387\uff0c\u5bf9\u591a\u7ebf\u7a0b\u7684\u652f\u6301\u4e5f\u975e\u5e38\u6709\u9650\uff0c\u5bfc\u81f4\u6ca1\u6709\u53d1\u6325\u51fa\u56fe\u5f62\u786c\u4ef6\u771f\u6b63\u7684\u6f5c\u529b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Vulkan\u8bbe\u8ba1\u4e3a\u4e00\u4e2a\u5168\u65b0\u7684\u8de8\u5e73\u53f0\u56fe\u5f62API\uff0c\u7531\u4e8e\u6ca1\u6709\u5386\u53f2\u5305\u88b1\uff0cVulkan\u5b8c\u5168\u6309\u7167\u73b0\u4ee3\u56fe\u5f62\u67b6\u6784\u8bbe\u8ba1\uff0c\u5b83\u63d0\u4f9b\u4e86\u66f4\u52a0\u8be6\u7ec6\u7684API\u7ed9\u5f00\u53d1\u8005\uff0c\u5927\u5927\u51cf\u5c11\u4e86\u9a71\u52a8\u7a0b\u5e8f\u7684\u5f00\u9500\uff0c\u5141\u8bb8\u591a\u4e2a\u7ebf\u7a0b\u5e76\u884c\u521b\u5efa\u548c\u63d0\u4ea4\u6307\u4ee4\uff0c\u4f7f\u7528\u6807\u51c6\u5316\u7684\u7740\u8272\u5668\u5b57\u8282\u7801\uff0c\u5c06\u56fe\u5f62\u548c\u8ba1\u7b97\u529f\u80fd\u8fdb\u884c\u4e86\u7edf\u4e00\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u753b\u4e09\u89d2\u5f62\u7684\u6b65\u9aa4",children:"\u753b\u4e09\u89d2\u5f62\u7684\u6b65\u9aa4"}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Vulkan\u7ed8\u5236\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u4e09\u89d2\u5f62\uff0c\u8fd9\u91cc\u7528\u5230\u7684\u6240\u6709\u6982\u5ff5\u4f1a\u5728\u4e0b\u4e00\u7ae0\u8282\u8fdb\u884c\u8be6\u7ec6\u8bf4\u660e\uff0c\u672c\u7ae0\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9\u60a8\u5bf9\u6240\u6709\u7528\u5230\u7684\u7ec4\u4ef6\u6709\u4e00\u4e2a\u5927\u81f4\u7684\u4e86\u89e3\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa41\u521b\u5efa\u5b9e\u4f8b\u548c\u9009\u62e9\u7269\u7406\u8bbe\u5907",children:"\u6b65\u9aa41\uff1a\u521b\u5efa\u5b9e\u4f8b\u548c\u9009\u62e9\u7269\u7406\u8bbe\u5907"}),"\n",(0,i.jsx)(n.p,{children:"Vulkan\u5e94\u7528\u7a0b\u5e8f\u4ece\u4e00\u5f00\u59cb\u5c31\u8981\u521b\u5efaVkInstance\uff0c\u7136\u540e\u624d\u80fd\u4f7f\u7528\u5176\u4ed6Vulkan API\u3002\u521b\u5efaVkInstance\u540e\uff0c\u5c31\u53ef\u4ee5\u67e5\u8be2Vulkan\u652f\u6301\u7684\u786c\u4ef6\uff0c\u9009\u62e9\u5176\u4e2d\u4e00\u4e2a\u6216\u591a\u4e2aVkPhysicalDevices\u8fdb\u884c\u64cd\u4f5c\u3002\u6211\u4eec\u53ef\u4ee5\u67e5\u8be2\u8bbe\u5907\u5c5e\u6027\uff0c\u4ece\u4e2d\u9009\u62e9\u4e00\u4e2a\u9002\u5408\u6211\u4eec\u7684\u8bbe\u5907\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa42\u903b\u8f91\u8bbe\u5907\u548c\u961f\u5217\u65cf",children:"\u6b65\u9aa42\uff1a\u903b\u8f91\u8bbe\u5907\u548c\u961f\u5217\u65cf"}),"\n",(0,i.jsx)(n.p,{children:"\u9009\u62e9\u4e86\u5408\u9002\u7684\u786c\u4ef6\u8bbe\u5907\u540e\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u903b\u8f91\u8bbe\u5907VkDevice\uff0c\u521b\u5efa\u53c2\u6570\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u54ea\u4e9bVkPhysicalDevice\u7279\u6027(\u6bd4\u5982\u591a\u89c6\u53e3\uff0c64\u4f4d\u6d6e\u70b9)\uff0c\u8fd8\u9700\u8981\u6307\u5b9a\u4f7f\u7528\u7684\u961f\u5217\u65cf\u3002Vulkan\u5c06\u8bf8\u5982\u7ed8\u5236\u6307\u4ee4\u3001\u5185\u5b58\u64cd\u4f5c\u7b49\u6307\u4ee4\u63d0\u4ea4\u5230VkQueue\u6765\u5f02\u6b65\u6267\u884c\u3002\u961f\u5217\u7531\u961f\u5217\u65cf\u5206\u914d\uff0c\u6bcf\u4e2a\u961f\u5217\u65cf\u652f\u6301\u4e00\u4e2a\u7279\u5b9a\u7684\u64cd\u4f5c\u96c6\u5408\u3002\u4f8b\u5982\uff0c\u56fe\u5f62\u3001\u8ba1\u7b97\u548c\u5185\u5b58\u4f20\u8f93\u64cd\u4f5c\u5206\u5c5e\u4e8e\u4e0d\u540c\u7684\u961f\u5217\u65cf\u3002\u961f\u5217\u65cf\u53ea\u662f\u9009\u62e9\u7269\u7406\u8bbe\u5907\u65f6\u7684\u4e00\u4e2a\u53c2\u8003\uff0c\u4e00\u4e2a\u652f\u6301Vulkan\u8ba1\u7b97\u7684\u8bbe\u5907\u53ef\u80fd\u6ca1\u6709\u56fe\u5f62\u529f\u80fd\uff0c\u4f46\u5f53\u4eca\u652f\u6301Vulkan\u7684\u663e\u5361\u8bbe\u5907\u901a\u5e38\u90fd\u652f\u6301\u6240\u6709\u961f\u5217\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa43\u7a97\u53e3\u8868\u9762\u548c\u4ea4\u6362\u94fe",children:"\u6b65\u9aa43\uff1a\u7a97\u53e3\u8868\u9762\u548c\u4ea4\u6362\u94fe"}),"\n",(0,i.jsxs)(n.p,{children:["\u9664\u975e\u662f\u79bb\u5c4f\u6e32\u67d3\uff0c\u5426\u5219\u6211\u4eec\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a\u7a97\u53e3\u6765\u663e\u793a\u6e32\u67d3\u7684\u56fe\u50cf\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u539f\u751f\u5e73\u53f0\u7684\u7a97\u53e3API\u6216\u4f7f\u7528",(0,i.jsx)(n.a,{href:"https://www.glfw.org/",children:"GLFW"}),"\u3001",(0,i.jsx)(n.a,{href:"https://www.libsdl.org/",children:"SDL"}),"\u7b49\u7a97\u53e3\u5e93\u6765\u521b\u5efa\uff0c\u672c\u6559\u7a0b\u4f7f\u7528\u7684\u662fGLFW\uff0c\u6211\u4eec\u4f1a\u5728\u4e0b\u4e00\u7ae0\u8be6\u7ec6\u4ecb\u7ecdGLFW\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u8fd8\u9700\u8981\u4e24\u4e2a\u7ec4\u4ef6\u624d\u80fd\u5b8c\u6210\u7a97\u53e3\u6e32\u67d3\uff1a\u7a97\u53e3\u8868\u9762(VkSurfaceKHR)\u548c\u4ea4\u6362\u94fe(VkSwapChainKHR)\uff0c\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u90fd\u6709KHR\u540e\u7f00\uff0c\u8868\u793a\u5b83\u4eec\u5c5e\u4e8eVulkan\u6269\u5c55\u3002Vulkan API\u672c\u8eab\u662f\u5e73\u53f0\u4e0d\u76f8\u5173\u7684\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528WSI(Window System Interface\uff0c\u7a97\u53e3\u7cfb\u7edf\u63a5\u53e3)\u6269\u5c55\u4e0e\u539f\u751f\u7684\u7a97\u53e3\u7ba1\u7406\u5668\u8fdb\u884c\u4ea4\u4e92\u3002\u8868\u9762(Surface)\u662f\u4e00\u4e2a\u6e32\u67d3\u7a97\u53e3\u7684\u8de8\u5e73\u53f0\u62bd\u8c61\uff0c\u901a\u5e38\u5b83\u662f\u7531\u539f\u751f\u7a97\u53e3\u7cfb\u7edf\u53e5\u67c4\u4f5c\u4e3a\u53c2\u6570\u5b9e\u4f8b\u5316\u5f97\u5230\u7684\uff0c\u4f8b\u5982Windows \u4e0a\u7684HWND\u3002\u4e0d\u8fc7\u8fd9\u4e9b\u5de5\u4f5c\uff0cGLFW\u5df2\u7ecf\u5e2e\u6211\u4eec\u5904\u7406\u4e86\uff0c\u6240\u4ee5\u4e0d\u7528\u6211\u4eec\u5173\u5fc3\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ea4\u6362\u94fe\u662f\u6e32\u67d3\u76ee\u6807\u7684\u96c6\u5408\uff0c\u5b83\u7528\u6765\u786e\u4fdd\u6211\u4eec\u6b63\u5728\u6e32\u67d3\u7684\u56fe\u50cf\u548c\u5f53\u524d\u5c4f\u5e55\u4e0a\u663e\u5f0f\u7684\u56fe\u50cf\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u56fe\u50cf\u3002\u6bcf\u7ed8\u5236\u4e00\u5e27\u65f6\uff0c\u5fc5\u987b\u8bf7\u6c42\u4ea4\u6362\u94fe\u63d0\u4f9b\u8981\u6e32\u67d3\u7684\u56fe\u50cf\uff0c\u7ed8\u5236\u5b8c\u6210\u540e\uff0c\u56fe\u50cf\u8fd4\u56de\u5230\u4ea4\u6362\u94fe\u4e2d\uff0c\u5728\u4e4b\u540e\u67d0\u4e2a\u65f6\u523b\uff0c\u56fe\u50cf\u88ab\u5448\u73b0\u5230\u5c4f\u5e55\u4e0a\u3002\u6e32\u67d3\u76ee\u6807\u7684\u6570\u91cf\u548c\u56fe\u50cf\u5448\u73b0\u5230\u5c4f\u5e55\u7684\u65f6\u673a\u53d6\u51b3\u4e8e\u663e\u793a\u6a21\u5f0f\u3002\u5e38\u7528\u7684\u663e\u793a\u6a21\u5f0f\u6709\u53cc\u7f13\u51b2(vsync\uff0c\u5782\u76f4\u540c\u6b65)\u548c\u4e09\u7f13\u51b2\uff0c\u6211\u4eec\u5c06\u5728\u521b\u5efa\u4ea4\u6362\u94fe\u7ae0\u8282\u8ba8\u8bba\u8fd9\u4e9b\u5185\u5bb9\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa44\u56fe\u50cf\u89c6\u56fe\u548c\u5e27\u7f13\u51b2",children:"\u6b65\u9aa44\uff1a\u56fe\u50cf\u89c6\u56fe\u548c\u5e27\u7f13\u51b2"}),"\n",(0,i.jsx)(n.p,{children:"\u4ece\u4ea4\u6362\u94fe\u83b7\u53d6\u56fe\u50cf\u540e\uff0c\u8fd8\u4e0d\u80fd\u76f4\u63a5\u5728\u56fe\u50cf\u4e0a\u8fdb\u884c\u7ed8\u5236\uff0c\u9700\u8981\u5148\u5c06\u56fe\u50cf\u5305\u88c5\u5230VkImageView\u548cVkFramebuffer\u4e2d\u53bb\u3002\u56fe\u50cf\u89c6\u56fe\u4ee3\u8868\u5f15\u7528\u56fe\u50cf\u7684\u7279\u5b9a\u90e8\u5206\uff0c\u5e27\u7f13\u51b2\u53ef\u4ee5\u4f7f\u7528\u56fe\u50cf\u89c6\u56fe\u4f5c\u4e3a\u989c\u8272\uff0c\u6df1\u5ea6\u548c\u6a21\u677f\u76ee\u6807\u3002\u4ea4\u6362\u94fe\u4e2d\u53ef\u80fd\u6709\u591a\u4e2a\u4e0d\u540c\u7684\u56fe\u50cf\uff0c\u6211\u4eec\u9884\u5148\u4e3a\u6bcf\u4e2a\u56fe\u50cf\u90fd\u521b\u5efa\u597d\u56fe\u50cf\u89c6\u56fe\u548c\u5e27\u7f13\u51b2\uff0c\u7136\u540e\u5728\u7ed8\u5236\u65f6\u9009\u62e9\u6b63\u786e\u7684\u56fe\u50cf\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa45\u6e32\u67d3\u6d41\u7a0b",children:"\u6b65\u9aa45\uff1a\u6e32\u67d3\u6d41\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:"\u6e32\u67d3\u6d41\u7a0b\u63cf\u8ff0\u4e86\u6e32\u67d3\u64cd\u4f5c\u65f6\u4f7f\u7528\u7684\u56fe\u50cf\u7c7b\u578b\u3001\u4f7f\u7528\u65b9\u5f0f\u3001\u5982\u4f55\u5904\u7406\u56fe\u50cf\u5185\u5bb9\u3002\u5bf9\u4e8e\u4e0b\u9762\u7ed8\u5236\u4e09\u89d2\u5f62\u7684\u7a0b\u5e8f\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u5f20\u56fe\u50cf\u4f5c\u4e3a\u989c\u8272\u76ee\u6807\uff0c\u5e76\u4e14\u5728\u6267\u884c\u7ed8\u5236\u64cd\u4f5c\u524d\u6e05\u9664\u6574\u4e2a\u56fe\u50cf\u3002\u6e32\u67d3\u6d41\u7a0b\u53ea\u63cf\u8ff0\u4e86\u56fe\u50cf\u7684\u7c7b\u578b\uff0c\u5b9e\u9645\u56fe\u50cf\u7684\u7ed1\u5b9a\u662f\u901a\u8fc7VkFramebuffer\u5b8c\u6210\u7684\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa46\u56fe\u5f62\u7ba1\u7ebf",children:"\u6b65\u9aa46\uff1a\u56fe\u5f62\u7ba1\u7ebf"}),"\n",(0,i.jsx)(n.p,{children:"Vulkan\u7684\u56fe\u5f62\u7ba1\u7ebf\u5bf9\u5e94VkPipeline\u5bf9\u8c61\uff0c\u5b83\u63cf\u8ff0\u4e86\u663e\u5361\u7684\u53ef\u914d\u7f6e\u72b6\u6001\uff0c\u6bd4\u5982\u89c6\u53e3\u5927\u5c0f\u548c\u6df1\u5ea6\u7f13\u51b2\u64cd\u4f5c\uff0c\u4ee5\u53ca\u4f7f\u7528VkShaderModule\u5bf9\u8c61\u7684\u53ef\u7f16\u7a0b\u72b6\u6001\u3002VkShaderModule\u5bf9\u8c61\u7531\u7740\u8272\u5668\u5b57\u8282\u7801\u521b\u5efa\uff0c\u9a71\u52a8\u7a0b\u5e8f\u8fd8\u77e5\u9053\u56fe\u5f62\u7ba1\u7ebf\u4f7f\u7528\u4e86\u54ea\u4e9b\u6e32\u67d3\u76ee\u6807\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Vulkan\u4e0e\u4e4b\u524d\u7684\u56fe\u5f62API\u76f8\u6bd4\uff0c\u4e00\u4e2a\u6700\u5927\u7684\u4e0d\u540c\u4e4b\u5904\u662f\u51e0\u4e4e\u6240\u6709\u7684\u56fe\u5f62\u7ba1\u7ebf\u914d\u7f6e\u90fd\u9700\u8981\u63d0\u524d\u8fdb\u884c\u3002\u5982\u679c\u6211\u4eec\u60f3\u8981\u4f7f\u7528\u53e6\u5916\u4e00\u4e2a\u7740\u8272\u5668\u6216\u8005\u9876\u70b9\u5e03\u5c40\uff0c\u5c31\u9700\u8981\u91cd\u65b0\u521b\u5efa\u6574\u4e2a\u56fe\u5f62\u7ba1\u7ebf\u3002\u8fd9\u610f\u5473\u7740\u6211\u4eec\u5fc5\u987b\u63d0\u524d\u521b\u5efa\u51fa\u6240\u6709\u9700\u8981\u7684\u56fe\u5f62\u7ba1\u7ebf\uff0c\u5728\u9700\u8981\u65f6\u76f4\u63a5\u4f7f\u7528\u5df2\u7ecf\u521b\u5efa\u597d\u7684\u56fe\u5f62\u7ba1\u7ebf\u3002\u56fe\u5f62\u7ba1\u7ebf\u53ea\u6709\u5f88\u5c11\u4e00\u90e8\u5206\u914d\u7f6e\u53ef\u4ee5\u52a8\u6001\u4fee\u6539\uff0c\u6bd4\u5982\u89c6\u53e3\u5927\u5c0f\u548c\u6e05\u9664\u989c\u8272\u3002\u56fe\u5f62\u7ba1\u7ebf\u7684\u6240\u6709\u72b6\u6001\u4e5f\u9700\u8981\u663e\u5f0f\u5730\u63cf\u8ff0\uff0c\u6bd4\u5982\uff0c\u9ed8\u8ba4\u7684\u989c\u8272\u6df7\u5408\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u6709\u70b9\u7c7b\u4f3c\u4e8e\u9884\u7f16\u8bd1\u800c\u4e0d\u662f\u5373\u65f6\u7f16\u8bd1\uff0c\u8fd9\u6837\u505a\uff0c\u9a71\u52a8\u7a0b\u5e8f\u53ef\u4ee5\u6709\u66f4\u5927\u7684\u4f18\u5316\u7a7a\u95f4\uff0c\u5e76\u4e14\u4ee5\u56fe\u5f62\u7ba1\u7ebf\u4e3a\u5207\u6362\u5355\u4f4d\uff0c\u6e32\u67d3\u6548\u679c\u7684\u9884\u671f\u4e5f\u53d8\u5f97\u5341\u5206\u5bb9\u6613\uff0c\u4e0d\u7528\u62c5\u5fc3\u5207\u6362\u65f6\uff0c\u9057\u6f0f\u67d0\u4e2a\u5fae\u5c0f\u7684\u8bbe\u7f6e\uff0c\u9020\u6210\u7ed3\u679c\u7684\u5de8\u5927\u5dee\u5f02\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa47\u6307\u4ee4\u6c60\u548c\u6307\u4ee4\u7f13\u51b2",children:"\u6b65\u9aa47\uff1a\u6307\u4ee4\u6c60\u548c\u6307\u4ee4\u7f13\u51b2"}),"\n",(0,i.jsx)(n.p,{children:"\u4e4b\u524d\u63d0\u5230\uff0cVulkan\u7684\u8bb8\u591a\u64cd\u4f5c(\u5982\u7ed8\u5236\u3001\u8ba1\u7b97)\u9700\u8981\u63d0\u4ea4\u5230\u961f\u5217\u624d\u80fd\u6267\u884c\u3002\u8fd9\u4e9b\u64cd\u4f5c\u9996\u5148\u88ab\u8bb0\u5f55\u5230\u4e00\u4e2aVkCommandBuffer\u5bf9\u8c61\u4e2d\uff0c\u7136\u540e\u624d\u80fd\u63d0\u4ea4\u7ed9\u961f\u5217\u3002VkCommandBuffer\u5bf9\u8c61\u7531\u4e00\u4e2a\u5173\u8054\u4e86\u7279\u5b9a\u961f\u5217\u65cf\u7684VkCommandPool\u5206\u914d\u800c\u6765\u3002\u4e3a\u4e86\u7ed8\u5236\u4e09\u89d2\u5f62\uff0c\u6211\u4eec\u9700\u8981\u8bb0\u5f55\u4ee5\u4e0b\u64cd\u4f5c\u5230VkCommandBuffer\u5bf9\u8c61\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f00\u59cb\u6e32\u67d3"}),"\n",(0,i.jsx)(n.li,{children:"\u7ed1\u5b9a\u56fe\u5f62\u7ba1\u7ebf"}),"\n",(0,i.jsx)(n.li,{children:"\u7ed8\u5236\u4e09\u89d2\u5f62\u7684\u9876\u70b9"}),"\n",(0,i.jsx)(n.li,{children:"\u7ed3\u675f\u6e32\u67d3"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u5e27\u7f13\u51b2\u7ed1\u5b9a\u7684\u56fe\u50cf\u4f9d\u8d56\u4e8e\u4ea4\u6362\u94fe\u63d0\u4f9b\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u6bcf\u4e2a\u56fe\u50cf\u521b\u5efa\u6307\u4ee4\u7f13\u51b2\uff0c\u5728\u7ed8\u5236\u65f6\uff0c\u76f4\u63a5\u4f7f\u7528\u5bf9\u5e94\u7684\u6307\u4ee4\u7f13\u51b2\u3002\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u5728\u6bcf\u4e00\u5e27\u91cd\u65b0\u5f55\u5236\u6307\u4ee4\u7f13\u51b2\uff0c\u4f46\u8fd9\u6837\u505a\u6548\u7387\u5f88\u4f4e\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa48\u4e3b\u5faa\u73af",children:"\u6b65\u9aa48\uff1a\u4e3b\u5faa\u73af"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06\u7ed8\u5236\u6307\u4ee4\u5305\u88c5\u8fdb\u6307\u4ee4\u7f13\u51b2\u540e\uff0c\u4e3b\u5faa\u73af\u53d8\u5f97\u975e\u5e38\u7b80\u5355\u3002\u6211\u4eec\u9996\u5148\u4f7f\u7528vkAcquireNextImageKHR\u51fd\u6570\u4ece\u4ea4\u6362\u94fe\u83b7\u53d6\u4e00\u5f20\u56fe\u50cf\u3002\u63a5\u7740\u4f7f\u7528vkQueueSubmit\u51fd\u6570\u63d0\u4ea4\u56fe\u50cf\u5bf9\u5e94\u7684\u6307\u4ee4\u7f13\u51b2\u3002\u6700\u540e\uff0c\u4f7f\u7528vkQueuePresentKHR\u51fd\u6570\u5c06\u56fe\u50cf\u8fd4\u56de\u7ed9\u4ea4\u6362\u94fe\uff0c\u5e76\u5c06\u56fe\u50cf\u663e\u793a\u5230\u5c4f\u5e55\u4e0a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u63d0\u4ea4\u7ed9\u961f\u5217\u7684\u64cd\u4f5c\u4f1a\u88ab\u5f02\u6b65\u6267\u884c\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4fe1\u53f7\u91cf\u7b49\u540c\u6b65\u63aa\u65bd\u6765\u786e\u4fdd\u64cd\u4f5c\u6309\u6b63\u786e\u7684\u987a\u5e8f\u6267\u884c\u3002\u7ed8\u5236\u6307\u4ee4\u5fc5\u987b\u5728\u83b7\u53d6\u56fe\u50cf\u4e4b\u540e\u624d\u80fd\u6267\u884c\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u5c4f\u5e55\u8bfb\u53d6\u56fe\u50cf\u6570\u636e\u7684\u65f6\u523b\uff0c\u7ed8\u5236\u64cd\u4f5c\u8fdb\u884c\u4e86\u6570\u636e\u5199\u5165\u8fd9\u6837\u7684\u8bfb\u5199\u51b2\u7a81\uff0c\u9020\u6210\u5c4f\u5e55\u663e\u793a\u7684\u6570\u636e\u5e76\u975e\u6765\u81ea\u540c\u4e00\u5e27\u3002\u540c\u6837\uff0cvkQueuePresentKHR\u51fd\u6570\u8c03\u7528\u9700\u8981\u7b49\u5230\u7ed8\u5236\u5b8c\u6210\u540e\u624d\u80fd\u6267\u884c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u901a\u8fc7\u7ed8\u5236\u4e00\u4e2a\u7b80\u5355\u7684\u4e09\u89d2\u5f62\u6765\u4f7f\u8bfb\u8005\u5feb\u901f\u4e86\u89e3\u4f7f\u7528Vulkan\u7684\u6b65\u9aa4\u3002\u4e00\u4e2a\u771f\u6b63\u7684\u5b9e\u9645\u7a0b\u5e8f\u4f1a\u5305\u542b\u66f4\u591a\u7684\u6b65\u9aa4\uff0c\u6bd4\u5982\u5206\u914d\u9876\u70b9\u7f13\u51b2\uff0c\u521b\u5efaUniform\u7f13\u51b2\uff0c\u4e0a\u4f20\u7eb9\u7406\u56fe\u50cf\u7b49\u7b49\u3002\u4e3a\u4e86\u964d\u4f4e\u5b66\u4e60\u96be\u5ea6\uff0c\u6211\u4eec\u4ece\u6700\u7b80\u5355\u7684\u5f62\u5f0f\u5f00\u59cb\uff0c\u9010\u6b65\u590d\u6742\u5316\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u7ed8\u5236\u4e00\u4e2a\u4e09\u89d2\u5f62\uff0c\u6211\u4eec\u9700\u8981\u7684\u6b65\u9aa4\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2aVkInstance"}),"\n",(0,i.jsx)(n.li,{children:"\u9009\u62e9\u4e00\u652f\u6301Vulkan\u7684\u56fe\u5f62\u8bbe\u5907(VkPhysicalDevice)"}),"\n",(0,i.jsx)(n.li,{children:"\u4e3a\u7ed8\u5236\u548c\u663e\u793a\u64cd\u4f5c\u521b\u5efaVkDevice\u548cVkQueue"}),"\n",(0,i.jsx)(n.li,{children:"\u521b\u5efa\u7a97\u53e3\uff0c\u7a97\u53e3\u8868\u9762\u548c\u4ea4\u6362\u94fe"}),"\n",(0,i.jsx)(n.li,{children:"\u5c06\u4ea4\u6362\u94fe\u56fe\u50cf\u5305\u88c5\u8fdbVkImageView"}),"\n",(0,i.jsx)(n.li,{children:"\u521b\u5efa\u6e32\u67d3\u8fc7\u7a0b(vkRenderPass)\u6307\u5b9a\u6e32\u67d3\u76ee\u6807\u548c\u6e32\u67d3\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.li,{children:"\u4e3a\u6e32\u67d3\u8fc7\u7a0b(vkRenderPass)\u521b\u5efa\u5e27\u7f13\u51b2(vkFrameBuffer)"}),"\n",(0,i.jsx)(n.li,{children:"\u914d\u7f6e\u56fe\u5f62\u7ba1\u7ebf"}),"\n",(0,i.jsx)(n.li,{children:"\u4e3a\u6bcf\u4e00\u4e2a\u4ea4\u6362\u94fe\u56fe\u50cf\u5206\u914d\u6307\u4ee4\u7f13\u51b2"}),"\n",(0,i.jsx)(n.li,{children:"\u4ece\u4ea4\u6362\u94fe\u83b7\u53d6\u56fe\u50cf\uff0c\u8bb0\u5f55\u7ed8\u5236\u64cd\u4f5c\u5230\u6307\u4ee4\u7f13\u51b2\uff0c\u63d0\u4ea4\u6307\u4ee4\u7f13\u51b2\uff0c\u8fd4\u56de\u56fe\u50cf\u5230\u4ea4\u6362\u94fe"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u770b\u8d77\u6765\u6b65\u9aa4\u5f88\u591a\uff0c\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u91cc\uff0c\u6211\u4eec\u4f1a\u5bf9\u6bcf\u4e2a\u6b65\u9aa4\u8fdb\u884c\u8be6\u7ec6\u5730\u8bf4\u660e\u3002\u5982\u679c\u4ee5\u540e\u4f60\u5bf9\u7a0b\u5e8f\u4e2d\u7684\u67d0\u4e2a\u6b65\u9aa4\u4e0e\u6574\u4e2a\u7a0b\u5e8f\u7684\u5173\u7cfb\u611f\u5230\u56f0\u60d1\uff0c\u53ef\u4ee5\u56de\u987e\u4e00\u4e0b\u672c\u7ae0\u5185\u5bb9\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"api\u4ecb\u7ecd",children:"API\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.h3,{id:"\u4ee3\u7801\u98ce\u683c",children:"\u4ee3\u7801\u98ce\u683c"}),"\n",(0,i.jsx)(n.p,{children:"Vulkan\u7684\u6240\u6709\u51fd\u6570\u3001\u679a\u4e3e\u548c\u7ed3\u6784\u4f53\u90fd\u5b9a\u4e49\u5728vulkan.h\u4e2d\uff0c\u53ef\u4ee5\u5728Vulkan SDK\u4e2d\u627e\u5230\u8fd9\u4e00\u5934\u6587\u4ef6\u3002\u4e0b\u4e00\u7ae0\u8282\uff0c\u6211\u4eec\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5Vulkan SDK\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Vulkan API\u7684\u51fd\u6570\u90fd\u5e26\u6709\u4e00\u4e2a\u5c0f\u5199\u7684vk\u524d\u7f00\uff0c\u679a\u4e3e\u548c\u7ed3\u6784\u4f53\u540d\u5e26\u6709\u4e00\u4e2aVk\u524d\u7f00\uff0c\u679a\u4e3e\u503c\u5e26\u6709\u4e00\u4e2aVK_\u524d\u7f00\u3002Vulkan\u5bf9\u7ed3\u6784\u4f53\u975e\u5e38\u4f9d\u8d56\uff0c\u5927\u91cf\u51fd\u6570\u7684\u53c2\u6570\u7531\u7ed3\u6784\u4f53\u63d0\u4f9b\uff0cVulkan\u521b\u5efa\u5bf9\u8c61\u7684\u4e00\u822c\u5f62\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'VkXXXCreateInfo createInfo = {};\ncreateInfo.sType = VK_STRUCTURE_TYPE_XXX_CREATE_INFO;\ncreateInfo.pNext = nullptr;\ncreateInfo.foo = ...;\ncreateInfo.bar = ...;\n\nVkXXX object;\nif (vkCreateXXX(&createInfo, nullptr, &object) != VK_SUCCESS) {\n    std::cerr << "failed to create object" << std::endl;\n    return false;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Vulkan\u7684\u8bb8\u591a\u7ed3\u6784\u4f53\u9700\u8981\u6211\u4eec\u8bbe\u7f6esType\u6765\u663e\u5f0f\u6307\u5b9a\u7ed3\u6784\u4f53\u7c7b\u578b\uff0c\u7ed3\u6784\u4f53\u7684pNext\u6210\u5458\u53ef\u4ee5\u6307\u5411\u4e00\u4e2a\u6269\u5c55\u7ed3\u6784\u4f53\uff0c\u672c\u6559\u7a0b\u4e0d\u4f7f\u7528\u5b83\uff0cpNext\u90fd\u8bbe\u7f6e\u4e3anullptr\u3002Vulkan\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61\u7684\u51fd\u6570\u90fd\u6709\u4e00\u4e2aVkAllocationCallbacks\u53c2\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u81ea\u5b9a\u4e49\u5185\u5b58\u5206\u914d\u5668\uff0c\u672c\u6559\u7a0b\u4e5f\u4e0d\u4f7f\u7528\u5b83\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3anullptr\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u51e0\u4e4e\u6240\u6709Vulkan\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2aVkResult\u6765\u8868\u793a\u6267\u884c\u7ed3\u679c\uff0c\u5b83\u7684\u503c\u8981\u4e48\u662fVK_SUCCESS\uff0c\u8981\u4e48\u662f\u4e00\u4e2a\u9519\u8bef\u4ee3\u7801\uff0cVulkan\u89c4\u8303\u6587\u6863\u63cf\u8ff0\u4e86\u8fd9\u4e9b\u51fd\u6570\u8fd4\u56de\u9519\u8bef\u7684\u542b\u4e49\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6821\u9a8c\u5c42",children:"\u6821\u9a8c\u5c42"}),"\n",(0,i.jsx)(n.p,{children:"\u4e4b\u524d\u63d0\u5230\uff0cVulkan\u7684\u8bbe\u8ba1\u76ee\u6807\u662f\u9ad8\u6027\u80fd\u3001\u4f4e\u9a71\u52a8\u7a0b\u5e8f\u5f00\u9500\u3002\u56e0\u6b64\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u53ea\u63d0\u4f9b\u4e86\u6709\u9650\u7684\u9519\u8bef\u68c0\u6d4b\u548c\u8c03\u8bd5\u529f\u80fd\u3002\u9a71\u52a8\u7a0b\u5e8f\u901a\u5e38\u4f1a\u5728\u53d1\u751f\u9519\u8bef\u65f6\u76f4\u63a5\u5d29\u6e83\uff0c\u800c\u4e0d\u662f\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\u4ee3\u7801\u3002\u8fd9\u53ef\u80fd\u5bfc\u81f4\u7a0b\u5e8f\u5728\u67d0\u79cd\u663e\u5361\u4e0a\u53ef\u4ee5\u5de5\u4f5c\uff0c\u4f46\u5728\u5176\u5b83\u663e\u5361\u4e0a\u51fa\u73b0\u9a71\u52a8\u7a0b\u5e8f\u5d29\u6e83\u7684\u60c5\u51b5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u542f\u7528Vulkan\u7684\u6821\u9a8c\u5c42(Validation layers)\u8fdb\u884c\u4e00\u4e9b\u9519\u8bef\u68c0\u67e5\u3002\u6821\u9a8c\u5c42\u662f\u4e00\u6bb5\u63d2\u5165\u5728Vulkan API\u548c\u9a71\u52a8\u7a0b\u5e8f\u4e4b\u95f4\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u6267\u884cVulkan API\u7684\u53c2\u6570\u68c0\u67e5\uff0c\u8ddf\u8e2a\u5185\u5b58\u5206\u914d\u7b49\u5de5\u4f5c\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u5f00\u53d1\u671f\u95f4\u5f00\u542f\u6821\u9a8c\u5c42\uff0c\u7136\u540e\u5728\u53d1\u5e03\u7a0b\u5e8f\u65f6\u5173\u95ed\u6821\u9a8c\u5c42\uff0c\u51cf\u5c11\u6027\u80fd\u635f\u5931\u3002\u6821\u9a8c\u5c42\u53ef\u4ee5\u5b8c\u5168\u81ea\u5df1\u7f16\u5199\uff0c\u4f46\u4e3a\u4e86\u65b9\u4fbf\uff0c\u6211\u4eec\u7684\u6559\u7a0b\u76f4\u63a5\u4f7f\u7528\u4e86Vulkan SDK\u63d0\u4f9b\u7684\u6807\u51c6\u6821\u9a8c\u5c42\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u6ce8\u518c\u56de\u8c03\u51fd\u6570\u63a5\u53d7\u6765\u81ea\u6821\u9a8c\u5c42\u7684\u8c03\u8bd5\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8eVulkan\u5bf9\u6bcf\u4e2a\u64cd\u4f5c\u90fd\u5f88\u660e\u786e\uff0c\u52a0\u4e4b\u6821\u9a8c\u5c42\u7684\u4f7f\u7528\uff0c\u56e0\u6b64\u8c03\u8bd5Vulkan\u7a0b\u5e8f\u8981\u6bd4\u8c03\u8bd5OpenGL\u548cDirect3D\u7684\u7a0b\u5e8f\u5bb9\u6613\u5f97\u591a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u914d\u7f6e\u5f00\u53d1\u73af\u5883\uff0c\u5f00\u59cbVulkan\u7f16\u7a0b\u4e4b\u65c5\u5427\uff01"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>c});var i=l(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);