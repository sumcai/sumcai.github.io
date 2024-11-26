"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[146],{5009:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(4848),i=s(8453);const a={title:"\u63a8\u9001\u5e38\u91cf",description:"\u4ecb\u7ecdvulkan\u4e2d\u7684\u63a8\u9001\u5e38\u91cf",date:new Date("2024-10-11T00:00:00.000Z")},o="Push \u5e38\u91cf",l={id:"guide/usage/push_constants",title:"\u63a8\u9001\u5e38\u91cf",description:"\u4ecb\u7ecdvulkan\u4e2d\u7684\u63a8\u9001\u5e38\u91cf",source:"@site/docs/guide/usage/20-push_constants.md",sourceDirName:"guide/usage",slug:"/guide/usage/push_constants",permalink:"/guide/usage/push_constants",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u63a8\u9001\u5e38\u91cf",description:"\u4ecb\u7ecdvulkan\u4e2d\u7684\u63a8\u9001\u5e38\u91cf",date:"2024-10-11T00:00:00.000Z"},sidebar:"VulkanGuide",previous:{title:"\u63cf\u8ff0\u7b26\u52a8\u6001\u504f\u79fb",permalink:"/guide/usage/descriptor_dynamic_offset"},next:{title:"\u5065\u58ee\u6027",permalink:"/guide/usage/robustness"}},r={},d=[{value:"\u5982\u4f55\u4f7f\u7528\u63a8\u9001\u5e38\u91cf",id:"\u5982\u4f55\u4f7f\u7528\u63a8\u9001\u5e38\u91cf",level:2},{value:"\u7740\u8272\u5668\u4ee3\u7801",id:"\u7740\u8272\u5668\u4ee3\u7801",level:3},{value:"\u7ba1\u7ebf\u5e03\u5c40",id:"\u7ba1\u7ebf\u5e03\u5c40",level:3},{value:"\u5728\u5f55\u5236\u6307\u4ee4\u65f6\u66f4\u65b0\u63a8\u9001\u5e38\u91cf\u5185\u5bb9",id:"\u5728\u5f55\u5236\u6307\u4ee4\u65f6\u66f4\u65b0\u63a8\u9001\u5e38\u91cf\u5185\u5bb9",level:3},{value:"\u504f\u79fb",id:"\u504f\u79fb",level:3},{value:"\u7ba1\u7ebf\u5e03\u5c40\u517c\u5bb9\u6027",id:"\u7ba1\u7ebf\u5e03\u5c40\u517c\u5bb9\u6027",level:2},{value:"\u63a8\u9001\u5e38\u91cf\u7684\u751f\u547d\u5468\u671f",id:"\u63a8\u9001\u5e38\u91cf\u7684\u751f\u547d\u5468\u671f",level:2},{value:"\u7ed1\u5b9a\u63cf\u8ff0\u7b26\u96c6\u4e0d\u5f71\u54cd\u63a8\u9001\u5e38\u91cf",id:"\u7ed1\u5b9a\u63cf\u8ff0\u7b26\u96c6\u4e0d\u5f71\u54cd\u63a8\u9001\u5e38\u91cf",level:3},{value:"\u6df7\u5408\u7ed1\u5b9a\u70b9",id:"\u6df7\u5408\u7ed1\u5b9a\u70b9",level:3},{value:"\u7ed1\u5b9a\u4e0d\u517c\u5bb9\u7684\u7ba1\u7ebf",id:"\u7ed1\u5b9a\u4e0d\u517c\u5bb9\u7684\u7ba1\u7ebf",level:3},{value:"\u6ca1\u6709\u9759\u6001\u63a8\u9001\u5e38\u91cf\u7684\u7ba1\u7ebf\u5e03\u5c40",id:"\u6ca1\u6709\u9759\u6001\u63a8\u9001\u5e38\u91cf\u7684\u7ba1\u7ebf\u5e03\u5c40",level:3},{value:"\u589e\u91cf\u66f4\u65b0",id:"\u589e\u91cf\u66f4\u65b0",level:3}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"push-\u5e38\u91cf",children:"Push \u5e38\u91cf"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Push Constants"}),"\u79f0\u4e3a\u63a8\u9001\u5e38\u91cf\uff0cVulkan \u89c4\u8303\u662f\u8fd9\u4e48\u5b9a\u4e49",(0,t.jsx)(e.code,{children:"Push Constants"}),"\u7684\uff1a"]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"\u53ef\u901a\u8fc7 API \u5199\u5165\uff0c\u7528\u4e8e\u5728\u7740\u8272\u5668\u4e2d\u8bbf\u95ee\u7684\u4e00\u5c0f\u7ec4\u503c\u3002\u63a8\u9001\u5e38\u91cf\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u65e0\u9700\u521b\u5efa\u7f13\u51b2\u533a\u6216\u4fee\u6539\\\u7ed1\u5b9a\u63cf\u8ff0\u7b26\u96c6\uff0c\u800c\u76f4\u63a5\u8bbe\u7f6e\u7740\u8272\u5668\u4e2d\u4f7f\u7528\u7684\u503c\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5982\u4f55\u4f7f\u7528\u63a8\u9001\u5e38\u91cf",children:"\u5982\u4f55\u4f7f\u7528\u63a8\u9001\u5e38\u91cf"}),"\n",(0,t.jsx)(e.h3,{id:"\u7740\u8272\u5668\u4ee3\u7801",children:"\u7740\u8272\u5668\u4ee3\u7801"}),"\n",(0,t.jsxs)(e.p,{children:["\u4ece\u7740\u8272\u5668\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u63a8\u9001\u5e38\u91cf\u7c7b\u4f3c\u4e8e uniform \u7f13\u51b2\u533a\u3002\u89c4\u8303\u63d0\u4f9b\u4e86 Vulkan \u548c SPIR-V \u4e4b\u95f4\u7684 ",(0,t.jsx)(e.a,{href:"https://www.khronos.org/registry/vulkan/specs/1.3-extensions/html/vkspec.html#interfaces-resources-pushconst",children:"push constant \u63a5\u53e3\u4fe1\u606f"}),"\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684 GLSL \u7247\u6bb5\u7740\u8272\u5668\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-glsl",children:"layout(push_constant, std430) uniform pc {\n    vec4 data;\n};\n\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n   outColor = data;\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u5e94\u7684 SPIR-V\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"                  OpMemberDecorate %pc 0 Offset 0\n                  OpDecorate %pc Block\n\n         %float = OpTypeFloat 32\n       %v4float = OpTypeVector %float 4\n\n%pc             = OpTypeStruct %v4float\n%pc_ptr         = OpTypePointer PushConstant %pc\n%pc_var         = OpVariable %pc_ptr PushConstant\n%pc_v4float_ptr = OpTypePointer PushConstant %v4float\n\n%access_chain   = OpAccessChain %pc_v4float_ptr %pc_var %int_0\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://www.khronos.org/registry/vulkan/specs/1.3-extensions/html/vkspec.html#interfaces-resources-pushconst",children:"Vulkan \u89c4\u8303"}),"\u5c06\u5b83\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u5e26\u6709",(0,t.jsx)(e.code,{children:"Block"}),"\u4fee\u9970\u7684",(0,t.jsx)(e.code,{children:"OpTypeStruct"}),"\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u7ba1\u7ebf\u5e03\u5c40",children:"\u7ba1\u7ebf\u5e03\u5c40"}),"\n",(0,t.jsxs)(e.p,{children:["\u8c03\u7528",(0,t.jsx)(e.code,{children:"vkCreatePipelineLayout"}),"\u65f6\uff0c\u9700\u8981\u5728 ",(0,t.jsx)(e.a,{href:"https://www.khronos.org/registry/vulkan/specs/1.3-extensions/man/html/VkPipelineLayoutCreateInfo.html",children:"VkPipelineLayoutCreateInfo"})," \u4e2d\u8bbe\u7f6e",(0,t.jsx)(e.a,{href:"https://www.khronos.org/registry/vulkan/specs/1.3-extensions/man/html/VkPushConstantRange.html",children:"\u63a8\u9001\u5e38\u91cf\u8303\u56f4"}),"\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0a\u4e00\u4e2a\u7740\u8272\u5668\u7684\u4e3a\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"VkPushConstantRange range = {};\nrange.stageFlags = VK_SHADER_STAGE_FRAGMENT_BIT;\nrange.offset = 0;\nrange.size = 16; // %v4float (vec4) is defined as 16 bytes\n\nVkPipelineLayoutCreateInfo create_info = {};\ncreate_info.sType = VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO;\ncreate_info.pNext = NULL;\ncreate_info.flags = 0;\ncreate_info.setLayoutCount = 0;\ncreate_info.pushConstantRangeCount = 1;\ncreate_info.pPushConstantRanges = &range;\n\nVkPipelineLayout pipeline_layout;\nvkCreatePipelineLayout(device, &create_info, NULL, &pipeline_layout);\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u5728\u5f55\u5236\u6307\u4ee4\u65f6\u66f4\u65b0\u63a8\u9001\u5e38\u91cf\u5185\u5bb9",children:"\u5728\u5f55\u5236\u6307\u4ee4\u65f6\u66f4\u65b0\u63a8\u9001\u5e38\u91cf\u5185\u5bb9"}),"\n",(0,t.jsxs)(e.p,{children:["\u6700\u540e\uff0c\u9700\u8981\u4f7f\u7528 ",(0,t.jsx)(e.a,{href:"https://www.khronos.org/registry/vulkan/specs/1.3-extensions/man/html/vkCmdPushConstants.html",children:"vkCmdPushConstants"})," \u5c06\u63a8\u9001\u5e38\u91cf\u66f4\u65b0\u4e3a\u6240\u9700\u503c\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"float data[4] = {0.0f, 1.0f, 2.0f, 3.0f}; // where sizeof(float) == 4 bytes\n\n// vkBeginCommandBuffer()\nuint32_t offset = 0;\nuint32_t size = 16;\nvkCmdPushConstants(commandBuffer, pipeline_layout, VK_SHADER_STAGE_FRAGMENT_BIT, offset, size, data);\n// draw / dispatch / trace rays / etc\n// vkEndCommandBuffer()\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u504f\u79fb",children:"\u504f\u79fb"}),"\n",(0,t.jsx)(e.p,{children:"\u5411\u63a8\u9001\u5e38\u91cf\u5757\u6dfb\u52a0\u504f\u79fb\u91cf\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-patch",children:"layout(push_constant, std430) uniform pc {\n-   vec4 data;\n+   layout(offset = 32) vec4 data;\n};\n\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n   outColor = data;\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e0e\u4e4b\u524d SPIR-V \u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8eoffset:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-patch",children:"- OpMemberDecorate %pc 0 Offset 0\n+ OpMemberDecorate %pc 0 Offset 32\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd8\u9700\u8981\u6bcf\u4e2a\u4f7f\u7528\u5b83\u7684\u7740\u8272\u5668\u9636\u6bb5\uff0c\u5728",(0,t.jsx)(e.code,{children:"VkPushConstantRange"}),"\u4e2d\u6307\u5b9a",(0,t.jsx)(e.code,{children:"32"}),"\u5b57\u8282\u7684\u504f\u79fb\u91cf"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-patch",children:"VkPushConstantRange range = {};\nrange.stageFlags = VK_SHADER_STAGE_FRAGMENT_BIT;\n-range.offset = 0;\n+range.offset = 32;\nrange.size = 16;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e0b\u56fe\u5c55\u793a\u4e86 push constant offsets \u7684\u5de5\u4f5c\u539f\u7406\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"push_constant_offset",src:s(1701).A+"",width:"1024",height:"359"})}),"\n",(0,t.jsx)(e.h2,{id:"\u7ba1\u7ebf\u5e03\u5c40\u517c\u5bb9\u6027",children:"\u7ba1\u7ebf\u5e03\u5c40\u517c\u5bb9\u6027"}),"\n",(0,t.jsxs)(e.p,{children:["Vulkan Spec\u5c06",(0,t.jsx)(e.a,{href:"https://www.khronos.org/registry/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-compatibility",children:"\u63a8\u9001\u5e38\u91cf\u7684\u517c\u5bb9\u6027"}),"\u5b9a\u4e49\u4e3a\uff1a"]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"\u5047\u8bbe\u5b83\u4eec\u662f\u4f7f\u7528\u76f8\u540c\u7684\u63a8\u9001\u5e38\u91cf\u8303\u56f4\u521b\u5efa\u7684\u3002"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u610f\u5473\u7740\u5728",(0,t.jsx)(e.a,{href:"https://www.khronos.org/registry/vulkan/specs/1.3-extensions/html/vkspec.html#pipeline-bindpoint-commands",children:"\u4e0e\u7ba1\u7ebf\u76f8\u5173\u7684\u6307\u4ee4\u6267\u884c"}),"\uff08",(0,t.jsx)(e.code,{children:"vkCmdDraw"}),"\u3001",(0,t.jsx)(e.code,{children:"vkCmdDispatch"})," \u7b49\uff09\u524d\uff0c\u6700\u540e\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"vkCmdPushConstants"}),"\u548c",(0,t.jsx)(e.code,{children:"vkCmdBindPipeline"})," \u4e2d\u4f7f\u7528\u7684",(0,t.jsx)(e.code,{children:"VkPipelineLayout"})," ",(0,t.jsxs)(e.strong,{children:["\u5fc5\u987b\u5177\u6709\u76f8\u540c\u7684 ",(0,t.jsx)(e.code,{children:"VkPushConstantRange"}),"\u3002"]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u63a8\u9001\u5e38\u91cf\u7684\u751f\u547d\u5468\u671f",children:"\u63a8\u9001\u5e38\u91cf\u7684\u751f\u547d\u5468\u671f"}),"\n",(0,t.jsxs)(e.p,{children:["\u63a8\u9001\u5e38\u91cf\u7684\u751f\u547d\u5468\u671f\u9700\u8981\u6ce8\u610f\u7684\u662f",(0,t.jsx)(e.a,{href:"https://github.com/KhronosGroup/Vulkan-Docs/issues/1081",children:"\u8fb9\u754c"}),(0,t.jsx)(e.a,{href:"https://github.com/KhronosGroup/Vulkan-Docs/issues/1485",children:"\u573a\u666f"}),"\uff0c\u4e0b\u9762\u7ed9\u51fa\u4e00\u4e9b\u5e38\u89c1\u7684\u793a\u4f8b\uff0c\u8bf4\u660e\u4e00\u4e9b\u65e0\u6548\u7684\u63a8\u9001\u5e38\u91cf\u7528\u6cd5\u3002"]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["\u6709\u4e00\u4e9b CTS\u7528\u4f8b\u7528\u6765\u6d4b\u8bd5\u8fd9\u4e2a\u573a\u666f\uff1a",(0,t.jsx)(e.code,{children:"dEQP-VK.pipeline.push_constant.lifetime.*"})]})}),"\n",(0,t.jsx)(e.h3,{id:"\u7ed1\u5b9a\u63cf\u8ff0\u7b26\u96c6\u4e0d\u5f71\u54cd\u63a8\u9001\u5e38\u91cf",children:"\u7ed1\u5b9a\u63cf\u8ff0\u7b26\u96c6\u4e0d\u5f71\u54cd\u63a8\u9001\u5e38\u91cf"}),"\n",(0,t.jsxs)(e.p,{children:["\u7531\u4e8e\u63a8\u9001\u5e38\u91cf\u4e0d\u4e0e\u63cf\u8ff0\u7b26\u7ed1\u5b9a\uff0c\u56e0\u6b64\u4f7f\u7528",(0,t.jsx)(e.code,{children:"vkCmdBindDescriptorSets"}),"\u4e0d\u4f1a\u5f71\u54cd\u63a8\u9001\u5e38\u91cf\u7684\u751f\u547d\u5468\u671f\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u6df7\u5408\u7ed1\u5b9a\u70b9",children:"\u6df7\u5408\u7ed1\u5b9a\u70b9"}),"\n",(0,t.jsxs)(e.p,{children:["\u53ef\u4ee5\u4f7f\u7528\u4e24\u4e2a\u4e0d\u540c\u7684",(0,t.jsx)(e.code,{children:"VkPipelineBindPoint"})," \uff0c\u6bcf\u4e2a",(0,t.jsx)(e.code,{children:"VkPipelineBindPoint"}),"\u7684shader \u4f7f\u7528\u4e0d\u540c\u7684\u63a8\u9001\u5e38\u91cf\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"// different ranges and therefore not compatible layouts\nVkPipelineLayout layout_graphics; // VK_SHADER_STAGE_FRAGMENT_BIT\nVkPipelineLayout layout_compute;  // VK_SHADER_STAGE_COMPUTE_BIT\n\n// vkBeginCommandBuffer()\nvkCmdBindPipeline(pipeline_graphics); // layout_graphics\nvkCmdBindPipeline(pipeline_compute);  // layout_compute\n\nvkCmdPushConstants(layout_graphics); // VK_SHADER_STAGE_FRAGMENT_BIT\n// Still valid as the last pipeline and push constant for graphics are compatible\nvkCmdDraw();\n\nvkCmdPushConstants(layout_compute); // VK_SHADER_STAGE_COMPUTE_BIT\nvkCmdDispatch(); // valid\n// vkEndCommandBuffer()\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u7ed1\u5b9a\u4e0d\u517c\u5bb9\u7684\u7ba1\u7ebf",children:"\u7ed1\u5b9a\u4e0d\u517c\u5bb9\u7684\u7ba1\u7ebf"}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"\u89c4\u8303\u6307\u51fa\uff1a\u7ba1\u7ebf\u5e03\u5c40\u4e0e\u63a8\u9001\u5e38\u91cf\u5e03\u5c40\u4e0d\u517c\u5bb9\u65f6\uff0c\u4e0d\u4f1a\u5f71\u54cd\u63a8\u9001\u5e38\u91cf\u503c\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u8bf7\u770b\u4e0b\u9762\u7684\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"// vkBeginCommandBuffer()\nvkCmdPushConstants(layout_0);\nvkCmdBindPipeline(pipeline_b); // non-compatible with layout_0\nvkCmdBindPipeline(pipeline_a); // compatible with layout_0\nvkCmdDraw(); // valid\n// vkEndCommandBuffer()\n\n// vkBeginCommandBuffer()\nvkCmdBindPipeline(pipeline_b); // non-compatible with layout_0\nvkCmdPushConstants(layout_0);\nvkCmdBindPipeline(pipeline_a); // compatible with layout_0\nvkCmdDraw(); // valid\n// vkEndCommandBuffer()\n\n// vkBeginCommandBuffer()\nvkCmdPushConstants(layout_0);\nvkCmdBindPipeline(pipeline_a); // compatible with layout_0\nvkCmdBindPipeline(pipeline_b); // non-compatible with layout_0\nvkCmdDraw(); // INVALID\n// vkEndCommandBuffer()\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u6ca1\u6709\u9759\u6001\u63a8\u9001\u5e38\u91cf\u7684\u7ba1\u7ebf\u5e03\u5c40",children:"\u6ca1\u6709\u9759\u6001\u63a8\u9001\u5e38\u91cf\u7684\u7ba1\u7ebf\u5e03\u5c40"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u7ba1\u7ebf\u5e03\u5c40\u4e2d\u6709",(0,t.jsx)(e.code,{children:"VkPushConstantRange"}),"\uff0c\u4f46\u5728\u7740\u8272\u5668\u4e2d\u6ca1\u6709\u63a8\u9001\u5e38\u91cf\u4e5f\u662f\u5141\u8bb8\u7684\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"VkPushConstantRange range = {VK_SHADER_STAGE_VERTEX_BIT, 0, 4};\nVkPipelineLayoutCreateInfo pipeline_layout_info = {VK_SHADER_STAGE_VERTEX_BIT. 1, &range};\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-glsl",children:"void main() {\n   gl_Position = vec4(1.0);\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"VkPipeline"}),"\u662f\u4f7f\u7528\u4e0a\u9762\u7684\u7740\u8272\u5668\u548c\u7ba1\u7ebf\u5e03\u5c40\u521b\u5efa\u7684\uff0c\u8c03\u7528",(0,t.jsx)(e.code,{children:"vkCmdPushConstants"}),(0,t.jsx)(e.strong,{children:"\u4ecd\u7136\u6709\u6548"}),"\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u53ef\u4ee5\u5c06",(0,t.jsx)(e.code,{children:"vkCmdPushConstants"}),"\u770b\u4f5c\u4e0e",(0,t.jsx)(e.code,{children:"VkPipelineLayout"}),"\u76f8\u5173\u8054\uff0c\u56e0\u6b64\u5b83\u4eec\u5fc5\u987b\u5728\u8c03\u7528\u6307\u4ee4\uff08\u5982",(0,t.jsx)(e.code,{children:"vkCmdDraw()"}),"\uff09\u524d\u76f8\u5339\u914d\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u7740\u8272\u5668\u53ef\u4ee5\u4e00\u76f4\u4e0d\u4f7f\u7528\u7ed1\u5b9a\u7684\u63cf\u8ff0\u7b26\u96c6\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528\u8bbe\u7f6e\u7684\u63a8\u9001\u5e38\u91cf\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u589e\u91cf\u66f4\u65b0",children:"\u589e\u91cf\u66f4\u65b0"}),"\n",(0,t.jsx)(e.p,{children:"\u63a8\u9001\u5e38\u91cf\u53ef\u4ee5\u5728\u547d\u4ee4\u7f13\u51b2\u533a\u5f55\u5236\u8fc7\u7a0b\u4e2d\u9010\u6b65\u66f4\u65b0\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u66f4\u65b0",(0,t.jsx)(e.code,{children:"vec4"}),"\u63a8\u9001\u5e38\u91cf\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"// vkBeginCommandBuffer()\nvkCmdBindPipeline();\nvkCmdPushConstants(offset: 0, size: 16, value = [0, 0, 0, 0]);\nvkCmdDraw(); // values = [0, 0, 0, 0]\n\nvkCmdPushConstants(offset: 4, size: 8, value = [1 ,1]);\nvkCmdDraw(); // values = [0, 1, 1, 0]\n\nvkCmdPushConstants(offset: 8, size: 8, value = [2, 2]);\nvkCmdDraw(); // values = [0, 1, 2, 2]\n// vkEndCommandBuffer()\n"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},1701:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/push_constant_offset-e8a07d94dd61a55ae81380893916afdd.png"},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>l});var t=s(6540);const i={},a=t.createContext(i);function o(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);