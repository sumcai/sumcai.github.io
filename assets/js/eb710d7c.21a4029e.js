"use strict";(self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[]).push([[8300],{2377:(r,e,f)=>{f.r(e),f.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=f(4848),t=f(8453);const a={title:"Framebuffer\u7528\u6cd5",categories:["opengl\u6280\u672f"],tags:["opengl\u57fa\u7840","framebuffe"],permalink:"/opengl/framebuffer/",authors:"sumcai",date:new Date("2021-12-26T20:14:37.000Z")},l="Framebuffer\u4ecb\u7ecd",o={permalink:"/blog/09.Framebuffer\u7528\u6cd5",source:"@site/blog/09.Framebuffer\u7528\u6cd5.md",title:"Framebuffer\u7528\u6cd5",description:"opengl\u4e2dframebuffer\u79f0\u4e3a\u5e27\u7f13\u51b2\uff0c\u5b83\u662f\u4e00\u4e2a\u5185\u5b58\u7f13\u51b2\u533a\uff0c\u5982\u679c\u628a\u6e32\u67d3\u5230\u5c4f\u5e55\u7684\u989c\u8272\u7f13\u51b2\uff0c\u6df1\u5ea6\u7f13\u51b2\uff0c\u6a21\u677f\u7f13\u51b2\u90fd\u7f13\u5b58\u5230\u5185\u5b58\u4e2d\uff0c\u90a3\u4e48\u5c31\u53eb\u5e27\u7f13\u51b2\u3002",date:"2021-12-26T20:14:37.000Z",tags:[{inline:!0,label:"opengl\u57fa\u7840",permalink:"/blog/tags/opengl\u57fa\u7840"},{inline:!0,label:"framebuffe",permalink:"/blog/tags/framebuffe"}],readingTime:4.545,hasTruncateMarker:!1,authors:[{name:"\u82cf\u660e\u624d",title:"Vulkan\u9a71\u52a8\u586b\u5751\u72ee",url:"https://github.com/sumcai",email:"sumcai@163.com",page:{permalink:"/blog/authors/sumcai"},description:"\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u8054\u7cfb sumcai@163.com",socials:{github:"https://github.com/sumcai"},imageURL:"https://avatars.githubusercontent.com/u/76768485?v=4",key:"sumcai"}],frontMatter:{title:"Framebuffer\u7528\u6cd5",categories:["opengl\u6280\u672f"],tags:["opengl\u57fa\u7840","framebuffe"],permalink:"/opengl/framebuffer/",authors:"sumcai",date:"2021-12-26T20:14:37.000Z"},unlisted:!1,prevItem:{title:"\u4e00\u79cd\u7b80\u5355\u52a0\u8f7dvulkan\u52a8\u6001\u5e93\u7684\u65b9\u6cd5",permalink:"/blog/12.\u4e00\u79cd\u7b80\u5355\u52a0\u8f7dvulkan\u52a8\u6001\u5e93\u7684\u65b9\u6cd5"},nextItem:{title:"Blend\u7528\u6cd5",permalink:"/blog/08.Blend\u7528\u6cd5"}},i={authorsImageUrls:[void 0]},s=[{value:"Framebuffer\u7528\u6cd5",id:"framebuffer\u7528\u6cd5",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}];function g(r){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...r.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"opengl\u4e2dframebuffer\u79f0\u4e3a\u5e27\u7f13\u51b2\uff0c\u5b83\u662f\u4e00\u4e2a\u5185\u5b58\u7f13\u51b2\u533a\uff0c\u5982\u679c\u628a\u6e32\u67d3\u5230\u5c4f\u5e55\u7684\u989c\u8272\u7f13\u51b2\uff0c\u6df1\u5ea6\u7f13\u51b2\uff0c\u6a21\u677f\u7f13\u51b2\u90fd\u7f13\u5b58\u5230\u5185\u5b58\u4e2d\uff0c\u90a3\u4e48\u5c31\u53eb\u5e27\u7f13\u51b2\u3002"}),"\n",(0,n.jsx)(e.h2,{id:"framebuffer\u7528\u6cd5",children:"Framebuffer\u7528\u6cd5"}),"\n",(0,n.jsx)(e.p,{children:"framebuffer\u901a\u5e38\u7528\u5728\u79bb\u5c4f\u6e32\u67d3\u6216\u8005\u540e\u5904\u7406\u4e0a\uff0c\u4e3b\u8981\u6d89\u53ca\u8fd9\u51e0\u4e2a\u51fd\u6570\uff1a"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"glGenFramebuffers"})," \uff1a\u521b\u5efaframebuffer"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"glBindFramebuffer"})," \uff1a\u7ed1\u5b9aframebuffer"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"glFramebufferTexture2D"})," \uff1a\u5c06\u7eb9\u7406\u9644\u52a0\u5230framebuffer\u5230\uff0c\u5b9e\u73b0\u7ed8\u5236\u5230\u7eb9\u7406"]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,n.jsxs)(e.p,{children:["\u6211\u4eec\u6a21\u62df\u4e00\u4e2a\u540e\u5904\u7406\u64cd\u4f5c\uff0c\u5c06",(0,n.jsx)(e.a,{href:"http://iogl.cn/opengl/blend/",children:"Blend\u7528\u6cd5"}),"\u4e2d\u7684\u7ed8\u5236\u7ed3\u679c\u753b\u5728\u5c4f\u5e55\u4e2d\u592e\uff0c\u5e76\u4e14\u5bf9\u7ed3\u679c\u7684\u989c\u8272\u53d6\u53cd\u5411\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u5177\u4f53\u4ee3\u7801\uff1a"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"05.FBTexture.fs"}),"\u5185\u5bb9\uff1a"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-glsl",children:"#version 330 core\r\nin vec2 TexCoord;\r\nuniform sampler2D tex1;\r\nout vec4 FragColor;\r\nvoid main()\r\n{\r\n    FragColor = vec4(vec3(1.0 - texture(tex1, TexCoord)), 1.0);\r\n}\n"})}),"\n",(0,n.jsx)(e.p,{children:"\u5b9e\u73b0\u4ee3\u7801\uff1a"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-c++",children:'void display( GLFWwindow* window )\r\n{\r\n    // 1.\u7ed1\u5b9aframebuffer\uff0c\u8fd9\u6837\u53ef\u4ee5\u7ed8\u5236\u5230\u9644\u52a0\u7684\u7eb9\u7406fbTexture\u4e0a\r\n    glBindFramebuffer(GL_FRAMEBUFFER, framebuffer);\r\n    glEnable(GL_DEPTH_TEST);\r\n    glEnable(GL_BLEND);\r\n    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);\r\n    glClearColor( 0, 0, 0.4, 0 );\r\n    glClear( GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\r\n\r\n    glUseProgram(boxProgramID);\r\n\r\n    glm::mat4 projection = glm::perspective(glm::radians(45.0f), (float) 5 / (float)5, 0.1f, 100.0f);\r\n    glm::mat4 view = glm::lookAt(glm::vec3(1,2,3), glm::vec3(0,0,0), glm::vec3(0,1,0));\r\n    glm::mat4 model = glm::mat4(1.0f);\r\n    glm::mat4 mvp = projection * view * model;\r\n\r\n    // 2.\u753b\u5730\u9762\r\n    GLuint mvpId = glGetUniformLocation(boxProgramID, "MVP");\r\n    glUniformMatrix4fv(mvpId, 1, GL_FALSE, &mvp[0][0]);\r\n    glBindVertexArray(FloorVAO);\r\n    glBindTexture(GL_TEXTURE_2D, floorTexture);\r\n    glDrawArrays(GL_TRIANGLES, 0, 6);\r\n\r\n    // 3.\u753b\u7acb\u65b9\u4f53\r\n    glBindVertexArray(VAO);\r\n    glBindTexture(GL_TEXTURE_2D, texture);\r\n    glDrawArrays(GL_TRIANGLES, 0, 36);\r\n\r\n    // 4.\u753bblend\u7269\u4f53\r\n    model = glm::mat4(1.0f);\r\n    model = glm::translate(model, glm::vec3(0, 0, 1.01f));\r\n    mvp = projection * view * model;\r\n    glUniformMatrix4fv(mvpId, 1, GL_FALSE, &mvp[0][0]);\r\n    glBindTexture(GL_TEXTURE_2D, blendTexture);\r\n    glDrawArrays(GL_TRIANGLES, 0, 6);\r\n    \r\n    // 5.\u5bf9fbTexture\u91c7\u6837\u540e\u5904\u7406\u5c06\u7ed8\u5236\u5230\u5c4f\u5e55\r\n    glDisable(GL_DEPTH_TEST);\r\n    glDisable(GL_BLEND);\r\n    glBindFramebuffer(GL_FRAMEBUFFER, 0);\r\n    glClearColor(0.3f, 0.3f, 0.3f, 1.0f);\r\n    glClear(GL_COLOR_BUFFER_BIT);\r\n    glUseProgram(screenProgramID);\r\n    glBindVertexArray(screenVAO);\r\n    glBindTexture(GL_TEXTURE_2D, fbTexture);\r\n    glDrawArrays(GL_TRIANGLES, 0, 6);\r\n}\r\n\r\nvoid prepare() {\r\n    boxProgramID = LoadShaders( "data/shader/03.MVP.vs", "data/shader/03.MVP.fs" );\r\n\r\n    const GLfloat g_vertex_buffer_data[] = {\r\n            -0.5f, -0.5f, -0.5f,  0.0f, 0.0f,\r\n            0.5f, -0.5f, -0.5f,  1.0f, 0.0f,\r\n            0.5f,  0.5f, -0.5f,  1.0f, 1.0f,\r\n            0.5f,  0.5f, -0.5f,  1.0f, 1.0f,\r\n            -0.5f,  0.5f, -0.5f,  0.0f, 1.0f,\r\n            -0.5f, -0.5f, -0.5f,  0.0f, 0.0f,\r\n\r\n            -0.5f, -0.5f,  0.5f,  0.0f, 0.0f,\r\n            0.5f, -0.5f,  0.5f,  1.0f, 0.0f,\r\n            0.5f,  0.5f,  0.5f,  1.0f, 1.0f,\r\n            0.5f,  0.5f,  0.5f,  1.0f, 1.0f,\r\n            -0.5f,  0.5f,  0.5f,  0.0f, 1.0f,\r\n            -0.5f, -0.5f,  0.5f,  0.0f, 0.0f,\r\n\r\n            -0.5f,  0.5f,  0.5f,  1.0f, 0.0f,\r\n            -0.5f,  0.5f, -0.5f,  1.0f, 1.0f,\r\n            -0.5f, -0.5f, -0.5f,  0.0f, 1.0f,\r\n            -0.5f, -0.5f, -0.5f,  0.0f, 1.0f,\r\n            -0.5f, -0.5f,  0.5f,  0.0f, 0.0f,\r\n            -0.5f,  0.5f,  0.5f,  1.0f, 0.0f,\r\n\r\n            0.5f,  0.5f,  0.5f,  1.0f, 0.0f,\r\n            0.5f,  0.5f, -0.5f,  1.0f, 1.0f,\r\n            0.5f, -0.5f, -0.5f,  0.0f, 1.0f,\r\n            0.5f, -0.5f, -0.5f,  0.0f, 1.0f,\r\n            0.5f, -0.5f,  0.5f,  0.0f, 0.0f,\r\n            0.5f,  0.5f,  0.5f,  1.0f, 0.0f,\r\n\r\n            -0.5f, -0.5f, -0.5f,  0.0f, 1.0f,\r\n            0.5f, -0.5f, -0.5f,  1.0f, 1.0f,\r\n            0.5f, -0.5f,  0.5f,  1.0f, 0.0f,\r\n            0.5f, -0.5f,  0.5f,  1.0f, 0.0f,\r\n            -0.5f, -0.5f,  0.5f,  0.0f, 0.0f,\r\n            -0.5f, -0.5f, -0.5f,  0.0f, 1.0f,\r\n\r\n            -0.5f,  0.5f, -0.5f,  0.0f, 1.0f,\r\n            0.5f,  0.5f, -0.5f,  1.0f, 1.0f,\r\n            0.5f,  0.5f,  0.5f,  1.0f, 0.0f,\r\n            0.5f,  0.5f,  0.5f,  1.0f, 0.0f,\r\n            -0.5f,  0.5f,  0.5f,  0.0f, 0.0f,\r\n            -0.5f,  0.5f, -0.5f,  0.0f, 1.0f\r\n    };\r\n\r\n    float fllor_vertex_buffer_data[] = {\r\n            5.0f, -0.5f,  5.0f,  1.0f, 0.0f,\r\n            -5.0f, -0.5f,  5.0f,  0.0f, 0.0f,\r\n            -5.0f, -0.5f, -5.0f,  0.0f, 1.0f,\r\n\r\n            5.0f, -0.5f,  5.0f,  1.0f, 0.0f,\r\n            -5.0f, -0.5f, -5.0f,  0.0f, 1.0f,\r\n            5.0f, -0.5f, -5.0f,  1.0f, 1.0f\r\n    };\r\n    float blend_vertex_buffer_data[] = {\r\n            0.0f,  0.5f,  0.0f,  0.0f,  0.0f,\r\n            0.0f, -0.5f,  0.0f,  0.0f,  1.0f,\r\n            1.0f, -0.5f,  0.0f,  1.0f,  1.0f,\r\n\r\n            0.0f,  0.5f,  0.0f,  0.0f,  0.0f,\r\n            1.0f, -0.5f,  0.0f,  1.0f,  1.0f,\r\n            1.0f,  0.5f,  0.0f,  1.0f,  0.0f\r\n    };\r\n\r\n    // 1.VAO\u3001VBO\u7684\u6570\u636e\r\n    glGenVertexArrays(1, &VAO);\r\n    glBindVertexArray(VAO);\r\n    GLuint VBO1;\r\n    glGenBuffers(1, &VBO1);\r\n    glBindBuffer(GL_ARRAY_BUFFER, VBO1);\r\n    glBufferData(GL_ARRAY_BUFFER, sizeof(g_vertex_buffer_data), g_vertex_buffer_data, GL_STATIC_DRAW);\r\n    glEnableVertexAttribArray(0);\r\n    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(GLfloat), (void*)0);\r\n    // \u7eb9\u7406\u5750\u6807\r\n    glEnableVertexAttribArray(1);\r\n    glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(GLfloat), (void*)(3 * sizeof(GLfloat)));\r\n\r\n    // 2.\u5730\u9762\u8d34\u56fe\r\n    glGenVertexArrays(1, &FloorVAO);\r\n    glBindVertexArray(FloorVAO);\r\n    GLuint VBO2;\r\n    glGenBuffers(1, &VBO2);\r\n    glBindBuffer(GL_ARRAY_BUFFER, VBO2);\r\n    glBufferData(GL_ARRAY_BUFFER, sizeof(fllor_vertex_buffer_data), fllor_vertex_buffer_data, GL_STATIC_DRAW);\r\n    glEnableVertexAttribArray(0);\r\n    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(GLfloat), (void*)0);\r\n    // \u7eb9\u7406\u5750\u6807\r\n    glEnableVertexAttribArray(1);\r\n    glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(GLfloat), (void*)(3 * sizeof(GLfloat)));\r\n\r\n    // 3.blend\u8d34\u56fe\r\n    glGenVertexArrays(1, &BlendVAO);\r\n    glBindVertexArray(BlendVAO);\r\n    GLuint VBO3;\r\n    glGenBuffers(1, &VBO3);\r\n    glBindBuffer(GL_ARRAY_BUFFER, VBO3);\r\n    glBufferData(GL_ARRAY_BUFFER, sizeof(blend_vertex_buffer_data), blend_vertex_buffer_data, GL_STATIC_DRAW);\r\n    glEnableVertexAttribArray(0);\r\n    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(GLfloat), (void*)0);\r\n    // \u7eb9\u7406\u5750\u6807\r\n    glEnableVertexAttribArray(1);\r\n    glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(GLfloat), (void*)(3 * sizeof(GLfloat)));\r\n\r\n    // \u7eb9\u7406\u6570\u636e\r\n    floorTexture = loadTexture("data/img/33.png");\r\n    texture = loadTexture("data/img/11.jpg");\r\n    blendTexture = loadTexture("data/img/chick.png");\r\n\r\n\r\n    // 4.\u521b\u5efaframebuffer\u4ee5\u53ca\u9644\u52a0\u7684\u7eb9\u7406\r\n    glGenFramebuffers(1, &framebuffer);\r\n    glBindFramebuffer(GL_FRAMEBUFFER, framebuffer);\r\n    glGenTextures(1, &fbTexture);\r\n    glBindTexture(GL_TEXTURE_2D, fbTexture);\r\n    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, 512, 512, 0, GL_RGB, GL_UNSIGNED_BYTE, NULL);\r\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);\r\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\r\n    glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, fbTexture, 0);\r\n\r\n    // 5.\u7ed8\u5236\u5230\u5c4f\u5e55\u7684shader\u548c\u9876\u70b9\u6570\u636e\r\n    screenProgramID = LoadShaders( "data/shader/02.Texture.vs", "data/shader/05.FBTexture.fs" );\r\n\r\n    const GLfloat g_screen_vertex_buffer_data[] = {\r\n            -0.5f,  0.5f,  0.0f,  0.0f,  1.0f,\r\n            -0.5f, -0.5f,  0.0f,  0.0f,  0.0f,\r\n            0.5f, -0.5f,  0.0f,   1.0f,  0.0f,\r\n\r\n            -0.5f,  0.5f,  0.0f,  0.0f,  1.0f,\r\n            0.5f, -0.5f,  0.0f,  1.0f,  0.0f,\r\n            0.5f,  0.5f,  0.0f,  1.0f,  1.0f\r\n    };\r\n\r\n    // VAO\u3001VBO\u7684\u6570\u636e\r\n    GLuint screenVBO;\r\n    glGenVertexArrays(1, &screenVAO);\r\n    glBindVertexArray(screenVAO);\r\n    glGenBuffers(1, &screenVBO);\r\n    glBindBuffer(GL_ARRAY_BUFFER, screenVBO);\r\n    glBufferData(GL_ARRAY_BUFFER, sizeof(g_screen_vertex_buffer_data), g_screen_vertex_buffer_data, GL_STATIC_DRAW);\r\n    glEnableVertexAttribArray(0);\r\n    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(GLfloat), (void*)0);\r\n    glEnableVertexAttribArray(1);\r\n    glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(GLfloat), (void*)(3 * sizeof(GLfloat)));\r\n}\n'})}),"\n",(0,n.jsx)(e.p,{children:"\u6700\u7ec8\u663e\u793a\u7ed3\u679c\uff1a"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://objectstorage.ap-osaka-1.oraclecloud.com/n/ax0kqy8quzyr/b/bucket-blog/o/2022/04/e2fabf1d21d3bcb698475c4adc3fd233.png",alt:"1640529248087"})})]})}function u(r={}){const{wrapper:e}={...(0,t.R)(),...r.components};return e?(0,n.jsx)(e,{...r,children:(0,n.jsx)(g,{...r})}):g(r)}},8453:(r,e,f)=>{f.d(e,{R:()=>l,x:()=>o});var n=f(6540);const t={},a=n.createContext(t);function l(r){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function o(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:l(r.components),n.createElement(a.Provider,{value:e},r.children)}}}]);