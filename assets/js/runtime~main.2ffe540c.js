(()=>{"use strict";var e,a,d,c,b,f={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return f[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=f,r.c=t,e=[],r.O=(a,d,c,b)=>{if(!d){var f=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],b=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&b||f>=b)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,b<f&&(f=b));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[d,c,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var f={};a=a||[null,d({}),d([]),d(d)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,r.d(b,f),b},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({39:"a978e5ab",146:"1964ce0e",174:"cd64f545",196:"6fd8368d",245:"d836bfcd",268:"aefdabf4",321:"e74bbf7a",324:"d5b78ddc",366:"86a08097",389:"557470c5",492:"40011a75",514:"82fbc334",547:"985b1e3e",646:"14dbab16",651:"4be91b0a",684:"d402ab84",720:"a6acd8a5",850:"625275fb",867:"33fc5bb8",875:"f33179bc",881:"1b73949a",917:"02b5547e",970:"30225ae9",992:"f0a42d13",1043:"c3d863e4",1147:"2ad6fbbc",1207:"b0456412",1235:"a7456010",1340:"1705167b",1567:"22dd74f7",1581:"0c9d58ef",1747:"f588108d",1862:"90cdb157",1869:"43e0a144",1893:"62aa0769",1903:"acecf23e",1934:"3ef14622",1945:"7a5d844e",2002:"8246f003",2063:"10c8db31",2108:"7da787c0",2113:"f56ccfc6",2138:"1a4e3797",2189:"05dae22a",2295:"4af26d8c",2327:"1dae31ab",2345:"ea9a9d81",2347:"37b19653",2362:"1e4d1b73",2495:"3d8d21df",2549:"5dad1a1c",2634:"c4f5d8e4",2660:"7ab7475f",2671:"182739d6",2683:"26c934b3",2711:"9e4087bc",2772:"d0fc1768",2849:"ae065b8c",2898:"f615c5a8",2986:"db0d580d",3030:"f652976f",3066:"fc4505c9",3110:"80410930",3148:"2e9b216d",3228:"74f9af0d",3249:"ccc49370",3254:"64808858",3267:"4b4f528e",3317:"7dd3b2a7",3347:"d2364a3e",3421:"c6749cb6",3520:"03c37894",3536:"1916ecb6",3657:"8646b8f6",3824:"f5dd5915",4018:"9aa56ea5",4193:"2c756632",4212:"621db11d",4269:"18ffe98c",4382:"56471e5f",4606:"72291723",4667:"785a96c3",4713:"6dfe2e3e",4780:"dd8e1038",4786:"cb02fb4d",4813:"6875c492",4903:"5079fbc2",4921:"138e0e15",4964:"42bb7a89",4995:"edae6dba",5068:"540e6612",5077:"60ed8803",5088:"35788c78",5335:"b73734ae",5338:"5ad1b853",5351:"58b4d1bb",5399:"4007fdb3",5419:"fab08a53",5568:"e2f36544",5660:"0cdc81c3",5677:"6a79d82c",5734:"6c30e1a0",5742:"aba21aa0",5792:"bb793be7",5858:"441f1a9e",5893:"ac89f6f5",6007:"130dc91c",6013:"3e518e12",6117:"023d25ea",6217:"5d8b7a54",6257:"cc7760fb",6319:"d4cc2545",6336:"8dce9295",6343:"07d06045",6435:"1b13e0a5",6608:"78fee3c0",6657:"ee24f11f",6874:"81e8fe6f",6903:"47f8f95a",6923:"5ec8d1d6",6960:"0c88e054",6969:"f317f9b2",7098:"a7bd4aaa",7105:"047972de",7313:"2a2bd979",7323:"9ce6f0d3",7325:"aa9e1698",7470:"c6d660bd",7472:"814f3328",7643:"a6aa9e1f",7833:"9776d6cb",7968:"58d2b109",7969:"ecacb6cc",7985:"c90f8dc9",8001:"67973a58",8034:"6cd82271",8070:"0480b142",8075:"79f865f3",8121:"3a2db09e",8130:"f81c1134",8141:"60994ae4",8146:"c15d9823",8160:"d90b17ce",8209:"01a85c17",8260:"7f5329c2",8289:"5304cba2",8300:"eb710d7c",8303:"f82c41ea",8401:"17896441",8499:"354342c0",8515:"b8d79f97",8597:"cb69eaca",8676:"5e43f0ff",8880:"52e97b50",8932:"5d4a6bbc",8947:"ef8b811a",9001:"06aa28d0",9024:"30e7664f",9044:"778ce53a",9048:"a94703ab",9190:"d59467e5",9280:"0e16e0c5",9385:"8ea09047",9404:"356c5b61",9481:"e0553d38",9621:"f35a0940",9647:"5e95c892",9684:"a484645e",9724:"56d6d11b",9728:"ba1bafb2",9857:"623b64f1",9858:"36994c47",9861:"8cf084a8",9864:"91d9673d",9881:"aa2b15ea",9935:"da94d1ed"}[e]||e)+"."+{39:"cef774b3",146:"b77e8476",174:"fce34c34",196:"2501e131",245:"7800ca31",268:"09e74339",321:"a57d5c8b",324:"277484d7",366:"5e9d49b8",389:"fc01eea2",489:"f7008043",492:"4b2ded8c",514:"b0c4dc19",547:"4cdc9653",646:"25f4f9de",651:"fc0c4222",684:"ac1f349c",720:"75aeb331",850:"bc0be85d",867:"3d43b14f",875:"bb3bda7e",881:"3e4682a1",917:"534adc4f",970:"4b685362",992:"6e5b69bd",1043:"185730fe",1147:"db25629d",1207:"902d207a",1235:"ffca3055",1340:"3ce679b0",1567:"5bc4fe35",1581:"af130586",1747:"404a49b8",1862:"5834dfc5",1869:"a871c353",1893:"31689365",1903:"f8e6a92a",1934:"40e8bf1c",1945:"3fde791c",2002:"178c0e8f",2063:"8c9d5860",2108:"687f32cb",2113:"da0d7e0e",2138:"0dd2d8b1",2189:"ca17a051",2237:"9020f797",2295:"0fbe3a15",2327:"b77b456e",2345:"c27c917a",2347:"ce08a891",2362:"3ddb3fe6",2495:"a51c130c",2549:"2c969b1e",2634:"d3870a05",2660:"479b27c3",2671:"9f30abbf",2683:"44c1daca",2711:"2d85e30e",2772:"e5d39f0a",2849:"860cf418",2898:"3aed82ed",2986:"85e38c9d",3030:"a6ed7a88",3066:"90e3dc82",3110:"6ded47f9",3148:"ecb376f2",3228:"ef623c96",3249:"e6112ed9",3254:"a144b8be",3267:"b2abf2eb",3317:"63b0be78",3347:"dbbf6f40",3421:"7b1f5dd0",3520:"ac54c841",3536:"a2a6f2df",3657:"6ba588ce",3824:"31fff1ed",4018:"d8d4aa15",4193:"f45e953f",4212:"dc16df53",4269:"06ea2f31",4382:"72ad597b",4606:"39640408",4667:"988f137a",4713:"a58c5a8f",4780:"85645e35",4786:"872d6d5f",4813:"595a57a1",4903:"a112268b",4921:"2caf42e2",4964:"e5d5b1fd",4995:"f53c0542",5068:"4970a848",5077:"f099c770",5088:"c25da3ae",5335:"9be83ee0",5338:"9611ab66",5351:"fb76228b",5399:"9e972967",5419:"722884b2",5568:"834e3307",5660:"c008c47a",5677:"1d71a336",5728:"f55a28dd",5734:"622a94cb",5741:"f30313ee",5742:"2ea7887b",5792:"326eda77",5858:"f61c3fc2",5893:"e4aecc40",6007:"b0907081",6013:"424a73a5",6117:"f6acaf4f",6217:"83d1dc4d",6257:"1df0e9fc",6319:"99746e13",6336:"e77f3c1b",6343:"f6e5d69a",6435:"3c3c2d84",6608:"0295702b",6657:"0545cd87",6874:"24c4e921",6903:"31d7bf2c",6923:"ef2b87f7",6960:"365f6037",6969:"634b3090",7098:"e0e8684c",7105:"9647cac6",7313:"8c5aace7",7323:"f8885021",7325:"fdee16d9",7470:"b2622318",7472:"c6f52ca0",7643:"0de26028",7833:"fba5a1cf",7968:"131aaf18",7969:"a1893169",7985:"e204adde",8001:"162fe6ba",8034:"0038564e",8070:"034e2ba3",8075:"cdddafbf",8121:"01029f5a",8130:"b5e3a4a4",8141:"e4e82dd7",8146:"e0692ae5",8160:"af407abb",8209:"daf489ae",8260:"cc894672",8289:"1d754dd7",8300:"21a4029e",8303:"c7f3f877",8401:"fa1d47c0",8499:"6ddba534",8515:"5d90636d",8597:"71d71243",8676:"5577015b",8880:"ee2b8ade",8932:"f9da808e",8947:"5c6476e3",9001:"f3eedb13",9024:"a5455db0",9044:"64d24761",9048:"b45dd081",9113:"0d46d7dc",9190:"995a618e",9280:"5100da4c",9385:"7e3ce277",9404:"750fbe35",9481:"8bf7ae6f",9621:"2eda8af6",9647:"53e71ef7",9684:"aaafe5da",9724:"8db37a23",9728:"ea80c807",9857:"9712d183",9858:"d82d90a8",9861:"4ae9c815",9864:"c86eb14c",9881:"34545f31",9935:"53c7172e"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},b="vulkan-doc:",r.l=(e,a,d,f)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+d),t.src=e),c[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={17896441:"8401",64808858:"3254",72291723:"4606",80410930:"3110",a978e5ab:"39","1964ce0e":"146",cd64f545:"174","6fd8368d":"196",d836bfcd:"245",aefdabf4:"268",e74bbf7a:"321",d5b78ddc:"324","86a08097":"366","557470c5":"389","40011a75":"492","82fbc334":"514","985b1e3e":"547","14dbab16":"646","4be91b0a":"651",d402ab84:"684",a6acd8a5:"720","625275fb":"850","33fc5bb8":"867",f33179bc:"875","1b73949a":"881","02b5547e":"917","30225ae9":"970",f0a42d13:"992",c3d863e4:"1043","2ad6fbbc":"1147",b0456412:"1207",a7456010:"1235","1705167b":"1340","22dd74f7":"1567","0c9d58ef":"1581",f588108d:"1747","90cdb157":"1862","43e0a144":"1869","62aa0769":"1893",acecf23e:"1903","3ef14622":"1934","7a5d844e":"1945","8246f003":"2002","10c8db31":"2063","7da787c0":"2108",f56ccfc6:"2113","1a4e3797":"2138","05dae22a":"2189","4af26d8c":"2295","1dae31ab":"2327",ea9a9d81:"2345","37b19653":"2347","1e4d1b73":"2362","3d8d21df":"2495","5dad1a1c":"2549",c4f5d8e4:"2634","7ab7475f":"2660","182739d6":"2671","26c934b3":"2683","9e4087bc":"2711",d0fc1768:"2772",ae065b8c:"2849",f615c5a8:"2898",db0d580d:"2986",f652976f:"3030",fc4505c9:"3066","2e9b216d":"3148","74f9af0d":"3228",ccc49370:"3249","4b4f528e":"3267","7dd3b2a7":"3317",d2364a3e:"3347",c6749cb6:"3421","03c37894":"3520","1916ecb6":"3536","8646b8f6":"3657",f5dd5915:"3824","9aa56ea5":"4018","2c756632":"4193","621db11d":"4212","18ffe98c":"4269","56471e5f":"4382","785a96c3":"4667","6dfe2e3e":"4713",dd8e1038:"4780",cb02fb4d:"4786","6875c492":"4813","5079fbc2":"4903","138e0e15":"4921","42bb7a89":"4964",edae6dba:"4995","540e6612":"5068","60ed8803":"5077","35788c78":"5088",b73734ae:"5335","5ad1b853":"5338","58b4d1bb":"5351","4007fdb3":"5399",fab08a53:"5419",e2f36544:"5568","0cdc81c3":"5660","6a79d82c":"5677","6c30e1a0":"5734",aba21aa0:"5742",bb793be7:"5792","441f1a9e":"5858",ac89f6f5:"5893","130dc91c":"6007","3e518e12":"6013","023d25ea":"6117","5d8b7a54":"6217",cc7760fb:"6257",d4cc2545:"6319","8dce9295":"6336","07d06045":"6343","1b13e0a5":"6435","78fee3c0":"6608",ee24f11f:"6657","81e8fe6f":"6874","47f8f95a":"6903","5ec8d1d6":"6923","0c88e054":"6960",f317f9b2:"6969",a7bd4aaa:"7098","047972de":"7105","2a2bd979":"7313","9ce6f0d3":"7323",aa9e1698:"7325",c6d660bd:"7470","814f3328":"7472",a6aa9e1f:"7643","9776d6cb":"7833","58d2b109":"7968",ecacb6cc:"7969",c90f8dc9:"7985","67973a58":"8001","6cd82271":"8034","0480b142":"8070","79f865f3":"8075","3a2db09e":"8121",f81c1134:"8130","60994ae4":"8141",c15d9823:"8146",d90b17ce:"8160","01a85c17":"8209","7f5329c2":"8260","5304cba2":"8289",eb710d7c:"8300",f82c41ea:"8303","354342c0":"8499",b8d79f97:"8515",cb69eaca:"8597","5e43f0ff":"8676","52e97b50":"8880","5d4a6bbc":"8932",ef8b811a:"8947","06aa28d0":"9001","30e7664f":"9024","778ce53a":"9044",a94703ab:"9048",d59467e5:"9190","0e16e0c5":"9280","8ea09047":"9385","356c5b61":"9404",e0553d38:"9481",f35a0940:"9621","5e95c892":"9647",a484645e:"9684","56d6d11b":"9724",ba1bafb2:"9728","623b64f1":"9857","36994c47":"9858","8cf084a8":"9861","91d9673d":"9864",aa2b15ea:"9881",da94d1ed:"9935"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,4250:0};r.f.j=(a,d)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(4250|5354)$/.test(a))e[a]=0;else{var b=new Promise(((d,b)=>c=e[a]=[d,b]));d.push(c[2]=b);var f=r.p+r.u(a),t=new Error;r.l(f,(d=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+f+")",t.name="ChunkLoadError",t.type=b,t.request=f,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var c,b,f=d[0],t=d[1],o=d[2],n=0;if(f.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(d);n<f.length;n++)b=f[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},d=self.webpackChunkvulkan_doc=self.webpackChunkvulkan_doc||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();