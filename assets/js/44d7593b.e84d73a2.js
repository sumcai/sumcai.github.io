"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[3973],{643:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=n(4848),c=n(8453);const t={title:"\u5065\u58ee\u6027",description:"\u4ecb\u7ecdvulkan\u7684\u5065\u58ee\u6027",date:new Date("2024-10-11T00:00:00.000Z")},i="\u9c81\u68d2\u6027",l={id:"usage/robustness",title:"\u5065\u58ee\u6027",description:"\u4ecb\u7ecdvulkan\u7684\u5065\u58ee\u6027",source:"@site/docs/usage/21-robustness.md",sourceDirName:"usage",slug:"/usage/robustness",permalink:"/usage/robustness",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"\u5065\u58ee\u6027",description:"\u4ecb\u7ecdvulkan\u7684\u5065\u58ee\u6027",date:"2024-10-11T00:00:00.000Z"},sidebar:"VulkanDoc",previous:{title:"\u63a8\u9001\u5e38\u91cf",permalink:"/usage/push_constants"},next:{title:"\u52a8\u6001\u7ba1\u7ebf\u72b6\u6001",permalink:"/usage/pipeline_dynamic_state"}},o={},d=[{value:"\u5065\u58ee\u6027\u7684\u610f\u4e49",id:"\u5065\u58ee\u6027\u7684\u610f\u4e49",level:2},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"Vulkan \u6838\u5fc3\u529f\u80fd\u7684\u8981\u6c42",id:"vulkan-\u6838\u5fc3\u529f\u80fd\u7684\u8981\u6c42",level:2},{value:"VK_EXT_image_robustness",id:"vk_ext_image_robustness",level:2},{value:"robustImageAccess",id:"robustimageaccess",level:3},{value:"VK_EXT_robustness2",id:"vk_ext_robustness2",level:2},{value:"robustBufferAccess2",id:"robustbufferaccess2",level:3},{value:"robustImageAccess2",id:"robustimageaccess2",level:3},{value:"nullDescriptor",id:"nulldescriptor",level:3},{value:"VK_EXT_pipeline_robustness",id:"vk_ext_pipeline_robustness",level:2}];function h(e){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"\u9c81\u68d2\u6027",children:"\u9c81\u68d2\u6027"})}),"\n",(0,r.jsx)(s.h1,{id:"\u5065\u58ee\u6027",children:"\u5065\u58ee\u6027"}),"\n",(0,r.jsx)(s.h2,{id:"\u5065\u58ee\u6027\u7684\u610f\u4e49",children:"\u5065\u58ee\u6027\u7684\u610f\u4e49"}),"\n",(0,r.jsx)(s.p,{children:"\u5f53 Vulkan \u5e94\u7528\u5c1d\u8bd5\u8bbf\u95ee\uff08\u52a0\u8f7d\u3001\u5b58\u50a8\u6216\u6267\u884c\u539f\u5b50\u64cd\u4f5c\uff09\u5b83\u65e0\u6743\u8bbf\u95ee\u7684\u5185\u5b58\u65f6\uff0c\u9a71\u52a8\u5b9e\u73b0\u5fc5\u987b\u7528\u67d0\u79cd\u65b9\u5f0f\u505a\u51fa\u53cd\u5e94\u3002\u5728\u6ca1\u6709\u5065\u58ee\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u5b83\u662f\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\uff0c\u751a\u81f3\u4f1a\u5bfc\u81f4\u7ec8\u6b62\u7a0b\u5e8f\u3002\u5982\u679c\u4e3a\u8bbf\u95ee\u7684\u5185\u5b58\u542f\u7528\u4e86\u5065\u58ee\u7279\u6027\uff0c\u5219\u9a71\u52a8\u5b9e\u73b0\u5fc5\u987b\u6309\u7167 spec \u5b9a\u4e49\u7684\u65b9\u5f0f\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"robustness_flow.png",src:n(8494).A+"",width:"932",height:"302"})}),"\n",(0,r.jsx)(s.h2,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),"\n",(0,r.jsx)(s.p,{children:"\u67d0\u4e9b Vulkan \u5e94\u7528\u4f1a\u8981\u6c42\u8fd0\u884c\u7684\u7740\u8272\u5668\u4ee3\u7801\uff0c\u65e0\u6cd5\u4fdd\u8bc1\u5185\u5b58\u8bbf\u95ee\u4e0d\u8d8a\u754c\uff0c\u8fd9\u4e9b\u5e94\u7528\u5c31\u9700\u8981\u7a33\u5065\u6027\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(s.div,{children:(0,r.jsx)(s.p,{children:"\u542f\u7528\u5065\u58ee\u6027\u53ef\u80fd\u4f1a\u964d\u4f4e\u8fd0\u884c\u6027\u80fd\uff0c\u5e94\u7528\u7a0b\u5e8f\u5e94\u4ed4\u7ec6\u8003\u8651\u542f\u7528\u5065\u58ee\u6027\u7684\u5f71\u54cd\u6027\u3002"})}),"\n",(0,r.jsx)(s.h2,{id:"vulkan-\u6838\u5fc3\u529f\u80fd\u7684\u8981\u6c42",children:"Vulkan \u6838\u5fc3\u529f\u80fd\u7684\u8981\u6c42"}),"\n",(0,r.jsxs)(s.p,{children:["\u6240\u6709 Vulkan \u9a71\u52a8\u5b9e\u73b0\u90fd\u9700\u8981\u652f\u6301",(0,r.jsx)(s.code,{children:"robustBufferAccess"}),"\u7279\u6027\u3002",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#features-robustBufferAccess",children:"\u89c4\u8303\u63cf\u8ff0\u4e86\u4ec0\u4e48\u662f\u8bbf\u95ee\u8d8a\u754c"}),"\uff0c\u4ee5\u53ca\u5e94\u8be5\u5982\u4f55\u5904\u7406\u3002\u4e00\u4e2a\u4f8b\u5b50\u662f\u8bbf\u95ee",(0,r.jsx)(s.code,{children:"vec4(x,y,z,w)"})," \u5176\u4e2d",(0,r.jsx)(s.code,{children:"w"}),"\u7684\u503c\u662f\u8d8a\u754c\u7684\uff0c spec \u5141\u8bb8\u9a71\u52a8\u5b9e\u73b0\u51b3\u5b9a",(0,r.jsx)(s.code,{children:"x"})," \uff0c",(0,r.jsx)(s.code,{children:"y"})," \uff0c",(0,r.jsx)(s.code,{children:"z"})," \u662f\u5426\u4e5f\u88ab\u89c6\u4e3a\u8d8a\u754c\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u5728\u7ed1\u5b9a\u540e\u8fdb\u884c\u66f4\u65b0\u63cf\u8ff0\u7b26\uff08Vulkan 1.2 \u7684\u6838\u5fc3\u5185\u5bb9",(0,r.jsx)(s.code,{children:"VK_EXT_descriptor_indexing"})," \uff09\uff0c\u4e00\u5b9a\u8981\u68c0\u67e5",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#limits-robustBufferAccessUpdateAfterBind",children:"robustBufferAccessUpdateAfterBind"}),"\u662f\u5426\u652f\u6301 \uff0c\u5b83\u8868\u660e\u9a71\u52a8\u5b9e\u73b0\u662f\u5426\u53ef\u4ee5\u540c\u65f6\u652f\u6301",(0,r.jsx)(s.code,{children:"robustBufferAccess"}),"\u4ee5\u53ca\u5728\u7ed1\u5b9a\u540e\u66f4\u65b0\u63cf\u8ff0\u7b26\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"robustBufferAccess"}),"\u529f\u80fd\u6709\u4e00\u4e9b\u9650\u5236\uff0c\u5b83\u53ea\u6db5\u76d6\u4e86\u7f13\u51b2\u533a\uff0c\u4e0d\u6db5\u76d6\u56fe\u50cf\u3002\u5b83\u5141\u8bb8\u8d8a\u754c\u5199\u5165\u4ee5\u53ca\u539f\u5b50\u4fee\u6539\u6b63\u88ab\u8bbf\u95ee\u7684\u7f13\u51b2\u533a\u6570\u636e\u3002\u5982\u679c\u9700\u8981\u66f4\u7a33\u5065\u6027\u7684\u529f\u80fd\uff0c\u8bf7\u9605\u8bfb ",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_EXT_robustness2.html",children:"VK_EXT_robustness2"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53\u56fe\u50cf\u8d8a\u754c\u65f6\uff0c\u6838\u5fc3 Vulkan \u529f\u80fd ",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#textures-output-coordinate-validation",children:"\u53ef\u4ee5\u4fdd\u8bc1"})," \u5b58\u50a8\u548c\u539f\u5b50\u4fee\u6539\u5bf9\u6b63\u88ab\u8bbf\u95ee\u7684\u5185\u5b58\u6ca1\u6709\u5f71\u54cd\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"vk_ext_image_robustness",children:"VK_EXT_image_robustness"}),"\n",(0,r.jsx)(s.h3,{id:"robustimageaccess",children:"robustImageAccess"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#VK_EXT_image_robustness",children:"VK_EXT_image_robustness"})," \u4e2d\u7684 ",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#features-robustImageAccess",children:"robustImageAccess"})," \u529f\u80fd\u652f\u6301\u5bf9\u8bbf\u95ee\u7684\u56fe\u50cf\u89c6\u56fe\u5c3a\u5bf8\u8fdb\u884c\u8d8a\u754c\u68c0\u67e5\u3002\u5982\u679c\u5b58\u5728\u8d8a\u754c\u8bbf\u95ee\uff0c\u5c06\u8fd4\u56de ",(0,r.jsx)(s.code,{children:"(0, 0, 0, 0)"}),"\u6216",(0,r.jsx)(s.code,{children:"(0, 0, 0, 1)"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"robustImageAccess"}),"\u529f\u80fd\u4e0d\u4fdd\u8bc1\u8bbf\u95ee\u65e0\u6548\u7684 LOD \uff0c\u5b83\u662f\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"vk_ext_robustness2",children:"VK_EXT_robustness2"}),"\n",(0,r.jsxs)(s.p,{children:["\u67d0\u4e9b\u5e94\u7528\u7a0b\u5e8f\uff08\u4f8b\u5982\u4ece D3D12 \u79fb\u690d\u7684\u5e94\u7528\u7a0b\u5e8f\uff09\u9700\u8981\u6bd4",(0,r.jsx)(s.code,{children:"robustBufferAccess"}),"\u548c",(0,r.jsx)(s.code,{children:"robustImageAccess"}),"\u66f4\u4e25\u683c\u7684\u4fdd\u8bc1\uff0c",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_EXT_robustness2.html",children:"VK_EXT_robustness2"})," \u6269\u5c55\u901a\u8fc7\u516c\u5f00 3 \u4e2a\u65b0\u7684\u5065\u58ee\u6027\u529f\u80fd\u6765\u589e\u5f3a\u8fd9\u4e00\u70b9\u3002\u5bf9\u4e8e\u67d0\u4e9b\u9a71\u52a8\u5b9e\u73b0\u6765\u8bf4\uff0c\u8fd9\u4e9b\u989d\u5916\u7684\u4fdd\u8bc1\u53ef\u80fd\u4f1a\u964d\u4f4e\u6027\u80fd\u3002\u5efa\u8bae\u4e0d\u9700\u8981\u989d\u5916\u5065\u58ee\u6027\u7684\u5e94\u7528\u5c3d\u53ef\u80fd\u4f7f\u7528",(0,r.jsx)(s.code,{children:"robustBufferAccess"}),"\u548c",(0,r.jsx)(s.code,{children:"robustImageAccess"}),"\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"robustbufferaccess2",children:"robustBufferAccess2"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#features-robustBufferAccess2",children:"robustBufferAccess2"})," \u529f\u80fd\u53ef\u4ee5\u770b\u4f5c\u662f",(0,r.jsx)(s.code,{children:"robustBufferAccess"}),"\u7684\u8d85\u96c6\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u542f\u7528\u8be5\u529f\u80fd\u540e\uff0c\u5b83\u4f1a\u963b\u6b62\u6240\u6709\u8d8a\u754c\u7684\u5199\u5165\u548c\u539f\u5b50\u4fee\u6539\u7f13\u51b2\u533a\u5bf9\u5e94\u7684\u5185\u5b58\u3002",(0,r.jsx)(s.code,{children:"robustBufferAccess2"}),"\u529f\u80fd\u8fd8\u89c4\u5b9a\u4e86\u8d8a\u754c\u8bbf\u95ee\u65f6\u5404\u79cd\u7c7b\u578b\u7684\u8fd4\u56de\u503c\uff0c\u8be6\u7ec6\u5185\u5bb9\u5c06",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#features-robustBufferAccess",children:"\u89c4\u8303\u63cf\u8ff0"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ece ",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VkPhysicalDeviceRobustness2PropertiesEXT.html",children:"VkPhysicalDeviceRobustness2PropertiesEXT"})," \u67e5\u8be2",(0,r.jsx)(s.code,{children:"robustUniformBufferAccessSizeAlignment"}),"\u548c",(0,r.jsx)(s.code,{children:"robustStorageBufferAccessSizeAlignment"}),"\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u7f13\u51b2\u533a\u7684\u5bf9\u9f50\u65b9\u5f0f\u5728\u4e0d\u540c\u9a71\u52a8\u5b9e\u73b0\u95f4\u6709\u6240\u4e0d\u540c\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"robustimageaccess2",children:"robustImageAccess2"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#features-robustImageAccess2",children:"robustImageAccess2"})," \u529f\u80fd\u53ef\u4ee5\u770b\u4f5c\u662f",(0,r.jsx)(s.code,{children:"robustImageAccess"}),"\u7684\u8d85\u96c6\u3002\u5b83\u9488\u56fe\u50cf\u89c6\u56fe\u7684\u8d8a\u754c\u68c0\u67e5\uff0c\u5bf9\u8fd4\u56de\u503c\u6709\u66f4\u4e25\u683c\u7684\u8981\u6c42\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c",(0,r.jsx)(s.code,{children:"robustImageAccess2"}),"\u68c0\u67e5\u51fa\u8d8a\u754c\uff0c ",(0,r.jsx)(s.code,{children:"R"}),"\u3001",(0,r.jsx)(s.code,{children:"RG"})," \u6216 ",(0,r.jsx)(s.code,{children:"RGB"})," \u683c\u5f0f\u5c06\u8fd4\u56de",(0,r.jsx)(s.code,{children:"(0, 0, 0, 1)"}),"\uff0c RGBA \u683c\u5f0f\uff08\u5982",(0,r.jsx)(s.code,{children:"VK_FORMAT_R8G8B8A8_UNORM"}),"\uff09\uff0c\u5c06\u8fd4\u56de",(0,r.jsx)(s.code,{children:"(0, 0, 0, 0)"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u542f\u7528",(0,r.jsx)(s.code,{children:"robustImageAccess2"}),"\u540e\uff0c\u8bbf\u95ee\u8d85\u51fa\u8303\u56f4\u7684\u56fe\u50cf LOD \u5c06\u88ab\u89c6\u4e3a\u8d8a\u754c\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"nulldescriptor",children:"nullDescriptor"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u672a\u542f\u7528 ",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#features-nullDescriptor",children:"nullDescriptor"})," \u529f\u80fd\uff0c\u5728\u66f4\u65b0",(0,r.jsx)(s.code,{children:"VkDescriptorSet"}),"\u65f6\uff0c\u652f\u6301\u5b83\u7684\u6240\u6709\u8d44\u6e90\u90fd\u5fc5\u987b\u4e3a\u975enull\uff0c\u5373\u4f7f\u7740\u8272\u5668\u4e0d\u4f7f\u7528\u8be5\u63cf\u8ff0\u7b26\u4e5f\u662f\u4e00\u6837\u3002\u6b64\u529f\u80fd\u5141\u8bb8\u63cf\u8ff0\u7b26\u4e3a null \u8d44\u6e90\u6216\u89c6\u56fe\uff0c\u8bfb\u53d6 null \u63cf\u8ff0\u7b26\u8fd4\u56de\u96f6\u503c\uff0c\u539f\u5b50\u8bfb\u5199null\u63cf\u8ff0\u7b26\u7684\u64cd\u4f5c\u88ab\u4e22\u5f03\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"nullDescriptor"}),"\u529f\u80fd\u8fd8\u5141\u8bb8\u8bbf\u95ee",(0,r.jsx)(s.code,{children:"vkCmdBindVertexBuffers::pBuffers"}),"\u4e3a null\u7684\u9876\u70b9\u8f93\u5165\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"vk_ext_pipeline_robustness",children:"VK_EXT_pipeline_robustness"}),"\n",(0,r.jsxs)(s.p,{children:["\u7531\u4e8e\u67d0\u4e9b\u9a71\u52a8\u5b9e\u73b0\u7684\u5065\u58ee\u6027\u53ef\u80fd\u4f1a\u4ee5\u727a\u7272\u6027\u80fd\u4e3a\u4ee3\u4ef7\uff0c\u56e0\u6b64\u6dfb\u52a0\u4e86 ",(0,r.jsx)(s.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_EXT_pipeline_robustness.html",children:"VK_EXT_pipeline_robustness"})," \u6269\u5c55\uff0c\u4ee5\u5141\u8bb8\u5e94\u7528\u53ea\u5728\u9700\u8981\u65f6\u8bf7\u6c42\u5065\u58ee\u6027\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5728",(0,r.jsx)(s.code,{children:"VkPipeline"}),"\u521b\u5efa\u65f6\uff0c\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u6216\u591a\u4e2a",(0,r.jsx)(s.code,{children:"VkPipelineRobustnessCreateInfoEXT"}),"\u7ed3\u6784\uff0c\u4ee5\u6307\u5b9a\u5bf9\u7f13\u51b2\u533a\u3001\u56fe\u50cf\u548c\u9876\u70b9\u8f93\u5165\u8d44\u6e90\u7684\u8bbf\u95ee\u6240\u9700\u7684\u5065\u58ee\u6027\uff0c\u65e0\u8bba\u662f\u9488\u5bf9\u6574\u4e2a\u7ba1\u7ebf\u8fd8\u662f\u6bcf\u4e2a\u7ba1\u7ebf\u9636\u6bb5\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u6b64\u6269\u5c55\u8fd8\u63d0\u4f9b\u4e86",(0,r.jsx)(s.code,{children:"VkPhysicalDevicePipelineRobustnessPropertiesEXT"}),"\uff0c\u6765\u67e5\u8be2\u9a71\u52a8\u5b9e\u73b0\uff0c\u5728\u672a\u542f\u7528\u5065\u58ee\u6027\u7279\u6027\u65f6\u7684\u9ed8\u8ba4\u884c\u4e3a\u3002"]})]})}function u(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8494:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/robustness_flow-1728658631455-fa1909e096050f08ea4c2b19cb5234cb.png"},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var r=n(6540);const c={},t=r.createContext(c);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);