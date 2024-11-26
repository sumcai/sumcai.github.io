"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[9935],{8317:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=s(4848),t=s(8453);const a={title:"\u5185\u5b58\u5206\u914d",description:"\u4ecb\u7ecdvulkan\u5185\u5b58\u5206\u914d",date:new Date("2024-10-03T00:00:00.000Z")},o="\u5185\u5b58\u5206\u914d",l={id:"guide/usage/memory_allocation",title:"\u5185\u5b58\u5206\u914d",description:"\u4ecb\u7ecdvulkan\u5185\u5b58\u5206\u914d",source:"@site/docs/guide/usage/11-memory_allocation.md",sourceDirName:"guide/usage",slug:"/guide/usage/memory_allocation",permalink:"/guide/usage/memory_allocation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\u5185\u5b58\u5206\u914d",description:"\u4ecb\u7ecdvulkan\u5185\u5b58\u5206\u914d",date:"2024-10-03T00:00:00.000Z"},sidebar:"VulkanGuide",previous:{title:"\u540c\u6b65",permalink:"/guide/usage/synchronization"},next:{title:"\u7a00\u758f\u8d44\u6e90",permalink:"/guide/usage/sparse_resources"}},i={},c=[{value:"\u4e8c\u6b21\u5206\u914d",id:"\u4e8c\u6b21\u5206\u914d",level:2},{value:"\u6570\u636e\u4f20\u8f93",id:"\u6570\u636e\u4f20\u8f93",level:2},{value:"\u5ef6\u8fdf\u5206\u914d",id:"\u5ef6\u8fdf\u5206\u914d",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5185\u5b58\u5206\u914d",children:"\u5185\u5b58\u5206\u914d"})}),"\n",(0,r.jsx)(n.p,{children:"\u5b66\u4f1a\u7ba1\u7406Vulkan\u4e2d\u7684\u8bbe\u5907\u5185\u5b58\u662f\u975e\u5e38\u91cd\u8981\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["Khronos \u5173\u4e8e Vulkan \u5185\u5b58\u7ba1\u7406\u7684\u4e24\u573a\u6f14\u8bb2\u662f\u5f88\u597d\u7684\u5b66\u4e60\u8d44\u6e90\uff1a",(0,r.jsx)(n.a,{href:"https://www.khronos.org/assets/uploads/developers/library/2018-vulkan-devday/03-Memory.pdf",children:"\u8499\u7279\u5229\u5c14 Vulkan Dev Day"}),"\uff08",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=rXSdDE7NWmA",children:"\u89c6\u9891"}),"\uff09\u548c ",(0,r.jsx)(n.a,{href:"https://www.khronos.org/assets/uploads/developers/library/2018-vulkanised/03-Steven-Tovey-VulkanMemoryManagement_Vulkanised2018.pdf",children:"2018 \u5e74 Vulkanised"}),"\uff08",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=zSG6dPq57P8",children:"\u89c6\u9891"}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7ba1\u7406\u5185\u5b58\u5e76\u4e0d\u5bb9\u6613\uff0c\u5f00\u53d1\u4eba\u5458\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator",children:"Vulkan Memory Allocator"})," \u5f00\u6e90\u5e93\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e8c\u6b21\u5206\u914d",children:"\u4e8c\u6b21\u5206\u914d"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 Vulkan \u4e2d\uff0c\u4e8c\u6b21\u5206\u914d\u662f\u4e00\u79cd\u4f18\u79c0\u7684\u505a\u6cd5\u3002\u6709\u4e00\u4e2a ",(0,r.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3/html/vkspec.html#limits-maxMemoryAllocationCount",children:"maxMemoryAllocationCount"}),"\u5c5e\u6027\uff0c\u5b83\u9650\u5236\u4e86\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u7684\u5206\u914d\u6570\u91cf\u3002OS/\u9a71\u52a8\u7a0b\u5e8f\u7ea7\u522b\u7684\u5185\u5b58\u5206\u914d\u548c\u91ca\u653e\u53ef\u80fd\u975e\u5e38\u6162\uff0c\u8fd9\u4e5f\u662f\u4f7f\u7528\u4e8c\u6b21\u5206\u914d\u7684\u53e6\u4e00\u4e2a\u539f\u56e0\u3002Vulkan \u5e94\u7528\u5e94\u5148\u521b\u5efa\u4e00\u4e2a\u5927\u7684\u5206\u914d\u533a\u57df\uff0c\u7136\u540e\u81ea\u884c\u7ba1\u7406\u5b83\u4eec\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://docs.vulkan.org/guide/latest/_images/memory_allocation_sub_allocation.png",alt:"memory_allocation_sub_allocation.png"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6570\u636e\u4f20\u8f93",children:"\u6570\u636e\u4f20\u8f93"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3/html/vkspec.html#VkPhysicalDeviceType",children:"VkPhysicalDeviceType"})," \u4e3b\u8981\u6709\u4e24\u79cd\u7c7b\u578b\u7684 GPU\uff0c\u79bb\u6563\u548c\u96c6\u6210\uff08\u4e5f\u79f0\u4e3a UMA \u7edf\u4e00\u5185\u5b58\u67b6\u6784\uff09\uff0c\u4e86\u89e3\u4e24\u8005\u7684\u533a\u522b\u5bf9\u4e8e\u6027\u80fd\u6765\u8bf4\u975e\u5e38\u91cd\u8981\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u72ec\u7acb\u663e\u5361\u8bbe\u5907\u6709\u81ea\u5df1\u7684\u4e13\u7528\u5185\u5b58\uff0c\u6570\u636e\u901a\u8fc7\u603b\u7ebf\uff08\u4f8b\u5982 PCIe\uff09\u8fdb\u884c\u4f20\u8f93\uff0c\u7531\u4e8e\u9650\u5236\u4e8e\u4f20\u8f93\u6570\u636e\u7684\u7269\u7406\u5e26\u5bbd\u901f\u5ea6\uff0c\u8fd9\u901a\u5e38\u662f\u6027\u80fd\u7684\u74f6\u9888\u3002\u4e00\u4e9b\u7269\u7406\u8bbe\u5907\u4f1a\u516c\u5f00\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"VK_QUEUE_TRANSFER_BIT"}),"\u961f\u5217\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e13\u7528\u961f\u5217\u7528\u6765\u4f20\u8f93\u6570\u636e\u3002\u901a\u5e38\u7684\u505a\u6cd5\u662f\u521b\u5efa\u4e00\u4e2a",(0,r.jsx)(n.em,{children:"\u6682\u5b58\u7f13\u51b2\u533a"}),"\uff0c\u5c06\u4e3b\u673a\u6570\u636e\u590d\u5236\u5230\u5176\u4e2d\uff0c\u7136\u540e\u518d\u901a\u8fc7\u547d\u4ee4\u7f13\u51b2\u533a\u6307\u4ee4\u4ee5\u590d\u5236\u6570\u636e\u5230\u8bbe\u5907\u5185\u5b58\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["UMA \u7cfb\u7edf\u7684\u8bbe\u5907\u548c\u4e3b\u673a\u4e4b\u95f4\u5171\u4eab\u5185\u5b58\uff0c\u8be5\u5185\u5b58\u4f7f\u7528",(0,r.jsx)(n.code,{children:"VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT | VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT"}),"\u7ec4\u5408\u3002\u8fd9\u6837\u505a\u7684\u7f3a\u70b9\u662f\u5fc5\u987b\u4e0e GPU \u5171\u4eab\u7cfb\u7edf\u5185\u5b58\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u4e0d\u8db3\uff0c\u4f18\u70b9\u662f\u65e0\u9700\u521b\u5efa",(0,r.jsx)(n.em,{children:"\u6682\u5b58\u7f13\u51b2\u533a"}),"\uff0c\u56e0\u800c\u4f20\u8f93\u5f00\u9500\u5927\u5927\u964d\u4f4e\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://docs.vulkan.org/guide/latest/_images/memory_allocation_transfer.png",alt:"memory_allocation_transfer.png"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5ef6\u8fdf\u5206\u914d",children:"\u5ef6\u8fdf\u5206\u914d"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728tile-based\u7684\u67b6\u6784\u4e0a\uff08\u51e0\u4e4e\u6240\u6709\u7684\u79fb\u52a8 GPU\uff09\uff0c\u5185\u5b58\u7c7b\u578b",(0,r.jsx)(n.code,{children:"LAZILY_ALLOCATED_BIT"}),"\u6ca1\u6709\u4fdd\u5b58\u5728\u5b9e\u9645\u7684\u5185\u5b58\u4e2d\u3002\u5b83\u7528\u4e8e\u4fdd\u5b58tile\u5185\u5b58\u4e2d\u7684\u9644\u4ef6\uff0c\u4f8b\u5982subpasses\u4e4b\u95f4\u7684G-buffer\u3001\u6df1\u5ea6\u7f13\u51b2\u533a\u6216\u591a\u91c7\u6837\u56fe\u50cf\uff0c\u8fd9\u8282\u7701\u4e86\u5c06\u56fe\u50cf\u5199\u56de\u5185\u5b58\u7684\u5e26\u5bbd\u5f00\u9500\u3002\u53ef\u4ee5\u5728 Khronos \u7684 ",(0,r.jsx)(n.a,{href:"https://github.com/KhronosGroup/Vulkan-Samples/tree/main/samples/performance/render_passes",children:"Render Pass"})," \u548c ",(0,r.jsx)(n.a,{href:"https://github.com/KhronosGroup/Vulkan-Samples/tree/main/samples/performance/subpasses",children:"Subpass"})," \u6559\u7a0b\u4e2d\u9605\u8bfb\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);