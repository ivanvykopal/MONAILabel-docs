"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9393],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(b,r(r({ref:t},c),{},{components:a})):n.createElement(b,r({ref:t},c))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const l={sidebar_position:2},r="MONAILabel",i={unversionedId:"monailabel",id:"monailabel",title:"MONAILabel",description:"Official Documentation:",source:"@site/docs/monailabel.md",sourceDirName:".",slug:"/monailabel",permalink:"/MONAILabel-docs/docs/monailabel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/monailabel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/MONAILabel-docs/docs/intro"},next:{title:"QuPath",permalink:"/MONAILabel-docs/docs/qupath"}},s={},p=[{value:"Sample Apps in MONAILabel",id:"sample-apps-in-monailabel",level:2},{value:"Radiology",id:"radiology",level:3},{value:"Pathology",id:"pathology",level:3},{value:"Bundle",id:"bundle",level:3},{value:"Endoscopy App",id:"endoscopy-app",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monailabel"},"MONAILabel"),(0,o.kt)("p",null,"Official Documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.monai.io/projects/label/en/latest/"},"https://docs.monai.io/projects/label/en/latest/")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The Leading Open Platform for Medical Data Labeling with AI")),(0,o.kt)("p",null,"MONAI Label is an intelligent open source image labeling and learning tool that enables users to create annotated datasets and build AI annotation models for clinical evaluation. MONAI Label enables application developers to build labeling apps in a serverless way, where custom labeling apps are exposed as a service through the MONAI Label Server."),(0,o.kt)("h2",{id:"sample-apps-in-monailabel"},"Sample Apps in MONAILabel"),(0,o.kt)("h3",{id:"radiology"},"Radiology"),(0,o.kt)("p",null,"This app has example models to do both interactive and automated segmentation over radiology (3D) images. Including auto segmentation with latest deep learning models (e.g., UNet, UNETR) for multiple abdominal organs. Interactive tools includes DeepEdit and Deepgrow for actively improve trained models and deployment."),(0,o.kt)("h3",{id:"pathology"},"Pathology"),(0,o.kt)("p",null,"This app has example models to do both interactive and automated segmentation over pathology (WSI) images. Including nuclei multi-label segmentation for Neoplastic cells, Inflammatory, Connective/Soft tissue cells, Dead Cells, and Epithelial. The app provides interactive tools includes DeepEdits for interactive nuclei segmentation."),(0,o.kt)("h3",{id:"bundle"},"Bundle"),(0,o.kt)("p",null,"The Bundle app enables users with customized models for inference, training or pre and post processing any target anatomies. The specification for MONAILabel integration of the Bundle app links archived Model-Zoo for customized labeling (e.g., the third-party transformer model for labeling renal cortex, medulla, and pelvicalyceal system. Interactive tools such as DeepEdits)."),(0,o.kt)("h3",{id:"endoscopy-app"},"Endoscopy App"),(0,o.kt)("p",null,"The Endoscopy app enables users to use interactive, automated segmentation and classification models over 2D images for endoscopy usecase. Combined with CVAT, it will demonstrate the fully automated Active Learning workflow to train + fine-tune a model."))}u.isMDXComponent=!0}}]);