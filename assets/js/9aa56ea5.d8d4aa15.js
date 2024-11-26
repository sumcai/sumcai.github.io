"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[4018],{1919:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var r=l(4848),s=l(8453);const a={title:"Shader\u5185\u5b58\u5e03\u5c40",description:"\u4ecb\u7ecdvulkan\u4e2dShader\u5185\u5b58\u5e03\u5c40",date:new Date("2024-10-13T00:00:00.000Z")},c="Shader\u5185\u5b58\u5e03\u5c40",t={id:"guide/usage/shader_memory_layout",title:"Shader\u5185\u5b58\u5e03\u5c40",description:"\u4ecb\u7ecdvulkan\u4e2dShader\u5185\u5b58\u5e03\u5c40",source:"@site/docs/guide/usage/24-shader_memory_layout.md",sourceDirName:"guide/usage",slug:"/guide/usage/shader_memory_layout",permalink:"/guide/usage/shader_memory_layout",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Shader\u5185\u5b58\u5e03\u5c40",description:"\u4ecb\u7ecdvulkan\u4e2dShader\u5185\u5b58\u5e03\u5c40",date:"2024-10-13T00:00:00.000Z"},sidebar:"VulkanGuide",previous:{title:"\u5b50\u7ec4",permalink:"/guide/usage/subgroups"},next:{title:"\u539f\u5b50\u64cd\u4f5c",permalink:"/guide/usage/atomics"}},o={},d=[{value:"\u5bf9\u9f50\u8981\u6c42",id:"\u5bf9\u9f50\u8981\u6c42",level:2},{value:"VK_KHR_uniform_buffer_standard_layout",id:"vk_khr_uniform_buffer_standard_layout",level:2},{value:"VK_KHR_relaxed_block_layout",id:"vk_khr_relaxed_block_layout",level:2},{value:"VK_EXT_scalar_block_layout",id:"vk_ext_scalar_block_layout",level:2},{value:"\u5bf9\u9f50\u7684\u793a\u4f8b",id:"\u5bf9\u9f50\u7684\u793a\u4f8b",level:2},{value:"\u5bf9\u9f50\u793a\u4f8b 1",id:"\u5bf9\u9f50\u793a\u4f8b-1",level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",level:3},{value:"\u793a\u4f8b 3",id:"\u793a\u4f8b-3",level:3},{value:"\u793a\u4f8b 4",id:"\u793a\u4f8b-4",level:3}];function i(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"shader\u5185\u5b58\u5e03\u5c40",children:"Shader\u5185\u5b58\u5e03\u5c40"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u9a71\u52a8\u5b9e\u73b0\u8bbf\u95ee memory \u65f6\uff0c\u5b83\u9700\u8981\u77e5\u9053 ",(0,r.jsxs)(n.strong,{children:["memory ",(0,r.jsx)(n.strong,{children:"\u7684\u5e03\u5c40\u662f\u4ec0\u4e48\uff0c\u5305\u62ec"}),"\u504f\u79fb"]}),"\u3001",(0,r.jsx)(n.strong,{children:"\u6b65\u957f"}),"\u548c",(0,r.jsx)(n.strong,{children:"\u5bf9\u9f50"}),"\u7b49\u4fe1\u606f\u3002 Vulkan Spec\u6709",(0,r.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#interfaces-resources-layout",children:"\u4e00\u4e2a\u7ae0\u8282\u4e13\u95e8\u4ecb\u7ecd\u8fd9\u5757\u5185\u5bb9"}),"\uff0c\u7531\u4e8e\u589e\u52a0\u4e86\u5404\u79cd\u6269\u5c55\uff0c\u56e0\u6b64\u6709\u7684\u5185\u5bb9\u53ef\u80fd\u4f1a\u6709\u4e9b\u590d\u6742\u3002\u672c\u7ae0\u65e8\u5728\u901a\u8fc7\u4e00\u4e9b\u9ad8\u7ea7\u7740\u8272\u8bed\u8a00 \uff08GLSL\uff09 \u793a\u4f8b\u6765\u5e2e\u52a9\u7406\u89e3 Vulkan \u4f7f\u7528\u7684\u5185\u5b58\u5e03\u5c40\u6982\u5ff5\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5bf9\u9f50\u8981\u6c42",children:"\u5bf9\u9f50\u8981\u6c42"}),"\n",(0,r.jsxs)(n.p,{children:["Vulkan \u6709 3 \u4e2a",(0,r.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#interfaces-alignment-requirements",children:"\u5bf9\u9f50\u8981\u6c42"}),"\uff0c\u63a5\u53e3\u5bf9\u8c61\u53ef\u4ee5\u6309\u7167\u8fd9\u4e9b\u8981\u6c42\u8fdb\u884c\u5e03\u5c40\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6269\u5c55\u5bf9\u9f50\uff08\u4e5f\u79f0\u4e3a",(0,r.jsx)(n.code,{children:"std140"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["\u57fa\u7840\u5bf9\u9f50\uff08\u4e5f\u79f0\u4e3a",(0,r.jsx)(n.code,{children:"std430"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"\u6807\u91cf\u5bf9\u9f50"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u9f50\u89c4\u8303\u53ef\u7ec6\u5206\u6210\u4ee5\u4e0b\u6bcf\u79cd\u5757\u7c7b\u578b\u7684\u89c4\u5219\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6807\u91cf \uff08",(0,r.jsx)(n.code,{children:"float"}),"\u3001 ",(0,r.jsx)(n.code,{children:"int"}),"\u3001 ",(0,r.jsx)(n.code,{children:"char"}),"\u7b49\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5411\u91cf\uff08",(0,r.jsx)(n.code,{children:"float2"}),"\u3001",(0,r.jsx)(n.code,{children:"vec3"}),"\u3001 ",(0,r.jsx)(n.code,{children:"uvec4"}),"\u7b49\uff09"]}),"\n",(0,r.jsx)(n.li,{children:"\u77e9\u9635"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u7ec4"}),"\n",(0,r.jsx)(n.li,{children:"\u7ed3\u6784"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vk_khr_uniform_buffer_standard_layout",children:"VK_KHR_uniform_buffer_standard_layout"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u5728 Vulkan 1.2 \u4e2d\u63d0\u5347\u4e3a\u6838\u5fc3\u529f\u6269\u5c55\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u6269\u5c55\u5141\u8bb8 UBO \u4f7f\u7528",(0,r.jsx)(n.code,{children:"std430"}),"\u5185\u5b58\u5e03\u5c40\uff0c\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\u53ef\u9605\u8bfb",(0,r.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#interfaces-resources-standard-layout",children:"Vulkan \u6807\u51c6\u7f13\u51b2\u533a\u5e03\u5c40\u63a5\u53e3"}),"\u3002\u8fd9\u4e9b\u5185\u5b58\u5e03\u5c40\u7684\u53d8\u52a8\u4ec5\u5bf9",(0,r.jsx)(n.code,{children:"Uniforms"}),"\u751f\u6548\uff0c\u5176\u4ed6\u5b58\u50a8\u9879\uff08\u5982 ",(0,r.jsx)(n.code,{children:"Push Constants"})," \u548c ",(0,r.jsx)(n.code,{children:"SSBO"}),"\uff09\u5df2\u7ecf\u5141\u8bb8\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"std430"})," \u5e03\u5c40\u6837\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5e94\u7528\u7a0b\u5e8f\u5982\u679c\u4e0d\u5e0c\u671b UBO \u6570\u7ec4\u6b65\u957f\u9650\u5236\u4e3a",(0,r.jsx)(n.code,{children:"extended alignment"}),"\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"uniformBufferStandardLayout"}),"\u529f\u80fd\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"layout(std140, binding = 0) uniform ubo140 {\n   float array140[8];\n};\n\nlayout(std430, binding = 1) uniform ubo430 {\n   float array430[8];\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"SPIR-V \u8f6c\u6362\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"// extended alignment for array is rounded up to multiple of 16\nOpDecorate %array140 ArrayStride 16\n\n// base alignment is 4 bytes (OpTypeFloat 32)\n// only valid with uniformBufferStandardLayout feature enabled\nOpDecorate %array430 ArrayStride 4\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u786e\u4fdd\u5728\u8fd0\u884c SPIR-V \u9a8c\u8bc1\u5668\u65f6\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"--uniform-buffer-standard-layout"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"vk_khr_relaxed_block_layout",children:"VK_KHR_relaxed_block_layout"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u6b64\u6269\u5c55\u5728 Vulkan 1.1 \u4e2d\u63d0\u5347\u4e3a\u6838\u5fc3\u6269\u5c55\uff0c\u8be5\u6269\u5c55\u672a\u6dfb\u52a0\u4efb\u4f55\u529f\u80fd\u4f4d\uff0c\u56e0\u6b64\u6240\u6709 Vulkan 1.1+ \u8bbe\u5907\u90fd\u652f\u6301\u5bbd\u677e\u7684\u5757\u5e03\u5c40\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u6269\u5c55\u5141\u8bb8\u9a71\u52a8\u5b9e\u73b0\u652f\u6301\u66f4\u591a\u5757\u504f\u79fb(",(0,r.jsx)(n.code,{children:"Offset"}),")\u7684\u4fee\u9970\u65b9\u5f0f\u3002\u5f53\u4f7f\u7528",(0,r.jsx)(n.code,{children:"std430"}),"\u5185\u5b58\u5e03\u5c40\u65f6\uff0c",(0,r.jsx)(n.code,{children:"vec3"}),"\uff0812 \u5b57\u8282\uff09 \u4ecd\u4f7f\u752816 \u5b57\u8282\u5bf9\u9f50\u3002\u4f7f\u7528\u5bbd\u677e\u7684\u5757\u5e03\u5c40\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5bf9",(0,r.jsx)(n.code,{children:"float"}),"\u548c",(0,r.jsx)(n.code,{children:"vec3"}),"\u4f7f\u7528\u66f4\u5408\u9002\u7684\u5bf9\u9f50\u957f\u5ea6\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"// SPIR-V offsets WITHOUT relaxed block layout\nlayout (set = 0, binding = 0) buffer block {\n    float b; // Offset: 0\n    vec3 a;  // Offset: 16\n} ssbo;\n\n// SPIR-V offsets WITH relaxed block layout\nlayout (set = 0, binding = 0) buffer block {\n    float b; // Offset: 0\n    vec3 a;  // Offset: 4\n} ssbo;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VK_KHR_relaxed_block_layout"}),"\u53ef\u4ee5\u770b\u4f5c\u662f",(0,r.jsx)(n.code,{children:"VK_EXT_scalar_block_layout"}),"\u7684\u5b50\u96c6\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u786e\u4fdd\u5728 Vulkan 1.0 \u73af\u5883\u8fd0\u884c SPIR-V \u9a8c\u8bc1\u5668\u65f6\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"--relax-block-layout"}),"\u3002"]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u76ee\u524dGLSL \u89c4\u8303\u8fd8\u6ca1\u6709\u660e\u786e\u5730\u8868\u8fbe\u5bbd\u677e\u7684\u5757\u5e03\u5c40\u7ec6\u8282\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"glslang"}),"\u7684",(0,r.jsx)(n.code,{children:"--hlsl-offsets"}),"\u53c2\u6570\u6765\u4ea7\u751f\u6240\u9700\u7684\u504f\u79fb\u91cf\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"vk_ext_scalar_block_layout",children:"VK_EXT_scalar_block_layout"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u5728 Vulkan 1.2 \u4e2d\u63d0\u5347\u4e3a\u6838\u5fc3\u6269\u5c55",(0,r.jsx)(n.a,{href:"https://github.com/KhronosGroup/GLSL/blob/master/extensions/ext/GL_EXT_scalar_block_layout.txt",children:"GLSL - GL_EXT_scalar_block_layout"}),"\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u6269\u5c55\u5141\u8bb8\u5927\u591a\u6570\u5b58\u50a8\u7c7b\u578b\u6309",(0,r.jsx)(n.code,{children:"scalar alignment"}),"\u5bf9\u9f50\uff0c\u4e00\u4e2a\u5f88\u5927\u7684\u533a\u522b\u662f\u80fd\u591f\u8de8\u8d8a 16 \u5b57\u8282\u7684\u8fb9\u754c\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 GLSL \u4e2d\uff0c\u8fd9\u53ef\u4ee5\u4e0e",(0,r.jsx)(n.code,{children:"scalar"})," \u5173\u952e\u5b57\u4e00\u8d77\u4f7f\u7528\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"#extension GL_EXT_scalar_block_layout : enable\nlayout (scalar, binding = 0) buffer block { }\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u786e\u4fdd\u5728\u8fd0\u884c SPIR-V \u9a8c\u8bc1\u5668\u65f6\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"--scalar-block-layout"}),"\u3002"]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Workgroup"}),"\u5b58\u50a8\u7c7b\u4e0d\u652f\u6301",(0,r.jsx)(n.code,{children:"VK_EXT_scalar_block_layout"}),"\uff0c\u652f\u6301",(0,r.jsx)(n.code,{children:"scalar"}),"\u529f\u80fd\u9700\u8981\u5728",(0,r.jsx)(n.a,{href:"https://docs.vulkan.org/guide/latest/extensions/shader_features.html#VK_KHR_workgroup_memory_explicit_layout",children:"VK_KHR_workgroup_memory_explicit_layout"})," \u4e2d\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"workgroupMemoryExplicitLayoutScalarBlockLayout"}),"\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u5bf9\u9f50\u7684\u793a\u4f8b",children:"\u5bf9\u9f50\u7684\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e9b GLSL \u5230 SPIR-V \u793a\u4f8b\uff0c\u7528\u6765\u5e2e\u52a9\u7406\u89e3\u5bf9\u9f50\u7684\u5dee\u5f02\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5bf9\u9f50\u793a\u4f8b-1",children:"\u5bf9\u9f50\u793a\u4f8b 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"layout(binding = 0) buffer block {\n    vec2 a[4];\n    vec4 b;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 SPIR-V \u4e2d\u8f6c\u6362\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"// extended alignment (std140)\nOpDecorate %vec2array ArrayStride 16\nOpMemberDecorate %block 0 Offset 0\nOpMemberDecorate %block 1 Offset 64\n\n// scalar alignment and base alignment (std430)\nOpDecorate %vec2array ArrayStride 8\nOpMemberDecorate %block 0 Offset 0\nOpMemberDecorate %block 1 Offset 32\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b-2",children:"\u793a\u4f8b 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"layout(binding = 0) buffer block {\n    float a;\n    vec2 b;\n    vec2 c;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 SPIR-V \u4e2d\u8f6c\u6362\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"// extended alignment (std140) and base alignment (std430)\nOpMemberDecorate %block 0 Offset 0\nOpMemberDecorate %block 1 Offset 8\nOpMemberDecorate %block 2 Offset 16\n\n// scalar alignment\nOpMemberDecorate %block 0 Offset 0\nOpMemberDecorate %block 1 Offset 4\nOpMemberDecorate %block 2 Offset 12\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b-3",children:"\u793a\u4f8b 3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"layout(binding = 0) buffer block {\n    vec3 a;\n    vec2 b;\n    vec4 c;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 SPIR-V \u4e2d\u8f6c\u6362\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"// extended alignment (std140) and base alignment (std430)\nOpMemberDecorate %block 0 Offset 0\nOpMemberDecorate %block 1 Offset 16\nOpMemberDecorate %block 2 Offset 32\n\n// scalar alignment\nOpMemberDecorate %block 0 Offset 0\nOpMemberDecorate %block 1 Offset 12\nOpMemberDecorate %block 2 Offset 20\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b-4",children:"\u793a\u4f8b 4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"layout (binding = 0) buffer block {\n    vec3 a;\n    vec2 b;\n    vec2 c;\n    vec3 d;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 SPIR-V \u4e2d\u8f6c\u6362\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"// extended alignment (std140) and base alignment (std430)\nOpMemberDecorate %block 0 Offset 0\nOpMemberDecorate %block 1 Offset 16\nOpMemberDecorate %block 2 Offset 24\nOpMemberDecorate %block 3 Offset 32\n\n// scalar alignment\nOpMemberDecorate %block 0 Offset 0\nOpMemberDecorate %block 1 Offset 12\nOpMemberDecorate %block 2 Offset 20\nOpMemberDecorate %block 3 Offset 28\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>t});var r=l(6540);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);