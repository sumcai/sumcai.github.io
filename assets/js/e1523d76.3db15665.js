"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[4006],{9313:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>t,contentTitle:()=>u,default:()=>l,frontMatter:()=>d,metadata:()=>i,toc:()=>p});var n=r(4848),o=r(8453);const d={title:"\u5b50\u7ec4",description:"\u4ecb\u7ecdvulkan\u4e2d\u7684subgroups",date:new Date("2024-10-12T00:00:00.000Z")},u="subgroups",i={id:"usage/subgroups",title:"\u5b50\u7ec4",description:"\u4ecb\u7ecdvulkan\u4e2d\u7684subgroups",source:"@site/docs/usage/23-subgroups.md",sourceDirName:"usage",slug:"/usage/subgroups",permalink:"/usage/subgroups",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"\u5b50\u7ec4",description:"\u4ecb\u7ecdvulkan\u4e2d\u7684subgroups",date:"2024-10-12T00:00:00.000Z"},sidebar:"VulkanDoc",previous:{title:"\u52a8\u6001\u7ba1\u7ebf\u72b6\u6001",permalink:"/usage/pipeline_dynamic_state"},next:{title:"Shader\u5185\u5b58\u5e03\u5c40",permalink:"/usage/shader_memory_layout"}},t={},p=[{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"<code>subgroup</code>\u5927\u5c0f",id:"subgroup\u5927\u5c0f",level:2},{value:"VK_EXT_subgroup_size_control",id:"vk_ext_subgroup_size_control",level:3},{value:"\u68c0\u67e5\u662f\u5426\u652f\u6301",id:"\u68c0\u67e5\u662f\u5426\u652f\u6301",level:2},{value:"\u4fdd\u8bc1\u652f\u6301",id:"\u4fdd\u8bc1\u652f\u6301",level:3},{value:"VK_KHR_shader_subgroup_extended_types",id:"vk_khr_shader_subgroup_extended_types",level:2},{value:"VK_EXT_shader_subgroup_ballot \u548c VK_EXT_shader_subgroup_vote",id:"vk_ext_shader_subgroup_ballot-\u548c-vk_ext_shader_subgroup_vote",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"subgroups",children:"subgroups"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"subgroups"}),"\u79f0\u4e3a",(0,n.jsx)(s.code,{children:"\u5b50\u7ec4"}),"\uff0cVulkan \u89c4\u8303\u5c06\u5176\u5b9a\u4e49\u4e3a\uff1a"]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"\u4e00\u7ec4\u53ef\u4ee5\u9ad8\u6548\u76f8\u4e92\u540c\u6b65\u548c\u5171\u4eab\u6570\u636e\u7684\u7740\u8272\u5668\u8c03\u7528\u3002\u5728\u8ba1\u7b97\u7740\u8272\u5668\u4e2d\uff0c\u672c\u5730\u5de5\u4f5c\u7ec4\u662f\u5b50\u7ec4\u7684\u8d85\u96c6\u3002"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5bf9\u4e8e\u8bb8\u591a\u9a71\u52a8\u5b9e\u73b0\uff0c",(0,n.jsx)(s.code,{children:"subgroup"})," \u662f\u540c\u65f6\u8fd0\u884c\u540c\u4e00\u6307\u4ee4\u7684\u8c03\u7528\u7ec4\u3002",(0,n.jsx)(s.code,{children:"subgroup"})," \u5141\u8bb8\u7740\u8272\u5668\u4ee5\u6bd4\u5355\u4e2a\u5de5\u4f5c\u7ec4\u66f4\u7cbe\u7ec6\u7684\u7c92\u5ea6\u8fdb\u884c\u5de5\u4f5c\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u8d44\u6e90",children:"\u8d44\u6e90"}),"\n",(0,n.jsxs)(s.p,{children:["\u5173\u4e8e",(0,n.jsx)(s.code,{children:"subgroup"})," \u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4e00\u7bc7\u5f88\u68d2\u7684 ",(0,n.jsx)(s.a,{href:"https://www.khronos.org/blog/vulkan-subgroup-tutorial",children:"Khronos \u535a\u5ba2\u6587\u7ae0"}),"\uff0c\u4ee5\u53ca 2018 \u5e74 Vulkan \u5f00\u53d1\u8005\u5927\u4f1a\u7684",(0,n.jsx)(s.a,{href:"https://www.khronos.org/assets/uploads/developers/library/2018-vulkan-devday/06-subgroups.pdf",children:"PPT"}),"\u548c",(0,n.jsx)(s.a,{href:"https://www.youtube.com/watch?v=8MyqQLu_tW0",children:"\u89c6\u9891"}),"\uff09\uff0cGLSL \u5bf9",(0,n.jsx)(s.code,{children:"subgroup"}),"\u7684\u652f\u6301\u5728 ",(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/GLSL/blob/master/extensions/khr/GL_KHR_shader_subgroup.txt",children:"GL_KHR_shader_subgroup"})," \u6269\u5c55\u4e2d\u53ef\u4ee5\u627e\u5230\u3002"]}),"\n",(0,n.jsxs)(s.h2,{id:"subgroup\u5927\u5c0f",children:[(0,n.jsx)(s.code,{children:"subgroup"}),"\u5927\u5c0f"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"subgroup"}),"\u7684\u5927\u5c0f\u662f\u9a71\u52a8\u52a8\u6001\u8c03\u6574\u7684\uff0c\u67d0\u4e9b\u9a71\u52a8\u5b9e\u73b0\u6267\u884c\u7740\u8272\u5668\u65f6\u53ef\u80fd\u4f1a\u4e3a\u4e0d\u540c\u7684",(0,n.jsx)(s.code,{children:"subgroup"}),"\u5206\u6d3e\u4e0d\u540c\u7684",(0,n.jsx)(s.code,{children:"subgroup"}),"\u5927\u5c0f\u3002\u56e0\u6b64\uff0c\u4ed6\u4eec\u53ef\u4ee5\u9690\u5f0f\u5730\u5c06\u4e00\u4e2a\u5927\u578b",(0,n.jsx)(s.code,{children:"subgroup"}),"\u62c6\u5206\u4e3a\u8f83\u5c0f\u7684",(0,n.jsx)(s.code,{children:"subgroup"}),"\uff0c\u6216\u8005\u5c06\u4e00\u4e2a\u5c0f\u578b",(0,n.jsx)(s.code,{children:"subgroup"}),"\u8868\u793a\u4e3a\u8f83\u5927\u7684",(0,n.jsx)(s.code,{children:"subgroup"}),"\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"vk_ext_subgroup_size_control",children:"VK_EXT_subgroup_size_control"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"\u5728 Vulkan 1.3 \u4e2d\u63d0\u5347\u4e3a\u6838\u5fc3\u6269\u5c55"})}),"\n",(0,n.jsxs)(s.p,{children:["\u521b\u5efa\u6b64\u6269\u5c55\u7684\u539f\u56e0\u662f\u67d0\u4e9b\u9a71\u52a8\u5b9e\u73b0\u5177\u6709\u591a\u4e2a\u5927\u5c0f\uff0c\u800c Vulkan \u6700\u521d\u53ea\u516c\u5f00\u4e86\u5355\u4e2a",(0,n.jsx)(s.code,{children:"subgroup"}),"\u5927\u5c0f\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u4e2a\u9a71\u52a8\u5b9e\u73b0\u540c\u65f6\u652f\u6301",(0,n.jsx)(s.code,{children:"4"})," \u548c ",(0,n.jsx)(s.code,{children:"16"}),"\u5927\u5c0f\u7684",(0,n.jsx)(s.code,{children:"subgroup"}),"\uff0c\u4ee5\u524d\u53ea\u9700\u8981\u516c\u5f00\u4e00\u4e2a size\uff0c\u4f46\u73b0\u5728\u53ef\u4ee5\u540c\u65f6\u516c\u5f00\u4e24\u4e2a size\u3002\u8fd9\u610f\u5473\u7740\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u4ee5\u66f4\u7cbe\u7ec6\u7684\u7c92\u5ea6\u63a7\u5236\u591a\u4e2a",(0,n.jsx)(s.code,{children:"subgroup"}),"\u7684\u786c\u4ef6\u3002\u5982\u679c\u8bbe\u5907\u4e0d\u652f\u6301\u8be5\u6269\u5c55\uff0c\u5219\u610f\u5473\u7740\u53ea\u516c\u5f00\u652f\u6301\u4e00\u4e2a",(0,n.jsx)(s.code,{children:"subgroup"}),"\u7684\u5927\u5c0f\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u68c0\u67e5\u662f\u5426\u652f\u6301",children:"\u68c0\u67e5\u662f\u5426\u652f\u6301"}),"\n",(0,n.jsxs)(s.p,{children:["\u5728 Vulkan 1.1 \u4e2d\uff0c",(0,n.jsx)(s.code,{children:"subgroup"}),"\u6240\u6709\u7684\u4fe1\u606f\u90fd\u53ef\u4ee5\u5728",(0,n.jsx)(s.code,{children:"VkPhysicalDeviceSubgroupProperties"}),"\u4e2d\u67e5\u5230\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cpp",children:"VkPhysicalDeviceSubgroupProperties subgroupProperties;\n\nVkPhysicalDeviceProperties2KHR deviceProperties2;\ndeviceProperties2.sType      = VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PROPERTIES_2;\ndeviceProperties2.pNext      = &subgroupProperties;\nvkGetPhysicalDeviceProperties2(physicalDevice, &deviceProperties2);\n\n// Example of checking if supported in fragment shader\nif ((subgroupProperties.supportedStages & VK_SHADER_STAGE_FRAGMENT_BIT) != 0) {\n    // fragment shaders supported\n}\n\n// Example of checking if ballot is supported\nif ((subgroupProperties.supportedOperations & VK_SUBGROUP_FEATURE_BALLOT_BIT) != 0) {\n    // ballot subgroup operations supported\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"\u4fdd\u8bc1\u652f\u6301",children:"\u4fdd\u8bc1\u652f\u6301"}),"\n",(0,n.jsx)(s.p,{children:"Vulkan Spec\u5f3a\u8c03\u9a71\u52a8\u5b9e\u73b0\u5fc5\u987b\u652f\u6301\u7684\u7ba1\u7ebf\u9636\u6bb5\uff1a"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["\u5982\u679c\u7269\u7406\u8bbe\u5907\u652f\u6301",(0,n.jsx)(s.strong,{children:"VK_QUEUE_COMPUTE_BIT"}),"\u961f\u5217\uff0c\u5219 ",(0,n.jsx)(s.strong,{children:"supportedStages"})," \u5c06\u8bbe\u7f6e ",(0,n.jsx)(s.strong,{children:"VK_SHADER_STAGE_COMPUTE_BIT"})," \u4f4d\u3002"]})}),"\n",(0,n.jsx)(s.p,{children:"Vulkan Spec\u5f3a\u8c03\u9a71\u52a8\u5b9e\u73b0\u5fc5\u987b\u652f\u6301\u7684\u64cd\u4f5c\uff1a"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["\u5982\u679c\u7269\u7406\u8bbe\u5907\u652f\u6301 ",(0,n.jsx)(s.strong,{children:"VK_QUEUE_GRAPHICS_BIT"})," \u6216 ",(0,n.jsx)(s.strong,{children:"VK_QUEUE_COMPUTE_BIT"}),"\u961f\u5217\uff0c\u5219",(0,n.jsx)(s.strong,{children:"supportedOperations"})," \u5c06\u8bbe\u7f6e ",(0,n.jsx)(s.strong,{children:"VK_SUBGROUP_FEATURE_BASIC_BIT"})," \u4f4d\u3002"]})}),"\n",(0,n.jsx)(s.h2,{id:"vk_khr_shader_subgroup_extended_types",children:"VK_KHR_shader_subgroup_extended_types"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["\u5728 Vulkan 1.2 \u4e2d\u63d0\u5347\u4e3a\u6838\u5fc3\u6269\u5c55",(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/GLSL/blob/master/extensions/ext/GLSL_EXT_shader_subgroup_extended_types.txt",children:"GLSL_EXT_shader_subgroup_extended_types"})]})}),"\n",(0,n.jsxs)(s.p,{children:["\u6b64\u6269\u5c55\u5141\u8bb8\u5728 ",(0,n.jsx)(s.code,{children:"subgroup"})," \u8303\u56f4\u7684group\u64cd\u4f5c\u4f7f\u7528 8 \u4f4d\u6574\u6570\u300116 \u4f4d\u6574\u6570\u300164 \u4f4d\u6574\u6570\u300116 \u4f4d\u6d6e\u70b9\u548c\u8fd9\u4e9b\u7c7b\u578b\u7684\u5411\u91cf\uff08\u524d\u63d0\u662f\u9a71\u52a8\u5b9e\u73b0\u652f\u6301\u8fd9\u4e9b\u7c7b\u578b\uff09\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4f8b\u5982\uff0c\u5982\u679c\u9a71\u52a8\u5b9e\u73b0\u652f\u6301 8 \u4f4d\u6574\u6570\uff0c\u90a3\u4e48\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528 GLSL\u7684 ",(0,n.jsx)(s.code,{children:"genI8Type subgroupAdd(genI8Type value);"}),"\u8c03\u7528\uff0c\u8be5\u8c03\u7528\u5c06\u5728 SPIR-V \u4e2d\u6620\u5c04\u5230",(0,n.jsx)(s.code,{children:"OpGroupNonUniformFAdd"}),"\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"vk_ext_shader_subgroup_ballot-\u548c-vk_ext_shader_subgroup_vote",children:"VK_EXT_shader_subgroup_ballot \u548c VK_EXT_shader_subgroup_vote"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"VK_EXT_shader_subgroup_ballot"}),"\u548c",(0,n.jsx)(s.code,{children:"VK_EXT_shader_subgroup_vote"}),"\u662f Vulkan \u6700\u5f00\u59cb\u516c\u5f00\u7684 ",(0,n.jsx)(s.code,{children:"subgroup"}),"\u6269\u5c55\u3002\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u7684\u662f Vulkan 1.1 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u5219\u65e0\u9700\u4f7f\u7528\u8fd9\u4e9b\u6269\u5c55\uff0c\u800c\u5e94\u4f7f\u7528\u6838\u5fc3 API \u6765\u67e5\u8be2\u662f\u5426\u652f\u6301 ",(0,n.jsx)(s.code,{children:"subgroup"}),"\u3002"]})]})}function l(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>u,x:()=>i});var n=r(6540);const o={},d=n.createContext(o);function u(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);