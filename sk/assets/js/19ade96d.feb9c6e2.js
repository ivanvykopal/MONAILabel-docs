"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),h=o,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:2},r="MONAILabel Server Installation",l={unversionedId:"installation/monailabel",id:"installation/monailabel",title:"MONAILabel Server Installation",description:"To install MONAI Label along with additional models for higher-level morphological structure segmentation, follow below steps.",source:"@site/docs/installation/monailabel.md",sourceDirName:"installation",slug:"/installation/monailabel",permalink:"/MONAILabel-docs/sk/docs/installation/monailabel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/monailabel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CUDA Prerequisites",permalink:"/MONAILabel-docs/sk/docs/installation/cuda"},next:{title:"MONAILabel QuPath extension",permalink:"/MONAILabel-docs/sk/docs/installation/qupath-extension"}},p={},s=[{value:"Using Docker",id:"using-docker",level:2},{value:"Docker prerequisites",id:"docker-prerequisites",level:3},{value:"Get Docker Image",id:"get-docker-image",level:3},{value:"Without Docker",id:"without-docker",level:2},{value:"General prerequisites",id:"general-prerequisites",level:3},{value:"Python",id:"python",level:4},{value:"Source code",id:"source-code",level:4},{value:"Weights and Sample Project",id:"weights-and-sample-project",level:4}],d={toc:s},m="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monailabel-server-installation"},"MONAILabel Server Installation"),(0,o.kt)("p",null,"To install MONAI Label along with additional models for higher-level morphological structure segmentation, follow below steps."),(0,o.kt)("h2",{id:"using-docker"},"Using Docker"),(0,o.kt)("h3",{id:"docker-prerequisites"},"Docker prerequisites"),(0,o.kt)("p",null,"To deploy server using Docker you need to install Docker on your computer. This step is different for different operating systems. For this purpose follow the instructions in official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker Documentation"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker Documentation")," page and select the OS you have installed."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Docker - select OS",src:a(8077).Z,width:"1881",height:"874"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the instructions on the appropriate page for the selected OS and install Docker."))),(0,o.kt)("h3",{id:"get-docker-image"},"Get Docker Image"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pull image from Docker Hub")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull xvykopal/monailabel-server:latest\n")),(0,o.kt)("h2",{id:"without-docker"},"Without Docker"),(0,o.kt)("h3",{id:"general-prerequisites"},"General prerequisites"),(0,o.kt)("p",null,"These prerequisites are necessary when you want to run the server with Docker."),(0,o.kt)("h4",{id:"python"},"Python"),(0,o.kt)("p",null,"First of all, you need to install Python with the verion >=3.9 and setup the Python in your computer's settings."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python")," version >= 3.9.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the path to Python to the environment variables. The path to Python added to the environment variables should look similar to the following: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\{user}\\AppData\\Local\\Programs\\Python\\{python}"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"{user}")," is replaced with the user identifier within the OS and {python} represents the directory name with the installed Python for a specific version."),(0,o.kt)("p",{parentName:"li"},"2.1. On Windows, open the ",(0,o.kt)("strong",{parentName:"p"},"Start")," Menu and type, e.g ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{alt:"Set environment variables 1",src:a(6020).Z,width:"967",height:"908"})),(0,o.kt)("p",{parentName:"li"},"2.2 Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit the system envirnoment variables")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{alt:"Set environment variables 2",src:a(7627).Z,width:"537",height:"566"})),(0,o.kt)("p",{parentName:"li"},"2.3. Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"Path")," variable mainly for the user, but sometimes it is necessary to edit ",(0,o.kt)("inlineCode",{parentName:"p"},"Path")," variable also in system variables."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{alt:"Set environment variables 3",src:a(6788).Z,width:"693",height:"775"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Python should be now available. You can check it in console by running the following command: ",(0,o.kt)("inlineCode",{parentName:"p"},"python --version"),", if there is no error it means that Python was successfully installed."))),(0,o.kt)("h4",{id:"source-code"},"Source code"),(0,o.kt)("p",null,"The next step is to download source code from the GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ivanvykopal/MONAILabel/tree/development"},"repository"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the development branch from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ivanvykopal/MONAILabel/tree/development"},"repository"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Source code download",src:a(9585).Z,width:"1874",height:"824"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The first method via ",(0,o.kt)("inlineCode",{parentName:"li"},"Code")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Download ZIP"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Source code download",src:a(3160).Z,width:"1850",height:"723"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The second method via:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ivanvykopal/MONAILabel.git\ngit fetch --all\ngit checkout development\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After we downloaded the source code, we can create a new python environment:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'virtualenv ".venv/monailabel" -p python3.9.16\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"conda")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'conda create -n "monailabel" python=3.9.16\n')),(0,o.kt)("p",{parentName:"li"},"It is recommended to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.anaconda.com/products/distribution"},"Anaconda")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," for managing multiple environments.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the packages from ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"venv")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".venv/monailabel/Scripts/activate\npython -m pip install --upgrade pip\npip install -r requirements.txt\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"conda")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate monailabel\npython -m pip install --upgrade pip\npip install -r requirements.txt\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To run server, it is needed to download ",(0,o.kt)("a",{parentName:"p",href:"https://openslide.org/download/"},"openslide binaries")," and extract them to any location. After extraction, add the path to the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," directory to the environment variables in ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", as you done for Python.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To add the path to the ",(0,o.kt)("inlineCode",{parentName:"p"},"monailabel\\scripts")," directory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable, follow the instructions in this ",(0,o.kt)("a",{parentName:"p",href:"https://www.cyberciti.biz/faq/appleosx-bash-unix-change-set-path-environment-variable/"},"macOS example"),". If any ",(0,o.kt)("inlineCode",{parentName:"p"},"dll")," libraries are missing, you can download them from ",(0,o.kt)("a",{parentName:"p",href:"https://www.dll-files.com/"},"dll-files.com"),". Specifically, if you need the missing ",(0,o.kt)("inlineCode",{parentName:"p"},"cudnn64_8.dll"),", you can download it using this link. After downloading the ",(0,o.kt)("inlineCode",{parentName:"p"},"dll")," files, you need to copy them to the system disk. On Windows systems, the standard location is ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\System32"),"."))),(0,o.kt)("h4",{id:"weights-and-sample-project"},"Weights and Sample Project"),(0,o.kt)("p",null,"To run the inference of the added models, we need to download weigths of the models. To download them, it is necessary to contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:ivan.vykopal@gmail.com"},"Ivan Vykopal")," or ",(0,o.kt)("a",{parentName:"p",href:"https://vgg.fiit.stuba.sk/team/"},"VGG Research group")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the weights of the models and sample project provided by authors.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the downloaded weights for ",(0,o.kt)("inlineCode",{parentName:"p"},"pathology_structure_segmentation_nestedunet")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"apps/pathology/model/pathology_structure_segmentation_nestedunet/models")," and add the weights for ",(0,o.kt)("inlineCode",{parentName:"p"},"pathology_structure_segmentation_deeplabv3plus")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"apps/pathology/model/pathology_structure_segmentation_deeplabv3plus/models"),"."))))}c.isMDXComponent=!0},9585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Github1-db55e7794db10416b80e7fc3f0fccc51.png"},3160:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Github2-615f876d6daa7b41934e4f2c59294e0e.png"},8077:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/docker-os-857c79850f4a4a5a03cd96372fb9dbb7.png"},6020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/env-step1-e957cdf5caa2435985c9e49764bafef7.png"},7627:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/env-step2-cfb8b32c9efac16afc4fee5c9558fa99.png"},6788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/env-step3-7a52c7c8aae2de8d962313b31fc83654.png"}}]);