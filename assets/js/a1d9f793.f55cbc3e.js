(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[4743],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8965:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a={id:"env",title:"Environment Setup",description:"",sidebar_label:"Environment Setup",sidebar_position:1},l={unversionedId:"week_01/env",id:"week_01/env",isDocsHomePage:!1,title:"Environment Setup",description:"",source:"@site/docs/week_01/environment_setup.md",sourceDirName:"week_01",slug:"/week_01/env",permalink:"/Applied-Genomics/docs/week_01/env",editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/week_01/environment_setup.md",version:"current",sidebar_label:"Environment Setup",sidebarPosition:1,frontMatter:{id:"env",title:"Environment Setup",description:"",sidebar_label:"Environment Setup",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/Applied-Genomics/docs/overview"},next:{title:"Intro to Unix",permalink:"/Applied-Genomics/docs/week_01/unix"}},s=[{value:"This is not a programming class; this is a \u201cworkflows\u201d class",id:"this-is-not-a-programming-class-this-is-a-workflows-class",children:[]},{value:"Why reproducible Research?",id:"why-reproducible-research",children:[{value:"Computing",id:"computing",children:[]},{value:"Money",id:"money",children:[]},{value:"Time",id:"time",children:[]}]},{value:"How are we going to be more Reproducible?",id:"how-are-we-going-to-be-more-reproducible",children:[]},{value:"How big of a problem is this?",id:"how-big-of-a-problem-is-this",children:[]},{value:"Logging into Sysbio",id:"logging-into-sysbio",children:[{value:"Connecting Remotely",id:"connecting-remotely",children:[]},{value:"Setting up VS Code",id:"setting-up-vs-code",children:[]},{value:"Login using Remote-SSH",id:"login-using-remote-ssh",children:[]}]},{value:"Biostar Handbook: 8. Installing on a Computer Cluster",id:"biostar-handbook-8-installing-on-a-computer-cluster",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"this-is-not-a-programming-class-this-is-a-workflows-class"},"This is not a programming class; this is a \u201cworkflows\u201d class"),(0,r.kt)("h2",{id:"why-reproducible-research"},"Why reproducible Research?"),(0,r.kt)("p",null,"To reduce wasted resources."),(0,r.kt)("h3",{id:"computing"},"Computing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the right tool for the job."),(0,r.kt)("li",{parentName:"ul"},"Running computational intensive things on your laptop is too little."),(0,r.kt)("li",{parentName:"ul"},"Running jobs that are precise wastes compute time in the cluster that you or\nsomeone else could be using for other things.")),(0,r.kt)("h3",{id:"money"},"Money"),(0,r.kt)("p",null,"Funding runs out. Waiting for results to come back, or reproducing old results\nrequires time of highly trained individuals, which is expensive."),(0,r.kt)("h3",{id:"time"},"Time"),(0,r.kt)("p",null,"Save time for your future self, and for researchers who come after you."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What if you're about to graduate and your hard-drive dies(The results are too\nlarge for a backup on a usb)? How quickly could you reproduce that work?"),(0,r.kt)("li",{parentName:"ul"},"How would you work with a new undergraduate in your lab?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How would they make substantial contributions?"),(0,r.kt)("li",{parentName:"ul"},"How would could you trust them to work on your research without fear that\nthey may break something?"))),(0,r.kt)("li",{parentName:"ul"},"When you go to write a manuscript, how would you share your code?")),(0,r.kt)("h2",{id:"how-are-we-going-to-be-more-reproducible"},"How are we going to be more Reproducible?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoiding homegrown solutions, instead favoring community curated efforts"),(0,r.kt)("li",{parentName:"ul"},"Documentation"),(0,r.kt)("li",{parentName:"ul"},"Version Control"),(0,r.kt)("li",{parentName:"ul"},"Utilizing build systems")),(0,r.kt)("h2",{id:"how-big-of-a-problem-is-this"},"How big of a problem is this?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/leipzig/awesome-reproducible-research"},"Awesome Reproducible\nResearch")),(0,r.kt)("h2",{id:"logging-into-sysbio"},"Logging into Sysbio"),(0,r.kt)("p",null,"Just to check that everyone has access and get any issues out of the way!"),(0,r.kt)("h3",{id:"connecting-remotely"},"Connecting Remotely"),(0,r.kt)("p",null,"Utilize the UTD VPN Service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.utdallas.edu/oit/vpn/"},"OIT support link")),(0,r.kt)("li",{parentName:"ul"},"Enroll in NetIDplus"),(0,r.kt)("li",{parentName:"ul"},"Install the Cisco AnyConnect VPN Software"),(0,r.kt)("li",{parentName:"ul"},"Connect to the Cisco AnyConnect VPN System")),(0,r.kt)("h3",{id:"setting-up-vs-code"},"Setting up ",(0,r.kt)("a",{parentName:"h3",href:"https://code.visualstudio.com/"},"VS Code")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/#alt-downloads"},"correct install for your\nplatform")),(0,r.kt)("li",{parentName:"ol"},"Install"),(0,r.kt)("li",{parentName:"ol"},"Search in extensions for ",(0,r.kt)("inlineCode",{parentName:"li"},"Functional Genomics"))),(0,r.kt)("h3",{id:"login-using-remote-ssh"},"Login using Remote-SSH"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Click the green button"),(0,r.kt)("li",{parentName:"ol"},"Connect to Host..."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Add new ssh host")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ssh <netid>@sysbio.utdallas.edu")," (Or see ",(0,r.kt)("a",{parentName:"li",href:"https://oit.utdallas.edu/helpdesk/kb/?id=9472349b881c17a0a06f1944a4adda29f9761a1dc8"},"this guide to\nconnect"),"\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"giant.utdallas.edu")," if we haven't gotten accounts on sysbio yet)"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Linux")," as the OS of the remote host"),(0,r.kt)("li",{parentName:"ol"},"Password is your usual UTD password"),(0,r.kt)("li",{parentName:"ol"},"Open up a terminal ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+Shift+~")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sinfo")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ls"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you're on windows you may need to follow if you're getting an error about\n",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/60335069/vscode-remote-connection-error-the-process-tried-to-write-to-a-nonexistent-pipe"},"vscode remote connection error the process tried to write to a nonexistent\npipe"),",\nyou need to set your ssh config manually."))),(0,r.kt)("p",null,"There are plenty of other ways to login remotely. Here are some alternatives for you to play around with:"),(0,r.kt)("p",null,"Windows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab"},"Windows Terminal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mobaxterm.mobatek.net/"},"Mobaxterm"))),(0,r.kt)("p",null,"MacOS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://iterm2.com/downloads.html"},"iTerm2"))),(0,r.kt)("h2",{id:"biostar-handbook-8-installing-on-a-computer-cluster"},(0,r.kt)("a",{parentName:"h2",href:"https://www.biostarhandbook.com/cluster-setup.html#cluster-setup"},"Biostar Handbook: 8. Installing on a Computer Cluster")),(0,r.kt)("p",null,"We'll be following the text book for this section!"),(0,r.kt)("p",null,"You'll need to run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"module load anaconda3\nconda config --add channels defaults\nconda config --add channels bioconda\nconda config --add channels conda-forge\n\ncurl http://data.biostarhandbook.com/install/conda.txt | xargs conda create -n biostars -q -y\n")),(0,r.kt)("h1",{id:"assignment-1"},"Assignment 1"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/join"},"Create a GitHub account")," and submit your username\nthrough elearning."))}c.isMDXComponent=!0}}]);