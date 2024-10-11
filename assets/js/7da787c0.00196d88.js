"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[2108],{5466:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=r(4848),t=r(8453);const s={title:"Vulkan vertex buffer\u7ed1\u5b9a\u8fc7\u7a0b",categories:["Vulkan\u6280\u672f"],tags:["\u56fe\u5f62\u57fa\u7840"],date:new Date("2023-12-28T15:11:34.000Z"),authors:"sumcai"},o="Vulkan vertex buffer\u7ed1\u5b9a\u8fc7\u7a0b",c={permalink:"/blog/13.Vulkan vertex buffer\u7ed1\u5b9a\u8fc7\u7a0b",source:"@site/blog/13.Vulkan vertex buffer\u7ed1\u5b9a\u8fc7\u7a0b.md",title:"Vulkan vertex buffer\u7ed1\u5b9a\u8fc7\u7a0b",description:"\u4ee3\u7801\u5b9e\u6218",date:"2023-12-28T15:11:34.000Z",tags:[{inline:!0,label:"\u56fe\u5f62\u57fa\u7840",permalink:"/blog/tags/\u56fe\u5f62\u57fa\u7840"}],readingTime:3.84,hasTruncateMarker:!1,authors:[{name:"\u82cf\u660e\u624d",title:"Vulkan\u9a71\u52a8\u586b\u5751\u72ee",url:"https://github.com/sumcai",email:"sumcai@163.com",page:{permalink:"/blog/authors/sumcai"},description:"\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u8054\u7cfb sumcai@163.com",socials:{github:"https://github.com/sumcai"},imageURL:"https://avatars.githubusercontent.com/u/76768485?v=4",key:"sumcai"}],frontMatter:{title:"Vulkan vertex buffer\u7ed1\u5b9a\u8fc7\u7a0b",categories:["Vulkan\u6280\u672f"],tags:["\u56fe\u5f62\u57fa\u7840"],date:"2023-12-28T15:11:34.000Z",authors:"sumcai"},unlisted:!1,prevItem:{title:"\u521b\u5efamvp ubo",permalink:"/blog/15.\u521b\u5efamvp ubo"},nextItem:{title:"\u4e00\u79cd\u7b80\u5355\u52a0\u8f7dvulkan\u52a8\u6001\u5e93\u7684\u65b9\u6cd5",permalink:"/blog/12.\u4e00\u79cd\u7b80\u5355\u52a0\u8f7dvulkan\u52a8\u6001\u5e93\u7684\u65b9\u6cd5"}},a={authorsImageUrls:[void 0]},d=[{value:"\u4ee3\u7801\u5b9e\u6218",id:"\u4ee3\u7801\u5b9e\u6218",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u4ee3\u7801\u5b9e\u6218",children:"\u4ee3\u7801\u5b9e\u6218"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u7528",(0,i.jsx)(n.code,{children:"indirect draw"}),"\u7ed8\u52366\u4e2a\u4e0d\u540c\u4f4d\u7f6e\u7684\u4e09\u89d2\u5f62\uff0c\u6548\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:r(3734).A+"",width:"905",height:"659"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["\u91cd\u70b9\uff1a\u5177\u5907",(0,i.jsx)(n.code,{children:"layout(location = xx) in"})," \u683c\u5f0f\u63cf\u8ff0\u7684\u8d44\u6e90\u5c31\u662f ",(0,i.jsx)(n.code,{children:"vertex buffer"}),"\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:["vs shader\u5982\u4e0b\uff0c ",(0,i.jsx)(n.code,{children:"inPos"}),"\uff0c",(0,i.jsx)(n.code,{children:"inColor"}),"\uff0c",(0,i.jsx)(n.code,{children:"instancePos"}),"\u5219\u662f",(0,i.jsx)(n.code,{children:"vertext buffer"}),"\u6570\u636e\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-glsl",children:"//vs\r\n#version 450 \r\nlayout (location = 0) in vec3 inPos;\r\nlayout (location = 1) in vec3 inColor;\r\nlayout (location = 2) in vec3 instancePos;\r\n \r\nlayout(location = 0) out vec3 fragColor;\r\n \r\nvoid main() {\r\n    gl_Position = vec4(inPos, 1.0) + vec4(instancePos, 1.0);\r\n    gl_Position.y = -gl_Position.y;\r\n    fragColor = inColor;\r\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"vertex buffer"}),"\u7684\u5e03\u5c40\u5206\u5e03\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"location 0"}),"\u7684",(0,i.jsx)(n.code,{children:"inPos"}),"\u3001",(0,i.jsx)(n.code,{children:"location 1"}),"\u7684",(0,i.jsx)(n.code,{children:"inColor"}),"\u4f7f\u7528",(0,i.jsx)(n.code,{children:"binding 0"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"location 2"}),"\u7684",(0,i.jsx)(n.code,{children:"instancePos"}),"\u4f7f\u7528",(0,i.jsx)(n.code,{children:"binding 1"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee3\u7801\u4fa7\u8c03\u7528",(0,i.jsx)(n.code,{children:"vkCmdBindVertexBuffers"}),"\u544a\u8bc9gpu\u4ece\u54ea\u4e2abinding\u4f4d\u7f6e\u8bfb\u53d6\u9876\u70b9\u6570\u636e\uff08\u5373",(0,i.jsx)(n.code,{children:"vkCmdBindVertexBuffers"}),"\u7684",(0,i.jsx)(n.code,{children:"firstBinding"}),"\u53c2\u6570\uff0c\u4e0eshader\u4e2d",(0,i.jsx)(n.code,{children:"layout"}),"\u7684",(0,i.jsx)(n.code,{children:"binding"}),"\u5b8c\u5168\u6ca1\u5173\u7cfb\uff0c\u8fd9\u70b9\u5728\u540e\u9762\u7684",(0,i.jsx)(n.code,{children:"descriptor"}),"\u7ae0\u8282\u518d\u8bb2\uff09\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["gpu\u77e5\u9053\u4e86\u4ece\u54ea\u91cc\u8bfb\u6570\u636e\uff0c\u4f46\u662f\u600e\u4e48\u8bfb\uff1f\u8fd9\u5c31\u7528\u5230\u4e86",(0,i.jsx)(n.code,{children:"VkVertexInputBindingDescription"}),"\u548c ",(0,i.jsx)(n.code,{children:"VkVertexInputAttributeDescription"}),"\u4e24\u4e2a\u7ed3\u6784\u4f53\uff0c\u5b83\u4eec\u5728\u521b\u5efa",(0,i.jsx)(n.code,{children:"pipeline"}),"\u65f6\u88ab\u4f7f\u7528\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7ed3\u6784\u4f53\u8be6\u7ec6\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"typedef struct VkVertexInputBindingDescription {\r\n    uint32_t             binding;   //\u6570\u636e\u7ed1\u5b9a\u4f4d\u7f6e\r\n    uint32_t             stride;    //\u8fde\u7eed\u4e24\u4e2a\u6570\u636e\u4e4b\u95f4\u7684\u95f4\u9694\r\n    VkVertexInputRate    inputRate; //\u4e24\u79cd\u65b9\u5f0f\uff0c per-vertex:\u5bf9\u6bcf\u4e2a\u9876\u70b9\u8f93\u5165\uff0c per-instance:\u5bf9\u6bcf\u4e2a\u5b9e\u4f8b\u8f93\u5165\r\n} VkVertexInputBindingDescription; \r\n \r\ntypedef struct VkVertexInputAttributeDescription {\r\n    uint32_t    location;    //\u5728shader\u4e2dlocation\u4e00\u81f4\r\n    uint32_t    binding;     //\u6570\u636e\u7ed1\u5b9a\u4f4d\u7f6e\r\n    VkFormat    format;      //\u6570\u636e\u683c\u5f0f\r\n    uint32_t    offset;      //\u5c5e\u6027\u76f8\u5bf9\u4e8e\u9876\u70b9\u5f00\u59cb\u4f4d\u7f6e\u7684\u504f\u79fb\r\n} VkVertexInputAttributeDescription;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f",(0,i.jsx)(n.code,{children:"VkVertexInputBindingDescription::inputRate"}),"\uff0c \u5b83\u4ee3\u8868\u4e24\u79cd\u6570\u636e\u8f93\u5165\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VK_VERTEX_INPUT_RATE_VERTEX\uff1aper-vertex\uff0c\u6309\u56fe\u5143\u7684\u5b9a\u70b9\u6570\u5206"}),"\n",(0,i.jsx)(n.li,{children:"VK_VERTEX_INPUT_RATE_INSTANCE\uff1aper-instance\uff0c\u6309\u56fe\u5143\u6570\u5206\u914d"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u4f8b\u753b6\u4e2a\u4e09\u89d2\u5f62\uff0c\u5bf9\u4e8e\u7f16\u53f7",(0,i.jsx)(n.code,{children:"i"}),"\u7684\u4e09\u89d2\u5f62\uff0c\u4f1a\u8bfb\u53d6\u9876\u70b9\u6570\u636e",(0,i.jsx)(n.code,{children:"vertices[0]"}),",",(0,i.jsx)(n.code,{children:"vertices[1]"}),",",(0,i.jsx)(n.code,{children:"vertices[2]"}),"\u4ee5\u53ca\u4e2d\u5fc3\u70b9\u4f4d\u7f6e",(0,i.jsx)(n.code,{children:"instancePosData[i]"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u4f8b\u5b8c\u6574\u4ee3\u7801\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"/* {inPosition, inColor}*/\r\nstruct Vertex {\r\n    vec3 pos;\r\n    vec3 color;\r\n}\r\n// vertex data of triangle\r\nstd::vector<Vertex> vertices = {\r\n    { {  0.0f,  0.2f, 0.0f }, { 1.0f, 0.0f, 0.0f } },\r\n    { { -0.2f, -0.2f, 0.0f }, { 0.0f, 1.0f, 0.0f } },\r\n    { { 0.2f,  -0.2f, 0.0f }, { 0.0f, 0.0f, 1.0f } },\r\n};\r\n// 6 triangle instance center point postion\r\nstd::vector<Vec3> instancePosData = {\r\n    {-0.45, 0.45, 0},{-0.45, -0.45, 0},{0, -0.8, 0},\r\n    {0.45, -0.45, 0},{0.45, 0.45, 0},{0, 0.8, 0},\r\n};\r\n \r\n//create vertex buffer\r\nVkDeviceSize vertexBufferSize = vertices.size() * sizeof(Vertex);\r\nVkDeviceSize instancePosBufferSize = instancePosData.size() * sizeof(Vec3);\r\n \r\ncreateBuffer(\r\n        VK_BUFFER_USAGE_VERTEX_BUFFER_BIT | VK_BUFFER_USAGE_TRANSFER_DST_BIT,\r\n        VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT | VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT,\r\n        &vertexBuffer, &vertexMemory,\r\n        vertexBufferSize, vertices.data());\r\n                    \r\ncreateBuffer(\r\n    VK_BUFFER_USAGE_VERTEX_BUFFER_BIT | VK_BUFFER_USAGE_TRANSFER_DST_BIT,\r\n    VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT | VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT,\r\n    &instancePosBuffer, &instancePosMemory,\r\n    instancePosBufferSize,instancePosData.data());\r\n \r\nVkDeviceSize offsets[] = {0};\r\n//\u4e09\u89d2\u5f62\u9876\u70b9\u4f4d\u7f6e\u3001\u989c\u8272\u6570\u636e\u4ecebinding 0\u8bfb\u53d6\r\nvkCmdBindVertexBuffers(\r\n    commandBuffer, \r\n    0,    // firstBinding\r\n    1,    // bindingCount\r\n    &vertexBuffer, \r\n    offsets);\r\n \r\n//\u4e09\u89d2\u5f62\u7684\u4e2d\u5fc3\u70b9\u4f4d\u7f6e\u4ecebinding 1\u8bfb\u53d6\r\nvkCmdBindVertexBuffers(\r\n    commandBuffer, \r\n    1,    // firstBinding\r\n    1,    // bindingCount\r\n    &instancePosBuffer, \r\n    offsets);\r\n \r\n// \u8bfb\u53d6\u9876\u70b9\u7684\u65b9\u5f0f\u3001\u4ee5\u53ca\u9876\u70b9\u6570\u636e\u5e03\u5c40\u4f20\u5165graphicsPipelineCreateInfo\r\nstd::vector<VkVertexInputBindingDescription> bindingDescription = {\r\n    {.binding=0, .stride=sizeof(Vertex), .inputRate = VK_VERTEX_INPUT_RATE_VERTEX},   //\u9010\u9876\u70b9\u65b9\u5f0f\u83b7\u53d6\u4e09\u89d2\u5f62\u9876\u70b9\u6570\u636e\r\n    {.binding=1, .stride=sizeof(Vec3), .inputRate = VK_VERTEX_INPUT_RATE_INSTANCE}    //\u9010\u5b9e\u4f8b\u65b9\u5f0f\u83b7\u53d6\u4e09\u89d2\u5f62\u4f4d\u7f6e\u6570\u636e\r\n};\r\nstd::vector<VkVertexInputAttributeDescription> attributeDescriptions = \r\n{\r\n    {.binding = 0, .location = 0, .format = VK_FORMAT_R32G32B32_SFLOAT, .offset = offsetof(Vertex, pos)},   // inPos: binding 0, location 0\r\n    {.binding = 0, .location = 1, .format = VK_FORMAT_R32G32B32_SFLOAT, .offset = offsetof(Vertex, color)}, // inColor: binding 0, location 1\r\n    {.binding = 1, .location = 2, .format = VK_FORMAT_R32G32B32_SFLOAT, .offset = 0}    // instancePos: binding 1, location 2\r\n}\r\n...\r\nvkPipelineVertexInputStateCreateInfo.pVertexBindingDescriptions = bindingDescription.data();\r\nvkPipelineVertexInputStateCreateInfo.pVertexAttributeDescriptions = attributeDescriptions.data();\r\n...\r\nvkGraphicsPipelineCreateInfo.pVertexInputState = &vkPipelineVertexInputStateCreateInfo;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u9762\u4ece\u4ee3\u7801\u5230",(0,i.jsx)(n.code,{children:"shader"}),"\u7684",(0,i.jsx)(n.code,{children:"vertex buffer"}),"\u6570\u636e\u7ed1\u5b9a\u8fc7\u7a0b\u53ef\u4ee5\u5f52\u7eb3\u6210\u8fd9\u5f20\u56fe\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:r(4553).A+"",width:"1673",height:"763"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u7bc7\u6587\u7ae0\u5bf9vertext buffer\u7684\u5904\u7406\u903b\u8f91\u8bb2\u7684\u5f88\u8be6\u7ec6\uff0c\u53ef\u4ee5\u6269\u5c55\u9605\u8bfb\u4e00\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/KhronosGroup/Vulkan-Guide/blob/main/chapters/vertex_input_data_processing.adoc",children:"https://github.com/KhronosGroup/Vulkan-Guide/blob/main/chapters/vertex_input_data_processing.adoc"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3734:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/65d40e76ed5251bbdf967ad36292d56b-b74900fe6acee48dcf61f12627dcb7c3.png"},4553:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/8713daef75640687c030b03e04e8abdf-216d6e8a28683654fc3641e858a293de.png"},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var i=r(6540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);