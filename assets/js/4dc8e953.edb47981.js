"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[8180],{1123:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=i(4848),d=i(8453);const r={title:"\u539f\u5b50\u64cd\u4f5c",description:"\u4ecb\u7ecdvulkan\u4e2d\u7684\u539f\u5b50\u64cd\u4f5c",date:new Date("2024-10-13T00:00:00.000Z")},c="\u539f\u5b50\u64cd\u4f5c",l={id:"usage/atomics",title:"\u539f\u5b50\u64cd\u4f5c",description:"\u4ecb\u7ecdvulkan\u4e2d\u7684\u539f\u5b50\u64cd\u4f5c",source:"@site/docs/usage/25-atomics.md",sourceDirName:"usage",slug:"/usage/atomics",permalink:"/usage/atomics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"\u539f\u5b50\u64cd\u4f5c",description:"\u4ecb\u7ecdvulkan\u4e2d\u7684\u539f\u5b50\u64cd\u4f5c",date:"2024-10-13T00:00:00.000Z"},sidebar:"VulkanDoc",previous:{title:"Shader\u5185\u5b58\u5e03\u5c40",permalink:"/usage/shader_memory_layout"},next:{title:"Vulkan \u7684\u5e38\u89c1\u9677\u9631",permalink:"/usage/new_developer"}},t={},o=[{value:"\u539f\u5b50\u64cd\u4f5c\u7684\u53d8\u4f53",id:"\u539f\u5b50\u64cd\u4f5c\u7684\u53d8\u4f53",level:2},{value:"\u57fa\u7ebf\u652f\u6301\u60c5\u51b5",id:"\u57fa\u7ebf\u652f\u6301\u60c5\u51b5",level:2},{value:"\u539f\u5b50\u8ba1\u6570\u5668",id:"\u539f\u5b50\u8ba1\u6570\u5668",level:3},{value:"\u652f\u6301Atomic \u7684\u6269\u5c55",id:"\u652f\u6301atomic-\u7684\u6269\u5c55",level:3},{value:"VK_KHR_shader_atomic_int64",id:"vk_khr_shader_atomic_int64",level:2},{value:"VK_EXT_shader_image_atomic_int64",id:"vk_ext_shader_image_atomic_int64",level:2},{value:"\u56fe\u50cf\u4e0e\u7a00\u758f\u56fe\u50cf\u7684\u652f\u6301",id:"\u56fe\u50cf\u4e0e\u7a00\u758f\u56fe\u50cf\u7684\u652f\u6301",level:3},{value:"VK_EXT_shader_atomic_float",id:"vk_ext_shader_atomic_float",level:2},{value:"VK_EXT_shader_atomic_float2",id:"vk_ext_shader_atomic_float2",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u539f\u5b50\u64cd\u4f5c",children:"\u539f\u5b50\u64cd\u4f5c"})}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u7ae0\u65e8\u5728\u5e2e\u52a9\u7528\u6237\u4e86\u89e3 Vulkan \u4e2d\u539f\u5b50\u64cd\u4f5c\u7684\u5404\u79cd\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u539f\u5b50\u64cd\u4f5c\u7684\u53d8\u4f53",children:"\u539f\u5b50\u64cd\u4f5c\u7684\u53d8\u4f53"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u66f4\u597d\u5730\u7406\u89e3\u4e0d\u540c\u7684\u6269\u5c55\uff0c\u9996\u5148\u91cd\u8981\u7684\u662f\u8981\u4e86\u89e3\u5404\u79cd\u516c\u5f00\u7684\u539f\u5b50\u7c7b\u578b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7c7b\u578b","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"float"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"int"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5bbd\u5ea6","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"16 bit"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"32 bit"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"64 bit"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u64cd\u4f5c","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"loads"}),"\n",(0,s.jsx)(n.li,{children:"stores"}),"\n",(0,s.jsx)(n.li,{children:"exchange"}),"\n",(0,s.jsx)(n.li,{children:"add"}),"\n",(0,s.jsx)(n.li,{children:"min"}),"\n",(0,s.jsx)(n.li,{children:"min"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5b58\u50a8\u7c7b","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"StorageBuffer"}),"\u6216",(0,s.jsx)(n.code,{children:"UniformBuffer"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Workgroup"}),"\uff08\u5171\u4eab\u5185\u5b58\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Image"}),"\uff08\u56fe\u50cf\u6216\u7a00\u758f\u56fe\u50cf\uff09"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u7ebf\u652f\u6301\u60c5\u51b5",children:"\u57fa\u7ebf\u652f\u6301\u60c5\u51b5"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Vulkan 1.0 \u4e14\u6ca1\u6709\u6269\u5c55\u7684\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u539f\u5b50\u7684",(0,s.jsx)(n.code,{children:"32-bit int"}),"\u64cd\u4f5c\uff0c\u8fd9\u53ef\u7528\u4e8e\u6240\u6709\u7684 SPIR-V \u64cd\u4f5c\uff08load\u3001 store\u3001 exchange\u7b49\uff09\u3002SPIR-V \u5305\u542b\u4e00\u4e9b\u539f\u5b50\u64cd\u4f5c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u7531",(0,s.jsx)(n.code,{children:"Kernel"}),"\u80fd\u529b\u652f\u6301\uff0c\u76ee\u524d\u5728 Vulkan \u4e2d\u4e0d\u5141\u8bb8\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u539f\u5b50\u8ba1\u6570\u5668",children:"\u539f\u5b50\u8ba1\u6570\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u867d\u7136 GLSL \u548c SPIR-V \u90fd\u652f\u6301\u4f7f\u7528\u539f\u5b50\u8ba1\u6570\u5668\uff0c\u4f46 Vulkan ",(0,s.jsx)(n.strong,{children:"\u5e76\u672a"}),"\u516c\u5f00",(0,s.jsx)(n.code,{children:"AtomicCounter"}),"\u5b58\u50a8\u7c7b\u3002\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5bf9",(0,s.jsx)(n.code,{children:"1"}),"\u4f7f\u7528",(0,s.jsx)(n.code,{children:"OpAtomicIAdd"})," \u548c",(0,s.jsx)(n.code,{children:"OpAtomicISub"})," \u6765\u5b9e\u73b0\u76f8\u540c\u7ed3\u679c\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u652f\u6301atomic-\u7684\u6269\u5c55",children:"\u652f\u6301Atomic \u7684\u6269\u5c55"}),"\n",(0,s.jsx)(n.p,{children:"\u652f\u6301\u539f\u5b50\u64cd\u4f5c\u7684\u6269\u5c55\u5305\u542b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_KHR_shader_atomic_int64.html",children:"VK_KHR_shader_atomic_int64"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_EXT_shader_image_atomic_int64.html",children:"VK_EXT_shader_image_atomic_int64"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_EXT_shader_atomic_float.html",children:"VK_EXT_shader_atomic_float"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_EXT_shader_atomic_float2.html",children:"VK_EXT_shader_atomic_float2"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u5c06\u66f4\u8be6\u7ec6\u5730\u89e3\u91ca\u6bcf\u4e2a\u6269\u5c55\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"vk_khr_shader_atomic_int64",children:"VK_KHR_shader_atomic_int64"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/KhronosGroup/GLSL/blob/master/extensions/ext/GL_EXT_shader_atomic_int64.txt",children:"GLSL - GL_EXT_shader_atomic_int64"}),"\u5728 Vulkan 1.2 \u4e2d\u63d0\u5347\u4e3a\u6838\u5fc3\u6269\u5c55\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u6269\u5c55\u5141\u8bb8\u5bf9",(0,s.jsx)(n.strong,{children:"\u7f13\u51b2\u533a"}),"\u548c",(0,s.jsx)(n.strong,{children:"\u5171\u4eab\u5185\u5b58"}),"\u6267\u884c",(0,s.jsx)(n.code,{children:"64-bit int"}),"\u7684\u539f\u5b50\u64cd\u4f5c\u3002\u5982\u679c\u58f0\u660e\u4e86",(0,s.jsx)(n.code,{children:"Int64Atomics"})," SPIR-V \u529f\u80fd\u96c6\uff0c\u5219\u6240\u6709 SPIR-V \u64cd\u4f5c\u90fd\u53ef\u4ee5\u4e0e",(0,s.jsx)(n.code,{children:"64-bit int"})," \u4e00\u8d77\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"shaderBufferInt64Atomics"}),"\u548c",(0,s.jsx)(n.code,{children:"shaderSharedInt64Atomics"}),"\u8fd9\u4e24\u4e2a\u529f\u80fd\u4f4d\u7528\u4e8e\u67e5\u8be2\u539f\u5b50\u652f\u6301\u54ea\u4e9b",(0,s.jsx)(n.code,{children:"64-bit int"}),"\u5b58\u50a8\u7c7b\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderBufferInt64Atomics"}),"-\u7f13\u51b2\u533a"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderSharedInt64Atomics"}),"- \u5171\u4eab\u5185\u5b58"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f7f\u7528 Vulkan 1.2+ \u6216\u516c\u5f00\u4e86\u6269\u5c55\uff0c\u5219",(0,s.jsx)(n.code,{children:"shaderBufferInt64Atomics"}),"\u5c31\u662f\u652f\u6301\u7684\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"vk_ext_shader_image_atomic_int64",children:"VK_EXT_shader_image_atomic_int64"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://htmlpreview.github.io/?https://github.com/KhronosGroup/SPIRV-Registry/blob/main/extensions/EXT/SPV_EXT_shader_image_int64.html",children:"SPV_EXT_shader_image_int64"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/KhronosGroup/GLSL/blob/master/extensions/ext/GLSL_EXT_shader_image_int64.txt",children:"GLSL_EXT_shader_image_int64"})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u6269\u5c55\u5141\u8bb8\u5bf9",(0,s.jsx)(n.strong,{children:"\u56fe\u50cf"}),"\u548c",(0,s.jsx)(n.strong,{children:"\u7a00\u758f\u56fe\u50cf"}),"\u8fdb\u884c",(0,s.jsx)(n.code,{children:"64-bit int"}),"d\u7684\u539f\u5b50\u64cd\u4f5c\u3002\u5982\u679c\u58f0\u660e\u4e86 ",(0,s.jsx)(n.code,{children:"Int64Atomics"}),"\u548c",(0,s.jsx)(n.code,{children:"Int64ImageEXT"})," SPIR-V \u529f\u80fd\u96c6\uff0c\u5219\u53ef\u4ee5\u5728",(0,s.jsx)(n.code,{children:"64-bit int"}),"\u56fe\u50cf\u4e0a\u4f7f\u7528\u6240\u6709 SPIR-V \u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u56fe\u50cf\u4e0e\u7a00\u758f\u56fe\u50cf\u7684\u652f\u6301",children:"\u56fe\u50cf\u4e0e\u7a00\u758f\u56fe\u50cf\u7684\u652f\u6301"}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u6269\u5c55\u516c\u5f00\u4e86",(0,s.jsx)(n.code,{children:"shaderImageInt64Atomics"}),"\u548c ",(0,s.jsx)(n.code,{children:"sparseImageInt64Atomics"}),"\u529f\u80fd\u4f4d\u3002",(0,s.jsx)(n.code,{children:"sparseImage*"}),"\u7279\u6027\u529f\u80fd\u53ea\u6709\u5728\u542f\u7528",(0,s.jsx)(n.code,{children:"shaderImage*"}),"\u4f4d\u7684\u60c5\u51b5\u4e0b\u624d\u5141\u8bb8\u4f7f\u7528\u3002\u4e00\u4e9b\u786c\u4ef6\u5f88\u96be\u5bf9\u8d44\u6e90",(0,s.jsx)(n.a,{href:"https://docs.vulkan.org/guide/latest/sparse_resources.html#sparse-resources",children:"\u7a00\u758f\u7684\u56fe\u50cf"}),"\u8fdb\u884c\u539f\u5b50\u8fd0\u7b97\uff0c\u56e0\u6b64 atomic \u529f\u80fd\u88ab\u62c6\u5206\uff0c\u4ee5\u5141\u8bb8",(0,s.jsx)(n.strong,{children:"\u7a00\u758f\u56fe\u50cf"}),"\u4f5c\u4e3a\u9a71\u52a8\u5b9e\u73b0\u53ef\u4ee5\u516c\u5f00\u7684\u9644\u52a0\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"vk_ext_shader_atomic_float",children:"VK_EXT_shader_atomic_float"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://htmlpreview.github.io/?https://github.com/KhronosGroup/SPIRV-Registry/blob/main/extensions/EXT/SPV_EXT_shader_atomic_float_add.html",children:"SPV_EXT_shader_atomic_float_add"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/KhronosGroup/GLSL/blob/master/extensions/ext/GLSL_EXT_shader_atomic_float.txt",children:"GLSL_EXT_shader_atomic_float"})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u6269\u5c55\u5141\u8bb8\u5bf9",(0,s.jsx)(n.strong,{children:"\u7f13\u51b2\u533a"}),"\u3001",(0,s.jsx)(n.strong,{children:"\u5171\u4eab\u5185\u5b58"}),"\u3001\u56fe\u50cf\u548c",(0,s.jsx)(n.strong,{children:"\u7a00\u758f\u56fe\u50cf"}),"\u6267\u884c",(0,s.jsx)(n.code,{children:"float"}),"\u539f\u5b50\u64cd\u4f5c\uff0c\u4f46\u53ea\u6709\u90e8\u5206\u64cd\u4f5c\u652f\u6301\u539f\u5b50",(0,s.jsx)(n.code,{children:"float"}),"\u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u6269\u5c55\u5217\u51fa\u4e86\u8bb8\u591a\u529f\u80fd\u4f4d\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"*Float*Atomics"})," \u548c",(0,s.jsx)(n.code,{children:"*Float*AtomicAdd"}),"\u5bf9\u5b83\u4eec\u8fdb\u884c\u5206\u7ec4 \uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"*Float*Atomics"}),"\u529f\u80fd\u5141\u8bb8\u5bf9",(0,s.jsx)(n.code,{children:"float"}),"\u7c7b\u578b\u4f7f\u7528",(0,s.jsx)(n.code,{children:"OpAtomicStore"})," \u3001 ",(0,s.jsx)(n.code,{children:"OpAtomicLoad"}),"\u548c",(0,s.jsx)(n.code,{children:"OpAtomicExchange"})," \u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8bf7\u6ce8\u610f\uff0c",(0,s.jsx)(n.code,{children:"OpAtomicCompareExchange"}),"\u201c\u4ea4\u6362\u201d\u64cd\u4f5c\u4e0d\u5305\u62ec\u5728\u5185\uff0c\u56e0\u4e3a\u8be5\u64cd\u4f5c SPIR-V \u53ea\u652f\u6301",(0,s.jsx)(n.code,{children:"int"}),"\u7c7b\u578b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"*Float*AtomicAdd"}),"\u529f\u80fd\u5141\u8bb8\u4f7f\u7528\u4e24\u4e2a SPIR-V \u6269\u5c55\u64cd\u4f5c\uff1a",(0,s.jsx)(n.code,{children:"AtomicFloat32AddEXT"}),"\u548c",(0,s.jsx)(n.code,{children:"AtomicFloat64AddEXT"})," \u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4f59\u7684\u662f\u652f\u6301",(0,s.jsx)(n.code,{children:"32-bit float"}),"\u7684\u529f\u80fd\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderBufferFloat32*"}),"-\u7f13\u51b2\u533a"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderSharedFloat32*"}),"- \u5171\u4eab\u5185\u5b58"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderImageFloat32*"}),"-\u56fe\u50cf"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sparseImageFloat32*"}),"- \u7a00\u758f\u56fe\u50cf"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u548c\u652f\u6301",(0,s.jsx)(n.code,{children:"64-bit float"}),"\u7684\u529f\u80fd\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderBufferFloat64*"}),"-\u7f13\u51b2\u533a"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderSharedFloat64*"}),"- \u5171\u4eab\u5185\u5b58"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["OpenGLES\u7684 ",(0,s.jsx)(n.a,{href:"https://registry.khronos.org/OpenGL/extensions/OES/OES_shader_image_atomic.txt",children:"OES_shader_image_atomic"})," \u5141\u8bb8",(0,s.jsx)(n.code,{children:"imageAtomicExchange"}),"\u4f7f\u7528\u539f\u5b50\u7684",(0,s.jsx)(n.code,{children:"r32f"}),"\u3002\u5bf9\u4e8e\u79fb\u690d\u7684shader\uff0cvulkan\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u68c0\u67e5\u662f\u5426\u652f\u6301",(0,s.jsx)(n.code,{children:"shaderImageFloat32Atomics"}),"\uff0c\u4ee5\u4fbf\u80fd\u591f\u5728 Vulkan \u4e2d\u5b9e\u73b0\u76f8\u5f53\u7684\u529f\u80fd\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"vk_ext_shader_atomic_float2",children:"VK_EXT_shader_atomic_float2"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://htmlpreview.github.io/?https://github.com/KhronosGroup/SPIRV-Registry/blob/main/extensions/EXT/SPV_EXT_shader_atomic_float_min_max.html",children:"SPV_EXT_shader_atomic_float_min_max"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://htmlpreview.github.io/?https://github.com/KhronosGroup/SPIRV-Registry/blob/main/extensions/EXT/SPV_EXT_shader_atomic_float16_add.html",children:"SPV_EXT_shader_atomic_float16_add"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/KhronosGroup/GLSL/blob/master/extensions/ext/GLSL_EXT_shader_atomic_float.txt",children:"GLSL_EXT_shader_atomic_float"})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u6269\u5c55\u5728",(0,s.jsx)(n.code,{children:"VK_EXT_shader_atomic_float"}),"\u7684\u57fa\u7840\u4e0a\u6dfb\u52a0\u4e86 2 \u4e2a\u529f\u80fd\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5b83\u4e3a ",(0,s.jsx)(n.strong,{children:"buffer"})," \u548c",(0,s.jsx)(n.strong,{children:"\u5171\u4eab\u5185\u5b58"}),"\u6dfb\u52a0\u4e86",(0,s.jsx)(n.code,{children:"16-bit floats"}),"\u529f\u80fd \u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderBufferFloat16*"}),"-\u7f13\u51b2\u533a"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderSharedFloat16*"}),"- \u5171\u4eab\u5185\u5b58"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u6b21\uff0c\u5b83\u652f\u6301\u4e86",(0,s.jsx)(n.code,{children:"float"}),"\u7684",(0,s.jsx)(n.code,{children:"min"}),"\u548c",(0,s.jsx)(n.code,{children:"max"}),"\u539f\u5b50\u64cd\u4f5c \uff08 ",(0,s.jsx)(n.code,{children:"OpAtomicFMinEXT"}),"\u548c",(0,s.jsx)(n.code,{children:"OpAtomicFMaxEXT"}),")\uff0c"]}),"\n",(0,s.jsxs)(n.p,{children:["\u652f\u6301",(0,s.jsx)(n.code,{children:"16-bit float"}),"\uff08",(0,s.jsx)(n.code,{children:"AtomicFloat16MinMaxEXT"}),"\u529f\u80fd\uff09\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderBufferFloat16AtomicMinMax"}),"-\u7f13\u51b2\u533a"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderSharedFloat16AtomicMinMax"}),"- \u5171\u4eab\u5185\u5b58"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u652f\u6301",(0,s.jsx)(n.code,{children:"32-bit float"}),"\uff08",(0,s.jsx)(n.code,{children:"AtomicFloat32MinMaxEXT"}),"\u529f\u80fd\uff09\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderBufferFloat32AtomicMinMax"}),"-\u7f13\u51b2\u533a"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderSharedFloat32AtomicMinMax"}),"- \u5171\u4eab\u5185\u5b58"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderImageFloat32AtomicMinMax"}),"-\u56fe\u50cf"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sparseImageFloat32AtomicMinMax"}),"- \u7a00\u758f\u56fe\u50cf"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u652f\u6301",(0,s.jsx)(n.code,{children:"64-bit float"}),"\uff08",(0,s.jsx)(n.code,{children:"AtomicFloat64MinMaxEXT"}),"\u529f\u80fd\uff09\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderBufferFloat64AtomicMinMax"}),"-\u7f13\u51b2\u533a"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shaderSharedFloat64AtomicMinMax"}),"- \u5171\u4eab\u5185\u5b58"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var s=i(6540);const d={},r=s.createContext(d);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);