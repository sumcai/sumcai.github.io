"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[7968],{307:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>t,frontMatter:()=>o,metadata:()=>l,toc:()=>f});var r=i(4848),d=i(8453);const o={title:"vkBeginCommandBuffer",description:"vkBeginCommandBuffer"},c="vkBeginCommandBuffer",l={id:"api/vkBeginCommandBuffer",title:"vkBeginCommandBuffer",description:"vkBeginCommandBuffer",source:"@site/docs/api/vkBeginCommandBuffer.md",sourceDirName:"api",slug:"/api/vkBeginCommandBuffer",permalink:"/api/vkBeginCommandBuffer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"vkBeginCommandBuffer",description:"vkBeginCommandBuffer"},sidebar:"VulkanApi",previous:{title:"vkAllocateMemory",permalink:"/api/vkAllocateMemory"},next:{title:"vkBindBufferMemory",permalink:"/api/vkBindBufferMemory"}},s={},f=[{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8865\u5145",id:"\u8865\u5145",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"vkbegincommandbuffer",children:"vkBeginCommandBuffer"})}),"\n",(0,r.jsx)(n.h2,{id:"\u51fd\u6570\u539f\u578b",children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"VkResult vkBeginCommandBuffer(\n    VkCommandBuffer                             commandBuffer,\n    const VkCommandBufferBeginInfo*             pBeginInfo);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u59cb\u5f55\u5236\u547d\u4ee4\u7f13\u51b2\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"commandBuffer"})," : \u5f55\u5236\u6307\u4ee4\u7684\u547d\u4ee4\u7f13\u51b2\u533a\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pBeginInfo"})," : ",(0,r.jsx)(n.code,{children:"VkCommandBufferBeginInfo"})," \u7ed3\u6784\u4f53\u6307\u9488\uff0c\u63cf\u8ff0\u4e86\u547d\u4ee4\u7f13\u51b2\u533a\u5982\u4f55\u5f00\u59cb\u5f55\u5236\u7684\u9644\u52a0\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8865\u5145",children:"\u8865\u5145"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VkCommandBufferBeginInfo"})," \u7ed3\u6784\u4f53\u5b9a\u4e49\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"typedef struct VkCommandBufferBeginInfo {\n    VkStructureType                          sType;\n    const void*                              pNext;\n    VkCommandBufferUsageFlags                flags;\n    const VkCommandBufferInheritanceInfo*    pInheritanceInfo;\n} VkCommandBufferBeginInfo;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sType"})," : VK_STRUCTURE_TYPE_COMMAND_BUFFER_BEGIN_INFO"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"flags"})," : ",(0,r.jsx)(n.code,{children:"VkCommandBufferUsageFlagBits"})," \u7684\u4f4d\u63a9\u7801\uff0c\u7528\u4e8e\u6307\u5b9a\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u4f7f\u7528\u884c\u4e3a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"typedef enum VkCommandBufferUsageFlagBits {\n    VK_COMMAND_BUFFER_USAGE_ONE_TIME_SUBMIT_BIT = 0x00000001,\t\t\t//\u6bcf\u6b21\u8bb0\u5f55\u7684\u547d\u4ee4\u7f13\u51b2\u533a\u53ea\u63d0\u4ea4\u4e00\u6b21\uff0c\u5728\u6bcf\u6b21\u63d0\u4ea4\u524d\u91cd\u7f6e\u518d\u5f00\u59cb\u8bb0\u5f55\u3002\n    VK_COMMAND_BUFFER_USAGE_RENDER_PASS_CONTINUE_BIT = 0x00000002,\t//\u8f85\u52a9\u547d\u4ee4\u7f13\u51b2\u533a\u5b8c\u5168\u4f4d\u4e8e\u6e32\u67d3\u901a\u9053\u5185\uff0c\u4e3b\u547d\u4ee4\u7f13\u51b2\u533a\u5ffd\u7565\u6b64\u4f4d\u3002\n    VK_COMMAND_BUFFER_USAGE_SIMULTANEOUS_USE_BIT = 0x00000004,\t\t\t//\u547d\u4ee4\u7f13\u51b2\u533a\u53ef\u4ee5\u5728\u6302\u8d77\u72b6\u6001\u65f6\u91cd\u65b0\u63d0\u4ea4\u5230\u961f\u5217\uff0c\u5e76\u8bb0\u5f55\u5230\u591a\u4e2a\u4e3b\u547d\u4ee4\u7f13\u51b2\u533a\u4e2d\u3002\n} VkCommandBufferUsageFlagBits;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pInheritanceInfo"})," : ",(0,r.jsx)(n.code,{children:"VkCommandBufferInheritanceInfo"})," \u7ed3\u6784\u4f53\u6307\u9488\uff0c\u5982\u679ccommandBuffer\u662f\u8f85\u52a9\u547d\u4ee4\u7f13\u51b2\u5668\uff0c\u5219\u4f7f\u7528\u8be5\u547d\u4ee4\u7f13\u51b2\u5668\u3002\u5982\u679c\u662f\u4e3b\u547d\u4ee4\u7f13\u51b2\u533a\uff0c\u5219\u5ffd\u7565\u6b64\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"VK_SUCCESS"})," : \u6210\u529f\u5f00\u59cb\u5f55\u5236\u547d\u4ee4\u7f13\u51b2\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5176\u4ed6 : \u547d\u4ee4\u7f13\u51b2\u5f00\u59cb\u5f55\u5236\u5931\u8d25\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"VkCommandBuffer commandBuffer = create_command_buffer(device, commandPool);\nVkCommandBufferBeginInfo beginInfo{};\nbeginInfo.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_BEGIN_INFO;\nvkBeginCommandBuffer(commandBuffer, &beginInfo);\n\n"})})]})}function t(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var r=i(6540);const d={},o=r.createContext(d);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);