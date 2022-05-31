(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[6486],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8902:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o={id:"ucsc",title:"UCSC Genome Browser",description:"",sidebar_label:"UCSC Genome Browser",sidebar_position:1},c={unversionedId:"week_06/ucsc",id:"version-21u/week_06/ucsc",isDocsHomePage:!1,title:"UCSC Genome Browser",description:"",source:"@site/versioned_docs/version-21u/week_06/ucsc_genome_browser.md",sourceDirName:"week_06",slug:"/week_06/ucsc",permalink:"/Applied-Genomics/docs/21u/week_06/ucsc",editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/versioned_docs/version-21u/week_06/ucsc_genome_browser.md",version:"21u",sidebar_label:"UCSC Genome Browser",sidebarPosition:1,frontMatter:{id:"ucsc",title:"UCSC Genome Browser",description:"",sidebar_label:"UCSC Genome Browser",sidebar_position:1},sidebar:"version-21u/tutorialSidebar",previous:{title:"Assignment 5",permalink:"/Applied-Genomics/docs/21u/week_05/assignment_05"},next:{title:"UCSC Xena Browser",permalink:"/Applied-Genomics/docs/21u/week_06/xena"}},s=[{value:"Basics",id:"basics",children:[]},{value:"Track Hubs",id:"track-hubs",children:[{value:"Hub Connect",id:"hub-connect",children:[]},{value:"WIP: Creating a Track Hub",id:"wip-creating-a-track-hub",children:[]}]}],u={toc:s};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"basics"},"Basics"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NBDMNv2KFik"},"UCSC Genome Browser Basics. Part 1: Getting around in the Browser")),(0,a.kt)("p",null,"Not going to be covered in depth but still a good reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cYys5iXN0NY"},"UCSC Genome Browser Basics, Part 2: Configuring the Browser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=I25Q136d6NU"},"UCSC Genome Browser Basics. Part 3: Configuration + DNA navigation"))),(0,a.kt)("h2",{id:"track-hubs"},"Track Hubs"),(0,a.kt)("h3",{id:"hub-connect"},"Hub Connect"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://genome.ucsc.edu/cgi-bin/hgHubConnect?redirect=manual&source=genome-euro.ucsc.edu"},"Hub Connect Link"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mhalushka/UCSC_miRNA_barchart"},"Example Hub repo")),(0,a.kt)("h3",{id:"wip-creating-a-track-hub"},"WIP: Creating a Track Hub"),(0,a.kt)("p",null,"We're going to connect to our own track hub as a GitHub repo using the ",(0,a.kt)("a",{parentName:"p",href:"https://nf-co.re/chipseq/results#chipseq/results-048fd6854fcc85b355c61dfc2e21da0bcc6399ea/bwa/mergedLibrary/bigwig/"},"nf-core\nchipseq full test\nresults"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://genome-euro.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Hosting"},"Track Hub help documentation")),(0,a.kt)("h4",{id:"steps-to-reproduce"},"Steps to Reproduce"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=UvHihNbyCh8"},"The Secrets Of Custom Tracks")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the Test data"),(0,a.kt)("li",{parentName:"ol"},"Move it to a new directory\n",(0,a.kt)("inlineCode",{parentName:"li"},"~/Downloads/*.bigWig ~/chip-seq-data-hub")),(0,a.kt)("li",{parentName:"ol"},"Initialize the git repo\n",(0,a.kt)("inlineCode",{parentName:"li"},"git init")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://git-lfs.github.com/"},"Setup git lfs")),(0,a.kt)("li",{parentName:"ol"},"Track the bigWig files ",(0,a.kt)("inlineCode",{parentName:"li"},'git lfs track "*.bigWig"')),(0,a.kt)("li",{parentName:"ol"},"Commit the changes ",(0,a.kt)("inlineCode",{parentName:"li"},"git add .")," and commit"),(0,a.kt)("li",{parentName:"ol"},"Push the changes up."),(0,a.kt)("li",{parentName:"ol"},"Create a file name ",(0,a.kt)("inlineCode",{parentName:"li"},"hub.txt"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="hub.txt"',title:'"hub.txt"'},"")))}l.isMDXComponent=!0}}]);