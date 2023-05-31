"use strict";(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[2952],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,h=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9182:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={id:"documentation",title:"Documentation",description:"How to use markdown",sidebar_label:"Documentation",sidebar_position:4},o="Documentation",l={unversionedId:"week_02/documentation",id:"version-22u/week_02/documentation",title:"Documentation",description:"How to use markdown",source:"@site/versioned_docs/version-22u/week_02/documentation.md",sourceDirName:"week_02",slug:"/week_02/documentation",permalink:"/Applied-Genomics/docs/22u/week_02/documentation",draft:!1,editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/versioned_docs/version-22u/week_02/documentation.md",tags:[],version:"22u",sidebarPosition:4,frontMatter:{id:"documentation",title:"Documentation",description:"How to use markdown",sidebar_label:"Documentation",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Scripting",permalink:"/Applied-Genomics/docs/22u/week_02/scripting"},next:{title:"Make",permalink:"/Applied-Genomics/docs/22u/week_02/make"}},u={},c=[{value:"Updating the README",id:"updating-the-readme",level:2},{value:"Merging a Branch",id:"merging-a-branch",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"Markdown is a simple markup language for formatting elements using only ",(0,a.kt)("em",{parentName:"p"},"plaintext"),"."),(0,a.kt)("p",null,"There's a few advantages to it over WYSIWYG(What You See Is What You Get)\neditors such as microsoft word."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Simple formatting. Spend time writing instead of fighting margins."),(0,a.kt)("li",{parentName:"ul"},"No vendor lock in. If the program you're using to display it disappears you\nstill have your writing."),(0,a.kt)("li",{parentName:"ul"},"Easy to version control.")),(0,a.kt)("p",null,"Here are a few places to learn and reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.markdowntutorial.com/lesson/1/"},"Interactive markdown tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/getting-started/"},"Markdown Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://guides.github.com/features/mastering-markdown/"},"GitHub Markdown Guide"))),(0,a.kt)("p",null,"But the best way to learn it is to just use it!"),(0,a.kt)("h2",{id:"updating-the-readme"},"Updating the README"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"./git"},"git section")," we created a README. We've updated our project\nthough and now we need to add how to use our project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"# ag-intro\n\nThis will be the second commit\nThis will be the third commit\n\n## Requirements:\n\n- gnumake\n\n## Getting Started\n\n    git clone https://github.com/Applied-Genomics-UTD/reproducible-research-<your-github-username>.git\n    reproducible-research-<your-github-username>\n    make\n")),(0,a.kt)("p",null,"Let's open a preview of the README in VS Code. Search for the command ",(0,a.kt)("inlineCode",{parentName:"p"},"Markdown: Open Preview to the Side"),". This is helpful to have up while you're writing to see what the output will be while you get used to the syntax."),(0,a.kt)("h3",{id:"merging-a-branch"},"Merging a Branch"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This is a callback to ",(0,a.kt)("a",{parentName:"p",href:"./git"},"git")," in case you skipped over that section!"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwac-cdn.atlassian.com%2Fdam%2Fjcr%3A83323200-3c57-4c29-9b7e-e67e98745427%2FBranch-1.png%3FcdnVersion%3Djw&f=1&nofb=1"},"Git Merge")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Checkout the ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," branch.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Git: Checkout to...")," is the VS Code command(",(0,a.kt)("inlineCode",{parentName:"li"},"CTRL+Shift+P"),")"))),(0,a.kt)("li",{parentName:"ol"},"Search for the command ",(0,a.kt)("inlineCode",{parentName:"li"},"Git: Merge Branch...")),(0,a.kt)("li",{parentName:"ol"},"When prompted type in ",(0,a.kt)("inlineCode",{parentName:"li"},"make")),(0,a.kt)("li",{parentName:"ol"},"Search for the command ",(0,a.kt)("inlineCode",{parentName:"li"},"git log")," (You'll need the Git History extension)")),(0,a.kt)("h1",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://manubot.org/"},"Manubot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.makeareadme.com/"},"Make a README"))))}m.isMDXComponent=!0}}]);