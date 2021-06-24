(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[172],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},726:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"nf-core",title:"nf-core",description:"A community effort to collect a curated set of analysis pipelines built using Nextflow.",sidebar_label:"nf-core",sidebar_position:2},l={unversionedId:"week_04/nf-core",id:"week_04/nf-core",isDocsHomePage:!1,title:"nf-core",description:"A community effort to collect a curated set of analysis pipelines built using Nextflow.",source:"@site/docs/week_04/nf-core.md",sourceDirName:"week_04",slug:"/week_04/nf-core",permalink:"/Applied-Genomics/docs/week_04/nf-core",editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/week_04/nf-core.md",version:"current",sidebar_label:"nf-core",sidebarPosition:2,frontMatter:{id:"nf-core",title:"nf-core",description:"A community effort to collect a curated set of analysis pipelines built using Nextflow.",sidebar_label:"nf-core",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Transcriptomics",permalink:"/Applied-Genomics/docs/week_04/transcriptomics"},next:{title:"ChIP-Seq Preprocessing",permalink:"/Applied-Genomics/docs/week-6"}},s=[{value:"Workflow managers",id:"workflow-managers",children:[]},{value:"What&#39;s nextflow?",id:"whats-nextflow",children:[{value:"DSL2 makes it a lot easier to follow",id:"dsl2-makes-it-a-lot-easier-to-follow",children:[]}]},{value:"nf-core Intro",id:"nf-core-intro",children:[{value:"Testing a pipeline",id:"testing-a-pipeline",children:[]}]},{value:"Finding some data",id:"finding-some-data",children:[{value:"SRA Explorer",id:"sra-explorer",children:[]},{value:"nf-core/fetchngs",id:"nf-corefetchngs",children:[]}]},{value:"Running the nf-core pipeline",id:"running-the-nf-core-pipeline",children:[{value:"Using the nf-core launcher",id:"using-the-nf-core-launcher",children:[]}]},{value:"Download the Multiqc Report",id:"download-the-multiqc-report",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workflow-managers"},"Workflow managers"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," has been getting a little scary. It's great for one off commands\nfor a project, but not so much for full blown data pipelines. There are plenty\nof more modern alternatives."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.commonwl.org/user_guide/index.html"},"CWL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openwdl/wdl"},"WDL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://snakemake.readthedocs.io/en/stable/"},"Snakemake")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nextflow.io/"},"Nextflow"))),(0,o.kt)("h2",{id:"whats-nextflow"},"What's nextflow?"),(0,o.kt)("p",null,"Nextflow is an incredibly powerful and flexible workflow language. It's mainly used for bioinformatics analysis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nextflow",metastring:'title="rnatoy.nf"',title:'"rnatoy.nf"'},'#!/usr/bin/env nextflow\n\n/*\n * Defines some parameters in order to specify the refence genomes\n * and read pairs by using the command line options\n */\nparams.reads = "$baseDir/data/ggal/*_{1,2}.fq"\nparams.annot = "$baseDir/data/ggal/ggal_1_48850000_49020000.bed.gff"\nparams.genome = "$baseDir/data/ggal/ggal_1_48850000_49020000.Ggal71.500bpflank.fa"\nparams.outdir = \'results\'\n\n/*\n * Create the `read_pairs_ch` channel that emits tuples containing three elements:\n * the pair ID, the first read-pair file and the second read-pair file\n */\nChannel\n    .fromFilePairs( params.reads )\n    .ifEmpty { error "Cannot find any reads matching: ${params.reads}" }\n    .set { read_pairs_ch }\n\n/*\n * Step 1. Builds the genome index required by the mapping process\n */\nprocess buildIndex {\n    tag "$genome.baseName"\n\n    input:\n    path genome from params.genome\n\n    output:\n    path \'genome.index*\' into index_ch\n\n    """\n    bowtie2-build --threads ${task.cpus} ${genome} genome.index\n    """\n}\n\n/*\n * Step 2. Maps each read-pair by using Tophat2 mapper tool\n */\nprocess mapping {\n    tag "$pair_id"\n\n    input:\n    path genome from params.genome\n    path annot from params.annot\n    path index from index_ch\n    tuple val(pair_id), path(reads) from read_pairs_ch\n\n    output:\n    set pair_id, "accepted_hits.bam" into bam_ch\n\n    """\n    tophat2 -p ${task.cpus} --GTF $annot genome.index $reads\n    mv tophat_out/accepted_hits.bam .\n    """\n}\n\n/*\n * Step 3. Assembles the transcript by using the "cufflinks" tool\n */\nprocess makeTranscript {\n    tag "$pair_id"\n    publishDir params.outdir, mode: \'copy\'\n\n    input:\n    path annot from params.annot\n    tuple val(pair_id), path(bam_file) from bam_ch\n\n    output:\n    tuple val(pair_id), path(\'transcript_*.gtf\')\n\n    """\n    cufflinks --no-update-check -q -p $task.cpus -G $annot $bam_file\n    mv transcripts.gtf transcript_${pair_id}.gtf\n    """\n}\n')),(0,o.kt)("h3",{id:"dsl2-makes-it-a-lot-easier-to-follow"},"DSL2 makes it a lot easier to follow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nextflow"},'/*\n * Default pipeline parameters. They can be overriden on the command line eg.\n * given `params.foo` specify on the run command line `--foo some_value`.\n */\n\nparams.reads = "$baseDir/data/ggal/*_{1,2}.fq"\nparams.transcriptome = "$baseDir/data/ggal/ggal_1_48850000_49020000.Ggal71.500bpflank.fa"\nparams.outdir = "results"\nparams.multiqc = "$baseDir/multiqc"\n\nlog.info """\\\n R N A S E Q - N F   P I P E L I N E\n ===================================\n transcriptome: ${params.transcriptome}\n reads        : ${params.reads}\n outdir       : ${params.outdir}\n """\n\n// import modules\ninclude { RNASEQ } from \'./modules/rnaseq\'\ninclude { MULTIQC } from \'./modules/multiqc\'\n\n/*\n * main script flow\n */\nworkflow {\n  read_pairs_ch = channel.fromFilePairs( params.reads, checkIfExists: true )\n  RNASEQ( params.transcriptome, read_pairs_ch )\n  MULTIQC( RNASEQ.out, params.multiqc )\n}\n\n/*\n * completion handler\n */\nworkflow.onComplete {\n    log.info ( workflow.success ? "\\nDone! Open the following report in your browser --\x3e $params.outdir/multiqc_report.html\\n" : "Oops .. something went wrong" )\n}\n')),(0,o.kt)("p",null,"The thing that sets Nextflow apart is that it ",(0,o.kt)("em",{parentName:"p"},"pushes")," the data through the\npipeline, rather than ",(0,o.kt)("em",{parentName:"p"},"pulling")," it through like make."),(0,o.kt)("p",null,"We're not going to cover how to write Nextflow scripts, but if you'd like to use\nthem for your project you're welcome to learn."),(0,o.kt)("h2",{id:"nf-core-intro"},"nf-core Intro"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gUM9acK25tQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay;\nclipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A community effort to collect a curated set of analysis pipelines built using\nNextflow.")),(0,o.kt)("p",null,"We have the genomics core, imaging core, etc. core facilities, and nf-core!"),(0,o.kt)("p",null,"Enough talk, let's run it!"),(0,o.kt)("h3",{id:"testing-a-pipeline"},"Testing a pipeline"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nf-co.re/usage/installation"},"nf-core installation docs")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make a new directory in your scratch called ",(0,o.kt)("inlineCode",{parentName:"li"},"rnaseq")," and open it up."),(0,o.kt)("li",{parentName:"ol"},"Install Nextflow")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL get.nextflow.io | bash\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Activate singularity")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ml load singularity\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Run")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nextflow run nf-core/rnaseq -profile test,utd_sysbio\n")),(0,o.kt)("h2",{id:"finding-some-data"},"Finding some data"),(0,o.kt)("p",null,"There are lots of ways to shop for data."),(0,o.kt)("h3",{id:"sra-explorer"},(0,o.kt)("a",{parentName:"h3",href:"https://sra-explorer.info/"},"SRA Explorer")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Search "covid rnaseq"'),(0,o.kt)("li",{parentName:"ol"},"Click the check box next to the runs you want"),(0,o.kt)("li",{parentName:"ol"},'Scroll up and click "Add datasets to collection"'),(0,o.kt)("li",{parentName:"ol"},"Open up your cart"),(0,o.kt)("li",{parentName:"ol"},"Open up the bash script for downloading the fastq files"),(0,o.kt)("li",{parentName:"ol"},"Move the bash script to sysbio"),(0,o.kt)("li",{parentName:"ol"},"Run the script to download the data")),(0,o.kt)("h3",{id:"nf-corefetchngs"},"nf-core/fetchngs"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on the SRA accession number"),(0,o.kt)("li",{parentName:"ol"},"Click on the run"),(0,o.kt)("li",{parentName:"ol"},"Copy the Bioproject"),(0,o.kt)("li",{parentName:"ol"},"Open up run Selector and paste in the bioproject accession number"),(0,o.kt)("li",{parentName:"ol"},'Click on "Accession List" to download the list')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"SRR14607635\nSRR14607636\nSRR14607637\nSRR14607638\nSRR14607639\nSRR14607640\nSRR14607641\nSRR14607642\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Move the file over to sysbio")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scp Downloads/SRR_Acc_List.txt sysbio:/scratch/applied-genomics/cov-t-rnaseq\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Use the nf-core/fetchngs pipeline")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nextflow run nf-core/fetchngs --input SRR_Acc_List.txt -profile utd_sysbio\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA731518&o=acc_s%3Aa"},"SRA Run Selector")),(0,o.kt)("h2",{id:"running-the-nf-core-pipeline"},"Running the nf-core pipeline"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nf-co.re/rnaseq/3.1/usage"},"Refer to the usage section of the pipeline's docs")),(0,o.kt)("h3",{id:"using-the-nf-core-launcher"},"Using the nf-core launcher"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://nf-co.re/launch?"},"Open up the nf-core launch utility"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"rnaseq")," pipeline and click Launch")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the following command-line flags:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"profile: ",(0,o.kt)("inlineCode",{parentName:"li"},"utd_sysbio")),(0,o.kt)("li",{parentName:"ul"},"input: ",(0,o.kt)("inlineCode",{parentName:"li"},"samplesheet.csv")),(0,o.kt)("li",{parentName:"ul"},"email: ",(0,o.kt)("inlineCode",{parentName:"li"},"<netid>@utdallas.edu")),(0,o.kt)("li",{parentName:"ul"},"genome: ",(0,o.kt)("inlineCode",{parentName:"li"},"GRCh37")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file with the ",(0,o.kt)("inlineCode",{parentName:"p"},"nf-params.json")," file it generates."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nf-params.json"',title:'"nf-params.json"'},'{\n  "input": "samplesheet.csv",\n  "email": "<netid>@utdallas.edu",\n  "genome": "GRCh37"\n}\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"We're going to need to create a samplesheet. ",(0,o.kt)("a",{parentName:"li",href:"https://nf-co.re/rnaseq/3.1/usage"},"Please refer to the usage section of the pipeline's docs"))),(0,o.kt)("p",null,"The data has been predownloaded for you to the group scratch directory\n",(0,o.kt)("inlineCode",{parentName:"p"},"/scratch/applied-genomics/")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"cov-t-rnaseq")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="samplesheet.csv"',title:'"samplesheet.csv"'},"sample,fastq_1,fastq_2,strandedness\npatient1_plus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607635_GSM5328143_PS_CD8_T_cells_patient1_Homo_sapiens_RNA-Seq.fastq.gz,,forward\npatient2_plus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607636_GSM5328144_PS_CD8_T_cells_patient2_Homo_sapiens_RNA-Seq.fastq.gz,,forward\npatient3_plus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607637_GSM5328145_PS_CD8_T_cells_patient3_Homo_sapiens_RNA-Seq.fastq.gz,,forward\npatient4_plus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607638_GSM5328146_PS_CD8_T_cells_patient4_Homo_sapiens_RNA-Seq.fastq.gz,,forward\npatient1_minus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607639_GSM5328147_PS-_CD8_T_cells_patient1_Homo_sapiens_RNA-Seq.fastq.gz,,forward\npatient2_minus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607640_GSM5328148_PS-_CD8_T_cells_patient2_Homo_sapiens_RNA-Seq.fastq.gz,,forward\npatient3_minus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607641_GSM5328149_PS-_CD8_T_cells_patient3_Homo_sapiens_RNA-Seq.fastq.gz,,forward\npatient4_minus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607642_GSM5328150_PS-_CD8_T_cells_patient4_Homo_sapiens_RNA-Seq.fastq.gz,,forward\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you can't get the formatting right for whatever reason there's a backup samplesheet at ",(0,o.kt)("inlineCode",{parentName:"p"},"/scratch/applied-genomics/cov-t-rnaseq/samplesheet.csv")," just need to update the input path"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nf-params.json"',title:'"nf-params.json"'},'{\n  "input": "samplesheet.csv",\n  "email": "<netid>@utdallas.edu",\n  "genome": "GRCh37"\n}\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Start ",(0,o.kt)("inlineCode",{parentName:"li"},"screen")," which is a screen manager")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"login$ screen\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Useful screen commands"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start a new screen session:\nscreen\n\n# Start a new named screen session:\nscreen -S session_name\n\n# Reattach to an open screen:\nscreen -r session_name\n\n# Detach from inside a screen:\n    Ctrl + A, D\n\n# Kill the current screen session:\n    Ctrl + A, K\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Launch the pipeline")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nextflow run nf-core/rnaseq -r 3.2 -params-file nf\n")),(0,o.kt)("p",null,"The pipeline should start up, and email you when it's finished!"),(0,o.kt)("h2",{id:"download-the-multiqc-report"},"Download the Multiqc Report"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open up the file explorer and navigate to\n",(0,o.kt)("inlineCode",{parentName:"p"},"results/multiqc/star_salmon/multiqc_report.html")," and ",(0,o.kt)("em",{parentName:"p"},"right-click")," the html\nfile and select Download.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now that the multiqc report is on your local computer open it up in a web\nbrowser. Preferably next to the ",(0,o.kt)("a",{parentName:"p",href:"https://nf-co.re/rnaseq/3.2/output"},"pipeline's output\ndocs"),"."),(0,o.kt)("p",{parentName:"li"},"Some files of note:\n",(0,o.kt)("inlineCode",{parentName:"p"},"results/salmon/*.tsv"),": Various gene and transcript counts\n",(0,o.kt)("inlineCode",{parentName:"p"},"results/star_salmon/*.bam"),": Aligned bam files"))))}c.isMDXComponent=!0}}]);