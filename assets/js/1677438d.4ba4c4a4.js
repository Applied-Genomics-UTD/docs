(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[202],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},865:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s={},l={unversionedId:"week_03/assignment_03",id:"week_03/assignment_03",isDocsHomePage:!1,title:"Assignment 3",description:"Summary: Create a counts file for SARS\u2011CoV\u20112 alignment and genes.",source:"@site/docs/week_03/assignment_03.md",sourceDirName:"week_03",slug:"/week_03/assignment_03",permalink:"/Applied-Genomics/docs/week_03/assignment_03",editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/week_03/assignment_03.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"High Performance Computing",permalink:"/Applied-Genomics/docs/week_03/hpc"},next:{title:"Transcriptomics",permalink:"/Applied-Genomics/docs/week_04/transcriptomics"}},i=[],c={toc:i};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Summary: Create a counts file for SARS\u2011CoV\u20112 alignment and genes."),(0,o.kt)("p",null,"Things that will be checked for:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make rules to download the data (",(0,o.kt)("strong",{parentName:"li"},"2 points"),")\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nf-core/test-datasets/raw/modules/data/genomics/sarscov2/genome/genome.gtf"},"https://github.com/nf-core/test-datasets/raw/modules/data/genomics/sarscov2/genome/genome.gtf"),(0,o.kt)("a",{parentName:"li",href:"https://github.com/nf-core/test-datasets/raw/modules/data/genomics/sarscov2/illumina/bam/test.paired_end.sorted.bam"},"https://github.com/nf-core/test-datasets/raw/modules/data/genomics/sarscov2/illumina/bam/test.paired_end.sorted.bam"))),(0,o.kt)("p",null,"You'll need to use the -O flag to change the name of the output file with wget. Here's one of the rules as an example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Makefile"},"sars_genome.gtf:\n    wget -O cov_genome.gtf https://github.com/nf-core/test-datasets/raw/modules/data/genomics/sarscov2/genome/genome.gtf\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add a second batch script (",(0,o.kt)("inlineCode",{parentName:"li"},"submit_cov.sh")," works) to run featurecounts with the sarscov2 data (",(0,o.kt)("strong",{parentName:"li"},"2 points"),")")),(0,o.kt)("p",null,"You'll need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"featureCounts -t gene ...")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"featureCounts -t exon ...")," because there aren't any exons in the cov_genome.gtf"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'Create 3 new make rules, one to run the "test" batch job, one to run the "sarscov2" data, and at the top an all rule, that should call the download targets and then the job targets like below (',(0,o.kt)("strong",{parentName:"li"},"4 points"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Makefile"},"all: download_data featurecounts\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Submit your cov_counts.txt file on eLearning (",(0,o.kt)("strong",{parentName:"li"},"2 points"),")")),(0,o.kt)("p",null,"Choose one only one bonus question(if any), you won't get extra credit for doing both."),(0,o.kt)("p",null,"Bonus 1 (",(0,o.kt)("strong",{parentName:"p"},"5 points"),"):"),(0,o.kt)("p",null,"Generalize your make rules for feature counts with wildcards"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://web.mit.edu/gnu/doc/html/make_4.html#SEC22"},"http://web.mit.edu/gnu/doc/html/make_4.html#SEC22"))),(0,o.kt)("p",null,"Bonus 2 (",(0,o.kt)("strong",{parentName:"p"},"5 points"),"):"),(0,o.kt)("p",null,"Use slurm job arrays to use one only one batch script for both of the featureCount runs. Some resources(note this wasn't covered in class):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Functional-Genomics-Lab/useful-scripts/blob/e377885121dc62116c07d7f2cb32fbaac7935be4/bwa.sh#L3"},"https://github.com/Functional-Genomics-Lab/useful-scripts/blob/e377885121dc62116c07d7f2cb32fbaac7935be4/bwa.sh#L3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.biostars.org/p/338078/"},"https://www.biostars.org/p/338078/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://slurm.schedmd.com/job_array.html"},"https://slurm.schedmd.com/job_array.html"))),(0,o.kt)("p",null,"You can use -t gene with the homo_sapians data set we used in class as well."))}u.isMDXComponent=!0}}]);