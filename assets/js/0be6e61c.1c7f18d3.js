(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[1190],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3006:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i={id:"conda",title:"Conda",description:"User space package management",sidebar_label:"Conda",sidebar_position:2},l={unversionedId:"week_03/conda",id:"week_03/conda",isDocsHomePage:!1,title:"Conda",description:"User space package management",source:"@site/docs/week_03/conda.md",sourceDirName:"week_03",slug:"/week_03/conda",permalink:"/Applied-Genomics/docs/week_03/conda",editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/week_03/conda.md",version:"current",sidebar_label:"Conda",sidebarPosition:2,frontMatter:{id:"conda",title:"Conda",description:"User space package management",sidebar_label:"Conda",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"VS Code Alternatives",permalink:"/Applied-Genomics/docs/week_03/code_alternatives"},next:{title:"High Performance Computing",permalink:"/Applied-Genomics/docs/week_03/hpc"}},c=[{value:"Extending Our Project",id:"extending-our-project",children:[{value:"Create an env file",id:"create-an-env-file",children:[]},{value:"Update the README",id:"update-the-readme",children:[]},{value:"Add a new make rule to build the conda environment",id:"add-a-new-make-rule-to-build-the-conda-environment",children:[]}]}],d={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So now that we've gotten familiar with some tools it's time to get some\ncomputations running! But we don't have admin access to the system we're on so\nhow do we install software? Enter conda"),(0,o.kt)("h1",{id:"install-conda-and-setup-bioconda"},"Install Conda and Setup bioconda"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bioconda.github.io/user/install.html#install-conda"},"Detailed Guide")),(0,o.kt)("p",null,"Summary"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh\nsh Miniconda3-latest-Linux-x86_64.sh\n# Follow the prompts\n\nconda config --add channels defaults\nconda config --add channels bioconda\nconda config --add channels conda-forge\n\nconda create -n aligners bwa\n")),(0,o.kt)("h2",{id:"extending-our-project"},"Extending Our Project"),(0,o.kt)("h3",{id:"create-an-env-file"},"Create an env file"),(0,o.kt)("p",null,"Let's create an environment file to share with our collaborators, so they can\nrebuild our conda environment from scratch.",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ag-intro\nconda env export --no-builds > env.yaml\n")),(0,o.kt)("p",null,"Open up ",(0,o.kt)("inlineCode",{parentName:"p"},"env.yaml")," and poke around."),(0,o.kt)("p",null,"Commit the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.yaml")," file."),(0,o.kt)("h3",{id:"update-the-readme"},"Update the README"),(0,o.kt)("p",null,'Our collaborators need to know how to build the enviroment from scratch. In the\nREADME update the "Getting Started" commands to'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="README.md"',title:'"README.md"'},"git clone https://github.com/emiller88/ag-intro\ncd ag-intro\n+ conda env create --name=more-map-and-call --file=env.yaml\n+ conda activate aligners\nmake\n")),(0,o.kt)("p",null,"Commit the changes to the README."),(0,o.kt)("h3",{id:"add-a-new-make-rule-to-build-the-conda-environment"},"Add a new make rule to build the conda environment"),(0,o.kt)("p",null,"We can refactor our project to make the initial setup even cleaner, and future proof it if we wanted to change the way we install the conda env."),(0,o.kt)("p",null,"Let's add a new make rule"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Makefile"',title:'"Makefile"'},"+ conda_env:\n+   conda env create --name=more-map-and-call --file=env.yaml\n")),(0,o.kt)("p",null,'And update the "Getting Started" commands.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="README.md"',title:'"README.md"'},"git clone https://github.com/emiller88/ag-intro\ncd ag-intro\n+ make conda_env\n- conda env create --name=more-map-and-call --file=env.yaml\nconda activate aligners\nmake\n")),(0,o.kt)("p",null,"Commit the changes to those as well."),(0,o.kt)("h1",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bioconda.github.io/tutorials/gcb2020.html#common-pitfalls"},"Bioconda Common Pitfalls"))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://bioconda.github.io/tutorials/gcb2020.html#id1"},"Conda environments \u2013 common commands"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);