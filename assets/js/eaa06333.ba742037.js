"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="MONAILabel QuPath extension",l={unversionedId:"installation/qupath-extension",id:"installation/qupath-extension",title:"MONAILabel QuPath extension",description:"1. Download the latest MONAI Label extension for QuPath from the repository. The latest extension can be found in the latest Release as qupath-extension-monailabel-.jar, where version is the identifier of the latest version, for example, 0.3.1.3.",source:"@site/docs/installation/qupath-extension.md",sourceDirName:"installation",slug:"/installation/qupath-extension",permalink:"/MONAILabel-docs/docs/installation/qupath-extension",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/qupath-extension.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MONAILabel Server Installation",permalink:"/MONAILabel-docs/docs/installation/monailabel"},next:{title:"Tutorial",permalink:"/MONAILabel-docs/docs/category/tutorial"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"monailabel-qupath-extension"},"MONAILabel QuPath extension"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the latest MONAI Label extension for QuPath from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ivanvykopal/MONAILabel/tags"},"repository"),". The latest extension can be found in the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"qupath-extension-monailabel-{version}.jar"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," is the identifier of the latest version, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"0.3.1.3"),"."),(0,r.kt)("p",{parentName:"li"},"1.1. Click on Releases"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Download QuPath extension 1",src:n(7012).Z,width:"1900",height:"885"})),(0,r.kt)("p",{parentName:"li"},"1.2. Download latest version"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Download QuPath extension 2",src:n(2934).Z,width:"1528",height:"896"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To add the MONAI Label extension, run QuPath and drag the downloaded file ",(0,r.kt)("inlineCode",{parentName:"p"},"qupath-extension-monailabel-{version}.jar")," into the QuPath area and confirm the dialog window. This will install the MONAI Label extension in QuPath.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After launching QuPath, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Preferences...")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"MONAI Label")," and change the Server URL to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://0.0.0.0:8000")," if the server is running locally or change the Server URL to the provided URL."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Change Server URL 1",src:n(6196).Z,width:"1142",height:"636"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Change Server URL 2",src:n(7996).Z,width:"600",height:"693"})))))}d.isMDXComponent=!0},6196:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Qupath2-78271c349df0137703c574877b8df6db.png"},7996:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Qupath3-e6ce86e4949118977d482853891768f2.png"},7012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/release-step1-dc0c6baae0e4212c9d00567f2b700275.png"},2934:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/release-step2-ff135095123f55b8eefec9ea2883637a.png"}}]);