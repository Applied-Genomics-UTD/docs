(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[2198],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(u,".").concat(d)]||s[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5595:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"documentation",title:"Documentation",description:"How to use markdown",sidebar_label:"Documentation",sidebar_position:3},l={unversionedId:"week_02/documentation",id:"version-21u/week_02/documentation",isDocsHomePage:!1,title:"Documentation",description:"How to use markdown",source:"@site/versioned_docs/version-21u/week_02/documentation.md",sourceDirName:"week_02",slug:"/week_02/documentation",permalink:"/Applied-Genomics/docs/21u/week_02/documentation",editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/versioned_docs/version-21u/week_02/documentation.md",version:"21u",sidebar_label:"Documentation",sidebarPosition:3,frontMatter:{id:"documentation",title:"Documentation",description:"How to use markdown",sidebar_label:"Documentation",sidebar_position:3},sidebar:"version-21u/tutorialSidebar",previous:{title:"Build Systems",permalink:"/Applied-Genomics/docs/21u/week_02/make"},next:{title:"Jupyter",permalink:"/Applied-Genomics/docs/21u/week_02/jupyter"}},u=[{value:"Updating the README",id:"updating-the-readme",children:[{value:"Merging a Branch",id:"merging-a-branch",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Markdown is a simple markup language for formatting elements using only ",(0,o.kt)("em",{parentName:"p"},"plaintext"),"."),(0,o.kt)("p",null,"There's a few advantages to it over WYSIWYG(What You See Is What You Get)\neditors such as microsoft word."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simple formatting. Spend time writing instead of fighting margins."),(0,o.kt)("li",{parentName:"ul"},"No vendor lock in. If the program you're using to display it disappears you\nstill have your writing."),(0,o.kt)("li",{parentName:"ul"},"Easy to version control.")),(0,o.kt)("p",null,"Here are a few places to learn and reference:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.markdowntutorial.com/lesson/1/"},"Interactive markdown tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/getting-started/"},"Markdown Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://guides.github.com/features/mastering-markdown/"},"GitHub Markdown Guide"))),(0,o.kt)("p",null,"But the best way to learn it is to just use it!"),(0,o.kt)("h2",{id:"updating-the-readme"},"Updating the README"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"./git"},"git section")," we created a README. We've updated our project\nthough and now we need to add how to use our project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"# ag-intro\n\nThis will be the second commit\nThis will be the third commit\n\n## Requirements:\n\n- gnumake\n\n## Getting Started\n\n    git clone https://github.com/<your-github-username>/ag-intro\n    cd ag-intro\n    make\n")),(0,o.kt)("p",null,"Let's open a preview of the README in VS Code. Search for the command ",(0,o.kt)("inlineCode",{parentName:"p"},"Markdown: Open Preview to the Side"),". This is helpful to have up while you're writing to\nsee what the output will be while you get used to the syntax."),(0,o.kt)("h3",{id:"merging-a-branch"},"Merging a Branch"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a callback to ",(0,o.kt)("a",{parentName:"p",href:"./git"},"git")," in case you skipped over that section!"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwac-cdn.atlassian.com%2Fdam%2Fjcr%3A83323200-3c57-4c29-9b7e-e67e98745427%2FBranch-1.png%3FcdnVersion%3Djw&f=1&nofb=1"},"Git Merge")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Checkout the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," branch.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Git: Checkout to...")," is the command"))),(0,o.kt)("li",{parentName:"ol"},"Search for the command ",(0,o.kt)("inlineCode",{parentName:"li"},"Git: Merge Branch...")),(0,o.kt)("li",{parentName:"ol"},"When prompted select ",(0,o.kt)("inlineCode",{parentName:"li"},"make")),(0,o.kt)("li",{parentName:"ol"},"Search for the command ",(0,o.kt)("inlineCode",{parentName:"li"},"git log")," (You'll need the Git History extension)")),(0,o.kt)("h1",{id:"r-markdown"},(0,o.kt)("a",{parentName:"h1",href:"https://rmarkdown.rstudio.com/"},"R Markdown")),(0,o.kt)("p",null,"We're going to play around with R Markdown, a flavor of markdown that allows\nexecution of R code, and them to be output as reports."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rmarkdown.rstudio.com/lesson-1.html"},"R Markdown Lesson 1")),(0,o.kt)("h1",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://manubot.org/"},"Manubot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.makeareadme.com/"},"Make a README"))))}m.isMDXComponent=!0}}]);