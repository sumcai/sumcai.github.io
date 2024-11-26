"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[2849],{8880:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>t,frontMatter:()=>_,metadata:()=>o,toc:()=>l});var i=s(4848),r=s(8453);const _={title:"\u540c\u6b65",description:"\u4ecb\u7ecdvulkan\u540c\u6b65\u6982\u5ff5",date:new Date("2024-10-03T00:00:00.000Z")},c="\u540c\u6b65",o={id:"guide/usage/synchronization",title:"\u540c\u6b65",description:"\u4ecb\u7ecdvulkan\u540c\u6b65\u6982\u5ff5",source:"@site/docs/guide/usage/10-synchronization.md",sourceDirName:"guide/usage",slug:"/guide/usage/synchronization",permalink:"/guide/usage/synchronization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u540c\u6b65",description:"\u4ecb\u7ecdvulkan\u540c\u6b65\u6982\u5ff5",date:"2024-10-03T00:00:00.000Z"},sidebar:"VulkanGuide",previous:{title:"pNext\u548csType\u7528\u6cd5",permalink:"/guide/usage/pNext_sType"},next:{title:"\u5185\u5b58\u5206\u914d",permalink:"/guide/usage/memory_allocation"}},a={},l=[{value:"\u6821\u9a8c",id:"\u6821\u9a8c",level:2},{value:"\u7ba1\u7ebf\u5c4f\u969c",id:"\u7ba1\u7ebf\u5c4f\u969c",level:2},{value:"VK_KHR_synchronization2",id:"vk_khr_synchronization2",level:2},{value:"\u91cd\u65b0\u8bbe\u8ba1 Pipeline \u9636\u6bb5\u548c Access Flag",id:"\u91cd\u65b0\u8bbe\u8ba1-pipeline-\u9636\u6bb5\u548c-access-flag",level:3},{value:"\u6dfb\u52a0\u8bbe\u7f6e\u4e8b\u4ef6\u7684\u5c4f\u969c",id:"\u6dfb\u52a0\u8bbe\u7f6e\u4e8b\u4ef6\u7684\u5c4f\u969c",level:4},{value:"\u590d\u7528\u76f8\u540c\u7684\u7ba1\u7ebf\u9636\u6bb5\u548c\u8bbf\u95ee\u6807\u5fd7",id:"\u590d\u7528\u76f8\u540c\u7684\u7ba1\u7ebf\u9636\u6bb5\u548c\u8bbf\u95ee\u6807\u5fd7",level:3},{value:"VkSubpassDependency",id:"vksubpassdependency",level:3},{value:"\u62c6\u5206\u7ba1\u7ebf\u9636\u6bb5\u548c\u8bbf\u95ee\u63a9\u7801",id:"\u62c6\u5206\u7ba1\u7ebf\u9636\u6bb5\u548c\u8bbf\u95ee\u63a9\u7801",level:3},{value:"\u62c6\u5206 VK_PIPELINE_STAGE_VERTEX_INPUT_BIT",id:"\u62c6\u5206-vk_pipeline_stage_vertex_input_bit",level:4},{value:"\u62c6\u5206 VK_PIPELINE_STAGE_ALL_TRANSFER_BIT",id:"\u62c6\u5206-vk_pipeline_stage_all_transfer_bit",level:4},{value:"\u62c6\u5206 VK_ACCESS_SHADER_READ_BIT",id:"\u62c6\u5206-vk_access_shader_read_bit",level:4},{value:"\u4e3a\u9884\u5149\u6805\u5316\u529f\u80fd\u5408\u5e76\u7740\u8272\u5668\u9636\u6bb5",id:"\u4e3a\u9884\u5149\u6805\u5316\u529f\u80fd\u5408\u5e76\u7740\u8272\u5668\u9636\u6bb5",level:4},{value:"VK_ACCESS_SHADER_WRITE_BIT\u589e\u52a0\u522b\u540d",id:"vk_access_shader_write_bit\u589e\u52a0\u522b\u540d",level:3},{value:"\u5f03\u7528TOP_OF_PIPE \u548c BOTTOM_OF_PIPE",id:"\u5f03\u7528top_of_pipe-\u548c-bottom_of_pipe",level:3},{value:"\u4f7f\u7528\u65b0\u7684\u56fe\u50cf\u5e03\u5c40",id:"\u4f7f\u7528\u65b0\u7684\u56fe\u50cf\u5e03\u5c40",level:3},{value:"\u65b0\u7684\u63d0\u4ea4\u6d41\u7a0b",id:"\u65b0\u7684\u63d0\u4ea4\u6d41\u7a0b",level:3},{value:"\u4eff\u771f\u5c42",id:"\u4eff\u771f\u5c42",level:3},{value:"\u540c\u6b65\u4ee3\u7801\u793a\u4f8b",id:"\u540c\u6b65\u4ee3\u7801\u793a\u4f8b",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u540c\u6b65",children:"\u540c\u6b65"})}),"\n",(0,i.jsxs)(n.p,{children:["\u540c\u6b65\u662f Vulkan \u6700\u5f3a\u5927\u4f46\u4e5f\u6700\u590d\u6742\u7684\u5185\u5bb9\u4e4b\u4e00\uff0c\u5728vulkan\u4e2d\uff0c\u7531\u5e94\u7528\u5f00\u53d1\u4eba\u5458\u8d1f\u8d23\u4f7f\u7528\u5404\u79cd ",(0,i.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3/html/vkspec.html#synchronization",children:"Vulkan \u540c\u6b65\u539f\u8bed"}),"\u6765\u7ba1\u7406\u540c\u6b65\u3002\u540c\u6b65\u4f7f\u7528\u4e0d\u5f53\u4f1a\u5bfc\u81f4\u96be\u4ee5\u53d1\u73b0\u7684\u9519\u8bef\uff0c\u800c\u4e14\u53ef\u80fd\u4f1a\u8ba9GPU\u4ea7\u751f\u4e0d\u5fc5\u8981\u5730\u7b49\u5f85\u800c\u5f71\u54cd\u6027\u80fd\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Khronos \u63d0\u4f9b\u4e86",(0,i.jsx)(n.a,{href:"https://github.com/KhronosGroup/Vulkan-Docs/wiki/Synchronization-Examples",children:"\u4e00\u7ec4\u793a\u4f8b"}),"\u548c\u6587\u7ae0",(0,i.jsx)(n.a,{href:"https://www.khronos.org/blog/understanding-vulkan-synchronization",children:"\u4e86\u89e3 Vulkan \u540c\u6b65"}),"\uff0c\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528\u4e00\u4e9b\u540c\u6b65\u539f\u8bed\u3002\u6b64\u5916\uff0c\u8fd8\u6709 Tobias Hector \u5728 Vulkan \u6f14\u8bb2\u4e2d\u7684\u5185\u5bb9\uff1a[ppt\u7b2c1\u90e8\u5206](",(0,i.jsx)(n.a,{href:"https://www.khronos.org/assets/uploads/developers/library/2017-vulkan-devu-vancouver/009",children:"https://www.khronos.org/assets/uploads/developers/library/2017-vulkan-devu-vancouver/009"})," - Synchronization - Keeping Your Device Fed.pdf)\uff08",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=YkJ4hKCPjm0",children:"\u89c6\u98911"}),"\uff09\u548c[ppt\u7b2c2\u90e8\u5206](",(0,i.jsx)(n.a,{href:"https://www.khronos.org/assets/uploads/developers/library/2018-vulkanised/06-Keeping",children:"https://www.khronos.org/assets/uploads/developers/library/2018-vulkanised/06-Keeping"})," Your Device Fed v4_Vulkanised2018.pdf)\uff08",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=5GDg4OxkSEc",children:"\u89c6\u98912"}),"\uff09\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u56fe\u662f",(0,i.jsx)(n.code,{children:"VkEvent"})," \u3001 ",(0,i.jsx)(n.code,{children:"VkFence"}),"\u548c ",(0,i.jsx)(n.code,{children:"VkSemaphore"}),"\u4e4b\u95f4\u5dee\u5f02\u7684\u793a\u4f8b\u56fe\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"synchronization_overview.png",src:s(5020).A+"",width:"937",height:"356"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6821\u9a8c",children:"\u6821\u9a8c"}),"\n",(0,i.jsxs)(n.p,{children:["Khronos \u6821\u9a8c\u5c42\u5df2\u7ecf\u5b9e\u73b0\u4e86\u4e00\u4e9b",(0,i.jsx)(n.a,{href:"https://vulkan.lunarg.com/doc/sdk/latest/windows/synchronization_usage.html",children:"\u540c\u6b65\u9a8c\u8bc1"}),"\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.a,{href:"https://vulkan.lunarg.com/sdk/home",children:"Vulkan SDK"})," \u9644\u5e26\u7684 ",(0,i.jsx)(n.a,{href:"https://vulkan.lunarg.com/doc/sdk/latest/windows/vkconfig.html",children:"Vulkan Configurator"}),"\u6765\u542f\u7528\u3002\u8fd9\u7bc7 ",(0,i.jsx)(n.a,{href:"https://www.khronos.org/blog/a-guide-to-vulkan-synchronization-validation",children:"Khronos \u535a\u5ba2"}),"\u4e5f\u8ba8\u8bba\u4e86",(0,i.jsx)(n.a,{href:"https://www.lunarg.com/wp-content/uploads/2020/09/Final_LunarG_Guide_to_Vulkan-Synchronization_Validation_08_20.pdf",children:"\u540c\u6b65\u9a8c\u8bc1\u767d\u76ae\u4e66"}),"\u7684\u5185\u5bb9\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7ba1\u7ebf\u5c4f\u969c",children:"\u7ba1\u7ebf\u5c4f\u969c"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3/html/vkspec.html#synchronization-pipeline-barriers",children:"Pipeline Barriers"}),"\u7528\u4e8e\u5728\u6267\u884c\u547d\u4ee4\u7f13\u51b2\u533a\u65f6\u63a7\u5236\u7ba1\u7ebf\u7684\u54ea\u4e9b\u6b65\u9aa4\u7b49\u5f85\u524d\u9762\u7684\u6b65\u9aa4\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"synchronization_pipeline_barrieres.png",src:s(1151).A+"",width:"1080",height:"568"})}),"\n",(0,i.jsx)(n.p,{children:"Pipeline Barriers \u4e00\u5f00\u59cb\u53ef\u80fd\u5f88\u96be\u7406\u89e3\uff0c\u4e0b\u9762\u4e00\u4e9b Khronos \u6f14\u8bb2\u548c\u6587\u7ae0\u5bf9\u5176\u8fdb\u884c\u4e86\u6df1\u5165\u5730\u8bb2\u89e3\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[Vulkanised 2018 - \u7ba1\u9053\u5c4f\u969c\u7684\u5e95\u5c42\u4e4b\u8c1c](",(0,i.jsx)(n.a,{href:"https://www.khronos.org/assets/uploads/developers/library/2018-vulkanised/05-The",children:"https://www.khronos.org/assets/uploads/developers/library/2018-vulkanised/05-The"})," low-level mysteries of pipeline barriers_Vulkanised2018.pdf)\uff08",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=e0ySJ9Qzvrs",children:"\u89c6\u9891"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["[Vulkanised 2019 - Live Long and Optimize](",(0,i.jsx)(n.a,{href:"https://www.khronos.org/assets/uploads/developers/library/2019-vulkanised/02_Live",children:"https://www.khronos.org/assets/uploads/developers/library/2019-vulkanised/02_Live"})," Long And Optimise-May19.pdf) \uff08",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=ch6161wvME8&t=463s",children:"\u89c6\u9891"}),"\uff09\u4eceppt12 \u5f00\u59cb"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gpuopen.com/learn/vulkan-barriers-explained/",children:"\u535a\u6587\uff1aVulkan \u5c4f\u969c\u89e3\u91ca"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://themaister.net/blog/2019/08/14/yet-another-blog-explaining-vulkan-synchronization/",children:"\u535a\u6587\uff1a\u89e3\u91ca Vulkan \u540c\u6b65"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"vk_khr_synchronization2",children:"VK_KHR_synchronization2"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_KHR_synchronization2"}),"\u6269\u5c55\u5bf9\u539f\u59cb\u7684\u6838\u5fc3\u540c\u6b65 API \u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u964d\u4f4e\u4e86\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u7684\u96be\u5ea6\uff0c\u5e76\u6dfb\u52a0\u4e86\u4e00\u4e9b\u9644\u52a0\u529f\u80fd\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_KHR_synchronization2"}),"\u5728 Vulkan 1.3 \u4e2d\u63d0\u5347\u4e3a\u6838\u5fc3\u6269\u5c55"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u6269\u5c55\u5bf9\u7ba1\u9053\u5c4f\u969c\u3001\u4e8b\u4ef6\u3001\u56fe\u50cf\u5e03\u5c40\u8f6c\u6362\u548c\u961f\u5217\u63d0\u4ea4\u8fdb\u884c\u4e86\u6539\u8fdb\u3002\u4e0b\u6587\u4ecb\u7ecd\u4e86 Vulkan \u539f\u59cb\u540c\u6b65\u64cd\u4f5c\u4e0e",(0,i.jsx)(n.code,{children:"VK_KHR_synchronization2"}),"\u6269\u5c55\u529f\u80fd\u7684\u533a\u522b\uff0c\u8fd8\u6709\u4e00\u4e9b\u793a\u4f8b\u8bf4\u660e\u4e86\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u5982\u4f55\u4f7f\u7528\u8be5\u6269\u5c55\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u91cd\u65b0\u8bbe\u8ba1-pipeline-\u9636\u6bb5\u548c-access-flag",children:"\u91cd\u65b0\u8bbe\u8ba1 Pipeline \u9636\u6bb5\u548c Access Flag"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u6269\u5c55\u7684\u4e00\u4e2a\u4e3b\u8981\u53d8\u5316\u662f\u5728 memory barrier \u7ed3\u6784\u4e2d\u52a0\u5165\u4e86 pipeline stages \u548c access flags\uff0c\u4f7f\u5f97\u4e24\u8005\u4e4b\u95f4\u7684\u8054\u7cfb\u66f4\u52a0\u660e\u663e\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u589e\u52a0\u7684\u65b0\u578b\u7ed3\u6784\u4f53",(0,i.jsx)(n.code,{children:"VkDependencyInfoKHR"}),"\u5c06\u6240\u6709\u5c4f\u969c\u5305\u88c5\u5230\u4e00\u8d77\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"VK_KHR_synchronization2_stage_access",src:s(8272).A+"",width:"1004",height:"631"})}),"\n",(0,i.jsx)(n.h4,{id:"\u6dfb\u52a0\u8bbe\u7f6e\u4e8b\u4ef6\u7684\u5c4f\u969c",children:"\u6dfb\u52a0\u8bbe\u7f6e\u4e8b\u4ef6\u7684\u5c4f\u969c"}),"\n",(0,i.jsxs)(n.p,{children:["\u968f\u7740",(0,i.jsx)(n.code,{children:"VkDependencyInfoKHR"}),"\u7684\u5f15\u5165\uff0c",(0,i.jsx)(n.code,{children:"vkCmdSetEvent2KHR"}),"\u4e0e",(0,i.jsx)(n.code,{children:"vkCmdSetEvent"}),"\u76f8\u6bd4\uff0c\u589e\u52a0\u4e86\u6dfb\u52a0\u5c4f\u969c\u7684\u80fd\u529b\uff0c\u8fd9\u4f7f\u5f97",(0,i.jsx)(n.code,{children:"VkEvent"}),"\u66f4\u6709\u7528\u9014\u3002\u7531\u4e8e synchronization2 \u5b9e\u73b0\u7684",(0,i.jsx)(n.code,{children:"VkEvent"}),"\u53ef\u80fd\u4e0e Vulkan 1.2 \u6709\u5f88\u5927\u5dee\u5f02\uff0c\u56e0\u6b64\u4e25\u7981\u5c06\u6269\u5c55\u548c\u6838\u5fc3 API \u8c03\u7528\u7684",(0,i.jsx)(n.code,{children:"VkEvent"}),"\u6df7\u5408\u3002\u4f8b\u5982\uff0c\u4e0d\u80fd\u5148\u8c03\u7528",(0,i.jsx)(n.code,{children:"vkCmdSetEvent2KHR()"}),"\uff0c\u7136\u540e\u518d\u8c03\u7528",(0,i.jsx)(n.code,{children:"vkCmdWaitEvents()"})," \u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u590d\u7528\u76f8\u540c\u7684\u7ba1\u7ebf\u9636\u6bb5\u548c\u8bbf\u95ee\u6807\u5fd7",children:"\u590d\u7528\u76f8\u540c\u7684\u7ba1\u7ebf\u9636\u6bb5\u548c\u8bbf\u95ee\u6807\u5fd7"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e32\u4f4d\u7684",(0,i.jsx)(n.code,{children:"VkAccessFlag"}),"\u7528\u5b8c\u800c\u521b\u5efa\u4e8664\u4f4d\u7684",(0,i.jsx)(n.code,{children:"VkAccessFlags2KHR"}),"\u3002\u4e3a\u4e86\u9632\u6b62",(0,i.jsx)(n.code,{children:"VkPipelineStageFlags"}),"\u51fa\u73b0\u540c\u6837\u7684\u95ee\u9898\uff0c\u8fd8\u521b\u5efa\u4e8664 \u4f4d\u7684",(0,i.jsx)(n.code,{children:"VkPipelineStageFlags2KHR"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5e76\u975e\u6240\u6709\u7684 C/C++ \u7f16\u8bd1\u5668\u90fd\u63d0\u4f9b\u4e8664\u4f4d\u679a\u4e3e\u7c7b\u578b\uff0c\u56e0\u6b64\u65b0\u5b57\u6bb5\u4f7f\u7528\u4e86",(0,i.jsx)(n.code,{children:"static const"}),"\u503c\u800c\u4e0d\u662f\u679a\u4e3e\u3002\u6240\u4ee5\u6ca1\u6709",(0,i.jsx)(n.code,{children:"VkPipelineStageFlagBits"}),"\u548c",(0,i.jsx)(n.code,{children:"VkAccessFlagBits"}),"\u7684\u7b49\u6548\u7c7b\u578b\u3002\u4e00\u4e9b\u51fd\u6570\u4f8b\u5982",(0,i.jsx)(n.code,{children:"vkCmdWriteTimestamp()"}),"\u53ea\u80fd\u4f20\u5165\u5177\u4f53\u503c\uff0c\u800c\u4e0d\u662f\u591a\u4e2a\u4f4d\u7684\u63a9\u7801\u3002\u8fd9\u4e9b\u51fd\u6570\u9700\u8981\u8f6c\u6362\u4e3a\u4f7f\u7528",(0,i.jsx)(n.code,{children:"Flags"}),"\u7c7b\u578b\uff0c\u6240\u4ee5\u5e94\u7528\u4ee3\u7801\u9700\u8fdb\u884c\u9002\u5f53\u7684\u8c03\u6574\uff0c\u5c31\u50cf",(0,i.jsx)(n.code,{children:"vkCmdWriteTimestamp2KHR()"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u65b0\u6807\u5fd7\u5305\u542b\u4e86\u4e0e\u539f\u59cb\u540c\u6b65\u6807\u5fd7\u76f8\u540c\u7684\u4f4d\uff0c\u5177\u6709\u76f8\u540c\u7684\u57fa\u540d\u79f0\u548c\u503c\u3002 \u65e7\u6807\u5fd7\u53ef\u4ee5\u76f4\u63a5\u5728\u65b0 API \u4e2d\u4f7f\u7528\uff0c\u8fd9 2 \u4e2a\u793a\u4f8b\u663e\u793a\u4e86\u547d\u540d\u5dee\u5f02\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT"}),"\u8f6c\u5316\u4e3a",(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_COMPUTE_SHADER_BIT_KHR"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VK_ACCESS_SHADER_READ_BIT"}),"\u8f6c\u5316\u4e3a",(0,i.jsx)(n.code,{children:"VK_ACCESS_2_SHADER_READ_BIT_KHR"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"vksubpassdependency",children:"VkSubpassDependency"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VkSubpassDependency"}),"\u7684\u7ba1\u7ebf\u9636\u6bb5\u548c\u8bbf\u95ee\u6807\u5fd7\u8f6c\u6362\u5230\u65f6\uff0c\u9700\u4f7f\u7528",(0,i.jsx)(n.code,{children:"VkMemoryBarrier2KHR"}),"\u4f20\u5165",(0,i.jsx)(n.code,{children:"VkSubpassDependency2"}),"\u7684",(0,i.jsx)(n.code,{children:"pNext"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// Without VK_KHR_synchronization2\nVkSubpassDependency dependency = {\n    .srcSubpass = 0,\n    .dstSubpass = 1,\n    .srcStageMask = VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT |\n                    VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT,\n    .dstStageMask = VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT,\n    .srcAccessMask = VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT,\n    .dstAccessMask = VK_ACCESS_INPUT_ATTACHMENT_READ_BIT,\n    .dependencyFlags = VK_DEPENDENCY_BY_REGION_BIT\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8f6c\u5316\u4e3a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// With VK_KHR_synchronization2\nVkMemoryBarrier2KHR memoryBarrier = {\n    .sType = VK_STRUCTURE_TYPE_MEMORY_BARRIER_2_KHR,\n    .pNext = nullptr,\n    .srcStageMask = VK_PIPELINE_STAGE_2_EARLY_FRAGMENT_TESTS_BIT_KHR |\n                    VK_PIPELINE_STAGE_2_LATE_FRAGMENT_TESTS_BIT_KHR,\n    .dstStageMask = VK_PIPELINE_STAGE_2_FRAGMENT_SHADER_BIT_KHR,\n    .srcAccessMask = VK_ACCESS_2_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT_KHR,\n    .dstAccessMask = VK_ACCESS_2_INPUT_ATTACHMENT_READ_BIT_KHR\n};\n\n// The 4 fields unset are ignored according to the spec\n// When VkMemoryBarrier2KHR is passed into pNext\nVkSubpassDependency2 dependency = {\n    .sType = VK_STRUCTURE_TYPE_SUBPASS_DEPENDENCY_2,\n    .pNext = &memoryBarrier,\n    .srcSubpass = 0,\n    .dstSubpass = 1,\n    .dependencyFlags = VK_DEPENDENCY_BY_REGION_BIT\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u62c6\u5206\u7ba1\u7ebf\u9636\u6bb5\u548c\u8bbf\u95ee\u63a9\u7801",children:"\u62c6\u5206\u7ba1\u7ebf\u9636\u6bb5\u548c\u8bbf\u95ee\u63a9\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e00\u4e9b",(0,i.jsx)(n.code,{children:"VkAccessFlags"}),"\u548c",(0,i.jsx)(n.code,{children:"VkPipelineStageFlags"}),"\u7684\u503c\u5728\u786c\u4ef6\u4e2d\u76ee\u6807\u4e0d\u660e\u786e\uff0c\u65b0\u7684",(0,i.jsx)(n.code,{children:"VkAccessFlags2KHR"}),"\u548c",(0,i.jsx)(n.code,{children:"VkPipelineStageFlags2KHR"}),"\u5c06\u8fd9\u4e9b\u503c\u7684\u573a\u666f\u5206\u5f00\uff0c\u540c\u65f6\u4fdd\u7559\u65e7\u503c\u4ee5\u517c\u5bb9\u65e7\u4ee3\u7801\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u62c6\u5206-vk_pipeline_stage_vertex_input_bit",children:"\u62c6\u5206 VK_PIPELINE_STAGE_VERTEX_INPUT_BIT"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_VERTEX_INPUT_BIT"}),"\uff08\u73b0\u5728\u662f",(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_VERTEX_INPUT_BIT_KHR"}),"\uff09\uff0c\u4ee5\u524d\u7d22\u5f15\u8f93\u5165\u548c\u9876\u70b9\u8f93\u5165\u7ec4\u5408\u5728\u4e00\u4e2a\u7ba1\u7ebf\u9636\u6bb5\uff0c\u73b0\u5728\u5404\u81ea\u62c6\u5206\u4e3a1\u4e2a\u65b0\u9636\u6bb5\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_INDEX_INPUT_BIT_KHR"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_VERTEX_ATTRIBUTE_INPUT_BIT_KHR"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u62c6\u5206-vk_pipeline_stage_all_transfer_bit",children:"\u62c6\u5206 VK_PIPELINE_STAGE_ALL_TRANSFER_BIT"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_ALL_TRANSFER_BIT"}),"\uff08\u73b0\u5728\u662f",(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_ALL_TRANSFER_BIT_KHR"}),"\uff09\uff0c\u4ece\u4e00\u4e2a\u7ec4\u5408\u7684\u7ba1\u7ebf\u9636\u6bb5\u62c6\u5206\u4e3a 4 \u4e2a\u65b0\u9636\u6bb5\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_COPY_BIT_KHR"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_RESOLVE_BIT_KHR"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_BLIT_BIT_KHR"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_CLEAR_BIT_KHR"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u62c6\u5206-vk_access_shader_read_bit",children:"\u62c6\u5206 VK_ACCESS_SHADER_READ_BIT"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_ACCESS_SHADER_READ_BIT"}),"\uff08\u73b0\u5728\u662f",(0,i.jsx)(n.code,{children:"VK_ACCESS_2_SHADER_READ_BIT_KHR"}),"\uff09\uff0c\u4ece\u5408\u5e76\u6807\u5fd7\u62c6\u5206\u4e3a 3 \u4e2a\u65b0\u7684\u8bbf\u95ee\u6807\u5fd7\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VK_ACCESS_2_UNIFORM_READ_BIT_KHR"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VK_ACCESS_2_SHADER_SAMPLED_READ_BIT_KHR"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VK_ACCESS_2_SHADER_STORAGE_READ_BIT_KHR"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4e3a\u9884\u5149\u6805\u5316\u529f\u80fd\u5408\u5e76\u7740\u8272\u5668\u9636\u6bb5",children:"\u4e3a\u9884\u5149\u6805\u5316\u529f\u80fd\u5408\u5e76\u7740\u8272\u5668\u9636\u6bb5"}),"\n",(0,i.jsxs)(n.p,{children:["\u9664\u4e86\u62c6\u5206\u6807\u5fd7\u5916\uff0c\u8fd8\u6dfb\u52a0\u4e86",(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_PRE_RASTERIZATION_SHADERS_BIT_KHR"}),"\uff0c\u4ee5\u5c06\u5149\u6805\u5316\u4e4b\u524d\u7684\u7740\u8272\u5668\u9636\u6bb5\u5408\u5e76\u5230\u4e00\u4e2a\u7b80\u4fbf\u7684\u6807\u5fd7\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"vk_access_shader_write_bit\u589e\u52a0\u522b\u540d",children:"VK_ACCESS_SHADER_WRITE_BIT\u589e\u52a0\u522b\u540d"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_ACCESS_SHADER_WRITE_BIT"}),"\uff08\u73b0\u5728\u662f",(0,i.jsx)(n.code,{children:"VK_ACCESS_2_SHADER_WRITE_BIT_KHR"}),"\uff09\u589e\u52a0\u4e86\u4e00\u4e2a\u522b\u540d",(0,i.jsx)(n.code,{children:"VK_ACCESS_2_SHADER_STORAGE_WRITE_BIT_KHR"}),"\uff0c\u4ee5\u66f4\u597d\u5730\u63cf\u8ff0\u7740\u8272\u5668\u8d44\u6e90\u7684\u8bbf\u95ee\u6807\u5fd7\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5f03\u7528top_of_pipe-\u548c-bottom_of_pipe",children:"\u5f03\u7528TOP_OF_PIPE \u548c BOTTOM_OF_PIPE"}),"\n",(0,i.jsxs)(n.p,{children:["\u5e9f\u5f03\u4e86\u539f",(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT"}),"\u548c",(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT"}),"\u7684\u4f7f\u7528\uff0c \u66f4\u65b0\u4e3a\u4e0b\u97624 \u79cd\u7b49\u6548\u573a\u666f\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT"}),"\u5728\u7b2c\u4e00\u4e2a\u540c\u6b65\u4f5c\u7528\u57df\u4e2d"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// From\n  .srcStageMask = VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT;\n\n// To\n  .srcStageMask = VK_PIPELINE_STAGE_2_NONE_KHR;\n  .srcAccessMask = VK_ACCESS_2_NONE_KHR;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT"}),"\u5728\u7b2c\u4e8c\u4e2a\u540c\u6b65\u8303\u56f4\u5185"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// From\n  .dstStageMask = VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT;\n\n// To\n  .dstStageMask = VK_PIPELINE_STAGE_2_ALL_COMMANDS_BIT_KHR;\n  .dstAccessMask = VK_ACCESS_2_NONE_KHR;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT"}),"\u5728\u7b2c\u4e00\u4e2a\u540c\u6b65\u4f5c\u7528\u57df\u4e2d"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// From\n  .srcStageMask = VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT;\n\n// To\n  .srcStageMask = VK_PIPELINE_STAGE_2_ALL_COMMANDS_BIT_KHR;\n  .srcAccessMask = VK_ACCESS_2_NONE_KHR;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT"}),"\u5728\u7b2c\u4e8c\u4e2a\u540c\u6b65\u8303\u56f4\u5185"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// From\n  .dstStageMask = VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT;\n\n// To\n  .dstStageMask = VK_PIPELINE_STAGE_2_NONE_KHR;\n  .dstAccessMask = VK_ACCESS_2_NONE_KHR;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4f7f\u7528\u65b0\u7684\u56fe\u50cf\u5e03\u5c40",children:"\u4f7f\u7528\u65b0\u7684\u56fe\u50cf\u5e03\u5c40"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_KHR_synchronization2"}),"\u589e\u52a0\u4e862\u4e2a\u65b0\u7684\u56fe\u50cf\u5e03\u5c40",(0,i.jsx)(n.code,{children:"VK_IMAGE_LAYOUT_ATTACHMENT_OPTIMAL_KHR"}),"\u548c",(0,i.jsx)(n.code,{children:"VK_IMAGE_LAYOUT_READ_ONLY_OPTIMAL_KHR"}),"\uff0c\u8ba9\u5e03\u5c40\u8f6c\u6362\u66f4\u7b80\u4fbf\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u7684\u793a\u4f8b\uff0c\u5728\u7ed8\u5236\u65f6\u5199\u5165\u989c\u8272\u9644\u4ef6\u548c\u6df1\u5ea6/\u6a21\u677f\u9644\u4ef6\uff0c\u7136\u540e\u5728\u4e0b\u4e00\u6b21\u7ed8\u5236\u4e2d\u5bf9\u5b83\u4eec\u8fdb\u884c\u91c7\u6837\u3002\u4ee5\u524d\uff0c\u5e94\u7528\u9700\u8981\u786e\u4fdd\u5e03\u5c40\u548c\u8bbf\u95ee\u63a9\u7801\u7684\u6b63\u786e\u5339\u914d\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"VkImageMemoryBarrier colorImageMemoryBarrier = {\n  .srcAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT,\n  .dstAccessMask = VK_ACCESS_SHADER_READ_BIT,\n  .oldLayout = VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL,\n  .newLayout = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL\n};\n\nVkImageMemoryBarrier depthStencilImageMemoryBarrier = {\n  .srcAccessMask = VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT,,\n  .dstAccessMask = VK_ACCESS_SHADER_READ_BIT,\n  .oldLayout = VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL,\n  .newLayout = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u73b0\u5728\u6709\u4e86",(0,i.jsx)(n.code,{children:"VK_KHR_synchronization2"}),"\u53d8\u5f97\u7b80\u5355\u591a\u4e86\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"VkImageMemoryBarrier colorImageMemoryBarrier = {\n  .srcAccessMask = VK_ACCESS_2_COLOR_ATTACHMENT_WRITE_BIT_KHR,\n  .dstAccessMask = VK_ACCESS_2_SHADER_READ_BIT_KHR,\n  .oldLayout = VK_IMAGE_LAYOUT_ATTACHMENT_OPTIMAL_KHR, // new layout from VK_KHR_synchronization2\n  .newLayout = VK_IMAGE_LAYOUT_READ_ONLY_OPTIMAL_KHR   // new layout from VK_KHR_synchronization2\n};\n\nVkImageMemoryBarrier depthStencilImageMemoryBarrier = {\n  .srcAccessMask = VK_ACCESS_2_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT_KHR,\n  .dstAccessMask = VK_ACCESS_2_SHADER_READ_BIT_KHR,\n  .oldLayout = VK_IMAGE_LAYOUT_ATTACHMENT_OPTIMAL_KHR, // new layout from VK_KHR_synchronization2\n  .newLayout = VK_IMAGE_LAYOUT_READ_ONLY_OPTIMAL_KHR   // new layout from VK_KHR_synchronization2\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u65b0\u573a\u666f\u4e0b\uff0c",(0,i.jsx)(n.code,{children:"VK_IMAGE_LAYOUT_ATTACHMENT_OPTIMAL_KHR"}),"\u4f1a\u5728\u4e0a\u4e0b\u6587\u4e2d\u6839\u636e\u683c\u5f0f\u627e\u5230\u4f7f\u7528\u7684\u56fe\u50cf\u3002\u56e0\u6b64\uff0c\u53ea\u8981\u989c\u8272\u683c\u5f0f\u4f7f\u7528",(0,i.jsx)(n.code,{children:"colorImageMemoryBarrier"}),"\uff0c",(0,i.jsx)(n.code,{children:"VK_IMAGE_LAYOUT_ATTACHMENT_OPTIMAL_KHR"}),"\u5c31\u4f1a\u6620\u5c04\u5230",(0,i.jsx)(n.code,{children:"VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u6709\u4e86",(0,i.jsx)(n.code,{children:"VK_KHR_synchronization2"}),"\uff0c\u5982\u679c",(0,i.jsx)(n.code,{children:"oldLayout"}),"\u4e0e",(0,i.jsx)(n.code,{children:"newLayout"}),"\u76f8\u540c\uff0c\u5e03\u5c40\u8f6c\u6362\u5c06\u4e0d\u4f1a\u6267\u884c\uff0c\u4f7f\u7528\u7684\u5e03\u5c40\u751a\u81f3\u4e0d\u9700\u8981\u7528\u5b9e\u9645\u7684\u56fe\u50cf\u5e03\u5c40\uff0c\u5982\u4e0b\u9762\u7684 barrier \u662f\u6709\u6548\u7684\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"VkImageMemoryBarrier depthStencilImageMemoryBarrier = {\n  // other fields omitted\n  .oldLayout = VK_IMAGE_LAYOUT_UNDEFINED,\n  .newLayout = VK_IMAGE_LAYOUT_UNDEFINED,\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u65b0\u7684\u63d0\u4ea4\u6d41\u7a0b",children:"\u65b0\u7684\u63d0\u4ea4\u6d41\u7a0b"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_KHR_synchronization2"}),"\u589e\u52a0\u4e86",(0,i.jsx)(n.code,{children:"vkQueueSubmit2KHR"}),"\u51fd\u6570\u5e76\u5c06\u547d\u4ee4\u7f13\u51b2\u533a\u548c\u4fe1\u53f7\u91cf\u5305\u88c5\u5728\u6269\u5c55\u7ed3\u6784\u4f53\u4e2d\u4ece\u800c\u7b80\u5316\u4e86\u51fd\u6570\u53c2\u6570\u3002\u5408\u5e76\u4e86",(0,i.jsx)(n.code,{children:"VK_KHR_device_group"}),"\u548c",(0,i.jsx)(n.code,{children:"VK_KHR_timeline_semaphore"}),"\u4ece Vulkan 1.1\u4ee5\u6765\u7684\u4fee\u6539\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u9762\u7684\u63d0\u4ea4\u6d41\u7a0b\u4e3a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"VkSemaphore waitSemaphore;\nVkSemaphore signalSemaphore;\nVkCommandBuffer commandBuffers[8];\n\n// Possible pNext from VK_KHR_timeline_semaphore\nVkTimelineSemaphoreSubmitInfo timelineSemaphoreSubmitInfo = {\n    // ...\n    .pNext = nullptr\n};\n\n// Possible pNext from VK_KHR_device_group\nVkDeviceGroupSubmitInfo deviceGroupSubmitInfo = {\n    // ...\n    .pNext = &timelineSemaphoreSubmitInfo\n};\n\n// Possible pNext from Vulkan 1.1\nVkProtectedSubmitInfo = protectedSubmitInfo {\n    // ...\n    .pNext = &deviceGroupSubmitInfo\n};\n\nVkSubmitInfo submitInfo = {\n    .pNext = &protectedSubmitInfo, // Chains all 3 extensible structures\n    .waitSemaphoreCount = 1,\n    .pWaitSemaphores = &waitSemaphore,\n    .pWaitDstStageMask = VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,\n    .commandBufferCount = 8,\n    .pCommandBuffers = commandBuffers,\n    .signalSemaphoreCount = 1,\n    .pSignalSemaphores = signalSemaphore\n};\n\nvkQueueSubmit(queue, 1, submitInfo, fence);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8f6c\u6362\u4e3a ",(0,i.jsx)(n.code,{children:"vkQueueSubmit2KHR"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// Uses same semaphore and command buffer handles\nVkSemaphore waitSemaphore;\nVkSemaphore signalSemaphore;\nVkCommandBuffer commandBuffers[8];\n\nVkSemaphoreSubmitInfoKHR waitSemaphoreSubmitInfo = {\n    .semaphore = waitSemaphore,\n    .value = 1, // replaces VkTimelineSemaphoreSubmitInfo\n    .stageMask = VK_PIPELINE_STAGE_2_COLOR_ATTACHMENT_OUTPUT_BIT_KHR,\n    .deviceIndex = 0, // replaces VkDeviceGroupSubmitInfo\n};\n\n// Note this is allowing a stage to set the signal operation\nVkSemaphoreSubmitInfoKHR signalSemaphoreSubmitInfo = {\n    .semaphore = signalSemaphore,\n    .value = 2, // replaces VkTimelineSemaphoreSubmitInfo\n    .stageMask = VK_PIPELINE_STAGE_2_VERTEX_SHADER_BIT_KHR, // when to signal semaphore\n    .deviceIndex = 0, // replaces VkDeviceGroupSubmitInfo\n};\n\n// Need one for each VkCommandBuffer\nVkCommandBufferSubmitInfoKHR = commandBufferSubmitInfos[8] {\n    // ...\n    {\n        .commandBuffer = commandBuffers[i],\n        .deviceMask = 0 // replaces VkDeviceGroupSubmitInfo\n    },\n};\n\nVkSubmitInfo2KHR submitInfo = {\n    .pNext = nullptr, // All 3 struct above are built into VkSubmitInfo2KHR\n    .flags = VK_SUBMIT_PROTECTED_BIT_KHR, // also can be zero, replaces VkProtectedSubmitInfo\n    .waitSemaphoreInfoCount = 1,\n    .pWaitSemaphoreInfos = waitSemaphoreSubmitInfo,\n    .commandBufferInfoCount = 8,\n    .pCommandBufferInfos = commandBufferSubmitInfos,\n    .signalSemaphoreInfoCount = 1,\n    .pSignalSemaphoreInfos = signalSemaphoreSubmitInfo\n}\n\nvkQueueSubmit2KHR(queue, 1, submitInfo, fence);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4e24\u4e2a\u793a\u4f8b\u4ee3\u7801\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5f53\u9876\u70b9\u7740\u8272\u5668\u9636\u6bb5\u5b8c\u6210\u65f6\uff0c",(0,i.jsx)(n.code,{children:"vkQueueSubmit2KHR"}),"\u5c06\u53d1\u51fa",(0,i.jsx)(n.code,{children:"VkSemaphore signalSemaphore"}),"\u4fe1\u53f7\uff0c\u800c",(0,i.jsx)(n.code,{children:"vkQueueSubmit"}),"\u5c06\u7b49\u5230\u6574\u4e2a\u4efb\u52a1\u6267\u884c\u7ed3\u675f\u65f6\u624d\u4f1a\u89e6\u53d1\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u8ba9",(0,i.jsx)(n.code,{children:"vkQueueSubmit2KHR"}),"\u6a21\u62df",(0,i.jsx)(n.code,{children:"vkQueueSubmit"}),"\u53d1\u51fa\u4fe1\u53f7\u91cf\u7684\u76f8\u540c\u884c\u4e3a\uff0c\u53ef\u4ee5\u5728\u5c06",(0,i.jsx)(n.code,{children:"stageMask"}),"\u8bbe\u7f6e\u4e3a",(0,i.jsx)(n.code,{children:"VK_PIPELINE_STAGE_2_ALL_COMMANDS_BIT"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// Waits until everything is done\nVkSemaphoreSubmitInfoKHR signalSemaphoreSubmitInfo = {\n    // ...\n    .stageMask = VK_PIPELINE_STAGE_2_ALL_COMMANDS_BIT,\n    // ...\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4eff\u771f\u5c42",children:"\u4eff\u771f\u5c42"}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e0d\u652f\u6301\u6b64\u6269\u5c55\u7684\u8bbe\u5907\uff0c",(0,i.jsx)(n.a,{href:"https://github.com/KhronosGroup/Vulkan-ExtensionLayer",children:"Vulkan-Extensionlayer"}),"\u4ee3\u7801\u5e93\u4e2d\u6709\u4e00\u4e2a\u53ef\u79fb\u690d\u7684\u5b9e\u73b0\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.jsx)(n.a,{href:"https://github.com/KhronosGroup/Vulkan-ExtensionLayer/blob/master/docs/synchronization2_layer.md",children:"layer\u6587\u6863"}),"\u548c ",(0,i.jsx)(n.a,{href:"https://github.com/KhronosGroup/Vulkan-ExtensionLayer/blob/bd8a72b14c67d011561cd795d777fb838c926e0f/tests/synchronization2_tests.cpp#L1243",children:"Sync2Compat.Vulkan10"})," \u6d4b\u8bd5\u7528\u4f8b\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VK_KHR_synchronization2"}),"\u5728\u89c4\u8303\u4e2d\u5217\u51fa\u4e86",(0,i.jsx)(n.code,{children:"VK_KHR_create_renderpass2"}),"\u548c",(0,i.jsx)(n.code,{children:"VK_KHR_get_physical_device_properties2"}),"\u7684\u76f8\u5173\u8981\u6c42\uff0c\u5728\u6ca1\u6709\u8fd9\u4e9b\u6269\u5c55\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 synchronization2 \u53ef\u80fd\u4f1a\u5bfc\u81f4\u6821\u9a8c\u9519\u8bef\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u540c\u6b65\u4ee3\u7801\u793a\u4f8b",children:"\u540c\u6b65\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u672a\u5b8c\u5f85\u7eed..."})]})}function t(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8272:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/VK_KHR_synchronization2_stage_access-ce1535820598ba040aa485325781d775.png"},5020:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/synchronization_overview-cf2ce6e6cd046c37c9e1f3225d924d33.png"},1151:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/synchronization_pipeline_barrieres-16d7ca2d0ca4ae8fc60ed9808c06c539.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var i=s(6540);const r={},_=i.createContext(r);function c(e){const n=i.useContext(_);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(_.Provider,{value:n},e.children)}}}]);